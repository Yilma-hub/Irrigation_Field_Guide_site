window.CALC_USE = Object.assign(window.CALC_USE || {}, {
  "salt-applied": {
    use: "Turns the salt concentration of the irrigation water and the depth applied into pounds per acre and tons per field. Use it with a water test to show a grower in the Arkansas Valley or on a brackish well how much salt the season's irrigation brings in. Fifteen inches of 500 ppm water carries about 1,700 lb of salt per acre.",
    ask: "My water test says 500 ppm. How much salt am I putting on my field each year?",
    from: [["eq-7.2", "salt concentration from EC"], ["tab-7.3", "concentration by water class"], ["meter-depth", "seasonal depth applied"], ["eq-3.1-3.2", "depth from volume and area"]],
    to: [["eq-7.6", "salt that must be leached"], ["eq-7.8", "leaching requirement"]]
  },
  "eq-7.1": {
    use: "Converts EC of the soil solution to osmotic potential, which is how salt makes water harder for roots to pull. Use it to explain why a salty field looks drought stressed even when the soil is wet. Osmotic potential adds to matric potential in the total water potential the plant works against.",
    ask: "The soil is wet but the crop looks wilted. Could salt be doing that?",
    from: [["ec-temp", "EC at 25 °C"]],
    to: [["eq-2.7", "osmotic potential in total soil water potential"]]
  },
  "eq-7.2": {
    use: "Converts an EC reading to a salt concentration in mg/L (about 640 times EC in dS/m). Use it with a handheld EC meter in the field or an EC on a lab report to get the ppm number growers and water districts often quote. That concentration feeds the salt load and leaching calculations.",
    ask: "My meter reads 1.2 dS/m. What is that in ppm?",
    from: [["ec-temp", "EC corrected to 25 °C"]],
    to: [["salt-applied", "concentration for salt load"], ["eq-5.18", "concentration for chemical loss"], ["eq-7.3", "EC for yield loss"], ["tab-7.3", "water class"]]
  },
  "ec-temp": {
    use: "EC rises with temperature, so readings must be corrected to 25 °C before comparing them with tables. Use it when you read a well or ditch with a meter that does not compensate automatically, such as cold well water in spring or a warm canal in August.",
    ask: "I measured EC on my well but the water was cold. Is that reading right?",
    from: [],
    to: [["eq-7.2", "EC25 to concentration"], ["tab-7.3", "EC25 for water class"], ["eq-7.1", "EC for osmotic potential"], ["eq-7.4-7.5", "ECa for sodicity hazard"], ["eq-7.7", "irrigation water EC"]]
  },
  "eq-7.3": {
    use: "Estimates relative yield from root zone salinity with the crop's threshold and slope. Use it with soil saturated paste EC from a salty part of a field to put a dollar figure on the problem. Corn at ECe 4.7 dS/m is near 64% of a nonsaline yield, so 180 bu/ac becomes about 115.",
    ask: "How much yield am I losing in the salty spot in my field?",
    from: [["tab-7.2", "threshold and slope"], ["eq-7.2", "EC from concentration"], ["ec-temp", "corrected EC"]],
    to: [["eq-7.9-7.10", "decide on reclamation"], ["fig-7.11", "leaching requirement to hold salinity at threshold"]]
  },
  "tab-7.2": {
    use: "Salt tolerance threshold, yield decline slope and rating for major crops, plus the root zone EC that gives the yield you will accept. Use it when a grower on saline ground is choosing a crop or deciding whether a field can stay in beans versus barley or sugar beets.",
    ask: "My soil is around 4 dS/m. What crops can I still grow there?",
    from: [],
    to: [["eq-7.3", "threshold and slope for yield"], ["fig-7.11", "threshold for leaching requirement"], ["eq-7.8", "allowable drainage salinity"]]
  },
  "tab-7.3": {
    use: "Classes irrigation water by EC from fresh to highly saline with the typical crop problems. Use it to interpret a well or surface water test for a grower in plain terms. It is the first thing to check when someone moves to a new water source or drills a new well.",
    ask: "Is my well water too salty to irrigate with?",
    from: [["ec-temp", "EC at 25 °C"]],
    to: [["eq-7.2", "concentration"], ["salt-applied", "salt load"], ["eq-7.7", "irrigation water salinity"], ["fig-7.11", "leaching requirement"]]
  },
  "eq-7.4-7.5": {
    use: "Calculates the sodium adsorption ratio from Na, Ca and Mg in a water test and reads the infiltration hazard against EC. Use it when a field crusts and seals or water ponds after irrigation, or before switching to a new water source. High SAR with low EC is the worst case for infiltration.",
    ask: "Water sits on top of my field after I irrigate. Could my water chemistry be the reason?",
    from: [["ec-temp", "ECa corrected to 25 °C"], ["tab-7.3", "water EC"]],
    to: [["tab-11.4", "lower application rate on sealing soils"], ["tab-13.5-13.6", "intake family for runoff checks"], ["tab-14.2", "water quality for drip plugging"]]
  },
  "eq-7.6": {
    use: "Actual leaching fraction is the share of infiltrated water that drains below the root zone. Use it after a season water audit to see whether enough water is passing through to carry salts down. If it is below the leaching requirement, salt is building in the root zone.",
    ask: "Am I putting on enough water to keep salt from building up?",
    from: [["eq-5.16-5.17", "deep percolation depth"], ["eq-5.6-5.7", "infiltrated irrigation"], ["eq-4.1", "seasonal water balance"]],
    to: [["eq-7.8", "compare with the leaching requirement"], ["fig-7.11", "compare with crop leaching requirement"]]
  },
  "eq-7.7": {
    use: "Weights irrigation water salinity with rainfall to get the salinity of all water the soil received. Use it in a region with some summer rain, where clean rain dilutes a salty well. In humid areas rain may do most of the leaching for the grower.",
    ask: "We get some rain in summer. Does that help with my salty well water?",
    from: [["ec-temp", "irrigation water EC"], ["tab-7.3", "water class EC"], ["eq-5.6-5.7", "infiltrated irrigation depth"], ["tab-4.8", "rainfall"]],
    to: [["eq-7.8", "ECa for leaching requirement"], ["fig-7.11", "ECa for crop leaching requirement"], ["leaching-fraction", "ECa for actual leaching fraction"]]
  },
  "leaching-fraction": {
    use: "Estimates the actual leaching fraction from the salinity of applied water and the salinity of water draining out, such as from tile outlets or deep soil water samples. Use it when you can sample drain water but not measure drainage volume. It also gives the deep percolation implied by those salinities.",
    ask: "My tile water tests saltier than my irrigation water. What does that say about leaching?",
    from: [["eq-7.7", "weighted applied salinity"], ["ec-temp", "corrected EC readings"], ["eq-5.6-5.7", "infiltrated irrigation"]],
    to: [["eq-7.8", "compare with leaching requirement"], ["eq-5.18", "deep percolation for chemical loss"]]
  },
  "eq-7.8": {
    use: "Leaching requirement is the share of infiltrated water that must drain to keep drainage water at an allowed salinity. Use it to add the right extra depth to the seasonal irrigation plan on salty water. Too little lets salt build, and too much wastes water and N.",
    ask: "How much extra water do I need to put on to keep the salt down?",
    from: [["eq-7.7", "applied water salinity"], ["tab-7.2", "crop tolerance for allowed drainage salinity"]],
    to: [["eq-5.20", "add leaching to system capacity"], ["eq-14.8", "leaching allowance in drip gross requirement"], ["eq-6.26", "extra depth in the season plan"]]
  },
  "fig-7.11": {
    use: "Reads the leaching requirement for a crop from applied water salinity and the crop threshold, then gives the drainage salinity and leaching depth. Use it for crop-specific planning, like tomatoes on 3 dS/m water needing about 17% leaching. It is the standard way to answer a salinity question for a named crop.",
    ask: "I want to grow tomatoes with this water. How much extra should I irrigate for leaching?",
    from: [["tab-7.2", "crop threshold"], ["eq-7.7", "ECa"], ["eq-5.6-5.7", "infiltrated irrigation"]],
    to: [["eq-5.20", "extra capacity for leaching"], ["eq-14.8", "leaching allowance for drip"], ["eq-6.26", "seasonal extra depth"]]
  },
  "eq-7.9-7.10": {
    use: "Estimates the water needed to reclaim a saline soil to a target EC over a given depth, by ponding or sprinkling. Use it to plan a fallow-season reclamation and show a grower that intermittent or sprinkler leaching needs far less water than continuous ponding. Drainage must be working for any of this to work.",
    ask: "How much water will it take to clean the salt out of this field?",
    from: [["eq-7.3", "yield loss that justifies reclamation"], ["tab-7.2", "target ECe for the crop"]],
    to: [["run-time", "hours to apply the leaching depth"], ["eq-3.1-3.2", "volume for the leaching depth"]]
  }
});
