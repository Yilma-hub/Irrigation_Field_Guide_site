window.CALC_USE2 = Object.assign(window.CALC_USE2 || {}, {
  "eq-8.1": {
    more: [
      "You rarely measure velocity directly. Get it from a flow meter reading and the pipe inside diameter with Eq. 8.5, or from the meter itself if it shows velocity. Farm mainlines sized to the 5 ft/s (1.5 m/s) guideline run 2 to 5 ft/s, while short pump discharge heads, meter runs and undersized risers can run 8 to 12 ft/s. Use the inside diameter from the pipe table, never the nominal size.",
      "Velocity head goes up with the square of velocity, so it is small until the pipe is overloaded. At 5 ft/s it is 0.39 ft, about 0.17 psi, which is well inside the reading error of a field gauge. At 10 ft/s it is 1.6 ft (0.7 psi), and at that speed fitting losses, which are K times velocity head, start to matter. If your answer is above about 1 ft, take it as a sign the pipe is too small rather than as a number to carry forward.",
      "Velocity head feeds the total head at a point (Eq. 8.4), the Bernoulli balance (Eqs. 8.6 and 8.7) and every minor loss (Eq. 8.12). Figure 8.3 gives the same value graphically."
    ],
    qa: [
      { q: "My gauge at the pump says 55 psi. Do I need to add anything for the water moving through the pipe?", a: "Find the velocity first. An 8 in PVC main carrying 700 gpm runs about 4.9 ft/s, and entering 5 ft/s gives a velocity head of 0.39 ft, or 0.17 psi. That is less than one gauge division, so for a farm main you can use the gauge reading as is." },
      { q: "The dealer put a 4 inch meter on my 400 gpm line. Is that throwing away much energy?", a: "At 400 gpm a 4 in pipe runs 10.2 ft/s. Enter 10.23 ft/s and the velocity head is 1.6 ft, the book's Example 8.2 value. Every elbow and valve in that section loses a multiple of it, so the run around the meter should be kept short and straight." },
      { q: "On a design check, a 10 inch line at 400 gpm runs 1.6 ft/s. Can I drop velocity head from the calculations?", a: "Enter 1.63 ft/s and the velocity head is 0.04 ft, or about 0.02 psi. Drop it. The book does the same in Example 8.3 and uses the pressure form of Bernoulli (Eq. 8.10) for this kind of line." }
    ],
    figs: ["8.3"]
  },
  "eq-8.5": {
    more: [
      "Flow comes from a propeller or magnetic meter, a pump test, or the design flow of the system, such as a pivot at 6 to 7 gpm per acre. Inside diameter comes from the pipe table: 8 in PVC PIP Class 125 is 7.658 in, 10 in is 9.572 in, and 4 in aluminum sprinkler pipe is 3.900 in. Using nominal size can shift velocity by 10% or more on small pipe.",
      "The book's guideline for mainlines is 5 ft/s or less. Above that, water hammer from a fast valve closure or a pump trip can split a PVC line, and friction loss climbs quickly. Between 5 and 7 ft/s is common in sprinkler laterals and pivot spans, where the flow drops along the pipe. If a buried main tests above 5 ft/s, the usual fixes are the next pipe size up, a second line, or a slower valve and surge protection.",
      "Velocity from this calculator feeds the velocity head (Eq. 8.1), fitting losses (Eq. 8.12) and the Table 8.5 sizing check."
    ],
    qa: [
      { q: "I want to push 900 gpm through my 8 inch PVC main. Is that too fast?", a: "Enter 900 gpm and 7.658 in for 8 in PIP. Velocity is 6.3 ft/s, above the 5 ft/s guideline. A 10 in PIP line (9.572 in) at the same flow runs 4.0 ft/s, so for new pipe go to 10 in, and on the existing line use slow closing valves and an air and vacuum relief." },
      { q: "We are adding 30 acres to a hand line system fed by 4 inch aluminum. Can it carry 180 gpm?", a: "Enter 180 gpm and 3.9 in. Velocity is 4.8 ft/s, right at the limit, with a velocity head of 0.36 ft. It will carry the flow, but any more acres should go on a separate line, and you should check friction loss along the line before adding sprinklers." },
      { q: "For a cost-share review, the plan shows 450 gpm in 6 inch PVC IPS. Does it meet the velocity rule?", a: "Enter 450 gpm and 6.120 in. Velocity is 4.9 ft/s, under 5 ft/s, so the size is acceptable. It has no margin, so if the grower later adds flow, the main becomes the limit." }
    ],
    figs: ["8.3"]
  },
  "eq-8.2-8.3": {
    more: [
      "Elevation differences come from a survey level, RTK GPS, a USGS topo map or Google Earth for planning. A 1 ft change in elevation is 0.433 psi, so a 30 ft rise across a quarter section is 13 psi. Depth of water in a tank or a well column is measured with a tape, sounder or airline.",
      "The factor 0.433 psi per ft (2.31 ft per psi, or 9.8 kPa per m) holds only for water. Pressure from a column of water does not depend on pipe size or tank shape, only on height. A common mistake is to treat the elevation difference to the top of a pivot span as the head, when what matters is the elevation of the nozzles and the pipe at the point of interest.",
      "Use this conversion any time an elevation enters a pressure calculation: Eq. 8.10, lateral inlet pressure (Eqs. 11.5 to 11.9) and the lift term in TDH (Eq. 8.13)."
    ],
    qa: [
      { q: "My field rises 30 feet from the well to the back corner. How much pressure do I lose to the hill?", a: "Enter 30 ft and the result is 13.0 psi. That is lost to elevation alone, before any friction. If the sprinklers need 40 psi at the high corner, the pump has to deliver at least 53 psi plus the pipe friction." },
      { q: "I have a tank on a stand 20 feet above my drip block. How much pressure will that give me?", a: "Enter 20 ft and you get 8.7 psi at the block with no flow. Once water moves, friction in the supply line takes some of that, so check that the emitters still get their rated pressure, often 8 to 15 psi for drip." },
      { q: "A drip zone sits 50 feet below the filter station. Do I need a pressure regulator?", a: "Enter 50 ft and the elevation gain is 21.7 psi. If the filter station runs at 30 psi, the zone could see over 50 psi at no flow, which is above the rating of most drip tape. Put a regulator at the zone valve." }
    ],
    figs: ["8.1"]
  },
  "eq-8.4": {
    more: [
      "Pick a reference datum first, usually the pump base or the ground at the well, and measure elevation of each point above it with a level or GPS. Pressure comes from a gauge installed at that point, ideally a liquid filled gauge read at the middle of its range. Flow and inside diameter give velocity.",
      "Total head is the energy the water carries, in feet. On a farm system, pressure head is almost always the largest part, elevation head is next, and velocity head is under 1 ft unless the pipe is overloaded. Total head should always decrease in the direction of flow. If a downstream point shows more total head than the pump, a gauge is wrong or an elevation was taken from a different datum.",
      "Totals from two points go into the Bernoulli balance (Eqs. 8.6 and 8.7) to find the head lost between them."
    ],
    qa: [
      { q: "The pump outlet is 15 feet above my reference with 60 psi on the gauge in a 4 inch pipe at 400 gpm. What is the total head there?", a: "Enter Z = 15 ft, P = 60 psi, Q = 400 gpm and d = 4 in. Pressure head is 138.6 ft, velocity head 1.6 ft, and total head 155 ft. That is the Example 8.2 case, and the book rounds it to 156 ft." },
      { q: "I read 55 psi at a riser on the hill 40 feet above the well. How much energy is left there?", a: "With 800 gpm in an 8 in PIP main, enter Z = 40 ft, P = 55 psi, Q = 800 and d = 7.658 in. Total head is 167.5 ft: 127 ft pressure, 40 ft elevation and 0.5 ft velocity. Compare it with total head at the pump to see the head lost in the main." },
      { q: "At my filter station on level ground I have 35 psi in a 6 inch line at 600 gpm. Is velocity head worth counting?", a: "Enter Z = 0, P = 35 psi, Q = 600 gpm and d = 6.12 in. Velocity is 6.5 ft/s and its head is 0.67 ft out of a total of 81.5 ft, under 1%. You can skip it in the field, but the velocity is above 5 ft/s, which is worth noting for the main." }
    ],
    figs: ["8.2", "8.3"]
  },
  "eq-8.6-8.7": {
    more: [
      "Point 1 is usually a place you know well, such as the pump discharge gauge. Convert its pressure to feet (2.31 ft per psi), get velocity from flow and pipe size, and set the elevations from a survey. Head loss between the points comes from friction (Eq. 8.11 or Table 8.2) plus fittings (Eq. 8.12).",
      "The result is pressure head and pressure at point 2. Compare it with the pressure the field equipment needs: 20 to 40 psi at a pivot inlet for low pressure packages, 50 psi for many impact sprinkler laterals, and 10 to 30 psi for drip. A negative or very low result means the water will not get there at the design flow. Keep elevations on one datum and use feet throughout, then convert to psi at the end.",
      "When velocity heads are about equal at both points, the pressure form in Eq. 8.10 is quicker and gives the same answer."
    ],
    qa: [
      { q: "I have 60 psi at the pump and the field is a quarter mile away and 15 feet higher. What will I have at the field?", a: "Enter h1 = 138.6 ft (60 psi), Z1 = 0, Z2 = 15 ft, velocities of 4.9 ft/s at both ends, and a head loss of 11.8 ft for the pipe. Pressure head at the field is 111.8 ft, or 48.4 psi. If the system needs 50 psi, raise pump pressure slightly or reduce loss with a larger main." },
      { q: "My well is at the top of the field and the pivot sits 20 feet lower. The pump makes 35 psi. What does the pivot see?", a: "Enter h1 = 80.85 ft (35 psi), Z1 = 0, Z2 = -20 ft, equal velocities of 5 ft/s and 6 ft of head loss. Pressure at the pivot is 41.1 psi, higher than at the pump because the 20 ft fall adds 8.7 psi and friction takes only 2.6 psi." },
      { q: "We go from a 6 inch to an 8 inch pipe at the filter. Does the slower water give me back pressure?", a: "Enter V1 = 6.3 ft/s, V2 = 3.6 ft/s, h1 = 115.5 ft (50 psi), level ground and 10 ft of loss through the filter. Pressure after the filter is 45.9 psi. The velocity change gives back only 0.4 ft (0.2 psi), so nearly all of the 4.1 psi drop is the filter itself." }
    ],
    figs: ["8.2", "8.4"]
  },
  "eq-8.8-8.9": {
    more: [
      "Friction loss comes from Eq. 8.11 or Table 8.2 for each pipe section. Minor losses come from Eq. 8.12 with K values from Table 8.4, or from manufacturer curves for meters, filters, backflow valves and chemigation check valves. A clean screen filter commonly loses 2 to 5 psi, and a sand media filter 3 to 8 psi before backflush.",
      "The total is what the pump has to overcome in addition to lift and the outlet pressure. On long mainlines friction dominates and minor losses are often under 10% of the total. On a pump station or filter manifold with many fittings in a short run, minor losses can be larger than friction. Keep every term in the same unit, all feet or all psi, before adding.",
      "The total head loss goes into Bernoulli (Eqs. 8.6 and 8.7) or, as pressure, into Eq. 8.10."
    ],
    qa: [
      { q: "I figured 11.8 feet of friction in the lateral and about 1 foot for the fittings. What is the total in psi?", a: "Enter hf = 11.8 ft and hm = 1 ft. Total head loss is 12.8 ft, or 5.5 psi. Use the 5.5 psi in the end pressure check." },
      { q: "How much am I losing between the pump and the filter station with all those elbows, the meter and the check valve?", a: "Say the 200 ft run has 4.6 ft of friction and the fittings and meter add 3.2 ft. Enter those and total loss is 7.8 ft, or 3.4 psi. Nearly half is in the fittings, so a long radius elbow or a straighter layout is worth pricing when the station is rebuilt." },
      { q: "On a design review, the pump station has 2.3 feet of pipe friction and 11.5 feet through a media filter and fittings. Is that a problem?", a: "Enter both and total loss is 13.8 ft, or 6.0 psi. The filter and fittings are 83% of it. That is normal for a filter station, but make sure the pump TDH includes the dirty filter loss, typically 5 psi more than clean, so pressure holds before backflush." }
    ],
    figs: ["8.4"]
  },
  "eq-8.10": {
    more: [
      "P1 is a gauge reading or the pump discharge pressure. Elevations come from a survey or GPS, and you only need the difference between the two points. Pressure loss is friction plus minor loss in psi, from Eq. 8.11, Table 8.2 and Eq. 8.12.",
      "The answer is the pressure at the far end of the pipe. Pressure drops 0.433 psi for every foot the pipe climbs and gains 0.433 psi for every foot it falls. Check the end pressure against what the sprinklers, pivot or emitters need. The sign of the elevation change is the most common error: enter real elevations for both points rather than a difference with a guessed sign.",
      "This is the core of the pipeline pressure check procedure, and the same idea sets lateral inlet pressure in Eqs. 11.5 to 11.9."
    ],
    qa: [
      { q: "My lateral starts at 60 psi and climbs 12 feet over its length with 5.1 psi of friction. What is the end pressure?", a: "Enter P1 = 60 psi, Z1 = 0, Z2 = 12 ft and PL = 5.1 psi. End pressure is 49.7 psi, the result of Example 8.4. The 12 ft rise costs 5.2 psi, about the same as friction." },
      { q: "The pump sits 25 feet above the pivot and puts out 35 psi. With 2.34 psi of loss in the main, what does the pivot get?", a: "Enter P1 = 35 psi, Z1 = 25 ft, Z2 = 0 and PL = 2.34 psi. The pivot gets 43.5 psi, as in Example 8.5. The downhill run gains 10.8 psi, so the pump could likely run at lower pressure." },
      { q: "We are moving a sprinkler set to a field 30 feet higher with about 6 psi of friction. The pump gives 45 psi. Will it work?", a: "Enter P1 = 45 psi, Z1 = 0, Z2 = 30 ft and PL = 6 psi. End pressure is 26 psi. Impact sprinklers designed for 45 to 50 psi will throw short and leave dry rings, so this field needs a booster or a different nozzle package." }
    ],
    figs: ["8.4"]
  },
  "eq-8.11": {
    more: [
      "Flow is from the meter or the design. Inside diameter is from the pipe table, and C from Table 8.1: 150 for PVC, 140 for galvanized steel pivot pipe, 120 for aluminum with couplers, 110 for gated aluminum and 100 for older steel. The outlet factor F is 1 for a mainline with no outlets, about 0.36 for a sprinkler lateral with 30 or more outlets (Table 8.3), and 0.54 or 0.56 for a center pivot.",
      "The result is friction loss per 100 ft and over the full length. For mainlines, a common design target is 1 psi per 100 ft or less, with velocity at or below 5 ft/s. Friction rises with flow to the 1.852 power and falls with diameter to the 4.866 power, so going up one pipe size often cuts friction by 60 to 70%. Mistakes to avoid are using nominal diameter, leaving F at 1 for a lateral, and using flow at the end of a lateral instead of at the inlet.",
      "The book's Table 8.2 gives the same numbers for common pipe. Use the friction total in Eq. 8.10 or the pipeline pressure check."
    ],
    qa: [
      { q: "How much pressure do I lose in a 1280 foot, 4 inch aluminum lateral carrying 165 gpm to 33 sprinklers?", a: "Enter Q = 165 gpm, d = 3.9 in, C = 120, F = 0.36 and L = 1280 ft. Loss is 0.39 psi per 100 ft and 5.0 psi over the lateral, matching Example 8.4. With F left at 1 you would get 14 psi, almost three times too high." },
      { q: "My half mile of 8 inch PVC mainline carries 700 gpm. How much pressure does it eat?", a: "Enter Q = 700 gpm, d = 7.658 in, C = 150, F = 1 and L = 2640 ft. Friction is 0.39 psi per 100 ft and 10.4 psi in total. If the same line were old steel at C = 100, the loss would be 22 psi." },
      { q: "On a pivot check, what friction should I expect along a 1300 foot machine with 6 5/8 inch pipe at 800 gpm and no end gun?", a: "Enter Q = 800 gpm, d = 6.4 in, C = 140, F = 0.54 and L = 1300 ft. Friction along the pivot is 9.6 psi. Add the elevation change to the high point and the end pressure needed by the last nozzles to get the pivot inlet pressure." }
    ],
    figs: ["8.4"]
  },
  "tab-8.1": {
    more: [
      "Identify the pipe on a field visit from the print on PVC (class or SDR and IPS or PIP), the couplers on aluminum, and the gates on gated pipe. Pivot spans are galvanized steel unless the dealer lists a coated or poly lined pipe. When the pipe is old, ask about age and look inside at a riser or a cut section for scale.",
      "The C value sets friction loss: a lower C means a rougher pipe and more loss at the same flow. Going from C = 150 to C = 100 raises friction loss by about 2.1 times. Book values are for pipe in fair condition. Old steel with heavy scale or iron bacteria can be well below 100, and gated pipe with half the gates open behaves rougher than new pipe.",
      "The C value goes into Eq. 8.11 and Eq. 11.11."
    ],
    qa: [
      { q: "What C value do I use for my gated aluminum pipe?", a: "Select aluminum pipe with gates and the table gives C = 110. Use that in Eq. 8.11 along with the outlet factor for the number of open gates." },
      { q: "I have an old steel mainline and a new PVC one, both 8 inch at 700 gpm over a half mile. How different is the friction?", a: "The table gives C = 100 for standard steel and 150 for PVC. Running Eq. 8.11 with each, the steel line loses 22.1 psi and the PVC line 10.4 psi over 2640 ft. Replacing the steel line saves about 12 psi of pump pressure every hour it runs." },
      { q: "For a cost-share design, should I use 150 or 130 for PVC gated pipe?", a: "Table 8.1 lists PVC pipe with gates at 130, lower than 150 for plain PVC, because the gate openings disturb the flow. Use 130 for the gated section and 150 for the buried PVC supply line." }
    ],
    figs: []
  },
  "tab-8.2": {
    more: [
      "Pick the pipe type and size from what is in the field and enter the flow from a meter or the design. The table covers aluminum sprinkler pipe, PVC IPS Class 160, aluminum gated pipe and PVC PIP Class 125 from 2 to 12 in. Between printed flows the calculator interpolates, and outside the printed range it falls back on Hazen-Williams.",
      "The table value is psi per 100 ft with no outlets. Multiply by length over 100, and by the outlet factor F when the pipe has sprinklers or gates. The shaded cells in the book, and the velocity check here, mark flows above 5 ft/s. A reading in that range on a buried main is a signal to go up a size, while on a short portable lateral it may be acceptable.",
      "Use the total in Eq. 8.10 or the pipeline pressure check, and compare it with the size from Table 8.5."
    ],
    qa: [
      { q: "What is the friction loss in 4 inch aluminum hand line at 165 gpm?", a: "Pick 4 in aluminum sprinkler pipe and enter 165 gpm. The table gives 1.10 psi per 100 ft, the value used in Example 8.4. For a lateral with sprinklers, multiply by the outlet factor (about 0.36) and the length over 100." },
      { q: "I want to run 150 gpm through 300 feet of 3 inch PVC to a new pivot corner. Is 3 inch big enough?", a: "Pick PVC IPS 3 in, enter 150 gpm and 300 ft. Loss is 1.52 psi per 100 ft and 4.6 psi total, at 5.9 ft/s, above the guideline. In 4 in PVC IPS the same flow loses 0.45 psi per 100 ft, 1.35 psi total, at 3.6 ft/s. Go with 4 inch." },
      { q: "Can 8 inch gated pipe carry 900 gpm across a quarter mile field?", a: "Pick 8 in aluminum gated pipe, enter 900 gpm, 1320 ft and F = 0.36. The table gives 0.96 psi per 100 ft and 4.6 psi over the run, at 5.9 ft/s. That is about 10 ft of head on a low pressure pipe, so the far gates will run weak. Feed from the middle, split the set, or use 10 in pipe." }
    ],
    figs: []
  },
  "tab-8.3": {
    more: [
      "Count the outlets on the pipe: sprinklers on a lateral, open gates on gated pipe, or drop nozzles on a pivot. For a lateral, outlets are about the length divided by the spacing, such as 33 sprinklers on 1280 ft at 40 ft. The table assumes outlets equally spaced with equal flow and the first outlet one full spacing from the inlet.",
      "F is the fraction of the full flow friction loss that actually occurs, because flow drops at each outlet. It falls quickly at first, 0.634 for 2 outlets and 0.396 for 10, then levels off near 0.36 for 30 or more and 0.345 above 100. Center pivots use 0.54 without an end gun and 0.56 with one, because outlet flow increases toward the end. Leaving F at 1 on a lateral overstates loss by roughly three times.",
      "F multiplies the friction in Eq. 8.11, Table 8.2 and Eq. 11.11."
    ],
    qa: [
      { q: "My hand line has 33 sprinklers. What outlet factor do I use?", a: "Enter N = 33. Table 8.3 gives F = 0.36, as in Example 8.4. The Christiansen formula with m = 1.852 gives 0.366, close enough for field work." },
      { q: "I am opening 60 gates on a gated pipe. What F should I use for friction?", a: "Enter N = 60 and the table gives 0.354. Multiply the no outlet friction from Table 8.2 by 0.354. For gated pipe the flow per gate is rarely equal, so treat the result as a close estimate." },
      { q: "A short drip manifold has only 4 laterals coming off it. Is 0.36 still right?", a: "No. Enter N = 4 and the table gives F = 0.48. With few outlets the flow stays high over more of the pipe, so using 0.36 would understate loss by about 25%." }
    ],
    figs: ["11.9"]
  },
  "eq-8.12": {
    more: [
      "List every fitting and valve between the two points: elbows, tees, gate and check valves, strainers, foot valves. Pick the K value from Table 8.4 for the type and size, or enter K from the manufacturer for meters, backflow preventers and filters. Velocity comes from flow and inside diameter.",
      "Each fitting loses K times the velocity head. At 5 ft/s a flanged 90 degree elbow (K about 0.3) loses about 0.1 ft, so a few elbows on a long main do not matter. A globe valve (K 5.6 to 7) or a partly closed butterfly valve can lose several psi. Minor losses grow with velocity squared, so a manifold running 8 to 10 ft/s can lose more in fittings than in the pipe.",
      "Add the result to friction in Eqs. 8.8 and 8.9, or enter the total K in the pipeline pressure check."
    ],
    qa: [
      { q: "How much pressure does one 6 inch flanged elbow cost me at 400 gpm?", a: "Pick the regular flanged 90 degree elbow at 6 in (K = 0.28) and enter 400 gpm and 6 in. Velocity is 4.5 ft/s and the loss is 0.09 ft, or 0.04 psi. Not worth worrying about." },
      { q: "The pump station uses a 6 inch globe valve to throttle 600 gpm. What is it costing?", a: "Pick the flanged globe valve at 6 in (K = 5.8), enter 600 gpm and 6.065 in. Velocity is 6.7 ft/s and the loss is 4.0 ft, or 1.7 psi, fully open. A gate or butterfly valve in the same spot would lose under 0.1 psi." },
      { q: "The discharge head has four 4 inch elbows at 400 gpm. Is that adding much?", a: "Pick the 4 in regular flanged elbow (K = 0.31), enter 4 fittings, 400 gpm and 4.026 in. Velocity is 10 ft/s and the four elbows lose 2.0 ft, or 0.85 psi. The high velocity is the real issue: a 6 in discharge would cut that to about 0.15 psi." }
    ],
    figs: ["8.5", "8.6"]
  },
  "tab-8.4": {
    more: [
      "Walk the pump station and the pipeline and note each fitting by type, connection (flanged or screwed) and nominal size. Screwed fittings are listed only for 3 and 4 in. For anything not in the table, such as meters, backflow assemblies and filters, use the manufacturer's loss curve or K value.",
      "K is a multiplier on velocity head. Values under 0.3 are elbows and open gate valves. Values around 1 are strainers, foot valves and branch flow through a tee. Values of 2 are swing check and angle valves, and 5 to 7 are globe valves. A blank in the table means the fitting is not listed at that size, so do not use a value from another size without checking.",
      "Use the K values in Eq. 8.12 or add them up for the ΣK input in the pipeline pressure check."
    ],
    qa: [
      { q: "What K do I use for an 8 inch flanged gate valve?", a: "Pick valve, gate flanged at 8 in. K = 0.075, the lowest loss valve in the table when fully open." },
      { q: "We have a swing check, a strainer and a long radius elbow, all 6 inch flanged, at the pump. What is the total K?", a: "Look up each one: swing check 2.0, strainer 0.85 and long radius 90 degree elbow 0.18. Total K is 3.03. Enter that in the pipeline pressure check or in Eq. 8.12 with K set to Other." },
      { q: "A grower wants to replace a 6 inch globe valve with a gate valve. How much difference does the table show?", a: "Globe flanged at 6 in is K = 5.8 and gate flanged at 6 in is K = 0.11, about 50 times less. At 600 gpm in 6 in pipe that is roughly 1.7 psi saved every hour the pump runs." }
    ],
    figs: ["8.5", "8.6"]
  },
  "tab-8.5": {
    more: [
      "Enter the system flow: the pump test flow, the pivot design flow, or the gross capacity times the acres (Eq. 5.20). Pick the pipe family you plan to use: aluminum sprinkler pipe, PVC IPS, aluminum gated pipe or PVC PIP. The table lists the maximum flow at 5 ft/s for each size, rounded to the nearest 5 gpm.",
      "The answer is the smallest size that keeps velocity at or below 5 ft/s. Treat it as a starting size. On long mainlines, friction cost over 20 or more years of pumping can justify the next size up, and a pressure check with Eq. 8.11 or the pipeline procedure should follow. If the flow is beyond the largest size listed, use larger pipe or split into two lines.",
      "Check the chosen size with the friction table (Table 8.2) and the pipeline pressure check."
    ],
    qa: [
      { q: "What size PVC mainline do I need for 700 gpm?", a: "Pick PVC PIP and enter 700 gpm. The table gives 8 in, with a maximum of 720 gpm and a velocity of 4.9 ft/s at your flow, as in Example 8.5. Since 700 is close to the limit, price 10 in for a long run." },
      { q: "I have 900 gpm to move through gated pipe. Is 8 inch enough?", a: "Pick aluminum gated and enter 900 gpm. The smallest size at 5 ft/s is 10 in (up to 1200 gpm), at 3.8 ft/s. The 8 in size tops out at 765 gpm." },
      { q: "A new well tests at 1700 gpm. What PIP size does the table give?", a: "Pick PVC PIP and enter 1700 gpm. The calculator reports the flow is larger than the table, since 12 in PIP tops out at 1615 gpm. Plan on 15 in pipe or two parallel lines, and check friction with Eq. 8.11." }
    ],
    figs: ["8.5", "9.11"]
  },
  "pipeline-design": {
    more: [
      "Collect the pipe type and size, length, the flow at the inlet or the number of outlets and flow per outlet, the pressure at the inlet, and the elevation change from inlet to end. Elevation comes from a survey or RTK GPS. Add up K values for the valves and fittings from Table 8.4 if they are significant.",
      "The output is end pressure along with the friction and minor losses behind it. Compare the end pressure with what the equipment needs and check that velocity at the inlet is at or below 5 ft/s for a mainline. On a sprinkler lateral, the book also limits the pressure difference along the lateral to 20% of the average pressure. When the end pressure is short, try the next pipe size, a shorter run, or a higher inlet pressure, in that order of cost.",
      "This procedure follows Examples 8.4 and 8.5 and combines Eq. 8.10, Eq. 8.11b and Eq. 8.12. Lateral design continues in Eqs. 11.5 to 11.13."
    ],
    qa: [
      { q: "Will I have enough pressure at the end of my 1280 foot aluminum hand line that climbs 12 feet?", a: "Pick 4 in aluminum sprinkler pipe, 1280 ft, equal outlets, 33 sprinklers at 5 gpm, 60 psi at the inlet and a 12 ft rise. Flow is 165 gpm, F = 0.36, friction 5.0 psi, and end pressure 49.8 psi (the book rounds to 49.7). If the sprinklers need 50 psi, that is just short." },
      { q: "I am bringing 700 gpm a half mile through 8 inch PIP to a pivot 18 feet higher, with 55 psi at the pump. What does the pivot get?", a: "Pick 8 in PVC PIP, 2640 ft, no outlets, Q = 700 gpm, P1 = 55 psi, rise 18 ft and ΣK = 3.2 for the valves and elbows. Friction is 10.4 psi, minor loss 0.5 psi and pivot inlet pressure 36.3 psi. Check that against the pivot's nozzle chart." },
      { q: "On a gated pipe design, I have 264 gates at 3 gpm on 660 feet of 8 inch with 8 psi at the riser. Will the far end get water?", a: "Pick 8 in aluminum gated pipe, 660 ft, equal outlets, 264 at 3 gpm, P1 = 8 psi and level ground. Flow is 792 gpm, F = 0.345, friction 1.7 psi, and end pressure 6.3 psi. If the pipe falls 2 ft toward the end, end pressure rises to 7.1 psi, which helps even out the gates." }
    ],
    figs: ["8.4", "8.5", "8.6"]
  },
  "eq-8.13": {
    more: [
      "Discharge pressure comes from a gauge on the discharge head, read with the pump running at its normal flow. Lift is the pumping water level below the discharge, measured with a well sounder or airline, plus the height of the gauge above ground. For a surface source, lift is the vertical distance from the water surface to the pump discharge.",
      "TDH is the total head the pump has to produce at that flow. Irrigation wells commonly run 150 to 400 ft of TDH. Use pumping water level, not static level, because drawdown can add 20 to 100 ft in some wells. The equation ignores column friction and velocity head, which typically add a few feet on a vertical turbine.",
      "TDH feeds water horsepower (Eq. 8.18), energy per acre-inch (Eq. 8.22) and the pump evaluation and pump match procedures. Pumping level comes from Eqs. 9.1 and 9.3."
    ],
    qa: [
      { q: "My pump shows 50 psi and the water is 100 feet down when it runs. What is my TDH?", a: "Enter P = 50 psi and L = 100 ft. TDH is 216 ft, as in Example 8.6. Use that to find water horsepower and energy use." },
      { q: "We are converting a pivot from a 40 psi package to a 25 psi LEPA package with a 180 foot lift. What TDH does the pump need now?", a: "Enter P = 25 psi and L = 180 ft. TDH is 238 ft. At 40 psi it was 272 ft, so the pump would make 34 ft more head than needed unless it is trimmed, de-staged or put on a VFD." },
      { q: "A river pump lifts 60 feet and runs the sprinklers at 65 psi. What TDH do I put on the pump order?", a: "Enter P = 65 psi and L = 60 ft. TDH is 210 ft at the design flow. Add a few feet for suction and column losses when choosing from the pump curve." }
    ],
    figs: ["8.8", "8.15"]
  },
  "eq-8.14": {
    more: [
      "Install gauges on both sides of the booster: one on the suction or inlet and one on the discharge. Read them at the same time with water flowing at the normal rate. A suction gauge on a pump drawing from a ditch or pond will often read a vacuum, which you enter as a negative psi.",
      "TDH is the head the booster adds. A booster on a pivot end gun or a corner arm is commonly 20 to 50 psi (46 to 115 ft). If the inlet pressure drops while the booster runs, the supply line is too small or the main pump is near the end of its curve. On a suction lift, high vacuum (more than about 15 to 20 ft of lift) risks cavitation, which shows up as noise and pitting.",
      "Use TDH from this equation in Eq. 8.18 for horsepower and in Eq. 8.22 for energy."
    ],
    qa: [
      { q: "My booster pump takes 30 psi in and puts 70 psi out. What head is it making?", a: "Enter Pout = 70 and Pin = 30 psi. TDH is 92 ft. That is the number to check against the booster's pump curve at your flow." },
      { q: "Our canal turnout gives 5 psi and the drip system needs 45 psi. What TDH should the booster have?", a: "Enter Pout = 45 and Pin = 5 psi. The booster needs 92 ft of TDH at the system flow, plus filter loss if the filters are downstream of the gauge." },
      { q: "The centrifugal pump on my pond shows 4 psi of vacuum on the suction side and 30 psi on the discharge. What TDH is that?", a: "Enter Pin = -4 psi and Pout = 30 psi. TDH is 78.5 ft. The 4 psi of vacuum is about 9 ft of suction lift, which is fine for most centrifugal pumps." }
    ],
    figs: ["8.7"]
  },
  "eq-8.15": {
    more: [
      "Get the current flow and TDH from a pump test, and BHP from the pump curve or measured motor power. Speed comes from the motor nameplate or a VFD display (1770 and 3550 rpm are common for 4 and 2 pole motors). For an impeller trim, use the impeller diameter from the pump curve, in inches, for both values.",
      "Flow changes with the speed ratio, head with its square and horsepower with its cube. A 10% cut in speed gives about 10% less flow, 19% less head and 27% less power along the pump curve. The laws move the pump curve, so the real operating point is where the new curve crosses the system curve. On a well with large static lift, flow drops more than the ratio suggests. Trimming more than about 10 to 15% of the impeller diameter makes the laws less accurate.",
      "Use the result with the pump match procedure to decide between trimming, de-staging or a VFD, and confirm with the manufacturer's curves in Figures 8.10 and 8.11."
    ],
    qa: [
      { q: "If I slow my pump from 1770 to 1670 rpm, what happens to flow, head and horsepower?", a: "Enter 1770 and 1670 rpm, 800 gpm, 285 ft and 80 bhp. The new point is about 755 gpm, 254 ft and 67 bhp. To hit a target TDH of 235 ft, the last output says about 1607 rpm." },
      { q: "A VFD dealer says I can run at 1500 rpm on the low pressure package. What would I get?", a: "Enter 1770 and 1500 rpm with 800 gpm, 285 ft and 80 bhp. The pump curve moves to 678 gpm at 205 ft and 49 bhp. If the pivot needs 235 ft at 800 gpm, 1500 rpm is too slow, so set the VFD on pressure rather than a fixed speed." },
      { q: "The pump has a 10.5 inch impeller making 250 feet at 900 gpm. What diameter gives 220 feet?", a: "Enter 10.5 as the current diameter, 900 gpm, 250 ft and 75 bhp, with a target of 220 ft. The diameter for 220 ft is 9.85 in. Trimming to 9.75 in would give about 836 gpm at 216 ft and 60 bhp, so stay at 9.85 in and confirm on the curve." }
    ],
    figs: ["8.10", "8.11", "8.16"]
  },
  "eq-8.16": {
    more: [
      "Water horsepower comes from flow and TDH (Eq. 8.18). Power into the pump shaft is from the pump curve, a dynamometer test, or measured electrical input times motor efficiency, usually 0.90 to 0.95 for irrigation motors. For an engine, shaft power is hard to measure in the field, so the book rates the whole plant with Eq. 8.20 instead.",
      "New vertical turbine and centrifugal pumps run 75 to 85% at their best efficiency point. A worn pump or one operating far off its curve can drop to 50 to 60%. Low efficiency means more fuel or power per acre-inch. Do not compare a pump efficiency with a plant performance rating, which includes the motor or engine and the drive.",
      "Efficiency goes into Eq. 8.19 to size the motor or engine."
    ],
    qa: [
      { q: "My pump puts 44 water horsepower into the water and takes 55 horsepower at the shaft. How efficient is it?", a: "Enter 44 and 55. Efficiency is 0.80, the Example 8.6 value. That is a pump in good condition." },
      { q: "An older pump test shows 30 whp against 50 shaft horsepower. Is it worth repairing?", a: "Enter 30 and 50. Efficiency is 0.60, about 20 points below a new pump. That pump uses about a third more energy than it should, so run the pump evaluation to put a dollar value on it before deciding." },
      { q: "For a cost-share application, the new pump curve shows 52.5 whp at 70 bhp at the design point. Does that meet a 75% requirement?", a: "Enter 52.5 and 70. Efficiency is 0.75, right at the requirement. Ask the dealer whether a different impeller or model puts the design point closer to the best efficiency point." }
    ],
    figs: ["8.9", "8.15"]
  },
  "eq-8.17-8.19": {
    more: [
      "Flow comes from a meter or the system design. TDH comes from Eq. 8.13 or 8.14, or from the design: pumping level plus pressure needed at the pump. Pump efficiency comes from the pump curve at the design point, typically 0.75 to 0.85 for a new irrigation pump.",
      "Water horsepower is what the water receives. Brake horsepower is what the motor or engine has to deliver to the pump shaft. Pick a motor at or above the brake horsepower, with the next standard size up if the pump will run near the end of its curve. Leave room for drive losses on right angle gear drives and for a falling water table, which raises TDH.",
      "Water horsepower feeds the performance rating (Eq. 8.20) and energy per hour (Eq. 8.21)."
    ],
    qa: [
      { q: "My pump moves 800 gpm against 216 feet of head. How big a motor do I need?", a: "Enter 800 gpm, 216 ft and 0.80. Water horsepower is 43.6 and brake horsepower 54.5, as in Example 8.6. A 60 hp motor is the standard size." },
      { q: "A new well will need 1000 gpm at 300 feet. What horsepower should I budget for?", a: "Enter 1000 gpm, 300 ft and 0.75. Water horsepower is 75.8 and brake horsepower 101. A 100 hp motor would run at its limit, so plan on 125 hp unless the dealer's curve shows better efficiency." },
      { q: "Can a 30 hp motor run a 500 gpm transfer pump with 150 feet of head?", a: "Enter 500 gpm, 150 ft and 0.70. Brake horsepower is 27.1, so a 30 hp motor will carry it with about 10% margin." }
    ],
    figs: ["8.9", "8.15"]
  },
  "tab-8.6": {
    more: [
      "Identify the energy source from the power unit: diesel, propane, natural gas, gasoline engine, or electric motor. The unit of energy is the one on the fuel bill: gallons, thousand cubic feet (mcf) or kilowatt hours.",
      "The criteria are what a well tuned plant should achieve: 12.5 whp-hr per gallon of diesel, 0.885 whp-hr per kWh of electricity, 61.7 per mcf of natural gas, 6.89 per gallon of propane and 8.66 per gallon of gasoline. They assume a 75% pump efficiency plus a good engine or motor and drive. A plant at the criteria has a performance rating of 1.0. Many plants tested in the field run 0.6 to 0.8.",
      "The criteria are the denominator in Eqs. 8.20, 8.21 and 8.22."
    ],
    qa: [
      { q: "What should a good electric pumping plant achieve?", a: "Pick electricity. The criterion is 0.885 whp-hr per kWh. If your plant makes 0.66, the performance rating is 0.75." },
      { q: "I run a diesel engine. What does the Nebraska standard expect?", a: "Pick diesel and the table gives 12.5 whp-hr per gallon. A plant making 44 whp should burn about 3.5 gal/hr to meet it." },
      { q: "We are comparing a propane and a natural gas engine for a new well. What criteria apply?", a: "Propane is 6.89 whp-hr per gallon and natural gas 61.7 per mcf. Use them in Eq. 8.22 with local prices to compare cost per acre-inch." }
    ],
    figs: ["8.15"]
  },
  "eq-8.20": {
    more: [
      "Water horsepower comes from a measured flow and TDH (Eq. 8.18). Measure energy use over a timed run: for diesel or propane, a fuel flow meter or a measured drop in a calibrated tank over 1 hr or more. For electricity, read kW from the meter or time the meter disk. For natural gas, time the gas meter dial.",
      "The rating compares actual performance with the Nebraska criteria. A rating of 1.0 meets the criteria. Values of 0.80 to 0.90 are fair, and below about 0.70 a repair usually pays for itself in a few seasons. Low ratings come from worn pumps, pumps running off their curve, engines out of tune, or poor drives. Measure everything at the same time and at the normal operating flow.",
      "The rating goes into Eqs. 8.21 and 8.22 to put a cost on poor performance."
    ],
    qa: [
      { q: "My diesel engine burns 4 gallons an hour and the pump makes 44 water horsepower. How is it doing?", a: "Enter 44 whp, 4 gal/hr and diesel. Actual performance is 11 whp-hr per gallon and the rating is 0.88, the Example 8.7 result. That is fair, and a tune-up may bring it closer to 1.0." },
      { q: "We measured 85 kW on the meter with 56 water horsepower. Is the electric plant OK?", a: "Enter 56 whp, 85 kW and electricity. Performance is 0.66 whp-hr per kWh and the rating 0.74. That is low enough to look at pump wear and the operating point." },
      { q: "A natural gas engine uses 1.3 mcf per hour making 56 whp. What is its rating?", a: "Enter 56 whp, 1.3 mcf/hr and natural gas. Performance is 43.1 whp-hr per mcf and the rating 0.70. Check the engine timing and the gear drive, then run the pump evaluation for the savings." }
    ],
    figs: ["8.15"]
  },
  "eq-8.21": {
    more: [
      "Water horsepower comes from Eq. 8.18. Pick the energy source and enter the performance rating from a pump test, or 1.0 to see what a plant at the criteria would use. Enter a local energy price to get the hourly cost.",
      "The result is fuel or electricity per hour of pumping. Multiply by season hours for a season total. Use it to plan fuel deliveries, check an electric bill, or show the cost of a low rating. A gap between the hourly use at PR = 1.0 and the measured use is the waste you can recover.",
      "For cost per unit of water, use Eq. 8.22, which works per acre-inch."
    ],
    qa: [
      { q: "How much diesel will my 44 whp pump burn per hour if the engine is in good shape?", a: "Enter 44 whp, diesel, PR = 1.0 and $3.50 per gallon. Use is 3.52 gal/hr and $12.32 per hour. At the measured PR of 0.88 it is 4.0 gal/hr and $14.00." },
      { q: "My electric plant rated 0.75. What is that costing me each hour?", a: "Enter 56 whp, electricity, PR = 0.75 and $0.11 per kWh. Use is 84 kWh per hour and $9.28. At PR = 1.0 it would be 63 kWh and $6.96, so the poor rating costs $2.32 every hour." },
      { q: "For budgeting, how much natural gas will a 40 whp well use per hour at a rating of 0.8?", a: "Enter 40 whp, natural gas, PR = 0.8 and $6 per mcf. Use is 0.81 mcf per hour and $4.86. Over 1500 hours that is about 1,220 mcf." }
    ],
    figs: ["8.15"]
  },
  "eq-8.22": {
    more: [
      "TDH comes from Eq. 8.13. Pick the energy source and enter the performance rating from a test, or 1.0 for a plant at the criteria. The season volume is acres times inches pumped, from a flow meter or from pumping hours times flow (450 gpm for 1 hr is about 1 ac-in).",
      "Energy per acre-inch is the number to compare across wells, fuels and years because it does not depend on flow. A rough check: a plant at the criteria uses about 1 gal of diesel per ac-in for each 110 ft of TDH, and about 4.4 kWh per ac-in for each 34 ft of TDH. The season cost shows what repairs, lower pressure packages or VFDs are worth.",
      "The pump evaluation and pump match procedures use this equation to price poor performance and excess head."
    ],
    qa: [
      { q: "What does it cost me to pump an acre-inch with my diesel well at 216 feet of TDH?", a: "Enter 216 ft, diesel, PR = 0.88 and $3.50 per gallon. Use is 2.24 gal per ac-in and $7.86 per ac-in, as in Example 8.9. At PR = 1.0 it would be 1.97 gal and $6.91." },
      { q: "My electric well has 300 feet of TDH and tested at 0.70. I pump about 12 inches on 130 acres. What is the season bill?", a: "Enter 300 ft, electricity, PR = 0.70, $0.11 per kWh and 1560 ac-in. Use is 55 kWh per ac-in, 86,000 kWh and $9,500 for the season. At PR = 1.0 it would be $6,650, so repairs could save about $2,850 a year." },
      { q: "Is a low lift surface pump at 120 feet of TDH cheap to run on electricity?", a: "Enter 120 ft, electricity, PR = 0.80 and $0.10 per kWh. Use is 19.4 kWh per ac-in and $1.94 per ac-in, less than half the cost of a 300 ft well." }
    ],
    figs: ["8.15", "8.16"]
  },
  "pump-eval": {
    more: [
      "A field test needs discharge pressure from a gauge, pumping lift from a sounder or airline, flow from a meter or a portable ultrasonic meter, and energy use timed over at least 30 to 60 min. Run the pump at its normal operating condition and record everything at the same time. Season hours come from an hour meter, the power bill or the grower's records.",
      "The results show TDH, water horsepower, the performance rating, and the energy per acre-inch at the actual rating and at the criteria. The savings figure is the season cost of the gap. Compare it with a repair quote: pump bowl rebuilds and engine overhauls often pay back in 2 to 5 years when the rating is below 0.7. A rating above 1.0 usually means a measurement error, most often flow.",
      "This procedure combines Eqs. 8.13, 8.18, 8.20, 8.21 and 8.22 and follows Examples 8.7 to 8.10."
    ],
    qa: [
      { q: "We tested my diesel pump at 50 psi, 100 foot lift, 800 gpm and 4 gallons an hour. How much am I wasting?", a: "Enter those with diesel, $3.50 per gallon and 1000 hours. TDH is 216 ft, whp 43.5, rating 0.87, and use is 2.26 gal per ac-in against 1.97 at the criteria. Bringing it to criteria would save about $1,800 a season." },
      { q: "My electric well runs 900 gpm at 45 psi with 180 feet of lift and draws 110 kW. Is it worth fixing?", a: "Enter those with $0.11 per kWh and 1500 hours. TDH is 284 ft, whp 64.5, rating 0.66, and use is 55 kWh per ac-in against 37 at the criteria. The season savings is about $6,100, which supports a rebuild." },
      { q: "On a natural gas well we measured 700 gpm, 30 psi, 220 foot lift and 1.6 mcf per hour. What do I tell the grower?", a: "Enter those with $6 per mcf and 1800 hours. TDH is 289 ft and the rating is 0.52. Use is 1.03 mcf per ac-in against 0.54 at the criteria, about $8,300 a season in waste. Check engine tuning first, then pump wear." }
    ],
    figs: ["8.15", "8.8"]
  },
  "pump-match": {
    more: [
      "Get the pressure the system needs at the pump from the pivot or sprinkler design, and the pumping lift at the design flow from a well test (Eq. 9.3). Count the bowls from the pump records and read the head per stage at the design flow from the manufacturer's pump curve.",
      "The output shows how much head the pump makes beyond what is needed and the extra energy it costs when a valve burns off that head. An excess of 20 to 50 ft is common after a pivot is converted to a low pressure package. Fixes are removing a stage, trimming impellers to the head per stage shown, or adding a VFD. Pressure regulators at the nozzles do not save energy because the pump still makes the full head.",
      "This procedure follows Example 8.11 and uses Eqs. 8.13 and 8.22. Use the affinity laws (Eq. 8.15) and Figure 8.11 to pick the impeller."
    ],
    qa: [
      { q: "My 5 stage pump makes 57 feet per stage but the system only needs 40 psi with a 143 foot lift. How much am I wasting?", a: "Enter 40 psi, 143 ft, 5 stages, 57 ft per stage, electricity and PR = 1.0. Design TDH is 235 ft, the pump makes 285 ft, and 50 ft (22 psi) is burned in the valve. Energy is 36.8 kWh per ac-in instead of 30.4, 21% more, as in Example 8.11. Trimming each stage to about 47 ft fixes it." },
      { q: "We converted the pivot to 25 psi. Can I just pull a stage?", a: "Enter 25 psi, 143 ft, 5 stages at 57 ft and electricity. Design TDH is 201 ft and 4 stages are enough, since 4 × 57 = 228 ft. With all 5 stages the pump wastes 84 ft and 42% more energy." },
      { q: "A diesel well needs 20 psi with 150 feet of lift, and the 4 stage pump makes 62 feet per stage. Is it oversized?", a: "Enter those with diesel and PR = 0.85. Design TDH is 196 ft and the pump makes 248 ft, so 52 ft (22 psi) is throttled. Fuel is 2.67 gal per ac-in instead of 2.11, 26% more. Trim the impellers to about 49 ft per stage." }
    ],
    figs: ["8.11", "8.12", "8.16"]
  }
});
