// Anonymous funnel tracking. The page sends small batches of step events; each visit (session) is one
// JSON document in the "events" Blobs store, keyed s/<YYYY-MM-DD of first event>/<session id>.
// No names, emails or phone numbers are ever sent here. Env var: COACH_SLUG.
const { getStore, connectLambda } = require("@netlify/blobs");
const ok = { statusCode: 204, headers: { "Cache-Control": "no-store" }, body: "" };
const bad = (c, m) => ({ statusCode: c, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ error: m }) });
const clean = (v, n) => String(v == null ? "" : v).replace(/[^\w .:/@+\-·]/g, "").slice(0, n);

// Every step name the page may send. Anything else is dropped.
const STEPS = new Set(["land","start","gate_view","gate_submit","results_view","cause_open","chip_click","tree_view",
  "recap_view","call_view","cal_view","book_click","booked","pdf","copy","retake","video_result","video_closing"]);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return bad(405, "POST only");
  try { if (event.blobs) connectLambda(event); } catch (e) {}
  const COACH_SLUG = process.env.COACH_SLUG;
  let p; try { p = JSON.parse(event.body || "{}"); } catch (e) { return bad(400, "Bad JSON"); }
  if (!COACH_SLUG || p.coach !== COACH_SLUG) return bad(403, "Wrong coach");
  const sid = clean(p.sid, 40), vid = clean(p.vid, 40);
  if (!/^[\w-]{8,40}$/.test(sid) || !Array.isArray(p.ev) || !p.ev.length) return bad(400, "Bad batch");
  const day = /^\d{4}-\d{2}-\d{2}$/.test(p.day || "") ? p.day : new Date().toISOString().slice(0, 10);

  const store = getStore("events");
  const key = `s/${day}/${sid}`;
  let s = null;
  try { s = await store.get(key, { type: "json" }); } catch (e) {}
  const now = new Date().toISOString();
  s = s || { sid, vid, day, first: now, src: clean(p.src, 60) || "direct", dev: clean(p.dev, 10), steps: {}, q: 0, causes: {}, chips: 0 };
  s.last = now;

  for (const ev of p.ev.slice(0, 80)) {
    const e = clean(ev && ev.e, 20);
    if (e === "q") { const n = Math.max(0, Math.min(40, parseInt(ev.n, 10) || 0)); if (n > s.q) s.q = n; continue; }
    if (!STEPS.has(e)) continue;
    if (!s.steps[e]) s.steps[e] = ev.t ? clean(ev.t, 30) : now;
    if (e === "results_view") { s.result = clean(ev.r, 6); s.stage = clean(ev.st, 12); s.energy = Math.max(0, Math.min(100, parseInt(ev.en, 10) || 0)); }
    if (e === "cause_open" && ev.k) { const k = clean(ev.k, 4); s.causes[k] = (s.causes[k] || 0) + 1; }
    if (e === "chip_click") s.chips++;
  }
  try { await store.setJSON(key, s); } catch (e) { return bad(502, "Could not save"); }
  return ok;
};
