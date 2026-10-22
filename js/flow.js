/* Flow diagrams for the three workflow tracks: every calculator is a box colored by its stage,
   step arrows run through each stage in order, a heavy arrow joins one stage to the next,
   and dashed arrows show every data connection between calculators in the track. */
(function (G) {
  "use strict";
  const HUES = [205, 28, 145, 275, 350, 48, 185, 100, 320, 240, 12, 165];
  const esc = s => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  function html(track, CALC) {
    let h = `<div class="flowbar" role="group" aria-label="Diagram options">
      <label><input type="checkbox" data-fopt="steps" checked> Step arrows</label>
      <label><input type="checkbox" data-fopt="links"> Show every connection at once</label>
      <span class="flowhint">Tap any box to draw its connections: where its inputs come from and where its results go. Tap it again to open the calculator.</span></div>
      <div class="flowlegend">
        <span><svg width="38" height="12" aria-hidden="true"><path d="M2 6h28" stroke="currentColor" stroke-width="2"/><path d="M30 2l6 4-6 4z" fill="currentColor"/></svg> next step in a stage</span>
        <span><svg width="38" height="14" aria-hidden="true"><path d="M2 7h26" stroke="var(--ink)" stroke-width="4"/><path d="M28 1l8 6-8 6z" fill="var(--ink)"/></svg> next stage</span>
        <span><svg width="38" height="12" aria-hidden="true"><path d="M2 6h28" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/><path d="M30 2l6 4-6 4z" fill="currentColor"/></svg> result feeds another calculator (colored by where it starts)</span>
      </div>
      <div class="flow" data-track="${esc(track.id)}">`;
    track.stages.forEach((st, si) => {
      const hue = HUES[si % HUES.length];
      h += `<section class="fband" style="--h:${hue}" data-stage="${si}" id="fl-${esc(st.id)}">
        <header><span class="fnum">${si + 1}</span><div><b>${esc(st.title)}</b><span>${esc(st.q)}</span></div></header>
        <div class="fgrid">`;
      st.calcs.forEach((id, k) => {
        const c = CALC.byId[id];
        if (!c) return;
        const tag = c.eq.length ? "Eq. " + c.eq.join(", ") : id.startsWith("tab-") ? "Table" : id.startsWith("fig-") ? "Figure" : "Steps";
        h += `<button type="button" class="fnode" data-id="${esc(id)}" data-key="${si}:${k}" style="--h:${hue}"><span class="fk">${k + 1}</span><b>${esc(c.title)}</b><small>${esc(tag)}<span class="fio" data-io="${esc(id)}"></span></small></button>`;
      });
      h += `</div></section>`;
    });
    h += `<svg class="flowsvg" aria-hidden="true"></svg></div>
      <div class="flowpanel" hidden aria-live="polite"></div>`;
    return h;
  }

  function attach(root, track, CALC, LINKS, USE) {
    const flow = root.querySelector(".flow");
    const svg = flow.querySelector(".flowsvg");
    const panel = root.querySelector(".flowpanel");
    const opts = { steps: true, links: false };
    let selected = null;
    const nodes = [...flow.querySelectorAll(".fnode")];
    const byId = {};
    nodes.forEach(n => { (byId[n.dataset.id] = byId[n.dataset.id] || []).push(n); });

    // edges: steps inside a stage, stage to stage, and data links within the track
    const edges = [];
    track.stages.forEach((st, si) => {
      const ns = nodes.filter(n => n.dataset.key.startsWith(si + ":"));
      for (let i = 0; i + 1 < ns.length; i++) edges.push({ a: ns[i], b: ns[i + 1], kind: "step", hue: HUES[si % HUES.length] });
    });
    const bands = [...flow.querySelectorAll(".fband")];
    for (let i = 0; i + 1 < bands.length; i++) edges.push({ a: bands[i], b: bands[i + 1], kind: "stage" });
    const seen = new Set();
    for (const n of nodes) {
      const L = LINKS[n.dataset.id];
      if (!L) continue;
      for (const [to, why] of L.to) {
        for (const m of (byId[to] || [])) {
          if (m === n) continue;
          const key = n.dataset.key + ">" + m.dataset.key;
          if (seen.has(key)) continue;
          seen.add(key);
          // skip the link when it is already drawn as a step arrow
          const ki = n.dataset.key.split(":"), kj = m.dataset.key.split(":");
          if (ki[0] === kj[0] && +kj[1] === +ki[1] + 1) continue;
          edges.push({ a: n, b: m, kind: "link", hue: HUES[+ki[0] % HUES.length], why });
        }
      }
    }

    nodes.forEach(n => {
      const L = LINKS[n.dataset.id];
      const io = n.querySelector(".fio");
      if (L && io) io.textContent = `${L.from.size} in, ${L.to.size} out`;
    });

    function box(el) {
      const f = flow.getBoundingClientRect(), r = el.getBoundingClientRect();
      return { x: r.left - f.left, y: r.top - f.top, w: r.width, h: r.height, cx: r.left - f.left + r.width / 2, cy: r.top - f.top + r.height / 2, r: r.right - f.left, b: r.bottom - f.top };
    }
    function stroke(h) { return `hsl(${h} var(--fbs) var(--fbl))`; }

    function draw() {
      const W = flow.scrollWidth, H = flow.scrollHeight;
      svg.setAttribute("width", W); svg.setAttribute("height", H); svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
      let defs = `<defs><marker id="mk-ink" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" style="fill:var(--ink)"/></marker>`;
      for (const h of HUES) defs += `<marker id="mk-${h}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" style="fill:${stroke(h)}"/></marker>`;
      defs += `</defs>`;
      let out = "";
      const sel = selected;
      for (const e of edges) {
        if (e.kind === "step" && !opts.steps) continue;
        const isHot = selected && (e.a.dataset.id === selected || e.b.dataset.id === selected);
        if (e.kind === "link" && !opts.links && !isHot) continue;
        const A = box(e.a), Bx = box(e.b);
        let d;
        if (e.kind === "stage") {
          const x = A.x + 28, y1 = A.b - 2, y2 = Bx.y + 2;
          d = `M${x} ${y1}V${y2 - 1}`;
          out += `<path class="fe stage" d="${d}" style="stroke:var(--ink)" marker-end="url(#mk-ink)"/>`;
          continue;
        }
        const hot = sel && (e.a.dataset.id === sel || e.b.dataset.id === sel);
        const dim = sel && !hot;
        if (e.kind === "step") {
          if (Math.abs(A.y - Bx.y) < 6) {
            d = Bx.x > A.r ? `M${A.r} ${A.cy}H${Bx.x - 2}` : `M${A.x} ${A.cy}H${Bx.r + 2}`;
          } else {
            const gy = A.b + (Bx.y - A.b) / 2;
            d = `M${A.cx} ${A.b}V${gy}H${Bx.cx}V${Bx.y - 2}`;
          }
          out += `<path class="fe step${hot ? " hot" : ""}${dim ? " dim" : ""}" d="${d}" style="stroke:${stroke(e.hue)}" marker-end="url(#mk-${e.hue})"/>`;
        } else {
          let x1, y1, x2, y2, c1, c2;
          if (Bx.y > A.b - 4) { x1 = A.cx + 10; y1 = A.b; x2 = Bx.cx - 10; y2 = Bx.y - 2; const k = Math.max(30, (y2 - y1) * 0.45); c1 = `${x1} ${y1 + k}`; c2 = `${x2} ${y2 - k}`; }
          else if (Bx.b < A.y + 4) { x1 = A.cx - 10; y1 = A.y; x2 = Bx.cx + 10; y2 = Bx.b + 2; const k = Math.max(30, (y1 - y2) * 0.45); c1 = `${x1} ${y1 - k}`; c2 = `${x2} ${y2 + k}`; }
          else { x1 = A.cx; y1 = A.y; x2 = Bx.cx; y2 = Bx.y - 2; const k = 34; c1 = `${x1} ${y1 - k}`; c2 = `${x2} ${y2 - k}`; }
          d = `M${x1} ${y1}C${c1} ${c2} ${x2} ${y2}`;
          out += `<path class="fe link${hot ? " hot" : ""}${dim ? " dim" : ""}" d="${d}" style="stroke:${stroke(e.hue)}" marker-end="url(#mk-${e.hue})"><title>${esc(e.why || "")}</title></path>`;
        }
      }
      svg.innerHTML = defs + out;
    }

    function select(id) {
      selected = id;
      nodes.forEach(n => {
        const on = id && n.dataset.id === id;
        const L = id && LINKS[id];
        const rel = id && L && (L.from.has(n.dataset.id) || L.to.has(n.dataset.id));
        n.classList.toggle("sel", !!on);
        n.classList.toggle("rel", !!rel && !on);
        n.classList.toggle("faded", !!id && !on && !rel);
      });
      draw();
      if (!id) { panel.hidden = true; return; }
      const c = CALC.byId[id], u = USE[id] || {}, L = LINKS[id] || { from: new Map(), to: new Map() };
      const list = m => [...m.keys()].filter(x => CALC.byId[x]).map(x => `<a href="#/c/${x}">${esc(CALC.byId[x].title)}</a>`).join("") || `<span class="pg">measured or looked up directly</span>`;
      panel.innerHTML = `<div class="fp-head"><b>${esc(c.title)}</b><span class="pg">${L.from.size} in, ${L.to.size} out</span><a class="calcbtn" href="#/c/${id}">Open</a><button type="button" class="iconbtn fp-x" aria-label="Clear selection">✕</button></div>
        <details class="fp-more"><summary>What it is for and what it connects to</summary>
        ${u.use ? `<p>${esc(u.use)}</p>` : ""}
        <div class="fp-cols"><div><h4>Inputs come from</h4>${list(L.from)}</div><div><h4>Results go to</h4>${list(L.to)}</div></div></details>`;
      panel.hidden = false;
      panel.querySelector(".fp-x").onclick = () => select(null);
    }

    flow.addEventListener("click", e => {
      const n = e.target.closest(".fnode");
      if (!n) { if (selected) select(null); return; }
      if (selected === n.dataset.id) { location.hash = "#/c/" + n.dataset.id; return; }
      select(n.dataset.id);
    });
    root.querySelectorAll("[data-fopt]").forEach(cb => cb.addEventListener("change", () => { opts[cb.dataset.fopt] = cb.checked; draw(); }));
    const ro = new ResizeObserver(() => draw());
    ro.observe(flow);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);
    draw();
    return () => ro.disconnect();
  }

  G.FLOW = { html, attach, HUES };
})(window);
