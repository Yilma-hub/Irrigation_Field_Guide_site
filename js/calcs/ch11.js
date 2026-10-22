/* Chapter 11  Sprinklers  (Equations 11.1 to 11.16, Tables 11.1 to 11.6) */
(function (G) {
  const T = G.TAB = G.TAB || {};
  const P11 = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
  const _ = null;
  // Table 11.1. Discharge (gpm) for straight bore nozzles (p. 214)
  T["11.1"] = {
    title: "Discharge (gpm) for straight bore nozzles of various sizes operating at a range of pressures",
    cols: ["Nozzle size (in)", "64ths in"].concat(P11.map(p => p + " psi")),
    rows: [
      ["3/32", 6, 1.2, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, _, _, _, _, _, _, _, _, _],
      ["7/64", 7, 1.7, 1.9, 2.0, 2.2, 2.3, 2.4, 2.6, _, _, _, _, _, _, _, _, _],
      ["1/8", 8, 2.2, 2.5, 2.7, 2.9, 3.0, 3.2, 3.4, 3.5, 3.6, 3.8, 3.9, 4.0, _, _, _, _],
      ["9/64", 9, 2.8, 3.1, 3.4, 3.6, 3.8, 4.0, 4.2, 4.4, 4.6, 4.8, 5.0, 5.1, _, _, _, _],
      ["5/32", 10, 3.5, 3.9, 4.2, 4.5, 4.7, 5.0, 5.2, 5.5, 5.7, 5.9, 6.1, 6.3, _, _, _, _],
      ["11/64", 11, 4.3, 4.7, 5.1, 5.4, 5.7, 6.0, 6.3, 6.6, 6.9, 7.2, 7.4, 7.6, _, _, _, _],
      ["3/16", 12, 5.1, 5.6, 6.0, 6.4, 6.8, 7.2, 7.5, 7.9, 8.2, 8.5, 8.8, 9.1, _, _, _, _],
      ["13/64", 13, 6.0, 6.5, 7.1, 7.6, 8.0, 8.4, 8.9, 9.2, 9.6, 10.0, 10.3, 10.7, _, _, _, _],
      ["7/32", 14, 6.9, 7.6, 8.2, 8.8, 9.3, 9.8, 10.3, 10.7, 11.2, 11.6, 12.0, 12.4, _, _, _, _],
      ["15/64", 15, 7.9, 8.7, 9.4, 10.1, 10.7, 11.2, 11.8, 12.3, 12.8, 13.3, 13.8, 14.2, _, _, _, _],
      ["1/4", 16, 9.0, 9.9, 10.7, 11.4, 12.1, 12.8, 13.4, 14.0, 14.6, 15.1, 15.7, 16.2, _, _, _, _],
      ["17/64", 17, 10.0, 11.2, 12.1, 12.9, 13.7, 14.4, 15.1, 15.8, 16.5, 17.1, 17.7, 18.3, _, _, _, _],
      ["9/32", 18, 11.0, 12.5, 13.5, 14.5, 15.4, 16.2, 17.0, 17.7, 18.5, 19.2, 19.8, 20.5, _, _, _, _],
      ["5/16", 20, 14.0, 15.5, 16.7, 17.9, 19.0, 20.0, 21.0, 21.9, 22.8, 23.6, 24.5, 25.3, _, _, _, _],
      ["11/32", 22, 17.0, 19, 20, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 32, 33, 34],
      ["3/8", 24, 20.0, 22, 24, 26, 27, 29, 30, 32, 33, 34, 35, 36, 38, 39, 40, 41],
      ["13/32", 26, 23.0, 26, 28, 30, 32, 34, 35, 37, 38, 40, 41, 43, 44, 45, 47, 48],
      ["7/16", 28, 27.0, 30, 33, 35, 37, 39, 41, 43, 45, 46, 48, 50, 51, 53, 54, 55],
      ["15/32", 30, 31.0, 35, 38, 40, 43, 45, 47, 49, 51, 53, 55, 57, 59, 60, 62, 64],
      ["1/2", 32, 33.0, 37, 40, 43, 45, 48, 50, 52, 54, 57, 58, 60, 62, 64, 66, 68],
      ["17/32", 34, 38.0, 42, 45, 48, 51, 54, 57, 59, 62, 64, 66, 68, 70, 72, 74, 76],
      ["9/16", 36, 42.0, 47, 51, 54, 57, 60, 64, 66, 69, 72, 74, 76, 79, 81, 83, 86],
      ["5/8", 40, 52.0, 58, 62, 67, 71, 75, 78, 82, 85, 88, 92, 94, 97, 100, 103, 105],
      ["11/16", 44, 63.0, 70, 76, 81, 84, 90, 95, 99, 103, 106, 110, 114, 117, 121, 124, 127]],
    notes: "Discharge for pressures between those listed can be found by interpolation. A sprinkler with two nozzles discharges the sum of both.",
  };
  // Table 11.2. Diameter of coverage (ft) for impact sprinklers with straight bore nozzles (p. 215)
  T["11.2"] = {
    title: "Diameter of coverage (ft) for impact sprinklers with straight bore nozzles",
    cols: ["Nozzle size (in)", "64ths in"].concat(P11.map(p => p + " psi")),
    rows: [
      ["3/32", 6, 64, 66, 68, 69, 70, 71, 72, _, _, _, _, _, _, _, _, _],
      ["7/64", 7, 65, 67, 69, 70, 71, 72, 73, _, _, _, _, _, _, _, _, _],
      ["1/8", 8, 78, 79, 80, 81, 82, 83, 84, 85, 86, 86, 87, 87, _, _, _, _],
      ["9/64", 9, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, _, _, _, _],
      ["5/32", 10, 82, 85, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, _, _, _, _],
      ["11/64", 11, 83, 88, 90, 92, 93, 95, 96, 97, 98, 99, 100, 101, _, _, _, _],
      ["3/16", 12, 85, 91, 94, 96, 98, 100, 101, 102, 103, 104, 105, 106, _, _, _, _],
      ["13/64", 13, 91, 97, 100, 103, 105, 107, 109, 111, 113, 114, 116, 117, _, _, _, _],
      ["7/32", 14, 92, 99, 102, 105, 108, 110, 113, 115, 117, 118, 120, 122, _, _, _, _],
      ["15/64", 15, 93, 100, 104, 107, 110, 112, 115, 117, 119, 121, 123, 125, _, _, _, _],
      ["1/4", 16, 94, 102, 105, 109, 112, 115, 118, 120, 122, 124, 127, 129, _, _, _, _],
      ["17/64", 17, 95, 103, 107, 110, 114, 117, 119, 122, 125, 127, 129, 131, _, _, _, _],
      ["9/32", 18, 96, 104, 108, 112, 116, 119, 122, 125, 127, 130, 132, 134, _, _, _, _],
      ["5/16", 20, 121, 124, 127, 130, 133, 136, 140, 143, 145, 147, 149, 151, _, _, _, _],
      ["11/32", 22, 122, 128, 134, 138, 142, 146, 150, 154, 158, 162, 164, 166, 170, 172, 174, 176],
      ["3/8", 24, 124, 130, 136, 142, 146, 150, 154, 158, 162, 166, 168, 172, 174, 178, 180, 182],
      ["13/32", 26, 128, 136, 144, 150, 154, 158, 162, 166, 168, 172, 174, 178, 180, 184, 186, 188],
      ["7/16", 28, 132, 138, 158, 154, 158, 162, 166, 172, 174, 178, 180, 184, 186, 190, 192, 194],
      ["15/32", 30, 132, 144, 154, 160, 164, 168, 172, 176, 180, 182, 186, 188, 192, 194, 196, 198],
      ["1/2", 32, 132, 146, 156, 166, 170, 174, 178, 182, 186, 188, 192, 194, 198, 200, 202, 204],
      ["17/32", 34, 132, 146, 158, 166, 176, 180, 184, 188, 192, 196, 198, 202, 204, 208, 210, 212],
      ["9/16", 36, 132, 146, 158, 172, 180, 188, 192, 194, 198, 202, 204, 208, 210, 212, 216, 218],
      ["5/8", 40, 132, 146, 158, 172, 184, 190, 198, 202, 204, 208, 210, 214, 216, 220, 222, 224],
      ["11/16", 44, 132, 146, 158, 172, 184, 194, 200, 208, 212, 216, 218, 220, 224, 226, 230, 232]],
    notes: "For a brass impact sprinkler where the exit angle of the range nozzle is 23° above the horizontal. The 35 psi value for 7/16 in (158) is printed as in the book.",
  };
  // Table 11.3. Maximum spacing of sprinklers (p. 218), percent of diameter of coverage
  T["11.3"] = {
    title: "Maximum spacing of sprinklers (percent of diameter of coverage)",
    cols: ["Pattern", "Average wind speed (mph)", "Between sprinklers on the lateral (%)", "Between laterals along the mainline (%)"],
    rows: [["Rectangular", "0-3", 50, 60], ["Rectangular", "4-7", 45, 60], ["Rectangular", "8-12", 40, 60],
           ["Square", "0-3", 55, null], ["Square", "4-7", 50, null], ["Square", "8-12", 45, null],
           ["Equilateral triangle", "0-3", 60, null], ["Equilateral triangle", "4-7", 55, null], ["Equilateral triangle", "8-12", 50, null]],
    notes: "For an equilateral triangle pattern, the spacing between laterals is 0.866 × sprinkler spacing.",
  };
  // Table 11.4. Maximum recommended application rates (in/hr) (p. 219)
  T["11.4"] = {
    title: "Maximum recommended water application rates for soils (in/hr)",
    cols: ["Cover", "Slope (%)", "Coarse low", "Coarse high", "Medium low", "Medium high", "Fine low", "Fine high"],
    rows: [
      ["Soil surface not protected", "0-5", 0.50, 0.75, 0.25, 0.50, 0.10, 0.25],
      ["Soil surface not protected", "6-8", 0.40, 0.60, 0.20, 0.40, 0.08, 0.20],
      ["Soil surface not protected", "9-12", 0.30, 0.45, 0.15, 0.30, 0.06, 0.15],
      ["Soil surface not protected", "13-20", 0.20, 0.30, 0.10, 0.20, 0.04, 0.10],
      ["Soil surface not protected", "> 20", 0.10, 0.20, 0.05, 0.10, 0.02, 0.05],
      ["Turfgrass or heavy residue cover", "0-5", 0.85, 1.30, 0.50, 0.95, 0.15, 0.35],
      ["Turfgrass or heavy residue cover", "6-8", 0.70, 1.00, 0.40, 0.75, 0.10, 0.25],
      ["Turfgrass or heavy residue cover", "9-12", 0.50, 0.75, 0.30, 0.55, 0.10, 0.20],
      ["Turfgrass or heavy residue cover", "13-20", 0.35, 0.50, 0.20, 0.40, 0.05, 0.15],
      ["Turfgrass or heavy residue cover", "> 20", 0.15, 0.35, 0.10, 0.20, 0.03, 0.05]],
    notes: "Coarse: sands, fine sands, loamy fine sands. Medium: sandy loams, fine sandy loams, silt loams. Fine: silty clay loams, clay loams, clayey soils. Based on recommendations of the Rain Bird Corporation and Pair et al., 1983.",
  };
  // Table 11.5. Sprinkling rate (in/hr) for frost protection (p. 229)
  T["11.5"] = {
    title: "Sprinkling rate (in/hr) necessary for frost protection",
    cols: ["Dry leaf temperature (°F)", "Wind 0-1 mph", "2-4 mph", "5-8 mph", "10-14 mph", "18-22 mph"],
    rows: [[27, 0.1, 0.1, 0.1, 0.1, 0.2], [26, 0.1, 0.1, 0.1, 0.2, 0.4], [24, 0.1, 0.2, 0.3, 0.4, 0.8],
           [22, 0.1, 0.2, 0.5, 0.6, _], [20, 0.2, 0.3, 0.6, 0.8, _], [18, 0.2, 0.4, 0.7, _, _],
           [15, 0.3, 0.5, 0.9, _, _], [11, 0.3, 0.7, _, _, _]],
    notes: "Adapted from Gerber and Harrison, 1964. Dry leaf temperature is the expected minimum temperature of an unprotected leaf, 1°F below air temperature on nights with light wind to 3 to 4°F below on very calm nights. Rates are a first approximation for design and planning, not for managing an actual system.",
  };
  // Table 11.6. Temperatures to start and stop overtree frost protection (p. 230)
  T["11.6"] = {
    title: "Temperatures to start and stop overtree frost protection",
    cols: ["Critical temperature (°F)", "Dewpoint low (°F)", "Dewpoint high (°F)", "Minimum turn-on or turn-off air temperature (°F)"],
    rows: [
      [32, 3, 10, 45], [32, 10, 16, 43], [32, 16, 21, 41], [32, 21, 24, 39], [32, 24, 28, 37], [32, 28, 31, 35], [32, 31, 32, 33],
      [30, 0, 9, 42], [30, 9, 15, 41], [30, 15, 20, 38], [30, 20, 24, 36], [30, 24, 30, 32],
      [28, 0, 8, 39], [28, 8, 14, 37], [28, 14, 19, 35], [28, 19, 23, 33], [28, 23, 27, 31], [28, 27, 28, 29],
      [26, 0, 10, 35], [26, 10, 16, 33], [26, 16, 20, 31], [26, 20, 24, 29], [26, 24, 25, 27]],
    notes: "Adapted from Washington State Irrigation Guide, 1985 (apple trees). Absolute minimum temperature; turn the system on or off 2 to 3°F higher than indicated.",
  };

  const nozOpts = T["11.1"].rows.map((r, i) => [r[0] + " in (" + r[1] + "/64)", i]);
  // interpolate along pressure in one row of Table 11.1 or 11.2; null beyond the tabulated range
  function byP(tab, i, P) {
    const pts = [];
    T[tab].rows[i].slice(2).forEach((y, j) => { if (y !== null) pts.push([P11[j], y]); });
    if (P < pts[0][0] - 1e-9 || P > pts[pts.length - 1][0] + 1e-9) return NaN;
    return M.interp(pts, P);
  }
  const windCls = w => (w <= 3 ? 0 : w <= 7 ? 1 : w <= 12 ? 2 : -1);
  const C = (s) => { s.ch = 11; s.file = "ch11"; return calc(s); };

  C({
    id: "eq-11.1", eq: ["11.1"], sec: "11.3", page: 213, title: "Sprinkler nozzle discharge",
    tags: ["nozzle discharge", "gpm per sprinkler", "orifice", "how much does my sprinkler put out"],
    inputs: [
      { k: "Cd", sym: "C<sub>d</sub>", label: "Discharge coefficient (about 0.96)", dim: "none", v: 0.96 },
      { k: "D", sym: "D", label: "Inside diameter of the nozzle orifice", dim: "length", u: "in", v: 0.15625, help: "5/32 in = 0.15625 in; 3/16 in = 0.1875 in" },
      { k: "P", sym: "P", label: "Pressure at the sprinkler inlet", dim: "pressure", u: "psi", v: 50 }],
    outputs: [{ k: "qs", sym: "q<sub>s</sub>", label: "Nozzle discharge", dim: "flow", u: "gpm", dp: 2 }],
    f: v => ({ qs: 29.82 * v.Cd * v.D * v.D * Math.sqrt(v.P) }),
    tables: ["11.1"],
    // compared with Table 11.1 values (Cd = 0.96 is approximate)
    examples: [{ ref: "Table 11.1, 5/32 in at 50 psi", page: 214, in: { Cd: 0.96, D: 5 / 32, P: 50 }, out: { qs: 5.0 } },
               { ref: "Table 11.1, 1/4 in at 50 psi", page: 214, in: { Cd: 0.96, D: 0.25, P: 50 }, out: { qs: 12.8 }, tol: 0.03 }],
  });

  C({
    id: "eq-11.1-ratio", eq: ["11.1"], sec: "11.3", page: 213, title: "New nozzle discharge after changing nozzle size or pressure",
    tags: ["bigger nozzle", "raise pressure", "discharge ratio", "change nozzle"],
    inputs: [
      { k: "q1", sym: "q<sub>s1</sub>", label: "Original discharge", dim: "flow", u: "gpm", v: 10 },
      { k: "D1", sym: "D<sub>1</sub>", label: "Original nozzle diameter", dim: "length", u: "in", v: 0.25 },
      { k: "D2", sym: "D<sub>2</sub>", label: "New nozzle diameter", dim: "length", u: "in", v: 0.3 },
      { k: "P1", sym: "P<sub>1</sub>", label: "Original pressure", dim: "pressure", u: "psi", v: 50 },
      { k: "P2", sym: "P<sub>2</sub>", label: "New pressure", dim: "pressure", u: "psi", v: 50 }],
    outputs: [
      { k: "q2", sym: "q<sub>s2</sub>", label: "New discharge", dim: "flow", u: "gpm", dp: 2 },
      { k: "chg", label: "Change in discharge", dim: "pct", u: "%", dp: 1 }],
    f: v => { const q2 = v.q1 * (v.D2 / v.D1) ** 2 * Math.sqrt(v.P2 / v.P1); return { q2, chg: (q2 / v.q1 - 1) * 100 }; },
    examples: [{ ref: "Example 11.1 (20% larger nozzle)", page: 213, in: { q1: 10, D1: 0.25, D2: 0.3, P1: 50, P2: 50 }, out: { q2: 14.4, chg: 44 } },
               { ref: "Example 11.1 (20% more pressure)", page: 213, in: { q1: 10, D1: 0.25, D2: 0.25, P1: 50, P2: 60 }, out: { q2: 11, chg: 10 }, tol: 0.1 }],
  });

  C({
    id: "tab-11.1-11.2", eq: [], sec: "11.3", page: 214, title: "Nozzle discharge and diameter of coverage (Tables 11.1 and 11.2)",
    tags: ["nozzle chart", "nozzle discharge table", "wetted diameter", "throw", "diameter of coverage", "impact sprinkler"],
    tables: ["11.1", "11.2"], figs: ["11.4", "11.5"],
    inputs: [
      { k: "n", label: "Nozzle size", type: "sel", opts: nozOpts, v: 6 },
      { k: "P", sym: "P", label: "Nozzle pressure (25 to 100 psi, interpolated)", dim: "pressure", u: "psi", v: 50 },
      { k: "n2", label: "Second (spreader) nozzle, if any", type: "sel", opts: [["None", -1]].concat(nozOpts), v: -1 }],
    outputs: [
      { k: "q", sym: "q<sub>s</sub>", label: "Discharge of the main nozzle", dim: "flow", u: "gpm", dp: 1 },
      { k: "qt", sym: "q<sub>s</sub>", label: "Total sprinkler discharge", dim: "flow", u: "gpm", dp: 1 },
      { k: "dc", sym: "d<sub>c</sub>", label: "Diameter of coverage (main nozzle, 23° brass impact)", dim: "length", u: "ft", dp: 0 }],
    f: v => { const q = byP("11.1", v.n, v.P); const q2 = v.n2 >= 0 ? byP("11.1", v.n2, v.P) : 0; return { q, qt: q + q2, dc: byP("11.2", v.n, v.P) }; },
    examples: [
      { ref: "Example 11.3", page: 220, in: { n: 6, P: 50, n2: -1 }, out: { q: 7.2, dc: 100 } },
      { ref: "Example 11.2", page: 218, in: { n: 5, P: 50, n2: 0 }, out: { dc: 95, qt: 7.8 } },
      { ref: "Example 11.4", page: 222, in: { n: 4, P: 50, n2: -1 }, out: { q: 5.0 } }],
  });

  C({
    id: "eq-11.2-11.3", eq: ["11.2", "11.3"], sec: "11.3", page: 218, title: "Sprinkler application rate",
    tags: ["application rate", "in/hr", "rectangular spacing", "triangular spacing", "is my sprinkler causing runoff"],
    inputs: [
      { k: "qs", sym: "q<sub>s</sub>", label: "Sprinkler discharge", dim: "flow", u: "gpm", v: 7.2 },
      { k: "pat", label: "Spacing pattern", type: "sel", opts: [["Rectangular or square (Eq. 11.2)", 0], ["Equilateral triangle (Eq. 11.3)", 1]], v: 0 },
      { k: "SL", sym: "S<sub>L</sub>", label: "Spacing along the lateral (S for triangular)", dim: "length", u: "ft", v: 40 },
      { k: "Sm", sym: "S<sub>m</sub>", label: "Spacing of laterals along the mainline (not used for triangular)", dim: "length", u: "ft", v: 60 }],
    outputs: [{ k: "Ar", sym: "A<sub>r</sub>", label: "Application rate", dim: "rate", u: "in/hr", dp: 3 }],
    f: v => ({ Ar: v.pat === 1 ? 111.2 * v.qs / (v.SL * v.SL) : 96.3 * v.qs / (v.SL * v.Sm) }),
    tables: ["11.4"], figs: ["11.3"],
    examples: [{ ref: "Example 11.3", page: 220, in: { qs: 7.2, pat: 0, SL: 40, Sm: 60 }, out: { Ar: 0.29 } }],
  });

  C({
    id: "eq-11.4", eq: ["11.4"], sec: "11.3", page: 219, title: "Gross depth applied by a sprinkler set",
    tags: ["gross depth", "how many inches", "set time", "hours to run"],
    inputs: [
      { k: "Ar", sym: "A<sub>r</sub>", label: "Application rate", dim: "rate", u: "in/hr", v: 0.4 },
      { k: "To", sym: "T<sub>o</sub>", label: "Actual time of operation", dim: "time", u: "hr", v: 10 }],
    outputs: [{ k: "dg", sym: "d<sub>g</sub>", label: "Gross depth applied", dim: "length", u: "in", dp: 2 }],
    f: v => ({ dg: v.Ar * v.To }),
    examples: [{ ref: "Section 11.3 text", page: 219, in: { Ar: 0.4, To: 10 }, out: { dg: 4 } }],
  });

  C({
    id: "tab-11.3", eq: [], sec: "11.3", page: 218, title: "Maximum sprinkler and lateral spacing (Table 11.3)",
    tags: ["sprinkler spacing", "lateral spacing", "overlap", "wind", "diameter of coverage needed"],
    tables: ["11.3"], figs: ["11.6", "11.7", "11.8"],
    inputs: [
      { k: "pat", label: "Spacing pattern", type: "sel", opts: [["Rectangular", 0], ["Square", 1], ["Equilateral triangle", 2]], v: 0 },
      { k: "w", sym: "", label: "Average wind speed", dim: "windrun", u: "mph", v: 5 },
      { k: "dc", sym: "d<sub>c</sub>", label: "Diameter of coverage (Table 11.2)", dim: "length", u: "ft", v: 95 },
      { k: "SL", sym: "S<sub>L</sub>", label: "Actual spacing along the lateral", dim: "length", u: "ft", v: 40 },
      { k: "Sm", sym: "S<sub>m</sub>", label: "Actual spacing between laterals", dim: "length", u: "ft", v: 60 }],
    outputs: [
      { k: "SLmax", label: "Maximum spacing along the lateral", dim: "length", u: "ft", dp: 0 },
      { k: "Smmax", label: "Maximum spacing between laterals", dim: "length", u: "ft", dp: 0 },
      { k: "dcneed", label: "Diameter of coverage needed for the actual spacing", dim: "length", u: "ft", dp: 0 },
      { k: "msg", label: "Check", text: true }],
    f: v => {
      const c = windCls(v.w);
      if (c < 0) return { SLmax: NaN, Smmax: NaN, dcneed: NaN, msg: "Wind above 12 mph is outside Table 11.3." };
      const r = T["11.3"].rows[v.pat * 3 + c];
      const fL = r[2] / 100;
      const fm = v.pat === 0 ? r[3] / 100 : v.pat === 1 ? fL : 0.866 * fL;
      const SLmax = fL * v.dc, Smmax = fm * v.dc;
      const dcneed = Math.max(v.SL / fL, v.Sm / fm);
      const ok = v.SL <= SLmax + 1e-9 && v.Sm <= Smmax + 1e-9;
      return { SLmax, Smmax, dcneed, msg: ok ? "Spacing meets Table 11.3." : "Spacing is too wide; uniformity may be poor." };
    },
    examples: [{ ref: "Example 11.2", page: 218, in: { pat: 0, w: 5, dc: 95, SL: 40, Sm: 60 }, out: { SLmax: 43, Smmax: 57, msg: "Spacing is too wide; uniformity may be poor." } },
               { ref: "Example 11.3", page: 220, in: { pat: 0, w: 5, dc: 100, SL: 40, Sm: 60 }, out: { dcneed: 100 } }],
  });

  const texOpts = [["Coarse (sands, fine sands, loamy fine sands)", 0], ["Medium (sandy loams, fine sandy loams, silt loams)", 1], ["Fine (silty clay loams, clay loams, clayey soils)", 2]];
  C({
    id: "tab-11.4", eq: [], sec: "11.3", page: 219, title: "Maximum application rate for soil and slope (Table 11.4)",
    tags: ["maximum application rate", "runoff", "infiltration", "slope", "residue", "will my sprinkler run off"],
    tables: ["11.4"],
    inputs: [
      { k: "cov", label: "Surface cover", type: "sel", opts: [["Soil surface not protected", 0], ["Turfgrass or heavy residue cover", 1]], v: 0 },
      { k: "tex", label: "Soil texture", type: "sel", opts: texOpts, v: 1 },
      { k: "S", sym: "", label: "Slope", dim: "pct", u: "%", v: 2 },
      { k: "Ar", sym: "A<sub>r</sub>", label: "Your application rate (optional check)", dim: "rate", u: "in/hr", v: 0.29 }],
    outputs: [
      { k: "lo", label: "Recommended maximum, low end", dim: "rate", u: "in/hr", dp: 2 },
      { k: "hi", label: "Recommended maximum, high end", dim: "rate", u: "in/hr", dp: 2 },
      { k: "msg", label: "Check", text: true }],
    f: v => {
      const s = v.S <= 5 ? 0 : v.S <= 8 ? 1 : v.S <= 12 ? 2 : v.S <= 20 ? 3 : 4;
      const r = T["11.4"].rows[v.cov * 5 + s];
      const lo = r[2 + 2 * v.tex], hi = r[3 + 2 * v.tex];
      const msg = v.Ar <= lo ? "Below the recommended range: acceptable." : v.Ar <= hi ? "Within the recommended range." : "Above the recommended maximum: expect ponding or runoff.";
      return { lo, hi, msg };
    },
    examples: [{ ref: "Example 11.3", page: 220, in: { cov: 0, tex: 1, S: 2, Ar: 0.29 }, out: { lo: 0.25, hi: 0.5, msg: "Within the recommended range." } }],
  });

  C({
    id: "proc-nozzle-select", eq: ["11.2"], sec: "11.3", page: 220, title: "Choose the smallest nozzle for a sprinkler layout",
    tags: ["nozzle selection", "which nozzle", "sprinkler layout check", "procedure", "set move design"],
    tables: ["11.1", "11.2", "11.3", "11.4"],
    note: "Follows Example 11.3: diameter of coverage needed from Table 11.3, smallest nozzle meeting it at the design pressure from Table 11.2, discharge from Table 11.1, application rate from Eq. 11.2 checked against Table 11.4.",
    inputs: [
      { k: "SL", sym: "S<sub>L</sub>", label: "Spacing along the lateral", dim: "length", u: "ft", v: 40 },
      { k: "Sm", sym: "S<sub>m</sub>", label: "Spacing between laterals", dim: "length", u: "ft", v: 60 },
      { k: "Pa", sym: "P<sub>a</sub>", label: "Design (average) pressure", dim: "pressure", u: "psi", v: 50 },
      { k: "w", sym: "", label: "Average wind speed", dim: "windrun", u: "mph", v: 5 },
      { k: "cov", label: "Surface cover", type: "sel", opts: [["Soil surface not protected", 0], ["Turfgrass or heavy residue cover", 1]], v: 0 },
      { k: "tex", label: "Soil texture", type: "sel", opts: texOpts, v: 1 },
      { k: "S", sym: "", label: "Slope", dim: "pct", u: "%", v: 2 }],
    outputs: [
      { k: "dcneed", label: "Diameter of coverage needed", dim: "length", u: "ft", dp: 0 },
      { k: "noz", label: "Smallest acceptable nozzle", text: true },
      { k: "dc", label: "Its diameter of coverage", dim: "length", u: "ft", dp: 0 },
      { k: "qs", sym: "q<sub>s</sub>", label: "Its discharge", dim: "flow", u: "gpm", dp: 1 },
      { k: "Ar", sym: "A<sub>r</sub>", label: "Application rate", dim: "rate", u: "in/hr", dp: 2 },
      { k: "msg", label: "Application rate check (Table 11.4)", text: true }],
    f: v => {
      const c = windCls(v.w);
      if (c < 0) return { dcneed: NaN, noz: "Wind outside Table 11.3", dc: NaN, qs: NaN, Ar: NaN, msg: "" };
      const r3 = T["11.3"].rows[c];
      const dcneed = Math.max(v.SL / (r3[2] / 100), v.Sm / (r3[3] / 100));
      let i = -1;
      for (let j = 0; j < T["11.2"].rows.length; j++) { const d = byP("11.2", j, v.Pa); if (d >= dcneed - 0.5) { i = j; break; } }
      if (i < 0) return { dcneed, noz: "No nozzle in Table 11.2 reaches this diameter at this pressure", dc: NaN, qs: NaN, Ar: NaN, msg: "" };
      const qs = byP("11.1", i, v.Pa), Ar = 96.3 * qs / (v.SL * v.Sm);
      const s = v.S <= 5 ? 0 : v.S <= 8 ? 1 : v.S <= 12 ? 2 : v.S <= 20 ? 3 : 4;
      const r4 = T["11.4"].rows[v.cov * 5 + s], hi = r4[3 + 2 * v.tex];
      return { dcneed, noz: T["11.2"].rows[i][0] + " in", dc: byP("11.2", i, v.Pa), qs, Ar,
        msg: Ar <= hi ? "Meets the maximum of " + hi.toFixed(2) + " in/hr." : "Exceeds the maximum of " + hi.toFixed(2) + " in/hr." };
    },
    examples: [{ ref: "Example 11.3", page: 220, in: {}, out: { dcneed: 100, noz: "3/16 in", qs: 7.2, Ar: 0.29 } }],
  });

  C({
    id: "eq-11.5-11.9", eq: ["11.5", "11.6", "11.7", "11.8", "11.9"], sec: "11.4", page: 221, title: "Pressure at the inlet and far end of a lateral",
    tags: ["lateral inlet pressure", "end pressure", "distal pressure", "uphill lateral", "downhill lateral", "pressure variation 20%"],
    figs: ["11.9"],
    inputs: [
      { k: "Pa", sym: "P<sub>a</sub>", label: "Average (design) pressure along the lateral", dim: "pressure", u: "psi", v: 50 },
      { k: "Pl", sym: "P<sub>l</sub>", label: "Friction pressure loss along the lateral (Eq. 11.11 or F × conveyance loss)", dim: "pressure", u: "psi", v: 8.9 },
      { k: "dE", sym: "E<sub>i</sub> − E<sub>d</sub>", label: "Inlet elevation minus distal end elevation (+ downhill, − uphill, 0 level)", dim: "length", u: "ft", v: 0, min: -1e5 }],
    outputs: [
      { k: "Pi", sym: "P<sub>i</sub>", label: "Pressure at the lateral inlet", dim: "pressure", u: "psi", dp: 1 },
      { k: "Pd", sym: "P<sub>d</sub>", label: "Pressure at the distal end", dim: "pressure", u: "psi", dp: 1 },
      { k: "var", label: "Pressure variation along the lateral", dim: "pressure", u: "psi", dp: 1 },
      { k: "pct", label: "Variation as percent of average pressure", dim: "pct", u: "%", dp: 1 },
      { k: "Plmax", sym: "Max P<sub>l</sub>", label: "Maximum allowed variation (0.20 P<sub>a</sub>)", dim: "pressure", u: "psi", dp: 1 },
      { k: "msg", label: "Check", text: true }],
    f: v => {
      const e = v.dE / 2.31;
      const Pi = v.Pa + 0.75 * v.Pl - 0.5 * e, Pd = v.Pa - 0.25 * v.Pl + 0.5 * e;
      const vr = Math.abs(Pi - Pd), Plmax = 0.2 * v.Pa;
      return { Pi, Pd, var: vr, pct: vr / v.Pa * 100, Plmax, msg: vr <= Plmax ? "Meets the 20% criterion." : "Exceeds the 20% criterion." };
    },
    examples: [
      { ref: "Example 11.4a (level)", page: 222, in: { Pa: 50, Pl: 8.9, dE: 0 }, out: { Pi: 56.7, Pd: 47.8, pct: 17.8, msg: "Meets the 20% criterion." } },
      // the book prints 53.8 psi for Pd downhill (it substitutes 7.7 for Pl); the equation gives 53.5
      { ref: "Example 11.4b (downhill 2%)", page: 222, in: { Pa: 50, Pl: 8.9, dE: 26.4 }, out: { Pi: 51, Pd: 53.8, var: 2.8 }, tol: 0.2 },
      { ref: "Example 11.4c (uphill 2%)", page: 222, in: { Pa: 50, Pl: 8.9, dE: -26.4 }, out: { Pi: 62.4, Pd: 42.1, var: 20.3, pct: 41, msg: "Exceeds the 20% criterion." } }],
  });

  C({
    id: "eq-11.11", eq: ["11.11"], sec: "11.5", page: 224, title: "Friction pressure loss in a sprinkler lateral (Hazen-Williams)",
    tags: ["lateral friction loss", "Hazen-Williams", "multiple outlet factor", "pressure loss lateral"],
    inputs: [
      { k: "Q", sym: "Q", label: "Lateral inflow", dim: "flow", u: "gpm", v: 220 },
      { k: "C", sym: "C", label: "Hazen-Williams C (aluminum with couplers 120, PVC 150; Table 8.1)", dim: "none", v: 120 },
      { k: "D", sym: "D", label: "Inside diameter of the lateral", dim: "length", u: "in", v: 3.9 },
      { k: "L", sym: "L", label: "Lateral length", dim: "length", u: "ft", v: 1320 },
      { k: "F", sym: "F", label: "Multiple outlet factor (Table 8.3; about 0.36 for 30 or more outlets)", dim: "none", v: 0.36 }],
    outputs: [{ k: "Pl", sym: "P<sub>l</sub>", label: "Pressure loss along the lateral", dim: "pressure", u: "psi", dp: 2 }],
    f: v => ({ Pl: 4.56 * v.F * Math.pow(v.Q / v.C, 1.852) * v.L / Math.pow(v.D, 4.866) }),
    examples: [{ ref: "Example 11.4", page: 222, in: { Q: 220, C: 120, D: 3.9, L: 1320, F: 0.36 }, out: { Pl: 8.9 } }],
  });

  C({
    id: "eq-11.10-11.13", eq: ["11.10", "11.12", "11.13"], sec: "11.5", page: 223, title: "Maximum inflow to a sprinkler lateral",
    tags: ["maximum lateral inflow", "max flow lateral", "velocity limit", "7 ft/s", "how many sprinklers can my lateral carry"],
    figs: ["11.11"],
    inputs: [
      { k: "Pa", sym: "P<sub>a</sub>", label: "Average pressure along the lateral", dim: "pressure", u: "psi", v: 50 },
      { k: "D", sym: "D", label: "Inside diameter of the lateral", dim: "length", u: "in", v: 5 },
      { k: "C", sym: "C", label: "Hazen-Williams C", dim: "none", v: 120 },
      { k: "L", sym: "L", label: "Lateral length", dim: "length", u: "ft", v: 1000 },
      { k: "F", sym: "F", label: "Multiple outlet factor (Table 8.3)", dim: "none", v: 0.365 },
      { k: "vmax", sym: "v<sub>max</sub>", label: "Maximum velocity (7 ft/s; 10 ft/s with slow fill and gradual valve closing)", dim: "velocity", u: "ft/s", v: 7 },
      { k: "SL", sym: "S<sub>L</sub>", label: "Sprinkler spacing on the lateral", dim: "length", u: "ft", v: 40 }],
    outputs: [
      { k: "Plmax", sym: "Max P<sub>l</sub>", label: "Maximum pressure loss (Eq. 11.10)", dim: "pressure", u: "psi", dp: 1 },
      { k: "Qp", sym: "Q<sub>max</sub>", label: "Maximum inflow from pressure variation (Eq. 11.12)", dim: "flow", u: "gpm", dp: 0 },
      { k: "Qv", sym: "Q<sub>max</sub>", label: "Maximum inflow from velocity (Eq. 11.13)", dim: "flow", u: "gpm", dp: 0 },
      { k: "Qmax", sym: "Q<sub>max</sub>", label: "Maximum lateral inflow (smaller of the two)", dim: "flow", u: "gpm", dp: 0 },
      { k: "qs", sym: "q<sub>s</sub>", label: "Maximum average sprinkler discharge", dim: "flow", u: "gpm", dp: 1 }],
    f: v => {
      const Qp = Math.pow(0.2 * v.Pa * Math.pow(v.D, 4.866) * Math.pow(v.C, 1.852) / (4.56 * v.F * v.L), 1 / 1.852);
      const Qv = 2.445 * v.vmax * v.D * v.D, Qmax = Math.min(Qp, Qv);
      return { Plmax: 0.2 * v.Pa, Qp, Qv, Qmax, qs: Qmax / (v.L / v.SL) };
    },
    examples: [
      // book reads 410 gpm off Figure 11.11, which was drawn with the pipe inside diameter; D = 5 in gives 428 gpm
      { ref: "Example 11.5", page: 224, in: { Pa: 50, D: 5, C: 120, L: 1000, F: 0.365, SL: 40 }, out: { Qmax: 410, qs: 16.4 }, tol: 0.05 },
      { ref: "Section 11.5 text, 4-inch pipe", page: 224, in: { D: 3.9, L: 400 }, out: { Qv: 260 } },
      { ref: "Section 11.5 text, 3-inch pipe", page: 224, in: { D: 2.9, L: 400 }, out: { Qv: 145 } }],
  });

  C({
    id: "eq-11.14", eq: ["11.14"], sec: "11.6", page: 226, title: "Required sprinkler discharge for a moved-lateral system",
    tags: ["required sprinkler discharge", "system capacity", "hand move", "wheel line", "set move", "nozzle size needed"],
    figs: ["11.12"],
    inputs: [
      { k: "Qc", sym: "Q<sub>c</sub>", label: "Gross system capacity", dim: "capacity", u: "gpm/ac", v: 6 },
      { k: "SL", sym: "S<sub>L</sub>", label: "Sprinkler spacing along the lateral", dim: "length", u: "ft", v: 40 },
      { k: "Sm", sym: "S<sub>m</sub>", label: "Lateral spacing (set move distance)", dim: "length", u: "ft", v: 50 },
      { k: "Ns", sym: "N<sub>s</sub>", label: "Number of sets in the field", dim: "count", u: "#", v: 24 },
      { k: "Nl", sym: "N<sub>l</sub>", label: "Number of laterals", dim: "count", u: "#", v: 2 },
      { k: "Ts", sym: "T<sub>s</sub>", label: "Set time", dim: "time", u: "hr", v: 12 },
      { k: "To", sym: "T<sub>o</sub>", label: "Actual operating time per set", dim: "time", u: "hr", v: 10 },
      { k: "Ii", sym: "I<sub>i</sub>", label: "Irrigation interval", dim: "time", u: "d", v: 8 },
      { k: "Td", sym: "T<sub>d</sub>", label: "Downtime", dim: "time", u: "d", v: 2 }],
    outputs: [{ k: "qs", sym: "q<sub>s</sub>", label: "Minimum sprinkler discharge", dim: "flow", u: "gpm", dp: 2 }],
    f: v => ({ qs: v.Qc * v.SL * v.Sm / 43560 * (v.Ns / v.Nl) * (v.Ts / v.To) * (v.Ii / (v.Ii - v.Td)) }),
    examples: [{ ref: "Example 11.6", page: 228, in: {}, out: { qs: 5.3 } }],
  });

  C({
    id: "eq-11.15", eq: ["11.15"], sec: "11.6", page: 226, title: "Number of lateral sets in a field",
    tags: ["number of sets", "how many moves", "field width"],
    inputs: [
      { k: "Wf", sym: "W<sub>f</sub>", label: "Width of the field (direction laterals are moved)", dim: "length", u: "ft", v: 1200 },
      { k: "Sm", sym: "S<sub>m</sub>", label: "Lateral spacing", dim: "length", u: "ft", v: 50 }],
    outputs: [{ k: "Ns", sym: "N<sub>s</sub>", label: "Number of sets", dim: "count", u: "#", dp: 1 }],
    f: v => ({ Ns: v.Wf / v.Sm }),
    examples: [{ ref: "Example 11.6", page: 228, in: { Wf: 1200, Sm: 50 }, out: { Ns: 24 } }],
  });

  C({
    id: "eq-11.16", eq: ["11.16"], sec: "11.6", page: 226, title: "Inflow to a sprinkler lateral",
    tags: ["lateral inflow", "lateral flow", "gpm into lateral"],
    inputs: [
      { k: "qs", sym: "q<sub>s</sub>", label: "Discharge per sprinkler", dim: "flow", u: "gpm", v: 5 },
      { k: "L", sym: "L", label: "Length of lateral", dim: "length", u: "ft", v: 1320 },
      { k: "SL", sym: "S<sub>L</sub>", label: "Sprinkler spacing on the lateral", dim: "length", u: "ft", v: 30 }],
    outputs: [{ k: "Qi", sym: "Q<sub>i</sub>", label: "Inflow to the lateral", dim: "flow", u: "gpm", dp: 0 }],
    f: v => ({ Qi: v.qs * v.L / v.SL }),
    examples: [{ ref: "Example 11.4", page: 222, in: { qs: 5, L: 1320, SL: 30 }, out: { Qi: 220 } }],
  });

  C({
    id: "proc-moved-lateral", eq: ["11.14", "11.15", "11.16", "11.2"], sec: "11.6", page: 226, title: "Moved-lateral sprinkler system design",
    tags: ["moved lateral design", "hand move design", "wheel line design", "how many laterals", "procedure", "set move"],
    tables: ["11.1"], figs: ["11.12"],
    note: "Follows Example 11.6: sets from Eq. 11.15, the fewest laterals that finish the field within the interval minus downtime, the interval shortened to the time actually needed, sprinkler discharge from Eq. 11.14, lateral inflow from Eq. 11.16, then the smallest Table 11.1 nozzle that meets the discharge.",
    inputs: [
      { k: "Wf", sym: "W<sub>f</sub>", label: "Width of the field", dim: "length", u: "ft", v: 1200 },
      { k: "L", sym: "L", label: "Lateral length", dim: "length", u: "ft", v: 1200 },
      { k: "SL", sym: "S<sub>L</sub>", label: "Sprinkler spacing along the lateral", dim: "length", u: "ft", v: 40 },
      { k: "Sm", sym: "S<sub>m</sub>", label: "Lateral spacing", dim: "length", u: "ft", v: 50 },
      { k: "Qc", sym: "Q<sub>c</sub>", label: "Gross system capacity", dim: "capacity", u: "gpm/ac", v: 6 },
      { k: "Ts", sym: "T<sub>s</sub>", label: "Set time", dim: "time", u: "hr", v: 12 },
      { k: "To", sym: "T<sub>o</sub>", label: "Operating time per set", dim: "time", u: "hr", v: 10 },
      { k: "Ii", sym: "I<sub>i</sub>", label: "Longest allowed irrigation interval", dim: "time", u: "d", v: 10 },
      { k: "Td", sym: "T<sub>d</sub>", label: "Downtime", dim: "time", u: "d", v: 2 },
      { k: "Pa", sym: "P<sub>a</sub>", label: "Design pressure for nozzle choice", dim: "pressure", u: "psi", v: 50 }],
    outputs: [
      { k: "Ns", sym: "N<sub>s</sub>", label: "Number of sets", dim: "count", u: "#", dp: 0 },
      { k: "Nl", sym: "N<sub>l</sub>", label: "Number of laterals", dim: "count", u: "#", dp: 0 },
      { k: "Iu", sym: "I<sub>i</sub>", label: "Irrigation interval used", dim: "time", u: "d", dp: 1 },
      { k: "qs", sym: "q<sub>s</sub>", label: "Minimum sprinkler discharge", dim: "flow", u: "gpm", dp: 2 },
      { k: "Qi", sym: "Q<sub>i</sub>", label: "Inflow to each lateral", dim: "flow", u: "gpm", dp: 0 },
      { k: "noz", label: "Smallest nozzle meeting q<sub>s</sub> (Table 11.1)", text: true },
      { k: "Ar", sym: "A<sub>r</sub>", label: "Application rate with that nozzle", dim: "rate", u: "in/hr", dp: 2 }],
    f: v => {
      const Ns = Math.ceil(v.Wf / v.Sm - 1e-9);
      const avail = v.Ii - v.Td;
      const Nl = Math.max(1, Math.ceil(Ns * v.Ts / 24 / avail - 1e-9));
      const Iu = Math.ceil(Ns / Nl) * v.Ts / 24 + v.Td;
      const qs = v.Qc * v.SL * v.Sm / 43560 * (Ns / Nl) * (v.Ts / v.To) * (Iu / (Iu - v.Td));
      const Qi = qs * v.L / v.SL;
      let noz = "None in Table 11.1 at this pressure", qn = NaN;
      for (let j = 0; j < T["11.1"].rows.length; j++) { const q = byP("11.1", j, v.Pa); if (q >= qs) { noz = T["11.1"].rows[j][0] + " in (" + q.toFixed(1) + " gpm)"; qn = q; break; } }
      return { Ns, Nl, Iu, qs, Qi, noz, Ar: 96.3 * qn / (v.SL * v.Sm) };
    },
    examples: [{ ref: "Example 11.6", page: 228, in: {}, out: { Ns: 24, Nl: 2, Iu: 8, qs: 5.3 } }],
  });

  C({
    id: "tab-11.5", eq: [], sec: "11.7", page: 229, title: "Sprinkling rate for frost protection (Table 11.5)",
    tags: ["frost protection", "freeze", "orchard frost", "sprinkling rate for frost", "overtree"],
    tables: ["11.5"],
    note: "Uses the next colder tabulated leaf temperature (the higher rate). For planning only.",
    inputs: [
      { k: "Tl", sym: "", label: "Expected dry leaf temperature (11 to 27 °F)", dim: "temp", u: "°F", v: 24, min: -100 },
      { k: "w", label: "Wind speed", type: "sel", opts: [["0-1 mph", 1], ["2-4 mph", 2], ["5-8 mph", 3], ["10-14 mph", 4], ["18-22 mph", 5]], v: 3 }],
    outputs: [
      { k: "rate", label: "Sprinkling rate", dim: "rate", u: "in/hr", dp: 1 },
      { k: "msg", label: "Note", text: true }],
    f: v => {
      const rows = T["11.5"].rows;
      if (v.Tl > rows[0][0]) return { rate: rows[0][v.w], msg: "Leaf temperature is above the table; 27 °F row shown." };
      let r = rows.find(x => x[0] <= v.Tl + 1e-9) || null;
      if (!r) return { rate: NaN, msg: "Colder than Table 11.5 covers." };
      if (r[v.w] === null) return { rate: NaN, msg: "No rate given: sprinkling is not expected to protect at this temperature and wind." };
      return { rate: r[v.w], msg: "From the " + r[0] + " °F row." };
    },
    examples: [{ ref: "Table 11.5", page: 229, in: { Tl: 24, w: 3 }, out: { rate: 0.3 } },
               { ref: "Table 11.5", page: 229, in: { Tl: 21, w: 4 }, out: { rate: 0.8 } }],
  });

  C({
    id: "tab-11.6", eq: [], sec: "11.7", page: 230, title: "When to start and stop overtree frost protection (Table 11.6)",
    tags: ["turn on frost protection", "turn off sprinklers frost", "dewpoint", "critical temperature", "apple frost"],
    tables: ["11.6"],
    inputs: [
      { k: "Tc", label: "Critical temperature", type: "sel", opts: [["32 °F", 32], ["30 °F", 30], ["28 °F", 28], ["26 °F", 26]], v: 28 },
      { k: "Td", sym: "", label: "Dewpoint temperature", dim: "temp", u: "°F", v: 20, min: -100 }],
    outputs: [
      { k: "Ton", label: "Minimum turn-on or turn-off air temperature", dim: "temp", u: "°F", dp: 0 },
      { k: "Trec", label: "Recommended (3 °F higher)", dim: "temp", u: "°F", dp: 0 },
      { k: "msg", label: "Note", text: true }],
    f: v => {
      const rows = T["11.6"].rows.filter(r => r[0] === v.Tc);
      const r = rows.find(x => v.Td >= x[1] - 1e-9 && v.Td <= x[2] + 1e-9);
      if (!r) return { Ton: NaN, Trec: NaN, msg: "Dewpoint outside the " + rows[0][1] + " to " + rows[rows.length - 1][2] + " °F range in Table 11.6." };
      return { Ton: r[3], Trec: r[3] + 3, msg: "Dewpoint range " + r[1] + " to " + r[2] + " °F." };
    },
    examples: [{ ref: "Table 11.6", page: 230, in: { Tc: 28, Td: 20 }, out: { Ton: 33 } }],
  });
})(typeof window !== "undefined" ? window : globalThis);
