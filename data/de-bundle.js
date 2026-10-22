window.DE_DOCS = window.DE_DOCS || [];
window.DE_DOCS = (window.DE_DOCS || []).concat([{
  id: "brinson-2024",
  title: "Estimating Agricultural Irrigation Water Usage in Delaware, USA",
  short: "Brinson et al. 2024",
  org: "Brinson, DeLiberty and Leathers, University of Delaware. Journal of Applied and Service Climatology, 2024 (doi 10.46275/JOASC.2024.06.001)",
  year: 2024,
  url: "https://stateclimate.org/pdfs/journal-articles/2024_2-Brinson.pdf",
  license: "summarized",
  summary: "A FAO-56 soil water balance run on every irrigated corn and soybean field in Delaware for 2010 to 2019, driven by DEOS weather and SSURGO soils, and checked against 259 metered field seasons. It gives the best available numbers for how much water Delaware corn and soybeans take in wet and dry years, how much soil water holding capacity drives that, and shows that an ET trigger with a fixed 0.4 inch application matches what growers actually pump.",
  sections: [
    { id: "setting", h: "Delaware setting",
      html: "<ul><li>Irrigation is the second largest freshwater use in Delaware after industry, about 427,751 m<sup>3</sup> per day withdrawn in 2015 (about 113 Mgal/d, from USGS).</li><li>Irrigated cropland grew 22% from 2012 to 2017 (about 146 km<sup>2</sup>, about 36,000 acres) to 37.5% of harvested cropland.</li><li>Growing season (April to September) rain averaged 596 mm (23.5 in) statewide for 1981 to 2010, with a range of 364 to 915 mm (14.3 to 36.0 in).</li><li>Irrigated soils are mostly sandy loam and loamy sand in the south and silt loam in central and northern Delaware. Low water holding capacity plus variable summer rain is why irrigation is densest in Sussex County.</li><li>Delaware has nearly 3,000 irrigated fields.</li><li>An earlier Delaware Geological Survey estimate (KanSched2, FAO-56 water balance) put southern Delaware use at 68.1 to 124.9 million m<sup>3</sup> per year (about 55,200 to 101,300 acre-ft) on 415.1 km<sup>2</sup> (about 102,600 acres) for 2005 to 2008, wet to dry year.</li></ul>",
      calcs: [], book: ["1.2", "9.4"], tags: ["Delaware", "withdrawals", "rainfall", "soils"] },
    { id: "model", h: "Model: FAO-56 soil water balance with DEOS weather",
      html: "<ul><li>Method: the FAO-56 single crop coefficient soil water balance (Allen et al. 1998), run daily for each field.</li><li>Reference ET: computed daily at each DEOS station with the FAO Penman-Monteith grass reference equation.</li><li>Crop ET: ET<sub>o</sub> times K<sub>c</sub>, with the FAO-56 K<sub>c</sub> values and K<sub>c</sub> growth curves for corn and soybean.</li><li>Rain: daily totals from 5 minute tipping bucket data at DEOS stations.</li><li>Interpolation: ET<sub>o</sub> and rain were spread to each field with a modified Shepard method using a 16.1 km (10 mi) range so only nearby stations count.</li><li>Fields: UD Extension irrigated field map from 2011 and 2018 aerial imagery. Crop each year from the USDA Cropland Data Layer pixel at the field centroid, including full season and double crop (after wheat or barley).</li></ul>",
      calcs: ["eto-daily", "eq-4.2-4.7", "crop-et", "checkbook"], book: ["4.5", "4.6", "6.4"], tags: ["FAO-56", "water balance", "DEOS", "Kc", "model"] },
    { id: "soil-root", h: "Soil water and root zone inputs",
      html: "<ul><li>Available water capacity (AWC) for each field came from the SSURGO map unit at the field centroid.</li><li>AWC was field capacity at 0.33 bar minus permanent wilting point at 15 bar, as defined in SSURGO.</li><li>The managed root zone was the top 0.6 m (about 2 ft) for both crops, even though corn and soybean roots can reach about 1.8 m (about 6 ft). The authors note 0.6 m is common practice for irrigation in the region.</li><li>Some fields had so little AWC that the whole managed root zone held less than 10.16 mm (0.4 in). On those fields each application was capped at the root zone AWC, since a grower would not irrigate past saturation.</li><li>Soil water availability (SWA) runs from 100% at field capacity to 0% at wilting point. The irrigation trigger is 100% minus MAD (for example MAD 40% means irrigate when SWA drops below 60%).</li></ul>",
      calcs: ["eq-2.8", "eq-2.14", "eq-6.2-6.5", "eq-6.1"], book: ["2.5", "6.3"], tags: ["AWC", "SSURGO", "root zone", "MAD", "field capacity"] },
    { id: "emergence", h: "Crop emergence dates",
      html: "<p>Full season emergence was set to the date of the USDA NASS Delaware and Maryland Crop Progress report when at least 50% of the crop had emerged. Double crop (short season) fields were set 30 days after the full season emergence date.</p>",
      calcs: ["eq-4.11-4.12"], book: ["4.6"], tags: ["emergence", "double crop", "crop stages"] },
    { id: "scenarios", h: "The four irrigation scenarios",
      html: "<ul><li>1a, ET based, fixed amount: irrigate when SWA falls below the 50% MAD trigger, apply 10.16 mm (0.4 in) each time.</li><li>1b, ET based, variable amount: same 50% MAD trigger, apply only enough to bring SWA back to 50%.</li><li>2a, calendar: a weekly crop schedule meant to follow the FAO-56 K<sub>c</sub> curve, applied as 10.16 mm days spread through each week, regardless of weather.</li><li>2b, calendar with rain gauge: as 2a but skip a day's application if rain over the previous 2 days was at least 10.16 mm (0.4 in).</li></ul><p>The 50% MAD and 0.4 inch amount were the most common settings in DIMS since it launched. The calendar totals, 559 mm (22 in) for corn and 457 mm (18 in) for soybean, came from UD Extension (J. Adkins). USDA's 2018 survey says Delaware growers mostly decide when to irrigate by crop condition and soil feel, with soil moisture sensors a distant third.</p>",
      calcs: ["checkbook", "eq-6.2-6.5"], book: ["6.4"], tags: ["scenarios", "MAD", "calendar scheduling", "rain gauge"] },
    { id: "sensitivity", h: "What drives irrigation need: sensitivity test (2015 season)",
      html: "<p>The 2015 season was rerun with one input changed at a time:</p><ul><li>Soil: switching all fields to a high water holding soil (silt or clay) cut irrigation 31.4%. Switching to a low water holding soil (sandy loam) raised it 42.4%.</li><li>Crop: all soybean needed 10.8% less irrigation, all corn 21.9% more.</li><li>Emergence: 2 weeks earlier needed 6.1% less, 2 weeks later 6.8% more.</li></ul><p>So soil water holding capacity matters most, then crop, then emergence date. For a field engineer this means getting the soil AWC right in a scheduler matters more than getting the planting date exact.</p>",
      calcs: ["eq-2.14", "eq-6.8"], book: ["2.5", "6.3"], tags: ["sensitivity", "soil", "AWC", "corn", "soybean"] },
    { id: "years", h: "Wet year versus dry year",
      html: "<ul><li>May to September rain ranged from 382 mm (15.0 in) in 2010 to 750 mm (29.5 in) in 2016.</li><li>2010, the highest irrigation year: dry from June to late August. ET based scenarios gave about 134.5 million m<sup>3</sup> statewide (about 109,000 acre-ft).</li><li>2017, the lowest: many large summer rains. About 64.3 million m<sup>3</sup> (about 52,100 acre-ft), roughly half of 2010.</li><li>Over 2010 to 2019 the ET based scenarios ranged from about 58 million m<sup>3</sup> (2017) to 134 million m<sup>3</sup> (2010), about 47,000 to 108,600 acre-ft.</li><li>The plain calendar (2a) was over 265 million m<sup>3</sup> in both years. The rain gauge calendar (2b) was 208.1 million m<sup>3</sup> in 2010 and 162.4 million m<sup>3</sup> in 2017, with a 10 year range of about 162 to 289 million m<sup>3</sup>.</li></ul><p>Timing of rain matters more than the seasonal total. 2016 had the most rain but was dry until September, when nearly 30% of the season's rain fell after irrigation had mostly stopped. 2018 had well above normal rain and still ranked fourth highest for irrigation.</p>",
      calcs: [], book: ["6.4"], tags: ["dry year", "wet year", "rainfall timing", "statewide"] },
    { id: "spatial", h: "Seasonal irrigation depth across the state",
      html: "<ul><li>ET based (scenario 1a), 10 year mean: most fields needed 100 to 200 mm (about 4 to 8 in) per season.</li><li>South central Delaware fields needed up to about 250 mm (about 10 in). East central fields needed as little as about 50 mm (about 2 in).</li><li>The pattern follows soil water holding capacity: low AWC soils hold less, so they need more frequent irrigation.</li><li>Calendar with rain gauge (2b): nearly uniform, mostly 300 to 500 mm (about 12 to 20 in) per season. A few southern fields were lower because of very low AWC (less than 10.16 mm in the managed root zone) or double crop soybean.</li></ul>",
      calcs: [], book: ["6.3"], tags: ["seasonal irrigation", "Sussex", "Kent", "soils"] },
    { id: "validation", h: "Checking against metered water use",
      html: "<p>Simulations were compared with DNREC high quality reported water use: 445 field seasons from 14 growers before screening, 259 corn and soybean field seasons on 54 fields after screening (2010 to 2019). Most growers compute use as system run hours times flow rate, which drifts as systems age and wells lose yield.</p><ul><li>Mean reported use was 60,489 m<sup>3</sup> per field season. Scenario 1a was 9.3% below that and 1b 14.9% below. The calendar scenarios were 2 to 3 times higher.</li><li>Scenario 1a fit best: R<sup>2</sup> 0.39, concordance 0.596, lowest MAE and bias. 1b had R<sup>2</sup> 0.34.</li><li>ET based runs tended to under predict large corn fields and slightly over predict soybean.</li><li>Calendar runs over predicted for both crops, most of all on large fields.</li></ul><p>Bottom line: an ET trigger at 50% MAD with a fixed 0.4 inch application is the best simple model of how Delaware growers actually irrigate corn and soybean.</p>",
      calcs: ["meter-depth", "eq-3.1-3.2"], book: ["3.1", "6.4"], tags: ["validation", "metered use", "reported water use"] }
  ],
  tables: [
    { id: "t1", title: "Irrigation scenarios simulated (Table 1)",
      cols: ["Scenario", "Approach", "Trigger", "Amount per application"],
      rows: [
        ["1a", "ET based, constant amount", "SWA below MAD of 50%", "10.16 mm (0.4 in)"],
        ["1b", "ET based, varying amount", "SWA below MAD of 50%", "Enough to bring SWA to 50%"],
        ["2a", "Calendar", "Prescribed by calendar", "10.16 mm (0.4 in)"],
        ["2b", "Calendar with rain gauge", "Prescribed by calendar", "10.16 mm, skipped if rain in the 2 prior days was at least 10.16 mm"]
      ],
      notes: "Brinson et al. 2024, Table 1", calcs: ["eq-6.2-6.5", "checkbook"] },
    { id: "t2", title: "Weekly calendar irrigation schedule for corn and soybean (Figure 2)",
      cols: ["Week (as numbered in Figure 2)", "Corn, mm per week", "Corn, in per week", "Soybean, mm per week", "Soybean, in per week"],
      rows: [
        [4, 30.5, 1.2, 20.3, 0.8], [5, 30.5, 1.2, 30.5, 1.2], [6, 40.7, 1.6, 40.7, 1.6], [7, 40.7, 1.6, 40.7, 1.6],
        [8, 50.8, 2.0, 40.7, 1.6], [9, 50.8, 2.0, 40.7, 1.6], [10, 50.8, 2.0, 40.7, 1.6], [11, 50.8, 2.0, 40.7, 1.6],
        [12, 50.8, 2.0, 40.7, 1.6], [13, 50.8, 2.0, 40.7, 1.6], [14, 40.7, 1.6, 30.5, 1.2], [15, 40.7, 1.6, 30.5, 1.2],
        [16, 30.5, 1.2, 20.3, 0.8]
      ],
      notes: "Values read from the Figure 2 chart data. Season totals 559 mm (22 in) corn and 457 mm (18 in) soybean, per the text. Each weekly amount is a whole number of 10.16 mm (0.4 in) applications. This is a worst case calendar, not a recommendation.", calcs: ["eq-6.26"] },
    { id: "t3", title: "Sensitivity of seasonal irrigation to inputs (2015 season)",
      cols: ["Change", "Effect on irrigation"],
      rows: [
        ["All fields set to high water holding soil (silt or clay)", "31.4% less"],
        ["All fields set to low water holding soil (sandy loam)", "42.4% more"],
        ["All fields soybean", "10.8% less"],
        ["All fields corn", "21.9% more"],
        ["Emergence 2 weeks earlier", "6.1% less"],
        ["Emergence 2 weeks later", "6.8% more"]
      ],
      notes: "Section 3.1", calcs: [] },
    { id: "t4", title: "Mean seasonal irrigation per field season versus reported use (Table 2, n = 259)",
      cols: ["Scenario", "Mean, m3", "Mean, acre-ft", "Std dev, m3", "Std dev, acre-ft"],
      rows: [
        ["Reported (DNREC)", 60489, 49.0, 50534, 41.0],
        ["1a", 54838, 44.5, 38777, 31.4],
        ["1b", 51485, 41.7, 36481, 29.6],
        ["2a", 180560, 146.4, 119872, 97.2],
        ["2b", 126218, 102.3, 83770, 67.9]
      ],
      notes: "Table 2. Acre-ft converted at 1,233.48 m3 per acre-ft.", calcs: ["eq-3.1-3.2"] },
    { id: "t5", title: "Simulated versus reported water use statistics (Table 3)",
      cols: ["Group", "Scenario", "MAE, m3", "MBE, m3", "Pearson r", "Concordance rc"],
      rows: [
        ["All (n=259)", "1a", 24735, 4705, 0.622, 0.596],
        ["All (n=259)", "1b", 25827, 7498, 0.579, 0.538],
        ["All (n=259)", "2a", 100958, -99979, 0.668, 0.258],
        ["All (n=259)", "2b", 58200, -54731, 0.654, 0.398],
        ["Corn (n=168)", "1a", 26555, 11475, 0.679, 0.612],
        ["Corn (n=168)", "1b", 28515, 14847, 0.632, 0.538],
        ["Corn (n=168)", "2a", 106190, -104681, 0.713, 0.290],
        ["Corn (n=168)", "2b", 58828, -54322, 0.705, 0.460],
        ["Soybean (n=91)", "1a", 21374, -7792, 0.468, 0.414],
        ["Soybean (n=91)", "1b", 20866, -6070, 0.471, 0.428],
        ["Soybean (n=91)", "2a", 91300, -91300, 0.356, 0.077],
        ["Soybean (n=91)", "2b", 57041, -55485, 0.350, 0.121]
      ],
      notes: "Table 3. Sign convention as printed: the over predicting calendar scenarios carry negative MBE, so MBE here reads as reported minus simulated.", calcs: [] },
    { id: "t6", title: "Statewide simulated irrigation in the extreme years",
      cols: ["Scenario", "2010 (dry), million m3", "2017 (wet), million m3", "2010, acre-ft", "2017, acre-ft"],
      rows: [
        ["ET based (1a and 1b)", 134.5, 64.3, 109041, 52129],
        ["Calendar (2a)", "over 265", "over 265", "over 214,800", "over 214,800"],
        ["Calendar with rain gauge (2b)", 208.1, 162.4, 168710, 131660]
      ],
      notes: "Section 3.2. 10 year ET based range about 58 (2017) to 134 (2010) million m3. 2017 ET based value is given as 64.3 in one place and about 58 in another in the paper.", calcs: [] }
  ],
  facts: [
    { q: "How much irrigation does a Delaware corn or soybean field get in a season?", a: "An ET based model put most fields at 100 to 200 mm (about 4 to 8 in) per season over 2010 to 2019, up to about 250 mm (10 in) in south central Delaware and as low as 50 mm (2 in) in east central Delaware (Brinson et al. 2024).", tags: ["seasonal irrigation"], calcs: [], book: ["6.4"] },
    { q: "What MAD and application depth best match how Delaware growers irrigate?", a: "A 50% MAD trigger with a fixed 10.16 mm (0.4 in) application (scenario 1a) matched DNREC metered use best, with mean use 9.3% below reported.", tags: ["MAD", "scheduling"], calcs: ["eq-6.2-6.5"], book: ["6.3", "6.4"] },
    { q: "How much more water does a dry year take than a wet year in Delaware?", a: "About twice as much. ET based statewide totals were 134.5 million m3 in dry 2010 and 64.3 million m3 in wet 2017.", tags: ["dry year", "wet year"], calcs: [], book: [] },
    { q: "Which input matters most when modeling irrigation need?", a: "Soil water holding capacity. Low water holding soil raised irrigation 42.4% and high water holding soil cut it 31.4%. Crop changed it by 10.8 to 21.9% and a 2 week emergence shift by about 6%.", tags: ["sensitivity", "AWC"], calcs: ["eq-2.14"], book: ["2.5"] },
    { q: "What root zone depth did the Delaware study use?", a: "The top 0.6 m (about 2 ft) for both corn and soybean, as common regional practice, though roots can reach about 1.8 m.", tags: ["root zone"], calcs: ["eq-2.14", "eq-6.6-6.7"], book: ["6.3"] },
    { q: "How was AWC defined in the Delaware study?", a: "SSURGO field capacity at 0.33 bar minus wilting point at 15 bar, for the soil at the field centroid.", tags: ["AWC", "SSURGO"], calcs: ["eq-2.8"], book: ["2.5", "2.6"] },
    { q: "What is the average growing season rain in Delaware?", a: "596 mm (23.5 in) for April to September, 1981 to 2010, ranging from 364 to 915 mm.", tags: ["rainfall"], calcs: [], book: [] },
    { q: "How much does a calendar schedule over irrigate?", a: "Calendar scenarios gave 2 to 3 times the reported mean (180,560 and 126,218 m3 vs 60,489 m3 per field season). Adding a rain gauge skip rule cut the calendar total by about 30%.", tags: ["calendar scheduling"], calcs: [], book: ["6.4"] },
    { q: "What calendar season totals did UD Extension suggest for corn and soybean?", a: "559 mm (22 in) for corn and 457 mm (18 in) for soybean, used as the calendar scenario totals.", tags: ["calendar scheduling", "corn", "soybean"], calcs: [], book: [] },
    { q: "Does seasonal rain total predict irrigation need?", a: "Not well. Rain timing relative to peak demand matters more. 2018 had well above normal rain and was still fourth highest for irrigation, and 2016 got nearly 30% of its rain in September.", tags: ["rainfall timing"], calcs: [], book: ["6.4"] },
    { q: "How were double crop emergence dates set?", a: "30 days after the full season emergence date, which was the date NASS reported at least 50% emerged.", tags: ["double crop", "emergence"], calcs: [], book: ["4.6"] },
    { q: "How do Delaware growers decide when to irrigate?", a: "Mostly by crop condition and soil feel, with soil moisture sensors a distant third (USDA 2018 survey, cited by Brinson et al. 2024).", tags: ["scheduling practice"], calcs: [], book: ["6.4"] },
    { q: "How do growers report irrigation water use?", a: "Most multiply system run hours by system flow rate, which drifts as systems age and wells lose yield.", tags: ["water measurement"], calcs: ["eq-3.3", "meter-depth"], book: ["3.1"] },
    { q: "How much irrigation water did Delaware withdraw in 2015?", a: "About 427,751 m3 per day (about 113 Mgal/d), second only to industry (USGS 2015, cited by Brinson et al. 2024).", tags: ["withdrawals"], calcs: [], book: [] },
    { q: "What share of Delaware cropland is irrigated?", a: "37.5% of harvested cropland in 2017, after a 22% increase in irrigated area from 2012.", tags: ["irrigated area"], calcs: [], book: [] },
    { q: "Where does ET based modeling miss?", a: "It tends to under predict water use on large corn fields and slightly over predict soybean.", tags: ["validation", "corn", "soybean"], calcs: [], book: [] }
  ]
}]);

