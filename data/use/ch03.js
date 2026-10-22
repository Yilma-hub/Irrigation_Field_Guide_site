window.CALC_USE = Object.assign(window.CALC_USE || {}, {
  "eq-3.1-3.2": {
    use: "Depth equals volume over area. One acre-inch is 27,154 gal, so 3.4 million gallons on a 125 ac field is about 1 in. Use it any time a grower reports water in gallons or acre-feet and you need to compare it with crop water use in inches.",
    ask: "We pumped 40 acre-feet on the north quarter this season. Is that a lot?",
    from: [["meter-depth", "volume from meter readings"], ["tab-3.1", "unit conversions"], ["eq-13.2", "pivot irrigated area"]],
    to: [["eq-4.1", "gross irrigation in the water balance"], ["eq-5.1", "depth applied for application efficiency"], ["eq-5.6-5.7", "depth applied"]]
  },
  "meter-depth": {
    use: "Subtract the before reading from the after reading on a propeller meter totalizer and divide by the area. It is the simplest audit of what a pivot or set actually put on, and it catches a timer setting or a pump that is not delivering what the grower thinks.",
    ask: "The meter went from 1,284.6 to 1,301.2 acre-feet. How much did I put on the 126 acres?",
    from: [["eq-13.2", "irrigated area"]],
    to: [["eq-3.1-3.2", "volume to depth"], ["eq-4.1", "gross irrigation"], ["eq-6.18-6.25", "irrigation entry in the checkbook"], ["eq-5.1", "depth applied"]]
  },
  "eq-3.3": {
    use: "Q t = A d ties flow, time, area and depth. 450 gpm for 24 h over one acre is about 24 in, or 1 in on a 24 ac set. Use it to check how much a set or a pivot revolution applies when you know the pumping rate and the hours run.",
    ask: "We ran the 800 gpm well 30 hours on the corner. How much did that put on?",
    from: [["meter-timing", "measured Q"], ["eq-3.7", "Q from an orifice"], ["tab-3.2", "Q from a weir"], ["tab-3.3", "Q from a flume"], ["eq-13.2", "area"]],
    to: [["eq-4.1", "gross irrigation"], ["eq-5.1", "depth applied"], ["eq-6.18-6.25", "irrigation in the checkbook"]]
  },
  "run-time": {
    use: "Rearranges Q t = A d to give the hours and days to put a target gross depth on a field. With 900 gpm on 130 ac, a 1 in gross application takes about 65 h. Use it to tell a grower whether the well can keep up with a planned schedule or how far ahead they need to start.",
    ask: "How long do I need to run to get an inch on 160 acres with this well?",
    from: [["eq-5.13", "gross depth after efficiency"], ["eq-12.2", "gross depth from net"], ["eq-6.26", "irrigation needed for the period"], ["meter-timing", "measured flow rate"]],
    to: [["eq-6.18-6.25", "planned irrigation for the checkbook"], ["eq-5.20", "compare with gross system capacity"]]
  },
  "eq-3.4": {
    use: "Average application intensity is flow divided by the area being watered at one time, in in/h. Compare it with the soil intake rate to judge runoff risk on a sprinkler set or a pivot span. 450 gpm on one acre is 1 in/h.",
    ask: "Is my set putting water on faster than the ground can take it?",
    from: [["meter-timing", "flow rate"], ["eq-3.5", "area per sprinkler"]],
    to: [["tab-11.4", "compare with maximum rate for soil and slope"], ["runoff-13", "rate for runoff screening"]]
  },
  "eq-3.5": {
    use: "Application rate for a single head is 96.3 q over the spacing area (gpm, ft, in/h). A 6 gpm head on 40 by 60 ft gives 0.24 in/h. Use it on a solid set, hand-move or wheel line to check the rate against soil intake before a long set.",
    ask: "I'm going to 40 by 50 spacing with 5 gpm nozzles. What rate is that?",
    from: [["eq-11.1", "nozzle discharge"], ["tab-11.1-11.2", "nozzle discharge by size and pressure"], ["tab-11.3", "maximum spacing"]],
    to: [["eq-11.4", "rate times set time for gross depth"], ["tab-11.4", "compare with maximum rate"], ["eq-12.1", "rate for moved-lateral depth"]]
  },
  "eq-3.6": {
    use: "Continuity, Q = V A, is the base of every velocity-area flow measurement. Use it in a ditch or canal with a measured cross section and mean velocity, or in a pipe to check velocity against the 5 ft/s guideline.",
    ask: "The ditch is 4 ft wide and running a foot deep at about 1.5 ft/s. How much water is that?",
    from: [["eq-3.8", "mean velocity from a float"]],
    to: [["eq-3.3", "Q for depth applied"], ["eq-5.19", "flow in and out for conveyance efficiency"], ["eq-8.5", "pipe velocity check"]]
  },
  "pipe-flow": {
    use: "Flow in a full round pipe from inside diameter and velocity. A 6 in pipe at 5 ft/s carries about 440 gpm. Use it to check whether a mainline is undersized for a new well, or to back out flow from a velocity reading.",
    ask: "Can a 6 inch line carry 700 gpm without problems?",
    from: [],
    to: [["eq-3.3", "flow rate for depth applied"], ["eq-8.11", "flow for friction loss"], ["tab-8.5", "compare with pipe sizing table"]]
  },
  "meter-timing": {
    use: "Time a known number of totalizer digits or sweep-hand revolutions to get flow rate on the spot. It is the quickest field check of a well or pivot flow during a pumping plant test or a system visit.",
    ask: "How do I get gpm off this meter without waiting all day?",
    from: [["tab-3.1", "unit conversions"]],
    to: [["eq-3.3", "Q for depth applied"], ["run-time", "Q for hours to apply"], ["eq-8.17-8.19", "Q for water horsepower"], ["pump-eval", "flow for pumping plant evaluation"], ["cn-from-flow", "Q to net capacity"]]
  },
  "eq-3.7": {
    use: "Orifice meter discharge from the rated coefficient, orifice size and head. It is a cheap way to measure well discharge at the end of a pipe. Use it during a pump test when there is no propeller meter.",
    ask: "We have an orifice plate on the test pipe and the tube reads 30 inches. What's the flow?",
    from: [],
    to: [["eq-3.3", "Q for depth applied"], ["eq-8.17-8.19", "Q for horsepower"], ["well-test", "pumping rate for the well test"]]
  },
  "eq-3.8": {
    use: "The float method times a float over a measured reach, then a correction factor gives mean velocity. It is the roughest of the measurement methods, but it works in a ditch with no structure. Use it to estimate a headgate delivery or check a ditch rider's number.",
    ask: "There's no flume on my lateral. How can I tell if I'm getting my share?",
    from: [],
    to: [["eq-3.6", "mean velocity times flow area"], ["eq-5.19", "flow for conveyance efficiency"], ["ditch-seepage", "flow measurements for seepage loss"]]
  },
  "tab-3.2": {
    use: "Rated discharge for sharp-crested rectangular, Cipolletti and V-notch weirs from head above the crest. Use it on farm turnouts and tailwater ditches with a weir board, and to check that the head is read far enough upstream.",
    ask: "The staff gauge on my Cipolletti reads 0.6 ft. How many cfs is that?",
    from: [],
    to: [["eq-3.3", "Q for depth applied"], ["eq-5.19", "flow for conveyance efficiency"], ["eq-10.1", "inflow and runoff for the volume balance"]]
  },
  "tab-3.3": {
    use: "Rating for a 1 ft Parshall flume from upstream head. Parshall flumes are common at ditch company deliveries and farm headgates in the West. Use it to convert a gauge reading to cfs when checking a delivery.",
    ask: "The flume reads 0.9 ft. How much water am I getting?",
    from: [],
    to: [["eq-3.3", "Q for depth applied"], ["eq-5.19", "flow for conveyance efficiency"], ["eq-10.1", "inflow for the volume balance"]]
  },
  "tab-3.4": {
    use: "Rating for an 8 in RBC flume, a small long-throated flume used to measure furrow inflow and tailwater runoff. Use it during a furrow evaluation to get inflow and runoff volumes for the efficiency calculations.",
    ask: "How much is running off the end of these furrows?",
    from: [],
    to: [["eq-10.1", "inflow and runoff volumes"], ["eq-10.8", "runoff for the runoff ratio"], ["eq-10.9", "furrow stream size"]]
  },
  "tab-3.1": {
    use: "Standard conversions between gpm, cfs, acre-inches, acre-feet and gallons. One cfs for one hour is about 1 acre-inch. Use it whenever a water right, a meter and a crop water budget are all in different units.",
    ask: "My right is 2.5 cfs. How many acre-feet is that over a 30 day month?",
    from: [],
    to: [["eq-3.1-3.2", "volume in consistent units"], ["meter-timing", "volume per digit"], ["eq-3.3", "flow and volume units"]]
  }
});
