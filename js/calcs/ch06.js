/* Chapter 6  Irrigation Scheduling  (Equations 6.1 to 6.26, Tables 6.1 to 6.6) */
(function (G) {
  const T = G.TAB = G.TAB || {};
  const M = G.M;

  // Table 6.1. Estimated maximum allowable fraction depletion (fdc) (modified from Doorenbos and Kassam, 1979) (p. 109)
  T["6.1"] = {
    title: "Estimated maximum allowable fraction depletion (fdc) to maintain maximum yields of crops grouped according to sensitivity",
    cols: ["Crop group", "0.08", "0.12", "0.16", "0.20", "0.24", "0.28", "0.31", "0.35", "0.39"],
    colVals: [0.08, 0.12, 0.16, 0.20, 0.24, 0.28, 0.31, 0.35, 0.39],
    groups: {
      1: "onion, pepper, potato",
      2: "banana, cabbage, pea, tomato",
      3: "alfalfa, bean, citrus, groundnut, pineapple, sunflower, watermelon, wheat",
      4: "cotton, sorghum, olive, grape, safflower, corn, soybean, sugarbeet, tobacco"},
    rows: [
      [1, 0.50, 0.43, 0.35, 0.30, 0.25, 0.23, 0.20, 0.20, 0.18],
      [2, 0.68, 0.58, 0.45, 0.40, 0.35, 0.33, 0.28, 0.25, 0.23],
      [3, 0.80, 0.70, 0.60, 0.50, 0.45, 0.43, 0.38, 0.35, 0.30],
      [4, 0.88, 0.80, 0.70, 0.60, 0.55, 0.50, 0.45, 0.43, 0.40]],
    notes: "Columns are maximum ET (in/day). Crop groups: 1 onion, pepper, potato; 2 banana, cabbage, pea, tomato; 3 alfalfa, bean, citrus, groundnut, pineapple, sunflower, watermelon, wheat; 4 cotton, sorghum, olive, grape, safflower, corn, soybean, sugarbeet, tobacco.",
  };
  const fdcOf = (grp, et) => { const r = T["6.1"].rows[grp - 1]; return M.interp(T["6.1"].colVals.map((c, j) => [c, r[j + 1]]), et); };
  const groupOpts = [1, 2, 3, 4].map(g => ["Group " + g + ": " + T["6.1"].groups[g], g]);

  // Table 6.2. Range of maximum effective rooting depths for fully grown plants (Martin et al., 1990) (p. 110)
  T["6.2"] = {
    title: "Range of maximum effective rooting depths for fully grown plants",
    cols: ["Crop", "Minimum (ft)", "Maximum (ft)"],
    rows: [
      ["Alfalfa", 3.3, 10], ["Banana", 1.3, 2.6], ["Barley", 3.3, 4.3], ["Beans", 1.3, 2.6], ["Cabbage", 2.0, 3.3],
      ["Carrots", 1.6, 3.3], ["Celery", 1.0, 1.7], ["Citrus", 3.3, 5.9], ["Clover", 2.0, 3.0], ["Corn", 3.3, 6.6],
      ["Cotton", 3.3, 6.6], ["Cucumber", 2.3, 4.0], ["Dates", 5.0, 8.3], ["Flax", 3.3, 5.0], ["Grapes", 3.3, 6.6],
      ["Grass", 1.7, 5.0], ["Groundnuts", 1.7, 3.3], ["Lettuce", 1.0, 1.7], ["Maize", 3.3, 6.6], ["Melons", 3.3, 5.0],
      ["Olives", 2.6, 6.6], ["Onions", 2.6, 6.6], ["Palm trees", 2.3, 3.6], ["Peas", 2.0, 3.3], ["Peppers", 1.7, 3.3],
      ["Pineapple", 1.0, 2.0], ["Potatoes", 1.3, 2.6], ["Safflower", 3.3, 6.6], ["Sorghum", 3.3, 6.6], ["Soybeans", 2.6, 5.0],
      ["Spinach", 1.0, 1.7], ["Strawberries", 0.7, 1.0], ["Sugar beet", 2.6, 6.6], ["Sugarcane", 4.0, 6.6], ["Sunflower", 3.3, 8.3],
      ["Sweet potatoes", 3.3, 5.0], ["Tobacco", 1.7, 3.3], ["Tomatoes", 2.3, 5.0], ["Wheat", 3.3, 5.0]],
    notes: "The maximum values represent the full expression of the genetic potential for root growth and are only found in uniform, fertile soils of low resistance to root penetration.",
  };

  // Table 6.3. Example root zone information for annual crops grown in Nebraska (Melvin and Yonts, 2009) (p. 112)
  T["6.3"] = {
    title: "Example root zone information for various annual crops grown in Nebraska",
    cols: ["Assumed root depth (ft)", "Corn (3)", "Grain sorghum (3)", "Soybean (3)", "Dry beans (2.5)", "Sugar beets (3)", "Winter wheat (4)", "Alfalfa (4)"],
    maxDepth: [3, 3, 3, 2.5, 3, 4, 4],
    rows: [
      [1.0, "vegetative", "vegetative", "vegetative", "vegetative", "", "", ""],
      [1.5, "", "", "", "initial flowering, pod set", "", "", ""],
      [2.0, "12 leaf", "", "early bloom", "beginning pod fill", "June 1", "fall growth", ""],
      [2.5, "16 leaf", "flag leaf", "full bloom", "full seed fill", "July 1", "spring growth", ""],
      [3.0, "silking", "boot", "pod elongation", "", "July 15", "joint", ""],
      [3.5, "blister", "bloom", "", "", "August 1", "boot", ""],
      [4.0, "beginning dent", "dough", "full seed fill", "", "Sept. 1", "dough", ""],
      [5.0, "", "", "", "", "", "", ""],
      [6.0, "", "", "", "", "", "", "established stand"]],
    notes: "Number in parentheses is the maximum crop root depth (ft) for irrigation management.",
  };

  // Table 6.4. Example of long-term water use data (ET) for crops in Nebraska (Melvin and Yonts, 2009) (p. 117)
  T["6.4"] = {
    title: "Example of long-term water use data (ET) for crops in Nebraska",
    cols: ["Water use rate (in/day)", "Corn", "Grain sorghum", "Soybeans", "Dry beans", "Sugar beets", "Winter wheat", "Alfalfa"],
    rows: [
      [0.18, "", "", "", "", "June 15", "spring growth", ""],
      [0.22, "", "", "full bloom", "", "July 1", "", ""],
      [0.24, "12 leaf", "", "", "rapid vegetative growth", "", "joint", ""],
      [0.26, "", "flag leaf", "begin pod", "", "", "", ""],
      [0.28, "early tassel", "boot", "", "", "", "", "June 15"],
      [0.30, "silking", "half bloom", "full pod", "flowering and pod development", "July 15", "boot", "July 1"],
      [0.28, "", "", "", "", "", "", "August 1"],
      [0.26, "blister kernel", "soft dough", "", "", "August 1", "", ""],
      [0.24, "milk", "", "seed fill", "", "", "", "August 15"],
      [0.22, "", "", "", "", "", "dough", "September 1"],
      [0.20, "begin dent", "", "", "", "", "", ""],
      [0.18, "full dent", "hard dough", "", "pod fill and maturation", "", "", ""],
      [0.19, "", "", "", "", "", "", ""]],
    notes: "Alfalfa water use rates should be multiplied by 0.50 during the first 10 days following cutting and by 0.75 from the 10th to 20th day following cutting.",
  };

  // Table 6.5. Example SWD versus tension for selected soil textures in Nebraska (p. 121)
  T["6.5"] = {
    title: "Example SWD versus tension for selected soil textures in Nebraska",
    cols: ["Tension (cb)", "Fine sand", "Loamy sand", "Sandy loam", "Fine sandy loam"],
    rows: [
      [0, 0.000, 0.000, 0.000, 0.000], [10, 0.008, 0.000, 0.000, 0.000], [20, 0.025, 0.025, 0.025, 0.017],
      [30, 0.042, 0.033, 0.042, 0.042], [40, 0.050, 0.042, 0.050, 0.058], [50, 0.054, 0.050, 0.058, 0.067],
      [60, 0.058, 0.058, 0.067, 0.083], [70, 0.067, 0.067, 0.071, 0.092], [80, null, null, 0.075, 0.100]],
    awc: [0.083, 0.092, 0.117, 0.150],
    notes: "Values are fraction depleted in inches of water per inch of soil. AWC (in/in): fine sand 0.083, loamy sand 0.092, sandy loam 0.117, fine sandy loam 0.150. A dash in the book (80 cb for fine sand and loamy sand) is shown as null.",
  };

  // Table 6.6. Example threshold soil water tensions for irrigation scheduling based on fdc = 0.35 (p. 121)
  T["6.6"] = {
    title: "Example threshold soil water tensions for irrigation scheduling based on fdc = 0.35",
    cols: ["Texture", "Threshold tension (cb)"],
    rows: [["Fine sand", 20], ["Loamy sand", 25], ["Sandy loam", 35], ["Fine sandy loam", 45], ["Silt loam", 80], ["Clay loam", 80]],
  };

  const C = (s) => { s.ch = 6; s.file = "ch06"; return calc(s); };

  // ---------------------------------------------------------------- reservoir terms
  C({
    id: "eq-6.1", eq: ["6.1"], sec: "6.2", page: 108, title: "Allowable fraction depleted and fraction remaining",
    tags: ["fdc", "frc", "MAD", "management allowed depletion", "how dry can I let it get"],
    tables: ["6.1"],
    inputs: [{ k: "frc", sym: "f<sub>rc</sub>", label: "Minimum fraction of available water that must remain", dim: "frac", u: "decimal", v: 0.55 }],
    outputs: [{ k: "fdc", sym: "f<sub>dc</sub>", label: "Maximum allowable fraction depleted", dim: "frac", u: "decimal", dp: 2 }],
    f: v => ({ fdc: 1 - v.frc }),
    examples: [{ ref: "Example 6.1", page: 110, in: { frc: 0.55 }, out: { fdc: 0.45 } }],
  });

  C({
    id: "eq-6.2-6.5", eq: ["6.2", "6.4", "6.5"], sec: "6.3", page: 109, title: "TAW, allowable depletion (AD) and minimum balance (MB)",
    tags: ["TAW", "AD", "MB", "allowable depletion", "minimum balance", "how much water can I use before irrigating", "root zone reservoir"],
    tables: ["6.1", "6.2"], figs: ["6.8"],
    inputs: [
      { k: "Rd", sym: "R<sub>d</sub>", label: "Root zone depth", dim: "length", u: "in", v: 36 },
      { k: "AWC", sym: "AWC", label: "Available water capacity", dim: "awc", u: "in/in", v: 0.17 },
      { k: "fdc", sym: "f<sub>dc</sub>", label: "Maximum allowable fraction depleted", dim: "frac", u: "decimal", v: 0.45, help: "See Table 6.1." }],
    outputs: [
      { k: "TAW", sym: "TAW", label: "Total available water", dim: "length", u: "in", dp: 2 },
      { k: "AD", sym: "AD", label: "Allowable depletion", dim: "length", u: "in", dp: 2 },
      { k: "MB", sym: "MB", label: "Minimum balance", dim: "length", u: "in", dp: 2 }],
    f: v => { const TAW = v.Rd * v.AWC; return { TAW, AD: v.fdc * TAW, MB: (1 - v.fdc) * TAW }; },
    examples: [{ ref: "Example 6.1", page: 110, in: { Rd: 36, AWC: 0.17, fdc: 0.45 }, out: { TAW: 6.1, AD: 2.7, MB: 3.4 } },
               { ref: "Example 6.5", page: 119, in: { Rd: 30, AWC: 0.2, fdc: 0.45 }, out: { TAW: 6, AD: 2.7 } }],
  });

  C({
    id: "eq-6.3", eq: ["6.3"], sec: "6.3", page: 109, title: "TAW for a layered soil",
    tags: ["layered soil", "TAW", "soil layers", "horizons", "total available water"],
    note: "Layers are listed from the surface down. The last layer containing roots counts only to the root zone depth.",
    inputs: [
      { k: "AWC", sym: "AWC<sub>i</sub>", label: "AWC of each layer (in/in)", type: "list", v: "0.18, 0.15, 0.10" },
      { k: "t", sym: "t<sub>i</sub>", label: "Thickness of each layer, top down (in)", type: "list", v: "12, 18, 30" },
      { k: "Rd", sym: "R<sub>d</sub>", label: "Root zone depth", dim: "length", u: "in", v: 48 }],
    outputs: [
      { k: "TAW", sym: "TAW", label: "Total available water in the root zone", dim: "length", u: "in", dp: 2 },
      { k: "nl", sym: "n", label: "Number of layers that contain roots", dim: "count", u: "#", dp: 0 }],
    f: v => {
      const a = M.list(v.AWC), t = M.list(v.t);
      let z = 0, TAW = 0, nl = 0;
      for (let i = 0; i < a.length && z < v.Rd; i++) {
        const th = i < t.length && i < a.length - 1 ? Math.min(t[i], v.Rd - z) : v.Rd - z;
        TAW += a[i] * th; z += th; nl++;
      }
      return { TAW, nl };
    },
    examples: [{ ref: "Check: 0.18(12) + 0.15(18) + 0.10(48 − 30)", page: 109, in: {}, out: { TAW: 6.66, nl: 3 } },
               { ref: "Check: roots end in layer 2", page: 109, in: { Rd: 24 }, out: { TAW: 3.96, nl: 2 } }],
  });

  C({
    id: "eq-6.6-6.7", eq: ["6.6", "6.7"], sec: "6.3", page: 111, title: "Root zone depth during the season (root growth)",
    tags: ["root depth", "root growth factor", "root zone expansion", "days after germination", "how deep are my roots"],
    tables: ["6.2", "6.3"], figs: ["6.3"],
    note: "Minimum root depth for seedlings is normally 4 to 6 in. R<sub>f</sub> is held at 1 after the date of maximum rooting.",
    inputs: [
      { k: "Dag", sym: "D<sub>ag</sub>", label: "Days after germination", dim: "time", u: "d", v: 50 },
      { k: "Dtm", sym: "D<sub>tm</sub>", label: "Days from germination to maximum effective depth", dim: "time", u: "d", v: 90 },
      { k: "Rmin", sym: "R<sub>dMIN</sub>", label: "Minimum root depth for young plants", dim: "length", u: "ft", v: 0.5 },
      { k: "Rmax", sym: "R<sub>dMAX</sub>", label: "Maximum effective root depth", dim: "length", u: "ft", v: 4.0 }],
    outputs: [
      { k: "Rf", sym: "R<sub>f</sub>", label: "Root growth factor", dim: "none", dp: 2 },
      { k: "Rd", sym: "R<sub>d</sub>", label: "Root zone depth", dim: "length", u: "ft", dp: 2 }],
    f: v => { const Rf = Math.min(1, Math.max(0, v.Dag / v.Dtm)); return { Rf, Rd: v.Rmin + (v.Rmax - v.Rmin) * Rf }; },
    // book rounds Rf to 0.56 then gives 2.5 ft; exact is 2.44 ft
    examples: [{ ref: "Example 6.2", page: 111, in: { Dag: 50, Dtm: 90, Rmin: 0.5, Rmax: 4.0 }, out: { Rf: 0.56, Rd: 2.5 }, tol: 0.03 }],
  });

  C({
    id: "extraction-4321", eq: [], sec: "6.3", page: 111, title: "Water extraction by root zone quarter (4-3-2-1 rule)",
    tags: ["4-3-2-1 rule", "extraction pattern", "where do roots take water", "sensor placement"],
    figs: ["6.4"],
    note: "Applies when the root zone is refilled, or nearly refilled, after irrigation (Figure 6.4).",
    inputs: [
      { k: "Rd", sym: "R<sub>d</sub>", label: "Root zone depth", dim: "length", u: "ft", v: 4 },
      { k: "w", label: "Water extracted between irrigations", dim: "length", u: "in", v: 2 }],
    outputs: [
      { k: "q", label: "Depth of each quarter", dim: "length", u: "ft", dp: 2 },
      { k: "q1", label: "From the top quarter (40%)", dim: "length", u: "in", dp: 2 },
      { k: "q2", label: "From the second quarter (30%)", dim: "length", u: "in", dp: 2 },
      { k: "q3", label: "From the third quarter (20%)", dim: "length", u: "in", dp: 2 },
      { k: "q4", label: "From the bottom quarter (10%)", dim: "length", u: "in", dp: 2 }],
    f: v => ({ q: v.Rd / 4, q1: 0.4 * v.w, q2: 0.3 * v.w, q3: 0.2 * v.w, q4: 0.1 * v.w }),
    examples: [{ ref: "p. 111 text", page: 111, in: { Rd: 4, w: 2 }, out: { q1: 0.8, q2: 0.6, q3: 0.4, q4: 0.2 } }],
  });

  // ---------------------------------------------------------------- intervals
  C({
    id: "eq-6.8", eq: ["6.8"], sec: "6.4", page: 112, title: "Maximum interval between irrigations",
    tags: ["irrigation interval", "TMAX", "how often should I irrigate", "days between irrigations"],
    inputs: [
      { k: "AD", sym: "AD", label: "Allowable depletion", dim: "length", u: "in", v: 2.7 },
      { k: "ET", sym: "ET", label: "Average daily evapotranspiration", dim: "rate", u: "in/d", v: 0.3 }],
    outputs: [{ k: "Tmax", sym: "T<sub>MAX</sub>", label: "Maximum time interval between irrigations", dim: "time", u: "d", dp: 1 }],
    f: v => ({ Tmax: v.AD / v.ET }),
    examples: [{ ref: "p. 112 text", page: 112, in: { AD: 2.7, ET: 0.3 }, out: { Tmax: 9 } }],
  });

  C({
    id: "eq-6.9", eq: ["6.9"], sec: "6.4", page: 113, title: "Irrigation interval for a given effective depth",
    tags: ["irrigation interval", "light frequent irrigation", "pivot rotation", "rain delay", "how many days to skip after rain"],
    note: "Simplified checkbook (p. 120): irrigate when the effective depth has been used. After an effective rain, delay irrigation by rain / ET days.",
    inputs: [
      { k: "de", sym: "d<sub>e</sub>", label: "Effective depth applied per irrigation", dim: "length", u: "in", v: 0.9 },
      { k: "ET", sym: "ET", label: "Average daily evapotranspiration", dim: "rate", u: "in/d", v: 0.3 },
      { k: "P", sym: "P<sub>e</sub>", label: "Effective rainfall since last irrigation (optional)", dim: "length", u: "in", v: 0 }],
    outputs: [
      { k: "T", sym: "T", label: "Interval between irrigations", dim: "time", u: "d", dp: 1 },
      { k: "delay", label: "Delay from the rainfall", dim: "time", u: "d", dp: 1 }],
    f: v => ({ T: v.de / v.ET, delay: v.P / v.ET }),
    examples: [{ ref: "p. 113 text", page: 113, in: { de: 0.9, ET: 0.3, P: 0 }, out: { T: 3 } },
               { ref: "p. 120 text", page: 120, in: { de: 0.75, ET: 0.25, P: 0.5 }, out: { T: 3, delay: 2 } }],
  });

  // ---------------------------------------------------------------- available water and SWD
  C({
    id: "eq-6.12", eq: ["6.12", "6.12a", "6.12b", "6.12c"], sec: "6.4", page: 113, title: "Available water in the root zone (non-layered soil)",
    tags: ["AW", "available water", "water remaining", "feel and appearance", "fraction remaining"],
    note: "Pick how you measured soil water. Eq. 6.12a uses volumetric content; 6.12b and 6.12c use fraction remaining.",
    inputs: [
      { k: "m", label: "Method", type: "sel", opts: [["Water content θv and θwp (6.12a)", 0], ["Fraction remaining fr with AWC and Rd (6.12b)", 1], ["Fraction remaining fr with TAW (6.12c)", 2]], v: 1 },
      { k: "thv", sym: "θ<sub>v</sub>", label: "Volumetric water content", dim: "frac", u: "decimal", v: 0.25 },
      { k: "wp", sym: "θ<sub>wp</sub>", label: "Water content at wilting point", dim: "frac", u: "decimal", v: 0.12 },
      { k: "fr", sym: "f<sub>r</sub>", label: "Fraction of available water remaining", dim: "frac", u: "decimal", v: 0.80 },
      { k: "AWC", sym: "AWC", label: "Available water capacity", dim: "awc", u: "in/in", v: 0.13 },
      { k: "Rd", sym: "R<sub>d</sub>", label: "Root zone depth", dim: "length", u: "in", v: 24 },
      { k: "TAW", sym: "TAW", label: "Total available water (method 6.12c)", dim: "length", u: "in", v: 3.12 }],
    outputs: [{ k: "AW", sym: "AW", label: "Available water", dim: "length", u: "in", dp: 2 }],
    f: v => ({ AW: v.m == 0 ? (v.thv - v.wp) * v.Rd : v.m == 1 ? v.fr * v.AWC * v.Rd : v.fr * v.TAW }),
    examples: [{ ref: "Example 6.3", page: 114, in: { m: 1, fr: 0.8, AWC: 0.13, Rd: 24 }, out: { AW: 2.5 } },
               { ref: "Check 6.12a", page: 113, in: { m: 0, thv: 0.25, wp: 0.12, Rd: 24 }, out: { AW: 3.12 } },
               { ref: "Check 6.12c", page: 113, in: { m: 2, fr: 0.8, TAW: 3.12 }, out: { AW: 2.496 } }],
  });

  C({
    id: "eq-6.13", eq: ["6.13"], sec: "6.4", page: 114, title: "Available water in a layered root zone",
    tags: ["layered soil", "available water", "AW", "soil probe by depth", "sensor at each depth"],
    note: "Layers listed from the surface down. The last layer with roots counts to R<sub>d</sub>. A sensor at 6, 18 and 30 in can represent three 12-in layers.",
    inputs: [
      { k: "thv", sym: "θ<sub>v,i</sub>", label: "Volumetric water content of each layer", type: "list", v: "0.22, 0.25, 0.28" },
      { k: "wp", sym: "θ<sub>wp,i</sub>", label: "Wilting point of each layer", type: "list", v: "0.10, 0.12, 0.15" },
      { k: "fc", sym: "θ<sub>fc,i</sub>", label: "Field capacity of each layer (optional, for SWD)", type: "list", v: "0.28, 0.30, 0.32" },
      { k: "t", sym: "t<sub>i</sub>", label: "Thickness of each layer (in)", type: "list", v: "12, 12, 12" },
      { k: "Rd", sym: "R<sub>d</sub>", label: "Root zone depth", dim: "length", u: "in", v: 36 }],
    outputs: [
      { k: "AW", sym: "AW", label: "Available water", dim: "length", u: "in", dp: 2 },
      { k: "TAW", sym: "TAW", label: "Total available water (needs field capacity)", dim: "length", u: "in", dp: 2 },
      { k: "SWD", sym: "SWD", label: "Soil water deficit (TAW − AW)", dim: "length", u: "in", dp: 2 }],
    f: v => {
      const th = M.list(v.thv), wp = M.list(v.wp), fc = M.list(v.fc), t = M.list(v.t);
      let z = 0, AW = 0, TAW = 0;
      for (let i = 0; i < th.length && z < v.Rd; i++) {
        const L = i < t.length && i < th.length - 1 ? Math.min(t[i], v.Rd - z) : v.Rd - z;
        AW += (th[i] - wp[i]) * L;
        if (fc.length === th.length) TAW += (fc[i] - wp[i]) * L;
        z += L;
      }
      return { AW, TAW: fc.length === th.length ? TAW : NaN, SWD: fc.length === th.length ? TAW - AW : NaN };
    },
    examples: [{ ref: "Check: 12(0.12 + 0.13 + 0.13) and 12(0.18 + 0.18 + 0.17)", page: 114, in: {}, out: { AW: 4.56, TAW: 6.36, SWD: 1.8 } }],
  });

  C({
    id: "eq-6.14-6.15", eq: ["6.14", "6.15"], sec: "6.4", page: 114, title: "Soil water deficit from fraction depleted",
    tags: ["SWD", "soil water deficit", "fraction depleted", "TAW = AW + SWD"],
    inputs: [
      { k: "fd", sym: "f<sub>d</sub>", label: "Fraction of available water depleted", dim: "frac", u: "decimal", v: 0.2 },
      { k: "TAW", sym: "TAW", label: "Total available water", dim: "length", u: "in", v: 3.12 }],
    outputs: [
      { k: "SWD", sym: "SWD", label: "Soil water deficit", dim: "length", u: "in", dp: 2 },
      { k: "AW", sym: "AW", label: "Available water (TAW − SWD)", dim: "length", u: "in", dp: 2 }],
    f: v => { const SWD = v.fd * v.TAW; return { SWD, AW: v.TAW - SWD }; },
    examples: [{ ref: "Example 6.3", page: 114, in: { fd: 0.2, TAW: 3.12 }, out: { SWD: 0.62 } },
               { ref: "Example 6.7 Location 1 (book rounds TAW to 2.0 in)", page: 122, in: { fd: 0.4, TAW: 2.0 }, out: { SWD: 0.8 } }],
  });

  C({
    id: "swd-fcobs", eq: [], sec: "6.4", page: 122, title: "SWD from a sensor using observed field capacity",
    tags: ["sensor SWD", "observed field capacity", "FCobs", "soil moisture probe", "trend in sensor data"],
    note: "Singh et al. (2020): use the field capacity observed for this sensor and location (from the trend when the profile drains to FC early in the season) so sensor bias and spatial variability cancel.",
    inputs: [
      { k: "fc", sym: "θ<sub>FC,obs</sub>", label: "Observed field capacity reading for this sensor", dim: "frac", u: "decimal", v: 0.32 },
      { k: "thv", sym: "θ<sub>v</sub>", label: "Current sensor water content", dim: "frac", u: "decimal", v: 0.27 },
      { k: "Rd", sym: "R<sub>d</sub>", label: "Root zone depth (or depth the sensor represents)", dim: "length", u: "in", v: 36 }],
    outputs: [{ k: "SWD", sym: "SWD", label: "Soil water deficit", dim: "length", u: "in", dp: 2 }],
    f: v => ({ SWD: (v.fc - v.thv) * v.Rd }),
    examples: [{ ref: "Check", page: 122, in: { fc: 0.32, thv: 0.27, Rd: 36 }, out: { SWD: 1.8 } }],
  });

  // ---------------------------------------------------------------- latest and earliest date
  C({
    id: "eq-6.10-6.11", eq: ["6.10", "6.11"], sec: "6.4", page: 113, title: "Latest date to irrigate (LD)",
    tags: ["latest date", "LD", "when must I irrigate", "days until stress", "days left before irrigation"],
    figs: ["6.5"],
    note: "Both forms give the same answer: (AD − SWD)/ET<sub>f</sub> = (AW − MB)/ET<sub>f</sub>. A negative LD means irrigation is already late.",
    inputs: [
      { k: "AD", sym: "AD", label: "Allowable depletion", dim: "length", u: "in", v: 1.248 },
      { k: "SWD", sym: "SWD", label: "Current soil water deficit", dim: "length", u: "in", v: 0.624 },
      { k: "ETf", sym: "ET<sub>f</sub>", label: "Forecast daily ET", dim: "rate", u: "in/d", v: 0.3, help: "Long-term averages such as Table 6.4, or the ET of the last few days." }],
    outputs: [
      { k: "LD", sym: "LD", label: "Latest date (days from now)", dim: "time", u: "d", dp: 1 },
      { k: "AW", sym: "AW − MB", label: "Water left above the minimum balance", dim: "length", u: "in", dp: 2 }],
    f: v => ({ LD: (v.AD - v.SWD) / v.ETf, AW: v.AD - v.SWD }),
    tables: ["6.4"],
    examples: [{ ref: "Example 6.3", page: 114, in: { AD: 1.248, SWD: 0.624, ETf: 0.3 }, out: { LD: 2 }, tol: 0.05 },
               { ref: "Example 6.7 Location 1", page: 122, in: { AD: 1.0, SWD: 0.8, ETf: 0.2 }, out: { LD: 1 } }],
  });

  C({
    id: "eq-6.16-6.17", eq: ["6.16", "6.17"], sec: "6.4", page: 115, title: "Earliest date to irrigate (ED)",
    tags: ["earliest date", "ED", "too soon to irrigate", "rainfall allowance", "room for rain"],
    figs: ["6.7"],
    note: "ED = (r<sub>a</sub> + d<sub>ep</sub> − SWD)/ET<sub>f</sub>, and SWD = TAW − AW (Eq. 6.17). ED of 0 means there is already room for the planned irrigation and the rainfall allowance.",
    inputs: [
      { k: "ra", sym: "r<sub>a</sub>", label: "Rainfall allowance", dim: "length", u: "in", v: 0.4 },
      { k: "dep", sym: "d<sub>ep</sub>", label: "Planned effective irrigation depth", dim: "length", u: "in", v: 0.5 },
      { k: "SWD", sym: "SWD", label: "Current soil water deficit (TAW − AW)", dim: "length", u: "in", v: 0.6 },
      { k: "ETf", sym: "ET<sub>f</sub>", label: "Forecast daily ET", dim: "rate", u: "in/d", v: 0.3 }],
    outputs: [{ k: "ED", sym: "ED", label: "Earliest date (days from now)", dim: "time", u: "d", dp: 1 }],
    f: v => ({ ED: Math.max(0, (v.ra + v.dep - v.SWD) / v.ETf) }),
    examples: [{ ref: "Example 6.4", page: 115, in: { ra: 0.4, dep: 0.5, SWD: 0.6, ETf: 0.3 }, out: { ED: 1 } },
               { ref: "Example 6.7 Location 1", page: 122, in: { ra: 0.3, dep: 0.5, SWD: 0.8, ETf: 0.2 }, out: { ED: 0 } }],
  });

  C({
    id: "ld-ed-window", eq: ["6.2", "6.4", "6.10", "6.14", "6.16"], sec: "6.4", page: 114,
    title: "Irrigation window from a soil check (LD and ED)",
    tags: ["when to irrigate", "irrigation window", "feel and appearance", "soil check", "latest and earliest date"],
    tables: ["6.1"], figs: ["6.5", "6.7"],
    note: "Procedure of Examples 6.3, 6.4 and 6.7. Enter the fraction of available water remaining from your soil check. Leave f<sub>dc</sub> at 0 to look it up from Table 6.1 using the crop group and forecast ET.",
    inputs: [
      { k: "Rd", sym: "R<sub>d</sub>", label: "Root zone depth", dim: "length", u: "in", v: 24 },
      { k: "AWC", sym: "AWC", label: "Available water capacity", dim: "awc", u: "in/in", v: 0.13 },
      { k: "fr", sym: "f<sub>r</sub>", label: "Fraction of available water remaining (measured)", dim: "frac", u: "decimal", v: 0.8 },
      { k: "ETf", sym: "ET<sub>f</sub>", label: "Forecast daily ET", dim: "rate", u: "in/d", v: 0.3 },
      { k: "fdc", sym: "f<sub>dc</sub>", label: "Allowable fraction depleted (0 = use Table 6.1)", dim: "frac", u: "decimal", v: 0 },
      { k: "grp", label: "Crop group (Table 6.1)", type: "sel", opts: groupOpts, v: 3 },
      { k: "dep", sym: "d<sub>ep</sub>", label: "Planned effective irrigation depth", dim: "length", u: "in", v: 0.5 },
      { k: "ra", sym: "r<sub>a</sub>", label: "Rainfall allowance", dim: "length", u: "in", v: 0.4 }],
    outputs: [
      { k: "fdcU", sym: "f<sub>dc</sub>", label: "Allowable fraction depleted used", dim: "frac", u: "decimal", dp: 2 },
      { k: "TAW", sym: "TAW", label: "Total available water", dim: "length", u: "in", dp: 2 },
      { k: "AD", sym: "AD", label: "Allowable depletion", dim: "length", u: "in", dp: 2 },
      { k: "SWD", sym: "SWD", label: "Soil water deficit", dim: "length", u: "in", dp: 2 },
      { k: "LD", sym: "LD", label: "Latest date (days from now)", dim: "time", u: "d", dp: 1 },
      { k: "ED", sym: "ED", label: "Earliest date (days from now)", dim: "time", u: "d", dp: 1 },
      { k: "msg", label: "Advice", text: true }],
    f: v => {
      const fdcU = v.fdc > 0 ? v.fdc : fdcOf(v.grp, v.ETf);
      const TAW = v.Rd * v.AWC, AD = fdcU * TAW, SWD = (1 - v.fr) * TAW;
      const LD = (AD - SWD) / v.ETf, ED = Math.max(0, (v.ra + v.dep - SWD) / v.ETf);
      const msg = LD < 0 ? "Irrigation is late: the deficit is already past the allowable depletion."
        : ED > LD ? "The planned depth plus rainfall allowance will not fit before stress; irrigate by the latest date with a lighter application."
        : `Irrigate between ${ED.toFixed(1)} and ${LD.toFixed(1)} days from now.`;
      return { fdcU, TAW, AD, SWD, LD, ED, msg };
    },
    examples: [
      // the book rounds SWD to 0.6 in (exact 0.624 in), so ED is 0.92 d against the printed 1 d
      { ref: "Examples 6.3 and 6.4 (book rounds TAW, AD and SWD)", page: 115, in: {}, out: { fdcU: 0.40, TAW: 3.1, AD: 1.2, LD: 2, ED: 1 }, tol: 0.09 },
      { ref: "Example 6.7 Location 1", page: 122, in: { Rd: 12, AWC: 0.17, fr: 0.6, ETf: 0.2, fdc: 0.5, dep: 0.5, ra: 0.3 }, out: { TAW: 2.04, AD: 1.02, SWD: 0.816, LD: 1.02, ED: 0 } },
      { ref: "Example 6.7 Location 2", page: 122, in: { Rd: 12, AWC: 0.17, fr: 0.8, ETf: 0.2, fdc: 0.5, dep: 0.5, ra: 0.3 }, out: { SWD: 0.408, LD: 3.06, ED: 1.96 } }],
  });

  // ---------------------------------------------------------------- checkbook
  C({
    id: "eq-6.18-6.25", eq: ["6.18", "6.19", "6.20", "6.21"], sec: "6.4", page: 116, title: "One day of the checkbook water balance",
    tags: ["checkbook", "water balance", "daily SWD", "soil water accounting", "effective irrigation"],
    figs: ["6.9"],
    note: "Effective irrigation is the low-quarter infiltrated depth, limited to the deficit (Eq. 6.20 and 6.21). The same limit is applied to rain to get effective precipitation.",
    inputs: [
      { k: "SWD0", sym: "SWD<sub>i−1</sub>", label: "Deficit at the start of the day", dim: "length", u: "in", v: 2.61 },
      { k: "ET", sym: "ET<sub>i−1</sub>", label: "ET during the day", dim: "rate", u: "in/d", v: 0.13 },
      { k: "dLQ", sym: "d<sub>LQ,i−1</sub>", label: "Low-quarter infiltrated irrigation", dim: "length", u: "in", v: 1.1 },
      { k: "P", sym: "P<sub>i−1</sub>", label: "Infiltrated rainfall", dim: "length", u: "in", v: 0.3 },
      { k: "Uf", sym: "U<sub>f,i−1</sub>", label: "Upward flow from a water table", dim: "length", u: "in", v: 0 },
      { k: "TAW", sym: "TAW", label: "Total available water (for AW form)", dim: "length", u: "in", v: 6 }],
    outputs: [
      { k: "de", sym: "d<sub>e</sub>", label: "Effective irrigation", dim: "length", u: "in", dp: 2 },
      { k: "Pe", sym: "P<sub>e</sub>", label: "Effective precipitation", dim: "length", u: "in", dp: 2 },
      { k: "SWD", sym: "SWD<sub>i</sub>", label: "Deficit at the start of the next day", dim: "length", u: "in", dp: 2 },
      { k: "AW", sym: "AW<sub>i</sub>", label: "Available water at the start of the next day", dim: "length", u: "in", dp: 2 }],
    f: v => {
      const de = Math.min(v.dLQ, v.SWD0), Pe = Math.min(v.P, Math.max(0, v.SWD0 - de));
      const SWD = Math.max(0, v.SWD0 + v.ET - de - Pe - v.Uf);
      return { de, Pe, SWD, AW: v.TAW - SWD };
    },
    examples: [{ ref: "Example 6.5 Location 1, June 27", page: 119, in: {}, out: { de: 1.1, Pe: 0.3, SWD: 1.34, AW: 4.66 } },
               { ref: "Example 6.5 Location 1, June 25", page: 119, in: { SWD0: 2.2, ET: 0.2, dLQ: 0, P: 0 }, out: { SWD: 2.4 } }],
  });

  C({
    id: "eq-6.22-6.25", eq: ["6.22", "6.23", "6.24", "6.25"], sec: "6.4", page: 118, title: "Change in deficit from root zone expansion",
    tags: ["root zone expansion", "new soil explored by roots", "delta SWD", "growing roots"],
    note: "Add ΔSWD to Eq. 6.18 (giving Eq. 6.22) or ΔAW to Eq. 6.19 (giving Eq. 6.24) on the day roots grow into new soil. f<sub>do</sub> + f<sub>ro</sub> = 1.",
    inputs: [
      { k: "AWC", sym: "AWC", label: "AWC of the new soil", dim: "awc", u: "in/in", v: 0.2 },
      { k: "fdo", sym: "f<sub>do</sub>", label: "Initial fraction depleted in the new soil", dim: "frac", u: "decimal", v: 0.3 },
      { k: "dR", sym: "ΔR<sub>d</sub>", label: "Added root depth", dim: "length", u: "in", v: 6 }],
    outputs: [
      { k: "dSWD", sym: "ΔSWD<sub>i−1</sub>", label: "Added deficit", dim: "length", u: "in", dp: 3 },
      { k: "dAW", sym: "ΔAW<sub>i−1</sub>", label: "Added available water", dim: "length", u: "in", dp: 3 },
      { k: "dTAW", sym: "ΔTAW", label: "Added total available water", dim: "length", u: "in", dp: 3 }],
    f: v => ({ dSWD: v.AWC * v.fdo * v.dR, dAW: v.AWC * (1 - v.fdo) * v.dR, dTAW: v.AWC * v.dR }),
    examples: [{ ref: "Check", page: 118, in: {}, out: { dSWD: 0.36, dAW: 0.84, dTAW: 1.2 } }],
  });

  const fmt = (x, d) => (isFinite(x) ? x.toFixed(d) : "-");
  C({
    id: "checkbook", eq: ["6.2", "6.4", "6.6", "6.7", "6.10", "6.16", "6.18", "6.20", "6.21", "6.22", "6.23"], sec: "6.4", page: 116,
    title: "Checkbook irrigation scheduling over several days",
    tags: ["checkbook method", "water balance scheduling", "daily soil water budget", "irrigation scheduler", "when do I irrigate next", "ET bookkeeping"],
    tables: ["6.1", "6.4"], figs: ["6.8", "6.9", "6.11", "6.12"],
    note: "Procedure of Example 6.5. Each list holds one value per day; the deficit is reported at the start of each day and after the last day. Effective irrigation and rain are limited to the deficit (Eq. 6.20 and 6.21). With root growth on, the root zone deepens by Eq. 6.6 and 6.7 and the new soil adds AWC × f<sub>do</sub> × ΔR<sub>d</sub> to the deficit (Eq. 6.22 and 6.23). The book rounds LD and ED to whole days.",
    inputs: [
      { k: "SWD0", sym: "SWD<sub>0</sub>", label: "Deficit at the start of the first day", dim: "length", u: "in", v: 2.2 },
      { k: "ET", sym: "ET", label: "Actual ET each day (in)", type: "list", v: "0.20, 0.21, 0.13, 0.17" },
      { k: "P", sym: "P", label: "Infiltrated rain each day (in)", type: "list", v: "0, 0, 0.3, 0" },
      { k: "dLQ", sym: "d<sub>LQ</sub>", label: "Low-quarter infiltrated irrigation each day (in)", type: "list", v: "0, 0, 1.1, 0" },
      { k: "Uf", sym: "U<sub>f</sub>", label: "Upward flow each day (in, blank = 0)", type: "list", v: "" },
      { k: "ETf", sym: "ET<sub>f</sub>", label: "Forecast ET for LD and ED", dim: "rate", u: "in/d", v: 0.18 },
      { k: "AWC", sym: "AWC", label: "Available water capacity", dim: "awc", u: "in/in", v: 0.2 },
      { k: "fdc", sym: "f<sub>dc</sub>", label: "Allowable fraction depleted", dim: "frac", u: "decimal", v: 0.45, help: "See Table 6.1." },
      { k: "dep", sym: "d<sub>ep</sub>", label: "Planned effective irrigation depth", dim: "length", u: "in", v: 1.1 },
      { k: "ra", sym: "r<sub>a</sub>", label: "Rainfall allowance", dim: "length", u: "in", v: 0.5 },
      { k: "rg", label: "Root zone", type: "sel", opts: [["Fixed depth", 0], ["Growing (Eq. 6.6 and 6.7)", 1]], v: 0 },
      { k: "Rd", sym: "R<sub>d</sub>", label: "Root zone depth (fixed), or current depth is computed", dim: "length", u: "in", v: 30 },
      { k: "Rmin", sym: "R<sub>dMIN</sub>", label: "Minimum root depth (growing)", dim: "length", u: "in", v: 6 },
      { k: "Rmax", sym: "R<sub>dMAX</sub>", label: "Maximum effective root depth (growing)", dim: "length", u: "in", v: 36 },
      { k: "Dag0", sym: "D<sub>ag</sub>", label: "Days after germination on the first day (growing)", dim: "time", u: "d", v: 30 },
      { k: "Dtm", sym: "D<sub>tm</sub>", label: "Days from germination to maximum depth (growing)", dim: "time", u: "d", v: 70 },
      { k: "fdo", sym: "f<sub>do</sub>", label: "Fraction depleted in soil below the roots (growing)", dim: "frac", u: "decimal", v: 0 }],
    outputs: [
      { k: "SWD", sym: "SWD", label: "Deficit after the last day", dim: "length", u: "in", dp: 2 },
      { k: "Rdn", sym: "R<sub>d</sub>", label: "Root zone depth after the last day", dim: "length", u: "in", dp: 1 },
      { k: "TAW", sym: "TAW", label: "Total available water", dim: "length", u: "in", dp: 2 },
      { k: "AD", sym: "AD", label: "Allowable depletion", dim: "length", u: "in", dp: 2 },
      { k: "AW", sym: "AW", label: "Available water", dim: "length", u: "in", dp: 2 },
      { k: "LD", sym: "LD", label: "Latest date (days after the last day)", dim: "time", u: "d", dp: 1 },
      { k: "ED", sym: "ED", label: "Earliest date (days after the last day)", dim: "time", u: "d", dp: 1 },
      { k: "LDr", label: "LD rounded as in the book", dim: "count", u: "#", dp: 0 },
      { k: "EDr", label: "ED rounded as in the book", dim: "count", u: "#", dp: 0 },
      { k: "log", label: "Day by day (start of day: SWD, TAW, AD, LD, ED; then de, Pe)", text: true }],
    f: v => {
      const ET = M.list(v.ET), P = M.list(v.P), dLQ = M.list(v.dLQ), Uf = M.list(v.Uf);
      const n = ET.length;
      const RdAt = k => v.rg == 1 ? v.Rmin + (v.Rmax - v.Rmin) * Math.min(1, Math.max(0, (v.Dag0 + k) / v.Dtm)) : v.Rd;
      let SWD = v.SWD0;
      const lines = [];
      const state = k => {
        const Rd = RdAt(k), TAW = v.AWC * Rd, AD = v.fdc * TAW;
        const LD = (AD - SWD) / v.ETf, ED = Math.max(0, (v.ra + v.dep - SWD) / v.ETf);
        return { Rd, TAW, AD, LD, ED, AW: TAW - SWD };
      };
      for (let k = 0; k < n; k++) {
        const s = state(k);
        const de = Math.min(dLQ[k] || 0, SWD);
        const Pe = Math.min(P[k] || 0, Math.max(0, SWD - de));
        const dSWD = v.rg == 1 ? v.AWC * v.fdo * (RdAt(k + 1) - RdAt(k)) : 0;
        lines.push(`Day ${k + 1}: SWD ${fmt(SWD, 2)}, TAW ${fmt(s.TAW, 2)}, AD ${fmt(s.AD, 2)}, LD ${fmt(s.LD, 1)}, ED ${fmt(s.ED, 1)}; de ${fmt(de, 2)}, Pe ${fmt(Pe, 2)}`);
        SWD = Math.max(0, SWD + ET[k] - de - Pe - (Uf[k] || 0) + dSWD);
      }
      const s = state(n);
      lines.push(`End: SWD ${fmt(SWD, 2)}, TAW ${fmt(s.TAW, 2)}, AD ${fmt(s.AD, 2)}, LD ${fmt(s.LD, 1)}, ED ${fmt(s.ED, 1)}`);
      return { SWD, Rdn: s.Rd, TAW: s.TAW, AD: s.AD, AW: s.AW, LD: s.LD, ED: s.ED, LDr: Math.round(s.LD + 1e-9), EDr: Math.round(s.ED + 1e-9), log: lines.join("\n") };
    },
    examples: [
      { ref: "Example 6.5 Location 1 (June 25 to 27, state on June 28)", page: 119,
        in: { ET: "0.20, 0.21, 0.13", P: "0, 0, 0.3", dLQ: "0, 0, 1.1" }, out: { SWD: 1.34, LDr: 8, EDr: 1 } },
      { ref: "Example 6.5 Location 1 (state on June 27)", page: 119,
        in: { ET: "0.20, 0.21", P: "0, 0", dLQ: "0, 0" }, out: { SWD: 2.61, LDr: 1, ED: 0 } },
      { ref: "Example 6.5 Location 2 (state on June 28)", page: 119,
        in: { SWD0: 0.80, ET: "0.20, 0.21, 0.13", P: "0, 0, 0.3", dLQ: "0, 0, 0" }, out: { SWD: 1.04, LDr: 9, EDr: 3 } },
      { ref: "Example 6.5 Location 2 (state on June 26)", page: 119,
        in: { SWD0: 0.80, ET: "0.20", P: "0", dLQ: "0" }, out: { SWD: 1.00, LDr: 9, EDr: 3 } },
      { ref: "Check: root growth into soil at FC lowers SWD share", page: 118,
        in: { SWD0: 1.0, ET: "0.2, 0.2", P: "0, 0", dLQ: "0, 0", rg: 1, Rmin: 6, Rmax: 36, Dag0: 30, Dtm: 60, fdo: 0.5 },
        out: { Rdn: 22, SWD: 1.4 + 0.2 * 0.5 * 1, TAW: 4.4 } }],
  });

  C({
    id: "eq-6.26", eq: ["6.26"], sec: "6.4", page: 120, title: "Simplified checkbook: irrigation needed for the period",
    tags: ["weekly irrigation", "simplified checkbook", "ET minus rain", "how much should I put on this week"],
    inputs: [
      { k: "ET", sym: "ET", label: "Daily ET over the period (in)", type: "list", v: "0.20, 0.30, 0.15, 0.25, 0.20, 0.25, 0.25" },
      { k: "Pe", sym: "P<sub>e</sub>", label: "Daily effective rain over the period (in)", type: "list", v: "0, 0.50, 0, 0.20, 0, 0, 0" }],
    outputs: [
      { k: "sET", sym: "ΣET", label: "Total ET", dim: "length", u: "in", dp: 2 },
      { k: "sPe", sym: "ΣP<sub>e</sub>", label: "Total effective rain", dim: "length", u: "in", dp: 2 },
      { k: "de", sym: "d<sub>e</sub>", label: "Effective irrigation needed", dim: "length", u: "in", dp: 2 }],
    f: v => { const sET = M.sum(M.list(v.ET)), sPe = M.sum(M.list(v.Pe)); return { sET, sPe, de: Math.max(0, sET - sPe) }; },
    examples: [{ ref: "Example 6.6", page: 120, in: {}, out: { sET: 1.6, sPe: 0.7, de: 0.9 } }],
  });

  // ---------------------------------------------------------------- table lookups
  C({
    id: "tab-6.1", eq: [], sec: "6.2", page: 109, title: "Allowable fraction depleted by crop group and ET (Table 6.1)",
    tags: ["fdc table", "MAD", "crop group", "allowable depletion by crop", "Doorenbos Kassam"],
    tables: ["6.1"],
    inputs: [
      { k: "grp", label: "Crop group", type: "sel", opts: groupOpts, v: 4 },
      { k: "ET", sym: "ET", label: "Maximum ET", dim: "rate", u: "in/d", v: 0.28, help: "Interpolated; held at the end values outside 0.08 to 0.39 in/d." }],
    outputs: [
      { k: "fdc", sym: "f<sub>dc</sub>", label: "Maximum allowable fraction depleted", dim: "frac", u: "decimal", dp: 2 },
      { k: "frc", sym: "f<sub>rc</sub>", label: "Minimum fraction remaining", dim: "frac", u: "decimal", dp: 2 }],
    f: v => { const fdc = fdcOf(v.grp, v.ET); return { fdc, frc: 1 - fdc }; },
    examples: [{ ref: "Table 6.1", page: 109, in: { grp: 4, ET: 0.28 }, out: { fdc: 0.50 } },
               { ref: "Example 6.3 (group 3 at 0.3 in/d)", page: 114, in: { grp: 3, ET: 0.3 }, out: { fdc: 0.40 } }],
  });

  C({
    id: "tab-6.2", eq: [], sec: "6.3", page: 110, title: "Maximum effective rooting depth by crop (Table 6.2)",
    tags: ["rooting depth", "root depth table", "maximum root depth", "how deep do corn roots go"],
    tables: ["6.2"],
    inputs: [{ k: "c", label: "Crop", type: "sel", opts: T["6.2"].rows.map((r, i) => [r[0], i]), v: 9 }],
    outputs: [
      { k: "lo", label: "Lower end of range", dim: "length", u: "ft", dp: 1 },
      { k: "hi", label: "Upper end of range", dim: "length", u: "ft", dp: 1 }],
    f: v => { const r = T["6.2"].rows[v.c]; return { lo: r[1], hi: r[2] }; },
    examples: [{ ref: "Table 6.2 corn", page: 110, in: { c: 9 }, out: { lo: 3.3, hi: 6.6 } }],
  });

  const stageText = (tab, j, unit) => tab.rows.filter(r => r[j]).map(r => r[0].toFixed(2).replace(/0$/, "") + " " + unit + ": " + r[j]).join("; ");
  const cropOpts = ["Corn", "Grain sorghum", "Soybean", "Dry beans", "Sugar beets", "Winter wheat", "Alfalfa"].map((c, i) => [c, i]);

  C({
    id: "tab-6.3", eq: [], sec: "6.3", page: 112, title: "Root depth by growth stage, Nebraska crops (Table 6.3)",
    tags: ["root depth by stage", "corn root depth silking", "soybean root depth", "Nebraska"],
    tables: ["6.3"],
    inputs: [{ k: "c", label: "Crop", type: "sel", opts: cropOpts, v: 0 }],
    outputs: [
      { k: "stages", label: "Assumed root depth by stage", text: true },
      { k: "max", label: "Maximum root depth for irrigation management", dim: "length", u: "ft", dp: 1 }],
    f: v => ({ stages: stageText(T["6.3"], +v.c + 1, "ft"), max: T["6.3"].maxDepth[v.c] }),
    examples: [{ ref: "Table 6.3 corn", page: 112, in: { c: 0 }, out: { max: 3 } }],
  });

  C({
    id: "tab-6.4", eq: [], sec: "6.4", page: 117, title: "Long-term crop water use by stage, Nebraska (Table 6.4)",
    tags: ["crop water use", "ET by growth stage", "forecast ET", "corn water use silking", "Nebraska"],
    tables: ["6.4"],
    inputs: [
      { k: "c", label: "Crop", type: "sel", opts: cropOpts, v: 0 },
      { k: "cut", label: "Alfalfa: days since cutting (0 = not recently cut)", dim: "time", u: "d", v: 0 }],
    outputs: [
      { k: "stages", label: "Water use rate (in/d) by stage", text: true },
      { k: "adj", label: "Alfalfa adjustment factor after cutting", dim: "none", dp: 2 }],
    f: v => ({ stages: stageText(T["6.4"], +v.c + 1, "in/d"),
               adj: v.c == 6 && v.cut > 0 ? (v.cut <= 10 ? 0.5 : v.cut <= 20 ? 0.75 : 1) : 1 }),
    examples: [{ ref: "Table 6.4 note", page: 117, in: { c: 6, cut: 5 }, out: { adj: 0.5 } }],
  });

  const texOpts5 = ["Fine sand", "Loamy sand", "Sandy loam", "Fine sandy loam"].map((t, i) => [t, i]);
  C({
    id: "tab-6.5", eq: [], sec: "6.4", page: 121, title: "Soil water deficit from tension (Table 6.5)",
    tags: ["tensiometer", "watermark", "centibars", "tension to SWD", "granular matrix sensor", "what does my sensor reading mean"],
    tables: ["6.5"],
    note: "Example release-curve data for Nebraska soils. Interpolated between rows. Fine sand and loamy sand have no value at 80 cb.",
    inputs: [
      { k: "tex", label: "Soil texture", type: "sel", opts: texOpts5, v: 2 },
      { k: "h", sym: "h", label: "Soil water tension", dim: "pressure", u: "cb", v: 40 },
      { k: "L", sym: "L", label: "Depth of soil the sensor represents", dim: "length", u: "in", v: 12 }],
    outputs: [
      { k: "swd", label: "Deficit per depth of soil", dim: "awc", u: "in/in", dp: 3 },
      { k: "SWD", sym: "SWD", label: "Soil water deficit in the layer", dim: "length", u: "in", dp: 2 },
      { k: "AWC", sym: "AWC", label: "AWC of this texture", dim: "awc", u: "in/in", dp: 3 },
      { k: "fd", sym: "f<sub>d</sub>", label: "Fraction of available water depleted", dim: "frac", u: "decimal", dp: 2 }],
    f: v => {
      const pts = T["6.5"].rows.filter(r => r[+v.tex + 1] !== null).map(r => [r[0], r[+v.tex + 1]]);
      const swd = M.interp(pts, v.h), AWC = T["6.5"].awc[v.tex];
      return { swd, SWD: swd * v.L, AWC, fd: swd / AWC };
    },
    examples: [{ ref: "Table 6.5 sandy loam at 40 cb", page: 121, in: { tex: 2, h: 40, L: 12 }, out: { swd: 0.050, SWD: 0.6 } },
               { ref: "Table 6.5 fine sandy loam at 45 cb (interpolated)", page: 121, in: { tex: 3, h: 45, L: 12 }, out: { swd: 0.0625 } }],
  });

  C({
    id: "tab-6.6", eq: [], sec: "6.4", page: 121, title: "Threshold soil water tension to start irrigating (Table 6.6)",
    tags: ["threshold tension", "when to irrigate by sensor", "centibar trigger", "watermark threshold"],
    tables: ["6.6"],
    note: "Based on f<sub>dc</sub> = 0.35 and sensing near the vertical center of the root zone.",
    inputs: [{ k: "tex", label: "Soil texture", type: "sel", opts: T["6.6"].rows.map((r, i) => [r[0], i]), v: 4 }],
    outputs: [{ k: "h", sym: "h", label: "Threshold tension", dim: "pressure", u: "cb", dp: 0 }],
    f: v => ({ h: T["6.6"].rows[v.tex][1] }),
    examples: [{ ref: "Table 6.6 silt loam", page: 121, in: { tex: 4 }, out: { h: 80 } }],
  });
})(typeof window !== "undefined" ? window : globalThis);