window.DE_DOCS = (window.DE_DOCS || []).concat([{
  id: "de-soils",
  title: "Delaware Soils for Irrigation: Kent and Sussex County Agricultural Soil Series",
  short: "Delaware soils (NRCS)",
  org: "USDA Natural Resources Conservation Service (Official Series Descriptions and Web Soil Survey reports)",
  year: 2024,
  url: "https://soilseries.sc.egov.usda.gov/OSD_Docs/E/EVESBORO.html",
  license: "public domain",
  summary: "Drainage class, surface texture, saturated hydraulic conductivity, profile available water and hydrologic group for the main farm soils of Kent and Sussex Counties, taken from NRCS Official Series Descriptions and NRCS Web Soil Survey map unit descriptions printed in Custom Soil Resource Reports for Sussex (2018) and Kent (2024) Counties. Use it to size irrigation amounts, judge leaching risk and set application rates on Delmarva sands and loams.",
  sections: [
    { id: "sources", h: "Where these numbers come from",
      html: "<p>Each value in this page was read from one of these NRCS sources:</p>" +
        "<ul>" +
        "<li><b>Official Series Descriptions (OSD)</b>, soilseries.sc.egov.usda.gov/OSD_Docs/&lt;letter&gt;/&lt;NAME&gt;.html, for taxonomic class, typical pedon surface texture, drainage class, saturated hydraulic conductivity class and permeability class (obsolete), parent material, slope range and major uses. OSDs do not give available water capacity or hydrologic group.</li>" +
        "<li><b>Web Soil Survey map unit descriptions</b> printed in a Custom Soil Resource Report for Sussex County (Lewes area, dated May 16, 2018) and one for Kent County (dated September 22, 2024). These give, for each map unit component: natural drainage class, the Ksat of the most limiting layer in in/hr, available water storage (Kent report: <i>Available water supply, 0 to 60 inches</i>, Sussex report: <i>Available water storage in profile</i>), hydrologic soil group, depth to water table and the typical profile.</li>" +
        "<li>The 1974 <i>Soil Survey of Sussex County, Delaware</i> (Ireland and Matthews, USDA) for older statements on moisture capacity and irrigation response.</li>" +
        "</ul>" +
        "<p>Map unit values belong to the map unit named in the report (for example EvB, Evesboro loamy sand, 0 to 5 percent slopes). Always confirm the map unit on your own field in Web Soil Survey, because properties vary by phase and by survey update.</p>",
      calcs: [], book: ["2.6", "2.7"], tags: ["soil survey", "Web Soil Survey", "OSD", "Sussex", "Kent"] },

    { id: "wss-howto", h: "Getting the soil data for a field (Web Soil Survey)",
      html: "<p>The University of Delaware fact sheet <i>Using the Web Soil Survey</i> (Shober and Rothweiler, revised June 2025) gives this procedure:</p>" +
        "<ol>" +
        "<li>Open Web Soil Survey and click Start WSS.</li>" +
        "<li>Set an Area of Interest (AOI): a whole county through the Soil Survey Area tab, or a field by address, then draw a rectangle or custom polygon. Very small AOIs can make the map less accurate.</li>" +
        "<li>Soil Map tab: the legend lists each map unit, its acres and its percent of the AOI.</li>" +
        "<li>Soil Data Explorer, Land Classification, Irrigated Capability Class: classes run from 1 (fewest limitations) to 8.</li>" +
        "<li>Soil Data Explorer, Water Features, Depth to Water Table: estimates the seasonal high water table.</li>" +
        "<li>Soil Reports, AOI Inventory, Map Unit Descriptions: gives drainage class, Ksat, available water supply 0 to 60 in, hydrologic group and typical profile for each component.</li>" +
        "<li>Use Printable Version, or add several maps to the Shopping Cart, to save a PDF.</li>" +
        "</ol>" +
        "<p>The fact sheet itself gives no soil property values. Physical properties by layer (AWC in/in, Ksat by layer) are in Soil Data Explorer, Soil Properties and Qualities, or the Physical Soil Properties report.</p>",
      calcs: [], book: ["2.6"], tags: ["Web Soil Survey", "AOI", "irrigated capability class", "water table"] },

    { id: "sands", h: "Excessively and somewhat excessively drained sands: Evesboro, Galestown, Rumford",
      html: "<p>These are the droughtiest farm soils in Sussex County and respond most to irrigation.</p>" +
        "<ul>" +
        "<li><b>Evesboro</b>: Mesic, coated Lamellic Quartzipsamments. Excessively drained. Saturated hydraulic conductivity high in the subsoil and high to very high in the substratum (permeability rapid in the subsoil and moderately rapid to very rapid in the substratum). Sandy marine and eolian deposits about 1.0 to 6.0 m thick, slopes 0 to 40 percent. OSD: \"Where irrigated, Evesboro soils are most commonly used for production of peaches, grapes,\" and other fruit and vegetable crops. Web Soil Survey (EvB and EvD, Sussex): Ksat of most limiting layer 5.95 to 99.90 in/hr, available water storage in profile about 3.9 in (Low), hydrologic group A, water table more than 80 in. Typical profile: Ap 0 to 4 in loamy sand, E 4 to 16 in loamy sand, Bw 16 to 39 in loamy sand, C 39 to 80 in sand.</li>" +
        "<li><b>Galestown</b>: Siliceous, mesic Psammentic Hapludults. Somewhat excessively drained. Saturated hydraulic conductivity high and very high (permeability rapid or very rapid). Sandy eolian and/or fluviomarine sediments, slopes 0 to 60 percent. Used for woodland and cropland.</li>" +
        "<li><b>Rumford</b>: Coarse-loamy, siliceous, subactive, thermic Typic Hapludults. Well drained or somewhat excessively drained, permeability moderately rapid, surface runoff very low to low. Marine deposits. Cultivated for corn, soybeans, small grain and hay. The 1974 Sussex survey describes Rumford soils as somewhat droughty.</li>" +
        "</ul>" +
        "<p>With profile storage near 4 in and Ksat in the tens of in/hr, light frequent irrigations are needed and any amount above the root zone deficit drains below the roots.</p>",
      calcs: ["eq-2.14", "wetting-depth", "tab-2.3"], book: ["2.5", "2.9", "6.3"], tags: ["Evesboro", "Galestown", "Rumford", "sand", "droughty", "leaching"] },

    { id: "welldrained", h: "Well drained loamy soils: Sassafras, Downer, Fort Mott, Ingleside, Greenwich, Matapeake",
      html: "<ul>" +
        "<li><b>Sassafras</b>: Fine-loamy, siliceous, semiactive, mesic Typic Hapludults. Well drained, very deep internal free water, runoff negligible to medium. Ksat moderately high to high (permeability moderate or moderately slow). Loamy fluviomarine sediments, slopes 0 to 45 percent. Typical Ap sandy loam. Used mainly for general crops, truck crops, pasture and fruit.</li>" +
        "<li><b>Downer</b>: Coarse-loamy, siliceous, semiactive, mesic Typic Hapludults. Well drained, Ksat moderately high to high (permeability moderate or moderately rapid). Loamy fluviomarine deposits, slopes 0 to 30 percent. Web Soil Survey (DoA and DodB, Northern Tidewater Area, Sussex): Ksat 0.60 to 6.00 in/hr, available water storage about 6.4 in (Moderate), group A, water table more than 80 in. Profile: Ap 0 to 10 in sandy loam, BE 10 to 16 in loamy sand, Bt 16 to 28 in sandy loam, C1 28 to 48 in loamy sand, C2 48 to 80 in sand.</li>" +
        "<li><b>Fort Mott</b>: Loamy, siliceous, semiactive, mesic Arenic Hapludults. Well drained, Ksat moderately high or high (permeability moderate or moderately rapid). Sandy eolian and/or fluviomarine deposits, slopes 0 to 30 percent. Used for field crops, vegetables, flowers and some tree fruits. Web Soil Survey (FmB, Sussex): Ksat 1.28 to 5.95 in/hr, available water storage about 5.3 in (Low), group A, water table more than 80 in. Profile: Ap 0 to 10 in loamy sand, E 10 to 24 in loamy sand, Bt 24 to 36 in sandy loam, C 36 to 80 in loamy sand.</li>" +
        "<li><b>Ingleside</b>: Coarse-loamy, siliceous, semiactive, mesic Typic Hapludults. Well drained. Permeability moderately rapid in the solum, moderately rapid to rapid in the C horizon and moderately slow to slow in the 2C horizon. Stratified loamy alluvial and marine sediments, slopes 0 to 15 percent. Mostly cleared for corn, barley, wheat and soybeans, and some areas are irrigated.</li>" +
        "<li><b>Greenwich</b>: Coarse-loamy, mixed, semiactive, mesic Typic Hapludults. Well drained. Ksat moderately high in the upper subsoil and high or very high in the lower subsoil and substratum. Silty eolian and alluvial deposits over loamy and sandy sediments, slopes 0 to 5 percent. Web Soil Survey (GrA and GrB, Sussex): Ksat 0.50 to 1.98 in/hr, available water storage about 5.9 in (Low), group B, water table more than 80 in. Profile: Ap 0 to 10 in loam, Bt1 10 to 16 in loam, Bt2 16 to 22 in loam, 2Bt 22 to 29 in sandy loam, 2CB 29 to 46 in loamy sand, 2C 46 to 80 in coarse sand.</li>" +
        "<li><b>Matapeake</b>: Fine-silty, mixed, semiactive, mesic Typic Hapludults. Well drained, permeability moderate to moderately slow. Silty eolian sediments over coarser fluvial or marine sediments, slopes 0 to 30 percent. Surface silt loam. \"Almost all areas of Matapeake soils are cultivated.\"</li>" +
        "</ul>",
      calcs: ["eq-2.14", "tab-2.3", "extraction-4321"], book: ["2.5", "2.7", "6.3"], tags: ["Sassafras", "Downer", "Fort Mott", "Ingleside", "Greenwich", "Matapeake", "well drained"] },

    { id: "mwd", h: "Moderately well drained soils: Hammonton, Woodstown, Pepperbox",
      html: "<ul>" +
        "<li><b>Hammonton</b>: Coarse-loamy, siliceous, semiactive, mesic Aquic Hapludults. Moderately well drained. Ksat moderately high or high (permeability moderate or moderately rapid). Loamy fluviomarine sediments, slopes 0 to 15 percent. Used for fruit, vegetables, row crops and nursery stock. Web Soil Survey (HnA, Kent County report): Ksat 1.98 to 5.95 in/hr, available water supply 0 to 60 in about 5.4 in (Low), group B. Profile: Ap 0 to 11 in sandy loam, Bt 11 to 30 in sandy loam, Cg 30 to 80 in sand.</li>" +
        "<li><b>Woodstown</b>: Fine-loamy, mixed, active, mesic Aquic Hapludults. Moderately well drained, permeability moderate. Sandy marine and old alluvial sediments, slopes 0 to 30 percent. Used for corn, soybeans, small grains, hay and pasture. OSD tabular data: apparent water table about 1.5 to 3.5 ft (January to April). Web Soil Survey (WocA and WocB, Mid-Atlantic Coastal Plain, Kent): Ksat 0.57 to 1.98 in/hr, available water supply 0 to 60 in about 8.3 in (Moderate), group C. Profile: Ap 0 to 7 in loam, E 7 to 11 in sandy loam, Bt 11 to 29 in sandy loam, BCg 29 to 45 in fine sandy loam, Cg 45 to 80 in loamy sand.</li>" +
        "<li><b>Pepperbox</b>: Loamy, mixed, semiactive, mesic Aquic Arenic Paleudults. Moderately well drained. Permeability moderately rapid in the A and E horizons, moderate in the Bt horizon and slow in the 2Bt horizons and substratum. OSD tabular permeability: 0 to 10 in loamy sand 2.0 to 6.0, 10 to 25 in loamy sand 2.0 to 6.0, 25 to 37 in sandy loam to loam 0.6 to 2.0, 37 to 80 in sandy clay loam to sandy clay 0.06 to 0.2. Slopes 0 to 5 percent. Used for corn, soybeans, small grain and some vegetables.</li>" +
        "</ul>" +
        "<p>The aquic soils carry a seasonal water table in late winter and spring. In wet springs they can supply water from below and delay the first irrigation.</p>",
      calcs: ["eq-2.14", "tab-2.3"], book: ["2.5", "6.3"], tags: ["Hammonton", "Woodstown", "Pepperbox", "moderately well drained", "water table"] },

    { id: "wet", h: "Somewhat poorly to very poorly drained soils: Klej, Fallsington, Hurlock, Pocomoke, Mullica, Elkton, Othello, Askecksy",
      html: "<p>Cropped only where drained. Dual hydrologic groups (A/D, B/D, C/D) mean the first letter applies to drained areas and D to undrained areas.</p>" +
        "<ul>" +
        "<li><b>Klej</b>: Mesic, coated Aquic Quartzipsamments. Somewhat poorly drained, permeability rapid or very rapid. Sandy fluviomarine sediments, slopes 0 to 5 percent. Web Soil Survey (KsA, Sussex): Ksat 0.57 to 19.98 in/hr, available water storage about 4.4 in (Low), group A/D, water table about 10 to 20 in.</li>" +
        "<li><b>Fallsington</b>: Fine-loamy, mixed, active, mesic Typic Endoaquults. Poorly drained, Ksat moderately high or high (permeability moderate or moderately slow). Loamy fluviomarine sediments, slopes 0 to 5 percent. Web Soil Survey (Fallsington loams, 0 to 2 percent slopes, in both county reports): Ksat 0.01 to 1.98 in/hr, group C/D. Undrained component about 8.8 in available water with water table 0 to 10 in, drained component about 8.2 in with water table 10 to 20 in.</li>" +
        "<li><b>Hurlock</b>: Coarse-loamy, siliceous, semiactive, mesic Typic Endoaquults. Poorly drained. Permeability moderately rapid in the solum, moderately rapid to rapid in the C horizon and moderately slow to slow in the 2C horizon. Slopes 0 to 2 percent. Mostly wooded, cleared areas in corn, small grain and soybeans.</li>" +
        "<li><b>Pocomoke</b>: Coarse-loamy, siliceous, active, thermic Typic Umbraquults. Very poorly drained, moderately permeable. OSD tabular permeability 0.6 to 6.0 and 2.0 to 6.0, Btg horizon 0.6 to 2.0. Slopes 0 to 2 percent. Drained areas are used for corn, soybeans, pasture and truck crops.</li>" +
        "<li><b>Mullica</b>: Coarse-loamy, siliceous, semiactive, acid, mesic Typic Humaquepts. Very poorly drained, Ksat moderately high to very high. Slopes 0 to 2 percent. Mostly woodland, drained areas used for truck crops, blueberries and pasture.</li>" +
        "<li><b>Elkton</b>: Fine-silty, mixed, active, mesic Typic Endoaquults. Poorly drained, permeability slow in the solum and moderately slow to rapid in the substratum. Silt loam surface. Slopes 0 to 2 percent.</li>" +
        "<li><b>Othello</b>: Fine-silty, mixed, active, mesic Typic Endoaquults. Poorly drained, Ksat moderately high in the solum, high and very high in the 2Cg horizon. Silt loam surface. Slopes 0 to 5 percent.</li>" +
        "<li><b>Askecksy</b>: Siliceous, mesic Typic Psammaquents. Poorly drained, permeability rapid (OSD table 6.0 to 20, and 6.0 to 25 at 51 to 72 in). Slopes 0 to 2 percent. Some areas cleared for corn, soybeans and small grain.</li>" +
        "</ul>",
      calcs: [], book: ["2.5", "6.3"], tags: ["Klej", "Fallsington", "Hurlock", "Pocomoke", "Mullica", "Elkton", "Othello", "Askecksy", "drainage", "hydrologic group"] },

    { id: "reading-wss", h: "Reading the Web Soil Survey numbers for irrigation",
      html: "<ul>" +
        "<li><b>Ksat of the most limiting layer</b> is the range for the slowest layer in the profile, in in/hr. Classes used: moderately high to high 0.60 to 6.00 or 0.57 to 1.98, high 1.98 to 5.95, high to very high 5.95 to 99.90 in/hr. Compare the sprinkler or pivot application rate with the surface layer, not only this value.</li>" +
        "<li><b>Available water supply, 0 to 60 inches</b> (or available water storage in profile) is total plant available water in the profile. Classes in these reports: Very low (about 3.0 in), Low (3.9 to 5.9 in), Moderate (6.4 to 8.8 in), High (10.9 to 11.3 in). The root zone of an annual crop holds only the part of this within rooting depth.</li>" +
        "<li><b>Hydrologic soil group</b> A to D describes runoff potential. Dual groups such as A/D apply the first letter when drained.</li>" +
        "<li><b>Depth to water table</b> in the reports is given in inches in the map unit description and in centimeters in the summary table (for example Klej 30 cm, Fallsington 13 cm, Evesboro more than 200 cm).</li>" +
        "</ul>",
      calcs: ["eq-2.14", "tab-11.4"], book: ["2.5", "2.8", "11.3", "13.3"], tags: ["Ksat", "available water supply", "hydrologic group", "application rate"] },

    { id: "survey1974", h: "Notes from the 1974 Sussex County soil survey",
      html: "<p>The 1974 <i>Soil Survey of Sussex County, Delaware</i> (USDA) describes Evesboro soils as having \"available moisture capacity and natural fertility\" that \"are low to very low\", says irrigation is needed in dry seasons and that crops respond well to it. The loamy substratum phase of Evesboro has a finer layer at depth that holds moisture for deep rooted crops. Rumford soils are described as somewhat droughty. Fallsington has moderate to high available moisture capacity and moderate permeability. For Berryland, very low available moisture capacity is a severe limitation and sprinkler irrigation is recommended for high value crops.</p>" +
        "<p>Series concepts and map unit names have changed since 1974, so use current Web Soil Survey data for numbers.</p>",
      calcs: [], book: ["2.5"], tags: ["Evesboro", "Rumford", "Fallsington", "Berryland", "1974 survey"] },

    { id: "gaps", h: "What these sources do not give",
      html: "<ul>" +
        "<li>Layer by layer AWC in in/in was not in any source read for this page. OSDs do not list it, and the Custom Soil Resource Reports read give only profile totals. Get layer AWC from Web Soil Survey (Soil Properties and Qualities, Available Water Capacity, or the Physical Soil Properties report).</li>" +
        "<li>Root zone AWC for 0 to 40 in was not given. Profile values are 0 to 60 in (Kent report) or whole profile (Sussex report).</li>" +
        "<li>No NRCS irrigation intake family assignment for these series was found in the sources read.</li>" +
        "<li>Rumford, Galestown, Sassafras, Matapeake, Hurlock, Pocomoke, Mullica, Elkton and Othello: no Delaware map unit report with numeric Ksat, available water or hydrologic group was found. Values here are OSD classes only.</li>" +
        "</ul>",
      calcs: [], book: ["2.6"], tags: ["data gaps", "AWC", "intake family"] }
  ],
  tables: [
    { id: "soils", title: "Main agricultural soil series of Kent and Sussex Counties",
      cols: ["Series", "Typical surface texture", "Drainage class", "AWC (in/in, range)", "Profile available water (in) (0 to 60 in or whole profile, WSS)", "Permeability or Ksat", "Hydrologic group", "Source"],
      rows: [
        ["Evesboro", "loamy sand (EvB, EvD), OSD pedon sand", "Excessively drained", "not given", "about 3.9", "Ksat high subsoil, high to very high substratum, WSS 5.95 to 99.90 in/hr", "A", "OSD 2006, WSS Sussex 2018"],
        ["Galestown", "loamy sand", "Somewhat excessively drained", "not given", "not given", "Ksat high and very high (rapid or very rapid)", "not given", "OSD 2015"],
        ["Rumford", "sandy loam", "Well or somewhat excessively drained", "not given", "not given", "Moderately rapid", "not given", "OSD 2004"],
        ["Fort Mott", "loamy sand", "Well drained", "not given", "about 5.3", "Ksat moderately high or high, WSS 1.28 to 5.95 in/hr", "A", "OSD 2015, WSS Sussex 2018"],
        ["Sassafras", "sandy loam", "Well drained", "not given", "not given", "Ksat moderately high to high (moderate or moderately slow)", "not given", "OSD 2013"],
        ["Downer", "sandy loam (DoA, DodB), OSD pedon loamy sand", "Well drained", "not given", "about 6.4", "Ksat moderately high to high, WSS 0.60 to 6.00 in/hr", "A", "OSD 2012, WSS Sussex 2018"],
        ["Ingleside", "sandy loam (OSD), loamy sand (IeA)", "Well drained", "not given", "not given", "Moderately rapid solum, moderately rapid to rapid C, moderately slow to slow 2C", "C (site plan legend)", "OSD 2015, Sussex County site plan legend"],
        ["Greenwich", "loam", "Well drained", "not given", "about 5.9", "Ksat moderately high upper subsoil, high or very high below, WSS 0.50 to 1.98 in/hr", "B", "OSD 2015, WSS Sussex 2018"],
        ["Matapeake", "silt loam", "Well drained", "not given", "not given", "Moderate to moderately slow (OSD table 0 to 11 in: 0.6 to 2.0)", "not given", "OSD 2002"],
        ["Hammonton", "sandy loam (HnA), OSD pedon loamy sand", "Moderately well drained", "not given", "about 5.4 (0 to 60 in)", "Ksat moderately high or high, WSS 1.98 to 5.95 in/hr", "B", "OSD 2021, WSS Kent 2024"],
        ["Woodstown", "loam (WocA), sandy loam (OSD, WddA)", "Moderately well drained", "not given", "about 8.3 (0 to 60 in)", "Moderate, WSS 0.57 to 1.98 in/hr", "C", "OSD 2015, WSS Kent 2024"],
        ["Pepperbox", "loamy sand", "Moderately well drained", "not given", "not given", "Moderately rapid A and E, moderate Bt, slow 2Bt (OSD table 2.0 to 6.0 down to 0.06 to 0.2)", "A/D (PpB, site plan legend)", "OSD 2005, Sussex County site plan legend"],
        ["Klej", "loamy sand", "Somewhat poorly drained", "not given", "about 4.4", "Rapid or very rapid, WSS 0.57 to 19.98 in/hr", "A/D", "OSD 2015, WSS Sussex 2018"],
        ["Fallsington", "loam (Fallsington loams), OSD pedon sandy loam", "Poorly drained", "not given", "about 8.8 undrained, 8.2 drained (0 to 60 in)", "Ksat moderately high or high, WSS 0.01 to 1.98 in/hr", "C/D", "OSD 2015, WSS Sussex 2018 and Kent 2024"],
        ["Hurlock", "sandy loam", "Poorly drained", "not given", "not given", "Moderately rapid solum, moderately rapid to rapid C, moderately slow to slow 2C", "not given", "OSD 2015"],
        ["Pocomoke", "fine sandy loam", "Very poorly drained", "not given", "not given", "Moderate (OSD table 0.6 to 6.0, Btg 0.6 to 2.0)", "not given", "OSD 2007"],
        ["Mullica", "sandy loam", "Very poorly drained", "not given", "not given", "Ksat moderately high to very high", "not given", "OSD 2006"],
        ["Elkton", "silt loam", "Poorly drained", "not given", "not given", "Slow solum, moderately slow to rapid substratum", "not given", "OSD 2015"],
        ["Othello", "silt loam", "Poorly drained", "not given", "not given", "Ksat moderately high solum, high and very high 2Cg", "not given", "OSD 2010"],
        ["Askecksy", "loamy sand", "Poorly drained", "not given", "not given", "Rapid (OSD table 6.0 to 20)", "A/D (site plan legend)", "OSD 2015, DE PLUS 2021-04-03 site plan legend"]
      ],
      notes: "OSD = NRCS Official Series Description (revision year shown). WSS = Web Soil Survey map unit description in a Custom Soil Resource Report (Sussex County, Lewes area, May 16, 2018, and Kent County, September 22, 2024). Profile available water: Kent report gives Available water supply, 0 to 60 inches, Sussex report gives Available water storage in profile. Layer AWC in in/in and 0 to 40 in root zone AWC were not in any source read. OSD tabular permeability values print no unit (in/hr in the old OSD convention). Hydrologic groups marked site plan legend come from soil legends on Delaware site plans (Sussex County public access document 129362 and Delaware PLUS 2021-04-03), not from an NRCS report, so verify in Web Soil Survey. No NRCS intake family was found for any series.",
      calcs: ["tab-2.3", "eq-2.14"] },

    { id: "wss-units", title: "Web Soil Survey map unit data, Sussex (2018) and Kent (2024) reports",
      cols: ["Map unit", "Report", "Drainage class", "Ksat, most limiting layer (in/hr)", "Available water (in)", "Hydrologic group", "Depth to water table", "Typical profile"],
      rows: [
        ["EvB, EvD Evesboro loamy sand, 0 to 5 and 5 to 15 percent slopes", "Sussex 2018", "Excessively drained", "5.95 to 99.90", "about 3.9 (Low)", "A", "more than 80 in", "Ap 0 to 4 loamy sand, E 4 to 16 loamy sand, Bw 16 to 39 loamy sand, C 39 to 80 sand"],
        ["DoA, DodB Downer sandy loam, 0 to 2 and 2 to 5 percent slopes, Northern Tidewater Area", "Sussex 2018", "Well drained", "0.60 to 6.00", "about 6.4 (Moderate)", "A", "more than 80 in", "Ap 0 to 10 sandy loam, BE 10 to 16 loamy sand, Bt 16 to 28 sandy loam, C1 28 to 48 loamy sand, C2 48 to 80 sand"],
        ["FmB Fort Mott loamy sand, 2 to 5 percent slopes", "Sussex 2018", "Well drained", "1.28 to 5.95", "about 5.3 (Low)", "A", "more than 80 in", "Ap 0 to 10 loamy sand, E 10 to 24 loamy sand, Bt 24 to 36 sandy loam, C 36 to 80 loamy sand"],
        ["GrA, GrB Greenwich loam, 0 to 2 and 2 to 5 percent slopes", "Sussex 2018", "Well drained", "0.50 to 1.98", "about 5.9 (Low)", "B", "more than 80 in", "Ap 0 to 10 loam, Bt1 10 to 16 loam, Bt2 16 to 22 loam, 2Bt 22 to 29 sandy loam, 2CB 29 to 46 loamy sand, 2C 46 to 80 coarse sand"],
        ["KsA Klej loamy sand, 0 to 2 percent slopes", "Sussex 2018", "Somewhat poorly drained", "0.57 to 19.98", "about 4.4 (Low)", "A/D", "about 10 to 20 in", "A 0 to 7 loamy sand, E 7 to 14 loamy sand, Bw 14 to 20 loamy sand, C 20 to 62 loamy sand, Cg 62 to 80 sand"],
        ["FgdA Fallsington loams, 0 to 2 percent slopes, Northern Tidewater Area (undrained 38 percent)", "Sussex 2018", "Poorly drained", "0.01 to 1.98", "about 8.8 (Moderate)", "C/D", "about 0 to 10 in", "Oe 0 to 2 mucky peat, A 2 to 10 loam, Btg 10 to 32 sandy clay loam, BCg 32 to 39 loamy sand, Cg1 39 to 46 sandy clay loam, Cg2 46 to 80 sand"],
        ["FgdA Fallsington loams (drained 37 percent)", "Sussex 2018", "Poorly drained", "0.01 to 1.98", "about 8.2 (Moderate)", "C/D", "about 10 to 20 in", "Ap 0 to 10 loam, Btg 10 to 32 sandy clay loam, BCg 32 to 39 loamy sand, Cg1 39 to 46 sandy clay loam, Cg2 46 to 80 sand"],
        ["HnA Hammonton sandy loam, 0 to 2 percent slopes (80 percent)", "Kent 2024", "Moderately well drained", "1.98 to 5.95", "about 5.4, 0 to 60 in (Low)", "B", "not given", "Ap 0 to 11 sandy loam, Bt 11 to 30 sandy loam, Cg 30 to 80 sand"],
        ["WocA, WocB Woodstown loam, 0 to 2 and 2 to 5 percent slopes, Mid-Atlantic Coastal Plain (80 percent)", "Kent 2024", "Moderately well drained", "0.57 to 1.98", "about 8.3, 0 to 60 in (Moderate)", "C", "not given", "Ap 0 to 7 loam, E 7 to 11 sandy loam, Bt 11 to 29 sandy loam, BCg 29 to 45 fine sandy loam, Cg 45 to 80 loamy sand"],
        ["FgcA Fallsington loams, 0 to 2 percent slopes (undrained 38 percent / drained 37 percent)", "Kent 2024", "Poorly drained", "0.01 to 1.98", "about 8.8 undrained, 8.2 drained, 0 to 60 in", "C/D", "not given", "same layers as FgdA"],
        ["CoA Corsica mucky loam, 0 to 2 percent slopes (undrained 55 percent / drained 25 percent)", "Kent 2024", "Very poorly drained", "0.06 to 0.57", "about 11.3 undrained, 10.9 drained, 0 to 60 in (High)", "B/D", "not given", "A 2 to 12 mucky loam, BEg 12 to 18 sandy loam, Btg 18 to 40 sandy clay loam, BCg 40 to 48 sandy loam, 2Cg 48 to 80 clay loam"],
        ["Sp Saltpond mucky sand, very frequently flooded, tidal", "Sussex 2018", "Poorly drained", "5.95 to 19.98", "about 3.0 (Very low)", "A/D", "about 0 to 10 in", "A 0 to 4 mucky sand, Cg1 4 to 35 sand, Cg2 35 to 52 coarse sand, Cg3 52 to 71 sand"]
      ],
      notes: "Custom Soil Resource Report for Sussex County, Delaware (Lewes area, May 16, 2018), https://www.ci.lewes.de.us/DocumentCenter/View/1684/Showfield-Websoil-Survey, and Custom Soil Resource Report for Kent County, Delaware (September 22, 2024), https://documents.dnrec.delaware.gov/Admin/Public-Notices/CCE20240367/Soil-Report.pdf. Depths in inches.",
      calcs: ["eq-2.14", "tab-11.4"] }
  ],
  facts: [
    { q: "How much plant available water does Evesboro loamy sand hold?", a: "About 3.9 in in the whole profile (Low), with Ksat of the most limiting layer 5.95 to 99.90 in/hr and hydrologic group A (Web Soil Survey, EvB and EvD, Sussex County).", tags: ["Evesboro", "AWC"], calcs: ["eq-2.14"], book: ["2.5"] },
    { q: "What drainage class is Evesboro?", a: "Excessively drained. Saturated hydraulic conductivity is high in the subsoil and high to very high in the substratum (NRCS OSD).", tags: ["Evesboro", "drainage"], calcs: [], book: ["2.8"] },
    { q: "What crops are grown on irrigated Evesboro?", a: "The OSD says that where irrigated, Evesboro soils are most commonly used for peaches, grapes and other fruit and vegetable crops.", tags: ["Evesboro", "crops"], calcs: [], book: [] },
    { q: "Available water of Fort Mott loamy sand?", a: "About 5.3 in in the profile (Low), Ksat 1.28 to 5.95 in/hr, hydrologic group A, water table deeper than 80 in (WSS, FmB, Sussex).", tags: ["Fort Mott", "AWC"], calcs: ["eq-2.14"], book: ["2.5"] },
    { q: "Available water of Downer sandy loam?", a: "About 6.4 in (Moderate), Ksat 0.60 to 6.00 in/hr, hydrologic group A (WSS, DoA and DodB, Northern Tidewater Area, Sussex).", tags: ["Downer", "AWC"], calcs: ["eq-2.14"], book: ["2.5"] },
    { q: "Available water of Greenwich loam?", a: "About 5.9 in (Low), Ksat 0.50 to 1.98 in/hr, hydrologic group B. The profile turns to loamy sand at 29 in and coarse sand at 46 in (WSS, GrA and GrB, Sussex).", tags: ["Greenwich", "AWC"], calcs: ["eq-2.14"], book: ["2.5"] },
    { q: "Available water of Hammonton sandy loam in Kent County?", a: "About 5.4 in in the 0 to 60 in depth (Low), Ksat 1.98 to 5.95 in/hr, hydrologic group B (WSS, HnA, Kent 2024).", tags: ["Hammonton", "AWC"], calcs: ["eq-2.14"], book: ["2.5"] },
    { q: "Available water of Woodstown loam?", a: "About 8.3 in in 0 to 60 in (Moderate), Ksat 0.57 to 1.98 in/hr, hydrologic group C (WSS, WocA and WocB, Kent 2024).", tags: ["Woodstown", "AWC"], calcs: ["eq-2.14"], book: ["2.5"] },
    { q: "What hydrologic group is Fallsington?", a: "C/D. Fallsington loams have Ksat 0.01 to 1.98 in/hr and about 8.8 in (undrained) or 8.2 in (drained) available water in 0 to 60 in. The water table is about 0 to 10 in undrained and 10 to 20 in drained (WSS).", tags: ["Fallsington", "hydrologic group", "drainage"], calcs: [], book: ["2.5"] },
    { q: "Is Klej a wet soil?", a: "Klej is somewhat poorly drained, with a water table at about 10 to 20 in and hydrologic group A/D. It holds about 4.4 in of available water and has Ksat 0.57 to 19.98 in/hr (WSS, KsA, Sussex).", tags: ["Klej", "water table"], calcs: [], book: ["2.5"] },
    { q: "What does a dual hydrologic group like A/D mean?", a: "The first letter applies to drained areas and D to undrained areas. Klej, Askecksy and Saltpond are A/D, Fallsington is C/D, Corsica is B/D.", tags: ["hydrologic group"], calcs: [], book: [] },
    { q: "What is Sassafras soil?", a: "Fine-loamy, siliceous, semiactive, mesic Typic Hapludults. Well drained, sandy loam surface, Ksat moderately high to high, on loamy fluviomarine sediments (NRCS OSD).", tags: ["Sassafras"], calcs: [], book: [] },
    { q: "Which Delaware soil series are silty?", a: "Matapeake (well drained), Elkton and Othello (both poorly drained) have silt loam surfaces and fine-silty classes (NRCS OSDs).", tags: ["Matapeake", "Elkton", "Othello", "texture"], calcs: ["tab-2.3"], book: ["2.7"] },
    { q: "Where do I find layer AWC for a Delaware field?", a: "In Web Soil Survey, Soil Data Explorer, Soil Properties and Qualities, Available Water Capacity, or the Physical Soil Properties report. OSDs and the map unit descriptions read here give no layer AWC.", tags: ["Web Soil Survey", "AWC"], calcs: [], book: ["2.6"] },
    { q: "How do I check irrigated capability class in Web Soil Survey?", a: "Soil Data Explorer, Land Classification, Irrigated Capability Class, View Rating. Classes run from 1 (fewest limitations) to 8 (UD fact sheet Using the Web Soil Survey, 2025).", tags: ["Web Soil Survey", "capability class"], calcs: [], book: [] },
    { q: "What did the 1974 Sussex soil survey say about Evesboro?", a: "Available moisture capacity and natural fertility are low to very low, irrigation is needed in dry seasons and crops respond well to it.", tags: ["Evesboro", "1974 survey"], calcs: [], book: ["2.5"] },
    { q: "Is there an NRCS intake family for Delaware soils in these sources?", a: "No. None of the OSDs or map unit reports read assign an irrigation intake family.", tags: ["intake family"], calcs: [], book: ["2.8"] }
  ]
}]);

