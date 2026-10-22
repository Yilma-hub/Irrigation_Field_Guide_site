/* ---- ch02.js ---- */
/* Chapter 2  Soil Water  (Equations 2.1 to 2.14, Table 2.3) */
(function (G) {
  const T = G.TAB = G.TAB || {};
  // Table 2.3. Example values of soil water characteristics for various soil textures (p. 20)
  T["2.3"] = {
    title: "Example values of soil water characteristics for various soil textures",
    cols: ["Soil texture", "θfc", "θwp", "AWC"],
    rows: [
      ["Coarse sand", 0.10, 0.05, 0.05], ["Sand", 0.15, 0.07, 0.08], ["Loamy sand", 0.18, 0.07, 0.11],
      ["Sandy loam", 0.20, 0.08, 0.12], ["Loam", 0.25, 0.10, 0.15], ["Silt loam", 0.30, 0.12, 0.18],
      ["Silty clay loam", 0.38, 0.22, 0.16], ["Clay loam", 0.40, 0.25, 0.15], ["Silty clay", 0.40, 0.27, 0.13],
      ["Clay", 0.40, 0.28, 0.12]],
  };
  const soilOpts = T["2.3"].rows.map((r, i) => [r[0], i]);
  const C = (s) => { s.ch = 2; s.file = "ch02"; return calc(s); };

  C({
    id: "eq-2.1", eq: ["2.1"], sec: "2.2", page: 11, title: "Soil bulk density",
    tags: ["bulk density", "soil core", "dry soil mass", "compaction"],
    inputs: [
      { k: "Ms", sym: "M<sub>s</sub>", label: "Mass of dry soil", dim: "mass", u: "g", v: 100 },
      { k: "Vb", sym: "V<sub>b</sub>", label: "Volume of bulk soil sample", dim: "volume", u: "cm³", v: 80 }],
    outputs: [{ k: "rhob", sym: "ρ<sub>b</sub>", label: "Soil bulk density", dim: "density", u: "g/cm³", dp: 3 }],
    f: v => ({ rhob: v.Ms / v.Vb }),
    examples: [{ ref: "Example 2.1", page: 12, in: { Ms: 100, Vb: 80 }, out: { rhob: 1.25 } }],
  });

  C({
    id: "eq-2.2", eq: ["2.2"], sec: "2.2", page: 12, title: "Soil porosity from bulk density",
    tags: ["porosity", "pore space", "particle density"],
    inputs: [
      { k: "rhob", sym: "ρ<sub>b</sub>", label: "Soil bulk density", dim: "density", u: "g/cm³", v: 1.25 },
      { k: "rhop", sym: "ρ<sub>p</sub>", label: "Soil particle density (2.65 g/cm³ is common for mineral soils)", dim: "density", u: "g/cm³", v: 2.65 }],
    outputs: [{ k: "phi", sym: "φ", label: "Soil porosity", dim: "pct", u: "%", dp: 1 }],
    f: v => ({ phi: (1 - v.rhob / v.rhop) * 100 }),
    examples: [{ ref: "Example 2.1", page: 12, in: { rhob: 1.25, rhop: 2.65 }, out: { phi: 53 } }],
  });

  C({
    id: "eq-2.3", eq: ["2.3"], sec: "2.3", page: 13, title: "Mass (gravimetric) water content",
    tags: ["gravimetric", "oven dry", "soil sample weight", "mass water content"],
    inputs: [
      { k: "wet", sym: "M<sub>wet</sub>", label: "Mass of wet soil sample", dim: "mass", u: "g", v: 120, help: "M<sub>w</sub> = wet mass − dry mass" },
      { k: "Ms", sym: "M<sub>s</sub>", label: "Mass of dry soil (after 24 h at 105 °C)", dim: "mass", u: "g", v: 100 }],
    outputs: [
      { k: "Mw", sym: "M<sub>w</sub>", label: "Mass of water lost during drying", dim: "mass", u: "g", dp: 2 },
      { k: "thm", sym: "θ<sub>m</sub>", label: "Mass water content", dim: "frac", u: "decimal", dp: 3 }],
    f: v => { const Mw = v.wet - v.Ms; return { Mw, thm: Mw / v.Ms }; },
    examples: [{ ref: "Example 2.2", page: 14, in: { wet: 120, Ms: 100 }, out: { Mw: 20, thm: 0.20 } }],
  });

  C({
    id: "eq-2.4", eq: ["2.4"], sec: "2.3", page: 13, title: "Volumetric water content",
    tags: ["volumetric water content", "theta v"],
    inputs: [
      { k: "Vw", sym: "V<sub>w</sub>", label: "Volume of water", dim: "volume", u: "cm³", v: 20 },
      { k: "Vb", sym: "V<sub>b</sub>", label: "Bulk volume of soil sample", dim: "volume", u: "cm³", v: 80 }],
    outputs: [{ k: "thv", sym: "θ<sub>v</sub>", label: "Volumetric water content", dim: "frac", u: "decimal", dp: 3 }],
    f: v => ({ thv: v.Vw / v.Vb }),
    examples: [{ ref: "Example 2.2", page: 14, in: { Vw: 20, Vb: 80 }, out: { thv: 0.25 } }],
  });

  C({
    id: "eq-2.5", eq: ["2.5"], sec: "2.3", page: 13, title: "Volumetric from mass water content",
    tags: ["convert gravimetric to volumetric", "bulk density"],
    inputs: [
      { k: "thm", sym: "θ<sub>m</sub>", label: "Mass water content", dim: "frac", u: "decimal", v: 0.20 },
      { k: "rhob", sym: "ρ<sub>b</sub>", label: "Soil bulk density", dim: "density", u: "g/cm³", v: 1.25 },
      { k: "rhow", sym: "ρ<sub>w</sub>", label: "Density of water (1 g/cm³)", dim: "density", u: "g/cm³", v: 1 }],
    outputs: [{ k: "thv", sym: "θ<sub>v</sub>", label: "Volumetric water content", dim: "frac", u: "decimal", dp: 3 }],
    f: v => ({ thv: v.rhob / v.rhow * v.thm }),
    examples: [{ ref: "Example 2.2", page: 14, in: { thm: 0.20, rhob: 1.25, rhow: 1 }, out: { thv: 0.25 } }],
  });

  C({
    id: "eq-2.6", eq: ["2.6"], sec: "2.3", page: 13, title: "Equivalent depth of water in a soil layer",
    tags: ["inches of water in soil", "depth of water stored", "water in the profile"],
    inputs: [
      { k: "thv", sym: "θ<sub>v</sub>", label: "Volumetric water content", dim: "frac", u: "decimal", v: 0.25 },
      { k: "L", sym: "L", label: "Depth increment of the soil layer", dim: "length", u: "in", v: 12 }],
    outputs: [{ k: "d", sym: "d", label: "Equivalent depth of water in the layer", dim: "length", u: "in", dp: 2 }],
    f: v => ({ d: v.thv * v.L }),
    examples: [{ ref: "Example 2.2", page: 14, in: { thv: 0.25, L: 12 }, out: { d: 3 } },
               { ref: "Example 2.2", page: 14, in: { thv: 0.30, L: 12 }, out: { d: 3.6 } }],
  });

  C({
    id: "eq-2.7", eq: ["2.7"], sec: "2.4", page: 15, title: "Total soil water potential",
    tags: ["water potential", "matric", "osmotic", "gravitational"],
    inputs: [
      { k: "g", sym: "ψ<sub>g</sub>", label: "Gravitational potential", dim: "pressure", u: "bar", v: 0, min: -1e6 },
      { k: "m", sym: "ψ<sub>m</sub>", label: "Matric potential (negative)", dim: "pressure", u: "bar", v: -0.3, min: -1e6 },
      { k: "o", sym: "ψ<sub>o</sub>", label: "Osmotic potential (negative)", dim: "pressure", u: "bar", v: 0, min: -1e6 }],
    outputs: [{ k: "t", sym: "ψ<sub>t</sub>", label: "Total soil water potential", dim: "pressure", u: "bar", dp: 3 }],
    f: v => ({ t: v.g + v.m + v.o }),
  });

  C({
    id: "eq-2.8", eq: ["2.8"], sec: "2.5", page: 16, title: "Available water capacity (AWC)",
    tags: ["AWC", "available water", "field capacity", "wilting point", "water holding capacity", "how much water does my soil hold"],
    inputs: [
      { k: "fc", sym: "θ<sub>fc</sub>", label: "Volumetric water content at field capacity", dim: "frac", u: "decimal", v: 0.34 },
      { k: "wp", sym: "θ<sub>wp</sub>", label: "Volumetric water content at permanent wilting point", dim: "frac", u: "decimal", v: 0.16 }],
    outputs: [{ k: "AWC", sym: "AWC", label: "Available water capacity", dim: "awc", u: "in/in", dp: 3 }],
    f: v => ({ AWC: v.fc - v.wp }),
    examples: [{ ref: "Example 2.3", page: 18, in: { fc: 0.34, wp: 0.16 }, out: { AWC: 0.18 } }],
    tables: ["2.3"], figs: ["2.6", "2.7"],
  });

  C({
    id: "eq-2.9-2.11", eq: ["2.9", "2.10", "2.11a", "2.11b"], sec: "2.5", page: 17,
    title: "Fraction of available water depleted and remaining",
    tags: ["fraction depleted", "fraction remaining", "percent depletion", "how dry is my soil", "MAD"],
    inputs: [
      { k: "fc", sym: "θ<sub>fc</sub>", label: "Water content at field capacity", dim: "frac", u: "decimal", v: 0.34 },
      { k: "wp", sym: "θ<sub>wp</sub>", label: "Water content at wilting point", dim: "frac", u: "decimal", v: 0.16 },
      { k: "thv", sym: "θ<sub>v</sub>", label: "Current volumetric water content", dim: "frac", u: "decimal", v: 0.26 }],
    outputs: [
      { k: "fd", sym: "f<sub>d</sub>", label: "Fraction of available water depleted", dim: "frac", u: "decimal", dp: 3 },
      { k: "fr", sym: "f<sub>r</sub>", label: "Fraction of available water remaining", dim: "frac", u: "decimal", dp: 3 }],
    f: v => { const fd = (v.fc - v.thv) / (v.fc - v.wp); return { fd, fr: 1 - fd }; },
    examples: [{ ref: "Example 2.3", page: 18, in: { fc: 0.34, wp: 0.16, thv: 0.26 }, out: { fd: 0.44, fr: 0.56 }, tol: 0.015 }],
  });

  C({
    id: "eq-2.12", eq: ["2.12"], sec: "2.5", page: 17, title: "Soil water depletion from fraction depleted",
    tags: ["SWD", "soil water deficit", "how much to refill", "water needed to reach field capacity"],
    inputs: [
      { k: "fd", sym: "f<sub>d</sub>", label: "Fraction of available water depleted", dim: "frac", u: "decimal", v: 0.44 },
      { k: "AWC", sym: "AWC", label: "Available water capacity", dim: "awc", u: "in/in", v: 0.18 },
      { k: "L", sym: "L", label: "Depth of soil layer", dim: "length", u: "in", v: 36 }],
    outputs: [{ k: "SWD", sym: "SWD", label: "Soil water depletion (depth to refill to field capacity)", dim: "length", u: "in", dp: 2 }],
    f: v => ({ SWD: v.fd * v.AWC * v.L }),
    examples: [{ ref: "Example 2.3", page: 18, in: { fd: 0.44, AWC: 0.18, L: 36 }, out: { SWD: 2.85 } }],
  });

  C({
    id: "eq-2.13", eq: ["2.13"], sec: "2.5", page: 17, title: "Soil water depletion from water contents",
    tags: ["SWD", "soil water deficit", "refill depth"],
    inputs: [
      { k: "fc", sym: "θ<sub>fc</sub>", label: "Water content at field capacity", dim: "frac", u: "decimal", v: 0.34 },
      { k: "thv", sym: "θ<sub>v</sub>", label: "Current volumetric water content", dim: "frac", u: "decimal", v: 0.20 },
      { k: "L", sym: "L", label: "Depth of soil layer", dim: "length", u: "in", v: 12 }],
    outputs: [{ k: "SWD", sym: "SWD", label: "Soil water depletion", dim: "length", u: "in", dp: 2 }],
    f: v => ({ SWD: (v.fc - v.thv) * v.L }),
    examples: [{ ref: "Example 2.4", page: 23, in: { fc: 0.34, thv: 0.20, L: 12 }, out: { SWD: 1.7 }, tol: 0.03 },
               { ref: "Example 2.4", page: 23, in: { fc: 0.40, thv: 0.33, L: 18 }, out: { SWD: 1.3 }, tol: 0.04 }],
  });

  C({
    id: "eq-2.14", eq: ["2.14"], sec: "2.5", page: 18, title: "Total available water in the root zone (TAW)",
    tags: ["TAW", "root zone storage", "total available water"],
    inputs: [
      { k: "AWC", sym: "AWC", label: "Available water capacity", dim: "awc", u: "in/in", v: 0.18 },
      { k: "Rd", sym: "R<sub>d</sub>", label: "Depth of the plant root zone", dim: "length", u: "in", v: 36 }],
    outputs: [{ k: "TAW", sym: "TAW", label: "Total available water capacity in the root zone", dim: "length", u: "in", dp: 2 }],
    f: v => ({ TAW: v.AWC * v.Rd }),
  });

  // Layered wetting front: Example 2.4 / 2.5 procedure
  C({
    id: "wetting-depth", eq: [], sec: "2.9", page: 23, title: "Depth of penetration of infiltrated water in layered soil",
    tags: ["how deep will water go", "wetting front", "penetration depth", "deep percolation", "layered soil"],
    note: "Follows the procedure of Examples 2.4 and 2.5: each layer is filled to field capacity (Eq. 2.13) before water moves into the next layer.",
    inputs: [
      { k: "dz", sym: "d", label: "Depth of infiltrated water", dim: "length", u: "in", v: 4 },
      { k: "t", sym: "t", label: "Layer thicknesses, top down (last layer is treated as unlimited)", type: "list", v: "12, 18, 999" },
      { k: "fc", sym: "θ<sub>fc</sub>", label: "Field capacity of each layer", type: "list", v: "0.34, 0.40, 0.30" },
      { k: "thv", sym: "θ<sub>v</sub>", label: "Current water content of each layer", type: "list", v: "0.20, 0.33, 0.24" },
      { k: "Rd", sym: "R<sub>d</sub>", label: "Root zone depth (for deep percolation)", dim: "length", u: "in", v: 36 }],
    outputs: [
      { k: "depth", sym: "z", label: "Depth penetrated", dim: "length", u: "in", dp: 1 },
      { k: "dp", sym: "d<sub>p</sub>", label: "Water lost below the root zone", dim: "length", u: "in", dp: 2 }],
    f: v => {
      const t = M.list(v.t), fc = M.list(v.fc), th = M.list(v.thv);
      let rem = v.dz, z = 0, below = 0;
      for (let i = 0; i < t.length && rem > 1e-12; i++) {
        const def = fc[i] - th[i];
        const need = def * t[i];
        if (rem >= need && i < t.length - 1) {
          // fill whole layer
          const top = z, bot = z + t[i];
          if (bot > v.Rd) below += def * (bot - Math.max(top, v.Rd));
          rem -= need; z = bot;
        } else {
          const L = def > 0 ? rem / def : 0;
          const top = z, bot = z + L;
          if (bot > v.Rd) below += def * (bot - Math.max(top, v.Rd));
          z = bot; rem = 0;
        }
      }
      return { depth: z, dp: below };
    },
    // the book rounds the layer deficits to 1.7 and 1.3 in before continuing, so it reports 46.7 in and 0.6 in
    examples: [{ ref: "Examples 2.4 and 2.5", page: 24, in: { dz: 4 }, out: { depth: 46.7, dp: 0.64 }, tol: 0.1 }],
  });

  C({
    id: "tab-2.3", eq: [], sec: "2.7", page: 20, title: "Soil water characteristics by texture (Table 2.3)",
    tags: ["soil texture", "AWC table", "field capacity table", "sandy loam", "silt loam", "clay"],
    tables: ["2.3"],
    inputs: [
      { k: "tex", label: "Soil texture", type: "sel", opts: soilOpts, v: 5 },
      { k: "Rd", sym: "R<sub>d</sub>", label: "Root zone depth (optional, for TAW)", dim: "length", u: "in", v: 36 }],
    outputs: [
      { k: "fc", sym: "θ<sub>fc</sub>", label: "Field capacity", dim: "frac", u: "decimal", dp: 2 },
      { k: "wp", sym: "θ<sub>wp</sub>", label: "Wilting point", dim: "frac", u: "decimal", dp: 2 },
      { k: "AWC", sym: "AWC", label: "Available water capacity", dim: "awc", u: "in/in", dp: 2 },
      { k: "TAW", sym: "TAW", label: "Total available water in root zone", dim: "length", u: "in", dp: 2 }],
    f: v => { const r = T["2.3"].rows[v.tex]; return { fc: r[1], wp: r[2], AWC: r[3], TAW: r[3] * v.Rd }; },
  });
})(typeof window !== "undefined" ? window : globalThis);

/* ---- ch03.js ---- */
/* Chapter 3  Measuring Water Applications  (Equations 3.1 to 3.8, Tables 3.1 to 3.4) */
(function (G) {
  const T = G.TAB = G.TAB || {};
  const UN = G.UNITS;

  // Table 3.1. Conversion factors used in water measurement (p. 36)
  // rows: [group, from unit, factor, to unit]  meaning 1 <from> = factor <to>
  T["3.1"] = {
    title: "Conversion factors used in water measurement",
    cols: ["Group", "1 unit of", "equals", "of"],
    rows: [
      ["Volume (USCS)", "gal", 8.33, "lb"], ["Volume (USCS)", "ft³", 7.48, "gal"], ["Volume (USCS)", "ac-in", 3630, "ft³"],
      ["Volume (USCS)", "ac-in", 27154, "gal"], ["Volume (USCS)", "ac-ft", 43560, "ft³"], ["Volume (USCS)", "ac-ft", 325851, "gal"],
      ["Volume (USCS to SI)", "ft³", 0.02832, "m³"], ["Volume (USCS to SI)", "L", 0.264, "gal"], ["Volume (USCS to SI)", "gal", 3.79, "L"],
      ["Volume (USCS to SI)", "m³", 264.2, "gal"], ["Volume (USCS to SI)", "ac-in", 1.028, "ha-cm"],
      ["Volume (SI)", "L", 1000, "cm³"], ["Volume (SI)", "cm³", 0.001, "L"], ["Volume (SI)", "m³", 1000, "L"], ["Volume (SI)", "L", 0.001, "m³"],
      ["Volume (SI)", "ha-cm", 100, "m³"],
      ["Flow (USCS)", "cfs", 449, "gpm (450 for practical purposes)"], ["Flow (USCS)", "cfs", 1, "ac-in/hr"],
      ["Flow (USCS)", "ac-in/hr", 452, "gpm (450 for practical purposes)"], ["Flow (USCS)", "gpm", 0.00223, "cfs"],
      ["Flow (USCS)", "gpm", 0.00221, "ac-in/hr"],
      ["Flow (USCS to SI)", "cfs", 0.02832, "cms"], ["Flow (USCS to SI)", "cms", 35.31, "cfs"], ["Flow (USCS to SI)", "gpm", 0.06309, "L/s"],
      ["Flow (USCS to SI)", "L/s", 15.85, "gpm"], ["Flow (USCS to SI)", "gal/h", 63.1, "mL/s"],
      ["Flow (SI)", "L/s", 1000, "mL/s"], ["Flow (SI)", "cms", 16.7, "L/min (as printed)"],
      ["Length (USCS)", "mile", 5280, "ft"], ["Length (USCS)", "rod", 16.5, "ft"],
      ["Length (USCS to SI)", "ft", 0.3048, "meters"], ["Length (USCS to SI)", "meter", 3.281, "ft"],
      ["Length (SI)", "cm", 0.01, "meter"], ["Length (SI)", "meter", 100, "cm"], ["Length (SI)", "km", 1000, "meter"],
      ["Area (USCS)", "ac", 43560, "ft²"], ["Area (USCS to SI)", "ac", 0.4047, "ha"], ["Area (USCS to SI)", "ha", 2.471, "ac"],
      ["Area (SI)", "ha", 10000, "m²"]],
    notes: "cfs = cubic feet per second, cms = cubic meters per second, gpm = gallons per minute, L/s = liters per second. " +
      "The book prints 1 cms = 16.7 L/min; the true value is 60,000 L/min (1 L/s = 60 L/min, and 1 m³/min = 16.7 L/s).",
  };

  // Table 3.2. Weir shapes and discharge formulas (p. 45). Q in cfs, L and H in ft, all sharp crested.
  T["3.2"] = {
    title: "Weir shapes and discharge formulas",
    cols: ["Measuring device (all sharp crested)", "Formula"],
    rows: [["Rectangular weir (without side contraction)", "Q = 3.33 L H^3/2"],
           ["Trapezoidal weir (4:1 side slopes)", "Q = 3.37 L H^3/2"],
           ["90° triangular weir", "Q = 2.49 H^3/2 (as printed)"]],
    notes: "Q = flow rate (cfs), L = crest length (ft), H = head above the crest (ft). The book prints the 90° triangular (V-notch) weir " +
      "as 2.49 H^3/2; the standard V-notch relation is Q = 2.49 H^5/2 (USBR Water Measurement Manual), which the calculator uses.",
  };

  // Table 3.3. Flow rate of 1-foot Parshall flume (p. 45)
  T["3.3"] = {
    title: "Flow rate of 1-foot Parshall flume",
    cols: ["Upstream head (ft)", "Flow rate (cfs)", "Flow rate (gpm)"],
    rows: [[0.25, 0.46, 207], [0.50, 1.35, 605], [0.75, 2.53, 1140], [1.00, 3.95, 1770], [1.25, 5.58, 2500],
           [1.50, 7.41, 3320], [1.75, 9.40, 4220], [2.00, 11.60, 5190]],
    notes: "Q = 3.95 H^1.55, Q = flow rate in cfs and H = head in ft. Assumes that free flowing criteria is met.",
  };

  // Table 3.4. Flow rate of 8-inch fiberglass RBC flume (p. 45)
  T["3.4"] = {
    title: "Flow rate of 8-inch fiberglass RBC flume",
    cols: ["Upstream head (ft)", "Flow rate (cfs)", "Flow rate (gpm)"],
    rows: [[0.10, 0.06, 29], [0.20, 0.21, 93], [0.30, 0.42, 188], [0.40, 0.70, 314], [0.50, 1.04, 469],
           [0.60, 1.45, 651], [0.70, 1.92, 860]],
    notes: "Q = 3.575 (H + 0.01259)^1.8419, Q = flow rate in cfs and H = head in ft. Assumes that free flowing criteria is met.",
  };

  const C = (s) => { s.ch = 3; s.file = "ch03"; return calc(s); };

  C({
    id: "eq-3.1-3.2", eq: ["3.1", "3.2"], sec: "3.1", page: 35, title: "Depth applied from volume and area",
    tags: ["depth applied", "how many inches did I put on", "volume to depth", "acre-inches", "gross depth"],
    inputs: [
      { k: "V", sym: "V", label: "Volume of water applied", dim: "volume", u: "ac-in", v: 135 },
      { k: "A", sym: "A", label: "Area irrigated", dim: "area", u: "ac", v: 90 }],
    outputs: [{ k: "d", sym: "d", label: "Depth of water applied", dim: "length", u: "in", dp: 2 }],
    f: v => ({ d: v.V / v.A }),
    examples: [{ ref: "Example 3.2", page: 37, in: { V: 135, A: 90 }, out: { d: 1.5 } }],
    figs: ["3.1"],
  });

  C({
    id: "meter-depth", eq: ["3.1"], sec: "3.1", page: 37, title: "Depth applied from flow meter totalizer readings",
    tags: ["totalizer", "flow meter reading", "meter before and after", "how much water did I apply", "gallons to inches"],
    note: "Follows Example 3.2: volume applied is the difference between the totalizer readings, then d = V / A (Eq. 3.1).",
    inputs: [
      { k: "after", sym: "V<sub>after</sub>", label: "Totalizer reading after irrigation", dim: "volume", u: "gal", v: 12590900 },
      { k: "before", sym: "V<sub>before</sub>", label: "Totalizer reading before irrigation", dim: "volume", u: "gal", v: 8925100 },
      { k: "A", sym: "A", label: "Area irrigated", dim: "area", u: "ac", v: 90 }],
    outputs: [
      { k: "V", sym: "V", label: "Volume applied", dim: "volume", u: "gal", dp: 0 },
      { k: "d", sym: "d", label: "Depth of water applied", dim: "length", u: "in", dp: 2 }],
    f: v => {
      const V = v.after - v.before;
      const Vacin = UN.convert("volume", V, "gal", "ac-in");
      return { V, d: Vacin / v.A };
    },
    examples: [{ ref: "Example 3.2", page: 37, in: { after: 12590900, before: 8925100, A: 90 }, out: { V: 3665800, d: 1.5 } }],
  });

  C({
    id: "eq-3.3", eq: ["3.3"], sec: "3.1", page: 35, title: "Depth applied from flow rate and time (Q t = A d)",
    tags: ["Qt = Ad", "depth from flow and hours", "how many inches in 24 hours", "gpm to inches", "pump flow depth"],
    note: "Assumes the flow rate is constant over the irrigation. The book uses 450 gpm = 1 ac-in/hr for practical work; the calculator uses the exact factor (1 ac-in/hr = 452.6 gpm).",
    inputs: [
      { k: "Q", sym: "Q", label: "System flow rate", dim: "flow", u: "ac-in/hr", v: 2 },
      { k: "t", sym: "t", label: "Time of water application", dim: "time", u: "hr", v: 24 },
      { k: "A", sym: "A", label: "Area irrigated", dim: "area", u: "ac", v: 30 }],
    outputs: [
      { k: "V", sym: "V", label: "Volume applied", dim: "volume", u: "ac-in", dp: 1 },
      { k: "d", sym: "d", label: "Depth of water applied", dim: "length", u: "in", dp: 2 }],
    f: v => ({ V: v.Q * v.t, d: v.Q * v.t / v.A }),
    // book converts 900 gpm with 450 gpm per ac-in/hr; 900 gpm exactly is 1.989 ac-in/hr
    examples: [{ ref: "Example 3.1", page: 37, in: { Q: 1.989, t: 24, A: 30 }, out: { d: 1.6 } }],
    figs: ["3.1"],
  });

  C({
    id: "run-time", eq: ["3.3"], sec: "3.1", page: 35, title: "Hours to apply a desired depth",
    tags: ["how long do I run", "set time", "hours to apply one inch", "run time", "days to cover the field"],
    note: "Rearranged Eq. 3.3: t = A d / Q. Days are based on the hours per day the system can run.",
    inputs: [
      { k: "Q", sym: "Q", label: "System flow rate", dim: "flow", u: "ac-in/hr", v: 2.65 },
      { k: "A", sym: "A", label: "Area to irrigate", dim: "area", u: "ac", v: 60 },
      { k: "d", sym: "d", label: "Desired gross depth", dim: "length", u: "in", v: 1 },
      { k: "hpd", sym: "h", label: "Hours of operation per day", dim: "time", u: "hr", v: 24 }],
    outputs: [
      { k: "t", sym: "t", label: "Time required", dim: "time", u: "hr", dp: 1 },
      { k: "days", sym: "days", label: "Days required at the stated hours per day", dim: "none", dp: 2 }],
    f: v => { const t = v.A * v.d / v.Q; return { t, days: t / v.hpd }; },
  });

  C({
    id: "eq-3.4", eq: ["3.4"], sec: "3.1", page: 36, title: "Average application intensity (d/t = Q/A)",
    tags: ["application rate", "inches per hour", "intensity", "gross application rate"],
    inputs: [
      { k: "Q", sym: "Q", label: "System flow rate", dim: "flow", u: "ac-in/hr", v: 2 },
      { k: "A", sym: "A", label: "Area irrigated at one time", dim: "area", u: "ac", v: 30 }],
    outputs: [{ k: "r", sym: "d/t", label: "Average application intensity", dim: "rate", u: "in/hr", dp: 3 }],
    f: v => ({ r: v.Q / v.A }),
    // from Example 3.1: 1.6 in over 24 hr
    examples: [{ ref: "Example 3.1 (as a rate)", page: 37, in: { Q: 1.989, A: 30 }, out: { r: 1.6 / 24 } }],
  });

  C({
    id: "eq-3.5", eq: ["3.5"], sec: "3.1", page: 36, title: "Sprinkler application rate (96.3 q / A)",
    tags: ["sprinkler application rate", "precipitation rate", "head spacing", "nozzle gpm to inches per hour", "96.3"],
    note: "The area irrigated by one head is the spacing between heads on the lateral times the spacing between laterals.",
    inputs: [
      { k: "q", sym: "q", label: "Discharge of one sprinkler or emitter", dim: "flow", u: "gpm", v: 5 },
      { k: "S1", sym: "S<sub>e</sub>", label: "Spacing between heads on the lateral", dim: "length", u: "ft", v: 40 },
      { k: "S2", sym: "S<sub>l</sub>", label: "Spacing between laterals", dim: "length", u: "ft", v: 60 }],
    outputs: [
      { k: "A", sym: "A", label: "Area irrigated by the device", dim: "area", u: "ft²", dp: 0 },
      { k: "Ar", sym: "A<sub>r</sub>", label: "Application rate (precipitation rate)", dim: "rate", u: "in/hr", dp: 3 }],
    f: v => { const A = v.S1 * v.S2; return { A, Ar: 96.3 * v.q / A }; },
  });

  C({
    id: "eq-3.6", eq: ["3.6"], sec: "3.2", page: 37, title: "Continuity: flow from velocity and flow area",
    tags: ["continuity", "Q = VA", "velocity times area", "channel flow", "ditch flow"],
    inputs: [
      { k: "Vm", sym: "V<sub>m</sub>", label: "Mean velocity of flow", dim: "velocity", u: "ft/s", v: 5 },
      { k: "Af", sym: "A<sub>f</sub>", label: "Cross-sectional area of flow", dim: "area", u: "ft²", v: 0.349 }],
    outputs: [{ k: "Q", sym: "Q", label: "Flow rate", dim: "flow", u: "cfs", dp: 3 }],
    f: v => ({ Q: v.Vm * v.Af }),
    examples: [{ ref: "Example 3.3", page: 38, in: { Vm: 5, Af: 0.349 }, out: { Q: 1.75 } }],
    figs: ["3.2"],
  });

  C({
    id: "pipe-flow", eq: ["3.6"], sec: "3.2", page: 38, title: "Flow in a full circular pipe from velocity",
    tags: ["pipe flow", "pipe velocity", "inside diameter", "how many gpm in my pipe", "ft/s to gpm"],
    inputs: [
      { k: "ID", sym: "ID", label: "Inside diameter of the pipe", dim: "length", u: "in", v: 8 },
      { k: "Vm", sym: "V<sub>m</sub>", label: "Mean velocity of flow", dim: "velocity", u: "ft/s", v: 5 }],
    outputs: [
      { k: "Af", sym: "A<sub>f</sub>", label: "Flow area (π ID² / 4)", dim: "area", u: "ft²", dp: 3 },
      { k: "Q", sym: "Q", label: "Flow rate", dim: "flow", u: "cfs", dp: 3 }],
    f: v => { const Af = Math.PI * Math.pow(v.ID / 12, 2) / 4; return { Af, Q: v.Vm * Af }; },
    examples: [{ ref: "Example 3.3", page: 38, in: { ID: 8, Vm: 5 }, out: { Af: 0.349, Q: 1.75 } }],
    figs: ["3.3"],
  });

  C({
    id: "meter-timing", eq: [], sec: "3.3", page: 39, title: "Flow rate by timing a meter totalizer or sweep hand",
    tags: ["time the meter", "sweep hand", "totalizer timing", "check flow rate", "propeller meter"],
    note: "Section 3.3.1: the true flow rate is best found by timing the sweep hand or the totalizer digits rather than reading the rate indicator.",
    inputs: [
      { k: "vol", sym: "ΔV", label: "Volume per digit or per sweep revolution", dim: "volume", u: "gal", v: 100 },
      { k: "n", sym: "n", label: "Number of digits or revolutions counted", dim: "count", u: "#", v: 10 },
      { k: "t", sym: "t", label: "Time to count them", dim: "time", u: "s", v: 90 }],
    outputs: [{ k: "Q", sym: "Q", label: "Flow rate", dim: "flow", u: "gpm", dp: 1 }],
    f: v => ({ Q: v.vol * v.n / (v.t / 60) }),
  });

  C({
    id: "eq-3.7", eq: ["3.7"], sec: "3.3", page: 41, title: "Orifice meter discharge",
    tags: ["orifice", "end cap orifice", "pipe end cap meter", "orifice plate", "differential head"],
    inputs: [
      { k: "K", sym: "K", label: "Flow coefficient (from the orifice rating)", dim: "none", v: 0.6,
        help: "The book does not give a value; about 0.6 is typical for a sharp-edged orifice. Use the manufacturer's rating when available." },
      { k: "D0", sym: "D<sub>0</sub>", label: "Orifice diameter", dim: "length", u: "ft", v: 0.5 },
      { k: "dh", sym: "Δh", label: "Head of water upstream of the orifice", dim: "length", u: "ft", v: 4 }],
    outputs: [
      { k: "A0", sym: "A<sub>0</sub>", label: "Cross-section area of the orifice", dim: "area", u: "ft²", dp: 4 },
      { k: "Q", sym: "Q", label: "Flow rate", dim: "flow", u: "cfs", dp: 3 }],
    f: v => { const A0 = Math.PI * v.D0 * v.D0 / 4; return { A0, Q: v.K * A0 * Math.sqrt(2 * 32.2 * v.dh) }; },
    figs: ["3.12"],
  });

  C({
    id: "eq-3.8", eq: ["3.8"], sec: "3.4", page: 43, title: "Float method for open channel flow",
    tags: ["float method", "surface velocity", "ditch flow estimate", "stick in the ditch", "velocity correction"],
    note: "K<sub>f</sub> ranges from 0.65 (water 1 ft deep or less) to 0.8 (20 ft deep or more). The float method is a quick estimate only.",
    inputs: [
      { k: "L", sym: "L", label: "Distance the float travels", dim: "length", u: "ft", v: 50 },
      { k: "t", sym: "t", label: "Travel time", dim: "time", u: "s", v: 25 },
      { k: "Kf", sym: "K<sub>f</sub>", label: "Velocity correction factor", dim: "none", v: 0.65 },
      { k: "Af", sym: "A<sub>f</sub>", label: "Cross-sectional area of flow", dim: "area", u: "ft²", v: 3 }],
    outputs: [
      { k: "Vs", sym: "V<sub>s</sub>", label: "Surface velocity", dim: "velocity", u: "ft/s", dp: 2 },
      { k: "Vm", sym: "V<sub>m</sub>", label: "Mean velocity", dim: "velocity", u: "ft/s", dp: 2 },
      { k: "Q", sym: "Q", label: "Flow rate (Eq. 3.6)", dim: "flow", u: "cfs", dp: 2 }],
    f: v => { const Vs = v.L / v.t, Vm = v.Kf * Vs; return { Vs, Vm, Q: Vm * v.Af }; },
    figs: ["3.17"],
  });

  C({
    id: "tab-3.2", eq: [], sec: "3.4", page: 45, title: "Sharp-crested weir discharge (Table 3.2)",
    tags: ["weir", "rectangular weir", "trapezoidal weir", "Cipolletti", "V-notch weir", "triangular weir", "ditch measurement"],
    tables: ["3.2"], figs: ["3.18"],
    note: "Rectangular and trapezoidal weirs use Q = C L H<sup>3/2</sup>. The book prints the 90° triangular weir as 2.49 H<sup>3/2</sup>; the calculator uses the standard V-notch form 2.49 H<sup>5/2</sup> (a V-notch has no crest length, so the 3/2 exponent is a misprint). The nappe must spring free of the weir.",
    inputs: [
      { k: "type", label: "Weir shape", type: "sel", opts: [["Rectangular (no side contraction)", 0], ["Trapezoidal", 1], ["90° triangular (V-notch)", 2]], v: 0 },
      { k: "L", sym: "L", label: "Crest length (not used for V-notch)", dim: "length", u: "ft", v: 2 },
      { k: "H", sym: "H", label: "Head above the crest", dim: "length", u: "ft", v: 0.5 }],
    outputs: [{ k: "Q", sym: "Q", label: "Flow rate", dim: "flow", u: "cfs", dp: 3 }],
    f: v => {
      const t = +v.type;
      if (t === 0) return { Q: 3.33 * v.L * Math.pow(v.H, 1.5) };
      if (t === 1) return { Q: 3.37 * v.L * Math.pow(v.H, 1.5) };
      return { Q: 2.49 * Math.pow(v.H, 2.5) };
    },
  });

  C({
    id: "tab-3.3", eq: [], sec: "3.4", page: 45, title: "1-foot Parshall flume flow (Table 3.3)",
    tags: ["Parshall flume", "flume reading", "staff gauge", "head to flow", "ditch flow"],
    tables: ["3.3"], figs: ["3.19"],
    note: "Q = 3.95 H<sup>1.55</sup> (cfs, ft). Valid for free flow only.",
    inputs: [{ k: "H", sym: "H", label: "Upstream head", dim: "length", u: "ft", v: 1 }],
    outputs: [{ k: "Q", sym: "Q", label: "Flow rate", dim: "flow", u: "cfs", dp: 2 }],
    f: v => ({ Q: 3.95 * Math.pow(v.H, 1.55) }),
    examples: T["3.3"].rows.map(r => ({ ref: "Table 3.3", page: 45, in: { H: r[0] }, out: { Q: r[1] } })),
  });

  C({
    id: "tab-3.4", eq: [], sec: "3.4", page: 45, title: "8-inch fiberglass RBC flume flow (Table 3.4)",
    tags: ["RBC flume", "ramp flume", "concrete ditch flume", "staff gauge", "head to flow"],
    tables: ["3.4"], figs: ["3.20"],
    note: "Q = 3.575 (H + 0.01259)<sup>1.8419</sup> (cfs, ft). Valid for free flow only.",
    inputs: [{ k: "H", sym: "H", label: "Upstream head", dim: "length", u: "ft", v: 0.5 }],
    outputs: [{ k: "Q", sym: "Q", label: "Flow rate", dim: "flow", u: "cfs", dp: 3 }],
    f: v => ({ Q: 3.575 * Math.pow(v.H + 0.01259, 1.8419) }),
    // table values printed to 0.01 cfs; the 0.10 ft row (0.06) differs by rounding only
    examples: T["3.4"].rows.map(r => ({ ref: "Table 3.4", page: 45, in: { H: r[0] }, out: { Q: r[1] }, tol: r[0] < 0.15 ? 0.1 : 0.02 })),
  });

  C({
    id: "tab-3.1", eq: [], sec: "3.1", page: 36, title: "Water measurement conversion factors (Table 3.1)",
    tags: ["conversion", "gpm to cfs", "ac-in to gallons", "cfs to gpm", "liters per second", "unit conversion"],
    tables: ["3.1"],
    inputs: [
      { k: "row", label: "Conversion", type: "sel", opts: T["3.1"].rows.map((r, i) => [`1 ${r[1]} = ${r[2]} ${r[3]}`, i]), v: 3 },
      { k: "x", sym: "x", label: "Amount to convert (in the first unit)", dim: "none", v: 1 }],
    outputs: [
      { k: "y", sym: "y", label: "Converted amount (in the second unit)", dim: "none", dp: 4 },
      { k: "txt", label: "Conversion used", text: true }],
    f: v => { const r = T["3.1"].rows[v.row]; return { y: v.x * r[2], txt: `${v.x} ${r[1]} = ${+(v.x * r[2]).toPrecision(6)} ${r[3]}` }; },
    examples: [{ ref: "Table 3.1", page: 36, in: { row: 3, x: 135 }, out: { y: 3665790 } }],
  });
})(typeof window !== "undefined" ? window : globalThis);

