window.CALC_USE2 = Object.assign(window.CALC_USE2 || {}, {
  "eq-14.1": {
    more: [
      "The outlet factor F comes from Table 8.3 for the number of outlets on the lateral, about 0.35 for 100 or more outlets. Lateral length is the run from the manifold to the end plug, plus an allowance for the barbs of inserted emitters (about 20 to 30 ft per 200 ft in the book's examples). The friction loss without outlets comes from Table 14.1 at the lateral inlet flow, which is the number of emitters times their flow.",
      "The result is the pressure lost from the inlet to the end of a level lateral. The book's design check is that this stays under 20% of the lateral design pressure, so 3 psi on a 15 psi lateral. Laterals running downhill gain pressure and can be longer. Uphill runs lose more and need to be shorter. Forgetting to convert emitter flow from gph to gpm before reading Table 14.1 is the most common mistake.",
      "The lateral-design calculator does all of these steps at once."
    ],
    qa: [
      { q: "My half inch drip line runs 200 feet with 100 emitters at 2 gph. How much pressure do I lose?", a: "With F 0.35, 230 ft including barbs, and 4.7 psi/100 ft from Table 14.1, the loss is 3.78 psi. That is over the 3 psi limit for a 15 psi lateral, so go to 0.75 in tubing as in Example 14.3." },
      { q: "If I switch that line to 3/4 inch, what's the loss?", a: "Use 220 ft and 1.2 psi/100 ft. The loss is 0.92 psi, well under 3 psi." },
      { q: "We want microsprayers at 0.5 gpm on 8 foot spacing on a 1 inch line, 200 feet. Will it work?", a: "With F 0.365, 205 ft and 4.0 psi/100 ft, the loss is 2.99 psi. That passes the 3 psi limit, but just barely, as the book notes." }
    ],
    figs: ["14.5", "14.8"]
  },
  "lateral-design": {
    more: [
      "Measure the lateral length from manifold to end. Emitter spacing and flow are on the tubing label or spec sheet: drip tape usually has 8 to 18 in spacing at 0.13 to 0.5 gph, and inline drip tubing 12 to 24 in at 0.4 to 1 gph. Add extra length for inserted barbs (book: about 30 ft for 0.5 in tube and 20 ft for 0.75 in per 200 ft). Design pressure is the regulator setting, typically 8 to 15 psi for tape and 15 to 25 psi for drip tubing.",
      "The output is the lateral flow and friction loss, and a check against 20% of the design pressure. A lateral that fails will have weaker emitters at the end, which shows up as a yield or size gradient down the row. The fixes are a larger tube, a shorter run, or feeding the lateral from the middle. On sloping ground add the elevation change to the check.",
      "Use the lateral flow to size manifolds and to set zone flow for filters and flushing times (Chapter 15)."
    ],
    qa: [
      { q: "200 ft lateral, emitters 2 ft apart at 2 gph, 15 psi design. Is 3/4 inch enough?", a: "With 20 ft extra for barbs, the flow is 3.3 gpm and the loss is 0.93 psi. That is well under the 3 psi limit." },
      { q: "Could I save money with 1/2 inch tube on that same lateral?", a: "With 30 ft of barb allowance the loss is 3.76 psi, over the 3 psi limit. The far emitters would deliver noticeably less, so stay with 3/4 inch." },
      { q: "A grower wants to run 600 foot laterals with emitters 1 foot apart at 0.5 gph and 12 psi. What size?", a: "Flow is 5 gpm. In 1 inch tube the loss is 1.6 psi, under the 2.4 psi limit. In 3/4 inch it would be 5.2 psi, too much." }
    ],
    figs: ["14.5", "14.8"]
  },
  "tab-14.1": {
    more: [
      "Enter the flow in gpm and the nominal PE size. For a lateral the flow is the inlet flow, the sum of all the emitters on it. Convert gph to gpm by dividing by 60. The table covers 0.5 to 1.5 in PE and is based on Darcy-Weisbach with smooth PE pipe.",
      "The result is psi per 100 ft for a pipe with no outlets. For a lateral with emitters, multiply by length and by the outlet factor (Eq. 14.1). If the flow is off the table, the size is not suited to that flow.",
      "Use the value in Eq. 14.1."
    ],
    qa: [
      { q: "What's the loss in 1/2 inch PE at 3.3 gpm?", a: "4.58 psi per 100 ft interpolated. The book rounds to 4.7 in Example 14.3. Either way it is high, so look at the 3/4 inch size." },
      { q: "We need to carry 12.5 gpm in a 1 inch line. Loss?", a: "4.05 psi per 100 ft. That matches the 4.0 the book uses in Example 14.4." },
      { q: "Is 3/4 inch OK for 7 gpm?", a: "It loses 4.45 psi per 100 ft. On a 200 ft run with F 0.35 that is about 3.1 psi, so it is borderline for a 15 psi lateral." }
    ],
    figs: ["14.5"]
  },
  "eq-14.2": {
    more: [
      "The flow is the peak zone or system flow through the filter, from the design or a meter. The maximum flow per unit open area is 200 gpm/ft² in the book's example. The fraction of open area depends on the screen mesh and wire and is on the maker's spec sheet. The book gives 58% for a stainless screen with 0.003 in openings.",
      "The result is the total screen area needed. If the installed filter has less area, it will plug quickly and the pressure drop will climb. Size for the highest flow the system will see, including flushing. A screen filter alone is fine on clean municipal or well water but not on surface water with algae or sand.",
      "Check water quality with Table 14.2 before choosing a screen."
    ],
    qa: [
      { q: "A golf course needs to filter 300 gpm with a 0.003 inch stainless screen. How big?", a: "With 200 gpm/ft² and 58% open area, the screen needs 2.6 ft², as in Example 14.5." },
      { q: "Our small vegetable farm runs 150 gpm through the same screen. How much area?", a: "1.29 ft². A filter of that size or larger will hold up between cleanings." },
      { q: "We want to expand to 500 gpm. Is our 3 ft² filter enough?", a: "The need is 4.31 ft². The current filter is too small, so add a second unit in parallel." }
    ],
    figs: ["14.6", "14.10"]
  },
  "eq-14.3": {
    more: [
      "K and x come from the emitter maker's catalog, from Table 14.4 for x, or from your own two-pressure test with Eq. 14.4. The exponent is about 0.5 for orifice emitters with turbulent flow, 0.7 to 1.0 for long path and porous designs, and 0 to 0.4 for pressure compensating emitters. Read pressure with a gauge on a Schrader valve or a pitot adapter at the lateral and convert psi to feet of head by multiplying by 2.31.",
      "The result is emitter flow in gph at that head. Use it to see how much flow drops where the pressure is lowest, at the uphill end or the far end of a long lateral. With x = 0.5, a 20% pressure drop cuts flow about 10%. With x near 1.0, flow drops almost as much as the pressure. Mixing psi with K values fitted to feet of head is the most common error, and it gives flows that are far off.",
      "Use emitter-dq to compare the two ends of a field, and design-du to turn the low flow into a design uniformity."
    ],
    qa: [
      { q: "The vortex emitters in my orchard have K 0.24 and x 0.42. The header runs 15 psi. What do they put out?", a: "15 psi is 34.5 ft of head. The calculator gives 1.06 gph, as in Example 14.7." },
      { q: "At the far end of the block I only read 10 psi. How much less water are those trees getting?", a: "10 psi is 23.1 ft, and the flow drops to 0.90 gph. That is about 15% less than at the header, which shows up in a long set." },
      { q: "We're designing with spiral long path emitters, K 0.0564 and x 0.75, at 20 psi. What flow, and what if the low spot is 10 ft of head lower?", a: "At 46.2 ft the flow is 1.0 gph. At 36.2 ft it drops to 0.83 gph, a 17% drop. That low flow is the q<sub>m</sub> used in Example 14.9." }
    ],
    figs: ["14.11"]
  },
  "emitter-dq": {
    more: [
      "Enter K and x for the emitter, the pressure head at the header end (psi times 2.31), the elevation change to the far end, and friction loss to the far end. Elevation change is the slope in percent times the length, negative going uphill. Friction comes from Eq. 14.1 converted to feet of head.",
      "The output is the flow at each end and the difference as a percent of the header flow. A common design target in micro irrigation practice is to keep emitter flow variation under about 10%. Running laterals downhill gains pressure that can offset friction. If the far end gets more flow than the header, the laterals are too short for the slope or the header pressure is set too high.",
      "Use design-du to get the design uniformity from these flows."
    ],
    qa: [
      { q: "My 1,000 foot field slopes 1% uphill from the header and I run 15 psi. How different are the emitters at each end?", a: "With K 0.24, x 0.42, 34.5 ft at the header and minus 10 ft of elevation, the header gets 1.06 gph and the far end 0.92 gph. That is a 0.14 gph or 13% difference, as in Example 14.7." },
      { q: "If I put the header at the top so the laterals run downhill, what happens?", a: "With plus 10 ft, the far end gets 44.5 ft and 1.18 gph, 11% more than the header. Downhill laterals work best when friction loss roughly matches the elevation gain." },
      { q: "Would a compensating emitter with x 0.2 fix the uphill problem?", a: "With K 0.493 so it gives 1.0 gph at the header, the far end gets 0.93 gph, a 6.6% difference. The book treats a fully compensating emitter as 0 difference (Example 14.8), but real ones with x of 0.2 still change a little." }
    ],
    figs: ["14.11"]
  },
  "eq-14.4": {
    more: [
      "Test several new emitters on a short lateral at two pressures, such as 10 and 20 psi, with a gauge at the emitters. Catch each emitter for a fixed time (3 to 5 minutes) in a graduated cylinder and convert to gph. Average the catches at each pressure. Convert psi to feet with 2.31.",
      "The exponent x tells you how sensitive the emitter is to pressure. Below about 0.2 the emitter is pressure compensating, 0.5 is a typical orifice, and 0.7 to 1.0 is long path or porous tubing. K is the flow at 1 ft of head and is used with Eq. 14.3. Pressures closer than about 5 psi apart give an unreliable exponent.",
      "Use x and K in eq-14.3, emitter-dq and design-du."
    ],
    qa: [
      { q: "My emitter gave 0.75 gph at 15 ft of head and 1.0 at 30 ft. What kind is it?", a: "The exponent is 0.415 and K is 0.244. That behaves like a vortex orifice emitter." },
      { q: "A dealer says his emitter is pressure compensating. At 10 psi it gave 0.92 gph and 20 psi 1.0. Is it?", a: "Enter 0.92 at 23.1 ft and 1.0 at 46.2 ft. The exponent is 0.12, so yes, it is mostly compensating." },
      { q: "A test gave 1.6 gph at 10 psi and 2.4 gph at 20 psi. Is that what the catalog says for a 2 gph emitter?", a: "The exponent is 0.585, so it is not compensating, and 2.0 gph happens around 15 psi. Make sure the system runs near that pressure." }
    ],
    figs: ["14.11"]
  },
  "eq-14.5": {
    more: [
      "Test new emitters straight from the box, at least 50 of them per the book, at one constant pressure on a test manifold. Catch each for the same time in a graduated cylinder and record the volumes or flows in any one unit. Choose drip and spray emitters or line-source tubing, since the rating limits differ. Some makers print v on the spec sheet, and this is how you check it.",
      "The coefficient of manufacturing variation is the standard deviation of the flows over the mean. About 95% of emitters fall within the mean plus or minus 2v. A v under 0.05 is excellent for drip emitters and under 0.1 for line-source tubing (Table 14.3). Testing used emitters mixes plugging and wear into v, which is a different problem. Ten emitters are too few for a rating, so treat a small sample as a screen only.",
      "Use v in Eq. 14.7 and design-du for design uniformity."
    ],
    qa: [
      { q: "I caught 10 new drippers: 0.98, 1.03, 1.05, 0.95, 1.00, 1.08, 0.93, 1.01, 0.99, 1.02 gph. Are they any good?", a: "The mean is 1.00 gph and v is 0.045, rated excellent. About 95% would fall between 0.91 and 1.09 gph. Test 50 to confirm." },
      { q: "A cheaper emitter tested 1.10, 0.92, 1.05, 0.88, 1.15, 0.97, 1.02, 0.85, 1.08, 0.98. Worth the savings?", a: "Mean 1.00 gph and v 0.098, rated marginal. 95% fall between 0.80 and 1.20 gph, so the design uniformity drops several points. The savings are rarely worth it on a high-value crop." },
      { q: "Drip tape catches were 0.21 to 0.27 gph, ten readings averaging 0.234. Is that acceptable for tape?", a: "v is 0.095. For line-source tubing that rates excellent (under 0.1). The same v on a drip emitter would only be marginal." }
    ],
    figs: ["14.8"]
  },
  "tab-14.3": {
    more: [
      "Enter v from the emitter maker's spec sheet or from your own test in Eq. 14.5, and choose drip and spray emitters or line-source tubing. Line-source tubing (tape, porous pipe) has looser limits because each outlet is close to the next and they share water in the soil. This is a quick screen when comparing products for a bid or cost-share.",
      "Excellent and average products are fine for most uses. Marginal emitters reduce design uniformity and need either more emitters per plant or tighter pressure control. Poor and unacceptable products should be avoided for anything other than short-season crops. The rating says nothing about plugging resistance, which depends on the flow path and filtration.",
      "Use v with Eq. 14.7 to see the effect on uniformity."
    ],
    qa: [
      { q: "The spec sheet says v is 0.06 for this drip emitter. How does it rate?", a: "For drip emitters, 0.05 to 0.07 is average. That is acceptable for most field and orchard work." },
      { q: "A drip tape lists v 0.12. Good or bad?", a: "For line-source tubing, 0.1 to 0.2 rates average. It is usable, but a v under 0.1 would rate excellent." },
      { q: "Two emitters on a bid list v 0.04 and 0.09. Does it matter which one?", a: "0.04 is excellent and 0.09 marginal. With 2 emitters per plant, the 0.09 one costs about 4 points of design uniformity, so the cheaper one may cost more in water." }
    ],
    figs: ["14.8"]
  },
  "eq-14.6": {
    more: [
      "Catch the flow from emitters spread across the zone: near and far from the inlet on several laterals, high and low spots, and the end of the longest lateral. Use a stopwatch and graduated cylinder, 1 to 3 minutes per emitter. At least 16 readings is common practice, and more give a better estimate. Enter all flows in one unit.",
      "Emission uniformity is the low-quarter average flow over the average flow. New systems should be 90% or more, 80% to 90% is fair, and under 80% means something needs fixing: plugging, leaks or pressure problems. Low readings clustered at the end of laterals point to pressure. Scattered low readings point to plugging. Re-test after acid or chlorine treatments to see if they worked.",
      "Compare with the design uniformity from Eq. 14.7."
    ],
    qa: [
      { q: "I caught 12 emitters in a block: 1.02, 0.98, 0.95, 1.05, 0.88, 0.92, 1.00, 0.97, 1.03, 0.90, 0.99, 1.01. How's the uniformity?", a: "Average 0.975 gph, low-quarter average 0.90 gph, and DU 92%. That is very good, so no changes are needed beyond routine flushing." },
      { q: "An older block gave 0.95, 0.62, 1.01, 0.88, 0.40, 0.97, 0.99, 0.71, 1.02, 0.93, 0.55, 0.96. What's going on?", a: "Average 0.83, low quarter 0.52, DU 63%. The low readings are scattered, which points to plugging. Treat the water and flush, then re-test." },
      { q: "New drip tape gave 12 readings between 0.23 and 0.26 gph. Is the install good?", a: "Average 0.248 gph, low quarter 0.237 gph, DU 95%. That is what a new, well installed tape system should show. Keep the numbers as a baseline for next season." }
    ],
    figs: ["14.5"]
  },
  "eq-14.7": {
    more: [
      "The coefficient of manufacturing variation comes from Table 14.4, the spec sheet, or Eq. 14.5. The number of emitters per plant is a design choice: 1 for row crops on tape where each plant draws from one outlet, 2 to 8 for trees and vines. Minimum emitter flow is the flow at the lowest pressure in the zone from Eq. 14.3, and average flow is the design flow.",
      "Design emission uniformity combines manufacturing variation and pressure variation. Targets of 85% to 90% or better are common for new systems on uniform ground. More emitters per plant average out manufacturing variation, which is why orchards use several. If DU is low, check whether the pressure ratio (q<sub>m</sub>/q<sub>a</sub>) or v is the larger penalty and fix that one.",
      "design-du works out q<sub>m</sub> from the pressure losses for you."
    ],
    qa: [
      { q: "With v 0.06, 2 emitters per plant and a low flow of 0.82 out of 1.0 gph, what's my design DU?", a: "DU is 77.6%. Most of the loss comes from pressure, since q<sub>m</sub>/q<sub>a</sub> is 0.82 while the manufacturing term is 0.95." },
      { q: "What if each plant gets only one emitter?", a: "DU drops to 75.8%. The second emitter is worth about 2 points here." },
      { q: "In a vineyard with 4 emitters per vine, v 0.03 and a low flow of 0.9 gph out of 1.0, what DU?", a: "DU is 88.3%. With good emitters and 4 per plant, nearly all the remaining loss is the 10% pressure variation." }
    ],
    figs: ["14.11"]
  },
  "design-du": {
    more: [
      "Pick the emitter type to fill x and v from Table 14.4, or enter them from the spec sheet. Average design pressure is the regulator setting times 2.31 for feet. Maximum friction head loss is the sum of manifold and lateral losses to the worst emitter from Eq. 14.1, converted to feet. Elevation change to the lowest pressure point comes from a topo map or survey, positive downhill.",
      "The calculator finds K, the minimum head and flow, then the design DU. If DU is below the target, the fixes are pressure compensating emitters, shorter laterals, larger pipe, or regulators on each manifold. Uphill laterals cut DU fast because both friction and elevation reduce pressure. Check that the minimum pressure stays above the lower limit for compensating emitters, often 7 to 10 psi.",
      "Use the result to accept or redesign before buying pipe."
    ],
    qa: [
      { q: "Example 14.9: spiral emitters, 20 psi, 10 ft friction, flat, 2 per plant. DU?", a: "K is 0.0564, minimum head 36.2 ft, minimum flow 0.83 gph and DU about 79%. The book rounds to 0.82 gph and gets about 78%." },
      { q: "If I use compensating long path emitters (x 0.2) instead, same layout?", a: "The minimum flow rises to 0.95 gph and DU to 90%. That is the main reason to pay for compensating emitters." },
      { q: "The laterals actually run 5 ft uphill to the end. With spiral emitters what happens?", a: "Minimum head drops to 31.2 ft and flow to 0.75 gph. DU falls to 70.5%, too low for a new system." }
    ],
    figs: ["14.11"]
  },
  "tab-14.4": {
    more: [
      "Pick the emitter type from the maker's description: vortex or orifice, long path, compensating, short path, or line-source tubing. Enter the pressure change you expect across the zone as a percent of design pressure, from the lateral and manifold losses plus elevation. The table gives typical x, v and flushing ability from Keller and Bliesner (1990). If the spec sheet lists x and v for the actual product, use those instead.",
      "The flow change shows how sensitive the emitter is to the pressure change. The flushing ability matters as much as x for dirty water: emitters with no flushing ability need cleaner water and better filtration (Table 14.2). The rating repeats Table 14.3 for the v listed. A low v and a low x together give the best uniformity, but compensating emitters cost more and need a minimum pressure to work.",
      "Carry x and v into design-du and Eq. 14.7."
    ],
    qa: [
      { q: "We have vortex emitters. If pressure varies 10% across the block, how much does flow change?", a: "x is 0.42, so flow changes about 4.1%. The v of 0.07 rates marginal, and there is no flushing ability, so filtration has to be good." },
      { q: "The design uses spiral long path emitters and the losses add up to 20% of design pressure. Is that OK?", a: "x is 0.75, so flow changes about 14.7%. That is too much for good uniformity. Shorten the laterals or go to a compensating emitter." },
      { q: "What would compensating long path emitters with automatic flushing do at the same 20%?", a: "x is 0.2, so flow changes only 3.7%. They also flush themselves at start-up, which helps on well water with iron or on surface water." }
    ],
    figs: ["14.11", "14.8", "14.9"]
  },
  "tab-14.2": {
    more: [
      "Send a water sample to a lab that runs an irrigation or drip suitability test: suspended solids, pH, total dissolved solids, iron, manganese, hydrogen sulfide, and bacteria count. Sample at the pump after it has run 20 to 30 minutes, and for surface water sample at the time of year you will irrigate. A field EC meter gives a quick salt estimate (TDS in ppm is about 640 times EC in dS/m).",
      "Each factor is rated minor, moderate or severe, and the worst one sets the overall rating. Moderate iron or manganese usually means chlorination or aeration and settling, plus regular acid treatment. High pH with high salts points to carbonate scale, handled with acid injection. Severe suspended solids or bacteria call for media filters and chlorination. The ratings say what treatment is needed, not whether drip is possible.",
      "Use the result to choose filters (Eq. 14.2) and emitters with flushing ability (Table 14.4)."
    ],
    qa: [
      { q: "The lab says 30 ppm solids, pH 7.5, 600 ppm salts, 0.2 ppm iron. Can I go drip?", a: "Suspended solids are minor, but pH, salts and iron are moderate, so the overall rating is moderate. Drip will work with good filtration and a plan for acid and chlorine treatment." },
      { q: "Our well has pH 7.8, 1,200 ppm salts, 0.8 ppm iron and 0.2 manganese. How bad is that?", a: "pH, salts, manganese and iron all rate moderate. Iron at this level oxidizes into a red sludge that plugs emitters, so plan on aeration or chlorine and settling before the filter." },
      { q: "We want to pull from a pond: 120 ppm solids and 60,000 bacteria per mL. Is that a problem?", a: "Both are severe, so the overall rating is severe. You need media filtration and regular chlorination, and emitters that self-flush." }
    ],
    figs: ["14.10", "14.6"]
  },
  "eq-14.8": {
    more: [
      "Crop ET for the period comes from a local weather station or ET network times a crop coefficient, adjusted for canopy cover on young trees and vines. Effective precipitation is the rain that stays in the wetted root zone, usually much less than gauge rain under drip. Deep percolation and runoff allowances are small for well-managed drip, often 5% to 10% of ET. Leave the soil water change at 0 when you plan to hold soil water steady, which is normal for drip.",
      "The result is the gross depth to apply over the irrigated area. Divide by the area per emitter and emitter flow (Eq. 14.9 or drip-runtime) to get run time. Using full-field ET for young orchards overstates the need. Add any leaching requirement for salty water to the deep percolation term.",
      "Use the result in Eq. 14.9 or drip-runtime."
    ],
    qa: [
      { q: "My tomatoes used 0.25 inch yesterday. How much do I need to put back?", a: "Enter 0.25 in ET, 0.02 in deep percolation and no rain. The gross requirement is 0.27 in, which is the number to turn into run time with drip-runtime or Eq. 14.9." },
      { q: "This week ET was 1.75 inches and we got 0.5 inch of useful rain. How much should drip put on?", a: "Enter 1.75 in ET, 0.5 in rain and 0.1 in for deep percolation. The gross requirement is 1.35 in for the week, so split it into daily or every-other-day runs." },
      { q: "Peak ET for corn under SDI is 0.32 inch a day. What gross daily depth do I plan for?", a: "With 0.03 in for deep percolation, the gross is 0.35 in per day. The system has to deliver that every day across all zones, so check it against run hours in drip-runtime." }
    ],
    figs: ["14.2", "14.3"]
  },
  "eq-14.9": {
    more: [
      "Gross depth comes from Eq. 14.8. The area is what the emitters serve, in ft² (one acre is 43,560 ft²). Emitter flow is from the spec sheet or a catch test, and application time is how long the grower can run each irrigation. To get area per emitter, set n to 1.",
      "The result is how many emitters it takes to apply that depth in that time, and the area each serves. Fewer emitters need longer run times. The wetted pattern (Figures 14.2 and 14.3) also limits spacing: on sands, emitters need to be closer. A common error is entering time in minutes or depth in feet.",
      "Use drip-runtime for the run time with a given layout."
    ],
    qa: [
      { q: "If I want to put on 0.27 inch in an hour with 2 gph emitters, how many do I need per acre?", a: "Enter 0.27 in, 43,560 ft², 2 gph and 1 hr. It takes 3,666 emitters per acre, each serving 11.9 ft². Running 2 hr would halve the count." },
      { q: "In Example 14.10, how much area does each 2 gph emitter on the tomatoes cover?", a: "Enter 0.27 in, 12 ft², 2 gph and 1 hr, and n comes out at 1.0, so each emitter serves about 12 ft² with one lateral per row. With one lateral serving two rows it would be 6 ft², as the book says." },
      { q: "A berry grower has 5 acres and can run 6 hours a day. He needs 0.3 inch with 0.24 gph emitters. How many?", a: "Enter 0.3 in, 217,800 ft², 0.24 gph and 6 hr. He needs about 28,290 emitters, 7.7 ft² each, for example 1 ft spacing on rows about 7.7 ft apart." }
    ],
    figs: ["14.2", "14.3"]
  },
  "drip-runtime": {
    more: [
      "Crop ET since the last irrigation comes from a weather station or ET network with a crop coefficient. Rain counts only if it reached the root zone. Emitter spacing and flow are on the tape or tubing label, and the lateral spacing is the bed or row width each lateral serves. Small allowances for deep percolation (about 10% of ET) cover nonuniformity. Enter soil water you are willing to draw down as positive, or a negative number to refill a deficit.",
      "The calculator turns depth into run time, gallons per emitter and gallons per acre. Drip tape on 60 in beds at 0.24 gph and 12 in spacing applies only about 0.08 in/hr, so a 0.3 in irrigation takes about 4 hours. Run times over about 24 hours mean the zone cannot keep up and needs more emitters or more flow. Using the wetted strip width instead of the full bed spacing overstates the rate.",
      "Gross depth follows Eq. 14.8. For zone scheduling, compare run time with the hours available per day and the number of zones."
    ],
    qa: [
      { q: "My tape is 0.24 gph on 12 inch spacing, beds 60 inches. ET was 0.30 yesterday. How long do I run?", a: "With 0.03 in allowance, gross is 0.33 in. The rate is 0.077 in/hr, so run about 4.3 hours. Each emitter gives about 1 gal, or 8,961 gal per acre." },
      { q: "Our SDI corn has 0.264 gph emitters every 18 inches on 60 inch laterals. Same 0.30 ET. Run time?", a: "The rate is 0.056 in/hr, so 0.33 in takes 5.8 hours. With four zones that is about 23 hours a day at peak, so there is little room to catch up." },
      { q: "We got 0.3 inch rain this week and ET was 1.4 inches. Tape is 0.24 gph at 12 inches on 60 inch beds. How long to run for the week?", a: "With 0.1 in allowance, the gross is 1.2 in. Total run time is about 15.6 hours, or roughly 2.2 hours a day split across the week." }
    ],
    figs: ["14.3", "14.4"]
  }
});
