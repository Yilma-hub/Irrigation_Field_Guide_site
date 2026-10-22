/* Lookups for every table in the Delaware source documents (data/delaware). */
(function (G) {
  const docs = G.DE_DOCS || [];
  for (const d of docs) {
    for (const t of (d.tables || [])) {
      const rows = (t.rows || []).map(r => Array.isArray(r) ? r : Object.values(r));
      if (rows.length < 2 || !t.cols || t.cols.length < 2) continue;
      const outputs = t.cols.slice(1).map((c, i) => ({ k: "c" + (i + 1), label: String(c), text: true }));
      calc({
        id: "de-" + d.id + "-" + t.id, ch: 0, sec: "", page: "", file: "delaware",
        title: t.title + " (Delaware)", eq: [], tags: ["Delaware", d.short].concat(rows.map(r => String(r[0]))),
        note: "From " + d.org + ", " + d.title + (d.year ? " (" + d.year + ")" : "") + ". " + (t.notes || ""),
        inputs: [{ k: "row", label: t.cols[0], type: "sel", opts: rows.map((r, i) => [String(r[0]), i]), v: 0 }],
        outputs,
        f: v => { const r = rows[v.row] || []; const o = {}; outputs.forEach((x, i) => { const val = r[i + 1]; o[x.k] = val === null || val === undefined || val === "" ? "–" : String(val); }); return o; },
        noSolve: true, delaware: d.id,
      });
    }
  }
})(typeof window !== "undefined" ? window : globalThis);