window.DE_DOCS = (window.DE_DOCS || []).concat([{
  id: "deos-dims",
  title: "DEOS weather network and the Delaware Irrigation Management System (DIMS)",
  short: "DEOS and DIMS",
  org: "University of Delaware, Center for Environmental Monitoring and Analysis (CEMA) and Cooperative Extension",
  year: 2024,
  url: "https://sites.udel.edu/weeklycropupdate/?p=12075",
  license: "summarized",
  summary: "Summary of the University of Delaware articles that describe the Delaware Environmental Observing System (DEOS) weather network and DIMS, the free web checkbook scheduler that runs on DEOS reference ET. A Delaware irrigation specialist uses it to set growers up on ET scheduling, to read station RefET, and to explain what DIMS does and does not account for. Sources: Brinson (Weekly Crop Update, 15 June 2018 and 3 April 2020), Adkins (UD CANR News, 16 June 2021, and Weekly Crop Update, 28 June 2024), and Brinson, DeLiberty and Leathers (2024) for the ET method.",
  sections: [
    { id: "network", h: "The DEOS weather network",
      html: "<p>DEOS is a statewide mesonet run by the University of Delaware since 2004. Brinson (2020) describes more than 40 stations across Delaware. Adkins (2021) calls it the densest mesonet in the US and says its Ag Weather Summary covers 42 stations with records back to 2004. Brinson et al. (2024) give the density as about one station per 120 km<sup>2</sup> (about 46 mi<sup>2</sup>).</p><ul><li>Each station records air temperature, relative humidity, wind, solar radiation and precipitation every 5 minutes.</li><li>Some stations also record soil moisture and soil temperature at 2 to 5 inches deep.</li><li>Daily rainfall comes from 5 minute totals of tipping bucket gauges.</li><li>There are no DEOS stations in Maryland. Adkins (2021) says the nearest station is accurate enough across Delmarva for ET, but not for rainfall, which varies too much over short distances.</li></ul><p>Main pages: deos.udel.edu (data and station summaries) and dims.cema.udel.edu (DIMS).</p>",
      calcs: [], book: ["4.8"], tags: ["DEOS", "mesonet", "weather station", "Delaware", "rain gauge"] },
    { id: "refet", h: "How reference ET is computed",
      html: "<p>DEOS computes daily reference evapotranspiration (RefET, ET<sub>o</sub>) at each station with the FAO Penman-Monteith equation for a grass reference surface (FAO-56, Allen et al. 1998), as stated by Brinson, DeLiberty and Leathers (2024). This is the same short grass reference as the ASCE daily equation in the book.</p><p>The extension articles describe RefET as the water use of a well maintained grass surface and a good proxy for crops. To get crop water use, an ET scheduler multiplies RefET by a crop coefficient for the crop type and growth stage (ET<sub>c</sub> = K<sub>c</sub> x ET<sub>o</sub>).</p><p>The Ag Weather Summary page gives, by station and month: daily RefET, growing degree days (base 50 F), and at some stations volumetric water content and soil temperature.</p><p>Field reading of RefET: long runs of RefET at 0.2 to 0.3 inches per day with little or no rain will stress dryland crops (Brinson 2020).</p>",
      calcs: ["eto-daily", "eq-4.4", "eq-4.2-4.7", "eq-4.12-p71"], book: ["4.5", "4.6"], tags: ["reference ET", "Penman-Monteith", "grass reference", "RefET", "growing degree days"] },
    { id: "dims-model", h: "What DIMS does: a daily soil water balance per field",
      html: "<p>DIMS (Delaware Irrigation Management System) is a free web checkbook scheduler built by CEMA at the University of Delaware. It has been available since 2011 and was first funded by USDA NRCS to give EQIP participants an ET based irrigation tool.</p><ul><li>For each field it uses daily weather from the nearest DEOS stations to compute daily reference ET and rainfall for that field.</li><li>It then tracks root zone soil water every day so the field stays above the managed allowable depletion.</li><li>Soil texture is pulled automatically from USDA soils data. The user can change the soil if the field holds more or less water than the default.</li><li>It uses National Weather Service forecasts to predict water use up to 5 days ahead, and lets the user test irrigation amounts against that forecast.</li><li>The number of fields per account is unlimited.</li></ul><p>The published articles do not list the crop coefficient values or root depths DIMS uses. Brinson et al. (2024) report that the most common settings across DIMS fields since launch were a MAD of 50% and an irrigation amount of 10.16 mm (0.4 inch).</p>",
      calcs: ["checkbook", "eq-6.18-6.25", "eq-6.2-6.5", "eq-6.1"], book: ["6.4", "6.3"], tags: ["DIMS", "checkbook", "water balance", "MAD", "forecast"] },
    { id: "crops", h: "Crops supported",
      html: "<p>The 2018 description lists nine crops: corn, soybean, cantaloupe, sweet peas, lima beans, watermelon, sweet corn, cucumbers and tomatoes. Extension staff, growers and consultants helped set it up for Delaware conditions.</p>",
      calcs: [], book: ["4.6"], tags: ["DIMS", "crops", "vegetables"] },
    { id: "setup", h: "Setting up a field",
      html: "<ol><li>Request an account (free). Since the May 2024 move to dims.cema.udel.edu accounts are created and managed automatically. Before that, access was requested by email to Kevin Brinson (kbrinson@udel.edu) with DIMS in the subject line.</li><li>Create the field: field name, crop, emergence date and location (click on the map or enter latitude and longitude).</li><li>Check the soil the system assigned. Change it if the field holds more or less water.</li><li>Optional advanced settings: season length, crop stage dates, soil, and the crop water management requirement (allowable depletion).</li><li>After every irrigation, enter the amount applied. Rain is entered by the system from DEOS.</li></ol><p>Users outside Delaware must type in some soil data by hand (Adkins 2021).</p>",
      calcs: ["checkbook"], book: ["6.4"], tags: ["DIMS", "setup", "emergence date", "soil"] },
    { id: "outputs", h: "What the grower gets",
      html: "<ul><li>Field Status Map: one marker per field, colored by soil moisture status.</li><li>Field Status Chart: season soil water content plotted against field capacity, permanent wilting point and the managed allowable depletion line, with rain and irrigation events.</li><li>Field list with forecast information to flag fields that will need water in the next few days (2024 version).</li><li>Five day forecast of crop water use and a prediction model to plan irrigation.</li><li>Print or export (for example to Excel) of crop water demand and irrigation records, used for EQIP reporting.</li><li>The 2024 version is built for phones and lets the user enter data for several fields at once.</li></ul>",
      calcs: ["checkbook", "ld-ed-window"], book: ["6.4"], tags: ["DIMS", "outputs", "forecast", "records"] },
    { id: "checkbook", h: "Using DIMS as a checkbook, and its limits",
      html: "<p>A checkbook water balance subtracts each day's crop use and adds irrigation and rain. Adkins (2021) points out the weakness of a fixed crop curve: it assumes maximum daily use and misses low use days that are cloudy or humid. DIMS avoids that by using measured daily RefET from DEOS.</p><p>Adkins (2021) example for field corn: peak use is often quoted as 0.33 inch per day, but in 2018 only seven days were above 0.25 inch and none above 0.3 inch. The year before had eight days above 0.25 inch and two at 0.3 inch. A fixed 0.33 inch per day curve would over irrigate.</p><p>Points to manage by hand:</p><ul><li>Enter the irrigation depth actually applied, not the timer chart value. Pivot charts are often wrong (see the SARE and pivot testing records).</li><li>An ET scheduler assumes rain soaks in. On poorly drained soils Adkins (2024) advises delaying the first irrigation after rain by one day.</li><li>Rain at the nearest DEOS station may differ from rain on the field. A field rain gauge fixes this.</li></ul>",
      calcs: ["checkbook", "eq-6.26", "eq-6.18-6.25"], book: ["6.4"], tags: ["checkbook", "ET scheduler", "peak ET", "corn", "drainage"] },
    { id: "versus-sensors", h: "ET scheduler versus soil moisture sensors",
      html: "<p>Adkins (2021) summarizes nearly a decade of Delaware work: soil moisture sensors are accurate and direct and catch problems like poorly calibrated timer charts and poor drainage, but they gave only marginal, if any, yield gains over a good ET scheduler. Their install and upkeep cost make them impractical for most agronomic crops. His recommendation for low cost, reliable, low workload scheduling of agronomic crops is an ET scheduler.</p><ul><li>Free options: university tools such as DIMS. KanSched (Kansas State University) was his long time recommendation to meet NRCS 449 irrigation water management.</li><li>Paid options: phone apps from service companies and pivot makers with direct pivot control and weather forecasts. Ask the pivot dealer.</li></ul>",
      calcs: [], book: ["6.4", "2.10"], tags: ["soil moisture sensors", "ET scheduler", "KanSched", "NRCS 449"] },
    { id: "forecast-2024", h: "DIMS based demand forecasts (June 2024 example)",
      html: "<p>Adkins (28 June 2024) used modeled ET to advise growers during the highest demand week he had seen since 2012:</p><ul><li>Corn planted April 15 used 0.3 inch per day over the past week. Corn planted May 12 used 0.24 inch per day.</li><li>Most Delaware systems cannot keep up with 0.3 inch per day without help from rain.</li><li>Forecast for the next 5 days: early corn about 0.25 inch per day, later corn about 0.2 inch per day.</li><li>If a system cannot meet demand, run it at full capacity. Under deficit, apply 0.4 to 0.7 inch per pass rather than small frequent passes, which lose more to evaporation.</li><li>Full season soybeans not yet flowering: about 0.5 to 0.75 inch per week. Flowering fields: about 0.25 inch per day. Fields that just started flowering with no irrigation or good rain must first replace a 1.5 inch deficit.</li><li>Double crop soybeans need water from the start, even before planting, to build canopy. Newly emerged beans were forecast at 0.5 inch per day (as printed in the article).</li></ul>",
      calcs: ["eq-5.20", "cn-from-flow", "eq-13.7"], book: ["5.5", "5.6", "6.4"], tags: ["forecast", "corn", "soybean", "deficit irrigation", "system capacity"] }
  ],
  tables: [
    { id: "t1", title: "DEOS station data used for irrigation scheduling",
      cols: ["Item", "Value"],
      rows: [
        ["Network start", "2004"],
        ["Stations (Ag Weather Summary)", "42 (Adkins 2021), more than 40 (Brinson 2020)"],
        ["Station density", "about 1 per 120 km2 (46 mi2)"],
        ["Recording interval", "5 minutes"],
        ["Variables", "air temperature, relative humidity, wind, solar radiation, precipitation"],
        ["Soil sensors (some stations)", "soil moisture and soil temperature at 2 to 5 in"],
        ["Reference ET method", "FAO Penman-Monteith, grass reference (FAO-56)"],
        ["Growing degree days", "base 50 F"]
      ],
      notes: "Brinson 2020 (WCU ?p=14585), Adkins 2021 (CANR News), Brinson et al. 2024", calcs: ["eto-daily"] },
    { id: "t2", title: "DIMS inputs and outputs",
      cols: ["Inputs from the user", "Supplied by DIMS", "Outputs"],
      rows: [
        ["Field name, crop, emergence date, location", "Daily RefET and rain from nearest DEOS stations", "Field Status Map (color by soil moisture)"],
        ["Irrigation amount after each event", "Soil texture from USDA soils data", "Field Status Chart (water content vs FC, PWP, MAD, with rain and irrigation)"],
        ["Optional: season length, stage dates, soil, allowable depletion", "NWS forecast for 5 day predictions", "Export to Excel for EQIP records, 5 day forecast"]
      ],
      notes: "Brinson 2018 (WCU ?p=12075), Adkins 2021 and 2024", calcs: ["checkbook"] },
    { id: "t3", title: "Corn daily water use: fixed curve versus measured (Adkins 2021)",
      cols: ["Season", "Days above 0.25 in/day", "Days at or above 0.3 in/day"],
      rows: [["2018", 7, 0], ["2017", 8, 2]],
      notes: "Peak corn use is often quoted as 0.33 in/day. UD CANR News, 16 June 2021.", calcs: ["checkbook"] }
  ],
  facts: [
    { q: "What ET method does DEOS use?", a: "Daily reference ET at each DEOS station is computed with the FAO Penman-Monteith equation for a grass reference surface (FAO-56), per Brinson, DeLiberty and Leathers (2024).", tags: ["reference ET", "Penman-Monteith"], calcs: ["eto-daily", "eq-4.4"], book: ["4.5"] },
    { q: "Is DEOS RefET grass or alfalfa reference?", a: "Grass. The extension articles describe RefET as water use of a well maintained grass surface, and Brinson et al. (2024) cite the FAO grass reference method.", tags: ["reference ET", "grass reference"], calcs: ["eq-4.2-4.7"], book: ["4.5", "4.6"] },
    { q: "How many DEOS stations report ag weather data?", a: "The Ag Weather Summary covers 42 stations with records back to 2004 (Adkins 2021). Density is about one station per 120 km2 (about 46 mi2).", tags: ["DEOS", "stations"], calcs: [], book: ["4.8"] },
    { q: "How often do DEOS stations record?", a: "Every 5 minutes for temperature, humidity, wind, solar radiation and rain. Some stations add soil moisture and temperature at 2 to 5 inches.", tags: ["DEOS"], calcs: [], book: ["4.8"] },
    { q: "Is the nearest DEOS station good enough for a Maryland field?", a: "For ET, yes across Delmarva per Adkins (2021). Not for rain, which should be measured at the field.", tags: ["DEOS", "rainfall", "Maryland"], calcs: [], book: ["4.8"] },
    { q: "What is DIMS?", a: "The Delaware Irrigation Management System, a free web checkbook scheduler from UD CEMA (since 2011) that runs a daily soil water balance per field from DEOS RefET and rain, with soils from USDA data and a 5 day forecast.", tags: ["DIMS"], calcs: ["checkbook"], book: ["6.4"] },
    { q: "Where is DIMS now?", a: "dims.cema.udel.edu since May 2024. The new version works on phones, allows data entry for several fields at once and creates accounts automatically.", tags: ["DIMS"], calcs: [], book: [] },
    { q: "Which crops does DIMS support?", a: "Corn, soybean, cantaloupe, sweet peas, lima beans, watermelon, sweet corn, cucumbers and tomatoes (2018 list).", tags: ["DIMS", "crops"], calcs: [], book: ["4.6"] },
    { q: "What does a grower enter in DIMS?", a: "Field name, crop, emergence date and location to set up, then the amount of every irrigation. Optional: season length, stage dates, soil and allowable depletion.", tags: ["DIMS", "setup"], calcs: ["checkbook"], book: ["6.4"] },
    { q: "What MAD and irrigation amount do most DIMS users set?", a: "50% MAD and 10.16 mm (0.4 inch) per irrigation were the most common settings across DIMS fields (Brinson et al. 2024).", tags: ["DIMS", "MAD"], calcs: ["eq-6.2-6.5", "eq-6.1"], book: ["6.3"] },
    { q: "What does the DIMS Field Status Chart show?", a: "Season soil water content against field capacity, permanent wilting point and the managed allowable depletion line, plus rain and irrigation events.", tags: ["DIMS", "outputs"], calcs: ["checkbook"], book: ["6.4"] },
    { q: "What RefET level signals stress for dryland crops in Delaware?", a: "Long runs of 0.2 to 0.3 inches per day with little or no rain (Brinson 2020).", tags: ["reference ET", "drought"], calcs: [], book: ["4.5"] },
    { q: "Why not schedule corn on a fixed 0.33 inch per day curve?", a: "Real use is often lower. In 2018 only 7 days exceeded 0.25 inch and none exceeded 0.3 inch (Adkins 2021). A fixed curve misses cloudy and humid days.", tags: ["checkbook", "corn", "peak ET"], calcs: ["checkbook"], book: ["6.4"] },
    { q: "Do soil moisture sensors beat an ET scheduler for Delaware field crops?", a: "Nearly a decade of UD work showed only marginal, if any, yield gain over advanced ET scheduling, and sensor cost and upkeep make them impractical for most agronomic crops (Adkins 2021).", tags: ["soil moisture sensors", "ET scheduler"], calcs: [], book: ["6.4", "2.10"] },
    { q: "How should an ET scheduler be adjusted on poorly drained soils?", a: "Delay the first irrigation after rain by one day, because ET schedulers assume rain soaks in quickly (Adkins, July 2024).", tags: ["drainage", "ET scheduler"], calcs: ["checkbook"], book: ["6.4"] },
    { q: "What depth per pass should a short capacity system apply in a deficit?", a: "0.4 to 0.7 inch per pass, at full capacity, rather than small frequent passes that lose more to evaporation (Adkins, June 2024).", tags: ["deficit irrigation", "system capacity"], calcs: ["eq-13.7", "eq-5.20"], book: ["5.5", "13.5"] },
    { q: "What was corn ET in the late June 2024 heat?", a: "0.3 inch per day for corn planted April 15 and 0.24 inch per day for corn planted May 12, the highest demand Adkins had seen since 2012.", tags: ["corn", "peak ET", "2024"], calcs: ["crop-et"], book: ["4.6"] }
  ]
}]);

