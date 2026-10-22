/* Ask the guide: a chat that answers only from the book and this guide's own notes.
   It runs on the device, offline. It finds the matching book passages, glossary terms,
   table rows, calculators and field notes, and asks which one you meant when a question
   could point to several topics. */
(function (G) {
  "use strict";
  const esc = s => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const plain = h => String(h || "").replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  const stemT = s => G.SEARCH.tokens(s);
  let H; // helpers from app.js
  let history = [];   // [{who:"you"|"guide", html}]
  let topic = null;   // last topic: {q, title, terms}
  let more = null;    // state for "more from the book"

  // ---------- table rows ----------
  function tableRows(q) {
    const TAB = G.TAB || {};
    const qt = new Set(stemT(q));
    const ql = " " + q.toLowerCase().replace(/[^a-z0-9.]+/g, " ") + " ";
    const hits = [];
    for (const [num, T] of Object.entries(TAB)) {
      if (!T || !Array.isArray(T.rows) || !T.rows.length) continue;
      const titleT = new Set(stemT((T.title || "") + " " + (T.cols || []).join(" ")));
      const topicScore = [...qt].filter(t => t.length > 2 && titleT.has(t)).length;
      for (const r of T.rows) {
        const lab = Array.isArray(r) ? r[0] : Object.values(r)[0];
        if (typeof lab !== "string" || lab.length < 3) continue;
        const ll = lab.toLowerCase().replace(/[^a-z0-9.]+/g, " ").trim();
        const core = lab.toLowerCase().split(/\s*[,(:]/)[0].replace(/[^a-z0-9.]+/g, " ").trim();
        let m = 0;
        if (ll && ql.includes(" " + ll + " ")) m = 2;
        else if (core.length >= 3 && (ql.includes(" " + core + " ") || ql.includes(" " + core.replace(/s$/, "") + " "))) m = 1;
        if (!m) continue;
        hits.push({ num, T, r, lab, topic: topicScore, m });
      }
    }
    if (!hits.length) return [];
    // the question names a crop or soil; show rows from the tables whose subject matches the question
    const maxTopic = Math.max(...hits.map(h => h.topic));
    const nameOnly = [...qt].length <= 2;
    const keep = hits.filter(h => maxTopic > 0 ? h.topic === maxTopic : nameOnly);
    const bestM = Math.max(...keep.map(h => h.m), 0);
    return keep.filter(h => h.m === bestM).slice(0, 4);
  }
  function rowHTML(h) {
    const cols = h.T.cols || [];
    const vals = Array.isArray(h.r) ? h.r : Object.values(h.r);
    return `<div class="ctab"><div class="ctab-h">Table ${esc(h.num)}: ${esc(h.T.title || "")}</div><table class="data"><tr>${vals.map((v, i) => `<th>${esc(cols[i] || "")}</th>`).join("")}</tr><tr>${vals.map(v => `<td>${esc(v === null || v === undefined ? "–" : v)}</td>`).join("")}</tr></table>${h.T.notes ? `<div class="pg">${esc(h.T.notes)}</div>` : ""}</div>`;
  }

  // ---------- unit conversion ----------
  function tryConvert(q) {
    const U = G.UNITS;
    const m = q.match(/(-?[\d.,]+)\s*([^\s].*?)\s+(?:to|in|into|=)\s+([^\s?].*?)\s*\??$/i);
    if (!m) return null;
    const x = parseFloat(m[1].replace(/,/g, ""));
    if (!isFinite(x)) return null;
    const norm = s => s.trim().toLowerCase().replace(/\s+/g, " ").replace(/^(an?|the)\s+/, "").replace(/s$/, "");
    const a = norm(m[2]), b = norm(m[3]);
    for (const [dim, d] of Object.entries(U.dims)) {
      const find = s => d.units.map(u => u[0]).find(u => { const l = u.toLowerCase(); return l === s || l === s + "s" || l.replace(/[²³]/g, x => x === "²" ? "2" : "3") === s || l.replace("h₂o", "h2o") === s; });
      const ua = find(a), ub = find(b);
      if (ua && ub) {
        const y = U.convert(dim, x, ua, ub);
        const one = U.convert(dim, 1, ua, ub);
        const note = G.UNIT_NOTES && G.UNIT_NOTES.units && G.UNIT_NOTES.units[dim];
        return `<p class="cbig">${esc(m[1])} ${esc(ua)} = <b>${(+y.toPrecision(6)).toLocaleString()} ${esc(ub)}</b></p>
          <p>Factor: 1 ${esc(ua)} = ${(+one.toPrecision(6)).toLocaleString()} ${esc(ub)}.</p>
          ${note && note[ua] ? `<p class="pg">${esc(ua)}: ${esc(note[ua].def || "")}</p>` : ""}${note && note[ub] ? `<p class="pg">${esc(ub)}: ${esc(note[ub].def || "")}</p>` : ""}
          <div class="btnrow"><a class="linkbtn" href="#/units">Open the unit converter</a></div>`;
      }
    }
    return null;
  }

  // ---------- topics for clarification ----------
  function candidates(r) {
    const out = [];
    const seen = new Set();
    const add = (label, query, kind) => { const k = label.toLowerCase(); if (seen.has(k)) return; seen.add(k); out.push({ label, query, kind }); };
    for (const g of r.gloss.slice(0, 3)) add(g.title, g.title, "term");
    for (const t of r.text.slice(0, 4)) add(t.title.replace(/^\d+(\.\d+)*\s+/, ""), t.title.replace(/^\d+(\.\d+)*\s+/, ""), "section");
    for (const c of r.calc.slice(0, 3)) add(c.title, c.title, "calculator");
    for (const n of r.note.slice(0, 2)) add(n.title, n.title, "question");
    return out;
  }

  // ---------- answer ----------
  function answer(qRaw, opts = {}) {
    const q0 = qRaw.trim();
    if (!q0) return null;
    // conversion first
    const conv = tryConvert(q0);
    if (conv) return { html: `<h3>Unit conversion</h3>${conv}`, topic: null };

    // follow-ups: short or starting with "and", "what about", "for", "how about" add the last topic
    let q = q0;
    const followUp = !opts.chip && topic && (/^(and|what about|how about|for|same|then|also|what if)\b/i.test(q0) || /\b(it|this|that|those|them|these)\b/i.test(q0) && stemT(q0).length <= 4);
    if (followUp) q = q0.replace(/^(and|what about|how about|for|same|then|also|what if)\s+/i, "") + " " + topic.q;

    const r = G.SEARCH.query(q, []);
    let rows = tableRows(q);
    if (followUp) { const own = tableRows(q0 + " " + topic.q).filter(h => (" " + q0.toLowerCase() + " ").includes(" " + h.lab.toLowerCase().split(/\s*[,(:]/)[0].trim())); if (own.length) rows = own; }
    const qt = stemT(q0);

    // decide if the question is clear enough
    const top = [r.text[0], r.calc[0], r.gloss[0], r.note[0], (r.defact || [])[0], (r.de || [])[0]].filter(Boolean).sort((a, b) => b.score - a.score);
    const best = top[0];
    const cands = candidates(r);
    const short = qt.length <= 2 && !opts.chip && !followUp;
    const spread = (() => {
      const secs = new Set(r.text.slice(0, 4).map(t => (t.doc && t.doc.ch) || t.title));
      return secs.size >= 3 && r.text[1] && r.text[0].score < r.text[1].score * 1.25;
    })();
    const GENERIC = new Set(["best", "good", "better", "need", "make", "know", "like", "right", "work", "use", "way", "thing", "kind", "type", "time", "get", "want", "should", "would", "could", "much", "many", "most", "more", "less", "new", "old", "big", "small", "farm", "farmer", "grower"]);
    const covered = (() => { const words = qt.filter(w => w.length > 2 && !GENERIC.has(w)); if (!words.length) return true; const docsTxt = (best ? (best.title + " " + (best.doc && (best.doc.body || "") + " " + (best.doc.tags || ""))) : "").toLowerCase(); const hit = words.filter(w => docsTxt.includes(w)).length; return best && best.score > 1.2 && hit >= Math.ceil(words.length / 2); })();
    if ((!best || !covered) && !rows.length && !r.direct.length) {
      return { html: `<p>The book does not cover “${esc(q0)}” directly. Try other words, a crop or soil name, or a number such as Table 7.2 or Eq. 6.10.</p>`, topic: null, chips: ["soil water holding capacity", "when to irrigate", "pivot timer setting", "salinity and yield", "pump horsepower"].map(x => ({ label: x, query: x })) };
    }
    const intro = [];
    let chips = [];
    if ((short || spread) && cands.length >= 3 && !opts.chip) {
      intro.push(`<p class="cask">“${esc(q0)}” comes up in several places in the book. Which one do you mean? Here is the closest match first.</p>`);
      chips = cands.slice(0, 6).map(c => ({ label: c.label, query: c.query, kind: c.kind }));
    }

    const parts = [];
    // direct references (Table 7.2, Eq. 6.10, Figure 2.6)
    for (const d of r.direct.slice(0, 3)) parts.push(`<p><a class="calcbtn" href="${d.route}${d.anchor ? "?a=" + d.anchor : ""}">${esc(d.title)}</a></p>`);

    // table values that match a named crop, soil or system
    if (rows.length) parts.push(`<div class="cblock"><div class="ck">Values from the book's tables</div>${rows.slice(0, 4).map(rowHTML).join("")}</div>`);

    // definition from the glossary
    const gl = r.gloss[0];
    const glossStrong = gl && (!r.text[0] || gl.score >= r.text[0].score * 0.55);
    if (glossStrong) {
      const g = gl.doc.gloss;
      parts.push(`<div class="cblock"><div class="ck">Definition (book glossary)</div><p><b>${g.term_html}:</b> ${g.html}</p></div>`);
    }

    // best book passages, full paragraphs
    const paras = [];
    for (const t of r.text.slice(0, 3)) {
      const d = t.doc;
      if (!d) continue;
      const s = H.SEC[d.sec];
      const blk = s && d.anchor ? s.blocks[+String(d.anchor).slice(1)] : null;
      const html = blk && blk.html ? blk.html : blk && blk.rows ? "where: " + blk.rows.join("; ") : esc(d.body || "");
      if (!plain(html).trim()) continue;
      paras.push({ sec: d.sec, title: t.title, html, page: s ? (blk && blk.page) || s.page : "", anchor: d.anchor, score: t.score });
    }
    if (paras.length) {
      const p0 = paras[0];
      parts.push(`<div class="cblock"><div class="ck">From the book, section ${esc(p0.sec)}${p0.page ? ", page " + esc(p0.page) : ""}</div><p class="cquote">${p0.html}</p><a class="pg" href="#/s/${esc(p0.sec)}${p0.anchor ? "?a=" + esc(p0.anchor) : ""}">Read it in the book</a></div>`);
      more = { paras: paras.slice(1), q };
    } else more = null;

    // Delaware sources
    const deHits = (r.defact || []).concat(r.de || []).sort((a, b) => b.score - a.score).filter(h => best && h.score >= best.score * 0.55).slice(0, 2);
    if (deHits.length) parts.push(`<div class="cblock de"><div class="ck">From Delaware sources</div>${deHits.map(h => `<p>${h.doc.fact ? `<b>${esc(h.doc.fact.q)}</b> ${esc(h.doc.fact.a)}` : `<b>${esc(h.title)}:</b> ${h.snippet}`} <a class="pg" href="${h.route}${h.anchor ? "?a=" + h.anchor : ""}">${esc(h.doc.de.short)}</a></p>`).join("")}</div>`);

    // field note from this guide
    const fn = r.note[0];
    if (fn && best && fn.score >= best.score * 0.85) {
      const n = fn.doc.note;
      parts.push(`<div class="cblock note"><div class="ck">Field note (written for this guide, not from the book)</div><p><b>${esc(n.q)}</b></p>${n.a}</div>`);
    }

    // calculators with what they are for
    if (r.calc.length) {
      const U1 = G.CALC_USE || {};
      parts.push(`<div class="cblock"><div class="ck">Calculators for this</div>${r.calc.slice(0, 3).map(c => { const u = U1[c.doc.calc.id]; return `<a class="clk" href="#/c/${c.doc.calc.id}"><b>${esc(c.title)}</b>${u ? `<span>${esc(firstSentence(u.use))}</span>` : ""}</a>`; }).join("")}</div>`);
    }
    // figures and tables
    const vis = r.figure.slice(0, 2).concat(r.table.slice(0, 2));
    if (vis.length) parts.push(`<div class="cblock"><div class="ck">Figures and tables</div><div class="cvis">${vis.map(v => `<a href="#/${v.type === "table" ? "t" : "f"}/${v.doc.num}"><img src="${v.doc.img.src}" alt="" loading="lazy"><span>${esc(v.title)}</span></a>`).join("")}</div></div>`);

    // follow-up chips
    const fchips = [];
    if (more && more.paras.length) fchips.push({ label: "More from the book", action: "more" });
    const quiz = (G.QUIZ || []).filter(x => { const t = stemT(x.q); return qt.filter(w => w.length > 2 && t.includes(w)).length >= Math.min(2, qt.length); }).slice(0, 1);
    if (quiz.length) fchips.push({ label: "Test me on this", action: "quiz", ids: quiz.map(x => x.id) });
    if (!chips.length) chips = cands.slice(1, 4).map(c => ({ label: "Also: " + c.label, query: c.query }));
    const tTitle = (paras[0] && paras[0].title) || (gl && gl.title) || (r.calc[0] && r.calc[0].title) || q0;
    return { html: intro.join("") + parts.join(""), chips, fchips, topic: { q: followUp ? topic.q : q0, title: tTitle } };
  }
  function firstSentence(t) { const m = String(t || "").match(/^.*?[.!?](\s|$)/); return m ? m[0].trim() : String(t || ""); }

  function moreHTML() {
    if (!more || !more.paras.length) return `<p>That is everything the book has close to this question. Try the search page for a wider list.</p>`;
    const p = more.paras.shift();
    return `<div class="cblock"><div class="ck">From the book, section ${esc(p.sec)}${p.page ? ", page " + esc(p.page) : ""}</div><p class="cquote">${p.html}</p><a class="pg" href="#/s/${esc(p.sec)}${p.anchor ? "?a=" + esc(p.anchor) : ""}">Read it in the book</a></div>`;
  }

  // ---------- view ----------
  function save() { try { sessionStorage.setItem("ifg:chat", JSON.stringify({ history: history.slice(-40), topic })); } catch (e) { } }
  function load() { try { const j = JSON.parse(sessionStorage.getItem("ifg:chat") || "null"); if (j) { history = j.history || []; topic = j.topic || null; } } catch (e) { } }

  function view(main, helpers, params) {
    H = helpers;
    if (!history.length) load();
    main.innerHTML = `<div class="chat">
      <div class="chat-head"><h1>Ask the guide</h1><button class="linkbtn" id="chatClear">New conversation</button></div>
      <p class="calc-note">Answers come only from the book, the Delaware sources and this guide's calculators and notes. Ask a question or type a few keywords.</p>
      <div class="chat-log" id="chatLog" aria-live="polite"></div>
      <form class="chat-in" id="chatForm"><input id="chatQ" type="text" autocomplete="off" placeholder="Ask: how deep are corn roots, SAR, 500 gpm to cfs" aria-label="Your question"><button class="calcbtn" type="submit">Ask</button></form>
    </div>`;
    const log = main.querySelector("#chatLog"), inp = main.querySelector("#chatQ");
    function render() {
      if (!history.length) {
        log.innerHTML = `<div class="msg guide"><p>Ask me anything the book covers. A few to try:</p><div class="chips">${["How much water does sandy loam hold?", "When should I irrigate corn?", "Salt tolerance of soybean", "How do I set a pivot timer for 1 inch?", "What is distribution uniformity?", "750 gpm to cfs"].map(x => `<button class="chip" data-q="${esc(x)}">${esc(x)}</button>`).join("")}</div></div>`;
        return;
      }
      log.innerHTML = history.map(m => `<div class="msg ${m.who}">${m.html}</div>`).join("");
      const last = log.lastElementChild;
      if (last) last.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    function ask(q, opts = {}) {
      history.push({ who: "you", html: `<p>${esc(q)}</p>` });
      const a = answer(q, opts);
      if (a) {
        if (a.topic) topic = a.topic;
        const chips = (a.chips || []).map(c => `<button class="chip" data-q="${esc(c.query)}" data-chip="1">${esc(c.label)}</button>`).join("");
        const fchips = (a.fchips || []).map(c => c.action === "quiz" ? `<a class="chip strong" href="#/study/run?ids=${c.ids.join(",")}">${esc(c.label)}</a>` : `<button class="chip strong" data-act="${c.action}">${esc(c.label)}</button>`).join("");
        history.push({ who: "guide", html: a.html + (chips || fchips ? `<div class="chips">${fchips}${chips}</div>` : "") });
      }
      save(); render();
    }
    log.addEventListener("click", e => {
      const b = e.target.closest("[data-q]");
      if (b) { ask(b.dataset.q, { chip: !!b.dataset.chip }); return; }
      const m = e.target.closest("[data-act='more']");
      if (m) { history.push({ who: "you", html: "<p>More from the book</p>" }); history.push({ who: "guide", html: moreHTML() + (more && more.paras.length ? `<div class="chips"><button class="chip strong" data-act="more">More from the book</button></div>` : "") }); save(); render(); }
    });
    main.querySelector("#chatForm").onsubmit = e => { e.preventDefault(); const q = inp.value.trim(); if (!q) return; inp.value = ""; ask(q); };
    main.querySelector("#chatClear").onclick = () => { history = []; topic = null; more = null; save(); render(); inp.focus(); };
    render();
    if (params && params.q) { ask(params.q); history = history; }
    setTimeout(() => inp.focus({ preventScroll: true }), 50);
  }

  G.CHAT = { view, answer };
})(window);