/* ---- ch04.js ---- */
/* Chapter 4  Plant Water Use  (Equations 4.1 to 4.15, Tables 4.1 to 4.8, Figures 4.9 to 4.12, 4.14, 4.15)
   Note: the book prints equation numbers 4.10, 4.11 and 4.12 twice (p. 67 and pp. 68 to 71).
   The second set uses ids like eq-4.10-p68 and keeps the printed number in `eq`. */
(function (G) {
  const T = G.TAB = G.TAB || {};
  const UN = G.UNITS;
  UN.addDim("vpslope", "Vapor pressure slope / psychrometric constant", [["kPa/°C", 1], ["mbar/°C", 0.1], ["kPa/°F", 1.8]]);
  UN.addDim("resist", "Resistance to vapor flow", [["s/m", 1], ["s/cm", 100]]);

  // Table 4.1. Effect of air temperature on saturation vapor pressure and slope (p. 58)
  T["4.1"] = {
    title: "Effect of air temperature on saturation vapor pressure and slope of saturation vapor pressure",
    cols: ["Air temperature (°F)", "Air temperature (°C)", "Saturation vapor pressure, es (kPa)", "Slope, Δ (kPa/°C)"],
    rows: [
      [20, -7, 0.37, 0.029], [25, -4, 0.46, 0.034], [30, -1, 0.56, 0.041], [35, 2, 0.69, 0.049], [40, 4, 0.84, 0.059],
      [45, 7, 1.02, 0.070], [50, 10, 1.23, 0.082], [55, 13, 1.48, 0.097], [60, 16, 1.77, 0.113], [65, 18, 2.11, 0.132],
      [70, 21, 2.50, 0.154], [75, 24, 2.96, 0.178], [80, 27, 3.50, 0.206], [85, 29, 4.11, 0.237], [90, 32, 4.81, 0.272],
      [95, 35, 5.62, 0.311], [100, 38, 6.55, 0.354], [105, 41, 7.60, 0.403], [110, 43, 8.79, 0.457], [115, 46, 10.14, 0.518],
      [120, 49, 11.67, 0.584]],
    notes: "A pressure of 1 kPa = 0.145 lb/in². The atmospheric pressure at sea level averages about 101 kPa.",
  };
  // Table 4.2. Psychrometric constant as a function of elevation (p. 58)
  T["4.2"] = {
    title: "Value of the psychrometric constant (γ) as a function of elevation",
    cols: ["Elevation above sea level (ft)", "Psychrometric constant, γ (kPa/°C)"],
    rows: [[0, 0.067], [500, 0.066], [1000, 0.065], [1500, 0.064], [2000, 0.063], [2500, 0.062], [3000, 0.060], [3500, 0.059],
           [4000, 0.058], [4500, 0.057], [5000, 0.056], [5500, 0.055], [6000, 0.054], [6500, 0.053], [7000, 0.052]],
  };
  // Table 4.3. Basal crop coefficient information (p. 65)
  T["4.3"] = {
    title: "Basal crop coefficient information for selected crops (adapted from Allen et al. 1998)",
    cols: ["Crop", "Kci", "Kcp′", "Kcm′", "FS1", "FS2", "FS3", "frc"],
    rows: [
      ["Alfalfa, first cuttings", 0.30, 1.15, 1.10, 0.13, 0.53, 0.87, 0.45],
      ["Alfalfa, later cuttings", 0.30, 1.15, 1.10, 0.11, 0.56, 0.78, 0.45],
      ["Beans, dry", 0.15, 1.00, 0.80, 0.25, 0.50, 0.80, 0.55],
      ["Beans, green", 0.15, 1.00, 0.80, 0.22, 0.56, 0.89, 0.55],
      ["Carrot", 0.15, 0.95, 0.85, 0.17, 0.42, 0.83, 0.65],
      ["Corn, field", 0.15, 1.15, 0.15, 0.18, 0.41, 0.71, 0.45],
      ["Corn, sweet", 0.15, 1.10, 1.00, 0.30, 0.60, 0.90, 0.50],
      ["Cotton", 0.15, 1.10, 0.50, 0.17, 0.44, 0.75, 0.35],
      ["Cucumber", 0.15, 0.95, 0.70, 0.19, 0.48, 0.86, 0.50],
      ["Grapes, table", 0.15, 0.80, 0.40, 0.10, 0.34, 0.71, 0.65],
      ["Grapes, wine", 0.15, 0.65, 0.40, 0.10, 0.34, 0.71, 0.55],
      ["Hay, Bermuda grass", 0.50, 0.95, 0.80, 0.07, 0.19, 0.74, 0.45],
      ["Hay, rye grass", 0.85, 1.00, 0.95, 0.07, 0.19, 0.74, 0.40],
      ["Lentil", 0.15, 1.05, 0.20, 0.15, 0.35, 0.76, 0.50],
      ["Lettuce", 0.15, 0.90, 0.90, 0.29, 0.67, 0.90, 0.70],
      ["Pepper, bell", 0.15, 1.00, 0.80, 0.14, 0.33, 0.86, 0.70],
      ["Potato", 0.15, 1.10, 0.65, 0.27, 0.45, 0.88, 0.65],
      ["Rice", 1.00, 1.15, 0.55, 0.20, 0.40, 0.80, 0.80],
      ["Sorghum, grain", 0.15, 1.00, 0.35, 0.16, 0.44, 0.76, 0.45],
      ["Soybeans", 0.15, 1.10, 0.30, 0.14, 0.39, 0.82, 0.50],
      ["Sugar beet", 0.15, 1.15, 0.90, 0.28, 0.50, 0.78, 0.45],
      ["Sunflower", 0.15, 1.10, 0.25, 0.19, 0.46, 0.81, 0.55],
      ["Tomato", 0.15, 1.10, 0.70, 0.23, 0.48, 0.81, 0.60],
      ["Watermelon", 0.15, 0.95, 0.70, 0.18, 0.45, 0.73, 0.60],
      ["Wheat, spring", 0.15, 1.10, 0.15, 0.15, 0.33, 0.78, 0.45],
      ["Wheat, winter (Kci 0.15)", 0.15, 1.10, 0.15, 0.48, 0.70, 0.93, 0.45],
      ["Wheat, winter (Kci 0.50, fallow full cover, soil not frozen)", 0.50, 1.10, 0.15, 0.48, 0.70, 0.93, 0.45],
      ["Pasture, rotated grazing", 0.30, 0.90, 0.80, 0.05, 0.15, 1.00, 0.40],
      ["Pasture, continuous grazing", 0.30, 0.70, 0.70, 0.05, 0.15, 1.00, 0.40],
      ["Citrus, no ground cover, 70% canopy", 0.65, 0.60, 0.65, 0.16, 0.41, 0.74, 0.50],
      ["Citrus, no ground cover, 50% canopy", 0.60, 0.55, 0.60, 0.16, 0.41, 0.74, 0.50],
      ["Citrus, no ground cover, 20% canopy", 0.45, 0.40, 0.50, 0.16, 0.41, 0.74, 0.50],
      ["Citrus, with ground cover, 70% canopy", 0.75, 0.70, 0.75, 0.16, 0.41, 0.74, 0.50],
      ["Citrus, with ground cover, 50% canopy", 0.75, 0.75, 0.75, 0.16, 0.41, 0.74, 0.50],
      ["Citrus, with ground cover, 20% canopy", 0.80, 0.80, 0.85, 0.16, 0.41, 0.74, 0.50],
      ["Apples, cherries, pears: no ground cover, killing frost", 0.35, 0.90, 0.65, 0.13, 0.33, 0.88, 0.50],
      ["Apples, cherries, pears: no ground cover, no frost", 0.50, 0.90, 0.70, 0.13, 0.33, 0.88, 0.50],
      ["Apples, cherries, pears: ground cover, killing frost", 0.45, 1.15, 0.90, 0.13, 0.33, 0.88, 0.50],
      ["Apples, cherries, pears: ground cover, no frost", 0.75, 1.15, 0.80, 0.13, 0.33, 0.88, 0.50]],
    notes: "[a] The critical fraction remaining (frc) is discussed in section 4.6.2. [b] Winter wheat: the larger Kci (0.50) is for the initial " +
      "period when fallow wheat provides full ground cover but the soil is not frozen (printed as 0.15 / 0.50 in one row).",
  };
  const cropOpts = T["4.3"].rows.map((r, i) => [r[0], i]);
  const CORN = 5;

  // Table 4.4. Crop coefficient adjustment factor Kcf (p. 66)
  T["4.4"] = {
    title: "Crop coefficient adjustment factor (Kcf) for wind speeds and relative humidity",
    cols: ["Crop height (ft)", "Wind run (mi/d)", "RHmin 20%", "30%", "40%", "50%", "60%", "70%", "80%"],
    rh: [20, 30, 40, 50, 60, 70, 80],
    wind: [50, 100, 150, 200, 250, 300, 350],
    heights: [2, 4, 6, 8],
    grid: {
      2: [[0.03, 0.01, -0.02, -0.04, -0.06, -0.09, -0.11], [0.06, 0.03, 0.01, -0.02, -0.04, -0.07, -0.09],
          [0.08, 0.05, 0.03, 0.00, -0.02, -0.05, -0.07], [0.10, 0.08, 0.05, 0.03, 0.00, -0.02, -0.05],
          [0.12, 0.10, 0.07, 0.05, 0.02, 0.00, -0.03], [0.15, 0.12, 0.10, 0.07, 0.05, 0.02, 0.00],
          [0.17, 0.14, 0.12, 0.09, 0.07, 0.04, 0.02]],
      4: [[0.04, 0.01, -0.02, -0.05, -0.08, -0.11, -0.14], [0.07, 0.04, 0.01, -0.02, -0.05, -0.08, -0.11],
          [0.10, 0.07, 0.04, 0.01, -0.02, -0.06, -0.09], [0.12, 0.09, 0.06, 0.03, 0.00, -0.03, -0.06],
          [0.15, 0.12, 0.09, 0.06, 0.03, 0.00, -0.03], [0.18, 0.15, 0.12, 0.09, 0.06, 0.03, 0.00],
          [0.21, 0.18, 0.15, 0.11, 0.08, 0.05, 0.02]],
      6: [[0.05, 0.01, -0.02, -0.06, -0.09, -0.12, -0.16], [0.08, 0.04, 0.01, -0.02, -0.06, -0.09, -0.13],
          [0.11, 0.08, 0.04, 0.01, -0.03, -0.06, -0.10], [0.14, 0.11, 0.07, 0.04, 0.00, -0.03, -0.07],
          [0.17, 0.14, 0.10, 0.07, 0.03, 0.00, -0.04], [0.20, 0.17, 0.13, 0.10, 0.06, 0.03, 0.00],
          [0.23, 0.20, 0.16, 0.13, 0.10, 0.06, 0.03]],
      8: [[0.05, 0.01, -0.02, -0.06, -0.10, -0.14, -0.17], [0.09, 0.05, 0.01, -0.03, -0.06, -0.10, -0.14],
          [0.12, 0.08, 0.04, 0.01, -0.03, -0.07, -0.11], [0.15, 0.12, 0.08, 0.04, 0.00, -0.03, -0.07],
          [0.19, 0.15, 0.11, 0.07, 0.04, 0.00, -0.04], [0.22, 0.18, 0.15, 0.11, 0.07, 0.03, -0.01],
          [0.25, 0.22, 0.18, 0.14, 0.10, 0.07, 0.03]],
    },
    mult: [[10, 1.17], [12, 1.23], [14, 1.29], [16, 1.34], [20, 1.44], [25, 1.53]],
    notes: "Multiplier for other crop heights (multiply times values for 6-ft crop): 10 ft 1.17, 12 ft 1.23, 14 ft 1.29, 16 ft 1.34, 20 ft 1.44, 25 ft 1.53.",
  };
  T["4.4"].rows = [];
  for (const h of T["4.4"].heights) T["4.4"].grid[h].forEach((r, i) => T["4.4"].rows.push([h, T["4.4"].wind[i], ...r]));

  // Table 4.5. Fraction of the soil surface wetted (p. 70)
  T["4.5"] = {
    title: "Fraction of the soil surface wetted for various types of irrigation systems",
    cols: ["Wetting method", "Fw"],
    rows: [["Rain", 1.0], ["Sprinkler: above canopy sprinklers", 1.0], ["Sprinkler: in-canopy sprinklers", 0.75],
           ["Sprinkler: LEPA systems (alternate furrows wetted)", 0.5], ["Borders and basin irrigation", 1.0],
           ["Furrow: large application depth", 1.0], ["Furrow: small application depth", 0.5], ["Furrow: alternate furrows irrigated", 0.5],
           ["Surface trickle or drip irrigation", 0.25], ["Subsurface drip: large applications", 0.1], ["Subsurface drip: normal applications", 0.0]],
  };
  // Table 4.6. Duration of wet soil evaporation td and decay function ft (p. 70)
  T["4.6"] = {
    title: "Duration of wet soil evaporation (td) for selected soil textures and values of the wet soil decay function (ft) for time since wetting (t)",
    cols: ["Time since wetting t (d)", "Clay (td 10)", "Clay loam (td 7)", "Silt loam (td 5)", "Sandy loam (td 4)", "Loamy sand (td 3)", "Sand (td 2)"],
    soils: [["Clay", 10], ["Clay loam", 7], ["Silt loam", 5], ["Sandy loam", 4], ["Loamy sand", 3], ["Sand", 2]],
    rows: [
      [0, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00], [1, 0.68, 0.62, 0.55, 0.50, 0.42, 0.29], [2, 0.55, 0.47, 0.37, 0.29, 0.18, 0.00],
      [3, 0.45, 0.35, 0.23, 0.13, 0.00, null], [4, 0.37, 0.24, 0.11, 0.00, null, null], [5, 0.29, 0.15, 0.00, null, null, null],
      [6, 0.23, 0.07, null, null, null, null], [7, 0.16, 0.00, null, null, null, null], [8, 0.11, null, null, null, null, null],
      [9, 0.05, null, null, null, null, null], [10, 0.00, null, null, null, null, null]],
  };
  // Table 4.7. Landscape coefficient factors (p. 73)
  T["4.7"] = {
    title: "Range of plant species, density, and microclimate factors for landscape coefficients (adapted from Costello and Jones, 2014)",
    cols: ["Type of vegetation", "KP high", "KP avg.", "KP low", "KD high", "KD avg.", "KD low", "KM high", "KM avg.", "KM low"],
    rows: [["Trees", 0.9, 0.5, 0.2, 1.3, 1.0, 0.5, 1.4, 1.0, 0.5],
           ["Shrubs", 0.7, 0.5, 0.2, 1.1, 1.0, 0.5, 1.3, 1.0, 0.5],
           ["Groundcover", 0.7, 0.5, 0.2, 1.1, 1.0, 0.5, 1.2, 1.0, 0.5],
           ["Mixed: trees, shrubs, and groundcover", 0.9, 0.5, 0.2, 1.3, 1.1, 0.6, 1.4, 1.0, 0.5],
           ["Turf grass", 0.8, 0.7, 0.6, 1.0, 1.0, 0.6, 1.2, 1.0, 0.8]],
  };
  // Table 4.8. Example weather data, High Plains Regional Climate Center (p. 75)
  T["4.8"] = {
    title: "Example weather, reference crop ET and growing degree day data from High Plains Regional Climate Center",
    cols: ["Month", "Day", "Tmax (°F)", "Tmin (°F)", "Tavg (°F)", "Dew point (°F)", "Wind speed (mi/hr)", "Solar radiation (Lang/d)", "Rain (in)", "ETo (in/d)", "Growing degree units"],
    rows: [
      [7, 2, 89.5, 63.9, 76.7, 70.4, 8.2, 559, 0.16, 0.26, 25], [7, 3, 87.5, 63.1, 75.3, 65.9, 5.4, 651, 0, 0.27, 25],
      [7, 4, 88.4, 64.6, 76.5, 68.3, 4.1, 668, 0, 0.26, 25], [7, 5, 86.7, 64.3, 75.5, 67.8, 3.0, 542, 0, 0.21, 25],
      [7, 6, 91.1, 65.6, 78.4, 70.2, 4.5, 600, 0, 0.25, 26], [7, 7, 91.3, 67.4, 79.4, 69.6, 9.5, 659, 0, 0.34, 27],
      [7, 8, 92.2, 62.6, 77.4, 66.0, 11.4, 643, 0.62, 0.38, 24], [7, 9, 83.8, 59.9, 71.9, 65.6, 5.0, 638, 0, 0.24, 22],
      [7, 10, 88.7, 62.5, 75.6, 68.8, 6.7, 597, 0.01, 0.26, 24], [7, 11, 85.0, 62.0, 73.5, 66.0, 5.8, 647, 0, 0.26, 24],
      [7, 12, 85.1, 58.1, 71.6, 64.0, 4.5, 548, 0, 0.22, 22], [7, 13, 91.8, 63.1, 77.5, 68.0, 8.7, 636, 0.14, 0.33, 25],
      [7, 14, 77.8, 63.4, 70.6, 65.3, 6.4, 407, 0.01, 0.16, 21], [7, 15, 81.4, 60.8, 71.1, 63.3, 4.2, 584, 0, 0.22, 21]],
  };

  // ---------- helpers ----------
  const tab41es = T["4.1"].rows.map(r => [r[0], r[2]]);
  const tab41d = T["4.1"].rows.map(r => [r[0], r[3]]);
  const tab42 = T["4.2"].rows.map(r => [r[0], r[1]]);
  // method 0 = book tables (4.1, 4.2), 1 = FAO-56 equations (Allen et al. 1998) that the tables were made from
  const esF = (Tf, m) => m ? M.es(M.F2C(Tf)) : M.interp(tab41es, Tf);
  const deltaF = (Tf, m) => { if (!m) return M.interp(tab41d, Tf); const c = M.F2C(Tf); return 4098 * M.es(c) / Math.pow(c + 237.3, 2); };
  const gammaFt = (z, m) => { if (!m) return M.interp(tab42, z); const zm = z * 0.3048; const P = 101.3 * Math.pow((293 - 0.0065 * zm) / 293, 5.26); return 0.000665 * P; };
  const methodOpt = { k: "m", label: "Source of e<sub>s</sub>, Δ and γ", type: "sel", opts: [["Tables 4.1 and 4.2 (book)", 0], ["FAO-56 equations", 1]], v: 0,
    help: "The book reads e<sub>s</sub> and Δ from Table 4.1 and γ from Table 4.2 (linear interpolation here). The FAO-56 equations of Allen et al. (1998) produce those tables and work outside their range." };
  // Eq 4.4 in book units: ETo in/d, Rn MJ/m²/d, U2 mi/d, T °F, es/ea kPa, Δ, γ kPa/°C
  function eq44(D, g, Rn, U2, Tf, es, ea) {
    const den = D + g * (1 + 0.00634 * U2);
    const rad = (D * Rn / 62.23) / den;
    const aero = (g * U2 * (30.18 / (Tf + 460)) * (es - ea) / 25.4) / den;
    return { rad, aero, ETo: rad + aero };
  }
  const MDAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const monthOpts = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m, i) => [m, i]);
  const doy = (mo, d) => { let j = d; for (let i = 0; i < mo; i++) j += MDAYS[i]; return j; };
  // extraterrestrial radiation, MJ/m²/d (FAO-56 Eq. 21), latitude in degrees
  function Ra(latDeg, J) {
    const phi = latDeg * Math.PI / 180;
    const dr = 1 + 0.033 * Math.cos(2 * Math.PI * J / 365);
    const dec = 0.409 * Math.sin(2 * Math.PI * J / 365 - 1.39);
    const ws = Math.acos(Math.max(-1, Math.min(1, -Math.tan(phi) * Math.tan(dec))));
    return 24 * 60 / Math.PI * 0.0820 * dr * (ws * Math.sin(phi) * Math.sin(dec) + Math.cos(phi) * Math.cos(dec) * Math.sin(ws));
  }
  // net outgoing long-wave radiation, MJ/m²/d (FAO-56 Eq. 39); temperatures °F
  function Rnl(TmaxF, TminF, ea, RsRso) {
    const k = t => M.F2C(t) + 273.16;
    const bb = 4.903e-9 * (Math.pow(k(TmaxF), 4) + Math.pow(k(TminF), 4)) / 2;
    const frac = (0.34 - 0.14 * Math.sqrt(ea)) * (1.35 * Math.min(RsRso, 1) - 0.35);
    return { bb, frac, Rnl: bb * frac };
  }
  function kcf(h, wind, rh) {
    const t = T["4.4"];
    const at = hh => {
      const g = t.grid[hh];
      const col = t.wind.map((w, i) => [w, M.interp(t.rh.map((r, j) => [r, g[i][j]]), rh)]);
      return M.interp(col, wind);
    };
    if (h <= 8) {
      const hs = t.heights;
      if (h <= hs[0]) return at(2);
      for (let i = 1; i < hs.length; i++) if (h <= hs[i]) { const a = at(hs[i - 1]), b = at(hs[i]); return a + (b - a) * (h - hs[i - 1]) / (hs[i] - hs[i - 1]); }
    }
    const six = at(6);
    if (h < 10) { const a = at(8), b = six * 1.17; return a + (b - a) * (h - 8) / 2; }
    return six * M.interp(t.mult, h);
  }
  function kco(Fs, Kci, Kcp, Kcm, F1, F2, F3) {
    if (Fs <= F1) return Kci;
    if (Fs <= F2) return Kci + (Kcp - Kci) * (Fs - F1) / (F2 - F1);
    if (Fs <= F3) return Kcp;
    return Kcp - (Kcp - Kcm) * (Fs - F3) / (1 - F3);
  }
  const ksF = (fr, frc) => fr < frc ? fr / frc : 1;
  const ftF = (t, td) => t >= td ? 0 : 1 - Math.sqrt(Math.max(t, 0) / td);
  G.CH04 = { kcf, kco, Ra, Rnl, eq44, esF, deltaF, gammaFt };

  const C = (s) => { s.ch = 4; s.file = "ch04"; return calc(s); };

  C({
    id: "eq-4.1", eq: ["4.1"], sec: "4.3", page: 53, title: "Soil water balance for ET",
    tags: ["water balance", "checkbook", "ET from soil water", "deep percolation", "runoff", "how much water did the crop use"],
    note: "If the water table is more than about 6 ft below the surface, U<sub>f</sub> can usually be taken as zero.",
    inputs: [
      { k: "AWb", sym: "AW<sub>b</sub>", label: "Available soil water in root zone at start", dim: "length", u: "in", v: 4 },
      { k: "AWe", sym: "AW<sub>e</sub>", label: "Available soil water in root zone at end", dim: "length", u: "in", v: 3 },
      { k: "P", sym: "P", label: "Total precipitation", dim: "length", u: "in", v: 0.5 },
      { k: "dg", sym: "d<sub>g</sub>", label: "Gross irrigation", dim: "length", u: "in", v: 1 },
      { k: "Uf", sym: "U<sub>f</sub>", label: "Groundwater contribution", dim: "length", u: "in", v: 0 },
      { k: "Ri", sym: "R<sub>i</sub>", label: "Surface water run on", dim: "length", u: "in", v: 0 },
      { k: "Ro", sym: "R<sub>o</sub>", label: "Surface runoff leaving", dim: "length", u: "in", v: 0 },
      { k: "dp", sym: "d<sub>p</sub>", label: "Deep percolation below root zone", dim: "length", u: "in", v: 0 }],
    outputs: [{ k: "ET", sym: "ET", label: "ET during the period", dim: "length", u: "in", dp: 2 }],
    f: v => ({ ET: v.AWb - v.AWe + v.P + v.dg + v.Uf + v.Ri - v.Ro - v.dp }),
    figs: ["4.6"],
  });

  C({
    id: "eq-4.2-4.7", eq: ["4.2", "4.7"], sec: "4.6", page: 62, title: "Crop ET from reference ET (ET = Kc ETo)",
    tags: ["crop ET", "crop water use", "Kc times ETo", "how much water is my crop using", "crop coefficient"],
    inputs: [
      { k: "Kc", sym: "K<sub>c</sub>", label: "Crop coefficient", dim: "none", v: 1.1 },
      { k: "ETo", sym: "ET<sub>o</sub>", label: "Reference crop ET rate (short grass)", dim: "rate", u: "in/d", v: 0.3 }],
    outputs: [{ k: "ET", sym: "ET", label: "Crop ET rate", dim: "rate", u: "in/d", dp: 3 }],
    f: v => ({ ET: v.Kc * v.ETo }),
    examples: [{ ref: "Example 4.5 (field A)", page: 70, in: { Kc: 1.1, ETo: 0.3 }, out: { ET: 0.33 } }],
  });

  C({
    id: "eq-4.3", eq: ["4.3"], sec: "4.5", page: 56, title: "Penman-Monteith reference ET (full form)",
    tags: ["Penman-Monteith", "reference ET", "ETo", "aerodynamic resistance", "surface resistance", "FAO-56"],
    note: "Daily form with R<sub>n</sub> and G in MJ/m²/d, K<sub>t</sub> = 86,400 s/d, ρ<sub>a</sub> c<sub>p</sub> in MJ/m³/°C, resistances in s/m and λ in MJ/kg, giving ET<sub>o</sub> in mm/d (kg/m²/d). For the short grass reference, Allen et al. (1998) give r<sub>a</sub> = 208 / u<sub>2</sub> (u<sub>2</sub> in m/s) and r<sub>s</sub> = 70 s/m.",
    inputs: [
      { k: "Rn", sym: "R<sub>n</sub>", label: "Net radiation at the crop surface", dim: "radiation", u: "MJ/m²/d", v: 14.8 },
      { k: "G", sym: "G", label: "Soil heat flux density (about 0 for daily steps)", dim: "radiation", u: "MJ/m²/d", v: 0, min: -1e3 },
      { k: "es", sym: "e<sub>s</sub>", label: "Saturation vapor pressure of air", dim: "pressure", u: "kPa", v: 3.29 },
      { k: "ea", sym: "e<sub>a</sub>", label: "Actual vapor pressure of air", dim: "pressure", u: "kPa", v: 1.53 },
      { k: "D", sym: "Δ", label: "Slope of saturation vapor pressure curve", dim: "vpslope", u: "kPa/°C", v: 0.178, tables: ["4.1"] },
      { k: "g", sym: "γ", label: "Psychrometric constant", dim: "vpslope", u: "kPa/°C", v: 0.060 },
      { k: "Kt", sym: "K<sub>t</sub>", label: "Unit conversion constant (s/d)", dim: "none", v: 86400 },
      { k: "rho", sym: "ρ<sub>a</sub>", label: "Density of air", dim: "density", u: "kg/m³", v: 1.06, help: "About 1.2 kg/m³ at sea level, 1.06 at 3,000 ft and 24 °C." },
      { k: "cp", sym: "c<sub>p</sub>", label: "Specific heat of air (MJ/kg/°C)", dim: "none", v: 0.001013 },
      { k: "ra", sym: "r<sub>a</sub>", label: "Aerodynamic resistance", dim: "resist", u: "s/m", v: 37.2 },
      { k: "rs", sym: "r<sub>s</sub>", label: "Bulk surface resistance", dim: "resist", u: "s/m", v: 70 },
      { k: "lam", sym: "λ", label: "Heat of vaporization of water (MJ/kg)", dim: "none", v: 2.45 }],
    outputs: [{ k: "ETo", sym: "ET<sub>o</sub>", label: "Reference crop ET", dim: "rate", u: "mm/d", dp: 2 }],
    f: v => ({ ETo: ((v.D * (v.Rn - v.G) + v.Kt * v.rho * v.cp * (v.es - v.ea) / v.ra) / (v.D + v.g * (1 + v.rs / v.ra))) / v.lam }),
    // Example 4.1 conditions (U2 = 300 mi/d = 5.59 m/s, ra = 208/5.59); the book's chart answer is 0.31 in/d = 7.9 mm/d
    examples: [{ ref: "Example 4.1 conditions", page: 62, in: {}, out: { ETo: 0.31 * 25.4 }, tol: 0.05 }],
    tables: ["4.1", "4.2"], figs: ["4.8"],
  });

  C({
    id: "eq-4.4", eq: ["4.4"], sec: "4.5", page: 57, title: "Reduced Penman-Monteith reference ET (ASCE daily, short grass)",
    tags: ["reference ET", "ETo", "Penman-Monteith", "grass reference", "radiation term", "aerodynamic term", "weather station ET"],
    note: "Left bracket is the radiation term (Figure 4.11), right bracket is the aerodynamic term (Figure 4.12). Soil heat flux is neglected for daily steps.",
    inputs: [
      { k: "D", sym: "Δ", label: "Slope of saturation vapor pressure curve (Table 4.1 at mean T)", dim: "vpslope", u: "kPa/°C", v: 0.178 },
      { k: "g", sym: "γ", label: "Psychrometric constant (Table 4.2)", dim: "vpslope", u: "kPa/°C", v: 0.060 },
      { k: "Rn", sym: "R<sub>n</sub>", label: "Net radiation", dim: "radiation", u: "MJ/m²/d", v: 14.8 },
      { k: "U2", sym: "U<sub>2</sub>", label: "Daily wind run at 2 m", dim: "windrun", u: "mi/d", v: 300 },
      { k: "T", sym: "T", label: "Mean daily air temperature", dim: "temp", u: "°F", v: 75, min: -100 },
      { k: "es", sym: "e<sub>s</sub>", label: "Saturation vapor pressure (Eq. 4.5)", dim: "pressure", u: "kPa", v: 3.29 },
      { k: "ea", sym: "e<sub>a</sub>", label: "Actual vapor pressure (e° at dew point)", dim: "pressure", u: "kPa", v: 1.53 }],
    outputs: [
      { k: "rad", sym: "ET<sub>rad</sub>", label: "Reference ET from radiation term", dim: "rate", u: "in/d", dp: 3 },
      { k: "aero", sym: "ET<sub>aero</sub>", label: "Reference ET from aerodynamic term", dim: "rate", u: "in/d", dp: 3 },
      { k: "ETo", sym: "ET<sub>o</sub>", label: "Reference crop ET", dim: "rate", u: "in/d", dp: 3 }],
    f: v => eq44(v.D, v.g, v.Rn, v.U2, v.T, v.es, v.ea),
    // book reads Figures 4.11 and 4.12 graphically (0.12 + 0.19); the equation gives 0.120 + 0.199
    examples: [{ ref: "Example 4.1", page: 62, in: { D: 0.178, g: 0.060, Rn: 14.8, U2: 300, T: 75, es: 3.29, ea: 1.53 }, out: { rad: 0.12, aero: 0.19, ETo: 0.31 }, tol: 0.06 }],
    tables: ["4.1", "4.2"], figs: ["4.11", "4.12"],
  });

  C({
    id: "eq-4.5", eq: ["4.5"], sec: "4.5", page: 58, title: "Saturation and actual vapor pressure",
    tags: ["vapor pressure", "es", "ea", "dew point", "vapor pressure deficit", "VPD", "humidity"],
    note: "e<sub>a</sub> is the saturation vapor pressure at the dew point temperature.",
    inputs: [
      { k: "Tmax", sym: "T<sub>max</sub>", label: "Maximum air temperature", dim: "temp", u: "°F", v: 90, min: -100 },
      { k: "Tmin", sym: "T<sub>min</sub>", label: "Minimum air temperature", dim: "temp", u: "°F", v: 60, min: -100 },
      { k: "Td", sym: "T<sub>dew</sub>", label: "Dew point temperature", dim: "temp", u: "°F", v: 56, min: -100 },
      methodOpt],
    outputs: [
      { k: "emax", sym: "e°(T<sub>max</sub>)", label: "Saturation vapor pressure at T<sub>max</sub>", dim: "pressure", u: "kPa", dp: 2 },
      { k: "emin", sym: "e°(T<sub>min</sub>)", label: "Saturation vapor pressure at T<sub>min</sub>", dim: "pressure", u: "kPa", dp: 2 },
      { k: "es", sym: "e<sub>s</sub>", label: "Saturation vapor pressure of air", dim: "pressure", u: "kPa", dp: 2 },
      { k: "ea", sym: "e<sub>a</sub>", label: "Actual vapor pressure", dim: "pressure", u: "kPa", dp: 2 },
      { k: "vpd", sym: "e<sub>s</sub> − e<sub>a</sub>", label: "Vapor pressure deficit", dim: "pressure", u: "kPa", dp: 2 }],
    f: v => {
      const emax = esF(v.Tmax, +v.m), emin = esF(v.Tmin, +v.m), es = (emax + emin) / 2, ea = esF(v.Td, +v.m);
      return { emax, emin, es, ea, vpd: es - ea };
    },
    examples: [{ ref: "Example 4.1", page: 62, in: { Tmax: 90, Tmin: 60, Td: 56, m: 0 }, out: { es: 3.29, vpd: 1.76 } },
               { ref: "Example 4.1", page: 62, in: { Tmax: 90, Tmin: 60, Td: 56, m: 1 }, out: { vpd: 1.76 } }],
    tables: ["4.1"],
  });

  C({
    id: "eq-4.6", eq: ["4.6"], sec: "4.5", page: 58, title: "Net radiation",
    tags: ["net radiation", "Rn", "albedo", "solar radiation", "long-wave radiation"],
    note: "The book prints Eq. 4.6 with R<sub>n</sub> on both sides; Example 4.1 shows the intended form R<sub>n</sub> = (1 − α) R<sub>s</sub> − R<sub>nl</sub>.",
    inputs: [
      { k: "Rs", sym: "R<sub>s</sub>", label: "Measured solar radiation", dim: "radiation", u: "MJ/m²/d", v: 25 },
      { k: "a", sym: "α", label: "Albedo (0.23 for the short reference crop)", dim: "none", v: 0.23 },
      { k: "Rnl", sym: "R<sub>nl</sub>", label: "Net outgoing long-wave radiation (Figure 4.10)", dim: "radiation", u: "MJ/m²/d", v: 4.5 }],
    outputs: [{ k: "Rn", sym: "R<sub>n</sub>", label: "Net radiation", dim: "radiation", u: "MJ/m²/d", dp: 2 }],
    f: v => ({ Rn: (1 - v.a) * v.Rs - v.Rnl }),
    examples: [{ ref: "Example 4.1", page: 62, in: { Rs: 25, a: 0.23, Rnl: 4.5 }, out: { Rn: 14.8 } }],
  });

  C({
    id: "fig-4.9", eq: [], sec: "4.5", page: 59, title: "Clear-sky radiation from date, latitude and elevation (Figure 4.9)",
    tags: ["clear sky radiation", "Rso", "extraterrestrial radiation", "Ra", "latitude"],
    note: "Figure 4.9 is drawn from the FAO-56 relations (Allen et al. 1998): R<sub>a</sub> from latitude and day of year, R<sub>so</sub> = (0.75 + 2×10⁻⁵ z) R<sub>a</sub> with z in m. Negative latitude for the southern hemisphere.",
    inputs: [
      { k: "mo", label: "Month", type: "sel", opts: monthOpts, v: 5 },
      { k: "day", sym: "day", label: "Day of month", dim: "count", u: "#", v: 15 },
      { k: "lat", sym: "φ", label: "Latitude", dim: "angle", u: "degrees", v: 40, min: -90, max: 90 },
      { k: "z", sym: "z", label: "Elevation above sea level", dim: "length", u: "ft", v: 3000 }],
    outputs: [
      { k: "J", sym: "J", label: "Day of year", dim: "count", u: "#", dp: 0 },
      { k: "Ra", sym: "R<sub>a</sub>", label: "Extraterrestrial radiation", dim: "radiation", u: "MJ/m²/d", dp: 1 },
      { k: "Rso", sym: "R<sub>so</sub>", label: "Clear-sky radiation", dim: "radiation", u: "MJ/m²/d", dp: 1 }],
    f: v => { const J = doy(+v.mo, v.day), ra = Ra(v.lat, J); return { J, Ra: ra, Rso: (0.75 + 2e-5 * v.z * 0.3048) * ra }; },
    examples: [{ ref: "Example 4.1", page: 62, in: { mo: 5, day: 15, lat: 40, z: 3000 }, out: { Ra: 42, Rso: 32 } }],
    figs: ["4.9"],
  });

  C({
    id: "fig-4.10", eq: [], sec: "4.5", page: 59, title: "Net outgoing long-wave radiation (Figure 4.10)",
    tags: ["long-wave radiation", "Rnl", "black body", "cloudiness", "Rs/Rso"],
    note: "Figure 4.10 is drawn from the FAO-56 relation R<sub>nl</sub> = σ [(T<sub>max,K</sub>⁴ + T<sub>min,K</sub>⁴)/2] (0.34 − 0.14 √e<sub>a</sub>) (1.35 R<sub>s</sub>/R<sub>so</sub> − 0.35). It reproduces Example 4.1 (38.3 MJ/m²/d black body, 11.7% emitted, 4.5 MJ/m²/d).",
    inputs: [
      { k: "Tmax", sym: "T<sub>max</sub>", label: "Maximum air temperature", dim: "temp", u: "°F", v: 90, min: -100 },
      { k: "Tmin", sym: "T<sub>min</sub>", label: "Minimum air temperature", dim: "temp", u: "°F", v: 60, min: -100 },
      { k: "Td", sym: "T<sub>dew</sub>", label: "Dew point temperature", dim: "temp", u: "°F", v: 56, min: -100 },
      { k: "Rs", sym: "R<sub>s</sub>", label: "Measured solar radiation", dim: "radiation", u: "MJ/m²/d", v: 25 },
      { k: "Rso", sym: "R<sub>so</sub>", label: "Clear-sky radiation (Figure 4.9)", dim: "radiation", u: "MJ/m²/d", v: 32 },
      methodOpt],
    outputs: [
      { k: "bb", sym: "σT⁴", label: "Black-body long-wave radiation", dim: "radiation", u: "MJ/m²/d", dp: 1 },
      { k: "frac", sym: "f", label: "Fraction of black-body radiation emitted", dim: "frac", u: "%", dp: 1 },
      { k: "Rnl", sym: "R<sub>nl</sub>", label: "Net outgoing long-wave radiation", dim: "radiation", u: "MJ/m²/d", dp: 2 }],
    f: v => Rnl(v.Tmax, v.Tmin, esF(v.Td, +v.m), v.Rs / v.Rso),
    examples: [{ ref: "Example 4.1", page: 62, in: { Tmax: 90, Tmin: 60, Td: 56, Rs: 25, Rso: 32, m: 0 }, out: { bb: 38.3, frac: 0.117, Rnl: 4.5 } }],
    figs: ["4.10"],
  });

  C({
    id: "eto-daily", eq: ["4.4", "4.5", "4.6"], sec: "4.5", page: 62, title: "Daily reference ET from weather data (Example 4.1 procedure)",
    tags: ["reference ET", "ETo from weather", "Penman-Monteith procedure", "daily ET", "grass ET", "how much water did grass use today"],
    note: "Follows Example 4.1: R<sub>so</sub> (Figure 4.9), R<sub>nl</sub> (Figure 4.10), R<sub>n</sub> (Eq. 4.6), e<sub>s</sub> and e<sub>a</sub> (Eq. 4.5), Δ at the mean temperature (Table 4.1), γ from elevation (Table 4.2), then Eq. 4.4.",
    inputs: [
      { k: "Tmax", sym: "T<sub>max</sub>", label: "Maximum air temperature", dim: "temp", u: "°F", v: 90, min: -100 },
      { k: "Tmin", sym: "T<sub>min</sub>", label: "Minimum air temperature", dim: "temp", u: "°F", v: 60, min: -100 },
      { k: "Td", sym: "T<sub>dew</sub>", label: "Dew point temperature", dim: "temp", u: "°F", v: 56, min: -100 },
      { k: "Rs", sym: "R<sub>s</sub>", label: "Solar radiation", dim: "radiation", u: "MJ/m²/d", v: 25 },
      { k: "U2", sym: "U<sub>2</sub>", label: "Wind run at 2 m", dim: "windrun", u: "mi/d", v: 300 },
      { k: "z", sym: "z", label: "Elevation above sea level", dim: "length", u: "ft", v: 3000 },
      { k: "lat", sym: "φ", label: "Latitude", dim: "angle", u: "degrees", v: 40, min: -90, max: 90 },
      { k: "mo", label: "Month", type: "sel", opts: monthOpts, v: 5 },
      { k: "day", sym: "day", label: "Day of month", dim: "count", u: "#", v: 15 },
      methodOpt],
    outputs: [
      { k: "Rso", sym: "R<sub>so</sub>", label: "Clear-sky radiation", dim: "radiation", u: "MJ/m²/d", dp: 1 },
      { k: "Rnl", sym: "R<sub>nl</sub>", label: "Net long-wave radiation", dim: "radiation", u: "MJ/m²/d", dp: 2 },
      { k: "Rn", sym: "R<sub>n</sub>", label: "Net radiation", dim: "radiation", u: "MJ/m²/d", dp: 2 },
      { k: "Tm", sym: "T", label: "Mean air temperature", dim: "temp", u: "°F", dp: 1 },
      { k: "vpd", sym: "e<sub>s</sub> − e<sub>a</sub>", label: "Vapor pressure deficit", dim: "pressure", u: "kPa", dp: 2 },
      { k: "D", sym: "Δ", label: "Slope of vapor pressure curve", dim: "vpslope", u: "kPa/°C", dp: 3 },
      { k: "g", sym: "γ", label: "Psychrometric constant", dim: "vpslope", u: "kPa/°C", dp: 4 },
      { k: "rad", sym: "ET<sub>rad</sub>", label: "ET from radiation term", dim: "rate", u: "in/d", dp: 3 },
      { k: "aero", sym: "ET<sub>aero</sub>", label: "ET from aerodynamic term", dim: "rate", u: "in/d", dp: 3 },
      { k: "ETo", sym: "ET<sub>o</sub>", label: "Reference crop ET", dim: "rate", u: "in/d", dp: 3 }],
    f: v => {
      const m = +v.m;
      const J = doy(+v.mo, v.day), Rso = (0.75 + 2e-5 * v.z * 0.3048) * Ra(v.lat, J);
      const es = (esF(v.Tmax, m) + esF(v.Tmin, m)) / 2, ea = esF(v.Td, m);
      const rnl = Rnl(v.Tmax, v.Tmin, ea, v.Rs / Rso).Rnl;
      const Rn = 0.77 * v.Rs - rnl;
      const Tm = (v.Tmax + v.Tmin) / 2, D = deltaF(Tm, m), g = gammaFt(v.z, m);
      const r = eq44(D, g, Rn, v.U2, Tm, es, ea);
      return { Rso, Rnl: rnl, Rn, Tm, vpd: es - ea, D, g, rad: r.rad, aero: r.aero, ETo: r.ETo };
    },
    // the book reads Figures 4.9 to 4.12 by eye (0.12 + 0.19 = 0.31 in/d); the equations give about 0.32
    examples: [{ ref: "Example 4.1", page: 62, in: { m: 0 }, out: { Rso: 32, Rnl: 4.5, Rn: 14.8, vpd: 1.76, rad: 0.12, aero: 0.19, ETo: 0.31 }, tol: 0.06 },
               { ref: "Example 4.1 (FAO-56 equations)", page: 62, in: { m: 1 }, out: { Rn: 14.8, ETo: 0.31 }, tol: 0.06 }],
    tables: ["4.1", "4.2"], figs: ["4.9", "4.10", "4.11", "4.12"],
  });

  C({
    id: "eq-4.8", eq: ["4.8"], sec: "4.6", page: 63, title: "Crop coefficient from basal, stress and wet soil factors",
    tags: ["crop coefficient", "Kc", "basal crop coefficient", "dual crop coefficient", "stress factor", "wet soil"],
    inputs: [
      { k: "Kco", sym: "K<sub>co</sub>", label: "Basal crop coefficient (dry surface, no stress)", dim: "none", v: 1.2 },
      { k: "Ks", sym: "K<sub>s</sub>", label: "Water stress factor (Eq. 4.10, p. 68)", dim: "none", v: 1 },
      { k: "Kw", sym: "K<sub>w</sub>", label: "Wet soil evaporation factor (Eq. 4.11, p. 69)", dim: "none", v: 0 }],
    outputs: [{ k: "Kc", sym: "K<sub>c</sub>", label: "Crop coefficient", dim: "none", dp: 3 }],
    f: v => ({ Kc: v.Kco * v.Ks + v.Kw }),
    // Example 4.4: ET = Ks Kco ETo with Kw = 0, so Kc = 0.56 x 1.20
    examples: [{ ref: "Example 4.4", page: 69, in: { Kco: 1.2, Ks: 0.25 / 0.45, Kw: 0 }, out: { Kc: 0.667 } }],
    figs: ["4.13"],
  });

  C({
    id: "eq-4.9", eq: ["4.9"], sec: "4.6", page: 66, title: "Adjusted peak and harvest basal crop coefficients",
    tags: ["Kcp", "Kcm", "Kcf", "adjust crop coefficient for wind and humidity", "arid climate adjustment"],
    note: "K<sub>ci</sub> is not adjusted. Use average climate for the time of year (Table 4.4), not daily values.",
    inputs: [
      { k: "Kcp0", sym: "K<sub>cp</sub>′", label: "Tabular peak coefficient (Table 4.3)", dim: "none", v: 1.15 },
      { k: "Kcm0", sym: "K<sub>cm</sub>′", label: "Tabular harvest coefficient (Table 4.3)", dim: "none", v: 0.15 },
      { k: "Kcfp", sym: "K<sub>cf</sub>", label: "Adjustment at midseason (Table 4.4)", dim: "none", v: 0.06, min: -1 },
      { k: "Kcfm", sym: "K<sub>cf</sub>", label: "Adjustment at harvest (Table 4.4)", dim: "none", v: -0.07, min: -1 }],
    outputs: [
      { k: "Kcp", sym: "K<sub>cp</sub>", label: "Adjusted peak basal coefficient", dim: "none", dp: 2 },
      { k: "Kcm", sym: "K<sub>cm</sub>", label: "Adjusted harvest basal coefficient", dim: "none", dp: 2 }],
    f: v => ({ Kcp: v.Kcp0 + v.Kcfp, Kcm: v.Kcm0 + v.Kcfm }),
    examples: [{ ref: "Example 4.2", page: 67, in: { Kcp0: 1.15, Kcm0: 0.15, Kcfp: 0.06, Kcfm: -0.07 }, out: { Kcp: 1.21, Kcm: 0.08 } }],
    tables: ["4.3", "4.4"],
  });

  C({
    id: "eq-4.10", eq: ["4.10"], sec: "4.6", page: 67, title: "Minimum relative humidity from dew point and maximum temperature",
    tags: ["relative humidity", "RHmin", "dew point", "minimum humidity"],
    inputs: [
      { k: "Td", sym: "T<sub>dew</sub>", label: "Dew point temperature", dim: "temp", u: "°F", v: 65, min: -100 },
      { k: "Tmax", sym: "T<sub>max</sub>", label: "Maximum air temperature", dim: "temp", u: "°F", v: 90, min: -100 },
      methodOpt],
    outputs: [{ k: "RH", sym: "RH<sub>min</sub>", label: "Minimum relative humidity", dim: "pct", u: "%", dp: 0 }],
    f: v => ({ RH: 100 * esF(v.Td, +v.m) / esF(v.Tmax, +v.m) }),
    examples: [{ ref: "Example 4.2 (midseason)", page: 67, in: { Td: 65, Tmax: 90, m: 0 }, out: { RH: 44 } },
               { ref: "Example 4.2 (harvest)", page: 67, in: { Td: 40, Tmax: 50, m: 0 }, out: { RH: 68 } }],
    tables: ["4.1"],
  });

  C({
    id: "eq-4.11-4.12", eq: ["4.11", "4.12"], sec: "4.6", page: 67, title: "Basal crop coefficient through the season",
    tags: ["basal crop coefficient", "Kco", "fraction of growing season", "crop curve", "growth stage", "Kc curve"],
    note: "Initial stage (F<sub>s</sub> ≤ F<sub>S1</sub>): K<sub>co</sub> = K<sub>ci</sub>. Vegetative: Eq. 4.11. Midseason (F<sub>S2</sub> to F<sub>S3</sub>): K<sub>co</sub> = K<sub>cp</sub>. Maturing: Eq. 4.12.",
    inputs: [
      { k: "Fs", sym: "F<sub>s</sub>", label: "Fraction of growing season (days since planting / season length, or Eq. 4.13)", dim: "frac", u: "decimal", v: 0.3 },
      { k: "Kci", sym: "K<sub>ci</sub>", label: "Initial basal coefficient", dim: "none", v: 0.15 },
      { k: "Kcp", sym: "K<sub>cp</sub>", label: "Adjusted peak coefficient (Eq. 4.9)", dim: "none", v: 1.21 },
      { k: "Kcm", sym: "K<sub>cm</sub>", label: "Adjusted harvest coefficient (Eq. 4.9)", dim: "none", v: 0.08 },
      { k: "F1", sym: "F<sub>S1</sub>", label: "Fraction when canopy development begins", dim: "frac", u: "decimal", v: 0.18 },
      { k: "F2", sym: "F<sub>S2</sub>", label: "Fraction at effective cover", dim: "frac", u: "decimal", v: 0.41 },
      { k: "F3", sym: "F<sub>S3</sub>", label: "Fraction when maturing begins", dim: "frac", u: "decimal", v: 0.71 }],
    outputs: [
      { k: "Kco", sym: "K<sub>co</sub>", label: "Basal crop coefficient", dim: "none", dp: 2 },
      { k: "stage", label: "Growth stage", text: true }],
    f: v => ({
      Kco: kco(v.Fs, v.Kci, v.Kcp, v.Kcm, v.F1, v.F2, v.F3),
      stage: v.Fs <= v.F1 ? "Initial" : v.Fs <= v.F2 ? "Vegetative (Eq. 4.11)" : v.Fs <= v.F3 ? "Midseason" : "Maturing (Eq. 4.12)",
    }),
    examples: [0.10, 0.30, 0.50, 0.70, 0.90].map((Fs, i) => ({ ref: "Example 4.3", page: 68, in: { Fs }, out: { Kco: [0.15, 0.70, 1.21, 1.21, 0.47][i] } })),
    tables: ["4.3"], figs: ["4.14"],
  });

  C({
    id: "eq-4.10-p68", eq: ["4.10"], sec: "4.6", page: 68, title: "Water stress factor (Ks) and stressed crop ET",
    tags: ["stress factor", "Ks", "water stress", "dry soil ET", "fraction remaining", "is my crop stressed"],
    note: "K<sub>s</sub> = f<sub>r</sub>/f<sub>rc</sub> when f<sub>r</sub> < f<sub>rc</sub>, otherwise 1. f<sub>r</sub> is from Eq. 2.10. Crop ET assumes K<sub>w</sub> = 0 (dry surface).",
    inputs: [
      { k: "thv", sym: "θ<sub>v</sub>", label: "Current volumetric water content", dim: "frac", u: "decimal", v: 0.15 },
      { k: "fc", sym: "θ<sub>fc</sub>", label: "Water content at field capacity", dim: "frac", u: "decimal", v: 0.24 },
      { k: "wp", sym: "θ<sub>wp</sub>", label: "Water content at wilting point", dim: "frac", u: "decimal", v: 0.12 },
      { k: "frc", sym: "f<sub>rc</sub>", label: "Critical threshold of f<sub>r</sub> (Table 4.3)", dim: "frac", u: "decimal", v: 0.45 },
      { k: "Kco", sym: "K<sub>co</sub>", label: "Basal crop coefficient", dim: "none", v: 1.2 },
      { k: "ETo", sym: "ET<sub>o</sub>", label: "Reference ET", dim: "rate", u: "in/d", v: 0.3 }],
    outputs: [
      { k: "fr", sym: "f<sub>r</sub>", label: "Fraction of available water remaining", dim: "frac", u: "decimal", dp: 2 },
      { k: "Ks", sym: "K<sub>s</sub>", label: "Water stress factor", dim: "none", dp: 2 },
      { k: "ET", sym: "ET", label: "Crop ET (K<sub>s</sub> K<sub>co</sub> ET<sub>o</sub>)", dim: "rate", u: "in/d", dp: 3 }],
    f: v => { const fr = Math.max(0, (v.thv - v.wp) / (v.fc - v.wp)), Ks = ksF(fr, v.frc); return { fr, Ks, ET: Ks * v.Kco * v.ETo }; },
    examples: [
      { ref: "Example 4.4", page: 69, in: { thv: 0.15, fc: 0.24, wp: 0.12, frc: 0.45, Kco: 1.2, ETo: 0.3 }, out: { fr: 0.25, Ks: 0.56, ET: 0.2 } },
      { ref: "Example 4.5 (field A)", page: 70, in: { thv: 0.22, fc: 0.25, wp: 0.10, frc: 0.35, Kco: 1.1, ETo: 0.3 }, out: { fr: 0.80, Ks: 1, ET: 0.33 } },
      // book rounds fr to 0.13 before dividing (Ks 0.37, ET 0.12); exact fr is 0.133 (Ks 0.38, ET 0.126)
      { ref: "Example 4.5 (field B)", page: 70, in: { thv: 0.12, fc: 0.25, wp: 0.10, frc: 0.35, Kco: 1.1, ETo: 0.3 }, out: { fr: 0.13, Ks: 0.37, ET: 0.12 }, tol: 0.06 }],
    tables: ["4.3"], figs: ["4.15"],
  });

  C({
    id: "eq-4.11-p69", eq: ["4.11"], sec: "4.6", page: 69, title: "Wet soil evaporation factor (Kw)",
    tags: ["wet soil evaporation", "Kw", "after rain", "after irrigation", "evaporation from wet soil", "Kcmax"],
    note: "K<sub>w</sub> = F<sub>w</sub> (K<sub>cmax</sub> − K<sub>co</sub>) f<sub>t</sub>, with K<sub>cmax</sub> = 1.2 + K<sub>cf</sub> and f<sub>t</sub> = 1 − √(t/t<sub>d</sub>) (zero once t ≥ t<sub>d</sub>).",
    inputs: [
      { k: "Fw", sym: "F<sub>w</sub>", label: "Fraction of surface wetted (Table 4.5)", dim: "frac", u: "decimal", v: 1 },
      { k: "Kcf", sym: "K<sub>cf</sub>", label: "Crop coefficient adjustment factor (Table 4.4)", dim: "none", v: 0, min: -1 },
      { k: "Kco", sym: "K<sub>co</sub>", label: "Basal crop coefficient", dim: "none", v: 0.6 },
      { k: "t", sym: "t", label: "Time since last wetting", dim: "time", u: "d", v: 2 },
      { k: "td", sym: "t<sub>d</sub>", label: "Duration of wet soil evaporation (Table 4.6)", dim: "time", u: "d", v: 5 }],
    outputs: [
      { k: "Kcmax", sym: "K<sub>cmax</sub>", label: "Maximum crop coefficient for wet soil", dim: "none", dp: 2 },
      { k: "ft", sym: "f<sub>t</sub>", label: "Wet soil decay function", dim: "none", dp: 2 },
      { k: "Kw", sym: "K<sub>w</sub>", label: "Wet soil evaporation factor", dim: "none", dp: 3 }],
    f: v => { const Kcmax = 1.2 + v.Kcf, ft = ftF(v.t, v.td); return { Kcmax, ft, Kw: v.Fw * Math.max(0, Kcmax - v.Kco) * ft }; },
    examples: [{ ref: "Table 4.6 (silt loam, t = 2 d)", page: 70, in: { t: 2, td: 5 }, out: { ft: 0.37 } }],
    tables: ["4.4", "4.5", "4.6"],
  });

  C({
    id: "eq-4.12-p71", eq: ["4.12"], sec: "4.6", page: 71, title: "Growing degree days",
    tags: ["GDD", "growing degree days", "heat units", "corn GDD", "86/50"],
    note: "Each day: T<sub>high</sub> = smaller of T<sub>max</sub> and 86 °F, T<sub>low</sub> = larger of T<sub>min</sub> and T<sub>base</sub>, T<sub>i</sub> = (T<sub>high</sub> + T<sub>low</sub>)/2. Base is about 50 °F for corn and 40 °F for wheat and barley. A day with T<sub>i</sub> below base adds zero.",
    inputs: [
      { k: "tmax", sym: "T<sub>max</sub>", label: "Daily maximum temperatures, °F (list)", type: "list", v: "89.5, 87.5, 88.4" },
      { k: "tmin", sym: "T<sub>min</sub>", label: "Daily minimum temperatures, °F (list)", type: "list", v: "63.9, 63.1, 64.6" },
      { k: "Tb", sym: "T<sub>base</sub>", label: "Base temperature", dim: "temp", u: "°F", v: 50, min: -100 },
      { k: "Tc", sym: "T<sub>cap</sub>", label: "Upper temperature cap", dim: "temp", u: "°F", v: 86, min: -100 }],
    outputs: [
      { k: "GDD", sym: "GDD<sub>n</sub>", label: "Cumulative growing degree days", dim: "gdd", u: "°F·d", dp: 1 },
      { k: "daily", label: "Daily values", text: true }],
    f: v => {
      const hi = M.list(v.tmax), lo = M.list(v.tmin), n = Math.min(hi.length, lo.length), d = [];
      for (let i = 0; i < n; i++) { const th = Math.min(hi[i], v.Tc), tl = Math.max(lo[i], v.Tb); d.push(Math.max(0, (th + tl) / 2 - v.Tb)); }
      return { GDD: M.sum(d), daily: d.map(x => x.toFixed(1)).join(", ") };
    },
    examples: [
      { ref: "Table 4.8 (July 2 to 15)", page: 75, in: { tmax: T["4.8"].rows.map(r => r[2]).join(","), tmin: T["4.8"].rows.map(r => r[3]).join(",") }, out: { GDD: 336 } },
      ...T["4.8"].rows.map(r => ({ ref: `Table 4.8 (7/${r[1]})`, page: 75, in: { tmax: String(r[2]), tmin: String(r[3]) }, out: { GDD: r[10] }, tol: 0.03 }))],
    tables: ["4.8"],
  });

  C({
    id: "eq-4.13", eq: ["4.13"], sec: "4.6", page: 71, title: "Fraction of growing season from growing degree days",
    tags: ["fraction of season", "Fs", "GDD to maturity", "crop stage from GDD"],
    inputs: [
      { k: "GDDn", sym: "GDD<sub>n</sub>", label: "Cumulative GDD from planting to day n", dim: "gdd", u: "°F·d", v: 1200 },
      { k: "GDDm", sym: "GDD<sub>m</sub>", label: "Cumulative GDD needed to reach maturity", dim: "gdd", u: "°F·d", v: 2700 }],
    outputs: [{ k: "Fs", sym: "F<sub>s</sub>", label: "Fraction of growing season", dim: "frac", u: "decimal", dp: 3 }],
    f: v => ({ Fs: v.GDDn / v.GDDm }),
  });

  C({
    id: "eq-4.14-4.15", eq: ["4.14", "4.15"], sec: "4.7", page: 72, title: "Landscape ET (KL = KP KD KM)",
    tags: ["landscape coefficient", "lawn water use", "turf ET", "trees and shrubs", "KL", "how much water does my landscape need"],
    note: "The landscape coefficient estimates water needed to keep the landscape acceptable, not the maximum it could use.",
    inputs: [
      { k: "KP", sym: "K<sub>P</sub>", label: "Plant species factor (Table 4.7)", dim: "none", v: 0.7 },
      { k: "KD", sym: "K<sub>D</sub>", label: "Density factor (Table 4.7)", dim: "none", v: 1.0 },
      { k: "KM", sym: "K<sub>M</sub>", label: "Microclimate factor (Table 4.7)", dim: "none", v: 1.0 },
      { k: "ETo", sym: "ET<sub>o</sub>", label: "Reference ET", dim: "rate", u: "in/d", v: 0.25 }],
    outputs: [
      { k: "KL", sym: "K<sub>L</sub>", label: "Landscape coefficient", dim: "none", dp: 3 },
      { k: "ET", sym: "ET", label: "Landscape ET", dim: "rate", u: "in/d", dp: 3 }],
    f: v => { const KL = v.KP * v.KD * v.KM; return { KL, ET: KL * v.ETo }; },
    tables: ["4.7"], figs: ["4.17"],
  });

  // ---------- procedure: crop ET for a day ----------
  C({
    id: "crop-et", eq: ["4.7", "4.8", "4.9", "4.10", "4.11", "4.12", "4.13"], sec: "4.6", page: 62, title: "Crop ET for a day (full crop coefficient procedure)",
    tags: ["crop ET", "daily crop water use", "Kc procedure", "irrigation scheduling ET", "corn ET today", "dual crop coefficient"],
    note: "Combines Table 4.3 (crop), Eq. 4.9 (K<sub>cf</sub> adjustment), Eq. 4.11 and 4.12 (K<sub>co</sub> by season fraction), Eq. 4.10 p. 68 (stress, f<sub>rc</sub> from Table 4.3), Eq. 4.11 p. 69 (wet soil, Tables 4.5 and 4.6) and Eq. 4.7. Elapsed time can be days or GDD (Eq. 4.13). K<sub>cmax</sub> uses the midseason K<sub>cf</sub>.",
    inputs: [
      { k: "crop", label: "Crop (Table 4.3)", type: "sel", opts: cropOpts, v: CORN },
      { k: "Kcfp", sym: "K<sub>cf</sub>", label: "Kcf at midseason (Table 4.4)", dim: "none", v: 0.06, min: -1 },
      { k: "Kcfm", sym: "K<sub>cf</sub>", label: "Kcf at harvest (Table 4.4)", dim: "none", v: -0.07, min: -1 },
      { k: "el", sym: "t", label: "Days (or GDD) since planting", dim: "none", v: 46 },
      { k: "tot", sym: "t<sub>m</sub>", label: "Days (or GDD) from planting to harvest", dim: "none", v: 153 },
      { k: "ETo", sym: "ET<sub>o</sub>", label: "Reference ET", dim: "rate", u: "in/d", v: 0.3 },
      { k: "fr", sym: "f<sub>r</sub>", label: "Fraction of available soil water remaining", dim: "frac", u: "decimal", v: 1 },
      { k: "fw", label: "Last wetting method (Table 4.5)", type: "sel", opts: T["4.5"].rows.map((r, i) => [`${r[0]} (${r[1]})`, i]), v: 1 },
      { k: "soil", label: "Soil texture (Table 4.6)", type: "sel", opts: T["4.6"].soils.map((s, i) => [`${s[0]} (td ${s[1]} d)`, i]), v: 2 },
      { k: "t", sym: "t", label: "Days since last rain or irrigation", dim: "time", u: "d", v: 30 }],
    outputs: [
      { k: "Fs", sym: "F<sub>s</sub>", label: "Fraction of growing season", dim: "frac", u: "decimal", dp: 3 },
      { k: "Kco", sym: "K<sub>co</sub>", label: "Basal crop coefficient", dim: "none", dp: 2 },
      { k: "Ks", sym: "K<sub>s</sub>", label: "Stress factor", dim: "none", dp: 2 },
      { k: "Kw", sym: "K<sub>w</sub>", label: "Wet soil factor", dim: "none", dp: 3 },
      { k: "Kc", sym: "K<sub>c</sub>", label: "Crop coefficient", dim: "none", dp: 2 },
      { k: "ET", sym: "ET", label: "Crop ET", dim: "rate", u: "in/d", dp: 3 }],
    f: v => {
      const r = T["4.3"].rows[+v.crop];
      const Fs = Math.min(1, Math.max(0, v.el / v.tot));
      const Kco = kco(Fs, r[1], r[2] + v.Kcfp, r[3] + v.Kcfm, r[4], r[5], r[6]);
      const Ks = ksF(v.fr, r[7]);
      const Fw = T["4.5"].rows[+v.fw][1], td = T["4.6"].soils[+v.soil][1];
      const Kw = Fw * Math.max(0, 1.2 + v.Kcfp - Kco) * ftF(v.t, td);
      const Kc = Kco * Ks + Kw;
      return { Fs, Kco, Ks, Kw, Kc, ET: Kc * v.ETo };
    },
    // Example 4.3 uses rounded fractions (46/153 = 0.30, 138/153 = 0.90), so allow 3%
    examples: [[15, 0.15], [46, 0.70], [76, 1.21], [107, 1.21], [138, 0.47]].map(([d, k]) =>
      ({ ref: "Example 4.3", page: 68, in: { crop: CORN, Kcfp: 0.06, Kcfm: -0.07, el: d, tot: 153 }, out: { Kco: k }, tol: 0.03 })),
    tables: ["4.3", "4.4", "4.5", "4.6"], figs: ["4.13", "4.14"],
  });

  // ---------- table lookups ----------
  C({
    id: "tab-4.1", eq: [], sec: "4.5", page: 58, title: "Saturation vapor pressure and slope by temperature (Table 4.1)",
    tags: ["saturation vapor pressure table", "delta", "slope of vapor pressure", "es table"],
    tables: ["4.1"],
    inputs: [{ k: "T", sym: "T", label: "Air temperature", dim: "temp", u: "°F", v: 75, min: -100 }],
    outputs: [
      { k: "es", sym: "e<sub>s</sub>", label: "Saturation vapor pressure (table, interpolated)", dim: "pressure", u: "kPa", dp: 2 },
      { k: "D", sym: "Δ", label: "Slope (table, interpolated)", dim: "vpslope", u: "kPa/°C", dp: 3 },
      { k: "esF", sym: "e<sub>s</sub>", label: "Saturation vapor pressure (FAO-56 equation)", dim: "pressure", u: "kPa", dp: 3 },
      { k: "DF", sym: "Δ", label: "Slope (FAO-56 equation)", dim: "vpslope", u: "kPa/°C", dp: 4 }],
    f: v => ({ es: esF(v.T, 0), D: deltaF(v.T, 0), esF: esF(v.T, 1), DF: deltaF(v.T, 1) }),
    examples: T["4.1"].rows.map(r => ({ ref: "Table 4.1", page: 58, in: { T: r[0] }, out: { esF: r[2], DF: r[3] }, tol: 0.03 })),
  });

  C({
    id: "tab-4.2", eq: [], sec: "4.5", page: 58, title: "Psychrometric constant by elevation (Table 4.2)",
    tags: ["psychrometric constant", "gamma", "elevation", "atmospheric pressure"],
    tables: ["4.2"],
    inputs: [{ k: "z", sym: "z", label: "Elevation above sea level", dim: "length", u: "ft", v: 3000 }],
    outputs: [
      { k: "g", sym: "γ", label: "Psychrometric constant (table, interpolated)", dim: "vpslope", u: "kPa/°C", dp: 4 },
      { k: "gF", sym: "γ", label: "Psychrometric constant (FAO-56 equation)", dim: "vpslope", u: "kPa/°C", dp: 4 }],
    f: v => ({ g: gammaFt(v.z, 0), gF: gammaFt(v.z, 1) }),
    examples: T["4.2"].rows.map(r => ({ ref: "Table 4.2", page: 58, in: { z: r[0] }, out: { gF: r[1] }, tol: 0.015 })),
  });

  C({
    id: "tab-4.3", eq: [], sec: "4.6", page: 65, title: "Basal crop coefficients by crop (Table 4.3)",
    tags: ["crop coefficient table", "Kc table", "corn Kc", "alfalfa Kc", "soybean Kc", "MAD", "allowable depletion", "frc"],
    tables: ["4.3"],
    inputs: [{ k: "crop", label: "Crop", type: "sel", opts: cropOpts, v: CORN }],
    outputs: [
      { k: "Kci", sym: "K<sub>ci</sub>", label: "Initial basal coefficient", dim: "none", dp: 2 },
      { k: "Kcp", sym: "K<sub>cp</sub>′", label: "Peak basal coefficient", dim: "none", dp: 2 },
      { k: "Kcm", sym: "K<sub>cm</sub>′", label: "Harvest basal coefficient", dim: "none", dp: 2 },
      { k: "F1", sym: "F<sub>S1</sub>", label: "Fraction of season, canopy starts", dim: "frac", u: "decimal", dp: 2 },
      { k: "F2", sym: "F<sub>S2</sub>", label: "Fraction of season, effective cover", dim: "frac", u: "decimal", dp: 2 },
      { k: "F3", sym: "F<sub>S3</sub>", label: "Fraction of season, maturing starts", dim: "frac", u: "decimal", dp: 2 },
      { k: "frc", sym: "f<sub>rc</sub>", label: "Soil water stress threshold", dim: "frac", u: "decimal", dp: 2 }],
    f: v => { const r = T["4.3"].rows[+v.crop]; return { Kci: r[1], Kcp: r[2], Kcm: r[3], F1: r[4], F2: r[5], F3: r[6], frc: r[7] }; },
    examples: [{ ref: "Example 4.3", page: 68, in: { crop: CORN }, out: { Kcp: 1.15, Kcm: 0.15, F1: 0.18, F2: 0.41, F3: 0.71 } }],
  });

  C({
    id: "tab-4.4", eq: [], sec: "4.6", page: 66, title: "Crop coefficient adjustment for wind and humidity (Table 4.4)",
    tags: ["Kcf", "wind adjustment", "humidity adjustment", "crop height", "arid adjustment"],
    tables: ["4.4"],
    note: "Interpolates between wind runs, humidities and crop heights. Below 2 ft uses the 2-ft rows; above 8 ft uses the 6-ft values times the height multiplier. Values outside 50 to 350 mi/d and 20 to 80% are held at the table edge.",
    inputs: [
      { k: "h", sym: "h", label: "Crop height", dim: "length", u: "ft", v: 8 },
      { k: "w", sym: "U<sub>2</sub>", label: "Average wind run", dim: "windrun", u: "mi/d", v: 200 },
      { k: "rh", sym: "RH<sub>min</sub>", label: "Average minimum relative humidity (Eq. 4.10)", dim: "pct", u: "%", v: 44 }],
    outputs: [{ k: "Kcf", sym: "K<sub>cf</sub>", label: "Crop coefficient adjustment factor", dim: "none", dp: 3 }],
    f: v => ({ Kcf: kcf(v.h, v.w, v.rh) }),
    examples: [
      { ref: "Example 4.2 (midseason, 'about 0.06')", page: 67, in: { h: 8, w: 200, rh: 44 }, out: { Kcf: 0.06 }, tol: 0.1 },
      // book reads 'about -0.07'; interpolation at 68% gives -0.062
      { ref: "Example 4.2 (harvest, 'about -0.07')", page: 67, in: { h: 8, w: 150, rh: 68 }, out: { Kcf: -0.07 }, tol: 0.15 },
      { ref: "Table 4.4 (6 ft, 300 mi/d, 40%)", page: 66, in: { h: 6, w: 300, rh: 40 }, out: { Kcf: 0.13 } },
      { ref: "Table 4.4 (12 ft multiplier)", page: 66, in: { h: 12, w: 300, rh: 40 }, out: { Kcf: 0.13 * 1.23 } }],
  });

  C({
    id: "tab-4.5", eq: [], sec: "4.6", page: 70, title: "Fraction of soil surface wetted by irrigation method (Table 4.5)",
    tags: ["fraction wetted", "Fw", "drip wetted area", "LEPA", "furrow wetting"],
    tables: ["4.5"],
    inputs: [{ k: "i", label: "Wetting method", type: "sel", opts: T["4.5"].rows.map((r, i) => [r[0], i]), v: 0 }],
    outputs: [{ k: "Fw", sym: "F<sub>w</sub>", label: "Fraction of surface wetted", dim: "frac", u: "decimal", dp: 2 }],
    f: v => ({ Fw: T["4.5"].rows[+v.i][1] }),
  });

  C({
    id: "tab-4.6", eq: [], sec: "4.6", page: 70, title: "Wet soil evaporation duration and decay (Table 4.6)",
    tags: ["drying time", "wet soil decay", "ft", "td", "how long does soil stay wet"],
    tables: ["4.6"],
    note: "f<sub>t</sub> = 1 − √(t/t<sub>d</sub>) reproduces every table value.",
    inputs: [
      { k: "s", label: "Soil texture", type: "sel", opts: T["4.6"].soils.map((s, i) => [s[0], i]), v: 2 },
      { k: "t", sym: "t", label: "Time since wetting", dim: "time", u: "d", v: 2 }],
    outputs: [
      { k: "td", sym: "t<sub>d</sub>", label: "Duration of wet soil evaporation", dim: "time", u: "d", dp: 0 },
      { k: "ft", sym: "f<sub>t</sub>", label: "Wet soil decay function", dim: "none", dp: 2 }],
    f: v => { const td = T["4.6"].soils[+v.s][1]; return { td, ft: ftF(v.t, td) }; },
    examples: (() => {
      const ex = [];
      T["4.6"].rows.forEach(r => r.slice(1).forEach((val, j) => {
        if (val !== null && val > 0) ex.push({ ref: `Table 4.6 (${T["4.6"].soils[j][0]}, t = ${r[0]})`, page: 70, in: { s: j, t: r[0] }, out: { ft: val }, tol: Math.max(0.03, 0.006 / val) }); // table printed to 0.01
      }));
      return ex;
    })(),
  });

  C({
    id: "tab-4.7", eq: ["4.14", "4.15"], sec: "4.7", page: 73, title: "Landscape coefficient from vegetation type (Table 4.7)",
    tags: ["landscape coefficient", "turf", "trees", "shrubs", "groundcover", "microclimate", "planting density"],
    tables: ["4.7"],
    note: "Density: under 60% canopy cover calls for a lower K<sub>D</sub>; trees with 25% cover or less use 0.5. Microclimate: medians, parking lots and west or south exposures are high (1.0 to 1.4); north sides, courtyards and shade are low (0.5 to 1.0).",
    inputs: [
      { k: "veg", label: "Type of vegetation", type: "sel", opts: T["4.7"].rows.map((r, i) => [r[0], i]), v: 4 },
      { k: "p", label: "Species factor level", type: "sel", opts: [["High", 0], ["Average", 1], ["Low", 2]], v: 1 },
      { k: "d", label: "Density factor level", type: "sel", opts: [["High", 0], ["Average", 1], ["Low", 2]], v: 1 },
      { k: "mc", label: "Microclimate factor level", type: "sel", opts: [["High", 0], ["Average", 1], ["Low", 2]], v: 1 },
      { k: "ETo", sym: "ET<sub>o</sub>", label: "Reference ET", dim: "rate", u: "in/d", v: 0.25 }],
    outputs: [
      { k: "KP", sym: "K<sub>P</sub>", label: "Species factor", dim: "none", dp: 2 },
      { k: "KD", sym: "K<sub>D</sub>", label: "Density factor", dim: "none", dp: 2 },
      { k: "KM", sym: "K<sub>M</sub>", label: "Microclimate factor", dim: "none", dp: 2 },
      { k: "KL", sym: "K<sub>L</sub>", label: "Landscape coefficient", dim: "none", dp: 3 },
      { k: "ET", sym: "ET", label: "Landscape ET", dim: "rate", u: "in/d", dp: 3 }],
    f: v => {
      const r = T["4.7"].rows[+v.veg];
      const KP = r[1 + +v.p], KD = r[4 + +v.d], KM = r[7 + +v.mc], KL = KP * KD * KM;
      return { KP, KD, KM, KL, ET: KL * v.ETo };
    },
    examples: [{ ref: "Table 4.7 (turf, average)", page: 73, in: { veg: 4, p: 1, d: 1, mc: 1, ETo: 0.25 }, out: { KL: 0.7, ET: 0.175 } }],
  });

  C({
    id: "tab-4.8", eq: [], sec: "4.8", page: 75, title: "Example weather station data (Table 4.8)",
    tags: ["weather data", "High Plains Regional Climate Center", "example ETo", "langleys"],
    tables: ["4.8"],
    inputs: [{ k: "i", label: "Date", type: "sel", opts: T["4.8"].rows.map((r, i) => [`July ${r[1]}`, i]), v: 0 }],
    outputs: [
      { k: "Tmax", sym: "T<sub>max</sub>", label: "Maximum temperature", dim: "temp", u: "°F", dp: 1 },
      { k: "Tmin", sym: "T<sub>min</sub>", label: "Minimum temperature", dim: "temp", u: "°F", dp: 1 },
      { k: "Td", sym: "T<sub>dew</sub>", label: "Dew point", dim: "temp", u: "°F", dp: 1 },
      { k: "U", sym: "U", label: "Wind speed", dim: "windrun", u: "mph", dp: 1 },
      { k: "Rs", sym: "R<sub>s</sub>", label: "Solar radiation", dim: "radiation", u: "ly/d", dp: 0 },
      { k: "P", sym: "P", label: "Rain", dim: "length", u: "in", dp: 2 },
      { k: "ETo", sym: "ET<sub>o</sub>", label: "Reference ET", dim: "rate", u: "in/d", dp: 2 },
      { k: "GDD", sym: "GDD", label: "Growing degree units", dim: "gdd", u: "°F·d", dp: 0 }],
    f: v => { const r = T["4.8"].rows[+v.i]; return { Tmax: r[2], Tmin: r[3], Td: r[5], U: r[6], Rs: r[7], P: r[8], ETo: r[9], GDD: r[10] }; },
  });
})(typeof window !== "undefined" ? window : globalThis);