window.DE_DOCS = (window.DE_DOCS || []).concat([{
  id: "dgs-b22",
  title: "Aquifers and Groundwater Withdrawals, Kent and Sussex Counties, Delaware (DGS Bulletin 22)",
  short: "DGS Bulletin 22",
  org: "Delaware Geological Survey, University of Delaware",
  year: 2023,
  url: "https://www.dgs.udel.edu/publications/b22-aquifers-and-groundwater-withdrawals-kent-and-sussex-counties-delaware",
  license: "summarized",
  summary: "McLaughlin, Tomlinson and Lawson (2023) mapped the depth and thickness of 13 aquifers in Kent and Sussex Counties from about 6,600 boreholes and assigned 2004 to 2008 groundwater withdrawals to each aquifer by use. It tells an irrigation specialist which aquifers supply farm wells, how much irrigation pumps in dry and wet years, and where to look up aquifer depth for a new well. This summary is built from the DGS abstract, press release, 3D viewer notes and Plate 2, because the full 47 MB report PDF could not be retrieved.",
  sections: [
    { id: "setting", h: "Hydrogeologic setting",
      html: "<p>Groundwater is the only source of drinking water in central and southern Delaware, and irrigation is its largest use. The Coastal Plain has surficial Quaternary deposits over Cretaceous to Cenozoic sediments that dip gently to the southeast. The confined aquifers get deeper toward the southeast, away from where they are recharged.</p>" +
        "<p>The study used geologic data from about 6,600 boreholes in a GIS to build interpolated maps of the top and thickness of 13 aquifer sands.</p>",
      calcs: [], book: ["9.3"], tags: ["Coastal Plain", "aquifers", "geology", "boreholes"] },

    { id: "aquifers", h: "The aquifers, shallow to deep",
      html: "<ul>" +
        "<li><b>Unconfined (water table) aquifer</b>: surficial Quaternary and Neogene sands. Generally less than 100 ft thick in Kent County and from a few feet to more than 200 ft thick in Sussex County. It supplies more than half of all groundwater pumped.</li>" +
        "<li><b>Neogene confined aquifers</b> (nine): Pocomoke, Manokin, Upper Choptank, Middle Choptank, Milford, Frederica, Federalsburg, Cheswold and lower Calvert.</li>" +
        "<li><b>Paleogene confined aquifers</b> (two): Piney Point and Rancocas.</li>" +
        "<li><b>Cretaceous confined aquifer</b> (one): Mount Laurel.</li>" +
        "</ul>" +
        "<p>The confined aquifers are typically tens of feet thick. Plate 2 (Sussex County cross sections) shows these units down to about 1,500 ft below sea level, together with the base of the unconfined aquifer as revised by this study from Andres and Klingbeil (2005).</p>",
      calcs: ["tab-9.1", "tab-9.2"], book: ["9.3"], tags: ["unconfined aquifer", "Columbia", "Pocomoke", "Manokin", "Cheswold", "Frederica", "Piney Point", "Milford"] },

    { id: "withdrawals", h: "Total withdrawals, 2004 to 2008",
      html: "<ul>" +
        "<li>Total groundwater withdrawals for all uses in Kent and Sussex Counties ranged from about 89 to 144 million gallons per day (Mgal/d) on an annual basis over 2004 to 2008.</li>" +
        "<li>Irrigation is the largest single use. It ranges from as little as 50 Mgal/d in a year with plentiful, well timed rain to as much as 91 Mgal/d in a dry year.</li>" +
        "<li>Public supply wells pumped 22.8 to 26.2 Mgal/d, a little more in Sussex than in Kent.</li>" +
        "<li>Domestic self-supplied wells pumped about 11.6 Mgal/d, almost two thirds of it in Sussex County.</li>" +
        "</ul>" +
        "<p>The difference between a dry and a wet year for irrigation alone is about 41 Mgal/d (91 minus 50), most of the 55 Mgal/d spread in total withdrawals (144 minus 89).</p>",
      calcs: ["farm-capacity"], book: ["9.4", "5.6"], tags: ["withdrawals", "irrigation", "dry year", "wet year", "Mgal/d"] },

    { id: "by-aquifer", h: "Which aquifers supply the water",
      html: "<ul>" +
        "<li>The unconfined aquifer supplied more than half of all withdrawals.</li>" +
        "<li>Three shallow confined aquifers used mostly in Sussex County, the confined Columbia, Pocomoke and Manokin, each supplied roughly 8 to 11 percent of the total.</li>" +
        "<li>In Kent County the most important confined aquifers, the Cheswold, Frederica and Piney Point, each supplied about 3 to 5 percent.</li>" +
        "</ul>" +
        "<p>So in Sussex County most pumping comes from the unconfined sands, and the Pocomoke and Manokin are the main deeper sources. In Kent County the main confined sources are the Cheswold, Frederica and Piney Point.</p>",
      calcs: [], book: ["9.3", "9.4"], tags: ["unconfined aquifer", "Pocomoke", "Manokin", "Cheswold", "Frederica", "Piney Point", "irrigation wells"] },

    { id: "method", h: "How irrigation pumping was assigned to aquifers",
      html: "<p>Reported pumping (2004 to 2008) was used where it existed. For public supply, industrial and golf course wells, withdrawals were assigned to an aquifer from the elevation of the well screen. Irrigation, domestic self-supplied and livestock withdrawals were not metered, so they were estimated by census block and split among aquifers in proportion to the depths of wells in that block.</p>" +
        "<p>For a field engineer, this means county irrigation totals are estimates. Metered pumping data from your own wells is better for a specific farm.</p>",
      calcs: ["meter-depth"], book: ["9.4", "3.1"], tags: ["method", "census block", "well screen", "estimates"] },

    { id: "tools", h: "Maps and tools for siting a well",
      html: "<ul>" +
        "<li>Aquifer top and thickness maps for all 13 sands, and cross sections for Kent (Plate 1) and Sussex (Plate 2) Counties, come with the bulletin.</li>" +
        "<li>DGS publishes a 3D web viewer of the 12 confined aquifers, which shows aquifer elevation and the southeastward dip.</li>" +
        "<li>Appendix A gives the cross section location maps for Kent (lines A to H) and Sussex (lines I to N), the test hole map and an aquifer subcrop map showing where the Manokin, Pocomoke, Upper, Middle and Milford Choptank, Federalsburg, Cheswold and Frederica subcrop beneath the unconfined sands.</li>" +
        "</ul>" +
        "<p>Before drilling, read the expected depth to the target sand from these maps, then confirm with a well test and drawdown measurement.</p>",
      calcs: ["well-test", "eq-9.1", "eq-9.2"], book: ["9.4"], tags: ["well siting", "cross sections", "3D viewer", "subcrop"] },

    { id: "not-read", h: "What this summary does not include",
      html: "<p>The full bulletin PDF (about 47 MB) and Appendices B and C could not be downloaded for this guide. Aquifer depth and thickness ranges by aquifer, yearly totals, irrigation withdrawals by aquifer and county, and water level data in those parts are therefore not reproduced here. Use the report itself from the DGS publications page for those tables.</p>",
      calcs: [], book: [], tags: ["data gaps"] }
  ],
  tables: [
    { id: "aquifers", title: "Aquifers mapped in Bulletin 22",
      cols: ["Aquifer", "Type", "Age", "Thickness", "Role in withdrawals 2004 to 2008"],
      rows: [
        ["Unconfined (surficial sands)", "Unconfined", "Quaternary and Neogene", "Less than 100 ft in Kent, a few ft to more than 200 ft in Sussex", "More than half of all withdrawals"],
        ["Confined Columbia", "Confined", "not given", "not given", "About 8 to 11 percent (mainly Sussex)"],
        ["Pocomoke", "Confined", "Neogene", "Tens of feet (typical)", "About 8 to 11 percent (mainly Sussex)"],
        ["Manokin", "Confined", "Neogene", "Tens of feet (typical)", "About 8 to 11 percent (mainly Sussex)"],
        ["Upper Choptank", "Confined", "Neogene", "Tens of feet (typical)", "not given"],
        ["Middle Choptank", "Confined", "Neogene", "Tens of feet (typical)", "not given"],
        ["Milford", "Confined", "Neogene", "Tens of feet (typical)", "not given"],
        ["Frederica", "Confined", "Neogene", "Tens of feet (typical)", "About 3 to 5 percent in Kent"],
        ["Federalsburg", "Confined", "Neogene", "Tens of feet (typical)", "not given"],
        ["Cheswold", "Confined", "Neogene", "Tens of feet (typical)", "About 3 to 5 percent in Kent"],
        ["Lower Calvert", "Confined", "Neogene", "Tens of feet (typical)", "not given"],
        ["Piney Point", "Confined", "Paleogene", "Tens of feet (typical)", "About 3 to 5 percent in Kent"],
        ["Rancocas", "Confined", "Paleogene", "Tens of feet (typical)", "not given"],
        ["Mount Laurel", "Confined", "Cretaceous", "Tens of feet (typical)", "not given"]
      ],
      notes: "From the Bulletin 22 abstract (UDSpace, handle 19716/33550) and the DGS 3D viewer announcement. The abstract names the confined Columbia in the withdrawal results but not in its list of 13 mapped sands. Order shown is the usual shallow to deep sequence in the abstract and Plate 2.",
      calcs: ["tab-9.1"] },
    { id: "uses", title: "Groundwater withdrawals by use, Kent and Sussex Counties, 2004 to 2008",
      cols: ["Use", "Withdrawal (Mgal/d)", "Note"],
      rows: [
        ["All uses, annual", "about 89 to 144", "Range over 2004 to 2008"],
        ["Irrigation, dry year", "up to 91", "Largest use"],
        ["Irrigation, wet year", "as low as 50", "Year with abundant, well timed rain"],
        ["Public supply wells", "22.8 to 26.2", "Slightly more in Sussex than Kent"],
        ["Domestic self-supplied", "11.6", "Nearly two thirds in Sussex"]
      ],
      notes: "DGS press release for Bulletin 22, August 30, 2023.",
      calcs: [] }
  ],
  facts: [
    { q: "How much irrigation water does Delaware pump from Kent and Sussex aquifers?", a: "Up to about 91 Mgal/d in a dry year and as little as 50 Mgal/d in a year with abundant, well timed rain, 2004 to 2008 (DGS Bulletin 22).", tags: ["irrigation", "withdrawals"], calcs: [], book: ["9.4"] },
    { q: "What are total groundwater withdrawals in Kent and Sussex Counties?", a: "About 89 to 144 Mgal/d per year for all uses over 2004 to 2008 (DGS Bulletin 22).", tags: ["withdrawals"], calcs: [], book: ["9.4"] },
    { q: "Which aquifer supplies most water in southern Delaware?", a: "The unconfined (water table) aquifer, which supplied more than half of all groundwater withdrawals in Kent and Sussex Counties (DGS Bulletin 22).", tags: ["unconfined aquifer"], calcs: [], book: ["9.3"] },
    { q: "How thick is the unconfined aquifer in Sussex County?", a: "From a few feet to more than 200 ft. In Kent County it is generally less than 100 ft thick (DGS Bulletin 22).", tags: ["unconfined aquifer", "thickness"], calcs: ["tab-9.1"], book: ["9.3"] },
    { q: "Which confined aquifers matter most in Sussex County?", a: "The confined Columbia, Pocomoke and Manokin, each supplying roughly 8 to 11 percent of total withdrawals (DGS Bulletin 22).", tags: ["Pocomoke", "Manokin", "Sussex"], calcs: [], book: ["9.3"] },
    { q: "Which confined aquifers matter most in Kent County?", a: "The Cheswold, Frederica and Piney Point, each supplying about 3 to 5 percent of withdrawals (DGS Bulletin 22).", tags: ["Cheswold", "Frederica", "Piney Point", "Kent"], calcs: [], book: ["9.3"] },
    { q: "How many aquifers did DGS Bulletin 22 map?", a: "13 aquifer sands, using about 6,600 boreholes. The 12 confined ones are Mount Laurel, Rancocas, Piney Point, lower Calvert, Cheswold, Federalsburg, Frederica, Milford, Middle Choptank, Upper Choptank, Manokin and Pocomoke.", tags: ["aquifers"], calcs: [], book: ["9.3"] },
    { q: "How thick are Delaware's confined aquifers?", a: "Typically tens of feet, and they deepen toward the southeast away from their recharge areas (DGS Bulletin 22).", tags: ["confined aquifers", "thickness"], calcs: ["tab-9.1"], book: ["9.3"] },
    { q: "How were irrigation withdrawals estimated in Bulletin 22?", a: "By census block, then split among aquifers in proportion to local well depths. Public, industrial and golf course withdrawals used reported pumping and well screen elevations.", tags: ["method", "irrigation"], calcs: [], book: ["9.4"] },
    { q: "How much do public supply wells pump in Kent and Sussex?", a: "22.8 to 26.2 Mgal/d, slightly more in Sussex than in Kent (DGS Bulletin 22 press release).", tags: ["public supply"], calcs: [], book: [] },
    { q: "How much do domestic wells pump in Kent and Sussex?", a: "About 11.6 Mgal/d, almost two thirds of it in Sussex County (DGS Bulletin 22 press release).", tags: ["domestic"], calcs: [], book: [] }
  ]
}]);

