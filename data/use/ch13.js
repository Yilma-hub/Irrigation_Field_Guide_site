window.CALC_USE = Object.assign(window.CALC_USE || {}, {
  "eq-13.1": {
    use: "Gives the flow each sprinkler must deliver at its spot on a pivot. Outer sprinklers cover more ground, so their flow has to grow with distance from the pivot. Use it to check a sprinkler chart from the dealer or to see whether a replacement nozzle at a given tower is the right size.",
    ask: "The dealer's chart shows a bigger nozzle out at tower 7. Is that right for my pivot?",
    from: [["eq-5.20", "gross capacity C_g"], ["cn-from-flow", "gross capacity from pump flow"], ["tab-13.1", "discharge per foot by distance"]],
    to: [["tab-11.1-11.2", "required q_s for nozzle size"], ["eq-11.1", "required q_s for nozzle diameter"], ["eq-13.3", "location R for pressure at the sprinkler"]]
  },
  "eq-13.2": {
    use: "Computes the area a pivot irrigates with the end gun running in the corners. Use it to get the real irrigated acres for capacity, chemigation and water use reporting. Adding a 100 ft end gun to a 1,300 ft pivot adds about 10 ac, and the gain tops out when the throw is about 21% of the lateral.",
    ask: "How many acres am I really watering with the end gun on?",
    from: [["tab-12.6", "end gun throw as radius gain"], ["tab-13.2", "table check of irrigated area"]],
    to: [["eq-5.20", "area for system flow"], ["cn-from-flow", "area for capacity per acre"], ["eq-15.2", "area covered per revolution"], ["runoff-13", "irrigated area"]]
  },
  "fp-13.6": {
    use: "Reads the share of total lateral friction loss that has occurred at a given fraction of the way out the pivot. Most of the loss happens near the pivot, where flow is highest. Feed it into the pressure calculation for any point along the lateral.",
    ask: "How much of the pressure loss has happened by the middle of the pivot?",
    from: [],
    to: [["eq-13.3", "pressure distribution factor f_p"]]
  },
  "eq-13.3": {
    use: "Estimates the pressure at any point along a pivot lateral from the inlet pressure, friction loss and elevation. Use it when a field has a hill and the grower sees dry spots at the high end. If pressure at the top falls below what the regulators need, the pivot needs more inlet pressure or a booster.",
    ask: "When the pivot goes up the hill, do the sprinklers at the end still get enough pressure?",
    from: [["tab-13.3", "lateral friction loss P_lp"], ["tab-13.4", "friction loss with two pipe sizes"], ["fp-13.6", "pressure distribution factor"], ["eq-8.2-8.3", "elevation head as pressure"]],
    to: [["eq-11.1", "pressure for nozzle discharge"], ["tab-11.1-11.2", "pressure for nozzle discharge"], ["eq-8.13", "inlet pressure for pump head"]]
  },
  "eq-13.4-13.5": {
    use: "Gives the peak application rate and wetting time at a point on a pivot. At the outer end of a 130 ac pivot with 40 ft sprays, the peak rate is over 3 in/hr, far above most soil intake rates. Use it to explain runoff at the outer spans and to weigh sprinkler packages with wider throw.",
    ask: "Why does water run off at the end of my pivot but not near the center?",
    from: [["eq-5.20", "gross capacity C_g"], ["cn-from-flow", "gross capacity from pump flow"], ["eq-13.7-inv", "gross depth per pass"]],
    to: [["runoff-13", "peak rate and wetting time"], ["tab-13.8", "minimum wetted diameter check"], ["tab-11.4", "rate against soil intake"]]
  },
  "eq-13.6": {
    use: "Gives the peak application rate under a linear move. The rate is the same along the whole lateral and is lower than the end of a pivot of the same length and flow. Use it to compare a linear move against a pivot for a field with tight soils.",
    ask: "Would a linear move cause less runoff than a pivot on this field?",
    from: [["eq-5.20", "gross system flow Q"], ["tab-11.1-11.2", "diameter of coverage D_c"]],
    to: [["runoff-13", "peak rate for runoff screening"], ["tab-11.4", "rate against soil intake"]]
  },
  "eq-13.7": {
    use: "Converts the depth a grower wants to apply into the percent timer setting on an electric pivot. A pivot with 7 gpm/ac capacity, an end tower 1,280 ft out and an 8 ft/min top speed needs about a 20% setting to put on 1.3 in. Use it on a farm call when the grower has the deficit and needs the panel setting.",
    ask: "I want to put on an inch. What do I set the percent timer to?",
    from: [["eq-5.20", "gross capacity C_g"], ["eq-6.26", "depth needed for the period"], ["eq-5.9-5.11", "E_LQ to convert net to gross depth"]],
    to: [["eq-15.2", "revolution time for injection rate"], ["injection-plan", "time per pass for chemigation"], ["eq-13.4-13.5", "gross depth for wetting time"]]
  },
  "eq-13.7-inv": {
    use: "Works the other way: from the timer setting on the panel to the depth the pivot is putting on and the hours per revolution. Use it when you visit a field and want to know what the current setting is doing. It also shows the smallest depth the pivot can apply at 100%.",
    ask: "The pivot is set at 50%. How much water is that putting on?",
    from: [["eq-5.20", "gross capacity C_g"], ["cn-from-flow", "gross capacity from pump flow"]],
    to: [["eq-12.2", "gross depth to net depth"], ["eq-6.18-6.25", "irrigation into the checkbook"], ["eq-13.4-13.5", "gross depth for wetting time"], ["eq-15.2", "revolution time for injection"]]
  },
  "runoff-13": {
    use: "Screens a pivot or linear for runoff by putting peak rate, wetting time, slope storage and soil intake family together. Use it when a grower sees ponding or wheel-track erosion at the outer spans. The result points to a lighter depth per pass, a wider sprinkler package or more surface storage.",
    ask: "I'm getting water running down the wheel tracks. How much can I put on per pass?",
    from: [["tab-13.5-13.6", "intake family and surface storage"], ["eq-13.2", "irrigated area"], ["eq-13.4-13.5", "peak rate at the end"], ["eq-13.6", "peak rate for a linear"]],
    to: [["tab-13.8", "minimum wetted diameter"], ["eq-13.7", "depth per pass to timer setting"]]
  },
  "tab-13.1": {
    use: "Table lookup of sprinkler flow per foot of lateral by distance and gross capacity. Multiply by the local spacing to get the flow each sprinkler needs. Handy for checking a sprinkler package in the field without the full equation.",
    ask: "What flow should a sprinkler 1,000 ft out need on a 6 gpm/ac pivot?",
    from: [["eq-5.20", "gross capacity C_g"], ["cn-from-flow", "gross capacity from pump flow"]],
    to: [["eq-13.1", "discharge per foot q_s/S"], ["tab-11.1-11.2", "required flow for nozzle size"]]
  },
  "tab-13.2": {
    use: "Looks up total irrigated area for a pivot length and end gun throw. Use it for a quick acres figure when talking with a grower about adding or shutting off an end gun. The last column shows the most area the end gun can add.",
    ask: "How many acres does a 1,300 ft pivot cover with a 100 ft end gun?",
    from: [["tab-12.6", "end gun throw as radius gain"]],
    to: [["eq-5.20", "area for system flow"], ["cn-from-flow", "area for capacity per acre"], ["eq-15.2", "area per revolution"]]
  },
  "tab-13.3": {
    use: "Gives friction loss per 1,000 ft in a single-size pivot lateral, with the end gun factor if needed. Use it to estimate pressure at the end of the pivot or when a grower is adding flow. Higher loss means more inlet pressure and pumping cost.",
    ask: "How much pressure do I lose along a 6 5/8 inch pivot at 800 gpm?",
    from: [["eq-5.20", "gross system flow"], ["meter-timing", "measured system flow"], ["tab-8.1", "Hazen-Williams C"]],
    to: [["eq-13.3", "lateral friction loss P_lp"], ["pivot-eval-13", "lateral loss"], ["eq-8.13", "pivot losses into pump head"]]
  },
  "tab-13.4": {
    use: "Gives friction loss for a pivot built with two pipe sizes, by flow and the fraction of the larger pipe. Use it on longer pivots where the first spans are 8 or 10 in pipe. It shows how much pressure you save by keeping larger pipe further out.",
    ask: "How much does having 8 inch pipe on the first half of the pivot save me?",
    from: [["eq-5.20", "gross system flow"], ["meter-timing", "measured system flow"]],
    to: [["eq-13.3", "lateral friction loss P_lp"], ["eq-8.13", "pivot losses into pump head"]]
  },
  "tab-13.5-13.6": {
    use: "Gives the NRCS intake family for a soil and the surface storage allowed by slope. Look up the soil series from the soil survey, then pick storage from the field slope. These two values set how much a pivot can apply before runoff.",
    ask: "What intake family is my soil, and how much water can sit on the surface on a 2% slope?",
    from: [["tab-2.3", "soil texture"]],
    to: [["runoff-13", "intake family and surface storage"], ["tab-13.8", "surface storage and texture"]]
  },
  "tab-13.8": {
    use: "Gives the smallest sprinkler wetted diameter that avoids runoff for a given capacity, depth, storage and soil. Use it when choosing a sprinkler package for a pivot on tight soil or when deciding between sprays and rotators. If your wetted diameter is below the table value, expect runoff at the outer end.",
    ask: "Are these spray heads throwing wide enough for a silt loam?",
    from: [["eq-5.20", "gross capacity C_g"], ["tab-13.5-13.6", "surface storage and texture"], ["eq-13.7-inv", "depth per pass"], ["runoff-13", "screening result"]],
    to: [["tab-11.1-11.2", "pick a package with enough coverage"], ["eq-13.4-13.5", "recheck peak rate with the new diameter"]]
  },
  "pivot-eval-13": {
    use: "Runs a pivot check from one set of inputs: area, capacity, end sprinkler flow, end pressure, peak rate, wetting time, timer setting and hours per revolution. Use it on a farm visit or a design review when you want one picture of whether the pivot keeps up and stays on the soil. It also gives values needed for chemigation.",
    ask: "Can you look over my pivot and tell me if it is set up right?",
    from: [["meter-timing", "measured system flow"], ["tab-13.5-13.6", "soil intake and storage"], ["tab-13.3", "lateral friction loss"], ["tab-12.6", "end gun throw"]],
    to: [["eq-8.13", "inlet pressure into pump head"], ["tab-13.8", "capacity and depth for wetted diameter check"], ["eq-15.2", "revolution time for injection"], ["eq-5.4-5.5", "follow up with a uniformity test"]]
  }
});
