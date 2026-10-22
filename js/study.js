/* Study: self-test with the question bank. Spaced repetition (Leitner boxes) kept on this device. */
(function (G) {
  "use strict";
  const DAY = 86400000;
  const INTERVALS = [0, 1, 3, 7, 16, 35]; // days until the next review for boxes 0 to 5
  const TYPES = { recall: "Recall", concept: "Concept", calc: "Formula and calculation", figure: "Read a figure", table: "Read a table", scenario: "Grower scenario" };
  const esc = s => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  function load() { try { return JSON.parse(localStorage.getItem("ifg:study") || "{}"); } catch (e) { return {}; } }
  function save(d) { try { localStorage.setItem("ifg:study", JSON.stringify(d)); } catch (e) { } }
  let S = load(); // { cards: {id: {b, due, r, w, last}}, days: {"2026-10-22": n}, settings: {} }
  S.cards = S.cards || {}; S.days = S.days || {}; S.settings = S.settings || { n: 20, ch: [] };

  const Q = () => (G.QUIZ || []);
  const byId = () => { const m = {}; for (const q of Q()) m[q.id] = q; return m; };
  const today = () => new Date().toISOString().slice(0, 10);
  const card = id => S.cards[id];
  const isDue = (id, now) => { const c = card(id); return c && c.due <= now; };
  const mastered = id => { const c = card(id); return c && c.b >= 4; };

  function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  function poolFor(mode, chs) {
    let pool = Q().filter(q => !chs.length || chs.includes(q.ch));
    if (mode === "hard") pool = pool.filter(q => q.level === 3);
    else if (mode === "scenario") pool = pool.filter(q => q.type === "scenario");
    else if (mode === "calc") pool = pool.filter(q => q.type === "calc");
    else if (mode === "visual") pool = pool.filter(q => q.type === "figure" || q.type === "table");
    else if (mode === "recall") pool = pool.filter(q => q.type === "recall" || q.type === "concept");
    else if (mode === "mixed") pool = pool.filter(q => String(q.id).startsWith("x-"));
    else if (mode === "missed") pool = pool.filter(q => card(q.id) && card(q.id).w > 0 && card(q.id).b < 3);
    return pool;
  }
  function pick(mode, chs, n) {
    const now = Date.now();
    let pool = poolFor(mode, chs);
    if (!pool.length && chs.length) pool = poolFor(mode, []); // nothing in the ticked chapters: use the whole book
    if (mode === "review") {
      const due = shuffle(pool.filter(q => isDue(q.id, now))).sort((a, b) => card(a.id).b - card(b.id).b);
      const fresh = shuffle(pool.filter(q => !card(q.id))).sort((a, b) => a.level - b.level);
      return due.concat(fresh).slice(0, n);
    }
    // other modes: unseen and due first, then the rest
    const first = shuffle(pool.filter(q => !card(q.id) || isDue(q.id, now)));
    const rest = shuffle(pool.filter(q => card(q.id) && !isDue(q.id, now)));
    return first.concat(rest).slice(0, n);
  }

  function grade(id, ok) {
    const c = S.cards[id] || { b: 0, r: 0, w: 0 };
    if (ok) { c.b = Math.min(5, c.b + 1); c.r++; } else { c.b = 1; c.w++; }
    c.last = Date.now();
    c.due = ok ? Date.now() + INTERVALS[c.b] * DAY : Date.now() + 10 * 60000; // missed: back in 10 minutes
    S.cards[id] = c;
    const d = today(); S.days[d] = (S.days[d] || 0) + 1;
    save(S);
  }

  function streak() {
    let n = 0; const t = new Date();
    for (; ;) { const k = new Date(t - n * DAY).toISOString().slice(0, 10); if (S.days[k]) n++; else break; }
    return n;
  }

  // ---------- views ----------
  let H; // helpers from app.js
  function dashboard(main) {
    const all = Q(); const now = Date.now();
    if (!all.length) { main.innerHTML = `<div class="study"><h1>Study</h1><p class="empty">The question bank has not loaded. Check your connection once so it can be saved on this device.</p></div>`; return; }
    const seen = all.filter(q => card(q.id)).length;
    const mast = all.filter(q => mastered(q.id)).length;
    const due = all.filter(q => isDue(q.id, now)).length;
    const right = Object.values(S.cards).reduce((s, c) => s + c.r, 0), wrong = Object.values(S.cards).reduce((s, c) => s + c.w, 0);
    const chs = H.B.chapters.map(ch => {
      const qs = all.filter(q => q.ch === ch.num);
      return { ch, n: qs.length, seen: qs.filter(q => card(q.id)).length, m: qs.filter(q => mastered(q.id)).length, due: qs.filter(q => isDue(q.id, now)).length };
    }).filter(x => x.n);
    const sel = S.settings.ch || [];
    const nSel = S.settings.n || 20;
    const modes = [
      ["review", "Daily review", "Questions due for review, then new ones. Best way to remember."],
      ["all", "Practice", "A mix of every type from the chapters you pick."],
      ["scenario", "Grower scenarios", "Answer the way you would on a farm call."],
      ["mixed", "Whole-farm grower calls", "Problems that cross chapters: soil, ET, scheduling, system and pump together."],
      ["calc", "Formulas", "Work the equations with real numbers."],
      ["visual", "Figures and tables", "Read the book's charts and tables."],
      ["recall", "Terms and concepts", "Definitions, typical values, why things happen."],
      ["hard", "Hard questions", "Level 3 only."],
      ["missed", "My missed questions", "Questions you got wrong and have not mastered yet."],
    ];
    main.innerHTML = `<div class="study">
      <h1>Study</h1>
      <p class="wflead">${all.length.toLocaleString()} questions from the book. Answer, read the explanation, and the guide brings back what you miss until it sticks.</p>
      <div class="sstats">
        <div><b>${seen.toLocaleString()}</b><span>answered at least once</span></div>
        <div><b>${mast.toLocaleString()}</b><span>mastered</span></div>
        <div><b>${due.toLocaleString()}</b><span>due for review</span></div>
        <div><b>${right + wrong ? Math.round(100 * right / (right + wrong)) + "%" : "–"}</b><span>answers correct</span></div>
        <div><b>${streak()}</b><span>day streak</span></div>
      </div>
      <h2>Chapters</h2>
      <p class="calc-note">Tap a chapter to open its questions right away. Tick boxes only if you want the buttons under Start to mix several chapters. With nothing ticked they use the whole book.</p>
      <p class="sticked" id="sTicked"></p>
      <div class="schs">${chs.map(x => `<div class="sch"><label class="sck" title="Include in a mixed session"><input type="checkbox" value="${x.ch.num}"${sel.includes(x.ch.num) ? " checked" : ""}></label><a class="sgo" href="#/study/run?mode=all&ch=${x.ch.num}"><span class="n">${x.ch.num}</span><span class="t">${esc(x.ch.title)}<small>${x.n} questions, ${x.m} mastered${x.due ? ", " + x.due + " due" : ""}</small></span><span class="bar" aria-hidden="true"><i style="width:${Math.round(100 * x.m / x.n)}%"></i><em style="width:${Math.round(100 * (x.seen - x.m) / x.n)}%"></em></span><span class="sopen">Open ›</span></a></div>`).join("")}</div>
      <div class="slen"><span>Questions per session</span>${[10, 20, 50, 100].map(n => `<button class="chip" data-n="${n}" aria-pressed="${n === nSel}">${n}</button>`).join("")}</div>
      <h2>Start</h2>
      <div class="smodes">${modes.map(([m, t, d]) => `<button class="smode" data-mode="${m}"><b>${esc(t)}</b><span>${esc(d)}</span><i class="scount" data-c="${m}"></i></button>`).join("")}</div>
      <div class="btnrow" style="margin-top:20px"><button class="linkbtn" id="sExport">Export my progress</button><label class="linkbtn" style="cursor:pointer">Import progress<input type="file" id="sImport" accept="application/json" hidden></label><button class="linkbtn" id="sReset">Reset progress</button></div>
      <div id="sResetConfirm" hidden class="warnbox">Reset all study progress on this device? <button class="linkbtn" id="sResetYes">Yes, reset</button> <button class="linkbtn" id="sResetNo">Keep it</button></div>
      <p class="credit">Questions written for this guide from the book's content. Progress is saved on this device.</p></div>`;
    const counts = () => {
      const ticked = S.settings.ch || [];
      main.querySelectorAll("[data-c]").forEach(el => {
        const m = el.dataset.c; let n = poolFor(m, ticked).length, whole = false;
        if (!n && ticked.length) { n = poolFor(m, []).length; whole = true; }
        el.textContent = n ? n.toLocaleString() + " questions" + (ticked.length ? (whole ? ", none in your ticked chapters so it opens the whole book" : " in your ticked chapters") : "") : (m === "missed" ? "none missed yet" : "none left");
      });
      const box = main.querySelector("#sTicked");
      box.innerHTML = ticked.length ? `Ticked: chapter${ticked.length > 1 ? "s" : ""} ${ticked.sort((a, b) => a - b).join(", ")}. <button class="linkbtn" id="sClear">Clear ticks</button>` : "";
      const c = box.querySelector("#sClear"); if (c) c.onclick = () => { S.settings.ch = []; save(S); main.querySelectorAll(".sch input").forEach(x => x.checked = false); counts(); };
    };
    main.querySelectorAll(".sch input").forEach(cb => cb.onchange = () => { S.settings.ch = [...main.querySelectorAll(".sch input:checked")].map(x => +x.value); save(S); counts(); });
    counts();
    main.querySelectorAll("[data-n]").forEach(b => b.onclick = () => { S.settings.n = +b.dataset.n; save(S); main.querySelectorAll("[data-n]").forEach(x => x.setAttribute("aria-pressed", x === b)); });
    main.querySelectorAll("[data-mode]").forEach(b => b.onclick = () => { location.hash = `#/study/run?mode=${b.dataset.mode}`; });
    main.querySelector("#sExport").onclick = () => { const blob = new Blob([JSON.stringify({ app: "irrigation-field-guide-study", saved: new Date().toISOString(), S })], { type: "application/json" }); const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "field-guide-study-progress.json"; a.click(); };
    main.querySelector("#sImport").onchange = async e => { const f = e.target.files[0]; if (!f) return; try { const j = JSON.parse(await f.text()); if (j.S && j.S.cards) { S = j.S; save(S); dashboard(main); } } catch (err) { } };
    main.querySelector("#sReset").onclick = () => { main.querySelector("#sResetConfirm").hidden = false; };
    main.querySelector("#sResetNo").onclick = () => { main.querySelector("#sResetConfirm").hidden = true; };
    main.querySelector("#sResetYes").onclick = () => { S = { cards: {}, days: {}, settings: S.settings }; save(S); dashboard(main); };
    window.scrollTo(0, 0);
  }

  function run(main, params) {
    const mode = params.mode || "review";
    const chs = params.ch ? params.ch.split(",").map(Number) : (S.settings.ch || []);
    const n = +(params.n || S.settings.n || 20);
    const list = params.ids ? params.ids.split(",").map(id => byId()[id]).filter(Boolean) : pick(mode, chs, n);
    if (!list.length) {
      main.innerHTML = `<div class="study"><h1>Nothing to study here</h1><p>${mode === "missed" ? "You have no missed questions left. Good work." : mode === "review" ? "Nothing is due and every question has been seen. Try Practice or Hard questions." : "No questions match. Pick other chapters."}</p><p><a class="calcbtn" href="#/study">Back to Study</a></p></div>`;
      return;
    }
    const st = { i: 0, right: 0, log: [] };
    function show() {
      const q = list[st.i];
      const order = shuffle([0, 1, 2, 3].filter(k => q.opts[k] != null));
      const fig = q.fig && H.FIGLOC[q.fig], tab = q.table && H.TABLOC[q.table];
      main.innerHTML = `<div class="study run">
        <div class="sprog"><span>Question ${st.i + 1} of ${list.length}</span><span>${st.right} correct</span><a href="#/study">End session</a></div>
        <div class="sbarline"><i style="width:${Math.round(100 * st.i / list.length)}%"></i></div>
        <div class="qmeta"><span class="qtype t-${esc(q.type)}">${esc(TYPES[q.type] || q.type)}</span><span>Level ${q.level}</span><span>Chapter ${q.ch}, section ${esc(q.sec)}, page ${q.page}</span></div>
        <h1 class="qtext">${esc(q.q)}</h1>
        ${fig ? `<figure class="fig">${H.imgTag(fig.b.img, "Figure " + q.fig)}<figcaption>${fig.b.caption}</figcaption></figure>` : ""}
        ${tab ? `<figure class="tablefig"><figcaption style="margin:0 0 6px">${tab.b.caption}</figcaption>${H.imgTag(tab.b.img, "Table " + q.table)}</figure>` : ""}
        <div class="opts" role="group" aria-label="Answer choices">${order.map((k, j) => `<button class="opt" data-k="${k}"><span class="ol">${"ABCD"[j]}</span><span>${esc(q.opts[k])}</span></button>`).join("")}</div>
        <div class="sfeed" aria-live="polite"></div></div>`;
      const feed = main.querySelector(".sfeed");
      main.querySelectorAll(".opt").forEach(b => b.onclick = () => {
        if (main.querySelector(".opts").classList.contains("done")) return;
        const k = +b.dataset.k, ok = k === q.a;
        main.querySelector(".opts").classList.add("done");
        main.querySelectorAll(".opt").forEach(x => { const kk = +x.dataset.k; if (kk === q.a) x.classList.add("right"); else if (x === b) x.classList.add("wrong"); x.disabled = true; });
        grade(q.id, ok);
        if (ok) st.right++;
        st.log.push({ id: q.id, ok });
        const secOk = H.SEC[q.sec];
        const calc = q.calc && H.CALC.byId[q.calc];
        feed.innerHTML = `<div class="${ok ? "fok" : "fbad"}"><b>${ok ? "Correct." : "Not this time."}</b> ${esc(q.why)}</div>
          <div class="btnrow">${secOk ? `<a class="linkbtn" href="#/s/${esc(q.sec)}">Read section ${esc(q.sec)} (p. ${q.page})</a>` : ""}${calc ? `<a class="linkbtn" href="#/c/${esc(q.calc)}">Open the calculator</a>` : ""}${q.fig && H.FIGLOC[q.fig] ? `<a class="linkbtn" href="#/f/${esc(q.fig)}">Figure ${esc(q.fig)}</a>` : ""}${q.table && H.TABLOC[q.table] ? `<a class="linkbtn" href="#/t/${esc(q.table)}">Table ${esc(q.table)}</a>` : ""}</div>
          <button class="calcbtn snext" id="sNext">${st.i + 1 < list.length ? "Next question" : "See results"}</button>`;
        const nx = main.querySelector("#sNext");
        nx.focus({ preventScroll: true });
        nx.scrollIntoView({ block: "nearest", behavior: "smooth" });
        nx.onclick = () => { st.i++; if (st.i < list.length) { show(); window.scrollTo(0, 0); } else done(); };
      });
      document.onkeydown = e => {
        if (!main.querySelector(".study.run")) { document.onkeydown = null; return; }
        const m = { a: 0, b: 1, c: 2, d: 3, 1: 0, 2: 1, 3: 2, 4: 3 }[e.key.toLowerCase()];
        if (m !== undefined && !main.querySelector(".opts.done")) { const bs = main.querySelectorAll(".opt"); if (bs[m]) bs[m].click(); }
        else if (e.key === "Enter" && main.querySelector("#sNext") && document.activeElement !== main.querySelector("#sNext")) main.querySelector("#sNext").click();
      };
    }
    function done() {
      const missed = st.log.filter(x => !x.ok).map(x => byId()[x.id]);
      const pct = Math.round(100 * st.right / list.length);
      main.innerHTML = `<div class="study"><h1>${st.right} of ${list.length} correct</h1>
        <div class="sbig ${pct >= 80 ? "good" : pct >= 60 ? "mid" : "low"}">${pct}%</div>
        <p>${pct >= 80 ? "Strong session. These will come back at longer intervals." : pct >= 60 ? "Good progress. The ones you missed come back soon." : "Keep going. Missed questions come back in about 10 minutes, then again until they stick."}</p>
        ${missed.length ? `<h2>Review what you missed</h2>${missed.map(q => `<div class="hit"><div class="ht">${esc(q.q)}</div><div class="hs"><b>Answer:</b> ${esc(q.opts[q.a])}. ${esc(q.why)}</div><div class="btnrow"><a class="linkbtn" href="#/s/${esc(q.sec)}">Section ${esc(q.sec)}</a>${q.calc && H.CALC.byId[q.calc] ? `<a class="linkbtn" href="#/c/${esc(q.calc)}">Calculator</a>` : ""}</div></div>`).join("")}
          <p><a class="calcbtn" href="#/study/run?ids=${missed.map(q => q.id).join(",")}">Try the missed ones again</a></p>` : ""}
        <div class="btnrow"><a class="linkbtn" href="#/study/run?mode=${esc(mode)}">Another session</a><a class="linkbtn" href="#/study">Back to Study</a></div></div>`;
      window.scrollTo(0, 0);
    }
    show();
    window.scrollTo(0, 0);
  }

  G.STUDY = {
    view(main, parts, params, helpers) { H = helpers; S = load(); S.cards = S.cards || {}; S.days = S.days || {}; S.settings = S.settings || { n: 20, ch: [] }; if (parts[1] === "run") run(main, params); else dashboard(main); },
    counts() { return { total: Q().length, due: Q().filter(q => isDue(q.id, Date.now())).length }; },
  };
})(window);
