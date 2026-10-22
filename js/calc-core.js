/* Calculator registry and math helpers shared by every calculator file.
   A calculator spec:
   calc({
     id, eq:[printed equation numbers], ch, sec, page, title, tags:[search words],
     inputs:[{k, sym, label, dim, u, v, type:'num'|'sel'|'list', opts:[[label,value]], min, max, help}],
     outputs:[{k, sym, label, dim, u, dp}],
     f: v => ({...}),            // v holds inputs in the units given by `u`
     examples:[{ref, page, in:{}, out:{}, tol}],   // book worked examples, used by the test runner
     note, tables:[table ids used], figs:[figure ids]
   })
*/
(function (G) {
  const CALCS = [];
  const byId = {};
  function calc(spec) {
    if (byId[spec.id]) throw new Error("duplicate calculator id " + spec.id);
    spec.inputs = spec.inputs || [];
    spec.outputs = spec.outputs || [];
    spec.eq = spec.eq || [];
    spec.tags = spec.tags || [];
    for (const i of spec.inputs) { i.type = i.type || "num"; i.dim = i.dim || "none"; i.u = i.u || G.UNITS.unitsOf(i.dim)[0]; }
    for (const o of spec.outputs) { o.dim = o.dim || "none"; o.u = o.u || G.UNITS.unitsOf(o.dim)[0]; if (o.dp === undefined) o.dp = 3; }
    CALCS.push(spec);
    byId[spec.id] = spec;
    return spec;
  }

  function evaluate(spec, v) {
    const out = spec.f(Object.assign({}, v));
    return out;
  }

  // Solve for input k so that output o equals target (numeric, bracket + bisection).
  function solveFor(spec, v, k, o, target) {
    const inp = spec.inputs.find(i => i.k === k);
    const lo = inp && inp.min !== undefined ? inp.min : 0;
    const hi = inp && inp.max !== undefined ? inp.max : Infinity;
    const g = x => {
      const vv = Object.assign({}, v); vv[k] = x;
      let r;
      try { r = spec.f(vv)[o]; } catch (e) { return NaN; }
      return (typeof r === "number" ? r : NaN) - target;
    };
    const pts = [];
    const allowNeg = lo < 0;
    for (let e = -8; e <= 9; e += 0.05) {
      const x = Math.pow(10, e);
      if (x >= lo && x <= hi) pts.push(x);
      if (allowNeg && -x >= lo) pts.push(-x);
    }
    if (lo <= 0 && hi >= 0) pts.push(0);
    pts.sort((a, b) => a - b);
    // start from the current value's neighbourhood when there are several roots
    let best = null;
    let prev = null, pg = null;
    const cur = v[k];
    for (const x of pts) {
      const gx = g(x);
      if (!isFinite(gx)) { prev = null; continue; }
      if (gx === 0) { const c = { x, d: Math.abs(x - (cur || 0)) }; if (!best || c.d < best.d) best = c; }
      if (prev !== null && Math.sign(gx) !== Math.sign(pg)) {
        let a = prev, b = x, ga = pg;
        for (let it = 0; it < 200; it++) {
          const m = (a + b) / 2, gm = g(m);
          if (!isFinite(gm)) break;
          if (Math.sign(gm) === Math.sign(ga)) { a = m; ga = gm; } else { b = m; }
        }
        const root = (a + b) / 2;
        const c = { x: root, d: Math.abs(root - (cur || 0)) };
        if (!best || c.d < best.d) best = c;
      }
      prev = x; pg = gx;
    }
    return best ? best.x : NaN;
  }

  // ---- helpers used in calculator files ----
  const M = {
    sum: a => a.reduce((s, x) => s + x, 0),
    mean: a => a.reduce((s, x) => s + x, 0) / a.length,
    // average of the lowest quarter of values (each value = equal area)
    lowQuarter(a) {
      const s = [...a].sort((x, y) => x - y);
      const n = s.length / 4;
      const whole = Math.floor(n);
      let tot = 0;
      for (let i = 0; i < whole; i++) tot += s[i];
      const frac = n - whole;
      if (frac > 1e-9) tot += s[whole] * frac;
      return tot / n;
    },
    // straight-line interpolation in a table of [x, y] pairs (x ascending)
    interp(tab, x) {
      if (x <= tab[0][0]) return tab[0][1];
      for (let i = 1; i < tab.length; i++) {
        if (x <= tab[i][0]) {
          const [x0, y0] = tab[i - 1], [x1, y1] = tab[i];
          return y0 + (y1 - y0) * (x - x0) / (x1 - x0);
        }
      }
      return tab[tab.length - 1][1];
    },
    // saturation vapor pressure, kPa, T in °C (Tetens form used by FAO-56)
    es(Tc) { return 0.6108 * Math.exp(17.27 * Tc / (Tc + 237.3)); },
    // parse "1.2, 1.3 0.9" into numbers
    list(s) {
      if (Array.isArray(s)) return s.map(Number).filter(x => isFinite(x));
      return String(s || "").split(/[\s,;]+/).filter(t => t !== "").map(Number).filter(x => isFinite(x));
    },
    F2C: f => (f - 32) * 5 / 9,
    C2F: c => c * 9 / 5 + 32,
  };

  G.CALC = { CALCS, byId, calc, evaluate, solveFor, M };
  G.calc = calc;
  G.M = M;
})(typeof window !== "undefined" ? window : globalThis);