/* ---- ch05.js ---- */
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

/* ---- ch06.js ---- */
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

/* ---- ch07.js ---- */
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

/* ---- ch08.js ---- */
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

/* ---- ch09.js ---- */
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

/* ---- ch10.js ---- */
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

/* ---- ch11.js ---- */
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

/* ---- ch12.js ---- */
/* Chapter 12  Moved-Lateral, Gun, and Traveler Sprinkler Systems  (Equations 12.1 to 12.14, Tables 12.3, 12.5 to 12.10) */
(function (G) {
  const T = G.TAB = G.TAB || {};
  const C = (s) => { s.ch = 12; s.file = "ch12"; return calc(s); };
  const HW = (Q, Cv, d) => 456 * Math.pow(Q / Cv, 1.852) / Math.pow(d, 4.866); // Eq. 8.11b, psi/100 ft

  // Table 12.3. Depth of water applied per hour (application rate), in/hr (p. 239)
  T["12.3"] = {
    title: "Depth of water applied per hour (application rate), in/hr",
    cols: ["S_L (ft)", "S_m (ft)", "S_L x S_m (ft²)", "4 gpm", "6 gpm", "8 gpm", "10 gpm", "12 gpm", "15 gpm", "20 gpm", "25 gpm"],
    rows: [
      [20, 40, 800, 0.48, 0.72, 0.96, 1.20, 1.44, 1.81, null, null],
      [30, 40, 1200, 0.32, 0.48, 0.64, 0.80, 0.96, 1.20, 1.61, null],
      [40, 40, 1600, 0.24, 0.36, 0.48, 0.60, 0.72, 0.90, 1.20, 1.50],
      [20, 50, 1000, 0.39, 0.58, 0.77, 0.96, 1.16, 1.44, 1.93, null],
      [30, 50, 1500, 0.26, 0.39, 0.51, 0.64, 0.77, 0.96, 1.28, 1.61],
      [40, 50, 2000, 0.19, 0.29, 0.39, 0.48, 0.58, 0.72, 0.96, 1.20],
      [50, 50, 2500, 0.15, 0.23, 0.31, 0.39, 0.46, 0.58, 0.77, 0.96],
      [20, 60, 1200, 0.32, 0.48, 0.64, 0.80, 0.96, 1.20, 1.61, null],
      [30, 60, 1800, 0.21, 0.32, 0.43, 0.54, 0.64, 0.80, 1.07, 1.34],
      [40, 60, 2400, 0.16, 0.24, 0.32, 0.40, 0.48, 0.60, 0.80, 1.00],
      [50, 60, 3000, 0.13, 0.19, 0.26, 0.32, 0.39, 0.48, 0.64, 0.80],
      [60, 60, 3600, 0.11, 0.16, 0.21, 0.27, 0.32, 0.40, 0.54, 0.67],
      [30, 70, 2100, 0.18, 0.28, 0.37, 0.46, 0.55, 0.69, 0.92, 1.15],
      [40, 70, 2800, 0.14, 0.21, 0.28, 0.34, 0.41, 0.52, 0.69, 0.86],
      [50, 70, 3500, 0.11, 0.17, 0.22, 0.28, 0.33, 0.41, 0.55, 0.69],
      [60, 70, 4200, 0.09, 0.14, 0.18, 0.23, 0.28, 0.34, 0.46, 0.57],
      [70, 70, 4900, null, 0.12, 0.16, 0.20, 0.24, 0.29, 0.39, 0.49],
      [40, 80, 3200, 0.12, 0.18, 0.24, 0.30, 0.36, 0.45, 0.60, 0.75],
      [50, 80, 4000, 0.10, 0.14, 0.19, 0.24, 0.29, 0.36, 0.48, 0.60],
      [60, 80, 4800, null, 0.12, 0.16, 0.20, 0.24, 0.30, 0.40, 0.50],
      [70, 80, 5600, null, 0.10, 0.14, 0.17, 0.21, 0.26, 0.34, 0.43],
      [80, 80, 6400, null, 0.09, 0.12, 0.15, 0.18, 0.23, 0.30, 0.38]],
    notes: "Blank cells are not printed in the book. Values equal 96.3 q<sub>s</sub> / (S<sub>L</sub> S<sub>m</sub>) (Eq. 12.1).",
  };
  const q123 = [4, 6, 8, 10, 12, 15, 20, 25];

  // Table 12.5. Catch can evaluation, volumes caught (cm³) with the central lateral only (p. 253)
  T["12.5"] = {
    title: "Results of catch can evaluation for an example system (volume caught, cm³)",
    cols: ["North of central sprinkler (ft)", "-35 ft E", "-25", "-15", "-5", "5", "15", "25", "35"],
    rows: [
      [65, 23, 20, 19, 23, 24, 19, 18, 22], [55, 76, 63, 60, 73, 76, 61, 58, 70],
      [45, 118, 98, 94, 114, 119, 94, 90, 109], [35, 160, 134, 127, 154, 161, 128, 123, 147],
      [25, 191, 160, 153, 185, 193, 153, 147, 176], [15, 212, 177, 169, 205, 214, 170, 163, 196],
      [5, 233, 195, 186, 225, 235, 187, 179, 215], [-5, 210, 176, 167, 203, 212, 168, 161, 194],
      [-15, 191, 160, 152, 184, 192, 154, 147, 176], [-25, 163, 136, 129, 156, 163, 132, 125, 149],
      [-35, 112, 93, 87, 105, 111, 93, 87, 100], [-45, 50, 40, 35, 43, 47, 45, 39, 41],
      [-55, 22, 17, 12, 15, 19, 23, 18, 14], [-65, 0, 0, 0, 0, 0, 0, 0, 0]],
    notes: "Can top diameter 4 in, area 81.08 cm². Lateral spacing 60 ft. The book converts each volume to depth, overlaps the three sets, and reports CU = 90%.",
  };
  const t125flat = T["12.5"].rows.map(r => r.slice(1).join(", ")).join(", ");
  const t125pos = T["12.5"].rows.map(r => r[0]).join(", ");

  // Table 12.6. Performance of Nelson 150 and 200 series big guns (p. 259)
  const P150 = [50, 60, 70, 80, 90, 100, 110, 120], P200T = [60, 70, 80, 90, 100, 110, 120, 130], P200R = [50, 60, 70, 80, 90, 100, 110, 120, 130];
  const gunSets = [
    { name: "150 T taper bore (24°)", P: P150, sizes: [0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3], data: [
      [100, 250, 130, 270, 165, 290, 205, 310, 255, 330, 300, 345, 350, 360],
      [110, 265, 143, 285, 182, 305, 225, 325, 275, 345, 330, 365, 385, 380],
      [120, 280, 155, 300, 197, 320, 245, 340, 295, 360, 355, 380, 415, 395],
      [128, 290, 165, 310, 210, 335, 260, 355, 315, 375, 380, 395, 445, 410],
      [135, 300, 175, 320, 223, 345, 275, 365, 335, 390, 405, 410, 475, 425],
      [143, 310, 185, 330, 235, 355, 290, 375, 355, 400, 425, 420, 500, 440],
      [150, 320, 195, 340, 247, 365, 305, 385, 370, 410, 445, 430, 525, 450],
      [157, 330, 204, 350, 258, 375, 320, 395, 385, 420, 465, 440, 545, 460]] },
    { name: "150 R ring (24°)", P: P150, sizes: [0.86, 0.97, 1.08, 1.18, 1.26, 1.34, 1.41], data: [
      [100, 245, 130, 265, 165, 285, 205, 300, 255, 320, 300, 335, 350, 350],
      [110, 260, 143, 280, 182, 300, 225, 315, 275, 335, 330, 350, 385, 365],
      [120, 270, 155, 290, 197, 310, 245, 330, 295, 350, 355, 365, 415, 380],
      [128, 280, 165, 300, 210, 320, 260, 340, 315, 360, 380, 380, 445, 395],
      [135, 290, 175, 310, 223, 330, 275, 350, 335, 370, 405, 390, 475, 405],
      [143, 300, 185, 320, 235, 340, 290, 360, 355, 380, 425, 400, 500, 415],
      [150, 310, 195, 330, 247, 350, 305, 370, 370, 390, 445, 410, 525, 425],
      [157, 315, 204, 335, 258, 360, 320, 380, 385, 400, 465, 420, 545, 435]] },
    { name: "200 T taper bore (27°)", P: P200T, sizes: [1.05, 1.2, 1.3, 1.4, 1.5, 1.6, 1.75, 1.9], data: [
      [250, 345, 330, 375, 385, 390, 440, 410, 515, 430, 585, 445, 695, 470, 825, 495],
      [270, 360, 355, 395, 415, 410, 480, 430, 555, 450, 630, 465, 755, 495, 890, 515],
      [290, 375, 380, 410, 445, 430, 515, 450, 590, 470, 675, 485, 805, 515, 950, 535],
      [310, 390, 405, 425, 475, 445, 545, 465, 625, 485, 715, 505, 855, 535, 1005, 555],
      [325, 400, 425, 440, 500, 460, 575, 480, 660, 500, 755, 520, 900, 550, 1060, 575],
      [340, 410, 445, 450, 525, 470, 605, 495, 695, 515, 790, 535, 945, 565, 1110, 590],
      [355, 420, 465, 460, 545, 480, 630, 505, 725, 530, 825, 550, 985, 580, 1160, 605],
      [370, 425, 485, 465, 565, 485, 655, 515, 755, 540, 860, 560, 1025, 590, 1210, 620]] },
    { name: "200 R ring (27°)", P: P200R, sizes: [1.29, 1.46, 1.56, 1.66, 1.74, 1.83, 1.93], data: [
      [230, 325, 300, 355, 350, 370, 410, 390, 470, 405, 535, 420, 640, 435],
      [250, 340, 330, 370, 385, 390, 445, 410, 515, 425, 585, 440, 695, 455],
      [270, 355, 355, 385, 415, 405, 480, 425, 555, 440, 630, 455, 755, 475],
      [290, 370, 380, 400, 445, 420, 515, 440, 590, 455, 675, 470, 805, 490],
      [310, 380, 405, 415, 475, 435, 545, 455, 625, 470, 715, 485, 855, 505],
      [325, 390, 425, 425, 500, 445, 575, 465, 660, 480, 755, 500, 900, 520],
      [340, 400, 445, 435, 525, 455, 605, 475, 685, 490, 790, 510, 945, 535],
      [355, 410, 465, 445, 545, 465, 630, 485, 725, 500, 825, 520, 985, 545],
      [370, 415, 485, 450, 565, 470, 655, 490, 755, 505, 860, 525, 1025, 550]] }];
  T["12.6"] = {
    title: "Performance of 150 and 200 series big guns (Nelson Irrigation Corp.)",
    cols: ["Gun and nozzle", "Nozzle size (in)", "Pressure (psi)", "Flow (gpm)", "Wetted diameter (ft)"],
    rows: [],
    notes: "150 series 24° trajectory, 200 series 27° trajectory. The diameter of throw is approximately 2% less for the 24° trajectory angle and 5% less for the 21° trajectory angle.",
  };
  const gunOpts = [];
  gunSets.forEach((g, gi) => g.sizes.forEach((s, si) => {
    gunOpts.push([g.name + ", " + s + " in nozzle", gi * 100 + si]);
    g.P.forEach((p, pi) => T["12.6"].rows.push([g.name, s, p, g.data[pi][2 * si], g.data[pi][2 * si + 1]]));
  }));

  // Table 12.7. Maximum traveler lane spacing, ft (p. 266)
  T["12.7"] = {
    title: "Maximum spacing for traveler irrigation systems (ring nozzles: smaller percentages, tapered nozzles: larger)",
    cols: ["Wetted diameter (ft)", "50% (wind over 10 mph)", "55% (wind over 10 mph)", "60% (wind up to 10 mph)", "65% (wind up to 10 mph)", "70% (wind up to 5 mph)", "75% (wind up to 5 mph)", "80% (no wind)"],
    rows: [
      [200, 100, 110, 120, 130, 140, 150, 160], [250, 125, 137, 150, 162, 175, 187, 200],
      [300, 150, 165, 180, 195, 210, 225, 240], [350, 175, 192, 210, 227, 245, 262, 280],
      [400, 200, 220, 240, 260, 280, 300, 320], [450, 225, 248, 270, 292, 315, 338, 360],
      [500, 250, 275, 300, 325, 350, 375, 400], [550, 275, 302, 330, 358, 385, 412, 440],
      [600, 300, 330, 360, 390, 420, null, null]],
    notes: "Based on USDA-NRCS (2016). Spacing = percent x wetted diameter.",
  };
  const pct127 = [[ "50% (ring nozzle, wind over 10 mph)", 50], ["55% (taper nozzle, wind over 10 mph)", 55], ["60% (ring nozzle, wind up to 10 mph)", 60],
    ["65% (taper nozzle, wind up to 10 mph)", 65], ["70% (ring nozzle, wind up to 5 mph)", 70], ["75% (taper nozzle, wind up to 5 mph)", 75], ["80% (no wind)", 80]];

  // Table 12.8. Typical cable-tow traveler characteristics, Harrison et al. (2015) (p. 267)
  T["12.8"] = {
    title: "Typical characteristics for cable-tow traveler irrigation systems",
    cols: ["Hose diameter (in)", "Hose length (ft)", "Max travel distance (ft)", "Max capacity (gpm)", "Max irrigated area (ac)", "Sprinkler pressure (psi)", "Typical lane spacing (ft)", "Area per pass (ac)", "Max hose pull (lb)"],
    rows: [
      [2.5, 660, 1320, 165, 33, "60-70", 180, 5.5, "1,300-1,900"],
      [3, 330, 660, 250, 50, "70-80", 210, 3.2, "1,000-1,500"],
      [3, 660, 1320, 250, 50, "70-80", 210, 6.4, "2,000-3,000"],
      [3.5, 660, 1320, 375, 75, "80-90", 240, 7.3, "3,000-4,000"],
      [4, 660, 1320, 535, 107, "90-100", 300, 9.1, "3,500-5,000"],
      [4, 1320, 2640, 535, 107, "90-100", 300, 18.2, "7,000-10,000"],
      [4.5, 660, 1320, 730, 145, "90-100", 300, 9.1, "4,000-6,000"],
      [4.5, 990, 1980, 730, 145, "90-100", 300, 13.6, "6,000-9,000"],
      [4.5, 1320, 2640, 730, 145, "90-100", 300, 18.2, "8,000-12,000"],
      [5, 660, 1320, 960, 192, "100-120", 330, 10, "5,000-7,000"]],
  };

  // Table 12.9. Lay-flat hose pressure loss, psi/100 ft at 100 psi (p. 269)
  T["12.9"] = {
    title: "Pressure loss (psi/100 ft) for lay-flat hose operated at 100 psi",
    cols: ["Flow (gpm)", "2.5 in", "3 in", "4 in", "4.5 in", "5 in"],
    rows: [
      [100, 1.6, null, null, null, null], [150, 3.4, 1.4, null, null, null], [200, 5.6, 2.4, null, null, null],
      [250, null, 3.6, 0.9, null, null], [300, null, 5.1, 1.3, 0.6, null], [400, null, null, 2.3, 1.3, null],
      [500, null, null, 3.5, 2.1, 1.1], [600, null, null, 4.9, 2.7, 1.6], [700, null, null, null, 3.6, 2.1],
      [800, null, null, null, 4.6, 2.7], [900, null, null, null, null, 3.4], [1000, null, null, null, null, 4.2]],
    notes: "USDA-NRCS (2016). Nominal inside diameter. Dashes in the book are blank here.",
  };
  // Table 12.10. Hard hose friction loss, psi/100 ft, C = 150 (p. 269)
  T["12.10"] = {
    title: "Friction loss in hard hose, psi/100 ft (Hazen-Williams C = 150)",
    cols: ["Flow (gpm)", "2.5 in", "2.7 in", "3.0 in", "3.3 in", "3.7 in", "4.0 in", "4.5 in", "5.0 in"],
    rows: [
      [75, 1.45, 1.00, 0.60, null, null, null, null, null],
      [100, 2.48, 1.70, 1.02, 0.64, null, null, null, null],
      [125, 3.74, 2.57, 1.54, 0.97, 0.56, null, null, null],
      [150, 5.24, 3.61, 2.16, 1.36, 0.78, 0.53, null, null],
      [175, 6.98, 4.80, 2.87, 1.81, 1.04, 0.71, 0.40, null],
      [200, 8.94, 6.14, 3.68, 2.31, 1.33, 0.91, 0.51, 0.31],
      [250, null, 9.29, 5.56, 3.50, 2.00, 1.37, 0.77, 0.46],
      [300, null, null, 7.80, 4.90, 2.81, 1.92, 1.08, 0.65],
      [350, null, null, 10.37, 6.52, 3.74, 2.56, 1.44, 0.86],
      [400, null, null, null, 8.35, 4.79, 3.28, 1.85, 1.11],
      [450, null, null, null, null, 5.95, 4.07, 2.30, 1.38],
      [500, null, null, null, null, null, 4.95, 2.79, 1.67],
      [550, null, null, null, null, null, 5.91, 3.33, 1.99],
      [600, null, null, null, null, null, null, 3.91, 2.34],
      [650, null, null, null, null, null, null, 4.54, 2.72],
      [700, null, null, null, null, null, null, 5.21, 3.12],
      [750, null, null, null, null, null, null, null, 3.54],
      [800, null, null, null, null, null, null, null, 3.99]],
    notes: "Hose inside diameter. Dashes in the book are blank here.",
  };
  // interpolate a column of a flow table over the rows that have values
  function colInterp(tab, col, x) {
    const pts = tab.rows.filter(r => r[col] !== null && r[col] !== undefined).map(r => [r[0], r[col]]);
    if (!pts.length) return NaN;
    if (x < pts[0][0] || x > pts[pts.length - 1][0]) return NaN;
    return M.interp(pts, x);
  }

  C({
    id: "eq-12.1", eq: ["12.1"], sec: "12.2", page: 238, title: "Moved-lateral application rate and gross depth",
    tags: ["application rate", "gross depth", "side roll", "hand move", "wheel line", "how much water does my set put on", "inches per hour sprinkler"],
    inputs: [
      { k: "qs", sym: "q<sub>s</sub>", label: "Sprinkler discharge", dim: "flow", u: "gpm", v: 10.3 },
      { k: "SL", sym: "S<sub>L</sub>", label: "Sprinkler spacing along the lateral", dim: "length", u: "ft", v: 40 },
      { k: "Sm", sym: "S<sub>m</sub>", label: "Lateral spacing along the mainline", dim: "length", u: "ft", v: 60 },
      { k: "To", sym: "T<sub>o</sub>", label: "Application time per set", dim: "time", u: "hr", v: 11 }],
    outputs: [
      { k: "Ar", sym: "A<sub>r</sub>", label: "Average application rate", dim: "rate", u: "in/hr", dp: 3 },
      { k: "dg", sym: "d<sub>g</sub>", label: "Gross depth of application", dim: "length", u: "in", dp: 2 }],
    f: v => { const Ar = 96.3 * v.qs / (v.SL * v.Sm); return { Ar, dg: Ar * v.To }; },
    // the book rounds A_r to 0.41 in/hr before multiplying by 11 hr, giving 4.5 in
    examples: [{ ref: "Examples 12.2 and 12.3", page: 245, in: { qs: 10.3, SL: 40, Sm: 60, To: 11 }, out: { Ar: 0.41, dg: 4.5 }, tol: 0.015 }],
    tables: ["12.3"],
  });

  C({
    id: "eq-12.2", eq: ["12.2"], sec: "12.2", page: 238, title: "Net depth from gross depth",
    tags: ["net depth", "application efficiency", "low quarter", "ELQ"],
    inputs: [
      { k: "dg", sym: "d<sub>g</sub>", label: "Gross depth of application", dim: "length", u: "in", v: 4.5 },
      { k: "E", sym: "E<sub>LQ</sub>", label: "Application efficiency of the low quarter", dim: "frac", u: "decimal", v: 0.75 }],
    outputs: [{ k: "dn", sym: "d<sub>n</sub>", label: "Net depth of application", dim: "length", u: "in", dp: 2 }],
    f: v => ({ dn: v.dg * v.E }),
    examples: [{ ref: "Example 12.3", page: 246, in: { dg: 4.5, E: 0.75 }, out: { dn: 3.38 } }],
  });

  C({
    id: "eq-12.3", eq: ["12.3"], sec: "12.2", page: 239, title: "Required net depth from interval and crop water use",
    tags: ["required depth", "irrigation interval", "net crop water use", "how much do I need each irrigation"],
    inputs: [
      { k: "Ii", sym: "I<sub>i</sub>", label: "Irrigation interval", dim: "time", u: "d", v: 11.5 },
      { k: "Cn", sym: "C<sub>n</sub>", label: "Net crop water use rate", dim: "rate", u: "in/d", v: 0.294 }],
    outputs: [{ k: "dr", sym: "d<sub>r</sub>", label: "Required net depth", dim: "length", u: "in", dp: 2 }],
    f: v => ({ dr: v.Ii * v.Cn }),
    examples: [{ ref: "Example 12.3 (3.38 in over 11.5 d = 0.29 in/d)", page: 246, in: { Ii: 11.5, Cn: 3.38 / 11.5 }, out: { dr: 3.38 } }],
  });

  C({
    id: "eq-12.4", eq: ["12.4"], sec: "12.2", page: 239, title: "Allowable depletion",
    tags: ["allowable depletion", "AD", "MAD", "root zone", "how much can the soil hold before irrigating"],
    inputs: [
      { k: "Rd", sym: "R<sub>d</sub>", label: "Root depth for scheduling", dim: "length", u: "ft", v: 4 },
      { k: "AWC", sym: "AWC", label: "Available water capacity", dim: "awc", u: "in/ft", v: 1.8 },
      { k: "fdc", sym: "f<sub>dc</sub>", label: "Allowable (critical) depletion fraction", dim: "frac", u: "decimal", v: 0.5 }],
    outputs: [{ k: "AD", sym: "AD", label: "Allowable depletion before irrigating", dim: "length", u: "in", dp: 2 }],
    f: v => ({ AD: v.Rd * v.AWC * v.fdc }),
    examples: [{ ref: "Example 12.3", page: 246, in: { Rd: 4, AWC: 1.8, fdc: 0.5 }, out: { AD: 3.6 } }],
    figs: ["12.5"],
  });

  C({
    id: "eq-12.5-12.7", eq: ["12.5", "12.6", "12.7"], sec: "12.2", page: 241, title: "Area per set and number of sets",
    tags: ["acres per set", "number of sets", "sets in field", "how many moves"],
    inputs: [
      { k: "L", sym: "L", label: "Lateral length", dim: "length", u: "ft", v: 1320 },
      { k: "Sm", sym: "S<sub>m</sub>", label: "Lateral spacing along the mainline", dim: "length", u: "ft", v: 60 },
      { k: "Wf", sym: "W<sub>f</sub>", label: "Field width", dim: "length", u: "ft", v: 1320 },
      { k: "Lf", sym: "L<sub>f</sub>", label: "Field length", dim: "length", u: "ft", v: 2640 }],
    outputs: [
      { k: "As", sym: "A<sub>s</sub>", label: "Area irrigated per set (Eq. 12.5)", dim: "area", u: "ac", dp: 2 },
      { k: "Af", sym: "A<sub>f</sub>", label: "Field area", dim: "area", u: "ac", dp: 1 },
      { k: "Nraw", sym: "N<sub>s</sub>", label: "Number of sets, unrounded (Eq. 12.6 / 12.7)", dim: "count", dp: 2 },
      { k: "Ns", sym: "N<sub>s</sub>", label: "Number of sets (rounded up)", dim: "count", dp: 0 }],
    f: v => {
      const As = v.L * v.Sm / 43560, Af = v.Wf * v.Lf / 43560, Nraw = v.Wf * v.Lf / (v.Sm * v.L);
      return { As, Af, Nraw, Ns: Math.ceil(Nraw - 1e-9) };
    },
    examples: [{ ref: "Example 12.2", page: 245, in: { L: 1320, Sm: 60, Wf: 1320, Lf: 2640 }, out: { As: 1.82, Af: 80, Ns: 44 } }],
    figs: ["12.6"],
  });

  C({
    id: "eq-12.8-12.9", eq: ["12.8", "12.9"], sec: "12.2", page: 242, title: "Sets per lateral and number of laterals",
    tags: ["number of laterals", "sets per lateral", "how many wheel lines do I need"],
    inputs: [
      { k: "Ii", sym: "I<sub>i</sub>", label: "Irrigation interval", dim: "time", u: "d", v: 11.5 },
      { k: "Tm", sym: "T<sub>m</sub>", label: "Time to reposition the lateral to the first set", dim: "time", u: "hr", v: 12 },
      { k: "Ts", sym: "T<sub>s</sub>", label: "Set time", dim: "time", u: "hr", v: 12 },
      { k: "Ns", sym: "N<sub>s</sub>", label: "Number of sets in the field", dim: "count", v: 44 }],
    outputs: [
      { k: "Npraw", sym: "N<sub>p</sub>", label: "Sets per lateral, unrounded", dim: "count", dp: 2 },
      { k: "Np", sym: "N<sub>p</sub>", label: "Sets per lateral (rounded down)", dim: "count", dp: 0 },
      { k: "NL", sym: "N<sub>L</sub>", label: "Number of laterals (rounded up)", dim: "count", dp: 0 }],
    f: v => {
      const Npraw = (24 * v.Ii - v.Tm) / v.Ts, Np = Math.floor(Npraw + 1e-9);
      return { Npraw, Np, NL: Np > 0 ? Math.ceil(v.Ns / Np - 1e-9) : NaN };
    },
    examples: [{ ref: "Examples 12.2 and 12.3", page: 246, in: { Ii: 11.5, Tm: 12, Ts: 12, Ns: 44 }, out: { Np: 22, NL: 2 } }],
  });

  C({
    id: "eq-12.10", eq: ["12.10"], sec: "12.2", page: 247, title: "Average lateral pressure from minimum and maximum",
    tags: ["average pressure", "pressure variation", "20% rule", "pitot", "lateral evaluation", "is my pressure variation ok"],
    inputs: [
      { k: "Pmax", sym: "P<sub>max</sub>", label: "Maximum measured nozzle pressure", dim: "pressure", u: "psi", v: 45 },
      { k: "Pmin", sym: "P<sub>min</sub>", label: "Minimum measured nozzle pressure", dim: "pressure", u: "psi", v: 32 }],
    outputs: [
      { k: "Pa", sym: "P<sub>a</sub>", label: "Average pressure", dim: "pressure", u: "psi", dp: 1 },
      { k: "dP", label: "Pressure variation (max − min)", dim: "pressure", u: "psi", dp: 1 },
      { k: "lim", label: "Allowed variation (20% of average)", dim: "pressure", u: "psi", dp: 1 },
      { k: "pct", label: "Variation as percent of average", dim: "pct", u: "%", dp: 0 },
      { k: "ok", label: "Check", text: true }],
    f: v => {
      const Pa = v.Pmin + 0.25 * (v.Pmax - v.Pmin), dP = v.Pmax - v.Pmin;
      return { Pa, dP, lim: 0.2 * Pa, pct: dP / Pa * 100, ok: dP <= 0.2 * Pa ? "Meets the 20% guideline" : "Exceeds the 20% guideline: consider pressure regulators, flow control nozzles or larger pipe near the inlet" };
    },
    examples: [{ ref: "Example 12.4", page: 248, in: { Pmax: 45, Pmin: 32 }, out: { Pa: 35, dP: 13, lim: 7, ok: "Exceeds the 20% guideline: consider pressure regulators, flow control nozzles or larger pipe near the inlet" } }],
    figs: ["12.8"],
  });

  C({
    id: "avg-discharge-12", eq: [], sec: "12.2", page: 247, title: "Average sprinkler discharge from minimum and maximum",
    tags: ["discharge variation", "10% rule", "flow test", "bucket test sprinkler"],
    note: "The text says the average discharge equals the minimum plus about 40% of the measured variation, and discharge should vary less than 10% of the average.",
    inputs: [
      { k: "qmax", label: "Maximum measured sprinkler discharge", dim: "flow", u: "gpm", v: 10.96 },
      { k: "qmin", label: "Minimum measured sprinkler discharge", dim: "flow", u: "gpm", v: 9.11 }],
    outputs: [
      { k: "qa", label: "Average discharge", dim: "flow", u: "gpm", dp: 2 },
      { k: "pct", label: "Variation as percent of average", dim: "pct", u: "%", dp: 0 },
      { k: "ok", label: "Check", text: true }],
    f: v => { const qa = v.qmin + 0.4 * (v.qmax - v.qmin), pct = (v.qmax - v.qmin) / qa * 100; return { qa, pct, ok: pct <= 10 ? "Within 10% guideline" : "Exceeds 10% guideline" }; },
    // Table 12.4 (no regulators) lists 9.62 gpm average and 19% variation from the full lateral simulation
    examples: [{ ref: "Table 12.4", page: 250, in: { qmax: 10.96, qmin: 9.11 }, out: { qa: 9.62, pct: 19 }, tol: 0.06 }],
  });

  C({
    id: "can-depth-12", eq: [], sec: "12.2", page: 252, title: "Catch can volume to depth",
    tags: ["catch can", "rain gauge", "cm3 to inches", "can test"],
    inputs: [
      { k: "V", label: "Volume caught", dim: "volume", u: "cm³", v: 235 },
      { k: "D", label: "Diameter of the can top", dim: "length", u: "in", v: 4 }],
    outputs: [
      { k: "A", label: "Area of the can opening", dim: "area", u: "cm²", dp: 2 },
      { k: "d", label: "Depth caught", dim: "length", u: "in", dp: 2 }],
    f: v => { const A = 6.452 * Math.PI * v.D * v.D / 4; return { A, d: v.V / A / 2.54 }; },
    examples: [{ ref: "Example 12.5", page: 252, in: { V: 235, D: 4 }, out: { A: 81.08, d: 1.14 } }],
    tables: ["12.5"],
  });

  C({
    id: "catch-can-12", eq: [], sec: "12.2", page: 252, title: "Moved-lateral catch can test: overlap and CU",
    tags: ["catch can test", "uniformity", "CU", "Christiansen", "overlap sets", "how even is my side roll"],
    note: "Procedure of Example 12.5 and Table 12.5. Cans are laid out in rows parallel to one lateral. Volumes from the single central set are converted to depth, then each can between the central lateral and the next set (0 < y < S<sub>m</sub>) gets the depth caught at y + S<sub>m</sub> and y − S<sub>m</sub> added (the neighbouring sets). CU = 100 (1 − Σ|d − d̄| / (n d̄)).",
    inputs: [
      { k: "vol", label: "Volumes caught (cm³), row by row in the same order as the row distances", type: "list", v: t125flat },
      { k: "pos", label: "Row distances from the lateral (ft, one per row, + toward the next set)", type: "list", v: t125pos },
      { k: "nc", label: "Number of cans in each row", dim: "count", v: 8 },
      { k: "D", label: "Can top diameter", dim: "length", u: "in", v: 4 },
      { k: "Sm", sym: "S<sub>m</sub>", label: "Lateral spacing (set spacing)", dim: "length", u: "ft", v: 60 }],
    outputs: [
      { k: "n", label: "Number of overlapped can locations", dim: "count", dp: 0 },
      { k: "mean", sym: "d<sub>a</sub>", label: "Mean overlapped depth", dim: "length", u: "in", dp: 2 },
      { k: "dev", label: "Mean absolute deviation", dim: "length", u: "in", dp: 2 },
      { k: "CU", sym: "CU", label: "Coefficient of uniformity", dim: "pct", u: "%", dp: 0 },
      { k: "ov", label: "Overlapped depths by row (in)", text: true }],
    f: v => {
      const vol = M.list(v.vol), pos = M.list(v.pos), nc = Math.round(v.nc);
      const A = 6.452 * Math.PI * v.D * v.D / 4;
      const depth = (row, c) => vol[row * nc + c] / A / 2.54;
      const findRow = y => pos.findIndex(p => Math.abs(p - y) < 1e-6);
      const all = [], lines = [];
      pos.forEach((y, r) => {
        if (!(y > 0 && y < v.Sm)) return;
        const rr = [];
        for (let c = 0; c < nc; c++) {
          let s = 0;
          for (let k = -3; k <= 3; k++) { const i = findRow(y + k * v.Sm); if (i >= 0) s += depth(i, c); }
          rr.push(s); all.push(s);
        }
        lines.push(y + " ft: " + rr.map(x => x.toFixed(2)).join(", "));
      });
      const mean = M.mean(all), dev = M.mean(all.map(x => Math.abs(x - mean)));
      return { n: all.length, mean, dev, CU: 100 * (1 - dev / mean), ov: lines.join("; ") };
    },
    examples: [{ ref: "Example 12.5 and Table 12.5", page: 252, in: {}, out: { n: 48, mean: 1.26, dev: 0.13, CU: 90 }, tol: 0.03 }],
    tables: ["12.5"], figs: ["12.11"],
  });

  C({
    id: "cu-list-12", eq: [], sec: "12.2", page: 252, title: "Coefficient of uniformity from a list of depths",
    tags: ["CU", "Christiansen uniformity", "catch can", "uniformity coefficient"],
    inputs: [{ k: "d", label: "Overlapped depths (any unit)", type: "list", v: "1.39, 1.16, 1.10, 1.34, 1.40, 1.11, 1.06, 1.28" }],
    outputs: [
      { k: "mean", label: "Mean depth", dp: 3 },
      { k: "dev", label: "Mean absolute deviation", dp: 3 },
      { k: "CU", sym: "CU", label: "Coefficient of uniformity", dim: "pct", u: "%", dp: 1 }],
    f: v => { const a = M.list(v.d), m = M.mean(a), dev = M.mean(a.map(x => Math.abs(x - m))); return { mean: m, dev, CU: 100 * (1 - dev / m) }; },
  });

  C({
    id: "eq-12.11", eq: ["12.11"], sec: "12.5", page: 268, title: "Traveler gross depth and travel speed",
    tags: ["traveler", "big gun", "hard hose", "travel speed", "depth applied traveler", "how fast should my traveler go"],
    inputs: [
      { k: "qs", sym: "q<sub>s</sub>", label: "Gun discharge", dim: "flow", u: "gpm", v: 585 },
      { k: "Wp", sym: "W<sub>p</sub>", label: "Travel lane spacing (set width)", dim: "length", u: "ft", v: 264 },
      { k: "Ll", sym: "L<sub>l</sub>", label: "Travel distance in the lane (lane length less setback)", dim: "length", u: "ft", v: 1212 },
      { k: "To", sym: "T<sub>o</sub>", label: "Time of operation for one lane", dim: "time", u: "hr", v: 11 }],
    outputs: [
      { k: "vt", sym: "v<sub>t</sub>", label: "Travel speed", dim: "velocity", u: "ft/hr", dp: 1 },
      { k: "dg", sym: "d<sub>g</sub>", label: "Average gross depth applied", dim: "length", u: "in", dp: 2 }],
    f: v => { const vt = v.Ll / v.To; return { vt, dg: 96.3 * v.qs * v.To / (v.Wp * v.Ll) }; },
    examples: [{ ref: "Example 12.6", page: 268, in: { qs: 585, Wp: 264, Ll: 1300 - 88, To: 11 }, out: { vt: 110, dg: 1.94 } }],
    figs: ["12.18", "12.20"],
  });

  C({
    id: "eq-12.12", eq: ["12.12"], sec: "12.5", page: 268, title: "Traveler gun average application rate",
    tags: ["traveler application rate", "big gun", "wetted radius", "gun angle", "runoff traveler"],
    inputs: [
      { k: "qs", sym: "q<sub>s</sub>", label: "Gun discharge", dim: "flow", u: "gpm", v: 585 },
      { k: "Wr", sym: "W<sub>r</sub>", label: "Wetted radius of the gun", dim: "length", u: "ft", v: 220 },
      { k: "b", sym: "β", label: "Central angle of gun operation", dim: "angle", u: "degrees", v: 270 }],
    outputs: [{ k: "Ar", sym: "A<sub>r</sub>", label: "Average application rate", dim: "rate", u: "in/hr", dp: 2 }],
    f: v => ({ Ar: 11035 / v.b * v.qs / (v.Wr * v.Wr) }),
    examples: [{ ref: "Example 12.6", page: 268, in: { qs: 585, Wr: 220, b: 270 }, out: { Ar: 0.49 } }],
  });

  C({
    id: "eq-12.13", eq: ["12.13"], sec: "12.5", page: 268, title: "Traveler flow requirement",
    tags: ["traveler flow", "gun size", "system capacity traveler", "how many gpm does my traveler need"],
    inputs: [
      { k: "Cn", sym: "C<sub>n</sub>", label: "Net system capacity requirement", dim: "capacity", u: "gpm/ac", v: 4.5 },
      { k: "Ea", sym: "E<sub>a</sub>", label: "Application efficiency", dim: "frac", u: "decimal", v: 0.75 },
      { k: "Wp", sym: "W<sub>p</sub>", label: "Travel lane width", dim: "length", u: "ft", v: 264 },
      { k: "Ll", sym: "L<sub>l</sub>", label: "Travel lane length", dim: "length", u: "ft", v: 1300 },
      { k: "Ns", sym: "N<sub>s</sub>", label: "Number of sets (lanes) in the field", dim: "count", v: 10 },
      { k: "Nt", sym: "N<sub>t</sub>", label: "Number of travelers", dim: "count", v: 1 },
      { k: "Ts", sym: "T<sub>s</sub>", label: "Set time (between moves)", dim: "time", u: "hr", v: 12 },
      { k: "To", sym: "T<sub>o</sub>", label: "Time water is applied per lane", dim: "time", u: "hr", v: 11 },
      { k: "Ii", sym: "I<sub>i</sub>", label: "Irrigation interval", dim: "time", u: "d", v: 5.5 },
      { k: "Td", sym: "T<sub>d</sub>", label: "Down time between irrigations", dim: "time", u: "d", v: 0.5 }],
    outputs: [
      { k: "As", label: "Area per set", dim: "area", u: "ac", dp: 2 },
      { k: "qs", sym: "q<sub>s</sub>", label: "Required traveler flow", dim: "flow", u: "gpm", dp: 0 }],
    f: v => ({ As: v.Wp * v.Ll / 43560, qs: v.Cn * v.Wp * v.Ll / (v.Ea * 43560) * (v.Ns / v.Nt) * (v.Ts / v.To) * (v.Ii / (v.Ii - v.Td)) }),
    examples: [{ ref: "Example 12.7", page: 269, in: {}, out: { As: 7.88, qs: 567 } }],
  });

  C({
    id: "eq-12.14", eq: ["12.14"], sec: "12.5", page: 272, title: "Gun discharge from pressure and nozzle size",
    tags: ["gun discharge", "big gun nozzle", "discharge coefficient", "nozzle flow"],
    inputs: [
      { k: "Cd", sym: "C<sub>d</sub>", label: "Discharge coefficient", v: 16.0 },
      { k: "P", sym: "P", label: "Nozzle pressure", dim: "pressure", u: "psi", v: 60 },
      { k: "a", sym: "a", label: "Pressure exponent (pressure in psi)", v: 0.5 },
      { k: "Dn", sym: "D<sub>n</sub>", label: "Nozzle diameter", dim: "length", u: "in", v: 1.83 },
      { k: "b", sym: "b", label: "Nozzle diameter exponent (size in inches)", v: 2.566 }],
    outputs: [{ k: "qs", sym: "q<sub>s</sub>", label: "Gun discharge", dim: "flow", u: "gpm", dp: 0 }],
    f: v => ({ qs: v.Cd * Math.pow(v.P, v.a) * Math.pow(v.Dn, v.b) }),
    examples: [{ ref: "Figure 12.22 text", page: 272, in: {}, out: { qs: 584 } }],
    tables: ["12.6"], figs: ["12.21", "12.22"],
  });

  C({
    id: "tab-12.3", eq: [], sec: "12.2", page: 239, title: "Moved-lateral application rate table (Table 12.3)",
    tags: ["application rate table", "sprinkler spacing", "40 by 60", "inches per hour"],
    tables: ["12.3"],
    inputs: [
      { k: "row", label: "Spacing S<sub>L</sub> x S<sub>m</sub> (ft)", type: "sel", opts: T["12.3"].rows.map((r, i) => [r[0] + " x " + r[1], i]), v: 9 },
      { k: "qs", sym: "q<sub>s</sub>", label: "Sprinkler discharge", dim: "flow", u: "gpm", v: 10 }],
    outputs: [
      { k: "tab", label: "Table value (interpolated between discharge columns)", dim: "rate", u: "in/hr", dp: 2 },
      { k: "Ar", sym: "A<sub>r</sub>", label: "Computed 96.3 q<sub>s</sub>/(S<sub>L</sub>S<sub>m</sub>)", dim: "rate", u: "in/hr", dp: 3 }],
    f: v => {
      const r = T["12.3"].rows[v.row];
      const pts = q123.map((q, i) => [q, r[3 + i]]).filter(p => p[1] !== null);
      const tab = v.qs < pts[0][0] || v.qs > pts[pts.length - 1][0] ? NaN : M.interp(pts, v.qs);
      return { tab, Ar: 96.3 * v.qs / (r[0] * r[1]) };
    },
    examples: [{ ref: "Table 12.3", page: 239, in: { row: 9, qs: 10 }, out: { tab: 0.40, Ar: 0.40 } }],
  });

  C({
    id: "tab-12.6", eq: [], sec: "12.4", page: 259, title: "Big gun flow and wetted diameter (Table 12.6)",
    tags: ["Nelson big gun", "gun nozzle chart", "ring nozzle", "taper bore", "wetted diameter gun", "gun flow"],
    tables: ["12.6"], figs: ["12.15"],
    inputs: [
      { k: "g", label: "Gun series and nozzle", type: "sel", opts: gunOpts, v: 2 },
      { k: "P", label: "Pressure at the gun", dim: "pressure", u: "psi", v: 80 }],
    outputs: [
      { k: "q", label: "Gun flow", dim: "flow", u: "gpm", dp: 0 },
      { k: "Dw", label: "Wetted diameter", dim: "length", u: "ft", dp: 0 },
      { k: "Wr", label: "Wetted radius", dim: "length", u: "ft", dp: 0 }],
    f: v => {
      const g = gunSets[Math.floor(v.g / 100)], si = v.g % 100;
      if (v.P < g.P[0] || v.P > g.P[g.P.length - 1]) return { q: NaN, Dw: NaN, Wr: NaN };
      const q = M.interp(g.P.map((p, i) => [p, g.data[i][2 * si]]), v.P), Dw = M.interp(g.P.map((p, i) => [p, g.data[i][2 * si + 1]]), v.P);
      return { q, Dw, Wr: Dw / 2 };
    },
    examples: [{ ref: "Table 12.6", page: 259, in: { g: 2, P: 80 }, out: { q: 210, Dw: 335 } },
               { ref: "Table 12.6", page: 259, in: { g: 305, P: 60 }, out: { q: 585, Dw: 440 } }],
  });

  C({
    id: "tab-12.7", eq: [], sec: "12.5", page: 266, title: "Maximum traveler lane spacing (Table 12.7)",
    tags: ["traveler lane spacing", "towpath spacing", "wind", "maximum set width"],
    tables: ["12.7"],
    inputs: [
      { k: "Dw", label: "Gun wetted diameter", dim: "length", u: "ft", v: 440 },
      { k: "pct", label: "Wind and nozzle type", type: "sel", opts: pct127, v: 65 },
      { k: "Wp", label: "Actual lane spacing (optional check)", dim: "length", u: "ft", v: 264 }],
    outputs: [
      { k: "S", label: "Maximum lane spacing", dim: "length", u: "ft", dp: 0 },
      { k: "act", label: "Actual spacing as percent of wetted diameter", dim: "pct", u: "%", dp: 0 },
      { k: "ok", label: "Check", text: true }],
    f: v => { const S = v.Dw * v.pct / 100; return { S, act: v.Wp / v.Dw * 100, ok: v.Wp <= S ? "Spacing is within the maximum" : "Spacing exceeds the maximum" }; },
    examples: [{ ref: "Section 12.5.4", page: 272, in: { Dw: 440, pct: 65, Wp: 264 }, out: { S: 286, act: 60 } }],
  });

  C({
    id: "tab-12.8", eq: [], sec: "12.5", page: 267, title: "Cable-tow traveler characteristics (Table 12.8)",
    tags: ["cable tow traveler", "soft hose traveler", "hose pull", "traveler size"],
    tables: ["12.8"],
    inputs: [{ k: "r", label: "Hose diameter and length", type: "sel", opts: T["12.8"].rows.map((r, i) => [r[0] + " in x " + r[1] + " ft", i]), v: 6 }],
    outputs: [
      { k: "dist", label: "Maximum travel distance", dim: "length", u: "ft", dp: 0 },
      { k: "cap", label: "Maximum capacity", dim: "flow", u: "gpm", dp: 0 },
      { k: "area", label: "Maximum irrigated area", dim: "area", u: "ac", dp: 0 },
      { k: "P", label: "Sprinkler pressure range (psi)", text: true },
      { k: "lane", label: "Typical lane spacing", dim: "length", u: "ft", dp: 0 },
      { k: "pass", label: "Area covered per pass", dim: "area", u: "ac", dp: 1 },
      { k: "pull", label: "Maximum hose pull range (lb)", text: true }],
    f: v => { const r = T["12.8"].rows[v.r]; return { dist: r[2], cap: r[3], area: r[4], P: r[5], lane: r[6], pass: r[7], pull: r[8] }; },
  });

  C({
    id: "tab-12.9-12.10", eq: [], sec: "12.5", page: 269, title: "Traveler hose friction loss (Tables 12.9 and 12.10)",
    tags: ["hose friction", "hard hose loss", "lay flat hose", "traveler pressure loss", "PE hose"],
    tables: ["12.9", "12.10"],
    inputs: [
      { k: "h", label: "Hose type and inside diameter", type: "sel", v: 106,
        opts: [["Lay-flat 2.5 in (Table 12.9)", 1], ["Lay-flat 3 in", 2], ["Lay-flat 4 in", 3], ["Lay-flat 4.5 in", 4], ["Lay-flat 5 in", 5],
               ["Hard hose 2.5 in (Table 12.10)", 101], ["Hard hose 2.7 in", 102], ["Hard hose 3.0 in", 103], ["Hard hose 3.3 in", 104],
               ["Hard hose 3.7 in", 105], ["Hard hose 4.0 in", 106], ["Hard hose 4.5 in", 107], ["Hard hose 5.0 in", 108]] },
      { k: "Q", label: "Flow", dim: "flow", u: "gpm", v: 400 },
      { k: "L", label: "Hose length", dim: "length", u: "ft", v: 1000 }],
    outputs: [
      { k: "f", label: "Friction loss (interpolated)", dim: "ploss", u: "psi/100 ft", dp: 2 },
      { k: "P", label: "Loss in the hose", dim: "pressure", u: "psi", dp: 1 }],
    f: v => {
      const tab = v.h > 100 ? T["12.10"] : T["12.9"], col = v.h > 100 ? v.h - 100 : v.h;
      const f = colInterp(tab, col, v.Q);
      return { f, P: f * v.L / 100 };
    },
    examples: [{ ref: "Table 12.10", page: 269, in: { h: 106, Q: 400, L: 1000 }, out: { f: 3.28, P: 32.8 } },
               { ref: "Table 12.9", page: 269, in: { h: 4, Q: 600, L: 100 }, out: { f: 2.7 } }],
  });

  C({
    id: "moved-lateral-sheet", eq: ["12.1", "12.2", "12.4", "12.5", "12.7"], sec: "12.2", page: 243,
    title: "Moved-lateral management spreadsheet (Figure 12.7)",
    tags: ["side roll evaluation", "wheel line design", "hand move", "moved lateral spreadsheet", "is my side roll set up right"],
    note: "Follows Figure 12.7 and Examples 12.1 to 12.3. Friction uses Eq. 8.11b (psi/100 ft = 456 (Q/C)<sup>1.852</sup> / d<sup>4.866</sup>), velocity 0.409 Q/D², elevation 2.31 ft/psi. Sets per lateral = sets in field / number of laterals; interval = sets per lateral x set time + reposition time.",
    inputs: [
      { k: "Lf", label: "Field length", dim: "length", u: "ft", v: 2640 },
      { k: "Wf", label: "Field width", dim: "length", u: "ft", v: 1320 },
      { k: "AWC", label: "Water holding capacity", dim: "awc", u: "in/ft", v: 1.8 },
      { k: "Qin", label: "Total inflow available", dim: "flow", u: "gpm", v: 700 },
      { k: "dM", label: "Mainline inside diameter", dim: "length", u: "in", v: 7.872 },
      { k: "LM", label: "Mainline length", dim: "length", u: "ft", v: 1320 },
      { k: "eM", label: "Mainline elevation gain", dim: "length", u: "ft", v: 0, min: -1e4 },
      { k: "CM", label: "Mainline Hazen-Williams C", v: 120 },
      { k: "L", label: "Lateral length", dim: "length", u: "ft", v: 1320 },
      { k: "NL", label: "Number of laterals", dim: "count", v: 2 },
      { k: "dL", label: "Lateral inside diameter", dim: "length", u: "in", v: 4.856 },
      { k: "CL", label: "Lateral Hazen-Williams C", v: 120 },
      { k: "eL", label: "Lateral elevation gain", dim: "length", u: "ft", v: 8, min: -1e4 },
      { k: "F", label: "Multiple outlet factor F (Table 8.3)", v: 0.36 },
      { k: "Sm", label: "Lateral spacing along mainline", dim: "length", u: "ft", v: 60 },
      { k: "SL", label: "Sprinkler spacing along lateral", dim: "length", u: "ft", v: 40 },
      { k: "P", label: "Design sprinkler pressure", dim: "pressure", u: "psi", v: 55 },
      { k: "qs", label: "Design sprinkler discharge (Table 11.1)", dim: "flow", u: "gpm", v: 10.3 },
      { k: "Dw", label: "Wetted diameter (Table 11.2)", dim: "length", u: "ft", v: 113 },
      { k: "nf", label: "Number of full-circle sprinklers", dim: "count", v: 32 },
      { k: "nh", label: "Number of half-circle sprinklers", dim: "count", v: 2 },
      { k: "ps", label: "Sprinkler spacing limit, % of wetted diameter (Table 11.3)", dim: "pct", u: "%", v: 45 },
      { k: "pl", label: "Lateral spacing limit, % of wetted diameter (Table 11.3)", dim: "pct", u: "%", v: 60 },
      { k: "Rd", label: "Root depth", dim: "length", u: "ft", v: 4 },
      { k: "fdc", label: "Critical depletion", dim: "frac", u: "decimal", v: 0.5 },
      { k: "E", label: "Application efficiency of low quarter", dim: "frac", u: "decimal", v: 0.75 },
      { k: "Ts", label: "Set time", dim: "time", u: "hr", v: 12 },
      { k: "Tmv", label: "Drain and move time", dim: "time", u: "hr", v: 1 },
      { k: "Tm", label: "Reposition time to first set", dim: "time", u: "hr", v: 12 }],
    outputs: [
      { k: "Af", label: "Field size", dim: "area", u: "ac", dp: 1 },
      { k: "Csys", label: "System capacity", dim: "capacity", u: "gpm/ac", dp: 2 },
      { k: "QL", label: "Lateral flow", dim: "flow", u: "gpm", dp: 0 },
      { k: "QM", label: "Mainline flow", dim: "flow", u: "gpm", dp: 0 },
      { k: "fM", label: "Mainline friction factor", dim: "ploss", u: "psi/100 ft", dp: 2 },
      { k: "PM", label: "Mainline total pressure loss", dim: "pressure", u: "psi", dp: 1 },
      { k: "vM", label: "Mainline velocity (limit 5 ft/s)", dim: "velocity", u: "ft/s", dp: 1 },
      { k: "fL", label: "Lateral friction factor", dim: "ploss", u: "psi/100 ft", dp: 2 },
      { k: "PE", label: "Enclosed pipe friction loss", dim: "pressure", u: "psi", dp: 1 },
      { k: "PF", label: "Lateral friction loss (x F)", dim: "pressure", u: "psi", dp: 1 },
      { k: "PL", label: "Pressure loss along lateral with elevation", dim: "pressure", u: "psi", dp: 1 },
      { k: "pv", label: "Pressure loss / design pressure (limit 20%)", dim: "pct", u: "%", dp: 0 },
      { k: "Ar", label: "Application rate", dim: "rate", u: "in/hr", dp: 2 },
      { k: "Smx", label: "Maximum sprinkler spacing", dim: "length", u: "ft", dp: 0 },
      { k: "Lmx", label: "Maximum lateral spacing", dim: "length", u: "ft", dp: 0 },
      { k: "vL", label: "Lateral inflow velocity (limit 7 ft/s)", dim: "velocity", u: "ft/s", dp: 1 },
      { k: "As", label: "Acres per set", dim: "area", u: "ac", dp: 2 },
      { k: "Ns", label: "Number of sets in field", dim: "count", dp: 0 },
      { k: "Np", label: "Sets per lateral", dim: "count", dp: 0 },
      { k: "AD", label: "Allowable depletion", dim: "length", u: "in", dp: 2 },
      { k: "Ta", label: "Application time", dim: "time", u: "hr", dp: 1 },
      { k: "Ii", label: "Irrigation interval", dim: "time", u: "d", dp: 1 },
      { k: "down", label: "Down time", dim: "pct", u: "%", dp: 0 },
      { k: "dg", label: "Gross depth applied", dim: "length", u: "in", dp: 2 },
      { k: "dn", label: "Net depth applied", dim: "length", u: "in", dp: 2 },
      { k: "Cn", label: "Net crop water use supplied", dim: "rate", u: "in/d", dp: 2 },
      { k: "chk", label: "Checks", text: true }],
    f: v => {
      const Af = v.Lf * v.Wf / 43560, QL = v.qs * (v.nf + v.nh / 2), QM = QL * v.NL;
      const fM = HW(QM, v.CM, v.dM), PM = fM * v.LM / 100 + v.eM / 2.31, vM = 0.409 * QM / (v.dM * v.dM);
      const fL = HW(QL, v.CL, v.dL), PE = fL * v.L / 100, PF = PE * v.F, PL = PF + v.eL / 2.31, pv = PL / v.P * 100;
      const Ar = 96.3 * v.qs / (v.SL * v.Sm), Smx = v.ps / 100 * v.Dw, Lmx = v.pl / 100 * v.Dw, vL = 0.409 * QL / (v.dL * v.dL);
      const As = v.L * v.Sm / 43560, Ns = Math.ceil(v.Wf * v.Lf / (v.Sm * v.L) - 1e-9), Np = Math.ceil(Ns / v.NL - 1e-9);
      const AD = v.Rd * v.AWC * v.fdc, Ta = v.Ts - v.Tmv, Ii = (Np * v.Ts + v.Tm) / 24, down = (24 * Ii - Np * Ta) / (24 * Ii) * 100;
      const dg = Ar * Ta, dn = dg * v.E, Cn = dn / Ii;
      const c = [];
      c.push(pv <= 20 ? "pressure variation OK" : "pressure variation over 20%");
      c.push(v.SL <= Smx && v.Sm <= Lmx ? "spacing OK" : "spacing exceeds wind limit");
      c.push(vM <= 5 ? "mainline velocity OK" : "mainline velocity over 5 ft/s");
      c.push(vL <= 7 ? "lateral velocity OK" : "lateral velocity over 7 ft/s");
      c.push(dn <= AD ? "net depth within allowable depletion" : "net depth exceeds allowable depletion (deep percolation)");
      c.push(QM <= v.Qin ? "flow within supply" : "flow exceeds supply");
      return { Af, Csys: v.Qin / Af, QL, QM, fM, PM, vM, fL, PE, PF, PL, pv, Ar, Smx, Lmx, vL, As, Ns, Np, AD, Ta, Ii, down, dg, dn, Cn, chk: c.join("; ") };
    },
    examples: [{ ref: "Figure 12.7, Examples 12.1 to 12.3", page: 243, in: {},
      out: { Af: 80, Csys: 8.75, QL: 340, QM: 680, fM: 0.49, PM: 6.5, vM: 4.5, fL: 1.44, PE: 19.0, PF: 6.8, PL: 10.3, pv: 19, Ar: 0.41,
             Smx: 51, Lmx: 68, vL: 5.9, As: 1.82, Ns: 44, Np: 22, AD: 3.6, Ta: 11, Ii: 11.5, dg: 4.5, dn: 3.4, Cn: 0.30 }, tol: 0.025 },
      // the sheet shows down time as a whole percent (12.3% printed as 12%)
      { ref: "Figure 12.7", page: 243, in: {}, out: { down: 12 }, tol: 0.03 }],
    figs: ["12.6", "12.7"], tables: ["12.3"],
  });

  C({
    id: "traveler-sheet", eq: ["12.11", "12.12", "12.14"], sec: "12.5", page: 271,
    title: "Traveler management spreadsheet (Figure 12.22)",
    tags: ["traveler evaluation", "big gun traveler", "hard hose reel", "required inlet pressure traveler", "traveler spreadsheet"],
    note: "Follows Figure 12.22 and Section 12.5.4. Gun discharge from Eq. 12.14; hose and mainline friction from Eq. 8.11b with the C values given; nozzle height and elevation converted at 2.31 ft/psi; cart and reel loss is a manufacturer value. Travel distance = lane length less starting setback. Interval = sets per traveler x set time + reposition time.",
    inputs: [
      { k: "Lf", label: "Field length", dim: "length", u: "ft", v: 2640 },
      { k: "Wf", label: "Field width", dim: "length", u: "ft", v: 1320 },
      { k: "Li", label: "Length of irrigated area", dim: "length", u: "ft", v: 2600 },
      { k: "sb", label: "Starting setback", dim: "length", u: "ft", v: 88 },
      { k: "AWC", label: "Water holding capacity", dim: "awc", u: "in/ft", v: 1.8 },
      { k: "Qin", label: "Available inflow", dim: "flow", u: "gpm", v: 700 },
      { k: "dM", label: "Mainline inside diameter", dim: "length", u: "in", v: 7.872 },
      { k: "LM", label: "Mainline length", dim: "length", u: "ft", v: 1320 },
      { k: "eM", label: "Mainline elevation gain", dim: "length", u: "ft", v: 0, min: -1e4 },
      { k: "CM", label: "Mainline Hazen-Williams C", v: 120 },
      { k: "Lh", label: "Hose length", dim: "length", u: "ft", v: 1250 },
      { k: "dh", label: "Hose inside diameter", dim: "length", u: "in", v: 4.5 },
      { k: "Ch", label: "Hose Hazen-Williams C", v: 150 },
      { k: "Nt", label: "Number of travelers", dim: "count", v: 1 },
      { k: "hn", label: "Height of nozzle", dim: "length", u: "ft", v: 9 },
      { k: "eL", label: "Elevation gain along path", dim: "length", u: "ft", v: 8, min: -1e4 },
      { k: "Ll", label: "Length of set (tow lane)", dim: "length", u: "ft", v: 1300 },
      { k: "Wp", label: "Set (tow path) width", dim: "length", u: "ft", v: 264 },
      { k: "Pn", label: "Design nozzle pressure", dim: "pressure", u: "psi", v: 60 },
      { k: "Cd", label: "Discharge coefficient C<sub>d</sub>", v: 16.0 },
      { k: "a", label: "Pressure exponent a", v: 0.5 },
      { k: "Dn", label: "Nozzle size", dim: "length", u: "in", v: 1.83 },
      { k: "b", label: "Nozzle size exponent b", v: 2.566 },
      { k: "Wr", label: "Wetted radius of gun", dim: "length", u: "ft", v: 220 },
      { k: "beta", label: "Central gun angle", dim: "angle", u: "degrees", v: 270 },
      { k: "Pcr", label: "Cart and reel pressure loss (manufacturer)", dim: "pressure", u: "psi", v: 19.4 },
      { k: "Pin", label: "Traveler inlet pressure available", dim: "pressure", u: "psi", v: 126 },
      { k: "lw", label: "Maximum lane width, % of wetted diameter (Table 12.7)", dim: "pct", u: "%", v: 65 },
      { k: "Rd", label: "Root depth", dim: "length", u: "ft", v: 4 },
      { k: "fdc", label: "Critical depletion", dim: "frac", u: "decimal", v: 0.5 },
      { k: "E", label: "Application efficiency of low quarter", dim: "frac", u: "decimal", v: 0.75 },
      { k: "Ts", label: "Set time", dim: "time", u: "hr", v: 12 },
      { k: "To", label: "Application time", dim: "time", u: "hr", v: 11 },
      { k: "Tm", label: "Reposition time", dim: "time", u: "hr", v: 12 }],
    outputs: [
      { k: "Af", label: "Field size", dim: "area", u: "ac", dp: 1 },
      { k: "Ai", label: "Irrigated area", dim: "area", u: "ac", dp: 1 },
      { k: "Csys", label: "System capacity", dim: "capacity", u: "gpm/ac", dp: 2 },
      { k: "qs", label: "Design gun discharge (Eq. 12.14)", dim: "flow", u: "gpm", dp: 0 },
      { k: "fM", label: "Mainline friction factor", dim: "ploss", u: "psi/100 ft", dp: 3 },
      { k: "PM", label: "Mainline pressure loss", dim: "pressure", u: "psi", dp: 1 },
      { k: "vM", label: "Mainline velocity", dim: "velocity", u: "ft/s", dp: 1 },
      { k: "fh", label: "Hose friction factor", dim: "ploss", u: "psi/100 ft", dp: 2 },
      { k: "Ph", label: "Hose friction loss", dim: "pressure", u: "psi", dp: 1 },
      { k: "Phn", label: "Nozzle height as pressure", dim: "pressure", u: "psi", dp: 1 },
      { k: "PeL", label: "Elevation change as pressure", dim: "pressure", u: "psi", dp: 1 },
      { k: "Ptot", label: "Total pressure loss", dim: "pressure", u: "psi", dp: 1 },
      { k: "Preq", label: "Required inlet pressure", dim: "pressure", u: "psi", dp: 0 },
      { k: "Dw", label: "Wetted diameter of gun", dim: "length", u: "ft", dp: 0 },
      { k: "Wmax", label: "Maximum set width", dim: "length", u: "ft", dp: 0 },
      { k: "As", label: "Acres per set", dim: "area", u: "ac", dp: 2 },
      { k: "Ns", label: "Number of sets in field", dim: "count", dp: 0 },
      { k: "Np", label: "Sets per traveler", dim: "count", dp: 0 },
      { k: "AD", label: "Allowable depletion", dim: "length", u: "in", dp: 2 },
      { k: "Tmv", label: "Drain and move time", dim: "time", u: "hr", dp: 1 },
      { k: "Ii", label: "Irrigation interval", dim: "time", u: "d", dp: 1 },
      { k: "down", label: "Down time", dim: "pct", u: "%", dp: 0 },
      { k: "vt", label: "Velocity of travel", dim: "velocity", u: "ft/hr", dp: 0 },
      { k: "Ar", label: "Application rate (Eq. 12.12)", dim: "rate", u: "in/hr", dp: 2 },
      { k: "dg", label: "Gross depth applied (Eq. 12.11)", dim: "length", u: "in", dp: 2 },
      { k: "dn", label: "Net depth applied", dim: "length", u: "in", dp: 2 },
      { k: "Cn", label: "Net crop water use supplied", dim: "rate", u: "in/d", dp: 2 },
      { k: "chk", label: "Checks", text: true }],
    f: v => {
      const Af = v.Lf * v.Wf / 43560, Ai = v.Li * v.Wf / 43560;
      const qs = v.Cd * Math.pow(v.Pn, v.a) * Math.pow(v.Dn, v.b), QM = qs * v.Nt;
      const fM = HW(QM, v.CM, v.dM), PM = fM * v.LM / 100 + v.eM / 2.31, vM = 0.409 * QM / (v.dM * v.dM);
      const fh = HW(qs, v.Ch, v.dh), Ph = fh * v.Lh / 100, Phn = v.hn / 2.31, PeL = v.eL / 2.31;
      const Ptot = Ph + Phn + PeL + v.Pcr, Preq = v.Pn + Ptot;
      const Dw = 2 * v.Wr, Wmax = v.lw / 100 * Dw, As = v.Wp * v.Ll / 43560;
      const Ns = Math.round(Ai / As), Np = Math.ceil(Ns / v.Nt - 1e-9);
      const AD = v.Rd * v.AWC * v.fdc, Tmv = v.Ts - v.To, Ii = (Np * v.Ts + v.Tm) / 24, down = (24 * Ii - Np * v.To) / (24 * Ii) * 100;
      const vt = (v.Ll - v.sb) / v.To, Ar = 11035 / v.beta * qs / (v.Wr * v.Wr), dg = 96.3 * qs / (v.Wp * vt), dn = dg * v.E;
      const c = [];
      c.push(v.Wp <= Wmax ? "lane width OK" : "lane width exceeds Table 12.7 limit");
      c.push(v.Pin >= Preq ? "inlet pressure adequate" : "inlet pressure below requirement by " + (Preq - v.Pin).toFixed(1) + " psi");
      c.push(QM <= v.Qin ? "flow within supply" : "flow exceeds supply");
      c.push(dn <= AD ? "net depth within allowable depletion" : "net depth exceeds allowable depletion");
      c.push(v.Lh + v.sb >= v.Ll ? "hose reaches the lane end" : "hose too short for the lane");
      return { Af, Ai, Csys: v.Qin / Ai, qs, fM, PM, vM, fh, Ph, Phn, PeL, Ptot, Preq, Dw, Wmax, As, Ns, Np, AD, Tmv, Ii, down, vt, Ar, dg, dn, Cn: dn / Ii, chk: c.join("; ") };
    },
    // Figure 12.22 lists 4.7 psi mainline loss; 0.373 psi/100 ft x 1320 ft gives 4.9, so that cell is not checked
    examples: [{ ref: "Figure 12.22", page: 271, in: {},
      out: { Af: 80, Ai: 78.8, Csys: 8.88, qs: 584, fM: 0.373, vM: 3.9, fh: 3.75, Ph: 46.9, Phn: 3.9, PeL: 3.5, Ptot: 73.7, Preq: 134,
             Dw: 440, Wmax: 286, As: 7.88, Ns: 10, Np: 10, AD: 3.6, Tmv: 1, Ii: 5.5, down: 17, vt: 110, Ar: 0.49, dg: 1.9, dn: 1.45, Cn: 0.26 }, tol: 0.025 }],
    figs: ["12.20", "12.21", "12.22"], tables: ["12.7", "12.10"],
  });
})(typeof window !== "undefined" ? window : globalThis);

