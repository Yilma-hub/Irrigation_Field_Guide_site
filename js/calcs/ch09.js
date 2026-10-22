/* Chapter 9  Water Supply Systems  (Equations 9.1 to 9.3, Tables 9.1 and 9.2) */
(function (G) {
  const T = G.TAB = G.TAB || {};

  // Table 9.1. Approximate characteristics of groundwater aquifers (adapted from Schwab et al., 1992) (p. 175)
  T["9.1"] = {
    title: "Approximate characteristics of groundwater aquifers",
    cols: ["Aquifer material", "Total porosity (%)", "Specific yield (%)", "Relative permeability"],
    rows: [["Dense limestone", 5, 2, 1], ["Dense shale", 5, 2, 1], ["Sandstone", 15, 8, 700], ["Gravel", 25, 22, 5000],
      ["Sand", 35, 25, 800], ["Clay", 45, 3, 1]],
  };
  // Table 9.2. Range of hydraulic conductivity for various aquifers (adapted from Driscoll, 1986) (p. 175)
  T["9.2"] = {
    title: "Range of hydraulic conductivity values for various types of aquifers (ft/d)",
    cols: ["Aquifer formation or material", "Low (ft/d)", "High (ft/d)"],
    rows: [["Fine to coarse gravel", 1e1, 1e4], ["Fine to coarse sand", 1e-3, 1e2], ["Silt and loess", 1e-4, 1e0],
      ["Glacial till", 1e-8, 1e0], ["Karst limestone", 1e-2, 1e2], ["Shale", 1e-9, 1e-5],
      ["Sandstone, well cemented, unjointed", 1e-6, 1e-4], ["Sandstone, friable", 1e-4, 1e-1],
      ["Unfractured igneous and metamorphic rocks", 1e-9, 1e-6]],
  };

  const C = (s) => { s.ch = 9; s.file = "ch09"; return calc(s); };

  C({
    id: "eq-9.1", eq: ["9.1"], sec: "9.4", page: 179, title: "Well drawdown",
    tags: ["drawdown", "static water level", "pumping water level", "SWL", "PWL", "how far does my well draw down"],
    figs: ["9.7"],
    inputs: [
      { k: "SWL", sym: "SWL", label: "Static water level (depth below surface)", dim: "length", u: "ft", v: 100 },
      { k: "PWL", sym: "PWL", label: "Pumping water level (depth below surface)", dim: "length", u: "ft", v: 120 }],
    outputs: [{ k: "s", sym: "s", label: "Drawdown", dim: "length", u: "ft", dp: 1 }],
    f: v => ({ s: v.PWL - v.SWL }),
    examples: [{ ref: "Example 9.1", page: 179, in: { SWL: 100, PWL: 120 }, out: { s: 20 } }],
  });

  C({
    id: "eq-9.2", eq: ["9.2"], sec: "9.4", page: 179, title: "Well specific capacity",
    tags: ["specific capacity", "gpm per foot", "well productivity", "well test"], figs: ["9.8"],
    inputs: [
      { k: "Q", sym: "Q", label: "Well discharge", dim: "flow", u: "gpm", v: 800 },
      { k: "s", sym: "s", label: "Drawdown", dim: "length", u: "ft", v: 20 }],
    outputs: [{ k: "SC", sym: "SC", label: "Specific capacity", dim: "spcap", u: "gpm/ft", dp: 1 }],
    f: v => ({ SC: v.Q / v.s }),
    examples: [{ ref: "Example 9.1", page: 179, in: { Q: 800, s: 20 }, out: { SC: 40 } }],
  });

  C({
    id: "eq-9.3", eq: ["9.3"], sec: "9.4", page: 179, title: "Drawdown at a new pumping rate",
    tags: ["drawdown", "new flow rate", "pumping level", "specific capacity", "will my pump break suction"], figs: ["9.8"],
    note: "Assumes the well behaves like the straight line in Figure 9.8 (constant specific capacity).",
    inputs: [
      { k: "Q", sym: "Q", label: "New discharge", dim: "flow", u: "gpm", v: 600 },
      { k: "SC", sym: "SC", label: "Specific capacity", dim: "spcap", u: "gpm/ft", v: 40 },
      { k: "SWL", sym: "SWL", label: "Static water level (optional)", dim: "length", u: "ft", v: 100 }],
    outputs: [
      { k: "s", sym: "s", label: "Drawdown", dim: "length", u: "ft", dp: 1 },
      { k: "PWL", sym: "PWL", label: "Pumping water level", dim: "length", u: "ft", dp: 1 }],
    f: v => { const s = v.Q / v.SC; return { s, PWL: v.SWL + s }; },
    examples: [{ ref: "Example 9.1 (600 gpm)", page: 179, in: { Q: 600, SC: 40, SWL: 100 }, out: { s: 15, PWL: 115 } },
               { ref: "Example 9.1 (900 gpm)", page: 179, in: { Q: 900, SC: 40, SWL: 100 }, out: { s: 22.5, PWL: 122.5 } }],
  });

  C({
    id: "well-test", eq: ["9.1", "9.2", "9.3"], sec: "9.4", page: 179, title: "Well test and drawdown prediction (procedure)",
    tags: ["well test", "pumping level at another flow", "specific capacity", "drawdown", "procedure"], figs: ["9.7", "9.8"],
    note: "Follows Example 9.1: one test gives the specific capacity, which predicts drawdown and pumping level at other rates.",
    inputs: [
      { k: "SWL", sym: "SWL", label: "Static water level", dim: "length", u: "ft", v: 100 },
      { k: "PWL", sym: "PWL", label: "Pumping water level during the test", dim: "length", u: "ft", v: 120 },
      { k: "Q", sym: "Q", label: "Discharge during the test", dim: "flow", u: "gpm", v: 800 },
      { k: "Q2", sym: "Q<sub>2</sub>", label: "New discharge to predict", dim: "flow", u: "gpm", v: 900 }],
    outputs: [
      { k: "s", sym: "s", label: "Test drawdown (Eq. 9.1)", dim: "length", u: "ft", dp: 1 },
      { k: "SC", sym: "SC", label: "Specific capacity (Eq. 9.2)", dim: "spcap", u: "gpm/ft", dp: 1 },
      { k: "s2", sym: "s<sub>2</sub>", label: "Predicted drawdown (Eq. 9.3)", dim: "length", u: "ft", dp: 1 },
      { k: "PWL2", sym: "PWL<sub>2</sub>", label: "Predicted pumping water level", dim: "length", u: "ft", dp: 1 }],
    f: v => { const s = v.PWL - v.SWL, SC = v.Q / s, s2 = v.Q2 / SC; return { s, SC, s2, PWL2: v.SWL + s2 }; },
    examples: [{ ref: "Example 9.1", page: 179, in: { SWL: 100, PWL: 120, Q: 800, Q2: 900 }, out: { s: 20, SC: 40, s2: 22.5, PWL2: 122.5 } },
               { ref: "Example 9.1", page: 179, in: { SWL: 100, PWL: 120, Q: 800, Q2: 600 }, out: { s2: 15, PWL2: 115 } }],
  });

  C({
    id: "tab-9.1", eq: [], sec: "9.3", page: 175, title: "Aquifer porosity and specific yield (Table 9.1)",
    tags: ["aquifer", "porosity", "specific yield", "permeability", "how much water can I get from the aquifer", "drainable water"],
    tables: ["9.1"],
    note: "Volume released by lowering the water table = specific yield × area × drop in water table.",
    inputs: [
      { k: "m", label: "Aquifer material", type: "sel", opts: T["9.1"].rows.map((r, i) => [r[0], i]), v: 4 },
      { k: "A", sym: "A", label: "Area (optional)", dim: "area", u: "ac", v: 160 },
      { k: "dh", sym: "Δh", label: "Drop in water table (optional)", dim: "length", u: "ft", v: 1 }],
    outputs: [
      { k: "n", label: "Total porosity", dim: "pct", u: "%", dp: 0 },
      { k: "Sy", label: "Specific yield", dim: "pct", u: "%", dp: 0 },
      { k: "k", label: "Relative permeability", dp: 0 },
      { k: "V", label: "Water released from storage", dim: "volume", u: "ac-ft", dp: 1 }],
    f: v => { const r = T["9.1"].rows[v.m]; return { n: r[1], Sy: r[2], k: r[3], V: r[2] / 100 * v.A * v.dh }; },
    examples: [{ ref: "Table 9.1", page: 175, in: { m: 3, A: 160, dh: 1 }, out: { n: 25, Sy: 22, k: 5000, V: 35.2 } }],
  });

  C({
    id: "tab-9.2", eq: [], sec: "9.3", page: 175, title: "Hydraulic conductivity of aquifers (Table 9.2)",
    tags: ["hydraulic conductivity", "aquifer", "permeability", "gravel", "sand", "glacial till", "karst"],
    tables: ["9.2"],
    inputs: [{ k: "m", label: "Aquifer formation or material", type: "sel", opts: T["9.2"].rows.map((r, i) => [r[0], i]), v: 1 }],
    outputs: [
      { k: "lo", label: "Low", dim: "rate", u: "ft/d", dp: 9 },
      { k: "hi", label: "High", dim: "rate", u: "ft/d", dp: 9 },
      { k: "geo", label: "Geometric middle of the range", dim: "rate", u: "ft/d", dp: 9 }],
    f: v => { const r = T["9.2"].rows[v.m]; return { lo: r[1], hi: r[2], geo: Math.sqrt(r[1] * r[2]) }; },
    examples: [{ ref: "Table 9.2", page: 175, in: { m: 0 }, out: { lo: 10, hi: 10000 } }],
  });
})(typeof window !== "undefined" ? window : globalThis);
