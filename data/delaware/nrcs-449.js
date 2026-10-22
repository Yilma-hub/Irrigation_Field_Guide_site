window.DE_DOCS = (window.DE_DOCS || []).concat([{
 "id": "nrcs-449",
 "title": "Irrigation Water Management, Conservation Practice Standard 449 (with CSP enhancements E449G and E449H)",
 "short": "NRCS Standard 449",
 "org": "USDA Natural Resources Conservation Service",
 "year": 2024,
 "url": "https://www.nrcs.usda.gov/sites/default/files/2024-10/449_NHCP_CPS_Irrigation_Water_Management_2024_0.pdf",
 "license": "public domain",
 "summary": "The national NRCS conservation practice standard (Code 449, 2024 edition) that defines what an irrigation water management (IWM) plan must contain: how irrigation timing and depth are decided, flow meter accuracy and installation, chemigation limits, records, and operation and maintenance. Two Conservation Stewardship Program enhancement sheets (E449G, August 2019, and E449H, May 2020) add the sensor, weather station and record requirements for intermediate IWM. The Delaware eFOTG (Section IV) lists an Irrigation Water Management (449) folder, but the Delaware file could not be opened (the eFOTG is a script-only site), so this entry uses the national 2024 standard. Check the Delaware eFOTG copy before using these criteria on a Delaware contract.",
 "sections": [
  {
   "id": "definition",
   "h": "Definition, purposes and where it applies",
   "html": "<p><b>Definition:</b> The process of determining, measuring, and controlling the volume, timing, and application rate of irrigation water.</p><p>Purposes (one or more):</p><ul><li>Improve irrigation water use efficiency.</li><li>Minimize irrigation-induced soil erosion.</li><li>Protect surface or groundwater quality.</li><li>Manage salts in the crop root zone.</li><li>Manage air, soil, or plant microclimate.</li><li>Improve poor plant productivity and health.</li><li>Provide data needed to manage efficient use of irrigation water to promote desired resource response and optimize use of available irrigation water supplies.</li><li>Reduce energy use.</li></ul><p>Conditions where practice applies: This practice is applicable to all irrigated lands.</p>",
   "calcs": [],
   "book": [
    "1.5",
    "6.1"
   ],
   "tags": [
    "IWM",
    "definition",
    "449"
   ]
  },
  {
   "id": "timing",
   "h": "General criteria: deciding when to irrigate",
   "html": "<p>Develop an irrigation water management (IWM) plan that defines when irrigation is needed (timing) and the amount and rate of water to apply for each irrigation event.</p><p>Base the timing of irrigation on one or more of the following methods:</p><ul><li>Evapotranspiration of the crop, using an atmometer, pan evaporation, agricultural weather station's reference evapotranspiration (ET) data multiplied by a crop coefficient, weighing lysimeter, or energy balance equation methods.</li><li>Soil moisture or soil water tension monitoring.</li><li>Computerized irrigation scheduling, utilizing local real-time climate data, soil, and crop growth characteristics (e.g., remote telemetry data systems coupled with cloud-based irrigation scheduling using the soil-water balance method).</li><li>Plant monitoring (e.g., leaf water potential or leaf/canopy temperature measurements).</li></ul><p>In locations where rain is expected during the growing season and where a soil-water balance is calculated, include measurements from an onsite rain gauge, interpolated predictions based on local weather stations, or another accurate method for determining local rainfall for the area under irrigation.</p>",
   "calcs": [
    "eq-4.2-4.7",
    "checkbook",
    "eq-6.18-6.25",
    "tab-6.6"
   ],
   "book": [
    "4.5",
    "4.6",
    "6.4",
    "6.5"
   ],
   "tags": [
    "scheduling",
    "ET",
    "soil moisture",
    "rain gauge",
    "timing"
   ]
  },
  {
   "id": "depth",
   "h": "General criteria: deciding how much to apply",
   "html": "<p>Base the volume (depth) of water needed for each irrigation event on the following that are relevant to a crop or field:</p><ul><li>Available water-holding capacity of the soil for the crop rooting depth.</li><li>Management allowed soil water depletion.</li><li>Current soil moisture status.</li><li>Current crop/forage growth stage.</li><li>Distribution uniformity of the irrigation event.</li><li>Water table contribution.</li><li>Computerized irrigation scheduling recommendation.</li></ul><p>For variable rate irrigation systems, such as center pivot systems integrated with precision zone placement technology, base the amount and application rate of irrigation water on spatially identified field parameters such as variations in past yield data, soils, salt concentration, crop growth, topography, or computerized irrigation scheduling recommendations.</p><p>When irrigation water is not available on demand, use the planned availability as a factor to determine the timing of the irrigation event. Adjust irrigation amounts appropriately to account for the periodic availability of water. In all situations where water is limited, ensure that the IWM plan will meet critical crop growth stages.</p><p>For all methods of irrigation, apply irrigation water at a rate that achieves an acceptable distribution uniformity (DU) and minimizes irrigation-induced erosion.</p>",
   "calcs": [
    "eq-2.14",
    "eq-6.2-6.5",
    "eq-5.8",
    "eq-5.13",
    "run-time"
   ],
   "book": [
    "2.5",
    "6.3",
    "5.3",
    "6.6",
    "13.7"
   ],
   "tags": [
    "MAD",
    "AWC",
    "root zone",
    "DU",
    "VRI",
    "depth"
   ]
  },
  {
   "id": "water-quality",
   "h": "Criteria for protecting surface and groundwater quality (chemigation)",
   "html": "<p>Plan the rate and volume of irrigation water to minimize the transport of sediment, nutrients, and chemicals to surface waters and groundwater by:</p><ul><li>Controlling the rate of water application to limit the transport of nutrients and chemicals through the soil profile to ground water.</li><li>Ensuring that the volume and rate of application does not result in damaging irrigation-induced erosion and/or contaminated runoff and offsite transport.</li><li>Scheduling the application of nutrients and chemicals to avoid excess leaching below the root zone to the groundwater and excess runoff to surface waters.</li></ul><p>Do not conduct chemigation operations if rainfall that may produce runoff or deep percolation is expected. Limit the application rate and volume of water to the amount necessary to apply the chemicals or nutrients to the soil depth recommended by the manufacturer. Limit chemigation to the minimum length of time required to deliver and flush the pipelines. Ensure that the irrigation and water delivery systems are equipped with properly designed and functioning valves and other components necessary to prevent backflows of chemicals and nutrients into the water sources. Base the timing and application of nutrients and/or pesticides on the criteria in NRCS CPS Nutrient Management (Code 590) and Pest Management Conservation System (Code 595), respectively.</p>",
   "calcs": [
    "eq-15.1",
    "eq-15.2",
    "flush-total",
    "leaching-procedure"
   ],
   "book": [
    "15.3",
    "15.4",
    "5.3"
   ],
   "tags": [
    "chemigation",
    "fertigation",
    "backflow",
    "nitrate leaching",
    "590"
   ]
  },
  {
   "id": "salts-climate-energy",
   "h": "Criteria for salts, microclimate (frost and heat) and energy",
   "html": "<p><b>Salts:</b> Ensure the irrigation application volume is sufficient to provide an appropriate salt balance in the soil profile. Base the determination of the required water volume on the leaching procedure in NEH Part 623, Chapter 2, Irrigation Water Requirements, and NEH Part 652, Irrigation Guide, Chapters 3 and 13.</p><p><b>Microclimate:</b> To provide protection from heat or cold, ensure that the irrigation system can apply the required rate of water as determined by the methodology in NEH Part 623, Chapter 2. Ensure the irrigation system is capable of uniformly applying the required rate of water application based on the anticipated temperature, maximum wind speed, and relative humidity.</p><p><b>Reduced energy use:</b> Provide analysis to demonstrate reduction of energy use from practice implementation. Calculate the reduction of energy use as the average annual or seasonal energy reduction compared to previous operating conditions.</p>",
   "calcs": [
    "eq-7.8",
    "tab-11.5",
    "tab-11.6",
    "eq-8.22",
    "pump-eval"
   ],
   "book": [
    "7.7",
    "11.7",
    "8.7"
   ],
   "tags": [
    "salinity",
    "leaching",
    "frost protection",
    "energy"
   ]
  },
  {
   "id": "flow-closed",
   "h": "Criteria for closed conduit (pipeline) flow measurement",
   "html": "<p>The flow rate measured with a meter, or based on measurement of head or head differential, will provide an in-field accuracy of plus or minus 5% within expected range of flow.</p><ul><li>Follow manufacturer recommendations regarding orientation and placement, including straight pipe distance both upstream and downstream. Provide detail distances for appurtenances such as elbows, valves, sudden enlargements and contractions.</li><li>In the absence of manufacturer recommendations a straight pipe section must extend at least 10 pipe diameters upstream and 5 pipe diameters downstream of the flow measurement device.</li><li>Size and install each flow meter to ensure full pipe flow will be maintained through the meter and water velocity in the measuring chamber will be within the normal operating range during system operation.</li><li>Locate flow measurement devices as needed to report critical flow zone data. Make connections compatible with CPS Irrigation Pipeline (Code 430).</li><li>Typical devices: turbine, propeller, acoustic, and magnetic flow meters.</li><li>Use similar materials for joints between meter and pipeline. If dissimilar metals are used, protect against galvanic corrosion. If thermal expansion coefficients differ, protect connections from leaks and cracks.</li><li>Above ground: use galvanized steel pipe or a suitable protective paint coating. Plastic pipe must be UV resistant for its intended life or protected from UV.</li><li>Provide secure physical support for measurement devices against external and internal forces.</li></ul>",
   "calcs": [
    "meter-depth",
    "meter-timing",
    "eq-3.3",
    "pipe-flow"
   ],
   "book": [
    "3.1",
    "3.3"
   ],
   "tags": [
    "flow meter",
    "straight pipe",
    "accuracy",
    "water measurement"
   ]
  },
  {
   "id": "flow-open",
   "h": "Criteria for open channel flow measurement",
   "html": "<ul><li>Equip water measurement structures with a staff gauge, or other suitable head measuring device installed at the specified location required for the measurement structure type.</li><li>The flow rate measured based on the staff or head gauge will provide an in-field accuracy of plus or minus 15% within the expected range of flows.</li><li>Design structures using appropriate hydraulic tools or software (e.g., WINFLUME). Select and design permanent structures based on site surveys, required hydraulic function, and soil and foundation investigations.</li><li>Provide sufficient freeboard to prevent overtopping during the maximum anticipated design flow rate, and a safe outlet or bypass where overtopping could cause damaging erosion or sedimentation.</li><li>Typical structures: flumes, weirs, and calibrated water control structures.</li><li>Ensure sufficient footing, cutoff, weight, and strength for all structures to be stable against overturning, sliding, displacement, and foundation failure.</li></ul>",
   "calcs": [
    "tab-3.2",
    "tab-3.3",
    "tab-3.4",
    "eq-3.8"
   ],
   "book": [
    "3.4"
   ],
   "tags": [
    "weir",
    "flume",
    "staff gauge",
    "open channel"
   ]
  },
  {
   "id": "erosion",
   "h": "Criteria for minimizing irrigation-induced erosion",
   "html": "<p>Where topography is steep enough to cause erosive flow velocities, provide permanent soil cover, increased crop residue, and/or use polyacrylamide according to CPS Anionic Polyacrylamide (PAM) Application (Code 450) in lieu of or in combination with structural measures to control erosion.</p>",
   "calcs": [
    "runoff-13",
    "tab-13.5-13.6",
    "tab-11.4"
   ],
   "book": [
    "13.3",
    "11.3"
   ],
   "tags": [
    "erosion",
    "runoff",
    "residue",
    "PAM"
   ]
  },
  {
   "id": "considerations",
   "h": "Technical considerations",
   "html": "<ul><li>Increased crop residue reduces irrigation-induced erosion, increases infiltration and reduces evaporation from the soil surface.</li><li>When applying agricultural and municipal waste waters, time irrigation based on prevailing winds to reduce spray drift and odor. Consider irrigation at night to reduce evaporation and human exposure.</li><li>Plan the location of sprinklers and end guns so that overspray will not reach public roads or other unintended locations.</li><li>Inspect irrigated areas for pesticides, animal wastes, or other contaminants before irrigation.</li><li>Test irrigation water: its quality can affect crop quality, plant development, and soil crusting, pH, permeability, salinity, and structure.</li><li>Avoid operating heavy equipment on wet soils to minimize compaction.</li><li>Schedule salt leaching events to coincide with low levels of residual soil nutrients and pesticides.</li><li>Keep water from drifting onto or contacting electrical lines and controls.</li><li>Plan for power interruptions from load control, interruptible power schedules, repair and harvest downtime.</li><li>Drones, imaging, remote sensing, yield monitoring and data logging can lead to more efficient application.</li><li>Low energy precision application and alternative energy sources can give significant energy savings.</li><li>Select crop species for recurrent drought or water deficit.</li><li>Consider fluid velocity, sediment load, debris and site characteristics when selecting a flow measurement device.</li></ul>",
   "calcs": [],
   "book": [
    "5.7",
    "5.9",
    "13.4"
   ],
   "tags": [
    "end gun",
    "overspray",
    "drift",
    "compaction",
    "power interruption",
    "LEPA"
   ]
  },
  {
   "id": "plans",
   "h": "Required contents of plans and specifications",
   "html": "<p>As a minimum, include:</p><ul><li>A plan view showing the layout of the irrigation system including irrigated areas, planned crops, soils, pipelines, and location and installation information for any moisture sensors, flow measurement devices or structures, rainfall gauges, or other sensing equipment.</li><li>Site specific construction drawings and specifications for installing the flow measurement device or structure, and a profile view of each open channel structure.</li><li>Flow measurement device sizes, materials, expected measurement accuracy, joint requirements, calibration procedure, and any requirements for pressure testing.</li><li>Methods to be used to measure or determine the flow rate and volume of the irrigation applications.</li><li>Documentation of the scientific method used for scheduling the timing and amount of irrigation applications.</li><li>The seasonal or annual planned water application volumes for each irrigation zone.</li><li>The management allowable depletion (MAD) and depth of the managed crop root zone for each managed irrigation zone.</li><li>An estimate of the irrigation system distribution uniformity, based on testing, evaluation, or observation.</li><li>The specific soil moisture monitoring objectives if soil moisture sensors are used, and how data from sensor locations and depths will be considered to make irrigation decisions.</li><li>Information on how to recognize irrigation-induced erosion and safeguards to protect surface and groundwater quality, as needed.</li></ul>",
   "calcs": [
    "eq-6.2-6.5",
    "catch-can",
    "eq-5.2"
   ],
   "book": [
    "6.3",
    "5.4",
    "2.10"
   ],
   "tags": [
    "IWM plan",
    "MAD",
    "DU",
    "sensor placement",
    "plan contents"
   ]
  },
  {
   "id": "om",
   "h": "Operation, maintenance and record keeping",
   "html": "<p>Prepare an operation and maintenance plan for the operator. As a minimum include:</p><ul><li>Record keeping documents to be used by the operator to record irrigation water management activities.</li><li>Requirements for recording each irrigation event, including the amount or depth of water applied, duration of the event, and the date of application.</li><li>Requirements for recording the methods used for determining the timing and amount of irrigation events.</li><li>Requirements for recording other pertinent data used to implement the IWM plan.</li><li>Requirements for flow measurement frequency and recording.</li><li>Schedule for inspection, maintenance, and accuracy testing of installed flow measurement devices or structures.</li><li>Reference to other operation and maintenance plans for the irrigation equipment and water delivery systems used.</li></ul>",
   "calcs": [
    "meter-depth",
    "checkbook"
   ],
   "book": [
    "6.4",
    "3.1"
   ],
   "tags": [
    "records",
    "O&M",
    "flow meter testing"
   ]
  },
  {
   "id": "e449g",
   "h": "Enhancement E449G: Intermediate IWM, years 2 to 5, soil or water level monitoring (August 2019)",
   "html": "<p>Land use: Crop (annual and mixed). Resource concern: water. Enhancement life span: 1 year. As written, the enhancement description covers converting a field flooded through a cascade levee system to furrow irrigation (levee on the lower end and approximately 25% up the sides, beds and furrows reshaped after harvest, layflat tubing with holes or gates sized by an NRCS PHAUCET design, Delta Plastic Pipe Planner or similar). This is a rice-field practice and has little direct use in Delaware, but the IWM criteria below apply generally.</p><ul><li>Equipment may include soil moisture sensors with data collection systems, weather stations that collect solar radiation, wind speed and direction, rainfall and temperature, and water level sensors with data collection.</li><li>Data monitored: irrigation water applied, crop water use, and status of heat and/or frost conditions.</li><li>The year one IWM plan is followed: layout map with main pipelines, irrigated area, sensor locations and soils, flow or volume measurement method, measurement records of water coming onto the farm and into each field, documented scheduling method, seasonal planned volumes by crop, MAD and managed root zone depth or water level for each crop and stage of growth, DU evaluation and changes to ensure uniform irrigation, recognizing and mitigating irrigation-induced erosion, how sensor data will be used for field-wide decisions, and scheduling based on soil moisture or water level monitoring and/or ET from the weather station.</li><li>Soil moisture devices: each year re-install the soil moisture set to collect data at a minimum of 2 approved depths based on crop and soil characteristics of the region. Number of sets is based on field topography, crop rotation and the soils throughout the field.</li><li>Water level devices: re-install each year in a basin field with a data logger that captures an image of gauge movement a minimum of twice a day.</li><li>Participant records location, date, duration, and flow rate of all irrigation operations, rainfall, ET, and soil moisture or water level data, and keeps documentation of DU corrections and sensor use and installation.</li></ul>",
   "calcs": [],
   "book": [
    "2.10",
    "6.4"
   ],
   "tags": [
    "E449G",
    "CSP",
    "soil moisture sensors",
    "two depths"
   ]
  },
  {
   "id": "e449h",
   "h": "Enhancement E449H: Intermediate IWM, years 2 to 5, using soil moisture or water level monitoring (May 2020)",
   "html": "<p>Land use: Crop (annual and mixed), Crop (perennial), Pasture. Resource concern: water. Enhancement life span: 1 year. Description: monitoring soil moisture or water levels within an irrigated field for implementing an intermediate IWM plan using soil moisture data to facilitate management decisions.</p><ul><li>Equipment previously installed must include soil moisture sensors with data collection systems, weather stations (solar radiation, wind speed and direction, rainfall, temperature), water level sensor with data collection system, and a permanent flowmeter.</li><li>Monitoring required: irrigation water applied, crop water use, status of heat and/or frost conditions.</li><li>Perform regular maintenance and monitoring of equipment with data collection systems that continuously record data throughout the irrigation season.</li><li>Soil moisture sensors collect data at a minimum of 2 approved depths based on crop and soil characteristics of the region. Number of data sets follows the IWM plan per water source using field topography, crop rotation and soils.</li><li>Flow measurement: permanent flow meter data collected at all wells/relifts included in the approved IWM plan.</li><li>Water level devices: images of gauge movement captured at a minimum of twice a day.</li><li>Weather stations: data from a central location defined by the IWM plan, recording each of the following at a minimum of four times per hour: high and low temperature, precipitation, humidity, wind speed, duration and direction, and solar radiation.</li><li>Participant records location, date, duration, and flow rate of all irrigation operations, rainfall, ET, and soil moisture or water level data, and uses the devices, field checks and weather data during the season to set timing and amounts.</li></ul><p>The posted E449H file also carries a South Dakota supplement on who may approve documentation, which is administrative and not repeated here.</p>",
   "calcs": [
    "eto-daily",
    "checkbook"
   ],
   "book": [
    "2.10",
    "4.8",
    "6.4"
   ],
   "tags": [
    "E449H",
    "CSP",
    "weather station",
    "flow meter",
    "soil moisture sensors"
   ]
  }
 ],
 "tables": [
  {
   "id": "t-flow",
   "title": "Flow measurement criteria in CPS 449 (2024)",
   "cols": [
    "Item",
    "Criterion"
   ],
   "rows": [
    [
     "Closed conduit (pipeline) in-field accuracy",
     "plus or minus 5% within expected range of flow"
    ],
    [
     "Open channel in-field accuracy (staff or head gauge)",
     "plus or minus 15% within expected range of flows"
    ],
    [
     "Straight pipe upstream of meter, no manufacturer guidance",
     "at least 10 pipe diameters"
    ],
    [
     "Straight pipe downstream of meter, no manufacturer guidance",
     "at least 5 pipe diameters"
    ],
    [
     "Meter flow condition",
     "full pipe flow, velocity within meter's normal operating range"
    ],
    [
     "Typical closed conduit devices",
     "turbine, propeller, acoustic, magnetic"
    ],
    [
     "Typical open channel devices",
     "flumes, weirs, calibrated water control structures"
    ]
   ],
   "notes": "NRCS CPS 449, Additional Criteria for Closed Conduit and Open Channel Irrigation Flow Measurement, pages 449-CPS-2 and 3.",
   "calcs": [
    "meter-depth",
    "meter-timing"
   ]
  },
  {
   "id": "t-timing",
   "title": "Accepted bases for irrigation timing and depth in CPS 449",
   "cols": [
    "Decision",
    "Accepted basis"
   ],
   "rows": [
    [
     "Timing",
     "Crop ET (atmometer, pan evaporation, weather station reference ET times crop coefficient, weighing lysimeter, energy balance)"
    ],
    [
     "Timing",
     "Soil moisture or soil water tension monitoring"
    ],
    [
     "Timing",
     "Computerized scheduling with local real-time climate, soil and crop data (soil-water balance)"
    ],
    [
     "Timing",
     "Plant monitoring (leaf water potential, leaf or canopy temperature)"
    ],
    [
     "Depth",
     "Available water-holding capacity for the rooting depth"
    ],
    [
     "Depth",
     "Management allowed soil water depletion"
    ],
    [
     "Depth",
     "Current soil moisture status"
    ],
    [
     "Depth",
     "Current crop growth stage"
    ],
    [
     "Depth",
     "Distribution uniformity of the irrigation event"
    ],
    [
     "Depth",
     "Water table contribution"
    ],
    [
     "Depth",
     "Computerized irrigation scheduling recommendation"
    ]
   ],
   "notes": "NRCS CPS 449 (2024), General Criteria Applicable to All Purposes, pages 449-CPS-1 and 2.",
   "calcs": [
    "checkbook",
    "eq-6.2-6.5"
   ]
  },
  {
   "id": "t-devices",
   "title": "Monitoring device minimums in enhancements E449G and E449H",
   "cols": [
    "Device",
    "Minimum requirement",
    "Source"
   ],
   "rows": [
    [
     "Soil moisture sensors",
     "data at a minimum of 2 approved depths based on crop and soil, reinstalled each year (E449G)",
     "E449G, E449H"
    ],
    [
     "Number of soil moisture sets",
     "set by the IWM plan per water source using field topography, crop rotation and soils",
     "E449G, E449H"
    ],
    [
     "Water level sensor (basin field)",
     "data logger image of gauge movement at least twice a day",
     "E449G, E449H"
    ],
    [
     "Weather station",
     "central location in the IWM plan, records at least 4 times per hour: high and low temperature, precipitation, humidity, wind speed, duration and direction, solar radiation",
     "E449H"
    ],
    [
     "Flow meters",
     "permanent flow meter data at all wells/relifts in the approved IWM plan",
     "E449H"
    ],
    [
     "Records",
     "location, date, duration and flow rate of all irrigations, rainfall, ET, soil moisture or water level data",
     "E449G, E449H"
    ]
   ],
   "notes": "E449G (August 2019) Additional Criteria, pages 2 and 3. E449H (May 2020) Additional Criteria, pages 3 and 4.",
   "calcs": []
  }
 ],
 "facts": [
  {
   "q": "What is the NRCS definition of irrigation water management (Code 449)?",
   "a": "The process of determining, measuring, and controlling the volume, timing, and application rate of irrigation water (NRCS CPS 449, 2024).",
   "tags": [
    "IWM",
    "definition"
   ],
   "calcs": [],
   "book": [
    "1.5"
   ]
  },
  {
   "q": "What methods does NRCS 449 accept for deciding when to irrigate?",
   "a": "Crop ET (atmometer, pan, weather station reference ET times a crop coefficient, lysimeter or energy balance), soil moisture or tension monitoring, computerized scheduling with local real-time data, or plant monitoring such as leaf water potential or canopy temperature (CPS 449, 2024).",
   "tags": [
    "scheduling",
    "timing"
   ],
   "calcs": [
    "eq-4.2-4.7",
    "checkbook"
   ],
   "book": [
    "6.4",
    "6.5"
   ]
  },
  {
   "q": "What does NRCS 449 require for rainfall where a soil water balance is used?",
   "a": "Use an onsite rain gauge, interpolated predictions from local weather stations, or another accurate method to determine local rainfall for the area under irrigation (CPS 449, 2024).",
   "tags": [
    "rain gauge",
    "water balance"
   ],
   "calcs": [
    "checkbook"
   ],
   "book": [
    "6.4"
   ]
  },
  {
   "q": "How accurate must a pipeline flow meter be under NRCS 449?",
   "a": "In-field accuracy of plus or minus 5% within the expected range of flow (CPS 449, 2024).",
   "tags": [
    "flow meter",
    "accuracy"
   ],
   "calcs": [
    "meter-depth"
   ],
   "book": [
    "3.3"
   ]
  },
  {
   "q": "How accurate must open channel flow measurement be under NRCS 449?",
   "a": "Plus or minus 15% within the expected range of flows, read from a staff or head gauge (CPS 449, 2024).",
   "tags": [
    "weir",
    "flume",
    "accuracy"
   ],
   "calcs": [
    "tab-3.2"
   ],
   "book": [
    "3.4"
   ]
  },
  {
   "q": "How much straight pipe does a flow meter need if the manufacturer gives no guidance?",
   "a": "At least 10 pipe diameters upstream and 5 pipe diameters downstream of the meter (CPS 449, 2024).",
   "tags": [
    "flow meter",
    "installation"
   ],
   "calcs": [],
   "book": [
    "3.3"
   ]
  },
  {
   "q": "When must chemigation not be run under NRCS 449?",
   "a": "Do not chemigate if rainfall that may produce runoff or deep percolation is expected. Limit water to the amount needed to place the chemical at the labeled soil depth and limit run time to the minimum needed to deliver and flush the pipelines (CPS 449, 2024).",
   "tags": [
    "chemigation",
    "fertigation"
   ],
   "calcs": [
    "eq-15.1",
    "flush-total"
   ],
   "book": [
    "15.4"
   ]
  },
  {
   "q": "What must an NRCS 449 IWM plan state about soil water?",
   "a": "The management allowable depletion (MAD) and depth of the managed crop root zone for each managed irrigation zone, plus the seasonal planned water volume per zone and an estimate of distribution uniformity from testing, evaluation or observation (CPS 449, 2024).",
   "tags": [
    "IWM plan",
    "MAD",
    "DU"
   ],
   "calcs": [
    "eq-6.2-6.5"
   ],
   "book": [
    "6.3"
   ]
  },
  {
   "q": "What must be recorded for each irrigation event under NRCS 449?",
   "a": "The amount or depth of water applied, the duration of the event, and the date of application, plus the method used to decide timing and amount (CPS 449, 2024, Operation and Maintenance).",
   "tags": [
    "records"
   ],
   "calcs": [],
   "book": [
    "6.4"
   ]
  },
  {
   "q": "How should a variable rate irrigation (VRI) pivot be managed under NRCS 449?",
   "a": "Base the amount and rate on spatially identified field parameters such as past yield, soils, salt concentration, crop growth, topography, or computerized scheduling recommendations (CPS 449, 2024).",
   "tags": [
    "VRI",
    "center pivot"
   ],
   "calcs": [],
   "book": [
    "6.6",
    "13.7"
   ]
  },
  {
   "q": "What does NRCS 449 say about end guns and overspray?",
   "a": "Plan the location of sprinklers and end guns so that overspray will not reach public roads or other unintended locations (CPS 449, 2024, Considerations).",
   "tags": [
    "end gun",
    "center pivot"
   ],
   "calcs": [
    "eq-13.2"
   ],
   "book": [
    "13.2"
   ]
  },
  {
   "q": "At how many depths must soil moisture sensors read under CSP enhancements E449G and E449H?",
   "a": "A minimum of 2 approved depths based on crop and soil characteristics of the region, with the number of sensor sets based on field topography, crop rotation and soils (E449G 2019, E449H 2020).",
   "tags": [
    "soil moisture sensors",
    "E449H"
   ],
   "calcs": [],
   "book": [
    "2.10"
   ]
  },
  {
   "q": "How often must a weather station record for enhancement E449H?",
   "a": "At least four times per hour: high and low temperature, precipitation, humidity, wind speed, duration and direction, and solar radiation, from a central location named in the IWM plan (E449H, May 2020).",
   "tags": [
    "weather station",
    "E449H"
   ],
   "calcs": [
    "eto-daily"
   ],
   "book": [
    "4.8"
   ]
  },
  {
   "q": "Where are flow meters required in enhancement E449H?",
   "a": "Permanent flow meter data must be collected at all wells/relifts included in the approved IWM plan (E449H, May 2020).",
   "tags": [
    "flow meter",
    "E449H"
   ],
   "calcs": [
    "meter-depth"
   ],
   "book": [
    "3.3"
   ]
  },
  {
   "q": "Which version of NRCS 449 does this guide use for Delaware?",
   "a": "The national 2024 standard. The Delaware eFOTG Section IV lists an Irrigation Water Management (449) folder, but its file could not be retrieved, so check the Delaware eFOTG copy for any state additions before using it on a contract.",
   "tags": [
    "Delaware",
    "eFOTG",
    "version"
   ],
   "calcs": [],
   "book": []
  }
 ]
}]);
