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
