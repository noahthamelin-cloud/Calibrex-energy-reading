/* =====================================================================
   INTERACTIVE CLIENT ACQUISITION  |  Coach config
   Coach: CalibreX (Etienne Dusseault)  ·  calibrex.bio

   Everything a person reads lives in this file. The engine (index.html)
   holds no coach content. House rules for any text in here:
   - No em dashes. No hype words (unlock, supercharge, biohack, elite, 10x).
   - No dosing, no compounds, no medical claims. Basics only.
   - Clinical, second person, short sentences. Results are "in range",
     never "transformed".
   ===================================================================== */
window.ICA = {

  coach: {
    slug: "calibrex",                       // must equal COACH_SLUG on Netlify
    name: "CalibreX",
    owner: "Etienne",
    mark: "assets/brand/logo.svg",
    wordmark: "assets/brand/wordmark.svg",
    site: "https://calibrex.bio",
    tagline: "Precision Human Calibration"
  },

  /* The one offer: the fifteen-minute call. Cal.com is embedded on the results page
     with the person's name, email and reading already filled in. */
  booking: {
    calLink: "calibre-x/15min",
    url: "https://cal.com/calibre-x/15min"
  },

  /* Optional. Paste a YouTube or Vimeo link when the VSL is recorded; empty hides it. */
  video: { url: "", title: "A word from Etienne" },

  /* The free download on the results page. Empty url hides it. */
  download: {
    url: "assets/CalibreX-Daily-Routine.pdf",
    code: "CAL-07 · FIELD NOTES",
    title: "My daily routine",
    body: "Etienne's day from 06:30 to 21:00, the over-the-counter stacks behind it, and why each one is there.",
    button: "Download the PDF"
  },

  /* ---------- Lead capture: between the last question and the reading ---------- */
  gate: {
    eyebrow: "CAL-01 · READING COMPLETE",
    heading: "Your reading is ready.",
    body: "Where should we send a copy? Your energy score, your five drivers and three actions for tomorrow are on the next screen.",
    fields: [
      { key: "name",      label: "First name",      type: "text",  required: true,  autocomplete: "given-name" },
      { key: "email",     label: "Email",           type: "email", required: true,  autocomplete: "email" },
      { key: "phone",     label: "Mobile number",   type: "tel",   required: true,  autocomplete: "tel", hint: "Include your country code, for example +1 or +44." },
      { key: "channel",   label: "Best way to reach you", type: "choice", required: true, options: [["text","Text"],["whatsapp","WhatsApp"]] },
      { key: "instagram", label: "Instagram",       type: "text",  required: false, autocomplete: "off", prefix: "@" }
    ],
    consent: "By continuing you agree that Etienne at CalibreX can contact you about your reading.",
    button: "Show my reading",
    note: "Your answers go to Etienne only. Nothing is shared or sold."
  },

  assessment: {
    id: "energy",
    code: "CAL-01 · ENERGY READING",
    title: "The Energy Reading",
    headline: ["Where is your", "energy going?"],
    lede: "Fifteen questions. A reading of your energy and the five drivers behind it, measured against the optimal band.",
    meta: ["15 questions", "3 minutes", "Private"],
    privacy: "Self-reported, not a diagnosis. Your answers go to Etienne only.",

    /* Band edges on the 0 to 100 scale. In range at 75 and up. */
    band: { optimal: 75, drifting: 50 },
    status: { optimal: "In range", drifting: "Drifting", out: "Out of range" },
    /* Headline energy = this share of the two energy questions + the rest from the five drivers. */
    energyWeight: 0.5,

    /* ---------- Questions ----------
       scenario: options are [text, stage or null]. Stage options tag the lead for Etienne.
       scale: 1 to 5 into a dimension. ends = [left label, right label]; left is always the worse end. */
    questions: [
      { type: "scenario", id: "moment", part: "P-00 · THE MOMENT", q: "Which of these sounds most like you?",
        hint: "Pick the closest. Nobody gets all of them.",
        opts: [
          ["It's 14:30, I'm fading at my desk and the fourth coffee isn't hitting.", null],
          ["Third snooze, after eight hours on the tracker. It's never enough.", null],
          ["03:10, wide awake again, staring at the ceiling.", null],
          ["Saturday on the couch, recovering from the week.", null],
          ["I snapped at someone at home over nothing, and felt awful after.", null],
          ["Nothing broke. It just slid, one busy quarter at a time.", null]
        ] },

      { type: "scale", key: "energy", part: "06:30 · ENERGY", q: "How do you feel in the first hour after you wake up?", ends: ["Wrecked", "Ready to go"] },
      { type: "scale", key: "energy", part: "14:30 · ENERGY", q: "How is your energy mid-afternoon on a normal workday?", ends: ["Running on fumes", "Same as 9 a.m."] },

      { type: "scale", key: "sleep", part: "03:10 · SLEEP", q: "How often do you wake in the night and struggle to get back to sleep?", ends: ["Most nights", "Rarely"] },
      { type: "scale", key: "sleep", part: "SNOOZE · SLEEP", q: "After a full night in bed, how rested do you actually feel?", ends: ["Never enough", "Fully rested"] },

      { type: "scale", key: "stress", part: "17:30 · STRESS LOAD", q: "How often do you finish work still wired or on edge?", ends: ["Most days", "Rarely"] },
      { type: "scale", key: "stress", part: "20:30 · STRESS LOAD", q: "By the evening, how much patience is left for the people at home?", ends: ["Nothing left", "Plenty"] },

      { type: "scale", key: "recovery", part: "SAT · RECOVERY", q: "What do your weekends usually go to?", ends: ["Recovering", "Doing things"] },
      { type: "scale", key: "recovery", part: "18:00 · RECOVERY", q: "After a hard workout or a heavy week, how fast do you bounce back?", ends: ["Takes days", "Next morning"] },

      { type: "scale", key: "fuel", part: "CUPS · FUEL", q: "How much does your day depend on caffeine?", ends: ["Can't function without it", "Optional"] },
      { type: "scale", key: "fuel", part: "MEALS · FUEL", q: "How steady are your meals and water through the day?", ends: ["Skipped and grabbed", "Regular"] },

      { type: "scale", key: "focus", part: "AM · FOCUS", q: "How long can you hold deep focus before your mind drifts?", ends: ["Minutes", "Hours"] },
      { type: "scale", key: "focus", part: "PM · FOCUS", q: "How often does the hard call get pushed to tomorrow?", ends: ["Most days", "Rarely"] },

      { type: "scenario", id: "tried", part: "SHELF · WHAT YOU'VE TRIED", q: "What have you tried so far?",
        opts: [
          ["Honestly, not much. Coffee and pushing through.", "starting"],
          ["A shelf of supplements and whatever the last podcast recommended.", "guessing"],
          ["Bloodwork, training, diet, sleep hygiene. All of it, and still flat.", "plateaued"]
        ] },
      { type: "scenario", id: "labs", part: "LAB · BLOODWORK", q: "The last time you had bloodwork, what happened?",
        opts: [
          ["I haven't had any in a while.", "starting"],
          ["I had it done but I'm not sure what most of it meant.", "guessing"],
          ["Everything came back normal. I don't feel normal.", "plateaued"]
        ] }
    ],

    /* The five drivers. Order breaks ties for primary drift (fundamentals first). */
    driverOrder: ["sleep", "stress", "recovery", "fuel", "focus"],
    drivers: {
      sleep: {
        label: "Sleep", code: "D-01",
        headline: ["Sleep is draining", "your energy."],
        body: "Your nights are not paying back what your days spend. Hours in bed are not the same as sleep that restores, and when sleep drifts, every other driver follows it down.",
        start: "A calibration here starts with sleep: light timing, the wind-down, and what your bloodwork says about recovery.",
        actions: [
          ["06:30", "Get outside within the first hour and look at the sunrise for fifteen minutes."],
          ["07:00", "Eat breakfast outside, in the light, before the inbox."],
          ["21:00", "Screens closed at nine. Slow breathing for five minutes instead of one more email."]
        ],
        outcome: ["06:10", "Up before the alarm", "Awake because you are done sleeping, not because the phone said so. The first hour of the day is yours."],
        opener: "night",
        area: "Stack 04 · Sleep"
      },
      stress: {
        label: "Stress Load", code: "D-02",
        headline: ["Stress load is draining", "your energy."],
        body: "Your system is running hot after the work is done. When stress never switches off, sleep and patience pay for it, and the people closest to you get what is left.",
        start: "A calibration here starts with the nervous system: when you switch off, how you wind down, and what your bloodwork says about the load.",
        actions: [
          ["AM", "Protect the first hours for deep work, before messages pull you into everyone else's day."],
          ["SUNSET", "Get outside for sunset. On your feet, no phone, ten minutes."],
          ["21:00", "Wind down on purpose: screens closed, slow breathing, lights low."]
        ],
        outcome: ["20:30", "Something left at dinner", "Patience for the people who matter, at the end of a full day, with enough in reserve to actually be there."],
        opener: "evening after work",
        area: "Stack 11 · Cortisol / nervous system"
      },
      recovery: {
        label: "Recovery", code: "D-03",
        headline: ["Recovery is draining", "your energy."],
        body: "The week takes more than your body can give back by Monday. Training gets cut first, weekends become repayment, and the gap compounds quietly.",
        start: "A calibration here starts with recovery: movement, heat, food around training, and what your bloodwork says about repair.",
        actions: [
          ["NOON", "Move in the middle of the day. Thirty minutes of bodyweight work counts."],
          ["PM", "Sit in a sauna or a hot bath once this week, if you have access to one."],
          ["DINNER", "Make dinner high in carbs, medium protein, lower fat, especially on training days."]
        ],
        outcome: ["18:00", "The workout is still in you", "Training goes back to being the thing you want to do, because recovery keeps up with what you ask of it."],
        opener: "weekend",
        area: "Stack 07 / 09 · Recovery, stamina"
      },
      fuel: {
        label: "Fuel", code: "D-04",
        headline: ["Fuel is draining", "your energy."],
        body: "Caffeine is doing the job food, water and salt should be doing. It borrows energy from later in the day, and the afternoon is where you pay it back.",
        start: "A calibration here starts with fuel: meals, hydration, electrolytes, caffeine timing, and what your bloodwork says about metabolism.",
        actions: [
          ["07:00", "Eat a real breakfast before the inbox. Something warm, with carbs and protein."],
          ["07:30", "One coffee, with food. Not on an empty stomach."],
          ["11:00", "Sip a litre of juice or water with a pinch of sea salt through the late morning."]
        ],
        outcome: ["14:00", "No wall", "Two o'clock is just another hour. The four o'clock meeting gets the same person the nine o'clock did."],
        opener: "morning",
        area: "Stack 01 / 05 · Metabolic, electrolytes"
      },
      focus: {
        label: "Focus", code: "D-05",
        headline: ["Focus is draining", "your energy."],
        body: "Your attention is spread across the whole day instead of spent where it counts. The hard work gets the tired hours, and the hard calls slide.",
        start: "A calibration here starts with focus: when your best hours fall, how they are protected, and what your bloodwork says about the rest.",
        actions: [
          ["06:30", "Morning light before the screen: fifteen minutes outside first."],
          ["AM", "Do the hardest thinking in the first few hours. Messages after."],
          ["PM", "Keep the afternoon lighter on purpose: calls, admin and content after lunch."]
        ],
        outcome: ["14:00", "The hard call happens today", "Not pushed to tomorrow. The afternoon gets the same person the morning did."],
        opener: "afternoon",
        area: "Stack 10 · Cognition"
      }
    },

    /* When every driver reads in range. */
    inRange: {
      headline: ["Your drivers read", "in range."],
      body: "On your own answers, sleep, stress, recovery, fuel and focus all sit in the optimal band. If your energy still feels off, that is the gap a self-reported reading can't close. Bloodwork can.",
      actions: [
        ["06:30", "Keep the morning light: fifteen minutes outside within the first hour."],
        ["NOON", "Keep moving in the middle of the day."],
        ["21:00", "Keep the wind-down: screens closed at nine."]
      ],
      outcome: ["06:10", "Up before the alarm", "Awake because you are done sleeping, with something to spend on the first hour."]
    },

    /* Stage: from the last two questions. Shown to the person as one line; Etienne sees the call angle. */
    stages: {
      starting:  { label: "Starting",  line: "You haven't really tried to fix this yet. That is good news: the basics move the most from here.", angle: "Basics first. Light, food, sleep, stress." },
      guessing:  { label: "Guessing",  line: "You've been spending on guesses. The next step is knowing which ones are doing anything, measured against your bloodwork.", angle: "Audit what they take. Bloodwork to show what's working." },
      plateaued: { label: "Plateaued", line: "You've done the basics and your labs say normal. Flat energy on normal labs is the gap between normal and optimal.", angle: "Advanced. Bloodwork-led, optimal ranges, targeted work." }
    },

    results: {
      code: "CAL-01 · ENERGY READING",
      hello: "{name}, your reading.",
      energyKey: "ENERGY",
      driversCode: "FIG. 01 · DRIVERS",
      driversTitle: "Five drivers",
      driversNote: "Green band is optimal",
      driftCode: "CAL-02 · PRIMARY DRIFT",
      actionsCode: "CAL-03 · TOMORROW",
      actionsTitle: ["Three things", "for tomorrow."],
      actionsNote: "From Etienne's own day",
      outcomeCode: "WHAT IN RANGE LOOKS LIKE",
      closeCode: "CAL-04 · THE CALL",
      closeTitle: ["This reading is", "self-reported."],
      closeBody: "A real calibration is measured against your bloodwork. Fifteen minutes with Etienne to find out whether there is a better version of this.",
      guarantee: "On the Six-Month Calibration your energy is tracked from a starting baseline. If your energy in days 24 to 30 isn't above it, the protocol is rebuilt and a month is added at no extra cost.",
      bookButton: "Book the 15-minute call",
      bookNote: "Fifteen minutes · No obligation",
      retake: "Retake",
      copy: "Copy my reading"
    },

    footer: "Information on this page is for educational purposes only and does not constitute medical advice. Self-reported reading, not a diagnosis. Consult your healthcare provider for personalised medical guidance."
  },

  /* ---------- Admin: the opener written into each Text / WhatsApp / email button ---------- */
  admin: {
    opener: "Hey {name}, Etienne here from CalibreX. Saw your energy reading come through, {drift} was the biggest drain. Quick question: what does a normal {when} look like for you right now?",
    openerInRange: "Hey {name}, Etienne here from CalibreX. Saw your energy reading come through. Your drivers read in range on paper, which usually means the answer is in the bloodwork. What made you take it?",
    emailSubject: "Your CalibreX energy reading"
  }
};
