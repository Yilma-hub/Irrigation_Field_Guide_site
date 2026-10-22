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
