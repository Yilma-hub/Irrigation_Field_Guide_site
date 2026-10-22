window.CALC_USE = Object.assign(window.CALC_USE || {}, {
  "eq-10.1": {
    use: "Volume balance for a surface irrigation: what went in equals what infiltrated plus what is still on the surface plus what ran off. Use it on a furrow evaluation where you measured inflow with a meter and tailwater with a flume, to find the volume that actually soaked in.",
    ask: "I put 18 acre-inches on that field and the flume at the bottom caught 3. How much went into the ground?",
    from: [["meter-depth", "inflow volume from the meter"], ["eq-3.3", "volume from flow and set time"], ["tab-3.3", "runoff flow from a Parshall flume"], ["tab-3.4", "runoff flow from an RBC flume"]],
    to: [["eq-10.2", "same balance as depths"], ["eq-10.8", "runoff volume for the runoff ratio"], ["eq-10.13-10.14", "runoff volume for the reuse pit"]]
  },
  "eq-10.2": {
    use: "Depth form of the surface water balance, giving runoff depth and percent runoff from gross and infiltrated depth. Use it on a furrow evaluation to show the grower how much of each set leaves as tailwater. In Example 10.1, 0.7 of 4.2 in ran off, 17 percent.",
    ask: "What share of the water I turn into the furrows is running off the bottom end?",
    from: [["eq-10.4", "gross depth for the set"], ["eq-10.3", "gross depth for one furrow"], ["tab-10.1", "infiltration along the field"], ["eq-5.6-5.7", "depth infiltrated"]],
    to: [["eq-10.8", "runoff depth for the runoff ratio"], ["eq-5.12", "runoff with reuse"], ["eq-10.6-10.7", "runoff in the ELQ"]]
  },
  "eq-10.3": {
    use: "Gross depth applied by one furrow from its stream size, set time, spacing and length. Use it when you time a siphon tube or gate opening into a bucket and want to know what that furrow is putting on. Remember to double W for every other furrow irrigation.",
    ask: "Each gate is running about 10 gpm for 12 hours on 1,200 ft rows at 30 inches. How much water is that?",
    from: [["eq-10.9", "furrow stream size"], ["tab-10.6", "recommended stream size"], ["meter-timing", "measured stream size"]],
    to: [["eq-10.2", "gross depth for runoff depth"], ["eq-10.6-10.7", "gross depth for ELQ"], ["eq-10.12", "gross depth for low quarter depth"], ["eq-5.1", "gross depth for application efficiency"]]
  },
  "eq-10.4": {
    use: "Gross depth for a whole furrow set from total inflow, set time and the number of furrows watered. This is the main management lever on a gravity field. When you cut the number of furrows per set or shorten the set time, rerun it to see what the change does to the depth applied.",
    ask: "If I water 44 rows instead of 70 with the same 760 gpm, how much more water goes on per set?",
    from: [["meter-timing", "total inflow"], ["tab-3.2", "inflow measured at a weir"], ["tab-3.3", "inflow measured at a Parshall flume"], ["tab-10.2", "number of furrows per set"]],
    to: [["eq-10.2", "gross depth for runoff"], ["eq-10.12", "gross depth for low quarter depth"], ["eq-10.6-10.7", "gross depth for ELQ"], ["eq-10.8", "gross depth for runoff ratio"]]
  },
  "eq-10.5": {
    use: "Gross depth for a basin or border check from inflow, cutoff time and the area of the check. Use it with level basins, rice checks or graded borders to set cutoff time for a target depth.",
    ask: "How long do I run 1,500 gpm into a 330 by 660 ft border to put on 3 inches?",
    from: [["meter-timing", "inflow rate"], ["tab-3.2", "inflow at a weir"], ["tab-3.3", "inflow at a flume"]],
    to: [["eq-10.2", "gross depth for runoff"], ["eq-5.1", "gross depth for application efficiency"], ["eq-10.6-10.7", "gross depth for ELQ"]]
  },
  "eq-10.6-10.7": {
    use: "Low quarter application efficiency for a furrow field with a closed or open runoff recovery system. Use it to show a grower how much a tailwater return system raises efficiency. In Examples 10.1 to 10.3 a closed system lifted ELQ from 67 to 78 percent.",
    ask: "Is a tailwater pit and return pump worth it on my furrow ground?",
    from: [["eq-10.12", "low quarter depth"], ["eq-10.4", "gross depth"], ["eq-10.8", "runoff ratio"], ["tab-10.3-10.4", "runoff ratio by cutoff ratio"], ["eq-6.14-6.15", "soil water deficit"]],
    to: [["eq-5.20", "ELQ for gross system capacity"], ["eq-6.9", "effective depth for the irrigation interval"], ["eq-6.18-6.25", "effective irrigation in the checkbook"], ["fig-10.14-10.16", "compare against best cutoff ratio"]]
  },
  "eq-10.8": {
    use: "Runoff ratio, runoff depth over gross depth. Measure it on a furrow evaluation and use it to rate a field, to compute ELQ with reuse and to size a tailwater pit and pump.",
    ask: "How much of my water is running off as a fraction of what I put on?",
    from: [["eq-10.2", "runoff depth"], ["eq-10.1", "runoff volume"], ["eq-10.4", "gross depth"]],
    to: [["eq-10.6-10.7", "runoff ratio for ELQ"], ["eq-10.13-10.14", "runoff ratio for reservoir and pump"], ["eq-5.12", "runoff ratio for depth from the source"]]
  },
  "eq-10.9": {
    use: "Furrow stream size from total inflow divided by furrows per set. With a fixed well or ditch delivery, the number of furrows per set is how the irrigator controls stream size. Check the result against the nonerosive limit before changing sets.",
    ask: "If I open 26 gates instead of 44 on my 760 gpm well, what does each furrow get?",
    from: [["meter-timing", "total inflow"], ["tab-10.2", "furrows per set"], ["eq-10.4", "inflow and furrows per set"]],
    to: [["eq-10.10", "compare to the nonerosive limit"], ["tab-10.6", "compare to recommended stream size"], ["eq-10.3", "stream size for gross depth"]]
  },
  "eq-10.10": {
    use: "Approximate maximum nonerosive furrow stream size, 10 divided by slope in percent. Use it on any field where you plan to increase stream size to speed up advance. On a 0.4 percent slope the limit is 25 gpm.",
    ask: "How big a stream can I run down these rows before I start cutting the furrows?",
    from: [],
    to: [["eq-10.9", "upper limit on stream size"], ["tab-10.6", "nonerosive check"], ["proc-furrow-set", "stream size limit in the set design"]]
  },
  "eq-10.11": {
    use: "Cutoff ratio, advance time to the end of the field over set time. It is the management number for furrow efficiency. Time advance with flags at the end of the field on a few furrows, divide by the set time, and compare to the recommended ratio for the soil and reuse system.",
    ask: "Water reaches the bottom of the field in 9 hours and I change sets at 12. Is that right?",
    from: [["tab-10.1", "measured advance time to the end"], ["tab-10.5", "target advance time for the set"]],
    to: [["eq-10.12", "CR for the infiltration factor"], ["tab-10.3-10.4", "CR for infiltration factor and runoff ratio"], ["fig-10.14-10.16", "CR for ELQ"], ["tab-10.5", "compare to recommended CR"]]
  },
  "eq-10.12": {
    use: "Low quarter infiltrated depth from gross depth and the Table 10.3 infiltration factor for the cutoff ratio and soil. Use it when you do not have an infiltration profile but know set time, advance time and inflow. The result sets whether the low end of the field got refilled.",
    ask: "With a 0.75 cutoff ratio and 4.2 inches applied, is the dry end of my field getting enough?",
    from: [["eq-10.4", "gross depth"], ["eq-10.11", "cutoff ratio"], ["tab-10.3-10.4", "infiltration factor"]],
    to: [["eq-10.6-10.7", "low quarter depth for ELQ"], ["eq-5.9-5.11", "low quarter depth for effective depth"], ["eq-6.18-6.25", "low quarter depth in the checkbook"], ["eq-5.15", "excess over SWD as deep percolation"]]
  },
  "eq-10.13-10.14": {
    use: "Sizes the active volume of a tailwater reuse pit and the return pump for a set. Use it when a grower plans a runoff recovery system. Design with a high runoff ratio, 0.30 to 0.40, so the pit does not overflow in the first irrigations after cultivation.",
    ask: "How big does my tailwater pit need to be and what size pump do I put on it?",
    from: [["eq-10.8", "runoff ratio"], ["tab-10.3-10.4", "runoff ratio by cutoff ratio"], ["meter-timing", "inflow from the source"], ["eq-10.1", "runoff volume"]],
    to: [["eq-8.13", "return pump TDH"], ["eq-8.17-8.19", "return pump horsepower"], ["tab-8.5", "return line size"]]
  },
  "tab-10.1": {
    use: "The book's example advance, recession and infiltration data along a 1,200 ft furrow. Use it as a model for laying out your own field evaluation: stations every 300 ft, advance and recession times at each, opportunity time and infiltration.",
    ask: "What should I record when I walk a furrow field to evaluate it?",
    from: [],
    to: [["eq-10.11", "advance time for cutoff ratio"], ["eq-10.2", "infiltrated depth for runoff"], ["eq-5.2", "low quarter and mean depth for DU"]]
  },
  "tab-10.2": {
    use: "Correction factor for the number of furrows per set needed to change advance time with a fixed water supply. Use it after timing advance in a trial set: pick the target advance time from the recommended cutoff ratio and read off how many furrows to open.",
    ask: "Water takes 4.8 hours to get through with 44 rows. How many rows do I run to get it through in 2.4 hours?",
    from: [["tab-10.5", "target advance time"], ["eq-10.11", "measured advance and cutoff ratio"]],
    to: [["eq-10.9", "new furrows per set for stream size"], ["eq-10.4", "furrows per set for gross depth"], ["proc-furrow-set", "furrows per set in the design"]]
  },
  "tab-10.3-10.4": {
    use: "Infiltration factor and runoff ratio for sloping furrows by cutoff ratio and soil texture. Use them to estimate low quarter depth and runoff without a full field evaluation, for example in a quick office review of a grower's set times.",
    ask: "On a silt loam with a 0.4 cutoff ratio, how much will run off and how much reaches the low end?",
    from: [["eq-10.11", "cutoff ratio"], ["tab-10.5", "recommended cutoff ratio"]],
    to: [["eq-10.12", "infiltration factor"], ["eq-10.6-10.7", "runoff ratio for ELQ"], ["eq-10.13-10.14", "runoff ratio for reuse pit"], ["fig-10.14-10.16", "factors behind the ELQ curves"]]
  },
  "tab-10.5": {
    use: "Recommended cutoff ratio and target advance time for the soil and reuse system. Use it to set the goal before changing furrows per set or stream size. With no reuse on a medium soil the target is 0.70, with a closed reuse system 0.40.",
    ask: "With a 12 hour set on loam and no tailwater pit, how fast should water get to the bottom of the field?",
    from: [],
    to: [["tab-10.2", "target advance time"], ["eq-10.11", "target cutoff ratio"], ["tab-10.3-10.4", "CR for factors"], ["proc-furrow-set", "target CR in the set design"]]
  },
  "tab-10.6": {
    use: "Basic intake, maximum furrow length and recommended stream size by soil texture, with the nonerosive check. Use it when planning a new furrow layout or when advance is very slow or fast for the soil.",
    ask: "My rows are 1,300 ft on sandy loam. Are they too long?",
    from: [["eq-10.10", "nonerosive limit"], ["eq-10.9", "actual stream size"]],
    to: [["eq-10.3", "recommended stream size for gross depth"], ["eq-10.9", "target stream size per furrow"]]
  },
  "tab-10.7": {
    use: "Surge irrigation cycle times for four or six cycles during advance, with the cutback cycles that follow. Use it to set up a surge valve controller after timing how long water takes to reach the first quarter or sixth of the field.",
    ask: "Water gets a quarter of the way down in 30 minutes. How do I program the surge valve for a 12 hour return?",
    from: [["tab-10.1", "advance time to the first station"]],
    to: [["eq-10.4", "set time and inflow for gross depth"]]
  },
  "fig-10.14-10.16": {
    use: "ELQ versus cutoff ratio for fine, medium and coarse soils with and without reuse, and the cutoff ratio that gives the best efficiency. Use it with a grower to show what changing set time or furrows per set could gain before trying it in the field.",
    ask: "What is the best efficiency I can get on this clay loam if I put in a return system?",
    from: [["eq-10.11", "current cutoff ratio"], ["tab-10.3-10.4", "infiltration factor and runoff ratio"]],
    to: [["tab-10.5", "compare best CR to the table"], ["eq-5.20", "ELQ for system capacity"], ["proc-furrow-set", "target CR"]]
  },
  "proc-furrow-set": {
    use: "Full reactive furrow set design: from a trial set's measured advance time, it picks a target cutoff ratio, the new number of furrows per set, the stream size and erosion check, and then gross depth, low quarter depth, effective depth, runoff ratio and ELQ. Use it on a field visit after one timed set to give the irrigator new set instructions.",
    ask: "We timed one set. How many rows should we run next time and what will that do to efficiency?",
    from: [["tab-10.5", "target cutoff ratio"], ["tab-10.2", "correction for furrows per set"], ["eq-10.10", "nonerosive stream size"], ["eq-6.14-6.15", "soil water deficit"], ["meter-timing", "total inflow"]],
    to: [["eq-6.9", "effective depth for irrigation interval"], ["eq-5.20", "ELQ for gross capacity"], ["eq-10.13-10.14", "runoff ratio for a reuse pit"], ["eq-6.18-6.25", "effective irrigation in the checkbook"]]
  }
});
