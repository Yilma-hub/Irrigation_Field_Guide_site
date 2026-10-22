window.CALC_USE2 = Object.assign(window.CALC_USE2 || {}, {
  "eq-5.1": {
    more: [
      "The gross depth comes from the flow meter totalizer or from flow rate times run time divided by area. The net depth is the deficit the irrigation refilled, so you need a soil water number taken just before the irrigation, from a probe, a sensor set or the checkbook. On a pivot with drops near the canopy you can expect 80 to 90%. Furrows without reuse often land between 40 and 65%, and a well run drip system can reach 90% or more.",
      "Read the result as the share of pumped water that ended up stored where the crop can use it. A low number has two common causes: the grower applied more than the deficit, or water left the field as runoff, drift or deep percolation. Make sure both depths are over the same area and the same event. The most common mistake is using the depth the pivot panel says it applied in place of the metered depth, and the second is using a deficit from three days earlier.",
      "Ea is the simple version. When you have catch-can data, ELQ (Eq. 5.11) is the better number because it accounts for the dry low quarter. Use Ea to talk with a grower on the phone and ELQ for design and capacity work."
    ],
    qa: [
      { q: "My meter says I put on 1.25 inches and the probe says the soil was only short an inch. How did I do?", a: "Enter 1.0 in net and 1.25 in gross. Ea comes out 80%. Tell him that is a fair number for a pivot, and that the extra quarter inch went somewhere other than the root zone, most likely to drift and below the roots." },
      { q: "We furrow irrigate with siphon tubes and put on about 4 inches a set. The soil only had room for 2 inches. Is that normal?", a: "Enter 2.0 in net and 4.0 in gross for an Ea of 50%. That is typical for furrows without tailwater reuse, and it means half the water ran off the end or went deep. Shorter sets, surge or a reuse pit are the usual fixes." },
      { q: "The cost-share application asks for application efficiency of the new drop package. How do I support the number?", a: "Use the first irrigation after install: if the meter showed 1.1 in and soil checks showed a 1.0 in deficit refilled, Ea is 90.9%. Report it with the meter readings and the soil data so the reviewer can follow it." }
    ],
    figs: ["5.4"]
  },
  "eq-5.2": {
    more: [
      "Both depths come from a catch-can or infiltration test where each reading stands for the same area. Sort the readings, average the lowest one quarter for dLQ and average all of them for dz. For drip you can use emitter flows from a timed catch at 16 or more emitters in place of depths. Sprinkler sets in good repair usually give DU 0.75 to 0.85, pivots 0.80 to 0.90, and drip 0.85 to 0.95.",
      "The book (p. 86) takes DU 0.7 as the lowest acceptable value for moved laterals, 0.6 for furrows, and at least 0.8 for microirrigation. A low DU means the grower has to pump extra to wet the dry quarter or accept stress there. Check that the cans were spaced evenly and that wind was light during the test, since a 10 mph wind can drop a sprinkler DU by 0.1 or more. Do not mix units for the two inputs.",
      "DU feeds Eq. 5.8 to get the low-quarter depth, Eq. 5.13 for the scheduling coefficient, and the ELQ in Eq. 5.11. If you only have a CU, DU is roughly 1 - 1.59(1 - CU/100) for normally distributed data, so CU 84% is about DU 0.75 as in Example 5.1."
    ],
    qa: [
      { q: "You ran cans on my hand lines. The low quarter averaged 0.65 inch and the whole test 0.85. What does that mean?", a: "DU is 0.65 / 0.85 = 0.76. That is above the 0.7 floor the book gives for moved laterals, so the system is acceptable. Check pressure at the end of the line before buying nozzles." },
      { q: "We checked 24 drip emitters on the vegetable block. Low quarter caught 0.45 inch worth and the average was 0.50. Is my drip OK?", a: "DU is 0.45 / 0.50 = 0.90, above the 0.8 minimum for microirrigation. The system is in good shape. Recheck after the season since clogging lowers it over time." },
      { q: "Our sports field sprinklers caught 0.25 inch in the dry spots and 0.5 inch on average. The groundskeeper wants to run longer.", a: "DU is 0.25 / 0.50 = 0.50, which is poor. Running longer would need twice the water to wet the dry spots. Fix head spacing, nozzles and pressure first, then retest." }
    ],
    figs: ["5.6", "5.5"]
  },
  "eq-5.3": {
    more: [
      "Set out cans in a grid between two laterals or around a solid-set block so each can stands for the same area, usually on a 10 by 10 ft spacing. Run the system for a normal set, read each can with a graduated cylinder and convert to depth using the can opening area. Enter all readings. A test of 16 to 30 cans is common and more cans give a steadier answer.",
      "A CU of 85% or more is a reasonable target for row crops, and 90% or more is good. A CU in the 70s points to worn nozzles, low pressure, wrong spacing for the wind, or plugged heads. CU uses the average absolute deviation, so a few very low cans hurt less here than they do in DU. Do not use plain CU for a center pivot because outer cans stand for more area. Use the Heermann and Hein form for that.",
      "CU sets F1 in Table 5.1, which drives the deep percolation estimate in Eq. 5.14 and the nitrate loss procedure."
    ],
    qa: [
      { q: "We put 16 cans under the wheel line. Readings ran from 0.40 to 0.62 inch. Do I need new nozzles?", a: "Enter the 16 readings (0.50, 0.55, 0.48, 0.60, 0.62, 0.45, 0.58, 0.52, 0.40, 0.57, 0.61, 0.49, 0.53, 0.56, 0.47, 0.59). Mean is 0.53 in and CU is 90%. That is good uniformity, so the money is better spent elsewhere." },
      { q: "Can you check the numbers from the book example so I can show my class?", a: "Enter the 20 depths from Example 5.1. The mean is 2.0 in, the sum of deviations 6.6 in, and CU is 83.5%, which the book rounds to 84%." },
      { q: "An old solid-set orchard system caught 0.3 to 1.0 inch across 8 cans. Is it worth fixing?", a: "Enter 0.3, 0.9, 0.5, 0.8, 0.4, 1.0, 0.6, 0.7. Mean is 0.65 in and CU is 69%, below the 85% target. The low cans are getting less than half of the high ones, so a nozzle and pressure check will pay back in water and yield." }
    ],
    figs: ["5.6", "5.5"]
  },
  "eq-5.4-5.5": {
    more: [
      "Lay one or two lines of cans along a radius from the pivot point to the end, 5 to 15 ft apart as the book says, and record each can's distance. Run the pivot over the cans at a normal speed and read them right after the tower passes to limit evaporation. Skip cans in the wheel tracks. Enter the depths from the pivot outward and either a distance list or the first distance and spacing.",
      "CUH of 90% is often achieved on pivots, and above 90% is good. Because each can is weighted by its distance, a low reading in the last two spans pulls CUH down much more than the same low reading near the center. Look at where the low cans are: low at the end often means low pressure at the end, a worn end gun or a pressure regulator failure. A wrong nozzle in one span shows as a single low or high patch.",
      "Compare the weighted mean with the depth the pivot panel says it applied at that speed. A gap over 10% suggests the flow or the percent timer setting is off. Use CUH in place of CU in Table 5.1 for F1."
    ],
    qa: [
      { q: "The last two spans of my pivot always look yellow. We ran cans every 100 ft and the outer two caught 0.70 and 0.65 inch while the rest were about 1 inch.", a: "Enter the 12 depths from 0.80 out to 0.65 with distances 100 to 1,200 ft. CUH comes out 85%, and the low readings at the end do most of the damage because they stand for the most area. Check pressure at the end tower and the end gun before the rest of the package." },
      { q: "On my other pivot the low cans are at the first two spans. Is that as bad?", a: "Using the same can layout with 0.65 and 0.70 at 100 and 200 ft and about 1 inch elsewhere, CUH is 93%. The inner spans cover little area, so the field as a whole is in good shape. A quick look at those nozzles is still worth doing." },
      { q: "NRCS wants proof the new sprinkler package is uniform before they pay the cost share.", a: "Run a radial line of cans and enter the depths and distances. A test with readings between 0.92 and 1.05 inch every 100 ft gives CUH of 97%, well above the 90% the book says pivots often reach. Attach the can sheet to the application." }
    ],
    figs: ["5.1", "5.5"]
  },
  "catch-can": {
    more: [
      "Before the test, measure the soil water deficit with a probe or sensors, read the flow meter at start and stop, and note wind and pressure. Place cans on an even grid so each can stands for an equal area, run a normal set, and read every can. Enter the depths, the SWD you want to refill, and the depth applied from the source. On a pivot use this for an even-area grid only. Use the CUH calculator for a radial line.",
      "The outputs tell the whole story in one place. DU and CU say how even the water was. Adequacy is the share of the field that got the SWD or more, and the book plans for 90%. Average deep percolation is the water caught above the SWD. ELQ is the share of source water that the low quarter stored. A good test shows DU above 0.75 and ELQ above 75% for sprinklers. A high DU with a low ELQ means the system is even but the grower is putting on too much.",
      "Carry DU into the scheduling coefficient and checkbook, ELQ into the gross capacity calculation, and CU and DU into the nitrate leaching procedure."
    ],
    qa: [
      { q: "You ran the book's 20 cans and I had a 1.6 inch deficit with 2.2 inches pumped. How did the set do?", a: "With the Example 5.1 depths, SWD 1.6 in and 2.2 in applied: DU 0.75, CU 84%, 90% of the area adequately irrigated, and ELQ 68%. The low quarter got 1.5 in, just short of the deficit, so the depth was about right and uniformity is the place to improve." },
      { q: "Same system, but I only needed 1.2 inches that day. What changes?", a: "Change SWD to 1.2 in. Adequacy goes to 100%, average deep percolation rises to 0.80 in per can, and ELQ drops to 55%. The system did not change. The grower just applied too much for the deficit, so the fix is a faster pivot speed or a shorter set." },
      { q: "We put 16 cans in a grid under a linear move. Readings 0.75 to 1.10 inch, deficit was 0.9 and the meter showed 1.05.", a: "Enter the 16 depths, SWD 0.9 and 1.05 applied. DU is 0.86, CU 92%, ELQ 78% and 75% of the area reached the deficit. The system is even, and a slightly heavier application would bring adequacy up to the 90% planning level." }
    ],
    figs: ["5.6", "5.7"]
  },
  "eq-5.6-5.7": {
    more: [
      "Gross depth comes from the meter or from flow, time and area. Runoff on furrows is measured with a flume or small weir at the tail ditch, and on a pivot it is usually zero unless water ponds and moves on slopes. Evaporation and drift are hard to measure in the field, so most people use catch cans versus the meter: the gap between the meter depth and the average can depth is the above-ground loss. Typical values are 1 to 5% for drops near the canopy and 10 to 20% for high-pressure impact sprinklers or big guns in hot, windy weather.",
      "The result is the average depth that went into the soil. It still includes water that will go below the roots, so it is larger than the depth stored. If the infiltrated depth is much less than the meter depth on a pivot, look for runoff in the outer spans where the application rate is highest, or for a meter reading error.",
      "dz feeds Eq. 5.8 for the low-quarter depth, Eq. 5.14 for nonuniformity losses, and the leaching fraction work in Chapter 7."
    ],
    qa: [
      { q: "My pivot runs drops at 15 psi. The meter says 1 inch. How much soaked in?", a: "Enter 1.0 in gross, 0 runoff and about 0.05 in for evaporation and drift. The infiltrated depth is 0.95 in. With drops near the canopy, losses that small are normal." },
      { q: "My big gun traveler puts on 1.5 inches, but it was 95 degrees and windy. Some ran off the low end too.", a: "With 1.5 in gross, 0.25 in evaporation and drift and 0.1 in runoff, infiltration is 1.15 in. About a quarter of what he pumped never went into the soil. Running at night or in calmer weather would recover most of the drift loss." },
      { q: "We measured 1.2 inches of tailwater off a furrow set that got 4 inches.", a: "Enter 4.0 in gross, 1.2 in runoff and 0 evaporation. The field took in 2.8 in. If the tailwater goes to a reuse pit, use Eq. 5.12 to find what came from the well." }
    ],
    figs: ["5.4"]
  },
  "eq-5.8": {
    more: [
      "DU comes from a catch-can or emitter test, or from a typical value when there is no test: about 0.8 for a pivot in good repair, 0.7 for set sprinklers, 0.6 for furrows and 0.85 to 0.9 for drip. dz is the average infiltrated depth from Eq. 5.7 or the can average.",
      "The low-quarter depth is the depth to plan for if the grower wants the drier parts of the field kept out of stress. If dLQ is less than the deficit, that quarter of the field went into the next day short. A common mistake is to schedule on the average depth, which leaves a quarter of the field drier than the checkbook shows.",
      "Use dLQ as the effective irrigation in the checkbook (Eq. 6.20 and 6.21), compare it to SWD for Eq. 5.9 to 5.11, and use it in Eq. 5.15 for excess deep percolation."
    ],
    qa: [
      { q: "My pivot puts on 1 inch. How much is the dry part of the field getting?", a: "With DU 0.80 and 1.0 in infiltrated, dLQ is 0.80 in. Put 0.8 in in the checkbook for that irrigation. Using 1.0 would leave the dry quarter behind." },
      { q: "On my furrows we put in 3 inches. How much does the bottom end get?", a: "With a furrow DU of 0.6, dLQ is 0.6 x 3.0 = 1.8 in. If the deficit was 2.5 in, the low quarter is still short and the top end has been overwatered." },
      { q: "For drip on tomatoes we apply half an inch. Should I add more for the low emitters?", a: "With DU 0.9 and 0.5 in, dLQ is 0.45 in. The low emitters get 90% of the average, so only a small increase in run time is needed to cover them." }
    ],
    figs: ["5.6", "5.7"]
  },
  "eq-5.9-5.11": {
    more: [
      "You need DU from a test, the average infiltrated depth, the SWD right before the irrigation (from a probe, sensors or the checkbook) and the depth taken from the source (meter depth, or Eq. 5.12 if tailwater is reused). On a well run pivot ELQ is 75 to 85%. Set sprinklers run 60 to 75%, and furrows without reuse often 40 to 60%.",
      "If dLQ is less than SWD, all of the low quarter's water was useful and ELQ only reflects uniformity and above-ground losses. If dLQ is more than SWD, the effective depth is capped at SWD and the excess shows up as a lower ELQ. Two irrigations with the same system can give very different ELQ just because of the deficit at the time. Report the deficit with the ELQ so nobody compares apples to oranges.",
      "ELQ is the efficiency the book uses for system capacity (Eq. 5.20) and for converting net to gross depth in Chapters 11 to 13."
    ],
    qa: [
      { q: "Using the book's can test, DU 0.75, 2.0 inches infiltrated, 2.2 inches pumped and a 1.6 inch deficit. What's ELQ?", a: "dLQ is 1.5 in, which is below the 1.6 in deficit, so the effective depth is 1.5 in. ELQ is 1.5 / 2.2 = 68%, matching Example 5.2." },
      { q: "My pivot has DU 0.85. I put on 1 inch, 0.95 inch soaked in, and the soil was 1.2 inches short.", a: "dLQ is 0.81 in and all of it is effective since the deficit was 1.2 in. ELQ is 81%. That is a good number, and the field could even take a heavier pass." },
      { q: "I ran the same pivot slow to put on 2 inches before going on vacation. The deficit was only 1 inch.", a: "With 1.9 in infiltrated, dLQ is 1.6 in but only 1.0 in is effective. ELQ drops to 50%. Half the water went below the roots, along with any nitrate in it." }
    ],
    figs: ["5.7"]
  },
  "eq-5.12": {
    more: [
      "The gross depth is the total applied to the field, which includes pumped-back tailwater. The runoff ratio comes from flume readings on the tail ditch divided by the inflow for the set, and is often 0.2 to 0.4 on furrows without cutback. The return ratio is the share of runoff that gets reapplied, often 0.7 to 0.9 after pit evaporation and seepage. Pick closed if the pit pumps back to the same field and open if it feeds another field.",
      "The result is the depth that came from the well or ditch, which is the water that costs pumping and counts against a water right. Comparing it to the gross depth shows how much the reuse system saves each set. A common mistake is entering the gross depth from the source only, which double counts the reuse.",
      "Use this da in Eq. 5.11 for ELQ. The runoff ratio comes from Chapter 10 (Eq. 10.8 and Tables 10.3 and 10.4) when you do not have measurements."
    ],
    qa: [
      { q: "My furrow set gets 4 inches total. About 30% runs off and the pit returns 80% of it to the same field. How much comes from the ditch?", a: "Closed system, dg 4.0 in, Rr 0.3, Rt 0.8. Runoff is 1.2 in and the ditch supplies 3.04 in. The pit saves almost an inch per set." },
      { q: "What if I shut the pump-back off for repairs?", a: "Set Rt to 0. The ditch then supplies the full 4.0 in, and the 1.2 in of runoff leaves the farm." },
      { q: "We're designing a reuse pit for a 3.5 inch set with 25% runoff and 90% return. Worth it for the cost-share?", a: "Closed system with dg 3.5, Rr 0.25, Rt 0.9 gives 0.875 in of runoff and 2.71 in from the source. That is about 0.8 in saved per set, which you can multiply by sets and acres to show acre-feet saved per season." }
    ],
    figs: ["5.2", "5.4"]
  },
  "eq-5.13": {
    more: [
      "Run a catch-can audit with the system at normal pressure, then use the can average and the low-quarter average. The test run time and the application rate come from the same audit. For turf, the irrigation association audit method is the usual source. Typical SC values are 1.1 to 1.3 for good systems and 1.5 or more for poor ones.",
      "SC is how many times longer the system must run so the low quarter gets the target depth. An SC of 1.25 means 25% more run time and 25% more water. Above about 1.4, fixing heads, nozzles and pressure usually costs less than the extra water. Be clear that the target depth is net. Do not stack an efficiency factor on top of SC for the same nonuniformity.",
      "SC is the inverse of DU. The adjusted run time ties into the run-time and operating-time calculators in Chapters 3 and 11."
    ],
    qa: [
      { q: "Our sod farm sprinklers ran 5 hours. Cans averaged 1.5 inches and the low quarter 1.2. How long would it take if the pattern were perfect?", a: "SC is 1.5 / 1.2 = 1.25, and the perfect-uniformity time is 5 / 1.25 = 4 hours, as in Example 5.4. The extra hour is the cost of uneven coverage." },
      { q: "The park's sprinklers put down 0.6 inch per hour. The low quarter only caught 0.36 of the 0.6 average. How long to apply half an inch?", a: "SC is 0.6 / 0.36 = 1.67, so run time is 0.5 / 0.6 x 1.67 = 1.39 hours, about 83 minutes. Without the poor uniformity it would be 50 minutes." },
      { q: "If we replace heads and the low quarter goes to 0.48, what do we save?", a: "SC drops to 1.25 and the run time for 0.5 inch drops to 1.04 hours, about 62 minutes. That is 21 minutes less per cycle, which you can turn into gallons with the zone flow." }
    ],
    figs: ["5.5", "5.1"]
  },
  "eq-5.14": {
    more: [
      "Use the CU from a catch-can test (or CUH for a pivot), the average infiltrated depth for the event, and the field area. F1 is read from Table 5.1 for 90% adequacy. The calculation assumes the irrigation was planned so 90% of the area got at least the deficit and the depths are normally distributed.",
      "The result is the volume that went below the roots only because some parts of the field got more than others. At CU 90% about 18% of the infiltrated water is lost this way, and at CU 75% it is 45%. A grower can cut this loss only by improving uniformity. Better scheduling does not touch it. Use acre-inches over the whole field to talk money and pumping cost.",
      "This is the first half of total deep percolation. Add the over-application loss from Eq. 5.15 with Eq. 5.16."
    ],
    qa: [
      { q: "With the book's test, CU 84% and 2 inches infiltrated on an acre, how much went deep just from unevenness?", a: "F1 is 0.71, so 2.0 x 1 x (1 - 0.71) = 0.58 ac-in, as in Example 5.5." },
      { q: "My 130 acre pivot tested CU 90%. Each pass puts in 1 inch. What does unevenness cost me per pass?", a: "F1 is 0.82, so 130 ac-in x 0.18 = 23.4 ac-in per pass, about 635,000 gallons. Over 12 passes that is roughly 23 ac-ft." },
      { q: "Is it worth fixing an old system with CU 75% versus getting it to 90%?", a: "On one acre with 1 in infiltrated, CU 75% loses 0.45 ac-in and CU 90% loses 0.18 ac-in. That is 0.27 in saved per irrigation per acre, which you can price with his pumping cost per acre-inch." }
    ],
    figs: ["5.7"]
  },
  "eq-5.15": {
    more: [
      "dLQ comes from Eq. 5.8 or the catch-can calculator. SWD must be measured or tracked just before the irrigation, with a probe, sensors or the checkbook. The 0.95 factor accounts for the low quarter being a bit under the average of the remaining area.",
      "If dLQ is at or below SWD the loss is zero. If it is above, the excess over the whole area went below the roots. This loss is the one better scheduling removes, by matching the depth to the deficit, skipping an irrigation after rain, or speeding up the pivot. It is common right after rain or when a grower runs a fixed depth all season.",
      "Add this to Eq. 5.14 with Eq. 5.16 and 5.17 for total deep percolation."
    ],
    qa: [
      { q: "In the book's example the low quarter got 1.5 inches and the deficit was 1.2. How much went deep from over-applying?", a: "0.95 x 1 ac x (1.5 - 1.2) = 0.285 ac-in per acre, which the book rounds to 0.29." },
      { q: "My low quarter got 0.8 inch and the deficit was an inch. Am I losing water?", a: "No. dLQ is below SWD, so Vdp2 is zero. The low quarter is still slightly short, which is a scheduling question. No water was lost." },
      { q: "It rained 0.6 inch, the deficit dropped to 0.4, but the pivot kept running at its usual 1.0 inch low-quarter depth on 130 acres.", a: "0.95 x 130 x (1.0 - 0.4) = 74 ac-in, about 6 ac-ft lost below the roots on one pass. This is the case for a rain shutoff or a quick call to the grower after a storm." }
    ],
    figs: ["5.7"]
  },
  "eq-5.16-5.17": {
    more: [
      "Enter the nonuniformity loss from Eq. 5.14, the over-application loss from Eq. 5.15, and the area. Keep both volumes on the same area and the same irrigation event.",
      "The depth of deep percolation is the number to compare with the depth applied. A loss of 0.1 to 0.2 in per inch applied is typical for a good pivot with careful scheduling. Losses above 0.5 in per irrigation are a red flag on sandy soils with nitrate in the profile. Check which of the two parts dominates, because that tells you whether the fix is hardware (uniformity) or management (scheduling).",
      "dp feeds Eq. 5.18 for nitrate or chemical loss and the leaching fraction in Eq. 7.6."
    ],
    qa: [
      { q: "From the book's example, 0.58 and 0.29 acre-inch. What's the total?", a: "0.87 ac-in on 1 acre, which is 0.87 in of deep percolation per irrigation, matching Example 5.5." },
      { q: "On my 130 acre pivot the unevenness loss was 23.4 acre-inches and the over-application after rain was 74.1. What's the depth?", a: "Total is 97.5 ac-in, or 0.75 in over the field. Three quarters of it came from over-application, so scheduling is the first fix. Nozzles come second." },
      { q: "An old set system lost 0.45 acre-inch per acre to unevenness and nothing to over-application. How much leached?", a: "Total deep percolation is 0.45 in. All of it is a uniformity problem, so this is the number to put in a cost-share request for a new sprinkler package." }
    ],
    figs: ["5.7", "5.4"]
  },
  "eq-5.18": {
    more: [
      "Concentration in the leachate comes from suction lysimeters, tile drain samples or shallow wells, and is often reported as nitrate-N in ppm (mg/L). Under fertilized corn on sandy soils values of 10 to 30 ppm nitrate-N are common. Deep percolation depth comes from Eq. 5.17, a water balance, or the leaching fraction calculators.",
      "The factor 0.226 converts ppm times inches to pounds per acre. Check whether the lab reports nitrate (NO3) or nitrate-N, since nitrate is 4.43 times nitrate-N. Use nitrate-N to compare with fertilizer N rates. A loss of 5 lb N/ac per irrigation over 8 to 10 over-irrigations is 40 to 50 lb/ac a season, which is a real fertilizer cost.",
      "The same conversion gives the salt applied with irrigation water (salt-applied calculator in Chapter 7)."
    ],
    qa: [
      { q: "With 20 ppm nitrate-N in the leachate and 0.87 inch of deep percolation, how much N did I lose?", a: "0.226 x 20 x 0.87 = 3.9 lb N/ac for that irrigation, as in Example 5.5." },
      { q: "The tile outlet tested 30 ppm and we figure an inch went through after that heavy irrigation.", a: "0.226 x 30 x 1.0 = 6.8 lb N/ac. On 100 acres that is 680 lb of N, worth putting into dollars for the grower." },
      { q: "If I tighten my scheduling to quarter-inch losses with 15 ppm, what's left?", a: "0.226 x 15 x 0.25 = 0.85 lb N/ac per irrigation, down from several pounds. That is the number to use in a nutrient management plan." }
    ],
    figs: ["5.7"]
  },
  "leaching-procedure": {
    more: [
      "Inputs come from a catch-can test (CU and DU), the average infiltrated depth, the deficit before the irrigation, and a leachate nitrate value from a lysimeter, tile or a typical number for the soil and N rate. Use the field area to get pounds for the whole field.",
      "The procedure splits the leaching into the part caused by uneven water and the part caused by applying more than the deficit. Show the grower both. If Vdp1 is large, uniformity is the issue. If Vdp2 is large, scheduling is. The result assumes 90% adequacy and normally distributed depths, so treat it as an estimate within about 20%.",
      "Run it twice with different SWD values to show what one day of waiting for the deficit to grow does to N loss."
    ],
    qa: [
      { q: "Can you run the book example as a check?", a: "With dz 2.0 in, CU 84%, DU 0.75, SWD 1.2 in and 20 ppm: F1 0.71, Vdp1 0.58, Vdp2 0.29, dp 0.87 in and 3.9 lb N/ac lost, matching Example 5.5." },
      { q: "My 120 acre pivot on loamy sand: CU 85, DU 0.78, 1 inch infiltrated, deficit 0.6 inch, leachate around 25 ppm. How much N am I washing out?", a: "dLQ is 0.78 in, Vdp1 32.4 ac-in and Vdp2 20.5 ac-in, so dp is 0.44 in. Loss is 2.5 lb N/ac, or about 300 lb on the field, per irrigation." },
      { q: "What if I waited until the deficit was 0.9 inch before that same pass?", a: "Change SWD to 0.9. Vdp2 drops to zero, dp is 0.27 in and the loss is 1.5 lb N/ac, about 183 lb on the field. Waiting a day saves roughly 115 lb of N per pass." }
    ],
    figs: ["5.6", "5.7"]
  },
  "eq-5.19": {
    more: [
      "Measure flow at the headgate or well and at the field turnout at the same time, with a Parshall flume, weir, propeller meter or float method (Chapter 3). Volumes over a set or depths over the same area both work. Lined canals and pipelines often run 90 to 98%, unlined field ditches 70 to 90%, and long earthen ditches in sandy or gravelly soil can drop below 60%.",
      "The result shows how much water is lost before it reaches the field. Losses come from seepage, evaporation, ditch-bank vegetation and leaks at gates. A low number on a short ditch points to gophers, cracks or bad gates. Measure both ends on the same day, because a reading taken at the headgate in the morning and at the field in the afternoon can be off if the flow changed.",
      "Use Ec in Eq. 5.21 to size the source flow and in the project efficiency calculator."
    ],
    qa: [
      { q: "The flume at my field shows 2.7 inches worth of water for the set, but we diverted 3.0 inches worth at the river.", a: "Ec is 2.7 / 3.0 = 90%. That matches a continuous supply in Table 5.2, so the ditch is in decent shape." },
      { q: "I divert 5 cfs and the field turnout only reads 3.8 cfs.", a: "Ec is 3.8 / 5.0 = 76%. Almost a quarter of his water is lost in the ditch. Run the seepage calculator to see if piping the worst stretch pays." },
      { q: "After we put the ditch in pipe, the meter at the field reads 4.9 cfs out of 5.0.", a: "Ec is 98%. That 22 point gain is the number to report in a cost-share completion report, along with the acre-feet saved over the season." }
    ],
    figs: ["5.8", "5.12"]
  },
  "project-efficiency": {
    more: [
      "Each efficiency can come from measurements (Eq. 5.19 for conveyance, Eq. 5.1 or 5.11 for application) or from Table 5.2 when nothing is measured. Typical values: main canals 70 to 90%, field canals 70 to 90%, surface application 40 to 70%, sprinklers 70 to 85%, drip 85 to 95%.",
      "Distribution efficiency shows the share of diverted water that reaches the field. Farm efficiency shows the share of water delivered to the farm that is stored in the root zone. Multiplying makes clear that a weak link anywhere hurts the whole chain. When choosing where to spend money, change one efficiency at a time and see which change moves the result most.",
      "Remember that water lost from one farm may return to the river and be used downstream. The book's watershed water balance (Figure 5.13) is a reminder that project savings are not always basin savings."
    ],
    qa: [
      { q: "Our ditch company has 80% conveyance, 90% field canals and growers at 65% application. Where do we stand?", a: "Distribution efficiency is 72% and farm efficiency 58.5%. Roughly 4 of every 10 acre-feet delivered to the farm are not stored in root zones." },
      { q: "Should we line canals or help growers switch to sprinklers? Now we're at 70% conveyance, 80% field canals, 50% application.", a: "Today Ef is 40%. Lining field canals to 90% raises Ef to 45%. Moving to sprinklers at 85% raises Ef to 68%. On these numbers the on-farm upgrade gains more." },
      { q: "What does lining the field canal alone do for distribution efficiency?", a: "With Ec 70% and Eb going from 80 to 90%, Ed goes from 56 to 63%. Seven more acre-feet of every 100 diverted reach the fields." }
    ],
    figs: ["5.12", "5.13"]
  },
  "ditch-seepage": {
    more: [
      "Get the soil along the ditch from the NRCS soil survey or a few auger holes, measure the wetted perimeter at a typical flow (bottom width plus both wetted sides), pace or measure the length, and read the flow with a flume or float. Days of use come from the grower's records. Seepage rates by material come from Figure 5.8 and are approximate, so choose the middle of the band or enter a local ponding test value.",
      "The result is the seasonal loss in acre-feet, split into seepage and ditch-bank vegetation. Compare it to the cost of pipe or lining to get a payback. Buried pipe loses only 0.01 to 0.15 ft3/ft2/d, so most of the seepage loss is recovered. Wetted perimeter is the input people most often get wrong: measure it at the normal running depth. A ditch measured full will overstate the loss.",
      "Divide the total loss by the volume diverted to get an Ec for Eq. 5.19."
    ],
    qa: [
      { q: "My quarter-mile field ditch in loam carries 2.5 cfs for 180 days. What does it lose?", a: "With 2.5 ft2/ft wetted, 1,320 ft and 1.4 ft/d: seepage 19 ac-ft, vegetation 2.3 ac-ft, total 21.3 ac-ft per year, matching Example 5.6." },
      { q: "We have a half mile of ditch in gravelly sandy loam, 3 ft wetted, 4 cfs, 150 days.", a: "Pick sand, gravelly sandy loam (1.9 ft/d). Seepage is 52 ac-ft and vegetation 6 ac-ft, total about 58 ac-ft per year. That is a strong case for pipe." },
      { q: "If we pipe the loam ditch, how much do we still lose?", a: "Choose your own rate and enter 0.1 ft/d for buried pipe. Seepage drops from 19 to 1.4 ac-ft. Vegetation loss of 2.3 ac-ft also goes away once there is no open ditch, so the saving is about 20 ac-ft a year." }
    ],
    figs: ["5.8"]
  },
  "eq-5.20": {
    more: [
      "Net capacity is the peak crop water use the system must meet, from Table 5.3, Figure 5.11, or local ET records, minus any rain you can count on. ELQ comes from a test or a typical value (85% for pivots, 65 to 75% for set sprinklers, 90% for drip). Downtime covers maintenance, moving, and power-company load control, often 5 to 15%. 1 in/d equals 18.86 gpm/ac.",
      "Gross capacity is what the pump has to deliver per acre. Multiply by the area for the system flow. A corn pivot in the Great Plains is often designed at 6 to 7.5 gpm/ac gross. In humid areas where rain helps, 4.5 to 6 gpm/ac is common. Mixing in/d and gpm/ac is the most common error, so set the units on both fields before entering.",
      "The flow from here goes to Eq. 5.21 for conveyance losses, then to pump and well sizing in Chapters 8 and 9."
    ],
    qa: [
      { q: "The book's farm needs 5.7 gpm/ac net with 65% ELQ and 10% downtime on 80 acres. What flow does that field need?", a: "Cg is 9.7 gpm/ac and the field needs about 780 gpm, matching Example 5.8." },
      { q: "How many gpm do I need for corn on a 130 acre pivot if peak use is 0.30 inch a day?", a: "0.30 in/d is 5.66 gpm/ac. With 85% ELQ and 10% downtime, Cg is 7.4 gpm/ac and the pivot needs about 960 gpm." },
      { q: "A 40 acre drip block needs 0.25 inch a day. Drip ELQ 90%, 5% downtime.", a: "0.25 in/d is 4.72 gpm/ac. Cg is 5.5 gpm/ac and the block needs about 220 gpm." }
    ],
    figs: ["5.9", "5.10"]
  },
  "cn-from-flow": {
    more: [
      "Measure the flow at the pivot or well with an inline meter or a timed fill. Nameplate values run high since wells drop off over the season. Use the actual irrigated acres. ELQ and downtime are the same as in Eq. 5.20.",
      "The answer is the net in/d the system can keep up with. Compare it with peak ET for the crop: 0.30 to 0.35 in/d for corn in the western Plains, 0.25 to 0.28 in/d in humid areas. If net capacity is below peak ET, the soil has to supply the difference during hot spells, which is fine on deep silt loams but risky on sands. Figure 5.10 shows the soil water drawdown when capacity is short.",
      "Use the answer in Table 5.3 to compare with peak ET, and in the checkbook to see how far the soil will draw down in a hot week."
    ],
    qa: [
      { q: "My well makes 500 gpm on a 130 acre pivot. What can it keep up with?", a: "With 85% ELQ and no downtime, gross is 0.20 in/d and net is 0.17 in/d, as on p. 97. That is well below July corn ET, so he needs a full soil profile going into tassel." },
      { q: "My well makes 700 gpm. Can it keep up with corn on 160 acres in July?", a: "With 85% ELQ and 10% downtime, net capacity is 0.18 in/d. Peak corn use is near 0.30 in/d, so the soil has to make up about 0.12 in/d in hot weather. Plan to start early and keep the profile full." },
      { q: "A 900 gpm well on a 125 acre pivot. Is it big enough for 0.30 inch a day?", a: "With 85% ELQ and 5% downtime, net is 0.31 in/d. That matches peak corn ET, so the system can keep up with little help from the soil." }
    ],
    figs: ["5.10", "5.9"]
  },
  "eq-5.21": {
    more: [
      "Gross field flow comes from Eq. 5.20. Conveyance efficiency is measured with Eq. 5.19 or taken from Table 5.2. Buried pipe is close to 100%, lined ditch 90%, unlined field ditch 70 to 80%.",
      "The answer is the flow the well or headgate must deliver so the field still gets its gross flow after ditch losses. If the source cannot supply it, either the acres, the ELQ, or the conveyance has to improve. When there are several branches, each branch gets its own Ec, as in the farm capacity calculator.",
      "Take this flow to the pump curve and well drawdown work in Chapters 8 and 9."
    ],
    qa: [
      { q: "The field needs 780 gpm and the ditch is 80% efficient. What must the well pump?", a: "780 / 0.80 = 975 gpm, matching Field 1 in Example 5.8." },
      { q: "Same field, but on a 90% branch?", a: "780 / 0.90 = 867 gpm. The better ditch saves over 100 gpm of pumping." },
      { q: "We're feeding a 1,000 gpm pivot through 1,500 ft of buried pipe. Is it worth adding for losses?", a: "With 95% for an older pipeline, the well must deliver 1,053 gpm. A new tight pipeline is near 100%, so the difference is small." }
    ],
    figs: ["5.12"]
  },
  "farm-capacity": {
    more: [
      "Enter net capacity in in/d, ELQ and downtime for the farm, then list each field's acres and the conveyance efficiency of the branch that feeds it, plus the main canal efficiency. Values come from Table 5.2 if branches are not measured.",
      "The per-field lines show the gross flow each field needs and the flow at its branch head. The bottom line is the source flow. Compare branch losses to find the best place to spend on pipe or lining. The book rounds Cn to 5.7 gpm/ac and gets 2,050 gpm. The exact conversion gives about 2,030 gpm.",
      "Changing ELQ on all fields shows what a switch from furrows to pivots does to the well size."
    ],
    qa: [
      { q: "Can you check the book's two-field farm?", a: "With 0.30 in/d, 65% ELQ, 10% downtime, two 80 ac fields on 80% and 90% branches and a 90% main canal, the well needs about 2,030 gpm. The book rounds to 2,050." },
      { q: "We're adding a 40 acre field on a 95% pipeline branch. How big does the well have to be?", a: "Add 40 to areas and 95 to efficiencies. The new field needs 407 gpm at its branch, and the source requirement rises to about 2,480 gpm." },
      { q: "What if both 80 acre fields go to pivots at 85% ELQ?", a: "Change ELQ to 85. The source drops to about 1,550 gpm, nearly 500 gpm less than with furrows." }
    ],
    figs: ["5.12", "5.11"]
  },
  "tab-5.1": {
    more: [
      "CU comes from a catch-can test (Eq. 5.3) or CUH for a pivot. The table covers CU 70 to 98% and the calculator interpolates between the printed values.",
      "F1 is the share of the average infiltrated depth that stays in the root zone when the irrigation is planned so 90% of the area is adequately watered. One minus F1 is the share lost to deep percolation from nonuniformity. At CU 75% only 55% stays, at CU 90% it is 82%, and at CU 95% about 91%. The table assumes normally distributed depths, which holds well for sprinklers and less well for furrows.",
      "Use F1 in Eq. 5.14 and in the leaching procedure."
    ],
    qa: [
      { q: "With CU 84%, how much of my water goes below the roots just from unevenness?", a: "F1 is 0.71, so 29% of what infiltrates is lost to nonuniformity at 90% adequacy." },
      { q: "We got CU 91% on the pivot. The table jumps from 90 to 92.", a: "The calculator interpolates to F1 = 0.84, so about 16% is lost." },
      { q: "What would going from CU 75 to CU 95 do?", a: "F1 goes from 0.55 to 0.91. Losses from unevenness drop from 45% to 9% of the infiltrated water." }
    ],
    figs: ["5.7"]
  },
  "tab-5.2": {
    more: [
      "Choose the row that matches the project or the farm: the type of delivery (continuous or rotational), size of the project, size of the irrigated blocks, and whether field canals are lined or piped. These are planning values from Doorenbos and Pruitt (1977).",
      "Use the values when nobody has measured losses. They are averages, so a single field ditch in sand can be far worse than the table and a well kept lined canal better. Replace them with measured values from Eq. 5.19 as soon as you can.",
      "Feed the conveyance efficiency to Eq. 5.21 and both efficiencies to the project efficiency calculator."
    ],
    qa: [
      { q: "My blocks are bigger than 50 acres and the field canals are lined. What should I plan with?", a: "Table 5.2 gives 90% field canal efficiency for that case." },
      { q: "Same size blocks with unlined field ditches?", a: "80%. Lining would raise it to 90%, so 10 of every 100 acre-feet would reach the field that do not now." },
      { q: "A small farm under 50 acres with lined ditches?", a: "80% for field canal efficiency. Use that in the farm capacity calculator until you can measure it." }
    ],
    figs: ["5.12"]
  },
  "tab-5.3": {
    more: [
      "Maximum monthly crop ET comes from local weather station records or ET tables for the peak month, usually July. Allowable depletion is the net depth per irrigation, AD from Eq. 6.4. The table covers 1.0 to 6.0 in AD and 5 to 12 in/mo ET.",
      "The result is the peak daily ET to design for. A small AD means the soil cannot carry the crop through hot days, so the peak is higher than the monthly average. With 1 in AD and 10 in/mo, the peak is 0.42 in/d. With 4 in AD it is 0.37 in/d. Use this only when local peak data are not available, as the book says.",
      "The answer is the net capacity for Eq. 5.20 or the farm capacity calculator."
    ],
    qa: [
      { q: "A loam with 3 inches allowable depletion and July ET of 8 inches. What do I design for?", a: "Table 5.3 gives 0.30 in/d." },
      { q: "Sandy field, only 1 inch AD, 9 inches in July?", a: "0.37 in/d. The small soil reservoir pushes the design up compared with the 0.29 in/d monthly average." },
      { q: "Same 10 inch peak month, but 1.25 inches versus 4 inches AD?", a: "1.25 in AD gives 0.415 in/d and 4 in AD gives 0.37 in/d. A deeper soil buffer lowers the system you need." }
    ],
    figs: ["5.9", "5.11"]
  },
  "tab-5.4": {
    more: [
      "Pick the system types being considered. The table gives maximum slope, pressure needed at the system and labor in hours per acre per irrigation. Slope comes from a topo map or GPS survey. Pressure links to pump energy cost.",
      "Use it to narrow choices before detailed design. A field steeper than 2% rules out most furrow systems. A pivot can run 20 to 70 psi, a traveler 70 to 100 psi, which shows up directly on the power bill. Labor numbers matter when the grower is short-handed.",
      "Pair with Table 5.5 for soil, crop and wind factors, and take the pressure to the pump TDH work in Chapter 8."
    ],
    qa: [
      { q: "I'm thinking about a center pivot. What pressure and labor should I expect?", a: "Center pivot: slopes up to 10 to 20%, 20 to 70 psi, 0.05 to 0.15 hr/ac per irrigation." },
      { q: "How does that compare with my siphon tubes?", a: "Furrow with siphon tubes: 2% maximum slope, no pressure, but 1.0 to 1.5 hr/ac per irrigation. The pivot cuts labor by about ten times." },
      { q: "Would a traveler or drip be cheaper to run on my rolling field?", a: "Traveler: 5 to 15% slope, 70 to 100 psi. Point-source drip: no slope limit and 20 to 50 psi. Drip will cost less to pump." }
    ],
    figs: ["5.1", "5.2", "5.3"]
  }
});
