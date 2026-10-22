window.CALC_USE = Object.assign(window.CALC_USE || {}, {
  "eq-5.1": {
    use: "Application efficiency is the first number to put on an irrigation when a grower wants to know how much of what he pumped actually stayed in the root zone. Use it after a field check where you know the soil water deficit that was refilled and the gross depth from the meter. A center pivot that applied 1.0 in to refill a 0.8 in deficit is running at 80% at best. It tells you whether to cut the depth per irrigation or look for losses.",
    ask: "I put on an inch last week. How much of that did the corn actually get?",
    from: [["eq-3.1-3.2", "gross depth applied from volume and area"], ["meter-depth", "gross depth from totalizer readings"], ["eq-3.3", "gross depth from flow rate and time"], ["eq-2.13", "net depth stored, equal to the deficit refilled"], ["eq-6.14-6.15", "SWD before irrigation as the net depth"]],
    to: [["project-efficiency", "Ea as the field application efficiency"], ["eq-12.2", "efficiency to convert gross to net depth"], ["eq-12.13", "Ea in traveler flow requirement"]]
  },
  "eq-5.2": {
    use: "Distribution uniformity of the low quarter is the standard number for how evenly a system puts water on the field. Get it from a catch-can test on a pivot or set sprinkler, or from infiltration depths along a furrow. A DU below about 0.70 on a sprinkler system usually points to worn nozzles, wrong pressure regulators or a bad sprinkler package, and it sets how much extra water the grower has to pump to get the dry spots wet.",
    ask: "Why does the corn at the far end of my pivot always look worse than the rest?",
    from: [["catch-can", "low-quarter and mean catch depths"], ["eq-14.6", "low-quarter and mean emitter flows"], ["eq-10.12", "low-quarter depth on a furrow"], ["eq-5.6-5.7", "mean depth infiltrated"]],
    to: [["eq-5.8", "DU to estimate the low-quarter depth"], ["eq-5.9-5.11", "DU for effective depth and ELQ"], ["eq-5.13", "DU sets the scheduling coefficient"], ["leaching-procedure", "DU in the leaching estimate"]]
  },
  "eq-5.3": {
    use: "Christiansen uniformity is the classic sprinkler uniformity number from a grid of catch cans. Use it on a solid-set, wheel line or hand-move test where each can represents an equal area. A CU of 85% or more is a reasonable target for row crops, and CU also sets the F1 factor that estimates deep percolation from nonuniformity.",
    ask: "We laid out cans under my wheel line. Is this pattern good enough or do I need new nozzles?",
    from: [["can-depth-12", "can volumes converted to depth"], ["catch-can-12", "overlapped depths from a moved-lateral test"]],
    to: [["tab-5.1", "CU to look up F1"], ["eq-5.14", "CU for deep percolation from nonuniformity"], ["leaching-procedure", "CU in the nitrate leaching estimate"]]
  },
  "eq-5.4-5.5": {
    use: "On a center pivot the outer cans represent much more area than the inner cans, so plain CU gives the wrong answer. The Heermann and Hein coefficient weights each can by its distance from the pivot point. Use it for a pivot uniformity test along a radial line of cans, usually run after a nozzle package change or when a grower sees rings or streaks in the crop.",
    ask: "We ran cans out along my pivot. What's the real uniformity on this machine?",
    from: [["can-depth-12", "can catch converted to depth"], ["eq-13.1", "design discharge along the lateral for comparison"]],
    to: [["tab-5.1", "uniformity to look up F1"], ["eq-5.14", "uniformity for nonuniformity deep percolation"], ["leaching-procedure", "uniformity for nitrate loss per irrigation"]]
  },
  "catch-can": {
    use: "This is the full catch-can workup in one place: DU, CU, how much of the field got the deficit, average deep percolation and ELQ. Use it right after a field evaluation with the can depths, the SWD measured before the test and the meter depth. It gives a grower a one-page answer on whether the system is under-watering part of the field or wasting water below the roots.",
    ask: "You ran the can test on my system. Bottom line, how is it doing and how much am I losing?",
    from: [["can-depth-12", "can volumes to depths"], ["eq-6.14-6.15", "SWD before the test"], ["swd-fcobs", "SWD from a sensor"], ["meter-depth", "depth applied from the source"]],
    to: [["eq-5.13", "dz and dLQ for the scheduling coefficient"], ["eq-5.20", "ELQ for gross system capacity"], ["eq-6.18-6.25", "dLQ as effective irrigation in the checkbook"], ["leaching-procedure", "DU and CU for nitrate loss"], ["eq-5.16-5.17", "deep percolation depth"]]
  },
  "eq-5.6-5.7": {
    use: "The depth that actually soaks in is the gross depth minus runoff, evaporation and drift. Use it when sprinklers run on a hot windy afternoon or a furrow field sends water off the tail end, so the grower credits the soil with what infiltrated and not what left the pump. On a low-pressure pivot in July, evaporation and drift are small, but on high-pressure guns in wind they can be large.",
    ask: "If I lose some to wind and some off the end of the field, how much water really got into the ground?",
    from: [["eq-3.3", "gross depth from flow and time"], ["meter-depth", "gross depth from the meter"], ["eq-10.2", "runoff depth"], ["eq-5.12", "runoff depth with recovery"]],
    to: [["eq-5.8", "mean infiltrated depth dz"], ["eq-5.9-5.11", "dz for effective depth"], ["eq-5.14", "dz for nonuniformity losses"], ["eq-7.6", "infiltrated irrigation for leaching fraction"], ["eq-7.7", "infiltrated irrigation for applied salinity"]]
  },
  "eq-5.8": {
    use: "Multiply DU by the mean infiltrated depth to get the depth the driest quarter of the field received. This is the number to use in the checkbook, because scheduling to the low quarter keeps the dry spots out of stress. On a pivot with DU 0.80 applying 1.0 in, the low quarter only gets 0.8 in.",
    ask: "If my pivot puts on an inch on average, how much is the dry part of the field getting?",
    from: [["eq-5.2", "DU"], ["catch-can", "DU from a test"], ["eq-5.6-5.7", "mean depth infiltrated"], ["eq-14.6", "emission uniformity for drip"]],
    to: [["eq-5.15", "dLQ for excess application losses"], ["eq-5.13", "dLQ for the scheduling coefficient"], ["eq-6.18-6.25", "dLQ as effective irrigation"], ["checkbook", "daily dLQ in the checkbook"]]
  },
  "eq-5.9-5.11": {
    use: "Effective depth is what the low quarter stores, capped at the deficit, and ELQ divides that by what came from the source. Use it to judge an irrigation that was already applied or to plan a depth that refills the low quarter without pushing water below the roots. It is the efficiency to carry into system capacity and scheduling.",
    ask: "How much of each irrigation is going to work for the crop in the driest part of my field?",
    from: [["eq-5.2", "DU"], ["eq-5.6-5.7", "mean depth infiltrated"], ["eq-6.14-6.15", "SWD before irrigation"], ["eq-5.12", "depth applied from the source"]],
    to: [["eq-5.20", "ELQ for gross capacity"], ["cn-from-flow", "ELQ for net capacity"], ["eq-6.9", "effective depth for the irrigation interval"], ["eq-6.16-6.17", "planned effective depth for ED"], ["eq-12.2", "ELQ to get net depth"]]
  },
  "eq-5.12": {
    use: "With a tailwater pit and pumpback, part of the gross depth on a furrow field is reused runoff. This splits the gross depth into runoff and the depth that came from the well or ditch. Use it when a surface irrigator asks whether a reuse system is paying off, since it is the source water that costs pumping and water rights.",
    ask: "With my tailwater pit, how much am I really pulling from the ditch for each set?",
    from: [["eq-10.8", "runoff ratio"], ["tab-10.3-10.4", "runoff ratio by cutoff ratio"], ["eq-10.4", "gross depth for a furrow set"], ["eq-10.5", "gross depth for a border"]],
    to: [["eq-5.9-5.11", "da for ELQ"], ["eq-5.6-5.7", "runoff depth"], ["eq-10.6-10.7", "runoff and return ratios for ELQ"]]
  },
  "eq-5.13": {
    use: "The scheduling coefficient says how much longer a system has to run because of poor uniformity, so the driest spot gets the target depth. It is widely used on turf and landscape sprinklers and on any set system after a catch-can audit. An SC of 1.25 means 25% extra run time, and fixing heads usually beats paying for that water.",
    ask: "My sprinkler contractor says I need to run 25% longer. Is that right, or should I fix the heads?",
    from: [["catch-can", "mean and low-quarter depths"], ["eq-5.8", "low-quarter depth"], ["eq-3.5", "average application rate"], ["eq-11.2-11.3", "sprinkler application rate"]],
    to: [["run-time", "adjusted run time for the target depth"], ["eq-11.4", "operating time for the gross depth"]]
  },
  "eq-5.14": {
    use: "This estimates the water lost below the root zone only because the system is uneven, with the irrigation planned so 90% of the area gets enough. Use it with CU and the mean depth to show a grower what poor uniformity costs in water, pumping and nitrogen. It is one half of the deep percolation estimate.",
    ask: "How much water am I wasting just because my system doesn't put it on evenly?",
    from: [["eq-5.3", "CU"], ["tab-5.1", "F1 factor"], ["eq-5.6-5.7", "mean depth infiltrated"], ["eq-5.4-5.5", "pivot uniformity"]],
    to: [["eq-5.16-5.17", "Vdp1 for total deep percolation"], ["leaching-procedure", "nonuniformity losses"]]
  },
  "eq-5.15": {
    use: "This is the deep percolation from simply putting on more than the soil could hold, even in the low quarter. Use it when the low-quarter depth exceeds the deficit, which is common when a grower runs a fixed depth regardless of soil water or right after rain. It is the loss that better scheduling removes.",
    ask: "If I put on 1.5 inches when the soil only needed 1.2, where does the rest go?",
    from: [["eq-5.8", "low-quarter depth"], ["eq-6.14-6.15", "SWD"], ["swd-fcobs", "SWD from a sensor"]],
    to: [["eq-5.16-5.17", "Vdp2 for total deep percolation"], ["leaching-procedure", "excess application losses"]]
  },
  "eq-5.16-5.17": {
    use: "Adds the nonuniformity and over-application losses into one deep percolation volume and depth for the field. Use it for a water audit, a nutrient management plan, or to explain to a grower how many acre-inches went below the roots on one irrigation. The depth feeds directly into a nitrate or salt leaching estimate.",
    ask: "All told, how much water went below the roots on that last irrigation?",
    from: [["eq-5.14", "Vdp1 from nonuniformity"], ["eq-5.15", "Vdp2 from excess application"]],
    to: [["eq-5.18", "dp for chemical loss"], ["eq-7.6", "dp for leaching fraction"], ["eq-4.1", "deep percolation in the field water balance"]]
  },
  "eq-5.18": {
    use: "Converts deep percolation depth and leachate concentration into pounds per acre lost (0.226 × ppm × inches). Use it with suction-lysimeter or tile drain nitrate numbers to show a grower or a nutrient management planner how much N leaves with each over-irrigation. On sandy Delmarva soils this ties irrigation scheduling to nitrogen loss directly.",
    ask: "How much nitrogen am I losing when I over-water?",
    from: [["eq-5.16-5.17", "deep percolation depth"], ["eq-7.2", "concentration from EC for salts"]],
    to: [["leaching-procedure", "chemical loss per irrigation"], ["salt-applied", "same 0.226 C d conversion for salt"]]
  },
  "leaching-procedure": {
    use: "Runs the whole chain from uniformity and deficit to pounds of nitrate leached per irrigation and for the field. Use it on a field visit when you have a CU or DU from a test, the deficit, and a leachate nitrate value, to show what both poor uniformity and overwatering cost in N. It is a good extension demo for nutrient management meetings.",
    ask: "Between uneven water and overwatering, how many pounds of N am I washing out each time I irrigate?",
    from: [["catch-can", "DU and CU from a test"], ["eq-5.6-5.7", "mean depth infiltrated"], ["eq-6.14-6.15", "SWD before irrigation"], ["tab-5.1", "F1 factor"]],
    to: [["eq-15.1", "plan in-season N through the system"], ["eq-15.2", "fertigation rate on a pivot"]]
  },
  "eq-5.19": {
    use: "Conveyance efficiency compares what reached the field to what left the source. Use it on a ditch-fed farm in Colorado or on a long unlined lateral to show how much water is lost before it ever reaches the crop. It is also how you size the source flow so fields at the end of a long ditch still get their share.",
    ask: "I divert 5 cfs at the headgate. How much of that is getting to my field?",
    from: [["tab-3.2", "weir flow at the field"], ["tab-3.3", "Parshall flume flow at the headgate"], ["eq-3.6", "flow from velocity and area"], ["ditch-seepage", "seasonal ditch losses"], ["tab-5.2", "typical conveyance efficiencies"]],
    to: [["eq-5.21", "Ec for farm system capacity"], ["farm-capacity", "Ec for each field delivery"], ["project-efficiency", "Ec as supply conveyance efficiency"]]
  },
  "project-efficiency": {
    use: "Multiplies conveyance, field canal and application efficiencies into distribution and farm efficiency for a ditch company or project. Use it when a canal company or a conservation district is weighing lining canals against upgrading on-farm systems. It shows which link in the chain loses the most water.",
    ask: "Should we line the canal or put the money into sprinklers? Where are we losing the most?",
    from: [["eq-5.19", "supply conveyance efficiency"], ["tab-5.2", "conveyance and field canal efficiencies"], ["eq-5.1", "field application efficiency"]],
    to: [["eq-5.21", "efficiency to size the source flow"], ["farm-capacity", "conveyance efficiencies for the farm"]]
  },
  "ditch-seepage": {
    use: "Estimates seasonal seepage and vegetation losses from an earthen ditch from soil type, wetted area, length and days of use. Use it when a grower is pricing pipe or lining for a field ditch and wants to know how many acre-feet a year it would save. A quarter mile of unlined loam ditch can lose close to 20 ac-ft over a season.",
    ask: "Would it pay to pipe this ditch? How much water am I losing in it every year?",
    from: [["eq-3.6", "ditch flow from velocity and area"], ["tab-3.3", "ditch flow from a flume"], ["eq-3.8", "ditch flow by the float method"], ["tab-3.1", "unit conversions to acre-feet"]],
    to: [["eq-5.19", "losses for conveyance efficiency"], ["eq-5.21", "conveyance loss in farm capacity"]]
  },
  "eq-5.20": {
    use: "Turns the net capacity the crop needs (in/d) into the gross pumping capacity and flow the system must deliver, after efficiency and downtime. Use it in a design review or when a grower is adding acres to an existing well. A 130 ac pivot that needs 0.30 in/d net at 85% ELQ and 10% downtime needs about 0.39 in/d gross, which is roughly 950 gpm.",
    ask: "How many gpm do I need to keep up with corn on this 130 acre pivot?",
    from: [["tab-5.3", "peak daily ET as net capacity"], ["eq-4.2-4.7", "peak crop ET"], ["eq-5.9-5.11", "ELQ"], ["catch-can", "ELQ from a test"]],
    to: [["eq-5.21", "Qg for farm capacity"], ["eq-13.1", "Cg for pivot sprinkler discharge"], ["eq-11.14", "gross capacity for a moved lateral"], ["eq-13.4-13.5", "Cg for peak application rate"], ["eq-13.7", "Cg for the pivot timer setting"]]
  },
  "cn-from-flow": {
    use: "Works the capacity problem backward. Given the well flow and the acres, it tells you what net in/d the system can actually keep up with. Use it when a well has dropped off or a grower wants to put a second pivot on the same well, then compare the answer with peak ET for the crop.",
    ask: "My well makes 700 gpm. Can it keep up with corn on 160 acres in July?",
    from: [["meter-timing", "measured well flow"], ["eq-3.3", "flow and area relationship"], ["well-test", "flow at the pumping level"], ["eq-5.9-5.11", "ELQ"]],
    to: [["tab-5.3", "compare net capacity with peak ET"], ["eq-6.9", "net capacity as the daily water supply"], ["eq-12.3", "net capacity for required net depth"]]
  },
  "eq-5.21": {
    use: "Raises the gross field flow to cover conveyance losses so the source supplies enough. Use it when the well or headgate is some distance from the field through a ditch or leaky pipeline. It is the number to bring to a pump dealer or a water rights discussion.",
    ask: "The field needs 780 gpm. What does the well have to pump to get that through my ditch?",
    from: [["eq-5.20", "gross system flow"], ["eq-5.19", "conveyance efficiency"], ["tab-5.2", "typical conveyance efficiency"]],
    to: [["eq-8.17-8.19", "pump flow for horsepower"], ["tab-8.5", "flow to size the mainline"], ["eq-9.3", "drawdown at the needed rate"]]
  },
  "farm-capacity": {
    use: "Sizes the well or diversion for several fields with different conveyance losses on each branch plus the main canal. Use it on a whole-farm plan where one well feeds two or more furrow or pivot fields. It shows how much of the source flow is lost on the way and which field branch would be worth improving first.",
    ask: "One well runs both my fields. How big does it need to be?",
    from: [["tab-5.3", "net capacity from peak ET"], ["eq-5.9-5.11", "ELQ"], ["tab-5.2", "conveyance efficiencies"], ["eq-5.19", "measured conveyance efficiency"]],
    to: [["eq-9.3", "drawdown at the farm flow"], ["eq-8.17-8.19", "pump horsepower at that flow"], ["tab-8.5", "mainline size"]]
  },
  "tab-5.1": {
    use: "Looks up the F1 factor from CU, which gives the share of the mean depth that ends up as deep percolation from nonuniformity when 90% of the field is adequately irrigated. Use it on the way to a leaching or water loss estimate after a can test.",
    ask: "With a CU of 84%, how much of my water goes below the roots just from unevenness?",
    from: [["eq-5.3", "CU"], ["eq-5.4-5.5", "pivot uniformity"]],
    to: [["eq-5.14", "F1 for nonuniformity losses"], ["leaching-procedure", "F1 for nitrate loss"]]
  },
  "tab-5.2": {
    use: "Gives typical conveyance and field canal efficiencies by project size, delivery style and canal type. Use it for a first estimate when nobody has measured ditch losses, such as a planning study for a ditch company or a farm with lined versus unlined field canals.",
    ask: "I don't know my ditch losses. What's a fair number to plan with?",
    from: [],
    to: [["eq-5.19", "typical conveyance efficiency"], ["project-efficiency", "Ec and Eb for project efficiency"], ["eq-5.21", "Ec for farm capacity"], ["farm-capacity", "Ec for each field"]]
  },
  "tab-5.3": {
    use: "Converts the maximum monthly crop ET into a peak daily ET that a system must meet, which depends on how much the soil can buffer (the net depth per irrigation). Use it in system design: a system with a small allowable depletion on sandy soil has to be sized closer to the hottest days. That peak daily ET becomes the net capacity.",
    ask: "What daily water use do I design for on a sandy soil where I can only take an inch at a time?",
    from: [["eq-4.2-4.7", "crop ET for the peak month"], ["crop-et", "daily crop ET summed by month"], ["eq-6.2-6.5", "allowable depletion"], ["eq-12.4", "allowable depletion for set systems"]],
    to: [["eq-5.20", "peak ET as net capacity"], ["farm-capacity", "net capacity for the farm"], ["eq-12.13", "net capacity for a traveler"], ["eq-6.8", "peak ET for the maximum interval"]]
  },
  "tab-5.4": {
    use: "Lists typical maximum slope, operating pressure and labor for each irrigation system type. Use it early in a conversation with a grower choosing between furrows, a pivot, a traveler or drip on a given field, before getting into detailed design. Pressure here leads straight to pump energy and cost.",
    ask: "I'm thinking about switching from furrows. What do the different systems need in pressure and labor?",
    from: [],
    to: [["eq-8.13", "system pressure for pump TDH"], ["eq-8.22", "pressure drives energy per acre-inch"], ["pump-match", "required system pressure"]]
  }
});
