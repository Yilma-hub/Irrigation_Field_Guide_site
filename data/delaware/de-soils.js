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