window.DE_DOCS = (window.DE_DOCS || []).concat([{
  id: "ma-veg-recs",
  title: "Mid-Atlantic Commercial Vegetable Production Recommendations 2026/2027 (EB-236): Irrigation Management and crop fertigation",
  short: "Mid-Atlantic Veg Recs (irrigation)",
  org: "University of Delaware, University of Maryland, Penn State, Rutgers, Virginia Tech and partner Extension services",
  year: 2026,
  url: "https://www.udel.edu/content/dam/udelImages/canr/pdfs/extension/sustainable-agriculture/commericial-veg-recommendations/Irrigation-Management.pdf",
  license: "summarized",
  summary: "The regional vegetable production guide used by Extension in Delaware, Maryland, New Jersey, Pennsylvania and Virginia. Section C (Irrigation Management) gives soil water holding and infiltration values, drip run time tables, tensiometer thresholds, chlorination and fertigation math, and the Chapter F crop sections give critical water periods and week by week drip fertigation schedules. This is the reference a Delaware vegetable grower expects the irrigation specialist to know, written here in our own words with the numbers kept exact.",
  sections: [
    { id: "basics", h: "Why vegetables need irrigation in the Mid-Atlantic",
      html: "<p>Rain in the Mid-Atlantic is rarely spread evenly over the season, even in wet years, so supplemental irrigation pays in most years. Short dry spells can hurt yield and quality.</p><ul><li>Stress early in the crop delays maturity and can lower yield and quality.</li><li>Stress late in the season mostly lowers quality and yield and can cause damage the crop cannot recover from.</li><li>Too much water, especially late, lowers quality and shortens post-harvest life.</li><li>Crop water use (ET) is driven mainly by solar radiation, then air temperature, wind and humidity. Crops with a large canopy (mature sweet corn, potatoes, snap beans) use more water than onions, young plants or new transplants.</li><li>For most vegetables the effective root zone is about 12 inches deep.</li><li>Water use rises until full canopy and falls after that. Warm season crops can use up to 0.30 inch per day in midsummer.</li></ul>",
      calcs: ["eq-4.2-4.7", "crop-et"], book: ["4.2", "4.6", "6.2"],
      tags: ["ET", "root zone", "peak water use", "vegetables"] },
    { id: "critical-periods", h: "Critical periods for water by crop (Table C-1)",
      html: "<p>Table C-1 lists the growth stage when each vegetable is most sensitive to a water shortage. Plan irrigation capacity and monitoring so these stages never run short. Key Delaware crops: lima beans at pollination and pod development, snap beans at pod enlargement, sweet corn at tasseling, silking and ear development, melons and cucumbers at flowering and fruit development, tomatoes at early flowering, fruit set and enlargement, white potatoes at tuber set and enlargement.</p><p>Irrigation is also critical in the first 1 to 2 weeks after seeding or transplanting, before roots reach the surrounding soil. On seeded crops use low rates and small volumes to avoid crusting. If a crust forms, keep applying light, frequent water while seedlings emerge.</p>",
      calcs: [], book: ["6.5"],
      tags: ["critical stage", "crop sensitivity", "establishment", "crusting"] },
    { id: "soils", h: "Soil water holding and infiltration (Tables C-2 and C-3)",
      html: "<p>Silt, clay and organic matter raise available water holding capacity. Sands and compacted soils hold little, so loamy sands and sandy loams need frequent, smaller irrigations. Never apply water faster than the soil can take it in. This is mostly a problem on silt and clay loams under sprinklers, and runoff leads to erosion and disease. See the tables for values by texture.</p>",
      calcs: ["tab-2.3", "eq-2.8", "eq-2.14", "tab-11.4"], book: ["2.5", "2.7", "2.8"],
      tags: ["available water", "AWC", "infiltration rate", "soil texture", "sandy soils"] },
    { id: "principles", h: "Rules of thumb for when and how much to irrigate",
      html: "<ul><li>ET is much higher on clear, hot, windy days than on cool, cloudy, humid days. At full canopy in hot dry weather it can reach 0.3 inch per day or more.</li><li>Keeping soil moisture in a narrow band just below field capacity (60 to 80% available soil moisture) gives better crops than letting it swing widely. Soil moisture monitoring is the more accurate way to decide.</li><li>Plastic mulch cuts soil evaporation but also keeps rain out of the root zone, so discount most rainfall when scheduling mulched crops.</li><li>On soils with moderate water holding capacity apply 0.25 to 0.75 inch per irrigation so water reaches the active roots. Use less during early growth.</li><li>On sandy soils irrigate daily with only what the crop will use that day. Splitting the daily amount into pulses with a break of 2 hours or more helps, especially on very coarse soil.</li><li>Salty water (coastal aquifer wells, tidal streams) needs extra water each time to leach salts. Test tidal surface water salinity regularly.</li><li>Raise weekly amounts up to full canopy and lower them after, and allow for fruiting or tuber bulking.</li></ul>",
      calcs: ["checkbook", "eq-6.1", "eq-6.8", "eq-7.6"], book: ["6.2", "6.4", "7.7"],
      tags: ["scheduling", "pulse irrigation", "plastic mulch", "salinity", "application depth"] },
    { id: "drip-overview", h: "Drip (trickle) irrigation: strengths and limits",
      html: "<p>Drip applies small amounts often, daily or several times a week, right to the root zone. Often half or less of the sprinkler or surface water is needed because the soil surface stays dry. Most of the saving happens early in the season. Once the canopy is full the difference between drip and sprinkler water use is negligible.</p><ul><li>Pros: low flow and pressure, low energy, little labor, easy automation, dry foliage and dry row middles (less disease, weeds and pests), field work can continue during irrigation, fertilizer and labeled pesticides can go through the system.</li><li>Cons: higher management, a small wetted soil volume with a small reserve so stress comes quickly, pressure regulation and filtration are required, cannot be used for frost protection, run time is harder to work out than for sprinklers, not suited to drilled crops such as peas.</li><li>Have the pump, headers, filters and connections tested and ready before planting.</li><li>With mulch, treat the mulched width as the root zone width when working out run times.</li></ul>",
      calcs: ["drip-runtime", "eq-14.8"], book: ["14.1", "14.3", "14.7"],
      tags: ["drip", "trickle", "plasticulture", "water savings"] },
    { id: "drip-runtime", h: "Drip application rate and maximum run time (Tables C-4 and C-5)",
      html: "<p>Table C-4 gives inches applied per hour per cropped acre (drive rows excluded) from tape flow and tape spacing. It only holds if the system runs at the manufacturer's pressure.</p><p>Table C-5 gives the longest single run time that refills a 12 inch root zone at 50% depletion without pushing water below it, by soil texture and tape flow. Halve these maximum times for night irrigation and whenever the crop is not actively using water. On coarse sand at 0.45 gpm per 100 ft the limit is only 0.7 hour, which is why sandy Delaware fields need short, repeated drip sets.</p>",
      calcs: ["drip-runtime", "eq-14.8", "run-time", "eq-6.2-6.5"], book: ["14.7", "6.3"],
      tags: ["run time", "tape flow", "gpm per 100 ft", "wetted width", "deep percolation"] },
    { id: "tensiometers", h: "Scheduling with tensiometers (Table C-6)",
      html: "<p>Tensiometers read soil tension in centibars (cb), the same as kPa. Field capacity, reached 24 to 72 hours after a soaking rain or irrigation, is about 5 to 10 cb on coarse soils and up to 40 cb on fine soils.</p><ul><li>Start irrigating at 20 to 40 cb on coarse soils, earlier on very coarse soils. Medium and fine soils can go to higher tensions (Table C-6).</li><li>On every soil irrigate at no more than 50% depletion of available water. Use lower depletion if the crop needs it.</li><li>Tensiometers break tension above about 80 cb, so they suit sandy soils best. On sands a 0 to 50 cb gauge reads better than the standard 0 to 100 cb.</li><li>Use about four per management zone. Put one where water runs out first (sandier spots, high ground) and the others in a triangle inside the field edges. Decide on the average reading.</li><li>Place the tip 6 to 12 inches deep and 6 to 12 inches from the plant. Under drip put the tube close to the tape, never on the dry bed shoulder.</li><li>Tensiometers at several depths at one spot show how deep a rain or irrigation reached and where roots pull water.</li></ul>",
      calcs: ["tab-6.5", "tab-6.6", "eq-6.1"], book: ["2.10", "6.4"],
      tags: ["tensiometer", "centibar", "soil tension", "sensor placement", "MAD"] },
    { id: "sensors", h: "Hand feel, resistance blocks and volumetric sensors",
      html: "<ul><li>Hand feel: cheapest method, samples many depths, but needs an experienced person. The guide points to the NRCS feel and appearance guide.</li><li>Resistance (matrix or gypsum) sensors: resistance rises as the soil dries. Newer matrix sensors are more consistent than gypsum. Readings are usually converted to tension so Table C-6 applies. Calibrate for each soil.</li><li>Installing resistance sensors: soak first. Bore a separate hole to depth for each sensor, return at least 3 inches of crumbled soil, add about 1/2 cup of water to make a slurry, push the sensor into it (a 1/2 inch conduit over the lead works), backfill 3 to 4 inches at a time and tamp. Tie wires to a stake between holes and label shallow and deep.</li><li>TDR and FDR sensors read volumetric water content accurately but need power and cost more. Calibrate to a soil water curve to turn readings into percent available water.</li></ul>",
      calcs: ["eq-2.9-2.11", "swd-fcobs"], book: ["2.10", "6.4"],
      tags: ["feel method", "Watermark", "granular matrix", "TDR", "FDR", "installation"] },
    { id: "drip-maintenance", h: "Keeping drip tape working: damage and clogging",
      html: "<p>Emitters drop pressure through orifices or long, tortuous paths. Pressure compensating paths keep the opening large enough to pass small particles.</p><ul><li>Insects (ants, wireworms, earwigs, crickets, grubs) chew holes in thin tape. Rodents and birds do too. Look at damaged tape under magnification before choosing a fix.</li><li>Clogging is the most serious drip problem. Causes are physical, chemical and biological.</li><li>Bacterial slime (biofilm) and algae clog emitters and can carry plant and human pathogens. Chlorinate before clogging starts. Two or three treatments a season is usually enough.</li><li>Iron above 1 ppm feeds iron bacteria that make ochre slime, and precipitated iron (rust) plugs emitters. Chlorine oxidizes dissolved iron so it can be filtered out.</li></ul>",
      calcs: [], book: ["14.5"],
      tags: ["clogging", "iron", "biofilm", "algae", "drip tape damage", "filtration"] },
    { id: "chlorination", h: "Chlorination rates and injection math",
      html: "<p>Inject chlorine upstream of the filters so precipitated iron and organisms are caught. Use only products labeled for irrigation systems. Never use chlorine gas. Solid calcium hypochlorite is 65 to 70% chlorine, liquid sodium hypochlorite is 5 to 15%. Chlorine works best at pH 6.5 to 7.5, and both forms raise pH, so lower water above pH 7.5 into that range first. 30 ppm or more can injure plants.</p><ul><li>Iron: inject continuously at 1 ppm chlorine per 1 ppm iron. 3 to 5 ppm is usually enough.</li><li>Bacteria and algae: continuous 5 to 10 ppm where the load is high, or 10 to 20 ppm in the last 30 minutes of each cycle, or 50 ppm in the last 30 minutes once or twice a month.</li><li>Super chlorination: 200 to 500 ppm once a month, enough to fill the system, shut down, then after 24 hours open and flush the laterals.</li></ul><p>Positive displacement pump: gal/h of chlorine solution = 0.006 x ppm wanted x system gpm / % chlorine in product. Example: 5 ppm with 5.25% bleach on a 200 gpm system gives 1.14 gal/h.</p><p>Proportional injector: ppm setting of concentrate = 100 x ppm wanted / % chlorine in product. Example: 10 ppm with 12.5% wash material gives 80 ppm. Table C-7 converts ratio, ppm and percent settings.</p><p>Approved backflow valves and interlocks are required, and are absolutely required on a public water supply.</p>",
      calcs: ["eq-15.1", "pump-calibration", "injection-plan"], book: ["14.5", "15.2", "15.4"],
      tags: ["chlorine", "sodium hypochlorite", "injection rate", "ppm", "pH", "super chlorination"] },
    { id: "fertigation", h: "Fertigation basics and the linear bed foot (LBF) system",
      html: "<ul><li>Check pH first and lime well before mulching. Target about pH 6.5 for most vegetables.</li><li>Under plastic with drip, incorporate the preplant fertilizer 5 to 6 inches deep before laying mulch, ideally only in the strip the mulch will cover.</li><li>Only fully soluble fertilizers or liquids go through drip. Ratios such as 2-1-2 or 4-1-4 are now preferred to 1-1-1 (20-20-20). Use no P (1-0-1) with hard water, where calcium phosphate can precipitate and clog emitters.</li><li>Soluble micronutrients have raised yields. Add boron on sandy loams testing low to low-medium for medium and high boron demand crops.</li><li>Inject after the filter with an injector built for fertilizer.</li><li>Crop schedules in Chapter F are given in lb/A for a standard number of linear bed feet per acre (7,260 LBF for 6 ft beds). Adjust in proportion if beds are closer or wider and leave drive rows out of the acreage. The idea is a set amount of nutrient per volume of bed soil, since roots stay in the mulched bed.</li><li>Fertigate with every irrigation, weekly, or ahead of key growth stages.</li></ul><p>Worked examples (6 ft beds): 40 lb N per 7,260 LBF from 20-20-20 is 40 / 20 x 100 = 200 lb product per acre. From a 6-6-6 liquid weighing 10 lb/gal, each gallon has 0.6 lb N, so 40 / 0.6 = 67 gal per acre per application.</p>",
      calcs: ["eq-15.1", "injection-plan", "pump-calibration"], book: ["15.1", "15.4"],
      tags: ["fertigation", "linear bed feet", "LBF", "soluble fertilizer", "plastic mulch", "boron"] },
    { id: "sdi", h: "Subsurface drip (SDI): short term and long term",
      html: "<ul><li>Short term SDI lasts 3 to 10 years and is used on mid value crops such as processing vegetables. Tape sits 3 to 10 inches deep along each row on a raised bed and is usually sized to meet peak ET. Supply from a surface hose or buried PVC, with the far end left exposed for flushing. Mole crickets and wireworms can damage tape after year one. Deeper tape reduces this.</li><li>Long term SDI lasts 10 years or more and is used on commodity crops such as corn and cotton. Tape sits 12 to 18 inches deep, centered between rows, with buried PVC supply and flush manifolds at each end. It is usually designed to manage the soil profile at peak demand rather than meet full peak ET.</li><li>In sandy soils long term SDI works less well because low capillarity limits how far water wicks up from deep tape.</li><li>Drawbacks: cannot activate surface herbicides, cannot wet the shallow zone for germination, leaks are hard to find in season, and harvest traffic must not rut the field.</li></ul><p>Water quality is critical to SDI performance and life.</p>",
      calcs: ["flush-total", "eq-15.4"], book: ["14.3", "14.5"],
      tags: ["SDI", "subsurface drip", "tape depth", "corn", "sandy soils"] },
    { id: "chemigation", h: "Chemigation safety equipment",
      html: "<p>Any pesticide applied through irrigation must be labeled for chemigation, and some labels allow only drip or only sprinkler. Charge the system first, inject uniformly, then flush with clean water. With drip, do not overwater during the flush so the product stays in the root zone. Post treated areas within 300 ft of homes, labor housing, businesses, hospitals, schools, parks or playgrounds, or open to the public.</p><ul><li>Drip and overhead systems: check valve, vacuum relief valve and low pressure drain on the irrigation line.</li><li>Injection line: automatic quick closing check valve, and a normally closed solenoid valve on the pump intake tied to the interlock.</li><li>Interlock that stops the injection pump when the water pump stops, and a pressure switch that stops the water pump when pressure drops too low for good distribution.</li><li>Public water supply: a reduced pressure zone backflow preventer (or equivalent) upstream of the injection point, and a metering pump that can take an interlock.</li></ul>",
      calcs: ["eq-15.1", "eq-15.2", "flush-total"], book: ["15.3", "15.4"],
      tags: ["chemigation", "backflow", "check valve", "interlock", "safety"] },
    { id: "crop-notes", h: "Crop notes: beans, sweet corn, melons, cucumber, tomato, pepper, potato",
      html: "<ul><li>Snap and lima beans: highest yields when soil moisture is kept at 50% of field capacity or more from the 2 trifoliate leaf stage through pod sizing. Water use passes 0.25 inch per day at flowering and pod sizing, and a deficit then does the most damage. Balance this against canopy wetness, which favors white mold, and downy mildew and pod blight in limas.</li><li>Sweet corn: critical at tasseling, silking and ear development. Fresh market total N 125 to 175 lb/A, processing 150 to 200 lb/A. On very sandy soils cut the broadcast N and split it, adding 40 lb/A when corn is 6 inches tall and again at 12 inches.</li><li>Watermelon: highest yields with irrigation, and irrigation is recommended for seedless types. Keep soil moisture from falling below 50% of field capacity. Peak use at fruit set and full vine cover is up to 0.30 inch per day. Fruit split in handling when excess irrigation or rain leaves them under high water pressure. Irrigated total N is 125 to 150 lb/A versus 80 to 100 lb/A dryland.</li><li>Muskmelon (cantaloupe): lay plastic on moist soil to save moisture and warm the soil. Before mulching supply 25 to 50% of N and K<sub>2</sub>O, all P<sub>2</sub>O<sub>5</sub>, with at least 50% of N as nitrate. Start fertigation within a week of transplanting or seeding.</li><li>Cucumber: water use at flowering and fruiting can pass 0.25 inch per day, the stage where deficit hurts most. Keep the canopy and soil surface as dry as possible to limit fruit rots and downy mildew. Lay drip tape with the mulch.</li><li>Tomato: crop coefficient Kc about 0.60 for weeks 1 to 4, 1.15 for weeks 4 to 10 and 0.90 for weeks 10 to 12. Fertigate weekly through the drip and adjust with soil and tissue tests.</li><li>Pepper: do not use plastic without drip on coarse or sandy soils. Use 5 ft plastic for double rows and 4 ft for single rows. First soluble application within 1 week of transplanting, then about every 3 weeks for 6 applications, or 12 half rate applications. Raise seasonal soluble rates by at least one third on soils below CEC 3 to 5, by two thirds on very coarse, very low CEC soils, and cut them in half on heavier, higher CEC soils. If mulched but not drip fertilized, broadcast 150 lb/A N with the P and K.</li><li>White potato: very sensitive to both too much and too little water. Critical at early tuber formation and bulking. Keep plant available water above 65%. About 70 to 80% is best at planting. Let it fall to 60 to 65% at vine kill, since dry soil then raises stem end discoloration. Moisture swings cause scab (dry at tuber set), growth cracks, swollen lenticels, blackheart, brown center and hollow heart. Total N 150 to 180 lb/A with 100 lb/A sidedressed 4 to 5 weeks after planting.</li></ul>",
      calcs: ["eq-4.2-4.7", "crop-et", "eq-6.1"], book: ["4.6", "6.2", "6.5"],
      tags: ["lima beans", "snap beans", "sweet corn", "watermelon", "cantaloupe", "cucumber", "tomato", "pepper", "potato", "Kc"] }
  ],
  tables: [
    { id: "c1", title: "Most critical period of water need by crop (Table C-1)", cols: ["Crop", "Most critical period"],
      rows: [["Asparagus", "Brush (period after fern mowing)"], ["Lima beans", "Pollination and pod development"], ["Snap beans", "Pod enlargement"], ["Broccoli", "Head development"], ["Cabbage", "Head development"], ["Carrots", "Root enlargement"], ["Cauliflower", "Head development"], ["Sweet corn", "Silking and tasseling, ear development"], ["Cucumbers", "Flowering and fruit development"], ["Eggplants", "Flowering and fruit development"], ["Lettuce", "Head development"], ["Melons", "Flowering and fruit development"], ["Dry onions", "Bulb enlargement"], ["Peas", "Seed enlargement and flowering"], ["Peppers", "Flowering and fruit development"], ["White potatoes", "Tuber set and tuber enlargement"], ["Sweet potatoes", "Root enlargement"], ["Radishes", "Root enlargement"], ["Strawberries", "Establishment, runner development, fruit enlargement"], ["Summer squash", "Bud development and flowering"], ["Tomatoes", "Early flowering, fruit set, and enlargement"], ["Turnips", "Root enlargement"]],
      notes: "EB-236 2026/2027, Section C, Table C-1", calcs: [] },
    { id: "c2", title: "Available water holding capacity by soil texture (Table C-2)", cols: ["Soil texture", "Available water (in of water per in of soil)"],
      rows: [["Coarse sand, compacted sands", "0.02 to 0.06"], ["Fine sand", "0.04 to 0.09"], ["Loamy sand", "0.06 to 0.12"], ["Sandy loam", "0.11 to 0.15"], ["Fine sandy loam, compacted loams", "0.14 to 0.18"], ["Loam and silt loam", "0.17 to 0.23"], ["Clay loam and silty clay loam", "0.14 to 0.21"], ["Silty clay and clay", "0.13 to 0.18"]],
      notes: "EB-236 2026/2027, Section C, Table C-2", calcs: ["tab-2.3", "eq-2.14", "eq-6.2-6.5"] },
    { id: "c3", title: "Soil infiltration rate by texture (Table C-3)", cols: ["Soil texture", "Infiltration rate (in/h)"],
      rows: [["Coarse sand", "0.75 to 1.00"], ["Fine sand", "0.50 to 0.75"], ["Fine sandy loam", "0.35 to 0.50"], ["Silt loam", "0.25 to 0.40"], ["Clay loam", "0.10 to 0.30"]],
      notes: "EB-236 2026/2027, Section C, Table C-3", calcs: ["tab-11.4", "runoff-13"] },
    { id: "c4", title: "Drip water applied per hour per cropped acre, inches (Table C-4)", cols: ["Tape flow (gpm/100 ft)", "2.5 ft spacing", "3 ft", "4 ft", "5 ft", "6 ft", "7 ft", "8 ft"],
      rows: [[0.22, 0.08, 0.07, 0.05, 0.04, 0.04, 0.03, 0.03], [0.34, 0.13, 0.11, 0.08, 0.07, 0.05, 0.05, 0.04], [0.45, 0.17, 0.14, 0.11, 0.09, 0.07, 0.06, 0.05], [0.67, 0.26, 0.21, 0.16, 0.13, 0.11, 0.09, 0.08]],
      notes: "EB-236 2026/2027, Section C, Table C-4. Columns are tape (bed) spacing. Cropped area excludes drive rows. Valid at the manufacturer's recommended pressure.", calcs: ["drip-runtime", "eq-14.8", "run-time"] },
    { id: "c5", title: "Maximum hours per drip application (Table C-5)", cols: ["Soil texture", "Wetted width (in)", "0.22 gpm/100 ft", "0.34 gpm/100 ft", "0.45 gpm/100 ft", "0.67 gpm/100 ft"],
      rows: [["Coarse sand", 8, 1.5, 1.0, 0.7, 0.5], ["Fine sand", 10, 3.3, 2.1, 1.6, 1.1], ["Loamy sand", 12, 5.1, 3.3, 2.5, 1.7], ["Sandy loam", 16, 9.8, 6.4, 4.8, 3.2], ["Fine sandy loam", 20, 15.1, 9.8, 7.4, 5.0], ["Loam and silt loam", 24, 22.7, 14.7, 11.1, 7.4], ["Clay loam", 24, 19.3, 12.5, 9.4, 6.3], ["Silty clay and clay", 24, 17.0, 11.0, 8.3, 5.6]],
      notes: "EB-236 2026/2027, Section C, Table C-5. Based on a 12 inch root zone and daytime irrigation at 50% depletion. Halve the times for night irrigation or when the crop is not actively using water.", calcs: ["drip-runtime", "eq-6.2-6.5"] },
    { id: "c6", title: "Tensiometer irrigation guidelines (Table C-6)", cols: ["Soil texture", "Field capacity, no irrigation (cb)", "50% of available water depleted, irrigate (cb)"],
      rows: [["Sand, loamy sand", "5 to 10", "20 to 40"], ["Sandy loam, loam, silt loam", "10 to 20", "40 to 60"], ["Clay loam, clay", "20 to 40", "50 to 80"]],
      notes: "EB-236 2026/2027, Section C, Table C-6. 1 cb = 1 kPa.", calcs: ["tab-6.6", "tab-6.5"] },
    { id: "c7", title: "Equivalent injection proportions (Table C-7)", cols: ["Ratio", "ppm", "Percent"],
      rows: [["1:10,000", 100, 0.01], ["1:5,000", 200, 0.02], ["1:2,000", 500, 0.05], ["1:1,000", 1000, 0.1], ["1:500", 2000, 0.2], ["1:200", 5000, 0.5], ["1:100", 10000, 1], ["1:50", 20000, 2], ["1:20", 50000, 5], ["1:10", 100000, 10]],
      notes: "EB-236 2026/2027, Section C, Table C-7", calcs: ["eq-15.1", "pump-calibration"] },
    { id: "tom-coarse", title: "Tomato fertigation, coarse soils (OM under 2%, low to medium K): 150 lb N and 150 lb K2O", cols: ["Stage", "Weeks", "Days", "N lb/day", "N lb/week", "N lb/stage", "K2O lb/day", "K2O lb/week", "K2O lb/stage"],
      rows: [["Preplant (lb/A)", "", "", "", "", 50, "", "", 125], ["1 Early vegetative", "1 to 2", "1 to 14", 0.5, 3.5, 7, 0.5, 3.5, 7], ["2 Late vegetative", "3 to 4", "15 to 28", 0.7, 4.9, 9.8, 0.7, 4.9, 9.8], ["3 Early flowering", "5 to 6", "29 to 42", 1.0, 7, 14, 1, 7, 14], ["4 Flowering and fruiting", "7 to 8", "43 to 56", 1.5, 10.5, 21, 1.5, 10.5, 21], ["5 Early harvest", "9 to 11", "57 to 77", 2.2, 15.4, 46.2, 2.2, 15.4, 46.2], ["6 Later harvest", "12 to 14", "78 to 98", 2.5, 17.5, 52.5, 2.5, 17.5, 52.5]],
      notes: "EB-236 F Tomatoes (https://www.udel.edu/content/dam/udelImages/canr/pdfs/extension/sustainable-agriculture/commericial-veg-recommendations/F-Tomatoes.pdf). Based on 7,260 linear bed ft/A (6 ft beds). Preplant goes under the mulch on the bed area.", calcs: ["eq-15.1", "injection-plan"] },
    { id: "tom-fine", title: "Tomato fertigation, finer soils (OM over 2%, high or optimum K): 75 lb N and 75 lb K2O", cols: ["Stage", "Weeks", "Days", "N lb/day", "N lb/week", "N lb/stage", "K2O lb/day", "K2O lb/week", "K2O lb/stage"],
      rows: [["Preplant (lb/A)", "", "", "", "", 50, "", "", 50], ["1 Early vegetative", "1 to 2", "1 to 14", 0.25, 1.75, 3.5, 0.25, 1.75, 3.5], ["2 Late vegetative", "3 to 4", "15 to 28", 0.35, 2.45, 4.9, 0.35, 2.45, 4.9], ["3 Early flowering", "5 to 6", "29 to 42", 0.5, 3.5, 7, 0.5, 3.5, 7], ["4 Flowering and fruiting", "7 to 8", "43 to 56", 0.75, 5.25, 10.5, 0.75, 5.25, 10.5], ["5 Early harvest", "9 to 11", "57 to 77", 1.1, 7.7, 23.1, 1.1, 7.7, 23.1], ["6 Later harvest", "12 to 14", "78 to 98", 1.25, 8.75, 26.25, 1.25, 8.75, 26.25]],
      notes: "EB-236 F Tomatoes. Based on 7,260 linear bed ft/A (6 ft beds).", calcs: ["eq-15.1", "injection-plan"] },
    { id: "pep-coarse", title: "Pepper fertigation, coarse soils (OM under 2%, low to medium K): 75 lb N and 125 lb K2O", cols: ["Stage", "Weeks", "Days", "N lb/day", "N lb/week", "N lb/stage", "K2O lb/day", "K2O lb/week", "K2O lb/stage"],
      rows: [["Preplant (lb/A)", "", "", "", "", 50, "", "", 100], ["1 Early vegetative", "1 to 2", "1 to 14", 0.5, 3.5, 7, 0.5, 3.5, 7], ["2 Late vegetative", "3 to 4", "15 to 28", 0.7, 4.9, 9.8, 0.7, 4.9, 9.8], ["3 Early flowering", "5 to 6", "29 to 42", 1.0, 7, 14, 1, 7, 14], ["4 Fruit development", "7 to 8", "43 to 56", 1.5, 10.5, 21, 1.5, 10.5, 21], ["5 Harvest period", "9 to 14", "56 to 98", 1.8, 12.6, 75.6, 1.8, 12.6, 75.6]],
      notes: "EB-236 F Peppers (https://www.udel.edu/content/dam/udelImages/canr/pdfs/extension/sustainable-agriculture/commericial-veg-recommendations/F-Peppers.pdf). Based on 7,260 linear bed ft/A (6 ft beds). For extended harvest continue at the stage 5 rate.", calcs: ["eq-15.1", "injection-plan"] },
    { id: "pep-fine", title: "Pepper fertigation, finer soils (OM over 2%, high or optimum K): 75 lb N and 75 lb K2O", cols: ["Stage", "Weeks", "Days", "N lb/day", "N lb/week", "N lb/stage", "K2O lb/day", "K2O lb/week", "K2O lb/stage"],
      rows: [["Preplant (lb/A)", "", "", "", "", 50, "", "", 50], ["1 Early vegetative", "1 to 2", "1 to 14", 0.25, 1.75, 3.5, 0.25, 1.75, 3.5], ["2 Late vegetative", "3 to 4", "15 to 28", 0.35, 2.45, 4.9, 0.35, 2.45, 4.9], ["3 Early flowering", "5 to 6", "29 to 42", 0.5, 3.5, 7, 0.5, 3.5, 7], ["4 Fruit development", "7 to 8", "43 to 56", 0.75, 5.25, 10.5, 0.75, 5.25, 10.5], ["5 Harvest period", "9 to 14", "56 to 98", 1.25, 7.7, 46.2, 1.1, 7.7, 46.2]],
      notes: "EB-236 F Peppers. Stage 5 N is printed as 1.25 lb/day, but 7.7 lb/week matches 1.1 lb/day, so check the printed table before use.", calcs: ["eq-15.1", "injection-plan"] },
    { id: "wm-coarse", title: "Watermelon fertigation, coarse soils (OM under 2%, low to medium K): 125 lb N and 125 lb K2O", cols: ["Stage", "Weeks", "Days", "N lb/day", "N lb/week", "N lb/stage", "K2O lb/day", "K2O lb/week", "K2O lb/stage"],
      rows: [["Preplant (lb/A)", "", "", "", "", 25, "", "", 50], ["1 Early vegetative", "1 to 2", "1 to 14", 1, 7, 14, 1, 7, 14], ["2 Late vegetative", "3 to 4", "15 to 28", 1.5, 10.5, 21, 1.5, 10.5, 21], ["3 Flowering and fruiting", "5 to 8", "29 to 56", 2, 14, 56, 2, 14, 56], ["4 Harvest", "9 to 10", "57 to 70", 1.5, 10.5, 21, 1.5, 10.5, 21], ["5 Repeat harvest", "11 to 12", "71 to 84", 1, 7, 14, 1, 7, 14]],
      notes: "EB-236 F Watermelons (https://www.udel.edu/content/dam/udelImages/canr/pdfs/extension/sustainable-agriculture/commericial-veg-recommendations/F-Watermelons.pdf). Based on 6,222 linear bed ft/A (7 ft beds).", calcs: ["eq-15.1", "injection-plan"] },
    { id: "wm-fine", title: "Watermelon fertigation, finer soils (OM over 2%, high or optimum K): 100 lb N and 50 lb K2O", cols: ["Stage", "Weeks", "Days", "N lb/day", "N lb/week", "N lb/stage", "K2O lb/day", "K2O lb/week", "K2O lb/stage"],
      rows: [["Preplant (lb/A)", "", "", "", "", 50, "", "", 50], ["1 Early vegetative", "1 to 2", "1 to 14", 0.4, 2.8, 5.6, 0.3, 2.1, 4.2], ["2 Late vegetative", "3 to 4", "15 to 28", 0.9, 6.3, 12.6, 0.6, 4.2, 8.4], ["3 Flowering and fruiting", "5 to 8", "29 to 56", 1.4, 9.8, 39.2, 0.9, 6.3, 25.2], ["4 Harvest", "9 to 10", "57 to 70", 0.9, 6.3, 12.6, 0.6, 4.2, 8.4], ["5 Repeat harvest", "11 to 12", "71 to 84", 0.4, 2.8, 5.6, 0.3, 2.1, 4.2]],
      notes: "EB-236 F Watermelons. Based on 6,222 linear bed ft/A (7 ft beds).", calcs: ["eq-15.1", "injection-plan"] },
    { id: "mm-coarse", title: "Muskmelon fertigation, coarse soils (OM under 2%, low to medium K): 100 lb N and 100 lb K2O", cols: ["Stage", "Weeks", "Days", "N lb/day", "N lb/week", "N lb/stage", "K2O lb/day", "K2O lb/week", "K2O lb/stage"],
      rows: [["Preplant (lb/A)", "", "", "", "", 50, "", "", 100], ["1 Early vegetative", "1 to 4", "1 to 28", 0.9, 6.3, 25.2, 0.9, 6.3, 25.2], ["2 Late vegetative", "5 to 7", "29 to 49", 1.3, 9.1, 27.3, 1.3, 9.1, 27.3], ["3 Flowering and fruiting", "8 to 11", "50 to 77", 1.5, 10.5, 42, 1.5, 10.5, 42], ["4 Harvest", "12 to 13", "78 to 91", 0.7, 4.9, 9.8, 0.7, 4.9, 9.8]],
      notes: "EB-236 F Muskmelons (https://www.udel.edu/content/dam/udelImages/canr/pdfs/extension/sustainable-agriculture/commericial-veg-recommendations/F-Muskmelons.pdf). Based on 7,260 linear bed ft/A (6 ft beds). For extended harvest continue at the stage 4 rate.", calcs: ["eq-15.1", "injection-plan"] },
    { id: "mm-fine", title: "Muskmelon fertigation, finer soils (OM over 2%, high or optimum K): 60 lb N and 60 lb K2O", cols: ["Stage", "Weeks", "Days", "N lb/day", "N lb/week", "N lb/stage", "K2O lb/day", "K2O lb/week", "K2O lb/stage"],
      rows: [["Preplant (lb/A)", "", "", "", "", 40, "", "", 40], ["1 Early vegetative", "1 to 4", "1 to 28", 0.5, 3.5, 14, 0.5, 3.5, 14], ["2 Late vegetative", "5 to 7", "29 to 49", 0.8, 5.6, 16.8, 0.8, 5.6, 16.8], ["3 Flowering and fruiting", "8 to 11", "50 to 77", 0.9, 6.3, 25.2, 0.9, 6.3, 25.2], ["4 Harvest", "12 to 13", "78 to 91", 0.4, 2.8, 5.6, 0.4, 2.8, 5.6]],
      notes: "EB-236 F Muskmelons. Based on 7,260 linear bed ft/A (6 ft beds).", calcs: ["eq-15.1", "injection-plan"] },
    { id: "cuc", title: "Cucumber fertigation schedules as printed (two soil scenarios)", cols: ["Stage", "Weeks", "Days", "N lb/day", "N lb/week", "N lb/stage", "K2O lb/day", "K2O lb/week", "K2O lb/stage"],
      rows: [["Heading: 125 lb N and 125 lb K2O, coarse soils, preplant 25 N and 50 K2O", "", "", "", "", "", "", "", ""], ["1 Early vegetative", "1", "1 to 7", 0.5, 3.5, 3.5, 0.4, 2.8, 2.8], ["2 Late vegetative", "2 to 3", "8 to 14", 0.9, 6.3, 12.6, 0.7, 4.9, 9.8], ["3 Fruiting and harvest", "4 to 7", "15 to 42", 1.4, 9.8, 39.2, 0.9, 6.3, 25.2], ["4 Later harvest", "8 to 10", "43 to 70", 0.9, 6.3, 18.9, 0.6, 4.2, 12.6], ["Heading: 75 lb N and 50 lb K2O, finer soils, preplant 50 N and 50 K2O", "", "", "", "", "", "", "", ""], ["1 Early vegetative", "1", "1 to 7", 1, 7, 7, 1, 7, 7], ["2 Late vegetative", "2 to 3", "8 to 14", 1.5, 10.5, 21, 1.6, 11.2, 22.4], ["3 Fruiting and harvest", "4 to 7", "15 to 42", 2.2, 15.4, 61.6, 2.2, 15.4, 61.6], ["4 Later harvest", "8 to 10", "43 to 70", 1.7, 11.9, 35.7, 1.6, 11.2, 33.6]],
      notes: "EB-236 F Cucumbers (https://www.udel.edu/content/dam/udelImages/canr/pdfs/extension/sustainable-agriculture/commericial-veg-recommendations/F-Cucumbers.pdf). Based on 7,260 linear bed ft/A (6 ft beds). Caution: the rows printed under the 125 lb N heading sum to about 74 lb N and 50 lb K2O, and the rows under the 75 lb N heading sum to about 125 lb N and 125 lb K2O, so the row blocks appear swapped in the source. Confirm before use.", calcs: ["eq-15.1", "injection-plan"] },
    { id: "veg-n", title: "Total N and split timing for selected crops (soil test tables)", cols: ["Crop", "Total N (lb/A)", "Split and timing"],
      rows: [["Sweet corn, fresh market", "125 to 175", "40 to 60 broadcast, 20 banded at planting, 50 to 100 sidedress when corn is 12 in tall"], ["Sweet corn, processing", "150 to 200", "55 to 80 broadcast, 20 banded, 50 to 100 sidedress 2 weeks after emergence"], ["Watermelon, irrigated", "125 to 150", "25 to 50 broadcast, 25 to 50 when vines run, 25 to 50 after first harvest, or fertigation schedule"], ["Watermelon, non-irrigated", "80 to 100", "50 broadcast, 25 to 50 when vines start to run"], ["Muskmelon", "75 to 150", "25 to 50 broadcast, 25 to 50 when vines run, 25 to 50 before first harvest, or fertigation schedule"], ["Cucumber", "80 to 150", "25 to 50 broadcast, 25 banded, 25 to 75 when vines begin to run"], ["Pepper", "100 to 180", "50 broadcast, 50 after first fruit set, 25 to 30 later if needed, or fertigation schedule"], ["White potato", "150 to 180", "100 sidedress 4 to 5 weeks after planting, 0 to 30 adjusted by petiole nitrate at flowering"]],
      notes: "EB-236 Chapter F crop sections, Recommended Nutrients Based on Soil Tests. State soil test reports and the farm nutrient management plan take precedence.", calcs: [] },
    { id: "potato-sw", title: "Potato soil water targets (percent of plant available water)", cols: ["Period", "Target"],
      rows: [["Whole season", "Above 65%"], ["Planting", "About 70 to 80%"], ["Vine kill", "Let fall to 60 to 65%"]],
      notes: "EB-236 F Potatoes (https://www.udel.edu/content/dam/udelImages/canr/pdfs/extension/sustainable-agriculture/commericial-veg-recommendations/F-Potatoes.pdf)", calcs: ["eq-6.1", "eq-2.9-2.11"] }
  ],
  facts: [
    { q: "How deep is the effective root zone for most vegetables?", a: "About 12 inches (EB-236 Section C).", tags: ["root zone"], calcs: ["eq-6.2-6.5"], book: ["6.3"] },
    { q: "What is peak water use for warm season vegetables in the Mid-Atlantic?", a: "Up to about 0.30 inch per day in midsummer at full canopy, and 0.3 inch per day or more in hot, dry weather (EB-236 Section C).", tags: ["ET", "peak"], calcs: ["crop-et"], book: ["4.6", "5.6"] },
    { q: "What soil moisture band gives the best vegetable crops?", a: "A narrow band just below field capacity, 60 to 80% available soil moisture (EB-236 Section C).", tags: ["scheduling"], calcs: ["eq-6.1"], book: ["6.2"] },
    { q: "How much water per irrigation on moderate water holding soils?", a: "0.25 to 0.75 inch per event, less during early growth. On sandy soils irrigate daily with only what the crop uses that day, and pulse with a 2 hour or longer break (EB-236 Section C).", tags: ["application depth", "pulse"], calcs: ["run-time"], book: ["6.4"] },
    { q: "Should rain count when scheduling irrigation under plastic mulch?", a: "Mostly no. Plastic keeps much of the rain out of the root zone, so discount most rainfall for mulched crops (EB-236 Section C).", tags: ["plastic mulch", "rain"], calcs: ["checkbook"], book: ["6.4"] },
    { q: "How much less water does drip use than sprinklers?", a: "Often half or less, mostly early in the season. Once the canopy is full the difference is negligible (EB-236 Section C).", tags: ["drip", "water savings"], calcs: [], book: ["14.1"] },
    { q: "What is the longest drip run time on loamy sand with 0.45 gpm per 100 ft tape?", a: "2.5 hours in the daytime at 50% depletion with a 12 inch root zone, and half that at night (Table C-5).", tags: ["run time", "loamy sand"], calcs: ["drip-runtime"], book: ["14.7"] },
    { q: "How much water does 0.45 gpm per 100 ft tape on 6 ft beds apply?", a: "0.07 inch per hour per cropped acre (Table C-4).", tags: ["drip", "application rate"], calcs: ["drip-runtime", "eq-14.8"], book: ["14.7"] },
    { q: "At what tensiometer reading should sandy soils be irrigated?", a: "At 20 to 40 cb on sand and loamy sand, which is about 50% depletion. Field capacity on these soils reads 5 to 10 cb (Table C-6).", tags: ["tensiometer", "sandy soils"], calcs: ["tab-6.6"], book: ["6.4"] },
    { q: "Where should tensiometers go in a drip irrigated bed?", a: "With the tip 6 to 12 inches deep, close to the drip tape and 6 to 12 inches from the plant, not on the dry bed shoulder. Use about four per management zone (EB-236 Section C).", tags: ["sensor placement"], calcs: [], book: ["2.10"] },
    { q: "At what tension do tensiometers stop working?", a: "Above about 80 cb the water column breaks and the tensiometer must be serviced. A 0 to 50 cb gauge suits sandy soils (EB-236 Section C).", tags: ["tensiometer"], calcs: [], book: ["2.10"] },
    { q: "What iron level causes drip clogging?", a: "Iron above 1 ppm can feed iron bacteria that make ochre slime (EB-236 Section C).", tags: ["iron", "clogging"], calcs: [], book: ["14.5"] },
    { q: "How much chlorine to treat iron in drip water?", a: "Inject continuously at 1 ppm chlorine per 1 ppm iron, usually 3 to 5 ppm in total, upstream of the filters (EB-236 Section C).", tags: ["chlorine", "iron"], calcs: ["eq-15.1"], book: ["14.5"] },
    { q: "What chlorine level injures plants?", a: "30 ppm or more can be phytotoxic (EB-236 Section C).", tags: ["chlorine", "phytotoxicity"], calcs: [], book: ["14.5"] },
    { q: "What is the chlorine injection formula for a positive displacement pump?", a: "gal/h = 0.006 x desired ppm x system gpm / % chlorine. Example: 5 ppm, 200 gpm, 5.25% bleach gives 1.14 gal/h (EB-236 Section C).", tags: ["injection rate", "chlorine"], calcs: ["eq-15.1", "pump-calibration"], book: ["15.4"] },
    { q: "What water pH does chlorine need?", a: "pH 6.5 to 7.5. Above 7.5 lower the pH first, because hypochlorite raises it (EB-236 Section C).", tags: ["pH", "chlorine"], calcs: [], book: ["14.5"] },
    { q: "How many linear bed feet are in a standard fertigated acre?", a: "7,260 linear bed feet at 6 ft bed spacing. Watermelon schedules use 6,222 at 7 ft beds (EB-236).", tags: ["LBF", "fertigation"], calcs: ["injection-plan"], book: ["15.4"] },
    { q: "How much 6-6-6 liquid supplies 40 lb N per acre?", a: "67 gal, since a 10 lb gallon holds 0.6 lb N (EB-236 Section C).", tags: ["fertigation", "liquid fertilizer"], calcs: ["injection-plan"], book: ["15.4"] },
    { q: "Why use no-P fertilizer through drip?", a: "With hard water, calcium phosphate can precipitate and clog emitters, so a 1-0-1 ratio is recommended (EB-236 Section C).", tags: ["fertigation", "clogging"], calcs: [], book: ["14.5"] },
    { q: "How deep is subsurface drip tape placed?", a: "3 to 10 inches for short term SDI on raised vegetable beds, 12 to 18 inches for long term SDI in corn and similar crops (EB-236 Section C).", tags: ["SDI"], calcs: [], book: ["14.3"] },
    { q: "When are snap and lima beans most sensitive to drought?", a: "Flowering and pod sizing, when water use can pass 0.25 inch per day. Keep soil at 50% of field capacity or more from the 2 trifoliate stage through pod sizing (EB-236 F Beans).", tags: ["lima beans", "snap beans"], calcs: [], book: ["6.5"] },
    { q: "How much water do watermelons use at peak?", a: "Up to 0.30 inch per day at fruit set and full vine cover. Do not let soil moisture drop below 50% of field capacity (EB-236 F Watermelons).", tags: ["watermelon"], calcs: ["crop-et"], book: ["4.6"] },
    { q: "What crop coefficients does EB-236 give for tomato?", a: "Initial 0.60 (weeks 1 to 4), mid-season 1.15 (weeks 4 to 10), end 0.90 (weeks 10 to 12) (EB-236 F Tomatoes).", tags: ["tomato", "Kc"], calcs: ["eq-4.2-4.7"], book: ["4.6"] },
    { q: "What soil water levels should potatoes have?", a: "Above 65% plant available water all season, about 70 to 80% at planting, and 60 to 65% at vine kill (EB-236 F Potatoes).", tags: ["potato"], calcs: ["eq-6.1"], book: ["6.2"] },
    { q: "How should sweet corn N be split on very sandy soils?", a: "Cut the broadcast N and add 40 lb/A when corn is 6 inches tall and again at 12 inches (EB-236 F Sweet Corn, footnote 5).", tags: ["sweet corn", "split N", "sandy soils"], calcs: [], book: [] },
    { q: "How much more N does irrigated watermelon get?", a: "125 to 150 lb N/A irrigated versus 80 to 100 lb N/A non-irrigated (EB-236 F Watermelons).", tags: ["watermelon", "nitrogen"], calcs: [], book: [] },
    { q: "Can peppers be grown on plastic without drip?", a: "Not on coarse or sandy soils. If plastic is used without drip fertilization, broadcast 150 lb/A N with the P and K (EB-236 F Peppers).", tags: ["pepper", "plastic mulch"], calcs: [], book: [] },
    { q: "How far from sensitive sites must chemigated areas be posted?", a: "Post when any treated area is within 300 ft of homes, labor housing, businesses, hospitals, schools, parks or playgrounds, or open to the public (EB-236 Section C).", tags: ["chemigation"], calcs: [], book: ["15.3"] }
  ]
}]);

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

