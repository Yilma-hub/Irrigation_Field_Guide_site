window.DE_DOCS = (window.DE_DOCS || []).concat([{
 "id": "neh-652",
 "title": "National Engineering Handbook Part 652, National Irrigation Guide (Chapters 2 Soils, 3 Crops, 4 Water Requirements, 6 Irrigation System Design and 9 Irrigation Water Management)",
 "short": "NEH 652 Irrigation Guide",
 "org": "USDA Natural Resources Conservation Service",
 "year": 1997,
 "url": "https://irrigationtoolbox.com/NEH/Part652_NationalIrrigationGuide/ch2.pdf",
 "license": "public domain",
 "summary": "The NRCS National Irrigation Guide (210-vi-NEH, September 1997) is the field engineer's working reference for soil water, crop rooting and MAD values, irrigation water requirements, efficiencies and system evaluation. These sections hold the tables NRCS staff use to plan and check irrigation in Delaware: AWC by texture, sprinkler intake groups and runoff limits for center pivots, MAD by crop and growth stage, root depths, sensor placement, and the step by step center pivot, sprinkler and drip evaluation procedures. Text read from the chapter PDFs mirrored at irrigationtoolbox.com (ch2, ch3, ch4, ch6 and ch9).",
 "sections": [
  {
   "id": "soil-water",
   "h": "Field capacity, wilting point and available water capacity",
   "html": "<p>Available Water Capacity (AWC) is the amount of water held in the soil available for use by most plants. Units: inches of water per inch or per foot of soil depth, gravimetric percent by weight, or percent on a volume basis.</p><ul><li><b>Field capacity</b> is the amount of water a well-drained soil holds after free water has drained because of gravity. In the laboratory it is the water retained at a tension of one-tenth atmosphere (bar) for sandy soils and one-third atmosphere for other finer textured soils.</li><li>In the field, free water in coarse textured (sandy) soils can drain in a few hours. Medium textured (loamy) soils take approximately 24 hours, while fine textured (clayey) soils may take several days.</li><li><b>Permanent wilting point</b> is determined in the laboratory at 15 atmospheres tension. Unless plant specific data are known, water held at greater than 15 atmospheres is considered unavailable.</li><li>Major soil characteristics affecting AWC are texture, structure, bulk density, salinity, sodicity, mineralogy, soil chemistry, and organic matter. Texture is the predominant factor in mineral soils.</li><li>With most field crops, yield is not affected if adequate soil water is available at less than 5 atmospheres for medium to fine textured soils. Above about 5 atmospheres, yield or biomass is reduced.</li><li>When percent clay increases over about 40 percent, AWC is reduced even though total soil-water content may be greater.</li><li>The AWC on the Soil Interpretation Record accounts for the estimated coarse fragments for the series, but any additional coarse fragments found on field checking must be accounted for (Table 2-2).</li><li>Density can make AWC differences of -50 percent to +30 percent compared to average densities.</li></ul><p>Volume of water (in/ft) = percent volume of water x 12 in/ft / 100, where percent volume of water = (W<sub>w</sub>/W<sub>s</sub>) x D<sub>b</sub> x 100 and percent pore space = 100 - (D<sub>b</sub>/D<sub>p</sub> x 100) (Exhibit 2-2).</p>",
   "calcs": [
    "eq-2.5",
    "eq-2.6",
    "eq-2.8",
    "eq-2.14",
    "eq-2.2",
    "tab-2.3"
   ],
   "book": [
    "2.3",
    "2.5",
    "2.6",
    "2.7"
   ],
   "tags": [
    "AWC",
    "field capacity",
    "wilting point",
    "bulk density",
    "coarse fragments"
   ]
  },
  {
   "id": "intake",
   "h": "Soil intake and sprinkler application rates",
   "html": "<p>Infiltration rates change during the time water is applied, typically becoming slower with elapsed time, and typically decrease as the season progresses because of cultivation and harvest equipment. For surface irrigation the intake characteristic is F = a T<sub>o</sub><sup>b</sup> + c, where F is cumulative intake (inches), T<sub>o</sub> is opportunity time (minutes), a and b are curve constants and c is commonly 0.275.</p><p>For sprinkle irrigation, infiltration is expressed as an intake rate or maximum application rate in inches per hour. Caution is needed when comparing average sprinkler rates with published infiltration values:</p><ul><li>Low angle nozzles apply proportionally more water in the area nearest the nozzle.</li><li>Peak instantaneous rates under self-moving laterals can be very high. A 1-inch application at the outer end of a quarter mile long Low Pressure In Canopy center pivot can apply water at instantaneous rates exceeding 50 inches per hour for 2 to 10 minutes.</li><li>Large droplets (inadequate pressure or long throw) disperse and microcompact bare soil, forming a dense surface layer that can reduce infiltration significantly, most likely on soils that are sodic, poorly graded, bare, low in organic matter, with little residue or limited canopy.</li><li>Center pivots have higher application rates in the outer fourth of the circle. The longer the lateral, the higher the rate in the outer portion, so surface storage is essential on medium or fine textured and sloping soils.</li></ul><p>Surface storage can come from tillage roughness, in-furrow chiseling or ripping, crop residue, basin tillage, permanent vegetation or a combination, and must be available throughout the season. Table 2-7 assumes 1,320-foot center pivots. Table 2-9 factors refine intake estimates: initial water content -20% to +20%, organic content -10% to +10%, compaction -50% to 0, hardpan -50% to 0, gravel or coarse sand layer near surface -30% to 0, salinity and sodicity -20% to +10%, surface crusting -20% to 0, sediments in irrigation water -20% to 0, cracking -40% to +40%, vegetative cover -20% to +20%, soil condition -10% to +10%, ripping or subsoiling 0 to +20%, soil erosion -20% to 0. Bulk density can change intake -50% to +30% from typical.</p>",
   "calcs": [
    "tab-13.5-13.6",
    "runoff-13",
    "eq-13.4-13.5",
    "tab-11.4",
    "eq-11.2-11.3",
    "tab-13.8"
   ],
   "book": [
    "2.8",
    "11.3",
    "13.3"
   ],
   "tags": [
    "infiltration",
    "intake family",
    "application rate",
    "runoff",
    "surface storage",
    "center pivot"
   ]
  },
  {
   "id": "mad",
   "h": "Management Allowable Depletion (MAD)",
   "html": "<p>MAD is the percentage of the available soil water that can be depleted between irrigations without serious plant moisture stress. It is expressed as a percentage of total AWC in the root zone, a soil-water deficit (SWD) in inches, or an allowable soil-water tension level.</p><ul><li>Historically, an allowable depletion of between 30 and 60 percent of AWC has been used.</li><li>For most field crops and loamy soils, 50 percent is allowed to be depleted. For most vegetables, 30 percent depletion is desirable.</li><li>Typical in-season MAD: 25 to 40 percent for high value, shallow rooted crops, 50 percent for deep rooted crops, and 60 to 65 percent for low value deep rooted crops.</li><li>Recommended MAD by soil texture for deep rooted crops: fine texture (clayey) soils 40%, medium texture (loamy) soils 50%, coarse texture (sandy) soils 60%.</li><li>A much higher quality product is produced if MAD is kept less than 35 percent in some crops, such as potatoes, pecans, vegetables, melons and mint.</li><li>The conventional total soil volume AWC and MAD concepts do not apply to microirrigation where root and wetted volumes are restricted.</li><li>Table 3-3 note: check soil moisture for crop stress point approximately one-third of the depth of the crop root zone.</li></ul><p>Irrigation frequency (days) = MAD (inches) / crop ET rate (in/day). Net irrigation = MAD x total AWC in the root zone. Example: 8 inches AWC and MAD = 40% gives 3.2 inches net. Gross amount = net amount / overall irrigation efficiency including management.</p>",
   "calcs": [
    "eq-6.1",
    "eq-6.2-6.5",
    "eq-6.8",
    "tab-6.1",
    "eq-5.20"
   ],
   "book": [
    "6.2",
    "6.3"
   ],
   "tags": [
    "MAD",
    "allowable depletion",
    "irrigation frequency",
    "net irrigation"
   ]
  },
  {
   "id": "critical",
   "h": "Critical growth periods for moisture stress",
   "html": "<p>Most crops are sensitive to water stress during one or more critical growth periods. Stress during a critical period can cause an irreversible loss of yield or quality. Determine the need for irrigation by onsite examination of soil water or a scheduling method, not plant appearance: when the plant appears dry it may already be stressed, and dry appearance may be caused by nutrients, insects, disease or trace elements. Key Delmarva crops (Table 3-1):</p><ul><li>Corn, grain: from tasseling through silk stage and until kernels become firm. Depletion of 80% or more of AWC may be allowed during final ripening.</li><li>Corn, sweet: tasseling through silk stage until kernels become firm.</li><li>Soybeans: flowering and fruiting stage.</li><li>Small grain: boot, bloom, milk stage, early head development and early ripening.</li><li>Potato: flowering and tuber formation to harvest. Restrict MAD to 30 to 35% of AWC.</li><li>Watermelon and melons: blossom to harvest. Beans, green: blossom through harvest. Tomatoes: flower formation, fruit set and rapid enlargement. Peppers: flowering and fast enlarging stage.</li><li>Lettuce: head enlargement to harvest, MAD 15 to 20% recommended.</li></ul>",
   "calcs": [
    "tab-6.1"
   ],
   "book": [
    "6.2",
    "6.5"
   ],
   "tags": [
    "critical period",
    "corn",
    "soybean",
    "potato",
    "vegetables",
    "stress"
   ]
  },
  {
   "id": "roots",
   "h": "Rooting depth and extraction pattern",
   "html": "<ul><li>For most plants, the concentration of moisture absorbing roots is greatest in the upper part of the root zone (usually the top quarter). About 70 percent of available soil water comes from the upper half of a uniform soil profile.</li><li>Typical extraction by root zone quarter (Figure 3-2): 40% from the top quarter, 30% from the second, 20% from the third and 10% from the bottom quarter.</li><li>Optimum crop yields result when soil-water tensions in the upper half are kept below 5 atmospheres.</li><li><b>Never assume a plant root zone.</b> Use a shovel or auger to observe the actual root development pattern and depth of present or former crops (even weeds).</li><li>In many medium to fine textured soils, a compacted layer at a uniform tillage depth confines roots to the upper 6 to 10 inches. Very thin tillage pans can restrict root development. Compaction layers can be fractured by subsoiling when the soil is dry, but will return unless the cause is changed.</li><li>All plants have very shallow roots early, so only light and frequent irrigations are needed then. Roots will not grow into dry soil.</li><li>Table 3-2 management depths: corn grain and silage 4 ft, sweet corn 3 ft, small grain 4 ft, potatoes 3 ft, tomatoes 2 ft, pasture 3 ft, turf 2 ft. Vegetables: 1-foot depth for lettuce, onions, spinach. 2-foot for cabbage, brussel sprouts, broccoli, cauliflower. 3-foot for turnips, parsnips, carrots, beets, green beans. 4-foot for squash, cucumber, melons.</li></ul>",
   "calcs": [
    "extraction-4321",
    "tab-6.2",
    "eq-6.6-6.7",
    "tab-6.3"
   ],
   "book": [
    "6.3"
   ],
   "tags": [
    "root depth",
    "4-3-2-1",
    "compaction",
    "extraction pattern"
   ]
  },
  {
   "id": "water-req",
   "h": "Net and gross irrigation requirement and system capacity",
   "html": "<p>Net irrigation requirement (all values depths in inches): F<sub>n</sub> = ET<sub>c</sub> + A<sub>w</sub> - P<sub>e</sub> - GW - deltaSW, where A<sub>w</sub> is auxiliary water (leaching, temperature modification, crop quality), P<sub>e</sub> effective precipitation, GW ground water contribution and deltaSW the change in soil water. Effective precipitation is the portion of growing season precipitation that infiltrates and is available for crop use. It excludes deep percolation, runoff and soil surface evaporation.</p><ul><li>Q T = D A, with Q in acre-inch per hour, T hours, D depth (inches) and A acres. 1 ft<sup>3</sup>/s = 1 ac-in/hr = 450 gpm (approximately), so 1 ft<sup>3</sup>/s for 1 hour is a 1-inch depth over 1 acre.</li><li>Gross application F<sub>g</sub> = F<sub>n</sub>/E<sub>a</sub> and gross capacity C<sub>g</sub> = C<sub>n</sub>/E<sub>a</sub> (E<sub>a</sub> as a decimal).</li><li>For sprinkler systems, it is common to use 22 hours per day or 6 days per week for actual water application time.</li><li>The most conservative capacity design meets the peak daily crop ET with no credit for rain or stored soil water. Using effective rainfall and soil storage can reduce capacity.</li><li>Estimated daily crop ET is not the average daily use for longer periods. Use the peak month daily (or several day average) rate for capacity.</li><li>Irrigation frequency (days) = MAD x total AWC for the root zone (inches) / daily ET<sub>c</sub> (in/day).</li><li>Soil-water budget: F<sub>g</sub> = ET<sub>c</sub> + A<sub>w</sub> + D<sub>p</sub> + RO + SDL - P - GW - deltaSW (SDL = spray, drift and canopy interception losses).</li><li>Normal year (50% chance) and dry year (80% chance) precipitation are used for crop ET and NIR tables.</li></ul><p><b>Rainfall management in humid areas:</b> rather than fully refilling, leave between 0.5 and 1.0 inch of AWC in the profile unfilled for storage of potential rainfall. Applied irrigation water should always be considered supplemental to rainfall. In semihumid and humid areas good managers do not bring the soil to field capacity with each irrigation. For example, if a center pivot applies a net of 1 inch per cycle, let MAD be equal to 1 inch plus expected rainfall.</p>",
   "calcs": [
    "eq-3.3",
    "run-time",
    "eq-5.20",
    "cn-from-flow",
    "eq-6.8",
    "eq-6.26",
    "eq-4.1",
    "tab-5.3"
   ],
   "book": [
    "5.5",
    "5.6",
    "6.4",
    "4.4"
   ],
   "tags": [
    "net irrigation requirement",
    "system capacity",
    "effective rainfall",
    "QT=DA",
    "humid"
   ]
  },
  {
   "id": "measuring",
   "h": "Measuring soil water: feel, tensiometers, blocks, neutron probe",
   "html": "<ul><li>Sample several sites in each field, each horizon or, if homogeneous, 6-inch depth increments.</li><li><b>Feel and appearance:</b> samples at about 6-inch increments compared to Exhibit 9-1. With practice, estimates within 10 percent of actual. Tools: push core sampler, auger or shovel.</li><li><b>Tensiometers:</b> range 0 to 100 centibars, practical operating range 0 to 80 centibars. 80 centibars corresponds to about 90 percent AWC depletion for a sandy soil and about 30 percent for medium to fine textured soils, which limits tensiometers to medium to fine soils with high frequency irrigation or soils kept wet. They break suction at about 80 to 85 centibars. Install in pairs at each site at one-third and two-thirds of the rooting depth, setting the tip in a soil paste from an auger hole about 2 inches below the tip depth. Protect from freezing.</li><li><b>Electrical resistance blocks:</b> work best between 0 and 2 atmospheres (bars). Gypsum blocks are affected by salinity and dissolve slowly. Install with soil paste about 6 inches deep in the bottom of a hole augured about 2 inches below the deepest block, backfilling soil by layers.</li><li><b>Thermal dissipation blocks</b> must be individually calibrated.</li><li><b>Neutron probe:</b> reads a sphere of 6 to 16 inches. It must be calibrated for the in-place soil and access tube material (PVC, aluminum or steel) by gravimetric sampling.</li><li>Most commercial devices give relative readings. A calibration curve for each soil is needed, or the irrigator must learn what meter value means time to irrigate on each soil texture.</li><li>With experience, one sample at 12 to 18 inches per site can be sufficient. At first, examine three to five samples at four or five sites in a field.</li></ul>",
   "calcs": [
    "eq-2.3",
    "eq-2.5",
    "tab-6.5",
    "tab-6.6",
    "swd-fcobs",
    "eq-6.14-6.15"
   ],
   "book": [
    "2.10",
    "6.4"
   ],
   "tags": [
    "feel method",
    "tensiometer",
    "resistance block",
    "neutron probe",
    "sensor placement",
    "calibration"
   ]
  },
  {
   "id": "scheduling",
   "h": "Irrigation scheduling methods",
   "html": "<ul><li>Modern scheduling is based on a soil-water or crop-water balance for one or more points in the field. Scheduling involves forecasting crop water use to anticipate future needs.</li><li>All scheduling programs should account for rainfall measured at the field site, because farmstead or town rainfall often does not represent the field.</li><li>Crop yield and quality can be improved with most plants by maintaining lower soil-water tensions. It is wise to irrigate when the soil profile can hold a full irrigation.</li><li><b>Crop monitoring</b> (crop water stress index, infrared photography) indicates when to irrigate but not how much.</li><li><b>Soil moisture monitoring</b> is perhaps the most accurate scheduling tool and is used to calibrate other methods, like a bank statement checks a checkbook.</li><li><b>Checkbook method:</b> deposits are effective precipitation, irrigation and water table contribution. Withdrawals are crop ET and soil evaporation. Measure rain at the field and check with soil water measurements.</li><li><b>Computer methods</b> are no better than the data used or the irrigator's ability to interpret the output. Keep it simple.</li><li>Deep percolation cannot be measured directly in the field. Sprinkler depths can be checked with catch cans and flow meters.</li></ul>",
   "calcs": [
    "checkbook",
    "eq-6.18-6.25",
    "ld-ed-window",
    "eq-6.10-6.11",
    "eq-6.16-6.17"
   ],
   "book": [
    "6.4",
    "6.5"
   ],
   "tags": [
    "checkbook",
    "water balance",
    "scheduling",
    "rain gauge"
   ]
  },
  {
   "id": "efficiency",
   "h": "Efficiency and uniformity definitions",
   "html": "<ul><li><b>Conveyance efficiency (E<sub>c</sub>):</b> water delivered divided by water diverted or pumped into a channel or pipeline, percent.</li><li><b>Irrigation efficiency (E<sub>i</sub>):</b> average depth beneficially used divided by average depth applied.</li><li><b>Application efficiency (E<sub>a</sub>):</b> average depth infiltrated and stored in the root zone divided by average depth applied. Stored depth cannot exceed the SWD.</li><li><b>Application efficiency low quarter (AELQ or E<sub>q</sub>):</b> average of the lowest one-fourth of measurements of water infiltrated and stored in the root zone divided by the average depth applied.</li><li><b>Application efficiency low half (AELH or E<sub>h</sub>):</b> same, using the low one-half.</li><li><b>Project application efficiency (E<sub>p</sub>):</b> depth stored in the root zone divided by depth diverted or pumped.</li><li><b>Distribution uniformity (DU):</b> average low-quarter depth received (sprinkler, catch can) or infiltrated (surface) divided by the average depth, x 100. For low value crops or partial season irrigation, DU of the low one-half may be more economical.</li><li><b>Christiansen's uniformity:</b> CU = 100 (1.0 - sum X / (m n)), X absolute deviation from the mean, m mean depth, n number of observations. NRCS says DU should be used instead of CU so methods can be compared.</li><li>CU = 100 - 0.63 (100 - DU) and DU = 100 - 1.59 (100 - CU).</li><li>Design efficiencies assume good management of a well designed system. If the irrigator will not meet that, use a lower value. Overestimating management can result in an inadequate system design.</li></ul>",
   "calcs": [
    "eq-5.1",
    "eq-5.2",
    "eq-5.3",
    "eq-5.9-5.11",
    "eq-5.19",
    "project-efficiency"
   ],
   "book": [
    "5.3"
   ],
   "tags": [
    "DU",
    "CU",
    "application efficiency",
    "AELQ",
    "conveyance efficiency"
   ]
  },
  {
   "id": "system-eff",
   "h": "Expected efficiencies by system type (Chapter 6)",
   "html": "<ul><li>Fixed (solid) set sprinklers: application efficiencies can be 60 to 85 percent depending on design and management (p. 6-42).</li><li>Center pivot: 75 to 90 percent with proper management, depending on wind, sprinkler type, operating pressure and tillage practices (pp. 6-44 and 6-45).</li><li>LEPA: application efficiencies of 95 percent are an objective (p. 6-50).</li><li>LPIC: at least 85 percent can be obtained with proper water and soil management (p. 6-51).</li><li>Micro (drip and spray): 80 to 90 percent for the area irrigated with proper management, typically 55 to 65 percent without it (p. 6-59).</li></ul>",
   "calcs": [
    "tab-5.4",
    "eq-5.20"
   ],
   "book": [
    "5.3",
    "5.8",
    "13.1",
    "14.1"
   ],
   "tags": [
    "efficiency",
    "center pivot",
    "LEPA",
    "drip",
    "solid set"
   ]
  },
  {
   "id": "eval-quick",
   "h": "Simple and abbreviated system evaluations",
   "html": "<p>Principles: complete irrigations in a timely manner, apply enough to bring the root zone to field capacity minus allowable storage for potential rainfall, apply at a rate that will not cause waste, erosion or contamination, and always improve management of the existing system first.</p><ul><li>Equipment: soil auger, push tube or probe. For sprinklers add a pressure gauge with pitot tube, drill bits for nozzle wear, a short hose and a calibrated container. For micro, pressure gauge fittings and catch containers.</li><li>Operator checks: pressures at pump, mainline, heads and both sides of filters. A few 3 to 4 inch straight sided cans for catch depth. Emitter flow with a one-quart container and a watch (do not raise emitters more than a few inches). Depth applied from QT = DA. Probe after irrigation to see depth of penetration.</li><li>Applying QT = DA will solve four out of five IWM problems. Net depth = gross depth x overall efficiency.</li><li>Leaks: 1 gpm = 1 acre inch every 20 days.</li><li>The ball or tile probe shows depth of water penetration after irrigation and works best where there is an abrupt wetting front.</li><li>Periodic move laterals: measure nozzle flow with a hose into a calibrated bucket. Application rate I = 96.3 q / (S<sub>l</sub> x S<sub>m</sub>), with q in gpm and spacings in feet, depth = I x H (set hours).</li><li>Pressure differences should not exceed 20 percent between any two sprinkler heads on the same lateral, which keeps discharge differences under 10 percent. Design pressure should occur about a third of the distance from the upstream end on uniform, level laterals.</li><li>Nozzle wear: a nozzle is worn if the next larger drill bit shank fits the orifice or the bit can be moved sideways more than 5 degrees. Replacing worn or mixed nozzles with new uniform nozzles is one of the most cost effective actions.</li><li>Impact sprinklers should rotate at 1 to 2 revolutions per minute. High pressure makes fogging and drift. Low pressure makes large drops and a doughnut-shaped pattern.</li><li>Travelers: space catch containers across the travel path, combine catches where lap would occur, check big gun nozzle diameters with calipers. Increasing travel speed or changing tillage to add surface storage are low cost fixes for runoff.</li></ul>",
   "calcs": [
    "eq-3.3",
    "eq-3.5",
    "eq-11.1",
    "eq-11.2-11.3",
    "catch-can-12",
    "eq-12.11",
    "meter-depth"
   ],
   "book": [
    "5.4",
    "11.3",
    "12.2",
    "12.5"
   ],
   "tags": [
    "evaluation",
    "nozzle wear",
    "pressure variation",
    "catch can",
    "traveler",
    "QT=DA"
   ]
  },
  {
   "id": "eval-pivot",
   "h": "Center pivot and linear move detailed evaluation",
   "html": "<p><b>Electrical safety first:</b> check for current leakage between the system and ground with a properly grounded ohmmeter or ground check (tick) meter while each tower motor runs. Do not proceed if leakage is indicated. Then touch metal briefly with the back of the hand only. Use nonconductive ladders with hooks.</p><ul><li>Catch containers: number = (lateral length + 10) / 30 ft, with 30-foot spacing the maximum recommended (ASAE S436 for more precise tests). Set at or slightly above the canopy. Two rows averaged is best. Containers are often omitted within 400 feet of the pivot point (less than 3 acres). A little mineral oil reduces evaporation.</li><li>Tower speed: stake the end tower, run at least 20 minutes, speed (ft/hr) = distance x 60 / minutes.</li><li>Hours per revolution = end tower circumference (2 pi x distance to end tower) / end tower speed.</li><li>Area (acres) = pi x (distance from pivot to outer wetted area)<sup>2</sup> / 43,560.</li><li>Gross application per revolution (inches) = hours per revolution x system gpm / (453 x acres).</li><li>Weighted average and weighted low-quarter catch use each container's distance factor, because each sprinkler irrigates a different area.</li><li>DU = weighted low-quarter average / weighted average. CU is approximately 100 - 0.63 (100 - DU).</li><li>Effective portion R<sub>e</sub> = weighted average catch / gross application (losses to evaporation, drift, leaks). E<sub>q</sub> = DU x R<sub>e</sub>.</li><li>Net application per day = gross application x hours operated per day x E<sub>q</sub> / (hours per revolution x 100).</li><li>Maximum application rate (in/hr) = maximum catch (inches) x 60 / minutes containers are uncovered.</li><li>Revolutions required = NIR x 100 / (E<sub>q</sub> x gross application per revolution).</li><li>Compare SWD with MAD, compare results to the manufacturer's design, and look for translocation, runoff and erosion. Management changes are always the first increment of change.</li><li>LEPA, LPIC and specialty heads need special catch devices, such as rain gutters for in-canopy heads.</li></ul>",
   "calcs": [
    "eq-5.4-5.5",
    "pivot-eval-13",
    "eq-13.7",
    "eq-13.7-inv",
    "eq-13.4-13.5",
    "runoff-13",
    "catch-can"
   ],
   "book": [
    "5.4",
    "5.9",
    "13.3",
    "13.5"
   ],
   "tags": [
    "center pivot",
    "catch can",
    "DU",
    "evaluation",
    "electrical safety",
    "tower speed"
   ]
  },
  {
   "id": "eval-micro",
   "h": "Microirrigation system evaluation",
   "html": "<ul><li>Equipment: pressure gauge (0 to 50 psi) with adapters, stopwatch, 250 to 500 mL graduated cylinder, funnel, probe or auger, manufacturer emitter charts, shop built catch containers, 3-foot troughs for line source tubing. A 0 to 20 psi gauge may be needed for accurate low pressure readings.</li><li>Select four laterals along an operating manifold: one near the inlet, two near the third points and one near the outer end. Measure two adjacent emission points at four plant locations on each lateral, giving 8 pressure readings and 32 discharge volumes at 16 locations.</li><li>Record pressure at the inlet and outlet of the filters, and inlet and downstream ends of each test lateral.</li><li>Check the percent of soil wetted at one plant per test lateral. Wetted width should reach the drip line of perennials. For annual row crops, wetted width should generally be not less than 50 to 65 percent of the total surface area. Minimum wetted volume appears to be about a third for vines and orchards and higher for close spaced row crops.</li><li>Emission uniformity EU = (average of low quarter discharges / average discharge) x 100. Potential application efficiency of the low quarter PELQ = 0.9 x EU.</li><li>Emission reduction factor ERF = (average MLIP + 1.5 x minimum MLIP) / (2.5 x average MLIP), where MLIP is the minimum lateral inlet pressure on each manifold. System PELQ = ERF x tested PELQ.</li><li>Overall minimum depth applied D<sub>n</sub> = D<sub>a</sub> x system PELQ (or AELQ) / 100.</li><li>Compare catch to the manufacturer's rating. Low flow can be plugging, wrong pressure, excessive head loss or manufacturing variation. Adjust manifold valves to give equal minimum lateral inlet pressure.</li></ul>",
   "calcs": [
    "eq-14.6",
    "eq-14.7",
    "design-du",
    "eq-14.3",
    "eq-14.8",
    "drip-runtime"
   ],
   "book": [
    "14.6",
    "14.7"
   ],
   "tags": [
    "drip",
    "emission uniformity",
    "EU",
    "evaluation",
    "wetted area"
   ]
  },
  {
   "id": "storage-tables",
   "h": "Surface storage for sprinkler runoff control",
   "html": "<p>Approximate soil surface storage by field slope for the maximum allowable net application without special practices: 0 to 1% slope 0.5 in, 1 to 3% 0.3 in, 3 to 5% 0.1 in, more than 5% 0.0 in. Basin tillage, reservoir (dammer-diker) tillage and residue add storage (Tables 2-11 and 2-13). Storage from reservoir tillage dikes depends on dike height and bottom width, with Figure 2-5b drawn for 1 percent slope (divide storage by actual percent slope for other slopes).</p>",
   "calcs": [
    "tab-13.5-13.6",
    "runoff-13"
   ],
   "book": [
    "13.3"
   ],
   "tags": [
    "surface storage",
    "residue",
    "basin tillage",
    "runoff"
   ]
  }
 ],
 "tables": [
  {
   "id": "t2-1",
   "title": "Available water capacity (AWC) by texture (Table 2-1)",
   "cols": [
    "Symbol",
    "Texture",
    "AWC range (in/in)",
    "AWC range (in/ft)",
    "Est. typical AWC (in/ft)"
   ],
   "rows": [
    [
     "COS",
     "Coarse sand",
     "0.01 to 0.03",
     "0.1 to 0.4",
     0.25
    ],
    [
     "S",
     "Sand",
     "0.01 to 0.03",
     "0.1 to 0.4",
     0.25
    ],
    [
     "FS",
     "Fine Sand",
     "0.05 to 0.07",
     "0.6 to 0.8",
     0.75
    ],
    [
     "VFS",
     "Very fine sand",
     "0.05 to 0.07",
     "0.6 to 0.8",
     0.75
    ],
    [
     "LCOS",
     "Loamy coarse sand",
     "0.06 to 0.08",
     "0.7 to 1.0",
     0.85
    ],
    [
     "LS",
     "Loamy sand",
     "0.06 to 0.08",
     "0.7 to 1.0",
     0.85
    ],
    [
     "LFS",
     "Loamy fine sand",
     "0.09 to 0.11",
     "1.1 to 1.3",
     1.25
    ],
    [
     "LVFS",
     "Loamy very fine sand",
     "0.10 to 0.12",
     "1.0 to 1.4",
     1.25
    ],
    [
     "COSL",
     "Coarse sandy loam",
     "0.10 to 0.12",
     "1.2 to 1.4",
     1.3
    ],
    [
     "SL",
     "Sandy loam",
     "0.11 to 0.13",
     "1.3 to 1.6",
     1.45
    ],
    [
     "FSL",
     "Fine Sandy Loam",
     "0.13 to 0.15",
     "1.6 to 1.8",
     1.7
    ],
    [
     "VFSL",
     "Very fine sandy loam",
     "0.15 to 0.17",
     "1.8 to 2.0",
     1.9
    ],
    [
     "L",
     "Loam",
     "0.16 to 0.18",
     "1.9 to 2.2",
     2.0
    ],
    [
     "SIL",
     "Silt loam",
     "0.19 to 0.21",
     "2.3 to 2.5",
     2.4
    ],
    [
     "SI",
     "Silt",
     "0.16 to 0.18",
     "1.9 to 2.2",
     2.0
    ],
    [
     "SCL",
     "Sandy clay loam",
     "0.14 to 0.16",
     "1.7 to 1.9",
     1.8
    ],
    [
     "CL",
     "Clay loam",
     "0.19 to 0.21",
     "2.3 to 2.5",
     2.4
    ],
    [
     "SICL",
     "Silty clay loam",
     "0.19 to 0.21",
     "2.3 to 2.5",
     2.4
    ],
    [
     "SC",
     "Sandy clay",
     "0.15 to 0.17",
     "1.8 to 2.0",
     1.9
    ],
    [
     "SIC",
     "Silty clay",
     "0.15 to 0.17",
     "1.8 to 2.0",
     1.9
    ],
    [
     "C",
     "Clay",
     "0.14 to 0.16",
     "1.7 to 1.9",
     1.8
    ]
   ],
   "notes": "NEH 652 Chapter 2, Table 2-1, p. 2-6.",
   "calcs": [
    "tab-2.3",
    "eq-2.8",
    "eq-2.14"
   ]
  },
  {
   "id": "t2-2",
   "title": "AWC (in/in) corrected for rock fragment content (Table 2-2)",
   "cols": [
    "Soil",
    "0% coarse fragments (100% soil)",
    "10% (85)",
    "20% (70)",
    "30% (55)",
    "40% (45)",
    "50% (35)",
    "60% (25)",
    "65% (20)",
    "70% (20)"
   ],
   "rows": [
    [
     "Clay",
     "0.14 to 0.16",
     "0.12 to 0.14",
     "0.11 to 0.12",
     "0.09 to 0.10",
     "0.08 to 0.09",
     "0.06 to 0.07",
     "0.05 to 0.06",
     "0.04 to 0.05",
     "0.03 to 0.04"
    ],
    [
     "Silty clay",
     "0.15 to 0.17",
     "0.13 to 0.15",
     "0.11 to 0.13",
     "0.10 to 0.11",
     "0.08 to 0.10",
     "0.07 to 0.08",
     "0.06 to 0.07",
     "0.05 to 0.06",
     "0.04 to 0.05"
    ],
    [
     "Sandy clay",
     "0.15 to 0.17",
     "0.13 to 0.15",
     "0.12 to 0.14",
     "0.10 to 0.11",
     "0.08 to 0.09",
     "0.07 to 0.08",
     "0.06 to 0.07",
     "0.04 to 0.05",
     "0.04"
    ],
    [
     "Silty clay loam",
     "0.19 to 0.21",
     "0.17 to 0.19",
     "0.15 to 0.17",
     "0.13 to 0.15",
     "0.11 to 0.13",
     "0.09 to 0.11",
     "0.08 to 0.09",
     "0.06 to 0.07",
     "0.06"
    ],
    [
     "Clay loam",
     "0.19 to 0.21",
     "0.17 to 0.19",
     "0.15 to 0.17",
     "0.13 to 0.15",
     "0.11 to 0.13",
     "0.09 to 0.11",
     "0.08 to 0.09",
     "0.06 to 0.07",
     "0.06"
    ],
    [
     "Sandy clay loam",
     "0.14 to 0.16",
     "0.12 to 0.14",
     "0.11 to 0.13",
     "0.10 to 0.11",
     "0.08 to 0.10",
     "0.07 to 0.08",
     "0.06 to 0.07",
     "0.05 to 0.06",
     "0.04 to 0.05"
    ],
    [
     "Silt loam",
     "0.19 to 0.21",
     "0.17 to 0.19",
     "0.15 to 0.17",
     "0.13 to 0.15",
     "0.11 to 0.13",
     "0.09 to 0.11",
     "0.08 to 0.09",
     "0.06 to 0.07",
     "0.06"
    ],
    [
     "Loam",
     "0.16 to 0.18",
     "0.14 to 0.16",
     "0.13 to 0.14",
     "0.11 to 0.13",
     "0.10 to 0.11",
     "0.08 to 0.09",
     "0.07 to 0.08",
     "0.05 to 0.06",
     "0.05"
    ],
    [
     "Very fine sandy loam",
     "0.15 to 0.17",
     "0.13 to 0.15",
     "0.12 to 0.14",
     "0.10 to 0.12",
     "0.09 to 0.10",
     "0.07 to 0.09",
     "0.07 to 0.08",
     "0.05 to 0.06",
     "0.04 to 0.05"
    ],
    [
     "Fine sandy loam",
     "0.13 to 0.15",
     "0.12 to 0.14",
     "0.10 to 0.12",
     "0.09 to 0.11",
     "0.08 to 0.09",
     "0.06 to 0.08",
     "0.06 to 0.07",
     "0.04 to 0.05",
     "0.04 to 0.05"
    ],
    [
     "Sandy loam",
     "0.11 to 0.13",
     "0.10 to 0.12",
     "0.09 to 0.10",
     "0.07 to 0.09",
     "0.07 to 0.08",
     "0.05 to 0.07",
     "0.05 to 0.06",
     "0.04 to 0.05",
     "0.03 to 0.04"
    ],
    [
     "Loamy very fine sand",
     "0.10 to 0.12",
     "0.09 to 0.11",
     "0.08 to 0.10",
     "0.07 to 0.08",
     "0.06 to 0.07",
     "0.05 to 0.06",
     "0.04 to 0.05",
     "0.03 to 0.04",
     "0.03 to 0.04"
    ],
    [
     "Loamy fine sand",
     "0.09 to 0.11",
     "0.08 to 0.10",
     "0.07 to 0.09",
     "0.06 to 0.07",
     "0.05 to 0.07",
     "0.04 to 0.06",
     "0.04 to 0.05",
     "0.03 to 0.04",
     "0.03"
    ],
    [
     "Loamy sand",
     "0.06 to 0.08",
     "0.05 to 0.07",
     "0.05 to 0.06",
     "0.04 to 0.06",
     "0.04 to 0.05",
     "0.03 to 0.04",
     "0.03 to 0.04",
     "0.02 to 0.03",
     "0.02"
    ],
    [
     "Fine sand",
     "0.05 to 0.07",
     "0.04 to 0.06",
     "0.04 to 0.06",
     "0.03 to 0.05",
     "0.03 to 0.04",
     "0.03 to 0.04",
     "0.02 to 0.03",
     "0.02 to 0.03",
     "0.01 to 0.02"
    ]
   ],
   "notes": "NEH 652 Chapter 2, Table 2-2. Use only when NASIS or more site specific information is not available. Header numbers in parentheses are the second header row of the printed table.",
   "calcs": [
    "eq-2.8"
   ]
  },
  {
   "id": "t2-4",
   "title": "AWC (in/in) adjusted for salinity, ECe in mmhos/cm (Table 2-4)",
   "cols": [
    "Soil texture",
    "0",
    "2",
    "4",
    "6",
    "8",
    "10",
    "12",
    "14"
   ],
   "rows": [
    [
     "clay",
     "0.14 to 0.16",
     "0.13 to 0.15",
     "0.12 to 0.14",
     "0.11 to 0.13",
     "0.10 to 0.12",
     "0.09 to 0.11",
     "0.07 to 0.08",
     "0.04 to 0.05"
    ],
    [
     "silty clay",
     "0.15 to 0.17",
     "0.14 to 0.16",
     "0.13 to 0.15",
     "0.12 to 0.14",
     "0.11 to 0.12",
     "0.09 to 0.11",
     "0.07 to 0.08",
     "0.05 to 0.06"
    ],
    [
     "sandy clay",
     "0.15 to 0.17",
     "0.14 to 0.16",
     "0.13 to 0.15",
     "0.12 to 0.14",
     "0.11 to 0.12",
     "0.09 to 0.11",
     "0.07 to 0.08",
     "0.05 to 0.06"
    ],
    [
     "silty clay loam",
     "0.19 to 0.21",
     "0.18 to 0.20",
     "0.17 to 0.18",
     "0.15 to 0.17",
     "0.14 to 0.15",
     "0.12 to 0.13",
     "0.09 to 0.10",
     "0.06 to 0.07"
    ],
    [
     "clay loam",
     "0.19 to 0.21",
     "0.18 to 0.20",
     "0.17 to 0.18",
     "0.15 to 0.17",
     "0.14 to 0.15",
     "0.12 to 0.13",
     "0.09 to 0.10",
     "0.06 to 0.07"
    ],
    [
     "sandy clay loam",
     "0.14 to 0.16",
     "0.13 to 0.15",
     "0.12 to 0.14",
     "0.11 to 0.12",
     "0.09 to 0.11",
     "0.08 to 0.09",
     "0.06 to 0.07",
     "0.03 to 0.04"
    ],
    [
     "silt loam",
     "0.19 to 0.21",
     "0.18 to 0.20",
     "0.17 to 0.18",
     "0.15 to 0.17",
     "0.14 to 0.15",
     "0.12 to 0.13",
     "0.09 to 0.10",
     "0.06 to 0.07"
    ],
    [
     "loam",
     "0.16 to 0.18",
     "0.15 to 0.17",
     "0.14 to 0.16",
     "0.13 to 0.15",
     "0.12 to 0.13",
     "0.10 to 0.11",
     "0.08 to 0.09",
     "0.05 to 0.06"
    ],
    [
     "very fine sandy loam",
     "0.15 to 0.17",
     "0.14 to 0.16",
     "0.13 to 0.15",
     "0.12 to 0.14",
     "0.11 to 0.12",
     "0.09 to 0.11",
     "0.07 to 0.08",
     "0.05 to 0.06"
    ],
    [
     "fine sandy loam",
     "0.13 to 0.15",
     "0.12 to 0.14",
     "0.11 to 0.13",
     "0.11 to 0.12",
     "0.09 to 0.11",
     "0.08 to 0.09",
     "0.06 to 0.07",
     "0.04 to 0.05"
    ],
    [
     "sandy loam",
     "0.11 to 0.13",
     "0.10 to 0.12",
     "0.10 to 0.11",
     "0.09 to 0.11",
     "0.08 to 0.09",
     "0.07 to 0.08",
     "0.05 to 0.06",
     "0.03 to 0.04"
    ],
    [
     "loamy very fine sand",
     "0.10 to 0.12",
     "0.10 to 0.11",
     "0.09 to 0.11",
     "0.08 to 0.09",
     "0.07 to 0.08",
     "0.06 to 0.07",
     "0.04 to 0.05",
     "0.02 to 0.03"
    ],
    [
     "loamy fine sand",
     "0.09 to 0.11",
     "0.09 to 0.10",
     "0.08 to 0.10",
     "0.07 to 0.09",
     "0.06 to 0.08",
     "0.06 to 0.07",
     "0.04 to 0.05",
     "0.03 to 0.04"
    ],
    [
     "loamy sand",
     "0.06 to 0.08",
     "0.06 to 0.08",
     "0.05 to 0.07",
     "0.05 to 0.06",
     "0.04 to 0.06",
     "0.04 to 0.05",
     "0.03 to 0.04",
     "0.02 to 0.03"
    ],
    [
     "fine sand",
     "0.05 to 0.07",
     "0.05 to 0.07",
     "0.04 to 0.06",
     "0.04 to 0.06",
     "0.04 to 0.05",
     "0.03 to 0.04",
     "0.02 to 0.03",
     "0.02"
    ]
   ],
   "notes": "NEH 652 Chapter 2, Table 2-4. 15 mmhos conductivity results in 75 to 95 percent reduction in AWC. Field capacity and wilting point tensions assumed.",
   "calcs": [
    "eq-7.1"
   ]
  },
  {
   "id": "t2-6",
   "title": "Soil intake ranges by surface texture, in/hr (Table 2-6)",
   "cols": [
    "Soil texture",
    "Sprinkle",
    "Furrow",
    "Border and basin"
   ],
   "rows": [
    [
     "C, SIC",
     "0.1 to 0.2",
     "0.1 to 0.5",
     "0.1 to 0.3"
    ],
    [
     "SC, SICL",
     "0.1 to 0.4",
     "0.2 to 0.8",
     "0.25 to 0.75"
    ],
    [
     "CL, SCL",
     "0.1 to 0.5",
     "0.2 to 1.0",
     "0.3 to 1.0"
    ],
    [
     "SIL, L",
     "0.5 to 0.7",
     "0.3 to 1.2",
     "0.5 to 1.5"
    ],
    [
     "VFSL, FSL",
     "0.3 to 1.0",
     "0.4 to 1.9",
     "1.0 to 3.0"
    ],
    [
     "SL, LVFS",
     "0.3 to 1.25",
     "0.5 to 2.4",
     "1.5 to 4.0"
    ],
    [
     "LFS, LS",
     "0.4 to 1.5",
     "0.6 to 3.0",
     "2.0 to 4.0"
    ],
    [
     "FS, S",
     "0.5 or more",
     "1.0 or more",
     "3.0 or more"
    ],
    [
     "CS",
     "1.0 or more",
     "4.0 or more",
     "4.0 or more"
    ]
   ],
   "notes": "NEH 652 Chapter 2, Table 2-6. Estimates based on texture, use only where local data are not available.",
   "calcs": [
    "tab-11.4",
    "tab-13.5-13.6"
   ]
  },
  {
   "id": "t2-7",
   "title": "Maximum net application with zero potential runoff for 1,320-ft center pivots, inches, by soil surface storage (Table 2-7)",
   "cols": [
    "Border intake group",
    "Typical application rate (in/hr)",
    "Pressure and sprinkler type",
    "Storage 0.0 in",
    "Storage 0.1 in",
    "Storage 0.3 in",
    "Storage 0.5 in"
   ],
   "rows": [
    [
     "A(0.1)",
     1.0,
     "High-impact",
     0.2,
     0.4,
     0.8,
     1.1
    ],
    [
     "A(0.1)",
     1.5,
     "Medium-impact",
     0.2,
     0.3,
     0.7,
     0.9
    ],
    [
     "A(0.1)",
     2.5,
     "Low-impact",
     0.1,
     0.3,
     0.6,
     0.8
    ],
    [
     "A(0.1)",
     3.5,
     "Low-spray, 2 direction",
     0.1,
     0.3,
     0.5,
     0.7
    ],
    [
     "A(0.1)",
     6.0,
     "Low-spray, 1 direction",
     0.1,
     0.3,
     0.5,
     0.7
    ],
    [
     "B(0.3)",
     1.0,
     "High-impact",
     0.8,
     1.2,
     1.3,
     2.2
    ],
    [
     "B(0.3)",
     1.5,
     "Medium-impact",
     0.5,
     0.7,
     1.2,
     1.7
    ],
    [
     "B(0.3)",
     2.5,
     "Low-impact",
     0.2,
     0.5,
     0.8,
     1.2
    ],
    [
     "B(0.3)",
     3.5,
     "Low-spray, 2 direction",
     0.2,
     0.3,
     0.7,
     1.0
    ],
    [
     "B(0.3)",
     6.0,
     "Low-spray, 1 direction",
     0.1,
     0.3,
     0.5,
     0.8
    ],
    [
     "C(0.5)",
     1.0,
     "High-impact",
     2.0,
     2.5,
     3.3,
     4.0
    ],
    [
     "C(0.5)",
     1.5,
     "Medium-impact",
     1.0,
     1.4,
     1.9,
     2.5
    ],
    [
     "C(0.5)",
     2.5,
     "Low-impact",
     0.4,
     0.7,
     1.2,
     1.6
    ],
    [
     "C(0.5)",
     3.5,
     "Low-spray, 2 direction",
     0.3,
     0.5,
     0.9,
     1.3
    ],
    [
     "C(0.5)",
     6.0,
     "Low-spray, 1 direction",
     0.1,
     0.3,
     0.7,
     0.9
    ],
    [
     "D(1.0)",
     1.0,
     "High-impact",
     4.0,
     4.0,
     4.0,
     4.0
    ],
    [
     "D(1.0)",
     1.5,
     "Medium-impact",
     4.0,
     4.0,
     4.0,
     4.0
    ],
    [
     "D(1.0)",
     2.5,
     "Low-impact",
     1.4,
     1.9,
     2.6,
     3.2
    ],
    [
     "D(1.0)",
     3.5,
     "Low-spray, 2 direction",
     0.6,
     1.1,
     1.7,
     2.2
    ],
    [
     "D(1.0)",
     6.0,
     "Low-spray, 1 direction",
     0.3,
     0.6,
     0.9,
     1.3
    ]
   ],
   "notes": "NEH 652 Chapter 2, Table 2-7, p. 2-21. Group E (1.5+): no general restrictions within practical design criteria. If higher rates are used, reduce application amounts. Storage is without special practices such as pitting, damming, diking, contour furrows.",
   "calcs": [
    "runoff-13",
    "tab-13.5-13.6",
    "eq-13.7"
   ]
  },
  {
   "id": "t2-8",
   "title": "Maximum sprinkler application rate (in/hr), periodic move and fixed set, by net application (Table 2-8)",
   "cols": [
    "Sprinkler intake group",
    "Design slope (%)",
    "Net 1.0 in or less",
    "1.5",
    "2.0",
    "2.5",
    "3.0",
    "3.5",
    "4.0",
    "4.5",
    "5.0"
   ],
   "rows": [
    [
     "A",
     "0.4 or less",
     0.7,
     0.25,
     0.15,
     0.15,
     "",
     "",
     "",
     "",
     ""
    ],
    [
     "A",
     "0.75 to 1.25",
     0.45,
     0.2,
     0.15,
     0.1,
     "",
     "",
     "",
     "",
     ""
    ],
    [
     "A",
     "2.0",
     0.35,
     0.2,
     0.15,
     0.1,
     "",
     "",
     "",
     "",
     ""
    ],
    [
     "A",
     "3.0",
     0.3,
     0.2,
     0.15,
     0.1,
     "",
     "",
     "",
     "",
     ""
    ],
    [
     "A",
     "5.0 to 8.0",
     0.25,
     0.15,
     0.15,
     0.1,
     "",
     "",
     "",
     "",
     ""
    ],
    [
     "B",
     "0.4 or less",
     1.7,
     0.7,
     0.5,
     0.4,
     0.35,
     0.3,
     0.3,
     0.3,
     0.25
    ],
    [
     "B",
     "0.75 to 1.25",
     1.2,
     0.6,
     0.45,
     0.4,
     0.35,
     0.3,
     0.3,
     0.3,
     0.25
    ],
    [
     "B",
     "2.0",
     1.0,
     0.6,
     0.45,
     0.4,
     0.35,
     0.3,
     0.3,
     0.25,
     0.25
    ],
    [
     "B",
     "3.0",
     0.8,
     0.55,
     0.45,
     0.4,
     0.35,
     0.3,
     0.3,
     0.25,
     0.25
    ],
    [
     "B",
     "5.0 to 8.0",
     0.7,
     0.5,
     0.4,
     0.35,
     0.3,
     0.3,
     0.3,
     0.25,
     0.25
    ],
    [
     "C",
     "0.4 or less",
     2.75,
     1.15,
     0.85,
     0.75,
     0.65,
     0.6,
     0.55,
     0.5,
     0.5
    ],
    [
     "C",
     "0.75 to 1.25",
     2.05,
     1.05,
     0.85,
     0.7,
     0.65,
     0.6,
     0.55,
     0.5,
     0.5
    ],
    [
     "C",
     "2.0",
     1.65,
     1.0,
     0.8,
     0.7,
     0.6,
     0.55,
     0.55,
     0.5,
     0.5
    ],
    [
     "C",
     "3.0",
     1.4,
     0.95,
     0.75,
     0.65,
     0.6,
     0.55,
     0.55,
     0.5,
     0.5
    ],
    [
     "C",
     "5.0 to 8.0",
     1.15,
     0.85,
     0.75,
     0.65,
     0.6,
     0.55,
     0.5,
     0.5,
     0.45
    ],
    [
     "D",
     "0.4 or less",
     5.4,
     2.4,
     1.85,
     1.6,
     1.45,
     1.35,
     1.25,
     1.2,
     1.15
    ],
    [
     "D",
     "0.75 to 1.25",
     4.0,
     2.25,
     1.8,
     1.55,
     1.4,
     1.3,
     1.25,
     1.2,
     1.15
    ],
    [
     "D",
     "2.0",
     3.3,
     2.1,
     1.75,
     1.55,
     1.4,
     1.3,
     1.25,
     1.2,
     1.15
    ],
    [
     "D",
     "3.0",
     2.9,
     2.0,
     1.7,
     1.5,
     1.4,
     1.3,
     1.2,
     1.15,
     1.1
    ],
    [
     "D",
     "5.0 to 8.0",
     2.4,
     1.85,
     1.6,
     1.4,
     1.35,
     1.25,
     1.2,
     1.15,
     1.1
    ]
   ],
   "notes": "NEH 652 Chapter 2, Table 2-8, p. 2-22. For alfalfa-grass, grass, or clean tilled with residue more than 4,000 lb/ac. Blank cells are blank in the source.",
   "calcs": [
    "tab-11.4",
    "eq-11.2-11.3"
   ]
  },
  {
   "id": "t2-storage",
   "title": "Effective surface storage (Tables 2-11 and 2-13, slope storage list)",
   "cols": [
    "Condition",
    "Effective storage (in)"
   ],
   "rows": [
    [
     "Basin tillage",
     1.2
    ],
    [
     "Reservoir (dammer-diker)",
     0.75
    ],
    [
     "Subsoiler",
     0.16
    ],
    [
     "Field cultivator",
     0.12
    ],
    [
     "Residue 0%",
     0.0
    ],
    [
     "Residue 10%",
     0.01
    ],
    [
     "Residue 20%",
     0.03
    ],
    [
     "Residue 30%",
     0.07
    ],
    [
     "Residue 40%",
     0.12
    ],
    [
     "Residue 50%",
     0.18
    ],
    [
     "Residue 60%",
     0.24
    ],
    [
     "Residue 70%",
     0.35
    ],
    [
     "Field slope 0 to 1% (no special practices)",
     0.5
    ],
    [
     "Field slope 1 to 3%",
     0.3
    ],
    [
     "Field slope 3 to 5%",
     0.1
    ],
    [
     "Field slope more than 5%",
     0.0
    ]
   ],
   "notes": "NEH 652 Chapter 2, Table 2-11 (basin storage, level or nearly level), Table 2-13 (residue, level or nearly level) and the slope storage list on p. 2-20.",
   "calcs": [
    "tab-13.5-13.6",
    "runoff-13"
   ]
  },
  {
   "id": "t3-3",
   "title": "Recommended MAD (% of AWC) by growth stage, loamy soils (Table 3-3)",
   "cols": [
    "Crop",
    "Establishment",
    "Vegetative",
    "Flowering, yield formation",
    "Ripening, maturity"
   ],
   "rows": [
    [
     "Alfalfa hay",
     "50",
     "50",
     "50",
     "50"
    ],
    [
     "Alfalfa seed",
     "50",
     "60",
     "50",
     "80"
    ],
    [
     "Beans, green",
     "40",
     "40",
     "40",
     "40"
    ],
    [
     "Beans, dry",
     "40",
     "40",
     "40",
     "40"
    ],
    [
     "Citrus",
     "50",
     "50",
     "50",
     "50"
    ],
    [
     "Corn, grain",
     "50",
     "50",
     "50",
     "50"
    ],
    [
     "Corn, seed",
     "50",
     "50",
     "50",
     "50"
    ],
    [
     "Corn, sweet",
     "50",
     "40",
     "40",
     "40"
    ],
    [
     "Cotton",
     "50",
     "50",
     "50",
     "50"
    ],
    [
     "Cranberries",
     "40",
     "50",
     "40",
     "40"
    ],
    [
     "Garlic",
     "30",
     "30",
     "30",
     "30"
    ],
    [
     "Grains, small",
     "50",
     "50",
     "40 (boot through flowering)",
     "60"
    ],
    [
     "Grapes",
     "40",
     "40",
     "40",
     "50"
    ],
    [
     "Grass pasture/hay",
     "40",
     "50",
     "50",
     "50"
    ],
    [
     "Grass seed",
     "50",
     "50",
     "50",
     "50"
    ],
    [
     "Lettuce",
     "40",
     "50",
     "40",
     "20"
    ],
    [
     "Milo",
     "50",
     "50",
     "50",
     "50"
    ],
    [
     "Mint",
     "40",
     "40",
     "40",
     "50"
    ],
    [
     "Nursery stock",
     "50",
     "50",
     "50",
     "50"
    ],
    [
     "Onions",
     "40",
     "30",
     "30",
     "30"
    ],
    [
     "Orchard, fruit",
     "50",
     "50",
     "50",
     "50"
    ],
    [
     "Peas",
     "50",
     "50",
     "50",
     "50"
    ],
    [
     "Peanuts",
     "40",
     "50",
     "50",
     "50"
    ],
    [
     "Potatoes",
     "35",
     "35",
     "35",
     "50 (at vine kill)"
    ],
    [
     "Safflower",
     "50",
     "50",
     "50",
     "50"
    ],
    [
     "Sorghum, grain",
     "50",
     "50",
     "50",
     "50"
    ],
    [
     "Spinach",
     "25",
     "25",
     "25",
     "25"
    ],
    [
     "Sugar beets",
     "50",
     "50",
     "50",
     "50"
    ],
    [
     "Sunflower",
     "50",
     "50",
     "50",
     "50"
    ],
    [
     "Tobacco",
     "40",
     "40",
     "40",
     "50"
    ],
    [
     "Vegetables, 1 to 2 ft root depth",
     "35",
     "30",
     "30",
     "35"
    ],
    [
     "Vegetables, 3 to 4 ft root depth",
     "35",
     "40",
     "40",
     "40"
    ]
   ],
   "notes": "NEH 652 Chapter 3, Table 3-3, p. 3-7. Most restrictive MAD for medium to fine textured soils. Check soil moisture for the crop stress point at about one-third of the root zone depth.",
   "calcs": [
    "tab-6.1",
    "eq-6.2-6.5"
   ]
  },
  {
   "id": "t3-4",
   "title": "Depth (ft) from which mature crops extract water, deep well drained soil, 80% of roots (Table 3-4)",
   "cols": [
    "Crop",
    "Depth (ft)"
   ],
   "rows": [
    [
     "Alfalfa",
     "5"
    ],
    [
     "Peas",
     "2 to 3"
    ],
    [
     "Asparagus",
     "5"
    ],
    [
     "Peppers",
     "1 to 2"
    ],
    [
     "Bananas",
     "5"
    ],
    [
     "Potatoes, Irish",
     "2 to 3"
    ],
    [
     "Beans, dry",
     "2 to 3"
    ],
    [
     "Potatoes, sweet",
     "2 to 3"
    ],
    [
     "Beans, green",
     "2 to 3"
    ],
    [
     "Pumpkins",
     "3 to 4"
    ],
    [
     "Beets, table",
     "2 to 3"
    ],
    [
     "Radishes",
     "1"
    ],
    [
     "Broccoli",
     "2"
    ],
    [
     "Safflower",
     "4"
    ],
    [
     "Berries, blue",
     "4 to 5"
    ],
    [
     "Sorghum",
     "4"
    ],
    [
     "Berries, cane",
     "4 to 5"
    ],
    [
     "Spinach",
     "1 to 2"
    ],
    [
     "Brussel sprouts",
     "2"
    ],
    [
     "Squash",
     "3 to 4"
    ],
    [
     "Cabbage",
     "2"
    ],
    [
     "Strawberries",
     "1 to 2"
    ],
    [
     "Cantaloupes",
     "3"
    ],
    [
     "Sudan grass",
     "3 to 4"
    ],
    [
     "Carrots",
     "2"
    ],
    [
     "Sugar beets",
     "4 to 5"
    ],
    [
     "Cauliflower",
     "2"
    ],
    [
     "Sugarcane",
     "4 to 5"
    ],
    [
     "Celery",
     "1 to 2"
    ],
    [
     "Sunflower",
     "4 to 5"
    ],
    [
     "Chard",
     "1 to 2"
    ],
    [
     "Tobacco",
     "3 to 4"
    ],
    [
     "Clover, Ladino",
     "2 to 3"
    ],
    [
     "Tomato",
     "3"
    ],
    [
     "Cranberries",
     "1"
    ],
    [
     "Turnips",
     "2 to 3"
    ],
    [
     "Corn, sweet",
     "2 to 3"
    ],
    [
     "Watermelon",
     "3 to 4"
    ],
    [
     "Corn, grain",
     "3 to 4"
    ],
    [
     "Wheat",
     "4"
    ],
    [
     "Corn seed",
     "3 to 4"
    ],
    [
     "Corn, silage",
     "3 to 4"
    ],
    [
     "Cotton",
     "4 to 5"
    ],
    [
     "Cucumber",
     "1 to 2"
    ],
    [
     "Trees, fruit",
     "4 to 5"
    ],
    [
     "Eggplant",
     "2"
    ],
    [
     "Trees, citrus",
     "3 to 4"
    ],
    [
     "Garlic",
     "1 to 2"
    ],
    [
     "Trees, nut",
     "4 to 5"
    ],
    [
     "Grains and flax",
     "3 to 4"
    ],
    [
     "Grapes",
     "5"
    ],
    [
     "Grass pasture/hay",
     "2 to 4"
    ],
    [
     "Grass seed",
     "3 to 4"
    ],
    [
     "Lettuce",
     "1 to 2"
    ],
    [
     "Melons",
     "2 to 3"
    ],
    [
     "Milo",
     "2 to 4"
    ],
    [
     "Mustard",
     "2"
    ],
    [
     "Onions",
     "1 to 2"
    ],
    [
     "Turf (sod and lawn)",
     "1 to 2"
    ],
    [
     "Parsnips",
     "2 to 3"
    ],
    [
     "Nursery stock",
     "1 to 3"
    ],
    [
     "Peanuts",
     "2 to 3"
    ]
   ],
   "notes": "NEH 652 Chapter 3, Table 3-4, p. 3-8. Windbreak shrubs and trees: under 10 ft tall 2 to 3+ ft, 10 to 25 ft tall 3 to 4+ ft, over 25 ft tall 5+ ft.",
   "calcs": [
    "tab-6.2",
    "eq-2.14"
   ]
  },
  {
   "id": "t3-1",
   "title": "Critical periods for plant moisture stress (Table 3-1)",
   "cols": [
    "Crop",
    "Critical period",
    "Comments"
   ],
   "rows": [
    [
     "Alfalfa hay",
     "At seedling stage for new seedlings, just after cutting for hay, and at start of flowering stage for seed production.",
     "Any moisture stress during growth period reduces yield. Soil moisture is generally reduced immediately before and during cutting, drying, and hay collecting."
    ],
    [
     "Beans, dry",
     "Flowering through pod formation.",
     "Sensitive to over-irrigation."
    ],
    [
     "Beans, green",
     "Blossom through harvest.",
     ""
    ],
    [
     "Broccoli",
     "During head formation and enlargement.",
     ""
    ],
    [
     "Cabbage",
     "During head formation and enlargement.",
     ""
    ],
    [
     "Cauliflower",
     "During entire growing season.",
     ""
    ],
    [
     "Cane berries",
     "Blossom through harvest.",
     ""
    ],
    [
     "Citrus",
     "During entire growing season.",
     "Blossom and next season fruit set occurs during harvest of the previous crop."
    ],
    [
     "Corn, grain",
     "From tasseling through silk stage and until kernels become firm.",
     "Needs adequate moisture from germination to dent stage for maximum production. Depletion of 80% or more of AWC may be allowed during final ripening period."
    ],
    [
     "Corn, silage",
     "From tasseling through silk stage and until kernels become firm.",
     "Needs adequate moisture from germination to dent stage for maximum production."
    ],
    [
     "Corn, sweet",
     "From tasseling through silk stage until kernels become firm.",
     ""
    ],
    [
     "Cotton",
     "First blossom through boll maturing stage.",
     "Any moisture stress, even temporary, ceases blossom formation and boll set for at least 15 days after moisture again becomes available."
    ],
    [
     "Cranberries",
     "Blossom through fruit sizing.",
     ""
    ],
    [
     "Fruit trees",
     "During the initiation and early development period of flower buds, the flowering and fruit setting period (maybe the previous year), the fruit growing and enlarging period, and the pre-harvest period.",
     "Stone fruits are especially sensitive to moisture stress during last 2 weeks before harvest."
    ],
    [
     "Grain (small)",
     "During boot, bloom, milk stage, early head development and early ripening stages.",
     "Critical period for malting barley is at soft dough stage to maintain a quality kernel."
    ],
    [
     "Grapes",
     "All growth periods especially during fruit filling.",
     "See vine crops."
    ],
    [
     "Peanuts",
     "Full season.",
     ""
    ],
    [
     "Lettuce",
     "Head enlargement to harvest.",
     "Water shortage results in a sour and strong lettuce. Crop quality at harvest is controlled by water availability to the plant, MAD 15 to 20% is recommended."
    ],
    [
     "Melons",
     "Blossom through harvest.",
     ""
    ],
    [
     "Milo",
     "Secondary rooting and tillering to boot stage, heading, flowering, and grain formation through filling.",
     ""
    ],
    [
     "Onions, dry",
     "During bulb formation.",
     "Maintain MAD 30 to 35% of AWC. Let soil dry near harvest."
    ],
    [
     "Onions, green",
     "Blossom through harvest.",
     "Strong and hot onions can result from moisture stress."
    ],
    [
     "Nut trees",
     "During flower initiation period, fruit set, and midseason growth.",
     "Pre-harvest period is not key because nuts form during midseason period."
    ],
    [
     "Pasture",
     "During establishment and boot stage to head formation.",
     "Maintain MAD less than 50%. Moisture stress immediately after grazing encourages fast regrowth."
    ],
    [
     "Peas, dry",
     "At start of flowering and when pods are swelling.",
     ""
    ],
    [
     "Peas, green",
     "Blossom through harvest.",
     ""
    ],
    [
     "Peppers",
     "At flowering stage and when peppers are in fast enlarging stage.",
     ""
    ],
    [
     "Potato",
     "Flowering and tuber formation to harvest.",
     "Sensitive to irrigation scheduling. Restrict MAD to 30 to 35% of AWC. Low quality tubers result if allowed to go into moisture stress during tuber development and growth."
    ],
    [
     "Radish",
     "During period of root enlargement.",
     "Hot radishes can be the result of moisture stress."
    ],
    [
     "Sunflower",
     "Flowering to seed development.",
     ""
    ],
    [
     "Sorghum grain",
     "Secondary rooting and tilling to boot stage, heading, flowering, and grain formation through filling.",
     ""
    ],
    [
     "Soybeans",
     "Flowering and fruiting stage.",
     ""
    ],
    [
     "Strawberries",
     "Fruit development through harvest.",
     ""
    ],
    [
     "Sugar beets",
     "At time of plant emergence, following thinning, and about 1 month after emergence.",
     "Frequent light applications during early growth period. Temporary leaf wilt on hot days is common even with adequate soil water content. Excessive fall irrigation lowers sugar content, but soil moisture needs to be adequate for easy beet lifting."
    ],
    [
     "Sugarcane",
     "During period of maximum vegetative growth.",
     ""
    ],
    [
     "Tobacco",
     "Knee high to blossoming.",
     ""
    ],
    [
     "Tomatoes",
     "When flowers are forming, fruit is setting, and fruits are rapidly enlarging.",
     ""
    ],
    [
     "Turnips",
     "When size of edible root increases rapidly up to harvest.",
     "Strong tasting turnips can be the result of moisture stress."
    ],
    [
     "Vine crops",
     "Blossom through harvest.",
     ""
    ],
    [
     "Watermelon",
     "Blossom to harvest.",
     ""
    ]
   ],
   "notes": "NEH 652 Chapter 3, Table 3-1, pp. 3-3 to 3-5.",
   "calcs": []
  },
  {
   "id": "t9-1",
   "title": "Available water capacity for soil texture groups (Table 9-1)",
   "cols": [
    "Soil texture",
    "Estimated AW (in/in)",
    "AWC (in/ft)"
   ],
   "rows": [
    [
     "Sand to fine sand",
     0.04,
     0.5
    ],
    [
     "Loamy sand to loamy fine sand",
     0.08,
     1.0
    ],
    [
     "Loamy fine sands, loamy very fine sands, fine sands, very fine sands",
     0.1,
     1.2
    ],
    [
     "Sandy loam, fine sandy loam",
     0.13,
     1.6
    ],
    [
     "Very fine sandy loam, silt loam, silt",
     0.17,
     2.0
    ],
    [
     "Clay loam, sandy clay loam, silty clay loam",
     0.18,
     2.2
    ],
    [
     "Sandy clay, silty clay, clay",
     0.17,
     2.0
    ]
   ],
   "notes": "NEH 652 Chapter 9, Table 9-1, p. 9-6.",
   "calcs": [
    "tab-2.3",
    "eq-2.14"
   ]
  },
  {
   "id": "t9-fc",
   "title": "Field capacity and wilting coefficient, percent by dry weight (Figure 9-1)",
   "cols": [
    "Soil texture",
    "Field capacity (% dry weight)",
    "Wilting coefficient (% dry weight)"
   ],
   "rows": [
    [
     "Sand",
     7.3,
     3.3
    ],
    [
     "Loamy Sand",
     10.3,
     5.3
    ],
    [
     "Sandy Loam",
     13.3,
     7.3
    ],
    [
     "Fine Sandy Loam",
     16.3,
     9.3
    ],
    [
     "Loam",
     19.3,
     11.3
    ],
    [
     "Silt",
     24.3,
     14.3
    ],
    [
     "Silty Clay",
     26.3,
     15.3
    ],
    [
     "Clay",
     27.6,
     16.3
    ]
   ],
   "notes": "NEH 652 Chapter 9, Figure 9-1, p. 9-5. Convert to volume with bulk density (in/ft = % by weight x bulk density x 12 / 100).",
   "calcs": [
    "eq-2.5",
    "eq-2.6"
   ]
  },
  {
   "id": "t9-feel",
   "title": "Feel and appearance guide for available soil moisture (Exhibit 9-1)",
   "cols": [
    "Available soil moisture (%)",
    "Coarse: fine sand, loamy fine sand (AWC 0.6 to 1.2 in/ft)",
    "Moderately coarse: sandy loam, fine sandy loam (1.3 to 1.7 in/ft)",
    "Medium: sandy clay loam, loam, silt loam (1.5 to 2.1 in/ft)",
    "Fine: clay loam, silty clay loam (1.6 to 2.4 in/ft)"
   ],
   "rows": [
    [
     "0 to 25",
     "Dry, loose, will hold together if not disturbed, loose sand grains on fingers with applied pressure",
     "Dry, forms a very weak ball, aggregated soil grains break away easily from ball",
     "Dry, soil aggregations break away easily, no moisture staining on fingers, clods crumble",
     "Dry, soil aggregations easily separate, clods are hard to crumble with applied pressure"
    ],
    [
     "25 to 50",
     "Slightly moist, forms a very weak ball with well defined finger marks, light coating of loose and aggregated sand grains remain on fingers",
     "Slightly moist, forms a weak ball with defined finger marks, darkened color, no water staining on fingers, grains break away",
     "Slightly moist, forms a weak ball with rough surfaces, no water staining on fingers, few aggregated soil grains break away",
     "Slightly moist, forms a weak ball, very few soil aggregations break away, no water stains, clods flatten with applied pressure"
    ],
    [
     "50 to 75",
     "Moist, forms a weak ball with loose and aggregated sand grains remain on fingers, darkened color, heavy water staining on fingers, will not ribbon",
     "Moist, forms a ball with defined finger marks, very light soil water staining on fingers, darkened color, will not slick",
     "Moist, forms a ball, very light soil water staining on fingers, darkened color, pliable, forms a weak ribbon between thumb and forefinger",
     "Moist, forms a smooth ball with defined finger marks, light soil water staining on fingers, ribbons between thumb and forefinger"
    ],
    [
     "75 to 100",
     "Wet, forms a weak ball, loose and aggregated sand grains remain on fingers, darkened color, heavy water staining on fingers, will not ribbon",
     "Wet, forms a ball with wet outline left on hand, light to medium water staining on fingers, makes a weak ribbon between thumb and forefinger",
     "Wet, forms a ball with well defined finger marks, light to heavy soil water coating on fingers, ribbons between thumb and forefinger",
     "Wet, forms a ball, uneven medium to heavy soil water coating on fingers, ribbons easily between thumb and forefinger"
    ],
    [
     "Field capacity (100%)",
     "Wet, forms a weak ball, light to heavy soil water coating on fingers, wet outline of soft ball remains on hand",
     "Wet, forms a soft ball, free water appears briefly on soil surface after squeezing or shaking, medium to heavy soil water coating on fingers",
     "Wet, forms a soft ball, free water appears briefly on soil surface after squeezing or shaking, medium to heavy soil water coating on fingers",
     "Wet, forms a soft ball, free water appears on soil surface after squeezing or shaking, thick soil water coating on fingers, slick and sticky"
    ]
   ],
   "notes": "NEH 652 Chapter 9, Exhibit 9-1, p. 9-8. Ball: squeeze a handful of soil very firmly in one hand. Ribbon: squeeze soil out of the hand between thumb and forefinger. The in/ft values are the second header row of the exhibit.",
   "calcs": [
    "eq-6.14-6.15"
   ]
  },
  {
   "id": "t9-3",
   "title": "Recommended depths for setting tensiometers (Table 9-3)",
   "cols": [
    "Plant root zone depth (in)",
    "Shallow tensiometer (in)",
    "Deep tensiometer (in)"
   ],
   "rows": [
    [
     "18",
     8,
     12
    ],
    [
     "24",
     12,
     18
    ],
    [
     "36",
     12,
     24
    ],
    [
     "more than 48",
     18,
     36
    ]
   ],
   "notes": "NEH 652 Chapter 9, Table 9-3, p. 9-14.",
   "calcs": [
    "tab-6.6"
   ]
  },
  {
   "id": "t9-4",
   "title": "Interpreting a typical electrical resistance meter, 0 to 200 scale (Table 9-4)",
   "cols": [
    "Soil water condition",
    "Meter reading",
    "Interpretation"
   ],
   "rows": [
    [
     "Nearly saturated",
     "180 to 200",
     "Often occurs for a few hours after irrigation. Danger of waterlogging, high water table or poor aeration if readings persist for several days."
    ],
    [
     "Field capacity",
     "170 to 180",
     "Excess water has mostly drained. No need to irrigate. Any irrigation would move nutrients below the root zone."
    ],
    [
     "Irrigation range",
     "80 to 120",
     "Usual range for starting irrigations. Aeration assured. Starting here generally keeps readily available water at all times."
    ],
    [
     "Dry",
     "less than 80",
     "Stress range, though crop may not necessarily be damaged. Some water available but getting dangerously low."
    ]
   ],
   "notes": "NEH 652 Chapter 9, Table 9-4, p. 9-17. Readings show conditions where the block is located only.",
   "calcs": []
  },
  {
   "id": "t6-eff",
   "title": "Application efficiencies stated in Chapter 6 by system",
   "cols": [
    "System",
    "Application efficiency",
    "Condition"
   ],
   "rows": [
    [
     "Fixed (solid) set sprinkler",
     "60 to 85%",
     "depending on design and management"
    ],
    [
     "Center pivot",
     "75 to 90%",
     "with proper management, depends on wind, sprinkler type, pressure, tillage"
    ],
    [
     "LEPA",
     "95%",
     "objective for the decisionmaker"
    ],
    [
     "LPIC",
     "at least 85%",
     "with proper water and soil management"
    ],
    [
     "Micro (drip and spray)",
     "80 to 90%",
     "for the area irrigated, with proper management"
    ],
    [
     "Micro (drip and spray)",
     "55 to 65%",
     "typical without proper management"
    ]
   ],
   "notes": "NEH 652 Chapter 6, pp. 6-42, 6-44, 6-45, 6-50, 6-51, 6-59.",
   "calcs": [
    "eq-5.20",
    "tab-5.4"
   ]
  }
 ],
 "facts": [
  {
   "q": "What tension defines field capacity for sandy soils in NRCS practice?",
   "a": "One-tenth atmosphere (bar) for sandy soils and one-third atmosphere for finer textured soils. Wilting point is 15 atmospheres (NEH 652 Ch. 2 and 9).",
   "tags": [
    "field capacity",
    "sandy soil"
   ],
   "calcs": [
    "eq-2.8"
   ],
   "book": [
    "2.5"
   ]
  },
  {
   "q": "How long does a sandy soil take to drain to field capacity?",
   "a": "Free water in coarse textured (sandy) soils can drain in a few hours, medium textured soils take about 24 hours and clayey soils may take several days (NEH 652 Ch. 2).",
   "tags": [
    "field capacity",
    "drainage"
   ],
   "calcs": [],
   "book": [
    "2.5"
   ]
  },
  {
   "q": "What is the typical AWC of a loamy sand and a sandy loam per NEH 652?",
   "a": "Table 2-1 gives loamy sand 0.06 to 0.08 in/in (typical 0.85 in/ft), loamy fine sand 0.09 to 0.11 in/in (1.25 in/ft), sandy loam 0.11 to 0.13 in/in (1.45 in/ft) and fine sandy loam 0.13 to 0.15 in/in (1.7 in/ft).",
   "tags": [
    "AWC",
    "loamy sand",
    "sandy loam"
   ],
   "calcs": [
    "tab-2.3",
    "eq-2.14"
   ],
   "book": [
    "2.7"
   ]
  },
  {
   "q": "What MAD does NRCS recommend for deep rooted crops on sandy soils?",
   "a": "60% on coarse (sandy) soils, 50% on medium (loamy) soils and 40% on fine (clayey) soils. High value shallow rooted crops use 25 to 40% (NEH 652 Ch. 3).",
   "tags": [
    "MAD",
    "sandy soil"
   ],
   "calcs": [
    "tab-6.1",
    "eq-6.2-6.5"
   ],
   "book": [
    "6.3"
   ]
  },
  {
   "q": "What MAD does NEH 652 give for potatoes?",
   "a": "35% through establishment, vegetative and flowering stages and 50% at vine kill (Table 3-3). Table 3-1 says restrict MAD to 30 to 35% of AWC during tuber development.",
   "tags": [
    "MAD",
    "potato"
   ],
   "calcs": [
    "tab-6.1"
   ],
   "book": [
    "6.3"
   ]
  },
  {
   "q": "How much water does a crop pull from each quarter of the root zone?",
   "a": "About 40% from the top quarter, 30% from the second, 20% from the third and 10% from the bottom, so about 70% comes from the upper half (NEH 652 Figure 3-2).",
   "tags": [
    "root zone",
    "extraction"
   ],
   "calcs": [
    "extraction-4321"
   ],
   "book": [
    "6.3"
   ]
  },
  {
   "q": "At what depths should tensiometers be set?",
   "a": "In pairs at one-third and two-thirds of the rooting depth. Table 9-3: 18 in root zone 8 and 12 in, 24 in root zone 12 and 18 in, 36 in root zone 12 and 24 in, over 48 in root zone 18 and 36 in.",
   "tags": [
    "tensiometer",
    "sensor placement"
   ],
   "calcs": [
    "tab-6.6"
   ],
   "book": [
    "2.10"
   ]
  },
  {
   "q": "Why are tensiometers less useful on sandy soils?",
   "a": "Their practical limit of 80 centibars is about 90% AWC depletion in a sandy soil but only about 30% in medium to fine soils (NEH 652 Ch. 9). Their practical use is medium to fine textured soils with high frequency irrigation or soils kept at high water content.",
   "tags": [
    "tensiometer",
    "sandy soil"
   ],
   "calcs": [
    "tab-6.5"
   ],
   "book": [
    "2.10"
   ]
  },
  {
   "q": "How much rainfall storage should be left when irrigating in a humid area?",
   "a": "Leave between 0.5 and 1.0 inch of AWC unfilled for storage of potential rainfall (NEH 652 Ch. 9).",
   "tags": [
    "rainfall management",
    "humid"
   ],
   "calcs": [
    "checkbook"
   ],
   "book": [
    "6.4"
   ]
  },
  {
   "q": "How many hours per day should be used when sizing sprinkler system capacity?",
   "a": "It is common to use 22 hours per day or 6 days per week of actual water application time (NEH 652 Ch. 4).",
   "tags": [
    "system capacity"
   ],
   "calcs": [
    "eq-5.20",
    "cn-from-flow"
   ],
   "book": [
    "5.6"
   ]
  },
  {
   "q": "How do you convert between DU and CU?",
   "a": "CU = 100 - 0.63 (100 - DU) and DU = 100 - 1.59 (100 - CU) (NEH 652 Ch. 9).",
   "tags": [
    "DU",
    "CU"
   ],
   "calcs": [
    "eq-5.2",
    "eq-5.3"
   ],
   "book": [
    "5.3"
   ]
  },
  {
   "q": "How much can sprinkler pressure vary along a lateral?",
   "a": "Pressure differences should not exceed 20 percent between any two heads on the same lateral, which keeps discharge differences under 10 percent (NEH 652 Ch. 9).",
   "tags": [
    "pressure",
    "lateral"
   ],
   "calcs": [
    "eq-11.5-11.9",
    "eq-11.1-ratio"
   ],
   "book": [
    "11.4"
   ]
  },
  {
   "q": "How do you tell if a sprinkler nozzle is worn?",
   "a": "It is worn if the shank of the next larger drill bit fits the orifice or the correct bit can be moved sideways more than 5 degrees (NEH 652 Ch. 9).",
   "tags": [
    "nozzle wear",
    "evaluation"
   ],
   "calcs": [
    "eq-11.1"
   ],
   "book": [
    "11.3"
   ]
  },
  {
   "q": "How far apart should catch cans be in a center pivot test?",
   "a": "No more than 30 feet apart, number = (lateral length + 10)/30. They are often left out within 400 feet of the pivot point (less than 3 acres) (NEH 652 Ch. 9).",
   "tags": [
    "center pivot",
    "catch can"
   ],
   "calcs": [
    "pivot-eval-13",
    "eq-5.4-5.5"
   ],
   "book": [
    "13.5",
    "5.4"
   ]
  },
  {
   "q": "How do you get gross application per revolution of a center pivot?",
   "a": "Gross application (in) = hours per revolution x system gpm / (453 x irrigated acres) (NEH 652 Example 9-7).",
   "tags": [
    "center pivot",
    "depth"
   ],
   "calcs": [
    "eq-13.7",
    "eq-3.3"
   ],
   "book": [
    "13.5"
   ]
  },
  {
   "q": "How fast can a low pressure center pivot apply water at its outer end?",
   "a": "A 1-inch application at the outer end of a quarter mile LPIC pivot can exceed 50 inches per hour instantaneously for 2 to 10 minutes (NEH 652 Ch. 2).",
   "tags": [
    "application rate",
    "runoff",
    "center pivot"
   ],
   "calcs": [
    "eq-13.4-13.5",
    "runoff-13"
   ],
   "book": [
    "13.3"
   ]
  },
  {
   "q": "How much water leaks from a 1 gpm leak?",
   "a": "1 gpm equals 1 acre inch every 20 days (NEH 652 Ch. 9).",
   "tags": [
    "leaks",
    "conversion"
   ],
   "calcs": [
    "eq-3.3"
   ],
   "book": [
    "3.1"
   ]
  },
  {
   "q": "What efficiency can a center pivot reach?",
   "a": "75 to 90 percent with proper management. LEPA targets 95 percent and LPIC at least 85 percent (NEH 652 Ch. 6).",
   "tags": [
    "center pivot",
    "efficiency"
   ],
   "calcs": [
    "eq-5.20"
   ],
   "book": [
    "13.1"
   ]
  },
  {
   "q": "How much of the surface should drip wet for row crops?",
   "a": "Wetted width should generally be not less than 50 to 65 percent of the total surface area for annual row crops (NEH 652 Ch. 9).",
   "tags": [
    "drip",
    "wetted area"
   ],
   "calcs": [
    "eq-14.8"
   ],
   "book": [
    "14.7"
   ]
  },
  {
   "q": "How is emission uniformity turned into a drip application efficiency?",
   "a": "PELQ = 0.9 x EU. System PELQ = ERF x PELQ, where ERF = (average MLIP + 1.5 x minimum MLIP)/(2.5 x average MLIP) (NEH 652 Example 9-9).",
   "tags": [
    "drip",
    "EU",
    "efficiency"
   ],
   "calcs": [
    "eq-14.6",
    "eq-14.7"
   ],
   "book": [
    "14.6"
   ]
  },
  {
   "q": "How shallow can compaction confine roots?",
   "a": "In many medium to fine textured soils a compacted layer at tillage depth confines roots to the upper 6 to 10 inches. Never assume a root zone: dig and look (NEH 652 Ch. 3).",
   "tags": [
    "compaction",
    "root zone"
   ],
   "calcs": [
    "tab-6.2"
   ],
   "book": [
    "6.3"
   ]
  },
  {
   "q": "What is the root depth NRCS uses for grain corn?",
   "a": "Table 3-4 gives 3 to 4 ft for corn grain, silage and seed, 2 to 3 ft for sweet corn (soybeans are not in the table). Table 3-2 uses a 4 ft management depth for grain corn (NEH 652 Ch. 3).",
   "tags": [
    "root depth",
    "corn"
   ],
   "calcs": [
    "tab-6.2"
   ],
   "book": [
    "6.3"
   ]
  }
 ]
}]);
