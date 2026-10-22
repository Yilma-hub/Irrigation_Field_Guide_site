window.CALC_USE2 = Object.assign(window.CALC_USE2 || {}, {
  "eq-10.1": {
    more: [
      "Gross volume comes from a flow meter on the supply, or from flow times set time (1 ac-in is 27,154 gal, and 450 gpm for 1 hr is about 1 ac-in). Infiltrated volume is the average infiltrated depth times the area of the set, with depth from a soil probe or soil moisture sensors before and after. Runoff can also be measured directly with a flume or a weir at the tail ditch, which gives a check on the balance.",
      "The result is what left the field as runoff. On open-ended furrows without recovery, 10 to 30% of the gross volume is common. If the balance comes out negative, the infiltration estimate is too high or the meter reads low. Surface storage is zero only after the water has fully receded, so measure after recession or include the water still standing in the furrows or basin.",
      "Divide each term by area to get the depth form in Eq. 10.2."
    ],
    qa: [
      { q: "I put 10 acre-inches on the set and figure 8.3 soaked in. How much ran off?", a: "Enter Vg = 10 ac-in, Vz = 8.3 ac-in and Vs = 0. Runoff is 1.7 ac-in, or 17% of what you pumped. That is about 46,000 gal you could catch with a reuse pit." },
      { q: "My meter shows 760 gpm for a 12 hour set on 70 furrows, 30 inch spacing, 1200 feet long. The probe says 3.5 inches went in. Where did the rest go?", a: "The set is 4.82 ac, so 760 gpm for 12 hr is 20.15 ac-in and 3.5 in over 4.82 ac is 16.87 ac-in. Enter those with Vs = 0 and runoff is 3.3 ac-in, about 89,000 gal, or 16% of the water pumped." },
      { q: "We cut off the basin inflow at 30 acre-inches. The probe shows 22 infiltrated and about 2 still ponded. How much left as runoff?", a: "Enter Vg = 30, Vz = 22 and Vs = 2 ac-in. Runoff is 6 ac-in so far. Most of the 2 ac-in still standing will soak in on a diked basin, so check again after recession." }
    ],
    figs: ["10.5"]
  },
  "eq-10.2": {
    more: [
      "Gross depth comes from Eq. 10.3, 10.4 or 10.5. Average infiltrated depth comes from soil water measurements before and after irrigation, or from the infiltration profile (Figure 10.11). On open-ended sloping furrows, the depth infiltrated at about 60% of the field length is a fair estimate of the average.",
      "Runoff depth and percent runoff show how much water leaves the field. Without recovery, 10 to 20% is acceptable on fine soils and closer to 30% is common on steeper or coarser fields. High runoff points to a stream that is too large or a set that is too long after advance. Use depths over the same area: dg is over the whole set, so dz must be the field average, not a reading near the head end.",
      "Runoff depth feeds the runoff ratio (Eq. 10.8), which is used in efficiency and reservoir sizing."
    ],
    qa: [
      { q: "We applied 4.2 inches and about 3.5 soaked in. How much ran off?", a: "Enter dg = 4.2 in, dz = 3.5 in and ds = 0. Runoff is 0.7 in, 17% of the application, as in Example 10.1." },
      { q: "On my steeper field we applied 5.6 inches and only 3.9 went in. Is that too much runoff?", a: "Enter 5.6, 3.9 and 0. Runoff is 1.7 in, 30% of the water. Without a reuse pit, cut the set time after advance or reduce the stream size." },
      { q: "After we shortened the sets, gross depth dropped to 3.0 inches with 2.6 infiltrated. Did it help?", a: "Enter 3.0, 2.6 and 0. Runoff is 0.4 in, 13%, down from 17%. Check the low quarter depth to make sure the tail end still got enough." }
    ],
    figs: ["10.5", "10.11"]
  },
  "eq-10.3": {
    more: [
      "Measure stream size at a few furrows with a bucket and stopwatch, a calibrated siphon tube chart or a small flume, and average them. Set time is from the start of water to cutoff. Watered furrow spacing is the row spacing, or twice the row spacing when every other furrow is irrigated. Length is from the gate to the end of the furrow.",
      "The result is the average depth applied along that furrow. For most row crops, 3 to 5 in per irrigation is typical on medium soils. A number much above the soil water deficit means water will go to runoff or deep percolation. A common mistake is using the row spacing when only every other furrow is watered, which doubles the computed depth.",
      "For a full set fed from one supply, Eq. 10.4 uses total inflow and number of furrows directly."
    ],
    qa: [
      { q: "Each furrow gets about 10.9 gpm for 12 hours on 30 inch rows a quarter mile long. How much am I putting on?", a: "Enter qs = 10.86 gpm, tco = 12 hr, W = 30 in and L = 1200 ft. Gross depth is 4.2 in, the same as Example 10.1." },
      { q: "I water every other furrow at 15 gpm for 12 hours, 30 inch rows, 1300 feet. What depth is that?", a: "Enter qs = 15 gpm, tco = 12 hr, W = 60 in and L = 1300 ft. Gross depth is 2.7 in. Using 30 in by mistake would give 5.3 in." },
      { q: "On short 660 foot furrows the grower runs 8 gpm for 24 hours. Is that too much?", a: "Enter 8 gpm, 24 hr, 30 in and 660 ft. Gross depth is 11.2 in, two to three times a normal irrigation. Shorten the set to 8 to 12 hr or reduce the stream." }
    ],
    figs: ["10.2", "10.8"]
  },
  "eq-10.4": {
    more: [
      "Total inflow comes from the pump meter, plus any water returned from a reuse pit. Count the open gates or siphons for the number of furrows per set. Set time is from water on to water off for that set.",
      "The result is the average gross depth over the set. Compare it with the soil water deficit, typically 2 to 4 in when irrigating at 50% depletion on medium soils. A depth well above the deficit means runoff and deep percolation, and the fix is a shorter set or more furrows. When reused runoff is added to the field, include it in total inflow.",
      "This is the gross depth used in efficiency (Eqs. 10.6 and 10.7) and in the furrow set design procedure."
    ],
    qa: [
      { q: "I have 760 gpm on 70 furrows for 12 hours, 30 inch rows, 1200 feet long. What did each set get?", a: "Enter 760 gpm, 12 hr, 70 furrows, 30 in and 1200 ft. Gross depth is 4.2 in, as in Example 10.1." },
      { q: "If I close down to 44 furrows to speed up advance, how much more water does the set get?", a: "Enter the same with N = 44. Gross depth rises to 6.65 in, the Example 10.4 value. With a 3.4 in deficit that is too much, so shorten the set as well." },
      { q: "A grower runs 1000 gpm on 80 furrows for 8 hours on 30 inch rows, 1320 feet long. Is that a reasonable depth?", a: "Enter 1000 gpm, 8 hr, 80 furrows, 30 in and 1320 ft. Gross depth is 2.9 in, reasonable for a 2 to 3 in deficit on a medium soil." }
    ],
    figs: ["10.1", "10.2"]
  },
  "eq-10.5": {
    more: [
      "Inflow comes from the meter or the turnout rating. Cutoff time is how long water runs into the border or basin. Width and length come from the field layout or GPS. Borders are commonly 30 to 100 ft wide and 300 to 1300 ft long, and level basins range from a fraction of an acre to 40 acres or more.",
      "The result is the average depth applied. On level basins with good leveling, nearly all of it infiltrates, so it should match the deficit. On graded borders, some runs off at the end. A depth far over the deficit means the cutoff is late. The constant 96.3 assumes gpm, hr and ft, so convert cfs to gpm first (1 cfs is 448.8 gpm).",
      "Use the gross depth with the volume balance (Eq. 10.1) and in efficiency checks."
    ],
    qa: [
      { q: "My border strip is 60 by 600 feet and gets 1000 gpm. How long should I run it to put on about 5 inches?", a: "Enter 1000 gpm, 2 hr, 60 ft and 600 ft. Gross depth is 5.35 in, so about 2 hr is right. At 4 hr it would be 10.7 in." },
      { q: "We run 2000 gpm into a 100 by 1320 foot border for 3.5 hours. What does it get?", a: "Enter 2000 gpm, 3.5 hr, 100 ft and 1320 ft. Gross depth is 5.1 in. Check how much reaches the end before cutoff and how much runs off." },
      { q: "A level basin is 330 by 330 feet. With 3000 gpm for 2 hours, how deep is the application?", a: "Enter 3000 gpm, 2 hr, 330 ft and 330 ft. Gross depth is 5.3 in over the 2.5 ac basin. On a level basin most of that should stay in the field." }
    ],
    figs: ["10.1"]
  },
  "eq-10.6-10.7": {
    more: [
      "The low quarter depth comes from soil water measurements in the quarter of the field that got the least water, usually the tail end of open furrows, or from Eq. 10.12. Soil water deficit comes from a soil probe, sensors or the checkbook schedule. Gross depth comes from Eq. 10.4. The runoff ratio comes from Eq. 10.8 or Table 10.4, and the return ratio is the share of runoff that gets back to a field, often 0.8 to 0.9 after pit evaporation and seepage.",
      "ELQ is the share of applied water that is stored in the root zone of the low quarter. Open furrows without recovery commonly run 50 to 70%, with a closed reuse system 70 to 85%. Effective depth is the smaller of the low quarter depth and the deficit, so applying more than the deficit lowers ELQ. Choose closed recovery (Eq. 10.6) when runoff goes back to the same field and open recovery (Eq. 10.7) when it goes to another field.",
      "For a quick comparison across cutoff ratios, use the efficiency curves (Figures 10.14 to 10.16)."
    ],
    qa: [
      { q: "How efficient is my furrow irrigation with 4.2 inches applied, 2.8 in the low quarter and a 3.4 inch deficit?", a: "Enter dLQ = 2.8, SWD = 3.4 and dg = 4.2 in with no recovery. Effective depth is 2.8 in and ELQ is 67%, as in Example 10.1." },
      { q: "If I add a reuse pit and pump the runoff back on the same field, what does efficiency go to?", a: "Same inputs with closed recovery, Rr = 0.17 and Rt = 0.85. ELQ rises to 78%, as in Example 10.2. If the pit water goes to another field instead, ELQ is 76% (Example 10.3)." },
      { q: "We cut to 44 furrows and now apply 6.65 inches with 4.1 in the low quarter. Why did efficiency drop?", a: "Enter dLQ = 4.1, SWD = 3.4, dg = 6.65, Rr = 0.32 and closed recovery. Effective depth is capped at 3.4 in and ELQ is 70%. With no recovery it would be 51%. The set now applies more than the soil can hold, so shorten it." }
    ],
    figs: ["10.11", "10.12"]
  },
  "eq-10.8": {
    more: [
      "Runoff depth comes from Eq. 10.2 or from a flume or weir reading at the tail ditch divided by the set area. Gross depth comes from Eq. 10.3 or 10.4. Both must be over the same area and the same set.",
      "The runoff ratio is the fraction of applied water that runs off. On sloping furrows it ranges from under 0.1 on fine soils with a long cutoff ratio to over 0.5 on coarse soils with a short one (Table 10.4). For reservoir sizing, use a high value of 0.30 to 0.40 so the pit is not overrun.",
      "The ratio goes into efficiency (Eqs. 10.6 and 10.7) and reservoir sizing (Eqs. 10.13 and 10.14)."
    ],
    qa: [
      { q: "We measured 0.7 inch of runoff from a 4.2 inch irrigation. What is the runoff ratio?", a: "Enter 0.7 and 4.2 in. Rr is 0.17, the Example 10.2 value." },
      { q: "My steep field ran off 1.7 inches of a 5.6 inch set. What ratio do I use for a reuse pit?", a: "Enter 1.7 and 5.6 in. Rr is 0.30. Since that was measured on one set, size the pit with 0.35 to 0.40 to allow for wetter conditions." },
      { q: "After we cut to 44 furrows the flume showed 2.1 inches of runoff on 6.65 applied. Does that match the table?", a: "Enter 2.1 and 6.65 in. Rr is 0.32, matching Table 10.4 for a medium soil at a cutoff ratio of 0.4." }
    ],
    figs: ["10.5", "10.11"]
  },
  "eq-10.9": {
    more: [
      "Total inflow comes from the pump or turnout meter. The number of furrows is the open gates or siphons in the set. The answer assumes the flow splits evenly, so check a few furrows with a bucket and stopwatch.",
      "Stream size controls advance time: a larger stream reaches the end faster. Typical furrow streams are 5 to 30 gpm. Compare with the maximum nonerosive stream (Eq. 10.10) and with the Table 10.6 recommendation for the soil. On gated pipe, the gates near the inlet often run 20 to 30% more than those at the far end, so set gate openings with that in mind.",
      "Use the stream size with set time in Eq. 10.3, or use the furrow set design procedure to choose the number of furrows."
    ],
    qa: [
      { q: "I have 760 gpm and want to run 26 furrows. How much does each get?", a: "Enter 760 gpm and 26 furrows. Each gets 29 gpm, as in Example 10.5. Check that against the nonerosive limit for your slope." },
      { q: "If I run 44 furrows with the same 760 gpm, what is the stream?", a: "Enter 760 gpm and 44 furrows. Each gets 17 gpm, the book's value for the faster advance case." },
      { q: "The new well gives 1200 gpm. If I open 80 gates, will the stream stay under 20 gpm for my 0.5% slope?", a: "Enter 1200 gpm and 80 furrows. Each gets 15 gpm. At 0.5% slope, Eq. 10.10 gives 20 gpm as the maximum, so 80 furrows is fine." }
    ],
    figs: ["10.2", "10.8"]
  },
  "eq-10.10": {
    more: [
      "Field slope in the direction of the furrows comes from a survey, laser level, RTK GPS or the land leveling plan. Use the slope at the steepest part of the run if it varies. Furrow slopes are usually 0.1 to 1%.",
      "The result is the largest stream that should not cause serious erosion. At 0.4% slope that is 25 gpm, at 1% it is 10 gpm. Erosion risk also depends on soil: silt loams erode more than clays at the same stream. Above this limit, use more furrows, polyacrylamide (PAM), or reduce the slope. On very flat fields the limit is high, and furrow capacity or overtopping becomes the real limit.",
      "Compare this limit with the stream from Eq. 10.9 and the Table 10.6 recommendation."
    ],
    qa: [
      { q: "My field has 0.4% slope. Is a 30 gpm stream too much?", a: "Enter 0.4%. The maximum nonerosive stream is 25 gpm, so 30 gpm will cut the furrows. Open more gates to bring the stream down." },
      { q: "We have a 1% slope field. What stream can we use?", a: "Enter 1%. The limit is 10 gpm per furrow. Long furrows may not reach the end at that stream, so shorter runs or PAM are worth considering." },
      { q: "Example 10.5 runs 29 gpm per furrow on a 0.3% slope. Is that OK?", a: "Enter 0.3%. The limit is 33 gpm, so 29 gpm is under it. Watch the head end for erosion during the first irrigation." }
    ],
    figs: ["10.4"]
  },
  "eq-10.11": {
    more: [
      "Advance time is from water on to water reaching the end of the furrow. Walk the field or use a sensor at the end of a few representative furrows. Cutoff time is the set time the grower uses.",
      "The cutoff ratio is the share of the set time needed to reach the end. A high ratio, near 0.9, means little runoff but poor uniformity at the tail. A low ratio, under 0.4, means good uniformity and more runoff. Table 10.5 gives the best ratio for each soil and runoff system: 0.2 on coarse soils with closed recovery up to 0.9 on fine soils without recovery, and 0.65 to 0.95 for blocked end furrows.",
      "The cutoff ratio drives the infiltration factor and runoff ratio in Tables 10.3 and 10.4, and the efficiency curves (Figures 10.14 to 10.16)."
    ],
    qa: [
      { q: "Water takes 9 hours to reach the end on a 12 hour set. What is my cutoff ratio?", a: "Enter tL = 9 hr and tco = 12 hr. CR is 0.75. For a medium soil with a closed reuse system, Table 10.5 recommends 0.4, so the advance is too slow." },
      { q: "On a 6 hour set the water got to the end in 2.4 hours. Is that right?", a: "Enter 2.4 and 6 hr. CR is 0.40, the target in Example 10.5 for a medium soil with a closed reuse system." },
      { q: "My clay field takes 11 hours to advance on a 12 hour set, no reuse pit. Should I change?", a: "Enter 11 and 12 hr. CR is 0.92, close to the 0.90 recommended for fine soils without reuse. That is the right range for this field." }
    ],
    figs: ["10.7", "10.13"]
  },
  "eq-10.12": {
    more: [
      "Gross depth comes from Eq. 10.4. Choose the texture class: fine for clays and clay loams, medium for silts, silt loams and loams, coarse for sandy loams and fine sands. The cutoff ratio comes from Eq. 10.11 using a measured advance time.",
      "The infiltration factor is the share of gross depth that infiltrates in the low quarter. It ranges from about 0.2 to 0.74 in Table 10.3. The low quarter depth should at least match the soil water deficit. If it is well below, the tail end stays dry. If it is well above, water goes to deep percolation. The table assumes advance time is longer than recession time, which holds for most sloping furrows.",
      "The low quarter depth goes into efficiency (Eqs. 10.6 and 10.7)."
    ],
    qa: [
      { q: "I applied 4.2 inches on a silt loam with a cutoff ratio of 0.75. How much did the low quarter get?", a: "Choose medium, enter 4.2 in and 0.75. The infiltration factor is 0.70 and the low quarter depth 2.9 in, the book's Section 10.5 value." },
      { q: "With 44 furrows we apply 6.65 inches at a cutoff ratio of 0.4. What reaches the low quarter?", a: "Medium soil, 6.65 in and 0.4. The factor is 0.62 and the low quarter depth 4.1 in, as in Example 10.4. That is above a 3.4 in deficit." },
      { q: "On my clay we put on 4 inches with a cutoff ratio of 0.9. Is the tail end getting enough?", a: "Choose fine, enter 4 in and 0.9. The factor is 0.74 and the low quarter depth 3.0 in. If the deficit is 3 in or less, the tail end is fully refilled." }
    ],
    figs: ["10.11", "10.15"]
  },
  "eq-10.13-10.14": {
    more: [
      "Use a high runoff ratio, 0.30 to 0.40, so the reservoir does not overflow. Cutoff time is the set time in minutes. Inflow is the flow from the original source, from the meter. F is 1 when runoff returns to the field it came from and 0 when it goes to another field.",
      "The volume is the active storage needed for one set with a continuous return pump. Convert gallons to acre-feet by dividing by 325,851, or to cubic feet by dividing by 7.48. Add freeboard and dead storage for sediment, and size the reservoir for the largest set and the steepest field it serves. The pump capacity is the flow to return that volume over one set time.",
      "The runoff ratio comes from Eq. 10.8 or Table 10.4. Figure 10.18 shows a reservoir and a sump."
    ],
    qa: [
      { q: "How big a pit do I need for 500 gpm on 6 hour sets with the water going back to the same field?", a: "Enter Rr = 0.30, 360 min, 500 gpm and F = 1. Active volume is 77,143 gal, about 10,300 ft³ or 0.24 ac-ft, and the return pump needs 214 gpm, as in Example 10.6." },
      { q: "What if the runoff goes to a neighboring field instead?", a: "Same inputs with F = 0. Volume drops to 54,000 gal and the pump to 150 gpm, because the field of origin does not get extra water that generates more runoff." },
      { q: "We run 900 gpm on 12 hour sets on a steep field. What reservoir and pump do I need?", a: "Enter Rr = 0.35, 720 min, 900 gpm and F = 1. Volume is 348,900 gal, about 1.07 ac-ft, and the pump 485 gpm. Add freeboard and sediment space." }
    ],
    figs: ["10.12", "10.18"]
  },
  "tab-10.1": {
    more: [
      "This table is the book's example data set: advance, recession, opportunity time and infiltration along a 1200 ft furrow. To collect the same data, flag stations every 200 to 300 ft and record when water arrives and leaves each one. Infiltration comes from an infiltration curve (Figure 10.10) at the opportunity time.",
      "Opportunity time is recession minus advance, and infiltration follows it. In this example, the head of the field gets 12 hr and 4.2 in, and the end only 4 hr and 2.4 in. That gap is what makes the tail end the low quarter. Reading values at any distance helps explain where deep percolation and under irrigation occur.",
      "Use this table with Figures 10.7, 10.9, 10.10 and 10.11 to explain the profile to a grower."
    ],
    qa: [
      { q: "In the book's example, how much water does a spot 720 feet down the furrow get?", a: "Enter 720 ft. Advance is 3.8 hr, recession 12.6 hr, opportunity time 8.8 hr and infiltration 3.4 in." },
      { q: "How much less does the end of the field get compared to the head?", a: "Enter 0 ft and then 1200 ft. The head gets 4.2 in with 12 hr of opportunity time, the end 2.4 in with 4 hr. The end gets about 57% of the head." },
      { q: "Where does deep percolation start if the deficit is 3.6 inches?", a: "Enter 450 ft and infiltration is 3.8 in, above the deficit. Infiltration is 3.6 in at 600 ft, so the first 600 ft lose water to deep percolation and the rest is under irrigated." }
    ],
    figs: ["10.7", "10.9", "10.10", "10.11"]
  },
  "tab-10.2": {
    more: [
      "Measure advance time on the current set and count the furrows. Choose the desired advance time from Table 10.5: the recommended cutoff ratio times the set time. Pick the soil texture.",
      "The correction factor tells you how many furrows to water so the advance hits the target with the same supply. Fewer furrows mean larger streams and faster advance. The factor is not linear because a larger stream also infiltrates more along the way. Check that the new stream stays below the nonerosive limit (Eq. 10.10).",
      "This is the second step of the furrow set design procedure. The new furrow count goes into Eq. 10.4 for gross depth."
    ],
    qa: [
      { q: "Water takes 9 hours to advance on 70 furrows. How many should I run for a 4.8 hour advance?", a: "Enter 4.8 and 9 hr, medium soil, 70 furrows. The ratio is 0.53, the factor 0.63, and the answer 44 furrows, the book's value." },
      { q: "We now advance in 4.8 hours on 44 furrows. How many for 2.4 hours?", a: "Enter 2.4 and 4.8 hr, medium soil, 44 furrows. The factor is 0.6 and the answer 26 furrows, as in Example 10.5." },
      { q: "On a clay field, advance is only 6 hours on 40 furrows but I want it at 10.8 hours. How many can I open?", a: "Enter 10.8 and 6 hr, fine soil, 40 furrows. The ratio is 1.8, the factor 1.9, and you can open 76 furrows." }
    ],
    figs: ["10.7", "10.8"]
  },
  "tab-10.3-10.4": {
    more: [
      "Enter the cutoff ratio from Eq. 10.11 and choose the soil texture class. Both tables assume sloping furrows where advance time is longer than recession time.",
      "The infiltration factor is the low quarter depth as a share of gross depth. The runoff ratio is the share that runs off. As the cutoff ratio falls, the infiltration factor rises at first and runoff rises steadily. Coarse soils have less runoff at a given cutoff ratio because water soaks in quickly. Use the infiltration factor for Eq. 10.12 and the runoff ratio for Eqs. 10.6, 10.7 and 10.13.",
      "Figures 10.14 to 10.16 plot the efficiency that results from these two values."
    ],
    qa: [
      { q: "At a cutoff ratio of 0.4 on a silt loam, what infiltration factor and runoff ratio do I use?", a: "Enter 0.4, medium soil. The factor is 0.62 and the runoff ratio 0.32, the values in Example 10.4." },
      { q: "We run a 0.75 cutoff ratio on a silt loam. How much runs off?", a: "Enter 0.75, medium soil. The runoff ratio is 0.10 and the infiltration factor 0.70." },
      { q: "A sandy loam has a cutoff ratio of 0.2. What does the table give?", a: "Enter 0.2, coarse soil. The factor is 0.61 and the runoff ratio 0.36. That much runoff only pays off with a closed reuse system." }
    ],
    figs: ["10.14", "10.15", "10.16"]
  },
  "tab-10.5": {
    more: [
      "Choose the runoff system: no reuse, closed reuse (back to the same field), open reuse (to another field), or blocked ends at low or moderate slope. Pick the soil texture and the set time the grower uses.",
      "The recommended cutoff ratio is where efficiency peaks in Figures 10.14 to 10.16. The target advance time is that ratio times the set time. Without reuse, advance should be slow so little runs off. With closed reuse, faster advance gives better uniformity because the runoff comes back. Blocked end furrows use the highest cutoff ratios because the end is diked.",
      "Use the target advance time in Table 10.2 to find the furrows per set."
    ],
    qa: [
      { q: "With a closed reuse pit on a silt loam and 12 hour sets, when should water reach the end?", a: "Pick closed reuse, medium soil and 12 hr. The cutoff ratio is 0.40 and the target advance time 4.8 hr." },
      { q: "We have no reuse pit. Same soil and set time. What is the target?", a: "Pick no reuse, medium soil and 12 hr. The ratio is 0.70 and the target advance 8.4 hr." },
      { q: "A clay field with blocked ends at low slope runs 24 hour sets. What advance should I aim for?", a: "Pick blocked ends at low slope, fine soil and 24 hr. The ratio is 0.95 and the target 22.8 hr, nearly the whole set." }
    ],
    figs: ["10.14", "10.15", "10.16", "10.17"]
  },
  "tab-10.6": {
    more: [
      "Identify the soil texture from the NRCS Web Soil Survey or a soil test. Measure furrow length and slope from a survey or GPS. This table is meant for the first season of furrow irrigation on a new field, before advance data exist.",
      "The output gives the basic infiltration rate, the maximum furrow length for the soil and the recommended stream for your length. Sandy soils need short runs and large streams, while silty clay loams can handle long runs with small streams. If the recommended stream is above the nonerosive limit, shorten the run. After the first irrigation, switch to the furrow set design procedure with measured advance times.",
      "The stream check uses Eq. 10.10."
    ],
    qa: [
      { q: "I am starting furrow irrigation on a silt loam with 1000 foot furrows and 0.3% slope. What stream should I use?", a: "Pick silt loam, 1000 ft and 0.3%. The maximum length is 1100 ft and the recommended stream 22 gpm, below the 33 gpm nonerosive limit. Start there and adjust after the first set." },
      { q: "Can I run 800 foot furrows on loamy sand at 0.5% slope?", a: "Pick loamy sand, 800 ft and 0.5%. The maximum length is 600 ft, and the 38 gpm recommended stream is above the 20 gpm erosion limit. Shorten the run to 600 ft or consider a sprinkler." },
      { q: "We want quarter mile furrows on silt loam at 0.5% slope. Will that work?", a: "Pick silt loam, 1320 ft and 0.5%. The maximum is 1100 ft, and the recommended stream is 29 gpm against a 20 gpm limit. Split the field with a mid-field gated pipe." }
    ],
    figs: ["10.4", "10.6"]
  },
  "tab-10.7": {
    more: [
      "The first cycle on time is how long water takes to cover the first quarter (four cycles) or sixth (six cycles) of the field. Measure it on the first surge. The return interval is the time until the valve switches to the next set, which covers both sides of the surge valve.",
      "The schedule gives on time for each cycle on each side. Later advance cycles get longer because wetted soil infiltrates less. Once water reaches the end, cutback cycles keep water on the field with less runoff. If advance cycles use up the whole return interval, the first cycle is too long or the set is too short. Surge commonly cuts advance time and applied water by 10 to 40% on silty soils that seal well.",
      "The book's Example 10.7 follows these steps. Figures 10.19 and 10.20 show surge valves."
    ],
    qa: [
      { q: "My first surge gets water a quarter of the way down in 30 minutes, and I change sets every 12 hours. What schedule do I set?", a: "Enter 30 min, four cycles and 720 min. Advance cycles are 30, 57, 72 and 87 min each side, 492 min total. Then 3 cutback cycles of 38 min each side, as in Example 10.7." },
      { q: "Can I use six surge cycles with 20 minutes on the first one?", a: "Enter 20 min, six cycles and 720 min. Advance cycles are 20, 38, 48, 58, 66 and 74 min, using 608 min. One cutback cycle of 56 min fills the rest, a factor of 2.8, within the table." },
      { q: "My first cycle takes 45 minutes and I switch every 10 hours. Will four cycles work?", a: "Enter 45 min, four cycles and 600 min. The advance cycles alone need 738 min, more than the interval. Lengthen the set or use more furrows per side so the first cycle is shorter." }
    ],
    figs: ["10.19", "10.20"]
  },
  "fig-10.14-10.16": {
    more: [
      "Enter the cutoff ratio from Eq. 10.11, pick the soil texture, the runoff recovery system and the return ratio. The curves assume the low quarter depth is no more than the soil water deficit.",
      "The output gives ELQ at your cutoff ratio, and the cutoff ratio that gives the highest ELQ. Without recovery, efficiency peaks at a high cutoff ratio. With closed recovery it peaks at a low one, around 0.3 to 0.4. The curves are fairly flat near the peak, so being within 0.1 of the best ratio usually costs only a few points.",
      "Use the best cutoff ratio from Table 10.5 or this curve in the furrow set design procedure."
    ],
    qa: [
      { q: "With a closed reuse system on a silt loam at a 0.4 cutoff ratio, what efficiency can I expect?", a: "Enter 0.4, medium soil, closed recovery and Rt = 0.85. ELQ is 85%. The best ratio is 0.3 at 86%, so 0.4 is close to the top." },
      { q: "No reuse pit, silt loam, and water reaches the end at 75% of the set. How efficient is that?", a: "Enter 0.75, medium soil, no recovery. ELQ is 70%, and the best ratio is 0.7 with the same 70%. Little to gain here without adding reuse." },
      { q: "My reuse pit only returns 60% of the runoff. Does that change the target?", a: "Enter 0.4, medium soil, closed recovery and Rt = 0.6. ELQ drops to 77%, and the best ratio moves to 0.6. A leaky or evaporating pit pushes you back toward a slower advance." }
    ],
    figs: ["10.13", "10.14", "10.15", "10.16"]
  },
  "proc-furrow-set": {
    more: [
      "Collect total inflow from the meter, furrow spacing, length and slope, soil texture, whether there is a reuse system, and the soil water deficit at irrigation. Run a trial set and record the number of furrows and the advance time to the end. Enter the set time that fits the grower's labor schedule.",
      "The procedure gives the target cutoff ratio and advance time, the number of furrows per set, the stream size and erosion check, gross and low quarter depths, and ELQ. If the check says dLQ exceeds SWD, the set is applying more than the soil can hold: shorten the set, irrigate less often so the deficit is larger, or water every other furrow. If the stream is above the erosion limit, use more furrows or a shorter run.",
      "This follows the Section 10.5 text and Examples 10.4 and 10.5, using Tables 10.2 to 10.5 and Eqs. 10.4, 10.6, 10.7 and 10.9 to 10.12."
    ],
    qa: [
      { q: "My trial set ran 70 furrows with a 9 hour advance on 12 hour sets, silt loam, closed reuse. How should I change it?", a: "Enter the defaults: 760 gpm, 30 in rows, 1200 ft, 0.3% slope, 3.4 in deficit. The target is a 0.4 cutoff ratio, 4.8 hr advance, 44 furrows at 17 gpm. Gross depth is 6.65 in and ELQ 70%. The check says dLQ exceeds SWD, so shorten the set as in Example 10.5." },
      { q: "Same field without a reuse pit. What changes?", a: "Enter no recovery. The target cutoff ratio is 0.7, advance 8.4 hr, 65 furrows at 11.7 gpm. Gross depth is 4.5 in, low quarter 3.15 in and ELQ 70%. The set fits the 3.4 in deficit." },
      { q: "On sandy loam with no reuse, 900 gpm and 60 furrows advance in 6 hours on an 8 hour set, but the deficit is only 2.5 inches. What do I do?", a: "Enter coarse soil, no recovery, 900 gpm, 1300 ft, 0.5% slope, 60 furrows, 6 hr advance and 8 hr set. You get 52 furrows at 17 gpm, but 4.1 in gross and 3.0 in in the low quarter, above the deficit, with ELQ 61%. Watering every other furrow (W = 60 in) drops gross depth to 2.05 in and raises ELQ to 72%." }
    ],
    figs: ["10.14", "10.15", "10.16", "10.8"]
  }
});
