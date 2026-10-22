window.CALC_USE = Object.assign(window.CALC_USE || {}, {
  "eq-14.1": {
    use: "Estimates friction loss along a drip lateral with evenly spaced emitters, using the outlet factor and the loss for plain pipe. Use it to check whether a run of drip tape or tubing is too long for its size. On a 200 ft lateral at 15 psi, the loss should stay under about 3 psi to meet the 20% rule.",
    ask: "Can I run this drip tape 400 feet down the bed, or will the far end starve?",
    from: [["tab-8.3", "multiple outlet factor F"], ["tab-14.1", "loss per 100 ft without outlets"], ["lateral-design", "lateral length with barb allowance"]],
    to: [["emitter-dq", "friction head loss h_f to the far end"], ["design-du", "friction head loss for design DU"], ["eq-8.2-8.3", "loss as pressure or head"]]
  },
  "lateral-design": {
    use: "Sizes a drip or microspray lateral: number of outlets, inlet flow, outlet factor and friction loss, checked against 20% of design pressure. Use it in a design review for a vegetable or orchard block. The book example shows 1/2 in tubing fails and 3/4 in passes for a 200 ft run with 2 gph emitters every 2 ft.",
    ask: "What size poly do I need for 200 foot rows with 2 gph emitters every 2 feet?",
    from: [["tab-14.1", "friction loss for PE pipe"], ["tab-8.3", "multiple outlet factor F"], ["eq-14.3", "emitter discharge q_e"], ["eq-14.9", "emitter count and flow"]],
    to: [["design-du", "friction loss for design DU"], ["emitter-dq", "friction loss for flow difference"], ["eq-15.4", "lateral length and outlet flow for flush time"], ["pipeline-design", "lateral flows summed for the manifold"]]
  },
  "tab-14.1": {
    use: "Gives friction loss per 100 ft for small PE pipe at a given flow. Use it when sizing drip laterals, small manifolds or microsprayer lines. Flow into a lateral is the number of emitters times their discharge.",
    ask: "How much pressure do I lose in 3/4 inch poly at 3 gpm?",
    from: [["eq-14.9", "emitter count times discharge for flow"], ["eq-14.3", "emitter discharge"]],
    to: [["eq-14.1", "loss per length P_f"], ["lateral-design", "P_f for lateral sizing"]]
  },
  "eq-14.2": {
    use: "Sizes the screen area a filter needs for a system flow, using the allowed flow per open area and the screen's open fraction. Use it when a grower is buying a screen filter for drip on clean municipal or well water. A 300 gpm system with a 0.003 in screen needs about 2.6 sq ft.",
    ask: "Is this screen filter big enough for my 300 gpm drip system?",
    from: [["eq-14.9", "emitter count and discharge set system flow"], ["meter-timing", "measured system flow"], ["tab-14.2", "water quality guides filter type"]],
    to: []
  },
  "eq-14.3": {
    use: "Gives emitter discharge at a pressure head from the emitter's K and x. Use it to see how much flow changes when pressure drops at the end of a line or on a slope. Pressure compensating emitters have small x and change little.",
    ask: "If pressure at the end of the row drops to 10 psi, how much less do my emitters put out?",
    from: [["eq-14.4", "K and x from two tests"], ["tab-14.4", "discharge exponent x"], ["eq-8.2-8.3", "pressure and head conversion"]],
    to: [["eq-14.9", "emitter discharge q_e for count"], ["drip-runtime", "emitter discharge for run time"], ["lateral-design", "discharge per outlet"], ["eq-15.4", "outlet flow for flush time"]]
  },
  "emitter-dq": {
    use: "Shows how much emitter flow differs from the header end to the far end of a field because of slope and friction. A field rising 10 ft over 1,000 ft drops vortex emitters from 1.06 to 0.92 gph, about 13%. Use it to decide whether a sloping block needs pressure compensating emitters or a different header location.",
    ask: "My field slopes uphill from the header. Do the top rows get less water?",
    from: [["eq-14.4", "K and x"], ["tab-14.4", "x for the emitter type"], ["eq-14.1", "friction loss h_f"], ["lateral-design", "lateral friction loss"]],
    to: [["eq-14.7", "minimum emitter discharge q_m"], ["design-du", "pressure range for design DU"]]
  },
  "eq-14.4": {
    use: "Finds an emitter's discharge exponent and coefficient from flows measured at two pressures. Use it when the label is missing or you want to verify a product with a quick bench or field test. An exponent near 0.5 behaves like an orifice, near 0 like a compensating emitter.",
    ask: "I caught flow at 10 and 20 psi. Is this emitter really pressure compensating?",
    from: [],
    to: [["eq-14.3", "K and x for discharge"], ["emitter-dq", "K and x for flow difference"], ["design-du", "x for design DU"]]
  },
  "eq-14.5": {
    use: "Computes the coefficient of manufacturing variation from a sample of emitter flows at one pressure. Use it when evaluating a new tape or emitter product or a disputed batch. The rating from Table 14.3 tells you whether the product is good enough for a design.",
    ask: "We tested 25 emitters from this roll. Is the quality acceptable?",
    from: [],
    to: [["tab-14.3", "v for the classification"], ["eq-14.7", "v for design DU"], ["design-du", "v for design DU"]]
  },
  "tab-14.3": {
    use: "Rates emitter manufacturing variation from excellent to unacceptable, with separate limits for point emitters and line-source tubing. Use it to compare products a dealer is offering. Pick excellent or average for long laterals and few emitters per plant.",
    ask: "Is a manufacturing variation of 0.07 good or bad for drip tape?",
    from: [["eq-14.5", "measured coefficient v"], ["tab-14.4", "published v for the emitter type"]],
    to: [["eq-14.7", "v for design DU"]]
  },
  "eq-14.6": {
    use: "Computes field emission uniformity from emitter flows caught across a block: the low-quarter average over the overall average. Use it in a drip system checkup, catching flow at the near, middle and far ends of several laterals. A DU dropping year to year often signals clogging.",
    ask: "We caught emitter flows across the field. How even is my drip system?",
    from: [],
    to: [["eq-5.9-5.11", "DU for low-quarter efficiency"], ["eq-5.8", "DU for low-quarter depth"], ["leaching-procedure", "DU for nitrate loss"]]
  },
  "eq-14.7": {
    use: "Estimates the emission uniformity a proposed drip design will reach from manufacturing variation, emitters per plant and the lowest emitter flow. Use it in design review before anything goes in the ground. The book example with spiral emitters, 2 per plant and 10 ft of friction loss gives about 78%.",
    ask: "What uniformity can I expect from this drip design before I buy it?",
    from: [["eq-14.5", "manufacturing variation v"], ["tab-14.4", "v for the emitter type"], ["emitter-dq", "minimum emitter discharge q_m"], ["eq-14.3", "discharge at the lowest pressure"]],
    to: [["eq-5.9-5.11", "DU for low-quarter efficiency"], ["eq-5.8", "DU for low-quarter depth"]]
  },
  "design-du": {
    use: "Goes from emitter type, design pressure, friction loss and elevation straight to the minimum emitter flow and design DU. Use it to compare emitter choices or lateral lengths quickly. If DU comes out low, shorten laterals, upsize tubing or switch to a compensating emitter.",
    ask: "If I switch to a compensating emitter, how much better is the uniformity?",
    from: [["tab-14.4", "x and v for the emitter type"], ["eq-14.1", "friction loss"], ["lateral-design", "lateral friction loss"], ["eq-14.4", "measured x"]],
    to: [["eq-5.9-5.11", "DU for low-quarter efficiency"], ["eq-5.8", "DU for low-quarter depth"]]
  },
  "tab-14.4": {
    use: "Lists discharge exponent, manufacturing variation and flushing ability for common emitter types. Use it to see how sensitive a given emitter is to pressure changes. It also shows the flow change for a pressure change you enter.",
    ask: "How much does a vortex emitter's flow change if the pressure drops 20%?",
    from: [],
    to: [["eq-14.3", "discharge exponent x"], ["design-du", "x and v"], ["eq-14.7", "manufacturing variation v"], ["emitter-dq", "x for flow difference"]]
  },
  "tab-14.2": {
    use: "Rates the plugging potential of irrigation water by suspended solids, pH, salts, iron, manganese, sulfide and bacteria. Use it when a grower sends a water test before installing drip, or when emitters keep clogging. Iron above 0.1 ppm in a well, common in some Coastal Plain aquifers, is a warning sign that calls for treatment.",
    ask: "Here is my well water test. Will it plug my drip lines?",
    from: [["eq-7.2", "dissolved salts from EC"]],
    to: [["eq-14.2", "severity guides filter and screen choice"]]
  },
  "eq-14.8": {
    use: "Sets the gross irrigation a drip block needs over a period: ET plus losses, less effective rain and soil water you allow to be drawn down. Use it to plan weekly drip applications for vegetables or orchards. It ties the drip schedule to the same ET numbers used elsewhere.",
    ask: "How much water does my drip system need to put on this week?",
    from: [["crop-et", "crop ET"], ["eq-4.2-4.7", "crop ET from reference ET"], ["eq-6.26", "rain and ET over the period"], ["eq-5.15", "deep percolation allowance"]],
    to: [["eq-14.9", "gross depth d_g for emitter count"], ["drip-runtime", "gross requirement for run time"]]
  },
  "eq-14.9": {
    use: "Gives how many emitters a block needs, or the area each emitter serves, for the required depth, emitter flow and hours of operation. Use it in design to check that emitter spacing and flow can meet peak demand in the time available. A 2 gph emitter running 24 hr can serve about 12 sq ft at 0.27 in/d.",
    ask: "With 2 gph emitters, how far apart can they be and still keep up?",
    from: [["eq-14.8", "gross depth d_g"], ["eq-14.3", "emitter discharge q_e"]],
    to: [["eq-14.2", "system flow for filter size"], ["lateral-design", "outlets per lateral"], ["tab-14.1", "lateral flow"]]
  },
  "drip-runtime": {
    use: "Turns the period's crop ET and rain into hours of drip run time, gallons per emitter and gallons per acre. Use it to answer the daily question from a vegetable grower on plastic: how long to run today. The application rate also shows how slowly drip puts water on compared to overhead.",
    ask: "How many hours should I run the drip on my tomatoes today?",
    from: [["crop-et", "crop ET since last irrigation"], ["eq-14.3", "emitter discharge"], ["eq-6.26", "ET and effective rain for the period"], ["eq-14.8", "gross irrigation requirement"]],
    to: [["eq-15.1", "set time as limit on injection time"], ["injection-plan", "run time for fertigation"], ["flush-total", "run time must cover flushing"], ["eq-6.18-6.25", "irrigation into the checkbook"]]
  }
});
