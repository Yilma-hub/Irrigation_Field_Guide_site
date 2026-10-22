window.CALC_USE = Object.assign(window.CALC_USE || {}, {
  "eq-6.1": {
    use: "Converts the minimum fraction of available water the crop needs to keep into the maximum fraction you can let it deplete. Use it when a grower or consultant gives a management allowed depletion in one form and the schedule needs the other. A crop that must keep 60% remaining can be depleted 40% before irrigating.",
    ask: "The guide says keep 60% of the water in the soil. How far can I let it dry down?",
    from: [["tab-6.1", "frc by crop group"], ["tab-4.3", "stress threshold frc by crop"]],
    to: [["eq-6.2-6.5", "fdc for allowable depletion"], ["ld-ed-window", "fdc for the irrigation window"], ["eq-12.4", "fdc for set system design"], ["checkbook", "fdc in the checkbook"]]
  },
  "eq-6.2-6.5": {
    use: "This is the scheduling budget for a field: total available water in the root zone, the part you are allowed to use (AD), and the minimum balance to keep. Set it up at the start of the season for each field and soil. A silt loam at 0.20 in/in with a 30 in corn root zone holds 6 in, and at fdc 0.45 the grower can use 2.7 in between irrigations.",
    ask: "How many inches can I let this field use before I have to water?",
    from: [["eq-2.8", "AWC"], ["tab-2.3", "AWC by texture"], ["tab-6.2", "rooting depth"], ["eq-6.6-6.7", "root depth during the season"], ["eq-6.1", "fdc"]],
    to: [["eq-6.8", "AD for the maximum interval"], ["eq-6.10-6.11", "AD for the latest date"], ["tab-5.3", "AD for peak daily ET"], ["eq-6.14-6.15", "TAW to get SWD"], ["checkbook", "TAW and AD for the checkbook"]]
  },
  "eq-6.3": {
    use: "Adds the AWC of each soil layer over the depth the roots actually reach. Use it when the soil survey or a probe shows a loam over sand or a clay pan, which is common on Coastal Plain and river terrace soils. A single texture would overstate or understate the water the crop can draw on.",
    ask: "My soil is loam on top and sand below two feet. How much water can the crop really get?",
    from: [["tab-2.3", "AWC by texture for each layer"], ["eq-2.8", "AWC from lab or probe data"], ["tab-6.2", "rooting depth"], ["eq-6.6-6.7", "current root depth"]],
    to: [["eq-6.2-6.5", "TAW for allowable depletion"], ["eq-6.14-6.15", "TAW for SWD"], ["eq-6.12", "TAW for available water"], ["eq-6.18-6.25", "TAW for the daily balance"]]
  },
  "eq-6.6-6.7": {
    use: "Grows the root zone from a minimum depth at emergence to the maximum effective depth over the season. Use it so the early-season checkbook does not count water the seedling roots cannot reach. A young corn crop on a sandy loam may only use the top 6 to 12 in for the first few weeks.",
    ask: "My corn is only a few weeks up. How deep should I be counting soil water?",
    from: [["tab-6.2", "maximum rooting depth"], ["tab-6.3", "root depth by stage"]],
    to: [["eq-6.2-6.5", "Rd for TAW and AD"], ["eq-6.22-6.25", "added root depth"], ["checkbook", "root growth in the checkbook"], ["eq-6.3", "Rd for layered TAW"]]
  },
  "extraction-4321": {
    use: "The 4-3-2-1 rule says roots take about 40% of their water from the top quarter of the root zone and only 10% from the bottom quarter. Use it to decide where to put soil moisture sensors and how to read them. If a top sensor is dry and the deep one is wet, the crop is still fine, and if the deep one starts drying the profile is getting short.",
    ask: "Where should I put my moisture sensors, and why is the top one always the driest?",
    from: [["tab-6.2", "root depth"], ["eq-6.6-6.7", "current root depth"], ["eq-6.26", "water used between irrigations"]],
    to: [["tab-6.5", "depth each sensor represents"], ["swd-fcobs", "layer depth for sensor SWD"], ["eq-6.13", "layer weighting"]]
  },
  "eq-6.8": {
    use: "Divides allowable depletion by daily ET to give the longest the crop can go between irrigations. Use it to check whether a system can get around the field in time, such as a pivot that takes three days per revolution or a hand-move set rotation. If the interval is shorter than the time to cover the field, the system cannot keep up at peak.",
    ask: "How many days can I go between irrigations in July?",
    from: [["eq-6.2-6.5", "AD"], ["eq-12.4", "AD"], ["eq-4.2-4.7", "crop ET"], ["tab-6.4", "long-term crop water use"], ["tab-5.3", "peak daily ET"]],
    to: [["eq-11.14", "irrigation interval for moved laterals"], ["eq-12.8-12.9", "interval for sets per lateral"], ["eq-12.13", "interval for travelers"], ["eq-13.7", "revolution time limit for the timer setting"]]
  },
  "eq-6.9": {
    use: "Gives the days between irrigations for a fixed effective depth, and how much a rain pushes the next irrigation back. Use it for systems that put on a set amount each time, like a pivot at a fixed speed or a wheel line. A 1.0 in effective depth at 0.25 in/d ET means a 4 day turn.",
    ask: "We got half an inch of rain. How many days does that buy me before I start the pivot again?",
    from: [["eq-5.9-5.11", "effective depth"], ["eq-13.7-inv", "depth from the pivot timer"], ["eq-4.2-4.7", "crop ET"], ["tab-6.4", "crop water use"], ["cn-from-flow", "net capacity of the system"]],
    to: [["eq-11.14", "interval for moved laterals"], ["eq-12.8-12.9", "interval for set rotations"], ["eq-6.16-6.17", "planned depth for ED"]]
  },
  "eq-6.12": {
    use: "Computes available water in the root zone from a water content, a fraction remaining from feel and appearance, or TAW. Use it on a field check with a probe or a sensor reading to turn the reading into inches the crop can still use. That number, compared with the minimum balance, says how close the field is to stress.",
    ask: "The probe reads 25% water. How many inches does my crop have left?",
    from: [["eq-2.5", "θv from a sample"], ["tab-2.3", "θwp and AWC by texture"], ["eq-2.9-2.11", "fraction remaining"], ["eq-6.2-6.5", "TAW"]],
    to: [["eq-6.10-6.11", "AW for the latest date"], ["eq-6.18-6.25", "AW in the daily balance"], ["eq-4.1", "available water for the ET balance"]]
  },
  "eq-6.13": {
    use: "Sums available water across sensor depths or soil layers, and the deficit if field capacity is known. Use it when you have a sensor stack at 6, 18 and 30 in and need one root zone number for the grower. It avoids the mistake of scheduling from the top sensor alone.",
    ask: "I have three sensors at different depths. What do they add up to?",
    from: [["eq-2.5", "θv for each layer"], ["tab-2.3", "θfc and θwp by texture"], ["extraction-4321", "layer depths"], ["eq-6.6-6.7", "root depth"]],
    to: [["eq-6.10-6.11", "SWD for the latest date"], ["eq-6.16-6.17", "SWD for the earliest date"], ["checkbook", "starting SWD"], ["wetting-depth", "layer water contents"]]
  },
  "eq-6.14-6.15": {
    use: "Converts a fraction depleted, often from feel and appearance or a sensor, into the soil water deficit in inches. SWD is the depth the next irrigation should refill. Use it on a field walk when you push a probe and estimate the soil is 30% depleted on a 3 in TAW, which is a 0.9 in deficit.",
    ask: "The soil feels about a third dry. How much do I need to put back?",
    from: [["eq-2.9-2.11", "fraction depleted"], ["tab-6.5", "fraction depleted from tension"], ["eq-6.2-6.5", "TAW"], ["eq-6.3", "layered TAW"]],
    to: [["eq-6.10-6.11", "SWD for LD"], ["eq-6.16-6.17", "SWD for ED"], ["eq-5.15", "SWD for excess application"], ["eq-5.9-5.11", "SWD to cap effective depth"], ["checkbook", "starting SWD"]]
  },
  "swd-fcobs": {
    use: "Uses the reading a sensor gives a day or two after a soaking rain or irrigation as that site's own field capacity, then turns the current reading into a deficit. Use it with capacitance or TDR probes that are not calibrated to the soil. It is how most sensor-based scheduling actually works on farms.",
    ask: "My probe isn't calibrated for my soil. Can I still use it to tell how much to irrigate?",
    from: [["eq-2.5", "θv readings"], ["extraction-4321", "depth each sensor represents"], ["eq-6.6-6.7", "root depth"]],
    to: [["eq-6.10-6.11", "SWD for LD"], ["eq-6.16-6.17", "SWD for ED"], ["catch-can", "SWD for adequacy"], ["eq-5.15", "SWD for excess application"]]
  },
  "eq-6.10-6.11": {
    use: "The latest date is how many days are left before the field hits allowable depletion at the forecast ET. Use it on a Monday field check to tell a grower whether to start the pivot today or can wait for forecast rain. If LD is shorter than the time it takes to cover the field, he is already late.",
    ask: "How many days can I wait before I really have to start irrigating?",
    from: [["eq-6.2-6.5", "AD and MB"], ["eq-6.14-6.15", "SWD"], ["swd-fcobs", "SWD from a sensor"], ["eq-6.12", "AW"], ["eto-daily", "forecast ETo for ETf"]],
    to: [["ld-ed-window", "LD in the irrigation window"], ["checkbook", "LD in the daily log"], ["eq-13.7", "plan pivot speed to reach the field before LD"]]
  },
  "eq-6.16-6.17": {
    use: "The earliest date is when the soil has room for a full planned irrigation plus a rainfall allowance. Use it to keep a grower from watering too soon, so rain that follows can still be stored and nothing drains below the roots. Irrigating between ED and LD is the target.",
    ask: "The soil's not that dry yet. Is it too early to irrigate?",
    from: [["eq-6.14-6.15", "SWD"], ["swd-fcobs", "SWD from a sensor"], ["eq-5.9-5.11", "planned effective depth"], ["eq-13.7-inv", "depth per pass"], ["eto-daily", "forecast ET"]],
    to: [["ld-ed-window", "ED in the irrigation window"], ["checkbook", "ED in the daily log"]]
  },
  "ld-ed-window": {
    use: "One soil check turns into an irrigation window: TAW, AD, SWD, latest date and earliest date with a plain advice line. Use it on a field visit with a probe and a 3 day ET forecast. It is the quickest answer to a call asking whether to irrigate this week.",
    ask: "I checked the soil this morning. When should I water next?",
    from: [["tab-2.3", "AWC by texture"], ["tab-6.2", "root depth"], ["eq-2.9-2.11", "fraction remaining from a sample"], ["tab-6.1", "fdc by crop group"], ["eto-daily", "forecast ET"]],
    to: [["run-time", "hours to apply the planned depth"], ["eq-13.7", "pivot timer for the planned depth"], ["checkbook", "start a running balance"]]
  },
  "eq-6.18-6.25": {
    use: "One line of the checkbook: start with yesterday's deficit, add ET, subtract effective rain and irrigation that stayed in the root zone. Use it to update a field each morning from weather station ET and the rain gauge. Anything that would push the deficit below zero is lost to drainage and does not count.",
    ask: "We got 0.6 in of rain yesterday and the corn used 0.25. Where does that leave my soil?",
    from: [["crop-et", "actual crop ET"], ["eq-4.2-4.7", "ET from Kc and ETo"], ["eq-5.8", "low-quarter irrigation depth"], ["catch-can", "dLQ from a test"], ["eq-6.2-6.5", "TAW"]],
    to: [["eq-6.10-6.11", "SWD for LD"], ["eq-6.16-6.17", "SWD for ED"], ["checkbook", "daily step"], ["eq-4.10-p68", "fraction remaining for Ks"]]
  },
  "eq-6.22-6.25": {
    use: "When roots grow into deeper soil, they pick up new water and the deficit that soil already had. Use it early in the season, especially if the subsoil was dry from a dry winter or a previous crop. It keeps the checkbook honest when the root zone expands.",
    ask: "My roots are going deeper now. Does that change how much water the crop has?",
    from: [["eq-6.6-6.7", "added root depth"], ["tab-2.3", "AWC of the deeper soil"], ["eq-2.9-2.11", "fraction depleted in the subsoil"]],
    to: [["eq-6.18-6.25", "added deficit and TAW for the daily balance"], ["checkbook", "root zone expansion"]]
  },
  "checkbook": {
    use: "Runs the checkbook over several days with daily ET, rain and irrigation, and can grow the root zone. It returns the current deficit, LD and ED. Use it as the weekly scheduling tool for a field, fed by station ET (CoAgMET in Colorado, DEOS in Delaware) and a rain gauge, and check it against a soil probe now and then.",
    ask: "Can you keep track of my soil water through the week and tell me when to irrigate?",
    from: [["crop-et", "daily crop ET"], ["tab-6.4", "long-term water use by stage"], ["eq-5.8", "low-quarter irrigation depth"], ["eq-6.13", "starting SWD from sensors"], ["eq-6.6-6.7", "root growth"]],
    to: [["run-time", "hours to apply the next irrigation"], ["eq-13.7", "pivot timer for the next pass"], ["drip-runtime", "drip run time"], ["eq-4.10-p68", "fraction remaining for stress"]]
  },
  "eq-6.26": {
    use: "The short version of the checkbook: total ET minus total effective rain over a period gives the irrigation needed. Use it for a weekly check or for drip and other systems that irrigate often and keep the soil near full. It is also a quick reality check on what a grower applied last week.",
    ask: "The potatoes used 1.6 in this week and we got 0.7 of rain. How much should I have put on?",
    from: [["crop-et", "daily crop ET"], ["tab-4.8", "station ET and rain"], ["tab-6.4", "crop water use"]],
    to: [["run-time", "hours for the needed depth"], ["drip-runtime", "drip run time"], ["eq-14.8", "gross requirement for drip"], ["extraction-4321", "water extracted between irrigations"]]
  },
  "tab-6.1": {
    use: "Gives the allowable fraction depleted by crop sensitivity group and ET rate. Use it when setting up a schedule for a crop with no local guidance. Sensitive vegetables get a smaller fdc than field corn, and every crop gets less room on high ET days.",
    ask: "How dry can I let my sweet corn get compared with field corn?",
    from: [["eq-4.2-4.7", "maximum ET"], ["tab-5.3", "peak daily ET"]],
    to: [["eq-6.1", "frc and fdc"], ["eq-6.2-6.5", "fdc for AD"], ["ld-ed-window", "fdc by crop group"], ["tab-6.6", "threshold tension"], ["eq-12.4", "fdc for design"]]
  },
  "tab-6.2": {
    use: "Lists maximum effective rooting depth by crop. Use it to set the root zone for scheduling or design when there is no local root depth data. Shallow crops like onions or lettuce get a small TAW and need short intervals, which matters on sandy soils.",
    ask: "How deep should I count the root zone for soybeans?",
    from: [],
    to: [["eq-2.14", "Rd for TAW"], ["eq-6.2-6.5", "Rd for TAW and AD"], ["eq-6.6-6.7", "maximum root depth"], ["extraction-4321", "root depth"], ["eq-12.4", "Rd for design"]]
  },
  "tab-6.3": {
    use: "Gives Nebraska's assumed root depth for scheduling by crop growth stage. Use it in the checkbook as a simple step function instead of the root growth equation. It matches what many university scheduling worksheets use.",
    ask: "My corn is at V8. What root depth should I use for scheduling?",
    from: [],
    to: [["eq-6.6-6.7", "root depth targets"], ["eq-6.2-6.5", "Rd by stage"], ["checkbook", "root depth"], ["extraction-4321", "root depth for sensor placement"]]
  },
  "tab-6.4": {
    use: "Long-term average daily water use by growth stage for Nebraska crops, with the alfalfa cutting adjustment. Use it when there is no weather station ET, or to sanity check station numbers. It is fine for planning, but daily station ET is better for scheduling in a real season.",
    ask: "About how much water is my corn using per day at silking?",
    from: [["eq-4.12-p71", "growth stage from GDD"]],
    to: [["eq-6.8", "ET for the maximum interval"], ["eq-6.9", "ET for the irrigation interval"], ["checkbook", "daily ET"], ["eq-6.26", "daily ET"]]
  },
  "tab-6.5": {
    use: "Converts a tensiometer or granular matrix (Watermark) reading in centibars into a soil water deficit for the texture. Use it with tension sensors on a grower's field to put the reading in inches. Sandy soils lose most of their available water at low tensions, so the same cb reading means very different deficits by texture.",
    ask: "My Watermark reads 60 cb. How much water do I need to put back?",
    from: [["extraction-4321", "depth the sensor represents"], ["tab-2.3", "texture"]],
    to: [["eq-6.14-6.15", "fraction depleted to SWD"], ["eq-6.10-6.11", "SWD for LD"], ["eq-6.16-6.17", "SWD for ED"], ["checkbook", "starting SWD"]]
  },
  "tab-6.6": {
    use: "Threshold tension to start irrigating by soil texture, set for about 35% depletion. Use it to give a grower a simple trigger for tension sensors, like 35 cb on a sandy loam. It is easy to explain and easy to post on the pivot panel.",
    ask: "What reading on my soil moisture sensor means it's time to irrigate?",
    from: [["tab-6.1", "fdc behind the threshold"], ["tab-2.3", "texture"]],
    to: [["tab-6.5", "tension to deficit"], ["ld-ed-window", "trigger for the window"]]
  }
});
