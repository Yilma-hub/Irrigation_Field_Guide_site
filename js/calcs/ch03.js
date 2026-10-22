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