/* ---- ch13.js ---- */
/* Chapter 13  Center Pivots and Lateral Moves  (Equations 13.1 to 13.7, Tables 13.1 to 13.6, 13.8) */
(function (G) {
  const T = G.TAB = G.TAB || {};
  const C = (s) => { s.ch = 13; s.file = "ch13"; return calc(s); };

  // Table 13.1. Sprinkler discharge per unit length along the lateral (qs/S), gpm/ft (p. 280)
  const cg131 = [4, 5, 6, 7, 8, 9, 10];
  T["13.1"] = {
    title: "Sprinkler discharge requirement per unit length along the lateral (qs/S), gpm/ft",
    cols: ["Distance from pivot (ft)", "4 gpm/ac", "5", "6", "7", "8", "9", "10"],
    rows: [
      [100, 0.06, 0.07, 0.09, 0.10, 0.12, 0.13, 0.14], [200, 0.12, 0.14, 0.17, 0.20, 0.23, 0.26, 0.29],
      [300, 0.17, 0.22, 0.26, 0.30, 0.35, 0.39, 0.43], [400, 0.23, 0.29, 0.35, 0.40, 0.46, 0.52, 0.58],
      [500, 0.29, 0.36, 0.43, 0.50, 0.58, 0.65, 0.72], [600, 0.35, 0.43, 0.52, 0.61, 0.69, 0.78, 0.87],
      [700, 0.40, 0.50, 0.61, 0.71, 0.81, 0.91, 1.01], [800, 0.46, 0.58, 0.69, 0.81, 0.92, 1.04, 1.15],
      [900, 0.52, 0.65, 0.78, 0.91, 1.04, 1.17, 1.30], [1000, 0.58, 0.72, 0.87, 1.01, 1.15, 1.30, 1.44],
      [1100, 0.63, 0.79, 0.95, 1.11, 1.27, 1.43, 1.59], [1200, 0.69, 0.87, 1.04, 1.21, 1.38, 1.56, 1.73],
      [1300, 0.75, 0.94, 1.13, 1.31, 1.50, 1.69, 1.88], [1400, 0.81, 1.01, 1.21, 1.41, 1.62, 1.82, 2.02],
      [1500, 0.87, 1.08, 1.30, 1.51, 1.73, 1.95, 2.16], [1600, 0.92, 1.15, 1.38, 1.62, 1.85, 2.08, 2.31],
      [1700, 0.98, 1.23, 1.47, 1.72, 1.96, 2.21, 2.45], [1800, 1.04, 1.30, 1.56, 1.82, 2.08, 2.34, 2.60],
      [1900, 1.10, 1.37, 1.64, 1.92, 2.19, 2.47, 2.74], [2000, 1.15, 1.44, 1.73, 2.02, 2.31, 2.60, 2.88],
      [2100, 1.21, 1.51, 1.82, 2.12, 2.42, 2.73, 3.03], [2200, 1.27, 1.59, 1.90, 2.22, 2.54, 2.86, 3.17],
      [2300, 1.33, 1.66, 1.99, 2.32, 2.65, 2.99, 3.32], [2400, 1.38, 1.73, 2.08, 2.42, 2.77, 3.12, 3.46],
      [2500, 1.44, 1.80, 2.16, 2.52, 2.88, 3.25, 3.61], [2600, 1.50, 1.88, 2.25, 2.63, 3.00, 3.38, 3.75]],
    notes: "Columns are gross system capacity, gpm/ac. Values equal 2πRC<sub>g</sub>/43560 (Eq. 13.1 divided by S).",
  };

  // Table 13.2. Total irrigated area (ac) vs main lateral radius and end gun radius gain (p. 281)
  const eg132 = [0, 50, 75, 100, 125, 150, 200];
  T["13.2"] = {
    title: "Total irrigated area (ac) for different lengths of the main system and end gun coverage",
    cols: ["Radius irrigated with main lateral (ft)", "Gain 0 ft", "50 ft", "75 ft", "100 ft", "125 ft", "150 ft", "200 ft", "Maximum area"],
    rows: [
      [800, 46, 49, 50, 51, 51, 51, null, 51], [900, 58, 62, 63, 64, 65, 65, null, 65],
      [1000, 72, 77, 78, 79, 80, 80, 80, 80], [1100, 87, 92, 94, 95, 96, 97, 97, 97],
      [1200, 104, 109, 111, 113, 114, 115, 116, 115], [1300, 122, 128, 130, 132, 133, 134, 135, 135],
      [1400, 141, 148, 151, 152, 154, 155, 157, 157], [1500, 162, 170, 172, 175, 176, 178, 180, 180],
      [1600, 185, 193, 196, 198, 200, 202, 204, 205], [1700, 208, 217, 220, 223, 225, 227, 230, 231],
      [1800, 234, 243, 246, 249, 252, 254, 257, 259], [1900, 260, 270, 274, 277, 280, 282, 286, 289],
      [2000, 288, 299, 303, 306, 309, 312, 316, 320], [2100, 318, 329, 333, 337, 340, 343, 348, 353],
      [2200, 349, 361, 365, 369, 373, 376, 381, 387], [2300, 382, 394, 399, 403, 407, 410, 415, 423],
      [2400, 415, 428, 434, 438, 442, 445, 451, 461], [2500, 451, 464, 470, 475, 479, 482, 489, 500],
      [2600, 488, 502, 507, 512, 517, 521, 528, 541]],
    notes: "All four corners irrigated by the end gun. Maximum area occurs when the radius gain is 21% of the main lateral length.",
  };

  // Table 13.3. Pressure loss in center pivot laterals without end guns, psi/1000 ft (p. 282)
  T["13.3"] = {
    title: "Pressure loss in center pivot laterals without end guns, psi/1,000 ft (C = 140, F = 0.54)",
    cols: ["Flow into lateral (gpm)", "6 in OD (5.782 in ID)", "6 5/8 in OD (6.407 in ID)", "8 in OD (7.782 in ID)", "10 in OD (9.782 in ID)"],
    rows: [
      [200, 0.93, 0.57, null, null], [300, 1.98, 1.20, null, null], [400, 3.38, 2.05, null, null],
      [500, 5.10, 3.10, null, null], [600, 7.15, 4.34, null, null], [700, 9.51, 5.77, 3.57, null],
      [800, 12.18, 7.39, 4.43, null], [900, 15.15, 9.20, null, null], [1000, 18.42, 11.18, null, null],
      [1100, 21.98, 13.34, 5.18, null], [1200, null, 15.67, 6.08, 2.00], [1300, null, 18.17, 7.06, 2.32],
      [1400, null, 20.85, 8.09, 2.66], [1500, null, null, 9.20, 3.02], [1600, null, null, 10.36, 3.41],
      [1700, null, null, 11.60, 3.81], [1800, null, null, 12.89, 4.24], [1900, null, null, 14.25, 4.68],
      [2000, null, null, 15.67, 5.15], [2100, null, null, 17.15, 5.63], [2200, null, null, 18.69, 6.14],
      [2300, null, null, 20.30, 6.67], [2400, null, null, null, 7.22], [2600, null, null, null, 8.37],
      [2800, null, null, null, 9.60], [3000, null, null, null, 10.91], [3200, null, null, null, 12.29],
      [3400, null, null, null, 13.75]],
    notes: "Multiply losses by 1.037 for laterals with end guns. Dashes in the book are blank here (the 8 in column is blank at 900 and 1000 gpm as printed).",
  };
  const ID133 = [5.782, 6.407, 7.782, 9.782];

  // Table 13.4. Pressure loss with two pipe diameters, psi/1000 ft (p. 283)
  const fr134 = [1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.0];
  T["13.4"] = {
    title: "Pressure loss in center pivot laterals with two diameters of pipe, psi/1,000 ft",
    cols: ["Lateral", "Flow (gpm)", "1.0", "0.9", "0.8", "0.7", "0.6", "0.5", "0.4", "0.3", "0.2", "0.1", "0.0"],
    rows: [
      ["8 and 6 in", 900, 3.6, 3.6, 3.7, 3.9, 4.2, 4.7, 5.4, 6.2, 7.1, 8.1, 9.2],
      ["8 and 6 in", 1000, 4.3, 4.4, 4.5, 4.7, 5.1, 5.8, 6.6, 7.6, 8.7, 9.9, 11.2],
      ["8 and 6 in", 1100, 5.2, 5.2, 5.3, 5.6, 6.1, 6.9, 7.8, 9.0, 10.4, 11.8, 13.3],
      ["8 and 6 in", 1200, 6.1, 6.1, 6.2, 6.6, 7.2, 8.1, 9.2, 10.6, 12.2, 13.9, 15.7],
      ["8 and 6 in", 1300, 7.1, 7.1, 7.2, 7.6, 8.3, 9.4, 10.7, 12.3, 14.1, 16.1, 18.2],
      ["8 and 6 in", 1400, 8.1, 8.1, 8.3, 8.8, 9.6, 10.7, 12.3, 14.1, 16.2, 18.5, 20.8],
      ["8 and 6 in", 1500, 9.2, 9.2, 9.4, 10.0, 10.9, 12.2, 13.9, 16.0, 18.4, 21.0, 23.7],
      ["8 and 6 in", 1600, 10.4, 10.4, 10.6, 11.2, 12.3, 13.7, 15.7, 18.0, 20.7, 23.7, 26.7],
      ["8 and 6 in", 1700, 11.6, 11.6, 11.9, 12.6, 13.7, 15.4, 17.6, 20.2, 23.2, 26.5, 29.9],
      ["8 and 6 in", 1800, 12.9, 12.9, 13.2, 14.0, 15.2, 17.1, 19.5, 22.4, 25.8, 29.4, 33.2],
      ["10 and 8 in", 1900, 4.7, 4.7, 4.8, 5.2, 5.8, 6.7, 7.8, 9.2, 10.8, 12.5, 14.2],
      ["10 and 8 in", 2000, 5.1, 5.2, 5.3, 5.7, 6.4, 7.3, 8.6, 10.1, 11.8, 13.7, 15.7],
      ["10 and 8 in", 2100, 5.6, 5.7, 5.8, 6.2, 7.0, 8.0, 9.4, 11.1, 12.9, 15.0, 17.1],
      ["10 and 8 in", 2200, 6.1, 6.2, 6.4, 6.8, 7.6, 8.7, 10.2, 12.0, 14.1, 16.4, 18.7],
      ["10 and 8 in", 2300, 6.7, 6.7, 6.9, 7.4, 8.2, 9.5, 11.1, 13.1, 15.3, 17.8, 20.3],
      ["10 and 8 in", 2400, 7.2, 7.3, 7.5, 8.0, 8.9, 10.3, 12.0, 14.2, 16.6, 19.2, 22.0],
      ["10 and 8 in", 2500, 7.8, 7.8, 8.1, 8.6, 9.6, 11.1, 13.0, 15.3, 17.9, 20.7, 23.7],
      ["10 and 8 in", 2600, 8.4, 8.4, 8.7, 9.3, 10.3, 11.9, 13.9, 16.4, 19.2, 22.3, 25.5],
      ["10 and 8 in", 2700, 9.0, 9.0, 9.3, 10.0, 11.1, 12.8, 15.0, 17.6, 20.6, 23.9, 27.3],
      ["10 and 8 in", 2800, 9.6, 9.6, 9.9, 10.6, 11.9, 13.7, 16.0, 18.8, 22.1, 25.6, 29.2],
      ["10 and 8 in", 2900, 10.2, 10.3, 10.6, 11.4, 12.7, 14.6, 17.1, 20.1, 23.5, 27.3, 31.2],
      ["10 and 8 in", 3000, 10.9, 11.0, 11.3, 12.1, 13.5, 15.5, 18.2, 21.4, 25.1, 29.0, 33.2]],
    notes: "Column headings are the fraction of the lateral that is the larger pipe (8 in O.D. in the upper part, 10 in O.D. in the lower part). Values are for laterals without end guns; multiply by 1.037 with an end gun.",
  };

  // Table 13.5. NRCS soil intake families (p. 288)
  T["13.5"] = {
    title: "NRCS soil intake families",
    cols: ["Intake family", "Surface soil texture and subsoil permeability", "Representative soil series"],
    rows: [
      [0.1, "Clays, silty clays, clay loam, silty clay loams (with slowly & very slowly permeable soils)", "Albaton c, Crete sicl, Luton sic, Pawnee cl, Wabash sic, Wymore sicl, Filmore sicl"],
      [0.3, "Silt loam, loam silty clay loam, loams (with slow or moderately slow permeability)", "Butler sil, Burchard cl, Colo sicl, Hastings sicl, Wood River sil, Moody sicl, Belfore sicl, Sharpsburg sicl"],
      [0.5, "Silt loam, loam (with moderately slow or moderate permeability)", "Hall sil, Judson sil, Holder sil, Keith l, Holdrege sil, Richfield l"],
      [1.0, "Fine sandy loam, sandy loam, silt loam, loam, very fine sandy loam (with moderately slow to moderately rapid permeability); Loam, silt loam, very fine sandy loam, clay loam, sandy clay loam (with moderate or moderately rapid permeability)", "Hord fsl, Crofton sil, Keith fsl, Monona sil, Mitchell fsl"],
      [1.5, "Fine sandy loam, loam, very fine sandy loam, sandy loam, silt loam (with moderate or moderately rapid permeability)", "Anselmo vfsl, O'Neill fsl, Bayard vfsl, Rosebud fsl, Cass vfsl, Alda fsl, Brocksburg fsl"],
      [2.0, "Loamy fine sand, loamy very fine sand, loamy sand (with moderately rapid permeability)", "Alice lfs, Hersh lfs, Anselmo lfs, Jayem lfs, Libory lfs, Sarben lfs, Ovina lfs, Otero lvfs"],
      [3.0, "Loamy fine sand, loamy sand, fine sand, fine sandy loam, loamy very fine sand (with rapid permeability)", "Bankard ls, Thurman lfs, Dunday lfs, Valent lfs, Inavale lfs, Valentine lfs"]],
    notes: "Adapted from the Nebraska NRCS irrigation guide.",
  };

  // Table 13.6. Allowable soil surface storage vs slope (p. 289)
  T["13.6"] = {
    title: "Allowable soil surface storage (without artificial storage) for various slopes",
    cols: ["Slope (%)", "Allowable surface storage (in)"],
    rows: [["0-1", 0.5], ["1-3", 0.3], ["3-5", 0.1], ["5", 0.0]],
    notes: "Dillon et al. (1972). Conventional tillage.",
  };
  const storage = s => s <= 1 ? 0.5 : s <= 3 ? 0.3 : s < 5 ? 0.1 : 0.0;

  // Table 13.8. Minimum allowable wetted diameter, ft, 1300-ft pivot lateral (p. 292)
  const tex138 = ["Sand", "Loamy sand", "Sandy loam", "Loam", "Silt loam", "Sandy clay loam", "Clay loam", "Silty clay loam", "Sandy clay", "Silty clay", "Clay"];
  const L = "< 10", H = "> 150";
  const r = (...a) => { const o = []; a.forEach(x => Array.isArray(x) ? o.push(...Array(x[1]).fill(x[0])) : o.push(x)); return o; };
  T["13.8"] = {
    title: "Minimum allowable wetted diameter (ft) for center pivots with a 1300-ft pivot lateral",
    cols: ["Gross system capacity (gpm/ac)", "Depth applied (in)", "Surface storage (in)"].concat(tex138),
    rows: [
      [4.0, 0.8, 0.1, ...r(L, 10, 18, 39, 46, 110, [H, 5])],
      [4.0, 0.8, 0.3, ...r([L, 3], 19, 22, 53, 88, 88, [H, 3])],
      [4.0, 0.8, 0.5, ...r([L, 5], 19, 32, 30, 63, 73, 120)],
      [4.0, 1.0, 0.1, ...r(L, 13, 22, 48, 59, 136, [H, 5])],
      [4.0, 1.0, 0.3, ...r([L, 2], 13, 28, 33, 79, 132, 135, [H, 3])],
      [4.0, 1.0, 0.5, ...r([L, 3], 14, 17, 41, 67, 67, 134, [H, 2])],
      [4.0, 1.2, 0.1, ...r(L, 15, 26, 56, 71, [H, 6])],
      [4.0, 1.2, 0.3, ...r([L, 2], 17, 36, 44, 103, [H, 5])],
      [4.0, 1.2, 0.5, ...r([L, 2], 10, 22, 26, 63, 104, 107, [H, 3])],
      [5.0, 0.8, 0.1, ...r(L, 13, 22, 48, 58, 137, [H, 5])],
      [5.0, 0.8, 0.3, ...r([L, 2], 11, 23, 27, 67, 110, 109, [H, 3])],
      [5.0, 0.8, 0.5, ...r([L, 5], 24, 40, 38, 79, 91, H)],
      [5.0, 1.0, 0.1, ...r(L, 16, 28, 60, 74, [H, 6])],
      [5.0, 1.0, 0.3, ...r([L, 2], 16, 35, 42, 99, [H, 5])],
      [5.0, 1.0, 0.5, ...r([L, 3], 18, 21, 51, 84, 83, [H, 3])],
      [5.0, 1.2, 0.1, ...r(L, 18, 33, 70, 89, [H, 6])],
      [5.0, 1.2, 0.3, ...r(L, 12, 21, 45, 55, 129, [H, 5])],
      [5.0, 1.2, 0.5, ...r([L, 2], 13, 28, 33, 78, 130, 133, [H, 3])],
      [6.0, 0.8, 0.1, ...r(L, 16, 27, 58, 70, [H, 6])],
      [6.0, 0.8, 0.3, ...r(L, "a", 13, 28, 33, 80, 132, 131, [H, 3])],
      [6.0, 0.8, 0.5, ...r([L, 3], 10, 11, 29, 48, 45, 95, 109, H)],
      [6.0, 1.0, 0.1, ...r(L, 19, 33, 72, 89, [H, 6])],
      [6.0, 1.0, 0.3, ...r(L, 11, 19, 42, 50, 119, [H, 5])],
      [6.0, 1.0, 0.5, ...r([L, 3], 21, 25, 61, 101, 100, [H, 3])],
      [6.0, 1.2, 0.1, ...r(L, 22, 39, 84, 107, [H, 6])],
      [6.0, 1.2, 0.3, ...r(L, 14, 25, 54, 67, [H, 6])],
      [6.0, 1.2, 0.5, ...r([L, 2], 15, 33, 39, 94, [H, 5])],
      [8.0, 0.8, 0.1, ...r(L, 21, 35, 77, 93, [H, 6])],
      [8.0, 0.8, 0.3, ...r(L, 10, 17, 37, 44, 107, [H, 5])],
      [8.0, 0.8, 0.5, ...r([L, 3], 14, 15, 39, 64, 60, 126, 146, H)],
      [8.0, 1.0, 0.1, ...r(L, 25, 44, 96, 118, [H, 6])],
      [8.0, 1.0, 0.3, ...r(L, 15, 25, 55, 67, [H, 6])],
      [8.0, 1.0, 0.5, ...r([L, 2], 13, 29, 33, 81, 135, 133, [H, 3])],
      [8.0, 1.2, 0.1, ...r(L, 29, 52, 112, 142, [H, 6])],
      [8.0, 1.2, 0.3, ...r(L, 19, 33, 72, 89, [H, 6])],
      [8.0, 1.2, 0.5, ...r(L, 12, 20, 44, 52, 126, [H, 5])],
      [10.0, 0.8, 0.1, ...r(L, 26, 44, 96, 116, [H, 6])],
      [10.0, 0.8, 0.3, ...r(L, 13, 21, 47, 54, 133, [H, 5])],
      [10.0, 0.8, 0.5, ...r([L, 3], 17, 19, 49, 79, 75, [H, 3])],
      [10.0, 1.0, 0.1, ...r(10, 32, 55, 120, 148, [H, 6])],
      [10.0, 1.0, 0.3, ...r(L, 19, 32, 70, 83, [H, 6])],
      [10.0, 1.0, 0.5, ...r([L, 2], 16, 36, 41, 102, [H, 5])],
      [10.0, 1.2, 0.1, ...r(12, 36, 65, 140, [H, 7])],
      [10.0, 1.2, 0.3, ...r(L, 24, 42, 90, 111, [H, 6])],
      [10.0, 1.2, 0.5, ...r(L, 15, 25, 55, 66, [H, 6])]],
    notes: "Green shading in the book (< 10) denotes a minimum wetted diameter less than 10 ft; gold shading (> 150) denotes more than 150 ft. One cell (6.0 gpm/ac, 0.8 in, 0.3 in, loamy sand) is printed as \"a\" in the book.",
  };

  // Pressure distribution factor f_p (Figure 13.6), from Eq. 13.1 discharge (q proportional to R) and
  // Hazen-Williams (loss proportional to Q^1.852): f_p(x) = ∫0^x (1-t²)^1.852 dt / ∫0^1 (1-t²)^1.852 dt.
  // The denominator is 0.548, the multiple outlet factor the text gives as about 0.54.
  function fpFactor(x) {
    x = Math.max(0, Math.min(1, x));
    const g = t => Math.pow(1 - t * t, 1.852);
    const simp = (a, b) => { const n = 400, h = (b - a) / n; let s = g(a) + g(b); for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * g(a + i * h); return s * h / 3; };
    return simp(0, x) / simp(0, 1);
  }

  C({
    id: "eq-13.1", eq: ["13.1"], sec: "13.2", page: 279, title: "Sprinkler discharge along a center pivot",
    tags: ["pivot sprinkler discharge", "nozzle flow pivot", "sprinkler package", "qs/S", "how much should this sprinkler put out"],
    inputs: [
      { k: "R", sym: "R", label: "Distance of sprinkler from the pivot base", dim: "length", u: "ft", v: 1000 },
      { k: "S", sym: "S", label: "Local spacing between sprinklers", dim: "length", u: "ft", v: 10 },
      { k: "Cg", sym: "C<sub>g</sub>", label: "Gross system capacity (Q/A)", dim: "capacity", u: "gpm/ac", v: 6 }],
    outputs: [
      { k: "qS", sym: "q<sub>s</sub>/S", label: "Discharge per unit length (Table 13.1)", dim: "none", dp: 3 },
      { k: "qs", sym: "q<sub>s</sub>", label: "Required sprinkler discharge", dim: "flow", u: "gpm", dp: 2 }],
    f: v => { const qS = 2 * Math.PI * v.R * v.Cg / 43560; return { qS, qs: qS * v.S }; },
    examples: [{ ref: "Table 13.1 (1000 ft, 6 gpm/ac)", page: 280, in: { R: 1000, S: 10, Cg: 6 }, out: { qS: 0.87, qs: 8.65 } }],
    tables: ["13.1"], figs: ["13.4"],
  });

  C({
    id: "eq-13.2", eq: ["13.2"], sec: "13.2", page: 280, title: "Center pivot irrigated area with end gun",
    tags: ["pivot acres", "end gun area", "corner area", "how many acres does my pivot cover"],
    inputs: [
      { k: "Rl", sym: "R<sub>l</sub>", label: "Radius irrigated with the main lateral", dim: "length", u: "ft", v: 1300 },
      { k: "Reg", sym: "R<sub>eg</sub>", label: "Radius gain from the end gun", dim: "length", u: "ft", v: 100 }],
    outputs: [
      { k: "At", sym: "A<sub>t</sub>", label: "Total irrigated area (end gun in all four corners)", dim: "area", u: "ac", dp: 1 },
      { k: "A0", label: "Area without the end gun", dim: "area", u: "ac", dp: 1 },
      { k: "Aeg", label: "Area added by the end gun", dim: "area", u: "ac", dp: 1 },
      { k: "beta", sym: "β", label: "End gun operating angle in each corner", dim: "angle", u: "degrees", dp: 0 },
      { k: "Ropt", label: "Radius gain for maximum area (21% of R<sub>l</sub>)", dim: "length", u: "ft", dp: 0 }],
    f: v => {
      const ac = Math.acos(v.Rl / (v.Rl + v.Reg));
      const A0 = Math.PI * v.Rl * v.Rl / 43560, At = (Math.PI * v.Rl * v.Rl + (Math.PI - 4 * ac) * (2 * v.Rl * v.Reg + v.Reg * v.Reg)) / 43560;
      return { At, A0, Aeg: At - A0, beta: (Math.PI / 2 - 2 * ac) * 180 / Math.PI, Ropt: 0.21 * v.Rl };
    },
    examples: [{ ref: "Table 13.2", page: 281, in: { Rl: 1300, Reg: 100 }, out: { At: 132, A0: 122 } },
               { ref: "Table 13.2", page: 281, in: { Rl: 2000, Reg: 150 }, out: { At: 312 } }],
    tables: ["13.2"], figs: ["13.5"],
  });

  C({
    id: "fp-13.6", eq: [], sec: "13.2", page: 282, title: "Pressure distribution factor along a pivot (Figure 13.6)",
    tags: ["pressure distribution factor", "fp", "pressure loss distribution", "pivot friction curve"],
    note: "Computed from the same assumptions behind the figure: sprinkler discharge grows linearly with distance (Eq. 13.1), so flow at fraction x is Q(1 − x²), and friction follows Hazen-Williams (Q<sup>1.852</sup>). Integrated over the whole lateral this gives 0.548, the pivot multiple outlet factor of about 0.54 in the text, and about 78% of the loss occurs in the first half (the text says 80%).",
    inputs: [{ k: "x", sym: "R/R<sub>l</sub>", label: "Fraction of distance along the lateral", dim: "frac", u: "decimal", v: 0.5 }],
    outputs: [{ k: "fp", sym: "f<sub>p</sub>", label: "Pressure distribution factor", dp: 3 }],
    f: v => ({ fp: fpFactor(v.x) }),
    examples: [{ ref: "Figure 13.6 (read from graph)", page: 282, in: { x: 0.5 }, out: { fp: 0.79 }, tol: 0.03 },
               { ref: "Figure 13.6 (read from graph)", page: 282, in: { x: 0.2 }, out: { fp: 0.37 }, tol: 0.05 },
               { ref: "Figure 13.6", page: 282, in: { x: 1 }, out: { fp: 1 } }],
    figs: ["13.6"],
  });

  C({
    id: "eq-13.3", eq: ["13.3"], sec: "13.2", page: 282, title: "Pressure at a point along a pivot lateral",
    tags: ["pivot pressure", "pressure at end of pivot", "elevation", "pressure gauge pivot", "why is my end pressure low"],
    inputs: [
      { k: "P0", sym: "P<sub>0</sub>", label: "Pressure at the lateral inlet", dim: "pressure", u: "psi", v: 40 },
      { k: "Plp", sym: "P<sub>lp</sub>", label: "Lateral friction loss (Table 13.3 or 13.4)", dim: "ploss1000", u: "psi/1000 ft", v: 7.39, help: "Multiply table values by 1.037 if there is an end gun" },
      { k: "Rl", sym: "R<sub>l</sub>", label: "Distance from pivot to last sprinkler", dim: "length", u: "ft", v: 1300 },
      { k: "R", sym: "R", label: "Distance to the point of interest", dim: "length", u: "ft", v: 1300 },
      { k: "Eg", sym: "E<sub>g</sub>", label: "Elevation gain from pivot base to the point (negative if downhill)", dim: "length", u: "ft", v: 0, min: -1e4 }],
    outputs: [
      { k: "fp", sym: "f<sub>p</sub>", label: "Pressure distribution factor (Figure 13.6)", dp: 3 },
      { k: "Pf", label: "Friction loss to the point", dim: "pressure", u: "psi", dp: 2 },
      { k: "PR", sym: "P<sub>R</sub>", label: "Pressure at point R", dim: "pressure", u: "psi", dp: 1 }],
    f: v => { const fp = fpFactor(v.R / v.Rl), Pf = v.Plp * v.Rl * fp / 1000; return { fp, Pf, PR: v.P0 - Pf - 0.433 * v.Eg }; },
    examples: [{ ref: "Eq. 13.3 at the lateral end (f<sub>p</sub> = 1)", page: 282, in: { P0: 40, Plp: 7.39, Rl: 1300, R: 1300, Eg: 10 }, out: { PR: 40 - 9.607 - 4.33 } }],
    tables: ["13.3", "13.4"], figs: ["13.6"],
  });

  C({
    id: "eq-13.4-13.5", eq: ["13.4", "13.5"], sec: "13.3", page: 284, title: "Pivot peak application rate and time of wetting",
    tags: ["peak application rate", "time of wetting", "runoff pivot", "wetted diameter", "is my pivot running off"],
    inputs: [
      { k: "Cg", sym: "C<sub>g</sub>", label: "Gross system capacity", dim: "capacity", u: "gpm/ac", v: 6.15 },
      { k: "R", sym: "R", label: "Distance from the pivot point", dim: "length", u: "ft", v: 1300 },
      { k: "Dc", sym: "D<sub>c</sub>", label: "Sprinkler diameter of coverage at R", dim: "length", u: "ft", v: 40 },
      { k: "dg", sym: "d<sub>g</sub>", label: "Gross application depth", dim: "length", u: "in", v: 0.9 }],
    outputs: [
      { k: "Ap", sym: "A<sub>p</sub>", label: "Peak application rate", dim: "rate", u: "in/hr", dp: 2 },
      { k: "Tw", sym: "T<sub>w</sub>", label: "Time of wetting", dim: "time", u: "hr", dp: 3 }],
    f: v => ({ Ap: 0.0177 * v.Cg * v.R / v.Dc, Tw: 72 * v.Dc * v.dg / (v.R * v.Cg) }),
    examples: [{ ref: "Example 13.1", page: 291, in: { Cg: 800 / 130, R: 1300, Dc: 40 }, out: { Ap: 3.54 } }],
    figs: ["13.7", "13.10", "13.12"],
  });

  C({
    id: "eq-13.6", eq: ["13.6"], sec: "13.3", page: 285, title: "Linear move peak application rate",
    tags: ["linear move", "lateral move", "peak intensity", "application rate linear"],
    inputs: [
      { k: "Q", sym: "Q", label: "System flow rate", dim: "flow", u: "gpm", v: 800 },
      { k: "Dc", sym: "D<sub>c</sub>", label: "Diameter of coverage of the sprinklers", dim: "length", u: "ft", v: 40 },
      { k: "L", sym: "L", label: "Lateral length", dim: "length", u: "ft", v: 1300 }],
    outputs: [{ k: "Ap", sym: "A<sub>p</sub>", label: "Peak application rate", dim: "rate", u: "in/hr", dp: 2 }],
    f: v => ({ Ap: 122.5 * v.Q / (v.Dc * v.L) }),
    examples: [{ ref: "Example 13.2", page: 291, in: { Q: 800, Dc: 40, L: 1300 }, out: { Ap: 1.88 } }],
  });

  C({
    id: "eq-13.7", eq: ["13.7"], sec: "13.5", page: 288, title: "Pivot percent timer setting for a depth",
    tags: ["percent timer", "percent setting", "control setting", "pivot speed", "how do I set my pivot to put on an inch", "hours per revolution"],
    inputs: [
      { k: "Rl", sym: "R<sub>l</sub>", label: "Distance from pivot base to end tower", dim: "length", u: "ft", v: 1280 },
      { k: "Cg", sym: "C<sub>g</sub>", label: "Gross system capacity", dim: "capacity", u: "gpm/ac", v: 7 },
      { k: "vm", sym: "v<sub>m</sub>", label: "Maximum continuous end tower speed", dim: "velocity", u: "ft/min", v: 8 },
      { k: "dg", sym: "d<sub>g</sub>", label: "Gross depth to apply", dim: "length", u: "in", v: 1.3 }],
    outputs: [
      { k: "Cs", sym: "C<sub>s</sub>", label: "Timer (control) setting", dim: "pct", u: "%", dp: 0 },
      { k: "Trev", label: "Time per revolution at this setting", dim: "time", u: "hr", dp: 1 },
      { k: "dmin", label: "Smallest depth possible (100% setting)", dim: "length", u: "in", dp: 2 }],
    f: v => {
      const Cs = 0.0231 * v.Rl * v.Cg / (v.vm * v.dg);
      return { Cs, Trev: 2 * Math.PI * v.Rl / (v.vm * Cs / 100) / 60, dmin: 0.0231 * v.Rl * v.Cg / (v.vm * 100) };
    },
    examples: [{ ref: "Section 13.5 text", page: 288, in: { Rl: 1280, Cg: 7, vm: 8, dg: 1.3 }, out: { Cs: 20 }, tol: 0.03 }],
  });

  C({
    id: "eq-13.7-inv", eq: ["13.7"], sec: "13.5", page: 288, title: "Depth applied from pivot timer setting",
    tags: ["percent timer to inches", "what depth does my setting put on", "pivot revolution time", "depth per revolution"],
    inputs: [
      { k: "Rl", sym: "R<sub>l</sub>", label: "Distance from pivot base to end tower", dim: "length", u: "ft", v: 1280 },
      { k: "Cg", sym: "C<sub>g</sub>", label: "Gross system capacity", dim: "capacity", u: "gpm/ac", v: 7 },
      { k: "vm", sym: "v<sub>m</sub>", label: "Maximum continuous end tower speed", dim: "velocity", u: "ft/min", v: 8 },
      { k: "Cs", sym: "C<sub>s</sub>", label: "Timer (control) setting", dim: "pct", u: "%", v: 20 }],
    outputs: [
      { k: "dg", sym: "d<sub>g</sub>", label: "Gross depth applied", dim: "length", u: "in", dp: 2 },
      { k: "Trev", label: "Time per revolution", dim: "time", u: "hr", dp: 1 },
      { k: "vt", label: "Average end tower speed", dim: "velocity", u: "ft/min", dp: 2 }],
    f: v => ({ dg: 0.0231 * v.Rl * v.Cg / (v.vm * v.Cs), Trev: 2 * Math.PI * v.Rl / (v.vm * v.Cs / 100) / 60, vt: v.vm * v.Cs / 100 }),
    examples: [{ ref: "Section 13.5 text", page: 288, in: { Rl: 1280, Cg: 7, vm: 8, Cs: 20 }, out: { dg: 1.3 }, tol: 0.03 }],
  });

  C({
    id: "runoff-13", eq: ["13.4", "13.5", "13.6"], sec: "13.5", page: 291, title: "Pivot or linear move runoff screening",
    tags: ["runoff", "intake family", "surface storage", "slope", "maximum depth without runoff", "will my pivot run off"],
    note: "Follows Examples 13.1 and 13.2: peak application rate (Eq. 13.4 or 13.6), surface storage from slope (Table 13.6) and intake family (Table 13.5). The maximum depth without runoff must then be read from Figure 13.13 (graphical only) for the family, storage and peak rate shown here. The text gives 0.70 to 1.25 in per application as the common range.",
    inputs: [
      { k: "type", label: "System type", type: "sel", opts: [["Center pivot", 0], ["Linear move", 1]], v: 0 },
      { k: "Q", sym: "Q", label: "System flow rate", dim: "flow", u: "gpm", v: 800 },
      { k: "A", sym: "A", label: "Irrigated area (pivot)", dim: "area", u: "ac", v: 130 },
      { k: "L", label: "Pivot length (distance R to the end) or linear lateral length", dim: "length", u: "ft", v: 1300 },
      { k: "Dc", sym: "D<sub>c</sub>", label: "Sprinkler wetted diameter", dim: "length", u: "ft", v: 40 },
      { k: "slope", label: "Field slope", dim: "pct", u: "%", v: 2 },
      { k: "fam", label: "Soil intake family (Table 13.5)", type: "sel", opts: T["13.5"].rows.map(r => [r[0] + " family: " + r[2].split(",").slice(0, 2).join(","), r[0]]), v: 0.5 },
      { k: "dg", label: "Planned gross depth per irrigation", dim: "length", u: "in", v: 0.9 }],
    outputs: [
      { k: "Cg", sym: "C<sub>g</sub>", label: "Gross system capacity", dim: "capacity", u: "gpm/ac", dp: 2 },
      { k: "Ap", sym: "A<sub>p</sub>", label: "Peak application rate", dim: "rate", u: "in/hr", dp: 2 },
      { k: "Tw", sym: "T<sub>w</sub>", label: "Time of wetting at the end (pivot)", dim: "time", u: "min", dp: 0 },
      { k: "S", label: "Allowable surface storage (Table 13.6)", dim: "length", u: "in", dp: 1 },
      { k: "msg", label: "Next step", text: true }],
    f: v => {
      const Cg = v.Q / v.A, Ap = v.type === 1 ? 122.5 * v.Q / (v.Dc * v.L) : 0.0177 * Cg * v.L / v.Dc;
      const Tw = v.type === 1 ? NaN : 72 * v.Dc * v.dg / (v.L * Cg);
      const S = storage(v.slope);
      const fig = [0.1, 0.3, 0.5, 1.0].includes(v.fam) ? "Read Figure 13.13, " + v.fam + " family panel, " + S + " in storage curve, at " + Ap.toFixed(2) + " in/hr" : "Figure 13.13 covers families 0.1 to 1.0 only; higher families seldom limit depth";
      const rng = v.dg < 0.7 ? "planned depth is below the common 0.70 to 1.25 in range" : v.dg > 1.25 ? "planned depth is above the common 0.70 to 1.25 in range" : "planned depth is in the common 0.70 to 1.25 in range";
      return { Cg, Ap, Tw: Tw * 60, S, msg: fig + "; " + rng + "." };
    },
    examples: [{ ref: "Example 13.1", page: 291, in: {}, out: { Cg: 6.15, Ap: 3.54, S: 0.3 } },
               { ref: "Example 13.2", page: 291, in: { type: 1 }, out: { Ap: 1.88 } }],
    tables: ["13.5", "13.6"], figs: ["13.13"],
  });

  C({
    id: "tab-13.1", eq: [], sec: "13.2", page: 280, title: "Pivot sprinkler discharge per foot (Table 13.1)",
    tags: ["qs/S table", "sprinkler discharge table", "pivot package"],
    tables: ["13.1"],
    inputs: [
      { k: "R", label: "Distance from pivot", dim: "length", u: "ft", v: 1000 },
      { k: "Cg", label: "Gross system capacity", dim: "capacity", u: "gpm/ac", v: 6 }],
    outputs: [{ k: "qS", label: "q<sub>s</sub>/S, gpm per ft of lateral (interpolated)", dp: 3 }],
    f: v => {
      if (v.R < 100 || v.R > 2600 || v.Cg < 4 || v.Cg > 10) return { qS: NaN };
      const col = c => M.interp(T["13.1"].rows.map(r => [r[0], r[1 + c]]), v.R);
      return { qS: M.interp(cg131.map((c, i) => [c, col(i)]), v.Cg) };
    },
    examples: [{ ref: "Table 13.1", page: 280, in: { R: 1300, Cg: 8 }, out: { qS: 1.50 } }],
  });

  C({
    id: "tab-13.2", eq: [], sec: "13.2", page: 281, title: "Pivot irrigated area table (Table 13.2)",
    tags: ["pivot acres table", "end gun acres"],
    tables: ["13.2"],
    inputs: [
      { k: "Rl", label: "Radius irrigated with main lateral", dim: "length", u: "ft", v: 1300 },
      { k: "Reg", label: "End gun radius gain", dim: "length", u: "ft", v: 100 }],
    outputs: [
      { k: "A", label: "Total irrigated area (interpolated)", dim: "area", u: "ac", dp: 0 },
      { k: "Amax", label: "Maximum area (gain = 21% of lateral)", dim: "area", u: "ac", dp: 0 }],
    f: v => {
      const rows = T["13.2"].rows;
      if (v.Rl < 800 || v.Rl > 2600 || v.Reg < 0 || v.Reg > 200) return { A: NaN, Amax: NaN };
      const atRow = rr => { const pts = eg132.map((g, i) => [g, rr[1 + i]]).filter(p => p[1] !== null); return v.Reg > pts[pts.length - 1][0] ? NaN : M.interp(pts, v.Reg); };
      return { A: M.interp(rows.map(rr => [rr[0], atRow(rr)]), v.Rl), Amax: M.interp(rows.map(rr => [rr[0], rr[8]]), v.Rl) };
    },
    examples: [{ ref: "Table 13.2", page: 281, in: { Rl: 1300, Reg: 100 }, out: { A: 132, Amax: 135 } }],
  });

  C({
    id: "tab-13.3", eq: [], sec: "13.2", page: 282, title: "Pivot lateral friction loss, single pipe size (Table 13.3)",
    tags: ["pivot friction loss", "pivot pipe size", "psi per 1000 ft", "6 5/8 pivot", "8 inch pivot"],
    tables: ["13.3"],
    inputs: [
      { k: "d", label: "Pipe size", type: "sel", opts: [["6 in OD (5.782 in ID)", 1], ["6 5/8 in OD (6.407 in ID)", 2], ["8 in OD (7.782 in ID)", 3], ["10 in OD (9.782 in ID)", 4]], v: 2 },
      { k: "Q", label: "Flow into the pivot lateral", dim: "flow", u: "gpm", v: 800 },
      { k: "eg", label: "End gun", type: "sel", opts: [["No end gun", 1], ["With end gun (x 1.037)", 1.037]], v: 1 },
      { k: "Rl", label: "Lateral length (for total loss)", dim: "length", u: "ft", v: 1300 }],
    outputs: [
      { k: "tab", label: "Table value (interpolated)", dim: "ploss1000", u: "psi/1000 ft", dp: 2 },
      { k: "hw", label: "Hazen-Williams check (C 140, F 0.54)", dim: "ploss1000", u: "psi/1000 ft", dp: 2 },
      { k: "Plp", sym: "P<sub>lp</sub>", label: "Loss used (with end gun factor)", dim: "ploss1000", u: "psi/1000 ft", dp: 2 },
      { k: "P", label: "Total lateral friction loss", dim: "pressure", u: "psi", dp: 1 }],
    f: v => {
      const pts = T["13.3"].rows.filter(r => r[v.d] !== null).map(r => [r[0], r[v.d]]);
      const tab = v.Q < pts[0][0] || v.Q > pts[pts.length - 1][0] ? NaN : M.interp(pts, v.Q);
      const hw = 4560 * Math.pow(v.Q / 140, 1.852) / Math.pow(ID133[v.d - 1], 4.866) * 0.54;
      const base = isFinite(tab) ? tab : hw, Plp = base * v.eg;
      return { tab, hw, Plp, P: Plp * v.Rl / 1000 };
    },
    examples: [{ ref: "Table 13.3", page: 282, in: { d: 2, Q: 800 }, out: { tab: 7.39, hw: 7.39 } },
               { ref: "Table 13.3", page: 282, in: { d: 4, Q: 2000 }, out: { tab: 5.15, hw: 5.15 } }],
  });

  C({
    id: "tab-13.4", eq: [], sec: "13.2", page: 283, title: "Pivot friction loss with two pipe sizes (Table 13.4)",
    tags: ["telescoping pivot", "two pipe sizes", "pivot friction"],
    tables: ["13.4"],
    inputs: [
      { k: "set", label: "Pipe combination", type: "sel", opts: [["8 in and 6 in (900 to 1800 gpm)", 0], ["10 in and 8 in (1900 to 3000 gpm)", 1]], v: 0 },
      { k: "Q", label: "Flow rate", dim: "flow", u: "gpm", v: 1200 },
      { k: "fr", label: "Fraction of lateral that is the larger pipe", dim: "frac", u: "decimal", v: 0.5 },
      { k: "eg", label: "End gun", type: "sel", opts: [["No end gun", 1], ["With end gun (x 1.037)", 1.037]], v: 1 }],
    outputs: [{ k: "Plp", sym: "P<sub>lp</sub>", label: "Pressure loss", dim: "ploss1000", u: "psi/1000 ft", dp: 1 }],
    f: v => {
      const rows = T["13.4"].rows.filter(r => r[0] === (v.set ? "10 and 8 in" : "8 and 6 in"));
      if (v.Q < rows[0][1] || v.Q > rows[rows.length - 1][1] || v.fr < 0 || v.fr > 1) return { Plp: NaN };
      const atRow = rr => M.interp(fr134.map((f, i) => [f, rr[2 + i]]).reverse(), v.fr);
      return { Plp: M.interp(rows.map(rr => [rr[1], atRow(rr)]), v.Q) * v.eg };
    },
    examples: [{ ref: "Table 13.4", page: 283, in: { set: 0, Q: 1200, fr: 0.5 }, out: { Plp: 8.1 } },
               { ref: "Table 13.4", page: 283, in: { set: 1, Q: 2500, fr: 0.3 }, out: { Plp: 15.3 } }],
  });

  C({
    id: "tab-13.5-13.6", eq: [], sec: "13.5", page: 288, title: "Intake family and surface storage (Tables 13.5 and 13.6)",
    tags: ["intake family", "NRCS intake", "soil series", "surface storage", "slope storage"],
    tables: ["13.5", "13.6"],
    inputs: [
      { k: "fam", label: "Intake family", type: "sel", opts: T["13.5"].rows.map((r, i) => [String(r[0]), i]), v: 2 },
      { k: "slope", label: "Field slope", dim: "pct", u: "%", v: 2 }],
    outputs: [
      { k: "tex", label: "Soil textures", text: true },
      { k: "ser", label: "Representative series", text: true },
      { k: "S", label: "Allowable surface storage", dim: "length", u: "in", dp: 1 }],
    f: v => { const r = T["13.5"].rows[v.fam]; return { tex: r[1], ser: r[2], S: storage(v.slope) }; },
    examples: [{ ref: "Example 13.1", page: 291, in: { slope: 2 }, out: { S: 0.3 } }],
  });

  C({
    id: "tab-13.8", eq: [], sec: "13.5", page: 292, title: "Minimum sprinkler wetted diameter to avoid runoff (Table 13.8)",
    tags: ["minimum wetted diameter", "sprinkler package runoff", "boom backs", "do I need bigger sprinklers"],
    tables: ["13.8"], figs: ["13.14"],
    note: "Applies to center pivots with a 1300-ft pivot lateral. Pick the nearest printed capacity, depth and storage.",
    inputs: [
      { k: "Cg", label: "Gross system capacity", type: "sel", opts: [["4.0 gpm/ac", 4], ["5.0 gpm/ac", 5], ["6.0 gpm/ac", 6], ["8.0 gpm/ac", 8], ["10.0 gpm/ac", 10]], v: 6 },
      { k: "d", label: "Depth applied", type: "sel", opts: [["0.8 in", 0.8], ["1.0 in", 1.0], ["1.2 in", 1.2]], v: 1.0 },
      { k: "S", label: "Surface storage", type: "sel", opts: [["0.1 in", 0.1], ["0.3 in", 0.3], ["0.5 in", 0.5]], v: 0.3 },
      { k: "tex", label: "Soil texture", type: "sel", opts: tex138.map((t, i) => [t, i]), v: 3 },
      { k: "Dc", label: "Your sprinkler wetted diameter (optional check)", dim: "length", u: "ft", v: 40 }],
    outputs: [
      { k: "min", label: "Minimum allowable wetted diameter (ft)", text: true },
      { k: "ok", label: "Check", text: true }],
    f: v => {
      const row = T["13.8"].rows.find(r => r[0] === v.Cg && r[1] === v.d && r[2] === v.S);
      const val = row[3 + v.tex];
      let ok;
      if (val === L) ok = "Any common sprinkler is wide enough";
      else if (val === H) ok = "Needs more than 150 ft: reduce depth, add storage or residue (Table 13.7)";
      else if (typeof val === "number") ok = v.Dc >= val ? "Your wetted diameter is large enough" : "Your wetted diameter is too small; runoff is likely";
      else ok = "Value not printed clearly in the book";
      return { min: String(val), ok };
    },
    examples: [{ ref: "Table 13.8", page: 292, in: { Cg: 6, d: 1.0, S: 0.3, tex: 3, Dc: 40 }, out: { min: "42", ok: "Your wetted diameter is too small; runoff is likely" } },
               { ref: "Table 13.8", page: 292, in: { Cg: 10, d: 1.2, S: 0.1, tex: 4 }, out: { min: "> 150" } }],
  });

  C({
    id: "pivot-eval-13", eq: ["13.1", "13.2", "13.3", "13.4", "13.5", "13.7"], sec: "13.5", page: 288, title: "Center pivot check (capacity, pressure, runoff, timer)",
    tags: ["center pivot evaluation", "pivot management", "pivot design check", "pivot summary"],
    note: "Combines Eq. 13.2 (area), Eq. 13.1 (end sprinkler discharge), Table 13.3 Hazen-Williams loss (C 140, F 0.54, x 1.037 with end gun) with Eq. 13.3 at the end, Eq. 13.4 and 13.5 at the end of the lateral, and Eq. 13.7 for the timer setting.",
    inputs: [
      { k: "Q", label: "System flow rate", dim: "flow", u: "gpm", v: 800 },
      { k: "Rl", label: "Main lateral radius (to last sprinkler)", dim: "length", u: "ft", v: 1300 },
      { k: "Reg", label: "End gun radius gain (0 if none)", dim: "length", u: "ft", v: 0 },
      { k: "Di", label: "Lateral inside diameter", dim: "length", u: "in", v: 6.407 },
      { k: "P0", label: "Pressure at the pivot inlet", dim: "pressure", u: "psi", v: 35 },
      { k: "Eg", label: "Elevation gain to the end (worst case)", dim: "length", u: "ft", v: 10, min: -1e4 },
      { k: "S", label: "Sprinkler spacing at the end", dim: "length", u: "ft", v: 10 },
      { k: "Dc", label: "Sprinkler wetted diameter at the end", dim: "length", u: "ft", v: 40 },
      { k: "vm", label: "End tower maximum speed", dim: "velocity", u: "ft/min", v: 8 },
      { k: "Rt", label: "Distance to end tower", dim: "length", u: "ft", v: 1280 },
      { k: "dg", label: "Gross depth to apply", dim: "length", u: "in", v: 1.0 }],
    outputs: [
      { k: "A", label: "Irrigated area", dim: "area", u: "ac", dp: 1 },
      { k: "Cg", label: "Gross system capacity", dim: "capacity", u: "gpm/ac", dp: 2 },
      { k: "qs", label: "Required discharge of the last sprinkler", dim: "flow", u: "gpm", dp: 2 },
      { k: "Plp", label: "Lateral friction loss", dim: "ploss1000", u: "psi/1000 ft", dp: 2 },
      { k: "PR", label: "Pressure at the end of the lateral", dim: "pressure", u: "psi", dp: 1 },
      { k: "Ap", label: "Peak application rate at the end", dim: "rate", u: "in/hr", dp: 2 },
      { k: "Tw", label: "Time of wetting at the end", dim: "time", u: "min", dp: 0 },
      { k: "Cs", label: "Timer setting", dim: "pct", u: "%", dp: 0 },
      { k: "Trev", label: "Hours per revolution", dim: "time", u: "hr", dp: 1 }],
    f: v => {
      const ac = Math.acos(v.Rl / (v.Rl + v.Reg));
      const A = (Math.PI * v.Rl * v.Rl + (Math.PI - 4 * ac) * (2 * v.Rl * v.Reg + v.Reg * v.Reg)) / 43560, Cg = v.Q / A;
      const Plp = 4560 * Math.pow(v.Q / 140, 1.852) / Math.pow(v.Di, 4.866) * 0.54 * (v.Reg > 0 ? 1.037 : 1);
      const PR = v.P0 - Plp * v.Rl / 1000 - 0.433 * v.Eg;
      const Cs = 0.0231 * v.Rt * Cg / (v.vm * v.dg);
      return { A, Cg, qs: 2 * Math.PI * v.Rl * v.S * Cg / 43560, Plp, PR, Ap: 0.0177 * Cg * v.Rl / v.Dc, Tw: 72 * v.Dc * v.dg / (v.Rl * Cg) * 60,
        Cs, Trev: 2 * Math.PI * v.Rt / (v.vm * Cs / 100) / 60 };
    },
    examples: [{ ref: "Example 13.1 values (A from Eq. 13.2 is 122 ac, not the 130 ac stated)", page: 291, in: {}, out: { A: 121.9, Plp: 7.39 } }],
    tables: ["13.2", "13.3"], figs: ["13.6", "13.13"],
  });
})(typeof window !== "undefined" ? window : globalThis);

