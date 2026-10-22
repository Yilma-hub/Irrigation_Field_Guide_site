window.CALC_USE2 = Object.assign(window.CALC_USE2 || {}, {
  "eq-3.1-3.2": {
    more: [
      "Volume comes from a flow meter totalizer, a ditch company delivery record, or a well permit report, and area comes from FSA maps, the pivot computer, or a GIS outline. Keep the units paired: acre-inches over acres gives inches. Table 3.1 has the conversions you will use most: 1 ac-in = 27,154 gal = 3,630 ft³, and 1 ac-ft = 12 ac-in = 325,851 gal.",
      "The answer is the gross depth applied, averaged over the whole area. It is not what reached the root zone, since runoff, drift, evaporation and nonuniform coverage all take a share. Compare it with the soil water deficit divided by application efficiency. A pivot corner arm or end gun that turns on and off changes the irrigated area, so use the area actually watered during that period. Do not divide acre-feet by acres and call the answer inches.",
      "If you have totalizer readings, use the meter-depth calculator. If you only know flow rate and run time, use Eq. 3.3."
    ],
    qa: [
      { q: "The ditch company says we got 260 acre-inches on the 130 acre field. How much is that?", a: "Enter 260 ac-in and 130 ac. That is 2.0 in gross. If furrow application efficiency is around 60%, about 1.2 in actually stayed in the root zone." },
      { q: "I have 10 acre-feet left on my allocation and a 125 acre pivot. What does that buy me?", a: "10 ac-ft is 120 ac-in. Enter 120 and 125 ac and you get 0.96 in over the field. That is about one pass at 1 in, so save it for the stage the crop can least afford to lose, usually tasseling and silking for corn." },
      { q: "We pumped a million gallons on the 40 acre orchard last week. Is that a lot?", a: "1,000,000 gal is 36.8 ac-in (Table 3.1). Enter 36.8 ac-in and 40 ac and you get 0.92 in for the week. Peak orchard ET runs 1.5 to 2 in a week in hot weather, so that block is likely running short." }
    ],
    figs: ["3.1"]
  },
  "meter-depth": {
    more: [
      "Read the totalizer before and after the irrigation, or at the same time each week, and write down the units and multiplier printed on the register face. Registers read in gallons, acre-inches, acre-feet or cubic feet, and many show a multiplier such as x10 or x1000 (Figure 3.6). The area is the acreage watered between the two readings.",
      "The result is the average gross depth over the area. Book Example 3.2 gives 1.5 in from 3,665,800 gal on 90 ac. A depth that looks far too small or too big usually means the multiplier was missed or the register units were read wrong. A propeller meter only reads right with the pipe running full and about 10 pipe diameters of straight pipe upstream and 1 downstream, so check the installation before you blame the grower.",
      "Use the result as the gross irrigation term in the water balance (Eq. 4.1) and to check that the pivot's percent timer setting actually delivers the depth you planned."
    ],
    qa: [
      { q: "The meter read 45,210,300 before and 49,600,900 after the pass on my 126 acre pivot. How much did I put on?", a: "Enter both readings and 126 ac. The volume is 4,390,600 gal and the depth is 1.28 in. If you set the pivot for 1.25 in, it is applying about what you asked for." },
      { q: "My meter went from 1,000.0 to 1,250.0 over the week on an 80 acre field. That can't be right, can it?", a: "Look at the register face. If it reads in thousands of gallons, the volume is 250,000 gal, not 250. Enter 1,000,000 and 1,250,000 gal with 80 ac and you get 0.12 in, which still looks low for a week of pumping. Check whether the meter stopped or the pump ran fewer hours than he thought." },
      { q: "We are logging water for the cost-share drip block, 5 acres. Readings 2,885,000 and 3,020,000 gallons. What depth goes in the report?", a: "Enter both readings and 5 ac. The volume is 135,000 gal and the depth is 0.99 in over the block. Report it with the dates of both readings." }
    ],
    figs: ["3.5", "3.6", "3.8"]
  },
  "eq-3.3": {
    more: [
      "Flow rate comes from a meter, a pump test, or the design sheet, and run time from the panel, a timer, or the pivot computer log. The handy field conversion from Table 3.1 is 450 gpm = 1 ac-in/hr. The calculator uses the exact 452.6 gpm, so its answers can differ from hand work by about half a percent.",
      "The result is the gross depth over the area for that run time, assuming steady flow. For a center pivot, 24 hours of flow divided by the field area is the system capacity in in/d, and you compare it with peak ET. A pivot at 800 gpm on 126 ac supplies only 0.34 in/d, which barely meets a 0.32 in/d peak ET once losses are counted. Flow drops when the water table falls during summer, so use a flow measured this season.",
      "Rearranged, the same relation gives run time (run-time calculator) and application intensity (Eq. 3.4)."
    ],
    qa: [
      { q: "My well puts out 800 gpm on a 126 acre pivot. Can it keep up with corn in July?", a: "Enter 800 gpm, 24 hr, 126 ac. The pivot applies 0.34 in/d gross. At 85% efficiency that is about 0.29 in/d net against peak corn ET of 0.30 to 0.35 in/d. It falls behind in hot spells, so start the season with a full profile and do not let it get ahead of you." },
      { q: "The book example: 900 gpm on 30 acres every 24 hours. What depth is that?", a: "Enter 900 gpm, 24 hr, 30 ac. The calculator returns 1.59 in. The book gets 1.6 in by rounding to 450 gpm per ac-in/hr." },
      { q: "We run the 1,200 gpm pump 12 hours a night on 80 acres of off-peak power. How much water goes on per night?", a: "Enter 1,200 gpm, 12 hr, 80 ac. You get 0.40 in per night, or about 2.8 in a week if it runs every night. At 85% efficiency that is about 0.34 in/d net, enough for most crops at peak." }
    ],
    figs: ["3.1"]
  },
  "run-time": {
    more: [
      "Enter the measured flow, the area to cover, the gross depth wanted (net deficit divided by application efficiency), and how many hours a day the system can actually run. Load control, off-peak power, or labor for set changes all cut the hours per day below 24.",
      "Hours is the pumping time needed to apply that gross depth, and days spreads it over the hours you can run. If the days needed are longer than the time before the soil reaches the allowable depletion, the system cannot keep up and you need to start earlier or apply less each time. The common error is entering net depth, which makes the run time too short by the application efficiency.",
      "The gross depth comes from Eq. 2.12 or 2.13 divided by efficiency. Use meter-depth afterward to check what was actually applied."
    ],
    qa: [
      { q: "How long does it take my 1,000 gpm pivot to put an inch on 126 acres?", a: "Enter 1,000 gpm, 126 ac, 1 in, 24 hr/d. It needs 57 hours, or 2.4 days of continuous running. That is about a 2.4 day revolution at 1 in." },
      { q: "The power company has us on load control. We get about 20 hours a day. How long now?", a: "Same entry with 20 hr/d. Still 57 hours of pumping, but it now takes 2.85 days. Over a week that drops your capacity by about a sixth, so start irrigations earlier in the hot part of the season." },
      { q: "450 gpm hand-move system on 30 acres, two sets a day of 12 hours total, 2 inches gross. How long to get around?", a: "Enter 450 gpm, 30 ac, 2 in, 12 hr/d. It takes 60 hours of pumping, which is 5 days. If peak ET is 0.3 in/d, the first set will have used 1.5 in by the time you return, so the cycle is close to the limit." }
    ],
    figs: ["3.1"]
  },
  "eq-3.4": {
    more: [
      "Enter the system flow and the area being watered at the same moment. For a set system that is the area under the sprinklers that are on, for a wheel line it is line length times move distance, and for a whole field over a day it is the field area. The result is in inches per hour.",
      "Compare the rate with the soil intake rate. Table 2.4 gives steady infiltration under stationary sprinklers of 0.25 to 0.40 in/hr for silt loam with little sealing and 0.13 to 0.28 in/hr with sealing. If the application rate is higher, water runs off or ponds (Figure 2.12). For a center pivot the whole-field value is the average rate over 24 hours, which tells you capacity, not the instantaneous rate under the moving span. The outer spans of a pivot apply several times the average and are where runoff starts (Figure 2.13).",
      "Eq. 3.5 does the same for one sprinkler or emitter from its flow and spacing."
    ],
    qa: [
      { q: "Our hand-move set runs 450 gpm and covers about 3.4 acres. Will a silt loam take it?", a: "Enter 450 gpm and 3.4 ac. The rate is 0.29 in/hr. That is within the 0.25 to 0.40 in/hr range for silt loam with little sealing, but above the 0.13 to 0.28 range once the surface crusts. Watch for runoff late in the season." },
      { q: "My quarter-mile wheel line pumps 300 gpm and moves 60 feet. Is that too fast for this ground?", a: "The set covers 1,320 by 60 ft, or 1.82 ac. Enter 300 gpm and 1.82 ac and the rate is 0.36 in/hr. On a sealing silt loam that will run off, so shorten the sets or use smaller nozzles." },
      { q: "800 gpm on a 126 acre pivot. What is the application intensity?", a: "Averaged over the whole field the calculator gives 0.014 in/hr, or 0.34 in/d. That is the capacity number. The tower closest to the end applies at several in/hr as it passes, so check the outer span for runoff separately." }
    ],
    figs: ["2.12", "2.13"]
  },
  "eq-3.5": {
    more: [
      "Get sprinkler discharge from the nozzle chart at the measured operating pressure, or time a bucket on a hose fitted over the nozzle. Spacing along the lateral and between laterals comes from the layout or a tape. For drip, use the emitter flow in gpm (1 gph = 0.0167 gpm) and the emitter spacing times the row spacing. The 96.3 constant converts gpm per ft² to in/hr.",
      "Compare the result with the soil intake rate from Table 2.4. Sprinkler rates of 0.15 to 0.30 in/hr suit most medium soils, while rates above 0.4 in/hr run off silt loams and clays. Too low a rate in hot wind means more of the water evaporates before it lands. Drip rates over the whole row area look high, but the water goes into a small wetted strip, so this check matters more for sprinklers. Use the actual operating pressure, since nozzle flow drops when pressure falls at the end of a long lateral.",
      "Eq. 3.4 gives the same rate for a whole set. Chapter 11 covers nozzle discharge and spacing in detail (Figures 11.4 and 11.6)."
    ],
    qa: [
      { q: "We have 8.5 gpm sprinklers on a 40 by 50 foot spacing on silt loam. Why is water running down the rows?", a: "Enter 8.5 gpm, 40 ft and 50 ft. The application rate is 0.41 in/hr. Sealed silt loam takes 0.13 to 0.28 in/hr (Table 2.4), so it runs off. Go to smaller nozzles or a wider lateral spacing to cut the rate in half." },
      { q: "I want to swap my 5 gpm nozzles for 12 gpm ones to get done faster. Same 40 by 60 spacing. Problem?", a: "At 5 gpm the rate is 0.20 in/hr. Enter 12 gpm and it jumps to 0.48 in/hr. That is over twice the intake of most medium soils, so the time you save will run off the field." },
      { q: "1 gph drip emitters at 12 inches on rows 30 inches apart. What is the application rate?", a: "Enter 0.0167 gpm, 1 ft and 2.5 ft. The rate is 0.64 in/hr over the whole bed. An inch takes about 1.6 hours of run time. The water goes into a narrow strip, so watch the wetting pattern rather than the surface intake." }
    ],
    figs: ["11.4", "11.6", "2.12"]
  },
  "eq-3.6": {
    more: [
      "Velocity comes from a current meter, an acoustic Doppler unit, or a float with a correction factor (Eq. 3.8). Flow area comes from measured top width and depths. For a rectangular channel it is width times depth, and for a trapezoid it is (bottom width plus side slope times depth) times depth. Take depths at several points across the channel and average them.",
      "Mean velocity is lower than the surface or center velocity (Figures 3.3 and 3.4), so use the mean velocity or corrected float speed in this equation. 1 cfs is 449 gpm, or about 1 ac-in/hr. In a pipe, flow area is the full bore only when the pipe runs full. A ditch with grass or sediment changes its area through the season, so measure on the day you need the number.",
      "This continuity relation is behind every velocity-based meter in the chapter: pipe-flow, the float method and current meters."
    ],
    qa: [
      { q: "The ditch is about 4 square feet of flow and the meter says 1.5 feet per second. How much water am I getting?", a: "Enter 1.5 ft/s and 4 ft². Flow is 6 cfs, about 2,690 gpm or 6 ac-in/hr. That is enough to put 1 in on 6 acres every hour." },
      { q: "The district says I am getting 12 cfs but my field doesn't look like it. How do I check?", a: "Measure the cross section at a straight reach and time the velocity. If you find 6 ft² at a mean of 2.0 ft/s, the calculator gives 12 cfs and the delivery is right. If the mean is 1.6 ft/s you have 9.6 cfs, and that is worth a call to the ditch rider." },
      { q: "Small lateral, 2.5 square feet of flow, current meter averaged 1.2 feet per second. What flow?", a: "Enter 1.2 and 2.5 and you get 3.0 cfs, about 1,350 gpm. That will run about 27 furrows at 50 gpm each." }
    ],
    figs: ["3.2", "3.3", "3.4", "3.16"]
  },
  "pipe-flow": {
    more: [
      "Enter the inside diameter of the pipe and the mean velocity from an ultrasonic or insertion meter. Use the true inside diameter. Nominal size, outside diameter and wall thickness differ by pipe class, and an 8 in nominal PVC pipe may have an ID under 7.8 in. The ultrasonic meter's setup screen needs the same ID, so get it from the pipe stamp or the manufacturer's table.",
      "Flow scales with diameter squared, so a small error in ID makes a large error in flow. Using 8 in where the ID is 7.75 in overstates flow by about 6.5%. The equation only applies when the pipe is full. A pipe running partly full (Figure 3.4) needs a different method. Velocities above about 5 ft/s in irrigation pipe raise friction loss and water hammer risk, a common design limit.",
      "The flow then feeds Eq. 3.3 for depth applied and run-time for hours."
    ],
    qa: [
      { q: "The clamp-on meter shows 5 feet per second in my 8 inch line. How many gpm is that?", a: "Enter 8 in and 5 ft/s. Flow is 1.75 cfs, about 785 gpm as in Example 3.3. If the actual ID is 7.75 in, the flow is 1.64 cfs, about 735 gpm, so get the ID right before you report it." },
      { q: "We are sizing the mainline for a 1,200 gpm pivot. Is 10 inch pipe big enough?", a: "Enter 10 in and 5 ft/s. That pipe carries 2.73 cfs, about 1,220 gpm, at 5 ft/s. 1,200 gpm in 10 in pipe runs right at the 5 ft/s limit, so 10 in works but 12 in leaves room if the pump is upgraded." },
      { q: "An ultrasonic reading of 3.2 feet per second in an 8 inch pipe. Is the pump wearing out?", a: "Enter 8 in and 3.2 ft/s. Flow is 1.12 cfs, about 500 gpm. If the pump was rated at 750 gpm, it has lost a third of its flow. Check the water level in the well before you pull the pump." }
    ],
    figs: ["3.3", "3.13", "3.14"]
  },
  "meter-timing": {
    more: [
      "Read the register face to see what one sweep revolution or one step in the last digit stands for, often 10, 100 or 1,000 gal. Then time a whole number of turns or digits with a stopwatch, at least a minute if the flow allows. The book's chapter question uses 10 digits of 100 gal in 1 minute 30 seconds.",
      "Timing the totalizer gives a better flow rate than reading the flow indicator needle, since the totalizer is the meter's most accurate output. If the flow seems far off, check the register units, the multiplier, and whether the meter sits in a full pipe with enough straight run upstream (10 diameters for propeller meters, 2 for magnetic meters, per the book). Start the watch the moment a digit changes and stop it the moment the last counted digit changes.",
      "The flow goes into Eq. 3.3 and run-time, and you can compare it against pipe-flow from an ultrasonic reading."
    ],
    qa: [
      { q: "The last digit on my meter is 100 gallons. Ten numbers went by in a minute and a half. What is my flow?", a: "Enter 100 gal, 10 digits, 90 s. The flow is 667 gpm. That is about 1.5 ac-in/hr." },
      { q: "The sweep hand is 100 gallons per turn and I counted 5 turns in 40 seconds. Is the pump still making 800 gpm?", a: "Enter 100 gal, 5 turns, 40 s. The flow is 750 gpm, about 6% short of 800. Repeat the count over a longer time to confirm, then check the pumping water level." },
      { q: "Big meter, 1,000 gallons per digit, two digits took 2 minutes 10 seconds. What flow goes on the water report?", a: "Enter 1,000 gal, 2 digits, 130 s. The flow is 923 gpm. Two digits is a short count, so time 5 or more if you can for the report." }
    ],
    figs: ["3.6", "3.5", "3.8"]
  },
  "eq-3.7": {
    more: [
      "The orifice diameter comes from the cap or plate stamp, and the head is read from a clear tube or gauge tapped into the pipe upstream of the orifice. For a cap discharging to the air (Figure 3.12) the downstream head is zero. If you read pressure in psi, multiply by 2.31 to get feet of head (Table 2.1). K comes from the orifice rating, and about 0.6 is typical for a sharp-edged orifice.",
      "Flow goes with the square root of head, so doubling the head raises flow only about 41%. Small head readings on a poorly installed gauge make large errors, so keep the tap clean and the tube free of air. The pipe must be level and full at the orifice. Rate the orifice once against a meter if you can, and use the measured K from then on.",
      "Use it to check well output during a pump test or to set up a temporary measurement where no meter is installed."
    ],
    qa: [
      { q: "We put a 4 inch orifice cap on the well discharge and the tube reads 3 feet of head. What is the flow?", a: "Enter K 0.6, diameter 0.333 ft (4 in), head 3 ft. Flow is 0.73 cfs, about 327 gpm. Record it with the pumping water level as a baseline for future tests." },
      { q: "Small well, 3 inch orifice, 2 feet of head. Will it run a 150 gpm drip block?", a: "Enter 0.6, 0.25 ft and 2 ft. Flow is 0.33 cfs, about 150 gpm. That just meets the block, with nothing spare as the water level drops in summer." },
      { q: "The gauge reads about 2.2 psi upstream of the 4 inch cap. How much water is that?", a: "2.2 psi times 2.31 is about 5 ft of head. Enter 0.6, 0.333 ft and 5 ft and you get 0.94 cfs, about 420 gpm." }
    ],
    figs: ["3.12", "3.11"]
  },
  "eq-3.8": {
    more: [
      "Mark a straight run of channel with uniform cross section, at least 50 ft long if you can. Drop a float (an orange or a half-full bottle rides better than a stick) upstream of the first mark and time it between the marks, then repeat three to five times and average. Measure the flow area at a couple of sections in the reach. The book gives Kf from 0.65 for water 1 ft deep or less up to 0.8 for 20 ft or more.",
      "The float gives surface velocity, which is faster than the mean, so Kf corrects it before multiplying by area (Eq. 3.6). Wind on the float, eddies near the bank, and a crooked reach all throw it off. The book is clear that the float method is a quick estimate and is normally not accurate enough for good water management. Use it to check whether a delivery is roughly right, then install a weir, flume or meter for records.",
      "For a better open channel number, use a weir (Table 3.2) or flume (Tables 3.3 and 3.4)."
    ],
    qa: [
      { q: "An orange took 50 seconds to float 100 feet. The ditch is under a foot deep with about 6 square feet of water. What flow?", a: "Enter 100 ft, 50 s, Kf 0.65, 6 ft². Surface speed is 2.0 ft/s, mean is 1.3 ft/s, and flow is 7.8 cfs, about 3,500 gpm." },
      { q: "We timed a float at 20 seconds over 50 feet in a deeper lateral, about 4.5 square feet. Is the district shorting us?", a: "Use Kf 0.70 for a deeper channel. The calculator gives 2.5 ft/s at the surface, 1.75 ft/s mean, and 7.9 cfs. If the order was 8 cfs, delivery looks right within the accuracy of a float." },
      { q: "Slow ditch, 40 seconds over 50 feet, 2 square feet of flow. How much is that?", a: "Enter 50, 40, 0.65 and 2. Surface speed 1.25 ft/s, mean 0.81 ft/s, flow 1.6 cfs, about 730 gpm. Enough for about 15 furrows at 50 gpm." }
    ],
    figs: ["3.17", "3.16"]
  },
  "tab-3.2": {
    more: [
      "Measure the head with a staff gauge or a stake set level with the crest, placed upstream at least four times the maximum head so it is out of the drawdown curve. Crest length comes from a tape across the notch. The rectangular formula is for a weir with no end contractions. The trapezoidal (Cipolletti) weir has 1:4 side slopes and uses 3.37. The 90° V-notch uses 2.49 H to the 5/2 power, which suits small flows.",
      "Flow climbs fast with head (to the 1.5 power for rectangular and trapezoidal, 2.5 for the V-notch), so a 0.05 ft error in a 0.3 ft reading can mean 25% error in flow. The crest must be sharp and the water must spring free with air under the nappe (Figure 3.18). If the downstream water is up against the crest, the weir is submerged and these formulas read high. Sediment piled up behind the weir also changes the reading.",
      "Weirs are cheap and accurate for farm ditches with enough drop. Flumes (Tables 3.3 and 3.4) need less drop and pass sediment better."
    ],
    qa: [
      { q: "We have a 3 foot rectangular weir and the gauge reads 0.6 feet. How much is coming in?", a: "Select rectangular, enter 3 ft and 0.6 ft. Flow is 4.64 cfs, about 2,080 gpm." },
      { q: "Our 2 foot Cipolletti reads 0.4 feet. What flow?", a: "Select trapezoidal, enter 2 ft and 0.4 ft. Flow is 1.71 cfs, about 765 gpm. Make sure the nappe is free with air under it, or the reading overstates the flow." },
      { q: "I want to measure a small tailwater return. Is a V-notch good for that?", a: "Yes. At 0.5 ft of head a 90° V-notch passes 0.44 cfs, about 200 gpm. At 0.8 ft it passes 1.43 cfs. The V shape keeps the head readable at small flows where a rectangular weir would show only a few hundredths of a foot." }
    ],
    figs: ["3.18"]
  },
  "tab-3.3": {
    more: [
      "Read the upstream head at the gauge in the converging section of the flume (about two-thirds of the way back from the throat on a Parshall), in feet from the floor of the crest. A stilling well or a staff gauge on the wall works. The table covers 0.25 to 2.0 ft of head, about 207 to 5,190 gpm, and the equation is Q = 3.95 H^1.55 in cfs.",
      "The rating holds only for free flow. If the downstream water backs up into the throat, the flume is submerged and reads high. For a 1 ft flume the standard limit is about 70% submergence, and above that you need the downstream head and a correction. Set the flume level in both directions, keep sediment and weeds out, and do not read the head in the throat itself.",
      "Use the flow in Eq. 3.3 or Eq. 3.1 for depth applied to the field."
    ],
    qa: [
      { q: "My 1 foot Parshall reads 0.8 feet. What flow do I have?", a: "Enter 0.8 ft. Flow is 2.80 cfs, about 1,250 gpm, between the 0.75 and 1.00 ft rows of Table 3.3." },
      { q: "It's only reading 0.35 at the head gauge this week. How much is that?", a: "Enter 0.35 ft. Flow is 0.78 cfs, about 350 gpm. That is less than a third of the 2.80 cfs you get at 0.8 ft, so if the order has not changed, check the headgate and the ditch for debris." },
      { q: "During the high run the gauge reads 1.2 feet and water is backing up behind the flume. Can I trust it?", a: "At 1.2 ft the free-flow rating gives 5.24 cfs, about 2,350 gpm. If the downstream water is up near the throat, the flume is likely submerged and the true flow is lower. Read the downstream gauge too before you report it." }
    ],
    figs: ["3.19"]
  },
  "tab-3.4": {
    more: [
      "Read the head on the wall gauge in the approach section upstream of the sill, in feet. The table covers 0.10 to 0.70 ft, about 29 to 860 gpm, with Q = 3.575 (H + 0.01259)^1.8419 in cfs. RBC flumes are long-throated flumes that fit small concrete-lined or pipe-fed ditches (Figure 3.20).",
      "The table assumes free flow. Long-throated flumes like the RBC tolerate more downstream submergence than a Parshall before the rating fails, which is why they suit flat ditches. Set the sill level, keep the approach clean, and read the gauge where the water surface is smooth. A wrong zero on the gauge is the most common error. Check that the gauge reads 0 when water just covers the sill.",
      "Use it for small farm deliveries and check the result against the tailwater or field meter."
    ],
    qa: [
      { q: "The 8 inch RBC flume reads 0.45 feet. How much water is that?", a: "Enter 0.45 ft. Flow is 0.86 cfs, about 390 gpm." },
      { q: "We set the flume for a small orchard ditch. It's reading a quarter foot. What flow?", a: "Enter 0.25 ft. Flow is 0.30 cfs, about 137 gpm, enough for three 45 gpm microsprinkler blocks running together." },
      { q: "Reading 0.6 feet. Is that still inside what the flume can measure?", a: "Yes, the table goes to 0.70 ft. Enter 0.6 and you get 1.45 cfs, about 650 gpm, the same as Table 3.4. Above 0.7 ft you need a larger flume." }
    ],
    figs: ["3.20"]
  },
  "tab-3.1": {
    more: [
      "Pick the conversion row and enter the amount in the first unit. The factors are the ones printed in Table 3.1: 1 ac-in = 27,154 gal, 1 ac-ft = 325,851 gal, 1 cfs = 449 gpm (450 for practical work), 1 ac-in/hr = 452 gpm, 1 L/s = 15.85 gpm.",
      "Most errors in water records are unit errors: acre-feet entered as acre-inches, gallons read as thousands of gallons, or cfs taken as cms. A quick check is that 450 gpm for 1 hour is about 1 ac-in. The book prints 1 cms = 16.7 L/min, which is a misprint, and the calculator notes the true value. Use the exact factors for permits and reports and the round numbers for field estimates.",
      "These conversions sit under every calculator in Chapter 3."
    ],
    qa: [
      { q: "My well permit says 2 acre-feet for the garden. How many gallons is that?", a: "Pick 1 ac-ft = 325,851 gal and enter 2. That is 651,702 gal." },
      { q: "The ditch rider says I'm getting 3 cfs. What is that in gpm?", a: "Pick 1 cfs = 449 gpm and enter 3. That is 1,347 gpm, close to 3 ac-in/hr." },
      { q: "The European pump spec says 30 liters per second. Will it run my 450 gpm drip system?", a: "Pick 1 L/s = 15.85 gpm and enter 30. That is 475.5 gpm, a little over 450, so it covers the system with a small margin." }
    ],
    figs: ["3.1"]
  }
});
