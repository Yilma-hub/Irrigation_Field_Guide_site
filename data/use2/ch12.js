window.CALC_USE2 = Object.assign(window.CALC_USE2 || {}, {
  "eq-12.1": {
    more: [
      "The three numbers you need are on the system itself. Read the nozzle size stamped on the sprinkler and the pressure at a nozzle with a pitot gauge, then look up the flow in the manufacturer chart or Table 11.1. Common wheel line and hand-move nozzles run 4 to 12 gpm. Pace or tape the sprinkler spacing along the pipe (usually 30 or 40 ft) and the distance between sets along the mainline (usually 40 to 60 ft, marked by the valve or hydrant spacing). Set time is whatever the grower actually runs, usually 11 to 12 hours for two moves a day or 23 to 24 hours for one.",
      "Most moved laterals put on 0.15 to 0.6 in/hr. Compare the rate to the soil intake rate: sands take 0.5 to 1.0 in/hr, silt loams 0.3 to 0.5 in/hr, and clays 0.1 to 0.2 in/hr, so a rate above that range means ponding and runoff on the low spots. The gross depth is what leaves the nozzles, not what the crop gets. Multiply by the application efficiency (Eq. 12.2) before you compare it with the allowable depletion. A common mistake is using the nozzle chart flow at a pressure the system does not reach, which overstates both numbers.",
      "Use Table 12.3 as a quick cross check of the rate, then carry the gross depth to Eq. 12.2 and to the allowable depletion in Eq. 12.4. The moved-lateral spreadsheet ties all of these together."
    ],
    qa: [
      { q: "I run my hand lines 12 hours a set. The nozzles are 7 gpm on 30 by 50. How much am I putting on?", a: "Enter 7 gpm, 30 ft, 50 ft and 12 hr. The rate is 0.45 in/hr and the gross depth is 5.4 in. On a silt loam holding about 3 in of allowable depletion, only about 4 in gross is useful at 75% efficiency, so I would tell him to cut the set to about 9 hours." },
      { q: "We switched the wheel line to small nozzles and run 23-hour sets. Is that too much water?", a: "With 4.5 gpm nozzles on 40 by 60 ft and 23 hr, the rate is 0.18 in/hr and the gross depth is 4.15 in. At 75% that is about 3.1 in net, which fits a 4 ft root zone on a loam. The low rate is a good match for a heavy soil that seals." },
      { q: "A cost-share plan shows 12 gpm sprinklers on a 30 by 40 spacing over silt loam. Does that pass?", a: "Enter 12 gpm, 30 ft and 40 ft. The rate is 0.96 in/hr, about twice what a silt loam will take in. Ask the designer for a wider spacing or a smaller nozzle before approving it." }
    ],
    figs: ["12.1", "12.4"]
  },
  "eq-12.2": {
    more: [
      "The gross depth comes from Eq. 12.1 or a catch can test. The low-quarter efficiency comes from a uniformity test (Chapter 5) or a typical value: 60% to 75% is normal for side rolls and hand moves, lower in steady wind above 10 mph and on worn nozzles. If you have no test data, use 0.65 for a windy site and 0.75 for a well-maintained line in light wind.",
      "The net depth is the water stored in the root zone over the quarter of the field that gets the least. Compare it to the allowable depletion. If the net depth is larger, the extra goes below the roots and the set can be shortened. If it is much smaller than the deficit, the crop will be short even though the meter says plenty was pumped. Do not apply the efficiency twice, once here and again in a scheduling sheet that already uses gross amounts.",
      "Next, compare the net depth with Eq. 12.3 (what the crop needs per interval) and Eq. 12.4 (what the soil can hold)."
    ],
    qa: [
      { q: "The meter says I put on 2 inches. How much of that did the crop actually get?", a: "With an efficiency of 0.70, enter 2.0 in and 0.70. The net depth is 1.4 in. That is the number to subtract from the soil water deficit in the checkbook, not the 2 in." },
      { q: "My side roll puts on 4.5 inches a set. Is that wasting water on a 3.6 inch allowable depletion?", a: "Using the book's 75% low-quarter efficiency, 4.5 in gross gives 3.38 in net. That is just under the 3.6 in allowable depletion, so the set length is about right and deep percolation should be small." },
      { q: "It blows 15 mph most afternoons out here. Does that change anything?", a: "Wind lowers the efficiency. At 0.65, a 3.2 in gross depth only gives 2.08 in net. Tell the grower to move afternoon sets to night where possible, or plan on a longer set to make up the shortfall." }
    ],
    figs: ["12.7", "5.7"]
  },
  "eq-12.3": {
    more: [
      "The irrigation interval is how many days it takes the lateral to get back to the same set. Count sets per lateral and sets per day, then add the time to drag the line back to the start. The net crop water use rate comes from a weather station or ET network (peak 0.25 to 0.35 in/d for corn, alfalfa and sugar beets in the western US), less effective rain.",
      "The required depth is what each irrigation must replace so the crop does not fall behind. If it is larger than the net depth applied, the system cannot keep up at peak and the soil water will run down over the season. If it is larger than the allowable depletion, the interval is too long for the soil even if the depth is applied. Use daily ET at peak, not the seasonal average, or the answer will look fine on paper and fail in July.",
      "Compare the result with Eq. 12.2 (net depth applied) and Eq. 12.4 (allowable depletion). If either is short, look at more laterals with Eq. 12.8 and 12.9."
    ],
    qa: [
      { q: "It takes me 8 days to get around the field and the crop is using about 0.28 a day. How much do I need to put on each time?", a: "Enter 8 days and 0.28 in/d. The required net depth is 2.24 in. At 75% efficiency that means about 3.0 in gross per set." },
      { q: "We take 11 and a half days to cover the field and the station says 0.30 in a day at peak. Will the side roll keep up?", a: "The required net depth is 11.5 x 0.30 = 3.45 in. The book's system nets 3.38 in per set, so it falls about 0.07 in short every interval at peak. It is close, and a hot week will draw the soil down." },
      { q: "Can I stretch the interval to 14 days on alfalfa using 0.25 a day?", a: "The required net depth is 3.5 in. That is only workable if the allowable depletion is at least 3.5 in, which takes a deep loam with a 4 ft or deeper root zone. On a sandy loam it will stress the stand." }
    ],
    figs: ["12.5"]
  },
  "eq-12.4": {
    more: [
      "Get the available water capacity from the NRCS Web Soil Survey for each layer in the root zone, or from texture (sands 0.5 to 1.0 in/ft, sandy loams 1.2 to 1.5, silt loams 2.0 to 2.5, clay loams 1.8 to 2.1). Root depth for scheduling is the managed depth, often 2 ft for potatoes and onions, 3 to 4 ft for corn and beets, and 4 to 5 ft for alfalfa, limited by any hardpan or gravel. The depletion fraction is 0.5 for most field crops and 0.3 to 0.35 for potatoes and vegetables.",
      "The allowable depletion is the most water one irrigation can usefully replace. A net depth larger than this is lost to deep percolation. Most field crop soils come out between 1.5 and 4 in. Use the actual probe or auger depth of roots early in the season, since a 4 ft value in June overstates the soil bank by double or more.",
      "Figure 12.5 shows how the allowable depletion and the net crop water use set the longest interval. Compare the result with the net depth from Eq. 12.2."
    ],
    qa: [
      { q: "How dry can I let this corn get on our silt loam before I need the wheel line back?", a: "With a 3 ft root zone, 2.0 in/ft and 50% depletion, the allowable depletion is 3.0 in. At 0.30 in/d that is about 10 days between irrigations at peak." },
      { q: "We have potatoes on a sandy loam. The side roll puts on 2 inches net. Is that too much?", a: "For a 2 ft root zone, 1.2 in/ft and 35% depletion, the allowable depletion is only 0.84 in. A 2 in net set pushes more than half the water past the roots and carries nitrate with it. The grower needs shorter sets, around 1 in gross." },
      { q: "On a field visit to sugar beets on fine sandy loam, how much room is in the soil?", a: "The book's case is 4 ft, 1.8 in/ft and 0.5, giving 3.6 in. Check it against the 3.38 in net per set, which fits." }
    ],
    figs: ["12.5"]
  },
  "eq-12.5-12.7": {
    more: [
      "Measure the lateral length from the mainline to the last sprinkler, and the field length and width from the farm map or by pacing. The lateral spacing along the mainline is the distance between valve or hydrant outlets, usually 40 to 60 ft. Quarter-mile wheel lines are about 1,280 to 1,320 ft long, and hand-move lines are usually 600 ft or less.",
      "Area per set tells you how many acres each move covers. The number of sets must be rounded up, so a field that needs 52.8 sets really needs 53. More sets mean a longer interval for the same number of laterals. A common error is leaving out the second side of the mainline when the lateral irrigates both sides, which cuts the set count in half.",
      "Carry the number of sets to Eq. 12.8 and 12.9 to find how many laterals are needed. Area per set also feeds the injection rate in Eq. 15.1."
    ],
    qa: [
      { q: "If I go to 50 foot moves instead of 60 on the quarter-mile line, how many more sets is that?", a: "Enter a 1,320 ft lateral, 50 ft spacing and a 1,320 by 2,640 ft field. Area per set drops to 1.52 ac and the field needs 53 sets instead of 44. That is 9 more moves each time around." },
      { q: "I have 40 acres, about 1,280 by 1,320 feet, and a 1,280 foot wheel line on 60 foot moves. How many sets?", a: "Area per set is 1.76 ac. The field is 38.8 ac, so it takes 22 sets." },
      { q: "A small farm wants hand lines 600 feet long on 40 foot moves on a 600 by 1,200 foot field. How many moves is that?", a: "Each set covers 0.55 ac. The 16.5 ac field takes 30 sets, so one lateral at two sets a day needs 15 days, too long at peak use. Plan on two laterals." }
    ],
    figs: ["12.6", "11.12"]
  },
  "eq-12.8-12.9": {
    more: [
      "The interval comes from the allowable depletion divided by peak net use (Eq. 6.8), or from what the grower wants. Set time includes the move, so 12 hr per set means two sets a day. The time to reposition the lateral back to the first set depends on the field, often half a day for a wheel line that has to be walked back across the field.",
      "Sets per lateral are rounded down because a lateral cannot do part of a set within the interval. Laterals are rounded up. When the rounding leaves a lot of slack, you can relax the set time or the interval rather than buying another line. Using the interval in hours with the formula expecting days, or forgetting the repositioning time, are the usual mistakes.",
      "The interval that results then goes back into Eq. 12.3 to check that the system keeps up with the crop."
    ],
    qa: [
      { q: "My agronomist wants a 10-day interval. How many wheel lines do I need for 44 sets?", a: "With 12 hr sets and 12 hr to reposition, each line can do 19 sets in 10 days. 44 sets need 3 lines." },
      { q: "On sandy ground we need a 7-day interval. Same 44 sets. What does that take?", a: "Each lateral now covers only 13 sets, so the field needs 4 laterals. Often the cheaper fix is a pivot or solid set on that ground." },
      { q: "I want one 24-hour move per day so I only go out once. With 22 sets and a 12-day interval, does that work?", a: "Enter 12 days, 12 hr repositioning, 24 hr sets and 22 sets. Each lateral covers 11 sets, so two laterals do it. Check the depth per set, since 23 hr of water at 0.41 in/hr is about 9.5 in gross, far too much for most soils, unless the nozzles are made smaller." }
    ],
    figs: ["12.6", "12.7"]
  },
  "eq-12.10": {
    more: [
      "Read nozzle pressure with a pitot tube pressed into the jet a quarter inch from the nozzle (Figure 12.9). Take readings at the second sprinkler and the next to last sprinkler as shown in Figure 12.8, plus the locations where elevation changes most. Typical side roll pressures are 40 to 60 psi at the inlet. Pitot gauges read high or low if the tube is not centered in the stream, so take two or three readings and use the steady one.",
      "The average lateral pressure sits about a quarter of the way from the minimum to the maximum. The guideline is a spread under 20% of the average, which keeps sprinkler flows within about 10%. If the spread is over the limit, the options are flow control nozzles, pressure regulators (which cost about 5 psi), or a larger pipe for the first part of the lateral. Running laterals uphill makes this worse, and downhill helps.",
      "Use the average pressure in the nozzle chart to get the real discharge, then go to Eq. 12.1. Check flows directly with the average discharge calculator."
    ],
    qa: [
      { q: "I checked the wheel line: 52 psi at the front, 46 at the tail. Is that good enough?", a: "The average is 47.5 psi and the spread is 6 psi. The limit is 9.5 psi (20%), so the line passes at 12.6%." },
      { q: "On the book's lateral I read 45 and 32. What do I tell the grower?", a: "Average 35.25 psi, spread 13 psi, limit 7 psi. The variation is 37%, almost twice the guideline. Pressure regulators on the first sprinklers are the cheapest fix." },
      { q: "The line runs uphill. I get 60 at the inlet and 48 at the end. Do I need regulators?", a: "Average is 51 psi and the spread of 12 psi is 23.5%, just over the 10.2 psi limit. Flow control nozzles on the first third of the line would likely bring it in." }
    ],
    figs: ["12.8", "12.9", "11.9", "11.10"]
  },
  "avg-discharge-12": {
    more: [
      "Measure sprinkler flow by slipping a hose over the nozzle and timing how long it takes to fill a bucket of known volume. A 5 gallon bucket filled in 30 seconds is 10 gpm. Do it at the same sprinklers used for the pressure test. Typical moved-lateral sprinklers deliver 4 to 12 gpm.",
      "The average discharge is the minimum plus about 40% of the spread. Flows should vary less than 10% of the average. A variation over 10% usually means pressure variation over 20% or worn nozzles. Compare the average with the chart flow at design pressure. If it is 5% or more above chart, nozzles are worn and should be replaced.",
      "The average flow goes into Eq. 12.1 for application rate and depth."
    ],
    qa: [
      { q: "My catch at the first sprinkler was 10.96 gpm and 9.11 at the end. OK?", a: "These are the book's Table 12.4 numbers. The average is 9.85 gpm and the variation is 18.8%, almost double the 10% limit. Regulators on the first ten sprinklers cut it to 7% in the book's test." },
      { q: "I timed buckets at 8.6 and 8.0 gpm on the new side roll. Is that fine?", a: "The average is 8.24 gpm and the variation 7.3%. That passes. Use 8.24 gpm in the application rate." },
      { q: "An old hand line gives 6.2 gpm at the front and 5.0 at the end. What is wrong?", a: "The average is 5.48 gpm with a 21.9% variation. That points to bad pressure distribution, worn or mixed nozzles, or both. Check pressures and nozzle sizes before anything else." }
    ],
    figs: ["12.8", "12.9"]
  },
  "can-depth-12": {
    more: [
      "Measure the volume in each can with a graduated cylinder in mL (1 mL = 1 cm³). Measure the inside diameter of the can top with a ruler. Coffee cans or 4 in rain gauges are common. Read the can soon after the test, since evaporation in hot wind can take off 5% or more in an hour.",
      "The depth is the volume divided by the opening area. For a 4 in can, 81 cm³ is 1 cm and about 206 cm³ is 1 in. Use the top diameter, not the base, for tapered cups. Mixing inches for the diameter with cm³ for the volume is where most people go wrong, and this calculator does that conversion for you.",
      "Depths from each can go into the catch can or CU calculators."
    ],
    qa: [
      { q: "The can by the central sprinkler caught 235 mL. It is a 4 inch can. How many inches is that?", a: "The opening is 81.1 cm², so the depth is 2.90 cm, or 1.14 in, which matches Example 12.5." },
      { q: "I used 3.5 inch plastic cups and got 120 mL. What is that in depth?", a: "Area is 62.1 cm² and the depth is 0.76 in." },
      { q: "One of my 6 inch cans got 500 mL. Is that a high one?", a: "That is 1.08 in. Compare it with the average of the overlapped depths before calling it high." }
    ],
    figs: ["12.11"]
  },
  "catch-can-12": {
    more: [
      "Lay cans in a grid around one lateral as in Figure 12.11, usually 10 ft apart and 5 ft offset from the sprinklers, in rows out to the next set on each side. Run the lateral for an hour or two at normal pressure in light wind and note wind speed and direction. Enter the volumes row by row in the same order as the row distances.",
      "The calculator adds what each can would get from the neighboring sets (y + S<sub>m</sub> and y - S<sub>m</sub>) to the central reading to give overlapped depth. The CU is 100 times one minus the mean deviation over the mean. Moved laterals usually run 75% to 90%. Below 75%, check spacing for the wind, pressure and nozzles. Dividing the mean overlapped depth by test time gives the real application rate.",
      "The CU and low-quarter depth also give the application efficiency for Eq. 12.2."
    ],
    qa: [
      { q: "We ran the Table 12.5 cans for 2 hours. What is the CU?", a: "The overlapped mean is 1.26 in and the mean deviation 0.13 in, so CU is about 90%. That is good for a moved lateral." },
      { q: "What would the same test show if the grower moved the line 50 feet instead of 60?", a: "With S<sub>m</sub> = 50 ft, the mean depth is 1.51 in for the 2 hr and the CU is 90.5%. Uniformity barely changes, but he would need about 20% more sets." },
      { q: "How do I get the real application rate from the test?", a: "Divide the overlapped mean by the run time. 1.26 in over 2 hr is 0.63 in/hr. Compare that with Eq. 12.1 using the measured flow and the soil intake rate." }
    ],
    figs: ["12.11", "11.6"]
  },
  "cu-list-12": {
    more: [
      "Use this when you already have depths, from a catch can test, soil probe readings after irrigation, or a spreadsheet. Any one unit works. Enter at least 16 to 24 values from across the area that represents normal overlap.",
      "Christiansen's CU of 85% or more is good for sprinklers, 75% to 85% is fair, and below 75% calls for fixes. Including cans at field edges with no overlap drags the number down unfairly. A single odd can, from a dripping riser or a bird, can move CU by several points, so check outliers.",
      "Higher CU means higher application efficiency in Eq. 12.2."
    ],
    qa: [
      { q: "My row of eight cans read 1.39, 1.16, 1.10, 1.34, 1.40, 1.11, 1.06, 1.28 inches. CU?", a: "Mean 1.23 in, mean deviation 0.12 in, CU 90%. Good." },
      { q: "A windy afternoon test gave 0.9, 1.4, 1.1, 0.7, 1.3, 1.2, 0.8, 1.0. What does that tell me?", a: "Mean 1.05 in, deviation 0.20 in, CU 81%. Fair. Shift sets to calm hours or narrow the spacing." },
      { q: "A solid set orchard test came back 0.52, 0.48, 0.55, 0.50, 0.47, 0.53, 0.51, 0.49. Any concern?", a: "Mean 0.51 in and CU 95.8%. Excellent. No changes needed." }
    ],
    figs: ["12.11", "11.6"]
  },
  "eq-12.11": {
    more: [
      "Gun flow comes from the gun chart (Table 12.6) at the measured nozzle pressure, or from Eq. 12.14. Lane spacing is the distance between tow paths, usually 200 to 330 ft. Travel distance is lane length less the starting setback. Time for the pass is set on the reel speed control, or measure speed by timing the cart over 100 ft.",
      "Traveler depths are usually 1 to 3 in per pass. If the depth is more than the allowable depletion or the soil cannot take it, speed up the cart. A slower cart in the first few feet or at the end (dwell) puts on much more water, so the setback matters. Using the full lane length instead of the travel distance understates speed.",
      "Compare the gross depth with the allowable depletion after efficiency (Eq. 12.2 and 12.4)."
    ],
    qa: [
      { q: "My gun puts out 585 gpm, lanes 264 ft apart, 1,300 ft long with an 88 ft setback, 11 hours a pull. How much water?", a: "Travel distance 1,212 ft, speed 110 ft/hr, gross depth 1.94 in. That is the book's Example 12.6." },
      { q: "A small 300 gpm traveler on 200 ft lanes pulls 1,100 ft in 20 hours. Is that a lot?", a: "Speed 55 ft/hr and depth 2.63 in. On sandy soil with 1.5 in allowable depletion, that is too much. Speed the cart up to about 75 ft/hr for 1.9 in gross, about 1.45 in net at 75% efficiency." },
      { q: "We run 450 gpm on 240 ft lanes, 1,250 ft pull in 10 hours. Depth?", a: "Speed 125 ft/hr, depth 1.44 in. Reasonable for a pasture or a sandy loam." }
    ],
    figs: ["12.18", "12.20", "12.17"]
  },
  "eq-12.12": {
    more: [
      "Gun flow is from the chart or a meter. The wetted radius is half the wetted diameter in Table 12.6, or pace it from the gun to the edge of the wet pattern on a calm day. The central angle is the part-circle setting, usually 210° to 330°, with 270° typical so the dry wedge is in front of the cart.",
      "Traveler rates are high, usually 0.3 to 0.6 in/hr average, with peaks much higher. Big droplets at high rate seal bare soil. A wider angle spreads the same flow over more area and lowers the rate. Keep the rate under the soil intake rate, and use smaller nozzles or ring nozzles on fine soils.",
      "Combine this rate with the depth from Eq. 12.11 to judge runoff risk."
    ],
    qa: [
      { q: "My gun is 585 gpm with a 220 ft wetted radius at 270°. What's the application rate?", a: "0.49 in/hr, as in Example 12.6. Fine for a sandy loam but marginal on a silt loam." },
      { q: "If I open the angle to 330°, does that help?", a: "Yes. The rate drops to 0.40 in/hr. Full circle (360°) would be 0.37 in/hr but soaks the cart path." },
      { q: "A smaller 300 gpm gun with a 160 ft radius at 270°, what rate?", a: "0.48 in/hr. Smaller guns are not gentler unless the radius is large for the flow." }
    ],
    figs: ["12.18", "12.19"]
  },
  "eq-12.13": {
    more: [
      "Net capacity needed is from local design guides, often 4 to 6 gpm/ac for humid areas and more in arid areas. Efficiency for travelers is about 0.65 to 0.75. Get lane width and length from the field layout, the number of lanes from the field width, and times from the grower's routine.",
      "The result is the gun flow needed to meet capacity within the interval. If it is more than the gun or the hose can handle, add a traveler or lengthen the hours. Double check that the set time and operating hours are realistic for how the grower works.",
      "Pick a gun and nozzle that give this flow with Table 12.6 or Eq. 12.14."
    ],
    qa: [
      { q: "For the book's field (4.5 gpm/ac, 10 lanes, 12 hr sets, 11 hr pulls, 5.5 day interval) how big a gun do I need?", a: "Area per set 7.88 ac and the flow needed is 567 gpm, as in Example 12.7." },
      { q: "A grower wants one pull per day, 23 hr pulls, 8 lanes of 240 by 1,250 ft, 5 gpm/ac, 70% efficiency, 8 day interval. What flow?", a: "Area per set 6.89 ac and the gun needs 411 gpm. A 4 in hose traveler can do it." },
      { q: "If I use two travelers in the book's field, what size guns?", a: "Each needs about 284 gpm. Smaller guns may fit a lower pressure and smaller hose." }
    ],
    figs: ["12.20"]
  },
  "eq-12.14": {
    more: [
      "The coefficient and exponents come from the gun maker or from fitting a line to the flow table (Figure 12.21). Read pressure at the gun base, not at the reel inlet. Nozzle size is stamped on the nozzle.",
      "Flow rises with the square root of pressure for most guns. A drop from 60 to 50 psi cuts flow by about 9%. Using the inlet pressure without subtracting hose and reel loss overstates flow. Check the result against a meter if the farm has one.",
      "Use the flow in Eq. 12.11 and 12.12."
    ],
    qa: [
      { q: "I have a 1.83 inch nozzle reading 60 psi at the gun. What am I pumping?", a: "Using C<sub>d</sub> 16, a 0.50 and b 2.566 from Figure 12.22, the flow is 584 gpm. That matches the book's 585 gpm and is the number to use in the depth and rate calculations." },
      { q: "If I turn the booster up to 80 psi at the gun, how much more water do I get?", a: "Keep the same coefficients and enter 80 psi. The flow rises to 675 gpm, about 15% more. At 50 psi it would drop to 533 gpm, so check that the hose and pump can carry the extra flow before turning it up." },
      { q: "The grower wants to drop to a 1.5 inch nozzle at 70 psi to save pumping. What flow is that?", a: "With the same C<sub>d</sub> and exponents, the flow is about 379 gpm. Coefficients differ by gun and nozzle type, so confirm against the maker's chart, then recheck depth and lane spacing for the shorter throw." }
    ],
    figs: ["12.21", "12.15", "12.14"]
  },
  "tab-12.3": {
    more: [
      "Pick the row for the sprinkler spacing along the lateral and the set spacing along the mainline, then enter the sprinkler flow. The table interpolates between the printed flow columns of 4 to 25 gpm and covers spacings from 20 by 40 ft to 80 by 80 ft. Get the flow from the nozzle chart at measured pressure or from a bucket test. This is the fastest way to answer a phone call when the grower knows his spacing and nozzle.",
      "The table is the same formula as Eq. 12.1 (96.3 q<sub>s</sub> divided by the spacing area), so the two values should agree within rounding. Rates of 0.2 to 0.5 in/hr suit most medium soils. Blank cells in the printed table are combinations the book considered impractical, usually too high a rate or too little overlap. A rate above the soil intake rate means runoff on slopes and ponding in low spots.",
      "Use the rate with set time in Eq. 12.1 for depth, and compare it with the intake rate of the soil."
    ],
    qa: [
      { q: "Wheel line is on 40 by 60 with 10 gpm nozzles. What rate am I putting on?", a: "Pick the 40 x 60 row and 10 gpm. The table gives 0.40 in/hr and the formula 0.401 in/hr. An 11 hr set puts on about 4.4 in gross." },
      { q: "I have 30 by 50 spacing and 7 gpm nozzles on a silt loam. Quick number?", a: "Interpolating between the 6 and 8 gpm columns gives 0.45 in/hr. That is at the top end for a silt loam, so watch for ponding in the wheel tracks." },
      { q: "A plan shows 40 by 40 spacing with 12 gpm sprinklers. Should I flag it?", a: "The table gives 0.72 in/hr. Only sands and loamy sands take that without runoff. On finer soil ask for a 40 by 60 spacing, which drops the rate to 0.48 in/hr with the same nozzles." }
    ],
    figs: ["12.1"]
  },
  "tab-12.6": {
    more: [
      "Read the gun series and nozzle size off the gun, and the pressure from a gauge at the gun base, not at the pump or reel inlet. Taper bore nozzles throw farther for the same flow. Ring nozzles break the stream into smaller drops and suit finer soils and young crops. The table covers 50 to 120 psi for the Nelson 150 and 200 series.",
      "The flow goes into the depth and rate equations, and the wetted diameter sets the lane spacing in Table 12.7. Running a gun below about 60 psi shortens the throw and leaves a ring of heavy water near the gun and a dry band at the edge (Figure 12.15). If the measured wetted diameter is much shorter than the chart value, suspect low pressure or a worn nozzle. Doubling the nozzle area roughly doubles the flow but adds much less throw.",
      "Carry the flow to Eq. 12.11 and 12.12 and the wetted diameter to Table 12.7."
    ],
    qa: [
      { q: "My 150 series gun has a 0.9 inch taper nozzle running at 80 psi. What's it doing?", a: "The table gives 210 gpm and a 335 ft wetted diameter, so a 167.5 ft radius. Use 210 gpm for the depth and 335 ft for the lane spacing check." },
      { q: "We have a 200 series with a 1.56 ring nozzle at 80 psi. Flow and throw?", a: "445 gpm and a 420 ft wetted diameter. With a ring nozzle in wind up to 10 mph, lanes can be 60% of that, or 252 ft." },
      { q: "If the pump only gives 60 psi at the 0.9 inch taper, what changes?", a: "Flow drops to 182 gpm and the wetted diameter to 305 ft. That is 30 ft less throw, so lanes laid out for 335 ft will show dry strips and need to come in." }
    ],
    figs: ["12.14", "12.15"]
  },
  "tab-12.7": {
    more: [
      "Take the gun wetted diameter from Table 12.6 at the actual pressure, or measure it on a calm day. Choose the wind class from average wind speed during irrigation hours at the nearest weather station. Ring nozzles use the smaller percentage in each wind class and taper nozzles the larger. Measure the actual lane spacing between tow paths with a wheel or GPS.",
      "The result is the widest lane spacing that still overlaps well. Lanes wider than the maximum leave a dry strip midway between passes that shows up as yellow streaks in the crop. Lanes much narrower than needed waste time and hose wear. Using the chart diameter at 100 psi when the gun really runs at 70 psi is a common mistake that overstates the allowable spacing.",
      "The lane spacing becomes W<sub>p</sub> in Eq. 12.11 and 12.13."
    ],
    qa: [
      { q: "My gun throws 440 feet with a taper nozzle, wind usually under 10 mph. Are 264 foot lanes OK?", a: "Pick 65% for a taper nozzle in wind up to 10 mph. The maximum lane is 286 ft and 264 ft is 60% of the diameter, so it passes." },
      { q: "The 150 taper at 80 psi throws 335 ft and it blows over 10 mph most days. Will 200 foot lanes work?", a: "At 55% the maximum is 184 ft. 200 ft is 59.7% of the diameter, too wide for that wind. Move lanes in to 180 ft or go to a bigger gun." },
      { q: "A ring nozzle with a 400 ft throw in a calm valley, under 5 mph. Can we stretch to 300 ft lanes?", a: "At 70% the maximum is 280 ft and 300 ft is 75%. Keep lanes at 280 ft or less." }
    ],
    figs: ["12.19", "12.20"]
  },
  "tab-12.8": {
    more: [
      "Pick the hose diameter and length off the traveler nameplate or measure the hose. Travel distance is twice the hose length because the reel sits midway in the lane. These are typical values for cable-tow travelers from Harrison et al. (2015), useful for sizing and for checking a dealer quote.",
      "The maximum capacity is the flow the hose can carry without excessive friction loss. Area covered per pass is lane spacing times travel distance. Larger hoses carry more flow and more acres but need a bigger tractor to pull them out. If the field needs more flow than the hose can carry, use a bigger hose, two travelers or a longer season of operation.",
      "Compare capacity with the flow needed from Eq. 12.13, and check hose loss with Tables 12.9 and 12.10."
    ],
    qa: [
      { q: "What can a 4.5 inch by 660 foot traveler handle?", a: "Up to 1,320 ft of travel, 730 gpm and about 145 ac. It covers about 9.1 ac per pass at 90 to 100 psi and takes a 4,000 to 6,000 lb pull." },
      { q: "A neighbor has a 3 inch by 660 foot reel for sale. Is it enough for my 40 acre hay field?", a: "It is rated for 250 gpm and 50 ac, with 6.4 ac per pass on 210 ft lanes. It will cover 40 ac if the field layout fits 1,320 ft runs." },
      { q: "The dealer quotes a 4 inch by 1,320 foot reel. What do I need to pull it?", a: "Travel is 2,640 ft and capacity 535 gpm for about 107 ac, 18.2 ac per pass. The hose pull is 7,000 to 10,000 lb, so a larger tractor is needed." }
    ],
    figs: ["12.16", "12.17"]
  },
  "tab-12.9-12.10": {
    more: [
      "Choose lay-flat (Table 12.9, read at 100 psi) or hard hose (Table 12.10, Hazen-Williams C = 150) and the inside diameter. Enter the gun flow and the full hose length. Use the full length even when part of the hose is on the reel, since water still flows through it.",
      "Hard hose losses of 20 to 50 psi are common, and this is often the largest pressure loss in a traveler. Every psi lost in the hose needs to be made up at the pump or is lost from gun pressure and throw. If the loss is above about 40 psi, look at the next larger hose. Flows off the end of the table are outside the range where that hose should be used.",
      "Add the hose loss to cart and reel loss and elevation in the traveler spreadsheet."
    ],
    qa: [
      { q: "My 4.5 inch hard hose is 1,250 ft long and carries 585 gpm. What do I lose in it?", a: "The table gives 3.74 psi per 100 ft, so 46.7 psi for the full hose. That is most of the pressure loss in the traveler." },
      { q: "We have a 4 inch lay-flat supply line, 660 feet, at 400 gpm. Loss?", a: "2.3 psi per 100 ft, about 15.2 psi total. For comparison, a 4.0 in hard hose at the same flow loses 3.28 psi per 100 ft." },
      { q: "Is a 3.7 inch hard hose 1,000 ft long OK for 400 gpm?", a: "It loses 4.79 psi per 100 ft, or 47.9 psi. A 4.0 inch hose drops that to 32.8 psi, saving about 15 psi of pumping." }
    ],
    figs: ["12.21", "12.16", "12.17"]
  },
  "moved-lateral-sheet": {
    more: [
      "This follows the book's management spreadsheet (Figure 12.7). Field size, mainline and lateral sizes, and elevations come from the farm map and a walk of the line. Nozzle flow and wetted diameter come from Tables 11.1 and 11.2, spacing limits from Table 11.3 for the wind, and soil and crop numbers from the Web Soil Survey and Chapter 6. The set, move and reposition times are what the operator actually does.",
      "Read the checks line first. Pressure variation should be under 20% of design pressure, mainline velocity under 5 ft/s, lateral inflow under 7 ft/s, sprinkler and lateral spacing within the wind limits, net depth no more than the allowable depletion, and total flow within the supply. The net crop use the system can meet (C<sub>n</sub>) should be at or above local peak ET. When one check fails, change one input at a time and watch which outputs move.",
      "It ties together Eqs. 12.1 to 12.9, so use the single equation calculators when you want to explain one step to the grower."
    ],
    qa: [
      { q: "Does the book's side roll system in Figure 12.7 meet the guidelines?", a: "Yes. Lateral pressure loss is 10.3 psi, 18.7% of 55 psi, the rate is 0.41 in/hr, and the 11.5 day interval gives 3.41 in net against a 3.6 in allowable depletion. It meets 0.30 in/d of crop use." },
      { q: "Same system, but the soil only holds 1.2 inches per foot. What breaks?", a: "Allowable depletion falls to 2.4 in, and the 3.41 in net per set now exceeds it by about 1 in. Shorten sets to about 8 hr, which needs more moves per day or a second lateral to hold the interval." },
      { q: "The grower wants to go to one 24 hour set a day to save labor. What happens?", a: "The interval doubles to 22.5 days and each set puts on 9.5 in gross, 7.1 in net. Most of that goes below the roots. He would need nozzles with about half the flow to make 24 hr sets work." }
    ],
    figs: ["12.6", "12.7"]
  },
  "traveler-sheet": {
    more: [
      "This follows the book's traveler spreadsheet (Figure 12.22). Gun coefficients come from the maker or from fitting the flow table, cart and reel loss from the maker's curve (Figure 12.21), and hose data from the nameplate. Measure the setback, lane length and lane spacing in the field. The inlet pressure available is a gauge reading at the hydrant with the traveler running.",
      "Read the checks line first. The required inlet pressure is the nozzle pressure plus mainline, hose, cart and reel losses, nozzle height and elevation. If the available pressure is short, the gun runs low and throws less. Lane width should be inside the Table 12.7 limit, flow inside the supply, and net depth inside the allowable depletion. The net crop use met (C<sub>n</sub>) should match local peak ET.",
      "It combines Eqs. 12.11, 12.12 and 12.14 with Tables 12.7 and 12.10, so use those calculators to explain individual steps."
    ],
    qa: [
      { q: "Does the book's traveler in Figure 12.22 have enough pressure?", a: "No. The losses add up to 73.7 psi, so the hydrant needs 133.6 psi and only 126 psi is available, 7.6 psi short. The gun will run at about 52 psi and throw less than the 440 ft assumed." },
      { q: "If we put a booster on and get 140 psi at the hydrant, does it pass?", a: "Yes, all checks pass. The traveler delivers 1.93 in gross per pass, 1.45 in net, and covers the field every 5.5 days, meeting 0.26 in/d." },
      { q: "The dealer offered a cheaper 4.0 inch hose instead of 4.5. Does that work?", a: "Hose loss goes from 46.9 to 83.2 psi, and the required inlet pressure jumps to 169.9 psi, 43.9 psi more than available. The savings on hose would go to fuel every season." }
    ],
    figs: ["12.20", "12.21", "12.22"]
  }
});
