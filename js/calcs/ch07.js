/* Chapter 7  Salinity Management  (Equations 7.1 to 7.10, Tables 7.2 and 7.3, Figures 7.10 to 7.12) */
(function (G) {
  const T = G.TAB = G.TAB || {};
  const M = G.M;

  // Table 7.2. Salt tolerance of major crops (adapted from Maas and Hoffman, 1977) (p. 136)
  T["7.2"] = {
    title: "Salt tolerance of major crops",
    cols: ["Crop", "Group", "Threshold T (dS/m)", "Yield decline S (%/(dS/m))", "Rating"],
    rows: [
      ["Barley", "Grain", 8.0, 5.0, "t"], ["Corn", "Grain", 1.7, 12, "ms"], ["Cowpea", "Grain", 4.9, 12, "mt"],
      ["Rice", "Grain", 3.0, 12, "s"], ["Sorghum", "Grain", 6.8, 16, "mt"], ["Soybean", "Grain", 5.0, 20, "mt"],
      ["Wheat", "Grain", 6.0, 7.1, "mt"],
      ["Cotton", "Fiber, sugar and oil", 7.7, 5.2, "t"], ["Flax", "Fiber, sugar and oil", 1.7, 12, "ms"],
      ["Peanut", "Fiber, sugar and oil", 3.2, 29, "ms"], ["Sugar beet", "Fiber, sugar and oil", 7.0, 5.9, "t"],
      ["Sugar cane", "Fiber, sugar and oil", 1.7, 5.9, "ms"],
      ["Alfalfa", "Grasses and forage", 2.0, 7.3, "ms"], ["Bermuda grass", "Grasses and forage", 6.9, 6.4, "t"],
      ["Clover", "Grasses and forage", 1.5, 12, "ms"], ["Fescue", "Grasses and forage", 3.9, 5.3, "mt"],
      ["Orchard grass", "Grasses and forage", 1.5, 6.2, "ms"], ["Ryegrass", "Grasses and forage", 5.6, 7.6, "mt"],
      ["Trefoil, birdsfoot", "Grasses and forage", 5.0, 10, "mt"],
      ["Asparagus", "Vegetables and fruit", 4.1, 2.0, "t"], ["Bean", "Vegetables and fruit", 1.0, 19, "s"],
      ["Cabbage", "Vegetables and fruit", 1.8, 9.7, "ms"], ["Carrot", "Vegetables and fruit", 1.0, 14, "s"],
      ["Celery", "Vegetables and fruit", 1.8, 6.2, "ms"], ["Corn, sweet", "Vegetables and fruit", 1.7, 12, "ms"],
      ["Lettuce", "Vegetables and fruit", 1.3, 13, "ms"], ["Potato", "Vegetables and fruit", 1.7, 12, "ms"],
      ["Strawberry", "Vegetables and fruit", 1.0, 33, "s"], ["Sweet potato", "Vegetables and fruit", 1.5, 11, "ms"],
      ["Tomato", "Vegetables and fruit", 2.5, 9.9, "ms"],
      ["Almond", "Woody", 1.5, 19, "s"], ["Apricot", "Woody", 1.6, 24, "s"], ["Blackberry", "Woody", 1.5, 22, "s"],
      ["Date palm", "Woody", 4.0, 3.6, "t"], ["Grape", "Woody", 1.5, 9.6, "ms"], ["Grapefruit", "Woody", 1.8, 16, "s"],
      ["Guayule", "Woody", 15, 13, "t"], ["Orange", "Woody", 1.7, 16, "s"], ["Peach", "Woody", 1.7, 21, "s"],
      ["Plum", "Woody", 2.6, 31, "s"]],
    notes: "Rating: s = sensitive, ms = moderately sensitive, mt = moderately tolerant, t = tolerant.",
  };
  const RATING = { s: "sensitive", ms: "moderately sensitive", mt: "moderately tolerant", t: "tolerant" };
  const cropRows = T["7.2"].rows;
  const crop = name => cropRows.findIndex(r => r[0] === name);
  const cropOpts = cropRows.map((r, i) => [r[0], i]).concat([["Other crop (enter T and S)", -1]]);
  const cropTS = v => (v.crop >= 0 ? { T: cropRows[v.crop][2], S: cropRows[v.crop][3] } : { T: v.T, S: v.S });

  // Table 7.3. Classification guide for saline irrigation water (p. 136)
  T["7.3"] = {
    title: "Classification guide for saline irrigation water",
    cols: ["Irrigation water", "Salt concentration (ppm or mg/L)", "Electrical conductivity (dS/m)", "Crop problems"],
    rows: [
      ["Fresh", "< 300", "< 0.5", "none"], ["Slightly saline", "300 to 600", "0.5 to 1", "rare"],
      ["Moderately saline", "600 to 1,200", "1 to 2", "occasional"], ["Saline", "1,200 to 2,400", "2 to 4", "common"],
      ["Highly saline", "2,400 to 4,800", "4 to 7", "severe"]],
  };
  const ecClass = ec => {
    const lim = [0.5, 1, 2, 4, 7];
    for (let i = 0; i < lim.length; i++) if (ec < lim[i]) return T["7.3"].rows[i];
    return ["Beyond Table 7.3 (more saline than highly saline)", "> 4,800", "> 7", "severe"];
  };

  // Figure 7.10 boundaries, digitized from the printed figure (EC of applied water, dS/m, at a given SAR).
  // Left line: severe reduction to its left. Right line: no reduction to its right.
  const fig710Left = [[0, 0.166], [1.5, 0.166], [9.2, 0.499], [32.5, 3.12]];
  const fig710Right = sar => 0.532 + sar / 6.885;
  const sodicity = (sar, ec) => {
    let left;
    if (sar > 32.5) left = 3.12 + (sar - 32.5) * (3.12 - 0.499) / (32.5 - 9.2);
    else left = M.interp(fig710Left, sar);
    if (ec < left) return "Severe reduction in rate of infiltration";
    if (ec < fig710Right(sar)) return "Slight to moderate reduction in rate of infiltration";
    return "No reduction in rate of infiltration";
  };

  // Figure 7.11, digitized: each Lr line passes through the origin; ECa/T for each line.
  const fig711 = [[0, 0], [1 / 3.37, 0.05], [1 / 1.928, 0.10], [1 / 1.231, 0.15], [1 / 0.853, 0.20], [1 / 0.419, 0.30]];
  const lrFig = (eca, t) => {
    const x = eca / t;
    if (x <= fig711[fig711.length - 1][0]) return M.interp(fig711, x);
    return NaN; // beyond the chart (Lr above 0.30)
  };

  const C = (s) => { s.ch = 7; s.file = "ch07"; return calc(s); };

  C({
    id: "salt-applied", eq: [], sec: "7.2", page: 134, title: "Salt applied with irrigation water",
    tags: ["how much salt am I putting on", "salt load", "tons of salt", "salt applied", "Eq 5.18"],
    note: "Example 7.1 uses Eq. 5.18: C<sub>1</sub> = 0.226 C d<sub>a</sub> (lb/ac, with C in ppm and d<sub>a</sub> in inches).",
    inputs: [
      { k: "C", sym: "C", label: "Salt concentration of irrigation water", dim: "conc", u: "ppm", v: 500 },
      { k: "da", sym: "d<sub>a</sub>", label: "Depth of irrigation water applied", dim: "length", u: "in", v: 15 },
      { k: "A", sym: "A", label: "Field area", dim: "area", u: "ac", v: 50 }],
    outputs: [
      { k: "C1", sym: "C<sub>1</sub>", label: "Salt applied per acre", dim: "massarea", u: "lb/ac", dp: 0 },
      { k: "W", sym: "W", label: "Total salt applied to the field", dim: "mass", u: "ton (short)", dp: 1 }],
    f: v => { const C1 = 0.226 * v.C * v.da; return { C1, W: C1 * v.A / 2000 }; },
    examples: [{ ref: "Example 7.1", page: 134, in: { C: 500, da: 15, A: 50 }, out: { C1: 1695, W: 42 } }],
  });

  C({
    id: "eq-7.1", eq: ["7.1"], sec: "7.3", page: 134, title: "Osmotic potential from electrical conductivity",
    tags: ["osmotic potential", "EC", "salinity stress", "osmotic pressure"],
    note: "The book gives the magnitude; osmotic potential itself is negative (Ψ<sub>o</sub> = −0.36 EC when used in Eq. 2.7).",
    inputs: [{ k: "EC", sym: "EC", label: "Electrical conductivity of the soil solution", dim: "ec", u: "dS/m", v: 4 }],
    outputs: [{ k: "psi", sym: "Ψ<sub>o</sub>", label: "Osmotic potential (magnitude)", dim: "pressure", u: "bar", dp: 2 }],
    f: v => ({ psi: 0.36 * v.EC }),
  });

  C({
    id: "eq-7.2", eq: ["7.2"], sec: "7.3", page: 134, title: "Salt concentration (TDS) from EC",
    tags: ["TDS", "total dissolved solids", "ppm from EC", "mg/L", "convert EC to ppm", "is my water too salty"],
    inputs: [{ k: "EC", sym: "EC", label: "Electrical conductivity", dim: "ec", u: "dS/m", v: 1 }],
    outputs: [{ k: "C", sym: "C", label: "Salt concentration", dim: "conc", u: "mg/L", dp: 0 }],
    f: v => ({ C: 640 * v.EC }),
    examples: [{ ref: "Example 7.2", page: 137, in: { EC: 3000 / 640 }, out: { C: 3000 } }],
  });

  C({
    id: "ec-temp", eq: [], sec: "7.3", page: 134, title: "Correct EC to 25 °C",
    tags: ["temperature correction", "EC at 25", "conductivity meter", "standardize EC"],
    note: "Between 15 and 35 °C, EC rises about 2% per °C. Following the book's example (5 dS/m at 35 °C is 4 dS/m at 25 °C): EC<sub>25</sub> = EC<sub>t</sub> [1 − 0.02 (t − 25)].",
    inputs: [
      { k: "ECt", sym: "EC<sub>t</sub>", label: "EC measured at the solution temperature", dim: "ec", u: "dS/m", v: 5 },
      { k: "t", sym: "t", label: "Solution temperature (15 to 35 °C)", dim: "temp", u: "°C", v: 35 }],
    outputs: [{ k: "EC25", sym: "EC<sub>25</sub>", label: "EC at 25 °C", dim: "ec", u: "dS/m", dp: 2 }],
    f: v => ({ EC25: v.ECt * (1 - 0.02 * (v.t - 25)) }),
    examples: [{ ref: "Section 7.3 text", page: 134, in: { ECt: 5, t: 35 }, out: { EC25: 4 } }],
  });

  C({
    id: "eq-7.3", eq: ["7.3"], sec: "7.4", page: 135, title: "Relative crop yield from soil salinity",
    tags: ["relative yield", "salt tolerance", "yield loss from salt", "how much yield will salt cost me", "ECe", "threshold", "Maas Hoffman"],
    tables: ["7.2"], figs: ["7.7"],
    inputs: [
      { k: "crop", label: "Crop (Table 7.2)", type: "sel", opts: cropOpts, v: crop("Corn") },
      { k: "T", sym: "T", label: "Threshold (only for Other crop)", dim: "ec", u: "dS/m", v: 1.7 },
      { k: "S", sym: "S", label: "Slope, % per dS/m (only for Other crop)", v: 12 },
      { k: "ECe", sym: "EC<sub>e</sub>", label: "Mean root zone salinity (saturated extract)", dim: "ec", u: "dS/m", v: 4.7, help: "From a water or soil concentration in mg/L use Eq. 7.2: EC = C / 640." },
      { k: "Ymax", sym: "Y<sub>max</sub>", label: "Yield of nonsaline area (optional, any unit)", v: 180 }],
    outputs: [
      { k: "Tu", sym: "T", label: "Threshold used", dim: "ec", u: "dS/m", dp: 1 },
      { k: "Su", sym: "S", label: "Slope used (%/(dS/m))", dp: 1 },
      { k: "Yr", sym: "Y<sub>r</sub>", label: "Relative yield", dim: "pct", u: "%", dp: 0 },
      { k: "Ya", sym: "Y<sub>a</sub>", label: "Actual yield in the saline area (same unit as Y<sub>max</sub>)", dp: 0 }],
    f: v => {
      const { T: t, S } = cropTS(v);
      const Yr = v.ECe > t ? Math.max(0, 100 - S * (v.ECe - t)) : 100;
      return { Tu: t, Su: S, Yr, Ya: Yr / 100 * v.Ymax };
    },
    // the book rounds EC to 4.7 dS/m before applying Eq. 7.3
    examples: [{ ref: "Example 7.2", page: 137, in: { crop: crop("Corn"), ECe: 3000 / 640, Ymax: 180 }, out: { Yr: 64, Ya: 115 } }],
  });

  C({
    id: "tab-7.2", eq: [], sec: "7.4", page: 136, title: "Crop salt tolerance (Table 7.2)",
    tags: ["salt tolerance table", "threshold", "salt sensitive crops", "which crops tolerate salt", "barley", "cotton", "alfalfa", "tomato"],
    tables: ["7.2"], figs: ["7.9"],
    inputs: [
      { k: "crop", label: "Crop", type: "sel", opts: cropRows.map((r, i) => [r[0], i]), v: crop("Corn") },
      { k: "Yr", sym: "Y<sub>r</sub>", label: "Relative yield you will accept", dim: "pct", u: "%", v: 90 }],
    outputs: [
      { k: "T", sym: "T", label: "Salt tolerance threshold", dim: "ec", u: "dS/m", dp: 1 },
      { k: "S", sym: "S", label: "Percent yield decline per dS/m", dp: 1 },
      { k: "rating", label: "Qualitative rating", text: true },
      { k: "ECe", sym: "EC<sub>e</sub>", label: "Root zone salinity giving that relative yield (Eq. 7.3 solved)", dim: "ec", u: "dS/m", dp: 2 }],
    f: v => {
      const r = cropRows[v.crop];
      return { T: r[2], S: r[3], rating: RATING[r[4]], ECe: v.Yr >= 100 ? r[2] : r[2] + (100 - v.Yr) / r[3] };
    },
    examples: [{ ref: "Table 7.2", page: 136, in: { crop: crop("Tomato"), Yr: 100 }, out: { T: 2.5, S: 9.9, rating: "moderately sensitive" } }],
  });

  C({
    id: "tab-7.3", eq: [], sec: "7.4", page: 136, title: "Saline water class (Table 7.3)",
    tags: ["water quality class", "is my water too salty", "fresh", "saline water", "irrigation water classification"],
    tables: ["7.3"],
    inputs: [{ k: "EC", sym: "EC", label: "Electrical conductivity of the irrigation water", dim: "ec", u: "dS/m", v: 0.8, help: "Have mg/L? EC = C / 640 (Eq. 7.2)." }],
    outputs: [
      { k: "cls", label: "Class", text: true },
      { k: "ppm", label: "Typical salt concentration (ppm)", text: true },
      { k: "prob", label: "Crop problems", text: true },
      { k: "C", sym: "C", label: "Approximate salt concentration (Eq. 7.2)", dim: "conc", u: "mg/L", dp: 0 }],
    f: v => { const r = ecClass(v.EC); return { cls: r[0], ppm: r[1], prob: r[3], C: 640 * v.EC }; },
    examples: [{ ref: "Table 7.3", page: 136, in: { EC: 0.4 }, out: { cls: "Fresh", prob: "none" } },
               { ref: "Table 7.3", page: 136, in: { EC: 3 }, out: { cls: "Saline", prob: "common" } }],
  });

  C({
    id: "eq-7.4-7.5", eq: ["7.4", "7.5"], sec: "7.5", page: 138, title: "Sodium adsorption ratio (SAR) and sodicity hazard",
    tags: ["SAR", "sodium", "sodicity", "infiltration problem", "meq/L", "calcium magnesium", "will my water seal the soil"],
    figs: ["7.10"],
    note: "Ion concentrations entered in meq/L are converted with Eq. 7.5 (divide by valence: Na 1, Ca 2, Mg 2). The hazard class uses the two boundary lines of Figure 7.10, digitized from the printed chart.",
    inputs: [
      { k: "Na", sym: "C<sub>Na</sub>", label: "Sodium, meq/L", v: 33 },
      { k: "Ca", sym: "C<sub>Ca</sub>", label: "Calcium, meq/L", v: 24 },
      { k: "Mg", sym: "C<sub>Mg</sub>", label: "Magnesium, meq/L", v: 8 },
      { k: "EC", sym: "EC<sub>a</sub>", label: "Salinity of the applied water", dim: "ec", u: "dS/m", v: 0.4 }],
    outputs: [
      { k: "cNa", sym: "C<sub>Na</sub>", label: "Sodium, mol<sub>c</sub>/m³ (Eq. 7.5)", dp: 1 },
      { k: "cCa", sym: "C<sub>Ca</sub>", label: "Calcium, mol<sub>c</sub>/m³", dp: 1 },
      { k: "cMg", sym: "C<sub>Mg</sub>", label: "Magnesium, mol<sub>c</sub>/m³", dp: 1 },
      { k: "SAR", sym: "SAR", label: "Sodium adsorption ratio, (mol<sub>c</sub>/m³)<sup>1/2</sup>", dp: 1 },
      { k: "haz", label: "Figure 7.10 infiltration hazard", text: true }],
    f: v => {
      const cNa = v.Na / 1, cCa = v.Ca / 2, cMg = v.Mg / 2;
      const SAR = cNa / Math.sqrt(cCa + cMg);
      return { cNa, cCa, cMg, SAR, haz: sodicity(SAR, v.EC) };
    },
    examples: [{ ref: "Example 7.3", page: 138, in: { Na: 33, Ca: 24, Mg: 8, EC: 0.4 },
      out: { cNa: 33, cCa: 12, cMg: 4, SAR: 8.2, haz: "Severe reduction in rate of infiltration" } }],
  });

  C({
    id: "eq-7.6", eq: ["7.6a", "7.6b"], sec: "7.7", page: 139, title: "Leaching fraction from water depths",
    tags: ["leaching fraction", "deep percolation", "how much water leaches"],
    inputs: [
      { k: "dp", sym: "d<sub>p</sub>", label: "Depth drained below the root zone", dim: "length", u: "in", v: 2 },
      { k: "dz", sym: "d<sub>z</sub>", label: "Mean depth of infiltrated irrigation", dim: "length", u: "in", v: 16 },
      { k: "dr", sym: "d<sub>r</sub>", label: "Depth of infiltrated rainfall", dim: "length", u: "in", v: 4 }],
    outputs: [
      { k: "dt", sym: "d<sub>t</sub>", label: "Total infiltrated water", dim: "length", u: "in", dp: 2 },
      { k: "Lf", sym: "L<sub>f</sub>", label: "Actual leaching fraction", dim: "frac", u: "decimal", dp: 3 }],
    f: v => { const dt = v.dz + v.dr; return { dt, Lf: v.dp / dt }; },
  });

  C({
    id: "eq-7.7", eq: ["7.7"], sec: "7.7", page: 139, title: "Weighted salinity of applied water (irrigation plus rain)",
    tags: ["ECa", "applied water salinity", "rain dilution", "weighted mean concentration"],
    inputs: [
      { k: "Ci", sym: "C<sub>i</sub>", label: "Irrigation water salinity", dim: "ec", u: "dS/m", v: 3 },
      { k: "dz", sym: "d<sub>z</sub>", label: "Depth of infiltrated irrigation", dim: "length", u: "in", v: 16 },
      { k: "Cr", sym: "C<sub>r</sub>", label: "Rain water salinity (normally 0)", dim: "ec", u: "dS/m", v: 0 },
      { k: "dr", sym: "d<sub>r</sub>", label: "Depth of infiltrated rainfall", dim: "length", u: "in", v: 4 }],
    outputs: [{ k: "Ca", sym: "C<sub>a</sub>", label: "Weighted salinity of applied water", dim: "ec", u: "dS/m", dp: 2 }],
    f: v => ({ Ca: (v.Ci * v.dz + v.Cr * v.dr) / (v.dz + v.dr) }),
    examples: [{ ref: "Example 7.4", page: 139, in: { Ci: 0.5, dz: 300, Cr: 0, dr: 250 }, out: { Ca: 0.27 } },
               { ref: "Example 7.5", page: 140, in: { Ci: 3, dz: 16, Cr: 0, dr: 4 }, out: { Ca: 2.4 } }],
  });

  C({
    id: "leaching-fraction", eq: ["7.6a", "7.7"], sec: "7.7", page: 139, title: "Actual leaching fraction from salinity of applied and drainage water",
    tags: ["leaching fraction", "drainage water EC", "am I leaching enough", "annual leaching"],
    inputs: [
      { k: "Ci", sym: "C<sub>i</sub>", label: "Irrigation water salinity", dim: "ec", u: "dS/m", v: 0.5 },
      { k: "dz", sym: "d<sub>z</sub>", label: "Infiltrated irrigation", dim: "length", u: "mm", v: 300 },
      { k: "Cr", sym: "C<sub>r</sub>", label: "Rain water salinity (normally 0)", dim: "ec", u: "dS/m", v: 0 },
      { k: "dr", sym: "d<sub>r</sub>", label: "Infiltrated rainfall", dim: "length", u: "mm", v: 250 },
      { k: "Cd", sym: "C<sub>d</sub>", label: "Salinity of water draining below the root zone", dim: "ec", u: "dS/m", v: 2.5 }],
    outputs: [
      { k: "Ca", sym: "C<sub>a</sub>", label: "Weighted salinity of applied water (Eq. 7.7)", dim: "ec", u: "dS/m", dp: 2 },
      { k: "Lf", sym: "L<sub>f</sub>", label: "Actual leaching fraction (Eq. 7.6a)", dim: "frac", u: "decimal", dp: 3 },
      { k: "dp", sym: "d<sub>p</sub>", label: "Implied deep percolation", dim: "length", u: "mm", dp: 0 }],
    f: v => {
      const dt = v.dz + v.dr, Ca = (v.Ci * v.dz + v.Cr * v.dr) / dt, Lf = Ca / v.Cd;
      return { Ca, Lf, dp: Lf * dt };
    },
    examples: [{ ref: "Example 7.4", page: 139, in: { Ci: 0.5, dz: 300, Cr: 0, dr: 250, Cd: 2.5 }, out: { Ca: 0.27, Lf: 0.11 } }],
  });

  C({
    id: "eq-7.8", eq: ["7.8"], sec: "7.7", page: 139, title: "Leaching requirement from allowed drainage salinity",
    tags: ["leaching requirement", "Lr", "how much extra water to leach salt"],
    inputs: [
      { k: "ECa", sym: "EC<sub>a</sub>", label: "Salinity of applied water", dim: "ec", u: "dS/m", v: 2.4 },
      { k: "ECd", sym: "EC<sub>d</sub><sup>*</sup>", label: "Allowed salinity of the drainage water", dim: "ec", u: "dS/m", v: 12 },
      { k: "dt", sym: "d<sub>t</sub>", label: "Total infiltrated water (optional)", dim: "length", u: "in", v: 20 }],
    outputs: [
      { k: "Lr", sym: "L<sub>r</sub>", label: "Leaching requirement", dim: "frac", u: "decimal", dp: 3 },
      { k: "dp", sym: "d<sub>p</sub><sup>*</sup>", label: "Required drainage below the root zone", dim: "length", u: "in", dp: 2 }],
    f: v => { const Lr = v.ECa / v.ECd; return { Lr, dp: Lr * v.dt }; },
  });

  C({
    id: "fig-7.11", eq: ["7.7", "7.8"], sec: "7.7", page: 140, title: "Leaching requirement for a crop (Figure 7.11)",
    tags: ["leaching requirement", "Lr", "salt tolerance threshold", "how much to leach for my crop", "tomato", "procedure"],
    tables: ["7.2"], figs: ["7.11"],
    note: "L<sub>r</sub> is read from Figure 7.11 (Hoffman and van Genuchten, 1983). The chart lines were digitized; each passes through the origin, so L<sub>r</sub> depends on EC<sub>a</sub>/T. Values above L<sub>r</sub> = 0.30 are off the chart.",
    inputs: [
      { k: "crop", label: "Crop (Table 7.2)", type: "sel", opts: cropOpts, v: crop("Tomato") },
      { k: "T", sym: "T", label: "Threshold (only for Other crop)", dim: "ec", u: "dS/m", v: 2.5 },
      { k: "ECi", sym: "EC<sub>i</sub>", label: "Irrigation water salinity", dim: "ec", u: "dS/m", v: 3 },
      { k: "dz", sym: "d<sub>z</sub>", label: "Irrigation water infiltrated", dim: "length", u: "in", v: 16 },
      { k: "dr", sym: "d<sub>r</sub>", label: "Rainfall infiltrated (taken as salt free)", dim: "length", u: "in", v: 4 }],
    outputs: [
      { k: "Tu", sym: "T", label: "Threshold used", dim: "ec", u: "dS/m", dp: 1 },
      { k: "ECa", sym: "EC<sub>a</sub>", label: "Salinity of applied water (Eq. 7.7)", dim: "ec", u: "dS/m", dp: 2 },
      { k: "Lr", sym: "L<sub>r</sub>", label: "Leaching requirement (Figure 7.11)", dim: "frac", u: "decimal", dp: 2 },
      { k: "ECd", sym: "EC<sub>d</sub><sup>*</sup>", label: "Drainage water salinity at L<sub>r</sub> (Eq. 7.8)", dim: "ec", u: "dS/m", dp: 1 },
      { k: "dp", sym: "d<sub>p</sub><sup>*</sup>", label: "Required leaching depth, L<sub>r</sub> × d<sub>t</sub>", dim: "length", u: "in", dp: 2 }],
    f: v => {
      const t = cropTS(v).T, dt = v.dz + v.dr, ECa = v.ECi * v.dz / dt, Lr = lrFig(ECa, t);
      return { Tu: t, ECa, Lr, ECd: ECa / Lr, dp: Lr * dt };
    },
    examples: [{ ref: "Example 7.5", page: 140, in: { crop: crop("Tomato"), ECi: 3, dz: 16, dr: 4 }, out: { ECa: 2.4, Lr: 0.17 }, tol: 0.03 }],
  });

  const reclK = [0.45, 0.3, 0.1, 0.1];
  const recl = [["Continuous ponding, organic (peat), K = 0.45", 0], ["Continuous ponding, fine texture (clay loam), K = 0.3", 1],
    ["Continuous ponding, coarse texture (sandy loam), K = 0.1", 2], ["Intermittent ponding or sprinkling, any soil, K = 0.1 (Eq. 7.10)", 3],
    ["Other K (enter below)", -1]];
  C({
    id: "eq-7.9-7.10", eq: ["7.9", "7.10"], sec: "7.8", page: 141, title: "Water needed to reclaim a saline soil",
    tags: ["reclamation", "leach salts out", "how much water to reclaim", "ponding", "sprinkling", "saline soil"],
    figs: ["7.12"],
    inputs: [
      { k: "meth", label: "Method and soil", type: "sel", opts: recl, v: 1 },
      { k: "K", sym: "K", label: "K (only for Other)", v: 0.3 },
      { k: "ds", sym: "d<sub>s</sub>", label: "Depth of soil to reclaim", dim: "length", u: "ft", v: 3 },
      { k: "Co", sym: "C<sub>o</sub>", label: "Initial salinity (EC<sub>e</sub>)", dim: "ec", u: "dS/m", v: 10 },
      { k: "Cf", sym: "C<sub>f</sub>", label: "Desired final salinity (EC<sub>e</sub>)", dim: "ec", u: "dS/m", v: 2 }],
    outputs: [
      { k: "Ku", sym: "K", label: "K used", dp: 2 },
      { k: "ratio", sym: "d<sub>L</sub>/d<sub>s</sub>", label: "Leaching water per depth of soil", dp: 2 },
      { k: "dL", sym: "d<sub>L</sub>", label: "Depth of leaching water", dim: "length", u: "ft", dp: 2 }],
    f: v => {
      const K = v.meth < 0 ? v.K : reclK[v.meth];
      const ratio = K * v.Co / v.Cf;
      return { Ku: K, ratio, dL: ratio * v.ds };
    },
    examples: [{ ref: "Example 7.6 ponding", page: 142, in: { meth: 1, ds: 3, Co: 10, Cf: 2 }, out: { dL: 4.5 } },
               { ref: "Example 7.6 sprinkling", page: 142, in: { meth: 3, ds: 3, Co: 10, Cf: 2 }, out: { dL: 1.5 } }],
  });
})(typeof window !== "undefined" ? window : globalThis);
