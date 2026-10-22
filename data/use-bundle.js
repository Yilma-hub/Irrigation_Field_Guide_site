window.CALC_USE = window.CALC_USE || {};
window.CALC_USE = Object.assign(window.CALC_USE || {}, {
  "eq-2.1": {
    use: "Bulk density comes from a known-volume core: oven-dry the soil and divide its mass by the core volume. On a field visit it tells you whether a wheel track or plow pan is compacted enough to slow roots and infiltration. You also need it to turn a gravimetric sample into volumetric water content, which is what every depth calculation runs on.",
    ask: "We think the headlands are packed down from the grain carts. How do I know if it's bad enough to rip?",
    from: [],
    to: [["eq-2.2", "ρb for porosity"], ["eq-2.5", "ρb to convert θm to θv"]]
  },
  "eq-2.2": {
    use: "Porosity from bulk density tells you how much of the soil volume is pore space for air and water. A loam at 1.3 g/cm³ has about 51% pore space, the same loam compacted to 1.6 g/cm³ has about 40%. Use it to explain to a grower why a compacted zone ponds water and stays wet after irrigation.",
    ask: "Why does water sit on top in this one strip of the field when the rest soaks in fine?",
    from: [["eq-2.1", "ρb from a core sample"]],
    to: []
  },
  "eq-2.3": {
    use: "The gravimetric method is the reference for soil water: weigh a sample, dry it 24 h at 105 °C, weigh again. Use it to check or calibrate a capacitance probe or a neutron gauge at the start of the season, or to settle an argument about whether a field is really at field capacity after a big rain.",
    ask: "My moisture probe says 32% but the soil feels dry. How do I check if the probe is right?",
    from: [],
    to: [["eq-2.5", "θm to volumetric water content"]]
  },
  "eq-2.4": {
    use: "Volumetric water content is water volume over soil volume, and it is what most soil moisture sensors report. Use it directly when you have a ring sample of known volume, or to read sensor output as a fraction before turning it into inches of water.",
    ask: "The sensor reads 0.25. What does that number actually mean?",
    from: [],
    to: [["eq-2.6", "θv to depth of water"], ["eq-2.9-2.11", "θv for fraction depleted"], ["eq-2.13", "θv for soil water deficit"]]
  },
  "eq-2.5": {
    use: "Converts a gravimetric sample to volumetric water content using bulk density. This is the usual path from a soil probe sample taken at a field visit to a number you can compare with field capacity and wilting point. A 15% mass water content in a soil at 1.4 g/cm³ is 21% by volume.",
    ask: "I pulled samples from 1, 2 and 3 feet and got the weights. How much water is in there?",
    from: [["eq-2.3", "θm from oven drying"], ["eq-2.1", "ρb from a core"]],
    to: [["eq-2.6", "θv to inches of water per layer"], ["eq-2.9-2.11", "θv for fraction depleted"], ["eq-2.13", "θv for SWD"], ["eq-4.10-p68", "θv for the water stress factor"]]
  },
  "eq-2.6": {
    use: "Turns a volumetric water content into inches of water held in a layer. A 12 in layer at 0.25 holds 3.0 in. Use it to add up water layer by layer down a probe hole and tell a grower how much water is actually stored in the root zone.",
    ask: "How many inches of water do I have in the top three feet right now?",
    from: [["eq-2.5", "θv from a soil sample"], ["eq-2.4", "θv from a sensor or ring sample"]],
    to: [["eq-4.1", "stored water at start and end of a period"], ["eq-6.13", "available water by layer"]]
  },
  "eq-2.7": {
    use: "Total potential adds gravity, matric and osmotic parts. Field tensiometers and granular matrix sensors read only the matric part, so in a saline field the plant feels more stress than the sensor shows. Use it when explaining why a salty field shows stress at a tension that looks fine on paper.",
    ask: "My tensiometer reads 40 cb, which should be fine, so why is the crop wilting on the saline end?",
    from: [["eq-7.1", "osmotic potential from EC"]],
    to: []
  },
  "eq-2.8": {
    use: "Available water capacity is field capacity minus wilting point, the water a crop can pull per unit depth of soil. A silt loam holds roughly 2 in/ft, a loamy sand about 1 in/ft. It is the first number you need when a grower asks how long a field can go between irrigations.",
    ask: "How much water does my sandy loam really hold for the crop?",
    from: [["tab-2.3", "θfc and θwp by texture"], ["eq-2.5", "θv measured at field capacity and wilting point"]],
    to: [["eq-2.14", "AWC times root depth gives TAW"], ["eq-2.12", "AWC for soil water depletion"], ["eq-6.2-6.5", "AWC for TAW and allowable depletion"], ["eq-6.3", "AWC by layer"]]
  },
  "eq-2.9-2.11": {
    use: "Fraction depleted and fraction remaining put a soil water reading on the 0 to 1 scale that management allowed depletion uses. If the fraction depleted is 0.45 and the MAD for corn is 0.5, the field is close to needing water. This is how you turn a probe reading into a go or wait call.",
    ask: "The probe says the soil is at 0.22. Is that time to water or not?",
    from: [["tab-2.3", "θfc and θwp by texture"], ["eq-2.5", "current θv from a sample"]],
    to: [["eq-2.12", "fd to depletion depth"], ["eq-6.14-6.15", "fd for the soil water deficit"], ["eq-4.10-p68", "fr for the stress factor"], ["eq-6.1", "compare with allowable fraction"]]
  },
  "eq-2.12": {
    use: "Soil water depletion from fraction depleted gives the net inches needed to refill a layer to field capacity. Half depleted in 3 ft of silt loam at 2 in/ft is a 3 in deficit. This is the net depth you hand to the run time and pivot timer calculations.",
    ask: "How much do I need to put on to fill it back up?",
    from: [["eq-2.9-2.11", "fraction depleted"], ["eq-2.8", "AWC"]],
    to: [["eq-5.13", "net depth for run time"], ["run-time", "net depth to hours, after efficiency"], ["eq-13.7", "depth for the pivot timer setting"], ["eq-6.9", "net depth for interval"]]
  },
  "eq-2.13": {
    use: "The same deficit computed straight from field capacity and the current water content, layer by layer. Use it when you have sensor readings at several depths and want the refill depth without going through fraction depleted.",
    ask: "I have sensors at 6, 18 and 30 inches. How far below full am I?",
    from: [["tab-2.3", "θfc by texture"], ["eq-2.5", "current θv"], ["swd-fcobs", "observed field capacity from the sensor"]],
    to: [["eq-6.18-6.25", "starting deficit for the checkbook"], ["eq-5.6-5.7", "deficit before an irrigation"], ["wetting-depth", "deficit each layer must fill"]]
  },
  "eq-2.14": {
    use: "Total available water is AWC times root depth. Corn rooted to 3 ft in a silt loam at 2 in/ft has about 6 in of TAW. Multiply by allowable depletion and you get the biggest net irrigation the field can take, which drives interval and system capacity questions.",
    ask: "How much water can this field hold before the corn runs out?",
    from: [["eq-2.8", "AWC"], ["tab-2.3", "AWC by texture"], ["tab-6.2", "maximum rooting depth"], ["eq-6.6-6.7", "root depth during the season"]],
    to: [["eq-6.2-6.5", "TAW for AD and MB"], ["eq-6.8", "TAW for the maximum interval"], ["eq-12.4", "allowable depletion for sprinkler design"], ["eq-14.8", "root zone storage for drip"]]
  },
  "wetting-depth": {
    use: "Shows how deep a given irrigation will go in a layered soil by filling each layer to field capacity from the top down, and how much passes below the root zone. Use it before a heavy application on a sandy subsoil to see if water is going past the roots and taking nitrate with it.",
    ask: "If I put on 2 inches, how deep will it go, and am I losing any below the roots?",
    from: [["eq-2.13", "deficit by layer"], ["tab-2.3", "θfc by texture"], ["eq-5.6-5.7", "depth infiltrated"], ["eq-6.6-6.7", "current root depth"]],
    to: [["eq-5.15", "deep percolation from over-application"], ["eq-5.18", "water leaving the root zone for nitrate loss"]]
  },
  "tab-2.3": {
    use: "Typical field capacity, wilting point and AWC by texture. When there is no lab data, which is most farm calls, you start from the soil survey texture and this table. It gives a reasonable first estimate of TAW for setting up a checkbook or picking a sensor threshold.",
    ask: "I don't have lab numbers. What should I assume for a loamy sand?",
    from: [],
    to: [["eq-2.8", "θfc and θwp"], ["eq-2.9-2.11", "θfc and θwp for fraction depleted"], ["eq-2.14", "AWC for TAW"], ["eq-6.3", "AWC by layer"], ["eq-4.10-p68", "θfc and θwp for Ks"]]
  }
});

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

