window.CALC_USE = Object.assign(window.CALC_USE || {}, {
  "eq-8.1": {
    use: "Converts pipe velocity into the head it carries. Use it when you add up total head at a gauge point or when a velocity head term matters, as at a pump discharge or a meter. In most farm mainlines at 5 ft/s it is only about 0.4 ft, so it also tells you when you can safely ignore it.",
    ask: "Do I need to worry about velocity head when I read the pressure gauge at the pump?",
    from: [["eq-8.5", "average velocity from flow and pipe size"], ["eq-3.6", "velocity from a flow measurement"]],
    to: [["eq-8.4", "velocity head in total head"], ["eq-8.6-8.7", "velocity head terms in Bernoulli"], ["eq-8.12", "minor loss is K times velocity head"]]
  },
  "eq-8.5": {
    use: "Checks pipe velocity for a flow and inside diameter. On a design review or when a grower adds acres to an existing mainline, compare the answer to the 5 ft/s guideline to judge water hammer risk and friction loss. Above 5 ft/s, look at the next pipe size up.",
    ask: "If I push 900 gpm through my 8 inch PVC main, is that too fast?",
    from: [["meter-timing", "measured flow rate"], ["eq-3.3", "system flow rate"], ["tab-8.5", "inside diameter of a candidate size"], ["eq-5.20", "gross system flow rate"]],
    to: [["eq-8.1", "velocity for velocity head"], ["eq-8.12", "velocity for fitting losses"], ["tab-8.5", "compare against the 5 ft/s table"], ["eq-15.3", "pipe size and flow for flushing time"]]
  },
  "eq-8.2-8.3": {
    use: "Converts a depth of water to pressure, 1 ft of water is 0.433 psi. Use it for elevation effects in the field: a pivot point 40 ft below the far corner loses about 17 psi going uphill, and a tank 20 ft above a drip zone gives about 8.7 psi.",
    ask: "My field rises 30 feet from the well to the back corner. How much pressure do I lose to that hill?",
    from: [["eq-9.1", "lift or drawdown in feet"]],
    to: [["eq-8.10", "elevation change as pressure"], ["eq-8.13", "lift converted to head"], ["eq-11.5-11.9", "elevation difference along a lateral"], ["eq-13.3", "elevation gain along a pivot"]]
  },
  "eq-8.4": {
    use: "Totals elevation, pressure and velocity head at one point in a pipe. Use it when you set a reference datum for a system check, such as the pump base, and want the energy available at a hydrant or riser. It is the starting point for comparing two gauges on the same line.",
    ask: "I have 55 psi at the riser on the hill. How much total energy does the water have there compared to the pump?",
    from: [["eq-8.2-8.3", "pressure and head conversion"], ["eq-8.5", "velocity in the pipe"], ["eq-8.1", "velocity head"]],
    to: [["eq-8.6-8.7", "total head at each point for Bernoulli"]]
  },
  "eq-8.6-8.7": {
    use: "Finds pressure at a downstream point from conditions upstream, the change in elevation and the head lost between them. Use it to predict pressure at the end of a mainline or at a field inlet after a long run, then check whether the sprinklers or drip emitters still get their design pressure.",
    ask: "I have 60 psi at the pump and the field is a quarter mile away and 15 feet higher. What will I have at the field?",
    from: [["eq-8.4", "total head at point 1"], ["eq-8.8-8.9", "head loss between the points"], ["eq-8.5", "velocities at each point"]],
    to: [["eq-8.13", "pressure needed at the pump discharge"], ["eq-11.5-11.9", "pressure available at a lateral inlet"], ["eq-13.3", "pivot inlet pressure"]]
  },
  "eq-8.8-8.9": {
    use: "Adds friction loss and fitting losses to get total head or pressure loss in a pipe run. Use it at the end of a pipe sizing check so the minor losses in valves, elbows, meters and filters are not forgotten. On short runs with many fittings, minor losses can be a large share of the total.",
    ask: "How much pressure am I losing between the pump and the filter station with all those elbows and the meter?",
    from: [["eq-8.11", "friction loss"], ["tab-8.2", "table friction loss over the length"], ["eq-8.12", "minor losses in fittings"]],
    to: [["eq-8.10", "pressure loss for end pressure"], ["eq-8.6-8.7", "head loss between two points"], ["eq-8.13", "losses that the pump must cover"]]
  },
  "eq-8.10": {
    use: "Pressure form of Bernoulli for a field pipe: inlet pressure, minus losses, plus or minus the elevation change. This is the daily tool for checking whether a mainline delivers enough pressure to a pivot, a set of laterals or a drip zone. Use it before buying a pump or adding a zone to an existing line.",
    ask: "If I put 50 psi in at the well, will I still have 35 psi at the drip zone at the far end?",
    from: [["eq-8.8-8.9", "total pressure loss"], ["eq-8.2-8.3", "elevation change as psi"], ["pipeline-design", "friction and minor losses for a pipe"]],
    to: [["eq-8.13", "required pump discharge pressure"], ["eq-8.14", "booster pump inlet pressure"], ["eq-11.5-11.9", "pressure at a lateral inlet"], ["eq-13.3", "pressure at the pivot inlet"]]
  },
  "eq-8.11": {
    use: "Hazen-Williams friction loss for a pipe, with an outlet factor for laterals that discharge along their length. Use it to size a mainline, to check a gated pipe or sprinkler lateral, or to see how much loss an old pipe adds when flow is increased. It also reports velocity so you can check the 5 ft/s rule at the same time.",
    ask: "What will the friction loss be in 2,000 feet of 6 inch PVC at 500 gpm?",
    from: [["tab-8.1", "Hazen-Williams C for the pipe material"], ["tab-8.3", "multiple outlet factor F"], ["eq-8.5", "flow and inside diameter"], ["eq-11.16", "lateral inflow"]],
    to: [["eq-8.8-8.9", "friction loss in total loss"], ["eq-8.10", "pressure loss to end of pipe"], ["eq-11.5-11.9", "lateral friction loss"], ["eq-8.13", "losses the pump must supply"]]
  },
  "tab-8.1": {
    use: "Gives the Hazen-Williams C for the pipe material. Use 150 for PVC and polyethylene and lower values for aluminum with couplers or old steel. Pick C before any friction calculation, and use a lower value when you check an old, rough or scaled pipe.",
    ask: "What roughness number should I use for my 30 year old steel well column versus new PVC?",
    from: [],
    to: [["eq-8.11", "C for friction loss"], ["eq-11.11", "C for a sprinkler lateral"], ["eq-11.10-11.13", "C for maximum lateral inflow"], ["tab-8.2", "C behind the friction tables"]]
  },
  "tab-8.2": {
    use: "Friction loss per 100 ft for common aluminum and PVC irrigation pipe at a given flow, with a Hazen-Williams check and velocity flag. Use it at the kitchen table with a grower to compare two pipe sizes quickly, or to check a gated pipe run. The velocity flag shows when the pipe is undersized.",
    ask: "Is 8 inch gated pipe big enough for 800 gpm over a quarter mile, or do I need 10 inch?",
    from: [["tab-8.3", "outlet factor F for gated or sprinkler pipe"], ["eq-5.20", "gross system flow rate"], ["tab-8.5", "candidate pipe size"]],
    to: [["eq-8.8-8.9", "friction loss in total loss"], ["eq-8.10", "pressure at the end of the pipe"], ["pipeline-design", "pipe friction for a pressure check"]]
  },
  "tab-8.3": {
    use: "Multiple outlet factor F that reduces friction loss for a pipe with evenly spaced outlets, such as a sprinkler lateral, gated pipe, pivot or drip lateral. With 30 or more outlets F is about 0.36. Use it any time flow drops along the pipe, or you will overestimate the loss by close to three times.",
    ask: "My lateral has 40 sprinklers on it. Why is the friction loss so much less than a plain pipe?",
    from: [["eq-11.16", "number of sprinklers on a lateral"]],
    to: [["eq-8.11", "F in Hazen-Williams"], ["tab-8.2", "F times table loss"], ["eq-11.11", "F for lateral friction"], ["eq-11.10-11.13", "F for maximum lateral inflow"], ["eq-14.1", "F for a drip lateral"]]
  },
  "eq-8.12": {
    use: "Minor loss in fittings and valves from K times velocity head. Use it to add up losses at a pump panel, filter station or valve manifold where elbows, tees, check valves and gate valves are close together. A check valve or partly closed gate valve at a high velocity can cost several psi.",
    ask: "How much pressure am I losing through the check valve and three elbows at the pump?",
    from: [["tab-8.4", "K for each fitting"], ["eq-8.5", "velocity in the fitting"], ["eq-8.1", "velocity head"]],
    to: [["eq-8.8-8.9", "minor losses in total loss"], ["pipeline-design", "sum of fitting losses"]]
  },
  "tab-8.4": {
    use: "K values for common fittings and valves by size. Use it to list the fittings on a pump discharge or manifold and sum their K values before running a minor loss calculation.",
    ask: "What loss coefficient should I use for a 6 inch swing check valve?",
    from: [],
    to: [["eq-8.12", "K for minor loss"], ["pipeline-design", "sum of K values"]]
  },
  "tab-8.5": {
    use: "Smallest aluminum or PVC pipe that keeps velocity at or below 5 ft/s for a given flow. Use it as the first cut for mainline size in a new system or a well upgrade, then check friction loss and cost with the friction table.",
    ask: "What size main do I need for an 1,100 gpm well?",
    from: [["eq-5.20", "gross system flow rate"], ["farm-capacity", "flow needed at the source"], ["eq-8.5", "velocity check"]],
    to: [["eq-8.5", "inside diameter for velocity"], ["tab-8.2", "friction loss in the chosen size"], ["eq-8.11", "inside diameter for Hazen-Williams"], ["pipeline-design", "pipe choice for the pressure check"]]
  },
  "pipeline-design": {
    use: "Runs the full pressure check on a mainline or a lateral: inlet velocity, outlet factor, friction, fitting losses and elevation, giving pressure at the far end. Use it on a design review or when a grower wants to stretch an existing line to a new field or add outlets.",
    ask: "If I extend the mainline another 1,300 feet up the hill to the new pivot, will it still have enough pressure?",
    from: [["tab-8.5", "pipe size"], ["tab-8.4", "fitting K values"], ["tab-8.3", "outlet factor"], ["eq-11.16", "lateral inflow and outlets"], ["eq-5.20", "system flow"]],
    to: [["eq-8.13", "pressure the pump must supply"], ["eq-11.5-11.9", "pressure at lateral inlet and end"], ["eq-13.3", "pivot inlet pressure"], ["eq-8.10", "same check in pressure form"]]
  },
  "eq-8.13": {
    use: "Total dynamic head for a well pump from discharge pressure and lift. Use it for every pump test and every pump selection. On a field visit, take the pumping water level from the sounding tube or airline and the discharge gauge reading, and you have TDH in a minute.",
    ask: "My pressure gauge reads 45 psi and the water is at 180 feet while pumping. What head is the pump working against?",
    from: [["eq-9.1", "pumping water level for lift"], ["eq-9.3", "predicted pumping level at a new rate"], ["eq-8.10", "required discharge pressure"], ["pipeline-design", "losses the pump must cover"]],
    to: [["eq-8.17-8.19", "TDH for water horsepower"], ["eq-8.22", "TDH for energy per acre-inch"], ["eq-8.15", "current TDH for affinity laws"], ["pump-eval", "TDH in the pump evaluation"]]
  },
  "eq-8.14": {
    use: "Total dynamic head for a booster pump from inlet and outlet pressures. Use it when a booster is added on a pivot for an end gun or on a canal or reservoir pump feeding a pressurized system.",
    ask: "The booster on my end gun takes in 30 psi and puts out 65. What head is that?",
    from: [["eq-8.10", "pressure at the booster inlet"]],
    to: [["eq-8.17-8.19", "TDH for horsepower"], ["eq-8.22", "TDH for energy use"]]
  },
  "eq-8.15": {
    use: "Pump affinity laws for a change in speed or impeller diameter. Use it when a grower changes from flood to sprinkler or drip, or converts a pivot to low pressure, and the pump now makes far more head than needed. It shows whether trimming the impeller or slowing the engine or VFD gets to the new duty point.",
    ask: "We went to low pressure drops on the pivot. Can I just slow the engine down instead of buying a new pump?",
    from: [["eq-8.13", "current TDH"], ["eq-8.17-8.19", "current brake horsepower"], ["pump-match", "target head per the system"]],
    to: [["eq-8.17-8.19", "new flow and head for horsepower"], ["eq-8.22", "new TDH for energy use"], ["pump-match", "head per stage after the change"]]
  },
  "eq-8.16": {
    use: "Pump efficiency as water horsepower over brake horsepower. Use it with a pump test to see whether the bowl assembly is worn, and to compare the field number against the pump curve.",
    ask: "The pump test says 62 water horsepower and the motor is drawing 95. Is that pump worn out?",
    from: [["eq-8.17-8.19", "water horsepower"]],
    to: [["eq-8.17-8.19", "efficiency for brake horsepower"]]
  },
  "eq-8.17-8.19": {
    use: "Water horsepower from flow and TDH, and brake horsepower from pump efficiency. Use it to size the motor or engine for a new well and to judge an existing power unit during a pump test. The whp also feeds the Nebraska performance rating.",
    ask: "What size motor do I need for 900 gpm at 300 feet of head?",
    from: [["eq-8.13", "TDH of a well pump"], ["eq-8.14", "TDH of a booster"], ["eq-8.16", "pump efficiency"], ["meter-timing", "measured flow rate"]],
    to: [["eq-8.20", "whp for the performance rating"], ["eq-8.21", "whp for energy per hour"], ["eq-8.16", "whp for efficiency"], ["eq-8.15", "current bhp for affinity laws"]]
  },
  "tab-8.6": {
    use: "Nebraska pumping plant performance criteria, the whp-hr per unit of energy a well matched plant should deliver for diesel, propane, natural gas, electricity and gasoline. Use it as the benchmark in every pump energy audit.",
    ask: "What should a good electric pumping plant deliver per kilowatt-hour?",
    from: [],
    to: [["eq-8.20", "criteria for the rating"], ["eq-8.21", "criteria for energy per hour"], ["eq-8.22", "criteria for energy per acre-inch"], ["pump-eval", "benchmark in the evaluation"]]
  },
  "eq-8.20": {
    use: "Performance rating, the actual whp-hr per unit of fuel or kWh divided by the Nebraska criteria. Use it after a pump test to tell the grower in one number how the plant compares. A rating well below 1.0 means energy is being wasted somewhere in the pump, drive or power unit.",
    ask: "How does my diesel well compare to what a good pumping plant should do?",
    from: [["eq-8.17-8.19", "water horsepower"], ["tab-8.6", "performance criteria"]],
    to: [["eq-8.21", "PR for energy per hour"], ["eq-8.22", "PR for energy per acre-inch"], ["pump-match", "PR for throttling energy"]]
  },
  "eq-8.21": {
    use: "Energy use and cost per hour of pumping. Use it for a seasonal energy budget, or to compare the hourly cost of running a pump at its current rating against the cost after a repair.",
    ask: "What does it cost me per hour to run my natural gas engine on this well?",
    from: [["eq-8.17-8.19", "water horsepower"], ["eq-8.20", "performance rating"], ["tab-8.6", "criteria and energy unit"]],
    to: [["pump-eval", "hourly energy in the evaluation"]]
  },
  "eq-8.22": {
    use: "Energy and cost per acre-inch pumped from TDH and the performance rating. This is the number to compare wells, energy sources and the value of saving water. Multiply by the season's acre-inches to see the dollar value of a better schedule or a pump repair.",
    ask: "If I cut 3 inches of water this year on 130 acres, how much fuel do I save?",
    from: [["eq-8.13", "TDH"], ["eq-8.20", "performance rating"], ["tab-8.6", "criteria"], ["meter-depth", "season volume pumped"], ["eq-3.1-3.2", "volume applied"]],
    to: [["pump-eval", "energy per acre-inch in the evaluation"], ["pump-match", "energy with and without throttling"]]
  },
  "pump-eval": {
    use: "Full pumping plant evaluation from one pump test: TDH, whp, performance, rating, energy per acre-inch and the season savings if the plant were brought up to the criteria. Use it on a field visit with a pressure gauge, a water level sounder, a flow meter and the fuel or power reading, then use the payback to decide on a repair.",
    ask: "Is it worth pulling and rebuilding my pump, or should I leave it?",
    from: [["eq-9.1", "pumping water level for lift"], ["meter-timing", "flow rate"], ["tab-8.6", "performance criteria"], ["eq-8.13", "TDH"]],
    to: [["pump-match", "check for an oversized pump"], ["eq-8.15", "change in speed or impeller"]]
  },
  "pump-match": {
    use: "Checks a pump that makes more head than the system needs and estimates the energy burned across a throttling valve. Use it after a conversion to low pressure pivot packages or drip, when the old high head pump is being held back with a partly closed valve.",
    ask: "We put on low pressure nozzles and now keep the valve half shut. How much is that costing us?",
    from: [["eq-8.13", "design TDH"], ["eq-9.3", "pumping water level at design flow"], ["eq-8.20", "performance rating"], ["tab-8.6", "criteria"]],
    to: [["eq-8.15", "impeller trim or speed change"], ["eq-8.22", "energy per acre-inch after the fix"]]
  }
});
