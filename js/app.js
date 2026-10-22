/* Irrigation Field Guide: router and views. */
(function () {
  "use strict";
  const B = window.BOOK, CALC = window.CALC, U = window.UNITS, TAB = window.TAB || {};
  const $ = (s, el = document) => el.querySelector(s);
  const main = $("#main"), side = $("#side");
  const esc = s => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const plain = h => String(h || "").replace(/<[^>]+>/g, "");

  // ---------- storage (works without it) ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem("ifg:" + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("ifg:" + k, JSON.stringify(v)); } catch (e) { } },
    keys(prefix) { const out = []; try { for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k.startsWith("ifg:" + prefix)) out.push(k.slice(4)); } } catch (e) { } return out; },
    del(k) { try { localStorage.removeItem("ifg:" + k); } catch (e) { } },
  };

  // ---------- indexes into the book ----------
  const SECS = [], SEC = {};
  for (const ch of B.chapters) for (const s of ch.sections) { s.ch = ch; SECS.push(s); SEC[s.id] = s; }
  const EQLOC = {}, TABLOC = {}, FIGLOC = {}, EXLOC = {};
  for (const s of SECS) s.blocks.forEach((b, i) => {
    if (b.t === "eq") for (const n of b.nums) if (!EQLOC[n]) EQLOC[n] = { sec: s.id, anchor: "b" + i, page: b.page, img: b.img };
    if (b.t === "table") TABLOC[b.num] = { sec: s.id, b, page: b.page };
    if (b.t === "fig") FIGLOC[b.num] = { sec: s.id, b, page: b.page };
    if (b.t === "ex" && b.label) EXLOC[b.label] = { sec: s.id, b, page: b.page };
  });
  window.findEq = n => EQLOC[n];
  window.secById = id => SEC[id];
  const calcsForEq = n => CALC.CALCS.filter(c => c.eq.includes(n));
  const calcsForTable = n => CALC.CALCS.filter(c => (c.tables || []).includes(n));
  const calcsForFig = n => CALC.CALCS.filter(c => (c.figs || []).includes(n) || (((window.CALC_USE2 || {})[c.id] || {}).figs || []).includes(n));
  const calcsForEx = lab => CALC.CALCS.filter(c => (c.examples || []).some(e => new RegExp("\\b" + lab.replace(".", "\\.") + "\\b").test(e.ref)));

  // ---------- field use notes and connections ----------
  const USE = window.CALC_USE || {};
  const USE2 = window.CALC_USE2 || {};
  const WF = window.WORKFLOW || { tracks: [] };
  const firstSentence = t => { const m = String(t || "").match(/^.*?[.!?](\s|$)/); return m ? m[0].trim() : String(t || ""); };
  // links in both directions: if A says it feeds B, B also lists A as a source
  const LINKS = {};
  const linkOf = id => (LINKS[id] = LINKS[id] || { from: new Map(), to: new Map() });
  for (const [id, u] of Object.entries(USE)) {
    if (!CALC.byId[id]) continue;
    for (const [o, why] of (u.from || [])) if (CALC.byId[o] && o !== id) { if (!linkOf(id).from.has(o)) linkOf(id).from.set(o, why); if (!linkOf(o).to.has(id)) linkOf(o).to.set(id, why); }
    for (const [o, why] of (u.to || [])) if (CALC.byId[o] && o !== id) { if (!linkOf(id).to.has(o)) linkOf(id).to.set(o, why); if (!linkOf(o).from.has(id)) linkOf(o).from.set(id, why); }
  }
  // where each calculator sits in the workflow
  const PLACES = {};
  for (const t of WF.tracks) for (const st of t.stages) st.calcs.forEach((id, k) => (PLACES[id] = PLACES[id] || []).push({ t, st, k }));
  for (const c of CALC.CALCS) { const u = USE[c.id], u2 = USE2[c.id]; if (u) c.tags = c.tags.concat([u.ask || ""]); if (u2 && u2.qa) c.tags = c.tags.concat(u2.qa.map(x => x.q)); }

  window.SEARCH.build();

  const CREDIT = `Book text, figures and tables: Eisenhauer, D. E., Martin, D. L., Heeren, D. M., &amp; Hoffman, G. J. (2021). <i>Irrigation Systems Management</i>. ASABE. <a href="https://doi.org/10.13031/ISM.2021">doi:10.13031/ISM.2021</a>. Licensed <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a>, reproduced unchanged for non-commercial use. Calculators, search and field notes were added for this guide and are not part of the book. Free PDF from <a href="https://asabe.org/ISM">asabe.org/ISM</a>.`;

  // ---------- theme ----------
  const themeBtn = $("#themeBtn");
  function applyTheme(t) { if (t) document.documentElement.dataset.theme = t; else delete document.documentElement.dataset.theme; }
  applyTheme(store.get("theme", null));
  themeBtn.onclick = () => {
    const dark = document.documentElement.dataset.theme ? document.documentElement.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    const t = dark ? "light" : "dark"; applyTheme(t); store.set("theme", t);
  };

  // ---------- side contents ----------
  function buildSide() {
    let h = `<div class="tools"><h2>Guide</h2><a href="#/" data-r="home">Home</a><a href="#/workflow" data-r="workflow">Workflow</a><a href="#/workflow/guide" data-r="workflow/guide">How it all connects</a><a href="#/study" data-r="study">Study: test yourself</a><a href="#/calc" data-r="calc">All calculators</a><a href="#/units" data-r="units">Unit converter</a><a href="#/tables" data-r="tables">Tables</a><a href="#/figures" data-r="figures">Figures</a><a href="#/glossary" data-r="glossary">Glossary</a><a href="#/notes" data-r="notes">My notes</a></div><h2>Book chapters</h2>`;
    for (const ch of B.chapters) {
      h += `<details data-ch="${ch.num}"><summary><span class="n">${ch.num}</span><span>${esc(ch.title)}</span></summary>`;
      for (const s of ch.sections) h += `<a href="#/s/${s.id}" data-r="s/${s.id}">${s.num ? `<span class="secnum">${s.num}</span>` : ""}${esc(s.title)}</a>`;
      h += `</details>`;
    }
    side.innerHTML = h;
  }
  buildSide();
  const menuBtn = $("#menuBtn");
  menuBtn.onclick = () => { const o = side.classList.toggle("open"); menuBtn.setAttribute("aria-expanded", o); };
  side.addEventListener("click", e => { if (e.target.closest("a")) { side.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); } });
  document.addEventListener("click", e => {
    if (side.classList.contains("open") && !e.target.closest("#side") && !e.target.closest("#menuBtn")) { side.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });
  function markSide(r) {
    side.querySelectorAll("a.on").forEach(a => a.classList.remove("on"));
    const a = side.querySelector(`a[data-r="${CSS.escape(r)}"]`);
    if (a) { a.classList.add("on"); const d = a.closest("details"); if (d) d.open = true; }
    document.querySelectorAll(".tabs a").forEach(t => t.classList.toggle("on", r === t.dataset.tab || (t.dataset.tab === "book" && (r.startsWith("s/") || r === "book")) || (t.dataset.tab === "calc" && r.startsWith("c/")) || (t.dataset.tab === "workflow" && r.startsWith("workflow")) || (t.dataset.tab === "study" && r.startsWith("study"))));
  }

  // ---------- search box ----------
  const qInput = $("#q");
  $("#searchForm").onsubmit = e => { e.preventDefault(); const q = qInput.value.trim(); if (q) go("#/search/" + encodeURIComponent(q)); };
  let typeTimer;
  qInput.addEventListener("input", () => {
    clearTimeout(typeTimer);
    const q = qInput.value.trim();
    if (q.length < 2) return;
    typeTimer = setTimeout(() => { history.replaceState(null, "", "#/search/" + encodeURIComponent(q)); route(); }, 260);
  });
  function go(h) { if (location.hash === h) route(); else location.hash = h; }

  // ---------- lightbox ----------
  const lb = $("#lightbox"), lbImg = $("#lbImg"), lbStage = $("#lbStage");
  let lbScale = 1, lbNatural = 0;
  function openLB(src, title) {
    lbImg.src = src; $("#lbTitle").textContent = title || "";
    lb.hidden = false; lbScale = 1;
    lbImg.onload = () => { lbNatural = lbImg.naturalWidth; fitLB(); };
    $("#lbClose").focus();
  }
  function fitLB() {
    const w = lbStage.clientWidth;
    const base = Math.min(lbNatural, w * 0.98);
    lbImg.style.width = (base * lbScale) + "px";
  }
  $("#lbIn").onclick = () => { lbScale = Math.min(lbScale * 1.4, 6); fitLB(); };
  $("#lbOut").onclick = () => { lbScale = Math.max(lbScale / 1.4, 0.5); fitLB(); };
  $("#lbClose").onclick = () => { lb.hidden = true; lbImg.src = ""; };
  lb.addEventListener("keydown", e => { if (e.key === "Escape") $("#lbClose").click(); });
  main.addEventListener("click", e => {
    const img = e.target.closest("img[data-zoom]");
    if (img) { openLB(img.dataset.zoom || img.src, img.alt); }
  });

  // ---------- helpers ----------
  // crops were rendered at these dpi; show them about 1.3 times the printed size
  const DPI = src => /\/eq-/.test(src) ? 220 : /\/tab-/.test(src) ? 220 : /\/ex-/.test(src) ? 210 : /\/units-/.test(src) ? 170 : 200;
  const dispW = img => Math.round(img.w / DPI(img.src) * 72 * 1.3);
  const imgTag = (img, alt, extra = "") => `<img src="${img.src}" width="${img.w}" height="${img.h}" style="width:${dispW(img)}px" loading="lazy" alt="${esc(alt)}" data-zoom="${img.src}" ${extra}>`;
  function eqImgW(img) { return dispW(img); }
  const calcIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M8 8h8M8 13h2M13 13h3M8 17h2M13 17h3" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>`;
  function pageLink(p) { return `<span class="pg">p. ${p}</span>`; }

  function noteBox(key, title) {
    const v = store.get("note:" + key, "");
    return `<div class="notebox"><h4>My notes<span id="ns-${esc(key)}">${v ? "Saved on this device" : "Saved on this device as you type"}</span></h4><textarea data-note="${esc(key)}" data-title="${esc(title)}" placeholder="Field observations, farmer names, local values...">${esc(v)}</textarea></div>`;
  }
  main.addEventListener("input", e => {
    const t = e.target.closest("textarea[data-note]");
    if (!t) return;
    const k = t.dataset.note;
    if (t.value.trim()) { store.set("note:" + k, t.value); store.set("notemeta:" + k, { title: t.dataset.title, route: location.hash, t: Date.now() }); }
    else { store.del("note:" + k); store.del("notemeta:" + k); }
    const s = document.getElementById("ns-" + k); if (s) s.textContent = "Saved";
  });
  function userNotes() {
    return store.keys("note:").map(k => { const key = k.slice(5); const m = store.get("notemeta:" + key, {}); return { key, text: store.get(k, ""), title: m.title || key, route: m.route || "#/notes", t: m.t || 0 }; });
  }

  // ---------- views ----------
  function viewHome() {
    const picks = [
      ["eq-13.7", "Pivot timer setting", "Percent timer for a target depth"],
      ["run-time", "Depth, flow and time", "Q × t = A × d for any unknown"],
      ["tab-2.3", "Soil water by texture", "Field capacity, wilting point, AWC"],
      ["eq-7.3", "Salt and crop yield", "Relative yield from soil EC"],
      ["eq-6.10-6.11", "Latest date to irrigate", "Days until allowable depletion"],
      ["eq-8.11", "Pipe friction loss", "Hazen-Williams, psi per 100 ft"],
      ["eq-8.17-8.19", "Pump horsepower", "Water and brake horsepower"],
      ["eq-5.3", "Uniformity from catch cans", "Christiansen CU and DU"],
    ].map(([id, t, s]) => CALC.byId[id] ? `<a href="#/c/${id}"><b>${esc(t)}</b><span>${esc(s)}</span></a>` : "").join("");
    const recent = store.get("recent", []).filter(id => CALC.byId[id]).slice(0, 6);
    main.innerHTML = `<section class="hero">
      <h1>Irrigation Systems Management, in the field</h1>
      <p class="sub">The full ASABE textbook with every table and figure, a calculator for every formula, and search that understands how farmers ask.</p>
      ${recent.length ? `<h2>Recently used</h2><div class="quick">${recent.map(id => `<a href="#/c/${id}"><b>${esc(CALC.byId[id].title)}</b><span>${CALC.byId[id].eq.length ? "Eq. " + CALC.byId[id].eq.join(", ") : "Lookup"}</span></a>`).join("")}</div>` : ""}
      ${window.QUIZ && QUIZ.length ? `<a class="wfbanner study" href="#/study"><b>Study: ${QUIZ.length.toLocaleString()} questions</b><span>${window.STUDY.counts().due ? window.STUDY.counts().due + " due for review today. " : ""}Test yourself on the book, chapter by chapter.</span></a>` : ""}
      <a class="wfbanner" href="#/workflow"><b>Start with the workflow</b><span>Soil, crop water use, scheduling, system checks and design, with every calculator in order and connected.</span></a>
      <div class="quick">${(window.WORKFLOW ? WORKFLOW.tracks : []).map(t => `<a href="#/workflow/${t.id}"><b>${esc(t.title)}</b><span>${esc(t.sub)}</span></a>`).join("")}</div>
      <h2>Quick calculators</h2><div class="quick">${picks}</div>
      <h2>Chapters</h2>
      <div class="chapters">${B.chapters.map(ch => `<a href="#/s/${ch.sections[0].id}"><span class="n">${ch.num}</span><span>${esc(ch.title)}</span></a>`).join("")}</div>
      <p class="credit">${CREDIT}</p></section>`;
  }

  function viewBook() {
    main.innerHTML = `<div class="reader"><h1>The book</h1><p>${esc(B.title)}, ${esc(B.authors)}. ${B.publisher}, ${B.year}.</p>
      ${B.chapters.map(ch => `<h2><span class="secnum">${ch.num}</span>${esc(ch.title)}</h2><ul class="clist">${ch.sections.map(s => `<li><a href="#/s/${s.id}"><span class="eqn">${s.num || ""}</span><span class="t">${esc(s.title)}<small>page ${s.page}</small></span></a></li>`).join("")}</ul>`).join("")}
      <h2>Front matter</h2><ul class="clist"><li><a href="#/units"><span class="eqn">xxi</span><span class="t">Common unit conversions for irrigation</span></a></li><li><a href="#/glossary"><span class="eqn">339</span><span class="t">Glossary</span></a></li></ul>
      <p class="credit">${CREDIT}</p></div>`;
  }

  function renderBlock(b, i, s) {
    switch (b.t) {
      case "p": return `<p class="bk" id="b${i}">${b.html}</p>`;
      case "q": return `<p class="q" id="b${i}">${b.html}</p>`;
      case "ref": return `<p class="ref" id="b${i}">${b.html}</p>`;
      case "li": return `<ul class="bul" id="b${i}"><li>${b.html.replace(/^\s*•\s*/, "")}</li></ul>`;
      case "h3": return `<h3 id="b${i}">${b.html}</h3>`;
      case "defs": return `<div class="defs" id="b${i}"><span class="where">where:</span>${b.rows.map(r => `<div>${r}</div>`).join("")}</div>`;
      case "eq": {
        const cs = [...new Set(b.nums.flatMap(n => calcsForEq(n)))];
        return `<figure class="eq" id="b${i}"><div class="eqrow"><img src="${b.img.src}" style="width:${eqImgW(b.img)}px" alt="Equation ${esc(b.nums.join(", "))}: ${esc(b.text)}" data-zoom="${b.img.src}" loading="lazy">
          ${cs.map(c => `<a class="calcbtn" href="#/c/${c.id}">${calcIcon}Calculate${b.nums.length ? " " + esc(b.nums.join(", ")) : ""}</a>`).join("")}</div></figure>`;
      }
      case "fig": {
        const cs = calcsForFig(b.num);
        return `<figure class="fig" id="fig-${b.num}">${imgTag(b.img, "Figure " + b.num)}<figcaption>${b.caption} ${pageLink(b.page)} <a class="pg" href="#/f/${b.num}">All mentions</a></figcaption>${cs.length ? `<div class="btnrow">${cs.map(c => `<a class="calcbtn" href="#/c/${c.id}">${calcIcon}${esc(c.title)}</a>`).join("")}</div>` : ""}</figure>`;
      }
      case "table": {
        const cs = calcsForTable(b.num);
        return `<figure class="tablefig" id="tab-${b.num}"><figcaption style="margin:0 0 6px">${b.caption} ${pageLink(b.page)} <a class="pg" href="#/t/${b.num}">All mentions</a></figcaption>${imgTag(b.img, "Table " + b.num)}${cs.length ? `<div class="btnrow">${cs.map(c => `<a class="calcbtn" href="#/c/${c.id}">${calcIcon}${esc(c.title)}</a>`).join("")}</div>` : ""}</figure>`;
      }
      case "ex": {
        const cs = b.label ? calcsForEx(b.label) : [];
        const imgs = [b.img].concat(b.more || []);
        return `<details class="ex" id="ex-${b.label || i}"><summary>Example ${esc(b.label)} <span class="pg">p. ${b.page}</span></summary><div class="exbody">${imgs.map(im => imgTag(im, "Example " + b.label)).join("")}${cs.length ? `<div class="btnrow">${cs.slice(0, 4).map(c => `<a class="linkbtn" href="#/c/${c.id}?ex=${encodeURIComponent(b.label)}">Work it in: ${esc(c.title)}</a>`).join("")}</div>` : ""}</div></details>`;
      }
    }
    return "";
  }

  function viewSection(id, anchor) {
    const s = SEC[id];
    if (!s) return viewMissing();
    const i = SECS.indexOf(s), prev = SECS[i - 1], next = SECS[i + 1];
    main.innerHTML = `<article class="reader">
      <div class="crumbs"><a href="#/book">Book</a> › Chapter ${s.ch.num} ${esc(s.ch.title)}</div>
      <h1>${s.num ? `<span class="secnum">${s.num}</span>` : ""}${esc(s.title)}</h1>
      <div class="pg" style="margin:-6px 0 14px">Starts on page ${s.page}</div>
      ${s.blocks.map((b, k) => renderBlock(b, k, s)).join("\n")}
      ${noteBox("s:" + s.id, (s.num ? s.num + " " : "") + s.title)}
      <nav class="secnav">${prev ? `<a href="#/s/${prev.id}">‹ ${prev.num ? prev.num + " " : ""}${esc(prev.title)}</a>` : ""}${next ? `<a class="r" href="#/s/${next.id}">${next.num ? next.num + " " : ""}${esc(next.title)} ›</a>` : ""}</nav>
      <p class="credit">${CREDIT}</p></article>`;
    if (anchor) {
      const el = document.getElementById(anchor);
      if (el) { if (el.tagName === "DETAILS") el.open = true; setTimeout(() => el.scrollIntoView({ block: "start" }), 30); el.style.scrollMarginTop = "70px"; }
    } else window.scrollTo(0, 0);
  }

  // ----- calculators -----
  function fmt(x, dp) {
    if (typeof x !== "number") return esc(x);
    if (!isFinite(x)) return "–";
    const a = Math.abs(x);
    if (a !== 0 && (a >= 1e7 || a < 1e-4)) return x.toExponential(3);
    let d = dp;
    if (a >= 1000) d = Math.min(dp, 1);
    if (a >= 100000) d = 0;
    const s = x.toFixed(d);
    return Number(s).toLocaleString(undefined, { maximumFractionDigits: d, minimumFractionDigits: 0 });
  }
  function unitOptions(dim, sel) { return U.unitsOf(dim).map(u => `<option${u === sel ? " selected" : ""}>${esc(u)}</option>`).join(""); }

  function viewCalc(id, params) {
    const c = CALC.byId[id];
    if (!c) return viewMissing();
    const rec = store.get("recent", []).filter(x => x !== id); rec.unshift(id); store.set("recent", rec.slice(0, 12));
    const saved = store.get("calc:" + id, {});
    // state: values (in display unit), units
    const st = { v: {}, u: {}, ou: {}, solve: null, known: c.outputs[0] && c.outputs[0].k, target: null };
    for (const inp of c.inputs) { st.u[inp.k] = (saved.u && saved.u[inp.k]) || inp.u; st.v[inp.k] = saved.v && saved.v[inp.k] !== undefined ? saved.v[inp.k] : inp.v; }
    for (const o of c.outputs) st.ou[o.k] = (saved.ou && saved.ou[o.k]) || o.u;
    if (params && params.ex) {
      const ex = (c.examples || []).find(e => e.ref.includes(params.ex));
      if (ex) loadExample(ex);
    }
    function loadExample(ex) {
      for (const inp of c.inputs) { st.u[inp.k] = inp.u; st.v[inp.k] = inp.v; }
      for (const [k, val] of Object.entries(ex.in)) st.v[k] = val;
      st.solve = null;
    }
    const eqImgs = c.eq.map(n => EQLOC[n]).filter(Boolean).filter((x, k, a) => a.findIndex(y => y.img.src === x.img.src) === k);
    const numericInputs = c.inputs.filter(i => i.type === "num");
    const canSolve = c.outputs.length && numericInputs.length && !c.noSolve && c.outputs.some(o => !o.text);
    const exs = c.examples || [];
    const tbls = (c.tables || []).map(t => TABLOC[t] ? `<a href="#/s/${TABLOC[t].sec}?a=tab-${t}">Table ${t}</a>` : "").join("");
    const figs = (c.figs || []).map(t => FIGLOC[t] ? `<a href="#/s/${FIGLOC[t].sec}?a=fig-${t}">Figure ${t}</a>` : "").join("");
    const secLink = SEC[c.sec] ? `<a href="#/s/${c.sec}${c.eq[0] && EQLOC[c.eq[0]] ? "?a=" + EQLOC[c.eq[0]].anchor : ""}">Read Section ${c.sec} ${esc(SEC[c.sec].title)} (p. ${c.page})</a>` : "";
    main.innerHTML = `<div class="calcwrap">
      <div class="crumbs"><a href="#/calc">Calculators</a> › Chapter ${c.ch} ${esc((B.chapters[c.ch - 1] || {}).title || "")}</div>
      <div class="calc-head"><h1>${esc(c.title)}</h1>
      <p>${c.eq.length ? (c.eq.length > 1 ? "Equations " : "Equation ") + c.eq.join(", ") + ", " : ""}page ${c.page}</p></div>
      ${eqImgs.length ? `<div class="formula">${eqImgs.map(x => `<img src="${x.img.src}" alt="Equation from the book" data-zoom="${x.img.src}" style="width:${eqImgW(x.img)}px">`).join("")}</div>` : ""}
      ${renderPlace(c)}
      ${renderUse(c)}
      ${c.note ? `<p class="calc-note">${c.note}</p>` : ""}
      ${canSolve ? `<div class="solvebar" id="solvebar"></div>` : ""}
      <div class="fields" id="fields"></div>
      <div class="readout" id="readout" aria-live="polite"></div>
      ${exs.length ? `<div class="exrow">Book examples: ${exs.map((e, k) => `<button class="linkbtn" data-ex="${k}">${esc(e.ref)}${e.label ? " (" + esc(e.label) + ")" : ""}</button>`).join("")}<button class="linkbtn" id="resetBtn">Reset</button></div>` : `<div class="exrow"><button class="linkbtn" id="resetBtn">Reset</button></div>`}
      ${renderQA(c)}
      ${renderFigs(c)}
      ${renderLinks(c)}
      <div class="related">${secLink}${tbls}${figs}</div>
      ${renderCalcTables(c)}
      ${noteBox("c:" + c.id, c.title)}
      <p class="credit">${CREDIT}</p></div>`;

    const fieldsEl = $("#fields"), readEl = $("#readout"), solveEl = $("#solvebar");
    function drawSolve() {
      if (!solveEl) return;
      const opts = [{ k: null, label: c.outputs.filter(o => !o.text).map(o => o.label).join(", ") }].concat(numericInputs.map(i => ({ k: i.k, label: i.label })));
      solveEl.innerHTML = `<span>Solve for</span>` + opts.map(o => `<button class="chip" aria-pressed="${st.solve === o.k}" data-solve="${o.k === null ? "" : o.k}">${o.k === null ? "Result" : esc(o.label.length > 34 ? (c.inputs.find(i => i.k === o.k).sym ? plain(c.inputs.find(i => i.k === o.k).sym) : o.label.slice(0, 32) + "…") : o.label)}</button>`).join("");
      if (st.solve && c.outputs.filter(o => !o.text).length > 1) {
        solveEl.innerHTML += `<label style="margin-left:6px">given <select id="knownSel">${c.outputs.filter(o => !o.text).map(o => `<option value="${o.k}"${o.k === st.known ? " selected" : ""}>${esc(o.label)}</option>`).join("")}</select></label>`;
      }
    }
    function drawFields() {
      let h = "";
      if (st.solve) {
        const o = c.outputs.find(x => x.k === st.known);
        if (st.target === null) {
          // start from the current result
          const r = compute(true);
          st.target = r && typeof r[o.k] === "number" && isFinite(r[o.k]) ? +U.convert(o.dim, r[o.k], o.u, st.ou[o.k]).toPrecision(6) : 1;
        }
        h += `<div class="field target"><label for="f-target"><span class="sym">${o.sym || ""}</span>${esc(o.label)} (known)</label>
          <input id="f-target" type="text" inputmode="decimal" value="${esc(st.target)}"><select class="u" data-ou="${o.k}" aria-label="unit">${unitOptions(o.dim, st.ou[o.k])}</select></div>`;
      }
      for (const inp of c.inputs) {
        const id = "f-" + inp.k;
        const help = inp.help ? `<span class="help">${inp.help}</span>` : "";
        if (inp.type === "sel") {
          h += `<div class="field wide"><label for="${id}">${inp.sym ? `<span class="sym">${inp.sym}</span>` : ""}${esc(inp.label)}${help}</label><select id="${id}" data-k="${inp.k}">${inp.opts.map(([lab, val]) => `<option value="${esc(JSON.stringify(val))}"${JSON.stringify(val) === JSON.stringify(st.v[inp.k]) ? " selected" : ""}>${esc(lab)}</option>`).join("")}</select></div>`;
        } else if (inp.type === "list") {
          h += `<div class="field wide"><label for="${id}">${inp.sym ? `<span class="sym">${inp.sym}</span>` : ""}${esc(inp.label)}${help}</label><textarea id="${id}" data-k="${inp.k}" rows="2">${esc(st.v[inp.k])}</textarea></div>`;
        } else {
          const unk = st.solve === inp.k;
          h += `<div class="field${unk ? " unknown" : ""}"><label for="${id}">${inp.sym ? `<span class="sym">${inp.sym}</span>` : ""}${esc(inp.label)}${unk ? " (solving)" : ""}${help}</label>
            <input id="${id}" data-k="${inp.k}" type="text" inputmode="decimal" value="${esc(st.v[inp.k])}"${unk ? " readonly" : ""}>
            ${inp.dim === "none" || inp.dim === "count" ? `<span class="pg">${inp.dim === "count" ? "number" : "no units"}</span>` : `<select class="u" data-u="${inp.k}" aria-label="unit for ${esc(inp.label)}">${unitOptions(inp.dim, st.u[inp.k])}</select>`}</div>`;
        }
      }
      fieldsEl.innerHTML = h;
    }
    function inputsInFormulaUnits() {
      const v = {};
      for (const inp of c.inputs) {
        let x = st.v[inp.k];
        if (inp.type === "num") {
          x = parseFloat(String(x).replace(/,/g, ""));
          if (!isFinite(x)) return { bad: inp };
          x = U.convert(inp.dim, x, st.u[inp.k], inp.u);
        }
        v[inp.k] = x;
      }
      return { v };
    }
    function compute(quiet) {
      const r = inputsInFormulaUnits();
      if (r.bad) return null;
      try { return c.f(Object.assign({}, r.v)); } catch (e) { if (!quiet) console.error(e); return null; }
    }
    function drawReadout() {
      let warn = "";
      if (st.solve) {
        const o = c.outputs.find(x => x.k === st.known);
        const tgt = parseFloat(String(st.target).replace(/,/g, ""));
        const r = inputsInFormulaUnits();
        if (!r.bad && isFinite(tgt)) {
          const tf = U.convert(o.dim, tgt, st.ou[o.k], o.u);
          const x = CALC.solveFor(c, r.v, st.solve, o.k, tf);
          const inp = c.inputs.find(i => i.k === st.solve);
          if (isFinite(x)) { st.v[st.solve] = +U.convert(inp.dim, x, inp.u, st.u[inp.k]).toPrecision(6); const el = $("#f-" + st.solve); if (el) el.value = st.v[st.solve]; }
          else warn = "No value of " + esc(inp.label) + " gives that result with these inputs.";
        }
      }
      const r = compute();
      const bad = inputsInFormulaUnits().bad;
      let h = "";
      if (bad) h += `<div class="warn">Enter a number for ${esc(bad.label)}.</div>`;
      if (warn) h += `<div class="warn">${warn}</div>`;
      if (r && !bad) {
        if (r._warn) h += `<div class="warn">${esc(r._warn)}</div>`;
        const rows = st.solve ? [c.inputs.find(i => i.k === st.solve)].map(i => ({ k: i.k, label: i.label, sym: i.sym, dim: i.dim, u: st.u[i.k], val: parseFloat(st.v[i.k]), dp: 4, isInput: true })).concat(c.outputs.filter(o => o.k !== st.known)) : c.outputs;
        for (const o of rows) {
          let val = o.isInput ? o.val : r[o.k];
          if (o.text || typeof val === "string") { h += `<div class="row textrow"><div class="lab">${o.sym ? `<span class="sym">${o.sym}</span>` : ""}${esc(o.label)}</div><div class="val txt">${esc(val)}</div></div>`; continue; }
          const show = o.isInput ? val : (typeof val === "number" ? U.convert(o.dim, val, o.u, st.ou[o.k]) : val);
          const uu = o.isInput ? o.u : st.ou[o.k];
          h += `<div class="row"><div class="lab">${o.sym ? `<span class="sym">${o.sym}</span>` : ""}${esc(o.label)}</div><div class="val">${fmt(show, o.dp === undefined ? 3 : Math.max(o.dp, 2))}</div>${o.dim === "none" || o.dim === "count" || o.isInput ? `<span></span>` : `<select data-ou="${o.k}" aria-label="unit for ${esc(o.label)}">${unitOptions(o.dim, uu)}</select>`}</div>`;
        }
      }
      readEl.innerHTML = h;
      store.set("calc:" + id, { v: st.v, u: st.u, ou: st.ou });
    }
    function redraw() { drawSolve(); drawFields(); drawReadout(); }
    redraw();
    main.querySelector(".calcwrap").addEventListener("input", e => {
      const t = e.target;
      if (t.id === "f-target") { st.target = t.value; drawReadout(); return; }
      if (t.dataset.k) {
        const inp = c.inputs.find(i => i.k === t.dataset.k);
        st.v[inp.k] = inp.type === "sel" ? JSON.parse(t.value) : t.value;
        drawReadout();
      }
    });
    main.querySelector(".calcwrap").addEventListener("change", e => {
      const t = e.target;
      if (t.dataset.u) {
        const inp = c.inputs.find(i => i.k === t.dataset.u);
        const x = parseFloat(String(st.v[inp.k]).replace(/,/g, ""));
        if (isFinite(x)) st.v[inp.k] = +U.convert(inp.dim, x, st.u[inp.k], t.value).toPrecision(6);
        st.u[inp.k] = t.value; drawFields(); drawReadout();
      } else if (t.dataset.ou) {
        const o = c.outputs.find(x => x.k === t.dataset.ou);
        if (st.solve && o.k === st.known) { const x = parseFloat(st.target); if (isFinite(x)) st.target = +U.convert(o.dim, x, st.ou[o.k], t.value).toPrecision(6); st.ou[o.k] = t.value; drawFields(); }
        else st.ou[o.k] = t.value;
        drawReadout();
      } else if (t.id === "knownSel") { st.known = t.value; st.target = null; drawFields(); drawReadout(); }
    });
    main.querySelector(".calcwrap").addEventListener("click", e => {
      const s = e.target.closest("[data-solve]");
      if (s) { st.solve = s.dataset.solve || null; st.target = null; st.known = st.known || c.outputs[0].k; if (st.solve && c.outputs.find(o => o.k === st.known).text) st.known = c.outputs.find(o => !o.text).k; redraw(); return; }
      const ex = e.target.closest("[data-ex]");
      if (ex) { loadExample(exs[+ex.dataset.ex]); for (const o of c.outputs) st.ou[o.k] = o.u; redraw(); return; }
      if (e.target.id === "resetBtn") { for (const inp of c.inputs) { st.u[inp.k] = inp.u; st.v[inp.k] = inp.v; } for (const o of c.outputs) st.ou[o.k] = o.u; st.solve = null; redraw(); }
    });
    window.scrollTo(0, 0);
  }

  function renderPlace(c) {
    const ps = PLACES[c.id] || [];
    if (!ps.length) return "";
    return `<div class="wfplace">${ps.map(({ t, st, k }) => {
      const prev = st.calcs[k - 1], next = st.calcs[k + 1];
      return `<div class="wfp"><a href="#/workflow/${t.id}?a=st-${st.id}">${esc(t.title)} › ${esc(st.title)}</a> <span class="pg">step ${k + 1} of ${st.calcs.length}</span>
        <span class="wfnav">${prev && CALC.byId[prev] ? `<a href="#/c/${prev}" title="${esc(CALC.byId[prev].title)}">‹ Previous</a>` : ""}${next && CALC.byId[next] ? `<a href="#/c/${next}" title="${esc(CALC.byId[next].title)}">Next: ${esc(CALC.byId[next].title)} ›</a>` : ""}</span></div>`;
    }).join("")}</div>`;
  }
  function renderUse(c) {
    const u = USE[c.id];
    if (!u) return "";
    const u2 = USE2[c.id] || {};
    const more = (u2.more || []).map(p => `<p>${esc(p)}</p>`).join("");
    return `<div class="fielduse"><h2>Used in the field</h2><p>${esc(u.use)}</p>${more}${u.ask && !(u2.qa && u2.qa.length) ? `<p class="ask">A grower might ask: “${esc(u.ask)}”</p>` : ""}</div>`;
  }
  function renderQA(c) {
    const u2 = USE2[c.id] || {}, u = USE[c.id] || {};
    const qa = (u2.qa || []).slice();
    if (!qa.length) return "";
    return `<section class="qa"><h2>Grower questions this answers</h2>${qa.map(x => `<details class="qai" open><summary>${esc(x.q)}</summary><p>${esc(x.a)}</p></details>`).join("")}</section>`;
  }
  function relatedFigs(c) {
    const u2 = USE2[c.id] || {};
    return [...new Set([...(c.figs || []), ...(u2.figs || [])])].filter(n => FIGLOC[n]);
  }
  function renderFigs(c) {
    const fs = relatedFigs(c);
    if (!fs.length) return "";
    return `<section class="cfigs"><h2>${fs.length > 1 ? "Figures" : "Figure"} from the book</h2>${fs.map(n => { const f = FIGLOC[n]; return `<figure class="fig">${imgTag(f.b.img, "Figure " + n)}<figcaption>${f.b.caption} ${pageLink(f.page)} <a class="pg" href="#/f/${n}">All mentions</a></figcaption></figure>`; }).join("")}</section>`;
  }
  function renderLinks(c) {
    const L = LINKS[c.id];
    if (!L || (!L.from.size && !L.to.size)) return "";
    const col = (title, m) => `<div class="lcol"><h3>${title}</h3>${m.size ? [...m].map(([id, why]) => `<a class="lk" href="#/c/${id}"><b>${esc(CALC.byId[id].title)}</b><span>${esc(why)}</span></a>`).join("") : `<p class="empty">Measured or looked up directly.</p>`}</div>`;
    return `<section class="links"><h2>Connected calculators</h2><div class="lcols">${col("Inputs come from", L.from)}${col("Results go to", L.to)}</div></section>`;
  }

  // ---------- workflow ----------
  function wfText(t) {
    return String(t).replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, (m, id, label) => {
      if (id.startsWith("s:")) return `<a href="#/s/${id.slice(2)}">${label}</a>`;
      if (id.startsWith("stage:")) { const [tr, sg] = id.slice(6).split("/"); return `<a href="#/workflow/${tr}?a=st-${sg}">${label}</a>`; }
      return CALC.byId[id] ? `<a href="#/c/${id}">${label}</a>` : label;
    });
  }
  let flowCleanup = null;
  function viewWorkflow(trackId, anchor) {
    if (trackId === "guide") return viewWorkflowGuide();
    const chain = ["Soil", "Crop water use", "Scheduling", "Apply and measure", "System check", "Pump and supply", "Design"];
    if (!trackId) {
      main.innerHTML = `<div class="wf"><h1>Workflow</h1>
        <p class="wflead">${esc(WF.intro)}</p>
        <ol class="chain" aria-label="The chain from soil to design">${chain.map(x => `<li>${esc(x)}</li>`).join("")}</ol>
        <div class="tracks">${WF.tracks.map(t => `<a class="track" href="#/workflow/${t.id}"><b>${esc(t.title)}</b><span class="tsub">${esc(t.sub)}</span><span>${esc(t.who)}</span><ol>${t.stages.map(st => `<li>${esc(st.title)}</li>`).join("")}</ol></a>`).join("")}</div>
        <p><a class="calcbtn" href="#/workflow/guide">Read how it all connects, with one field worked through</a></p>
        <p class="credit">The workflow, field-use notes and connections were written for this guide and are not part of the book.</p></div>`;
      window.scrollTo(0, 0); return;
    }
    const t = WF.tracks.find(x => x.id === trackId);
    if (!t) return viewMissing();
    main.innerHTML = `<div class="wf"><div class="crumbs"><a href="#/workflow">Workflow</a> › ${esc(t.title)}</div><h1>${esc(t.title)}</h1>
      <p class="wflead">${esc(t.who)}</p>
      <div class="wftabs" role="tablist"><a href="#/workflow/${t.id}" class="on">Flow diagram</a><a href="#/workflow/${t.id}?a=list">Step by step list</a></div>
      <section class="flowwrap" aria-label="Flow diagram for ${esc(t.title)}">${window.FLOW.html(t, CALC)}</section>
      <h2 id="list">Step by step list</h2>
      <nav class="stagejump">${t.stages.map((st, i) => `<a href="#/workflow/${t.id}?a=st-${st.id}">${i + 1}. ${esc(st.title)}</a>`).join("")}</nav>
      ${t.stages.map((st, i) => `<section class="stage" id="st-${st.id}">
        <h2><span class="secnum">${i + 1}</span>${esc(st.title)}</h2>
        <p class="q">${esc(st.q)}</p>
        <p>${esc(st.text)}</p>
        ${st.ch ? `<p class="pg">Book: ${st.ch.map(n => `<a href="#/s/${(B.chapters[n - 1] || { sections: [{ id: "" }] }).sections[0].id}">Chapter ${n}</a>`).join(", ")}</p>` : ""}
        <ol class="steps">${st.calcs.filter(id => CALC.byId[id]).map(id => { const c = CALC.byId[id], u = USE[id]; return `<li><a href="#/c/${id}"><b>${esc(c.title)}</b><small>${c.eq.length ? "Eq. " + esc(c.eq.join(", ")) : c.id.startsWith("tab-") ? "Table lookup" : "Procedure"}</small>${u ? `<span>${esc(firstSentence(u.use))}</span>` : ""}</a></li>`; }).join("")}</ol>
        ${i < t.stages.length - 1 ? `<p class="nextstage">Next: <a href="#/workflow/${t.id}?a=st-${t.stages[i + 1].id}">${esc(t.stages[i + 1].title)}</a></p>` : ""}
      </section>`).join("")}
      <nav class="secnav">${WF.tracks.map(x => x.id === t.id ? "" : `<a href="#/workflow/${x.id}">${esc(x.title)} ›</a>`).join("")}</nav></div>`;
    main.querySelector(".wf").classList.add("wide");
    if (flowCleanup) flowCleanup();
    flowCleanup = window.FLOW.attach(main.querySelector(".flowwrap"), t, CALC, LINKS, USE);
    if (anchor) { const el = document.getElementById(anchor); if (el) { el.style.scrollMarginTop = "70px"; setTimeout(() => el.scrollIntoView({ block: "start" }), 30); } } else window.scrollTo(0, 0);
  }
  function viewWorkflowGuide() {
    const G2 = window.WORKFLOW_GUIDE || [];
    main.innerHTML = `<article class="reader"><div class="crumbs"><a href="#/workflow">Workflow</a> › How it all connects</div><h1>How it all connects</h1>
      ${G2.map(sec => `<h2>${esc(sec.h)}</h2>${sec.p.map(p => `<p class="bk">${wfText(esc(p))}</p>`).join("")}`).join("")}
      <p class="credit">Written for this guide; not part of the book. The book's own text is in the chapters.</p></article>`;
    window.scrollTo(0, 0);
  }

  function renderCalcTables(c) {
    const ids = (c.tables || []).filter(t => TAB[t]);
    if (!ids.length || !c.id.startsWith("tab-")) return "";
    return ids.map(t => {
      const T = TAB[t];
      return `<h2>Table ${t} values</h2>${T.title ? `<p class="calc-note">${esc(T.title)}</p>` : ""}<div class="scrollx"><table class="data"><thead><tr>${(T.cols || []).map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${(T.rows || []).map(r => `<tr>${(Array.isArray(r) ? r : Object.values(r)).map(x => `<td>${esc(x === null || x === undefined ? "–" : x)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>${T.notes ? `<p class="calc-note">${esc(T.notes)}</p>` : ""}${TABLOC[t] ? `<figure class="tablefig">${imgTag(TABLOC[t].b.img, "Table " + t + " as printed")}<figcaption>As printed, page ${TABLOC[t].page}</figcaption></figure>` : ""}`;
    }).join("");
  }

  function viewCalcList(filter) {
    const byCh = {};
    for (const c of CALC.CALCS) (byCh[c.ch] = byCh[c.ch] || []).push(c);
    const keyNum = s => String(s).split(/[.-]/).map(x => parseFloat(x) || 0);
    const cmp = (a, b) => { const A = a.eq.length ? keyNum(a.eq[0]) : [999], Bv = b.eq.length ? keyNum(b.eq[0]) : [999]; for (let i = 0; i < 3; i++) if ((A[i] || 0) !== (Bv[i] || 0)) return (A[i] || 0) - (Bv[i] || 0); return a.title.localeCompare(b.title); };
    main.innerHTML = `<div><h1>Calculators</h1><p>${CALC.CALCS.length} calculators: every formula in the book, table lookups, and step-by-step procedures. Every input and result accepts US or metric units, and most calculators can solve for any input.</p>
      <input class="filter" id="cfilter" type="search" placeholder="Filter: pivot, Eq 8.11, leaching, nozzle" value="${esc(filter || "")}" aria-label="Filter calculators">
      <div id="clist"></div></div>`;
    const draw = () => {
      const f = $("#cfilter").value.trim().toLowerCase();
      let h = "";
      for (const ch of B.chapters) {
        const list = (byCh[ch.num] || []).filter(c => !f || (c.title + " " + c.tags.join(" ") + " " + c.eq.map(e => "eq " + e).join(" ") + " " + (c.tables || []).map(t => "table " + t).join(" ")).toLowerCase().includes(f)).sort(cmp);
        if (!list.length) continue;
        h += `<ul class="clist"><h2>${ch.num}. ${esc(ch.title)}</h2>${list.map(c => `<li><a href="#/c/${c.id}"><span class="eqn">${c.eq.length ? "Eq " + esc(c.eq[0]) : c.id.startsWith("tab-") ? "Table" : "Steps"}</span><span class="t">${esc(c.title)}<small>${c.eq.length > 1 ? "Equations " + esc(c.eq.join(", ")) + ", " : ""}${c.tables && c.tables.length ? "Table " + esc(c.tables.join(", ")) + ", " : ""}p. ${c.page}</small></span></a></li>`).join("")}</ul>`;
      }
      $("#clist").innerHTML = h || `<p class="empty">No calculator matches “${esc(f)}”. Try the search bar at the top.</p>`;
    };
    $("#cfilter").addEventListener("input", draw); draw();
  }

  function viewGallery(kind) {
    const isT = kind === "tables";
    const list = Object.entries(isT ? TABLOC : FIGLOC).sort((a, b) => { const [x1, y1] = a[0].split("."), [x2, y2] = b[0].split("."); return (+x1 - +x2) || (parseFloat(y1) - parseFloat(y2)) || a[0].localeCompare(b[0]); });
    main.innerHTML = `<div><h1>${isT ? "Tables" : "Figures"}</h1><p>All ${list.length} ${kind} from the book, unchanged. ${isT ? "Tables with a calculator open a lookup with the same values." : ""}</p>
      <input class="filter" id="gfilter" type="search" placeholder="Filter by number or words" aria-label="Filter"><div class="grid" id="glist"></div></div>`;
    const draw = () => {
      const f = $("#gfilter").value.trim().toLowerCase();
      $("#glist").innerHTML = list.filter(([n, x]) => !f || (n + " " + plain(x.b.caption)).toLowerCase().includes(f)).map(([n, x]) => {
        const href = `#/${isT ? "t" : "f"}/${n}`;
        return `<a class="card" href="${href}"><img src="${x.b.img.src}" loading="lazy" alt=""><span><b>${isT ? "Table" : "Figure"} ${n}.</b> ${esc(plain(x.b.caption).replace(/^(Table|Figure)\s+[\d.a-z]+\.?\s*/, ""))}</span></a>`;
      }).join("");
    };
    $("#gfilter").addEventListener("input", draw); draw();
  }

  // a figure or table on its own page, with every passage in the book that refers to it
  function viewItem(kind, num) {
    const isT = kind === "t";
    const loc = (isT ? TABLOC : FIGLOC)[num];
    if (!loc) return viewMissing();
    const word = isT ? "Table" : "Figure";
    const re = new RegExp("\\b(?:" + word + "s?|" + (isT ? "Tables" : "Figures") + ")\\s+(?:[\\d.]+[a-d]?\\s*(?:,|and|to|-|–)\\s*)*" + num.replace(".", "\\.") + "(?![\\d])", "i");
    const refs = [];
    for (const s of SECS) s.blocks.forEach((b, i) => {
      if (["p", "li", "q"].includes(b.t) && re.test(plain(b.html))) refs.push({ s, i, html: b.html });
    });
    const cs = isT ? calcsForTable(num) : calcsForFig(num);
    const all = Object.keys(isT ? TABLOC : FIGLOC);
    const k = all.indexOf(num);
    main.innerHTML = `<div class="reader"><div class="crumbs"><a href="#/${isT ? "tables" : "figures"}">${word}s</a> › Chapter ${SEC[loc.sec].ch.num}</div>
      <h1>${word} ${esc(num)}</h1>
      <figure class="${isT ? "tablefig" : "fig"}">${imgTag(loc.b.img, word + " " + num)}<figcaption>${loc.b.caption} ${pageLink(loc.page)}</figcaption></figure>
      ${cs.length ? `<div class="btnrow">${cs.map(c => `<a class="calcbtn" href="#/c/${c.id}">${calcIcon}${esc(c.title)}</a>`).join("")}</div>` : ""}
      <h2>What the book says about it</h2>
      ${refs.length ? refs.map(r => `<p class="bk">${r.html}</p><p class="pg" style="margin:-.5em 0 1.2em"><a href="#/s/${r.s.id}?a=b${r.i}">Section ${r.s.num || r.s.id} ${esc(r.s.title)}</a></p>`).join("") : `<p class="empty">The text does not refer to this ${word.toLowerCase()} by number. <a href="#/s/${loc.sec}?a=${isT ? "tab" : "fig"}-${num}">See it in Section ${loc.sec}</a>.</p>`}
      ${noteBox((isT ? "t:" : "f:") + num, word + " " + num)}
      <nav class="secnav">${k > 0 ? `<a href="#/${kind}/${all[k - 1]}">‹ ${word} ${all[k - 1]}</a>` : ""}${k < all.length - 1 ? `<a class="r" href="#/${kind}/${all[k + 1]}">${word} ${all[k + 1]} ›</a>` : ""}</nav>
      <p class="credit">${CREDIT}</p></div>`;
    window.scrollTo(0, 0);
  }

  function viewGlossary(anchor) {
    main.innerHTML = `<div class="reader"><h1>Glossary</h1><p class="calc-note">${esc(B.glossary_source)}</p><dl class="gloss">${B.glossary.map(g => `<dt id="g-${window.SEARCH.slug(g.term)}">${g.term_html}</dt><dd>${g.html}</dd>`).join("")}</dl><p class="credit">${CREDIT}</p></div>`;
    if (anchor) { const el = document.getElementById(anchor); if (el) el.scrollIntoView(); } else window.scrollTo(0, 0);
  }

  function viewUnits() {
    const UN = window.UNIT_NOTES || { dims: {}, units: {} };
    const dims = Object.entries(U.dims).filter(([k, d]) => d.units.length > 1 && !["count", "kgper", "energyvol", "rpm"].includes(k));
    const st = store.get("conv", { dim: "flow", v: 1, from: "gpm" });
    if (!U.dims[st.dim]) st.dim = "flow";
    main.innerHTML = `<div class="convpage"><h1>Unit converter</h1>
      <div class="conv">
        <div><label for="cdim">Quantity</label><select id="cdim">${dims.map(([k, d]) => `<option value="${k}"${k === st.dim ? " selected" : ""}>${esc(d.label)}</option>`).join("")}</select></div>
        <div class="row"><div><label for="cval">Value</label><input id="cval" inputmode="decimal" value="${esc(st.v)}"></div><div><label for="cfrom">From</label><select id="cfrom"></select></div></div>
      </div>
      <div id="cabout"></div>
      <div id="call" class="convlist"></div>
      <h2>Book conversions (pages xxi and xxii)</h2>
      ${(window.BOOK_CONVERSIONS && window.BOOK_CONVERSIONS.length) ? renderBookConv() : ""}
      ${B.units_pages.map(p => `<figure class="tablefig">${imgTag(p.img, "Common unit conversions, page " + p.page)}<figcaption>As printed, page ${p.page}</figcaption></figure>`).join("")}
      <p class="credit">Unit notes were written for this guide. ${CREDIT}</p></div>`;
    const dimSel = $("#cdim"), from = $("#cfrom"), val = $("#cval");
    function fill() { from.innerHTML = unitOptions(dimSel.value, U.unitsOf(dimSel.value).includes(st.from) ? st.from : U.unitsOf(dimSel.value)[0]); }
    const sig = x => { if (!isFinite(x)) return "–"; const a = Math.abs(x); return a !== 0 && (a >= 1e6 || a < 1e-3) ? x.toExponential(4).replace(/e([+-])(\d+)/, (m, sg, d) => " × 10" + (sg === "-" ? "⁻" : "") + String(+d).split("").map(c => "⁰¹²³⁴⁵⁶⁷⁸⁹"[c]).join("")) : (+x.toPrecision(6)).toLocaleString(undefined, { maximumFractionDigits: 6 }); };
    function draw() {
      const x = parseFloat(String(val.value).replace(/,/g, ""));
      st.dim = dimSel.value; st.from = from.value; st.v = val.value; store.set("conv", st);
      const dn = UN.dims[st.dim], un = UN.units[st.dim] || {};
      $("#cabout").innerHTML = dn ? `<div class="fielduse"><h2>${esc(U.dims[st.dim].label)}</h2><p>${esc(dn.about)}</p></div>` : "";
      if (!isFinite(x)) { $("#call").innerHTML = `<p class="empty">Enter a number.</p>`; return; }
      const fN = un[st.from] || {};
      $("#call").innerHTML = U.unitsOf(st.dim).map(u => {
        const n = un[u] || {};
        const one = U.convert(st.dim, 1, st.from, u);
        const factor = st.dim === "temp" ? "" : `<p class="cf"><b>Factor used:</b> 1 ${esc(st.from)} = ${sig(one)} ${esc(u)}${one !== 0 && u !== st.from ? `, so 1 ${esc(u)} = ${sig(1 / one)} ${esc(st.from)}` : ""}. The value is ${esc(val.value)} × ${sig(one)}.</p>`;
        return `<details class="cu${u === st.from ? " src" : ""}"><summary><span class="cv">${fmt(U.convert(st.dim, x, st.from, u), 5)}</span><span class="cn"><b>${esc(u)}</b>${n.name ? `<small>${esc(n.name)}</small>` : ""}</span></summary>
          <div class="cbody">
            ${n.what ? `<p><b>What it is:</b> ${esc(n.what)}</p>` : ""}
            ${n.use ? `<p><b>Where it is used:</b> ${esc(n.use)}</p>` : ""}
            ${n.def ? `<p><b>How it is defined:</b> ${esc(n.def)}</p>` : ""}
            ${factor}
            ${u !== st.from && fN.def ? `<p class="cf2"><b>${esc(st.from)}:</b> ${esc(fN.def)}</p>` : ""}
          </div></details>`;
      }).join("");
    }
    fill(); draw();
    dimSel.onchange = () => { fill(); draw(); }; from.onchange = draw; val.oninput = draw;
  }
  function renderBookConv() {
    const groups = {};
    for (const c of window.BOOK_CONVERSIONS) (groups[c.group] = groups[c.group] || []).push(c);
    return Object.entries(groups).map(([g, list]) => `<h3>${esc(g)}</h3><div class="scrollx"><table class="data">${list.map(c => `<tr><td>${esc(c.text)}</td></tr>`).join("")}</table></div>`).join("");
  }

  function viewNotes() {
    const notes = userNotes().sort((a, b) => b.t - a.t);
    main.innerHTML = `<div class="reader"><h1>My notes</h1>
      <p>Notes are kept in this browser on this device. Export them to keep a copy or move them to another phone.</p>
      <div class="btnrow"><button class="linkbtn" id="nExport">Export notes</button><label class="linkbtn" style="cursor:pointer">Import notes<input type="file" id="nImport" accept="application/json" hidden></label></div>
      ${notes.length ? notes.map(n => `<div class="hit"><a class="ht" href="${esc(n.route)}">${esc(n.title)}</a><div class="hs" style="white-space:pre-wrap">${esc(n.text)}</div></div>`).join("") : `<p class="empty">No notes yet. Every book section and calculator has a notes box at the bottom.</p>`}
      ${noteBox("general", "General notes")}</div>`;
    $("#nExport").onclick = () => {
      const data = {};
      for (const k of store.keys("note")) data[k] = store.get(k);
      const blob = new Blob([JSON.stringify({ app: "irrigation-field-guide", saved: new Date().toISOString(), data }, null, 1)], { type: "application/json" });
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "field-guide-notes.json"; a.click();
    };
    $("#nImport").onchange = async e => {
      const f = e.target.files[0]; if (!f) return;
      try { const j = JSON.parse(await f.text()); for (const [k, v] of Object.entries(j.data || {})) store.set(k, v); viewNotes(); }
      catch (err) { alert("That file is not a notes export from this guide."); }
    };
  }

  function viewAnswer(id) {
    const n = (window.FIELDNOTES || []).find(x => x.id === id);
    if (!n) return viewMissing();
    main.innerHTML = `<div class="reader"><div class="crumbs"><a href="#/">Home</a> › Field note</div><h1>${esc(n.q)}</h1>
      <div class="fieldnote"><div class="who">Field note written for this guide, not from the book</div>${n.a}</div>
      ${renderNoteLinks(n)}${noteBox("a:" + n.id, n.q)}<p class="credit">${CREDIT}</p></div>`;
    window.scrollTo(0, 0);
  }
  function renderNoteLinks(n) {
    const calcs = (n.calcs || []).filter(id => CALC.byId[id]).map(id => `<a class="calcbtn" href="#/c/${id}">${calcIcon}${esc(CALC.byId[id].title)}</a>`).join("");
    const secs = (n.secs || []).filter(s => SEC[s]).map(s => `<a class="linkbtn" href="#/s/${s}">Book ${s} ${esc(SEC[s].title)}</a>`).join("");
    const tabs = (n.tables || []).filter(t => TABLOC[t]).map(t => `<a class="linkbtn" href="#/s/${TABLOC[t].sec}?a=tab-${t}">Table ${t}</a>`).join("");
    const figs = (n.figs || []).filter(t => FIGLOC[t]).map(t => `<a class="linkbtn" href="#/s/${FIGLOC[t].sec}?a=fig-${t}">Figure ${t}</a>`).join("");
    return `<div class="btnrow">${calcs}${secs}${tabs}${figs}</div>`;
  }

  function viewSearch(q) {
    qInput.value = q;
    const r = window.SEARCH.query(q, userNotes());
    const hitLink = h => h.route + (h.anchor ? "?a=" + h.anchor : "");
    const group = (title, list, render) => list.length ? `<section class="rgroup"><h2>${title}</h2>${list.map(render).join("")}</section>` : "";
    const plainHit = h => `<a class="hit" href="${hitLink(h)}"><div class="ht">${esc(h.title)}</div>${h.snippet ? `<div class="hs">${h.snippet}</div>` : ""}</a>`;
    // quick answer: a field note when it is a strong match, else the glossary or best book paragraph
    let answer = "";
    const topNote = r.note[0], topGloss = r.gloss[0], topText = r.text[0];
    if (r.direct.length) {
      answer = "";
    } else if (topNote && (!topText || topNote.score >= topText.score * 0.6)) {
      const n = topNote.doc.note;
      answer = `<div class="answer"><h2>${esc(n.q)}</h2>${n.a}<div class="src">Field note written for this guide, not from the book.</div>${renderNoteLinks(n)}</div>`;
    } else if (topGloss && topGloss.score > (topText ? topText.score * 0.8 : 0)) {
      const g = topGloss.doc.gloss;
      answer = `<div class="answer book"><h2>${g.term_html}</h2><p>${g.html}</p><div class="src">Book glossary, page 339 to 342. <a href="#/glossary?a=g-${window.SEARCH.slug(g.term)}">Open glossary</a></div></div>`;
    } else if (topText) {
      answer = `<div class="answer book"><h2>From the book: ${esc(topText.title)}</h2><p>${topText.snippet}</p><div class="src"><a href="${hitLink(topText)}">Read it in context</a></div></div>`;
    }
    const total = Object.values(r).reduce((s, l) => s + l.length, 0);
    main.innerHTML = `<div class="results"><h1>Results for “${esc(q)}”</h1>
      ${group("Direct match", r.direct, plainHit)}
      ${answer}
      ${group("Calculators", r.calc, h => `<a class="hit" href="${h.route}"><div class="ht">${esc(h.title)}</div><div class="hs">${h.doc.calc.eq.length ? "Equation " + esc(h.doc.calc.eq.join(", ")) + ", " : ""}page ${h.doc.calc.page}</div></a>`)}
      ${group("In the book", r.text, plainHit)}
      ${group("Tables", r.table, h => `<a class="hit" href="#/t/${h.doc.num}"><div class="ht">${esc(h.title)}</div><div class="hs">${esc(plain(h.doc.tags))}</div></a>`)}
      ${group("Figures", r.figure, h => `<a class="hit" href="#/f/${h.doc.num}"><div class="ht">${esc(h.title)}</div><div class="hs">${esc(plain(h.doc.tags))}</div></a>`)}
      ${group("Worked examples", r.example, plainHit)}
      ${group("Glossary", r.gloss.slice(answer.includes("glossary") ? 1 : 0), h => `<a class="hit" href="#/glossary?a=g-${window.SEARCH.slug(h.title)}"><div class="ht">${esc(h.title)}</div><div class="hs">${h.snippet}</div></a>`)}
      ${group("More field notes", r.note.slice(answer && topNote && answer.includes(esc(topNote.doc.note.q)) ? 1 : 0), h => `<a class="hit" href="${h.route}"><div class="ht">${esc(h.title)}</div><div class="hs">${h.snippet}</div></a>`)}
      ${group("My notes", r.user, plainHit)}
      ${total ? "" : `<p class="empty">Nothing found. Try fewer words, a crop or soil name, or a number like “Table 4.3”.</p>`}
    </div>`;
  }

  function viewMissing() { main.innerHTML = `<div><h1>Page not found</h1><p>That link does not match a page in this guide. <a href="#/">Go to the home page</a> or use the search bar.</p></div>`; }

  // ---------- router ----------
  function route() {
    const h = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
    const [pathPart, qs] = h.split("?");
    const params = Object.fromEntries(new URLSearchParams(qs || ""));
    const parts = pathPart.split("/");
    const r = parts[0] || "home";
    let key = r;
    if (r === "s") { viewSection(parts.slice(1).join("/"), params.a); key = "s/" + parts.slice(1).join("/"); }
    else if (r === "c") { viewCalc(parts.slice(1).join("/"), params); key = "c/" + parts[1]; }
    else if (r === "calc") viewCalcList(params.f);
    else if (r === "study") { window.STUDY.view(main, parts, params, { B, CALC, SEC, FIGLOC, TABLOC, imgTag }); key = "study"; }
    else if (r === "workflow") { viewWorkflow(parts[1], params.a); key = parts[1] === "guide" ? "workflow/guide" : "workflow"; }
    else if (r === "book") viewBook();
    else if (r === "tables") viewGallery("tables");
    else if (r === "figures") viewGallery("figures");
    else if (r === "glossary") viewGlossary(params.a);
    else if (r === "f" || r === "t") { viewItem(r, parts[1]); key = r === "t" ? "tables" : "figures"; }
    else if (r === "units") viewUnits();
    else if (r === "notes") viewNotes();
    else if (r === "answer") viewAnswer(parts[1]);
    else if (r === "search") viewSearch(parts.slice(1).join("/"));
    else if (r === "home") viewHome();
    else viewMissing();
    markSide(key);
    if (r !== "search" && document.activeElement !== qInput) main.focus({ preventScroll: true });
    document.title = (main.querySelector("h1") ? main.querySelector("h1").textContent + " | " : "") + "Irrigation Field Guide";
  }
  window.addEventListener("hashchange", route);
  route();

  if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("sw.js").catch(() => { });
})();
