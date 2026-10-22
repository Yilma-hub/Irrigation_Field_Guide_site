window.DE_DOCS = (window.DE_DOCS || []).concat([{
 "id": "neh-623",
 "title": "National Engineering Handbook Part 623 (Section 15), Chapter 11 Sprinkle Irrigation and Chapter 7 Microirrigation",
 "short": "NEH 623 Ch. 11 and 7",
 "org": "USDA Natural Resources Conservation Service",
 "year": 2013,
 "url": "https://mail.irrigationtoolbox.com/NEH/Part623_Irrigation/neh15-11.pdf",
 "license": "public domain",
 "summary": "NEH 623 is the NRCS irrigation design handbook. Chapter 11 (Sprinkle Irrigation, older Section 15 edition, scanned copy) gives the sprinkler application rate limits, AWC classes and design efficiencies behind most NRCS sprinkler and pivot designs. Chapter 7 (Microirrigation, 210-VI-NEH, October 2013) gives the water quality clogging criteria and the chlorine, acid and iron treatment rules that matter for drip on Delaware's iron-bearing wells. Only part of each chapter could be read (see notes), so the design tables for emitter uniformity and sprinkler spacing are not included here.",
 "sections": [
  {
   "id": "ch11-systems",
   "h": "Sprinkle system types and typical dimensions (Ch. 11)",
   "html": "<ul><li>Center pivot: spans 90 to 250 ft, about 10 ft above ground. The standard 1,320-ft lateral irrigates about 126 acres, with rates of about 1.0 in/hr near the moving end.</li><li>Traveling sprinkler: 660-ft hose, 1,320-ft travel, 80 to 100 psi at the nozzle, with 20 to 40 psi hose friction loss.</li><li>Gun and boom sprinklers: typical discharge 500 gpm at 80 to 100 psi.</li><li>Fixed (solid set) sprinklers: 30 to 80 ft apart, gun sprinklers 100 to 160 ft apart. Buried laterals 18 to 30 inches deep.</li><li>Side-roll lateral: maximum length about 1,600 ft, 76.4-in diameter wheels give a 60-ft move.</li><li>Orchard sprinklers: 10 to 30 psi, 15 to 30 ft coverage. Perforated pipe 5 to 30 psi. Hose-fed grids 5 to 10 psi.</li></ul><p>Values read from the scanned Chapter 11 text. Check against the printed chapter before using in a design.</p>",
   "calcs": [
    "eq-13.2",
    "tab-13.2",
    "eq-12.11",
    "tab-12.8",
    "tab-12.6"
   ],
   "book": [
    "11.2",
    "12.3",
    "12.4",
    "12.5",
    "13.2"
   ],
   "tags": [
    "center pivot",
    "traveler",
    "big gun",
    "solid set",
    "system types"
   ]
  },
  {
   "id": "ch11-adapt",
   "h": "Where sprinklers fit and capacity planning (Ch. 11)",
   "html": "<ul><li>Sprinklers are poorly suited to soils with intake rates below about 0.15 in/hr. Periodic move systems suit irrigation every 5 to 7 days.</li><li>Design worked example: 40 acres, 0.20 in/day use rate, 70% efficiency, 20 hr/day operation.</li><li>For high frequency fixed systems, capacity may need to be increased 10 to 20 percent.</li><li>Frost protection: about 0.15 in/hr (about 65 gpm per acre) for a dew point temperature of 20 F. Bloom delay (evaporative cooling): 22 to 26 gpm per acre.</li><li>Continuous move systems on soils with 5.0 inches or more of water storage can be designed for limited irrigation, with capacity as low as 60 percent of peak need.</li><li>Typical water loss to wind drift and evaporation is between 5 and 10 percent.</li><li>Design example: 30 by 50 ft spacing with 5 gpm sprinklers at 50 psi gives an average application rate of 0.32 in/hr (96.3 x 5 / 1,500).</li></ul>",
   "calcs": [
    "eq-5.20",
    "cn-from-flow",
    "eq-3.5",
    "eq-11.2-11.3",
    "tab-11.5",
    "tab-11.6"
   ],
   "book": [
    "5.5",
    "5.6",
    "11.6",
    "11.7"
   ],
   "tags": [
    "system capacity",
    "frost protection",
    "intake rate",
    "wind drift"
   ]
  },
  {
   "id": "ch11-rates",
   "h": "Maximum sprinkler application rates and AWC classes (Ch. 11)",
   "html": "<p>Table 11-4 gives suggested maximum sprinkler application rates for average soil, slope and tilth. Adjustments from the surrounding text: reduce about 25 percent for bare ground or poor soil condition, increase about 25 percent for grasses and alfalfa, and reduce about 25 percent for gun and traveling sprinklers. Table 11-1 gives average available water-holding capacity by texture class (coarse sands, fine sands and loamy sands average 1.0 in/ft, sandy loams 1.5 in/ft, medium textures 2.0 in/ft). Root depths in Table 11-2 include alfalfa 4.0 to 6.0 ft and corn (grain and silage) 2.0 to 3.0 ft, and design uses MAD = 50%.</p>",
   "calcs": [
    "tab-11.4",
    "eq-11.2-11.3",
    "tab-2.3",
    "eq-2.14"
   ],
   "book": [
    "11.3",
    "2.7"
   ],
   "tags": [
    "application rate",
    "runoff",
    "AWC",
    "sandy soil",
    "traveler"
   ]
  },
  {
   "id": "ch11-eff",
   "h": "Sprinkle irrigation efficiency and uniformity (Ch. 11)",
   "html": "<ul><li>A practical overall DU of about 85 percent is attainable, and DU above 80% is wanted for higher value crops.</li><li>CU = 100 - 0.63 (100 - DU) and DU = 100 - 1.59 (100 - CU).</li><li>R<sub>e</sub> is the effective portion of applied water (Figure 11-17), the fraction left after wind drift and evaporation losses.</li><li>Designing the application depth with the low-half efficiency E<sub>h</sub> to refill a given soil moisture deficit leaves only about 20 percent of the area below field capacity.</li><li>The probable efficiency ranges below assume full canopy crops and well designed, well maintained systems. Poor management or unsuitable design gives considerably lower values.</li></ul>",
   "calcs": [
    "eq-5.2",
    "eq-5.3",
    "eq-5.9-5.11",
    "catch-can",
    "tab-5.1"
   ],
   "book": [
    "5.3",
    "11.3"
   ],
   "tags": [
    "efficiency",
    "DU",
    "CU",
    "low half",
    "wind drift"
   ]
  },
  {
   "id": "ch7-quality",
   "h": "Water quality and clogging hazard for drip (Ch. 7)",
   "html": "<ul><li>Iron levels higher than 0.2 ppm (mg/L) indicate a potential iron problem. Iron bacteria can grow where iron is 0.3 ppm (mg/L) or greater.</li><li>Most microirrigation emitters operate at low pressures, 3 to 20 psi.</li><li>Emitter manufacturing variation is adequate at 10% or less.</li><li>If the manufacturer gives no filtration recommendation, filter for one-tenth of the diameter of the emitter's smallest opening.</li><li>Table 7-2 classifies irrigation water as a minor, moderate or severe clogging hazard by suspended solids, pH, dissolved solids, manganese, iron, hydrogen sulfide, carbonate plus bicarbonate and bacteria.</li></ul>",
   "calcs": [
    "tab-14.2",
    "eq-14.2",
    "eq-14.5",
    "tab-14.3"
   ],
   "book": [
    "14.5",
    "14.4"
   ],
   "tags": [
    "iron",
    "clogging",
    "filtration",
    "water quality",
    "drip"
   ]
  },
  {
   "id": "ch7-treatment",
   "h": "Chlorination, acid and iron treatment (Ch. 7)",
   "html": "<ul><li>Target free chlorine residual of 2 ppm (2 mg/L) at the end of the laterals, 30 minutes after the end of chlorination, and no less than 2 ppm at the furthest lateral. With high chlorine demand, increase injection to 10 ppm by trial and error.</li><li>Algae: 0.5 to 1.0 ppm (0.5 to 1.0 mg/L) continuously, or 20 ppm (20 mg/L) for 20 minutes.</li><li>Slime: maintain 1 ppm (1 mg/L) free residual chlorine at the ends of laterals.</li><li>Superchlorination (shock): at least 10 ppm (10 mg/L).</li><li>Iron bacteria: use 1 ppm (1 mg/L) more chlorine than the ppm of iron present.</li><li>Iron precipitation: use 0.64 times the ferrous ion content. Manganese precipitation: use 1.3 times the manganese content.</li><li>Iron can be chelated with a phosphate chelating agent at two to five times the iron concentration.</li><li>An acid concentration that maintains a pH of 6 to 7 will control precipitates. Acidify to about pH 6.5 as needed. Acidifying first to pH below 7.0 increases the efficacy of chlorination.</li><li>Flushing after treatment could take up to several hours.</li></ul>",
   "calcs": [
    "eq-15.1",
    "pump-calibration",
    "injection-plan",
    "flush-total",
    "eq-15.4"
   ],
   "book": [
    "14.5",
    "15.2",
    "15.4"
   ],
   "tags": [
    "chlorine",
    "acid",
    "iron bacteria",
    "shock chlorination",
    "drip maintenance"
   ]
  },
  {
   "id": "ch7-fertigation",
   "h": "Fertigation materials (Ch. 7)",
   "html": "<p>Fertilizer solubility changes strongly with temperature (Table 7-5), so a stock solution mixed warm can salt out when cold. Salt index (Table 7-6) compares how much each material raises the soil solution salt concentration, with sodium nitrate set at 100. Table 7-4 gives the amount of each chlorine product needed to treat 1 acre-foot of water to 1 ppm.</p>",
   "calcs": [
    "eq-15.1",
    "injection-plan"
   ],
   "book": [
    "15.2",
    "15.4"
   ],
   "tags": [
    "fertigation",
    "solubility",
    "salt index",
    "chlorine products"
   ]
  }
 ],
 "tables": [
  {
   "id": "t11-eff",
   "title": "Range of probable application efficiency for sprinkle systems (Ch. 11)",
   "cols": [
    "System type",
    "Ea",
    "Eh (low half)"
   ],
   "rows": [
    [
     "Periodic move lateral",
     "60 to 75%",
     "70 to 85%"
    ],
    [
     "Gun or boom sprinklers",
     "50 to 60%",
     "60 to 75%"
    ],
    [
     "Fixed lateral",
     "60 to 85%",
     "70 to 88%"
    ],
    [
     "Traveling sprinklers",
     "55 to 67%",
     "65 to 77%"
    ],
    [
     "Center-pivot",
     "75 to 85%",
     "80 to 88%"
    ],
    [
     "Lateral-move",
     "80 to 87%",
     "85 to 90%"
    ]
   ],
   "notes": "NEH 623 (Section 15) Chapter 11, Sprinkle Irrigation Efficiency. The first column symbol is partly illegible in the scanned copy (read as Ea). Values assume full canopy crops and well designed, well maintained systems.",
   "calcs": [
    "eq-5.9-5.11",
    "eq-5.20"
   ]
  },
  {
   "id": "t11-4",
   "title": "Suggested maximum sprinkler application rates, in/hr, average soil, slope and tilth (Table 11-4)",
   "cols": [
    "Soil texture and profile",
    "0 to 5% slope",
    "5 to 8% slope",
    "8 to 12% slope",
    "12 to 16% slope"
   ],
   "rows": [
    [
     "Coarse sandy soil to 6 ft",
     2.0,
     1.5,
     1.0,
     0.5
    ],
    [
     "Coarse sandy soil over more compact soils",
     1.5,
     1.0,
     0.75,
     0.4
    ],
    [
     "Light sandy loam to 6 ft",
     1.0,
     0.8,
     0.6,
     0.4
    ],
    [
     "Light sandy loam over more compact soils",
     0.75,
     0.5,
     0.4,
     0.3
    ],
    [
     "Silt loam to 6 ft",
     0.5,
     0.4,
     0.3,
     0.2
    ],
    [
     "Silt loam over more compact soils",
     0.3,
     0.25,
     0.15,
     0.1
    ],
    [
     "Heavy-textured clays or clay loams",
     "not legible in scan",
     0.1,
     0.08,
     0.06
    ]
   ],
   "notes": "NEH 623 Chapter 11, Table 11-4. Reduce about 25% for bare ground or poor soil condition, increase about 25% for grass and alfalfa, reduce about 25% for gun and traveling sprinklers.",
   "calcs": [
    "tab-11.4",
    "eq-11.2-11.3"
   ]
  },
  {
   "id": "t11-1",
   "title": "Available water-holding capacity by texture class, in/ft (Table 11-1)",
   "cols": [
    "Texture class",
    "Range (in/ft)",
    "Average (in/ft)"
   ],
   "rows": [
    [
     "Very coarse (very coarse sands)",
     "0.40 to 0.75",
     0.6
    ],
    [
     "Coarse (coarse sands, fine sands, loamy sands)",
     "0.75 to 1.28 (as read from the scan)",
     1.0
    ],
    [
     "Moderately coarse (sandy loams)",
     "1.25 to 1.75",
     1.5
    ],
    [
     "Medium (very fine sandy loams, loams, silt loams)",
     "1.50 to 2.30",
     2.0
    ],
    [
     "Moderately fine (clay loams, silty clay loams, sandy clay loams)",
     "1.75 to 2.50",
     2.2
    ],
    [
     "Fine (sandy clays, silty clays, clays)",
     "1.60 to 2.50",
     2.3
    ],
    [
     "Peats and mucks",
     "2.00 to 3.00",
     2.5
    ]
   ],
   "notes": "NEH 623 Chapter 11, Table 11-1, read from a scanned copy.",
   "calcs": [
    "tab-2.3",
    "eq-2.14"
   ]
  },
  {
   "id": "t7-2",
   "title": "Tentative water quality criteria for clogging hazard in microirrigation, ppm (mg/L) except pH and bacteria (Table 7-2)",
   "cols": [
    "Factor",
    "Minor",
    "Moderate",
    "Severe"
   ],
   "rows": [
    [
     "Suspended solids (physical)",
     "50",
     "50 to 100",
     ">100"
    ],
    [
     "pH",
     "7.0",
     "7.0 to 8.0",
     ">8.0"
    ],
    [
     "Dissolved solids",
     "500",
     "500 to 2,000",
     ">2,000"
    ],
    [
     "Manganese",
     "0.1",
     "0.1 to 1.5",
     ">1.5"
    ],
    [
     "Total iron",
     "0.2",
     "0.2 to 1.5",
     ">1.5"
    ],
    [
     "Hydrogen sulfide",
     "0.2",
     "0.2 to 2.0",
     ">2.0"
    ],
    [
     "Carbonate + bicarbonate",
     "50.0",
     "50 to 100",
     ">100"
    ],
    [
     "Bacterial population (per mL)",
     "10,000",
     "10,000 to 50,000",
     ">50,000"
    ]
   ],
   "notes": "NEH 623 Chapter 7 (October 2013), Table 7-2, adapted from Hanson et al. 1994 and Hassan 1998.",
   "calcs": [
    "tab-14.2"
   ]
  },
  {
   "id": "t7-4",
   "title": "Chlorine products needed to treat 1 acre-ft (1,234 m3) to 1 ppm Cl2, no bacterial demand (Table 7-4)",
   "cols": [
    "Chemical",
    "Quantity equal to 1.0 lb (454 g) Cl2",
    "Quantity to treat 1 acre-ft to 1 ppm"
   ],
   "rows": [
    [
     "Chlorine gas",
     "1 lb (454 g)",
     "2.7 lb (1,226 g)"
    ],
    [
     "Calcium hypochlorite, 65 to 70% available chlorine",
     "1.5 lb (681 g)",
     "4.0 lb (1,816 g)"
    ],
    [
     "Sodium hypochlorite, 15% available chlorine",
     "0.67 gal (2.54 L)",
     "1.8 gal (6.81 L)"
    ],
    [
     "Sodium hypochlorite, 10% available chlorine",
     "1.0 gal (3.78 L)",
     "2.7 gal (10.22 L)"
    ],
    [
     "Sodium hypochlorite, 5% available chlorine",
     "2.0 gal (7.57 L)",
     "5.4 gal (20.44 L)"
    ]
   ],
   "notes": "NEH 623 Chapter 7 (October 2013), Table 7-4.",
   "calcs": [
    "eq-15.1",
    "injection-plan"
   ]
  },
  {
   "id": "t7-5",
   "title": "Fertilizer solubility by temperature, lb/gal (kg/m3) (Table 7-5)",
   "cols": [
    "Fertilizer",
    "Formula",
    "32 F (0 C)",
    "68 F (20 C)",
    "122 F (50 C)"
   ],
   "rows": [
    [
     "Ammonium chloride",
     "NH4Cl",
     "2.45 (294)",
     "3.10 (372)",
     "4.21 (504)"
    ],
    [
     "Ammonium nitrate",
     "NH4NO3",
     "9.87 (1,183)",
     "16.27 (1,950)",
     "28.71 (3,440)"
    ],
    [
     "Monoammonium phosphate",
     "NH4H2PO4",
     "1.89 (227)",
     "2.35 (282)",
     "3.48 (417)"
    ],
    [
     "Diammonium phosphate",
     "(NH4)2HPO4",
     "3.58 (429)",
     "4.80 (575)",
     "8.85 (1,060)"
    ],
    [
     "Ammonium sulfate",
     "(NH4)2SO4",
     "5.89 (706)",
     "6.34 (760)",
     "7.09 (850)"
    ],
    [
     "Potassium chloride",
     "KCl",
     "2.34 (280)",
     "2.90 (347)",
     "3.59 (430)"
    ],
    [
     "Potassium nitrate",
     "KNO3",
     "1.11 (133)",
     "2.64 (316)",
     "7.18 (860)"
    ],
    [
     "Potassium sulfate",
     "K2SO4",
     "0.58 (69)",
     "0.92 (110)",
     "1.42 (170)"
    ],
    [
     "Calcium nitrate",
     "Ca(NO3)2",
     "8.51 (1,020)",
     "28.46 (3,410) at 25 C",
     "31.38 (3,760) at 99 C"
    ],
    [
     "Phosphoric acid",
     "H3PO4",
     "",
     "",
     "45.74 (5,480) at 25 C"
    ],
    [
     "Urea",
     "(NH2)2CO",
     "6.51 (780) at 5 C",
     "9.96 (1,193) at 25 C",
     ""
    ]
   ],
   "notes": "NEH 623 Chapter 7 (October 2013), Table 7-5, adapted from Bar-Yosef 1999 and Lange 1967. A temperature in a cell marks a value given at a different temperature than the column.",
   "calcs": [
    "eq-15.1"
   ]
  },
  {
   "id": "t7-6",
   "title": "Salt index of fertilizer materials (Table 7-6)",
   "cols": [
    "Fertilizer",
    "Salt index"
   ],
   "rows": [
    [
     "Sodium nitrate",
     100.0
    ],
    [
     "Ammonium nitrate",
     104.7
    ],
    [
     "Ammonium sulfate",
     69.0
    ],
    [
     "Diammonium sulfate",
     29.9
    ],
    [
     "Monoammonium phosphate",
     34.2
    ],
    [
     "Potassium chloride",
     116.3
    ],
    [
     "Potassium nitrate",
     73.6
    ],
    [
     "Potassium sulfate",
     46.1
    ],
    [
     "Potassium-magnesium sulfate",
     43.2
    ]
   ],
   "notes": "NEH 623 Chapter 7 (October 2013), Table 7-6, adapted from Rader et al. 1943 and Western Fertilizer Handbook 1975. Diammonium sulfate is as printed.",
   "calcs": []
  }
 ],
 "facts": [
  {
   "q": "What is the maximum sprinkler application rate on a deep coarse sandy soil?",
   "a": "2.0 in/hr on 0 to 5% slopes, 1.5 on 5 to 8%, 1.0 on 8 to 12% and 0.50 on 12 to 16% (NEH 623 Ch. 11, Table 11-4). Reduce about 25% for traveling and gun sprinklers.",
   "tags": [
    "application rate",
    "sandy soil"
   ],
   "calcs": [
    "tab-11.4"
   ],
   "book": [
    "11.3"
   ]
  },
  {
   "q": "What is the maximum sprinkler rate on a deep light sandy loam?",
   "a": "1.0 in/hr on 0 to 5% slopes, or 0.75 in/hr where the sandy loam is over more compact soil (NEH 623 Ch. 11, Table 11-4).",
   "tags": [
    "application rate",
    "sandy loam"
   ],
   "calcs": [
    "tab-11.4"
   ],
   "book": [
    "11.3"
   ]
  },
  {
   "q": "What application efficiency should a center pivot be designed for?",
   "a": "NEH 623 Ch. 11 gives a probable range of 75 to 85% (low half 80 to 88%) for center pivots, versus 55 to 67% (low half 65 to 77%) for traveling sprinklers and 50 to 60% for guns or booms, assuming full canopy and good maintenance.",
   "tags": [
    "efficiency",
    "center pivot",
    "traveler"
   ],
   "calcs": [
    "eq-5.20",
    "eq-5.9-5.11"
   ],
   "book": [
    "5.3",
    "13.1"
   ]
  },
  {
   "q": "What DU should a sprinkler system achieve?",
   "a": "About 85% is a practical overall DU, and above 80% is wanted for higher value crops (NEH 623 Ch. 11).",
   "tags": [
    "DU"
   ],
   "calcs": [
    "eq-5.2",
    "catch-can"
   ],
   "book": [
    "5.3"
   ]
  },
  {
   "q": "How much water do sprinklers lose to wind drift and evaporation?",
   "a": "Typically between 5 and 10 percent (NEH 623 Ch. 11).",
   "tags": [
    "wind drift",
    "evaporation"
   ],
   "calcs": [],
   "book": [
    "11.3"
   ]
  },
  {
   "q": "What soil intake rate is too low for sprinklers?",
   "a": "Sprinklers are poorly suited where soil intake is below about 0.15 in/hr (NEH 623 Ch. 11).",
   "tags": [
    "intake rate"
   ],
   "calcs": [
    "tab-11.4"
   ],
   "book": [
    "11.1"
   ]
  },
  {
   "q": "How much iron in well water is a drip clogging concern?",
   "a": "Iron above 0.2 ppm (mg/L) indicates a potential iron problem, 0.2 to 1.5 ppm is a moderate hazard and above 1.5 ppm severe. Iron bacteria can grow at 0.3 ppm or more (NEH 623 Ch. 7).",
   "tags": [
    "iron",
    "clogging",
    "drip"
   ],
   "calcs": [
    "tab-14.2"
   ],
   "book": [
    "14.5"
   ]
  },
  {
   "q": "What chlorine residual should be held at the end of drip laterals?",
   "a": "A free chlorine residual of 2 ppm at the end of the laterals 30 minutes after chlorination ends. For slime keep 1 ppm free residual at lateral ends, for shock treatment use at least 10 ppm (NEH 623 Ch. 7).",
   "tags": [
    "chlorine",
    "drip maintenance"
   ],
   "calcs": [
    "eq-15.1",
    "injection-plan"
   ],
   "book": [
    "14.5"
   ]
  },
  {
   "q": "How much chlorine is needed to control iron bacteria?",
   "a": "Use 1 ppm more chlorine than the ppm of iron present. To precipitate iron use 0.64 times the ferrous iron content, and for manganese 1.3 times the manganese content (NEH 623 Ch. 7).",
   "tags": [
    "iron bacteria",
    "chlorine",
    "manganese"
   ],
   "calcs": [
    "eq-15.1"
   ],
   "book": [
    "14.5"
   ]
  },
  {
   "q": "What pH should acid injection target in drip?",
   "a": "A pH of 6 to 7 controls precipitates, about 6.5 as needed, and acidifying below pH 7.0 makes chlorination more effective (NEH 623 Ch. 7).",
   "tags": [
    "acid",
    "pH",
    "drip maintenance"
   ],
   "calcs": [
    "injection-plan"
   ],
   "book": [
    "14.5"
   ]
  },
  {
   "q": "How much 10% sodium hypochlorite treats an acre-foot to 1 ppm?",
   "a": "2.7 gallons (10.22 L). For 5% bleach it is 5.4 gal, for 15% it is 1.8 gal, and for 65 to 70% calcium hypochlorite 4.0 lb (NEH 623 Ch. 7, Table 7-4).",
   "tags": [
    "chlorine",
    "bleach",
    "dose"
   ],
   "calcs": [
    "eq-15.1",
    "pump-calibration"
   ],
   "book": [
    "15.2"
   ]
  },
  {
   "q": "How fine should a drip filter be?",
   "a": "If the manufacturer gives no recommendation, filter for one-tenth of the diameter of the emitter's smallest opening (NEH 623 Ch. 7).",
   "tags": [
    "filtration",
    "drip"
   ],
   "calcs": [
    "eq-14.2"
   ],
   "book": [
    "14.4",
    "14.5"
   ]
  },
  {
   "q": "What pressure do drip emitters operate at?",
   "a": "Most microirrigation emitters operate at low pressures, 3 to 20 psi, and manufacturing variation of 10% or less is adequate (NEH 623 Ch. 7).",
   "tags": [
    "drip",
    "pressure",
    "emitter"
   ],
   "calcs": [
    "eq-14.3",
    "tab-14.3"
   ],
   "book": [
    "14.4"
   ]
  },
  {
   "q": "What sprinkling rate does NEH 623 give for frost protection?",
   "a": "About 0.15 in/hr (about 65 gpm per acre) for a dew point of 20 F, and 22 to 26 gpm per acre for bloom delay cooling (NEH 623 Ch. 11, read from scanned text).",
   "tags": [
    "frost protection"
   ],
   "calcs": [
    "tab-11.5"
   ],
   "book": [
    "11.7"
   ]
  }
 ]
}]);
