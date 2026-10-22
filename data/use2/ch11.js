window.CALC_USE2 = Object.assign(window.CALC_USE2 || {}, {
  "eq-11.1": {
    more: [
      "Nozzle size is stamped on the nozzle or listed on the sprinkler order, usually in 64ths of an inch (5/32 in is 10/64, or 0.156 in). To check wear, slide a set of numbered drill bits or a nozzle gauge into the orifice. Pressure is read with a pitot gauge held in the stream or a gauge on a riser tap at the sprinkler. Cd is about 0.96 for a clean straight bore nozzle.",
      "The result is nozzle discharge in gpm. Flow goes with the square of diameter and the square root of pressure, so a small change in orifice size matters more than a small change in pressure. Brass nozzles wear out over seasons, and a nozzle that has grown 5% in diameter discharges about 10% more. With Cd = 0.96 the equation is within about 2% of Table 11.1 for nozzles up to 15/32 in, and runs 5 to 8% high for 1/2 in and larger. Use the table or the manufacturer's chart when you have it.",
      "Discharge goes into the application rate (Eq. 11.2) and the lateral inflow (Eq. 11.16)."
    ],
    qa: [
      { q: "How much does a 5/32 inch nozzle put out at 50 psi?", a: "Enter Cd = 0.96, D = 0.15625 in and P = 50 psi. Discharge is 4.9 gpm, against 5.0 gpm in Table 11.1." },
      { q: "My hand line nozzles were 5/32 but a drill bit gauge shows 11/64 now. How much more water are they putting out?", a: "Enter D = 0.1719 in at 50 psi. Discharge is 6.0 gpm instead of about 4.9, roughly 20% more. That over-waters, lowers pressure down the line and costs pumping energy, so replace the nozzles." },
      { q: "The pressure at the far sprinklers is only 35 psi on 3/16 inch nozzles. What are they putting out?", a: "Enter D = 0.1875 in and P = 35 psi. Discharge is 6.0 gpm, against 7.1 gpm at 50 psi, about 16% less. The coverage diameter also shrinks, so expect dry spots between sprinklers." }
    ],
    figs: ["11.1", "11.2"]
  },
  "eq-11.1-ratio": {
    more: [
      "Start from a known discharge, from Table 11.1, the manufacturer's chart or a catch can and stopwatch test on one sprinkler. Enter the current and new nozzle diameters in the same unit, and the current and new pressures from a gauge or a pitot tube.",
      "The result shows how discharge changes. A 20% larger nozzle gives 44% more water, while 20% more pressure gives about 10% more. This is why worn nozzles and nozzle swaps change water use much more than small pressure changes. If you raise flow on every sprinkler, the lateral and the pump must carry it, so recheck lateral friction and the pump curve.",
      "Use the new discharge in Eq. 11.2 for the application rate and in Eq. 11.16 for the lateral inflow."
    ],
    qa: [
      { q: "If I go to a nozzle 20% bigger, how much more water do I get?", a: "Enter 10 gpm, D1 = 0.25 in, D2 = 0.30 in and 50 psi for both pressures. The new discharge is 14.4 gpm, 44% more, as in Example 11.1." },
      { q: "Would turning the pressure up from 50 to 60 psi do the same thing?", a: "Enter 10 gpm, the same nozzle and pressures of 50 and 60 psi. Discharge rises to 10.95 gpm, only 9.5% more. A bigger nozzle changes flow far more than a pressure increase." },
      { q: "We measured 5 gpm on a new 5/32 inch nozzle. After several seasons it gauges at 0.164 inch. How much has flow increased?", a: "Enter 5 gpm, D1 = 0.15625 in, D2 = 0.1641 in and 50 psi for both. The worn nozzle puts out 5.5 gpm, 10% more. Across a field that is 10% more water than the schedule assumes." }
    ],
    figs: ["11.2", "11.5"]
  },
  "tab-11.1-11.2": {
    more: [
      "Read nozzle size from the nozzle or the parts list. Pressure is at the nozzle, from a pitot gauge or a gauge at the sprinkler. For a sprinkler with a range nozzle and a spreader nozzle, select both. Table 11.2 coverage diameters are for brass impact sprinklers with a 23 degree trajectory, so use the manufacturer's chart for other sprinklers.",
      "Discharge is in gpm and diameter of coverage in feet. Coverage grows with pressure up to a point and then levels off, and very high pressure breaks the stream into fine drops that drift. Low pressure gives large drops and a donut pattern (Figure 11.5). Use the coverage diameter to check spacing in Table 11.3. A spreader nozzle adds flow but does not add to the coverage diameter.",
      "Discharge feeds Eq. 11.2 and Eq. 11.16. Coverage feeds Table 11.3."
    ],
    qa: [
      { q: "What does a 3/16 inch impact sprinkler do at 50 psi?", a: "Pick 3/16 in at 50 psi with no second nozzle. Discharge is 7.2 gpm and coverage 100 ft, as in Example 11.3." },
      { q: "My sprinklers have an 11/64 range nozzle and a 3/32 spreader. How much do they put out at 50 psi?", a: "Pick 11/64 in, 50 psi and a 3/32 in second nozzle. The range nozzle gives 6.0 gpm and the total is 7.8 gpm, with 95 ft coverage, as in Example 11.2." },
      { q: "If my pressure falls to 40 psi on 3/16 inch nozzles, what do I lose?", a: "Pick 3/16 in at 40 psi. Discharge drops to 6.4 gpm and coverage to 96 ft. At a 40 by 60 ft spacing, that is short of the 100 ft needed, so uniformity suffers." }
    ],
    figs: ["11.4", "11.5"]
  },
  "eq-11.2-11.3": {
    more: [
      "Sprinkler discharge comes from Table 11.1, Eq. 11.1 or a catch test. Measure spacing along the lateral (sprinkler to sprinkler) and between laterals (set to set, the move distance). Common hand line and wheel line spacings are 40 by 50 ft or 40 by 60 ft. For an equilateral triangle layout, enter the sprinkler spacing only.",
      "The application rate is the average rate in in/hr over the wetted area. Set move systems usually run 0.15 to 0.40 in/hr. Compare it with the maximum rate for the soil and slope in Table 11.4. A rate above the soil's limit causes ponding and runoff even when the total depth is right. Using 96.3 for a triangular layout or forgetting the spreader nozzle are the usual mistakes.",
      "The rate times operating time gives depth applied (Eq. 11.4)."
    ],
    qa: [
      { q: "My sprinklers put out 7.2 gpm on a 40 by 60 foot spacing. What is the application rate?", a: "Enter 7.2 gpm, rectangular, 40 ft and 60 ft. The rate is 0.29 in/hr, as in Example 11.3. That is within the range for a medium soil on gentle slopes." },
      { q: "On solid set in a triangle pattern, 50 feet apart at 10 gpm, what rate is that?", a: "Enter 10 gpm, equilateral triangle and 50 ft. The rate is 0.44 in/hr. Check it against the soil limit, since bare medium soils top out at 0.50 in/hr on flat ground." },
      { q: "A grower put 16 gpm nozzles on a 40 by 60 foot spacing and now sees runoff. Why?", a: "Enter 16.2 gpm, rectangular, 40 and 60 ft. The rate is 0.65 in/hr, above the 0.50 in/hr maximum for a bare medium soil (Table 11.4). Go back to smaller nozzles and run longer sets." }
    ],
    figs: ["11.3", "11.6"]
  },
  "eq-11.4": {
    more: [
      "Application rate comes from Eq. 11.2. Operating time is the time water is actually on, not the set time. On a hand line with 12 hr sets, the move takes 1 to 2 hr, so the operating time is 10 to 11 hr.",
      "The gross depth is what the sprinklers deliver. Net depth stored in the soil is less, by the application efficiency, often 65 to 80% for moved laterals. Compare the net depth with the soil water deficit. A gross depth well above the deficit wastes water and leaches nitrate, so shorten the operating time or move more often.",
      "Gross depth here is the same quantity used in Chapter 5 scheduling (net depth divided by efficiency)."
    ],
    qa: [
      { q: "At 0.4 inch per hour for 10 hours, how much am I putting on?", a: "Enter 0.4 in/hr and 10 hr. Gross depth is 4.0 in, the book's Section 11.3 value." },
      { q: "My hand line runs 0.29 in/hr and the water is on 11.5 hours a set. What depth is that?", a: "Enter 0.29 and 11.5. Gross depth is 3.3 in. At 75% efficiency, about 2.5 in reaches the root zone." },
      { q: "On wheel lines with 24 hour sets and 30 minute moves, what does 0.23 in/hr put on?", a: "Enter 0.23 in/hr and 23.5 hr. Gross depth is 5.4 in. That is more than most soils hold, so consider 12 hr sets." }
    ],
    figs: ["11.3"]
  },
  "tab-11.3": {
    more: [
      "Choose the pattern (rectangular, square or triangle), the average wind speed during irrigation from a nearby weather station, and the diameter of coverage from Table 11.2 or the manufacturer's chart. Enter the actual spacings measured in the field.",
      "The table gives the maximum spacing as a percent of coverage diameter. Spacing narrows as wind increases because wind distorts the pattern (Figures 11.7 and 11.8). If the actual spacing is too wide, uniformity drops and you see dry strips. The fix is a larger nozzle, a higher pressure or a closer spacing. Above 12 mph the table does not apply, and most growers avoid irrigating in that wind.",
      "This check is part of the nozzle selection procedure."
    ],
    qa: [
      { q: "My sprinklers cover 95 feet and are spaced 40 by 60 in 5 mph wind. Is that OK?", a: "Choose rectangular, 5 mph, 95 ft, 40 and 60 ft. The maximum is 43 by 57 ft, so 60 ft between laterals is too wide, as in Example 11.2. You need 100 ft of coverage." },
      { q: "With 100 foot coverage, can I keep the 40 by 60 spacing in 10 mph wind?", a: "Choose rectangular, 10 mph, 100 ft, 40 and 60 ft. The maximum is 40 by 60 ft, right at the limit. Any more wind or less pressure and uniformity falls off." },
      { q: "For a triangle layout of solid set at 50 feet with 100 foot coverage in 10 mph wind, does it pass?", a: "Choose equilateral triangle, 10 mph, 100 ft, 50 ft along the line and 43.3 ft between lines. The maximum is 50 by 43.3 ft, so it passes." }
    ],
    figs: ["11.6", "11.7", "11.8"]
  },
  "tab-11.4": {
    more: [
      "Get soil texture from the NRCS Web Soil Survey or a hand texture test. Slope comes from a survey or GPS. Cover is bare soil or turfgrass or heavy residue. Your application rate comes from Eq. 11.2.",
      "The table gives a range for the maximum application rate. Coarse soils on flat ground handle 0.50 to 0.75 in/hr bare, while fine soils on 9 to 12% slope handle only 0.06 to 0.15 in/hr. Residue or turf raises the limit by roughly 40 to 100%, depending on texture. If your rate is above the range, expect ponding and runoff. Crusting soils after several irrigations may need the low end of the range.",
      "This check is used in the nozzle selection procedure."
    ],
    qa: [
      { q: "My rate is 0.29 in/hr on bare silt loam with 2% slope. Will it run off?", a: "Choose bare, medium, 2% and 0.29 in/hr. The maximum is 0.25 to 0.50 in/hr, and the rate is within it, as in Example 11.3." },
      { q: "On no-till with heavy residue, can I run 0.65 in/hr on the same soil?", a: "Choose residue cover, medium, 2% and 0.65 in/hr. The maximum is 0.50 to 0.95 in/hr, so it is within range." },
      { q: "A pasture on clay loam with 10% slope gets 0.29 in/hr. Is that a problem?", a: "Choose bare, fine, 10% and 0.29 in/hr. The maximum is only 0.06 to 0.15 in/hr, so expect runoff. Use smaller nozzles or a closer spacing with lower flow, and run longer sets." }
    ],
    figs: []
  },
  "proc-nozzle-select": {
    more: [
      "Enter the spacing along the lateral and between laterals, design pressure at the sprinklers, average wind speed during irrigation, soil cover, texture and slope. The procedure uses Table 11.3 for rectangular spacing, Table 11.2 for coverage, Table 11.1 for discharge and Table 11.4 for the rate check.",
      "The output gives the coverage diameter needed, the smallest nozzle that reaches it at your pressure, its discharge and the application rate. If the rate exceeds the soil's maximum, the layout needs a closer spacing with smaller nozzles or a different system. If no nozzle reaches the coverage, raise the pressure or tighten the spacing. Pick the smallest nozzle that passes to keep flow, pump size and application rate down.",
      "This follows Example 11.3. Carry the discharge into the lateral design (Eqs. 11.10 to 11.16)."
    ],
    qa: [
      { q: "What nozzle do I need for a 40 by 60 foot layout at 50 psi in 5 mph wind on a bare silt loam with 2% slope?", a: "Enter those values. The coverage needed is 100 ft, the nozzle 3/16 in at 7.2 gpm and the rate 0.29 in/hr, which meets the 0.50 in/hr maximum, as in Example 11.3." },
      { q: "What if we move the laterals 50 feet instead of 60?", a: "Enter 40 by 50 ft with the same pressure and wind. The coverage needed drops to 89 ft, so a 5/32 in nozzle at 5.0 gpm works, with a rate of 0.24 in/hr." },
      { q: "Same 40 by 60 layout on a bare clay loam at 3% slope. Does it work?", a: "Enter fine soil and 3% slope. The nozzle is still 3/16 in at 0.29 in/hr, but it exceeds the 0.25 in/hr maximum. Go to 40 by 50 ft with 5/32 in nozzles (0.24 in/hr) or add residue." }
    ],
    figs: ["11.3", "11.4", "11.6"]
  },
  "eq-11.5-11.9": {
    more: [
      "The average pressure is the design pressure for the sprinklers, usually 40 to 60 psi for impact sprinklers. Friction loss along the lateral comes from Eq. 11.11, or from Table 8.2 times the outlet factor. Elevation difference is the inlet elevation minus the end elevation, positive for a downhill lateral, from a survey or GPS.",
      "The results are the pressure needed at the inlet and the pressure at the end. On a level lateral about three quarters of the friction loss occurs before the average pressure point. The book limits the pressure variation along the lateral to 20% of the average pressure, which keeps discharge variation under about 10%. A gentle downhill slope offsets friction and helps. Uphill laterals add elevation loss to friction and often fail.",
      "If the lateral fails, use a bigger pipe, a shorter lateral, pressure regulators or flow control nozzles (Figure 11.10)."
    ],
    qa: [
      { q: "My lateral is level with 8.9 psi of friction and 50 psi design pressure. What inlet pressure do I need?", a: "Enter Pa = 50, Pl = 8.9 and 0 ft. The inlet needs 56.7 psi and the end gets 47.8 psi. The variation is 17.8%, which meets the 20% limit, as in Example 11.4a." },
      { q: "What if the lateral runs down a 2% slope for 1320 feet?", a: "Enter Pa = 50, Pl = 8.9 and +26.4 ft. The inlet needs 51.0 psi and the end gets 53.5 psi (the book prints 53.8), with a variation of 2.5 psi. The slope almost cancels friction." },
      { q: "And uphill on the same slope?", a: "Enter -26.4 ft. The inlet needs 62.4 psi and the end gets 42.1 psi, a 41% variation, as in Example 11.4c. Use a bigger pipe or run the lateral on the contour." }
    ],
    figs: ["11.9", "11.10"]
  },
  "eq-11.11": {
    more: [
      "Lateral inflow comes from Eq. 11.16. Use C = 120 for aluminum with couplers and 150 for PVC. Inside diameter is about 1.9, 2.9, 3.9 or 4.9 in for 2, 3, 4 and 5 in aluminum. Length is from the inlet to the last sprinkler, and F is about 0.36 for 30 or more outlets (Table 8.3).",
      "The result is the friction loss along the whole lateral. Compare it with the 20% limit (Eq. 11.10). Friction rises with the 1.852 power of flow and falls with the 4.866 power of diameter. A 3 in lateral where a 4 in one is needed can lose two to three times the allowed pressure. Watch the units: this equation gives total psi along the lateral, not psi per 100 ft.",
      "Use the result in Eqs. 11.5 to 11.9 to set inlet and end pressure."
    ],
    qa: [
      { q: "My 1320 foot lateral of 4 inch aluminum carries 220 gpm. What is the friction loss?", a: "Enter 220 gpm, C = 120, D = 3.9 in, L = 1320 ft and F = 0.36. The loss is 8.9 psi, as in Example 11.4. At 50 psi average the limit is 10 psi, so it passes." },
      { q: "Can I use 3 inch aluminum on a 1280 foot lateral carrying 165 gpm?", a: "Enter 165 gpm, C = 120, D = 2.9 in, L = 1280 ft and F = 0.36. The loss is 21 psi, twice the 10 psi limit at 50 psi. Use 4 inch." },
      { q: "If the same 220 gpm lateral were 4 inch PVC, how much would I save?", a: "Enter 220 gpm, C = 150, D = 4.15 in, L = 1320 ft and F = 0.36. The loss is 4.3 psi, less than half the aluminum loss, because of both the smoother wall and the larger bore." }
    ],
    figs: ["11.9", "11.11"]
  },
  "eq-11.10-11.13": {
    more: [
      "Enter the design average pressure, inside diameter, C, length, outlet factor and sprinkler spacing for the lateral. The velocity limit is 7 ft/s for normal operation, or 10 ft/s where the line fills slowly and valves close gradually.",
      "The output gives two maximum flows, one from the 20% pressure rule and one from velocity, and the smaller one governs. Short laterals are limited by velocity, and long ones by pressure. Dividing the maximum flow by the number of sprinklers gives the largest average discharge the lateral can carry. If your sprinklers need more, use a bigger pipe or a shorter lateral.",
      "Figure 11.11 gives the same answer graphically for aluminum at 40 ft spacing."
    ],
    qa: [
      { q: "How many gpm can a 1000 foot, 5 inch aluminum lateral carry at 50 psi?", a: "Enter 50 psi, D = 5 in, C = 120, 1000 ft, F = 0.365, 7 ft/s and 40 ft. Velocity limits it to 428 gpm and 17.1 gpm per sprinkler. The book reads about 410 gpm and 16.4 gpm from Figure 11.11 in Example 11.5." },
      { q: "What about a short 400 foot run of 4 inch and 3 inch pipe?", a: "For 3.9 in and 400 ft, velocity limits it to 260 gpm. For 2.9 in, the limit is 144 gpm. These match the book's 260 and 145 gpm." },
      { q: "My quarter mile 4 inch lateral has sprinklers every 40 feet. What is the most each can put out?", a: "Enter 50 psi, D = 3.9 in, 1320 ft, F = 0.36 and 40 ft. Pressure limits it to 235 gpm, 7.1 gpm per sprinkler. A 3/16 in nozzle at 50 psi (7.2 gpm) is right at the limit." }
    ],
    figs: ["11.11"]
  },
  "eq-11.14": {
    more: [
      "Gross system capacity comes from Chapter 5, often 5 to 8 gpm per acre for set move systems in the western U.S. Spacing along the lateral and the move distance come from the layout. Number of sets is from Eq. 11.15. Set time and operating time come from the grower's routine, and downtime is the days per cycle when the system is not running, such as for harvest or weekends.",
      "The result is the smallest sprinkler discharge that keeps up with the capacity. More laterals, longer intervals or less downtime lower it. A single lateral covering many sets needs large nozzles and a high application rate, which can exceed the soil limit. Check the chosen nozzle's rate against Table 11.4.",
      "The book's Example 11.6 uses this equation, and the moved lateral procedure runs the whole design."
    ],
    qa: [
      { q: "What sprinkler discharge do I need for 6 gpm per acre, 40 by 50 spacing, 24 sets, 2 laterals, 12 hour sets with 10 hours on, an 8 day interval and 2 days down?", a: "Enter those values. The minimum discharge is 5.3 gpm, as in Example 11.6. A 11/64 in nozzle at 50 psi (6.0 gpm) covers it." },
      { q: "Could I do it with one wheel line on a 14 day interval?", a: "Enter 1 lateral, 24 sets and a 14 day interval with 2 days down. The discharge goes to 9.3 gpm, needing a 7/32 in nozzle or larger. On a 40 by 50 ft spacing a 7/32 in nozzle (9.8 gpm) applies about 0.47 in/hr, too fast for many soils." },
      { q: "On wheel lines at 40 by 60 with 24 hour sets, 30 minute moves, 22 sets, 2 laterals, a 12 day interval and 1 day down, at 7 gpm per acre?", a: "Enter those values. The minimum discharge is 4.7 gpm. A 5/32 in nozzle at 50 psi (5.0 gpm) works." }
    ],
    figs: ["11.12"]
  },
  "eq-11.15": {
    more: [
      "Measure the field width in the direction the laterals move. Lateral spacing is the move distance, often 50 or 60 ft.",
      "The result is the number of lateral positions. Round up to a whole number, since a partial set still needs a move. The number of sets drives the irrigation interval and the number of laterals needed (Eq. 11.14).",
      "Use the result in Eq. 11.14 and the moved lateral procedure."
    ],
    qa: [
      { q: "My field is 1200 feet wide and I move 50 feet. How many sets?", a: "Enter 1200 and 50 ft. There are 24 sets, as in Example 11.6." },
      { q: "A quarter mile field with 60 foot moves?", a: "Enter 1320 and 60 ft. There are 22 sets." },
      { q: "On a 1250 foot field with 40 foot moves, what number do I use?", a: "Enter 1250 and 40 ft. The answer is 31.25, so plan for 32 sets." }
    ],
    figs: ["11.12"]
  },
  "eq-11.16": {
    more: [
      "Discharge per sprinkler comes from Table 11.1 or Eq. 11.1. Lateral length and sprinkler spacing come from the layout. The result assumes all sprinklers discharge the same amount.",
      "The result is the flow into each lateral. Multiply by the number of laterals running at once for the system flow at the pump. Compare the lateral flow with the maximum inflow from Eqs. 11.10 to 11.13.",
      "Use the inflow in Eq. 11.11 for friction loss."
    ],
    qa: [
      { q: "My lateral has 5 gpm sprinklers every 30 feet over 1320 feet. What is the inflow?", a: "Enter 5 gpm, 1320 ft and 30 ft. Inflow is 220 gpm, as in Example 11.4." },
      { q: "With 7.2 gpm nozzles every 40 feet on 1280 feet, how much flow does the lateral need?", a: "Enter 7.2, 1280 and 40. Inflow is 230 gpm. Two laterals running together need 461 gpm at the pump." },
      { q: "A grower wants 12 gpm nozzles every 40 feet on a quarter mile lateral. Can 4 inch pipe handle it?", a: "Enter 12, 1320 and 40. Inflow is 396 gpm, well above the 235 gpm limit for 4 in pipe at that length. Use 5 inch or split the lateral." }
    ],
    figs: ["11.3", "11.12"]
  },
  "proc-moved-lateral": {
    more: [
      "Collect the field width and lateral length, the sprinkler and lateral spacings, gross system capacity, set time and operating time, the longest interval the crop can tolerate, downtime and design pressure.",
      "The procedure finds the number of sets, the fewest laterals that finish within the interval minus downtime, the interval actually used, the required sprinkler discharge and lateral inflow, the smallest nozzle that meets it and its application rate. Check the rate against Table 11.4 and the lateral inflow against Eqs. 11.10 to 11.13. If either fails, add a lateral or tighten the spacing.",
      "This follows Example 11.6."
    ],
    qa: [
      { q: "Design a hand line for a 1200 foot square field, 40 by 50 spacing, 6 gpm per acre, 12 hour sets with 10 hours on, a 10 day maximum interval and 2 days down.", a: "Enter those values. There are 24 sets and 2 laterals, an 8 day interval, 5.3 gpm per sprinkler and 159 gpm per lateral. The nozzle is 11/64 in at 6.0 gpm and 0.29 in/hr." },
      { q: "A quarter mile wheel line field at 40 by 60 with 24 hour sets, 7 gpm per acre, 12 day maximum and 1 day down?", a: "Enter 1320 ft for both, 40 by 60 ft, 7 gpm/ac, 24 hr sets with 23.5 hr on, 12 days and 1 day. There are 22 sets and 2 laterals, 4.7 gpm per sprinkler and 156 gpm per lateral. A 5/32 in nozzle at 0.20 in/hr works." },
      { q: "A half mile wide field with quarter mile laterals, 40 by 50, 12 hour sets, 6 gpm per acre, 10 day maximum and 1 day down. How many laterals?", a: "Enter 2640 ft wide, 1320 ft long and the rest. There are 53 sets and 3 laterals, 5.9 gpm per sprinkler and 195 gpm per lateral. The nozzle is 11/64 in at 0.29 in/hr." }
    ],
    figs: ["11.3", "11.12"]
  },
  "tab-11.5": {
    more: [
      "Dry leaf temperature is the expected minimum of an unprotected leaf, 1 °F below air temperature on nights with light wind to 3 to 4 °F below on calm, clear nights. Use the forecast low and a local weather station for wind. Choose the wind class.",
      "The rate is the sprinkling rate in in/hr needed to protect the crop through the freeze. Colder leaves and more wind need more water. Blank cells mean sprinkling is not expected to protect at that combination. The book says these are first approximations for design and planning, not for running a system on a given night.",
      "Use the rate to check the system capacity and pump size for a frost protection design."
    ],
    qa: [
      { q: "What sprinkling rate do I need at 24 °F leaf temperature with 5 to 8 mph wind?", a: "Enter 24 °F and the 5 to 8 mph class. The rate is 0.3 in/hr." },
      { q: "For a 21 °F night with 10 to 14 mph wind, what do I design for?", a: "Enter 21 °F and 10 to 14 mph. The calculator uses the 20 °F row and gives 0.8 in/hr." },
      { q: "At 18 °F with 10 to 14 mph wind, will sprinkling protect?", a: "Enter 18 °F and 10 to 14 mph. No rate is given, so sprinkling is not expected to protect at that combination." }
    ],
    figs: []
  },
  "tab-11.6": {
    more: [
      "Critical temperature is the temperature that damages buds at the current growth stage, from extension bud stage charts. Dewpoint comes from a local weather station or a handheld meter. The table is for apple trees in Washington State.",
      "The result is the minimum air temperature to turn the system on or off. Low dewpoints mean more evaporative cooling when sprinkling starts, so the system must start earlier. The book recommends turning the system on and off 2 to 3 °F higher than the table. Leave the system running until the ice is melting and air temperature is above the turn-off value.",
      "Pair this with Table 11.5 for the rate."
    ],
    qa: [
      { q: "My buds are at 28 °F critical temperature and the dewpoint is 20 °F. When do I turn on?", a: "Choose 28 °F and enter 20 °F. The minimum turn-on temperature is 33 °F, and the recommended is 36 °F." },
      { q: "My buds have a 32 °F critical temperature and the dewpoint is 25 °F. When do I turn on?", a: "Choose 32 °F and enter 25 °F. The minimum is 37 °F, and the recommended is 40 °F." },
      { q: "With a 30 °F critical temperature and a dry 12 °F dewpoint, how early must I start?", a: "Choose 30 °F and enter 12 °F. The minimum is 41 °F, and the recommended is 44 °F. Dry air means strong evaporative cooling when water first hits the trees." }
    ],
    figs: []
  }
});
