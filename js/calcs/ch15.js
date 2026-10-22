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