/* ---- ch14.js ---- */
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

/* ---- ch15.js ---- */
/* Chapter 15  Chemigation  (Equations 15.1 to 15.5) */
(function (G) {
  const GAL = 0.003785411784, AC = 4046.8564224;
  // product label rates, including pints per acre (Example 15.4); base m³/m²
  G.UNITS.addDim("labelrate", "Product rate per area", [
    ["gal/ac", GAL / AC], ["qt/ac", GAL / 4 / AC], ["pt/ac", GAL / 8 / AC], ["fl oz/ac", GAL / 128 / AC],
    ["L/ha", 0.001 / 1e4], ["mL/ha", 1e-6 / 1e4]]);
  // injection pump rates, including mL/min used for calibration (Example 15.1); base m³/s
  G.UNITS.addDim("injflow", "Injection rate", [
    ["gph", GAL / 3600], ["mL/min", 1e-6 / 60], ["pt/hr", GAL / 8 / 3600], ["qt/hr", GAL / 4 / 3600], ["fl oz/min", GAL / 128 / 60],
    ["L/hr", 0.001 / 3600], ["gpm", GAL / 60], ["mL/s", 1e-6]]);
  // nutrient content of a liquid product (e.g. 28% UAN = 3 lb N/gal); base kg/m³
  G.UNITS.addDim("productconc", "Nutrient per volume of product", [
    ["lb/gal", 0.45359237 / GAL], ["kg/L", 1000], ["g/L", 1], ["kg/m³", 1]]);

  const C = (s) => { s.ch = 15; s.file = "ch15"; return calc(s); };

  C({
    id: "eq-15.1", eq: ["15.1"], sec: "15.4", page: 332, title: "Injection rate for set systems (drip, set sprinklers, surface)",
    tags: ["injection rate", "fertigation rate", "chemigation set system", "drip fertigation", "how fast do I inject"],
    inputs: [
      { k: "Gp", sym: "G<sub>p</sub>", label: "Amount of chemical solution to apply per area", dim: "labelrate", u: "gal/ac", v: 5 },
      { k: "As", sym: "A<sub>s</sub>", label: "Area of the irrigation set or zone (or all zones injected)", dim: "area", u: "ac", v: 78 },
      { k: "ti", sym: "t<sub>i</sub>", label: "Total injection time (equal to or less than set time)", dim: "time", u: "hr", v: 24 }],
    outputs: [{ k: "qi", sym: "q<sub>i</sub>", label: "Injection rate of solution", dim: "injflow", u: "gph", dp: 2 }],
    f: v => ({ qi: v.Gp * v.As / v.ti }),
    examples: [{ ref: "Example 15.3", page: 335, in: { Gp: 5, As: 78, ti: 24 }, out: { qi: 16.2 }, tol: 0.01 }],
  });

  C({
    id: "eq-15.2", eq: ["15.2"], sec: "15.4", page: 332, title: "Injection rate for moving systems (center pivot, linear)",
    tags: ["center pivot chemigation", "pivot injection rate", "insecticide through pivot", "linear move chemigation"],
    note: "As in Example 15.4, R<sub>i</sub> can be taken as field area divided by the time for one pass or revolution.",
    inputs: [
      { k: "Gp", sym: "G<sub>p</sub>", label: "Amount of chemical solution to apply per area", dim: "labelrate", u: "pt/ac", v: 1.5 },
      { k: "A", sym: "A", label: "Field area covered in one pass or revolution", dim: "area", u: "ac", v: 126 },
      { k: "tr", sym: "t<sub>r</sub>", label: "Time for one pass or revolution", dim: "time", u: "hr", v: 22 }],
    outputs: [
      { k: "Ri", sym: "R<sub>i</sub>", label: "Rate of land area irrigated", dim: "arearate", u: "ac/hr", dp: 3 },
      { k: "qi", sym: "q<sub>i</sub>", label: "Injection rate of solution", dim: "injflow", u: "pt/hr", dp: 2 }],
    f: v => { const Ri = v.A / v.tr; return { Ri, qi: v.Gp * Ri }; },
    examples: [{ ref: "Example 15.4", page: 336, in: { Gp: 1.5, A: 126, tr: 22 }, out: { Ri: 5.72, qi: 8.6 }, tol: 0.01 }],
  });

  C({
    id: "eq-15.3", eq: ["15.3"], sec: "15.4", page: 333, title: "Mainline flushing time",
    tags: ["flush mainline", "chemical travel time", "how long to flush pipe", "manifold flush", "submain"],
    note: "Also use it for each segment of a manifold or submain.",
    inputs: [
      { k: "ID", sym: "ID", label: "Inside diameter of the pipe", dim: "length", u: "in", v: 7.762 },
      { k: "Lm", sym: "L<sub>m</sub>", label: "Length of the mainline", dim: "length", u: "ft", v: 975 },
      { k: "Q", sym: "Q", label: "Irrigation system flow rate", dim: "flow", u: "gpm", v: 500 }],
    outputs: [{ k: "Tm", sym: "T<sub>m</sub>", label: "Mainline flushing time", dim: "time", u: "min", dp: 2 }],
    f: v => ({ Tm: 0.0408 * v.ID * v.ID * v.Lm / v.Q }),
    examples: [{ ref: "Example 15.2 (book substitutes 925 ft)", page: 333, in: { ID: 7.762, Lm: 925, Q: 500 }, out: { Tm: 4.55 } },
               // with the stated 975 ft the time is 4.79 min; the book reports it rounded as 5 min
               { ref: "Example 15.2", page: 333, in: { ID: 7.762, Lm: 975, Q: 500 }, out: { Tm: 5 }, tol: 0.05 }],
  });

  C({
    id: "eq-15.4", eq: ["15.4"], sec: "15.4", page: 333, title: "Lateral or manifold flushing time (DeTar)",
    tags: ["flush drip lateral", "flush manifold", "DeTar", "chemical travel time to last emitter", "how long to flush drip tape"],
    note: "For laterals with equally spaced outlets of equal discharge. L<sub>l</sub>/S is the number of outlets N. For drip laterals it applies only when flushing through the emitters.",
    figs: ["15.13"],
    inputs: [
      { k: "ID", sym: "ID", label: "Inside diameter", dim: "length", u: "in", v: 0.859 },
      { k: "S", sym: "S", label: "Outlet spacing", dim: "length", u: "ft", v: 1.5 },
      { k: "q", sym: "q", label: "Outlet discharge", dim: "flow", u: "gpm", v: 0.0044 },
      { k: "Ll", sym: "L<sub>l</sub>", label: "Lateral length", dim: "length", u: "ft", v: 1300 }],
    outputs: [
      { k: "N", sym: "N", label: "Number of outlets", dim: "count", u: "#", dp: 0 },
      { k: "TL", sym: "T<sub>L</sub>", label: "Lateral flushing time", dim: "time", u: "min", dp: 1 }],
    f: v => ({ N: v.Ll / v.S, TL: 0.0408 * v.ID * v.ID * v.S / v.q * (0.577215 + Math.log(v.Ll / v.S)) }),
    examples: [
      // book reports the rounded value 5 min; exact 4.66 min
      { ref: "Example 15.2 (manifold)", page: 333, in: { ID: 4.280, S: 5, q: 3.81, Ll: 325 }, out: { TL: 5 }, tol: 0.08 },
      { ref: "Example 15.3 (drip lateral)", page: 335, in: { ID: 0.859, S: 1.5, q: 0.0044, Ll: 1300 }, out: { TL: 75 } }],
  });

  C({
    id: "eq-15.5", eq: ["15.5"], sec: "15.4", page: 336, title: "Center pivot lateral flushing time",
    tags: ["flush center pivot", "pivot flush time", "how long to run pivot after chemigation", "Buttermore and Eisenhauer"],
    note: "Applies only when the end gun is not operating.",
    inputs: [
      { k: "ID", sym: "ID", label: "Inside diameter of pivot lateral", dim: "length", u: "in", v: 6.395 },
      { k: "Ll", sym: "L<sub>l</sub>", label: "Pivot lateral length", dim: "length", u: "ft", v: 1280 },
      { k: "S", sym: "S", label: "Sprinkler spacing", dim: "length", u: "ft", v: 20 },
      { k: "Q", sym: "Q", label: "System flow rate", dim: "flow", u: "gpm", v: 860 }],
    outputs: [{ k: "T", sym: "T", label: "Flushing time", dim: "time", u: "min", dp: 1 }],
    f: v => ({ T: 0.0102 * v.ID * v.ID * (2 * v.Ll + v.S) / v.Q * Math.log(1 + 4 * v.Ll / v.S) }),
    examples: [{ ref: "Example 15.4", page: 336, in: { ID: 6.395, Ll: 1280, S: 20, Q: 860 }, out: { T: 6.9 } }],
  });

  C({
    id: "flush-total", eq: ["15.3", "15.4"], sec: "15.4", page: 335, title: "Total flushing time for a drip zone (mainline, manifold, laterals)",
    tags: ["total flush time", "chemical travel time to farthest emitter", "drip fertigation flush", "how long to run clean water after fertigation"],
    note: "Follows Examples 15.2 and 15.3: mainline by Eq. 15.3, manifold and laterals by Eq. 15.4. The total is also the travel time from the injector to the farthest emitter. Allow at least this long of clean water after injection stops.",
    inputs: [
      { k: "Q", sym: "Q", label: "Zone flow rate", dim: "flow", u: "gpm", v: 500 },
      { k: "IDm", sym: "ID", label: "Mainline inside diameter", dim: "length", u: "in", v: 7.762 },
      { k: "Lm", sym: "L<sub>m</sub>", label: "Mainline length", dim: "length", u: "ft", v: 975 },
      { k: "IDf", sym: "ID", label: "Manifold inside diameter", dim: "length", u: "in", v: 4.280 },
      { k: "Lf", sym: "L<sub>l</sub>", label: "Manifold length (one side of inlet)", dim: "length", u: "ft", v: 325 },
      { k: "Sf", sym: "S", label: "Lateral spacing on the manifold", dim: "length", u: "ft", v: 5 },
      { k: "qf", sym: "q", label: "Flow per lateral", dim: "flow", u: "gpm", v: 3.81 },
      { k: "IDl", sym: "ID", label: "Lateral inside diameter", dim: "length", u: "in", v: 0.859 },
      { k: "Ll", sym: "L<sub>l</sub>", label: "Lateral length", dim: "length", u: "ft", v: 1300 },
      { k: "Sl", sym: "S", label: "Emitter spacing", dim: "length", u: "ft", v: 1.5 },
      { k: "ql", sym: "q", label: "Emitter discharge", dim: "flow", u: "gph", v: 0.264 }],
    outputs: [
      { k: "Tm", sym: "T<sub>m</sub>", label: "Mainline flushing time", dim: "time", u: "min", dp: 1 },
      { k: "Tf", label: "Manifold flushing time", dim: "time", u: "min", dp: 1 },
      { k: "Tl", label: "Lateral flushing time", dim: "time", u: "min", dp: 1 },
      { k: "T", label: "Total flushing time", dim: "time", u: "min", dp: 1 }],
    f: v => {
      const Tm = 0.0408 * v.IDm * v.IDm * v.Lm / v.Q;
      const Tf = 0.0408 * v.IDf * v.IDf * v.Sf / v.qf * (0.577215 + Math.log(v.Lf / v.Sf));
      const qg = v.ql / 60;
      const Tl = 0.0408 * v.IDl * v.IDl * v.Sl / qg * (0.577215 + Math.log(v.Ll / v.Sl));
      return { Tm, Tf, Tl, T: Tm + Tf + Tl };
    },
    // book rounds the mainline and manifold times to 5 min each, so its total is 85 min (exact 84.8)
    examples: [{ ref: "Examples 15.2 and 15.3", page: 335, in: {}, out: { Tl: 75, T: 85 }, tol: 0.02 }],
  });

  C({
    id: "pump-calibration", eq: [], sec: "15.4", page: 332, title: "Injection pump dial setting and calibration check",
    tags: ["calibrate injection pump", "pump dial percent", "catch test", "mL per minute to gallons per hour", "injector calibration"],
    note: "Follows Example 15.1. Set the dial, time a catch from the injection tube at operating pressure, compare, adjust and repeat until the measured rate matches.",
    inputs: [
      { k: "qd", sym: "q<sub>i</sub>", label: "Desired injection rate", dim: "injflow", u: "gph", v: 17.5 },
      { k: "qmax", label: "Pump maximum capacity", dim: "injflow", u: "gph", v: 20 },
      { k: "Vc", label: "Volume caught in calibration test", dim: "volume", u: "mL", v: 3000 },
      { k: "tc", label: "Time to catch that volume", dim: "time", u: "min", v: 2.5 }],
    outputs: [
      { k: "dial", label: "Initial dial setting", dim: "pct", u: "%", dp: 1 },
      { k: "qml", label: "Measured injection rate", dim: "injflow", u: "mL/min", dp: 0 },
      { k: "qm", label: "Measured injection rate", dim: "injflow", u: "gph", dp: 2 },
      { k: "adj", label: "What to do", text: true }],
    f: v => {
      const dial = v.qd / v.qmax * 100;
      const qml = v.Vc / v.tc;
      const qm = qml / (3785.411784 / 60); // mL/min to gal/h (1 gal/h = 63.09 mL/min)
      const r = qm / v.qd;
      const adj = Math.abs(r - 1) <= 0.02 ? "Rate is within 2% of target; keep the setting"
        : (r > 1 ? "Measured rate is high: turn the dial down" : "Measured rate is low: turn the dial up")
          + " (about " + (dial / r).toFixed(0) + "% if output is proportional to the dial), then test again";
      return { dial, qml, qm, adj };
    },
    examples: [{ ref: "Example 15.1", page: 332, in: { qd: 17.5, qmax: 20, Vc: 3000, tc: 2.5 }, out: { dial: 88, qml: 1200, qm: 19.0 }, tol: 0.01 }],
  });

  C({
    id: "injection-plan", eq: ["15.1", "15.2"], sec: "15.4", page: 332, title: "Chemigation injection setup: label rate to pump setting",
    tags: ["fertigation calculator", "chemigation calculator", "UAN injection", "label rate to injection rate", "how do I set my injection pump", "pounds of N per acre through drip", "pivot fertigation"],
    note: "Product per acre G<sub>p</sub> comes from the label rate, or from the nutrient rate divided by the nutrient per gallon of product (28% UAN is about 3 lb N/gal, Example 15.3). Set systems use Eq. 15.1; moving systems use Eq. 15.2 with R<sub>i</sub> = area / pass time. Then set the dial and calibrate as in Example 15.1.",
    inputs: [
      { k: "mode", label: "Rate given as", type: "sel", opts: [["Product volume per acre (label rate)", 0], ["Nutrient mass per acre", 1]], v: 1 },
      { k: "Gl", sym: "G<sub>p</sub>", label: "Label rate of product (if rate given as volume)", dim: "labelrate", u: "pt/ac", v: 1.5 },
      { k: "Nr", label: "Nutrient rate (if rate given as nutrient)", dim: "massarea", u: "lb/ac", v: 15 },
      { k: "Nc", label: "Nutrient per volume of product", dim: "productconc", u: "lb/gal", v: 3, help: "28% UAN: 3 lb N/gal; 32% UAN: about 3.5 lb N/gal." },
      { k: "sys", label: "System type", type: "sel", opts: [["Set system (drip zone, set sprinkler, surface)", 0], ["Moving system (center pivot, linear)", 1]], v: 0 },
      { k: "A", sym: "A<sub>s</sub>", label: "Area treated (zones injected, or area per pass)", dim: "area", u: "ac", v: 78 },
      { k: "t", sym: "t<sub>i</sub>", label: "Injection time (set) or time for one pass (moving)", dim: "time", u: "hr", v: 24 },
      { k: "qmax", label: "Injection pump maximum capacity", dim: "injflow", u: "gph", v: 20 }],
    outputs: [
      { k: "Gp", sym: "G<sub>p</sub>", label: "Product to apply per acre", dim: "labelrate", u: "gal/ac", dp: 3 },
      { k: "Vt", label: "Total product needed", dim: "volume", u: "gal", dp: 1 },
      { k: "Ri", sym: "R<sub>i</sub>", label: "Area rate (moving systems)", dim: "arearate", u: "ac/hr", dp: 3 },
      { k: "qi", sym: "q<sub>i</sub>", label: "Injection rate", dim: "injflow", u: "gph", dp: 3 },
      { k: "qml", label: "Injection rate for a catch test", dim: "injflow", u: "mL/min", dp: 0 },
      { k: "dial", label: "Pump dial setting", dim: "pct", u: "%", dp: 1 },
      { k: "chk", label: "Pump check", text: true }],
    f: v => {
      const Gp = v.mode === 1 ? v.Nr / v.Nc : v.Gl / 8;
      const Ri = v.A / v.t;
      const qi = Gp * Ri; // same as Gp A / t for a set system
      const dial = qi / v.qmax * 100;
      const chk = dial > 100 ? "Pump is too small for this rate: lengthen injection time or use a larger pump"
        : dial < 10 ? "Very low dial setting: a smaller pump or more dilute solution will be more accurate" : "Within pump range";
      return { Gp, Vt: Gp * v.A, Ri, qi, qml: qi * 3785.411784 / 60, dial, chk };
    },
    examples: [
      { ref: "Example 15.3", page: 335, in: { mode: 1, Nr: 15, Nc: 3, sys: 0, A: 78, t: 24, qmax: 20 }, out: { Gp: 5, qi: 16.2 }, tol: 0.01 },
      { ref: "Example 15.4", page: 336, in: { mode: 0, Gl: 1.5, sys: 1, A: 126, t: 22, qmax: 20 }, out: { qi: 1.07 }, tol: 0.01 }],
  });
})(typeof window !== "undefined" ? window : globalThis);