window.CALC_USE = Object.assign(window.CALC_USE || {}, {
  "eq-4.1": {
    use: "The soil water balance solves for ET as whatever water left the root zone that is not accounted for by rain, irrigation, runoff and drainage. Use it to check whether a field's seasonal water use makes sense from probe readings and meter records, or to back out crop water use on a research plot.",
    ask: "Between my probe readings, rain and what I pumped, how much did the crop actually use this month?",
    from: [["eq-2.6", "stored water at start and end"], ["eq-3.1-3.2", "gross irrigation depth"], ["meter-depth", "irrigation from the meter"], ["eq-5.15", "deep percolation"], ["tab-4.8", "rainfall"]],
    to: [["eq-4.2-4.7", "measured ET to compare with Kc ETo"], ["eq-6.18-6.25", "check the checkbook against field data"]]
  },
  "eq-4.2-4.7": {
    use: "Crop ET is the crop coefficient times reference ET. This is the daily number behind every ET-based schedule. Corn at full canopy with Kc about 1.2 and an ETo of 0.28 in/d uses about 0.34 in/d. Use it when a grower reads ETo off a weather network and wants to know what his crop used.",
    ask: "The station says ETo was 0.30 yesterday. What did my corn use?",
    from: [["eto-daily", "ETo from weather data"], ["tab-4.8", "ETo from a weather station"], ["eq-4.8", "Kc"], ["eq-4.11-4.12", "basal Kco"]],
    to: [["eq-6.18-6.25", "daily ET in the checkbook"], ["eq-6.8", "ET for the maximum interval"], ["eq-6.10-6.11", "ET for the latest irrigation date"], ["eq-5.20", "peak ET for system capacity"], ["eq-14.8", "ET for drip requirement"]]
  },
  "eq-4.3": {
    use: "The full Penman-Monteith form with explicit aerodynamic and surface resistances. In practice you rarely run it by hand, but it is what weather networks compute behind the scenes. Use it to understand why ETo responds to wind and humidity, or to check a station's number when one input looks off.",
    ask: "Why did ETo jump on a cool windy day when it wasn't even hot?",
    from: [["eq-4.6", "net radiation"], ["eq-4.5", "es and ea"], ["tab-4.1", "slope Δ"], ["tab-4.2", "psychrometric constant γ"]],
    to: [["eq-4.2-4.7", "ETo for crop ET"], ["eq-4.14-4.15", "ETo for landscape ET"]]
  },
  "eq-4.4": {
    use: "The reduced ASCE daily form for short grass, split into a radiation term and an aerodynamic term. Use it to compute ETo from a farm weather station or to see how much of the day's demand came from sun versus dry wind. The book's June example at 3,000 ft gives 0.12 plus 0.19, or 0.31 in/d.",
    ask: "I have my own weather station. Can I compute ETo myself instead of using the network?",
    from: [["eq-4.6", "net radiation"], ["eq-4.5", "es and ea"], ["tab-4.1", "Δ at mean temperature"], ["tab-4.2", "γ by elevation"]],
    to: [["eq-4.2-4.7", "ETo for crop ET"], ["eq-4.10-p68", "ETo for stressed ET"], ["eq-4.14-4.15", "ETo for landscape ET"]]
  },
  "eq-4.5": {
    use: "Saturation vapor pressure from max and min temperature and actual vapor pressure from dew point give the vapor pressure deficit, the drying power of the air. Use it when checking station data, since a bad dew point sensor shows up as a deficit that makes no sense for the day.",
    ask: "How dry was the air today, really?",
    from: [["tab-4.1", "e° by temperature"], ["tab-4.8", "temperatures and dew point"]],
    to: [["eq-4.4", "es and ea for ETo"], ["eq-4.3", "es and ea for full PM"], ["fig-4.10", "ea for long-wave radiation"]]
  },
  "eq-4.6": {
    use: "Net radiation is incoming solar minus the reflected part (albedo 0.23 for grass) minus net long-wave loss. It drives the radiation term of ETo. Use it to explain why a clear June day has much higher demand than a hazy one at the same temperature.",
    ask: "Why is crop water use so much higher on clear days?",
    from: [["fig-4.10", "net long-wave radiation"], ["tab-4.8", "measured solar radiation"]],
    to: [["eq-4.4", "Rn for ETo"], ["eq-4.3", "Rn for full PM"]]
  },
  "fig-4.9": {
    use: "Clear-sky radiation from date, latitude and elevation. You need it to judge cloudiness for the long-wave term, and it is a quick quality check on a pyranometer: measured solar should not run above clear-sky for days on end.",
    ask: "Is my solar radiation sensor reading right?",
    from: [],
    to: [["fig-4.10", "Rso for long-wave radiation"], ["eto-daily", "Rso in the daily procedure"]]
  },
  "fig-4.10": {
    use: "Net outgoing long-wave radiation from temperatures, humidity and cloudiness (Rs over Rso). It is usually a smaller term, around 4 to 5 MJ/m²/d on a clear summer day, but it matters in dry high-elevation sites. Use it as a step toward net radiation.",
    ask: "Why do clear nights in the high plains cool off so fast?",
    from: [["fig-4.9", "clear-sky radiation"], ["eq-4.5", "actual vapor pressure"], ["tab-4.8", "temperatures and solar radiation"]],
    to: [["eq-4.6", "Rnl for net radiation"]]
  },
  "eto-daily": {
    use: "Runs the whole Example 4.1 chain from one day of weather data to ETo. Use it to fill gaps when a network station is down, to compare a grower's on-farm station with the nearest network site, or in a workshop to show where the number comes from.",
    ask: "The CoAgMET station was down three days last week. Can I estimate ETo from my own data?",
    from: [["tab-4.8", "daily weather data"], ["fig-4.9", "clear-sky radiation"], ["tab-4.1", "Δ by temperature"], ["tab-4.2", "γ by elevation"]],
    to: [["eq-4.2-4.7", "ETo for crop ET"], ["crop-et", "ETo for the full crop ET procedure"], ["checkbook", "daily ETo for scheduling"], ["eq-4.14-4.15", "ETo for landscape ET"]]
  },
  "eq-4.8": {
    use: "The full crop coefficient combines the basal coefficient, a water stress factor and a wet soil evaporation factor. Use it to explain why ET is higher the day after a rain or irrigation and lower when the soil gets dry, which is what a checkbook needs to track closely.",
    ask: "Does the crop use more water right after I irrigate?",
    from: [["eq-4.11-4.12", "basal Kco"], ["eq-4.10-p68", "stress factor Ks"], ["eq-4.11-p69", "wet soil factor Kw"]],
    to: [["eq-4.2-4.7", "Kc times ETo"], ["crop-et", "Kc for daily crop ET"]]
  },
  "eq-4.9": {
    use: "Adjusts the tabular peak and harvest basal coefficients for local wind and humidity. Windy dry sites push Kc up, humid calm sites pull it down. Corn in the book's example goes from 1.15 to 1.21 at midseason. Use it when setting up a crop curve for a new region, such as moving from Colorado to Delaware conditions.",
    ask: "Can I use the same corn crop curve here that I used out West?",
    from: [["tab-4.3", "tabular Kcp′ and Kcm′"], ["tab-4.4", "Kcf adjustment"]],
    to: [["eq-4.11-4.12", "adjusted Kcp and Kcm for the crop curve"], ["eq-4.11-p69", "Kcf for Kcmax"]]
  },
  "eq-4.10": {
    use: "Minimum relative humidity from dew point and max temperature, which is what the Kc adjustment table needs. Use it when your station gives dew point but not RHmin. The book's midseason case, 65 °F dew point and 90 °F high, gives 44%.",
    ask: "My station gives dew point. How do I get the humidity number for the crop coefficient adjustment?",
    from: [["tab-4.1", "e° at dew point and Tmax"], ["tab-4.8", "Tmax and dew point"]],
    to: [["tab-4.4", "RHmin for Kcf"]]
  },
  "eq-4.11-4.12": {
    use: "Builds the basal crop coefficient curve through the season from initial, peak and harvest values and the stage fractions. Use it to set the Kco for any day in a checkbook or a weather-network crop ET report.",
    ask: "What crop coefficient should I use for corn at V10?",
    from: [["tab-4.3", "Kci, stage fractions"], ["eq-4.9", "adjusted Kcp and Kcm"], ["eq-4.13", "fraction of season from GDD"]],
    to: [["eq-4.8", "Kco for Kc"], ["eq-4.2-4.7", "Kco times ETo"], ["eq-4.10-p68", "Kco for stressed ET"], ["eq-4.11-p69", "Kco for Kw"]]
  },
  "eq-4.10-p68": {
    use: "The water stress factor cuts ET once the fraction of available water remaining falls below the crop's threshold. Use it to show a grower what letting a field get too dry costs in ET, which tracks with yield, and to keep a checkbook from overestimating use in a dry spell.",
    ask: "If I let it dry down further, how much does the crop really slow down?",
    from: [["eq-2.9-2.11", "fraction remaining"], ["eq-2.5", "current θv"], ["tab-2.3", "θfc and θwp"], ["tab-4.3", "stress threshold frc"], ["eq-4.11-4.12", "basal Kco"]],
    to: [["eq-4.8", "Ks for Kc"], ["crop-et", "Ks in the daily procedure"], ["eq-6.18-6.25", "reduced ET in the checkbook"]]
  },
  "eq-4.11-p69": {
    use: "Wet soil evaporation adds to ET after a rain or irrigation and decays over a few days depending on soil texture and how much surface was wetted. It matters most early in the season with sparse canopy. Use it to explain why frequent light pivot irrigations on young crops lose more water to evaporation than fewer heavy ones.",
    ask: "Am I wasting water putting on light amounts every two days on small corn?",
    from: [["tab-4.5", "fraction wetted Fw"], ["tab-4.6", "evaporation duration td"], ["tab-4.4", "Kcf"], ["eq-4.11-4.12", "basal Kco"]],
    to: [["eq-4.8", "Kw for Kc"], ["crop-et", "Kw in the daily procedure"]]
  },
  "eq-4.12-p71": {
    use: "Growing degree days with base and cap temperatures (50 and 86 °F for corn) track crop development better than calendar days. Use it to place a field on its Kc curve in a cool or late spring, and to compare planting dates across fields.",
    ask: "My corn was planted late and it's been cool. Where is it really on the crop curve?",
    from: [["tab-4.8", "daily Tmax and Tmin"]],
    to: [["eq-4.13", "cumulative GDD for fraction of season"]]
  },
  "eq-4.13": {
    use: "Fraction of season is GDD since planting over GDD to maturity. It feeds the Kc curve so the coefficient tracks crop development through the season. Use it with the hybrid's maturity rating for corn.",
    ask: "This hybrid needs 2,700 GDD. How far along is it at 1,500?",
    from: [["eq-4.12-p71", "cumulative GDD"]],
    to: [["eq-4.11-4.12", "Fs for the basal Kc curve"], ["crop-et", "Fs in the daily procedure"], ["eq-6.6-6.7", "season progress for root depth"]]
  },
  "eq-4.14-4.15": {
    use: "Landscape ET uses KL = KP KD KM in place of a crop coefficient, for mixed plantings, turf and ornamentals. Use it for municipal, golf or homeowner irrigation questions and water budgets where there is no single crop.",
    ask: "How much water does a shaded shrub bed actually need compared to the lawn?",
    from: [["tab-4.7", "KP, KD, KM factors"], ["eto-daily", "ETo"], ["tab-4.8", "station ETo"]],
    to: [["eq-14.8", "landscape ET for drip requirement"], ["eq-6.26", "ET for the irrigation needed"]]
  },
  "crop-et": {
    use: "Runs the whole crop coefficient procedure for one day: season fraction, basal Kc, stress, wet soil evaporation, then crop ET. Use it for a field visit or a grower call when you want the day's ET for a specific crop, stage and soil condition rather than a generic Kc.",
    ask: "We irrigated two days ago on silt loam, corn is at about 60% of season. What was today's ET?",
    from: [["eto-daily", "ETo"], ["tab-4.8", "station ETo"], ["tab-4.3", "crop coefficients"], ["tab-4.4", "Kcf"], ["eq-2.9-2.11", "fraction remaining"], ["tab-4.5", "wetting method"]],
    to: [["eq-6.18-6.25", "daily ET in the checkbook"], ["checkbook", "ET for scheduling"], ["eq-6.10-6.11", "ET for the latest date"], ["eq-6.8", "ET for the irrigation interval"]]
  },
  "tab-4.1": {
    use: "Saturation vapor pressure and slope by temperature. Use it for hand calculations of ETo and RHmin, and as a check on spreadsheet formulas.",
    ask: "What's the saturation vapor pressure at 85 °F?",
    from: [],
    to: [["eq-4.5", "e° at each temperature"], ["eq-4.4", "Δ at mean temperature"], ["eq-4.10", "e° for RHmin"], ["eq-4.3", "Δ for full PM"]]
  },
  "tab-4.2": {
    use: "Psychrometric constant by elevation. It changes with air pressure, so a high plains site at 5,000 ft has a lower value than a coastal site. Use it in any hand ETo calculation.",
    ask: "Does elevation change the ET calculation?",
    from: [],
    to: [["eq-4.4", "γ for ETo"], ["eq-4.3", "γ for full PM"], ["eto-daily", "γ in the daily procedure"]]
  },
  "tab-4.3": {
    use: "Basal crop coefficients, stage fractions and stress threshold by crop. It is the starting point for any crop curve in a checkbook or scheduling tool. Corn peaks at 1.15 before local adjustment.",
    ask: "What crop coefficients should I use for soybeans?",
    from: [],
    to: [["eq-4.9", "tabular Kcp′ and Kcm′"], ["eq-4.11-4.12", "Kci and stage fractions"], ["eq-4.10-p68", "stress threshold frc"], ["crop-et", "crop parameters"]]
  },
  "tab-4.4": {
    use: "Kc adjustment for wind, humidity and crop height. Windy dry sites raise Kc and calm humid sites lower it. Use it when carrying a crop curve from one climate to another.",
    ask: "It's always windy here. Should my Kc be higher?",
    from: [["eq-4.10", "RHmin"], ["tab-4.8", "wind run"]],
    to: [["eq-4.9", "Kcf for peak and harvest"], ["eq-4.11-p69", "Kcf for Kcmax"]]
  },
  "tab-4.5": {
    use: "Fraction of the soil surface wetted by each irrigation method, from full sprinkler and rain down to drip. It sets how much wet soil evaporation follows an irrigation. Use it to compare evaporation losses between a pivot and subsurface drip on the same crop.",
    ask: "Does drip cut evaporation compared to my pivot?",
    from: [],
    to: [["eq-4.11-p69", "Fw for Kw"], ["crop-et", "wetting method"]]
  },
  "tab-4.6": {
    use: "How long a soil surface keeps evaporating at a high rate after wetting, by texture, and the decay with time. Clays stay wet longer than sands. Use it in the wet soil factor.",
    ask: "How many days after a rain does the soil keep losing water off the top?",
    from: [],
    to: [["eq-4.11-p69", "td and decay function"], ["crop-et", "soil texture"]]
  },
  "tab-4.7": {
    use: "Species, density and microclimate factors for landscape plantings, with the resulting landscape coefficient and ET. Use it for turf and ornamental water budgets and drought restriction questions from towns or homeowners.",
    ask: "We have native grasses on a south-facing slope. What coefficient do I use?",
    from: [["eto-daily", "ETo"]],
    to: [["eq-4.14-4.15", "KP, KD and KM"]]
  },
  "tab-4.8": {
    use: "A two-week run of real weather station data with daily ETo and GDD, like what you pull from a regional network. Use it as the input stream for practicing ETo, GDD and checkbook calculations.",
    ask: "What does a typical July week of crop water demand look like?",
    from: [],
    to: [["eto-daily", "daily weather inputs"], ["eq-4.2-4.7", "daily ETo"], ["eq-4.12-p71", "Tmax and Tmin for GDD"], ["checkbook", "ETo and rain for scheduling"], ["eq-4.5", "temperatures and dew point"]]
  }
});

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

