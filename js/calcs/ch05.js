/* Chapter 5  Irrigation System Performance  (Equations 5.1 to 5.21, Tables 5.1 to 5.4) */
(function (G) {
  const T = G.TAB = G.TAB || {};
  const M = G.M;

  // Table 5.1. Relationship between CU and F1 for a 90% adequacy of irrigation (p. 90)
  T["5.1"] = {
    title: "Relationship between CU and F1 for a 90% adequacy of irrigation",
    cols: ["CU (%)", "F1"],
    rows: [
      [70, 0.46], [71, 0.48], [72, 0.49], [73, 0.51], [74, 0.53], [75, 0.55], [76, 0.57], [77, 0.58], [78, 0.60],
      [79, 0.62], [80, 0.64], [81, 0.66], [82, 0.67], [83, 0.69], [84, 0.71], [85, 0.73], [86, 0.75], [87, 0.77],
      [88, 0.78], [89, 0.80], [90, 0.82], [92, 0.86], [94, 0.89], [96, 0.93], [98, 0.96]],
  };
  const F1of = cu => M.interp(T["5.1"].rows, cu);

  // Table 5.2. Conveyance, field, and distribution efficiencies (adapted from Doorenbos and Pruitt, 1977) (p. 93)
  T["5.2"] = {
    title: "Conveyance, field, and distribution efficiencies for various types of systems",
    cols: ["Group", "Characteristics", "Efficiency (%)"],
    rows: [
      ["Conveyance efficiency", "Continuous supply with no substantial change in flow", 90],
      ["Conveyance efficiency", "Rotational supply for projects with 7,000 to 15,000 ac and rotational areas of 150 to 800 ac and effective management", 80],
      ["Conveyance efficiency", "Rotational supply for large (> 25,000 ac) and small (< 2,500 ac) projects with problematic communication and less effective management, based on predetermined delivery schedules", 70],
      ["Conveyance efficiency", "Rotational supply for large (> 25,000 ac) and small (< 2,500 ac) projects with problematic communication and less effective management, based on arranged delivery schedules", 65],
      ["Field canal efficiency", "Irrigated blocks bigger than 50 ac with unlined canals", 80],
      ["Field canal efficiency", "Irrigated blocks bigger than 50 ac with lined canals or pipelines", 90],
      ["Field canal efficiency", "Irrigated blocks smaller than 50 ac with unlined canals", 70],
      ["Field canal efficiency", "Irrigated blocks smaller than 50 ac with lined canals or pipelines", 80],
      ["Field canal efficiency", "Rotational delivery systems with adequate management and communication", 65],
      ["Field canal efficiency", "Rotational delivery systems with sufficient management and communication", 55],
      ["Field canal efficiency", "Rotational delivery systems with insufficient management and communication", 40],
      ["Field canal efficiency", "Rotational delivery systems with poor management and communication", 30]],
  };

  // Table 5.3. Peak daily crop ET vs maximum monthly ET and allowable depletion (USDA-SCS, 1970) (p. 96)
  T["5.3"] = {
    title: "Peak daily crop ET rates as related to maximum monthly ET and the net depth applied per irrigation (allowable depletion)",
    cols: ["Allowable depletion (in)", "5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
    colVals: [5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    rows: [
      [1.0, .20, .24, .26, .28, .31, .33, .35, .37, .40, .42, .44, .46, .49, .51],
      [1.5, .19, .23, .25, .27, .29, .32, .34, .36, .38, .41, .43, .45, .47, .50],
      [2.0, .18, .23, .25, .27, .29, .31, .33, .35, .37, .39, .41, .44, .46, .48],
      [2.5, .18, .22, .24, .26, .28, .30, .32, .34, .36, .39, .41, .43, .45, .47],
      [3.0, .18, .22, .24, .26, .28, .30, .32, .34, .36, .38, .40, .42, .44, .46],
      [3.5, .18, .21, .23, .25, .27, .29, .31, .33, .35, .37, .39, .41, .44, .46],
      [4.0, .17, .21, .23, .25, .27, .29, .31, .33, .35, .37, .39, .41, .43, .45],
      [4.5, .17, .21, .23, .25, .27, .29, .31, .33, .35, .37, .39, .41, .43, .45],
      [5.0, .17, .21, .23, .25, .26, .28, .30, .32, .34, .36, .38, .40, .42, .44],
      [5.5, .17, .21, .22, .24, .26, .28, .30, .32, .34, .36, .38, .40, .42, .44],
      [6.0, .17, .20, .22, .24, .26, .28, .30, .32, .34, .36, .38, .40, .41, .43]],
    notes: "Columns are maximum monthly crop ET (in/mo); values are peak daily ET (in/d). Use only for general estimates when local peak data are not available.",
  };

  // Table 5.4. Typical characteristics of various irrigation systems (p. 100)
  T["5.4"] = {
    title: "Typical characteristics of various irrigation systems",
    cols: ["Group", "System type", "Maximum slope (%)", "Pressure required (psi)", "Labor required (hr/ac/irrig)"],
    rows: [
      ["Surface", "Furrow gated pipe without reuse", "2", "0.5 to 10", "0.5 to 1.0"],
      ["Surface", "Furrow gated pipe with reuse", "2", "0.5 to 10", "0.5 to 1.0"],
      ["Surface", "Furrow siphon tube", "2", "0", "1.0 to 1.5"],
      ["Surface", "Graded border", "2 to 4", "0 to 10", "0.2 to 1.0"],
      ["Surface", "Level basin", "0", "0 to 10", "0.05 to 0.5"],
      ["Sprinkler", "Hand move", "20", "50 to 70", "0.5 to 1.5"],
      ["Sprinkler", "Solid-set", "No limit", "50 to 70", "0.05 to 0.1"],
      ["Sprinkler", "Side roll & towline", "10", "50 to 70", "0.1 to 0.3"],
      ["Sprinkler", "Boom", "5", "60 to 80", "0.2 to 0.5"],
      ["Sprinkler", "Traveler", "5 to 15", "70 to 100", "0.1 to 0.3"],
      ["Sprinkler", "Center pivot", "10 to 20", "20 to 70", "0.05 to 0.15"],
      ["Sprinkler", "Pivot with corner system", "10 to 20", "30 to 70", "0.05 to 0.2"],
      ["Sprinkler", "Linear move", "5 to 8", "20 to 50", "0.1 to 0.3"],
      ["Micro, drip, trickle", "Point source", "No limit", "20 to 50", "0.05 to 0.2"],
      ["Micro, drip, trickle", "Lateral (continuous) source", "No limit", "20 to 50", "0.05 to 0.2"]],
  };

  // Seepage ranges read from the curve in Figure 5.8 (USDA-SCS, 1985) at the material band boundaries.
  // These are graphical readings (approximate); Example 5.6 uses 1.4 ft3/ft2/d for loam, the middle of its band.
  const SEEP = [
    ["Use my own seepage rate", null, null],
    ["Concrete ditch and above ground pipe (new to deteriorated)", 0.2, 0.3],
    ["Cemented gravel, hardpan, impervious clay loam", 0.3, 0.4],
    ["Clay loam 2 to 3 ft over hardpan", 0.4, 0.55],
    ["Clay loam, silt loam, ash loam", 0.55, 0.75],
    ["Very fine sandy loam", 0.75, 0.85],
    ["Gravelly clay loam, gravelly sandy loam, sandy clay loam", 0.85, 1.15],
    ["Loam, sandy loam", 1.15, 1.65],
    ["Sand, gravelly sandy loam", 1.65, 2.15],
    ["Gravelly sand", 2.15, 3.3],
    ["Gravel", 3.3, 5.75]];

  const C = (s) => { s.ch = 5; s.file = "ch05"; return calc(s); };

  // ---------------------------------------------------------------- efficiency and uniformity
  C({
    id: "eq-5.1", eq: ["5.1"], sec: "5.3", page: 83, title: "Application efficiency",
    tags: ["application efficiency", "Ea", "net irrigation", "gross irrigation", "how efficient is my irrigation"],
    inputs: [
      { k: "dn", sym: "d<sub>n</sub>", label: "Net irrigation depth (stored in the root zone)", dim: "length", u: "in", v: 1.5 },
      { k: "da", sym: "d<sub>a</sub>", label: "Gross (applied) irrigation depth", dim: "length", u: "in", v: 2.2 }],
    outputs: [{ k: "Ea", sym: "E<sub>a</sub>", label: "Application efficiency", dim: "pct", u: "%", dp: 1 }],
    f: v => ({ Ea: v.dn / v.da * 100 }),
    examples: [{ ref: "Example 5.2 (net = 1.5 in, applied = 2.2 in)", page: 89, in: { dn: 1.5, da: 2.2 }, out: { Ea: 68 } }],
    figs: ["5.4"],
  });

  C({
    id: "eq-5.2", eq: ["5.2"], sec: "5.3", page: 83, title: "Distribution uniformity (low quarter)",
    tags: ["DU", "distribution uniformity", "low quarter", "how even is my irrigation"],
    inputs: [
      { k: "dLQ", sym: "d<sub>LQ</sub>", label: "Average low-quarter depth infiltrated", dim: "length", u: "in", v: 1.5 },
      { k: "dz", sym: "d<sub>z</sub>", label: "Mean depth infiltrated for all observations", dim: "length", u: "in", v: 2.0 }],
    outputs: [{ k: "DU", sym: "DU", label: "Distribution uniformity", dim: "frac", u: "decimal", dp: 3 }],
    f: v => ({ DU: v.dLQ / v.dz }),
    examples: [{ ref: "Example 5.1", page: 85, in: { dLQ: 1.5, dz: 2.0 }, out: { DU: 0.75 } }],
    note: "Guidelines (p. 86): moved laterals DU 0.7 (CU 80) is the lowest acceptable; furrows DU 0.6; microirrigation at least 0.8.",
  });

  C({
    id: "eq-5.3", eq: ["5.3"], sec: "5.3", page: 84, title: "Christiansen uniformity coefficient (CU) from catch-can depths",
    tags: ["CU", "Christiansen", "uniformity coefficient", "catch can", "sprinkler uniformity"],
    inputs: [
      { k: "d", sym: "d<sub>i</sub>", label: "Depths caught (each value is an equal area)", type: "list",
        v: "1.2, 2.6, 1.8, 2.1, 2.2, 1.7, 2.9, 2.7, 1.6, 2.0, 2.1, 1.7, 1.9, 1.4, 2.4, 2.0, 1.6, 2.3, 1.8, 2.0" }],
    outputs: [
      { k: "n", sym: "n", label: "Number of observations", dim: "count", u: "#", dp: 0 },
      { k: "dz", sym: "d<sub>z</sub>", label: "Mean depth", dim: "length", u: "in", dp: 2 },
      { k: "sdev", sym: "Σ|d<sub>i</sub> − d<sub>z</sub>|", label: "Sum of absolute deviations", dim: "length", u: "in", dp: 2 },
      { k: "CU", sym: "CU", label: "Christiansen uniformity coefficient", dim: "pct", u: "%", dp: 1 }],
    f: v => {
      const d = M.list(v.d), n = d.length, dz = M.mean(d);
      const sdev = M.sum(d.map(x => Math.abs(x - dz)));
      return { n, dz, sdev, CU: 100 * (1 - sdev / (n * dz)) };
    },
    // book rounds 83.5 to 84
    examples: [{ ref: "Example 5.1", page: 85, in: {}, out: { dz: 2.0, sdev: 6.6, CU: 84 } }],
  });

  C({
    id: "eq-5.4-5.5", eq: ["5.4", "5.5"], sec: "5.3", page: 85, title: "Heermann and Hein uniformity (CUH) for a center pivot",
    tags: ["CUH", "Heermann Hein", "center pivot uniformity", "pivot catch can test", "weighted uniformity", "is my pivot uniform"],
    note: "Containers are placed along radial lines, usually 5 to 15 ft apart. Each depth is weighted by its distance from the pivot point. A CUH of 90 is often achieved for pivots.",
    inputs: [
      { k: "d", sym: "d<sub>i</sub>", label: "Depths caught, from the pivot point outward", type: "list", v: "0.95, 1.02, 0.98, 1.05, 0.90, 1.00, 1.08, 0.97, 0.93, 1.01" },
      { k: "S", sym: "S<sub>i</sub>", label: "Distance of each container from the pivot (leave blank to use first distance and spacing)", type: "list", v: "" },
      { k: "S0", sym: "S<sub>1</sub>", label: "Distance to first container (used when list is blank)", dim: "length", u: "ft", v: 100 },
      { k: "ds", sym: "ΔS", label: "Container spacing (used when list is blank)", dim: "length", u: "ft", v: 10 }],
    outputs: [
      { k: "dzs", sym: "d<sub>z</sub><sup>*</sup>", label: "Weighted mean depth", dim: "length", u: "in", dp: 3 },
      { k: "dz", sym: "d<sub>z</sub>", label: "Unweighted mean depth (for comparison)", dim: "length", u: "in", dp: 3 },
      { k: "CUH", sym: "CU<sub>H</sub>", label: "Heermann and Hein uniformity coefficient", dim: "pct", u: "%", dp: 1 }],
    f: v => {
      const d = M.list(v.d);
      let S = M.list(v.S);
      if (S.length !== d.length) S = d.map((_, i) => v.S0 + i * v.ds);
      const sS = M.sum(S), sdS = M.sum(d.map((x, i) => x * S[i]));
      const dzs = sdS / sS;
      const dev = M.sum(d.map((x, i) => Math.abs(x - dzs) * S[i]));
      return { dzs, dz: M.mean(d), CUH: 100 * (1 - dev / sdS) };
    },
    // hand check: equal depths give CUH = 100
    examples: [{ ref: "Check: uniform depths", page: 85, in: { d: "1, 1, 1, 1", S: "", S0: 10, ds: 10 }, out: { dzs: 1, CUH: 100 } },
               { ref: "Check: hand calculation", page: 85, in: { d: "1, 2", S: "10, 30" }, out: { dzs: 1.75, CUH: 100 * (1 - 15 / 70) } }],
  });

  C({
    id: "catch-can", eq: ["5.2", "5.3", "5.8", "5.9", "5.10", "5.11"], sec: "5.3", page: 85,
    title: "Catch-can evaluation: DU, CU, adequacy, deep percolation and ELQ",
    tags: ["catch can test", "sprinkler evaluation", "audit", "uniformity test", "adequacy", "percent of field adequately irrigated", "low quarter"],
    note: "Procedure of Example 5.1, Figure 5.6 and p. 91: each depth represents an equal area. Adequacy is the percent of observations that received the desired depth (SWD) or more. Deep percolation per can is the depth caught above SWD.",
    figs: ["5.6", "5.7"],
    inputs: [
      { k: "d", sym: "d<sub>i</sub>", label: "Depths caught (each value is an equal area)", type: "list",
        v: "1.2, 2.6, 1.8, 2.1, 2.2, 1.7, 2.9, 2.7, 1.6, 2.0, 2.1, 1.7, 1.9, 1.4, 2.4, 2.0, 1.6, 2.3, 1.8, 2.0" },
      { k: "SWD", sym: "SWD", label: "Soil water deficit (desired depth)", dim: "length", u: "in", v: 1.6 },
      { k: "da", sym: "d<sub>a</sub>", label: "Depth applied from the source (0 to skip ELQ)", dim: "length", u: "in", v: 2.2 }],
    outputs: [
      { k: "n", sym: "n", label: "Number of observations", dim: "count", u: "#", dp: 0 },
      { k: "dz", sym: "d<sub>z</sub>", label: "Mean depth", dim: "length", u: "in", dp: 2 },
      { k: "dLQ", sym: "d<sub>LQ</sub>", label: "Low-quarter mean depth", dim: "length", u: "in", dp: 2 },
      { k: "DU", sym: "DU", label: "Distribution uniformity", dim: "frac", u: "decimal", dp: 3 },
      { k: "CU", sym: "CU", label: "Christiansen uniformity coefficient", dim: "pct", u: "%", dp: 1 },
      { k: "adq", label: "Adequacy (area receiving SWD or more)", dim: "pct", u: "%", dp: 0 },
      { k: "dp", sym: "d<sub>p</sub>", label: "Average deep percolation (per can above SWD)", dim: "length", u: "in", dp: 2 },
      { k: "de", sym: "d<sub>e</sub>", label: "Effective depth (Eq. 5.9 or 5.10)", dim: "length", u: "in", dp: 2 },
      { k: "ELQ", sym: "E<sub>LQ</sub>", label: "Application efficiency of the low quarter", dim: "pct", u: "%", dp: 1 }],
    f: v => {
      const d = M.list(v.d), n = d.length, dz = M.mean(d), dLQ = M.lowQuarter(d);
      const sdev = M.sum(d.map(x => Math.abs(x - dz)));
      const adq = 100 * d.filter(x => x >= v.SWD - 1e-9).length / n;
      const dp = M.mean(d.map(x => Math.max(0, x - v.SWD)));
      const de = Math.min(dLQ, v.SWD);
      return { n, dz, dLQ, DU: dLQ / dz, CU: 100 * (1 - sdev / (n * dz)), adq, dp, de, ELQ: v.da > 0 ? de / v.da * 100 : NaN };
    },
    examples: [
      { ref: "Examples 5.1 and 5.2, Figure 5.6", page: 89, in: {}, out: { dz: 2.0, dLQ: 1.5, DU: 0.75, CU: 84, adq: 90, de: 1.5, ELQ: 68 } },
      // p. 91 lists 1.2 in for can 14 (1.4 in caught), which should be 0.2 in; with that fixed the mean is 0.80 in, not the printed 0.85 in
      { ref: "p. 91 per-can deep percolation, SWD = 1.2 in (corrected)", page: 91, in: { SWD: 1.2 }, out: { dp: 0.80, de: 1.2, ELQ: 55 } }],
  });

  // ---------------------------------------------------------------- water balance and ELQ
  C({
    id: "eq-5.6-5.7", eq: ["5.6", "5.7"], sec: "5.3", page: 87, title: "Water balance of an irrigation: depth infiltrated",
    tags: ["water balance", "evaporation and drift", "runoff", "gross depth", "depth infiltrated"],
    inputs: [
      { k: "dg", sym: "d<sub>g</sub>", label: "Gross depth applied", dim: "length", u: "in", v: 2.2 },
      { k: "dr", sym: "d<sub>r</sub>", label: "Depth of runoff", dim: "length", u: "in", v: 0 },
      { k: "dev", sym: "d<sub>ev</sub>", label: "Depth of evaporation and drift", dim: "length", u: "in", v: 0.2 }],
    outputs: [{ k: "dz", sym: "d<sub>z</sub>", label: "Average depth infiltrated", dim: "length", u: "in", dp: 2 }],
    f: v => ({ dz: v.dg - v.dr - v.dev }),
    examples: [{ ref: "Example 5.2", page: 89, in: { dg: 2.2, dr: 0, dev: 0.2 }, out: { dz: 2.0 } }],
    figs: ["5.4"],
  });

  C({
    id: "eq-5.8", eq: ["5.8"], sec: "5.3", page: 87, title: "Low-quarter depth from DU",
    tags: ["dLQ", "low quarter depth", "DU"],
    inputs: [
      { k: "DU", sym: "DU", label: "Distribution uniformity", dim: "frac", u: "decimal", v: 0.75 },
      { k: "dz", sym: "d<sub>z</sub>", label: "Mean depth infiltrated", dim: "length", u: "in", v: 2.0 }],
    outputs: [{ k: "dLQ", sym: "d<sub>LQ</sub>", label: "Average low-quarter depth", dim: "length", u: "in", dp: 2 }],
    f: v => ({ dLQ: v.DU * v.dz }),
    examples: [{ ref: "Example 5.2", page: 89, in: { DU: 0.75, dz: 2.0 }, out: { dLQ: 1.5 } },
               { ref: "Example 5.4", page: 90, in: { DU: 0.8, dz: 1.5 }, out: { dLQ: 1.2 } }],
  });

  C({
    id: "eq-5.9-5.11", eq: ["5.9", "5.10", "5.11"], sec: "5.3", page: 88, title: "Effective depth and low-quarter application efficiency (ELQ)",
    tags: ["ELQ", "effective depth", "application efficiency low quarter", "how much of my water is useful"],
    figs: ["5.7"],
    inputs: [
      { k: "DU", sym: "DU", label: "Distribution uniformity", dim: "frac", u: "decimal", v: 0.75 },
      { k: "dz", sym: "d<sub>z</sub>", label: "Mean depth infiltrated", dim: "length", u: "in", v: 2.0 },
      { k: "SWD", sym: "SWD", label: "Soil water deficit before irrigation", dim: "length", u: "in", v: 1.6 },
      { k: "da", sym: "d<sub>a</sub>", label: "Depth applied from the original source", dim: "length", u: "in", v: 2.2 }],
    outputs: [
      { k: "dLQ", sym: "d<sub>LQ</sub>", label: "Low-quarter depth", dim: "length", u: "in", dp: 2 },
      { k: "de", sym: "d<sub>e</sub>", label: "Effective depth", dim: "length", u: "in", dp: 2 },
      { k: "ELQ", sym: "E<sub>LQ</sub>", label: "Application efficiency of the low quarter", dim: "pct", u: "%", dp: 1 }],
    f: v => { const dLQ = v.DU * v.dz, de = Math.min(dLQ, v.SWD); return { dLQ, de, ELQ: de / v.da * 100 }; },
    examples: [{ ref: "Example 5.2", page: 89, in: { DU: 0.75, dz: 2.0, SWD: 1.6, da: 2.2 }, out: { dLQ: 1.5, de: 1.5, ELQ: 68 } },
               { ref: "Example 5.3", page: 89, in: { DU: 0.75, dz: 2.0, SWD: 1.2, da: 2.2 }, out: { de: 1.2, ELQ: 55 } }],
  });

  C({
    id: "eq-5.12", eq: ["5.12a", "5.12b"], sec: "5.3", page: 89, title: "Depth applied from the source with runoff recovery",
    tags: ["runoff recovery", "tailwater reuse", "return ratio", "runoff ratio", "reuse pit"],
    note: "Closed system: runoff is reapplied on the same field, d<sub>a</sub> = d<sub>g</sub> − d<sub>r</sub> R<sub>t</sub> = d<sub>g</sub>(1 − R<sub>r</sub>R<sub>t</sub>). Open system: runoff is reapplied on a different field.",
    inputs: [
      { k: "sys", label: "Runoff recovery system", type: "sel", opts: [["Closed (same field), Eq. 5.12a", 0], ["Open (different field), Eq. 5.12b", 1]], v: 0 },
      { k: "dg", sym: "d<sub>g</sub>", label: "Gross depth applied (includes reused water)", dim: "length", u: "in", v: 4 },
      { k: "Rr", sym: "R<sub>r</sub>", label: "Runoff ratio (d<sub>r</sub> / d<sub>g</sub>)", dim: "frac", u: "decimal", v: 0.3 },
      { k: "Rt", sym: "R<sub>t</sub>", label: "Return ratio (depth reused / depth of runoff)", dim: "frac", u: "decimal", v: 0.8 }],
    outputs: [
      { k: "dr", sym: "d<sub>r</sub>", label: "Depth of runoff", dim: "length", u: "in", dp: 2 },
      { k: "da", sym: "d<sub>a</sub>", label: "Depth applied from the original source", dim: "length", u: "in", dp: 2 }],
    f: v => ({ dr: v.Rr * v.dg, da: v.sys == 1 ? v.dg / (1 + v.Rr * v.Rt) : v.dg * (1 - v.Rr * v.Rt) }),
    examples: [{ ref: "Check: closed system", page: 89, in: { sys: 0, dg: 4, Rr: 0.3, Rt: 0.8 }, out: { dr: 1.2, da: 3.04 } },
               { ref: "Check: open system", page: 89, in: { sys: 1, dg: 4, Rr: 0.3, Rt: 0.8 }, out: { da: 4 / 1.24 } }],
  });

  C({
    id: "eq-5.13", eq: ["5.13"], sec: "5.3", page: 90, title: "Scheduling coefficient (SC) and run time",
    tags: ["scheduling coefficient", "SC", "turf", "lawn sprinkler run time", "how long should I run my sprinklers"],
    note: "SC is the inverse of DU (90% adequacy goal). Run time to apply a target depth = target depth / application rate × SC.",
    inputs: [
      { k: "dz", sym: "d<sub>z</sub>", label: "Average depth caught", dim: "length", u: "in", v: 1.5 },
      { k: "dLQ", sym: "d<sub>LQ</sub>", label: "Low-quarter average depth", dim: "length", u: "in", v: 1.2 },
      { k: "t", sym: "t", label: "Time the system ran during the test", dim: "time", u: "hr", v: 5 },
      { k: "dt", sym: "d", label: "Target depth to apply (for run time)", dim: "length", u: "in", v: 0.5 },
      { k: "ar", sym: "AR", label: "Average application rate", dim: "rate", u: "in/hr", v: 0.25 }],
    outputs: [
      { k: "SC", sym: "SC", label: "Scheduling coefficient", dim: "none", dp: 2 },
      { k: "tu", label: "Run time that would give the same result with perfect uniformity", dim: "time", u: "hr", dp: 2 },
      { k: "trun", label: "Run time needed for the target depth, adjusted by SC", dim: "time", u: "hr", dp: 2 }],
    f: v => { const SC = v.dz / v.dLQ; return { SC, tu: v.t / SC, trun: v.dt / v.ar * SC }; },
    examples: [{ ref: "Example 5.4", page: 90, in: { dz: 1.5, dLQ: 1.2, t: 5 }, out: { SC: 1.25, tu: 4 } }],
  });

  // ---------------------------------------------------------------- deep percolation and leaching
  C({
    id: "eq-5.14", eq: ["5.14"], sec: "5.3", page: 90, title: "Deep percolation from nonuniformity (90% adequacy)",
    tags: ["deep percolation", "nonuniformity", "F1", "leaching volume"],
    tables: ["5.1"],
    inputs: [
      { k: "dz", sym: "d<sub>z</sub>", label: "Average depth infiltrated", dim: "length", u: "in", v: 2.0 },
      { k: "A", sym: "A", label: "Irrigated area", dim: "area", u: "ac", v: 1 },
      { k: "CU", sym: "CU", label: "Christiansen uniformity (sets F1 from Table 5.1)", dim: "pct", u: "%", v: 84, help: "Table 5.1 covers CU 70 to 98; values outside are held at the end values." }],
    outputs: [
      { k: "F1", sym: "F<sub>1</sub>", label: "Factor from Table 5.1", dim: "none", dp: 3 },
      { k: "Vz", sym: "V<sub>z</sub>", label: "Volume infiltrated", dim: "volume", u: "ac-in", dp: 2 },
      { k: "Vdp1", sym: "V<sub>dp1</sub>", label: "Deep percolation from nonuniformity", dim: "volume", u: "ac-in", dp: 2 }],
    f: v => { const F1 = F1of(v.CU), Vz = v.dz * v.A; return { F1, Vz, Vdp1: Vz * (1 - F1) }; },
    examples: [{ ref: "Example 5.5", page: 91, in: { dz: 2.0, A: 1, CU: 84 }, out: { F1: 0.71, Vdp1: 0.58 } }],
  });

  C({
    id: "eq-5.15", eq: ["5.15"], sec: "5.3", page: 90, title: "Deep percolation from excessive application",
    tags: ["deep percolation", "over irrigation", "excess application"],
    inputs: [
      { k: "dLQ", sym: "d<sub>LQ</sub>", label: "Low-quarter depth infiltrated", dim: "length", u: "in", v: 1.5 },
      { k: "SWD", sym: "SWD", label: "Soil water deficit", dim: "length", u: "in", v: 1.2 },
      { k: "A", sym: "A", label: "Irrigated area", dim: "area", u: "ac", v: 1 }],
    outputs: [{ k: "Vdp2", sym: "V<sub>dp2</sub>", label: "Deep percolation from excessive application", dim: "volume", u: "ac-in", dp: 3 }],
    f: v => ({ Vdp2: v.dLQ > v.SWD ? 0.95 * v.A * (v.dLQ - v.SWD) : 0 }),
    examples: [{ ref: "Example 5.5", page: 91, in: { dLQ: 1.5, SWD: 1.2, A: 1 }, out: { Vdp2: 0.285 } }],
  });

  C({
    id: "eq-5.16-5.17", eq: ["5.16", "5.17"], sec: "5.3", page: 90, title: "Total deep percolation volume and depth",
    tags: ["deep percolation depth", "total deep percolation"],
    inputs: [
      { k: "Vdp1", sym: "V<sub>dp1</sub>", label: "Deep percolation from nonuniformity", dim: "volume", u: "ac-in", v: 0.58 },
      { k: "Vdp2", sym: "V<sub>dp2</sub>", label: "Deep percolation from excessive application", dim: "volume", u: "ac-in", v: 0.29 },
      { k: "A", sym: "A", label: "Irrigated area", dim: "area", u: "ac", v: 1 }],
    outputs: [
      { k: "Vdp", sym: "V<sub>dp</sub>", label: "Total deep percolation", dim: "volume", u: "ac-in", dp: 3 },
      { k: "dp", sym: "d<sub>p</sub>", label: "Depth of deep percolation", dim: "length", u: "in", dp: 3 }],
    f: v => { const Vdp = v.Vdp1 + v.Vdp2; return { Vdp, dp: Vdp / v.A }; },
    examples: [{ ref: "Example 5.5", page: 91, in: { Vdp1: 0.58, Vdp2: 0.29, A: 1 }, out: { Vdp: 0.87, dp: 0.87 } }],
  });

  C({
    id: "eq-5.18", eq: ["5.18"], sec: "5.3", page: 91, title: "Chemical (nitrate) leaching loss",
    tags: ["nitrate leaching", "nitrogen loss", "chemical loss", "lb per acre leached", "how much nitrogen am I losing"],
    inputs: [
      { k: "C", sym: "C", label: "Concentration of the chemical in the leachate", dim: "conc", u: "ppm", v: 20 },
      { k: "dp", sym: "d<sub>p</sub>", label: "Depth of deep percolation", dim: "length", u: "in", v: 0.87 }],
    outputs: [{ k: "Cl", sym: "C<sub>l</sub>", label: "Chemical loss", dim: "massarea", u: "lb/ac", dp: 2 }],
    f: v => ({ Cl: 0.226 * v.C * v.dp }),
    examples: [{ ref: "Example 5.5", page: 91, in: { C: 20, dp: 0.87 }, out: { Cl: 3.9 } }],
  });

  C({
    id: "leaching-procedure", eq: ["5.8", "5.14", "5.15", "5.16", "5.17", "5.18"], sec: "5.3", page: 91,
    title: "Nitrate leached per irrigation (full procedure)",
    tags: ["nitrate leaching per irrigation", "deep percolation procedure", "N loss", "leaching from uniformity test"],
    tables: ["5.1"],
    note: "Procedure of Example 5.5. Assumes 90% adequacy and normally distributed application depths (Table 5.1).",
    inputs: [
      { k: "dz", sym: "d<sub>z</sub>", label: "Average depth infiltrated", dim: "length", u: "in", v: 2.0 },
      { k: "CU", sym: "CU", label: "Christiansen uniformity", dim: "pct", u: "%", v: 84 },
      { k: "DU", sym: "DU", label: "Distribution uniformity", dim: "frac", u: "decimal", v: 0.75 },
      { k: "SWD", sym: "SWD", label: "Soil water deficit before irrigation", dim: "length", u: "in", v: 1.2 },
      { k: "C", sym: "C", label: "Concentration in the leachate (e.g. nitrate-N)", dim: "conc", u: "ppm", v: 20 },
      { k: "A", sym: "A", label: "Irrigated area", dim: "area", u: "ac", v: 1 }],
    outputs: [
      { k: "F1", sym: "F<sub>1</sub>", label: "Factor from Table 5.1", dim: "none", dp: 3 },
      { k: "dLQ", sym: "d<sub>LQ</sub>", label: "Low-quarter depth", dim: "length", u: "in", dp: 2 },
      { k: "Vdp1", sym: "V<sub>dp1</sub>", label: "Deep percolation from nonuniformity", dim: "volume", u: "ac-in", dp: 2 },
      { k: "Vdp2", sym: "V<sub>dp2</sub>", label: "Deep percolation from excessive application", dim: "volume", u: "ac-in", dp: 2 },
      { k: "dp", sym: "d<sub>p</sub>", label: "Depth of deep percolation", dim: "length", u: "in", dp: 2 },
      { k: "Cl", sym: "C<sub>l</sub>", label: "Chemical lost per unit area", dim: "massarea", u: "lb/ac", dp: 2 },
      { k: "Ctot", label: "Chemical lost from the whole area", dim: "mass", u: "lb", dp: 1 }],
    f: v => {
      const F1 = F1of(v.CU), dLQ = v.DU * v.dz;
      const Vdp1 = v.dz * v.A * (1 - F1);
      const Vdp2 = dLQ > v.SWD ? 0.95 * v.A * (dLQ - v.SWD) : 0;
      const dp = (Vdp1 + Vdp2) / v.A, Cl = 0.226 * v.C * dp;
      return { F1, dLQ, Vdp1, Vdp2, dp, Cl, Ctot: Cl * v.A };
    },
    examples: [{ ref: "Example 5.5", page: 91, in: {}, out: { F1: 0.71, dLQ: 1.5, Vdp1: 0.58, Vdp2: 0.29, dp: 0.87, Cl: 3.9 } }],
  });

  // ---------------------------------------------------------------- conveyance
  C({
    id: "eq-5.19", eq: ["5.19"], sec: "5.3", page: 92, title: "Conveyance efficiency",
    tags: ["conveyance efficiency", "canal losses", "ditch efficiency", "delivery efficiency"],
    tables: ["5.2"],
    inputs: [
      { k: "da", sym: "d<sub>a</sub>", label: "Gross depth (or volume) applied to the field", dim: "length", u: "in", v: 2.7 },
      { k: "ds", sym: "d<sub>s</sub>", label: "Depth (or volume) diverted from the source", dim: "length", u: "in", v: 3.0 }],
    outputs: [{ k: "Ec", sym: "E<sub>c</sub>", label: "Conveyance efficiency", dim: "pct", u: "%", dp: 1 }],
    f: v => ({ Ec: v.da / v.ds * 100 }),
    examples: [{ ref: "Check", page: 92, in: { da: 2.7, ds: 3.0 }, out: { Ec: 90 } }],
  });

  C({
    id: "project-efficiency", eq: [], sec: "5.3", page: 92, title: "Distribution and farm efficiency (project components)",
    tags: ["distribution efficiency", "farm efficiency", "field canal efficiency", "project efficiency", "Doorenbos Pruitt"],
    tables: ["5.2"],
    note: "Doorenbos and Pruitt (1977): distribution efficiency E<sub>d</sub> = E<sub>c</sub> × E<sub>b</sub>; farm efficiency E<sub>f</sub> = E<sub>a</sub> × E<sub>b</sub>.",
    inputs: [
      { k: "Ec", sym: "E<sub>c</sub>", label: "Supply conveyance efficiency", dim: "pct", u: "%", v: 80 },
      { k: "Eb", sym: "E<sub>b</sub>", label: "Field canal efficiency", dim: "pct", u: "%", v: 90 },
      { k: "Ea", sym: "E<sub>a</sub>", label: "Field application efficiency", dim: "pct", u: "%", v: 65 }],
    outputs: [
      { k: "Ed", sym: "E<sub>d</sub>", label: "Distribution efficiency", dim: "pct", u: "%", dp: 1 },
      { k: "Ef", sym: "E<sub>f</sub>", label: "Farm efficiency", dim: "pct", u: "%", dp: 1 }],
    f: v => ({ Ed: v.Ec * v.Eb / 100, Ef: v.Ea * v.Eb / 100 }),
    examples: [{ ref: "Check", page: 92, in: { Ec: 80, Eb: 90, Ea: 65 }, out: { Ed: 72, Ef: 58.5 } }],
  });

  C({
    id: "ditch-seepage", eq: [], sec: "5.3", page: 94, title: "Seasonal seepage and vegetation loss from an earthen ditch",
    tags: ["ditch seepage", "canal seepage", "conveyance loss", "ditch loss per year", "phreatophyte", "how much water does my ditch lose"],
    figs: ["5.8"],
    note: "Procedure of Example 5.6 (USDA-SCS, 1985). Seepage rates by material are read from the curve in Figure 5.8 and are approximate; pick the middle of the band or enter your own. Ditch-side vegetation loses 0.5 to 1.0% of flow per mile. Buried pipelines lose 0.01 to 0.15 ft³/ft²/d. The book uses 1 cfs ≈ 1 ac-in/hr.",
    inputs: [
      { k: "mat", label: "Material in the conveyance (Figure 5.8)", type: "sel", opts: SEEP.map((r, i) => [r[0], i]), v: 7 },
      { k: "s", sym: "s", label: "Seepage rate (used when \"own rate\" is selected)", dim: "rate", u: "ft/d", v: 1.4, help: "ft³/ft²/d is the same as ft/d." },
      { k: "P", sym: "P", label: "Wetted area per length of ditch (wetted perimeter)", dim: "length", u: "ft", v: 2.5, help: "ft² per ft of length" },
      { k: "L", sym: "L", label: "Ditch length", dim: "length", u: "ft", v: 1320 },
      { k: "Q", sym: "Q", label: "Flow in the ditch", dim: "flow", u: "cfs", v: 2.5 },
      { k: "days", label: "Days of use per year", dim: "time", u: "d", v: 180 },
      { k: "veg", label: "Vegetation loss per mile of ditch", dim: "pct", u: "%", v: 1 }],
    outputs: [
      { k: "rate", sym: "s", label: "Seepage rate used", dim: "rate", u: "ft/d", dp: 2 },
      { k: "range", label: "Range for this material (ft³/ft²/d)", text: true },
      { k: "seep", label: "Seepage loss", dim: "volume", u: "ac-ft", dp: 1 },
      { k: "vegd", label: "Vegetation loss rate", dim: "flow", u: "ac-in/d", dp: 3 },
      { k: "vegl", label: "Vegetation loss for the season", dim: "volume", u: "ac-ft", dp: 2 },
      { k: "tot", label: "Total conveyance loss for the season", dim: "volume", u: "ac-ft", dp: 1 }],
    f: v => {
      const m = SEEP[v.mat] || SEEP[0];
      const rate = m[1] === null ? v.s : (m[1] + m[2]) / 2;
      const seep = v.P * v.L * rate * v.days / 43560;
      const vegd = v.veg / 100 * v.Q * (v.L / 5280) * 1 * 24; // ac-in/d with 1 cfs = 1 ac-in/hr
      const vegl = vegd * v.days / 12;
      return { rate, range: m[1] === null ? "own value" : m[1] + " to " + m[2], seep, vegd, vegl, tot: seep + vegl };
    },
    // book rounds seepage to 19 and vegetation to 2.3 ac-ft
    examples: [{ ref: "Example 5.6", page: 94, in: { mat: 0, s: 1.4 }, out: { seep: 19, vegd: 0.15, vegl: 2.3, tot: 21.3 }, tol: 0.025 },
               { ref: "Example 5.6 using the loam band", page: 94, in: { mat: 7 }, out: { rate: 1.4, tot: 21.3 }, tol: 0.025 }],
  });

  // ---------------------------------------------------------------- system capacity
  C({
    id: "eq-5.20", eq: ["5.20"], sec: "5.5", page: 95, title: "Gross system capacity from net capacity",
    tags: ["system capacity", "gross capacity", "net capacity", "downtime", "gpm per acre", "how big a well do I need"],
    note: "1 in/d = 18.86 gpm/ac. Switch the units of C<sub>n</sub> and C<sub>g</sub> as needed.",
    inputs: [
      { k: "Cn", sym: "C<sub>n</sub>", label: "Net system capacity", dim: "capacity", u: "gpm/ac", v: 5.7 },
      { k: "ELQ", sym: "E<sub>LQ</sub>", label: "Application efficiency of the low quarter", dim: "pct", u: "%", v: 65 },
      { k: "Dt", sym: "D<sub>t</sub>", label: "System downtime", dim: "pct", u: "%", v: 10 },
      { k: "A", sym: "A", label: "Irrigated area (for system flow rate)", dim: "area", u: "ac", v: 80 }],
    outputs: [
      { k: "Cg", sym: "C<sub>g</sub>", label: "Gross system capacity", dim: "capacity", u: "gpm/ac", dp: 2 },
      { k: "Qg", sym: "Q<sub>g</sub>", label: "Gross system flow rate", dim: "flow", u: "gpm", dp: 0 }],
    f: v => { const Cg = v.Cn / (v.ELQ / 100 * (1 - v.Dt / 100)); return { Cg, Qg: Cg * v.A }; },
    examples: [{ ref: "Example 5.8", page: 99, in: { Cn: 5.7, ELQ: 65, Dt: 10, A: 80 }, out: { Cg: 9.7, Qg: 780 } }],
  });

  C({
    id: "cn-from-flow", eq: [], sec: "5.6", page: 97, title: "Net capacity supplied by a given pumping rate",
    tags: ["net capacity of my well", "what can my pump keep up with", "inches per day from gpm", "system capacity check"],
    note: "From the 500 gpm example on p. 97: C<sub>n</sub> = Q / A × E<sub>LQ</sub> × (1 − D<sub>t</sub>). The book uses 450 gpm ≈ 1 ac-in/hr; this calculator uses the exact 448.8 gpm.",
    figs: ["5.10"],
    inputs: [
      { k: "Q", sym: "Q", label: "System flow rate", dim: "flow", u: "gpm", v: 500 },
      { k: "A", sym: "A", label: "Irrigated area", dim: "area", u: "ac", v: 130 },
      { k: "ELQ", sym: "E<sub>LQ</sub>", label: "Application efficiency of the low quarter", dim: "pct", u: "%", v: 85 },
      { k: "Dt", sym: "D<sub>t</sub>", label: "System downtime", dim: "pct", u: "%", v: 0 }],
    outputs: [
      { k: "Cg", sym: "C<sub>g</sub>", label: "Gross capacity", dim: "capacity", u: "in/d", dp: 3 },
      { k: "Cn", sym: "C<sub>n</sub>", label: "Net capacity", dim: "capacity", u: "in/d", dp: 3 }],
    f: v => {
      const Cg = G.UNITS.convert("capacity", v.Q / v.A, "gpm/ac", "in/d");
      return { Cg, Cn: Cg * v.ELQ / 100 * (1 - v.Dt / 100) };
    },
    examples: [{ ref: "p. 97 (500 gpm on 130 ac)", page: 97, in: { Q: 500, A: 130, ELQ: 85, Dt: 0 }, out: { Cn: 0.17 }, tol: 0.03 }],
  });

  C({
    id: "eq-5.21", eq: ["5.21"], sec: "5.6", page: 98, title: "Farm system capacity with conveyance losses",
    tags: ["farm capacity", "conveyance efficiency", "well discharge needed", "canal losses capacity"],
    tables: ["5.2"],
    inputs: [
      { k: "Qg", sym: "Q<sub>g</sub>", label: "Gross system capacity", dim: "flow", u: "gpm", v: 780 },
      { k: "Ec", sym: "E<sub>c</sub>", label: "Conveyance efficiency", dim: "pct", u: "%", v: 80 }],
    outputs: [{ k: "Qf", sym: "Q<sub>f</sub>", label: "Farm system capacity", dim: "flow", u: "gpm", dp: 0 }],
    f: v => ({ Qf: v.Qg / (v.Ec / 100) }),
    examples: [{ ref: "Example 5.8 Field 1", page: 99, in: { Qg: 780, Ec: 80 }, out: { Qf: 975 } },
               { ref: "Example 5.8 Field 2", page: 99, in: { Qg: 780, Ec: 90 }, out: { Qf: 867 } }],
  });

  C({
    id: "farm-capacity", eq: ["5.20", "5.21"], sec: "5.6", page: 99, title: "Well or diversion capacity for several fields (procedure)",
    tags: ["system capacity design", "well capacity", "farm capacity", "several fields", "canal network"],
    tables: ["5.2", "5.3"], figs: ["5.11", "5.12"],
    note: "Procedure of Example 5.8: gross capacity per field (Eq. 5.20), field flow = C<sub>g</sub> × area, each field's lateral loss (Eq. 5.21), then the main canal loss. The book rounds 0.30 in/d to 5.7 gpm/ac.",
    inputs: [
      { k: "Cn", sym: "C<sub>n</sub>", label: "Net system capacity", dim: "capacity", u: "in/d", v: 0.30 },
      { k: "ELQ", sym: "E<sub>LQ</sub>", label: "Application efficiency of the low quarter", dim: "pct", u: "%", v: 65 },
      { k: "Dt", sym: "D<sub>t</sub>", label: "System downtime", dim: "pct", u: "%", v: 10 },
      { k: "A", sym: "A", label: "Area of each field (ac)", type: "list", v: "80, 80" },
      { k: "Ec", sym: "E<sub>c</sub>", label: "Conveyance efficiency to each field (%)", type: "list", v: "80, 90" },
      { k: "Em", sym: "E<sub>c,main</sub>", label: "Main supply canal conveyance efficiency", dim: "pct", u: "%", v: 90 }],
    outputs: [
      { k: "Cg", sym: "C<sub>g</sub>", label: "Gross system capacity", dim: "capacity", u: "gpm/ac", dp: 2 },
      { k: "fields", label: "Per field", text: true },
      { k: "Qsum", label: "Sum of field deliveries", dim: "flow", u: "gpm", dp: 0 },
      { k: "Qf", sym: "Q<sub>f</sub>", label: "Discharge needed at the source", dim: "flow", u: "gpm", dp: 0 }],
    f: v => {
      const Cn = G.UNITS.convert("capacity", v.Cn, "in/d", "gpm/ac");
      const Cg = Cn / (v.ELQ / 100 * (1 - v.Dt / 100));
      const A = M.list(v.A), E = M.list(v.Ec);
      let Qsum = 0; const txt = [];
      A.forEach((a, i) => {
        const e = E[i] !== undefined ? E[i] : 100;
        const Qg = Cg * a, Qf = Qg / (e / 100);
        Qsum += Qf;
        txt.push(`Field ${i + 1}: Qg = ${Qg.toFixed(0)} gpm, Qf = ${Qf.toFixed(0)} gpm`);
      });
      return { Cg, fields: txt.join("; "), Qsum, Qf: Qsum / (v.Em / 100) };
    },
    // book rounds Cn to 5.7 gpm/ac and Cg to 9.7 gpm/ac and gets 2,047 gpm; exact is about 2,030 gpm
    examples: [{ ref: "Example 5.8", page: 99, in: {}, out: { Cg: 9.7, Qsum: 1842, Qf: 2050 } }],
  });

  // ---------------------------------------------------------------- table lookups
  C({
    id: "tab-5.1", eq: [], sec: "5.3", page: 90, title: "F1 factor from CU (Table 5.1)",
    tags: ["F1", "CU to F1", "90% adequacy", "deep percolation factor"],
    tables: ["5.1"],
    inputs: [{ k: "CU", sym: "CU", label: "Christiansen uniformity", dim: "pct", u: "%", v: 84, help: "Interpolated between table values; held at the end values outside 70 to 98." }],
    outputs: [{ k: "F1", sym: "F<sub>1</sub>", label: "Factor F1", dim: "none", dp: 3 }],
    f: v => ({ F1: F1of(v.CU) }),
    examples: [{ ref: "Table 5.1", page: 90, in: { CU: 84 }, out: { F1: 0.71 } },
               { ref: "Table 5.1 (interpolated)", page: 90, in: { CU: 91 }, out: { F1: 0.84 } }],
  });

  C({
    id: "tab-5.2", eq: [], sec: "5.3", page: 93, title: "Conveyance and field canal efficiencies (Table 5.2)",
    tags: ["conveyance efficiency table", "field canal efficiency", "rotational delivery", "lined canal", "unlined canal"],
    tables: ["5.2"],
    inputs: [{ k: "r", label: "Project or field characteristics", type: "sel", opts: T["5.2"].rows.map((r, i) => [r[0] + ": " + r[1], i]), v: 0 }],
    outputs: [
      { k: "kind", label: "Efficiency type", text: true },
      { k: "E", sym: "E", label: "Efficiency", dim: "pct", u: "%", dp: 0 }],
    f: v => { const r = T["5.2"].rows[v.r]; return { kind: r[0], E: r[2] }; },
    examples: [{ ref: "Table 5.2", page: 93, in: { r: 5 }, out: { E: 90 } }],
  });

  function interp2(tab, x, y) {
    // bilinear interpolation: rows by allowable depletion (col 0), columns by tab.colVals
    const rows = tab.rows, cv = tab.colVals;
    const col = r => cv.map((c, j) => [c, r[j + 1]]);
    const xs = rows.map(r => r[0]);
    if (x <= xs[0]) return M.interp(col(rows[0]), y);
    if (x >= xs[xs.length - 1]) return M.interp(col(rows[rows.length - 1]), y);
    let i = 1; while (x > xs[i]) i++;
    const a = M.interp(col(rows[i - 1]), y), b = M.interp(col(rows[i]), y);
    return a + (b - a) * (x - xs[i - 1]) / (xs[i] - xs[i - 1]);
  }

  C({
    id: "tab-5.3", eq: [], sec: "5.6", page: 96, title: "Peak daily ET from maximum monthly ET (Table 5.3)",
    tags: ["peak ET", "peak daily ET", "design ET", "system capacity", "SCS peak ET"],
    tables: ["5.3"],
    inputs: [
      { k: "AD", sym: "AD", label: "Allowable depletion (net depth per irrigation)", dim: "length", u: "in", v: 3.0, help: "Table covers 1.0 to 6.0 in." },
      { k: "ETm", sym: "ET<sub>mo</sub>", label: "Maximum monthly crop ET (in/mo)", dim: "none", v: 8, help: "Table covers 5 to 12 in/mo." }],
    outputs: [{ k: "ETd", sym: "ET<sub>d</sub>", label: "Peak daily ET", dim: "rate", u: "in/d", dp: 3 }],
    f: v => ({ ETd: interp2(T["5.3"], v.AD, v.ETm) }),
    examples: [{ ref: "Table 5.3", page: 96, in: { AD: 3.0, ETm: 8 }, out: { ETd: 0.30 } },
               { ref: "Table 5.3", page: 96, in: { AD: 1.0, ETm: 12 }, out: { ETd: 0.51 } },
               { ref: "Table 5.3 (interpolated)", page: 96, in: { AD: 1.25, ETm: 5 }, out: { ETd: 0.195 } }],
  });

  C({
    id: "tab-5.4", eq: [], sec: "5.8", page: 100, title: "Typical characteristics of irrigation systems (Table 5.4)",
    tags: ["system selection", "maximum slope", "pressure required", "labor required", "which irrigation system"],
    tables: ["5.4"],
    inputs: [{ k: "r", label: "System type", type: "sel", opts: T["5.4"].rows.map((r, i) => [r[0] + ": " + r[1], i]), v: 10 }],
    outputs: [
      { k: "slope", label: "Maximum slope (%)", text: true },
      { k: "psi", label: "Pressure required (psi)", text: true },
      { k: "labor", label: "Labor required (hr/ac/irrigation)", text: true }],
    f: v => { const r = T["5.4"].rows[v.r]; return { slope: r[2], psi: r[3], labor: r[4] }; },
    examples: [{ ref: "Table 5.4", page: 100, in: { r: 10 }, out: { slope: "10 to 20", psi: "20 to 70", labor: "0.05 to 0.15" } }],
  });
})(typeof window !== "undefined" ? window : globalThis);
