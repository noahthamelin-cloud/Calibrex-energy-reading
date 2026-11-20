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

    /* The five drivers. Order breaks ties for primary drift (fundamentals first).
       Each driver has two results: "a" belongs to its first question, "b" to its second.
       Inside the primary drift, the lower of the two answers picks the result; a tie goes to "a".
       Copy: Etienne's rewrite, Nov 19 2026. No amounts on the page; amounts live in the routine PDF. */
    driverOrder: ["sleep", "stress", "recovery", "fuel", "focus"],
    drivers: {
      sleep: {
        label: "Sleep", code: "D-01", area: "Protocols doc Stack 04 · Sleep",
        results: {
          a: {
            id: "01A", name: "Awake at 03:10",
            headline: "Your night runs out of fuel before morning.",
            happening: [
              "Nothing is eaten for eight hours, so the liver's stored sugar (glycogen) is what holds blood sugar up while you sleep. When that store runs short, the body raises blood sugar the other way, with adrenaline and then cortisol. Adrenaline tends to peak between one and three in the morning. That is the pounding heart, the busy head and the hour staring at the ceiling.",
              "A light or early dinner, a low-carbohydrate dinner, alcohol in the evening and a day of skipped meals all leave that store short. It is the first place to look, before any sleep supplement."
            ],
            actions: [
              ["19:30", "Make dinner the heavier meal: potatoes or sweet potatoes, protein, salt.", "Slow carbohydrate late in the day fills the liver's store, and that store is what carries blood sugar to morning."],
              ["Bedtime", "Have something small, sweet and salty: warm milk with honey and a pinch of salt, or fruit with cheese. Leave a second one by the bed for 03:10.", "Sugar and salt both bring adrenaline down. People who wake this way often cannot get back to sleep until they eat."],
              ["Evening", "No alcohol tonight.", "Alcohol puts you to sleep and then breaks up the second half of the night, when this waking happens."]
            ],
            measure: {
              home: "At home, for five mornings: pulse and temperature on waking, then again forty minutes after breakfast. A fast pulse on waking that settles once you have eaten points to stress hormones doing the night shift.",
              panel: "On your next panel, ask for fasting glucose, fasting insulin, HbA1c, morning cortisol, and free T3 beside TSH."
            },
            outcome: ["03:10", "Asleep", "The night runs to morning in one piece, and you are up before the alarm because you are done sleeping."],
            pdf: "page 5, the 19:30 dinner and the 21:00 wind-down, and Stack 07 · Sleep.",
            call: "Ask what dinner is and when, how much they drink on weeknights, and whether eating at 03:10 has ever put them back to sleep.",
            opener: "The night waking stood out. What time is dinner usually, and what is it?"
          },
          b: {
            id: "01B", name: "Eight hours, never enough",
            headline: "The hours are there. The depth is missing.",
            happening: [
              "A tracker counts time in bed. What restores you is deep slow-wave sleep, most of which comes in the first half of the night, and it is the first thing lost when sleep is shallow or keeps getting interrupted. Caffeine taken after noon is still in the blood at midnight and cuts deep sleep even when you fall asleep easily. A body that goes to bed cold sleeps lighter, and a clock that gets no daylight in the morning releases melatonin late.",
              "There is one cause no routine fixes: an airway that keeps closing. Snoring, a dry mouth or a headache on waking, and getting up to urinate at night are its signs."
            ],
            actions: [
              ["06:30", "Same wake time every day, weekends included, then fifteen minutes outside in daylight.", "Morning light sets the clock earlier, so melatonin starts rising earlier that night. Outdoor light is thousands of lux; a bright room is a few hundred."],
              ["Noon", "Last caffeine of the day.", "Caffeine clears slowly. An afternoon coffee costs deep sleep that night even when falling asleep feels normal."],
              ["21:00", "Screens closed, then a hot shower or bath, or warm your feet.", "Screen light holds melatonin down. Warming the skin before bed increases slow-wave sleep."]
            ],
            measure: {
              home: "At home: ask whoever shares the bed whether you snore or stop breathing, or record one night of audio on your phone. If the answer is yes, the next step is a sleep study, and nothing on this page replaces it.",
              panel: "On your next panel, ask for ferritin and transferrin saturation (restless legs at night are a sign of low iron), and free T3 beside TSH."
            },
            outcome: ["06:10", "Up before the alarm", "Awake because you are done sleeping, with something to spend on the first hour."],
            pdf: "page 2, the 06:30 wake-up; page 5, the 21:00 wind-down; Stack 07 · Sleep.",
            call: "Ask about snoring first, then when the last coffee is and what the hour before bed looks like. A yes on snoring goes to a sleep study before any protocol.",
            opener: "Full nights that don't restore you stood out. When is your last coffee of the day?"
          }
        }
      },
      stress: {
        label: "Stress Load", code: "D-02", area: "Protocols doc Stack 11 · Cortisol / nervous system",
        results: {
          a: {
            id: "02A", name: "Still wired at 17:30",
            headline: "Adrenaline is carrying your afternoons.",
            happening: [
              "When blood sugar drops, the body holds it up with adrenaline and cortisol. A working afternoon with coffee and no food since lunch runs on those two hormones, and they do not switch off when the laptop closes. Low salt pushes adrenaline up as well. Cold hands and feet late in the day are a common sign.",
              "The same hormones slow the conversion of thyroid hormone into its active form, so months of this lower the energy you make without them. That is how a busy quarter turns into a flat year."
            ],
            actions: [
              ["15:30", "Eat before the last stretch of work: fruit or juice with something salty. No coffee with it.", "Hunger raises adrenaline, and sugar and salt both lower it. Eating here takes away the reason for the surge."],
              ["Sunset", "Ten minutes outside on your feet, phone left behind, before you go home.", "It puts a break between the work state and the evening while there is still daylight, which keeps the clock on schedule for the night."],
              ["21:00", "Five minutes of slow breathing, about six breaths a minute, with the exhale longer than the inhale.", "Long exhales raise vagal activity and bring heart rate down."]
            ],
            measure: {
              home: "At home, for five workdays: pulse on waking, forty minutes after breakfast, and at 17:30. A pulse that climbs through the afternoon while your hands get colder is adrenaline at work.",
              panel: "On your next panel, ask for morning cortisol, fasting glucose, sodium, and free T3 beside TSH."
            },
            outcome: ["17:30", "Done, and it feels done", "The work stays at the desk, and your pulse on the way home is the one you woke up with."],
            pdf: "page 5, the 16:30 block and the 21:00 wind-down; Stack 07 · Sleep, which has the theanine and magnesium.",
            call: "Ask what they eat between lunch and dinner, how many coffees and when the last one is, and whether their hands run cold.",
            opener: "Finishing work still wired stood out. What do you eat between lunch and dinner?"
          },
          b: {
            id: "02B", name: "Nothing left at 20:30",
            headline: "The people at home get you at your lowest blood sugar.",
            happening: [
              "A short fuse at seven in the evening is mostly physiology. Lunch was six or seven hours ago, the day's coffee has worn off, and blood sugar is being held up by cortisol. Hunger makes people irritable at any age. In adults it reads as impatience.",
              "You then walk in the door and meet the people who matter most in the worst hour of your day. They get what is left, and you feel awful about it afterwards."
            ],
            actions: [
              ["16:30", "Stop the demanding work here. Calls, admin and easy tasks after.", "Cortisol has fallen a long way from its morning peak by now. Hard decisions made late cost more and spill into the evening."],
              ["17:30", "Eat before you get home: fruit and cheese, milk, or juice with a pinch of salt.", "It raises blood sugar before the first conversation of the evening."],
              ["19:30", "Dinner at the table with carbohydrate, protein and salt, phone in another room.", "A full meal ends the hunger state. People who eat in company show a smaller cortisol response to stress."]
            ],
            measure: {
              home: "At home, for one week: write down the time you last ate before each evening you snapped at someone. If the gap is five hours or more nearly every time, you have found most of it.",
              panel: "On your next panel, ask for fasting glucose, fasting insulin, HbA1c and morning cortisol."
            },
            outcome: ["20:30", "Something left at dinner", "Patience for the people who matter at the end of a full day, with enough in reserve to be there."],
            pdf: "page 5, the 16:30 block and the 19:30 dinner.",
            call: "Ask what happens between leaving work and dinner, and who notices the change first.",
            opener: "The evenings stood out. What does the hour between finishing work and dinner look like?"
          }
        }
      },
      recovery: {
        label: "Recovery", code: "D-03", area: "Protocols doc Stack 07 / 09 · Recovery, stamina",
        results: {
          a: {
            id: "03A", name: "Saturday on the couch",
            headline: "Your week spends more than it takes in.",
            happening: [
              "Monday to Friday you run a deficit: less food than the work costs, less sleep than the night before needed, and stress hormones covering the difference. The weekend is when the bill arrives. Two days on the couch and a long lie-in pay part of it back, and the lie-in moves your body clock later, so Monday starts jet-lagged.",
              "When energy, sleep, appetite, training and sex drive all fall together, the cause is a shortage of recovery. It is rarely motivation."
            ],
            actions: [
              ["Weekdays", "Three meals at fixed times, each with carbohydrate and protein, salted to taste. Put lunch in the calendar.", "The deficit is built on weekdays, mostly at the meals that get skipped. Salt restriction raises adrenaline and disturbs sleep."],
              ["Saturday", "Get up at the weekday time, go outside and walk for thirty minutes at a pace you can talk at.", "Keeping the wake time keeps the clock where it was. Easy movement moves blood through tired muscle without adding to the debt."],
              ["Once this week", "Ten to fifteen minutes in a sauna or a hot bath, with salted water afterwards.", "Heat raises heart rate and blood flow much as moderate exercise does, with no training load."]
            ],
            measure: {
              home: "At home: temperature and pulse on waking, on Wednesday and again on Sunday. If Sunday reads clearly better than Wednesday, the week is the problem and the weekend is the repair.",
              panel: "On your next panel, ask for free T3 beside TSH, ferritin with transferrin saturation, fasting glucose, total cholesterol, and morning total and free testosterone."
            },
            outcome: ["SAT", "A Saturday you spend", "Up at the usual time with plans you keep, because Friday did not empty you."],
            pdf: "page 4, the 15:30 recovery block; pages 2 to 5, the three meals and when they fall.",
            call: "Ask what a normal Tuesday's food looks like, hour by hour, and what time they get up on Saturday.",
            opener: "The weekends stood out. What time do you get up on a Saturday?"
          },
          b: {
            id: "03B", name: "Days to bounce back",
            headline: "You are training harder than you are feeding.",
            happening: [
              "A hard session is only the signal. The adaptation is built afterwards, out of food and sleep. When training goes up and food stays where it was, the body pays for the session with stress hormones and tissue, and soreness that used to last a day lasts four.",
              "Two habits make it worse. Training hard with nothing eaten for hours stacks one stress on another. A cold plunge straight after strength work damps the inflammation that tells muscle to adapt."
            ],
            actions: [
              ["90 min before", "Eat a light, fast meal before training: rice or rice noodles with a lean protein, very little fat.", "The carbohydrate needs time to reach muscle. Fat slows the stomach, and training at the insulin peak in the first hour can drop blood sugar."],
              ["During", "Sip orange juice with salt through the session. Stop each set with two reps left.", "Working muscle takes up sugar without needing insulin, and salt replaces what sweat takes. Sets taken to failure cost more recovery than they return."],
              ["After", "Heat, then a meal. No cold plunge on a heavy day.", "Sauna adds blood flow without load. Cold right after strength work can blunt the training effect."]
            ],
            measure: {
              home: "At home: pulse on waking the morning after a hard session, against a rest-day morning. Track body weight for a month as well. A waking pulse that stays raised, or weight falling while training rises, means the sessions are outrunning the food.",
              panel: "On your next panel, ask for free T3 beside TSH, ferritin with transferrin saturation, fasting glucose, and morning total and free testosterone. Have the blood drawn after two rest days."
            },
            outcome: ["18:00", "The workout is still in you", "Training goes back to being the thing you want to do, because recovery keeps up with what you ask of it."],
            pdf: "page 4, noon lunch to the 15:30 recovery block; Stack 06 · Workout electrolytes.",
            call: "Ask for the training week (days, volume, how close to failure), what they eat before and after, and whether weight has moved.",
            opener: "Recovery after training stood out. What does your training week look like right now?"
          }
        }
      },
      fuel: {
        label: "Fuel", code: "D-04", area: "Protocols doc Stack 01 / 05 · Metabolic, electrolytes",
        results: {
          a: {
            id: "04A", name: "The fourth coffee",
            headline: "Caffeine is spending energy you have not put in.",
            happening: [
              "Caffeine makes no energy. It raises the rate at which cells take up and burn fuel. With food on board, that is useful. On an empty stomach blood sugar falls, and the body covers the gap with adrenaline. The lift from a coffee before breakfast is largely that adrenaline.",
              "By 14:30 the stored sugar and the adrenaline have both run down, which is the wall, and the next coffee repeats the cycle from a lower starting point. The fourth one stops working because there is nothing left for it to release."
            ],
            actions: [
              ["Breakfast", "Food first, then the coffee with it, with sugar or milk in the cup.", "With fuel present, caffeine raises metabolism without calling on stress hormones."],
              ["Noon", "Second and last coffee, with lunch.", "Two with food do more than four without, and stopping at noon protects deep sleep tonight."],
              ["14:30", "When the wall comes, eat instead: fruit or juice with a pinch of salt, then walk for ten minutes.", "The wall is low fuel. Sugar and salt fix the cause, where another coffee borrows against the evening."]
            ],
            measure: {
              home: "At home, on two mornings: take your pulse, have your usual coffee on an empty stomach, and take it again after thirty minutes. Next day do the same with coffee after breakfast. A clear jump on the empty-stomach day and little change on the other shows what the coffee has been doing.",
              panel: "On your next panel, ask for fasting glucose, fasting insulin, HbA1c, ferritin, liver enzymes (ALT, AST, GGT), and free T3 beside TSH."
            },
            outcome: ["14:00", "No wall", "Two o'clock is just another hour, and the four o'clock meeting gets the same person the nine o'clock did."],
            pdf: "page 2, breakfast and the espresso; Stack 02 · Metabolic mastery, where the caffeine entry explains the pairing with food.",
            call: "Ask when the first coffee is against the first food, how many by 15:00, and what happens on a day without any.",
            opener: "The caffeine stood out. What comes first in your morning, coffee or food?"
          },
          b: {
            id: "04B", name: "Skipped and grabbed",
            headline: "Stress hormones are covering your missed meals.",
            happening: [
              "Blood sugar has to stay in a narrow band because the brain runs on it continuously. When a meal is skipped, adrenaline and cortisol hold it up: adrenaline pulls fat out of storage and cortisol breaks down protein to make new sugar. It works, and it feels like being busy and a little wired. The cost comes later in the day.",
              "The liver also makes more active thyroid hormone after a meal, so a day of skipped meals is a day at a lower metabolic rate. Plain water does not fix it. Water follows sodium, and without salt most of what you drink passes straight through."
            ],
            actions: [
              ["06:30", "A glass of water with a pinch of salt before anything else.", "You wake a few hundred millilitres short. Sodium holds the water in the blood."],
              ["Breakfast", "Eat within ninety minutes of waking: carbohydrate and protein, warm, sitting down.", "It ends the overnight fast before stress hormones have to. Insulin sensitivity is highest in the morning."],
              ["Noon", "Lunch at a fixed time, in the calendar: rice or potatoes with a lean protein, salted. Walk for twenty minutes after.", "A fixed lunch is the meal that prevents the 14:30 wall. Walking muscle takes up sugar without insulin, so the peak is lower and the dip after it smaller."]
            ],
            measure: {
              home: "At home, for five mornings: temperature and pulse before breakfast and forty minutes after. Both should rise after you eat. If either falls, stress hormones were holding you up before the meal.",
              panel: "On your next panel, ask for fasting glucose, fasting insulin, HbA1c, sodium and potassium, and ferritin with transferrin saturation."
            },
            outcome: ["14:00", "No wall", "Lunch happened, the afternoon is flat and even, and you arrive at dinner hungry in the ordinary way."],
            pdf: "pages 2 and 4, breakfast and the noon lunch; Stack 01 · Morning electrolytes.",
            call: "Ask them to walk through yesterday's food and drink by the clock. The gaps are usually obvious within a minute.",
            opener: "Meals stood out. What did you eat yesterday, roughly, and when?"
          }
        }
      },
      focus: {
        label: "Focus", code: "D-05", area: "Protocols doc Stack 10 · Cognition",
        results: {
          a: {
            id: "05A", name: "Minutes, then drift",
            headline: "Your brain is running short of fuel mid-task.",
            happening: [
              "The brain uses about 120 g of glucose a day, a fifth of the body's energy at rest, and it keeps almost no reserve. Sustained attention is the most expensive thing it does. When supply dips, adrenaline props blood sugar up, and adrenaline produces scanning: checking, switching tabs, reaching for the phone. Most of what gets called poor discipline here is short supply.",
              "There is also a window. Sleep has cleared the night's adenosine, cortisol is near its daily peak, and caffeine taken at breakfast peaks within the hour. The three to four hours after breakfast are the best concentration of the day, and most people give them to email."
            ],
            actions: [
              ["Breakfast", "Carbohydrate and protein before the work starts, coffee with the meal.", "It puts glucose in the blood for the block that follows, and caffeine with food sharpens attention without the adrenaline."],
              ["08:30", "One block of ninety minutes on the hardest task. Phone in another room, inbox closed, a bright room or a seat by a window.", "This is the window. Bright light supports dopamine, and a block with no interruptions is the only kind that reaches full depth."],
              ["Mid-block", "Stand up or walk while you work if you can, and keep warm.", "Walking keeps blood flowing to the brain. Cold hands are a sign the body is running on adrenaline."]
            ],
            measure: {
              home: "At home, for one week: start a timer when you begin deep work and stop it at the first time you switch away. Compare the mornings you ate first with the mornings you did not.",
              panel: "On your next panel, ask for free T3 beside TSH, fasting glucose, fasting triglycerides, ferritin, and vitamin D (25-OH)."
            },
            outcome: ["10:00", "Ninety minutes gone and you did not notice", "The hard thing is finished before most people have cleared their inbox."],
            pdf: "page 3, the 08:30 deep work block; Stack 02 · Metabolic mastery, which does most of the work; Stack 05 · Focus.",
            call: "Ask what the first two hours of the workday go to and whether they eat before them.",
            opener: "Focus stood out. What do the first two hours of your workday go to?"
          },
          b: {
            id: "05B", name: "The hard call slides",
            headline: "The hard decisions are landing in your weakest hours.",
            happening: [
              "Starting something difficult takes drive, and drive depends on dopamine. The body makes dopamine from the amino acid tyrosine, and making it requires thyroid hormone and bright light reaching the retina. Months of stress with no way out lower its production. So does a life spent indoors under office lighting.",
              "Timing does the rest. Cortisol, which is what gets you moving, peaks in the morning and falls all day. A hard call left for four in the afternoon meets the least drive you will have, so it moves to tomorrow, when the morning goes to email again."
            ],
            actions: [
              ["06:30", "Fifteen minutes outside in daylight, before any screen.", "Bright light on the retina stimulates dopamine synthesis. Outdoor light is ten times brighter than any room."],
              ["Breakfast", "A complete protein with the carbohydrate: eggs, milk, or meat.", "Tyrosine, the raw material for dopamine, comes from protein."],
              ["08:30", "Make the hard call first, before the inbox. Choose which one the night before and write it down.", "It meets the day's peak drive, and deciding the night before removes the morning negotiation."]
            ],
            measure: {
              home: "At home, for one week: write down each decision you put off and the time of day you put it off. Most people find nearly all of them after 14:00.",
              panel: "On your next panel, ask for prolactin, free T3 beside TSH, vitamin D (25-OH), ferritin, and morning total and free testosterone."
            },
            outcome: ["14:00", "The hard call happened this morning", "The afternoon is calls, admin and easy work, by design."],
            pdf: "page 2, the 06:30 wake-up; pages 3 and 5, how the day is split between the 08:30 and 16:30 blocks; Stack 05 · Focus.",
            call: "Ask what they are currently putting off and for how long, and how much daylight they get before noon.",
            opener: "What is the one thing you have been putting off longest?"
          }
        }
      }
    },

    /* Every driver at 75 or more. If the average of the two energy questions (Q02, Q03) is under 75: "flat". Otherwise: "ok". */
    inRange: {
      flat: {
        id: "06A", name: "In range, still flat", driftLabel: "Outside the five drivers",
        headline: "Your habits are in order. The cause is somewhere a questionnaire cannot see.",
        happening: [
          "You sleep, eat, train and switch off about as well as anyone, and the morning or the afternoon is still flat. That rules out the usual advice, which is useful to know. What is left is measured in blood: how well thyroid hormone is converted to its active form, iron, blood sugar handling, sex hormones, vitamin D.",
          "If a doctor has already told you everything is normal, look at what was tested. A standard panel reports TSH alone for thyroid and total testosterone alone for hormones, and usually leaves ferritin, fasting insulin and prolactin off. A reference range is the middle 95% of the people that lab tested, many of them unwell. Inside it means you are not sick. It was never built to say you are well."
        ],
        actions: [
          ["14 mornings", "Temperature and pulse on waking, forty minutes after breakfast, and mid-afternoon. Write them down.", "It is the cheapest picture of metabolic rate there is, and two weeks of it makes any blood result easier to read."],
          ["This week", "Find your last blood report and tick off what it includes against the list below.", "Most people learn that half of the list was never tested."],
          ["At the draw", "Morning, fasted, after an ordinary night, two days clear of hard training, not while ill. Stop biotin three days before.", "Each of these moves the numbers. Biotin, which is in most hair and nail supplements, distorts thyroid and hormone results."]
        ],
        measureTable: true,
        outcome: ["06:10", "Up before the alarm", "On the same habits you already have. The difference is that they finally pay out."],
        pdf: "the whole day is there to compare against yours. If they already match, the PDF will not be the answer either, and the panel is.",
        call: "The strongest lead for the call. Ask what was on the last panel and when, and ask them to bring it. Bloodwork first.",
        area: "Bloodwork first",
        opener: "Your habits read in range and the energy doesn't, which usually means the answer is in the bloodwork. When was your last panel, and do you still have the report?"
      },
      ok: {
        id: "06B", name: "In range", driftLabel: "None",
        headline: "Your reading is in range.",
        happening: [
          "On your own answers, sleep, stress, recovery, fuel and focus all sit in the optimal band, and your energy at 06:30 and 14:30 agrees. Nothing on this page says anything needs fixing.",
          "The one useful thing to do from here is record it. Blood taken while you feel well is your own reference range, and it is far narrower than the lab's. If energy ever slides, you will be comparing against yourself at your best and not against a population average."
        ],
        actions: [
          ["06:30", "Keep the wake time and the morning light.", "These two hold the rest of the day's timing in place."],
          ["This month", "Get a full panel while you feel good, using the list below, and file it.", "A personal baseline is worth more than any reference range, and it can only be taken while things are working."],
          ["Once a quarter", "Take this reading again.", "Energy slides slowly, one busy quarter at a time. A number every three months catches it early."]
        ],
        measureTable: true,
        outcome: ["", "This, kept", "The same reading in five years."],
        pdf: "read it as a comparison with another day that works. Take what is useful.",
        call: "Low intent. If they book, the call is about a baseline panel and what they want more of, not about fixing anything.",
        area: "Baseline panel",
        opener: "Everything read in range. What made you take it?"
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

    /* Stage: from the last two questions (unchanged rule). The line sits under the actions and the measurement. */
    stages: {
      starting:  { label: "Starting",  line: "You have not tried much yet, which makes this cheap to fix. The three actions above cost nothing. Give them two weeks before you buy anything.", angle: "Basics first. Light, food, sleep, stress." },
      guessing:  { label: "Guessing",  line: "You have a shelf and no way of telling what on it works. Before adding anything, take the measurement above for a week. Then stop every supplement you cannot give a reason for (nothing prescribed) and measure again.", angle: "Audit what they take. Bloodwork to show what's working." },
      plateaued: { label: "Plateaued", line: "You have done the basics and been told your labs are normal. Find the report. The table above lists what a standard panel leaves out, and flat energy on a normal panel is usually found there.", angle: "Advanced. Bloodwork-led, optimal ranges, targeted work." }
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
      happeningCode: "What is happening",
      alsoOut: "Also out of range: {list}.",
      measureCode: "CAL-03 · WHAT TO MEASURE",
      measureHome: "At home",
      measurePanel: "On your next panel",
      pdfLead: "In the routine PDF:",
      closeCode: "CAL-04 · THE CALL",
      closeTitle: ["This reading is", "self-reported."],
      closeBody: "A real calibration is measured against your bloodwork. Fifteen minutes with Etienne to find out whether there is a better version of this.",
      guarantee: "On the Six-Month Calibration your energy is tracked from a starting baseline. If your energy in days 24 to 30 isn't above it, the protocol is rebuilt and a month is added at no extra cost.",
      bookButton: "Book the 15-minute call",
      bookNote: "Fifteen minutes · No obligation",
      retake: "Retake",
      copy: "Copy my reading"
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