window.CALC_USE = Object.assign(window.CALC_USE || {}, {
  "eq-10.1": {
    use: "Volume balance for a surface irrigation: what went in equals what infiltrated plus what is still on the surface plus what ran off. Use it on a furrow evaluation where you measured inflow with a meter and tailwater with a flume, to find the volume that actually soaked in.",
    ask: "I put 18 acre-inches on that field and the flume at the bottom caught 3. How much went into the ground?",
    from: [["meter-depth", "inflow volume from the meter"], ["eq-3.3", "volume from flow and set time"], ["tab-3.3", "runoff flow from a Parshall flume"], ["tab-3.4", "runoff flow from an RBC flume"]],
    to: [["eq-10.2", "same balance as depths"], ["eq-10.8", "runoff volume for the runoff ratio"], ["eq-10.13-10.14", "runoff volume for the reuse pit"]]
  },
  "eq-10.2": {
    use: "Depth form of the surface water balance, giving runoff depth and percent runoff from gross and infiltrated depth. Use it on a furrow evaluation to show the grower how much of each set leaves as tailwater. In Example 10.1, 0.7 of 4.2 in ran off, 17 percent.",
    ask: "What share of the water I turn into the furrows is running off the bottom end?",
    from: [["eq-10.4", "gross depth for the set"], ["eq-10.3", "gross depth for one furrow"], ["tab-10.1", "infiltration along the field"], ["eq-5.6-5.7", "depth infiltrated"]],
    to: [["eq-10.8", "runoff depth for the runoff ratio"], ["eq-5.12", "runoff with reuse"], ["eq-10.6-10.7", "runoff in the ELQ"]]
  },
  "eq-10.3": {
    use: "Gross depth applied by one furrow from its stream size, set time, spacing and length. Use it when you time a siphon tube or gate opening into a bucket and want to know what that furrow is putting on. Remember to double W for every other furrow irrigation.",
    ask: "Each gate is running about 10 gpm for 12 hours on 1,200 ft rows at 30 inches. How much water is that?",
    from: [["eq-10.9", "furrow stream size"], ["tab-10.6", "recommended stream size"], ["meter-timing", "measured stream size"]],
    to: [["eq-10.2", "gross depth for runoff depth"], ["eq-10.6-10.7", "gross depth for ELQ"], ["eq-10.12", "gross depth for low quarter depth"], ["eq-5.1", "gross depth for application efficiency"]]
  },
  "eq-10.4": {
    use: "Gross depth for a whole furrow set from total inflow, set time and the number of furrows watered. This is the main management lever on a gravity field. When you cut the number of furrows per set or shorten the set time, rerun it to see what the change does to the depth applied.",
    ask: "If I water 44 rows instead of 70 with the same 760 gpm, how much more water goes on per set?",
    from: [["meter-timing", "total inflow"], ["tab-3.2", "inflow measured at a weir"], ["tab-3.3", "inflow measured at a Parshall flume"], ["tab-10.2", "number of furrows per set"]],
    to: [["eq-10.2", "gross depth for runoff"], ["eq-10.12", "gross depth for low quarter depth"], ["eq-10.6-10.7", "gross depth for ELQ"], ["eq-10.8", "gross depth for runoff ratio"]]
  },
  "eq-10.5": {
    use: "Gross depth for a basin or border check from inflow, cutoff time and the area of the check. Use it with level basins, rice checks or graded borders to set cutoff time for a target depth.",
    ask: "How long do I run 1,500 gpm into a 330 by 660 ft border to put on 3 inches?",
    from: [["meter-timing", "inflow rate"], ["tab-3.2", "inflow at a weir"], ["tab-3.3", "inflow at a flume"]],
    to: [["eq-10.2", "gross depth for runoff"], ["eq-5.1", "gross depth for application efficiency"], ["eq-10.6-10.7", "gross depth for ELQ"]]
  },
  "eq-10.6-10.7": {
    use: "Low quarter application efficiency for a furrow field with a closed or open runoff recovery system. Use it to show a grower how much a tailwater return system raises efficiency. In Examples 10.1 to 10.3 a closed system lifted ELQ from 67 to 78 percent.",
    ask: "Is a tailwater pit and return pump worth it on my furrow ground?",
    from: [["eq-10.12", "low quarter depth"], ["eq-10.4", "gross depth"], ["eq-10.8", "runoff ratio"], ["tab-10.3-10.4", "runoff ratio by cutoff ratio"], ["eq-6.14-6.15", "soil water deficit"]],
    to: [["eq-5.20", "ELQ for gross system capacity"], ["eq-6.9", "effective depth for the irrigation interval"], ["eq-6.18-6.25", "effective irrigation in the checkbook"], ["fig-10.14-10.16", "compare against best cutoff ratio"]]
  },
  "eq-10.8": {
    use: "Runoff ratio, runoff depth over gross depth. Measure it on a furrow evaluation and use it to rate a field, to compute ELQ with reuse and to size a tailwater pit and pump.",
    ask: "How much of my water is running off as a fraction of what I put on?",
    from: [["eq-10.2", "runoff depth"], ["eq-10.1", "runoff volume"], ["eq-10.4", "gross depth"]],
    to: [["eq-10.6-10.7", "runoff ratio for ELQ"], ["eq-10.13-10.14", "runoff ratio for reservoir and pump"], ["eq-5.12", "runoff ratio for depth from the source"]]
  },
  "eq-10.9": {
    use: "Furrow stream size from total inflow divided by furrows per set. With a fixed well or ditch delivery, the number of furrows per set is how the irrigator controls stream size. Check the result against the nonerosive limit before changing sets.",
    ask: "If I open 26 gates instead of 44 on my 760 gpm well, what does each furrow get?",
    from: [["meter-timing", "total inflow"], ["tab-10.2", "furrows per set"], ["eq-10.4", "inflow and furrows per set"]],
    to: [["eq-10.10", "compare to the nonerosive limit"], ["tab-10.6", "compare to recommended stream size"], ["eq-10.3", "stream size for gross depth"]]
  },
  "eq-10.10": {
    use: "Approximate maximum nonerosive furrow stream size, 10 divided by slope in percent. Use it on any field where you plan to increase stream size to speed up advance. On a 0.4 percent slope the limit is 25 gpm.",
    ask: "How big a stream can I run down these rows before I start cutting the furrows?",
    from: [],
    to: [["eq-10.9", "upper limit on stream size"], ["tab-10.6", "nonerosive check"], ["proc-furrow-set", "stream size limit in the set design"]]
  },
  "eq-10.11": {
    use: "Cutoff ratio, advance time to the end of the field over set time. It is the management number for furrow efficiency. Time advance with flags at the end of the field on a few furrows, divide by the set time, and compare to the recommended ratio for the soil and reuse system.",
    ask: "Water reaches the bottom of the field in 9 hours and I change sets at 12. Is that right?",
    from: [["tab-10.1", "measured advance time to the end"], ["tab-10.5", "target advance time for the set"]],
    to: [["eq-10.12", "CR for the infiltration factor"], ["tab-10.3-10.4", "CR for infiltration factor and runoff ratio"], ["fig-10.14-10.16", "CR for ELQ"], ["tab-10.5", "compare to recommended CR"]]
  },
  "eq-10.12": {
    use: "Low quarter infiltrated depth from gross depth and the Table 10.3 infiltration factor for the cutoff ratio and soil. Use it when you do not have an infiltration profile but know set time, advance time and inflow. The result sets whether the low end of the field got refilled.",
    ask: "With a 0.75 cutoff ratio and 4.2 inches applied, is the dry end of my field getting enough?",
    from: [["eq-10.4", "gross depth"], ["eq-10.11", "cutoff ratio"], ["tab-10.3-10.4", "infiltration factor"]],
    to: [["eq-10.6-10.7", "low quarter depth for ELQ"], ["eq-5.9-5.11", "low quarter depth for effective depth"], ["eq-6.18-6.25", "low quarter depth in the checkbook"], ["eq-5.15", "excess over SWD as deep percolation"]]
  },
  "eq-10.13-10.14": {
    use: "Sizes the active volume of a tailwater reuse pit and the return pump for a set. Use it when a grower plans a runoff recovery system. Design with a high runoff ratio, 0.30 to 0.40, so the pit does not overflow in the first irrigations after cultivation.",
    ask: "How big does my tailwater pit need to be and what size pump do I put on it?",
    from: [["eq-10.8", "runoff ratio"], ["tab-10.3-10.4", "runoff ratio by cutoff ratio"], ["meter-timing", "inflow from the source"], ["eq-10.1", "runoff volume"]],
    to: [["eq-8.13", "return pump TDH"], ["eq-8.17-8.19", "return pump horsepower"], ["tab-8.5", "return line size"]]
  },
  "tab-10.1": {
    use: "The book's example advance, recession and infiltration data along a 1,200 ft furrow. Use it as a model for laying out your own field evaluation: stations every 300 ft, advance and recession times at each, opportunity time and infiltration.",
    ask: "What should I record when I walk a furrow field to evaluate it?",
    from: [],
    to: [["eq-10.11", "advance time for cutoff ratio"], ["eq-10.2", "infiltrated depth for runoff"], ["eq-5.2", "low quarter and mean depth for DU"]]
  },
  "tab-10.2": {
    use: "Correction factor for the number of furrows per set needed to change advance time with a fixed water supply. Use it after timing advance in a trial set: pick the target advance time from the recommended cutoff ratio and read off how many furrows to open.",
    ask: "Water takes 4.8 hours to get through with 44 rows. How many rows do I run to get it through in 2.4 hours?",
    from: [["tab-10.5", "target advance time"], ["eq-10.11", "measured advance and cutoff ratio"]],
    to: [["eq-10.9", "new furrows per set for stream size"], ["eq-10.4", "furrows per set for gross depth"], ["proc-furrow-set", "furrows per set in the design"]]
  },
  "tab-10.3-10.4": {
    use: "Infiltration factor and runoff ratio for sloping furrows by cutoff ratio and soil texture. Use them to estimate low quarter depth and runoff without a full field evaluation, for example in a quick office review of a grower's set times.",
    ask: "On a silt loam with a 0.4 cutoff ratio, how much will run off and how much reaches the low end?",
    from: [["eq-10.11", "cutoff ratio"], ["tab-10.5", "recommended cutoff ratio"]],
    to: [["eq-10.12", "infiltration factor"], ["eq-10.6-10.7", "runoff ratio for ELQ"], ["eq-10.13-10.14", "runoff ratio for reuse pit"], ["fig-10.14-10.16", "factors behind the ELQ curves"]]
  },
  "tab-10.5": {
    use: "Recommended cutoff ratio and target advance time for the soil and reuse system. Use it to set the goal before changing furrows per set or stream size. With no reuse on a medium soil the target is 0.70, with a closed reuse system 0.40.",
    ask: "With a 12 hour set on loam and no tailwater pit, how fast should water get to the bottom of the field?",
    from: [],
    to: [["tab-10.2", "target advance time"], ["eq-10.11", "target cutoff ratio"], ["tab-10.3-10.4", "CR for factors"], ["proc-furrow-set", "target CR in the set design"]]
  },
  "tab-10.6": {
    use: "Basic intake, maximum furrow length and recommended stream size by soil texture, with the nonerosive check. Use it when planning a new furrow layout or when advance is very slow or fast for the soil.",
    ask: "My rows are 1,300 ft on sandy loam. Are they too long?",
    from: [["eq-10.10", "nonerosive limit"], ["eq-10.9", "actual stream size"]],
    to: [["eq-10.3", "recommended stream size for gross depth"], ["eq-10.9", "target stream size per furrow"]]
  },
  "tab-10.7": {
    use: "Surge irrigation cycle times for four or six cycles during advance, with the cutback cycles that follow. Use it to set up a surge valve controller after timing how long water takes to reach the first quarter or sixth of the field.",
    ask: "Water gets a quarter of the way down in 30 minutes. How do I program the surge valve for a 12 hour return?",
    from: [["tab-10.1", "advance time to the first station"]],
    to: [["eq-10.4", "set time and inflow for gross depth"]]
  },
  "fig-10.14-10.16": {
    use: "ELQ versus cutoff ratio for fine, medium and coarse soils with and without reuse, and the cutoff ratio that gives the best efficiency. Use it with a grower to show what changing set time or furrows per set could gain before trying it in the field.",
    ask: "What is the best efficiency I can get on this clay loam if I put in a return system?",
    from: [["eq-10.11", "current cutoff ratio"], ["tab-10.3-10.4", "infiltration factor and runoff ratio"]],
    to: [["tab-10.5", "compare best CR to the table"], ["eq-5.20", "ELQ for system capacity"], ["proc-furrow-set", "target CR"]]
  },
  "proc-furrow-set": {
    use: "Full reactive furrow set design: from a trial set's measured advance time, it picks a target cutoff ratio, the new number of furrows per set, the stream size and erosion check, and then gross depth, low quarter depth, effective depth, runoff ratio and ELQ. Use it on a field visit after one timed set to give the irrigator new set instructions.",
    ask: "We timed one set. How many rows should we run next time and what will that do to efficiency?",
    from: [["tab-10.5", "target cutoff ratio"], ["tab-10.2", "correction for furrows per set"], ["eq-10.10", "nonerosive stream size"], ["eq-6.14-6.15", "soil water deficit"], ["meter-timing", "total inflow"]],
    to: [["eq-6.9", "effective depth for irrigation interval"], ["eq-5.20", "ELQ for gross capacity"], ["eq-10.13-10.14", "runoff ratio for a reuse pit"], ["eq-6.18-6.25", "effective irrigation in the checkbook"]]
  }
});

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