window.DE_DOCS = (window.DE_DOCS || []).concat([{
  id: "sare-lne12-314",
  title: "Improving water and nitrogen use efficiency using soil moisture monitoring to improve irrigation management (SARE LNE12-314)",
  short: "SARE LNE12-314 (Adkins)",
  org: "Northeast SARE, University of Delaware (project leader James Adkins)",
  year: 2016,
  url: "https://projects.sare.org/project-reports/lne12-314/",
  license: "summarized",
  summary: "Three seasons (2013 to 2015) of wireless Watermark soil moisture stations in 15 to 20 grower corn fields per year in Delaware. It is the main Delaware record of how growers actually used sensor data, how to place and install sensors in Delmarva soils, what the system cost, and why sensors did not catch on for field crops in a humid region.",
  sections: [
    { id: "background", h: "Delaware irrigation background",
      html: "<ul><li>About 105,000 irrigated acres in Delaware (2007 USDA census). A 2010 GIS layer counted 2,026 center pivots on 113,000 acres.</li><li>Center pivots irrigate over 85% of irrigated acres.</li><li>Most growers scheduled with the ET checkbook method, using reference ET from 32 DEOS weather stations (at the time).</li><li>NRCS and UD tests of more than 400 center pivots (about 25,000 acres) found over 50% applied less than 80% of the water shown on the manufacturer's calibration chart. A checkbook that trusts the chart will over credit irrigation on those systems.</li><li>A 2009 to 2011 pilot with 3 Sussex County growers came before this project. Manual data download then took 20 to 30 minutes per visit.</li></ul>",
      calcs: ["catch-can", "eq-13.7-inv", "meter-depth"], book: ["5.4", "13.5", "6.4"], tags: ["center pivot", "pivot calibration", "checkbook", "Delaware"] },
    { id: "equipment", h: "Sensor system used",
      html: "<ul><li>Sensors: Irrometer Watermark granular matrix (matric potential) sensors.</li><li>System: Watermark 950T wireless transmitters sending to a 950R central receiver and logger, upgraded with a cell modem that posted data to the maker's web reporting site.</li><li>Each station transmitted about 10 to 15 times per day, viewable online in near real time.</li><li>Cell signal was adequate at all 54 sites tested over three years.</li></ul><p>The reports do not give the centibar trigger values growers were told to use. Growers read the data and made their own decisions.</p>",
      calcs: [], book: ["2.10"], tags: ["Watermark", "granular matrix sensor", "telemetry", "data logger"] },
    { id: "placement", h: "Station placement and depths",
      html: "<ul><li>4 stations per field: 1 in the lightest (highest) soil, 1 in the heaviest (lowest) soil, and 2 in the main soil type.</li><li>3 sensors per station at 6, 12 and 18 inches below the surface.</li><li>Installed late May to early June, removed early September just before harvest.</li><li>Project staff did all installation and upkeep and contacted each grower weekly.</li></ul><p>This layout brackets the field: the light soil station shows when to start, the heavy soil station shows where water may be in excess, and the two main soil stations drive the decision.</p>",
      calcs: ["swd-fcobs", "tab-6.5"], book: ["2.10", "6.4"], tags: ["sensor placement", "depth", "soil variability"] },
    { id: "install", h: "Installation lessons",
      html: "<ul><li>Sands: bore an undersized hole and press fit the sensor. This gave good contact.</li><li>Heavier soils (gravel, clay, silt): bore an oversized hole and set the sensor in a slurry made from the removed soil. One 2014 field read extremely dry while field checks showed adequate moisture, because of poor contact in tight gravelly soil. The slurry method was adopted in 2015.</li><li>Kent County sites (heavier soils, north) gave erratic data compared with sandier Sussex County sites.</li><li>Receiver failures early in 2013 came from an antenna jack seal installed wrong at the factory, letting water reach the circuits. One transmitter was lost to lightning.</li><li>Growers estimated 8 to 12 person-hours to install and set up one field network, and cited this as the biggest barrier.</li></ul>",
      calcs: [], book: ["2.10"], tags: ["installation", "sensor contact", "slurry", "reliability"] },
    { id: "results", h: "How growers used the data",
      html: "<ul><li>2013 (very wet): 20 growers, about 11,304 irrigated corn acres. All applied more than 10 inches less irrigation than usual because of repeated rain. Sensors had virtually no effect on scheduling. Saturated soils cut corn yield 10 to 35% for many growers, and 16 reported similar or lower yields, blamed on excess rain and nitrogen loss.</li><li>2014 (mild, timely rain): 19 growers, 8,940 acres. 2 applied less water, 5 more, 5 the same, and 7 did not look at, did not trust, or could not reach the data. 6 checked daily, 2 every other day, 5 weekly, 6 never or had equipment problems. The web site was down 4 days over the July 4 weekend at a critical corn stage.</li><li>2015 (mild): 15 growers, 3,680 acres. 2 applied less, 3 more, 3 the same, 6 did not use the data. 3 reported yield increases but none credited the sensors.</li><li>Several growers said the sensors were most useful for deciding when to restart irrigation after a big rain.</li><li>12 growers said they would change practice, mostly toward more frequent, smaller irrigations.</li></ul>",
      calcs: [], book: ["6.4"], tags: ["results", "corn", "grower adoption", "wet year"] },
    { id: "economics", h: "Cost of monitoring versus cost of water",
      html: "<ul><li>Equipment about $13.50 per acre plus about $9 per acre labor, based on a 5 year equipment life, a 50 acre field and $25 per hour labor.</li><li>Applying an extra inch of water cost about $3 to $6 per acre.</li><li>The report concludes that over irrigating by an inch or two costs less than the monitoring equipment for Delaware field crops, and that economic benefit could not be measured because no cooperator adopted the practice.</li></ul>",
      calcs: ["eq-8.22"], book: ["8.7"], tags: ["economics", "pumping cost", "sensor cost"] },
    { id: "conclusions", h: "Conclusions and where sensors may still fit",
      html: "<ul><li>With the equipment available then, soil moisture monitoring was not a realistic tool for Mid-Atlantic field crop growers. Regular rain in a humid region covered for scheduling errors in all three years.</li><li>None of the 11 growers who said they would buy equipment had done so by spring 2016, mainly for lack of time to manage it. A private sensor service launched in 2015 also saw little uptake because of cost.</li><li>Sensors may fit better on high value specialty crops, including plastic mulched crops, and in dry or semi arid regions.</li><li>Needed next steps: a reliable low cost recording system, less labor to install and remove, simple ways to read data and trigger irrigation, and testing in a dry season and on poorly calibrated systems.</li></ul>",
      calcs: [], book: ["2.10", "6.4"], tags: ["conclusions", "humid region", "specialty crops"] }
  ],
  tables: [
    { id: "t1", title: "Sensor station design",
      cols: ["Item", "Value"],
      rows: [
        ["Sensor", "Irrometer Watermark (matric potential)"],
        ["Telemetry", "Watermark 950T transmitters to 950R receiver with cell modem"],
        ["Stations per field", "4 (1 lightest soil, 1 heaviest soil, 2 main soil)"],
        ["Sensors per station", "3"],
        ["Depths", "6, 12 and 18 in"],
        ["Transmissions", "about 10 to 15 per day"],
        ["Season", "installed late May to early June, removed early September"],
        ["Setup labor", "8 to 12 person-hours per field network"]
      ],
      notes: "SARE final report and 2013 and 2014 annual reports", calcs: [] },
    { id: "t2", title: "Participation and how growers changed irrigation",
      cols: ["Year", "Growers", "Irrigated corn acres", "Applied less", "Applied more", "Same", "Did not use data", "Reported yield increase"],
      rows: [
        ["2013", 20, 11304, "all (over 10 in less, due to rain)", 0, 0, "n/a", 1],
        ["2014", 19, 8940, 2, 5, 5, 7, "2 (another section says all 19, 15 credited weather)"],
        ["2015", 15, 3680, 2, 3, 3, 6, "3 (none credited sensors)"]
      ],
      notes: "Final report. 2013 acres also given as 11,340 in the milestones section.", calcs: [] },
    { id: "t3", title: "Monitoring cost versus water cost",
      cols: ["Item", "Value"],
      rows: [
        ["Equipment", "about $13.50 per acre"],
        ["Labor", "about $9 per acre"],
        ["Basis", "5 year life, 50 acre field, $25 per hour"],
        ["Cost of 1 extra inch of irrigation", "$3 to $6 per acre"]
      ],
      notes: "Final report, economic analysis", calcs: ["eq-8.22"] }
  ],
  facts: [
    { q: "What sensors did the Delaware SARE project use?", a: "Irrometer Watermark sensors with 950T wireless transmitters and a 950R cell modem receiver, about 10 to 15 readings per day.", tags: ["Watermark", "sensors"], calcs: [], book: ["2.10"] },
    { q: "At what depths were soil moisture sensors installed in Delaware corn?", a: "6, 12 and 18 inches, three sensors per station (SARE LNE12-314).", tags: ["sensor depth", "corn"], calcs: [], book: ["2.10"] },
    { q: "How many sensor stations per field, and where?", a: "Four: one in the lightest soil, one in the heaviest soil and two in the main soil type.", tags: ["sensor placement"], calcs: [], book: ["2.10"] },
    { q: "How do you install a Watermark sensor in heavy soil?", a: "Bore an oversized hole and set the sensor in a slurry of the removed soil. In sands an undersized hole and press fit is enough.", tags: ["installation"], calcs: [], book: ["2.10"] },
    { q: "How accurate are pivot calibration charts in Delaware?", a: "In NRCS and UD tests of over 400 pivots (about 25,000 acres), over 50% applied less than 80% of the chart amount.", tags: ["pivot calibration", "center pivot"], calcs: ["catch-can", "eq-13.7-inv"], book: ["5.4", "13.5"] },
    { q: "What share of Delaware irrigation is center pivot?", a: "Over 85% of irrigated acres. A 2010 GIS layer counted 2,026 pivots on 113,000 acres.", tags: ["center pivot"], calcs: [], book: ["13.1"] },
    { q: "How long does it take to set up a sensor network in a field?", a: "Growers estimated 8 to 12 person-hours per field, the biggest barrier they cited.", tags: ["labor"], calcs: [], book: [] },
    { q: "What does soil moisture monitoring cost per acre?", a: "About $13.50 per acre for equipment plus $9 per acre labor (5 year life, 50 acre field, $25 per hour). An extra inch of irrigation cost $3 to $6 per acre.", tags: ["economics"], calcs: ["eq-8.22"], book: ["8.7"] },
    { q: "Did sensors change irrigation on Delaware corn farms?", a: "Little. In 2014, 2 of 19 growers applied less, 5 more, 5 the same and 7 did not use the data. In 2015, 2 of 15 applied less.", tags: ["adoption", "results"], calcs: [], book: [] },
    { q: "What happened to corn in the wet 2013 season?", a: "All 20 growers applied over 10 inches less irrigation, and saturated soils cut yields 10 to 35% for many.", tags: ["wet year", "corn"], calcs: [], book: [] },
    { q: "When did growers find soil moisture data most useful?", a: "For deciding when to restart irrigation after a large rain.", tags: ["sensors", "scheduling"], calcs: ["ld-ed-window"], book: ["6.4"] },
    { q: "Why did sensors not catch on for Delaware field crops?", a: "Cost and time to manage, reliability problems, and regular rain that hid scheduling errors. None of the 11 who planned to buy had done so by spring 2016.", tags: ["adoption"], calcs: [], book: [] },
    { q: "Where might soil moisture sensors pay in Delaware?", a: "High value specialty crops including plastic mulched crops, and dry seasons or poorly calibrated systems (SARE LNE12-314 conclusions).", tags: ["specialty crops", "sensors"], calcs: [], book: ["14.7"] },
    { q: "How did Kent County sensor data compare with Sussex?", a: "Kent County sites on heavier soils gave erratic data compared with sandier Sussex County sites.", tags: ["soils", "sensors"], calcs: [], book: ["2.10"] }
  ]
}]);

