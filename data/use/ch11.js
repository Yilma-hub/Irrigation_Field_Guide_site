window.CALC_USE = Object.assign(window.CALC_USE || {}, {
  "eq-11.1": {
    use: "Sprinkler nozzle discharge from orifice diameter and pressure. Use it to check a nozzle chart, or when a grower has an unmarked nozzle and a gauge reading and wants to know what it puts out. Discharge rises with the square of nozzle diameter and the square root of pressure.",
    ask: "I measured 50 psi at a sprinkler with a 5/32 inch nozzle. How many gpm is it putting out?",
    from: [["eq-11.5-11.9", "pressure at the sprinkler"], ["eq-8.10", "pressure at the riser"]],
    to: [["eq-11.2-11.3", "discharge for application rate"], ["eq-11.16", "discharge for lateral inflow"], ["eq-12.1", "discharge for moved-lateral depth"], ["eq-3.5", "discharge for precipitation rate"]]
  },
  "eq-11.1-ratio": {
    use: "New sprinkler discharge after a change in nozzle size or operating pressure. Use it when a grower wants to renozzle to cut flow on a weaker well, or when pressure at the system has dropped and you want to know how much less each head is putting out.",
    ask: "If I go from 5/32 to 9/64 nozzles, how much does my flow drop?",
    from: [["eq-11.1", "original discharge"], ["tab-11.1-11.2", "discharge from the chart"], ["eq-8.10", "new pressure at the sprinkler"]],
    to: [["eq-11.2-11.3", "new application rate"], ["eq-11.16", "new lateral inflow"], ["eq-12.1", "new gross depth per set"]]
  },
  "tab-11.1-11.2": {
    use: "Discharge and diameter of coverage for straight bore impact sprinkler nozzles by pressure. Use it to pick a nozzle and pressure for a set spacing, and to check what an existing nozzle should be delivering. The coverage diameter sets how far apart heads and laterals can be.",
    ask: "What does a 3/16 inch nozzle put out at 45 psi and how far does it throw?",
    from: [["eq-11.5-11.9", "average lateral pressure"]],
    to: [["eq-11.2-11.3", "discharge for application rate"], ["tab-11.3", "diameter of coverage for spacing"], ["eq-11.16", "discharge for lateral inflow"], ["eq-12.1", "discharge for moved-lateral depth"]]
  },
  "eq-11.2-11.3": {
    use: "Average application rate of a set sprinkler layout from sprinkler discharge and spacing, for rectangular, square or triangular patterns. Compare it with the soil's maximum rate to avoid runoff, and use it with set time to find depth applied.",
    ask: "With 6 gpm heads on a 40 by 50 ft spacing, how fast is the water going on?",
    from: [["eq-11.1", "sprinkler discharge"], ["tab-11.1-11.2", "discharge from the chart"], ["tab-11.3", "spacing limits"]],
    to: [["eq-11.4", "application rate for gross depth"], ["tab-11.4", "rate against soil intake limit"], ["eq-5.13", "average rate for run time"]]
  },
  "eq-11.4": {
    use: "Gross depth applied by a set from application rate and operating time. Use it to set run time per set for a target depth, or to tell a grower what a 12 hour set on a hand move or wheel line really puts on.",
    ask: "My wheel line runs 11 hours per set at 0.29 in/hr. How much is that?",
    from: [["eq-11.2-11.3", "application rate"], ["eq-12.1", "application rate for a moved lateral"]],
    to: [["eq-12.2", "gross to net depth"], ["eq-5.1", "gross depth for application efficiency"], ["eq-6.18-6.25", "applied depth in the checkbook"], ["eq-15.1", "set time for chemigation"]]
  },
  "tab-11.3": {
    use: "Maximum sprinkler and lateral spacing as a percent of the diameter of coverage for the wind speed and pattern. Use it on a design review or when a grower's set system shows dry streaks in windy weather. Wider spacing than the table allows usually means poor uniformity.",
    ask: "Can I space my laterals 60 feet apart with a 90 foot throw in our usual 8 mph wind?",
    from: [["tab-11.1-11.2", "diameter of coverage"]],
    to: [["eq-11.2-11.3", "allowed spacing for application rate"], ["proc-nozzle-select", "spacing check for nozzle choice"], ["eq-11.15", "lateral spacing for number of sets"]]
  },
  "tab-11.4": {
    use: "Maximum recommended application rate by soil texture, slope and surface cover. Use it to keep set sprinklers below the soil intake rate. On a bare silt loam at 0 to 5 percent slope the upper limit is about 0.25 to 0.50 in/hr.",
    ask: "Is 0.40 inches an hour too much for my sandy loam on a 6 percent slope?",
    from: [["eq-11.2-11.3", "application rate"], ["tab-2.3", "soil texture"]],
    to: [["proc-nozzle-select", "rate limit for nozzle choice"]]
  },
  "proc-nozzle-select": {
    use: "Picks the smallest nozzle that covers a given head and lateral spacing at the design pressure and wind, and checks its application rate against the soil. Use it when replacing nozzles on an older set system or designing a new solid set or hand move layout.",
    ask: "I have heads at 40 feet on laterals 50 feet apart at 50 psi. What nozzle should I use?",
    from: [["tab-11.3", "spacing limits"], ["tab-11.4", "soil intake limit"], ["tab-11.1-11.2", "nozzle discharge and coverage"]],
    to: [["eq-11.16", "discharge for lateral inflow"], ["eq-11.4", "application rate for gross depth"], ["proc-moved-lateral", "nozzle in the system design"]]
  },
  "eq-11.5-11.9": {
    use: "Pressure needed at the lateral inlet and pressure at the far end from the average design pressure, friction loss and elevation. Use it to check that pressure variation along a lateral stays within 20 percent of average, which keeps sprinkler discharge within about 10 percent.",
    ask: "My lateral runs uphill 10 feet. What pressure do I need at the riser to keep the last sprinkler working?",
    from: [["eq-11.11", "lateral friction loss"], ["eq-8.2-8.3", "elevation difference as psi"], ["pipeline-design", "pressure available at the lateral inlet"]],
    to: [["eq-8.10", "required inlet pressure on the mainline"], ["eq-8.13", "pressure the pump must supply"], ["eq-11.1", "pressure at the sprinkler"], ["tab-11.1-11.2", "average pressure for nozzle choice"]]
  },
  "eq-11.11": {
    use: "Hazen-Williams friction loss along a sprinkler lateral with the multiple outlet factor. Use it when sizing aluminum or PVC lateral pipe or checking whether a longer lateral will hold pressure.",
    ask: "What's the friction loss in a quarter mile of 4 inch aluminum wheel line at 200 gpm?",
    from: [["eq-11.16", "lateral inflow"], ["tab-8.1", "C for the pipe"], ["tab-8.3", "outlet factor F"]],
    to: [["eq-11.5-11.9", "friction loss for inlet and end pressure"], ["eq-11.10-11.13", "compare with allowed loss"]]
  },
  "eq-11.10-11.13": {
    use: "Maximum inflow a lateral can carry while staying within the 20 percent pressure variation limit and the velocity limit, 7 ft/s or 10 ft/s with slow fill. Use it to decide how long a lateral of a given pipe size can be, or the largest nozzle it can supply.",
    ask: "How many gpm can I put through my 4 inch hand line before pressure at the end falls too far?",
    from: [["tab-8.1", "C for the pipe"], ["tab-8.3", "outlet factor"], ["tab-11.1-11.2", "design pressure"]],
    to: [["eq-11.16", "upper limit on lateral inflow"], ["eq-11.1", "maximum sprinkler discharge"], ["proc-moved-lateral", "lateral limits"]]
  },
  "eq-11.14": {
    use: "Minimum sprinkler discharge for a moved-lateral system to meet the gross system capacity, given sets, laterals, set time, interval and downtime. Use it when designing or checking a hand move or wheel line against peak crop water use.",
    ask: "With two wheel lines on this field, what sprinkler flow do I need to keep up in July?",
    from: [["eq-5.20", "gross system capacity"], ["eq-11.15", "number of sets"], ["eq-6.8", "longest interval allowed"]],
    to: [["tab-11.1-11.2", "nozzle that gives that discharge"], ["eq-11.16", "discharge for lateral inflow"], ["proc-moved-lateral", "required discharge"]]
  },
  "eq-11.15": {
    use: "Number of lateral sets across a field from field width and lateral spacing. Use it to plan how many moves it takes to cover a field, which sets the interval for one lateral.",
    ask: "My field is 1,320 feet wide and I move 60 feet each time. How many sets is that?",
    from: [["tab-11.3", "lateral spacing"]],
    to: [["eq-11.14", "sets for required discharge"], ["eq-12.8-12.9", "sets for laterals needed"], ["proc-moved-lateral", "sets in the design"]]
  },
  "eq-11.16": {
    use: "Lateral inflow from sprinkler discharge, lateral length and spacing. Use it to size the lateral pipe and mainline and to check that the well can supply all laterals running at once.",
    ask: "My wheel line is 1,280 feet with heads every 40 feet at 6 gpm. How much water does it need?",
    from: [["eq-11.1", "sprinkler discharge"], ["tab-11.1-11.2", "discharge from the chart"], ["eq-11.14", "required discharge"]],
    to: [["eq-11.11", "inflow for lateral friction"], ["eq-8.11", "flow for pipe friction"], ["tab-8.5", "mainline size"], ["eq-8.17-8.19", "pump flow for horsepower"]]
  },
  "proc-moved-lateral": {
    use: "Full moved-lateral design: number of sets, laterals needed, interval, minimum sprinkler discharge, lateral inflow, smallest nozzle and its application rate. Use it to plan a hand move or wheel line system for a field, or to see whether an existing one keeps up with peak ET.",
    ask: "Can I water this 80 acre hay field with one wheel line or do I need two?",
    from: [["eq-5.20", "gross system capacity"], ["eq-6.8", "maximum irrigation interval"], ["tab-11.3", "lateral and head spacing"]],
    to: [["eq-11.5-11.9", "lateral pressure check"], ["tab-11.4", "application rate check"], ["moved-lateral-sheet", "full management spreadsheet"], ["eq-12.8-12.9", "laterals and sets per lateral"]]
  },
  "tab-11.5": {
    use: "Sprinkling rate needed for frost protection from the expected dry leaf temperature and wind. Use it for orchards, vineyards and berries when planning a frost system or deciding whether the existing system can handle a forecast freeze.",
    ask: "Forecast is 24 degrees with a 5 mph breeze. Is my 0.12 in/hr system enough?",
    from: [],
    to: [["eq-11.2-11.3", "required application rate for spacing and nozzle"], ["eq-5.20", "system capacity to supply that rate"]]
  },
  "tab-11.6": {
    use: "Minimum air temperature to start and stop overtree frost protection from the crop's critical temperature and the dewpoint. Use it on frost nights so the system starts before evaporative cooling drops bud temperature, and is not shut off too early in the morning.",
    ask: "Dewpoint tonight is 20 and buds are at 28 critical. When do I turn the sprinklers on?",
    from: [],
    to: []
  }
});
