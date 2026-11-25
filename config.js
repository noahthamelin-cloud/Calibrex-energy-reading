/* =====================================================================
   INTERACTIVE CLIENT ACQUISITION  |  Coach config
   Coach: CalibreX (Etienne Dusseault)  ·  calibrex.bio

   Everything a person reads lives in this file. The engine (index.html) holds no coach content.

   Voice and writing rules (from Etienne's build brief, Nov 2026). Apply to every edit, by hand or by a model:
   - First person singular: "I", "me", "my day". Never "Etienne", "we", "our team" or "CalibreX recommends".
   - Talk to one person: "you", "your dinner", "your last panel". Contractions where speech has them.
   - Say what you would do ("I'd test the physical causes first"), never "it is recommended".
   - Say so when something is unknown or thinly researched, once, in plain words. No invented biography.
   - Give the fact and stop: a time on the clock, a food, a number of days, a named test. No closing line that restates.
   - Keep out: negative parallelism ("not X, it's Y"), forced threes, "serves as", trailing "-ing" analysis,
     inflated significance, "studies show", hedging stacks, em dashes, chat residue, hype words.
   - Words not to use: additionally, align with, boasts, crucial, deep dive, delve, enhance, foster, garner,
     highlight (verb), interplay, intricate, key (adjective), landscape, leverage, meticulous, multifaceted, pivotal,
     prioritize, robust, showcase, tapestry, testament, underscore, valuable, vibrant, journey, holistic, optimize your.
   - Once a thing has a name, keep it: the reading stays the reading.
   - Sentence case in source text (CSS uppercases the display face). No bold in running text, no emoji, no exclamation marks.
   - No placeholders shipped. No amounts or doses on the page. Nothing says "medically supervised".
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
  /* Etienne's VSLs (YouTube, unlisted, portrait). Playlist "CalibreX", Nov 25 2026.
     results: one video per result and stage, shown under the reading. 06B has one video for every stage.
     closing: the VSL shown right before the booking calendar, for everyone.
     Swap any ID to change a video; an empty value hides that video. */
  video: {
    resultTitle: "On your result",
    closingTitle: "Before you book",
    results: {
      "01A": { starting: "nfpL5oax8IU", guessing: "slh0f7N29sI", plateaued: "8aZ9K3EzL0M" },
      "01B": { starting: "BF4XZivJDB8", guessing: "MpBaEEQZbF8", plateaued: "rjU2bIhHHXI" },
      "02A": { starting: "t1iwhcIDIsU", guessing: "T2HQc6BnK8w", plateaued: "HTqryNv8rCc" },
      "02B": { starting: "Mj4N2i1QN74", guessing: "i8hHcEVgh3k", plateaued: "237uLnPhNLc" },
      "03A": { starting: "yWAAEOkADY0", guessing: "gXWvzSTamUU", plateaued: "Iu7AhY_-1Ro" },
      "03B": { starting: "aiHUsRT_BMc", guessing: "GVWDZglfrOk", plateaued: "mKiDaiAa3o4" },
      "04A": { starting: "ZG52EYDD93o", guessing: "_2tgAqqiv_I", plateaued: "kOtQLY_WwRc" },
      "04B": { starting: "2EuIHz__WR0", guessing: "hwu_ZguMkmM", plateaued: "qJZvqedSbRE" },
      "05A": { starting: "RJqjFW7LZMs", guessing: "SuS83y2InHQ", plateaued: "L5ERVl0SwKk" },
      "05B": { starting: "CtD-_cw8vw8", guessing: "H1TWk6vQEc8", plateaued: "gapj_p4rrVA" },
      "06A": { starting: "NYCYlhCV5Yk", guessing: "82w7Kdwca98", plateaued: "EmkaaAmDDr4" },
      "06B": "ouUo9ekUOqw"
    },
    closing: "LaDqbKsGsIk"
  },

  /* The free download on the results page. Empty url hides it. */
  download: {
    url: "assets/CalibreX-Daily-Routine.pdf",
    code: "CAL-08 · FIELD NOTES",
    title: "My daily routine",
    body: "My day from 06:30 to 21:00, the over-the-counter stacks behind it, and why each one is there.",
    button: "Download the PDF"
  },

  /* ---------- Lead capture: between the last question and the reading ---------- */
  gate: {
    eyebrow: "CAL-01 · READING COMPLETE",
    heading: "Your reading is ready.",
    body: "Where should I send a copy? Your energy score, your five drivers and what could be driving them are on the next screen.",
    fields: [
      { key: "name",      label: "First name",      type: "text",  required: true,  autocomplete: "given-name" },
      { key: "email",     label: "Email",           type: "email", required: true,  autocomplete: "email" },
      { key: "phone",     label: "Mobile number",   type: "tel",   required: true,  autocomplete: "tel", hint: "Include your country code, for example +1 or +44." },
      { key: "channel",   label: "Best way to reach you", type: "choice", required: true, options: [["text","Text"],["whatsapp","WhatsApp"]] },
      { key: "instagram", label: "Instagram",       type: "text",  required: false, autocomplete: "off", prefix: "@" }
    ],
    consent: "By continuing you agree that I can contact you about your reading.",
    button: "Show my reading",
    note: "Your answers come to me only. Nothing is shared or sold."
  },

  assessment: {
    id: "energy",
    code: "CAL-01 · ENERGY READING",
    title: "The Energy Reading",
    headline: ["Where is your", "energy going?"],
    lede: "Fifteen questions. A reading of your energy and the five drivers behind it, measured against the optimal band.",
    meta: ["15 questions", "3 minutes", "Private"],
    privacy: "Self-reported, not a diagnosis. Your answers come to me only.",

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

    /* The five drivers. Order breaks ties for primary drift (fundamentals first).
       Each driver has two results: "a" belongs to its first question, "b" to its second.
       Inside the primary drift, the lower of the two answers picks the result; a tie goes to "a".
       Each result: headline, lead, causes (k, name, why, tell, fix[]), tree (tier now|home|panel, q, how, out[{a, m, go[]}]),
       actions (three, safe whatever the cause), outcome, pdf, call (dashboard only), opener (dashboard only).
       Copy: Etienne's build brief, Nov 25 2026. */
    driverOrder: ["sleep", "stress", "recovery", "fuel", "focus"],
    drivers: {
      sleep: {
        label: "Sleep", code: "D-01", area: "Protocols doc Stack 04 · Sleep",
        results: {
          a: {
            "id": "01A",
            "name": "Awake at 03:10",
            "headline": "Something wakes you at 03:10. Find out what.",
            "lead": "You told me you wake in the night and struggle to get back. I count eleven things that do this, and they don't share a fix. In people who eat light or early it's most often blood sugar running out. Most often isn't always, so check before you change anything.",
            "causes": [
              {
                "k": "A",
                "name": "Blood sugar runs out overnight",
                "why": "Nothing is eaten for eight hours, so the liver's stored sugar holds blood sugar up. When the store is short, adrenaline and then cortisol do the job. Adrenaline tends to peak between one and three in the morning.",
                "tell": "you wake with a pounding heart or a busy head, dinner was light, early or low in carbohydrate, and eating something puts you back to sleep.",
                "fix": [
                  "Make dinner the larger meal: potatoes or rice, protein, salt.",
                  "Have something small, sweet and salty at bedtime (milk with honey and a pinch of salt, or fruit with cheese) and leave a second by the bed.",
                  "Avoid a large protein meal with no carbohydrate in the evening."
                ]
              },
              {
                "k": "B",
                "name": "Alcohol",
                "why": "Alcohol shortens the time it takes to fall asleep and breaks up the second half of the night. It also makes a narrow airway worse.",
                "tell": "it happens on the nights you drink, even one or two, and you fell asleep fast.",
                "fix": [
                  "Three nights with none and compare.",
                  "If you drink, finish early in the evening and with food."
                ]
              },
              {
                "k": "C",
                "name": "Caffeine still active",
                "why": "Caffeine clears slowly and cuts deep sleep even when falling asleep feels normal.",
                "tell": "your last coffee, tea or energy drink is after noon, and you wake alert with no hunger.",
                "fix": [
                  "Move the last caffeine to noon for a week.",
                  "Then find the latest time that leaves the night unchanged and stop an hour before it."
                ]
              },
              {
                "k": "D",
                "name": "The airway keeps closing",
                "why": "A blocked nose or an airway that narrows in sleep wakes the brain to restart breathing. Lean people have this too, through jaw shape, tonsils or the nose.",
                "tell": "you snore, wake gasping, wake with a dry mouth or a headache, or get up to urinate.",
                "fix": [
                  "Record one night of audio on your phone, or ask whoever shares the bed.",
                  "For a blocked nose: remove the allergen, rinse with saline made with boiled and cooled water, or try a nasal strip.",
                  "Snoring with pauses means a sleep study. Do not tape your mouth over a blocked nose."
                ]
              },
              {
                "k": "E",
                "name": "The bladder",
                "why": "A full bladder wakes you, and once awake the clock and the mind take over. Night urination more than once is also a sign of a closing airway.",
                "tell": "the first thing you notice on waking is needing to urinate.",
                "fix": [
                  "Do most of your drinking before late afternoon, with salt in it, and have the last large drink two hours before bed.",
                  "If it is more than once a night most nights, tell your doctor."
                ]
              },
              {
                "k": "F",
                "name": "Reflux",
                "why": "Stomach acid reaching the throat wakes you, often without obvious heartburn.",
                "tell": "you wake with a cough, a sour taste or a burning chest, and it is worse after a late, large or fatty dinner or after alcohol.",
                "fix": [
                  "Finish dinner three hours before bed and keep it lower in fat.",
                  "Raise the head of the bed a few centimetres.",
                  "If this is you, skip the bedtime snack from cause A."
                ]
              },
              {
                "k": "G",
                "name": "The room",
                "why": "Heat, light, noise, a partner's schedule, a pet or a child can wake you at the same time every night.",
                "tell": "you wake hot or sweating, you sleep through in other beds, or the waking lines up with heating, traffic or someone else's alarm.",
                "fix": [
                  "A cooler, darker room; earplugs for a week as a test.",
                  "Keep your feet warm even when the room is cool."
                ]
              },
              {
                "k": "H",
                "name": "A mind still at work",
                "why": "Stress hormones held high by the day do not need low blood sugar to wake you.",
                "tell": "you wake at the same time thinking about work, you are not hungry, and food does not help.",
                "fix": [
                  "Write tomorrow's list on paper before bed and close email by 21:00.",
                  "Five minutes of slow breathing, exhale longer than inhale.",
                  "If you are awake more than twenty minutes, get up and sit somewhere dim until sleepy. Waking three nights a week for three months is insomnia, and the treatment with the best record is CBT for insomnia."
                ]
              },
              {
                "k": "I",
                "name": "Restless legs or pain",
                "why": "An urge to move the legs, or a joint that hurts when you lie on it, breaks sleep at the same point each night.",
                "tell": "the legs feel restless in the evening and better when you move, or one position always wakes you.",
                "fix": [
                  "Ask for ferritin and transferrin saturation; low iron is a known cause of restless legs.",
                  "Review evening caffeine, alcohol and antihistamines, which make it worse."
                ]
              },
              {
                "k": "J",
                "name": "Nicotine or medication",
                "why": "Nicotine is a stimulant with a short life, and some medicines disturb sleep.",
                "tell": "you smoke or vape in the evening, or the waking started after a new prescription.",
                "fix": [
                  "No nicotine in the two hours before bed.",
                  "Ask a pharmacist about timing. Do not stop anything prescribed."
                ]
              },
              {
                "k": "K",
                "name": "Hormones",
                "why": "Night sweats in perimenopause wake many women in the small hours, and sleep often worsens in the week before a period. In both sexes a slow thyroid leaves the liver with little stored sugar, which leads back to cause A.",
                "tell": "you wake hot and damp, the waking follows your cycle, or you run cold all day with cold hands and feet.",
                "fix": [
                  "Note the dates for one cycle.",
                  "Take the pattern to your doctor with the thyroid markers from the panel tier."
                ]
              }
            ],
            "tree": [
              {
                "tier": "now",
                "q": "Do you snore, wake gasping, or wake with a dry mouth or a headache?",
                "how": "",
                "out": [
                  {
                    "a": "Yes",
                    "m": "The airway comes first. Record a night and arrange a sleep study if there are pauses.",
                    "go": [
                      "D"
                    ]
                  },
                  {
                    "a": "No",
                    "m": "Go to the next question.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "now",
                "q": "What is the first thing you notice when you wake?",
                "how": "",
                "out": [
                  {
                    "a": "Needing to urinate",
                    "m": "Bladder, and check the airway question again.",
                    "go": [
                      "E",
                      "D"
                    ]
                  },
                  {
                    "a": "Heat, noise or light",
                    "m": "The room.",
                    "go": [
                      "G"
                    ]
                  },
                  {
                    "a": "A cough, sour taste or burning",
                    "m": "Reflux.",
                    "go": [
                      "F"
                    ]
                  },
                  {
                    "a": "Legs or pain",
                    "m": "",
                    "go": [
                      "I"
                    ]
                  },
                  {
                    "a": "Nothing. Just awake.",
                    "m": "Go to the next question.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "now",
                "q": "On the nights it happens, did you drink, or have caffeine after noon?",
                "how": "",
                "out": [
                  {
                    "a": "Alcohol",
                    "m": "Three dry nights is the test.",
                    "go": [
                      "B"
                    ]
                  },
                  {
                    "a": "Caffeine",
                    "m": "One week with the last cup at noon is the test.",
                    "go": [
                      "C"
                    ]
                  },
                  {
                    "a": "Neither",
                    "m": "Go to the home test.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "home",
                "q": "Five mornings: take your pulse and temperature on waking, then again forty minutes after breakfast.",
                "how": "Before getting out of bed. Count the pulse for a full minute.",
                "out": [
                  {
                    "a": "Fast pulse on waking that settles after you eat",
                    "m": "Stress hormones worked the night shift. Fuel is the first suspect, stress the second.",
                    "go": [
                      "A",
                      "H"
                    ]
                  },
                  {
                    "a": "Temperature under about 36.6 °C (98 °F) and a slow pulse, both rising after breakfast",
                    "m": "A slow metabolic rate. Ask for the thyroid markers.",
                    "go": [
                      "K"
                    ]
                  },
                  {
                    "a": "Both ordinary, little change",
                    "m": "The cause is outside your chemistry: look again at alcohol, caffeine and the room.",
                    "go": [
                      "B",
                      "C",
                      "G"
                    ]
                  }
                ]
              },
              {
                "tier": "home",
                "q": "Five nights with the bedtime snack from cause A.",
                "how": "Change nothing else.",
                "out": [
                  {
                    "a": "The waking stops or moves later",
                    "m": "Overnight fuel was the cause. Keep the larger dinner.",
                    "go": [
                      "A"
                    ]
                  },
                  {
                    "a": "You wake and eating puts you back to sleep",
                    "m": "The same cause, and the store is very short. Look at what you eat across the whole day.",
                    "go": [
                      "A"
                    ]
                  },
                  {
                    "a": "No change",
                    "m": "Fuel is ruled out. That leaves a mind at work, or the room.",
                    "go": [
                      "H",
                      "G"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "Fasting glucose, fasting insulin, HbA1c",
                "how": "",
                "out": [
                  {
                    "a": "Insulin high while glucose is normal, or HbA1c creeping up",
                    "m": "Your body is working hard to hold blood sugar level, which fits night dips. Take it to your doctor.",
                    "go": [
                      "A"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "TSH with free T4 and free T3, and total cholesterol",
                "how": "",
                "out": [
                  {
                    "a": "Any of those three",
                    "m": "TSH in the upper part of the range, free T3 in the lower part, or cholesterol that has risen: thyroid function is worth a proper look with your doctor.",
                    "go": [
                      "K"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "Ferritin with transferrin saturation; morning cortisol",
                "how": "",
                "out": [
                  {
                    "a": "Low ferritin with low saturation",
                    "m": "Iron, if your legs are restless.",
                    "go": [
                      "I"
                    ]
                  },
                  {
                    "a": "Morning cortisol high or low",
                    "m": "Context for the stress cause. One reading settles nothing; repeat it.",
                    "go": [
                      "H"
                    ]
                  }
                ]
              }
            ],
            "actions": [
              [
                "19:30",
                "Dinner with carbohydrate, protein and salt, finished three hours before bed.",
                "Enough to carry the night, early enough that reflux is not a factor."
              ],
              [
                "Evening",
                "No alcohol, and no caffeine after noon.",
                "Removes two of the eleven causes in one night."
              ],
              [
                "On waking",
                "Pulse and temperature before you get up. Write them down.",
                "Day one of the home test."
              ]
            ],
            "outcome": [
              "03:10",
              "Asleep",
              "The night runs to morning in one piece, and you are up before the alarm because you are done sleeping."
            ],
            "pdf": "page 5, the 19:30 dinner and the 21:00 wind-down, and Stack 07 · Sleep.",
            "call": "Ask which causes they marked. Then dinner (what and when), weeknight drinks, snoring, and whether eating at 03:10 has ever put them back to sleep.",
            "opener": "The night waking stood out. When you wake, what is the first thing you notice?"
          },
          b: {
            "id": "01B",
            "name": "Eight hours, never enough",
            "headline": "The hours are there. Find what is making them shallow.",
            "lead": "You get a full night in bed and wake up unrested. When I see that, it's one of four things: the sleep is being broken in ways you don't remember, it's timed wrong, there's less of it than your tracker says, or the tiredness isn't coming from sleep at all.",
            "causes": [
              {
                "k": "A",
                "name": "The airway keeps closing",
                "why": "Enough time in bed does not make up for an airway that keeps closing. Each closure pulls you out of deep sleep without fully waking you.",
                "tell": "you snore, someone has seen you stop breathing, you wake with a dry mouth or a headache, you urinate at night, or you are sleepy in the day.",
                "fix": [
                  "Record one night of audio, or ask whoever shares the bed.",
                  "Snoring with pauses means a sleep study. Nothing on this page replaces it.",
                  "For a blocked nose: remove the allergen, saline rinse with boiled and cooled water, or a nasal strip. No mouth tape over a blocked nose."
                ]
              },
              {
                "k": "B",
                "name": "Caffeine cutting deep sleep",
                "why": "Caffeine after noon is still in the blood at midnight. It reduces deep sleep even when you fall asleep easily.",
                "tell": "you have caffeine after noon and fall asleep without trouble.",
                "fix": [
                  "Last caffeine at noon for two weeks, then judge the mornings."
                ]
              },
              {
                "k": "C",
                "name": "Alcohol",
                "why": "It trades faster sleep for a worse second half of the night.",
                "tell": "the worst mornings follow evenings with a drink.",
                "fix": [
                  "Two weeks without on work nights."
                ]
              },
              {
                "k": "D",
                "name": "A clock running late or irregular",
                "why": "A body clock that gets no morning daylight, or a wake time that moves, releases melatonin late. You sleep at the wrong point of your own night.",
                "tell": "your weekend wake time is more than an hour later than weekdays, you are not sleepy until late, and Monday is the worst morning.",
                "fix": [
                  "One wake time, seven days a week.",
                  "Fifteen minutes outside within an hour of waking; outdoor light is thousands of lux and a bright room is a few hundred.",
                  "Dim the evening, screens closed by 21:00, bedroom fully dark."
                ]
              },
              {
                "k": "E",
                "name": "Less sleep than you think",
                "why": "Time in bed is not time asleep. A tracker counts lying still.",
                "tell": "you need the alarm every day, and on holiday you sleep an hour or two longer and feel fine.",
                "fix": [
                  "Count the sleep window back from your wake time and add thirty minutes for two weeks."
                ]
              },
              {
                "k": "F",
                "name": "Sleeping cold",
                "why": "Deep sleep rises with body temperature. A body with a slow metabolic rate goes to bed cold and sleeps light, with a lot of dreaming.",
                "tell": "your hands and feet are cold at bedtime and your waking temperature is low.",
                "fix": [
                  "A hot shower or bath before bed, or warm your feet.",
                  "Something sweet and salty at bedtime raises temperature.",
                  "Ask for the thyroid markers in the panel tier."
                ]
              },
              {
                "k": "G",
                "name": "Stress hormones through the night",
                "why": "When dinner was short on carbohydrate, adrenaline and cortisol hold blood sugar up overnight. You sleep, lightly, and wake with a fast pulse and no appetite.",
                "tell": "you wake often for a moment, your pulse is fast on waking, and breakfast does not appeal.",
                "fix": [
                  "Carbohydrate, protein and salt at dinner.",
                  "See result 01A, cause A, for the bedtime test."
                ]
              },
              {
                "k": "H",
                "name": "Restless legs or low iron",
                "why": "Legs that move through the night fragment sleep without waking you fully.",
                "tell": "you feel an urge to move your legs at rest in the evening, or a partner says you kick.",
                "fix": [
                  "Ask for ferritin and transferrin saturation. Iron is taken on the result, never blind.",
                  "Review caffeine, alcohol and antihistamines."
                ]
              },
              {
                "k": "I",
                "name": "Breaks you do not remember",
                "why": "Pain, reflux, heat, noise, a partner, a pet or children produce dozens of brief arousals.",
                "tell": "the tracker shows many awakenings, or you sleep better alone or away from home.",
                "fix": [
                  "Find the main disruptor and remove it for a week before trying anything else."
                ]
              },
              {
                "k": "J",
                "name": "Medication and sleep aids",
                "why": "Sedating antihistamines, some antidepressants, cannabis and melatonin taken late can all leave a heavy morning.",
                "tell": "the unrested mornings began with something you take, or you use something to get to sleep.",
                "fix": [
                  "List what you take and when, and ask a pharmacist. Do not stop anything prescribed."
                ]
              },
              {
                "k": "K",
                "name": "A cause outside sleep",
                "why": "Anaemia, low iron, thyroid disease, low vitamin D, poor blood sugar control, a lingering infection and depression all feel like unrefreshing sleep.",
                "tell": "you are tired all day whatever the night was like, and it has lasted more than three months.",
                "fix": [
                  "The panel tier below, then your doctor with the results."
                ]
              }
            ],
            "tree": [
              {
                "tier": "now",
                "q": "Snoring, pauses, dry mouth, morning headache, or urinating at night?",
                "how": "",
                "out": [
                  {
                    "a": "Yes to any",
                    "m": "Airway first.",
                    "go": [
                      "A"
                    ]
                  },
                  {
                    "a": "No",
                    "m": "Go on.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "now",
                "q": "Restless legs in the evening, or told you kick?",
                "how": "",
                "out": [
                  {
                    "a": "Yes",
                    "m": "",
                    "go": [
                      "H"
                    ]
                  },
                  {
                    "a": "No",
                    "m": "Go on.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "now",
                "q": "Is your weekend wake time more than an hour later than weekdays?",
                "how": "",
                "out": [
                  {
                    "a": "Yes",
                    "m": "The clock.",
                    "go": [
                      "D"
                    ]
                  },
                  {
                    "a": "No",
                    "m": "Go on.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "now",
                "q": "With no alarm for a week, what happens?",
                "how": "Think of your last holiday.",
                "out": [
                  {
                    "a": "You sleep longer and feel fine",
                    "m": "You are short on sleep.",
                    "go": [
                      "E"
                    ]
                  },
                  {
                    "a": "You sleep longer and still feel flat",
                    "m": "Something is breaking the sleep, or the cause is outside it.",
                    "go": [
                      "A",
                      "I",
                      "K"
                    ]
                  }
                ]
              },
              {
                "tier": "home",
                "q": "Record one night of audio.",
                "how": "Any snore-recording app will do.",
                "out": [
                  {
                    "a": "Snoring, gasps or silences",
                    "m": "Sleep study.",
                    "go": [
                      "A"
                    ]
                  },
                  {
                    "a": "Quiet",
                    "m": "Go on.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "home",
                "q": "Five mornings: pulse and temperature on waking, then forty minutes after breakfast.",
                "how": "",
                "out": [
                  {
                    "a": "Temperature under about 36.6 °C (98 °F), slow pulse",
                    "m": "Sleeping cold.",
                    "go": [
                      "F"
                    ]
                  },
                  {
                    "a": "Fast pulse on waking that settles after eating",
                    "m": "Stress hormones through the night.",
                    "go": [
                      "G"
                    ]
                  },
                  {
                    "a": "Ordinary",
                    "m": "Go on.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "home",
                "q": "Two weeks: one wake time, morning daylight, last caffeine at noon, no alcohol on work nights.",
                "how": "Score each morning from 1 to 5.",
                "out": [
                  {
                    "a": "Mornings improve",
                    "m": "Timing or stimulants were the cause. Add them back one at a time to see which.",
                    "go": [
                      "B",
                      "C",
                      "D"
                    ]
                  },
                  {
                    "a": "No change",
                    "m": "Take the panel.",
                    "go": [
                      "K"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "Ferritin with transferrin saturation and a full blood count",
                "how": "",
                "out": [
                  {
                    "a": "Low ferritin, low saturation or low haemoglobin",
                    "m": "Iron or anaemia.",
                    "go": [
                      "H",
                      "K"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "TSH with free T4 and free T3, and total cholesterol",
                "how": "",
                "out": [
                  {
                    "a": "Any of those three",
                    "m": "TSH in the upper part of the range, free T3 in the lower part, or cholesterol that has risen: thyroid function is worth a proper look with your doctor.",
                    "go": [
                      "F"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "Fasting glucose, fasting insulin, HbA1c; vitamin D (25-OH)",
                "how": "",
                "out": [
                  {
                    "a": "Insulin high, or HbA1c creeping up",
                    "m": "Fits night-time stress hormones.",
                    "go": [
                      "G"
                    ]
                  },
                  {
                    "a": "Vitamin D low",
                    "m": "Correct it with your doctor and retest.",
                    "go": [
                      "K"
                    ]
                  }
                ]
              }
            ],
            "actions": [
              [
                "06:30",
                "Get up at the same time you will keep all week, then fifteen minutes outside.",
                "Sets the clock, and it is the base every other test is read against."
              ],
              [
                "Noon",
                "Last caffeine of the day.",
                "Rules caffeine in or out within two weeks."
              ],
              [
                "Tonight",
                "Record the night's audio.",
                "The airway is the one cause no routine fixes, so it is checked first."
              ]
            ],
            "outcome": [
              "06:10",
              "Up before the alarm",
              "Awake because you are done sleeping, with something to spend on the first hour."
            ],
            "pdf": "page 2, the 06:30 wake-up; page 5, the 21:00 wind-down; Stack 07 · Sleep.",
            "call": "Ask about snoring first, then the last coffee, weekend wake time and what the hour before bed looks like. A yes on snoring goes to a sleep study before any protocol.",
            "opener": "Full nights that don't restore you stood out. Has anyone ever told you that you snore?"
          }
        }
      },
      stress: {
        label: "Stress Load", code: "D-02", area: "Protocols doc Stack 11 · Cortisol / nervous system",
        results: {
          a: {
            "id": "02A",
            "name": "Still wired at 17:30",
            "headline": "You finish work wired. Find what is holding the switch on.",
            "lead": "You close the laptop and you're still on edge. That's adrenaline, and I can't tell from a questionnaire what's holding it up. Food, caffeine, salt, how your day ends, training, sleep and thyroid can each do it.",
            "causes": [
              {
                "k": "A",
                "name": "Nothing eaten since lunch",
                "why": "When blood sugar drops, adrenaline and cortisol hold it up. An afternoon of coffee and no food runs on those two hormones, and they do not switch off at 17:30.",
                "tell": "you eat nothing between lunch and dinner, your hands are cold late in the day, and you calm down within half an hour of eating.",
                "fix": [
                  "At 15:30 have fruit or juice with something salty, and no coffee with it.",
                  "Carbohydrate and protein at lunch."
                ]
              },
              {
                "k": "B",
                "name": "Caffeine, too much or too late",
                "why": "Caffeine raises the rate at which you burn fuel. Without food behind it, the lift is adrenaline.",
                "tell": "you have three or more cups, or any after 14:00, and feel tired and wired together.",
                "fix": [
                  "Two cups, both with food, the last at noon."
                ]
              },
              {
                "k": "C",
                "name": "Low salt",
                "why": "Salt restriction raises adrenaline. Sodium also helps hold blood sugar.",
                "tell": "you avoid salt or sweat a lot, feel light-headed on standing, or crave salty food.",
                "fix": [
                  "Salt food to taste.",
                  "A salted drink after heavy sweating."
                ]
              },
              {
                "k": "D",
                "name": "The day has no end",
                "why": "A workday that stops only when time runs out leaves every open task still running in your head.",
                "tell": "work ends by interruption, the phone carries it into the evening, and you are wired even on days you ate well.",
                "fix": [
                  "A shutdown routine: write tomorrow's first task, close the laptop, say out loud that you are done.",
                  "No work messages after a fixed time.",
                  "Learn something new during the week. In one workplace study it buffered stress where relaxation techniques did not."
                ]
              },
              {
                "k": "E",
                "name": "No break between work and home",
                "why": "Going from desk to car to kitchen gives the body no signal that the state has changed.",
                "tell": "you are indoors from morning to evening and go straight from the last call to the house.",
                "fix": [
                  "Ten minutes outside on foot before going home, phone left behind, while it is still light."
                ]
              },
              {
                "k": "F",
                "name": "Fast, shallow breathing",
                "why": "Hours at a screen bring breath-holding and upper-chest breathing, which keep heart rate up.",
                "tell": "you sigh or yawn a lot, your chest or jaw is tight, or your fingers tingle.",
                "fix": [
                  "Five minutes at about six breaths a minute with the exhale longer than the inhale.",
                  "Breathe through the nose at the desk."
                ]
              },
              {
                "k": "G",
                "name": "Hard training late",
                "why": "A hard session in the evening raises adrenaline for hours.",
                "tell": "you are wired on training evenings only.",
                "fix": [
                  "Move hard sessions before 17:00, or keep evening ones easy."
                ]
              },
              {
                "k": "H",
                "name": "A short night before",
                "why": "Sleep loss raises next-day cortisol and makes ordinary pressure feel sharper.",
                "tell": "the wired evenings follow nights under seven hours.",
                "fix": [
                  "Work through the Sleep result first."
                ]
              },
              {
                "k": "I",
                "name": "Scrolling in every gap",
                "why": "News and social feeds fill each pause with something to react to.",
                "tell": "the phone is in your hand in every lift, queue and break.",
                "fix": [
                  "One week off social media. In a 154-person study a week's break lowered anxiety."
                ]
              },
              {
                "k": "J",
                "name": "A slow thyroid covered by adrenaline",
                "why": "When thyroid function is low the body often compensates with adrenaline. Stress hormones then slow the conversion of thyroid hormone to its active form, and the state feeds itself. In a study of working hours, hypothyroidism was 2.6 times as common in people working 53 to 83 hours a week as in those working 36 to 42.",
                "tell": "you run cold, your waking temperature is low while your pulse is fast, and this has built over months.",
                "fix": [
                  "Ask for the thyroid markers in the panel tier."
                ]
              },
              {
                "k": "K",
                "name": "Stimulants and medication",
                "why": "Nicotine, pre-workout powders, decongestants, attention medication and too high a dose of thyroid medication all do this.",
                "tell": "the wired feeling tracks with something you take.",
                "fix": [
                  "Ask your pharmacist or prescriber about dose and timing."
                ]
              },
              {
                "k": "L",
                "name": "Alcohol as the off switch",
                "why": "A drink brings you down for an hour, then raises heart rate and breaks the night, so tomorrow starts higher.",
                "tell": "you need a drink to come down.",
                "fix": [
                  "Swap it for the 15:30 food and the walk for one week and compare."
                ]
              },
              {
                "k": "M",
                "name": "Anxiety that is not about the day",
                "why": "Some people are on edge whatever the day held.",
                "tell": "you are wired on weekends and on holiday too.",
                "fix": [
                  "Raise it with your doctor. It is common and treatable."
                ]
              }
            ],
            "tree": [
              {
                "tier": "now",
                "q": "Are you also wired on weekends and on holiday?",
                "how": "",
                "out": [
                  {
                    "a": "Yes",
                    "m": "The workday is not the cause.",
                    "go": [
                      "B",
                      "J",
                      "K",
                      "M"
                    ]
                  },
                  {
                    "a": "No",
                    "m": "Go on.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "now",
                "q": "What do you eat between lunch and 17:30?",
                "how": "",
                "out": [
                  {
                    "a": "Nothing, or coffee",
                    "m": "Fuel is the first suspect.",
                    "go": [
                      "A",
                      "B"
                    ]
                  },
                  {
                    "a": "A proper snack",
                    "m": "Go on.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "now",
                "q": "On the wired days, did you train after 18:00 or sleep under seven hours the night before?",
                "how": "",
                "out": [
                  {
                    "a": "Trained late",
                    "m": "",
                    "go": [
                      "G"
                    ]
                  },
                  {
                    "a": "Slept short",
                    "m": "",
                    "go": [
                      "H"
                    ]
                  },
                  {
                    "a": "Neither",
                    "m": "Go to the home test.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "home",
                "q": "Five workdays: pulse on waking, forty minutes after breakfast, and at 17:30. Note whether your hands are warm or cold at 17:30.",
                "how": "",
                "out": [
                  {
                    "a": "Pulse climbs through the afternoon and the hands get colder",
                    "m": "Adrenaline is doing the work: fuel, caffeine or salt.",
                    "go": [
                      "A",
                      "B",
                      "C"
                    ]
                  },
                  {
                    "a": "Pulse flat, head still racing",
                    "m": "The cause is how the day ends.",
                    "go": [
                      "D",
                      "E",
                      "I"
                    ]
                  },
                  {
                    "a": "Low waking temperature with a fast waking pulse",
                    "m": "Thyroid markers.",
                    "go": [
                      "J"
                    ]
                  }
                ]
              },
              {
                "tier": "home",
                "q": "Three days with food at 15:30 and no caffeine after noon.",
                "how": "",
                "out": [
                  {
                    "a": "Calmer by 17:30",
                    "m": "Fuel or caffeine. Add the afternoon coffee back to see which.",
                    "go": [
                      "A",
                      "B"
                    ]
                  },
                  {
                    "a": "No change",
                    "m": "Run the next test.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "home",
                "q": "Three days with the shutdown routine and the ten minutes outside.",
                "how": "",
                "out": [
                  {
                    "a": "Calmer",
                    "m": "The ending of the day was the cause.",
                    "go": [
                      "D",
                      "E"
                    ]
                  },
                  {
                    "a": "No change",
                    "m": "Take the panel and look again at sleep.",
                    "go": [
                      "H",
                      "J"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "Morning cortisol; fasting glucose and fasting insulin; sodium",
                "how": "",
                "out": [
                  {
                    "a": "Insulin high with normal glucose",
                    "m": "Blood sugar is being held up the hard way.",
                    "go": [
                      "A"
                    ]
                  },
                  {
                    "a": "Sodium at the low end",
                    "m": "",
                    "go": [
                      "C"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "TSH with free T4 and free T3, and total cholesterol",
                "how": "",
                "out": [
                  {
                    "a": "Any of those three",
                    "m": "TSH in the upper part of the range, free T3 in the lower part, or cholesterol that has risen: thyroid function is worth a proper look with your doctor.",
                    "go": [
                      "J"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "Blood pressure at home, on waking and at 17:30, for a week",
                "how": "Not a blood test, and worth having at the same appointment.",
                "out": [
                  {
                    "a": "Clearly higher at 17:30, or high at both",
                    "m": "Show the readings to your doctor before adding salt.",
                    "go": []
                  }
                ]
              }
            ],
            "actions": [
              [
                "15:30",
                "Eat: fruit or juice with something salty. No coffee with it.",
                "Takes away the most common reason for the surge."
              ],
              [
                "End of work",
                "Write tomorrow's first task, close the laptop, ten minutes outside.",
                "Gives the day an end."
              ],
              [
                "17:30",
                "Take your pulse and feel your hands.",
                "Day one of the home test."
              ]
            ],
            "outcome": [
              "17:30",
              "Done, and it feels done",
              "The work stays at the desk, and your pulse on the way home is the one you woke up with."
            ],
            "pdf": "page 5, the 16:30 block and the 21:00 wind-down; Stack 07 · Sleep.",
            "call": "Ask which causes they marked. Then what they eat between lunch and dinner, coffees and the time of the last, cold hands, and whether weekends are different.",
            "opener": "Finishing work still wired stood out. Is it the same on weekends, or only workdays?"
          },
          b: {
            "id": "02B",
            "name": "Nothing left at 20:30",
            "headline": "By 20:30 there is nothing left. Find where it went.",
            "lead": "By the evening you've got nothing left for the people at home. Part of that is physical and part is load. I'd test the physical causes first, because they take three days.",
            "causes": [
              {
                "k": "A",
                "name": "Low blood sugar at the door",
                "why": "Lunch was six or seven hours ago and cortisol is holding blood sugar up. Hunger makes people irritable at any age.",
                "tell": "the gap between your last food and getting home is five hours or more, and your mood lifts within half an hour of dinner.",
                "fix": [
                  "Eat at 17:30, before you get home: fruit and cheese, milk, or juice with a pinch of salt.",
                  "Move dinner earlier."
                ]
              },
              {
                "k": "B",
                "name": "Nothing between work and home",
                "why": "You arrive still carrying the day's decisions and the first request at home is one more.",
                "tell": "you are short even when fed, and what you want most on arrival is silence.",
                "fix": [
                  "Ten minutes alone before you walk in: a walk round the block, or sit without the phone.",
                  "Agree at home that the first fifteen minutes are quiet.",
                  "Stop demanding work at 16:30 and leave calls and admin for the last hour."
                ]
              },
              {
                "k": "C",
                "name": "Short or broken sleep",
                "why": "Sleep loss lowers the threshold for every irritation.",
                "tell": "the bad evenings follow bad nights.",
                "fix": [
                  "Work through the Sleep result first."
                ]
              },
              {
                "k": "D",
                "name": "Caffeine wearing off",
                "why": "Several cups leave a late-afternoon drop with a headache and a short temper.",
                "tell": "you have more than three cups, and a headache arrives around 17:00.",
                "fix": [
                  "Two cups with food, the last at noon."
                ]
              },
              {
                "k": "E",
                "name": "Alcohol",
                "why": "An evening drink eases the first hour and shortens the fuse after it, then breaks the night.",
                "tell": "the sharp words come after the second drink, or the morning after.",
                "fix": [
                  "A week of work nights without."
                ]
              },
              {
                "k": "F",
                "name": "Eating too little overall",
                "why": "Irritability, broken sleep and waking hungry are signs of low energy availability, with or without a diet.",
                "tell": "you are dieting or losing weight, feel cold, and think about food a lot.",
                "fix": [
                  "Raise food for two weeks, mostly earlier in the day, and compare the evenings."
                ]
              },
              {
                "k": "G",
                "name": "Gut irritation",
                "why": "An irritated gut releases serotonin, and in animal work fermentable fibre made subjects anxious and aggressive.",
                "tell": "you are bloated or gassy by evening, and mood follows the gut.",
                "fix": [
                  "Cut back grains, beans and fibre supplements for a week and compare."
                ]
              },
              {
                "k": "H",
                "name": "Dehydration or low salt",
                "why": "A day of coffee and little water ends in a headache and a short temper.",
                "tell": "your urine is dark by late afternoon, or you have a headache most evenings.",
                "fix": [
                  "A glass of salted water mid-afternoon."
                ]
              },
              {
                "k": "I",
                "name": "Hormones",
                "why": "Low thyroid function and low testosterone both shorten patience. In women, the week before a period does the same.",
                "tell": "it tracks with your cycle, or it comes with low drive, feeling cold and poor recovery.",
                "fix": [
                  "Note the dates for a month.",
                  "The panel tier below."
                ]
              },
              {
                "k": "J",
                "name": "Medication wearing off",
                "why": "Attention medication and some others leave a rebound in the late afternoon.",
                "tell": "it began with a prescription or a dose change.",
                "fix": [
                  "Raise the timing with your prescriber."
                ]
              },
              {
                "k": "K",
                "name": "Low mood or burnout",
                "why": "Irritability is one of the commonest faces of depression, especially in men.",
                "tell": "it is there in the morning and at weekends too, and things you liked have stopped appealing.",
                "fix": [
                  "Talk to your doctor. This one does not respond to snacks."
                ]
              }
            ],
            "tree": [
              {
                "tier": "now",
                "q": "Is the short fuse there in the morning and at weekends too?",
                "how": "",
                "out": [
                  {
                    "a": "Yes",
                    "m": "It is not the hour of the day.",
                    "go": [
                      "C",
                      "I",
                      "K"
                    ]
                  },
                  {
                    "a": "No, evenings after work",
                    "m": "Go on.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "now",
                "q": "How long is it between your last food and walking in the door?",
                "how": "",
                "out": [
                  {
                    "a": "Five hours or more",
                    "m": "Fuel first.",
                    "go": [
                      "A"
                    ]
                  },
                  {
                    "a": "Under five",
                    "m": "Go on.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "now",
                "q": "Once you have eaten dinner, are you yourself again within half an hour?",
                "how": "",
                "out": [
                  {
                    "a": "Yes",
                    "m": "Fuel, or too little food overall.",
                    "go": [
                      "A",
                      "F"
                    ]
                  },
                  {
                    "a": "No",
                    "m": "Load, sleep or alcohol.",
                    "go": [
                      "B",
                      "C",
                      "E"
                    ]
                  }
                ]
              },
              {
                "tier": "home",
                "q": "One week: each evening write the time you last ate, cups of coffee, hours slept the night before, and patience at 20:30 from 1 to 5.",
                "how": "",
                "out": [
                  {
                    "a": "Bad evenings line up with long gaps",
                    "m": "",
                    "go": [
                      "A"
                    ]
                  },
                  {
                    "a": "Bad evenings line up with short nights",
                    "m": "",
                    "go": [
                      "C"
                    ]
                  },
                  {
                    "a": "Neither pattern",
                    "m": "",
                    "go": [
                      "B"
                    ]
                  }
                ]
              },
              {
                "tier": "home",
                "q": "Three days eating at 17:30.",
                "how": "",
                "out": [
                  {
                    "a": "Better",
                    "m": "",
                    "go": [
                      "A"
                    ]
                  },
                  {
                    "a": "No change",
                    "m": "Run the next test.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "home",
                "q": "Three days with ten minutes alone before walking in.",
                "how": "",
                "out": [
                  {
                    "a": "Better",
                    "m": "",
                    "go": [
                      "B"
                    ]
                  },
                  {
                    "a": "No change",
                    "m": "Take the panel.",
                    "go": [
                      "I",
                      "K"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "Fasting glucose, fasting insulin, HbA1c; morning cortisol",
                "how": "",
                "out": [
                  {
                    "a": "Insulin high or HbA1c creeping up",
                    "m": "Fits evening dips.",
                    "go": [
                      "A"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "TSH with free T4 and free T3; morning total and free testosterone with SHBG; ferritin",
                "how": "",
                "out": [
                  {
                    "a": "Anything at the edge of its range",
                    "m": "One more reason for a short evening. Take it to your doctor.",
                    "go": [
                      "I"
                    ]
                  }
                ]
              }
            ],
            "actions": [
              [
                "16:30",
                "Stop the demanding work here. Calls and admin after.",
                "Leaves something in reserve for the evening."
              ],
              [
                "17:30",
                "Eat before you get home.",
                "Rules fuel in or out in three days."
              ],
              [
                "At the door",
                "Ten minutes alone before you walk in.",
                "Puts a break between the two halves of the day."
              ]
            ],
            "outcome": [
              "20:30",
              "Something left at dinner",
              "Patience for the people who matter at the end of a full day, with enough in reserve to be there."
            ],
            "pdf": "page 5, the 16:30 block and the 19:30 dinner.",
            "call": "Ask which causes they marked. Then what happens between leaving work and dinner, whether weekends differ, and who notices the change first.",
            "opener": "The evenings stood out. Is it the same at weekends, or only after work?"
          }
        }
      },
      recovery: {
        label: "Recovery", code: "D-03", area: "Protocols doc Stack 07 / 09 · Recovery, stamina",
        results: {
          a: {
            "id": "03A",
            "name": "Saturday on the couch",
            "headline": "The weekend goes to recovery. Find what the week is costing.",
            "lead": "Your weekends go to recovering. Either Monday to Friday takes more out of you than it puts back, or something keeps you flat however the week goes. I ask one question to split the two: how do you feel on day five of a holiday?",
            "causes": [
              {
                "k": "A",
                "name": "Weekday meals are short",
                "why": "A week of skipped lunches and late dinners is paid for with stress hormones, and the bill arrives on Saturday.",
                "tell": "you skip a meal most workdays, eat most of your food at night, and are ravenous by Friday.",
                "fix": [
                  "Three meals at fixed times, each with carbohydrate and protein, salted to taste. Put lunch in the calendar."
                ]
              },
              {
                "k": "B",
                "name": "Sleep debt",
                "why": "Losing an hour a night is five hours by Friday.",
                "tell": "you sleep at least an hour longer on weekend nights and need the alarm every workday.",
                "fix": [
                  "Bed thirty minutes earlier on work nights for two weeks."
                ]
              },
              {
                "k": "C",
                "name": "The lie-in moves your clock",
                "why": "Sleeping late on Saturday and Sunday shifts the body clock later, so Monday begins jet-lagged and the week starts behind.",
                "tell": "you cannot fall asleep on Sunday night and Monday is your worst day.",
                "fix": [
                  "Get up at the weekday time on Saturday, go outside, and nap for twenty minutes after lunch if you need it."
                ]
              },
              {
                "k": "D",
                "name": "Training is more than you can recover from",
                "why": "The useful amount of training is what you can recover from repeatedly.",
                "tell": "you train hard four or more days, lifts are flat or falling, and joints ache.",
                "fix": [
                  "A deload week: half the hard sets, no sets to failure.",
                  "See result 03B."
                ]
              },
              {
                "k": "E",
                "name": "The let-down",
                "why": "Stress hormones held high all week fall when the pressure stops, and what they were covering shows.",
                "tell": "you get headaches or come down with something on the first days off.",
                "fix": [
                  "Wind down a little every day so there is less to fall from: the 15:30 food, the walk before home.",
                  "See the Stress Load result."
                ]
              },
              {
                "k": "F",
                "name": "Friday and Saturday alcohol",
                "why": "Alcohol breaks the second half of the night and the next day is spent on it.",
                "tell": "the couch days follow evenings out.",
                "fix": [
                  "One weekend without and compare."
                ]
              },
              {
                "k": "G",
                "name": "Caffeine withdrawal",
                "why": "Four cups on workdays and a late first cup on Saturday is a withdrawal headache and a flat morning.",
                "tell": "you get a weekend headache that lifts after coffee.",
                "fix": [
                  "Keep weekend caffeine at the weekday time, or lower the weekday total."
                ]
              },
              {
                "k": "H",
                "name": "Nothing booked",
                "why": "A weekend with no fixed point drifts into rest by default.",
                "tell": "you feel fine on the Saturdays when something is planned.",
                "fix": [
                  "Book one thing for Saturday morning, with another person."
                ]
              },
              {
                "k": "I",
                "name": "A slow metabolic rate",
                "why": "Low thyroid function slows recovery of every tissue. In Peat's account, when it is low enough even sleep does not restore the cell.",
                "tell": "you run cold, your waking temperature is low, and energy, sleep, appetite and drive have all dropped together.",
                "fix": [
                  "The home test and the thyroid markers below."
                ]
              },
              {
                "k": "J",
                "name": "Iron, vitamin D or testosterone",
                "why": "Low iron, anaemia, low vitamin D and low testosterone each produce a week you cannot recover from.",
                "tell": "stairs leave you breathless, your legs feel heavy, or libido and morning erections have gone.",
                "fix": [
                  "The panel tier below."
                ]
              },
              {
                "k": "K",
                "name": "Sleep that does not restore",
                "why": "A closing airway or another sleep disorder means the weekend's long sleeps do not pay the debt back.",
                "tell": "you sleep ten hours on Saturday and still wake flat.",
                "fix": [
                  "Work through result 01B."
                ]
              },
              {
                "k": "L",
                "name": "A lingering illness",
                "why": "Fatigue that follows an infection can last months.",
                "tell": "it started after being ill and has not lifted.",
                "fix": [
                  "See your doctor, and keep exertion under the level that sets you back the next day."
                ]
              },
              {
                "k": "M",
                "name": "Low mood",
                "why": "When nothing appeals on a free day, rest is not what is missing.",
                "tell": "you are rested and still want to do nothing, including things you used to enjoy.",
                "fix": [
                  "Talk to your doctor."
                ]
              },
              {
                "k": "N",
                "name": "Medication",
                "why": "Antihistamines, beta blockers and several others cause fatigue.",
                "tell": "it began with a prescription.",
                "fix": [
                  "Ask your pharmacist. Do not stop anything prescribed."
                ]
              }
            ],
            "tree": [
              {
                "tier": "now",
                "q": "Did this start after an illness?",
                "how": "",
                "out": [
                  {
                    "a": "Yes",
                    "m": "",
                    "go": [
                      "L"
                    ]
                  },
                  {
                    "a": "No",
                    "m": "Go on.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "now",
                "q": "On the fifth day of a holiday, how do you feel?",
                "how": "",
                "out": [
                  {
                    "a": "Good. Energy comes back.",
                    "m": "The week is the cost.",
                    "go": [
                      "A",
                      "B",
                      "D",
                      "E"
                    ]
                  },
                  {
                    "a": "Still flat",
                    "m": "The cause travels with you.",
                    "go": [
                      "I",
                      "J",
                      "K",
                      "M"
                    ]
                  }
                ]
              },
              {
                "tier": "now",
                "q": "How much longer do you sleep on weekend nights?",
                "how": "",
                "out": [
                  {
                    "a": "An hour or more",
                    "m": "",
                    "go": [
                      "B",
                      "C"
                    ]
                  },
                  {
                    "a": "About the same",
                    "m": "Go on.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "now",
                "q": "On workdays, do you skip a meal most days? Do you train hard four or more days?",
                "how": "",
                "out": [
                  {
                    "a": "Skip meals",
                    "m": "",
                    "go": [
                      "A"
                    ]
                  },
                  {
                    "a": "Train hard",
                    "m": "",
                    "go": [
                      "D"
                    ]
                  },
                  {
                    "a": "Neither",
                    "m": "Go to the home test.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "home",
                "q": "Two weeks: temperature and pulse on waking, every Wednesday and Sunday.",
                "how": "",
                "out": [
                  {
                    "a": "Sunday clearly better than Wednesday",
                    "m": "The week is spending more than it takes in.",
                    "go": [
                      "A",
                      "B",
                      "D"
                    ]
                  },
                  {
                    "a": "Both low, both days",
                    "m": "A slow metabolic rate. Thyroid markers.",
                    "go": [
                      "I"
                    ]
                  },
                  {
                    "a": "Both ordinary",
                    "m": "Look at alcohol, caffeine and how the weekend is planned.",
                    "go": [
                      "F",
                      "G",
                      "H"
                    ]
                  }
                ]
              },
              {
                "tier": "home",
                "q": "Two weeks: three fixed meals on workdays and the weekday wake time on Saturday.",
                "how": "",
                "out": [
                  {
                    "a": "Saturday improves",
                    "m": "",
                    "go": [
                      "A",
                      "C"
                    ]
                  },
                  {
                    "a": "No change",
                    "m": "Run the deload week if you train, then the panel.",
                    "go": [
                      "D"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "TSH with free T4 and free T3, and total cholesterol",
                "how": "",
                "out": [
                  {
                    "a": "Any of those three",
                    "m": "TSH in the upper part of the range, free T3 in the lower part, or cholesterol that has risen: thyroid function is worth a proper look with your doctor.",
                    "go": [
                      "I"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "Ferritin with transferrin saturation and a full blood count; vitamin D (25-OH); fasting glucose",
                "how": "",
                "out": [
                  {
                    "a": "Low ferritin, low saturation, low haemoglobin or low vitamin D",
                    "m": "",
                    "go": [
                      "J"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "Morning total and free testosterone with SHBG",
                "how": "Draw after an ordinary night, two days clear of hard training.",
                "out": [
                  {
                    "a": "Low, or total normal with free low",
                    "m": "Repeat it before drawing a conclusion, then take both results to your doctor.",
                    "go": [
                      "J"
                    ]
                  }
                ]
              }
            ],
            "actions": [
              [
                "Weekdays",
                "Three meals at fixed times. Lunch goes in the calendar.",
                "The most common cause, and the cheapest to rule out."
              ],
              [
                "Saturday",
                "Up at the weekday time, outside, thirty minutes of walking at a pace you can talk at.",
                "Keeps the clock where it was and tests the lie-in."
              ],
              [
                "Wednesday and Sunday",
                "Temperature and pulse on waking.",
                "The home test."
              ]
            ],
            "outcome": [
              "SAT",
              "A Saturday you spend",
              "Up at the usual time with plans you keep, because Friday did not empty you."
            ],
            "pdf": "page 4, the 15:30 recovery block; pages 2 to 5, the three meals and when they fall.",
            "call": "Ask which causes they marked. Then the holiday question, a normal Tuesday's food by the hour, Saturday's wake time and the training week.",
            "opener": "The weekends stood out. When you take a week off, does your energy come back by the end of it?"
          },
          b: {
            "id": "03B",
            "name": "Days to bounce back",
            "headline": "It takes days to bounce back. Find what is slowing it.",
            "lead": "It takes you days to come back from a hard session or a heavy week. Recovery is built from food and sleep afterwards. It slows when the session asks too much, when the supply is short, or when something in your body isn't doing its part.",
            "causes": [
              {
                "k": "A",
                "name": "Food has not kept up with training",
                "why": "When volume rises and intake stays fixed, the body pays for sessions with stress hormones and tissue.",
                "tell": "training went up in the last two months and food did not, your weight is drifting down, and you are hungry or cold.",
                "fix": [
                  "Raise food as volume rises, starting with carbohydrate around the session.",
                  "Weigh yourself weekly for a month."
                ]
              },
              {
                "k": "B",
                "name": "Training on empty",
                "why": "Hard work with nothing eaten for hours stacks one stress on another.",
                "tell": "you train fasted, or more than three hours after your last food.",
                "fix": [
                  "A light meal ninety minutes before: rice or rice noodles with lean protein, little fat.",
                  "Sip juice with salt during the session."
                ]
              },
              {
                "k": "C",
                "name": "Too much volume, or every set to failure",
                "why": "More weekly work gives smaller returns each time, and sets taken to failure cost more recovery than they give back. Hard intervals count as hard training.",
                "tell": "the same lifts are flat or falling, and soreness lasts into the next session.",
                "fix": [
                  "Stop each set with two reps in hand.",
                  "Deload for a week: half the hard sets.",
                  "Count interval days as hard days."
                ]
              },
              {
                "k": "D",
                "name": "Lowering-heavy or unfamiliar work",
                "why": "Eccentric work, where the muscle lengthens under load, does the most damage: downhill running, slow negatives, any new exercise.",
                "tell": "the long soreness follows downhill runs, new movements or tempo work.",
                "fix": [
                  "Favour work where the muscle shortens under load: uphill walking, cycling, swimming, rowing, stairs.",
                  "Add new movements a few sets at a time."
                ]
              },
              {
                "k": "E",
                "name": "Short sleep",
                "why": "Adaptation happens asleep.",
                "tell": "you sleep under seven hours on training nights, or evening sessions keep you up.",
                "fix": [
                  "Train earlier, or make evening sessions easy.",
                  "Work through the Sleep result."
                ]
              },
              {
                "k": "F",
                "name": "Protein is short or lopsided",
                "why": "Repair needs complete protein across the day.",
                "tell": "you get one protein meal a day.",
                "fix": [
                  "A complete protein at each meal: eggs, milk, meat or fish, with gelatin or broth beside muscle meat."
                ]
              },
              {
                "k": "G",
                "name": "Cold straight after strength work",
                "why": "A cold plunge right after lifting damps the inflammation that tells muscle to adapt.",
                "tell": "you plunge after heavy sessions.",
                "fix": [
                  "Heat after training. In a human study, heat applied to muscle restored mitochondrial function."
                ]
              },
              {
                "k": "H",
                "name": "Sweat and salt",
                "why": "Heavy sweat loss without salt leaves cramps, headaches and a flat day after.",
                "tell": "you sweat heavily, cramp, or get a headache after sessions.",
                "fix": [
                  "Salt in the drink, during and after."
                ]
              },
              {
                "k": "I",
                "name": "Alcohol after sessions",
                "why": "It breaks the sleep in which recovery happens.",
                "tell": "the slow weeks include post-training or weekend drinks.",
                "fix": [
                  "Two dry weeks and compare."
                ]
              },
              {
                "k": "J",
                "name": "Work stress on top",
                "why": "The body adds up load from all sources. A hard month at work makes the same program too much.",
                "tell": "recovery slowed when work got heavier, with training unchanged.",
                "fix": [
                  "Cut training volume by a third in heavy weeks."
                ]
              },
              {
                "k": "K",
                "name": "An illness you are training through",
                "why": "A low-grade infection raises resting pulse and makes sessions feel harder.",
                "tell": "your waking pulse is up and a normal session feels like a hard one.",
                "fix": [
                  "Rest until the waking pulse is back to normal."
                ]
              },
              {
                "k": "L",
                "name": "Iron, thyroid or testosterone",
                "why": "Low iron, low thyroid function and low testosterone each slow repair. In the guide's words, adding a booster while the deficit continues misses the cause, so these are checked after food and load.",
                "tell": "heavy legs and breathlessness, feeling cold, or libido and morning erections gone.",
                "fix": [
                  "The panel tier below, drawn after two rest days."
                ]
              },
              {
                "k": "M",
                "name": "Medication",
                "why": "Statins cause muscle soreness in some people, and other medicines lower exercise tolerance.",
                "tell": "it began with a prescription.",
                "fix": [
                  "Raise it with your doctor."
                ]
              },
              {
                "k": "N",
                "name": "An injury",
                "why": "Pain that is sharp, in a joint or on one side is not soreness.",
                "tell": "one spot hurts, the same way, every time.",
                "fix": [
                  "Have it examined before you train through it."
                ]
              }
            ],
            "tree": [
              {
                "tier": "now",
                "q": "Is it soreness in the muscle on both sides, or a sharp pain in one place?",
                "how": "",
                "out": [
                  {
                    "a": "One place, sharp, or in a joint",
                    "m": "Get it examined.",
                    "go": [
                      "N"
                    ]
                  },
                  {
                    "a": "General soreness and fatigue",
                    "m": "Go on.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "now",
                "q": "In the last eight weeks, has training gone up? Has food?",
                "how": "",
                "out": [
                  {
                    "a": "Training up, food the same",
                    "m": "",
                    "go": [
                      "A"
                    ]
                  },
                  {
                    "a": "Both the same",
                    "m": "Go on.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "now",
                "q": "Do you train fasted, take most sets to failure, or sleep under seven hours?",
                "how": "",
                "out": [
                  {
                    "a": "Fasted",
                    "m": "",
                    "go": [
                      "B"
                    ]
                  },
                  {
                    "a": "To failure, or four or more hard days",
                    "m": "",
                    "go": [
                      "C"
                    ]
                  },
                  {
                    "a": "Short sleep",
                    "m": "",
                    "go": [
                      "E"
                    ]
                  },
                  {
                    "a": "None of these",
                    "m": "Go to the home test.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "home",
                "q": "Waking pulse the morning after a hard session against a rest-day morning, for two weeks. Weigh yourself weekly.",
                "how": "",
                "out": [
                  {
                    "a": "Pulse stays raised two mornings or more",
                    "m": "Sessions are larger than your recovery.",
                    "go": [
                      "A",
                      "C",
                      "E"
                    ]
                  },
                  {
                    "a": "Weight falling",
                    "m": "",
                    "go": [
                      "A"
                    ]
                  },
                  {
                    "a": "Pulse raised on rest days too",
                    "m": "Illness, or work stress.",
                    "go": [
                      "K",
                      "J"
                    ]
                  }
                ]
              },
              {
                "tier": "home",
                "q": "One deload week: half the hard sets, nothing to failure.",
                "how": "",
                "out": [
                  {
                    "a": "The bounce comes back",
                    "m": "Volume was the cause. Rebuild to about three quarters.",
                    "go": [
                      "C"
                    ]
                  },
                  {
                    "a": "Still flat after the load has dropped",
                    "m": "Training has exposed another problem. Take the panel.",
                    "go": [
                      "L"
                    ]
                  }
                ]
              },
              {
                "tier": "home",
                "q": "Two weeks eating ninety minutes before and drinking salted juice during.",
                "how": "",
                "out": [
                  {
                    "a": "Soreness shortens",
                    "m": "",
                    "go": [
                      "A",
                      "B"
                    ]
                  },
                  {
                    "a": "No change",
                    "m": "Take the panel.",
                    "go": [
                      "L"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "Ferritin with transferrin saturation and a full blood count",
                "how": "",
                "out": [
                  {
                    "a": "Low",
                    "m": "Iron, more often in endurance training.",
                    "go": [
                      "L"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "TSH with free T4 and free T3; fasting glucose; vitamin D (25-OH)",
                "how": "",
                "out": [
                  {
                    "a": "Free T3 low with TSH normal",
                    "m": "Often a sign of under-eating. Check cause A again before anything else.",
                    "go": [
                      "A",
                      "L"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "Morning total and free testosterone with SHBG and LH",
                "how": "After two rest days and an ordinary night.",
                "out": [
                  {
                    "a": "Low with LH low or normal",
                    "m": "Fits a recovery deficit. Restore food and sleep, then repeat.",
                    "go": [
                      "A",
                      "L"
                    ]
                  },
                  {
                    "a": "Low with LH high",
                    "m": "A different pattern. See your doctor.",
                    "go": [
                      "L"
                    ]
                  }
                ]
              }
            ],
            "actions": [
              [
                "90 min before",
                "Eat a light, fast meal before training.",
                "Removes training on empty as a cause."
              ],
              [
                "During",
                "Stop each set with two reps in hand, and sip juice with salt.",
                "Lowers the cost of the session without removing it."
              ],
              [
                "Next morning",
                "Take your waking pulse.",
                "The home test."
              ]
            ],
            "outcome": [
              "18:00",
              "The workout is still in you",
              "Training goes back to being the thing you want to do, because recovery keeps up with what you ask of it."
            ],
            "pdf": "page 4, noon lunch to the 15:30 recovery block; Stack 06 · Workout electrolytes.",
            "call": "Ask which causes they marked. Then the training week (days, volume, how close to failure), food before and after, weight trend, and what changed in the last two months.",
            "opener": "Recovery after training stood out. What has changed in your training or your work in the last couple of months?"
          }
        }
      },
      fuel: {
        label: "Fuel", code: "D-04", area: "Protocols doc Stack 01 / 05 · Metabolic, electrolytes",
        results: {
          a: {
            "id": "04A",
            "name": "The fourth coffee",
            "headline": "The day runs on coffee. Find what the coffee is covering.",
            "lead": "Your day depends on caffeine. Caffeine doesn't make energy; it raises the rate at which you spend it. If you can't function without it, something underneath is short, and this list is everything I'd check.",
            "causes": [
              {
                "k": "A",
                "name": "Not enough sleep, or poor sleep",
                "why": "Caffeine blocks the signal of sleep pressure. If the pressure is high every morning, sleep is the cause and coffee is the cover.",
                "tell": "you need it to open your eyes, and you sleep longer when you can.",
                "fix": [
                  "Work through the Sleep result first.",
                  "Last caffeine at noon so tonight is not made worse."
                ]
              },
              {
                "k": "B",
                "name": "Coffee before food",
                "why": "With food on board caffeine raises metabolism. On an empty stomach blood sugar falls and adrenaline covers the gap. That lift fades fast and the next cup repeats it from lower down.",
                "tell": "coffee comes before breakfast, you get shaky or jittery, and there is a dip an hour or two later.",
                "fix": [
                  "Food first, then coffee with it, with milk or sugar in the cup."
                ]
              },
              {
                "k": "C",
                "name": "Coffee in place of meals",
                "why": "Caffeine blunts appetite, so the cup becomes the meal and the day is short on fuel.",
                "tell": "coffee is breakfast, or lunch slides when you have had a cup.",
                "fix": [
                  "Eat by the clock for two weeks.",
                  "See result 04B."
                ]
              },
              {
                "k": "D",
                "name": "Tolerance and withdrawal",
                "why": "Daily caffeine raises the number of receptors it blocks. After a while most of each cup goes to getting back to normal.",
                "tell": "without it you have a headache and fog by late morning, and each cup works for less time than it used to.",
                "fix": [
                  "Come down one cup every four or five days. Stopping at once gives three bad days and usually a relapse."
                ]
              },
              {
                "k": "E",
                "name": "Caffeine late, sleep poor, more caffeine",
                "why": "Afternoon cups cut deep sleep, and the tired morning asks for more.",
                "tell": "you have caffeine after noon.",
                "fix": [
                  "Noon cutoff for two weeks."
                ]
              },
              {
                "k": "F",
                "name": "Slow clearance",
                "why": "The liver clears caffeine. Some people clear it slowly, and liver strain, the contraceptive pill and some medicines slow it further.",
                "tell": "one cup lasts all day, a small amount makes you jittery, or coffee has started to bother you when it did not before.",
                "fix": [
                  "Less, and earlier.",
                  "Ask for liver enzymes on the panel."
                ]
              },
              {
                "k": "G",
                "name": "The lunch dip",
                "why": "A large lunch followed by a chair gives a wall sixty to ninety minutes later.",
                "tell": "the cup you need most is the one after lunch.",
                "fix": [
                  "Protein with the carbohydrate at lunch, then a twenty-minute walk. Walking muscle takes up sugar without insulin."
                ]
              },
              {
                "k": "H",
                "name": "Blood sugar handling",
                "why": "When insulin runs high, meals are followed by sleepiness and the reach for caffeine.",
                "tell": "you are sleepy after eating, and your waist has grown.",
                "fix": [
                  "Fasting insulin and HbA1c on the panel.",
                  "The walk after meals."
                ]
              },
              {
                "k": "I",
                "name": "A slow metabolic rate",
                "why": "Caffeine and thyroid hormone both raise metabolic rate. Leaning on one can mean the other is low.",
                "tell": "you run cold, your waking temperature is low, and you are tired even with coffee.",
                "fix": [
                  "The home test and thyroid markers below."
                ]
              },
              {
                "k": "J",
                "name": "Low iron or anaemia",
                "why": "Less oxygen carried is fatigue that no stimulant fixes.",
                "tell": "stairs leave you breathless, you look pale, or your periods are heavy.",
                "fix": [
                  "Ferritin with transferrin saturation and a blood count.",
                  "If ferritin comes back low, ask about keeping coffee and tea away from iron-rich meals."
                ]
              },
              {
                "k": "K",
                "name": "Dehydration or low salt",
                "why": "Coffee is often the only fluid until lunch.",
                "tell": "you have a headache by mid-morning and dark urine.",
                "fix": [
                  "A glass of water with a pinch of salt on waking, before the first cup."
                ]
              },
              {
                "k": "L",
                "name": "The cup is the break",
                "why": "Sometimes the coffee is the only permitted pause in the day.",
                "tell": "you would be fine without the caffeine and would miss the walk to the machine.",
                "fix": [
                  "Keep the break and change what is in the cup after noon."
                ]
              },
              {
                "k": "M",
                "name": "Attention that has always needed help",
                "why": "Some people have used caffeine since their teens to hold attention.",
                "tell": "focus has been hard since school, and coffee calms you more than it lifts you.",
                "fix": [
                  "Talk to your doctor about an assessment."
                ]
              },
              {
                "k": "N",
                "name": "A sleep disorder",
                "why": "Daytime sleepiness after full nights is the main sign of a closing airway.",
                "tell": "you sleep seven or eight hours, snore, and still doze in meetings.",
                "fix": [
                  "Result 01B, starting with the audio recording."
                ]
              }
            ],
            "tree": [
              {
                "tier": "now",
                "q": "How many hours did you sleep last night, and did it restore you?",
                "how": "",
                "out": [
                  {
                    "a": "Under seven, or unrefreshing",
                    "m": "Sleep comes first.",
                    "go": [
                      "A",
                      "N"
                    ]
                  },
                  {
                    "a": "Seven or more and rested",
                    "m": "Go on.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "now",
                "q": "What comes first in your morning, coffee or food?",
                "how": "",
                "out": [
                  {
                    "a": "Coffee",
                    "m": "",
                    "go": [
                      "B",
                      "C"
                    ]
                  },
                  {
                    "a": "Food",
                    "m": "Go on.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "now",
                "q": "When is your last cup, and which cup do you need most?",
                "how": "",
                "out": [
                  {
                    "a": "Last cup after noon",
                    "m": "",
                    "go": [
                      "E"
                    ]
                  },
                  {
                    "a": "The one after lunch",
                    "m": "",
                    "go": [
                      "G",
                      "H"
                    ]
                  },
                  {
                    "a": "The first",
                    "m": "",
                    "go": [
                      "A",
                      "D"
                    ]
                  }
                ]
              },
              {
                "tier": "home",
                "q": "Two mornings. Day one: pulse, then your usual coffee on an empty stomach, pulse again after thirty minutes. Day two: the same with coffee after breakfast.",
                "how": "",
                "out": [
                  {
                    "a": "A clear jump on the empty-stomach day, little on the other",
                    "m": "The lift you feel is adrenaline.",
                    "go": [
                      "B"
                    ]
                  },
                  {
                    "a": "A jump on both days, lasting hours",
                    "m": "Slow clearance.",
                    "go": [
                      "F"
                    ]
                  },
                  {
                    "a": "Little change on either",
                    "m": "Tolerance. Go to the next test.",
                    "go": [
                      "D"
                    ]
                  }
                ]
              },
              {
                "tier": "home",
                "q": "One day at half your usual caffeine.",
                "how": "Pick a day that does not matter.",
                "out": [
                  {
                    "a": "Headache and fog by noon",
                    "m": "Dependence. Come down one cup at a time.",
                    "go": [
                      "D"
                    ]
                  },
                  {
                    "a": "Fine",
                    "m": "Caffeine is not what is holding you up. Look at sleep and food.",
                    "go": [
                      "A",
                      "C"
                    ]
                  }
                ]
              },
              {
                "tier": "home",
                "q": "Five mornings: temperature and pulse before breakfast and forty minutes after.",
                "how": "",
                "out": [
                  {
                    "a": "Both rise after eating",
                    "m": "Normal. Food is doing its job.",
                    "go": []
                  },
                  {
                    "a": "Either falls after eating",
                    "m": "Stress hormones were holding you up before the meal.",
                    "go": [
                      "C",
                      "I"
                    ]
                  },
                  {
                    "a": "Temperature under about 36.6 °C (98 °F) throughout",
                    "m": "Thyroid markers.",
                    "go": [
                      "I"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "Fasting glucose, fasting insulin, HbA1c",
                "how": "",
                "out": [
                  {
                    "a": "Insulin high or HbA1c creeping up",
                    "m": "",
                    "go": [
                      "H"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "Ferritin with transferrin saturation and a full blood count; liver enzymes (ALT, AST, GGT)",
                "how": "",
                "out": [
                  {
                    "a": "Low ferritin or haemoglobin",
                    "m": "",
                    "go": [
                      "J"
                    ]
                  },
                  {
                    "a": "Raised liver enzymes",
                    "m": "Fits slow clearance. Take it to your doctor.",
                    "go": [
                      "F"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "TSH with free T4 and free T3, and total cholesterol",
                "how": "",
                "out": [
                  {
                    "a": "Any of those three",
                    "m": "TSH in the upper part of the range, free T3 in the lower part, or cholesterol that has risen: thyroid function is worth a proper look with your doctor.",
                    "go": [
                      "I"
                    ]
                  }
                ]
              }
            ],
            "actions": [
              [
                "06:30",
                "A glass of water with a pinch of salt, then breakfast, then coffee with it.",
                "Tests coffee-before-food and dehydration on day one."
              ],
              [
                "Noon",
                "Last caffeine, with lunch.",
                "Protects tonight's sleep, which is the most common thing coffee covers."
              ],
              [
                "After lunch",
                "Twenty minutes on foot before you sit down.",
                "Tests the lunch dip."
              ]
            ],
            "outcome": [
              "14:00",
              "No wall",
              "Two o'clock is just another hour, and the four o'clock meeting gets the same person the nine o'clock did."
            ],
            "pdf": "page 2, breakfast and the espresso; Stack 02 · Metabolic mastery, where the caffeine entry explains the pairing with food.",
            "call": "Ask which causes they marked. Then first coffee against first food, cups by 15:00, hours slept, and what a day without any is like.",
            "opener": "The caffeine stood out. Which cup of the day could you least do without?"
          },
          b: {
            "id": "04B",
            "name": "Skipped and grabbed",
            "headline": "Meals and water are hit and miss. Find why, and what it costs you.",
            "lead": "Your meals and water are hit and miss. When you miss a meal, adrenaline and cortisol hold your blood sugar up and your liver makes less active thyroid hormone. That part is the same for everyone. What I'd want to know is why the meals get missed, because the fix depends on the reason.",
            "causes": [
              {
                "k": "A",
                "name": "No appetite in the morning",
                "why": "Stress hormones that ran high overnight shut appetite down on waking. A large late dinner does the same.",
                "tell": "breakfast makes you slightly sick and the first real hunger is after noon.",
                "fix": [
                  "Start small and liquid: milk, juice, fruit, something salty.",
                  "Move food earlier over two weeks; morning hunger returns as the night settles."
                ]
              },
              {
                "k": "B",
                "name": "No slot for it",
                "why": "A calendar with no gap produces a diet of whatever is nearby.",
                "tell": "you would eat if the food and ten minutes were there.",
                "fix": [
                  "Lunch as a fixed calendar entry.",
                  "The same breakfast every workday, and lunch prepared the night before."
                ]
              },
              {
                "k": "C",
                "name": "Coffee stands in for the meal",
                "why": "Caffeine blunts hunger for a few hours.",
                "tell": "you notice at 15:00 that you have had three coffees and no food.",
                "fix": [
                  "Food before the first cup.",
                  "See result 04A."
                ]
              },
              {
                "k": "D",
                "name": "Skipping on purpose",
                "why": "Fasting windows and low-carbohydrate plans are missed meals by design. Four days of calorie restriction is enough to lower active thyroid hormone.",
                "tell": "you fast or restrict deliberately, and since starting you are colder, sleeping worse, or flatter in training.",
                "fix": [
                  "If energy is the complaint, pause the plan for two weeks, eat three meals, and compare."
                ]
              },
              {
                "k": "E",
                "name": "Busy days switch hunger off",
                "why": "Adrenaline suppresses appetite. On the days you most need fuel you feel no hunger.",
                "tell": "you forget to eat on high-pressure days and eat normally on quiet ones.",
                "fix": [
                  "On those days eat by the clock, whether or not you are hungry."
                ]
              },
              {
                "k": "F",
                "name": "What gets grabbed is mostly sugar or mostly nothing",
                "why": "A pastry and a coffee is fuel for an hour. Protein eaten with no carbohydrate drops blood sugar.",
                "tell": "energy lifts for an hour after eating and then drops below where it started.",
                "fix": [
                  "Carbohydrate and protein together each time, salted."
                ]
              },
              {
                "k": "G",
                "name": "Water without salt",
                "why": "Water follows sodium. Without salt most of what you drink passes straight through.",
                "tell": "you drink a lot, urinate clear and often, and are still thirsty or headachy.",
                "fix": [
                  "Drink to thirst, not to a quota.",
                  "A pinch of salt in the first glass of the day and after sweating."
                ]
              },
              {
                "k": "H",
                "name": "Not drinking",
                "why": "Mild dehydration reads as fatigue and a headache.",
                "tell": "your urine is dark by afternoon and you rarely feel thirst until evening.",
                "fix": [
                  "A glass on waking and one with each meal."
                ]
              },
              {
                "k": "I",
                "name": "Sudden hunger and crashes",
                "why": "When blood sugar swings, hunger arrives all at once with shakiness, and the nearest sugar gets grabbed.",
                "tell": "you go from fine to shaky and irritable in minutes.",
                "fix": [
                  "Regular meals with protein.",
                  "Fasting insulin and HbA1c on the panel."
                ]
              },
              {
                "k": "J",
                "name": "The gut makes eating unappealing",
                "why": "Reflux, bloating or nausea after meals teaches you to put eating off.",
                "tell": "meals are followed by discomfort.",
                "fix": [
                  "Note which foods and which times.",
                  "Symptoms that persist, or any bleeding, weight loss or night-time pain, need a doctor."
                ]
              },
              {
                "k": "K",
                "name": "Medication",
                "why": "Attention medication, weight-loss injections, metformin and some antidepressants reduce appetite.",
                "tell": "appetite changed with a prescription.",
                "fix": [
                  "Raise it with your prescriber. Eat by the clock in the meantime."
                ]
              },
              {
                "k": "L",
                "name": "A slow thyroid",
                "why": "Low thyroid function lowers appetite and slows the gut.",
                "tell": "little appetite, constipation, feeling cold.",
                "fix": [
                  "The home test and thyroid markers below."
                ]
              },
              {
                "k": "M",
                "name": "Low mood",
                "why": "Appetite is one of the first things to go.",
                "tell": "you have had little interest in food for weeks, along with little interest in much else.",
                "fix": [
                  "Talk to your doctor."
                ]
              }
            ],
            "tree": [
              {
                "tier": "now",
                "q": "Think of the last meal you missed. Why was it missed?",
                "how": "",
                "out": [
                  {
                    "a": "Not hungry",
                    "m": "",
                    "go": [
                      "A",
                      "C",
                      "E",
                      "K",
                      "L"
                    ]
                  },
                  {
                    "a": "No time, nothing there",
                    "m": "",
                    "go": [
                      "B"
                    ]
                  },
                  {
                    "a": "On purpose",
                    "m": "",
                    "go": [
                      "D"
                    ]
                  },
                  {
                    "a": "Eating makes me feel worse",
                    "m": "",
                    "go": [
                      "J"
                    ]
                  }
                ]
              },
              {
                "tier": "now",
                "q": "If not hungry: had you had coffee, was it a high-pressure day, or are you on medication?",
                "how": "",
                "out": [
                  {
                    "a": "Coffee",
                    "m": "",
                    "go": [
                      "C"
                    ]
                  },
                  {
                    "a": "Pressure",
                    "m": "",
                    "go": [
                      "E"
                    ]
                  },
                  {
                    "a": "Medication",
                    "m": "",
                    "go": [
                      "K"
                    ]
                  },
                  {
                    "a": "None; just never hungry early",
                    "m": "",
                    "go": [
                      "A",
                      "L"
                    ]
                  }
                ]
              },
              {
                "tier": "now",
                "q": "How much plain water do you drink, and what colour is your urine by mid-afternoon?",
                "how": "",
                "out": [
                  {
                    "a": "A lot; clear, and often",
                    "m": "",
                    "go": [
                      "G"
                    ]
                  },
                  {
                    "a": "Little; dark",
                    "m": "",
                    "go": [
                      "H"
                    ]
                  },
                  {
                    "a": "Pale yellow",
                    "m": "Water is not the issue.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "home",
                "q": "Three days: write down everything you eat and drink with the time.",
                "how": "",
                "out": [
                  {
                    "a": "Gaps of five hours or more in the day",
                    "m": "The gaps are the cost, whatever their reason.",
                    "go": [
                      "B"
                    ]
                  },
                  {
                    "a": "First food after noon",
                    "m": "",
                    "go": [
                      "A",
                      "C"
                    ]
                  },
                  {
                    "a": "Regular times, small or sugary portions",
                    "m": "",
                    "go": [
                      "F"
                    ]
                  }
                ]
              },
              {
                "tier": "home",
                "q": "Five mornings: temperature and pulse before breakfast and forty minutes after.",
                "how": "",
                "out": [
                  {
                    "a": "Both rise after eating",
                    "m": "Normal.",
                    "go": []
                  },
                  {
                    "a": "Either falls after eating",
                    "m": "Stress hormones were holding you up before the meal.",
                    "go": [
                      "A",
                      "D"
                    ]
                  },
                  {
                    "a": "Temperature under about 36.6 °C (98 °F) throughout",
                    "m": "Thyroid markers.",
                    "go": [
                      "L"
                    ]
                  }
                ]
              },
              {
                "tier": "home",
                "q": "Two weeks of three fixed meals. Score your energy at 14:30 from 1 to 5 each day.",
                "how": "",
                "out": [
                  {
                    "a": "The 14:30 score climbs",
                    "m": "The gaps were the cause.",
                    "go": [
                      "B"
                    ]
                  },
                  {
                    "a": "No change",
                    "m": "Take the panel.",
                    "go": [
                      "I",
                      "L"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "Fasting glucose, fasting insulin, HbA1c",
                "how": "",
                "out": [
                  {
                    "a": "Insulin high or HbA1c creeping up",
                    "m": "",
                    "go": [
                      "I"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "Sodium and potassium; ferritin with transferrin saturation",
                "how": "",
                "out": [
                  {
                    "a": "Sodium at the low end",
                    "m": "",
                    "go": [
                      "G"
                    ]
                  },
                  {
                    "a": "Low ferritin",
                    "m": "Often follows months of eating little. Take it to your doctor.",
                    "go": [
                      "D"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "TSH with free T4 and free T3, and total cholesterol",
                "how": "",
                "out": [
                  {
                    "a": "Any of those three",
                    "m": "TSH in the upper part of the range, free T3 in the lower part, or cholesterol that has risen: thyroid function is worth a proper look with your doctor.",
                    "go": [
                      "L"
                    ]
                  }
                ]
              }
            ],
            "actions": [
              [
                "06:30",
                "A glass of water with a pinch of salt before anything else.",
                "You wake a few hundred millilitres short, and sodium holds the water in."
              ],
              [
                "Within 90 min of waking",
                "Eat something with carbohydrate and protein, however small.",
                "Ends the overnight fast before stress hormones have to."
              ],
              [
                "Noon",
                "Lunch at a fixed time, in the calendar, then a twenty-minute walk.",
                "The fixed lunch is the meal that prevents the 14:30 wall."
              ]
            ],
            "outcome": [
              "14:00",
              "No wall",
              "Lunch happened, the afternoon is flat and even, and you arrive at dinner hungry in the ordinary way."
            ],
            "pdf": "pages 2 and 4, breakfast and the noon lunch; Stack 01 · Morning electrolytes.",
            "call": "Ask which causes they marked. Then have them walk through yesterday's food and drink by the clock, and ask why each gap happened.",
            "opener": "Meals stood out. The last time you skipped one, was it no time, no appetite, or on purpose?"
          }
        }
      },
      focus: {
        label: "Focus", code: "D-05", area: "Protocols doc Stack 10 · Cognition",
        results: {
          a: {
            "id": "05A",
            "name": "Minutes, then drift",
            "headline": "Focus lasts minutes. Find what breaks it.",
            "lead": "You can hold deep focus for minutes. Attention fails for reasons of supply (fuel, sleep, light, blood markers), reasons of setting (your phone, the hour, the task) and, for some people, wiring. I split the first two with one question: can you still hold an hour on something you enjoy?",
            "causes": [
              {
                "k": "A",
                "name": "Fuel runs short mid-task",
                "why": "The brain runs on a continuous supply of glucose and keeps almost no reserve. When supply dips, adrenaline props it up, and adrenaline produces scanning: checking, switching tabs, reaching for the phone.",
                "tell": "focus is better after eating and worst late in the morning, and your hands are cold at the desk.",
                "fix": [
                  "Carbohydrate and protein before the work starts, coffee with the meal.",
                  "Fruit or juice at the first sign of drift."
                ]
              },
              {
                "k": "B",
                "name": "Short or poor sleep",
                "why": "Sustained attention is the first thing sleep loss takes.",
                "tell": "focus tracks last night.",
                "fix": [
                  "Work through the Sleep result."
                ]
              },
              {
                "k": "C",
                "name": "The phone and the inbox",
                "why": "Each interruption restarts the climb to full depth.",
                "tell": "the phone is on the desk with notifications on, and you focus well on a plane.",
                "fix": [
                  "Phone in another room, inbox closed, one ninety-minute block."
                ]
              },
              {
                "k": "D",
                "name": "The wrong hours",
                "why": "The three to four hours after breakfast are the best of the day for concentration: the night has cleared sleep pressure and cortisol is near its peak.",
                "tell": "mornings go to email and the hard work is attempted after lunch.",
                "fix": [
                  "Hardest task at 08:30."
                ]
              },
              {
                "k": "E",
                "name": "The task is not defined",
                "why": "Attention slides off work that has no clear next step.",
                "tell": "you drift at the start of vague tasks and are fine once inside a clear one.",
                "fix": [
                  "Before the block, write the next physical action in one line."
                ]
              },
              {
                "k": "F",
                "name": "Caffeine, mis-timed",
                "why": "On an empty stomach it gives adrenaline and scanning. Too much gives the same.",
                "tell": "you are alert and cannot stay on one thing.",
                "fix": [
                  "With food, two cups, the last at noon."
                ]
              },
              {
                "k": "G",
                "name": "Dim light, stillness and cold",
                "why": "Bright light supports dopamine, movement keeps blood flowing to the brain, and warmth supports both body and mind.",
                "tell": "you work better by a window, standing, or after a walk.",
                "fix": [
                  "A bright room or a window seat.",
                  "Stand or walk for part of the block, and keep warm."
                ]
              },
              {
                "k": "H",
                "name": "A worry using the space",
                "why": "A problem you have not written down takes up working memory.",
                "tell": "the mind drifts to the same subject each time.",
                "fix": [
                  "Write it down with one next step before the block.",
                  "See the Stress Load result."
                ]
              },
              {
                "k": "I",
                "name": "Short-form video",
                "why": "Hours of ten-second clips train attention to expect a change every few seconds.",
                "tell": "you cannot read a page of a book without reaching for the phone.",
                "fix": [
                  "One week without short video and compare."
                ]
              },
              {
                "k": "J",
                "name": "A heavy, fatty lunch",
                "why": "In the study Haidut cites, raised blood triglycerides lowered cognition.",
                "tell": "the fog comes after a large or fried lunch.",
                "fix": [
                  "Rice or potatoes with lean protein at lunch, then a walk.",
                  "Fasting triglycerides on the panel."
                ]
              },
              {
                "k": "K",
                "name": "A slow thyroid",
                "why": "Low thyroid function slows nerve conduction. Peat ties slow reaction time to slowed memory and perception.",
                "tell": "recall and reactions feel slow, and you run cold.",
                "fix": [
                  "The home test and thyroid markers below."
                ]
              },
              {
                "k": "L",
                "name": "Iron, B12 or vitamin D",
                "why": "Each is a known cause of poor concentration.",
                "tell": "poor focus comes with breathlessness, pale skin, tingling in hands or feet, or winter low mood.",
                "fix": [
                  "The panel tier below."
                ]
              },
              {
                "k": "M",
                "name": "Eyes",
                "why": "Uncorrected vision makes reading tiring within minutes.",
                "tell": "you get headaches or sore eyes when reading.",
                "fix": [
                  "An eye test."
                ]
              },
              {
                "k": "N",
                "name": "Medication, alcohol, cannabis",
                "why": "Sedating antihistamines, sleep aids, last night's drinks and regular cannabis all dull attention.",
                "tell": "the fog tracks with something you take.",
                "fix": [
                  "Ask your pharmacist; run two weeks without the non-prescribed ones."
                ]
              },
              {
                "k": "O",
                "name": "Lifelong attention pattern",
                "why": "For some people this has always been so, in every setting.",
                "tell": "school reports said the same thing, and it happens at home as well as at work.",
                "fix": [
                  "Talk to your doctor about an assessment."
                ]
              },
              {
                "k": "P",
                "name": "Low mood or anxiety",
                "why": "Both narrow attention.",
                "tell": "poor focus arrived with a change in mood.",
                "fix": [
                  "Talk to your doctor."
                ]
              }
            ],
            "tree": [
              {
                "tier": "now",
                "q": "Has it always been like this, since school?",
                "how": "",
                "out": [
                  {
                    "a": "Yes, everywhere",
                    "m": "",
                    "go": [
                      "O"
                    ]
                  },
                  {
                    "a": "No, it got worse",
                    "m": "Go on.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "now",
                "q": "Can you hold an hour on something you enjoy: a film, a game, a book?",
                "how": "",
                "out": [
                  {
                    "a": "Yes",
                    "m": "Attention works. The setting or the task is the cause.",
                    "go": [
                      "C",
                      "D",
                      "E",
                      "H"
                    ]
                  },
                  {
                    "a": "No",
                    "m": "Supply is short.",
                    "go": [
                      "A",
                      "B",
                      "K",
                      "L"
                    ]
                  }
                ]
              },
              {
                "tier": "now",
                "q": "During deep work, where is your phone, and had you eaten?",
                "how": "",
                "out": [
                  {
                    "a": "On the desk",
                    "m": "",
                    "go": [
                      "C"
                    ]
                  },
                  {
                    "a": "Not eaten",
                    "m": "",
                    "go": [
                      "A"
                    ]
                  },
                  {
                    "a": "Away, and fed",
                    "m": "Go to the home test.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "home",
                "q": "One week: start a timer when you begin deep work and stop it the first time you switch away.",
                "how": "Vary one thing per day: fed or unfed, phone near or away, morning or afternoon.",
                "out": [
                  {
                    "a": "Longer on fed mornings",
                    "m": "",
                    "go": [
                      "A"
                    ]
                  },
                  {
                    "a": "Longer with the phone in another room",
                    "m": "",
                    "go": [
                      "C"
                    ]
                  },
                  {
                    "a": "Longer before lunch than after",
                    "m": "",
                    "go": [
                      "D",
                      "J"
                    ]
                  },
                  {
                    "a": "Short whatever you change",
                    "m": "Supply. Run the next test and take the panel.",
                    "go": [
                      "B",
                      "K",
                      "L"
                    ]
                  }
                ]
              },
              {
                "tier": "home",
                "q": "Five mornings: temperature and pulse on waking and forty minutes after breakfast.",
                "how": "",
                "out": [
                  {
                    "a": "Temperature under about 36.6 °C (98 °F), slow pulse",
                    "m": "Thyroid markers.",
                    "go": [
                      "K"
                    ]
                  },
                  {
                    "a": "Fast waking pulse that settles after eating",
                    "m": "Stress hormones held you through the night; fuel and sleep.",
                    "go": [
                      "A",
                      "B"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "TSH with free T4 and free T3, and total cholesterol",
                "how": "",
                "out": [
                  {
                    "a": "Any of those three",
                    "m": "TSH in the upper part of the range, free T3 in the lower part, or cholesterol that has risen: thyroid function is worth a proper look with your doctor.",
                    "go": [
                      "K"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "Ferritin with transferrin saturation; vitamin B12; vitamin D (25-OH)",
                "how": "",
                "out": [
                  {
                    "a": "Any of them low",
                    "m": "",
                    "go": [
                      "L"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "Fasting glucose, fasting insulin, fasting triglycerides",
                "how": "",
                "out": [
                  {
                    "a": "Insulin or triglycerides high",
                    "m": "",
                    "go": [
                      "A",
                      "J"
                    ]
                  }
                ]
              }
            ],
            "actions": [
              [
                "Breakfast",
                "Carbohydrate and protein before work starts, coffee with the meal.",
                "Rules fuel in or out."
              ],
              [
                "08:30",
                "One ninety-minute block on the hardest task, phone in another room, by a window.",
                "Rules the setting in or out."
              ],
              [
                "During",
                "Start a timer. Stop it at the first switch.",
                "Day one of the home test."
              ]
            ],
            "outcome": [
              "10:00",
              "Ninety minutes gone and you did not notice",
              "The hard thing is finished before most people have cleared their inbox."
            ],
            "pdf": "page 3, the 08:30 deep work block; Stack 02 · Metabolic mastery; Stack 05 · Focus.",
            "call": "Ask which causes they marked. Then the enjoy-for-an-hour question, what the first two hours of the workday go to, and whether they eat before them.",
            "opener": "Focus stood out. Can you still lose an hour in something you enjoy, or is it gone there too?"
          },
          b: {
            "id": "05B",
            "name": "The hard call slides",
            "headline": "The hard call keeps moving to tomorrow. Find what is in the way.",
            "lead": "The hard call keeps moving to tomorrow. That comes from low drive, from the hour the call lands in, or from the decision itself. There's very little research on procrastination itself, so the drive causes below come from what's known about dopamine, thyroid and long stress.",
            "causes": [
              {
                "k": "A",
                "name": "It lands in the afternoon",
                "why": "Cortisol, which gets you moving, peaks in the morning and falls all day. A hard call left for 16:00 meets the least drive you will have.",
                "tell": "nearly everything you put off, you put off after 14:00.",
                "fix": [
                  "Hard call first, before the inbox. Choose it the night before and write it down."
                ]
              },
              {
                "k": "B",
                "name": "Too little bright light",
                "why": "Making dopamine needs bright light reaching the retina. Office lighting is a tenth of daylight or less.",
                "tell": "you are indoors from morning to evening, and you are more decisive on holiday.",
                "fix": [
                  "Fifteen minutes outside before any screen.",
                  "Work in the brightest room you have."
                ]
              },
              {
                "k": "C",
                "name": "Protein is short at breakfast",
                "why": "Dopamine is made from tyrosine, which comes from protein.",
                "tell": "breakfast is toast, a pastry or coffee.",
                "fix": [
                  "Eggs, milk or meat with the carbohydrate."
                ]
              },
              {
                "k": "D",
                "name": "Months of pressure with no way out",
                "why": "Chronic stress that effort does not relieve lowers dopamine production and thyroid hormone. The animal work calls it learned helplessness.",
                "tell": "you have been under load for months, effort stopped paying, and you avoid things because the last attempts failed.",
                "fix": [
                  "One small task a day that you can finish and that visibly counts.",
                  "Time with other people; isolation deepens it.",
                  "Reduce the load where you can, and say so on the call."
                ]
              },
              {
                "k": "E",
                "name": "Fear of this particular outcome",
                "why": "A call that risks a conflict or a loss is put off for what it might start.",
                "tell": "it is one kind of decision, or one person, and other hard things get done.",
                "fix": [
                  "Write the first sentence you will say.",
                  "Tell someone the time you will make it."
                ]
              },
              {
                "k": "F",
                "name": "The decision is not ready",
                "why": "A fact is missing and the delay is the mind waiting for it.",
                "tell": "if forced to decide this minute, you would not know which way.",
                "fix": [
                  "Write the options and the one fact that would settle it. Go and get the fact."
                ]
              },
              {
                "k": "G",
                "name": "Too many open",
                "why": "Twenty half-made decisions each take a share of attention.",
                "tell": "there is a long list and all of it is started.",
                "fix": [
                  "One per day, picked the night before. The others are officially not for today."
                ]
              },
              {
                "k": "H",
                "name": "Short sleep",
                "why": "Everything that needs effort costs more.",
                "tell": "the sliding is worse after bad nights.",
                "fix": [
                  "The Sleep result."
                ]
              },
              {
                "k": "I",
                "name": "Eating too little",
                "why": "Restriction lowers active thyroid hormone within days, and drive goes with it.",
                "tell": "you are dieting or fasting and less decisive since.",
                "fix": [
                  "Three meals for two weeks and compare."
                ]
              },
              {
                "k": "J",
                "name": "A slow thyroid",
                "why": "Making dopamine also needs thyroid hormone.",
                "tell": "low drive with feeling cold and slow.",
                "fix": [
                  "The thyroid markers below."
                ]
              },
              {
                "k": "K",
                "name": "Prolactin high, or testosterone low",
                "why": "High prolactin goes with low dopamine tone, and low testosterone with low drive across the board.",
                "tell": "drive is down everywhere: training, sex, hobbies.",
                "fix": [
                  "Prolactin and morning testosterone on the panel. Draw prolactin calmly, not after sex or hard exercise."
                ]
              },
              {
                "k": "L",
                "name": "Medication",
                "why": "Some antidepressants blunt drive. In a study of healthy volunteers, a week of citalopram increased the tendency to avoid acting after failures.",
                "tell": "the sliding started after a prescription.",
                "fix": [
                  "Raise it with your prescriber. Do not stop it yourself."
                ]
              },
              {
                "k": "M",
                "name": "Alcohol or cannabis most days",
                "why": "Both flatten motivation the following day.",
                "tell": "most evenings include one of them.",
                "fix": [
                  "Two weeks without and compare."
                ]
              },
              {
                "k": "N",
                "name": "Low mood",
                "why": "When nothing feels worth starting, the hard call is only the most visible case.",
                "tell": "the flatness covers things you used to want to do.",
                "fix": [
                  "Talk to your doctor."
                ]
              },
              {
                "k": "O",
                "name": "Lifelong pattern",
                "why": "Trouble starting, since school, in every area, often goes with attention difficulties.",
                "tell": "it has always been this way.",
                "fix": [
                  "Talk to your doctor about an assessment."
                ]
              }
            ],
            "tree": [
              {
                "tier": "now",
                "q": "Is it one particular call, or every hard thing?",
                "how": "",
                "out": [
                  {
                    "a": "One call, or one person",
                    "m": "",
                    "go": [
                      "E",
                      "F"
                    ]
                  },
                  {
                    "a": "Everything hard",
                    "m": "Go on.",
                    "go": []
                  }
                ]
              },
              {
                "tier": "now",
                "q": "If you had to decide right now, do you know what you would decide?",
                "how": "",
                "out": [
                  {
                    "a": "No",
                    "m": "The decision is not ready.",
                    "go": [
                      "F"
                    ]
                  },
                  {
                    "a": "Yes, and I still do not make the call",
                    "m": "Fear of the outcome, or low drive.",
                    "go": [
                      "E",
                      "A"
                    ]
                  }
                ]
              },
              {
                "tier": "now",
                "q": "Is drive down outside work as well: training, sex, hobbies?",
                "how": "",
                "out": [
                  {
                    "a": "Yes, everywhere",
                    "m": "",
                    "go": [
                      "D",
                      "J",
                      "K",
                      "N"
                    ]
                  },
                  {
                    "a": "Only at work",
                    "m": "",
                    "go": [
                      "A",
                      "D",
                      "G"
                    ]
                  }
                ]
              },
              {
                "tier": "home",
                "q": "One week: write down each decision you put off and the time of day you put it off.",
                "how": "",
                "out": [
                  {
                    "a": "Nearly all after 14:00",
                    "m": "",
                    "go": [
                      "A"
                    ]
                  },
                  {
                    "a": "Spread through the day",
                    "m": "Timing is not the cause.",
                    "go": [
                      "D",
                      "E"
                    ]
                  }
                ]
              },
              {
                "tier": "home",
                "q": "Five workdays: daylight before any screen, protein at breakfast, the hard call at 08:30.",
                "how": "Choose the call the night before.",
                "out": [
                  {
                    "a": "Made on four days of five",
                    "m": "Light, protein or timing. Drop one at a time to see which.",
                    "go": [
                      "A",
                      "B",
                      "C"
                    ]
                  },
                  {
                    "a": "Still sliding",
                    "m": "It is the decision or the load.",
                    "go": [
                      "D",
                      "E",
                      "F"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "Prolactin",
                "how": "Morning, rested, not after sex or hard exercise.",
                "out": [
                  {
                    "a": "Raised",
                    "m": "Repeat it calmly. If it is still raised, see your doctor.",
                    "go": [
                      "K"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "TSH with free T4 and free T3, and total cholesterol",
                "how": "",
                "out": [
                  {
                    "a": "Any of those three",
                    "m": "TSH in the upper part of the range, free T3 in the lower part, or cholesterol that has risen: thyroid function is worth a proper look with your doctor.",
                    "go": [
                      "J"
                    ]
                  }
                ]
              },
              {
                "tier": "panel",
                "q": "Morning total and free testosterone with SHBG; vitamin D (25-OH); ferritin",
                "how": "",
                "out": [
                  {
                    "a": "Low testosterone, or total normal with free low",
                    "m": "",
                    "go": [
                      "K"
                    ]
                  },
                  {
                    "a": "Low vitamin D or ferritin",
                    "m": "Correct with your doctor and retest.",
                    "go": [
                      "N"
                    ]
                  }
                ]
              }
            ],
            "actions": [
              [
                "Tonight",
                "Choose tomorrow's hard call and write its first sentence.",
                "Removes the morning negotiation."
              ],
              [
                "06:30",
                "Fifteen minutes outside before any screen, then breakfast with a complete protein.",
                "Tests light and protein together."
              ],
              [
                "08:30",
                "Make the call before the inbox.",
                "Tests timing."
              ]
            ],
            "outcome": [
              "14:00",
              "The hard call happened this morning",
              "The afternoon is calls, admin and easy work, by design."
            ],
            "pdf": "page 2, the 06:30 wake-up; pages 3 and 5, how the day is split between the 08:30 and 16:30 blocks; Stack 05 · Focus.",
            "call": "Ask which causes they marked. Then what they are putting off and for how long, whether drive is down outside work, and daylight before noon.",
            "opener": "What is the one thing you have been putting off longest?"
          }
        }
      }
    },

    /* Every driver at 75 or more. If the average of the two energy questions (Q02, Q03) is under 75: "flat". Otherwise: "ok". */
    inRange: {
      flat: {
        "driftLabel": "Outside the five drivers",
        "area": "Bloodwork first",
        "id": "06A",
        "name": "In range, still flat",
        "headline": "Your habits are in order. The cause is somewhere a questionnaire cannot see.",
        "lead": "You sleep, eat, train and switch off about as well as anyone, and your morning or your afternoon is still flat. That rules out the usual advice. What's left is mostly measured in blood, plus a short list of things outside it.",
        "causes": [
          {
            "k": "A",
            "name": "Thyroid conversion",
            "why": "The gland makes mostly T4; about 80% of the active hormone, T3, is made elsewhere in the body. A standard panel reports TSH alone, which can sit in range while T3 is low.",
            "tell": "you run cold, your waking temperature is low, and cholesterol has crept up.",
            "fix": [
              "Ask for free T4 and free T3 beside TSH, and read total cholesterol beside them."
            ]
          },
          {
            "k": "B",
            "name": "Iron, low or high",
            "why": "Low iron limits oxygen delivery. Too much iron is its own problem. Haemoglobin alone shows neither early.",
            "tell": "breathless on stairs, heavy legs, restless legs at night; or a family history of iron overload.",
            "fix": [
              "Ferritin with transferrin saturation and a full blood count. Never take iron without the result."
            ]
          },
          {
            "k": "C",
            "name": "Anaemia or low B12",
            "why": "Both leave tissue short of oxygen.",
            "tell": "pale, short of breath, tingling hands or feet, a sore tongue.",
            "fix": [
              "Full blood count and B12."
            ]
          },
          {
            "k": "D",
            "name": "Blood sugar handling",
            "why": "Fasting glucose is the last number to move. Insulin rises years before it.",
            "tell": "sleepy after meals, a growing waist.",
            "fix": [
              "Fasting insulin and HbA1c beside fasting glucose."
            ]
          },
          {
            "k": "E",
            "name": "Sex hormones",
            "why": "Total testosterone can be normal while the free fraction is low, when SHBG is high. An LH value inside the range can still be wrong for the testosterone beside it.",
            "tell": "low libido, fewer morning erections, slow recovery; in women, cycle changes.",
            "fix": [
              "SHBG, free testosterone, LH, FSH and prolactin beside total testosterone."
            ]
          },
          {
            "k": "F",
            "name": "Low vitamin D",
            "why": "Usually not on a standard panel.",
            "tell": "worse in winter, little sun, aching muscles.",
            "fix": [
              "25-OH vitamin D."
            ]
          },
          {
            "k": "G",
            "name": "A sleep disorder you do not know about",
            "why": "People with a closing airway often rate their sleep as fine.",
            "tell": "you snore, wake with a dry mouth, or doze off in the day.",
            "fix": [
              "Record a night of audio. See result 01B."
            ]
          },
          {
            "k": "H",
            "name": "Medication",
            "why": "Antihistamines, beta blockers, some antidepressants, some blood pressure and pain medicines cause fatigue.",
            "tell": "the flatness began with a prescription or a dose change.",
            "fix": [
              "Review the list with a pharmacist."
            ]
          },
          {
            "k": "I",
            "name": "Alcohol",
            "why": "Regular drinking at levels that feel moderate flattens mornings.",
            "tell": "most evenings include a drink.",
            "fix": [
              "Three weeks without and compare."
            ]
          },
          {
            "k": "J",
            "name": "Infection or its aftermath",
            "why": "Fatigue can outlast an infection by months.",
            "tell": "it began after being ill.",
            "fix": [
              "See your doctor; a blood count and inflammation markers are the start."
            ]
          },
          {
            "k": "K",
            "name": "Low mood",
            "why": "Depression often shows as fatigue with habits intact.",
            "tell": "things you used to look forward to feel flat too.",
            "fix": [
              "Talk to your doctor."
            ]
          },
          {
            "k": "L",
            "name": "Heart or lungs",
            "why": "Uncommon, and it has to be on the list.",
            "tell": "breathless on mild effort, swollen ankles, a racing or irregular pulse.",
            "fix": [
              "See your doctor this week."
            ]
          },
          {
            "k": "M",
            "name": "The reference range",
            "why": "A range is the middle 95% of the people that lab tested, many of them unwell. Inside it means no disease was found. It was never built to say you are well.",
            "tell": "you were told everything is normal and do not feel normal.",
            "fix": [
              "Get the report itself and read the numbers beside their ranges, with someone who reads for optimal."
            ]
          },
          {
            "k": "N",
            "name": "The reading was generous",
            "why": "Fives across the board on a self-report sometimes describe the plan more than the week.",
            "tell": "one of the driver questions made you hesitate.",
            "fix": [
              "Retake it answering for last week only, then follow the driver that drops."
            ]
          }
        ],
        "tree": [
          {
            "tier": "now",
            "q": "When did it start?",
            "how": "",
            "out": [
              {
                "a": "After an illness",
                "m": "",
                "go": [
                  "J"
                ]
              },
              {
                "a": "With a medication or dose change",
                "m": "",
                "go": [
                  "H"
                ]
              },
              {
                "a": "Gradually, no clear start",
                "m": "Go on.",
                "go": []
              }
            ]
          },
          {
            "tier": "now",
            "q": "Breathless on mild effort, swollen ankles, or an irregular pulse?",
            "how": "",
            "out": [
              {
                "a": "Yes",
                "m": "Doctor this week.",
                "go": [
                  "L"
                ]
              },
              {
                "a": "No",
                "m": "Go on.",
                "go": []
              }
            ]
          },
          {
            "tier": "now",
            "q": "Do you snore or doze in the day? Do you drink most evenings?",
            "how": "",
            "out": [
              {
                "a": "Snore or doze",
                "m": "",
                "go": [
                  "G"
                ]
              },
              {
                "a": "Drink most evenings",
                "m": "",
                "go": [
                  "I"
                ]
              },
              {
                "a": "Neither",
                "m": "Go on.",
                "go": []
              }
            ]
          },
          {
            "tier": "now",
            "q": "Do you have your last blood report?",
            "how": "",
            "out": [
              {
                "a": "Yes",
                "m": "Tick it against the table below. Most people find half of the right column was never tested.",
                "go": [
                  "M"
                ]
              },
              {
                "a": "No, or never had one",
                "m": "Ask for the full list on the next draw.",
                "go": []
              }
            ]
          },
          {
            "tier": "home",
            "q": "Fourteen mornings: temperature and pulse on waking, forty minutes after breakfast, and mid-afternoon.",
            "how": "",
            "out": [
              {
                "a": "Waking temperature under about 36.6 °C (98 °F) most days",
                "m": "Thyroid markers first.",
                "go": [
                  "A"
                ]
              },
              {
                "a": "Fast waking pulse that settles after eating",
                "m": "Blood sugar handling.",
                "go": [
                  "D"
                ]
              },
              {
                "a": "All ordinary",
                "m": "The panel decides.",
                "go": []
              }
            ]
          },
          {
            "tier": "panel",
            "q": "TSH, free T4, free T3, total cholesterol",
            "how": "",
            "out": [
              {
                "a": "Free T3 low in range, or cholesterol risen",
                "m": "",
                "go": [
                  "A"
                ]
              }
            ]
          },
          {
            "tier": "panel",
            "q": "Ferritin with transferrin saturation, full blood count, B12",
            "how": "",
            "out": [
              {
                "a": "Low ferritin, saturation, haemoglobin or B12",
                "m": "",
                "go": [
                  "B",
                  "C"
                ]
              },
              {
                "a": "Ferritin and saturation both high",
                "m": "Iron overload is a question for your doctor.",
                "go": [
                  "B"
                ]
              }
            ]
          },
          {
            "tier": "panel",
            "q": "Fasting glucose, fasting insulin, HbA1c",
            "how": "",
            "out": [
              {
                "a": "Insulin high with normal glucose",
                "m": "",
                "go": [
                  "D"
                ]
              }
            ]
          },
          {
            "tier": "panel",
            "q": "Total testosterone, SHBG, free testosterone, LH, FSH, prolactin",
            "how": "",
            "out": [
              {
                "a": "Free low with total normal, or prolactin raised",
                "m": "Repeat before concluding.",
                "go": [
                  "E"
                ]
              }
            ]
          },
          {
            "tier": "panel",
            "q": "Vitamin D (25-OH); morning cortisol",
            "how": "",
            "out": [
              {
                "a": "Vitamin D low",
                "m": "",
                "go": [
                  "F"
                ]
              }
            ]
          },
          {
            "tier": "panel",
            "q": "All of it comes back mid-range",
            "how": "",
            "out": [
              {
                "a": "",
                "m": "Look again at sleep you cannot observe, mood, and the generous reading.",
                "go": [
                  "G",
                  "K",
                  "N"
                ]
              }
            ]
          }
        ],
        "actions": [
          [
            "14 mornings",
            "Temperature and pulse on waking, forty minutes after breakfast, and mid-afternoon. Write them down.",
            "The cheapest picture of metabolic rate there is, and it makes any blood result easier to read."
          ],
          [
            "This week",
            "Find your last blood report and tick off what it includes against the table.",
            "Most people learn that half of the list was never tested."
          ],
          [
            "At the draw",
            "Morning, fasted, after an ordinary night, two days clear of hard training, not while ill. Stop biotin three days before.",
            "Each of these moves the numbers. Biotin, in most hair and nail supplements, distorts thyroid and hormone results."
          ]
        ],
        "measureTable": true,
        "outcome": [
          "06:10",
          "Up before the alarm",
          "On the same habits you already have. The difference is that they finally pay out."
        ],
        "pdf": "the whole day is there to compare against yours. If they already match, the PDF will not be the answer either, and the panel is.",
        "call": "The strongest lead for the call. Ask what was on the last panel and when, and ask them to bring it. Bloodwork first.",
        "opener": "Your habits read in range and the energy doesn't, which usually means the answer is in the bloodwork. When was your last panel, and do you still have the report?"
      },
      ok: {
        "driftLabel": "None",
        "area": "Baseline panel",
        "id": "06B",
        "name": "In range",
        "headline": "Your reading is in range.",
        "lead": "On your own answers, sleep, stress, recovery, fuel and focus all sit in the optimal band, and your energy at 06:30 and 14:30 agrees. I wouldn't fix anything. I'd record it: blood taken while you feel well is your own reference range, and it's far narrower than the lab's.",
        "causes": [],
        "tree": [],
        "actions": [
          [
            "06:30",
            "Keep the wake time and the morning light.",
            "These two hold the rest of the day's timing in place."
          ],
          [
            "This month",
            "Get a full panel while you feel good, using the table below, and file it.",
            "A personal baseline can only be taken while things are working."
          ],
          [
            "Once a quarter",
            "Take this reading again.",
            "Energy slides slowly, one busy quarter at a time. A number every three months catches it early."
          ]
        ],
        "measureTable": true,
        "outcome": [
          "",
          "This, kept",
          "The same reading in five years."
        ],
        "pdf": "read it as a comparison with another day that works. Take what is useful.",
        "call": "Low intent. If they book, the call is about a baseline panel and what they want more of.",
        "opener": "Everything read in range. What made you take it?"
      }
    },

    /* The panel table: shown on 06A and 06B, and under every result for Plateaued leads. */
    panelTable: {
      title: "What a standard panel leaves out",
      head: ["Standard panel reports", "Ask to add"],
      rows: [
        ["TSH", "Free T4, free T3, reverse T3"],
        ["Total testosterone", "SHBG, free testosterone, LH, FSH, prolactin"],
        ["Haemoglobin", "Ferritin with transferrin saturation"],
        ["Fasting glucose", "Fasting insulin, HbA1c"],
        ["Total cholesterol, read for heart risk", "The same number read beside thyroid: it rises when thyroid function is low"],
        ["Usually nothing", "Vitamin D (25-OH), morning cortisol"]
      ]
    },

    /* Stage: from the last two questions (unchanged rule). The line sits under the three actions. */
    stages: {
      starting:  { label: "Starting",  line: "You haven't tried much yet, which makes this cheap to find. The checks above cost nothing. I'd work through them for two weeks before buying anything.", angle: "Basics first. Light, food, sleep, stress." },
      guessing:  { label: "Guessing",  line: "You have a shelf and no way of telling what on it works. Run the home test above for a week before adding anything. Then stop every supplement you can't give a reason for (nothing prescribed) and run it again.", angle: "Audit what they take. Bloodwork to show what's working." },
      plateaued: { label: "Plateaued", line: "You've done the basics and been told your labs are normal. Find the report. The panel tier above and the table under it list what a standard panel leaves out, and that is where I usually find flat energy on a normal panel.", angle: "Advanced. Bloodwork-led, optimal ranges, targeted work." }
    },

    results: {
      "code": "CAL-01 · ENERGY READING",
      "hello": "{name}, your reading.",
      "energyKey": "ENERGY",
      "driversCode": "FIG. 01 · DRIVERS",
      "driversTitle": "Five drivers",
      "driversNote": "Green band is optimal",
      "driftCode": "CAL-02 · PRIMARY DRIFT",
      "alsoOut": "Also under the band: {list}.",
      "causesCode": "CAL-03 · WHAT COULD BE DRIVING IT",
      "causesIntro": "I can't tell these apart from fifteen answers. You can, in about a week. Read the list, mark the ones that sound like you, then work down the checks below.",
      "tellLabel": "Likely if",
      "fixLabel": "Try",
      "treeCode": "CAL-04 · FIND OUT WHICH",
      "treeTitle": [
        "Work down",
        "the checks."
      ],
      "tiers": {
        "now": [
          "Answer now",
          "Two minutes"
        ],
        "home": [
          "Test at home",
          "One to two weeks"
        ],
        "panel": [
          "On your next panel",
          "Ask for these"
        ]
      },
      "redFlags": "These need a doctor this week: chest pain, breathlessness at rest, fainting, weight loss you did not plan, blood in the stool, a fever that has lasted more than a week, or a low mood with thoughts of harming yourself.",
      "actionsCode": "CAL-05 · TOMORROW",
      "actionsTitle": [
        "Three things for tomorrow,",
        "whichever it is."
      ],
      "actionsNote": "What I'd do before knowing the cause",
      "outcomeCode": "WHAT IN RANGE LOOKS LIKE",
      "recapCode": "CAL-06 · YOUR READING",
      "recapBody": "This is your starting number. Work down the checks for two weeks, take the reading again, and see what moved.",
      "recapBodyOk": "This is your number today. I'd take the reading again in three months and compare.",
      "pdfLead": "In the routine PDF:",
      "closeCode": "CAL-07 · THE CALL",
      "closeTitle": [
        "This reading is",
        "self-reported."
      ],
      "closeBody": "A real calibration is measured against your bloodwork. Give me fifteen minutes and I'll tell you whether there is a better version of this.",
      "guarantee": "On the Six-Month Calibration your energy is tracked from a starting baseline. If your energy in days 24 to 30 isn't above it, the protocol is rebuilt and a month is added at no extra cost.",
      "bookButton": "Book the 15-minute call",
      "bookNote": "Fifteen minutes · No obligation",
      "retake": "Retake",
      "copy": "Copy my reading",
      "causesCopy": "Causes I was shown"
    },

    footer: "Information on this page is for educational purposes only and does not constitute medical advice. Self-reported reading, not a diagnosis. Consult your healthcare provider for personalised medical guidance.",
    /* Added on the results screen only (Etienne's open point 1, suggested wording). */
    footerResults: "If you have diabetes, high blood pressure or kidney disease, talk to your doctor before changing sugar or salt."
  },

  /* ---------- Admin: the opener written into each Text / WhatsApp / email button ---------- */
  admin: {
    /* Each result's own question follows this line (see "opener" on every result). */
    openerStart: "Hey {name}, Etienne here from CalibreX. Saw your energy reading come through.",
    emailSubject: "Your CalibreX energy reading"
  }
};