window.DE_DOCS = (window.DE_DOCS || []).concat([{
  id: "ud-corn-n",
  title: "Nitrogen Management for Corn in Delaware: The Pre-Sidedress Nitrate Test (PSNT)",
  short: "UD Corn N and PSNT",
  org: "University of Delaware Cooperative Extension, Department of Plant and Soil Sciences (Sims, Vasilas, Gartley, revised by Shober, Gartley, Sims)",
  year: 2025,
  url: "https://www.udel.edu/content/dam/udelImages/canr/pdfs/extension/factsheets/Nitrogen-Management-for-Corn-in-Delaware.pdf",
  license: "summarized",
  summary: "The University of Delaware fact sheet (reviewed September 2025) on setting corn sidedress N with the pre-sidedress soil nitrate test. It gives the Delaware base rate of 1.0 lb N per bushel of yield goal, the sampling method, the PSNT rate table by yield goal and the manure credit table. For irrigated corn on sandy Coastal Plain soils it is the tool for deciding how much N to put on by sidedress or through the pivot after V5 to V6.",
  sections: [
    { id: "base-rate", h: "Delaware base N rate for corn",
      html: "<p>Soil N alone rarely meets the corn crop's need. The general Delaware recommendation is 1.0 lb N per bushel of expected (realistic) yield. The PSNT estimates how much of that the soil will supply in the season, so the rest can be applied by sidedressing or fertigation.</p><p>The fact sheet does not give separate rates for irrigated and dryland corn. Its PSNT guidance was built from field studies run under both irrigated and dryland conditions in Delaware and nearby Mid-Atlantic states. Irrigated fields enter the rate table through their higher realistic yield goal (the table runs to 275 bu/ac).</p>",
      calcs: [], book: ["15.1"],
      tags: ["N rate", "yield goal", "irrigated corn", "dryland corn", "1 lb N per bushel"] },
    { id: "concept", h: "How the PSNT works and when to sample",
      html: "<p>Nitrate in the top 12 inches early in the season tracks how much N the soil and recent organic sources (manure, legume residue) will release over the season. The sample is taken right before corn's period of fastest N uptake, when plants are about 10 to 12 inches tall (about V5 to V6). Sidedress or fertigation N applied after that point lines up with peak crop demand.</p>",
      calcs: [], book: ["15.4"],
      tags: ["PSNT", "V5", "V6", "N uptake", "timing"] },
    { id: "sampling", h: "PSNT sampling and sample handling",
      html: "<ul><li>Take 15 to 20 cores, 12 inches deep, per field, with no more than 20 acres per sample.</li><li>Sample separately where soils differ or stands differ (population, growth stage).</li><li>Take cores from the middle of the row to miss starter bands.</li><li>Wait 2 to 3 days after a significant rain. Do not sample right after a leaching rain.</li><li>Mix the cores, spread a 1 to 2 cup subsample no more than 1/2 inch thick and dry it in a warm, dry place. If drying cannot start within 1 hour, refrigerate (preferably below 50 F) or keep on ice. Samples stored wet lose nitrate to denitrification and read falsely low.</li></ul>",
      calcs: [], book: [],
      tags: ["soil sampling", "cores", "sample handling", "denitrification"] },
    { id: "interpret", h: "Reading the PSNT result",
      html: "<ul><li>At 20 ppm nitrate-N or more, Delaware studies found little or no yield gain from sidedress N.</li><li>At 25 ppm or less, use Table 1 to get the basic rate for your yield goal. Above 25 ppm Table 1 gives 0 lb N/ac up to 150 bu/ac and 40 to 70 lb N/ac for 200 to 275 bu/ac goals.</li><li>Sidedress N = basic rate (Table 1) minus banded starter N minus manure credit (Table 2).</li><li>Do not credit broadcast N put on before sidedress (for example N with a pre-emergence herbicide), because the PSNT already measures it.</li><li>The test is most accurate in typical seasons and less accurate in very wet or very dry years. A cold or dry spring slows manure breakdown and can give a low reading.</li></ul>",
      calcs: [], book: [],
      tags: ["PSNT threshold", "20 ppm", "25 ppm", "sidedress rate", "starter credit"] },
    { id: "manure", h: "Manure credit on sandy soils",
      html: "<p>Fields that got 3 tons or more of manure per acre and show a low PSNT get a manure credit (Table 2). On sandy soils nitrate often leaches below the 12 inch sampling depth but stays within the root zone, so the test reads low while the crop can still reach the N. Delaware trials on such manured fields often showed no response to sidedress N. If soil moisture improves later, manure N is released and sidedressing may not be needed.</p>",
      calcs: [], book: ["5.3"],
      tags: ["manure credit", "poultry litter", "sandy soils", "leaching"] },
    { id: "leaching", h: "Leaching risk on Delaware's Coastal Plain soils",
      html: "<p>Nitrate is the form of N most easily leached and most affected by changing soil temperature and moisture. Delaware's sandy, low organic matter Coastal Plain soils mineralize less N than Midwest soils, so Midwest PSNT guidelines (often used there to judge fall applied anhydrous ammonia) should not be used in Delaware. Matching N to the PSNT avoids over-fertilizing and lowers the risk of nitrate reaching groundwater. On irrigated sands, this is also why irrigation depth should not push water past the root zone after N is applied.</p>",
      calcs: ["eq-5.18", "leaching-procedure", "eq-5.14"], book: ["5.3", "1.4"],
      tags: ["nitrate leaching", "Coastal Plain", "groundwater", "irrigation management"] },
    { id: "when-not", h: "When not to use the PSNT",
      html: "<ul><li>Fields with no manure history (only commercial fertilizer for 3 or more years).</li><li>Manured fields that already received more than 40 to 50 lb N/ac of commercial N preplant or pre-emergence.</li></ul><p>For these fields base N on yield goal (1 lb N per bushel) minus the N already applied.</p>",
      calcs: [], book: [],
      tags: ["PSNT limits", "no manure history"] },
    { id: "example", h: "Worked example and applying the balance by pivot",
      html: "<p>Yield goal 150 bu/ac, PSNT 14 ppm, 30 lb/ac starter N, 3 tons/ac poultry litter applied 2 months before planting:</p><ul><li>Basic rate from Table 1: 115 lb N/ac</li><li>Manure credit: 10 lb N per ton x 3 tons = 30 lb N/ac</li><li>Sidedress N: 115 minus 30 minus 30 = 55 lb N/ac</li></ul><p>The fact sheet says the remaining N can go on by sidedress or fertigation but gives no pivot fertigation schedule, amounts per application or growth stage split. Use the book's chemigation injection procedures to deliver the computed amount through a pivot.</p>",
      calcs: ["eq-15.2", "injection-plan", "pump-calibration"], book: ["15.4"],
      tags: ["worked example", "fertigation", "center pivot", "sidedress"] }
  ],
  tables: [
    { id: "t1", title: "Basic N rate (lb N/ac) by PSNT and realistic yield goal (Table 1)", cols: ["PSNT (ppm)", "75 bu/ac", "100", "125", "150", "175", "200", "225", "250", "275"],
      rows: [["0 to 10", 75, 100, 125, 150, 175, 200, 225, 250, 275], ["11 to 15", 55, 75, 95, 115, 130, 150, 170, 190, 210], ["16 to 20", 0, 55, 70, 85, 100, 115, 130, 145, 160], ["21 to 25", 0, 0, 0, 60, 75, 85, 100, 110, 125], ["over 25", 0, 0, 0, 0, 0, 40, 50, 60, 70]],
      notes: "UD fact sheet Table 1 (values from the UD web version of the fact sheet, https://udel.edu/academics/colleges/canr/cooperative-extension/fact-sheets/nitrogen-management-for-corn-in-delaware-the-pre-sidedress-nitrate-test/). Subtract starter N and manure credit to get the sidedress rate.", calcs: [] },
    { id: "t2", title: "Manure N credit, lb N per ton applied (Table 2)", cols: ["PSNT (ppm)", "Poultry litter, applied 1 month or less before", "Poultry litter, more than 1 month", "Dairy, swine, horse, 1 month or less", "Dairy, swine, horse, more than 1 month"],
      rows: [["0 to 10", 30, 20, 3, 2], ["11 to 15", 20, 10, 2, 1], ["16 to 25", 10, 5, 1, 0.5], ["over 25", 0, 0, 0, 0]],
      notes: "UD fact sheet Table 2. Applies only to fields that received 3 tons/ac or more of manure.", calcs: [] },
    { id: "t3", title: "PSNT sampling protocol", cols: ["Item", "Value"],
      rows: [["Timing", "Corn 10 to 12 in tall (about V5 to V6)"], ["Depth", "12 in"], ["Cores per sample", "15 to 20"], ["Maximum area per sample", "20 ac"], ["Core position", "Middle of the row"], ["Wait after significant rain", "2 to 3 days"], ["Subsample to dry", "1 to 2 cups, 1/2 in thick or less"], ["Start drying within", "1 hour, otherwise chill below 50 F or ice"]],
      notes: "UD fact sheet, sampling section", calcs: [] }
  ],
  facts: [
    { q: "What is Delaware's general corn N recommendation?", a: "1.0 lb N per bushel of expected yield (UD PSNT fact sheet).", tags: ["N rate", "yield goal"], calcs: [], book: [] },
    { q: "When is the PSNT sample taken?", a: "When corn is about 10 to 12 inches tall (about V5 to V6), just before maximum N uptake (UD PSNT fact sheet).", tags: ["PSNT", "timing"], calcs: [], book: [] },
    { q: "How deep and how many cores for a PSNT?", a: "15 to 20 cores to 12 inches per field, with no more than 20 acres per sample, taken mid-row (UD PSNT fact sheet).", tags: ["sampling"], calcs: [], book: [] },
    { q: "At what PSNT level is sidedress N not needed?", a: "Delaware studies found little or no yield increase at 20 ppm or more. Table 1 gives 0 lb N/ac above 25 ppm for yield goals up to 150 bu/ac (UD PSNT fact sheet).", tags: ["PSNT threshold"], calcs: [], book: [] },
    { q: "How is the sidedress N rate calculated from the PSNT?", a: "Sidedress N = Table 1 basic rate minus banded starter N minus manure credit (UD PSNT fact sheet).", tags: ["sidedress"], calcs: [], book: [] },
    { q: "What is the basic N rate for a 200 bu/ac irrigated corn goal at a PSNT of 11 to 15 ppm?", a: "150 lb N/ac from Table 1, before subtracting starter N and any manure credit (UD PSNT fact sheet).", tags: ["irrigated corn", "Table 1"], calcs: [], book: [] },
    { q: "What does Table 1 give for a 250 bu/ac goal at PSNT over 25 ppm?", a: "60 lb N/ac. High yield goals still get 40 to 70 lb N/ac above 25 ppm (UD PSNT fact sheet).", tags: ["high yield", "Table 1"], calcs: [], book: [] },
    { q: "Does the UD fact sheet give separate N rates for irrigated and dryland corn?", a: "No. Its recommendations come from field studies under both irrigated and dryland conditions, and irrigation enters through the realistic yield goal (UD PSNT fact sheet).", tags: ["irrigated corn", "dryland"], calcs: [], book: [] },
    { q: "Why do sandy Delaware soils get a manure credit?", a: "Nitrate often leaches below the 12 inch sampling depth but stays in the root zone, so the PSNT reads low. Fields with 3 tons/ac or more of manure get a credit (UD PSNT fact sheet).", tags: ["manure credit", "leaching"], calcs: ["eq-5.18"], book: ["5.3"] },
    { q: "What is the poultry litter credit at a PSNT of 11 to 15 ppm?", a: "20 lb N per ton if applied 1 month or less before, 10 lb N per ton if applied more than 1 month before (Table 2).", tags: ["poultry litter"], calcs: [], book: [] },
    { q: "How long after rain should PSNT samples wait?", a: "2 to 3 days after a significant rainfall (UD PSNT fact sheet).", tags: ["sampling", "rain"], calcs: [], book: [] },
    { q: "When should the PSNT not be used?", a: "On fields with no manure history for 3 or more years, and on manured fields that got more than 40 to 50 lb N/ac of commercial N preplant or pre-emergence. Use 1 lb N per bushel minus N applied instead (UD PSNT fact sheet).", tags: ["PSNT limits"], calcs: [], book: [] },
    { q: "Can Midwest PSNT guidelines be used in Delaware?", a: "No. Midwest soils mineralize more N than Delaware's sandy, low organic matter Coastal Plain soils (UD PSNT fact sheet).", tags: ["Coastal Plain"], calcs: [], book: [] },
    { q: "Is PSNT reliable in a very wet or very dry year?", a: "Less so. It is most accurate in typical seasons (UD PSNT fact sheet).", tags: ["weather"], calcs: [], book: [] },
    { q: "How is broadcast N with a pre-emergence herbicide handled in the PSNT?", a: "It is not credited, because the PSNT already measures it. Banded starter N is subtracted (UD PSNT fact sheet).", tags: ["starter", "credit"], calcs: [], book: [] },
    { q: "Worked example: 150 bu/ac, 14 ppm, 30 lb starter, 3 t/ac litter applied 2 months earlier?", a: "115 minus 30 starter minus 30 manure credit = 55 lb N/ac at sidedress or through fertigation (UD PSNT fact sheet).", tags: ["worked example"], calcs: ["eq-15.2"], book: ["15.4"] }
  ]
}]);

