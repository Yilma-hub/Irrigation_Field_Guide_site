window.CALC_USE = Object.assign(window.CALC_USE || {}, {
  "eq-12.1": {
    use: "Use this when a grower with a side-roll or hand-move asks how much water a set actually puts down. Plug in the nozzle flow, the 40 by 60 ft spacing and the hours on the set to get the application rate and the gross depth. The rate tells you whether the soil can take it without ponding, and the depth tells you whether the set time is too long or too short for the deficit.",
    ask: "If I leave the wheel line on 12 hours, how many inches am I putting on?",
    from: [["tab-11.1-11.2", "q_s for the nozzle and pressure"], ["eq-11.1", "q_s from nozzle size and pressure"], ["avg-discharge-12", "average measured sprinkler discharge"], ["tab-12.3", "application rate for common spacings"]],
    to: [["eq-12.2", "gross depth d_g to net depth"], ["tab-11.4", "application rate A_r against the soil limit"], ["eq-5.1", "gross depth for application efficiency"]]
  },
  "eq-12.2": {
    use: "Converts the gross depth a moved lateral puts on into the net depth that actually reaches the root zone in the low quarter. On a field visit you compare this number to the allowable depletion. If the net depth is larger, the extra is going to deep percolation and the set time should come down.",
    ask: "Of the 4 inches the side roll puts on, how much is really stored for the crop?",
    from: [["eq-12.1", "gross depth d_g from rate and set time"], ["eq-12.11", "gross depth d_g from a traveler pass"], ["eq-5.9-5.11", "E_LQ from a uniformity test"], ["eq-11.4", "gross depth from application rate and time"]],
    to: [["eq-6.9", "net depth as effective depth sets the interval"], ["eq-6.18-6.25", "net irrigation into the checkbook"], ["moved-lateral-sheet", "net depth for the management check"]]
  },
  "eq-12.3": {
    use: "Gives the net depth each irrigation has to replace, given how long it takes to get around the field and how fast the crop is using water. For a side roll that takes 11 days to cover the field during 0.30 in/d peak use, the answer is 3.3 in per set. If that exceeds the allowable depletion, the system cannot keep up at peak with that interval.",
    ask: "It takes me 11 days to get across the field. How much do I need to put on each time to keep up?",
    from: [["tab-5.3", "peak daily ET as net use rate C_n"], ["crop-et", "crop ET rate for the period"], ["eq-12.8-12.9", "interval set by sets per lateral"], ["eq-6.8", "maximum interval T_MAX"]],
    to: [["eq-12.4", "required depth compared to allowable depletion"], ["eq-12.2", "required net depth compared to net applied"], ["run-time", "depth needed to set hours per set"]]
  },
  "eq-12.4": {
    use: "The allowable depletion caps how much water one irrigation can usefully replace. For a 4 ft sugar beet root zone in a fine sandy loam at 1.8 in/ft and 50% depletion, it is 3.6 in. Use it to check that the net depth per set and the time between sets keep the crop out of stress.",
    ask: "How dry can I let this field get before the beets start to suffer?",
    from: [["tab-2.3", "AWC by soil texture"], ["eq-2.8", "AWC from field capacity and wilting point"], ["tab-6.2", "rooting depth R_d by crop"], ["tab-6.1", "allowable fraction f_dc"]],
    to: [["eq-6.8", "AD sets the maximum interval"], ["tab-5.3", "AD selects the peak ET design value"], ["eq-12.3", "AD compared to the required net depth"], ["moved-lateral-sheet", "AD for the management check"]]
  },
  "eq-12.5-12.7": {
    use: "Lays out a moved-lateral field: acres per set and how many sets it takes to cover the field. A 1,320 ft lateral on 60 ft moves covers 1.82 ac per set, so a 1,320 by 2,640 ft field needs 44 sets. The set count drives how many laterals and how many days per irrigation the operator is signing up for.",
    ask: "How many moves will it take to get across this field with my wheel line?",
    from: [["tab-11.3", "maximum lateral spacing S_m for the wind"], ["eq-11.15", "number of sets from field width"], ["proc-moved-lateral", "lateral length and spacing from the design"]],
    to: [["eq-12.8-12.9", "number of sets N_s for laterals needed"], ["eq-11.14", "sets N_s for required sprinkler flow"], ["eq-15.1", "area per set A_s for injection rate"]]
  },
  "eq-12.8-12.9": {
    use: "Tells you how many sets one lateral can cover within the irrigation interval and how many laterals the field needs. Use it when a grower wants to stretch one side roll over more ground or is deciding whether to buy a second line. Round sets per lateral down and laterals up, then recheck the interval against crop demand.",
    ask: "Can one wheel line cover this whole quarter, or do I need two?",
    from: [["eq-12.5-12.7", "number of sets N_s in the field"], ["eq-6.8", "maximum interval from AD and ET"], ["proc-moved-lateral", "set time and interval from the design"]],
    to: [["eq-11.14", "laterals N_l and interval for sprinkler flow"], ["eq-12.3", "interval for required net depth"], ["moved-lateral-sheet", "sets per lateral and laterals"]]
  },
  "eq-12.10": {
    use: "After reading nozzle pressures with a pitot gauge at the start and end of a lateral, this gives the average pressure and checks the spread against the 20% rule. If the high and low readings are 45 and 32 psi, the line fails and you start talking about pressure regulators or a larger pipe. The average also tells you the real flow the nozzles are delivering.",
    ask: "My first sprinkler reads 45 psi and the last one 32. Is that a problem?",
    from: [["eq-11.5-11.9", "predicted inlet and end pressures"], ["eq-8.2-8.3", "pressure head to psi"]],
    to: [["tab-11.1-11.2", "average pressure P_a for nozzle flow"], ["eq-11.1", "average pressure for nozzle discharge"], ["avg-discharge-12", "pressure check paired with flow check"]]
  },
  "avg-discharge-12": {
    use: "Use after timing a bucket fill at the first and last sprinklers of a lateral. It gives the average discharge and how far the flows spread apart. A flow spread above about 10% points to pressure problems or worn nozzles, and the average flow is what you should use for application rate.",
    ask: "I caught 10.9 gpm at one end and 9.1 at the other. What am I really putting out?",
    from: [["eq-11.1", "discharge at the measured pressures"], ["tab-11.1-11.2", "table discharge at the measured pressures"], ["eq-12.10", "pressure spread along the lateral"]],
    to: [["eq-12.1", "average discharge q_s for rate and depth"], ["tab-12.3", "q_s for the application rate table"], ["eq-11.16", "q_s for lateral inflow"]]
  },
  "can-depth-12": {
    use: "Turns the volume caught in a catch can into a depth in inches. Do this for every can in a uniformity test before overlapping or computing CU. With a 4 in can top, 235 cm³ is 1.14 in.",
    ask: "I measured 235 milliliters in this can. How many inches is that?",
    from: [],
    to: [["cu-list-12", "can depths for CU"], ["eq-5.3", "depths for Christiansen CU"], ["eq-5.2", "depths for low-quarter DU"], ["eq-5.13", "average depth for scheduling coefficient"]]
  },
  "catch-can-12": {
    use: "Runs a full moved-lateral catch can test. Enter the volumes by row, and it overlaps the catch from the neighboring sets to give the depths the field actually gets and the CU. Use it when a grower complains of streaks in a wheel-line field or before you trust an efficiency number for scheduling.",
    ask: "We set out cans along the side roll. Is the water going on evenly?",
    from: [["can-depth-12", "same volume to depth conversion"], ["eq-12.5-12.7", "lateral spacing S_m used to overlap"]],
    to: [["tab-5.1", "CU for the F1 factor"], ["leaching-procedure", "CU and depths for nitrate loss"], ["eq-5.14", "CU for deep percolation from nonuniformity"], ["cu-list-12", "overlapped depths"]]
  },
  "cu-list-12": {
    use: "Computes Christiansen CU from any list of overlapped depths. Use it when you already have depths from a spreadsheet or a field crew. A CU in the high 80s is typical of a well run side roll. Values below about 80 are worth a nozzle and pressure check.",
    ask: "Here are the depths from our test. What uniformity is that?",
    from: [["can-depth-12", "depth caught in each can"], ["catch-can-12", "overlapped depths by row"]],
    to: [["tab-5.1", "CU for the F1 factor"], ["eq-5.14", "CU for deep percolation"], ["leaching-procedure", "CU for nitrate leaching"]]
  },
  "eq-12.11": {
    use: "For a hard-hose traveler, this gives the travel speed and the gross depth one pass puts on. A 585 gpm gun on 264 ft lanes moving 110 ft/hr applies about 1.9 in. Use it on a farm call to pick the speed setting that matches the deficit, which matters on sandy Coastal Plain soils that hold little water.",
    ask: "What speed do I set the reel to put down an inch?",
    from: [["tab-12.6", "gun flow q_s at the operating pressure"], ["eq-12.14", "gun discharge from nozzle and pressure"], ["tab-12.7", "lane spacing W_p"], ["tab-12.8", "travel distance for the hose length"]],
    to: [["eq-12.2", "gross depth d_g to net depth"], ["eq-6.9", "effective depth sets the interval"], ["traveler-sheet", "travel speed and depth"]]
  },
  "eq-12.12": {
    use: "Gives the average application rate under a traveler gun from its flow, wetted radius and the arc it covers. Big guns put water on fast, often near 0.5 in/hr, so compare this to what the soil can take. Opening the arc from 270° to 330° lowers the rate.",
    ask: "Is my big gun putting water on faster than this ground can soak it up?",
    from: [["tab-12.6", "gun flow and wetted radius"], ["eq-12.14", "gun discharge q_s"]],
    to: [["tab-11.4", "A_r against maximum rate for soil and slope"], ["traveler-sheet", "application rate check"]]
  },
  "eq-12.13": {
    use: "Sizes the flow a traveler needs to keep up with crop demand over a field, given lanes, set times, the interval and down time. Use it in a design review or when a grower adds acres to an existing traveler. If the answer is more than the gun and hose can carry, you need a second traveler or a longer interval.",
    ask: "What size gun do I need for this traveler to keep up in July?",
    from: [["cn-from-flow", "net capacity C_n"], ["eq-5.9-5.11", "E_LQ as application efficiency"], ["tab-12.7", "lane width W_p"], ["tab-12.8", "lane length and travel distance"]],
    to: [["tab-12.6", "required q_s to pick gun and nozzle"], ["eq-12.14", "required q_s for nozzle sizing"], ["tab-12.9-12.10", "flow for hose friction loss"], ["tab-12.8", "flow against hose capacity"]]
  },
  "eq-12.14": {
    use: "Calculates gun discharge from nozzle pressure and size using the manufacturer's coefficient and exponents. Use it to see how much the flow drops when the pressure at the gun is lower than design, or to compare nozzle sizes. A 1.83 in nozzle at 60 psi gives about 584 gpm.",
    ask: "If I only have 50 psi at the gun, how much flow do I lose?",
    from: [["tab-12.6", "published flow vs pressure to check C_d, a, b"], ["tab-12.9-12.10", "hose loss sets pressure left at the gun"]],
    to: [["eq-12.11", "q_s for depth and speed"], ["eq-12.12", "q_s for application rate"], ["tab-12.9-12.10", "q_s for hose friction loss"]]
  },
  "tab-12.3": {
    use: "Quick lookup of application rate for common moved-lateral spacings and nozzle flows. Use it in the truck when a grower tells you spacing and nozzle flow and you want the in/hr without a calculator. Compare the result to the soil intake to catch runoff problems.",
    ask: "What rate do 40 by 60 spacing and 10 gpm heads put on?",
    from: [["tab-11.1-11.2", "q_s for the nozzle and pressure"], ["eq-11.1", "q_s from nozzle size"], ["avg-discharge-12", "measured average discharge"]],
    to: [["eq-12.1", "application rate A_r for gross depth"], ["eq-11.4", "rate for depth per set"], ["tab-11.4", "rate against soil limit"]]
  },
  "tab-12.6": {
    use: "Looks up gun flow and wetted diameter for a nozzle size and pressure. Use it to pick a gun nozzle for a traveler or stationary gun, or to see what a pressure drop does to coverage. The wetted diameter feeds the lane spacing limit.",
    ask: "What flow and throw do I get from a 1.0 inch taper bore at 80 psi?",
    from: [["tab-12.9-12.10", "hose loss sets pressure at the gun"], ["eq-12.13", "required flow q_s"]],
    to: [["tab-12.7", "wetted diameter for lane spacing"], ["eq-12.12", "flow and wetted radius for rate"], ["eq-12.11", "flow for depth"], ["eq-13.2", "end gun throw as radius gain"]]
  },
  "tab-12.7": {
    use: "Gives the maximum lane spacing for a traveler as a percent of the gun's wetted diameter, by wind. Lanes spaced too wide leave dry strips between passes. In a windy site, use the lower percentages and check the actual lane width against the limit.",
    ask: "How far apart can I run my traveler lanes with this gun?",
    from: [["tab-12.6", "gun wetted diameter"]],
    to: [["eq-12.11", "lane spacing W_p for depth"], ["eq-12.13", "lane width for traveler flow"], ["traveler-sheet", "maximum set width"]]
  },
  "tab-12.8": {
    use: "Lists typical capacity, travel distance, area and pull for cable-tow travelers by hose size and length. Use it to screen whether a hose reel can handle the flow and field length before getting into detail. A 4.5 in by 1,320 ft hose handles about 730 gpm over 2,640 ft of travel.",
    ask: "Will a 4 inch hose reel cover a 1,300 ft long field?",
    from: [["eq-12.13", "required traveler flow"], ["tab-12.6", "gun flow"]],
    to: [["tab-12.9-12.10", "hose size and length for friction loss"], ["eq-12.11", "travel distance and lane spacing"], ["eq-12.13", "lane spacing and length"]]
  },
  "tab-12.9-12.10": {
    use: "Gives friction loss in lay-flat or hard hose for a flow and hose size. Hose loss on a traveler is often 20 psi or more, so this decides the pressure the pump must supply. Use it when a grower's gun is under-throwing or when choosing hose diameter.",
    ask: "How much pressure am I losing in 1,000 feet of 4.5 inch hose at 600 gpm?",
    from: [["eq-12.14", "gun flow Q"], ["tab-12.8", "hose diameter and length"], ["eq-12.13", "required traveler flow"]],
    to: [["eq-8.13", "hose loss into pump total dynamic head"], ["eq-8.14", "hose loss into booster head"], ["tab-12.6", "pressure left at the gun"], ["traveler-sheet", "hose loss in the pressure budget"]]
  },
  "moved-lateral-sheet": {
    use: "Runs the whole side-roll or hand-move check in one place: mainline and lateral losses, spacing limits, application rate, sets, interval and the crop use the system can meet. Use it for a full system review on a farm visit or before a grower changes nozzles or set times. Each check flags where the system falls short.",
    ask: "Can you look over my whole wheel-line setup and tell me if it works?",
    from: [["tab-2.3", "AWC by texture"], ["tab-6.2", "root depth"], ["tab-11.1-11.2", "nozzle flow and wetted diameter"], ["tab-11.3", "spacing limits"], ["tab-8.3", "multiple outlet factor F"]],
    to: [["eq-8.13", "pressure needs for pump head"], ["eq-12.10", "field pressure check of the design"], ["catch-can-12", "field uniformity check"], ["eq-6.18-6.25", "net depth into the checkbook"]]
  },
  "traveler-sheet": {
    use: "Runs a full traveler check: gun flow, mainline and hose losses, required inlet pressure, lane width, speed, depth, rate and the crop use the system can supply. Use it when sizing a traveler for vegetables or a new field, or when a gun is not throwing to the edge. It shows whether the pump pressure and the schedule both work.",
    ask: "Will my traveler and pump handle this new 80 acre field?",
    from: [["tab-12.6", "gun flow and wetted diameter"], ["tab-12.7", "lane width limit"], ["tab-12.8", "hose and travel limits"], ["tab-2.3", "AWC by texture"], ["tab-6.2", "root depth"]],
    to: [["eq-8.13", "required inlet pressure into pump head"], ["eq-8.14", "booster pump head"], ["tab-11.4", "application rate against soil limit"], ["eq-6.18-6.25", "net depth into the checkbook"]]
  }
});
