/* Chapter 10  Surface Irrigation  (Equations 10.1 to 10.14, Tables 10.1 to 10.7) */
(function (G) {
  const T = G.TAB = G.TAB || {};

  // Table 10.1. Data for Figures 10.7, 10.9 and 10.10 (p. 189)
  T["10.1"] = {
    title: "Data for Figures 10.7, 10.9 and 10.10 (furrow advance, recession and infiltration)",
    cols: ["Distance (ft)", "Advance time (h)", "Recession time (h)", "Opportunity time (h)", "Infiltration (in)"],
    rows: [[0, 0.0, 12.0, 12.0, 4.2], [300, 0.8, 12.2, 11.4, 4.0], [600, 2.7, 12.5, 9.8, 3.6],
           [900, 5.5, 12.8, 7.3, 3.2], [1200, 9.0, 13.0, 4.0, 2.4]],
  };
  // Table 10.2. Correction factor (N2/N1) for furrows per set with a constant water supply (p. 197)
  T["10.2"] = {
    title: "Correction factor (N2/N1) for predicting how many furrows to irrigate per set with a constant water supply",
    cols: ["TL2/TL1", "Fine", "Medium", "Coarse"],
    rows: [
      [0.1, 0.1, 0.2, 0.4], [0.2, 0.2, 0.3, 0.5], [0.3, 0.3, 0.4, 0.6], [0.4, 0.4, 0.5, 0.7], [0.5, 0.5, 0.6, 0.7],
      [0.6, 0.6, 0.7, 0.8], [0.7, 0.7, 0.8, 0.9], [0.8, 0.8, 0.8, 0.9], [0.9, 0.9, 0.9, 1.0], [1.0, 1.0, 1.0, 1.0],
      [1.1, 1.1, 1.1, 1.0], [1.2, 1.2, 1.1, 1.1], [1.3, 1.3, 1.2, 1.1], [1.4, 1.4, 1.3, 1.2], [1.5, 1.5, 1.4, 1.2],
      [1.6, 1.6, 1.4, 1.2], [1.7, 1.7, 1.5, 1.3], [1.8, 1.9, 1.6, 1.3], [1.9, 2.0, 1.6, 1.3], [2.0, 2.1, 1.7, 1.4],
      [2.1, 2.2, 1.7, 1.4], [2.2, 2.3, 1.8, 1.4], [2.3, 2.4, 1.9, 1.5], [2.4, 2.5, 1.9, 1.5], [2.5, 2.6, 2.0, 1.5],
      [2.6, 2.7, 2.0, 1.5], [2.7, 2.8, 2.1, 1.6], [2.8, 2.9, 2.2, 1.6], [2.9, 3.1, 2.2, 1.6], [3.0, 3.2, 2.3, 1.6],
      [4.0, 4.3, 2.8, 1.9], [5.0, 5.4, 3.3, 2.1], [6.0, 6.6, 3.8, 2.2], [7.0, 7.7, 4.3, 2.4], [8.0, 8.9, 4.8, 2.5],
      [9.0, 10.0, 5.2, 2.7], [10.0, 11.2, 5.6, 2.8]],
    notes: "N2 = correct number of furrows to water per set. N1 = original number of furrows watered per set. TL2 = desired advance time. TL1 = original advance time. Based on equation in Cahoon et al., 1995.",
  };
  // Table 10.3. Infiltration factors (dLQ/dg) for sloping furrows (p. 197)
  T["10.3"] = {
    title: "Infiltration factors (ratio of dLQ to dg) for sloping furrows",
    cols: ["Cutoff ratio", "Fine", "Medium", "Coarse"],
    rows: [[0.1, 0.19, 0.32, 0.50], [0.2, 0.32, 0.45, 0.61], [0.3, 0.42, 0.55, 0.68], [0.4, 0.51, 0.62, 0.71],
           [0.5, 0.59, 0.66, 0.72], [0.6, 0.65, 0.69, 0.71], [0.7, 0.70, 0.70, 0.69], [0.8, 0.73, 0.69, 0.66],
           [0.9, 0.74, 0.66, 0.61]],
    notes: "Assumes advance time exceeds recession time.",
  };
  // Table 10.4. Runoff ratios for sloping furrows (p. 197)
  T["10.4"] = {
    title: "Runoff ratios (Rr) for sloping furrows",
    cols: ["Cutoff ratio", "Fine", "Medium", "Coarse"],
    rows: [[0.1, 0.81, 0.68, 0.50], [0.2, 0.68, 0.53, 0.36], [0.3, 0.56, 0.42, 0.26], [0.4, 0.46, 0.32, 0.19],
           [0.5, 0.37, 0.24, 0.14], [0.6, 0.28, 0.18, 0.09], [0.7, 0.21, 0.12, 0.06], [0.8, 0.14, 0.08, 0.03],
           [0.9, 0.08, 0.04, 0.02]],
    notes: "Assumes advance time exceeds recession time.",
  };
  // Table 10.5. Recommended cutoff ratios (p. 199)
  T["10.5"] = {
    title: "Recommended cutoff ratios to achieve maximum efficiency for sloping furrows",
    cols: ["Type of system", "Fine", "Medium", "Coarse"],
    rows: [["No reuse", 0.90, 0.70, 0.50], ["Closed reuse system", 0.50, 0.40, 0.20], ["Open reuse system", 0.70, 0.50, 0.35],
           ["Blocked ends (low slope, 0.1%)", 0.95, 0.85, 0.70], ["Blocked ends (moderate slope, 0.5%)", 0.90, 0.80, 0.65]],
    notes: "Blocked end values based on data from Cahoon et al., 1995.",
  };
  // Table 10.6. Furrow irrigation management recommendations (p. 199)
  T["10.6"] = {
    title: "Furrow irrigation management recommendations for various soil types",
    cols: ["Soil texture", "Basic infiltration rate (in/hr)", "Basic infiltration rate (gpm/100 ft)", "Maximum furrow length (ft)", "Recommended stream size (gpm/100 ft)"],
    rows: [["Loamy sand", "2.0-5.0", 2.4, 600, 4.8], ["Sandy loam", "0.5-4.0", 1.9, 800, 3.8],
           ["Fine sandy loam", "0.2-2.0", 1.7, 1000, 3.4], ["Silt loam", "0.2-1.5", 1.1, 1100, 2.2],
           ["Silty clay loam", "0.05-0.25", 0.1, 1300, 1.4]],
    notes: "Actual stream size must be less than maximum nonerosive stream size.",
  };
  // Table 10.7. Surge irrigation on time factors (p. 204)
  T["10.7"] = {
    title: "Surge irrigation on time factors for four and six surge cycles during advance",
    cols: ["Cycle no.", "Four cycles: fraction of field", "Four cycles: on time factor", "Six cycles: fraction of field", "Six cycles: on time factor"],
    rows: [[1, 0.25, 1.0, 0.17, 1.0], [2, 0.50, 1.9, 0.34, 1.9], [3, 0.75, 2.4, 0.51, 2.4], [4, 1.00, 2.9, 0.68, 2.9],
           [5, null, null, 0.85, 3.3], [6, null, null, 1.00, 3.7], ["Post advance or cutback", null, "0.8-1.6", null, "1.5-3.0"]],
    notes: "Table based on Yonts et al., 1996, and Fekersillassie and Eisenhauer, 2000.",
  };

  const texOpts = [["Fine (clays, silty clays, silty clay loams, clay loams)", 1], ["Medium (silts, silt loams, loams, sandy clays)", 2], ["Coarse (sandy clay loams, sandy loams, loamy fine sand, fine sand)", 3]];
  const col = (id, c) => T[id].rows.map(r => [r[0], r[c]]);
  const IF = (cr, tex) => M.interp(col("10.3", tex), cr);
  const RR = (cr, tex) => M.interp(col("10.4", tex), cr);
  const NF = (ratio, tex) => M.interp(col("10.2", tex), ratio);
  const sysOpts = [["No runoff recovery", 0], ["Closed runoff recovery (back to same field)", 1], ["Open runoff recovery (to another field)", 2]];
  // Eq. 10.6 (closed) and 10.7 (open); with no recovery the return ratio is zero
  const elq = (de, dg, Rr, Rt, sys) => sys === 1 ? de / (dg - dg * Rr * Rt) * 100 : sys === 2 ? de * (1 + Rr * Rt) / dg * 100 : de / dg * 100;
  const C = (s) => { s.ch = 10; s.file = "ch10"; return calc(s); };

  C({
    id: "eq-10.1", eq: ["10.1"], sec: "10.3", page: 190, title: "Volume balance for surface irrigation",
    tags: ["volume balance", "runoff volume", "gross application volume", "where did my water go"],
    inputs: [
      { k: "Vg", sym: "V<sub>g</sub>", label: "Gross application volume", dim: "volume", u: "ac-in", v: 10 },
      { k: "Vz", sym: "V<sub>z</sub>", label: "Infiltration volume", dim: "volume", u: "ac-in", v: 8.3 },
      { k: "Vs", sym: "V<sub>s</sub>", label: "Surface storage volume (0 once recession is complete)", dim: "volume", u: "ac-in", v: 0 }],
    outputs: [{ k: "Vr", sym: "V<sub>r</sub>", label: "Runoff volume", dim: "volume", u: "ac-in", dp: 2 }],
    f: v => ({ Vr: v.Vg - v.Vz - v.Vs }),
  });

  C({
    id: "eq-10.2", eq: ["10.2"], sec: "10.3", page: 190, title: "Depth balance: runoff depth",
    tags: ["runoff depth", "depth balance", "how much ran off"],
    inputs: [
      { k: "dg", sym: "d<sub>g</sub>", label: "Average gross application depth", dim: "length", u: "in", v: 4.2 },
      { k: "dz", sym: "d<sub>z</sub>", label: "Average infiltration depth (at about 60% of field length for open-ended furrows)", dim: "length", u: "in", v: 3.5 },
      { k: "ds", sym: "d<sub>s</sub>", label: "Surface storage depth (0 once recession is complete)", dim: "length", u: "in", v: 0 }],
    outputs: [
      { k: "dr", sym: "d<sub>r</sub>", label: "Runoff depth", dim: "length", u: "in", dp: 2 },
      { k: "pr", sym: "", label: "Percent runoff", dim: "pct", u: "%", dp: 0 }],
    f: v => { const dr = v.dg - v.dz - v.ds; return { dr, pr: dr / v.dg * 100 }; },
    examples: [{ ref: "Example 10.1", page: 192, in: { dg: 4.2, dz: 3.5, ds: 0 }, out: { dr: 0.7, pr: 17 } }],
    figs: ["10.11"],
  });

  C({
    id: "eq-10.3", eq: ["10.3"], sec: "10.3", page: 190, title: "Gross application depth for one furrow",
    tags: ["gross depth furrow", "how much water did I put on", "furrow stream", "inches applied furrow"],
    inputs: [
      { k: "qs", sym: "q<sub>s</sub>", label: "Furrow stream size", dim: "flow", u: "gpm", v: 10.86 },
      { k: "tco", sym: "t<sub>co</sub>", label: "Cutoff time (set time)", dim: "time", u: "hr", v: 12 },
      { k: "W", sym: "W", label: "Spacing of watered furrows (twice the row spacing for every other furrow)", dim: "length", u: "in", v: 30 },
      { k: "L", sym: "L", label: "Length of furrow", dim: "length", u: "ft", v: 1200 }],
    outputs: [{ k: "dg", sym: "d<sub>g</sub>", label: "Average gross application depth", dim: "length", u: "in", dp: 2 }],
    f: v => ({ dg: 1155 * v.qs * v.tco / (v.W * v.L) }),
    // stream size 760 gpm / 70 furrows from Example 10.1
    examples: [{ ref: "Example 10.1 (760 gpm / 70 furrows)", page: 192, in: { qs: 760 / 70, tco: 12, W: 30, L: 1200 }, out: { dg: 4.2 } }],
  });

  C({
    id: "eq-10.4", eq: ["10.4"], sec: "10.3", page: 190, title: "Gross application depth for a furrow set",
    tags: ["gross depth set", "furrows per set", "gated pipe", "how many inches did the set get"],
    inputs: [
      { k: "Qt", sym: "Q<sub>t</sub>", label: "Total inflow rate to the field (supply plus reused water)", dim: "flow", u: "gpm", v: 760 },
      { k: "tco", sym: "t<sub>co</sub>", label: "Cutoff time (set time)", dim: "time", u: "hr", v: 12 },
      { k: "N", sym: "N", label: "Number of furrows watered per set", dim: "count", u: "#", v: 70 },
      { k: "W", sym: "W", label: "Spacing of watered furrows", dim: "length", u: "in", v: 30 },
      { k: "L", sym: "L", label: "Length of furrow", dim: "length", u: "ft", v: 1200 }],
    outputs: [{ k: "dg", sym: "d<sub>g</sub>", label: "Average gross application depth", dim: "length", u: "in", dp: 2 }],
    f: v => ({ dg: 1155 * v.Qt * v.tco / (v.N * v.W * v.L) }),
    note: "In Example 10.5 the book prints 5.0 in for N = 26 and a 6 hr set; the equation gives 5.6 in.",
    examples: [
      { ref: "Example 10.1", page: 192, in: { Qt: 760, tco: 12, N: 70, W: 30, L: 1200 }, out: { dg: 4.2 } },
      { ref: "Example 10.4", page: 198, in: { Qt: 760, tco: 12, N: 44, W: 30, L: 1200 }, out: { dg: 6.65 } }],
  });

  C({
    id: "eq-10.5", eq: ["10.5"], sec: "10.3", page: 191, title: "Gross application depth for a basin or border",
    tags: ["basin", "border", "bay", "gross depth basin", "level basin"],
    inputs: [
      { k: "Qt", sym: "Q<sub>t</sub>", label: "Inflow rate", dim: "flow", u: "gpm", v: 1000 },
      { k: "tco", sym: "t<sub>co</sub>", label: "Cutoff time", dim: "time", u: "hr", v: 4 },
      { k: "Wb", sym: "W<sub>b</sub>", label: "Width of border or basin", dim: "length", u: "ft", v: 60 },
      { k: "Lb", sym: "L<sub>b</sub>", label: "Length of border or basin", dim: "length", u: "ft", v: 600 }],
    outputs: [{ k: "dg", sym: "d<sub>g</sub>", label: "Average gross application depth", dim: "length", u: "in", dp: 2 }],
    f: v => ({ dg: 96.3 * v.Qt * v.tco / (v.Wb * v.Lb) }),
  });

  C({
    id: "eq-10.6-10.7", eq: ["10.6", "10.7"], sec: "10.4", page: 191, title: "Application efficiency of the low quarter with runoff recovery",
    tags: ["ELQ", "efficiency", "runoff recovery", "tailwater", "reuse pit", "closed system", "open system", "how efficient is my furrow irrigation"],
    inputs: [
      { k: "dLQ", sym: "d<sub>LQ</sub>", label: "Average depth infiltrated in the low quarter", dim: "length", u: "in", v: 2.8 },
      { k: "SWD", sym: "SWD", label: "Soil water deficit before irrigation", dim: "length", u: "in", v: 3.4 },
      { k: "dg", sym: "d<sub>g</sub>", label: "Gross application depth", dim: "length", u: "in", v: 4.2 },
      { k: "sys", label: "Runoff recovery", type: "sel", opts: sysOpts, v: 1 },
      { k: "Rr", sym: "R<sub>r</sub>", label: "Runoff ratio (Eq. 10.8 or Table 10.4)", dim: "frac", u: "decimal", v: 0.17 },
      { k: "Rt", sym: "R<sub>t</sub>", label: "Return ratio (volume reapplied / runoff volume)", dim: "frac", u: "decimal", v: 0.85 }],
    outputs: [
      { k: "de", sym: "d<sub>e</sub>", label: "Effective depth stored", dim: "length", u: "in", dp: 2 },
      { k: "E", sym: "E<sub>LQ</sub>", label: "Application efficiency of the low quarter", dim: "pct", u: "%", dp: 0 }],
    f: v => { const de = Math.min(v.dLQ, v.SWD); return { de, E: elq(de, v.dg, v.Rr, v.Rt, v.sys) }; },
    tables: ["10.4"],
    examples: [
      { ref: "Example 10.1 (no recovery)", page: 192, in: { dLQ: 2.8, SWD: 3.4, dg: 4.2, sys: 0, Rr: 0.17, Rt: 0.85 }, out: { de: 2.8, E: 67 } },
      { ref: "Example 10.2", page: 192, in: { dLQ: 2.8, SWD: 3.4, dg: 4.2, sys: 1, Rr: 0.17, Rt: 0.85 }, out: { E: 78 } },
      { ref: "Example 10.3", page: 192, in: { dLQ: 2.8, SWD: 3.4, dg: 4.2, sys: 2, Rr: 0.17, Rt: 0.85 }, out: { E: 76 } },
      { ref: "Example 10.4", page: 198, in: { dLQ: 4.1, SWD: 3.4, dg: 6.65, sys: 1, Rr: 0.32, Rt: 0.85 }, out: { de: 3.4, E: 70 } },
      { ref: "Example 10.5", page: 198, in: { dLQ: 3.1, SWD: 3.4, dg: 5.0, sys: 1, Rr: 0.32, Rt: 0.85 }, out: { de: 3.1, E: 85 } }],
  });

  C({
    id: "eq-10.8", eq: ["10.8"], sec: "10.4", page: 192, title: "Runoff ratio",
    tags: ["runoff ratio", "Rr", "percent runoff", "tailwater fraction"],
    inputs: [
      { k: "dr", sym: "d<sub>r</sub>", label: "Runoff depth", dim: "length", u: "in", v: 0.7 },
      { k: "dg", sym: "d<sub>g</sub>", label: "Gross application depth", dim: "length", u: "in", v: 4.2 }],
    outputs: [{ k: "Rr", sym: "R<sub>r</sub>", label: "Runoff ratio", dim: "frac", u: "decimal", dp: 3 }],
    f: v => ({ Rr: v.dr / v.dg }),
    examples: [{ ref: "Example 10.2", page: 192, in: { dr: 0.7, dg: 4.2 }, out: { Rr: 0.17 } }],
  });

  C({
    id: "eq-10.9", eq: ["10.9"], sec: "10.5", page: 194, title: "Furrow stream size from total inflow",
    tags: ["stream size", "gpm per furrow", "how many furrows to open", "furrows per set"],
    inputs: [
      { k: "Qt", sym: "Q<sub>t</sub>", label: "Total inflow rate to the field", dim: "flow", u: "gpm", v: 760 },
      { k: "N", sym: "N", label: "Number of furrows irrigated per set", dim: "count", u: "#", v: 26 }],
    outputs: [{ k: "qs", sym: "q<sub>s</sub>", label: "Furrow stream size", dim: "flow", u: "gpm", dp: 1 }],
    f: v => ({ qs: v.Qt / v.N }),
    examples: [
      { ref: "Example 10.5", page: 198, in: { Qt: 760, N: 26 }, out: { qs: 29 } },
      { ref: "Section 10.5 text", page: 197, in: { Qt: 760, N: 44 }, out: { qs: 17 } }],
  });

  C({
    id: "eq-10.10", eq: ["10.10"], sec: "10.5", page: 194, title: "Maximum nonerosive furrow stream size",
    tags: ["erosion", "max stream", "nonerosive", "furrow slope", "is my stream too big"],
    inputs: [{ k: "S", sym: "S", label: "Field slope", dim: "pct", u: "%", v: 0.4 }],
    outputs: [{ k: "qmax", sym: "q<sub>max</sub>", label: "Maximum nonerosive stream size", dim: "flow", u: "gpm", dp: 1 }],
    f: v => ({ qmax: 10 / v.S }),
    examples: [{ ref: "Section 10.5 text", page: 194, in: { S: 0.4 }, out: { qmax: 25 } },
               { ref: "Example 10.5", page: 198, in: { S: 0.3 }, out: { qmax: 33 } }],
  });

  C({
    id: "eq-10.11", eq: ["10.11"], sec: "10.5", page: 195, title: "Cutoff ratio",
    tags: ["cutoff ratio", "advance time", "set time", "when should water reach the end", "CR"],
    inputs: [
      { k: "tL", sym: "t<sub>L</sub>", label: "Advance time to the end of the field", dim: "time", u: "hr", v: 9 },
      { k: "tco", sym: "t<sub>co</sub>", label: "Cutoff time (set time)", dim: "time", u: "hr", v: 12 }],
    outputs: [{ k: "CR", sym: "CR", label: "Cutoff ratio", dim: "none", dp: 2 }],
    f: v => ({ CR: v.tL / v.tco }),
    examples: [{ ref: "Section 10.5 text (Example 10.1 field)", page: 197, in: { tL: 9, tco: 12 }, out: { CR: 0.75 } },
               { ref: "Example 10.5", page: 198, in: { tL: 2.4, tco: 6 }, out: { CR: 0.4 } }],
    figs: ["10.13"],
  });

  C({
    id: "eq-10.12", eq: ["10.12"], sec: "10.5", page: 197, title: "Low quarter depth from infiltration factor",
    tags: ["infiltration factor", "dLQ", "low quarter depth", "depth of low quarter"],
    inputs: [
      { k: "dg", sym: "d<sub>g</sub>", label: "Gross application depth", dim: "length", u: "in", v: 4.2 },
      { k: "tex", label: "Soil texture", type: "sel", opts: texOpts, v: 2 },
      { k: "CR", sym: "CR", label: "Cutoff ratio (0.1 to 0.9)", dim: "none", v: 0.75 }],
    outputs: [
      { k: "IF", sym: "d<sub>LQ</sub>/d<sub>g</sub>", label: "Infiltration factor (Table 10.3, interpolated)", dim: "none", dp: 3 },
      { k: "dLQ", sym: "d<sub>LQ</sub>", label: "Depth infiltrated in the low quarter", dim: "length", u: "in", dp: 2 }],
    f: v => { const f = IF(v.CR, v.tex); return { IF: f, dLQ: f * v.dg }; },
    tables: ["10.3"],
    examples: [
      { ref: "Section 10.5 text", page: 197, in: { dg: 4.2, tex: 2, CR: 0.75 }, out: { dLQ: 2.9 } },
      { ref: "Example 10.4", page: 198, in: { dg: 6.65, tex: 2, CR: 0.4 }, out: { IF: 0.62, dLQ: 4.1 } }],
  });

  C({
    id: "eq-10.13-10.14", eq: ["10.13", "10.14"], sec: "10.7", page: 202, title: "Runoff recovery reservoir volume and pump capacity",
    tags: ["tailwater pit", "reuse pit size", "return pump", "runoff recovery reservoir", "how big a pit do I need"],
    inputs: [
      { k: "Rr", sym: "R<sub>r</sub>", label: "Runoff ratio (use a high value, 0.30 to 0.40)", dim: "frac", u: "decimal", v: 0.30 },
      { k: "tco", sym: "t<sub>co</sub>", label: "Cutoff time (set time)", dim: "time", u: "min", v: 360 },
      { k: "Qw", sym: "Q<sub>w</sub>", label: "Inflow to the field from the original source", dim: "flow", u: "gpm", v: 500 },
      { k: "F", sym: "F", label: "Design factor", type: "sel", opts: [["F = 1, runoff returned to the field of origin", 1], ["F = 0, runoff delivered to another field", 0]], v: 1 }],
    outputs: [
      { k: "Vr", sym: "V<sub>r</sub>", label: "Runoff volume from one set (active reservoir volume)", dim: "volume", u: "gal", dp: 0 },
      { k: "Qr", sym: "Q<sub>r</sub>", label: "Capacity of the runoff recovery pump", dim: "flow", u: "gpm", dp: 0 }],
    f: v => { const Vr = v.Rr * v.tco * v.Qw / (1 - v.Rr * v.F); return { Vr, Qr: Vr / v.tco }; },
    note: "For a continuous pump. An intermittent system storing runoff from n sets needs n times the volume and pump capacity.",
    examples: [{ ref: "Example 10.6", page: 202, in: { Rr: 0.30, tco: 360, Qw: 500, F: 1 }, out: { Vr: 77143, Qr: 214 } }],
    figs: ["10.12", "10.18"],
  });

  // ---------- table lookups ----------
  C({
    id: "tab-10.1", eq: [], sec: "10.2", page: 189, title: "Example advance, recession and infiltration data (Table 10.1)",
    tags: ["advance curve", "recession curve", "opportunity time", "infiltration profile"],
    tables: ["10.1"], figs: ["10.7", "10.9", "10.10", "10.11"],
    inputs: [{ k: "x", sym: "x", label: "Distance from the inlet (0 to 1200 ft)", dim: "length", u: "ft", v: 720 }],
    outputs: [
      { k: "ta", label: "Advance time", dim: "time", u: "hr", dp: 1 },
      { k: "tr", label: "Recession time", dim: "time", u: "hr", dp: 1 },
      { k: "to", label: "Opportunity time", dim: "time", u: "hr", dp: 1 },
      { k: "z", label: "Infiltration", dim: "length", u: "in", dp: 2 }],
    f: v => ({ ta: M.interp(col("10.1", 1), v.x), tr: M.interp(col("10.1", 2), v.x), to: M.interp(col("10.1", 3), v.x), z: M.interp(col("10.1", 4), v.x) }),
  });

  C({
    id: "tab-10.2", eq: [], sec: "10.5", page: 197, title: "How many furrows to water per set (Table 10.2)",
    tags: ["furrows per set", "speed up advance", "correction factor", "N2/N1", "change number of furrows"],
    tables: ["10.2"],
    inputs: [
      { k: "tL2", sym: "T<sub>L2</sub>", label: "Desired advance time", dim: "time", u: "hr", v: 4.8 },
      { k: "tL1", sym: "T<sub>L1</sub>", label: "Original (measured) advance time", dim: "time", u: "hr", v: 9 },
      { k: "tex", label: "Soil texture", type: "sel", opts: texOpts, v: 2 },
      { k: "N1", sym: "N<sub>1</sub>", label: "Original number of furrows per set", dim: "count", u: "#", v: 70 }],
    outputs: [
      { k: "ratio", sym: "T<sub>L2</sub>/T<sub>L1</sub>", label: "Advance time ratio", dim: "none", dp: 2 },
      { k: "fac", sym: "N<sub>2</sub>/N<sub>1</sub>", label: "Correction factor (interpolated)", dim: "none", dp: 2 },
      { k: "N2", sym: "N<sub>2</sub>", label: "Correct number of furrows per set", dim: "count", u: "#", dp: 0 }],
    f: v => { const ratio = v.tL2 / v.tL1, fac = NF(ratio, v.tex); return { ratio, fac, N2: fac * v.N1 }; },
    examples: [
      { ref: "Section 10.5 text", page: 197, in: { tL2: 4.8, tL1: 9, tex: 2, N1: 70 }, out: { fac: 0.63, N2: 44 } },
      { ref: "Example 10.5", page: 198, in: { tL2: 2.4, tL1: 4.8, tex: 2, N1: 44 }, out: { fac: 0.6, N2: 26.4 } }],
  });

  C({
    id: "tab-10.3-10.4", eq: [], sec: "10.5", page: 197, title: "Infiltration factor and runoff ratio by cutoff ratio (Tables 10.3 and 10.4)",
    tags: ["infiltration factor", "runoff ratio", "cutoff ratio table", "Rr table"],
    tables: ["10.3", "10.4"],
    inputs: [
      { k: "CR", sym: "CR", label: "Cutoff ratio (0.1 to 0.9)", dim: "none", v: 0.4 },
      { k: "tex", label: "Soil texture", type: "sel", opts: texOpts, v: 2 }],
    outputs: [
      { k: "IF", sym: "d<sub>LQ</sub>/d<sub>g</sub>", label: "Infiltration factor", dim: "none", dp: 2 },
      { k: "Rr", sym: "R<sub>r</sub>", label: "Runoff ratio", dim: "frac", u: "decimal", dp: 2 }],
    f: v => ({ IF: IF(v.CR, v.tex), Rr: RR(v.CR, v.tex) }),
    examples: [{ ref: "Example 10.4", page: 198, in: { CR: 0.4, tex: 2 }, out: { IF: 0.62, Rr: 0.32 } }],
  });

  C({
    id: "tab-10.5", eq: [], sec: "10.5", page: 199, title: "Recommended cutoff ratio and target advance time (Table 10.5)",
    tags: ["recommended cutoff ratio", "target advance time", "when should water reach the end", "blocked ends", "diked ends"],
    tables: ["10.5"], figs: ["10.14", "10.15", "10.16", "10.17"],
    inputs: [
      { k: "sys", label: "Type of system", type: "sel", opts: T["10.5"].rows.map((r, i) => [r[0], i]), v: 1 },
      { k: "tex", label: "Soil texture", type: "sel", opts: texOpts, v: 2 },
      { k: "tco", sym: "t<sub>co</sub>", label: "Set time", dim: "time", u: "hr", v: 12 }],
    outputs: [
      { k: "CR", sym: "CR", label: "Recommended cutoff ratio", dim: "none", dp: 2 },
      { k: "tL", sym: "t<sub>L</sub>", label: "Target advance time to the end of the field", dim: "time", u: "hr", dp: 1 }],
    f: v => { const CR = T["10.5"].rows[v.sys][v.tex]; return { CR, tL: CR * v.tco }; },
    examples: [{ ref: "Section 10.5 text", page: 196, in: { sys: 1, tex: 2, tco: 12 }, out: { CR: 0.4, tL: 4.8 } },
               { ref: "Section 10.5 text", page: 197, in: { sys: 0, tex: 2, tco: 12 }, out: { CR: 0.7, tL: 8.4 } }],
  });

  C({
    id: "tab-10.6", eq: [], sec: "10.5", page: 199, title: "Furrow management recommendations by soil (Table 10.6)",
    tags: ["first time furrow irrigation", "recommended stream size", "max furrow length", "basic infiltration rate"],
    tables: ["10.6"],
    inputs: [
      { k: "soil", label: "Soil texture", type: "sel", opts: T["10.6"].rows.map((r, i) => [r[0], i]), v: 3 },
      { k: "L", sym: "L", label: "Furrow length", dim: "length", u: "ft", v: 1000 },
      { k: "S", sym: "S", label: "Field slope (for the nonerosive limit, Eq. 10.10)", dim: "pct", u: "%", v: 0.3 }],
    outputs: [
      { k: "ibr", label: "Basic infiltration rate (in/hr)", text: true },
      { k: "ib", label: "Basic infiltration rate per 100 ft", dim: "none", dp: 1 },
      { k: "Lmax", label: "Maximum furrow length", dim: "length", u: "ft", dp: 0 },
      { k: "qs", sym: "q<sub>s</sub>", label: "Recommended stream size for this length", dim: "flow", u: "gpm", dp: 1 },
      { k: "qmax", sym: "q<sub>max</sub>", label: "Maximum nonerosive stream size", dim: "flow", u: "gpm", dp: 1 },
      { k: "msg", label: "Check", text: true }],
    f: v => {
      const r = T["10.6"].rows[v.soil], qs = r[4] * v.L / 100, qmax = 10 / v.S;
      const m = [];
      if (v.L > r[3]) m.push("Furrow is longer than the recommended maximum");
      if (qs > qmax) m.push("recommended stream exceeds the nonerosive limit, shorten the furrow");
      return { ibr: r[1], ib: r[2], Lmax: r[3], qs, qmax, msg: m.length ? m.join("; ") + "." : "Within the recommendations." };
    },
  });

  C({
    id: "tab-10.7", eq: [], sec: "10.8", page: 204, title: "Surge irrigation cycle schedule (Table 10.7)",
    tags: ["surge valve", "surge cycle times", "on time", "cutback", "surge schedule"],
    tables: ["10.7"], figs: ["10.19", "10.20"],
    note: "Follows Example 10.7: Cycle 1 on time is the time to advance one fraction of the field; later advance cycles use the Table 10.7 factors; the rest of each side's time is split into equal cutback cycles no longer than the upper cutback factor.",
    inputs: [
      { k: "t1", sym: "t<sub>1</sub>", label: "Cycle 1 on time (time to advance 1/4 or 1/6 of the field)", dim: "time", u: "min", v: 30 },
      { k: "nc", label: "Cycles during advance", type: "sel", opts: [["Four cycles", 4], ["Six cycles", 6]], v: 4 },
      { k: "ret", sym: "", label: "Return interval to the field (both sides of the valve)", dim: "time", u: "min", v: 720 }],
    outputs: [
      { k: "sched", label: "On time per cycle, each side (min)", text: true },
      { k: "adv", label: "Cumulative time at end of advance (both sides)", dim: "time", u: "min", dp: 0 },
      { k: "ncb", label: "Number of cutback cycles", dim: "count", u: "#", dp: 0 },
      { k: "tcb", label: "Cutback on time per cycle", dim: "time", u: "min", dp: 0 },
      { k: "msg", label: "Check", text: true }],
    f: v => {
      const four = v.nc === 4;
      const rows = T["10.7"].rows.slice(0, 6).filter(r => (four ? r[2] : r[4]) !== null);
      const on = rows.map(r => v.t1 * (four ? r[2] : r[4]));
      const adv = 2 * M.sum(on);
      const fmin = four ? 0.8 : 1.5, fmax = four ? 1.6 : 3.0;
      const rem = v.ret - adv;
      let ncb = 0, tcb = 0, msg = "";
      if (rem <= 0) msg = "Advance cycles use the whole return interval; add time or reduce cycles.";
      else {
        ncb = Math.ceil(rem / (2 * v.t1 * fmax) - 1e-9);
        tcb = rem / (2 * ncb);
        msg = tcb < v.t1 * fmin ? "Cutback on time is below the Table 10.7 minimum factor." : "Cutback factor " + (tcb / v.t1).toFixed(2) + " is within Table 10.7.";
      }
      const sched = on.map((t, i) => "C" + (i + 1) + ": " + t.toFixed(0)).concat(Array.from({ length: ncb }, (_, i) => "C" + (on.length + i + 1) + ": " + tcb.toFixed(0))).join(", ");
      return { sched, adv, ncb, tcb, msg };
    },
    examples: [{ ref: "Example 10.7", page: 205, in: { t1: 30, nc: 4, ret: 720 }, out: { adv: 492, ncb: 3, tcb: 38 } }],
  });

  // ELQ vs cutoff ratio curves (Figures 10.13 to 10.16) rebuilt from Tables 10.3 and 10.4 with Eqs. 10.6 and 10.7
  C({
    id: "fig-10.14-10.16", eq: [], sec: "10.5", page: 195, title: "Efficiency vs cutoff ratio for sloping furrows",
    tags: ["ELQ vs cutoff ratio", "best cutoff ratio", "efficiency curve", "maximum efficiency"],
    tables: ["10.3", "10.4"], figs: ["10.13", "10.14", "10.15", "10.16"],
    note: "Valid when dLQ is not more than SWD (then de = dLQ and ELQ depends only on the infiltration factor and runoff ratio). Matches the curves in Figures 10.14 to 10.16 with Rt = 0.85.",
    inputs: [
      { k: "CR", sym: "CR", label: "Cutoff ratio (0.1 to 0.9)", dim: "none", v: 0.4 },
      { k: "tex", label: "Soil texture", type: "sel", opts: texOpts, v: 2 },
      { k: "sys", label: "Runoff recovery", type: "sel", opts: sysOpts, v: 1 },
      { k: "Rt", sym: "R<sub>t</sub>", label: "Return ratio of the recovery system", dim: "frac", u: "decimal", v: 0.85 }],
    outputs: [
      { k: "E", sym: "E<sub>LQ</sub>", label: "Application efficiency of the low quarter", dim: "pct", u: "%", dp: 0 },
      { k: "CRbest", label: "Cutoff ratio giving the highest ELQ", dim: "none", dp: 2 },
      { k: "Ebest", label: "Highest ELQ", dim: "pct", u: "%", dp: 0 }],
    f: v => {
      const e = cr => elq(IF(cr, v.tex), 1, RR(cr, v.tex), v.Rt, v.sys);
      let CRbest = 0.1, Ebest = -1;
      for (let cr = 0.1; cr <= 0.9001; cr += 0.01) { const x = e(cr); if (x > Ebest) { Ebest = x; CRbest = cr; } }
      return { E: e(v.CR), CRbest, Ebest };
    },
    examples: [{ ref: "Section 10.5 text (Figure 10.15, closed recovery)", page: 196, in: { CR: 0.4, tex: 2, sys: 1, Rt: 0.85 }, out: { E: 85 } },
               { ref: "Figure 10.15, no recovery", page: 196, in: { CR: 0.7, tex: 2, sys: 0 }, out: { E: 70 } }],
  });

  // ---------- furrow set design procedure (Section 10.5, Examples 10.1 to 10.5) ----------
  C({
    id: "proc-furrow-set", eq: ["10.4", "10.6", "10.7", "10.9", "10.10", "10.11", "10.12"], sec: "10.5", page: 197,
    title: "Furrow set design (reactive management)",
    tags: ["furrow set design", "how many furrows per set", "set time", "adjust advance", "improve furrow efficiency", "procedure"],
    tables: ["10.2", "10.3", "10.4", "10.5"], figs: ["10.14", "10.15", "10.16"],
    note: "Uses the measured advance time for the current number of furrows, picks a target cutoff ratio (Table 10.5 unless you enter one), finds the new number of furrows (Table 10.2), checks the stream size, then computes dg, dLQ, de and ELQ (Tables 10.3 and 10.4, Eqs. 10.6 and 10.7).",
    inputs: [
      { k: "Qt", sym: "Q<sub>t</sub>", label: "Total inflow to the field", dim: "flow", u: "gpm", v: 760 },
      { k: "W", sym: "W", label: "Spacing of watered furrows", dim: "length", u: "in", v: 30 },
      { k: "L", sym: "L", label: "Furrow length", dim: "length", u: "ft", v: 1200 },
      { k: "S", sym: "S", label: "Field slope", dim: "pct", u: "%", v: 0.3 },
      { k: "tex", label: "Soil texture", type: "sel", opts: texOpts, v: 2 },
      { k: "sys", label: "Runoff recovery", type: "sel", opts: sysOpts, v: 1 },
      { k: "Rt", sym: "R<sub>t</sub>", label: "Return ratio of the recovery system", dim: "frac", u: "decimal", v: 0.85 },
      { k: "SWD", sym: "SWD", label: "Soil water deficit at irrigation", dim: "length", u: "in", v: 3.4 },
      { k: "N1", sym: "N<sub>1</sub>", label: "Furrows per set in the trial set", dim: "count", u: "#", v: 70 },
      { k: "tL1", sym: "t<sub>L1</sub>", label: "Measured advance time in the trial set", dim: "time", u: "hr", v: 9 },
      { k: "tco", sym: "t<sub>co</sub>", label: "Set time you can work with", dim: "time", u: "hr", v: 12 },
      { k: "CRu", sym: "CR", label: "Target cutoff ratio (enter 0 to use Table 10.5)", dim: "none", v: 0 }],
    outputs: [
      { k: "CR", sym: "CR", label: "Target cutoff ratio", dim: "none", dp: 2 },
      { k: "tL2", sym: "t<sub>L2</sub>", label: "Target advance time", dim: "time", u: "hr", dp: 1 },
      { k: "N", sym: "N<sub>2</sub>", label: "Furrows to water per set", dim: "count", u: "#", dp: 0 },
      { k: "qs", sym: "q<sub>s</sub>", label: "Furrow stream size", dim: "flow", u: "gpm", dp: 1 },
      { k: "qmax", sym: "q<sub>max</sub>", label: "Maximum nonerosive stream size", dim: "flow", u: "gpm", dp: 1 },
      { k: "dg", sym: "d<sub>g</sub>", label: "Gross application depth", dim: "length", u: "in", dp: 2 },
      { k: "dLQ", sym: "d<sub>LQ</sub>", label: "Low quarter depth", dim: "length", u: "in", dp: 2 },
      { k: "de", sym: "d<sub>e</sub>", label: "Effective depth stored", dim: "length", u: "in", dp: 2 },
      { k: "Rr", sym: "R<sub>r</sub>", label: "Runoff ratio", dim: "frac", u: "decimal", dp: 2 },
      { k: "E", sym: "E<sub>LQ</sub>", label: "Application efficiency of the low quarter", dim: "pct", u: "%", dp: 0 },
      { k: "msg", label: "Check", text: true }],
    f: v => {
      const CR = v.CRu > 0 ? v.CRu : T["10.5"].rows[v.sys][v.tex];
      const tL2 = CR * v.tco;
      const N = Math.max(1, Math.round(NF(tL2 / v.tL1, v.tex) * v.N1));
      const qs = v.Qt / N, qmax = 10 / v.S;
      const dg = 1155 * v.Qt * v.tco / (N * v.W * v.L);
      const dLQ = IF(CR, v.tex) * dg, de = Math.min(dLQ, v.SWD), Rr = RR(CR, v.tex);
      const E = elq(de, dg, Rr, v.Rt, v.sys);
      const m = [];
      if (qs > qmax) m.push("Stream size exceeds the nonerosive limit; use more furrows or a shorter furrow");
      if (dLQ > v.SWD) m.push("dLQ exceeds SWD; irrigate less often (up to AD), shorten the set, or water every other furrow");
      return { CR, tL2, N, qs, qmax, dg, dLQ, de, Rr, E, msg: m.length ? m.join(". ") + "." : "Stream size and depth are acceptable." };
    },
    examples: [
      { ref: "Section 10.5 text and Example 10.4", page: 198, in: { N1: 70, tL1: 9, tco: 12, CRu: 0 },
        out: { CR: 0.4, tL2: 4.8, N: 44, qs: 17.3, dg: 6.65, dLQ: 4.1, de: 3.4, Rr: 0.32, E: 70 } },
      // the book prints dg = 5.0 in for this case; Eq. 10.4 gives 5.6 in, so only N and qs are checked
      { ref: "Example 10.5", page: 198, in: { N1: 44, tL1: 4.8, tco: 6, CRu: 0.4 }, out: { tL2: 2.4, N: 26, qs: 29 } }],
  });
})(typeof window !== "undefined" ? window : globalThis);