window.DE_DOCS = (window.DE_DOCS || []).concat([{
  id: "ud-irrigation-studies",
  title: "University of Delaware irrigation studies and Weekly Crop Update irrigation advice",
  short: "UD irrigation studies",
  org: "University of Delaware Cooperative Extension (J. Adkins, J. Miller, C. Whaley and others)",
  year: 2024,
  url: "https://www.udel.edu/academics/colleges/canr/cooperative-extension/sustainable-production/irrigation/projects-and-studies/",
  license: "summarized",
  summary: "Designs and results of UD irrigation research at Warrington Irrigation Research Farm (Harbeson) and the Georgetown REC farm, covering VRI corn, soybean, lima bean and subsurface drip, plus the in season corn and soybean water use numbers James Adkins posts in the Weekly Crop Update. These are the local numbers for daily crop water use by stage, sensor triggers tested in Delaware, how soon to irrigate after rain by soil, and yield response to irrigation.",
  sections: [
    { id: "corn-vri", h: "Corn VRI soil moisture trigger study, Warrington Farm (2012)",
      html: "<p>Source: UD Corn Irrigation page.</p><ul><li>Four tower center pivot with variable rate control, each of its 85 nozzles switched by location.</li><li>Plots about 100 to 200 ft by 60 ft. The field was split into 5 soil tiers from wettest and heaviest (top 20%) to driest and lightest (bottom 20%), set from historical aerial images. Each tier was one replication. 9 treatments x 5 tiers = 45 plots.</li><li>Sensors: three Watermark matric potential sensors per plot at 6, 12 and 18 in, with a Watermark 950T wireless transmitter (about 15 readings per day).</li><li>Rule: irrigation starts when the 6 in sensor reaches the treatment threshold. The amount is set from the 12 and 18 in readings.</li><li>Crop: DeKalb 63-14 at 34,000 seeds per acre in 30 in rows. 3 tons per acre broiler litter, 90 lb per acre potash (0-0-60), 35 lb N at planting in a 2x2 band, 50 lb per acre N sidedress, and 3 fertigations of 25 lb N per acre through the pivot.</li><li>Yield from weigh wagon and yield monitor, adjusted for grain moisture. Results were not posted on the page.</li></ul><p>Earlier UD work compared, during peak use, 0.33 in every day, 0.66 in every other day and 1 in every three days under ET scheduling. Results were inconclusive. Soil type mattered more than the application pattern.</p>",
      calcs: ["tab-6.6", "tab-6.5", "eq-6.2-6.5"], book: ["2.10", "6.4", "13.7"], tags: ["corn", "VRI", "centibars", "Watermark", "trigger"] },
    { id: "soy-design", h: "Soybean irrigation response study design",
      html: "<p>Source: UD Soybean Irrigation page (design only, no results posted).</p><ul><li>Full season planted mid May and double crop planted mid June, one variety each.</li><li>Row widths 7.5, 15 and 30 in, 5 replications.</li><li>Watermark sensors at 4, 10 and 16 in in the 15 in row plots, read about 10 times a day and reviewed daily. Irrigation was triggered from the 4 in or 10 in sensor.</li><li>Eight treatments from no irrigation to full season irrigation, with limited irrigation (keep available water above 30%) until R1 to R2, R3 to R4 or R5 to R6, then above 50%, and one treatment rising to above 70% after R3 to R4. One treatment was ET scheduling from the on farm DEOS station with standard soybean crop coefficients.</li></ul>",
      calcs: ["eq-6.1", "eq-2.9-2.11"], book: ["6.2", "6.5"], tags: ["soybean", "row width", "growth stage", "available water"] },
    { id: "lima", h: "Lima bean drip trigger study, Georgetown REC",
      html: "<p>Source: UD Lima Bean Irrigation page (three year study, results presented at Delaware Ag Week 2014 and 2015, not posted on the page).</p><ul><li>Baby lima beans, two varieties (one more and one less stress tolerant), 4 replications, 8 plots per replication.</li><li>Plots of two 25 ft rows, each with low flow drip tape rated 0.22 gpm per 100 ft.</li><li>Watermark 950T sensors at 4, 12 and 18 in, hard wired to a Campbell CR1000 logger recording every half hour. The logger opened a 24 VAC solenoid valve to irrigate automatically.</li><li>Treatments: no irrigation, irrigate at 50% plant available water, irrigate at 35% plant available water, and 35% during vegetative growth then 50% during reproduction. Each irrigation refilled to field capacity (100%).</li><li>Harvest at about 10% dry pods. Pods from 5 plants per plot counted as full, flat or dry, then shelled in a stationary FMC viner.</li></ul>",
      calcs: ["drip-runtime", "eq-14.8", "eq-6.1"], book: ["14.7", "6.2"], tags: ["lima bean", "drip", "plant available water", "automation"] },
    { id: "sdi", h: "Subsurface drip research facility, Warrington Farm",
      html: "<ul><li>20 acre parcel at Warrington Irrigation Research Farm, Harbeson. Installation began December 2012, planned life 15 to 20 years.</li><li>One 450 gpm well with a submersible pump on a variable frequency drive to hold constant pressure as flow changes.</li><li>42 computer controlled zones, average 60 ft x 300 ft (about 0.41 acre).</li><li>Tape depth and spacing study: tape at 10 and 16 in deep on 30 and 60 in rows.</li><li>Two management areas of 20 zones each: 4 replications of 5 treatments in 2 crops, with tape at 16 in deep on 60 in rows, the typical Delaware SDI layout.</li><li>Watermark 950T and 950R wireless sensor network. Research questions include water need, sensor placement and pulsed irrigation.</li></ul>",
      calcs: ["eq-14.8", "drip-runtime", "eq-3.4"], book: ["14.3", "14.4", "14.7"], tags: ["SDI", "subsurface drip", "VFD", "zones", "tape depth"] },
    { id: "corn-use", h: "Corn daily water use by stage (Weekly Crop Update)",
      html: "<p>From Adkins's 2019 Warrington Farm updates (114 day corn planted April 25):</p><ul><li>Daily irrigation need with no rain: V10 and smaller 0.22 to 0.25 in, V11 to V14 0.27 to 0.31 in, past V14 0.3 to 0.33 in (28 June 2019).</li><li>Use is nearly constant from V14 through R2 (blister).</li><li>Observed: 0.25 in per day at R1 (July 2019) where the typical rate at that stage is above 0.3 in. 0.26 in per day at R2. 0.23 in per day at R3 to R4. 0.13 in per day at R4 in mid August.</li><li>Irrigate hard through R2, taper through R3, and continue until black layer. Water use after R4 to black layer is historically under 0.5 in. No data show yield or test weight gain from irrigating after black layer.</li></ul><p>2024 updates: corn planted April 15 used 0.3 in per day in late June, 0.26 in mid July and 0.29 in in late July. May 12 corn used 0.24, 0.25 and 0.27 in per day over the same weeks. Hot days reach 0.31 in. Cloudy days drop to about 0.2 in.</p>",
      calcs: ["crop-et", "eq-4.2-4.7", "tab-6.4"], book: ["4.6", "6.4", "6.5"], tags: ["corn", "water use", "growth stage", "black layer", "peak ET"] },
    { id: "soy-use", h: "Soybean water use and timing (Weekly Crop Update)",
      html: "<ul><li>Full season soybeans: irrigating before R1 has not paid in several years of Delaware Soybean Board research and may lower yield.</li><li>At R1, use is about 0.15 to 0.25 in per day. Full canopy R3 to R5 beans used 0.16 to 0.29 in per day in 2019 and 2024. Use stays near peak until leaves start to yellow.</li><li>Soybeans take most water from the top 0 to 8 in (several years of sensor data), so irrigate small and often to avoid pushing water below the roots.</li><li>A field that just started flowering with no irrigation or good rain must first replace a deficit of at least 1.5 in, then go to about 0.25 in per day. With limited pivot capacity, aim for 0.4 in per pass until good rain.</li><li>Double crop soybeans: irrigate from planting, 0.2 to 0.3 in at a time to build canopy. Water below 6 in does little for them. Barley and early wheat beans used about 0.18 to 0.2 in per day in July 2019. Recently emerged double crop beans used 0.1 in per day (July 2024) and 0.14 to 0.15 in per day a week later. Once at full canopy they use as much as full season beans.</li></ul>",
      calcs: ["crop-et", "eq-6.26"], book: ["4.6", "6.3", "6.4"], tags: ["soybean", "R1", "double crop", "shallow roots"] },
    { id: "after-rain", h: "How soon to irrigate after a profile filling rain",
      html: "<p>Adkins, July and August 2019:</p><ul><li>Loamy sands: start 2 to 3 days after the rain.</li><li>Sandy loam at Warrington: corn on day 4, soybean 3 days after.</li><li>Loams, silt loams and clays: can wait 5 to 6 days.</li><li>In August, as use falls, a field at 100% available water can go 3 to 4 days (early August) or 5 to 6 days for corn and 4 to 5 for soybean (mid August).</li><li>Not all of a 1 in rain soaks in. Fast rain runs off, leaving high spots drier, which may need water sooner.</li><li>On poorly drained soils with an ET scheduler, delay the first irrigation by one day (2024).</li></ul>",
      calcs: ["eq-6.8", "ld-ed-window", "eq-6.10-6.11"], book: ["6.4", "2.8"], tags: ["after rain", "soil texture", "irrigation interval"] },
    { id: "capacity", h: "System capacity and deficit irrigation",
      html: "<ul><li>Most Delaware systems cannot meet 0.3 in per day without help from rain (2024).</li><li>If a system cannot keep up, run it at full capacity to hold soil moisture, accepting some yield loss.</li><li>In a deficit, apply 0.4 to 0.7 in per pass rather than small frequent passes, which lose more to evaporation (corn).</li><li>Pumping cost averaged $4.50 per acre-inch (2019).</li><li>Example pace: the Warrington corn got 1.2 in in four events in late June 2019, 1.5 in in five events in July, and 1.8 in in six events in late July (0.3 in per event).</li></ul>",
      calcs: ["eq-5.20", "cn-from-flow", "eq-13.7", "eq-8.22"], book: ["5.5", "5.6", "13.5", "8.7"], tags: ["system capacity", "deficit irrigation", "pumping cost", "center pivot"] },
    { id: "uniformity", h: "Pivot uniformity testing program",
      html: "<p>UD and NRCS have tested irrigation systems since 2003: 971 field evaluations on about 63,000 acres over about 20 years, using ASABE standard S436.2.</p><ul><li>Common faults: wrong system pressure, and worn, partly plugged or misplaced nozzles.</li><li>Larger nozzles are more sensitive to pressure changes.</li><li>Changes in well yield or pump efficiency change pressure, and with it application rate and uniformity.</li><li>Estimated added grower income from better design and management on tested acres: $857,000 per year. Grower reported gains ranged from none to over $40 per acre.</li></ul>",
      calcs: ["catch-can", "eq-5.4-5.5", "eq-11.1-ratio"], book: ["5.4", "13.4", "13.5"], tags: ["uniformity", "catch can", "ASABE S436", "nozzles", "pressure"] },
    { id: "corn-n-pop", h: "Corn response to irrigation, nitrogen and population (2023)",
      html: "<p>Miller and Adkins, Warrington Farm 2023, with VRI used to leave rainfed strips. Rates tested: 20,000 to 40,000 seeds per acre and 75 to 300 lb N per acre. Season rain at Harbeson was 15.8 in, and the rainfed plots fell behind mainly in the dry August.</p><ul><li>Irrigation added about 30 bu per acre on average across N rates and populations.</li><li>Irrigated: best yield 247 bu per acre at 200 lb N. No significant gain above 200 lb N. Irrigated plots at 75 lb N (237 bu) matched the best rainfed yield.</li><li>Rainfed: best yield 230 bu per acre at 250 lb N.</li><li>Best population: about 36,000 seeds per acre irrigated, 28,000 rainfed. Rainfed yield fell about 15 bu at 24,000 and about 30 bu at 20,000.</li><li>Ear leaf K was higher under irrigation at every N rate. Rainfed, lower yielding plots had higher Mg, some over 0.20% against a typical 0.15 to 0.17%, suggesting water stress cut K uptake.</li></ul>",
      calcs: [], book: ["1.2", "6.2"], tags: ["corn", "nitrogen", "population", "yield response", "VRI"] },
    { id: "soy-seed", h: "Irrigated soybean seeding rate (2017 to 2018)",
      html: "<p>Warrington Farm, 15 in rows, one soil type, seeded May 18, 2017 and May 10, 2018, crossed with irrigated and non irrigated plots.</p><ul><li>Seeding rates 80,000 to 170,000 seeds per acre gave no significant yield difference (about 58 to 59 bu per acre over both years). The lowest rate gave the best estimated income.</li><li>Irrigation: 63 vs 59 bu per acre in 2017 (not significant, adequate rain), 63 vs 44 bu in 2018 (19 bu gain, dry at a key reproductive stage), 60 vs 53 bu over both years (7 bu gain, significant).</li></ul>",
      calcs: [], book: ["6.2"], tags: ["soybean", "seeding rate", "yield response"] },
    { id: "repro-stress", h: "Protecting corn during grain fill",
      html: "<p>Miller (July 2021): fields still at R1 or R2 (mid May planting) have the most to lose because kernels are being set and starting to fill. In UD trials, yield tracked drone vegetation indexes best between about R2 and R4. Late irrigation will not raise yield but keeps stress down to hold it.</p>",
      calcs: [], book: ["6.2", "6.5"], tags: ["corn", "grain fill", "R2", "stress"] }
  ],
  tables: [
    { id: "t1", title: "Corn VRI study treatments, Warrington Farm 2012",
      cols: ["Treatment", "Scheduling basis", "Trigger at 6 in sensor"],
      rows: [
        [1, "ET checkbook", "50% managed allowable depletion"],
        [2, "Soil moisture, full season", "20 cb"],
        [3, "Soil moisture, full season", "30 cb"],
        [4, "Soil moisture, full season", "40 cb"],
        [5, "Soil moisture, full season", "50 cb"],
        [6, "Soil moisture by stage", "20 cb emergence to V16, 40 cb V16 to R3, 20 cb R3 to maturity"],
        [7, "Soil moisture by stage", "40 cb emergence to V16, 20 cb V16 to R3, 40 cb R3 to maturity"],
        [8, "Soil moisture", "30 cb until R5"],
        [9, "Soil moisture", "30 cb until half milkline"]
      ],
      notes: "UD Corn Irrigation page. Amount set from 12 and 18 in sensors.", calcs: ["tab-6.6"] },
    { id: "t2", title: "Soybean irrigation treatments (available water to keep above)",
      cols: ["Treatment", "Before stage change", "After"],
      rows: [
        ["1 No irrigation", "none", "none"],
        ["2 Full season", "above 50%", "above 50%"],
        ["3 None until flowering", "none until R1 to R2", "above 50%"],
        ["4 Limited until flowering", "above 30% until R1 to R2", "above 50%"],
        ["5 Limited until pod development", "above 30% until R3 to R4", "above 50%"],
        ["6 Limited until seed development", "above 30% until R5 to R6", "above 50%"],
        ["7 Limited, moderate, high", "above 30% until R1 to R2, above 50% until R3 to R4", "above 70%"],
        ["8 ET based", "DEOS station and soybean Kc", "same"]
      ],
      notes: "UD Soybean Irrigation page. Trigger read at 4 or 10 in.", calcs: ["eq-6.1"] },
    { id: "t3", title: "Corn daily irrigation need with no rain by stage (Adkins, 28 June 2019)",
      cols: ["Stage", "in per day"],
      rows: [["V10 and smaller", "0.22 to 0.25"], ["V11 to V14", "0.27 to 0.31"], ["Past V14", "0.3 to 0.33"], ["R4 to black layer, total", "under 0.5 in total"]],
      notes: "Weekly Crop Update ?p=13663 and ?p=13954. Warrington Farm, 114 day corn planted April 25.", calcs: ["crop-et"] },
    { id: "t4", title: "Observed weekly average ET, Warrington Farm 2019",
      cols: ["Week (2019)", "Corn stage", "Corn in/day", "Full season soybean stage", "Soybean in/day"],
      rows: [
        ["late June", "V13", "0.18 to 0.28 daily", "R1", "0.15 to 0.25"],
        ["mid July", "R1", 0.25, "R3", 0.24],
        ["late July", "R2", 0.26, "R3", 0.22],
        ["end of July", "R3 to R4", 0.23, "R4", 0.22],
        ["early August", "R3 to R4", 0.18, "R5", 0.17],
        ["mid August", "R4", 0.13, "R5", 0.16]
      ],
      notes: "Weekly Crop Update posts ?p=13663, 13876, 13912, 13954, 14035, 14080 (James Adkins). Late June soybean value is the stated range for that stage.", calcs: ["crop-et"] },
    { id: "t5", title: "Days to wait after a profile filling rain before irrigating",
      cols: ["Soil or situation", "Days"],
      rows: [
        ["Loamy sand", "2 to 3"],
        ["Sandy loam, corn (Warrington)", "4"],
        ["Sandy loam, soybean (Warrington)", "3"],
        ["Loam, silt loam, clay", "5 to 6"],
        ["Any soil at field capacity, early August 2019", "3 to 4"],
        ["Mid August 2019, corn / soybean", "5 to 6 / 4 to 5"],
        ["Poorly drained soil, ET scheduler", "add 1 day"]
      ],
      notes: "Weekly Crop Update ?p=13876, 14035, 14080 (2019) and ?p=24906 (2024)", calcs: ["eq-6.8", "ld-ed-window"] },
    { id: "t6", title: "Corn yield by irrigation, N rate and population (Warrington 2023)",
      cols: ["Condition", "Treatment", "Yield or effect"],
      rows: [
        ["Irrigated", "200 lb N/acre", "247 bu/acre (best irrigated)"],
        ["Irrigated", "75 lb N/acre", "237 bu/acre"],
        ["Rainfed", "250 lb N/acre", "230 bu/acre (best rainfed)"],
        ["Irrigated vs rainfed", "all rates", "about +30 bu/acre"],
        ["Irrigated", "36,000 seeds/acre", "best population"],
        ["Rainfed", "28,000 seeds/acre", "best population"],
        ["Rainfed", "24,000 seeds/acre", "about 15 bu/acre below best"],
        ["Rainfed", "20,000 seeds/acre", "about 30 bu/acre below best"]
      ],
      notes: "Delaware Agronomy blog, 28 Oct 2023 (Miller and Adkins). Season rain 15.8 in.", calcs: [] },
    { id: "t7", title: "Irrigated soybean seeding rate trial, yield bu/acre",
      cols: ["Target seeds/acre", "Stand 2017 (1000/acre)", "Stand 2018", "Yield 2017", "Yield 2018", "Yield both years"],
      rows: [
        [80000, 73, 70, 63, 52, 59],
        [110000, 96, 95, 60, 54, 59],
        [140000, 123, 115, 63, 52, 58],
        [170000, 146, 129, 59, 56, 59]
      ],
      notes: "Delaware Agronomy blog, 20 Dec 2018, Table 1. The text names the second rate 100k and Table 1 names it 110k. Irrigated vs non irrigated: 63 vs 59 (2017), 63 vs 44 (2018), 60 vs 53 (both).", calcs: [] },
    { id: "t8", title: "UD research irrigation systems",
      cols: ["Site", "System", "Key specs"],
      rows: [
        ["Warrington Farm, Harbeson", "4 tower VRI center pivot", "85 individually controlled nozzles"],
        ["Warrington Farm, Harbeson", "Subsurface drip, 20 acres", "450 gpm well, VFD, 42 zones of 60 x 300 ft (0.41 acre), tape 16 in deep on 60 in rows (also 10 in and 30 in rows tested)"],
        ["Georgetown REC", "Drip on lima beans", "Tape 0.22 gpm/100 ft, CR1000 logger, 24 VAC solenoids"]
      ],
      notes: "UD irrigation project pages", calcs: ["eq-14.8"] }
  ],
  facts: [
    { q: "What soil moisture triggers did UD test on corn?", a: "20, 30, 40 and 50 cb at the 6 in Watermark sensor, stage based 20 and 40 cb combinations, and an ET checkbook at 50% MAD (Warrington VRI study, 2012).", tags: ["corn", "centibars", "trigger"], calcs: ["tab-6.6"], book: ["6.4"] },
    { q: "How did UD decide how much to apply in the corn sensor study?", a: "Irrigation started when the 6 in sensor hit the threshold, and the amount came from the 12 and 18 in sensor readings.", tags: ["sensors", "corn"], calcs: ["swd-fcobs"], book: ["6.4"] },
    { q: "How much water does corn use per day at each stage in Delaware?", a: "With no rain: V10 and smaller 0.22 to 0.25 in, V11 to V14 0.27 to 0.31 in, past V14 0.3 to 0.33 in (Adkins 2019). Use is nearly flat from V14 to R2.", tags: ["corn", "water use"], calcs: ["crop-et"], book: ["4.6"] },
    { q: "When can I stop irrigating corn?", a: "Irrigate hard through R2, taper through R3, continue to black layer. Use after R4 to black layer is historically under 0.5 in total, and no data show a gain from irrigating after black layer.", tags: ["corn", "black layer"], calcs: [], book: ["6.5"] },
    { q: "Should full season soybeans be irrigated before R1?", a: "No. Several years of Delaware Soybean Board research showed no benefit before R1 and possible yield loss.", tags: ["soybean", "R1"], calcs: [], book: ["6.2"] },
    { q: "Where do soybeans take their water from?", a: "Mostly the top 0 to 8 in, per several years of UD sensor data. Irrigate small and often.", tags: ["soybean", "root zone"], calcs: ["extraction-4321"], book: ["6.3"] },
    { q: "How much should double crop soybeans get per irrigation?", a: "0.2 to 0.3 in at a time to build canopy. Water below 6 in does little for them.", tags: ["double crop", "soybean"], calcs: [], book: ["6.4"] },
    { q: "How many days after a soaking rain before irrigating?", a: "Loamy sand 2 to 3 days, sandy loam 3 (soybean) to 4 (corn) days, loam, silt loam and clay 5 to 6 days (Adkins 2019).", tags: ["after rain", "soil texture"], calcs: ["eq-6.8"], book: ["6.4"] },
    { q: "What did irrigation add to Delaware corn yield in 2023?", a: "About 30 bu per acre. Best irrigated yield was 247 bu at 200 lb N, best rainfed 230 bu at 250 lb N (Warrington 2023).", tags: ["corn", "yield response"], calcs: [], book: ["1.2"] },
    { q: "What corn population is best under irrigation in Delaware?", a: "About 36,000 seeds per acre irrigated versus 28,000 rainfed (Warrington 2023).", tags: ["corn", "population"], calcs: [], book: [] },
    { q: "How much nitrogen does irrigated corn need at Warrington?", a: "Yield did not rise significantly above 200 lb N per acre under irrigation in 2023. Rainfed plots responded up to 250 lb N.", tags: ["corn", "nitrogen"], calcs: [], book: [] },
    { q: "How much did irrigation add to soybean yield at Warrington?", a: "19 bu per acre in dry 2018 (63 vs 44), none significant in 2017 (63 vs 59), 7 bu averaged over both years.", tags: ["soybean", "yield response"], calcs: [], book: [] },
    { q: "What is the typical Delaware SDI layout?", a: "Drip tape 16 in deep on 60 in rows, the layout used in the Warrington SDI management study.", tags: ["SDI", "subsurface drip"], calcs: ["eq-14.8"], book: ["14.3"] },
    { q: "What are the Warrington SDI facility specs?", a: "20 acres, 42 zones averaging 60 x 300 ft (0.41 acre), one 450 gpm well with a VFD for constant pressure.", tags: ["SDI"], calcs: [], book: ["14.4"] },
    { q: "What triggers were tested on drip lima beans?", a: "Irrigate at 50% or 35% plant available water, or 35% vegetative then 50% reproductive, refilling to field capacity each time. Sensors at 4, 12 and 18 in.", tags: ["lima bean", "drip"], calcs: ["eq-6.1"], book: ["14.7"] },
    { q: "What drip tape flow was used in the lima bean study?", a: "Low flow tape rated 0.22 gpm per 100 ft, two lines per plot.", tags: ["lima bean", "drip tape"], calcs: ["drip-runtime"], book: ["14.4"] },
    { q: "How many pivots have UD and NRCS tested?", a: "971 field evaluations on about 63,000 acres since 2003, using ASABE S436.2.", tags: ["uniformity", "pivot testing"], calcs: ["catch-can", "eq-5.4-5.5"], book: ["5.4"] },
    { q: "What are the most common pivot faults found in Delaware?", a: "Wrong pressure and worn, partly plugged or misplaced nozzles. Larger nozzles are more sensitive to pressure change.", tags: ["nozzles", "pressure"], calcs: ["eq-11.1-ratio"], book: ["13.4"] },
    { q: "What does pumping cost in Delaware?", a: "About $4.50 per acre-inch (Adkins 2019).", tags: ["pumping cost"], calcs: ["eq-8.22"], book: ["8.7"] },
    { q: "Does it matter whether peak corn water is applied daily or in bigger, less frequent sets?", a: "UD compared 0.33 in daily, 0.66 in every other day and 1 in every 3 days. Results were inconclusive, and soil type mattered more.", tags: ["corn", "application frequency"], calcs: [], book: ["6.4"] },
    { q: "When is corn most sensitive to late season stress?", a: "R1 to R2 fields have the most to lose. In UD trials yield tracked vegetation indexes best between about R2 and R4 (Miller 2021).", tags: ["corn", "grain fill"], calcs: [], book: ["6.5"] }
  ]
}]);

