// Receives a finished reading from the page and stores it in this site's Netlify Blobs store.
// No external setup. Env var: COACH_SLUG (must match coach.slug in config.js).
const { getStore, connectLambda } = require("@netlify/blobs");
const crypto = require("crypto");
const json = (status, body) => ({ statusCode: status, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
const str = (v, n) => (v === undefined || v === null || v === "") ? null : String(v).trim().slice(0, n);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return json(405, { error: "POST only" });
  try { if (event.blobs) connectLambda(event); } catch (e) {}
  const COACH_SLUG = process.env.COACH_SLUG;
  if (!COACH_SLUG) return json(500, { error: "Site is not configured. Set COACH_SLUG." });

  let p;
  try { p = JSON.parse(event.body || "{}"); } catch (e) { return json(400, { error: "Bad JSON" }); }
  if (p.coach !== COACH_SLUG) return json(403, { error: "Wrong coach" });
  const lead = p.lead || {};
  if (!str(lead.name, 120)) return json(400, { error: "Name is required" });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(lead.email || ""))) return json(400, { error: "Email is required" });
  if (String(lead.phone || "").replace(/\D/g, "").length < 8) return json(400, { error: "Phone number is required" });

  const created_at = new Date().toISOString();
  const id = `${created_at.replace(/[-:.TZ]/g, "")}-${crypto.randomUUID().slice(0, 8)}`;   // sorts by time
  const known = ["name", "email", "phone", "channel", "instagram"];
  const row = {
    id, created_at,
    coach_id: COACH_SLUG,
    assessment_id: str(p.assessment, 60),
    assessment_title: str(p.assessment_title, 120),
    name: str(lead.name, 120),
    email: String(lead.email).trim().toLowerCase().slice(0, 160),
    phone: str(lead.phone, 40),
    channel: lead.channel === "whatsapp" ? "whatsapp" : "text",
    instagram: lead.instagram ? String(lead.instagram).trim().replace(/^@/, "").slice(0, 80) : null,
    energy: typeof p.energy === "number" ? p.energy : null,
    scores: p.scores && typeof p.scores === "object" ? p.scores : {},
    drift: str(p.drift, 40),
    drift_label: str(p.drift_label, 60),
    result: str(p.result, 10),
    result_label: str(p.result_label, 80),
    stage: str(p.stage, 40),
    stage_label: str(p.stage_label, 60),
    lead_extra: Object.fromEntries(Object.entries(lead).filter(([k]) => !known.includes(k)).map(([k, v]) => [k, String(v).slice(0, 200)])),
    answers: Array.isArray(p.answers) ? p.answers.slice(0, 60) : [],
    actions: Array.isArray(p.actions) ? p.actions.slice(0, 5) : [],
    causes: Array.isArray(p.causes) ? p.causes.slice(0, 30).map(c => String(c).slice(0, 120)) : [],
    meta: p.meta || {}
  };

  try {
    const store = getStore("leads");
    await store.setJSON(id, row);
  } catch (e) { return json(502, { error: "Could not save the lead: " + String(e.message || e) }); }
  return json(200, { ok: true, id });
};
