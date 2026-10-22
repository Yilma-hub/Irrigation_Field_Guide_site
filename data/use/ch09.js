window.CALC_USE = Object.assign(window.CALC_USE || {}, {
  "eq-9.1": {
    use: "Drawdown is the drop from static to pumping water level. Measure both with a sounder or airline during a well visit. Drawdown tracked from year to year shows a plugging screen or a falling water table, and the pumping water level is the lift you need for TDH.",
    ask: "The water sits at 100 feet when the pump is off and 120 feet when it runs. What does that tell me?",
    from: [],
    to: [["eq-9.2", "drawdown for specific capacity"], ["eq-8.13", "pumping water level as lift"], ["pump-eval", "lift for the pump test"], ["eq-8.2-8.3", "lift in feet to psi"]]
  },
  "eq-9.2": {
    use: "Specific capacity, gpm per foot of drawdown, from a pump test. Use it to compare wells on a farm, to watch a well for declining yield, and to predict drawdown at a different pumping rate. A drop in specific capacity over a few seasons points to screen encrustation or a well that needs rehabilitation.",
    ask: "My well made 40 gpm per foot when it was drilled. It is 28 now. Should I be worried?",
    from: [["eq-9.1", "drawdown"], ["meter-timing", "well discharge"]],
    to: [["eq-9.3", "SC to predict drawdown at a new rate"]]
  },
  "eq-9.3": {
    use: "Predicts drawdown and pumping water level at a new flow from specific capacity. Use it before a grower changes the pump, adds a pivot, or converts systems, because the new pumping level sets the lift, the TDH and the bowl setting. It assumes the well behaves on the straight line part of its drawdown curve.",
    ask: "If I pump 900 gpm instead of 800, how far will the water level drop?",
    from: [["eq-9.2", "specific capacity"], ["eq-5.20", "new gross flow rate"], ["farm-capacity", "flow needed at the source"]],
    to: [["eq-8.13", "new lift for TDH"], ["pump-match", "lift at the design flow"]]
  },
  "well-test": {
    use: "Runs Example 9.1 in one step: test drawdown, specific capacity, and the predicted drawdown and pumping level at a new rate. Use it during a pump test visit to give the grower a new pumping level for a planned change in flow.",
    ask: "We tested the well at 800 gpm. What will the pumping level be at 600 and at 900?",
    from: [["eq-9.1", "static and pumping levels"], ["meter-timing", "test discharge"], ["eq-5.20", "new flow to predict"]],
    to: [["eq-8.13", "predicted pumping level for TDH"], ["pump-eval", "lift for the pump evaluation"], ["pump-match", "lift at design flow"]]
  },
  "tab-9.1": {
    use: "Porosity and specific yield for common aquifer materials, and the water released when the water table drops over an area. Use it in conversations about aquifer decline, for example how many acre-feet a 2 ft drop under a section of sand and gravel represents.",
    ask: "The water table under my place dropped 3 feet. How much water is that?",
    from: [],
    to: []
  },
  "tab-9.2": {
    use: "Range of hydraulic conductivity by aquifer material. Use it for a rough idea of whether a formation can support an irrigation well and why a well in sand and gravel yields far more than one in silt, till or shale.",
    ask: "We hit mostly silt and some fine sand. Is that likely to give a decent irrigation well?",
    from: [],
    to: []
  }
});