window.CALC_USE = Object.assign(window.CALC_USE || {}, {
  "eq-15.1": {
    use: "Sets the injection rate for a set system such as drip zones, solid set or surface sets: product per acre times area, divided by injection time. Use it when a vegetable grower wants to fertigate a drip block in one set. The book example puts 15 lb N/ac of 28% UAN on 78 ac over 24 hr at about 16 gal/hr.",
    ask: "How many gallons per hour should my pump inject to get 15 lb of N on this field?",
    from: [["injection-plan", "product per acre G_p"], ["drip-runtime", "set time limiting injection time"], ["eq-12.5-12.7", "area per set A_s"], ["flush-total", "flush time left at the end of the set"]],
    to: [["pump-calibration", "desired injection rate q_i"]]
  },
  "eq-15.2": {
    use: "Sets the injection rate for a pivot or linear from product per acre and the acres covered per hour. Get the acres per hour from the field area and the hours per revolution at the timer setting. A 126 ac pivot on a 22 hr revolution at 1.5 pt/ac needs about 1.1 gal/hr.",
    ask: "I want 1.5 pints per acre through the pivot. What rate do I set the injector to?",
    from: [["eq-13.7", "hours per revolution at the timer setting"], ["eq-13.7-inv", "revolution time"], ["eq-13.2", "irrigated area"], ["tab-13.2", "irrigated area"], ["pivot-eval-13", "hours per revolution"]],
    to: [["pump-calibration", "desired injection rate q_i"]]
  },
  "eq-15.3": {
    use: "Gives the time for water to travel the length of a mainline or manifold segment, which is how long it takes to flush chemical out. Use it to decide how long to keep running clean water after injection stops. A 975 ft, 8 in mainline at 500 gpm flushes in about 5 min.",
    ask: "How long do I keep the water running after I stop injecting?",
    from: [["tab-8.5", "mainline inside diameter"], ["meter-timing", "measured system flow"], ["eq-5.20", "system flow"]],
    to: [["flush-total", "mainline flushing time"], ["eq-15.1", "flush time shortens injection time"]]
  },
  "eq-15.4": {
    use: "Gives flushing time for a lateral or manifold with evenly spaced outlets. Flow drops along the lateral, so this takes much longer than the mainline. A drip lateral 1,300 ft long with 0.26 gph emitters takes about 75 min to clear through the emitters.",
    ask: "How long before the fertilizer reaches the far end of my drip tape?",
    from: [["eq-14.3", "emitter discharge q"], ["lateral-design", "lateral length and outlet spacing"]],
    to: [["flush-total", "manifold and lateral flushing time"]]
  },
  "eq-15.5": {
    use: "Gives the time to flush a pivot lateral after injection, with the end gun off. Use it to tell the operator how long to keep the pivot running after injection ends so the start of the circle gets its full rate. For a 1,280 ft pivot at 860 gpm it is about 7 min.",
    ask: "After I shut off the injector, how much longer should the pivot run?",
    from: [["meter-timing", "measured system flow"], ["eq-5.20", "system flow"]],
    to: [["eq-15.2", "flush minutes added after injection stops"]]
  },
  "flush-total": {
    use: "Adds mainline, manifold and lateral flushing times for a drip zone. Use it to plan a fertigation schedule so each zone gets clean water at the end of the set. The book example has 10 min for mainline and manifold plus 75 min for the laterals.",
    ask: "How long do I need to run clean water through each zone after fertigating?",
    from: [["eq-15.3", "mainline flushing time"], ["eq-15.4", "lateral flushing time"], ["drip-runtime", "zone flow and run time"]],
    to: [["eq-15.1", "flush time sets the injection window"], ["injection-plan", "injection time within the set"]]
  },
  "pump-calibration": {
    use: "Sets the starting dial position on an injection pump and checks the actual rate from a timed catch. Run the catch at operating pressure, compare to the target and adjust. In the book example, 3,000 mL in 2.5 min is 19 gal/hr against a 17.5 gal/hr target, so the dial goes down and you test again.",
    ask: "I caught 3 liters in two and a half minutes. Is my injector set right?",
    from: [["eq-15.1", "desired rate for set systems"], ["eq-15.2", "desired rate for moving systems"], ["injection-plan", "injection rate from the label"]],
    to: []
  },
  "injection-plan": {
    use: "Takes a label rate or a nutrient rate and works through product per acre, total product, injection rate and the pump dial setting. Use it at the farm when setting up a fertigation or chemigation run so the numbers on the tank and the pump agree. It works for set systems and pivots.",
    ask: "I want 30 lb N per acre of 28% through the pivot. How do I set the pump?",
    from: [["eq-13.7", "time per pass at the timer setting"], ["drip-runtime", "set time for drip zones"], ["eq-13.2", "area covered per pass"], ["eq-12.5-12.7", "area per set"]],
    to: [["pump-calibration", "rate to verify with a catch test"], ["eq-15.1", "injection rate check for set systems"], ["eq-15.2", "injection rate check for moving systems"]]
  }
});

