/* Offline search over the book text, calculators, tables, figures, examples, glossary,
   field notes and the user's own notes. Plain inverted index with simple stemming and a
   synonym list for the way questions get asked in the field. */
(function (G) {
  const STOP = new Set("a an the of to in on for and or is are be my our your i we you it its this that with by at as from how what when where which who why do does did can could should would will much many much long does there their them than then so if into per about any get got".split(" "));

  // field words -> book words. Expansions score at half weight.
  const SYN = {
    pivot: ["center pivot", "lateral", "end gun"], circle: ["center pivot"], run: ["time", "operation", "set time", "timer", "speed"],
    long: ["time", "interval"], salty: ["salinity", "salt", "ec", "electrical conductivity", "sodium"], salt: ["salinity", "ec", "sodium"],
    brackish: ["salinity", "ec"], sodium: ["sar", "sodic"], inch: ["depth", "in"], inches: ["depth"], acre: ["area", "ac"],
    hold: ["available water capacity", "awc", "water holding", "storage"], holding: ["awc", "available water capacity"],
    dry: ["depletion", "swd", "stress", "deficit", "wilting"], wet: ["field capacity", "saturation", "infiltration"],
    stress: ["depletion", "allowable depletion", "fdc", "stress factor"], when: ["scheduling", "latest date", "interval"],
    schedule: ["scheduling", "checkbook", "water balance"], checkbook: ["water balance", "scheduling"], deficit: ["swd", "depletion"],
    gpm: ["flow rate", "discharge", "capacity"], flow: ["discharge", "flow rate", "gpm"], meter: ["flowmeter", "propeller meter", "measurement"],
    well: ["drawdown", "aquifer", "pump", "specific capacity", "groundwater"], pump: ["pumping plant", "tdh", "horsepower", "efficiency"],
    horsepower: ["whp", "bhp", "hp"], hp: ["horsepower", "whp", "bhp"], energy: ["fuel", "kwh", "pumping plant", "performance"],
    diesel: ["fuel", "energy", "performance criteria"], electric: ["kwh", "energy"], cost: ["energy", "fuel"],
    pressure: ["psi", "head", "pressure loss"], psi: ["pressure"], friction: ["hazen-williams", "pressure loss", "head loss"],
    pipe: ["pipeline", "friction", "hazen-williams", "diameter"], uniform: ["uniformity", "du", "cu"], uniformity: ["du", "cu", "distribution uniformity", "christiansen"],
    even: ["uniformity", "du"], catch: ["catch can", "uniformity"], cans: ["catch can"], efficiency: ["application efficiency", "elq", "ea"],
    runoff: ["runoff", "intake", "application rate", "surface storage"], puddle: ["runoff", "ponding", "intake"], ponding: ["runoff", "infiltration"],
    nozzle: ["sprinkler", "discharge", "nozzle"], sprinkler: ["nozzle", "application rate"], drip: ["microirrigation", "emitter", "tape"],
    tape: ["drip", "microirrigation", "emitter"], emitter: ["drip", "microirrigation"], clog: ["plugging", "filter"], filter: ["screen", "media filter", "plugging"],
    furrow: ["surface irrigation", "furrow", "cutoff", "advance"], gated: ["furrow", "surface irrigation"], flood: ["surface irrigation", "basin", "border"],
    corn: ["crop", "maize"], alfalfa: ["crop"], soybean: ["soybeans", "crop"], kc: ["crop coefficient"], et: ["evapotranspiration", "water use", "eto"],
    evapotranspiration: ["et", "water use"], water: [], use: ["et", "evapotranspiration"], rain: ["precipitation", "effective precipitation", "rainfall allowance"],
    rainfall: ["precipitation"], root: ["root zone", "root depth", "rd"], roots: ["root zone"], sandy: ["sand", "coarse"], heavy: ["clay", "fine"],
    fertilizer: ["chemigation", "injection", "nitrogen"], nitrogen: ["chemigation", "leaching", "chemical"], chemical: ["chemigation", "injection"],
    inject: ["chemigation", "injection rate"], flush: ["flushing time", "travel time"], backflow: ["check valve", "chemigation"],
    leach: ["leaching", "leaching requirement", "deep percolation"], leaching: ["leaching fraction", "leaching requirement"],
    gun: ["end gun", "big gun", "traveler"], traveler: ["hose", "big gun"], frost: ["frost protection"], speed: ["timer", "percent timer", "control setting"],
    timer: ["control setting", "percent timer"], capacity: ["system capacity", "gross capacity"], tension: ["matric", "tensiometer", "cb"],
    sensor: ["soil water", "tensiometer", "neutron", "capacitance", "tdr"], probe: ["sensor", "neutron"], weir: ["flume", "open channel"],
    ditch: ["canal", "seepage", "conveyance"], canal: ["seepage", "conveyance"], convert: ["conversion", "unit"], units: ["conversion"],
  };

  function stem(w) {
    if (/^\d/.test(w)) return w;
    if (w.length > 5 && w.endsWith("ies")) return w.slice(0, -3) + "y";
    if (w.length > 5 && w.endsWith("ing")) return w.slice(0, -3);
    if (w.length > 4 && w.endsWith("ed")) return w.slice(0, -2);
    if (w.length > 3 && w.endsWith("es") && !w.endsWith("ses")) return w.slice(0, -1);
    if (w.length > 3 && w.endsWith("s") && !w.endsWith("ss") && !w.endsWith("us")) return w.slice(0, -1);
    return w;
  }
  function tokens(s) {
    s = String(s || "").toLowerCase().replace(/<[^>]+>/g, " ").replace(/[θ]/g, "theta ").replace(/[ψΨ]/g, "psi ");
    const out = [];
    for (const m of s.matchAll(/\d+(?:\.\d+)*[a-d]?|[a-z][a-z'-]*/g)) {
      let w = m[0].replace(/'s$/, "").replace(/^-+|-+$/g, "");
      if (!w || STOP.has(w)) continue;
      out.push(stem(w));
      if (w.includes("-")) for (const p of w.split("-")) if (p && !STOP.has(p)) out.push(stem(p));
    }
    return out;
  }
  function plain(h) { return String(h || "").replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">"); }

  const docs = [];
  const inv = new Map();
  function add(doc) {
    const id = docs.length;
    docs.push(doc);
    const tf = new Map();
    const push = (txt, w) => { for (const t of tokens(txt)) tf.set(t, (tf.get(t) || 0) + w); };
    push(doc.title, 3);
    push(doc.tags || "", 2.2);
    push(doc.body || "", 1);
    doc.len = Math.max(8, tokens(doc.body || "").length);
    for (const [t, w] of tf) {
      if (!inv.has(t)) inv.set(t, []);
      inv.get(t).push([id, w]);
    }
  }

  function build() {
    const B = G.BOOK;
    for (const ch of B.chapters) {
      for (const s of ch.sections) {
        const secTitle = (s.num ? s.num + " " : "") + s.title;
        s.blocks.forEach((b, i) => {
          if (["p", "li", "q", "ref"].includes(b.t)) {
            add({ type: "text", title: secTitle, body: plain(b.html), route: `#/s/${s.id}`, anchor: `b${i}`, sec: s.id, ch: ch.num, w: b.t === "ref" ? 0.4 : 1 });
          } else if (b.t === "defs") {
            add({ type: "text", title: secTitle, body: b.rows.map(plain).join("; "), route: `#/s/${s.id}`, anchor: `b${i}`, sec: s.id, ch: ch.num, w: 0.8 });
          } else if (b.t === "h3") {
            add({ type: "text", title: plain(b.html), tags: secTitle, body: "", route: `#/s/${s.id}`, anchor: `b${i}`, sec: s.id, ch: ch.num, w: 1.3, heading: true });
          } else if (b.t === "table") {
            add({ type: "table", title: "Table " + b.num, tags: plain(b.caption), body: b.text, route: `#/s/${s.id}`, anchor: `tab-${b.num}`, num: b.num, w: 1.5, img: b.img });
          } else if (b.t === "fig") {
            add({ type: "figure", title: "Figure " + b.num, tags: plain(b.caption), body: b.labels || "", route: `#/s/${s.id}`, anchor: `fig-${b.num}`, num: b.num, w: 1.2, img: b.img });
          } else if (b.t === "ex" && b.label) {
            add({ type: "example", title: "Example " + b.label, tags: secTitle, body: b.text, route: `#/s/${s.id}`, anchor: `ex-${b.label}`, num: b.label, w: 0.9 });
          }
        });
        add({ type: "section", title: secTitle, tags: ch.title, body: "", route: `#/s/${s.id}`, sec: s.id, ch: ch.num, w: 1.6 });
      }
    }
    for (const c of G.CALC.CALCS) {
      const io = c.inputs.map(i => i.label).concat(c.outputs.map(o => o.label)).join("; ");
      add({ type: "calc", title: c.title, tags: c.tags.join("; ") + "; " + c.eq.map(e => "equation " + e + " eq " + e).join(" ") + (c.tables || []).map(t => " table " + t).join(""), body: io + " " + (c.note || ""), route: `#/c/${c.id}`, id: c.id, w: 1.9, calc: c });
    }
    for (const g of B.glossary) add({ type: "gloss", title: g.term, body: plain(g.html), route: `#/glossary`, anchor: "g-" + slug(g.term), w: 1.4, gloss: g });
    for (const n of (G.FIELDNOTES || [])) add({ type: "note", title: n.q, tags: (n.alt || []).join("; ") + "; " + (n.tags || []).join("; "), body: plain(n.a), route: `#/answer/${n.id}`, w: 2.2, note: n });
  }
  function slug(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

  function query(q, userNotes) {
    const raw = String(q || "").trim();
    const res = { direct: [], calc: [], text: [], table: [], figure: [], example: [], gloss: [], note: [], user: [], section: [] };
    if (!raw) return res;
    // direct references: "table 7.2", "fig 2.6", "eq 4.4", "example 6.5", "section 6.4"
    const dm = raw.toLowerCase().match(/\b(table|tab|figure|fig|equation|eq|example|ex|section|sec)\.?\s*(\d{1,2}\.\d{1,2}[a-d]?)/);
    if (dm) {
      const kind = dm[1][0] === "t" ? "table" : dm[1][0] === "f" ? "figure" : dm[1].startsWith("eq") ? "eq" : dm[1].startsWith("ex") ? "example" : "section";
      const num = dm[2];
      if (kind === "eq") {
        for (const c of G.CALC.CALCS) if (c.eq.includes(num)) res.direct.push({ type: "calc", title: c.title, route: `#/c/${c.id}`, snippet: "Equation " + num });
        const loc = G.findEq && G.findEq(num);
        if (loc) res.direct.push({ type: "text", title: "Equation " + num + " in the book", route: `#/s/${loc.sec}`, anchor: loc.anchor, snippet: "Section " + loc.sec + ", page " + loc.page });
      } else if (kind === "section") {
        const s = G.secById && G.secById(num);
        if (s) res.direct.push({ type: "section", title: num + " " + s.title, route: `#/s/${num}` });
      } else {
        for (const d of docs) if (d.type === kind && d.num === num) res.direct.push({ type: d.type, title: d.title, route: d.route, anchor: d.anchor, snippet: d.tags, img: d.img });
        if (kind === "table") for (const c of G.CALC.CALCS) if ((c.tables || []).includes(num)) res.direct.push({ type: "calc", title: c.title, route: `#/c/${c.id}`, snippet: "Uses Table " + num });
      }
    }
    const qt = tokens(raw);
    const terms = new Map();
    for (const t of qt) terms.set(t, Math.max(terms.get(t) || 0, 1));
    for (const w of raw.toLowerCase().split(/[^a-z]+/)) {
      for (const e of (SYN[w] || SYN[stem(w)] || [])) for (const t of tokens(e)) if (!terms.has(t)) terms.set(t, 0.45);
    }
    const N = docs.length;
    const scores = new Map();
    const matched = new Map();
    for (const [t, qw] of terms) {
      let post = inv.get(t);
      // prefix match for longer partial words while typing
      if (!post && t.length >= 4 && !/^\d/.test(t)) {
        post = [];
        for (const [k, v] of inv) if (k.startsWith(t)) post = post.concat(v);
      }
      if (!post || !post.length) continue;
      const idf = Math.log(1 + N / post.length);
      for (const [id, w] of post) {
        const d = docs[id];
        const s = qw * idf * (w / (w + 1.2)) * d.w * (1 / Math.sqrt(d.len / 40 + 0.6));
        scores.set(id, (scores.get(id) || 0) + s);
        if (qw === 1) matched.set(id, (matched.get(id) || 0) + 1);
      }
    }
    const nq = [...terms.values()].filter(v => v === 1).length || 1;
    const ranked = [...scores.entries()].map(([id, s]) => {
      const cover = (matched.get(id) || 0) / nq;
      return [id, s * (0.35 + cover)];
    }).sort((a, b) => b[1] - a[1]);
    const seenSec = new Set();
    for (const [id, s] of ranked) {
      const d = docs[id];
      const hit = { type: d.type, title: d.title, route: d.route, anchor: d.anchor, score: s, snippet: snippet(d.body || d.tags || "", qt), img: d.img, doc: d };
      if (d.type === "text" || d.type === "section") {
        if (seenSec.has(d.sec)) continue;
        seenSec.add(d.sec);
        if (res.text.length < 8) res.text.push(hit);
      } else if (res[d.type] && res[d.type].length < (d.type === "calc" ? 8 : 6)) res[d.type].push(hit);
    }
    if (userNotes) {
      for (const n of userNotes) {
        const nt = tokens(n.text);
        const k = qt.filter(t => nt.includes(t)).length;
        if (k) res.user.push({ type: "user", title: n.title, route: n.route, snippet: snippet(n.text, qt), score: k });
      }
      res.user.sort((a, b) => b.score - a.score);
    }
    return res;
  }

  function snippet(text, qt) {
    text = plain(text);
    if (!text) return "";
    const low = text.toLowerCase();
    let best = 0, bestPos = 0;
    for (let i = 0; i < low.length; i += 40) {
      const win = low.slice(i, i + 220);
      let k = 0;
      for (const t of qt) if (t.length > 1 && win.includes(t)) k++;
      if (k > best) { best = k; bestPos = i; }
    }
    let s = text.slice(Math.max(0, bestPos - 20), bestPos + 220);
    if (bestPos > 20) s = "…" + s.replace(/^\S*\s/, "");
    if (bestPos + 220 < text.length) s = s.replace(/\s\S*$/, "") + "…";
    s = s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
    for (const t of qt) {
      if (t.length < 3 || /^\d/.test(t)) continue;
      s = s.replace(new RegExp("\\b(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "[a-z]*)", "gi"), "<mark>$1</mark>");
    }
    return s;
  }

  G.SEARCH = { build, query, tokens, docs, slug };
})(typeof window !== "undefined" ? window : globalThis);
