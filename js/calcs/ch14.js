/* Chapter 14  Microirrigation  (Equations 14.1 to 14.9, Tables 14.1 to 14.4) */
(function (G) {
  const T = G.TAB = G.TAB || {};
  const GAL_PER_FT3 = 7.480519;
  // filter screen loading (Eq. 14.2); base unit m/s
  G.UNITS.addDim("filterflux", "Flow per screen area", [
    ["gpm/ft²", 0.003785411784 / 60 / (0.3048 * 0.3048)], ["L/s/m²", 0.001], ["m³/hr/m²", 1 / 3600], ["m/s", 1]]);

  // Table 14.1. Friction loss for small diameter PE pipe (Darcy-Weisbach, e = 0.0005 in) (p. 305)
  T["14.1"] = {
    title: "Friction loss for small diameter PE pipe based upon the Darcy-Weisbach equation for pipe with an e (absolute roughness) = 0.0005 in",
    cols: ["Flow rate, Q (gpm)", "0.5 in (ID 0.622 in)", "0.75 in (ID 0.824 in)", "1.0 in (ID 1.049 in)", "1.5 in (ID 1.61 in)"],
    rows: [
      [0.5, 0.13, 0.03, null, null], [1.0, 0.56, 0.15, null, null], [1.5, 1.13, 0.30, 0.09, null],
      [2.0, 1.86, 0.49, 0.15, null], [2.5, 2.76, 0.72, 0.23, 0.03], [3.0, 3.81, 0.99, 0.31, 0.04],
      [4.0, 6.38, 1.64, 0.51, 0.07], [5.0, 9.55, 2.43, 0.76, 0.10], [6.0, 13.3, 3.37, 1.05, 0.14],
      [7.0, null, 4.45, 1.38, 0.18], [8.0, null, 5.67, 1.76, 0.22], [9.0, null, 7.02, 2.17, 0.28],
      [10, null, null, 2.62, 0.33], [15, null, null, 5.47, 0.68], [20, null, null, 9.26, 1.14],
      [25, null, null, null, 1.71]],
    notes: "Friction loss in psi/100 ft. Nominal sizes 0.5, 0.75, 1.0 and 1.5 in; inside diameters 0.622, 0.824, 1.049 and 1.61 in.",
  };
  const PE_SIZES = [["0.5 in (ID 0.622 in)", 0], ["0.75 in (ID 0.824 in)", 1], ["1.0 in (ID 1.049 in)", 2], ["1.5 in (ID 1.61 in)", 3]];
  // linear interpolation in Table 14.1 for column c; NaN outside the printed range
  function peLoss(Q, c) {
    const pts = T["14.1"].rows.filter(r => r[c + 1] !== null).map(r => [r[0], r[c + 1]]);
    if (Q < pts[0][0] - 1e-9 || Q > pts[pts.length - 1][0] + 1e-9) return NaN;
    return M.interp(pts, Q);
  }

  // Table 14.2. Plugging potential of irrigation water for microirrigation (Bucks et al., 1979) (p. 308)
  T["14.2"] = {
    title: "Plugging potential of irrigation water for microirrigation (Bucks et al., 1979)",
    cols: ["Potential problem", "Unit of measure", "Minor", "Moderate", "Severe"],
    rows: [
      ["Physical: Suspended solids", "ppm", "< 50", "50-100", "> 100"],
      ["Chemical: pH", "-", "< 7", "7-8", "> 8"],
      ["Chemical: Salts", "ppm", "< 500", "500-2000", "> 2000"],
      ["Chemical: Manganese", "ppm", "< 0.1", "0.1-1.5", "> 1.5"],
      ["Chemical: Iron", "ppm", "< 0.1", "0.1-1.5", "> 1.5"],
      ["Chemical: Hydrogen sulfide", "ppm", "< 0.5", "0.5-2.0", "> 2.0"],
      ["Biological: Bacteria populations", "number/ml", "< 10,000", "10,000-50,000", "> 50,000"]],
  };
  const PLUG = [["ss", 50, 100], ["pH", 7, 8], ["salts", 500, 2000], ["mn", 0.1, 1.5], ["fe", 0.1, 1.5], ["h2s", 0.5, 2.0], ["bac", 10000, 50000]];
  const plugClass = (x, lo, hi) => (x < lo ? "Minor" : x <= hi ? "Moderate" : "Severe");

  // Table 14.3. Classification for manufacturing variation, v, of emitters (Solomon, 1979) (p. 313)
  T["14.3"] = {
    title: "Classification for manufacturing variation, v, of emitters (Solomon, 1979)",
    cols: ["Classification rating", "Drip & spray emitters", "Line-source tubing"],
    rows: [
      ["Excellent", "v < 0.05", "v < 0.1"], ["Average", "0.05 < v < 0.07", "0.1 < v < 0.2"],
      ["Marginal", "0.07 < v < 0.11", "-"], ["Poor", "0.11 < v < 0.15", "0.2 < v < 0.3"],
      ["Unacceptable", "0.15 < v", "0.3 < v"]],
  };
  function vClass(v, lineSource) {
    if (lineSource) return v < 0.1 ? "Excellent" : v < 0.2 ? "Average" : v < 0.3 ? "Poor" : "Unacceptable";
    return v < 0.05 ? "Excellent" : v < 0.07 ? "Average" : v < 0.11 ? "Marginal" : v < 0.15 ? "Poor" : "Unacceptable";
  }
  const EMTYPE = [["Drip & spray emitters", 0], ["Line-source tubing", 1]];

  // Table 14.4. Characteristics of various types of emitters (Keller and Bliesner, 1990) (p. 314)
  T["14.4"] = {
    title: "Characteristics of various types of emitters (Keller and Bliesner, 1990)",
    cols: ["Emitter type", "Discharge exponent, x", "Coefficient of manufacturing variation, v", "Flushing ability"],
    rows: [
      ["Orifice: Vortex/orifice", 0.42, 0.07, "None"],
      ["Orifice: Multiple flexible orifices", 0.7, 0.05, "Continuous"],
      ["Orifice: Ball & slotted seat", 0.50, 0.27, "Automatic"],
      ["Orifice: Compensating ball & slotted seat", 0.25, 0.09, "Automatic"],
      ["Orifice: Capped orifice sprayers", 0.56, 0.05, "None"],
      ["Long-Path: Small tube", 0.70, 0.05, "None"],
      ["Long-Path: Spiral path", 0.75, 0.06, "Manual"],
      ["Long-Path: Compensating", 0.40, 0.05, "None"],
      ["Long-Path: Compensating", 0.20, 0.06, "Automatic"],
      ["Long-Path: Tortuous", 0.65, 0.02, "None"],
      ["Short-Path: Groove & flap", 0.33, 0.02, "Automatic"],
      ["Short-Path: Slot & disc", 0.11, 0.10, "Automatic"],
      ["Line-Source: Porous pipe", 1.0, 0.40, "None"],
      ["Line-Source: Twin chamber", 0.61, 0.17, "None"]],
  };
  const emOpts = T["14.4"].rows.map((r, i) => [r[0] + " (x " + r[1] + ", v " + r[2] + ", flushing " + r[3] + ")", i]);

  // Multiple outlet factors F, first outlet one full spacing from inlet (Table 8.3, p. 155), used by Eq. 14.1
  const F83 = [[1, 1.0], [2, 0.634], [3, 0.528], [4, 0.480], [5, 0.451], [6, 0.433], [7, 0.419], [8, 0.410], [9, 0.402],
    [10, 0.396], [11, 0.392], [12, 0.388], [13, 0.384], [14, 0.381], [15, 0.379], [16, 0.377], [17, 0.376], [18, 0.373],
    [19, 0.372], [20, 0.370], [22, 0.368], [24, 0.366], [26, 0.364], [28, 0.363], [30, 0.362], [35, 0.359], [40, 0.357],
    [50, 0.355], [100, 0.350]];
  const outletF = n => (n > 100 ? 0.345 : M.interp(F83, n));

  const C = (s) => { s.ch = 14; s.file = "ch14"; return calc(s); };

  C({
    id: "eq-14.1", eq: ["14.1"], sec: "14.4", page: 305, title: "Friction loss in a drip lateral with uniform outlets",
    tags: ["lateral friction loss", "drip tape pressure loss", "outlet factor", "multiple outlet", "how much pressure do I lose in my drip line"],
    inputs: [
      { k: "F", sym: "F", label: "Multiple outlet reduction factor (Table 8.3; 1.0 with no outlets)", dim: "none", u: "–", v: 0.35, help: "Table 8.3: 0.35 for 100 outlets, 0.365 for 25 outlets." },
      { k: "L", sym: "L", label: "Lateral length (include extra length for emitter barbs)", dim: "length", u: "ft", v: 230 },
      { k: "Pf", sym: "P<sub>f</sub>", label: "Friction loss per length of pipe without outlets (Table 14.1)", dim: "ploss", u: "psi/100 ft", v: 4.7 }],
    outputs: [{ k: "PL", sym: "P<sub>L</sub>", label: "Pressure loss due to friction in the lateral", dim: "pressure", u: "psi", dp: 2 }],
    f: v => ({ PL: v.F * v.L * v.Pf / 100 }),
    examples: [
      { ref: "Example 14.3", page: 306, in: { F: 0.35, L: 230, Pf: 4.7 }, out: { PL: 3.78 } },
      { ref: "Example 14.3", page: 306, in: { F: 0.35, L: 220, Pf: 1.2 }, out: { PL: 0.92 } },
      { ref: "Example 14.4", page: 306, in: { F: 0.365, L: 205, Pf: 4.0 }, out: { PL: 2.99 } },
      { ref: "Example 14.4", page: 306, in: { F: 0.365, L: 205, Pf: 0.51 }, out: { PL: 0.38 } }],
    tables: ["8.3", "14.1"],
  });

  C({
    id: "lateral-design", eq: ["14.1"], sec: "14.4", page: 306, title: "Drip lateral sizing: flow, outlet factor and friction loss",
    tags: ["lateral size", "what size drip tubing", "polyethylene lateral", "microsprayer lateral", "20% pressure variation", "pipe diameter for drip"],
    note: "Follows Examples 14.3 and 14.4: number of outlets = L/s, F from Table 8.3, Q = n q, P<sub>f</sub> interpolated from Table 14.1, then Eq. 14.1. The book's design check is that the loss stays under 20% of the lateral design pressure on a level lateral.",
    inputs: [
      { k: "L", sym: "L", label: "Lateral length", dim: "length", u: "ft", v: 200 },
      { k: "s", sym: "s", label: "Outlet (emitter) spacing", dim: "length", u: "ft", v: 2 },
      { k: "q", sym: "q<sub>e</sub>", label: "Discharge per outlet", dim: "flow", u: "gph", v: 2 },
      { k: "d", label: "PE tubing size (Table 14.1)", type: "sel", opts: PE_SIZES, v: 1 },
      { k: "Lx", sym: "L<sub>x</sub>", label: "Extra length for inserted barbs or in-line emitters", dim: "length", u: "ft", v: 20, help: "Keller and Bliesner (1990) method; the book uses 30 ft for 0.5 in and 20 ft for 0.75 in with 100 barbs, 5 ft with 25 microsprayers." },
      { k: "P", sym: "P", label: "Lateral design pressure (for the 20% check)", dim: "pressure", u: "psi", v: 15 }],
    outputs: [
      { k: "n", sym: "n", label: "Number of outlets", dim: "count", u: "#", dp: 0 },
      { k: "F", sym: "F", label: "Multiple outlet factor (Table 8.3)", dim: "none", u: "–", dp: 3 },
      { k: "Q", sym: "Q", label: "Lateral inlet flow", dim: "flow", u: "gpm", dp: 2 },
      { k: "Pf", sym: "P<sub>f</sub>", label: "Friction loss without outlets (Table 14.1)", dim: "ploss", u: "psi/100 ft", dp: 2 },
      { k: "PL", sym: "P<sub>L</sub>", label: "Lateral friction loss", dim: "pressure", u: "psi", dp: 2 },
      { k: "ok", label: "Check against 20% of design pressure", text: true }],
    f: v => {
      const n = Math.floor(v.L / v.s + 1e-9);
      const F = outletF(n);
      const Q = n * v.q / 60;
      const Pf = peLoss(Q, v.d);
      const PL = F * (v.L + v.Lx) * Pf / 100;
      const ok = !isFinite(Pf) ? "Flow is outside Table 14.1 for this size; try another size"
        : PL <= 0.2 * v.P ? "OK: loss is within 20% of design pressure" : "Too much loss: use a larger size or a shorter lateral";
      return { n, F, Q, Pf, PL, ok };
    },
    examples: [
      { ref: "Example 14.3 (0.5 in)", page: 306, in: { L: 200, s: 2, q: 2, d: 0, Lx: 30 }, out: { n: 100, F: 0.35, Q: 3.3, Pf: 4.7, PL: 3.78 } },
      { ref: "Example 14.3 (0.75 in)", page: 306, in: { L: 200, s: 2, q: 2, d: 1, Lx: 20 }, out: { Pf: 1.2, PL: 0.92 } },
      // book interpolates Pf to 2 significant figures before multiplying
      { ref: "Example 14.4 (1.0 in)", page: 306, in: { L: 200, s: 8, q: 30, d: 2, Lx: 5 }, out: { n: 25, F: 0.365, Q: 12.5, Pf: 4.0, PL: 2.99 }, tol: 0.015 },
      { ref: "Example 14.4 (1.5 in)", page: 306, in: { L: 200, s: 8, q: 30, d: 3, Lx: 5 }, out: { Pf: 0.51, PL: 0.38 } }],
    tables: ["8.3", "14.1"],
  });

  C({
    id: "tab-14.1", eq: [], sec: "14.4", page: 305, title: "Friction loss in small PE pipe (Table 14.1)",
    tags: ["PE pipe friction", "polyethylene friction loss", "psi per 100 ft", "drip tubing friction"],
    tables: ["14.1"],
    inputs: [
      { k: "Q", sym: "Q", label: "Flow rate", dim: "flow", u: "gpm", v: 3.3 },
      { k: "d", label: "Nominal size", type: "sel", opts: PE_SIZES, v: 0 }],
    outputs: [
      { k: "Pf", sym: "P<sub>f</sub>", label: "Friction loss (interpolated)", dim: "ploss", u: "psi/100 ft", dp: 2 },
      { k: "note", label: "Range", text: true }],
    f: v => { const Pf = peLoss(v.Q, v.d); return { Pf, note: isFinite(Pf) ? "Within table range" : "Flow is outside the printed range for this size" }; },
    examples: [{ ref: "Example 14.3", page: 306, in: { Q: 200 / 60, d: 0 }, out: { Pf: 4.7 } }],
  });

  C({
    id: "eq-14.2", eq: ["14.2"], sec: "14.5", page: 310, title: "Screen filter area",
    tags: ["screen filter", "filter size", "filter area", "mesh screen", "how big a filter do I need"],
    inputs: [
      { k: "Q", sym: "Q", label: "Flow rate through the filter", dim: "flow", u: "gpm", v: 300 },
      { k: "Qm", sym: "Q<sub>m</sub>", label: "Maximum permissible flow per unit of open screen area", dim: "filterflux", u: "gpm/ft²", v: 200, help: "The book uses 200 gal/min per ft² of open area." },
      { k: "Oa", sym: "O<sub>a</sub>", label: "Fraction of open area in the screen", dim: "frac", u: "decimal", v: 0.58, help: "0.58 for stainless steel screen with 0.003 in openings (Example 14.5)." }],
    outputs: [{ k: "As", sym: "A<sub>s</sub>", label: "Total screen area needed", dim: "area", u: "ft²", dp: 2 }],
    f: v => ({ As: v.Q / v.Qm / v.Oa }),
    examples: [{ ref: "Example 14.5", page: 311, in: { Q: 300, Qm: 200, Oa: 0.58 }, out: { As: 2.6 } }],
  });

  C({
    id: "eq-14.3", eq: ["14.3"], sec: "14.6", page: 312, title: "Emitter discharge from pressure head",
    tags: ["emitter flow", "drip emitter discharge", "gph at pressure", "emitter equation", "K and x"],
    inputs: [
      { k: "K", sym: "K", label: "Emitter discharge coefficient (gal/hr at 1 ft of head)", dim: "none", u: "–", v: 0.24 },
      { k: "x", sym: "x", label: "Discharge exponent (Table 14.4)", dim: "none", u: "–", v: 0.42 },
      { k: "h", sym: "h", label: "Pressure head at the emitter", dim: "pressure", u: "ft H₂O", v: 34.5 }],
    outputs: [{ k: "q", sym: "q<sub>e</sub>", label: "Emitter discharge", dim: "flow", u: "gph", dp: 3 }],
    f: v => ({ q: v.K * Math.pow(v.h, v.x) }),
    examples: [
      { ref: "Example 14.7 (south end)", page: 314, in: { K: 0.24, x: 0.42, h: 34.5 }, out: { q: 1.06 } },
      { ref: "Example 14.7 (north end)", page: 314, in: { K: 0.24, x: 0.42, h: 24.5 }, out: { q: 0.92 } }],
    tables: ["14.4"], figs: ["14.11"],
  });

  C({
    id: "emitter-dq", eq: ["14.3"], sec: "14.6", page: 314, title: "Emitter flow difference across a field from slope and friction",
    tags: ["uphill drip", "slope", "elevation", "flow difference end of field", "pressure compensating", "is my drip uneven on a slope"],
    note: "Follows Example 14.7: head at the far end h<sub>n</sub> = h<sub>s</sub> + h<sub>e</sub> − h<sub>f</sub>, with h<sub>e</sub> negative going uphill. For a pressure compensating emitter (x near 0) the difference goes to 0 (Example 14.8).",
    inputs: [
      { k: "K", sym: "K", label: "Emitter discharge coefficient", dim: "none", u: "–", v: 0.24 },
      { k: "x", sym: "x", label: "Discharge exponent", dim: "none", u: "–", v: 0.42 },
      { k: "hs", sym: "h<sub>s</sub>", label: "Pressure head at the header end", dim: "pressure", u: "ft H₂O", v: 34.5 },
      { k: "he", sym: "h<sub>e</sub>", label: "Elevation head change to far end (+ downhill, − uphill)", dim: "length", u: "ft", v: -10, min: -1e6 },
      { k: "hf", sym: "h<sub>f</sub>", label: "Friction head loss to far end", dim: "length", u: "ft", v: 0 }],
    outputs: [
      { k: "hn", sym: "h<sub>n</sub>", label: "Pressure head at far end", dim: "length", u: "ft", dp: 1 },
      { k: "qs", sym: "q<sub>es</sub>", label: "Emitter discharge at header end", dim: "flow", u: "gph", dp: 3 },
      { k: "qn", sym: "q<sub>en</sub>", label: "Emitter discharge at far end", dim: "flow", u: "gph", dp: 3 },
      { k: "dq", sym: "Δq", label: "Difference in discharge", dim: "flow", u: "gph", dp: 3 },
      { k: "pct", label: "Difference as percent of header-end flow", dim: "pct", u: "%", dp: 1 }],
    f: v => {
      const hn = v.hs + v.he - v.hf;
      const qs = v.K * Math.pow(v.hs, v.x), qn = v.K * Math.pow(Math.max(hn, 0), v.x);
      return { hn, qs, qn, dq: qs - qn, pct: (qs - qn) / qs * 100 };
    },
    examples: [{ ref: "Example 14.7", page: 314, in: { K: 0.24, x: 0.42, hs: 34.5, he: -10, hf: 0 }, out: { hn: 24.5, qs: 1.06, qn: 0.92, dq: 0.14 }, tol: 0.05 },
               { ref: "Example 14.8", page: 315, in: { K: 1, x: 0, hs: 34.5, he: -10, hf: 0 }, out: { dq: 0 } }],
  });

  C({
    id: "eq-14.4", eq: ["14.4", "14.3"], sec: "14.6", page: 312, title: "Emitter exponent x and coefficient K from two tests",
    tags: ["discharge exponent", "emitter test", "find K and x", "emitter calibration", "two pressure test"],
    inputs: [
      { k: "q1", sym: "q<sub>e1</sub>", label: "Discharge at first head", dim: "flow", u: "gph", v: 0.75 },
      { k: "h1", sym: "h<sub>1</sub>", label: "First pressure head", dim: "pressure", u: "ft H₂O", v: 15 },
      { k: "q2", sym: "q<sub>e2</sub>", label: "Discharge at second head", dim: "flow", u: "gph", v: 1.0 },
      { k: "h2", sym: "h<sub>2</sub>", label: "Second pressure head", dim: "pressure", u: "ft H₂O", v: 30 }],
    outputs: [
      { k: "x", sym: "x", label: "Discharge exponent", dim: "none", u: "–", dp: 3 },
      { k: "K", sym: "K", label: "Discharge coefficient (gal/hr, h in ft)", dim: "none", u: "–", dp: 3 }],
    f: v => { const x = Math.log10(v.q1 / v.q2) / Math.log10(v.h1 / v.h2); return { x, K: v.q2 / Math.pow(v.h2, x) }; },
    // book rounds x to 0.42 before computing K = 1/30^0.42 = 1/4.2
    examples: [{ ref: "Example 14.6", page: 313, in: { q1: 0.75, h1: 15, q2: 1.0, h2: 30 }, out: { x: 0.42, K: 0.24 }, tol: 0.03 }],
    tables: ["14.4"],
  });

  C({
    id: "eq-14.5", eq: ["14.5"], sec: "14.6", page: 313, title: "Coefficient of manufacturing variation from emitter tests",
    tags: ["manufacturing variation", "cv of emitters", "emitter quality", "new emitter test", "is this drip line any good"],
    note: "Test at least 50 new emitters at one constant reference pressure. Table 14.3 gives the rating. About 95% of emitters fall within q<sub>a</sub>(1 ± 2v).",
    inputs: [
      { k: "q", sym: "q", label: "Measured emitter discharges (any one unit)", type: "list", v: "0.98, 1.03, 1.05, 0.95, 1.00, 1.08, 0.93, 1.01, 0.99, 1.02" },
      { k: "type", label: "Product type (Table 14.3)", type: "sel", opts: EMTYPE, v: 0 }],
    outputs: [
      { k: "n", sym: "n", label: "Number of emitters tested", dim: "count", u: "#", dp: 0 },
      { k: "qa", sym: "q<sub>a</sub>", label: "Average discharge", dim: "none", u: "–", dp: 3 },
      { k: "v", sym: "v", label: "Coefficient of manufacturing variation", dim: "none", u: "–", dp: 3 },
      { k: "lo", label: "95% of emitters above", dim: "none", u: "–", dp: 3 },
      { k: "hi", label: "95% of emitters below", dim: "none", u: "–", dp: 3 },
      { k: "cls", label: "Rating (Table 14.3)", text: true }],
    f: v => {
      const q = M.list(v.q), n = q.length, qa = M.mean(q);
      const ss = M.sum(q.map(x => x * x));
      const cv = Math.sqrt((ss - n * qa * qa) / (n - 1)) / qa;
      return { n, qa, v: cv, lo: qa * (1 - 2 * cv), hi: qa * (1 + 2 * cv), cls: vClass(cv, v.type === 1) };
    },
    // text on p. 313: v = 0.06 and qa = 1 gal/hr gives 0.88 to 1.12 gal/hr
    examples: [{ ref: "Text p. 313 (check of 95% range)", page: 313, in: { q: "0.94, 1.00, 1.06" }, out: { qa: 1.0, v: 0.06, lo: 0.88, hi: 1.12, cls: "Average" }, tol: 0.01 }],
    tables: ["14.3"],
  });

  C({
    id: "tab-14.3", eq: [], sec: "14.6", page: 313, title: "Rating of emitter manufacturing variation (Table 14.3)",
    tags: ["emitter rating", "manufacturing variation class", "excellent average marginal poor"],
    tables: ["14.3"],
    inputs: [
      { k: "v", sym: "v", label: "Coefficient of manufacturing variation", dim: "none", u: "–", v: 0.06 },
      { k: "type", label: "Product type", type: "sel", opts: EMTYPE, v: 0 }],
    outputs: [{ k: "cls", label: "Classification", text: true }],
    f: v => ({ cls: vClass(v.v, v.type === 1) }),
    examples: [{ ref: "Table 14.3", page: 313, in: { v: 0.06, type: 0 }, out: { cls: "Average" } },
               { ref: "Table 14.3", page: 313, in: { v: 0.17, type: 1 }, out: { cls: "Average" } }],
  });

  C({
    id: "eq-14.6", eq: ["14.6"], sec: "14.6", page: 315, title: "Field emission uniformity from measured emitter flows",
    tags: ["emission uniformity", "DU drip", "field test", "catch emitters", "low quarter", "how even is my drip system"],
    note: "Catch the flow from emitters spread over the whole system. q<sub>LQ</sub> is the average of the lowest one-fourth of the readings.",
    inputs: [{ k: "q", sym: "q", label: "Measured emitter discharges (any one unit)", type: "list", v: "1.02, 0.98, 0.95, 1.05, 0.88, 0.92, 1.00, 0.97, 1.03, 0.90, 0.99, 1.01" }],
    outputs: [
      { k: "n", sym: "n", label: "Number of readings", dim: "count", u: "#", dp: 0 },
      { k: "qa", sym: "q<sub>a</sub>", label: "Average discharge of all emitters", dim: "none", u: "–", dp: 3 },
      { k: "qlq", sym: "q<sub>LQ</sub>", label: "Average of lowest one-fourth", dim: "none", u: "–", dp: 3 },
      { k: "DU", sym: "DU", label: "Emission uniformity", dim: "pct", u: "%", dp: 1 }],
    f: v => { const q = M.list(v.q); const qa = M.mean(q), qlq = M.lowQuarter(q); return { n: q.length, qa, qlq, DU: qlq / qa * 100 }; },
    figs: [],
  });

  C({
    id: "eq-14.7", eq: ["14.7"], sec: "14.6", page: 315, title: "Design emission uniformity",
    tags: ["design DU", "Karmeli and Keller", "emission uniformity design", "minimum to average flow"],
    inputs: [
      { k: "v", sym: "v", label: "Coefficient of manufacturing variation (Tables 14.3, 14.4)", dim: "none", u: "–", v: 0.06 },
      { k: "n", sym: "n", label: "Number of emitters per plant", dim: "count", u: "#", v: 2 },
      { k: "qm", sym: "q<sub>m</sub>", label: "Minimum emitter discharge (from lowest pressure)", dim: "flow", u: "gph", v: 0.82 },
      { k: "qa", sym: "q<sub>a</sub>", label: "Average emitter discharge", dim: "flow", u: "gph", v: 1.0 }],
    outputs: [{ k: "DU", sym: "DU", label: "Design emission uniformity", dim: "pct", u: "%", dp: 1 }],
    f: v => ({ DU: 100 * (1 - 1.27 * v.v / Math.sqrt(v.n)) * v.qm / v.qa }),
    // the book stops at "100(1.0-0.5)(0.82)" (a misprint for 0.05); the formula with its inputs gives 77.6%
    examples: [{ ref: "Example 14.9", page: 315, in: { v: 0.06, n: 2, qm: 0.82, qa: 1.0 }, out: { DU: 77.6 }, tol: 0.005 }],
    tables: ["14.3", "14.4"],
  });

  C({
    id: "design-du", eq: ["14.3", "14.7"], sec: "14.6", page: 315, title: "Design emission uniformity from pressure variation",
    tags: ["design DU", "drip design", "friction and elevation", "minimum pressure", "uniformity of new drip system"],
    note: "Follows Example 14.9: K from the average head and flow (Eq. 14.3), minimum head h<sub>m</sub> = h<sub>a</sub> + h<sub>e</sub> − h<sub>f</sub>, q<sub>m</sub> = K h<sub>m</sub><sup>x</sup>, then Eq. 14.7.",
    inputs: [
      { k: "emi", label: "Emitter type (fills x and v from Table 14.4)", type: "sel", opts: [["Enter x and v below", -1]].concat(emOpts), v: -1 },
      { k: "x", sym: "x", label: "Discharge exponent", dim: "none", u: "–", v: 0.75 },
      { k: "v", sym: "v", label: "Coefficient of manufacturing variation", dim: "none", u: "–", v: 0.06 },
      { k: "ha", sym: "h<sub>a</sub>", label: "Average (design) pressure head", dim: "pressure", u: "ft H₂O", v: 46.2 },
      { k: "qa", sym: "q<sub>a</sub>", label: "Average design emitter discharge", dim: "flow", u: "gph", v: 1.0 },
      { k: "hf", sym: "Δh<sub>f</sub>", label: "Maximum friction head loss", dim: "length", u: "ft", v: 10 },
      { k: "he", sym: "h<sub>e</sub>", label: "Elevation head change to lowest-pressure point (+ downhill)", dim: "length", u: "ft", v: 0, min: -1e6 },
      { k: "n", sym: "n", label: "Number of emitters per plant", dim: "count", u: "#", v: 2 }],
    outputs: [
      { k: "K", sym: "K", label: "Discharge coefficient", dim: "none", u: "–", dp: 4 },
      { k: "hm", sym: "h<sub>m</sub>", label: "Minimum pressure head", dim: "length", u: "ft", dp: 1 },
      { k: "qm", sym: "q<sub>m</sub>", label: "Minimum emitter discharge", dim: "flow", u: "gph", dp: 3 },
      { k: "DU", sym: "DU", label: "Design emission uniformity", dim: "pct", u: "%", dp: 1 }],
    f: v => {
      let x = v.x, cv = v.v;
      if (v.emi >= 0) { const r = T["14.4"].rows[v.emi]; x = r[1]; cv = r[2]; }
      const K = v.qa / Math.pow(v.ha, x);
      const hm = v.ha + v.he - v.hf;
      const qm = K * Math.pow(hm, x);
      return { K, hm, qm, DU: 100 * (1 - 1.27 * cv / Math.sqrt(v.n)) * qm / v.qa };
    },
    // book rounds K to 0.056 and h_m to 36 ft (giving q_m = 0.82); exact chain gives 0.833 and DU 78.8%
    examples: [{ ref: "Example 14.9", page: 315, in: { x: 0.75, v: 0.06, ha: 46.2, qa: 1.0, hf: 10, he: 0, n: 2 }, out: { K: 0.056, hm: 36, qm: 0.82, DU: 77.6 }, tol: 0.02 },
               { ref: "Example 14.9 (spiral path from Table 14.4)", page: 315, in: { emi: 6, ha: 46.2, qa: 1.0, hf: 10, he: 0, n: 2 }, out: { qm: 0.82 }, tol: 0.02 }],
    tables: ["14.4"],
  });

  C({
    id: "tab-14.4", eq: [], sec: "14.6", page: 314, title: "Emitter characteristics (Table 14.4)",
    tags: ["emitter types", "vortex", "spiral", "pressure compensating", "porous pipe", "flushing", "discharge exponent table"],
    tables: ["14.4", "14.3"],
    inputs: [
      { k: "e", label: "Emitter type", type: "sel", opts: emOpts, v: 0 },
      { k: "dp", sym: "Δh/h", label: "Pressure change to check", dim: "pct", u: "%", v: 10, min: -99, help: "Flow changes by (1 + Δh/h)<sup>x</sup> − 1 from Eq. 14.3." }],
    outputs: [
      { k: "x", sym: "x", label: "Discharge exponent", dim: "none", u: "–", dp: 2 },
      { k: "v", sym: "v", label: "Coefficient of manufacturing variation", dim: "none", u: "–", dp: 2 },
      { k: "fl", label: "Flushing ability", text: true },
      { k: "cls", label: "Manufacturing variation rating (Table 14.3)", text: true },
      { k: "dq", label: "Change in flow for the pressure change", dim: "pct", u: "%", dp: 1 }],
    f: v => {
      const r = T["14.4"].rows[v.e];
      return { x: r[1], v: r[2], fl: r[3], cls: vClass(r[2], r[0].startsWith("Line-Source")), dq: (Math.pow(1 + v.dp / 100, r[1]) - 1) * 100 };
    },
    examples: [{ ref: "Table 14.4", page: 314, in: { e: 6 }, out: { x: 0.75, v: 0.06, fl: "Manual" } }],
  });

  C({
    id: "tab-14.2", eq: [], sec: "14.5", page: 308, title: "Plugging potential of irrigation water (Table 14.2)",
    tags: ["clogging", "plugging", "iron", "manganese", "hydrogen sulfide", "bacteria", "water quality for drip", "will my water plug emitters"],
    tables: ["14.2"],
    inputs: [
      { k: "ss", label: "Suspended solids", dim: "conc", u: "ppm", v: 30 },
      { k: "pH", label: "pH", dim: "none", u: "–", v: 7.5 },
      { k: "salts", label: "Salts (dissolved solids)", dim: "conc", u: "ppm", v: 600 },
      { k: "mn", label: "Manganese", dim: "conc", u: "ppm", v: 0.05 },
      { k: "fe", label: "Iron", dim: "conc", u: "ppm", v: 0.2 },
      { k: "h2s", label: "Hydrogen sulfide", dim: "conc", u: "ppm", v: 0.2 },
      { k: "bac", label: "Bacteria population (number/ml)", dim: "count", u: "#", v: 5000 }],
    outputs: [
      { k: "r_ss", label: "Suspended solids", text: true }, { k: "r_pH", label: "pH", text: true },
      { k: "r_salts", label: "Salts", text: true }, { k: "r_mn", label: "Manganese", text: true },
      { k: "r_fe", label: "Iron", text: true }, { k: "r_h2s", label: "Hydrogen sulfide", text: true },
      { k: "r_bac", label: "Bacteria", text: true }, { k: "worst", label: "Overall (worst factor)", text: true }],
    f: v => {
      const o = {}; const rank = { Minor: 0, Moderate: 1, Severe: 2 }; let w = "Minor";
      for (const [k, lo, hi] of PLUG) { const c = plugClass(v[k], lo, hi); o["r_" + k] = c; if (rank[c] > rank[w]) w = c; }
      o.worst = w; return o;
    },
    examples: [{ ref: "Table 14.2", page: 308, in: { ss: 120, pH: 7.5, salts: 400, mn: 0.05, fe: 0.2, h2s: 0.2, bac: 5000 }, out: { r_ss: "Severe", r_pH: "Moderate", r_salts: "Minor", r_fe: "Moderate", worst: "Severe" } }],
  });

  C({
    id: "eq-14.8", eq: ["14.8"], sec: "14.7", page: 316, title: "Gross irrigation requirement for microirrigation",
    tags: ["gross irrigation requirement", "how much water to apply drip", "water balance", "effective rainfall"],
    inputs: [
      { k: "ET", sym: "ET", label: "Evapotranspiration", dim: "length", u: "in", v: 0.25 },
      { k: "dp", sym: "d<sub>p</sub>", label: "Deep percolation", dim: "length", u: "in", v: 0.02 },
      { k: "dr", sym: "d<sub>r</sub>", label: "Runoff", dim: "length", u: "in", v: 0 },
      { k: "Pe", sym: "P<sub>e</sub>", label: "Effective precipitation", dim: "length", u: "in", v: 0 },
      { k: "dS", sym: "ΔS", label: "Soil water drawn from storage during the period (enter as a positive number; negative if storage is refilled)", dim: "length", u: "in", v: 0, min: -1e6 }],
    outputs: [{ k: "dg", sym: "d<sub>g</sub>", label: "Gross irrigation requirement", dim: "length", u: "in", dp: 3 }],
    f: v => ({ dg: v.ET + v.dp + v.dr - v.Pe - v.dS }),
  });

  C({
    id: "eq-14.9", eq: ["14.9"], sec: "14.7", page: 317, title: "Number of emitters needed (and area per emitter)",
    tags: ["how many emitters", "emitters per acre", "area per emitter", "emitter count"],
    inputs: [
      { k: "dg", sym: "d<sub>g</sub>", label: "Gross depth of irrigation required", dim: "length", u: "in", v: 0.27 },
      { k: "A", sym: "A", label: "Irrigated area", dim: "area", u: "ft²", v: 43560 },
      { k: "qe", sym: "q<sub>e</sub>", label: "Emitter discharge", dim: "flow", u: "gph", v: 2 },
      { k: "t", sym: "t", label: "Application time", dim: "time", u: "hr", v: 1 }],
    outputs: [
      { k: "n", sym: "n", label: "Number of emitters", dim: "count", u: "#", dp: 0 },
      { k: "Ae", sym: "A/n", label: "Area irrigated by each emitter", dim: "area", u: "ft²", dp: 1 }],
    f: v => { const n = v.dg / 12 * v.A * GAL_PER_FT3 / (v.qe * v.t); return { n, Ae: v.A / n }; },
    // book lists t = 24 hr but its arithmetic uses 1 hr, giving 12 ft² per emitter
    examples: [{ ref: "Example 14.10", page: 317, in: { dg: 0.27, A: 43560, qe: 2, t: 1 }, out: { Ae: 12 }, tol: 0.02 }],
  });

  C({
    id: "drip-runtime", eq: ["14.8", "14.9"], sec: "14.7", page: 317, title: "Drip run time per irrigation",
    tags: ["how long do I run my drip", "drip run time", "hours to run drip", "drip schedule", "application rate drip", "gallons per plant"],
    note: "Gross depth from Eq. 14.8, then Eq. 14.9 solved for time: t = d<sub>g</sub> A / (n q<sub>e</sub>), with A the area served by n emitters (emitter spacing × lateral spacing per emitter).",
    inputs: [
      { k: "ET", sym: "ET", label: "Crop ET since last irrigation", dim: "length", u: "in", v: 0.30 },
      { k: "Pe", sym: "P<sub>e</sub>", label: "Effective precipitation", dim: "length", u: "in", v: 0 },
      { k: "dS", sym: "ΔS", label: "Soil water you allow to be drawn down (− if refilling a deficit)", dim: "length", u: "in", v: 0, min: -1e6 },
      { k: "dp", sym: "d<sub>p</sub>", label: "Allowance for deep percolation", dim: "length", u: "in", v: 0.03 },
      { k: "dr", sym: "d<sub>r</sub>", label: "Allowance for runoff", dim: "length", u: "in", v: 0 },
      { k: "Se", sym: "S<sub>e</sub>", label: "Emitter spacing along the lateral", dim: "length", u: "in", v: 12 },
      { k: "Sl", sym: "S<sub>l</sub>", label: "Lateral spacing (area each lateral serves)", dim: "length", u: "in", v: 60 },
      { k: "qe", sym: "q<sub>e</sub>", label: "Emitter discharge", dim: "flow", u: "gph", v: 0.24 }],
    outputs: [
      { k: "dg", sym: "d<sub>g</sub>", label: "Gross irrigation requirement", dim: "length", u: "in", dp: 3 },
      { k: "rate", label: "Application rate over the field", dim: "rate", u: "in/hr", dp: 4 },
      { k: "t", sym: "t", label: "Run time", dim: "time", u: "hr", dp: 2 },
      { k: "vol", label: "Water per emitter", dim: "volume", u: "gal", dp: 2 },
      { k: "gpa", label: "Water per acre", dim: "volume", u: "gal", dp: 0 }],
    f: v => {
      const dg = v.ET + v.dp + v.dr - v.Pe - v.dS;
      const A = v.Se * v.Sl / 144; // ft² per emitter
      const rate = v.qe / GAL_PER_FT3 / A * 12; // in/hr
      const t = dg > 0 ? dg / rate : 0;
      return { dg, rate, t, vol: v.qe * t, gpa: Math.max(dg, 0) / 12 * 43560 * GAL_PER_FT3 };
    },
    // Example 14.10 reversed: 2 gal/hr emitter serving 12 ft², 0.27 in needs about 1 hr
    examples: [{ ref: "Example 14.10 (reversed)", page: 317, in: { ET: 0.27, Pe: 0, dS: 0, dp: 0, dr: 0, Se: 12, Sl: 144, qe: 2 }, out: { dg: 0.27, t: 1.0 }, tol: 0.02 }],
  });
})(typeof window !== "undefined" ? window : globalThis);
