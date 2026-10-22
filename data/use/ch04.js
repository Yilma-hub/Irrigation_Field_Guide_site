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
