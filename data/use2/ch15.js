window.CALC_USE2 = Object.assign(window.CALC_USE2 || {}, {
  "eq-15.1": {
    more: [
      "The amount of solution per acre comes from the product label (gal or pt per acre) or from the nutrient rate divided by the nutrient content of the product, about 3 lb N/gal for 28% UAN. The area is the zone or set being injected, from the design map or the controller, or all zones if injection runs across several in sequence. Injection time is how long the injector will run, which can be shorter than the set time to leave room for flushing.",
      "The result is the injection rate in gal/hr to set on the pump. Most fertigation pumps run 1 to 30 gal/hr, so a rate far outside that means a different pump or a longer injection time. Leave enough clean water at the end of each set to flush the system (Eq. 15.3 and 15.4). Using total field area with the time for one zone is the most common error and overdoses by the number of zones.",
      "Use pump-calibration to set and check the dial, and flush-total for the clean water time."
    ],
    qa: [
      { q: "I want 15 lb of N on 78 acres of SDI using 28% UAN, injecting over 24 hours. What rate?", a: "At 3 lb N/gal that is 5 gal/ac. Enter 5 gal/ac, 78 ac and 24 hr. The rate is 16.25 gal/hr, as in Example 15.3." },
      { q: "What if I inject one 19.5 acre zone at a time during a 6 hour set?", a: "Enter 5 gal/ac, 19.5 ac and 6 hr. The rate is still 16.25 gal/hr, because the area and time both drop by a factor of four. Stop injecting with enough time left in the set to flush." },
      { q: "A furrow-irrigated field gets 10 gal/ac of product on 40 acres in an 8 hour set. What injection rate?", a: "The rate is 50 gal/hr. That is above most small injection pumps, so use a larger pump or run two sets." }
    ],
    figs: ["15.1", "15.2"]
  },
  "eq-15.2": {
    more: [
      "The label rate per acre comes from the product label, in pints for most pesticides. Field area is what the pivot or linear covers in one revolution or pass, from the area calculator or the FSA map. The time for one revolution comes from the percent timer setting (Eq. 13.7) or from timing the end tower over a known distance.",
      "The injection rate is the label rate times the acres covered per hour. Rates for pesticides are small, often 1 to 2 gal/hr, so choose a pump sized for that range. Injection must run for the whole revolution, so the timer setting fixes the rate. Changing the pivot speed after calibration changes the dose. Mixing pints and gallons is easy to do, and 8 pints make a gallon.",
      "Use pump-calibration to set the dial, and Eq. 15.5 for the flush time."
    ],
    qa: [
      { q: "The label says 1.5 pints per acre. My pivot covers 126 acres in 22 hours. What injection rate?", a: "Area rate is 5.73 ac/hr, so the injection rate is 8.6 pt/hr, or 1.07 gal/hr. Calibrate to about 1.1 gal/hr, as in Example 15.4." },
      { q: "We want 30 lb of N through the pivot with 28% UAN. 125 acres, 60 hours per revolution. What rate?", a: "30 lb at 3 lb/gal is 10 gal/ac, or 80 pt/ac. At 2.08 ac/hr the rate is 166.7 pt/hr, or 20.8 gal/hr, just over a 20 gal/hr pump. Slow the pivot a little or use a larger pump." },
      { q: "We need a fungicide at 1 pint per acre on a 130 acre pivot. It takes 16 hours to go around at the setting we want. What do I set?", a: "Area rate is 8.1 ac/hr, so inject 8.1 pt/hr, about 1.0 gal/hr. If the grower speeds the pivot up later, recalculate, since the rate is tied to that 16 hour revolution." }
    ],
    figs: ["15.1"]
  },
  "eq-15.3": {
    more: [
      "Inside diameter is from the pipe spec for the size and pressure class: the book's 8 in mainline has a 7.762 in ID, and 6 in PVC is about 5.9 to 6.0 in depending on class. Mainline length is from the injection point to the first manifold or the pivot, from the farm map or the as-built drawing. System flow is from the flow meter while the system runs.",
      "The result is the time for water to travel the mainline, which is how long it takes chemical to reach the field and how long to flush it out. At common mainline velocities of 3 to 5 ft/s, each 1,000 ft takes about 3 to 6 minutes. Use the same equation for each segment of a manifold or submain where flow changes. Remember that a mainline with valves to several zones needs flushing only between the injector and the active zone.",
      "Add the manifold and lateral flush times from Eq. 15.4, or use flush-total for the full zone."
    ],
    qa: [
      { q: "We have 975 feet of 8 inch mainline, 7.762 inch ID, running 500 gpm. How long before the fertilizer reaches the field?", a: "Enter 7.762 in, 975 ft and 500 gpm. Travel time is 4.8 minutes, which the book rounds to 5 min in Example 15.2. It takes the same time to clear the mainline after injection stops." },
      { q: "A half-mile of 6 inch PVC, about 5.9 inch ID, carries 800 gpm. How long to flush it?", a: "About 4.7 minutes. The pipe is long, but the velocity is over 9 ft/s, so the water moves through quickly." },
      { q: "During an inspection, the grower says he waits only 2 minutes after injecting. His mainline is 1,320 feet of 10 inch, 9.8 inch ID, at 1,200 gpm. Is that enough?", a: "The mainline alone takes 4.3 minutes. Two minutes leaves chemical in the pipe, so he needs at least 5 minutes plus the field piping time." }
    ],
    figs: ["15.1"]
  },
  "eq-15.4": {
    more: [
      "Inside diameter is from the tubing or pipe spec: drip tubing of 7/8 in nominal is 0.859 in ID in the book, common drip tape is 0.6 to 0.9 in, and aluminum sprinkler laterals are 3 to 5 in. Outlet spacing is emitter or sprinkler spacing, and outlet discharge is the flow per outlet in gpm (divide gph by 60). Lateral length is from the manifold to the end. For a manifold, the outlets are the laterals and the outlet flow is the flow per lateral.",
      "The result is the time for water entering the lateral to reach the last outlet, which is also the time to flush chemical out through the outlets. Drip laterals take a long time, often 30 to 90 minutes, because the velocity drops toward the end. Sprinkler laterals take 10 to 20 minutes. The equation applies only when flushing through the emitters, not through an open end or flushing manifold.",
      "Add mainline time from Eq. 15.3 or use flush-total. Figure 15.13 shows the same times as curves."
    ],
    qa: [
      { q: "My SDI laterals are 1,300 ft of 7/8 inch tubing, 0.859 ID, emitters every 18 inches at 0.264 gph. How long to flush through the emitters?", a: "Enter 0.859 in, 1.5 ft, 0.0044 gpm and 1,300 ft. There are 867 emitters and the flush time is 75 minutes, as in Example 15.3." },
      { q: "How long for chemical to get to the end of a 1,320 ft wheel line with sprinklers every 40 feet at 10 gpm, 4.856 inch ID?", a: "There are 33 sprinklers and the travel time is 15.7 minutes. Keep running clean water at least that long after injection stops." },
      { q: "Drip tape with 0.625 inch ID, emitters every foot at 0.2 gph, 600 ft rows. How long?", a: "Enter 0.00333 gpm. With 600 emitters the time is 33.4 minutes. The 4 in manifold feeding those rows at 3.81 gpm per lateral adds another 4.7 minutes in the book's example." }
    ],
    figs: ["15.13"]
  },
  "eq-15.5": {
    more: [
      "Inside diameter is from the span list: 6 5/8 in pivot pipe has an ID of about 6.4 in. Lateral length is the pivot length from the dealer printout. Sprinkler spacing is the typical outlet spacing (use the spacing along most of the lateral). Flow is the system flow from the meter with the end gun off.",
      "The result is the time to flush the pivot lateral. Quarter-mile pivots usually come out at 5 to 10 minutes and half-mile pivots near 15. Keep the pivot running for at least this long after injection stops so the start of the revolution gets the right dose. The equation applies only with the end gun off, since the gun pulls water to the end faster than the sprinklers alone. Using the outside diameter instead of the inside diameter overstates the time by about 7% on 6 5/8 in pipe.",
      "Add mainline flush time from Eq. 15.3 if the injector is not at the pivot point."
    ],
    qa: [
      { q: "1,280 ft pivot, 6.395 ID, sprinklers every 20 feet, 860 gpm. How long to flush?", a: "6.9 minutes, as in Example 15.4. Keep the pivot running 7 minutes past the end of injection." },
      { q: "Our 1,300 ft pivot has 6 5/8 inch pipe, 6.407 ID, sprinklers every 10 feet and 800 gpm. How long after injection do I keep it running?", a: "Enter 6.407 in, 1,300 ft, 10 ft and 800 gpm. The flush time is 8.5 minutes. The closer spacing and lower flow add about a minute and a half over the book's pivot." },
      { q: "A half-mile pivot with 8 inch pipe, 7.782 ID, 2,600 ft long, 15 ft spacing and 1,500 gpm. What flush time goes in the chemigation record?", a: "The flush time is 14.1 minutes. Record at least 15 minutes of clean water with the end gun off." }
    ],
    figs: []
  },
  "flush-total": {
    more: [
      "Zone flow comes from the meter while the zone runs. Mainline, manifold and lateral sizes and lengths come from the design drawing or the as-built map, using inside diameters. Lateral spacing on the manifold and flow per lateral set the manifold term, and emitter spacing and flow set the lateral term. Measure the manifold length on one side of the inlet tee when the manifold is fed from the middle.",
      "The total is the time from the injector to the farthest emitter. It is also the minimum time of clean water to run after injection stops, so chemical does not sit in the laterals. Laterals usually take most of the time on drip. In the book's 78 ac SDI field the total is about 85 minutes, 75 of it in the laterals. Shortening laterals helps less than you might think because lateral flush time depends on the log of the emitter count.",
      "Use the total to plan set times in Eq. 15.1 so injection ends early enough to flush within the set."
    ],
    qa: [
      { q: "For the SDI field in Examples 15.2 and 15.3, how long from injector to the last emitter?", a: "Mainline 4.8 min, manifold 4.7 min, laterals 75.4 min, for a total of 84.8 min. Plan on about 1.5 hours of clean water after injection, or the 3 hours the book uses per zone to be safe." },
      { q: "If the laterals were half as long, 660 feet, how much time would we save?", a: "Lateral time drops to 68.4 min and the total to 77.9 min. Halving the length saves only 7 minutes, because lateral flush time depends on the log of the number of emitters." },
      { q: "The zone only runs 300 gpm when the pump is worn. Does that change flushing?", a: "The mainline takes 8.0 min instead of 4.8, so the total rises to 88 min. The manifold and lateral times depend on lateral and emitter flow, not zone flow." }
    ],
    figs: ["15.13"]
  },
  "pump-calibration": {
    more: [
      "The desired injection rate comes from Eq. 15.1, Eq. 15.2 or injection-plan. Maximum pump capacity is on the pump nameplate. For the catch test, run the pump at normal system pressure and catch from the injection line into a graduated cylinder or a calibration tube for a timed period, 1 to 5 minutes. Record the volume in mL and the time in minutes.",
      "The dial setting is the desired rate over maximum capacity. The test converts the catch to gal/hr (1 gal/hr is 63.1 mL/min). If the measured rate is off by more than a few percent, adjust the dial and test again. Pumps often deliver less at high system pressure than on the bench, so always test at operating pressure. Repeat the test whenever the product, temperature or system pressure changes.",
      "Use the final setting with the injection time from Eq. 15.1 or 15.2."
    ],
    qa: [
      { q: "I need 17.5 gal/hr and the pump maxes at 20. I caught 3,000 mL in 2 and a half minutes. What do I do?", a: "Start at 87.5% on the dial. The catch is 1,200 mL/min, or 19.0 gal/hr, too high. Turn the dial down to about 81% and test again, as in Example 15.1." },
      { q: "For the pivot insecticide I need 1.07 gal/hr on a 5 gal/hr pump. I caught 300 mL in 4.5 minutes. Am I there?", a: "The dial starts at 21.4%. The catch is 66.7 mL/min or 1.06 gal/hr, within 2% of target. Keep the setting." },
      { q: "We need 16.25 gal/hr from a 20 gal/hr pump. The catch was 1,000 mL in 1 minute. What next?", a: "The dial starts at 81.25%. The measured rate is 15.85 gal/hr, low. Turn up to about 83% and test again." }
    ],
    figs: ["15.2", "15.3", "15.10"]
  },
  "injection-plan": {
    more: [
      "Choose whether the rate is a product volume per acre from the label or a nutrient rate. For nutrients, enter the nutrient per gallon of product, about 3 lb N/gal for 28% UAN and about 3.5 lb N/gal for 32% UAN. Choose set or moving system, then enter the area and injection time for a set, or the area and revolution time for a pivot. Enter the pump maximum capacity from the nameplate.",
      "The output gives product per acre, total product to order, injection rate, the mL/min to look for in the catch test, and the starting dial setting. A dial over 100% means the pump is too small for the plan. Under about 10%, the pump is too large to meter accurately. Always confirm chemigation safety equipment (Figure 15.5) and posting (Figure 15.12) before injecting.",
      "Then calibrate with pump-calibration, and plan flush time with flush-total or Eq. 15.5."
    ],
    qa: [
      { q: "I want 15 lb N on 78 acres of SDI with 28% UAN over 24 hours, 20 gal/hr pump. What's the setup?", a: "Choose nutrient rate, 15 lb/ac, 3 lb/gal, set system, 78 ac and 24 hr. That is 5 gal/ac, 390 gal of UAN to order and 16.25 gal/hr. Start the dial at 81% and look for about 1,025 mL/min in the catch test." },
      { q: "The insecticide label says 1.5 pints per acre. My pivot covers 126 acres in 22 hours and I have a 5 gal/hr pump. How do I set it up?", a: "Choose label rate 1.5 pt/ac, moving system, 126 ac and 22 hr. That is 0.19 gal/ac and 23.6 gal of product for the field. The injection rate is 1.07 gal/hr, about 68 mL/min in the catch test, with the dial starting at 21.5%." },
      { q: "A grower wants 30 lb of N through his pivot with 28% UAN. 125 acres, 60 hours per revolution, and a 20 gal/hr pump. Will that work?", a: "10 gal/ac and 1,250 gal total. The rate is 20.8 gal/hr, so the dial would be 104%. The pump is too small. Slow the pivot or use a larger pump." }
    ],
    figs: ["15.1", "15.2", "15.5", "15.12"]
  }
});
