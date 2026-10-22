/* Chapter 8  Pump and Pipeline Hydraulics  (Equations 8.1 to 8.22, Tables 8.1 to 8.6) */
(function (G) {
  const T = G.TAB = G.TAB || {};
  const M = G.M;
  const _ = null;

  // Table 8.1. C values for representative types of pipes (p. 152)
  T["8.1"] = {
    title: "C values for representative types of pipes",
    cols: ["Material", "C"],
    rows: [["Aluminum pipe with couplers", 120], ["Aluminum pipe with gates", 110], ["Cement asbestos pipe", 140],
      ["Galvanized steel pipe", 140], ["Standard steel pipe", 100], ["PVC", 150], ["PVC pipe with gates", 130]],
  };
  const cOpts = T["8.1"].rows.map(r => [r[0] + " (C = " + r[1] + ")", r[1]]);

  // Table 8.2a. Pressure loss due to friction for smaller diameter pipes, psi/100 ft (p. 153)
  T["8.2a"] = {
    title: "Pressure loss due to friction for smaller diameter pipes (Hazen-Williams), psi/100 ft",
    cols: ["Q (gpm)", "Al sprinkler 2 in (1.900)", "Al sprinkler 3 in (2.900)", "Al sprinkler 4 in (3.900)", "Al sprinkler 6 in (5.884)",
      "PVC IPS 2 in (2.193)", "PVC IPS 2½ in (2.655)", "PVC IPS 3 in (3.230)", "PVC IPS 4 in (4.150)", "PVC IPS 6 in (6.120)"],
    pipes: [["Aluminum sprinkler pipe 2 in", 1.900, 120], ["Aluminum sprinkler pipe 3 in", 2.900, 120], ["Aluminum sprinkler pipe 4 in", 3.900, 120],
      ["Aluminum sprinkler pipe 6 in", 5.884, 120], ["PVC IPS Class 160, 2 in", 2.193, 150], ["PVC IPS Class 160, 2½ in", 2.655, 150],
      ["PVC IPS Class 160, 3 in", 3.230, 150], ["PVC IPS Class 160, 4 in", 4.150, 150], ["PVC IPS Class 160, 6 in", 6.120, 150]],
    rows: [
      [2, 0.01, _, _, _, _, _, _, _, _], [4, 0.04, _, _, _, 0.01, _, _, _, _], [6, 0.08, _, _, _, 0.03, _, _, _, _],
      [8, 0.13, _, _, _, 0.04, _, _, _, _], [10, 0.20, 0.03, _, _, 0.07, 0.03, _, _, _],
      [15, 0.43, 0.05, _, _, 0.14, 0.06, _, _, _], [20, 0.73, 0.09, _, _, 0.24, 0.09, 0.04, _, _],
      [25, 1.10, 0.14, _, _, 0.36, 0.14, 0.06, _, _], [30, 1.54, 0.20, _, _, 0.51, 0.20, 0.08, _, _],
      [35, 2.05, 0.26, _, _, 0.68, 0.27, 0.10, _, _], [40, 2.63, 0.34, _, _, 0.87, 0.34, 0.13, _, _],
      [45, 3.27, 0.42, _, _, 1.08, 0.42, 0.16, _, _], [50, 3.97, 0.51, 0.12, _, 1.31, 0.52, 0.20, 0.06, _],
      [55, 4.74, 0.61, 0.14, _, 1.56, 0.62, 0.24, 0.07, _], [60, 5.57, 0.71, 0.17, _, 1.83, 0.72, 0.28, 0.08, _],
      [65, 6.46, 0.83, 0.20, _, 2.13, 0.84, 0.32, 0.10, _], [70, 7.41, 0.95, 0.22, _, 2.44, 0.96, 0.37, 0.11, _],
      [75, 8.42, 1.08, 0.25, _, 2.77, 1.09, 0.42, 0.12, _], [80, 9.49, 1.21, 0.29, _, 3.12, 1.23, 0.47, 0.14, _],
      [85, 10.61, 1.36, 0.32, _, 3.49, 1.38, 0.53, 0.16, 0.02], [90, 11.80, 1.51, 0.36, 0.05, 3.88, 1.53, 0.59, 0.17, 0.03],
      [100, 14.34, 1.83, 0.43, 0.06, 4.72, 1.86, 0.72, 0.21, 0.03], [110, 17.11, 2.19, 0.52, 0.07, 5.63, 2.22, 0.86, 0.25, 0.04],
      [120, 20.10, 2.57, 0.61, 0.08, 6.62, 2.61, 1.01, 0.30, 0.04], [140, 26.74, 3.42, 0.81, 0.11, 8.80, 3.47, 1.34, 0.40, 0.06],
      [150, _, 3.88, 0.92, 0.12, _, 3.95, 1.52, 0.45, 0.07], [160, _, 4.38, 1.03, 0.14, _, 4.45, 1.71, 0.51, 0.08],
      [170, _, 4.90, 1.16, 0.16, _, 4.98, 1.92, 0.57, 0.09], [180, _, 5.44, 1.29, 0.17, _, 5.53, 2.13, 0.63, 0.10],
      [190, _, 6.02, 1.42, 0.19, _, 6.11, 2.36, 0.70, 0.11], [200, _, 6.61, 1.56, 0.21, _, 6.72, 2.59, 0.76, 0.12],
      [220, _, _, 1.87, 0.25, _, _, 3.09, 0.91, 0.14], [240, _, _, 2.19, 0.30, _, _, 3.63, 1.07, 0.16],
      [260, _, _, 2.54, 0.34, _, _, 4.21, 1.24, 0.19], [280, _, _, 2.92, 0.39, _, _, 4.83, 1.43, 0.22],
      [300, _, _, 3.32, 0.45, _, _, 5.49, 1.62, 0.24], [320, _, _, 3.74, 0.51, _, _, 6.18, 1.83, 0.28],
      [340, _, _, 4.18, 0.57, _, _, _, 2.04, 0.31], [360, _, _, 4.65, 0.63, _, _, _, 2.27, 0.34],
      [380, _, _, 5.14, 0.69, _, _, _, 2.51, 0.38], [400, _, _, 5.65, 0.76, _, _, _, 2.76, 0.42],
      [420, _, _, 6.18, 0.84, _, _, _, 3.02, 0.46], [440, _, _, 6.74, 0.91, _, _, _, 3.29, 0.50],
      [460, _, _, _, 0.99, _, _, _, 3.58, 0.54], [480, _, _, _, 1.07, _, _, _, _, 0.58],
      [500, _, _, _, 1.15, _, _, _, _, 0.63], [550, _, _, _, 1.38, _, _, _, _, 0.75],
      [600, _, _, _, 1.62, _, _, _, _, 0.88], [650, _, _, _, 1.88, _, _, _, _, 1.03],
      [700, _, _, _, 2.15, _, _, _, _, 1.18], [750, _, _, _, 2.45, _, _, _, _, 1.34],
      [800, _, _, _, 2.76, _, _, _, _, 1.51]],
    notes: "Aluminum sprinkler pipe, 150 psi rating, C = 120. PVC IPS Class 160, C = 150. Inside diameters in parentheses. In the book, shaded bold cells are where velocity exceeds 5 ft/s.",
  };

  // Table 8.2b. Pressure loss due to friction for larger diameter pipes, psi/100 ft (p. 154)
  T["8.2b"] = {
    title: "Pressure loss due to friction for larger diameter pipes (Hazen-Williams), psi/100 ft",
    cols: ["Q (gpm)", "Al gated 6 in (5.898)", "Al gated 8 in (7.898)", "Al gated 10 in (9.898)",
      "PVC PIP 6 in (5.766)", "PVC PIP 8 in (7.658)", "PVC PIP 10 in (9.572)", "PVC PIP 12 in (11.486)"],
    pipes: [["Aluminum gated pipe 6 in", 5.898, 110], ["Aluminum gated pipe 8 in", 7.898, 110], ["Aluminum gated pipe 10 in", 9.898, 110],
      ["PVC PIP Class 125, 6 in", 5.766, 150], ["PVC PIP Class 125, 8 in", 7.658, 150], ["PVC PIP Class 125, 10 in", 9.572, 150],
      ["PVC PIP Class 125, 12 in", 11.486, 150]],
    rows: [
      [240, 0.34, _, _, _, _, _, _], [260, 0.40, _, _, 0.25, _, _, _], [280, 0.46, _, _, 0.29, _, _, _],
      [300, 0.52, _, _, 0.33, _, _, _], [320, 0.59, 0.14, _, 0.37, _, _, _], [340, 0.66, 0.16, _, 0.41, _, _, _],
      [360, 0.73, 0.18, _, 0.46, _, _, _], [380, 0.81, 0.19, _, 0.51, 0.13, _, _], [400, 0.89, 0.21, _, 0.56, 0.14, _, _],
      [420, 0.97, 0.23, _, 0.61, 0.15, 0.05, _], [440, 1.06, 0.26, 0.09, 0.66, 0.17, 0.06, _],
      [460, 1.15, 0.28, 0.09, 0.72, 0.18, 0.06, _], [480, 1.24, 0.30, 0.10, 0.78, 0.20, 0.07, _],
      [500, 1.34, 0.32, 0.11, 0.84, 0.21, 0.07, _], [550, 1.60, 0.39, 0.13, 1.01, 0.25, 0.09, _],
      [600, 1.88, 0.45, 0.15, 1.18, 0.30, 0.10, 0.04], [650, 2.18, 0.53, 0.18, 1.37, 0.34, 0.12, 0.05],
      [700, 2.50, 0.60, 0.20, 1.57, 0.39, 0.13, 0.05], [750, 2.84, 0.69, 0.23, 1.79, 0.45, 0.15, 0.06],
      [800, 3.20, 0.77, 0.26, 2.01, 0.51, 0.17, 0.07], [850, 3.58, 0.86, 0.29, 2.25, 0.57, 0.19, 0.08],
      [900, 3.98, 0.96, 0.32, 2.50, 0.63, 0.21, 0.09], [950, 4.40, 1.06, 0.35, 2.77, 0.70, 0.23, 0.10],
      [1000, 4.84, 1.17, 0.39, 3.04, 0.76, 0.26, 0.11], [1050, 5.30, 1.28, 0.43, 3.33, 0.84, 0.28, 0.12],
      [1100, 5.77, 1.39, 0.46, 3.63, 0.91, 0.31, 0.13], [1150, 6.27, 1.51, 0.50, 3.94, 0.99, 0.33, 0.14],
      [1200, 6.78, 1.64, 0.55, 4.26, 1.07, 0.36, 0.15], [1250, _, 1.77, 0.59, _, 1.16, 0.39, 0.16],
      [1300, _, 1.90, 0.63, _, 1.24, 0.42, 0.17], [1350, _, 2.04, 0.68, _, 1.33, 0.45, 0.19],
      [1400, _, 2.18, 0.73, _, 1.43, 0.48, 0.20], [1450, _, 2.33, 0.78, _, 1.52, 0.51, 0.21],
      [1500, _, 2.48, 0.83, _, 1.62, 0.55, 0.23], [1550, _, _, 0.88, _, _, 0.58, 0.24],
      [1600, _, _, 0.93, _, _, 0.62, 0.25], [1650, _, _, 0.99, _, _, 0.65, 0.27],
      [1700, _, _, 1.04, _, _, 0.69, 0.28], [1750, _, _, 1.10, _, _, 0.73, 0.30],
      [1800, _, _, 1.16, _, _, 0.77, 0.32], [1850, _, _, 1.22, _, _, 0.81, 0.33],
      [1900, _, _, 1.28, _, _, 0.85, 0.35], [1950, _, _, 1.34, _, _, 0.89, 0.37],
      [2000, _, _, 1.41, _, _, 0.93, 0.38], [2050, _, _, _, _, _, _, 0.40],
      [2100, _, _, _, _, _, _, 0.42], [2150, _, _, _, _, _, _, 0.44], [2200, _, _, _, _, _, _, 0.46]],
    notes: "Aluminum gated pipe, 0.051 wall, C = 110. PVC PIP Class 125, C = 150. Inside diameters in parentheses. In the book, shaded bold cells are where velocity exceeds 5 ft/s.",
  };
  // all Table 8.2 pipes in one list: [label, ID, C, table, column]
  const PIPES = [];
  T["8.2a"].pipes.forEach((p, i) => PIPES.push([p[0], p[1], p[2], "8.2a", i + 1]));
  T["8.2b"].pipes.forEach((p, i) => PIPES.push([p[0], p[1], p[2], "8.2b", i + 1]));
  const pipeOpts = PIPES.map((p, i) => [p[0] + " (ID " + p[1].toFixed(3) + " in, C " + p[2] + ")", i]);
  const pipeIdx = name => PIPES.findIndex(p => p[0] === name);
  // table lookup with interpolation in Q; NaN outside the printed range for that pipe
  const tab82 = (pi, Q) => {
    const p = PIPES[pi], rows = T[p[3]].rows;
    const pts = rows.filter(r => r[p[4]] !== null).map(r => [r[0], r[p[4]]]);
    if (Q < pts[0][0] || Q > pts[pts.length - 1][0]) return NaN;
    return M.interp(pts, Q);
  };

  // Table 8.3. Multiple outlet factors (p. 155)
  T["8.3"] = {
    title: "Multiple outlet factors for laterals with equally spaced outlets of the same discharge (first outlet one full spacing from inlet)",
    cols: ["No. of outlets", "F"],
    rows: [[1, 1.0], [2, 0.634], [3, 0.528], [4, 0.480], [5, 0.451], [6, 0.433], [7, 0.419], [8, 0.410], [9, 0.402], [10, 0.396],
      [11, 0.392], [12, 0.388], [13, 0.384], [14, 0.381], [15, 0.379], [16, 0.377], [17, 0.376], [18, 0.373], [19, 0.372],
      [20, 0.370], [22, 0.368], [24, 0.366], [26, 0.364], [28, 0.363], [30, 0.362], [35, 0.359], [40, 0.357], [50, 0.355],
      [100, 0.350], [">100", 0.345]],
    notes: "F = 0.54 for center pivots without end guns. F = 0.56 for center pivots with end guns.",
  };
  const fTable = N => {
    const pts = T["8.3"].rows.filter(r => typeof r[0] === "number");
    if (N > 100) return 0.345;
    return M.interp(pts, N);
  };
  // Christiansen outlet factor formula; m is the velocity exponent of the friction equation
  const fFormula = (N, m) => 1 / (m + 1) + 1 / (2 * N) + Math.sqrt(m - 1) / (6 * N * N);

  // Table 8.4. Resistance coefficient K for fittings and valves (USDA, 2016) (p. 156)
  T["8.4"] = {
    title: "Resistance coefficient K for determining head losses in fittings and valves",
    cols: ["Fitting or valve", "3 in", "4 in", "5 in", "6 in", "7 in", "8 in", "10 in"],
    sizes: [3, 4, 5, 6, 7, 8, 10],
    rows: [
      ["Bend, return flanged", 0.33, 0.30, 0.29, 0.28, 0.27, 0.25, 0.24],
      ["Bend, return screwed", 0.80, 0.70, _, _, _, _, _],
      ["Elbow, regular flanged 90°", 0.34, 0.31, 0.30, 0.28, 0.27, 0.26, 0.25],
      ["Elbow, long radius flanged 90°", 0.25, 0.22, 0.20, 0.18, 0.17, 0.15, 0.14],
      ["Elbow, long radius flanged 45°", 0.19, 0.18, 0.18, 0.17, 0.17, 0.17, 0.16],
      ["Elbow, regular screwed 90°", 0.80, 0.70, _, _, _, _, _],
      ["Elbow, long radius screwed 90°", 0.30, 0.23, _, _, _, _, _],
      ["Elbow, regular screwed 45°", 0.30, 0.28, _, _, _, _, _],
      ["Tee, flanged line flow", 0.16, 0.14, 0.13, 0.12, 0.11, 0.10, 0.09],
      ["Tee, flanged branch flow", 0.73, 0.68, 0.65, 0.60, 0.58, 0.56, 0.52],
      ["Tee, screwed line flow", 0.90, 0.90, _, _, _, _, _],
      ["Tee, screwed branch flow", 1.20, 1.10, _, _, _, _, _],
      ["Valve, globe flanged", 7.0, 6.3, 6.0, 5.8, 5.7, 5.6, 5.5],
      ["Valve, globe screwed", 6.0, 5.7, _, _, _, _, _],
      ["Valve, gate flanged", 0.21, 0.16, 0.13, 0.11, 0.09, 0.075, 0.06],
      ["Valve, gate screwed", 0.14, 0.12, _, _, _, _, _],
      ["Valve, swing check flanged", 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0],
      ["Valve, swing check screwed", 2.1, 2.0, _, _, _, _, _],
      ["Valve, angle flanged", 2.2, 2.1, 2.0, 2.0, 2.0, 2.0, 2.0],
      ["Valve, angle screwed", 1.3, 1.0, _, _, _, _, _],
      ["Valve, foot", 0.80, 0.80, 0.80, 0.80, 0.80, 0.80, 0.80],
      ["Strainer (basket type)", 1.25, 1.05, 0.95, 0.85, 0.80, 0.75, 0.67]],
    notes: "Standard pipe nominal diameter. Screwed fittings are listed only for 3 and 4 in.",
  };
  const fitOpts = T["8.4"].rows.map((r, i) => [r[0], i]);
  const sizeOpts = T["8.4"].sizes.map((s, i) => [s + " in", i]);
  const kLookup = (fi, si) => { const k = T["8.4"].rows[fi][si + 1]; return k === null ? NaN : k; };

  // Table 8.5. Maximum flow rates at Vm = 5 ft/s, rounded to nearest 5 gpm (p. 156)
  T["8.5"] = {
    title: "Maximum flow rates in pipelines at Vm = 5 ft/s (rounded to nearest 5 gpm)",
    cols: ["Pipe", "Nominal size (in)", "Inside dia. (in)", "Q (gpm)"],
    rows: [
      ["Aluminum sprinkler", "2", 1.900, 45], ["Aluminum sprinkler", "3", 2.900, 105], ["Aluminum sprinkler", "4", 3.900, 185],
      ["Aluminum sprinkler", "6", 5.884, 425],
      ["PVC IPS", "2", 2.193, 60], ["PVC IPS", "2½", 2.655, 85], ["PVC IPS", "3", 3.230, 130], ["PVC IPS", "4", 4.154, 210],
      ["PVC IPS", "6", 6.120, 460],
      ["Aluminum gated", "6", 5.898, 425], ["Aluminum gated", "8", 7.898, 765], ["Aluminum gated", "10", 9.898, 1200],
      ["PVC PIP", "6", 5.776, 405], ["PVC PIP", "8", 7.658, 720], ["PVC PIP", "10", 9.572, 1120], ["PVC PIP", "12", 11.486, 1615]],
    notes: "No 2½ in or 12 in aluminum listed. Based on Tables 8.2a and 8.2b.",
  };
  const famOpts = [["Aluminum sprinkler", 0], ["PVC IPS", 1], ["Aluminum gated", 2], ["PVC PIP", 3]];
  const FAM = ["Aluminum sprinkler", "PVC IPS", "Aluminum gated", "PVC PIP"];

  // Table 8.6. Nebraska pumping plant performance criteria (Dorn et al., 1981) (p. 165)
  T["8.6"] = {
    title: "Nebraska pumping plant performance criteria",
    cols: ["Energy source", "whp-hr per unit of energy", "Energy unit"],
    rows: [["Diesel", 12.5, "gallon"], ["Propane", 6.89, "gallon"], ["Natural gas", 61.7, "1,000 ft³ (mcf)"],
      ["Electricity", 0.885, "kW-hr"], ["Gasoline", 8.66, "gallon"]],
    notes: "Performance of the pumping plant as a complete unit (power unit, drive and pump). Based on a field pump efficiency of 75% and natural gas energy content 925 btu/mcf.",
  };
  const srcOpts = T["8.6"].rows.map((r, i) => [r[0] + " (" + r[1] + " whp-hr/" + r[2] + ")", i]).concat([["Other (enter PC)", -1]]);
  const PC = v => (v.src >= 0 ? T["8.6"].rows[v.src][1] : v.PCo);
  const UNIT = v => (v.src >= 0 ? T["8.6"].rows[v.src][2] : "unit");
  const DIESEL = 0, ELEC = 3;

  const g = 32.2;
  const GPM_CFS = 448.83; // gpm per cfs
  const area = d => Math.PI * d * d / 4 / 144;   // ft², d in inches
  const vel = (Q, d) => Q / GPM_CFS / area(d);   // ft/s
  const hwP = (Q, C, d) => 456 * Math.pow(Q / C, 1.852) / Math.pow(d, 4.866); // psi/100 ft, F = 1
  const hwH = (Q, C, d) => 1054 * Math.pow(Q / C, 1.852) / Math.pow(d, 4.866); // ft/100 ft, F = 1

  const C = (s) => { s.ch = 8; s.file = "ch08"; return calc(s); };

  C({
    id: "eq-8.1", eq: ["8.1"], sec: "8.2", page: 147, title: "Velocity head",
    tags: ["velocity head", "kinetic energy", "hv"], figs: ["8.3"],
    inputs: [{ k: "V", sym: "V<sub>m</sub>", label: "Average velocity", dim: "velocity", u: "ft/s", v: 5 }],
    outputs: [{ k: "hv", sym: "h<sub>v</sub>", label: "Velocity head", dim: "length", u: "ft", dp: 3 }],
    f: v => ({ hv: v.V * v.V / (2 * g) }),
    examples: [{ ref: "Example 8.2", page: 150, in: { V: 10.23 }, out: { hv: 1.6 }, tol: 0.03 },
               { ref: "Example 8.3", page: 150, in: { V: 1.63 }, out: { hv: 0.04 }, tol: 0.06 }],
  });

  C({
    id: "eq-8.5", eq: ["8.5"], sec: "8.2", page: 149, title: "Flow velocity in a pipe (continuity)",
    tags: ["pipe velocity", "continuity", "is my pipe too small", "5 ft/s rule", "water hammer"], figs: ["8.3"],
    note: "Mainline velocity should normally stay at or below 5 ft/s to limit water hammer.",
    inputs: [
      { k: "Q", sym: "Q", label: "Flow rate", dim: "flow", u: "gpm", v: 400 },
      { k: "d", sym: "d", label: "Inside diameter", dim: "length", u: "in", v: 4 }],
    outputs: [
      { k: "A", sym: "A<sub>f</sub>", label: "Cross-sectional area of flow", dim: "area", u: "ft²", dp: 4 },
      { k: "V", sym: "V<sub>m</sub>", label: "Average velocity", dim: "velocity", u: "ft/s", dp: 2 },
      { k: "hv", sym: "h<sub>v</sub>", label: "Velocity head (Eq. 8.1)", dim: "length", u: "ft", dp: 2 },
      { k: "ok", label: "Check against 5 ft/s", text: true }],
    f: v => { const A = area(v.d), V = v.Q / GPM_CFS / A; return { A, V, hv: V * V / (2 * g), ok: V > 5 ? "Above 5 ft/s: risk of surges" : "At or below 5 ft/s" }; },
    examples: [{ ref: "Example 8.2", page: 150, in: { Q: 400, d: 4 }, out: { A: 0.087, V: 10.23, hv: 1.6 }, tol: 0.03 },
               { ref: "Example 8.3", page: 150, in: { Q: 400, d: 10 }, out: { A: 0.545, V: 1.63 } }],
  });

  C({
    id: "eq-8.2-8.3", eq: ["8.2", "8.3"], sec: "8.2", page: 148, title: "Pressure and pressure head of water",
    tags: ["psi to feet", "feet to psi", "pressure head", "2.31", "0.433", "head of water"], figs: ["8.1"],
    note: "For water, γ = 0.433 psi/ft, or 1/γ = 2.31 ft/psi. Valid only for water.",
    inputs: [{ k: "h", sym: "h", label: "Pressure head (depth of water)", dim: "length", u: "ft", v: 10 }],
    outputs: [{ k: "P", sym: "P", label: "Pressure", dim: "pressure", u: "psi", dp: 2 }],
    f: v => ({ P: 0.433 * v.h }),
    examples: [{ ref: "Example 8.1", page: 148, in: { h: 10 }, out: { P: 4.33 } },
               { ref: "Example 8.2", page: 150, in: { h: 139 }, out: { P: 60 } }],
  });

  C({
    id: "eq-8.4", eq: ["8.4"], sec: "8.2", page: 149, title: "Total head at a point in a pipe",
    tags: ["total head", "hydraulic head", "elevation head", "energy in a pipeline"], figs: ["8.2"],
    inputs: [
      { k: "Z", sym: "Z", label: "Elevation head above the reference", dim: "length", u: "ft", v: 15, min: -1e6 },
      { k: "P", sym: "P", label: "Pressure", dim: "pressure", u: "psi", v: 60 },
      { k: "Q", sym: "Q", label: "Flow rate", dim: "flow", u: "gpm", v: 400 },
      { k: "d", sym: "d", label: "Inside diameter", dim: "length", u: "in", v: 4 }],
    outputs: [
      { k: "h", sym: "h", label: "Pressure head (2.31 P)", dim: "length", u: "ft", dp: 1 },
      { k: "V", sym: "V<sub>m</sub>", label: "Velocity", dim: "velocity", u: "ft/s", dp: 2 },
      { k: "hv", sym: "V<sub>m</sub><sup>2</sup>/2g", label: "Velocity head", dim: "length", u: "ft", dp: 2 },
      { k: "H", sym: "H", label: "Total head", dim: "length", u: "ft", dp: 1 }],
    f: v => { const h = 2.31 * v.P, V = vel(v.Q, v.d), hv = V * V / (2 * g); return { h, V, hv, H: v.Z + h + hv }; },
    examples: [{ ref: "Example 8.2", page: 150, in: { Z: 15, P: 60, Q: 400, d: 4 }, out: { h: 139, H: 156 } }],
  });

  C({
    id: "eq-8.6-8.7", eq: ["8.6", "8.7"], sec: "8.2", page: 149, title: "Bernoulli equation (head form)",
    tags: ["Bernoulli", "energy balance", "pressure downstream", "head loss"],
    inputs: [
      { k: "V1", sym: "V<sub>1</sub>", label: "Velocity at point 1", dim: "velocity", u: "ft/s", v: 3 },
      { k: "Z1", sym: "Z<sub>1</sub>", label: "Elevation at point 1", dim: "length", u: "ft", v: 0, min: -1e6 },
      { k: "h1", sym: "h<sub>1</sub>", label: "Pressure head at point 1", dim: "length", u: "ft", v: 139 },
      { k: "V2", sym: "V<sub>2</sub>", label: "Velocity at point 2", dim: "velocity", u: "ft/s", v: 3 },
      { k: "Z2", sym: "Z<sub>2</sub>", label: "Elevation at point 2", dim: "length", u: "ft", v: 12, min: -1e6 },
      { k: "hL", sym: "h<sub>L</sub>", label: "Head loss from 1 to 2", dim: "length", u: "ft", v: 11.8 }],
    outputs: [
      { k: "H1", sym: "H<sub>1</sub>", label: "Total head at point 1", dim: "length", u: "ft", dp: 2 },
      { k: "H2", sym: "H<sub>2</sub>", label: "Total head at point 2", dim: "length", u: "ft", dp: 2 },
      { k: "h2", sym: "h<sub>2</sub>", label: "Pressure head at point 2", dim: "length", u: "ft", dp: 2 },
      { k: "P2", sym: "P<sub>2</sub>", label: "Pressure at point 2", dim: "pressure", u: "psi", dp: 1 }],
    f: v => {
      const H1 = v.V1 * v.V1 / (2 * g) + v.Z1 + v.h1, H2 = H1 - v.hL;
      const h2 = H2 - v.Z2 - v.V2 * v.V2 / (2 * g);
      return { H1, H2, h2, P2: h2 * 0.433 };
    },
  });

  C({
    id: "eq-8.8-8.9", eq: ["8.8", "8.9"], sec: "8.2", page: 149, title: "Total head or pressure loss (friction plus minor)",
    tags: ["head loss", "pressure loss", "friction plus fittings", "minor losses"],
    inputs: [
      { k: "hf", sym: "h<sub>f</sub>", label: "Friction loss", dim: "length", u: "ft", v: 11.8 },
      { k: "hm", sym: "h<sub>m</sub>", label: "Minor losses (fittings, valves)", dim: "length", u: "ft", v: 1 }],
    outputs: [
      { k: "hL", sym: "h<sub>L</sub>", label: "Total head loss", dim: "length", u: "ft", dp: 2 },
      { k: "PL", sym: "P<sub>L</sub>", label: "Total pressure loss", dim: "pressure", u: "psi", dp: 2 }],
    f: v => { const hL = v.hf + v.hm; return { hL, PL: 0.433 * hL }; },
  });

  C({
    id: "eq-8.10", eq: ["8.10"], sec: "8.2", page: 150, title: "Pressure at the end of a pipe (pressure form of Bernoulli)",
    tags: ["downstream pressure", "pipe going uphill", "pipe going downhill", "end pressure", "elevation change"], figs: ["8.4"],
    note: "Velocity head ignored. A rise is Z<sub>2</sub> > Z<sub>1</sub> (pressure drops 0.433 psi per foot of rise); a fall adds 0.433 psi per foot.",
    inputs: [
      { k: "P1", sym: "P<sub>1</sub>", label: "Pressure at point 1 (inlet)", dim: "pressure", u: "psi", v: 60 },
      { k: "Z1", sym: "Z<sub>1</sub>", label: "Elevation at point 1", dim: "length", u: "ft", v: 0, min: -1e6 },
      { k: "Z2", sym: "Z<sub>2</sub>", label: "Elevation at point 2", dim: "length", u: "ft", v: 12, min: -1e6 },
      { k: "PL", sym: "P<sub>L</sub>", label: "Pressure loss, friction plus minor", dim: "pressure", u: "psi", v: 5.1 }],
    outputs: [{ k: "P2", sym: "P<sub>2</sub>", label: "Pressure at point 2", dim: "pressure", u: "psi", dp: 1 }],
    f: v => ({ P2: 0.433 * v.Z1 + v.P1 - 0.433 * v.Z2 - v.PL }),
    examples: [{ ref: "Example 8.4", page: 155, in: { P1: 60, Z1: 0, Z2: 12, PL: 5.1 }, out: { P2: 49.7 } },
               { ref: "Example 8.5", page: 157, in: { P1: 35, Z1: 25, Z2: 0, PL: 0.39 * 6 }, out: { P2: 43.5 } }],
  });

  C({
    id: "eq-8.11", eq: ["8.11a", "8.11b"], sec: "8.3", page: 152, title: "Pipe friction loss (Hazen-Williams)",
    tags: ["friction loss", "Hazen-Williams", "pressure loss in pipe", "pipe sizing", "how much pressure do I lose in my mainline", "lateral friction"],
    tables: ["8.1", "8.3"],
    inputs: [
      { k: "Q", sym: "Q", label: "Flow rate at the inlet", dim: "flow", u: "gpm", v: 165 },
      { k: "d", sym: "d", label: "Inside diameter", dim: "length", u: "in", v: 3.9 },
      { k: "C", sym: "C", label: "Roughness coefficient", type: "sel", opts: cOpts, v: 120, help: "Table 8.1. Aluminum with couplers 120, gated aluminum 110, PVC 150." },
      { k: "F", sym: "F", label: "Outlet factor (1 for no outlets)", v: 1, help: "Table 8.3: about 0.36 for many sprinklers, 0.54 for center pivot without end gun, 0.56 with end gun." },
      { k: "L", sym: "L", label: "Pipe length", dim: "length", u: "ft", v: 1280 }],
    outputs: [
      { k: "hf", sym: "h<sub>f</sub>", label: "Friction loss per 100 ft", dim: "hgrad", u: "ft/100 ft", dp: 2 },
      { k: "Pf", sym: "P<sub>f</sub>", label: "Friction loss per 100 ft", dim: "ploss", u: "psi/100 ft", dp: 2 },
      { k: "Pt", sym: "P<sub>f</sub> L/100", label: "Friction loss over the length", dim: "pressure", u: "psi", dp: 1 },
      { k: "V", sym: "V<sub>m</sub>", label: "Velocity at the inlet", dim: "velocity", u: "ft/s", dp: 2 }],
    f: v => {
      const hf = v.F * hwH(v.Q, v.C, v.d), Pf = v.F * hwP(v.Q, v.C, v.d);
      return { hf, Pf, Pt: Pf * v.L / 100, V: vel(v.Q, v.d) };
    },
    examples: [{ ref: "Example 8.4 (table value 1.1 psi/100 ft)", page: 155, in: { Q: 165, d: 3.9, C: 120, F: 1, L: 1280 }, out: { Pf: 1.1 } },
               { ref: "Example 8.4", page: 155, in: { Q: 165, d: 3.9, C: 120, F: 0.36, L: 1280 }, out: { Pt: 5.1 } },
               { ref: "Example 8.5 (table value 0.39 psi/100 ft)", page: 157, in: { Q: 700, d: 7.658, C: 150, F: 1, L: 600 }, out: { Pf: 0.39 } }],
  });

  C({
    id: "tab-8.1", eq: [], sec: "8.3", page: 152, title: "Hazen-Williams C values (Table 8.1)",
    tags: ["C value", "roughness", "pipe material", "PVC", "aluminum", "steel"], tables: ["8.1"],
    inputs: [{ k: "m", label: "Pipe material", type: "sel", opts: T["8.1"].rows.map((r, i) => [r[0], i]), v: 5 }],
    outputs: [{ k: "C", sym: "C", label: "Roughness coefficient", dp: 0 }],
    f: v => ({ C: T["8.1"].rows[v.m][1] }),
    examples: [{ ref: "Table 8.1", page: 152, in: { m: 1 }, out: { C: 110 } }],
  });

  C({
    id: "tab-8.2", eq: [], sec: "8.3", page: 153, title: "Friction loss table for irrigation pipe (Tables 8.2a and 8.2b)",
    tags: ["friction loss table", "psi per 100 ft", "aluminum pipe", "gated pipe", "PIP", "IPS", "PVC pipe"],
    tables: ["8.2a", "8.2b"],
    note: "Linear interpolation between printed flow rates. The Hazen-Williams value (Eq. 8.11b) is shown for comparison and for flows outside the printed range.",
    inputs: [
      { k: "p", label: "Pipe", type: "sel", opts: pipeOpts, v: pipeIdx("Aluminum sprinkler pipe 4 in") },
      { k: "Q", sym: "Q", label: "Flow rate", dim: "flow", u: "gpm", v: 165 },
      { k: "L", sym: "L", label: "Pipe length (optional)", dim: "length", u: "ft", v: 100 },
      { k: "F", sym: "F", label: "Outlet factor (1 for no outlets)", v: 1 }],
    outputs: [
      { k: "Pt", sym: "P<sub>f</sub>", label: "Table friction loss", dim: "ploss", u: "psi/100 ft", dp: 2 },
      { k: "Phw", sym: "P<sub>f</sub>", label: "Hazen-Williams friction loss", dim: "ploss", u: "psi/100 ft", dp: 2 },
      { k: "Ptot", label: "Loss over the length, F × P<sub>f</sub> × L/100 (table value, or formula if off table)", dim: "pressure", u: "psi", dp: 2 },
      { k: "V", sym: "V<sub>m</sub>", label: "Velocity", dim: "velocity", u: "ft/s", dp: 2 },
      { k: "flag", label: "Velocity check", text: true }],
    f: v => {
      const p = PIPES[v.p], Pt = tab82(v.p, v.Q), Phw = hwP(v.Q, p[2], p[1]), V = vel(v.Q, p[1]);
      const use = isFinite(Pt) ? Pt : Phw;
      return { Pt, Phw, Ptot: v.F * use * v.L / 100, V, flag: V > 5 ? "Above 5 ft/s (shaded region of the table)" : "At or below 5 ft/s" };
    },
    examples: [{ ref: "Example 8.4", page: 155, in: { p: pipeIdx("Aluminum sprinkler pipe 4 in"), Q: 165 }, out: { Pt: 1.1 }, tol: 0.03 },
               { ref: "Example 8.5", page: 157, in: { p: pipeIdx("PVC PIP Class 125, 8 in"), Q: 700, L: 600 }, out: { Pt: 0.39, Ptot: 2.34 } }],
  });

  C({
    id: "tab-8.3", eq: [], sec: "8.3", page: 155, title: "Multiple outlet factor F (Table 8.3)",
    tags: ["outlet factor", "Christiansen F", "lateral friction", "sprinkler lateral", "center pivot F", "gated pipe outlets"],
    tables: ["8.3"],
    note: "Formula: F = 1/(m+1) + 1/(2N) + (m−1)<sup>0.5</sup>/(6N<sup>2</sup>) (Christiansen). With the Hazen-Williams exponent m = 1.852 it runs about 0.005 above Table 8.3; the printed table matches m = 1.9 to within 0.001. Center pivots: F = 0.54 without end gun, 0.56 with end gun.",
    inputs: [
      { k: "N", sym: "N", label: "Number of outlets", dim: "count", u: "#", v: 33 },
      { k: "m", sym: "m", label: "Flow exponent for the formula", v: 1.852 }],
    outputs: [
      { k: "Ft", sym: "F", label: "From Table 8.3 (interpolated)", dp: 3 },
      { k: "Ff", sym: "F", label: "From the formula with your m", dp: 3 },
      { k: "F19", sym: "F", label: "From the formula with m = 1.9", dp: 3 }],
    f: v => ({ Ft: fTable(v.N), Ff: fFormula(v.N, v.m), F19: fFormula(v.N, 1.9) }),
    examples: [{ ref: "Example 8.4", page: 155, in: { N: 33 }, out: { Ft: 0.36 } },
               { ref: "Table 8.3", page: 155, in: { N: 2 }, out: { Ft: 0.634, F19: 0.634 }, tol: 0.003 },
               { ref: "Table 8.3", page: 155, in: { N: 10 }, out: { Ft: 0.396, F19: 0.396 }, tol: 0.003 },
               { ref: "Table 8.3", page: 155, in: { N: 50 }, out: { Ft: 0.355, F19: 0.355 }, tol: 0.003 }],
  });

  C({
    id: "eq-8.12", eq: ["8.12"], sec: "8.3", page: 155, title: "Minor loss in fittings and valves",
    tags: ["minor loss", "fitting loss", "elbow", "valve loss", "K value", "tee"], tables: ["8.4"],
    inputs: [
      { k: "fit", label: "Fitting or valve (Table 8.4)", type: "sel", opts: fitOpts.concat([["Other (enter K)", -1]]), v: 2 },
      { k: "sz", label: "Nominal size for the table", type: "sel", opts: sizeOpts, v: 3 },
      { k: "Ko", sym: "K", label: "K (only for Other)", v: 0.5 },
      { k: "n", sym: "n", label: "Number of these fittings", dim: "count", u: "#", v: 1 },
      { k: "Q", sym: "Q", label: "Flow rate", dim: "flow", u: "gpm", v: 400 },
      { k: "d", sym: "d", label: "Inside diameter", dim: "length", u: "in", v: 6 }],
    outputs: [
      { k: "K", sym: "K", label: "Resistance coefficient used", dp: 3 },
      { k: "V", sym: "V<sub>m</sub>", label: "Velocity", dim: "velocity", u: "ft/s", dp: 2 },
      { k: "hm", sym: "h<sub>m</sub>", label: "Head loss (all fittings)", dim: "length", u: "ft", dp: 3 },
      { k: "Pm", sym: "P<sub>m</sub>", label: "Pressure loss (all fittings)", dim: "pressure", u: "psi", dp: 3 }],
    f: v => {
      const K = v.fit < 0 ? v.Ko : kLookup(v.fit, v.sz), V = vel(v.Q, v.d), hm = v.n * K * V * V / (2 * g);
      return { K, V, hm, Pm: 0.433 * hm };
    },
  });

  C({
    id: "tab-8.4", eq: [], sec: "8.3", page: 156, title: "Fitting and valve K values (Table 8.4)",
    tags: ["K value", "resistance coefficient", "fittings", "valves", "strainer", "foot valve"], tables: ["8.4"],
    inputs: [
      { k: "fit", label: "Fitting or valve", type: "sel", opts: fitOpts, v: 14 },
      { k: "sz", label: "Nominal size", type: "sel", opts: sizeOpts, v: 5 }],
    outputs: [{ k: "K", sym: "K", label: "Resistance coefficient (blank in table if not listed)", dp: 3 }],
    f: v => ({ K: kLookup(v.fit, v.sz) }),
    examples: [{ ref: "Table 8.4", page: 156, in: { fit: 14, sz: 5 }, out: { K: 0.075 } }],
  });

  C({
    id: "tab-8.5", eq: [], sec: "8.4", page: 156, title: "Mainline pipe size for 5 ft/s (Table 8.5)",
    tags: ["pipe size", "what size pipe do I need", "maximum flow", "mainline sizing", "5 ft/s"], tables: ["8.5"],
    inputs: [
      { k: "fam", label: "Pipe type", type: "sel", opts: famOpts, v: 3 },
      { k: "Q", sym: "Q", label: "System flow rate", dim: "flow", u: "gpm", v: 700 }],
    outputs: [
      { k: "size", label: "Smallest nominal size at or below 5 ft/s", text: true },
      { k: "ID", sym: "d", label: "Inside diameter", dim: "length", u: "in", dp: 3 },
      { k: "Qmax", sym: "Q<sub>max</sub>", label: "Table maximum flow for that size", dim: "flow", u: "gpm", dp: 0 },
      { k: "V", sym: "V<sub>m</sub>", label: "Velocity at your flow", dim: "velocity", u: "ft/s", dp: 2 }],
    f: v => {
      const rows = T["8.5"].rows.filter(r => r[0] === FAM[v.fam]);
      const r = rows.find(x => x[3] >= v.Q);
      if (!r) return { size: "Larger than the table: use a bigger pipe or two lines", ID: NaN, Qmax: NaN, V: NaN };
      return { size: r[1] + " in", ID: r[2], Qmax: r[3], V: vel(v.Q, r[2]) };
    },
    examples: [{ ref: "Example 8.5", page: 157, in: { fam: 3, Q: 700 }, out: { size: "8 in", Qmax: 720 } }],
  });

  C({
    id: "pipeline-design", eq: ["8.10", "8.11b", "8.12"], sec: "8.4", page: 157, title: "Pipeline or lateral pressure check (procedure)",
    tags: ["mainline design", "lateral design", "end pressure", "pipe pressure procedure", "will I have enough pressure at the end"],
    tables: ["8.2a", "8.2b", "8.3", "8.4"], figs: ["8.4"],
    note: "Follows Examples 8.4 and 8.5: friction from Hazen-Williams for the chosen pipe (Table 8.2 diameter and C), outlet factor F from Table 8.3, plus minor losses from a total K, then Eq. 8.10.",
    inputs: [
      { k: "p", label: "Pipe", type: "sel", opts: pipeOpts, v: pipeIdx("Aluminum sprinkler pipe 4 in") },
      { k: "L", sym: "L", label: "Pipe length", dim: "length", u: "ft", v: 1280 },
      { k: "out", label: "Outlets", type: "sel", opts: [["None (mainline)", 0], ["Equally spaced outlets (enter number and flow each)", 1], ["Center pivot, no end gun (F 0.54)", 2], ["Center pivot with end gun (F 0.56)", 3]], v: 1 },
      { k: "Q", sym: "Q", label: "Inlet flow (mainline or pivot)", dim: "flow", u: "gpm", v: 700 },
      { k: "No", sym: "N", label: "Number of outlets", dim: "count", u: "#", v: 33, help: "About length / spacing. Example 8.4 counts 33 sprinklers on a 1280 ft lateral at 40 ft." },
      { k: "q", sym: "q", label: "Flow per outlet", dim: "flow", u: "gpm", v: 5 },
      { k: "P1", sym: "P<sub>1</sub>", label: "Inlet pressure", dim: "pressure", u: "psi", v: 60 },
      { k: "dz", sym: "ΔZ", label: "Rise along the pipe (negative for a fall)", dim: "length", u: "ft", v: 12, min: -1e6 },
      { k: "K", sym: "ΣK", label: "Sum of fitting K values (Table 8.4)", v: 0 }],
    outputs: [
      { k: "N", sym: "N", label: "Number of outlets", dp: 0 },
      { k: "Qin", sym: "Q", label: "Inlet flow", dim: "flow", u: "gpm", dp: 0 },
      { k: "V", sym: "V<sub>m</sub>", label: "Inlet velocity", dim: "velocity", u: "ft/s", dp: 2 },
      { k: "F", sym: "F", label: "Outlet factor", dp: 3 },
      { k: "Pf", sym: "P<sub>f</sub>", label: "Friction loss", dim: "pressure", u: "psi", dp: 2 },
      { k: "Pm", sym: "P<sub>m</sub>", label: "Minor loss", dim: "pressure", u: "psi", dp: 2 },
      { k: "P2", sym: "P<sub>2</sub>", label: "Pressure at the end", dim: "pressure", u: "psi", dp: 1 }],
    f: v => {
      const p = PIPES[v.p];
      let N = 0, Qin = v.Q, F = 1;
      if (v.out === 1) { N = Math.round(v.No); Qin = N * v.q; F = fTable(N); }
      else if (v.out === 2) F = 0.54;
      else if (v.out === 3) F = 0.56;
      const V = vel(Qin, p[1]);
      const Pf = F * hwP(Qin, p[2], p[1]) * v.L / 100;
      const Pm = 0.433 * v.K * V * V / (2 * g);
      return { N, Qin, V, F, Pf, Pm, P2: v.P1 - Pf - Pm - 0.433 * v.dz };
    },
    examples: [
      { ref: "Example 8.4", page: 155, in: { p: pipeIdx("Aluminum sprinkler pipe 4 in"), L: 1280, out: 1, No: 33, q: 5, P1: 60, dz: 12, K: 0 },
        out: { N: 33, Qin: 165, F: 0.36, Pf: 5.1, P2: 49.7 } },
      { ref: "Example 8.5", page: 157, in: { p: pipeIdx("PVC PIP Class 125, 8 in"), L: 600, out: 0, Q: 700, P1: 35, dz: -25, K: 0 },
        out: { Pf: 2.34, P2: 43.5 } }],
  });

  C({
    id: "eq-8.13", eq: ["8.13"], sec: "8.5", page: 159, title: "Total dynamic head of a well pump",
    tags: ["TDH", "total dynamic head", "pump head", "lift plus pressure"],
    note: "Approximation: ignores velocity head and the friction and minor losses in the column and discharge.",
    inputs: [
      { k: "P", sym: "P", label: "Pump discharge pressure", dim: "pressure", u: "psi", v: 50 },
      { k: "L", sym: "L", label: "Lift, water source to pump discharge", dim: "length", u: "ft", v: 100 }],
    outputs: [{ k: "TDH", sym: "TDH", label: "Total dynamic head", dim: "length", u: "ft", dp: 0 }],
    f: v => ({ TDH: 2.31 * v.P + v.L }),
    examples: [{ ref: "Example 8.6", page: 164, in: { P: 50, L: 100 }, out: { TDH: 216 } },
               { ref: "Example 8.11", page: 168, in: { P: 40, L: 143 }, out: { TDH: 235 } }],
  });

  C({
    id: "eq-8.14", eq: ["8.14"], sec: "8.5", page: 159, title: "Total dynamic head of a booster pump",
    tags: ["booster pump", "TDH", "centrifugal booster", "pressure boost"],
    inputs: [
      { k: "Pout", sym: "P<sub>out</sub>", label: "Discharge pressure", dim: "pressure", u: "psi", v: 70 },
      { k: "Pin", sym: "P<sub>in</sub>", label: "Inlet pressure", dim: "pressure", u: "psi", v: 30, min: -15 }],
    outputs: [{ k: "TDH", sym: "TDH", label: "Total dynamic head", dim: "length", u: "ft", dp: 1 }],
    f: v => ({ TDH: 2.31 * (v.Pout - v.Pin) }),
  });

  C({
    id: "eq-8.15", eq: ["8.15a", "8.15b"], sec: "8.5", page: 163, title: "Pump affinity laws (speed or impeller diameter)",
    tags: ["affinity laws", "VFD", "pump speed", "impeller trim", "slow down pump", "rpm change"], figs: ["8.10", "8.11"],
    note: "Q varies with the ratio, TDH with its square and BHP with its cube. Enter the current point and the new speed or diameter. The last output gives the speed or diameter needed to reach a target TDH along the same affinity curve.",
    inputs: [
      { k: "N1", sym: "RPM<sub>1</sub> or DIA<sub>1</sub>", label: "Current speed (rpm) or impeller diameter", v: 1770 },
      { k: "N2", sym: "RPM<sub>2</sub> or DIA<sub>2</sub>", label: "New speed (rpm) or impeller diameter (same unit)", v: 1670 },
      { k: "Q1", sym: "Q<sub>1</sub>", label: "Current flow rate", dim: "flow", u: "gpm", v: 800 },
      { k: "H1", sym: "TDH<sub>1</sub>", label: "Current total dynamic head", dim: "length", u: "ft", v: 285 },
      { k: "B1", sym: "BHP<sub>1</sub>", label: "Current brake horsepower", dim: "power", u: "hp", v: 80 },
      { k: "Ht", sym: "TDH<sub>target</sub>", label: "Target TDH (optional)", dim: "length", u: "ft", v: 235 }],
    outputs: [
      { k: "Q2", sym: "Q<sub>2</sub>", label: "New flow rate", dim: "flow", u: "gpm", dp: 0 },
      { k: "H2", sym: "TDH<sub>2</sub>", label: "New total dynamic head", dim: "length", u: "ft", dp: 1 },
      { k: "B2", sym: "BHP<sub>2</sub>", label: "New brake horsepower", dim: "power", u: "hp", dp: 1 },
      { k: "Nt", label: "Speed or diameter for the target TDH", dp: 2 }],
    f: v => {
      const r = v.N2 / v.N1;
      return { Q2: v.Q1 * r, H2: v.H1 * r * r, B2: v.B1 * r * r * r, Nt: v.N1 * Math.sqrt(v.Ht / v.H1) };
    },
  });

  C({
    id: "eq-8.16", eq: ["8.16"], sec: "8.6", page: 163, title: "Pump efficiency",
    tags: ["pump efficiency", "efficiency", "output over input"],
    inputs: [
      { k: "whp", sym: "whp", label: "Power output (water horsepower)", dim: "power", u: "hp", v: 44 },
      { k: "bhp", sym: "bhp", label: "Power input to the pump shaft", dim: "power", u: "hp", v: 55 }],
    outputs: [{ k: "Ep", sym: "E<sub>p</sub>", label: "Pump efficiency", dim: "frac", u: "decimal", dp: 3 }],
    f: v => ({ Ep: v.whp / v.bhp }),
    examples: [{ ref: "Example 8.6", page: 164, in: { whp: 44, bhp: 55 }, out: { Ep: 0.80 } }],
  });

  C({
    id: "eq-8.17-8.19", eq: ["8.17", "8.18", "8.19"], sec: "8.6", page: 164, title: "Water and brake horsepower",
    tags: ["horsepower", "whp", "bhp", "motor size", "how big a motor do I need", "3960"],
    note: "1 hp = 33,000 ft-lb/min (Eq. 8.17); with 8.33 lb/gal, 1 hp lifts about 3,960 gal 1 ft per minute.",
    inputs: [
      { k: "Q", sym: "Q", label: "Flow rate", dim: "flow", u: "gpm", v: 800 },
      { k: "TDH", sym: "TDH", label: "Total dynamic head", dim: "length", u: "ft", v: 216 },
      { k: "Ep", sym: "E<sub>p</sub>", label: "Pump efficiency", dim: "frac", u: "decimal", v: 0.80 }],
    outputs: [
      { k: "whp", sym: "whp", label: "Water horsepower", dim: "power", u: "hp", dp: 1 },
      { k: "bhp", sym: "bhp", label: "Brake horsepower", dim: "power", u: "hp", dp: 1 }],
    f: v => { const whp = v.Q * v.TDH / 3960; return { whp, bhp: whp / v.Ep }; },
    examples: [{ ref: "Example 8.6", page: 164, in: { Q: 800, TDH: 216, Ep: 0.8 }, out: { whp: 44, bhp: 55 } }],
  });

  C({
    id: "tab-8.6", eq: [], sec: "8.7", page: 165, title: "Nebraska pumping plant performance criteria (Table 8.6)",
    tags: ["Nebraska criteria", "performance criteria", "whp-hr per gallon", "diesel", "electric", "natural gas", "propane"],
    tables: ["8.6"],
    inputs: [{ k: "src", label: "Energy source", type: "sel", opts: T["8.6"].rows.map((r, i) => [r[0], i]), v: 0 }],
    outputs: [
      { k: "PC", sym: "PC", label: "whp-hr per unit of energy", dp: 3 },
      { k: "unit", label: "Energy unit", text: true }],
    f: v => ({ PC: T["8.6"].rows[v.src][1], unit: T["8.6"].rows[v.src][2] }),
    examples: [{ ref: "Table 8.6", page: 165, in: { src: ELEC }, out: { PC: 0.885, unit: "kW-hr" } }],
  });

  const srcIn = { k: "src", label: "Energy source (Table 8.6)", type: "sel", opts: srcOpts, v: DIESEL };
  const pcIn = { k: "PCo", sym: "PC", label: "Performance criteria (only for Other), whp-hr/unit", v: 12.5 };

  C({
    id: "eq-8.20", eq: ["8.20"], sec: "8.7", page: 165, title: "Pumping plant performance rating",
    tags: ["performance rating", "pump test", "is my pump efficient", "fuel use", "pumping plant evaluation"], tables: ["8.6"],
    inputs: [
      { k: "whp", sym: "whp", label: "Water horsepower (Eq. 8.18)", dim: "power", u: "hp", v: 44 },
      { k: "rate", label: "Measured energy use per hour (gal/hr, kW, or mcf/hr)", v: 4 },
      srcIn, pcIn],
    outputs: [
      { k: "perf", label: "Actual performance, whp-hr per energy unit", dp: 2 },
      { k: "PC", sym: "PC", label: "Performance criteria", dp: 3 },
      { k: "PR", sym: "PR", label: "Performance rating", dp: 2 }],
    f: v => { const perf = v.whp / v.rate, pc = PC(v); return { perf, PC: pc, PR: perf / pc }; },
    examples: [{ ref: "Example 8.7", page: 166, in: { whp: 44, rate: 4, src: DIESEL }, out: { perf: 11, PR: 0.88 } }],
  });

  C({
    id: "eq-8.21", eq: ["8.21"], sec: "8.7", page: 166, title: "Energy use per hour of pumping",
    tags: ["fuel per hour", "kWh per hour", "gallons of diesel per hour", "energy use rate"], tables: ["8.6"],
    inputs: [
      { k: "whp", sym: "whp", label: "Water horsepower", dim: "power", u: "hp", v: 44 },
      srcIn, pcIn,
      { k: "PR", sym: "PR", label: "Performance rating (1 = meets criteria)", v: 1 },
      { k: "price", label: "Energy price per unit, $ (optional)", v: 0 }],
    outputs: [
      { k: "E", label: "Energy per hour (energy units/hr)", dp: 2 },
      { k: "unit", label: "Energy unit", text: true },
      { k: "cost", label: "Cost per hour, $", dp: 2 }],
    f: v => { const E = v.whp / (PC(v) * v.PR); return { E, unit: UNIT(v), cost: E * v.price }; },
    examples: [{ ref: "Example 8.8", page: 166, in: { whp: 44, src: DIESEL, PR: 1 }, out: { E: 3.52 } }],
  });

  C({
    id: "eq-8.22", eq: ["8.22"], sec: "8.7", page: 167, title: "Energy and cost per acre-inch pumped",
    tags: ["energy per acre-inch", "cost per acre inch", "pumping cost", "kWh per ac-in", "diesel per ac-in", "what does it cost to pump an inch"],
    tables: ["8.6"],
    inputs: [
      { k: "TDH", sym: "TDH", label: "Total dynamic head", dim: "length", u: "ft", v: 216 },
      srcIn, pcIn,
      { k: "PR", sym: "PR", label: "Performance rating", v: 0.88 },
      { k: "price", label: "Energy price per unit, $", v: 3.5 },
      { k: "vol", sym: "V", label: "Volume pumped per season (optional)", dim: "volume", u: "ac-in", v: 1300 }],
    outputs: [
      { k: "E", sym: "E", label: "Energy per acre-inch (energy units/ac-in)", dp: 2 },
      { k: "unit", label: "Energy unit", text: true },
      { k: "cpa", label: "Energy cost per acre-inch", dim: "costvol", u: "$/ac-in", dp: 2 },
      { k: "Etot", label: "Season energy (energy units)", dp: 0 },
      { k: "ctot", label: "Season energy cost, $", dp: 0 }],
    f: v => {
      const E = v.TDH / (8.75 * PC(v) * v.PR);
      return { E, unit: UNIT(v), cpa: E * v.price, Etot: E * v.vol, ctot: E * v.price * v.vol };
    },
    examples: [{ ref: "Example 8.9", page: 167, in: { TDH: 216, src: DIESEL, PR: 0.88 }, out: { E: 2.24 } },
               { ref: "Example 8.10", page: 167, in: { TDH: 216, src: DIESEL, PR: 1 }, out: { E: 1.97 } },
               { ref: "Example 8.11", page: 168, in: { TDH: 235, src: ELEC, PR: 1 }, out: { E: 30.3 } },
               { ref: "Example 8.11", page: 168, in: { TDH: 285, src: ELEC, PR: 1 }, out: { E: 36.8 } }],
  });

  C({
    id: "pump-eval", eq: ["8.13", "8.18", "8.20", "8.21", "8.22"], sec: "8.7", page: 166, title: "Pumping plant evaluation (procedure)",
    tags: ["pumping plant evaluation", "pump test", "Nebraska criteria", "how much am I wasting on fuel", "performance rating", "energy savings"],
    tables: ["8.6"],
    note: "Follows Examples 8.7 to 8.10: measure lift, discharge pressure, flow and energy use; compare with the Nebraska criteria.",
    inputs: [
      { k: "P", sym: "P", label: "Discharge pressure", dim: "pressure", u: "psi", v: 50 },
      { k: "L", sym: "L", label: "Pumping lift", dim: "length", u: "ft", v: 100 },
      { k: "Q", sym: "Q", label: "Flow rate", dim: "flow", u: "gpm", v: 800 },
      srcIn, pcIn,
      { k: "rate", label: "Measured energy use per hour (gal/hr, kW, or mcf/hr)", v: 4 },
      { k: "price", label: "Energy price per unit, $", v: 3.5 },
      { k: "hrs", label: "Pumping hours per season", dim: "time", u: "hr", v: 1000 }],
    outputs: [
      { k: "TDH", sym: "TDH", label: "Total dynamic head", dim: "length", u: "ft", dp: 0 },
      { k: "whp", sym: "whp", label: "Water horsepower", dim: "power", u: "hp", dp: 1 },
      { k: "perf", label: "Actual performance, whp-hr per energy unit", dp: 2 },
      { k: "PR", sym: "PR", label: "Performance rating", dp: 2 },
      { k: "Ec", label: "Energy per hour at the criteria", dp: 2 },
      { k: "E", sym: "E", label: "Energy per acre-inch, actual", dp: 2 },
      { k: "E1", sym: "E", label: "Energy per acre-inch at the criteria", dp: 2 },
      { k: "cpa", label: "Energy cost per acre-inch, actual", dim: "costvol", u: "$/ac-in", dp: 2 },
      { k: "save", label: "Season savings if brought to criteria, $", dp: 0 }],
    f: v => {
      const TDH = 2.31 * v.P + v.L, whp = v.Q * TDH / 3960, pc = PC(v);
      const perf = whp / v.rate, PR = perf / pc, Ec = whp / pc;
      const E = TDH / (8.75 * pc * PR), E1 = TDH / (8.75 * pc);
      return { TDH, whp, perf, PR, Ec, E, E1, cpa: E * v.price, save: Math.max(0, (v.rate - Ec) * v.hrs * v.price) };
    },
    // the book rounds whp to 44 and PR to 0.88 between steps
    examples: [{ ref: "Examples 8.7 to 8.10", page: 166, in: { P: 50, L: 100, Q: 800, src: DIESEL, rate: 4 },
      out: { TDH: 216, whp: 44, perf: 11, PR: 0.88, Ec: 3.52, E: 2.24, E1: 1.97 } }],
  });

  C({
    id: "pump-match", eq: ["8.13", "8.22"], sec: "8.7", page: 168, title: "Oversized pump and throttling loss (procedure)",
    tags: ["oversized pump", "throttling valve", "impeller trim", "number of stages", "wasted energy", "pump match"],
    tables: ["8.6"], figs: ["8.11"],
    note: "Follows Example 8.11. The book reads the correct impeller diameter from the pump curve (Figure 8.11); this calculator gives the head per stage needed so you can read it from your own pump curve.",
    inputs: [
      { k: "P", sym: "P", label: "Required system pressure", dim: "pressure", u: "psi", v: 40 },
      { k: "L", sym: "L", label: "Pumping lift at design flow", dim: "length", u: "ft", v: 143 },
      { k: "n", sym: "n", label: "Number of pump stages", dim: "count", u: "#", v: 5 },
      { k: "hs", label: "Head per stage at design flow (from pump curve)", dim: "length", u: "ft", v: 57 },
      srcIn, pcIn,
      { k: "PR", sym: "PR", label: "Performance rating", v: 1 }],
    outputs: [
      { k: "TDHd", sym: "TDH", label: "Design TDH", dim: "length", u: "ft", dp: 0 },
      { k: "TDHa", sym: "TDH", label: "TDH the pump produces", dim: "length", u: "ft", dp: 0 },
      { k: "need", label: "Head per stage needed", dim: "length", u: "ft", dp: 0 },
      { k: "nmin", label: "Stages needed at the current head per stage", dp: 0 },
      { k: "xs", label: "Excess head burned in a throttling valve", dim: "length", u: "ft", dp: 0 },
      { k: "xsP", label: "Excess pressure at the valve", dim: "pressure", u: "psi", dp: 0 },
      { k: "Ed", sym: "E", label: "Energy per ac-in at design TDH", dp: 1 },
      { k: "Ea", sym: "E", label: "Energy per ac-in when throttled", dp: 1 },
      { k: "extra", label: "Extra energy used", dim: "pct", u: "%", dp: 0 }],
    f: v => {
      const TDHd = 2.31 * v.P + v.L, TDHa = v.n * v.hs, xs = TDHa - TDHd, pc = PC(v);
      const Ed = TDHd / (8.75 * pc * v.PR), Ea = TDHa / (8.75 * pc * v.PR);
      return { TDHd, TDHa, need: TDHd / v.n, nmin: Math.ceil(TDHd / v.hs - 1e-9), xs, xsP: xs / 2.31, Ed, Ea, extra: (Ea / Ed - 1) * 100 };
    },
    examples: [{ ref: "Example 8.11", page: 168, in: { P: 40, L: 143, n: 5, hs: 57, src: ELEC, PR: 1 },
      out: { TDHd: 235, TDHa: 285, need: 47, xs: 50, xsP: 22, Ed: 30.3, Ea: 36.8, extra: 21 }, tol: 0.03 }],
  });
})(typeof window !== "undefined" ? window : globalThis);