/* ---- units-book.js ---- */
/* Common Unit Conversions for Irrigation, book front matter pages xxi to xxii, copied as printed.
   from/to units use the unit strings of site/js/units.js where that unit exists, so UNITS.convert(dim, ...) can check them.
   `dim` is the units.js dimension (null when units.js has no matching unit). Lines with two results carry the second in `also`. */
(function (G) {
  const B = (group, dim, fv, fu, tv, tu, text, extra) => Object.assign({ group, dim, from: { value: fv, unit: fu }, to: { value: tv, unit: tu }, text }, extra || {});
  const L = "Length Units", A = "Area Units", V = "Volume Units", F = "Flow Units", W = "Weight and Mass Units", P = "Pressure Units";
  const Y = "Crop Yield Units", TC = "Temperature Conversions", S = "U.S. Public Land Survey System";
  G.BOOK_CONVERSIONS = [
    B(L, "length", 1, "km", 0.6214, "mi", "1 km (kilometer) = 0.6214 mi (miles)"),
    B(L, "length", 1, "mi", 1.609, "km", "1 mi = 1.609 km"),
    B(L, "length", 1, "km", 1000, "m", "1 km = 1,000 m (meters)"),
    B(L, "length", 1, "mi", 5280, "ft", "1 mi = 5,280 ft (feet)"),
    B(L, "length", 1, "m", 3.281, "ft", "1 m = 3.281 ft"),
    B(L, "length", 1, "ft", 0.3048, "m", "1 ft = 0.3048 m"),
    B(L, "length", 1, "m", 100, "cm", "1 m = 100 cm (centimeters)"),
    B(L, "length", 1, "ft", 12, "in", "1 ft = 12 in (inches)"),
    B(L, "length", 1, "in", 2.54, "cm", "1 in = 2.54 cm"),

    B(A, "area", 1, "ha", 10000, "m²", "1 ha (hectare) = 10,000 m²"),
    B(A, "area", 1, "ha", 2.471, "ac", "1 ha = 2.471 ac (acres)"),
    B(A, "area", 1, "ac", 0.4047, "ha", "1 ac = 0.4047 ha"),
    B(A, "area", 1, "ac", 43560, "ft²", "1 ac = 43,560 ft²"),

    B(V, "volume", 1, "L", 0.2642, "gal", "1 L (liter) = 0.2642 gal (gallons)"),
    B(V, "volume", 1, "gal", 3.785, "L", "1 gal = 3.785 L"),
    B(V, "volume", 1, "m³", 1000, "L", "1 m³ = 1,000 L"),
    B(V, "volume", 1, "m³", 264.2, "gal", "1 m³ = 264.2 gal"),
    B(V, "volume", 1, "ft³", 7.481, "gal", "1 ft³ = 7.481 gal"),
    B(V, "volume", 1, "m³", 35.31, "ft³", "1 m³ = 35.31 ft³"),
    B(V, "volume", 1, "ft³", 0.02832, "m³", "1 ft³ = 0.02832 m³"),
    B(V, "volume", 1, "ac-ft", 1233, "m³", "1 ac-ft (covers 1 acre with 1 foot of water) = 1,233 m³"),
    B(V, "volume", 1, "ac-ft", 325851, "gal", "1 ac-ft = 325,851 gal"),
    B(V, "volume", 1, "ac-in", 27154, "gal", "1 ac-in (acre-inch) = 27,154 gal"),
    B(V, "volume", 1, "ha-cm", 100, "m³", "1 ha-cm (hectare-centimeter) = 100 m³"),
    B(V, "volume", 1, "ac-in", 1.028, "ha-cm", "1 ac-in = 1.028 ha-cm (1 for practical purposes)", { practical: 1 }),
    B(V, null, 1, "bu", 35.24, "L", "1 bu (bushel) = 35.24 L"),
    B(V, null, 1, "bu", 9.309, "gal", "1 bu = 9.309 gal"),

    B(F, "flow", 1, "L/s", 15.85, "gpm", "1 L/s (liter/second) = 15.85 gpm (gallons/minute)"),
    B(F, "flow", 1, "gpm", 0.06309, "L/s", "1 gpm = 0.06309 L/s"),
    B(F, "flow", 1, "m³/s", 1000, "L/s", "1 cms (m³/s) = 1,000 L/s"),
    B(F, "flow", 1, "m³/s", 35.31, "cfs", "1 cms = 35.31 cfs (ft³/s)"),
    B(F, "flow", 1, "cfs", 448.8, "gpm", "1 cfs = 448.8 gpm (450 for practical purposes)", { practical: 450 }),
    B(F, "flow", 1, "cfs", 0.02832, "m³/s", "1 cfs = 0.02832 cms"),
    B(F, "flow", 1, "ac-in/hr", 1.008, "cfs", "1 ac-in/hr = 1.008 cfs (1 for practical purposes)", { practical: 1 }),
    B(F, "flow", 1, "ac-in/hr", 452.6, "gpm", "1 ac-in/hr = 452.6 gpm (450 for practical purposes)", { practical: 450 }),

    B(W, "mass", 1, "t (metric)", 1000, "kg", "1 t (metric ton) = 1,000 kg (kilograms)"),
    B(W, "mass", 1, "ton (short)", 2000, "lb", "1 T (U.S. ton) = 2,000 lb (pounds)"),
    B(W, "mass", 1, "t (metric)", 1.102, "ton (short)", "1 t = 1.102 T"),
    B(W, "mass", 1, "ton (short)", 0.9072, "t (metric)", "1T = 0.9072 t"),
    B(W, "mass", 1, "kg", 2.205, "lb", "1 kg = 2.205 lb"),
    B(W, "mass", 1, "lb", 0.4536, "kg", "1 lb = 0.4536 kg"),

    B(P, "pressure", 1, "atm", 101.3, "kPa", "1 atm (atmosphere) = 101.3 kPa (kilopascal)"),
    B(P, "pressure", 1, "bar", 100, "kPa", "1 bar = 100 kPa"),
    B(P, "pressure", 1, "bar", 0.9869, "atm", "1 bar = 0.9869 atm (1 for practical purposes)", { practical: 1 }),
    B(P, "pressure", 1, "kPa", 0.1450, "psi", "1 kPa = 0.1450 psi (pounds per square inch)"),
    B(P, "pressure", 1, "psi", 6.895, "kPa", "1 psi = 6.895 kPa"),
    B(P, "pressure", 1, "m H₂O", 9.804, "kPa", "1 m (meter of water head) = 9.804 kPa"),
    B(P, "pressure", 1, "ft H₂O", 0.4335, "psi", "1 ft (foot of water head) = 0.4335 psi"),
    B(P, "pressure", 1, "kPa", 0.3346, "ft H₂O", "1 kPa = 0.3346 ft = 0.1020 m (0.1 for practical purposes)", { also: [{ value: 0.1020, unit: "m H₂O" }], practical: 0.1 }),
    B(P, "pressure", 1, "psi", 2.307, "ft H₂O", "1 psi = 2.307 ft = 0.7032 m (0.7 for practical purposes)", { also: [{ value: 0.7032, unit: "m H₂O" }], practical: 0.7 }),

    B(Y + ": Rice, cotton, alfalfa, and similar crops", "massarea", 1, "lb/ac", 1.121, "kg/ha", "1 lb/ac (lb dry weight/ac) = 1.121 kg/ha (kg dry mass/ha)"),
    B(Y + ": Rice, cotton, alfalfa, and similar crops", "massarea", 1, "kg/ha", 0.8922, "lb/ac", "1 kg/ha = 0.8922 lb/ac"),
    B(Y + ": Rice, cotton, alfalfa, and similar crops", "massarea", 1, "ton/ac", 2.242, "t/ha", "1 T/ac (T dry weight/ac) = 2.242 t/ha (t dry mass/ha)"),
    B(Y + ": Rice, cotton, alfalfa, and similar crops", "massarea", 1, "t/ha", 0.4461, "ton/ac", "1 t/ha = 0.4461 T/ac"),
    B(Y + ": Tree fruit, grapes, vegetables, and similar crops", "massarea", 1, "lb/ac", 1.121, "kg/ha", "1 lb/ac (lb wet weight/ac) = 1.121 kg/ha (kg wet mass/ha)"),
    B(Y + ": Tree fruit, grapes, vegetables, and similar crops", "massarea", 1, "ton/ac", 2.242, "t/ha", "1 T/ac (T wet weight/ac) = 2.242 t/ha (t wet mass/ha)"),
    B(Y + ": Maize/corn", null, 1, "bu/ac", 0.0530, "t/ha", "1 bu/ac (bushel/ac) = 0.0530 t/ha (t dry mass/ha)", { footnote: "a" }),
    B(Y + ": Maize/corn", null, 1, "t/ha", 18.9, "bu/ac", "1 t/ha = 18.9 bu/ac", { footnote: "a" }),
    B(Y + ": Soybean", null, 1, "bu/ac", 0.0585, "t/ha", "1 bu/ac = 0.0585 t/ha (t dry mass/ha)", { footnote: "a" }),
    B(Y + ": Soybean", null, 1, "t/ha", 17.1, "bu/ac", "1 t/ha = 17.1 bu/ac", { footnote: "a" }),
  ];
  // footnote [a] as printed
  G.BOOK_CONVERSIONS_NOTES = {
    a: "The unit of bu/ac is volume per area. The volume (bu) is calculated using the wet weight of the grain, a wet bulk density of 56 lb/bu (maize) or 60 lb/bu (soybean), and an assumed grain moisture content (wet basis) of 15.5% (maize) or 13% (soybean).",
  };
  // Temperature Conversions table (two printed column pairs, °C to °F and °F to °C, rounded to whole degrees)
  [[0, 32], [5, 41], [10, 50], [15, 59], [20, 68], [25, 77], [30, 86], [35, 95], [40, 104]].forEach(([c, f]) =>
    G.BOOK_CONVERSIONS.push(B(TC, "temp", c, "°C", f, "°F", c + " °C = " + f + " °F")));
  [[30, -1], [40, 4], [50, 10], [60, 16], [70, 21], [80, 27], [90, 32], [100, 38], [110, 43]].forEach(([f, c]) =>
    G.BOOK_CONVERSIONS.push(B(TC, "temp", f, "°F", c, "°C", f + " °F = " + (c < 0 ? "−" + -c : c) + " °C", { rounded: 1 })));
  // U.S. Public Land Survey System diagram
  G.BOOK_CONVERSIONS.push(
    B(S, "area", 1, "mi²", 640, "ac", "1 Section of Land: 1 mile square, 640 ac, 259 ha", { also: [{ value: 259, unit: "ha" }] }),
    B(S, "area", 160, "ac", 65, "ha", "1/4 Section: 160 ac, 65 ha", { rounded: 1 }),
    B(S, "area", 130, "ac", 53, "ha", "¼-Mile Center Pivot with End Gun: 130 ac irrigated, 53 ha irrigated", { rounded: 1 }),
    B(S, "area", 150, "ac", 61, "ha", "¼-Mile Center Pivot with Swing Boom Corner: 150 ac irrigated, 61 ha irrigated", { rounded: 1 }));
})(typeof window !== "undefined" ? window : globalThis);

