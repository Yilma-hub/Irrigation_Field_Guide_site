/* Chapter 12  Moved-Lateral, Gun, and Traveler Sprinkler Systems  (Equations 12.1 to 12.14, Tables 12.3, 12.5 to 12.10) */
(function (G) {
  const T = G.TAB = G.TAB || {};
  const C = (s) => { s.ch = 12; s.file = "ch12"; return calc(s); };
  const HW = (Q, Cv, d) => 456 * Math.pow(Q / Cv, 1.852) / Math.pow(d, 4.866); // Eq. 8.11b, psi/100 ft

  // Table 12.3. Depth of water applied per hour (application rate), in/hr (p. 239)
  T["12.3"] = {
    title: "Depth of water applied per hour (application rate), in/hr",
    cols: ["S_L (ft)", "S_m (ft)", "S_L x S_m (ft²)", "4 gpm", "6 gpm", "8 gpm", "10 gpm", "12 gpm", "15 gpm", "20 gpm", "25 gpm"],
    rows: [
      [20, 40, 800, 0.48, 0.72, 0.96, 1.20, 1.44, 1.81, null, null],
      [30, 40, 1200, 0.32, 0.48, 0.64, 0.80, 0.96, 1.20, 1.61, null],
      [40, 40, 1600, 0.24, 0.36, 0.48, 0.60, 0.72, 0.90, 1.20, 1.50],
      [20, 50, 1000, 0.39, 0.58, 0.77, 0.96, 1.16, 1.44, 1.93, null],
      [30, 50, 1500, 0.26, 0.39, 0.51, 0.64, 0.77, 0.96, 1.28, 1.61],
      [40, 50, 2000, 0.19, 0.29, 0.39, 0.48, 0.58, 0.72, 0.96, 1.20],
      [50, 50, 2500, 0.15, 0.23, 0.31, 0.39, 0.46, 0.58, 0.77, 0.96],
      [20, 60, 1200, 0.32, 0.48, 0.64, 0.80, 0.96, 1.20, 1.61, null],
      [30, 60, 1800, 0.21, 0.32, 0.43, 0.54, 0.64, 0.80, 1.07, 1.34],
      [40, 60, 2400, 0.16, 0.24, 0.32, 0.40, 0.48, 0.60, 0.80, 1.00],
      [50, 60, 3000, 0.13, 0.19, 0.26, 0.32, 0.39, 0.48, 0.64, 0.80],
      [60, 60, 3600, 0.11, 0.16, 0.21, 0.27, 0.32, 0.40, 0.54, 0.67],
      [30, 70, 2100, 0.18, 0.28, 0.37, 0.46, 0.55, 0.69, 0.92, 1.15],
      [40, 70, 2800, 0.14, 0.21, 0.28, 0.34, 0.41, 0.52, 0.69, 0.86],
      [50, 70, 3500, 0.11, 0.17, 0.22, 0.28, 0.33, 0.41, 0.55, 0.69],
      [60, 70, 4200, 0.09, 0.14, 0.18, 0.23, 0.28, 0.34, 0.46, 0.57],
      [70, 70, 4900, null, 0.12, 0.16, 0.20, 0.24, 0.29, 0.39, 0.49],
      [40, 80, 3200, 0.12, 0.18, 0.24, 0.30, 0.36, 0.45, 0.60, 0.75],
      [50, 80, 4000, 0.10, 0.14, 0.19, 0.24, 0.29, 0.36, 0.48, 0.60],
      [60, 80, 4800, null, 0.12, 0.16, 0.20, 0.24, 0.30, 0.40, 0.50],
      [70, 80, 5600, null, 0.10, 0.14, 0.17, 0.21, 0.26, 0.34, 0.43],
      [80, 80, 6400, null, 0.09, 0.12, 0.15, 0.18, 0.23, 0.30, 0.38]],
    notes: "Blank cells are not printed in the book. Values equal 96.3 q<sub>s</sub> / (S<sub>L</sub> S<sub>m</sub>) (Eq. 12.1).",
  };
  const q123 = [4, 6, 8, 10, 12, 15, 20, 25];

  // Table 12.5. Catch can evaluation, volumes caught (cm³) with the central lateral only (p. 253)
  T["12.5"] = {
    title: "Results of catch can evaluation for an example system (volume caught, cm³)",
    cols: ["North of central sprinkler (ft)", "-35 ft E", "-25", "-15", "-5", "5", "15", "25", "35"],
    rows: [
      [65, 23, 20, 19, 23, 24, 19, 18, 22], [55, 76, 63, 60, 73, 76, 61, 58, 70],
      [45, 118, 98, 94, 114, 119, 94, 90, 109], [35, 160, 134, 127, 154, 161, 128, 123, 147],
      [25, 191, 160, 153, 185, 193, 153, 147, 176], [15, 212, 177, 169, 205, 214, 170, 163, 196],
      [5, 233, 195, 186, 225, 235, 187, 179, 215], [-5, 210, 176, 167, 203, 212, 168, 161, 194],
      [-15, 191, 160, 152, 184, 192, 154, 147, 176], [-25, 163, 136, 129, 156, 163, 132, 125, 149],
      [-35, 112, 93, 87, 105, 111, 93, 87, 100], [-45, 50, 40, 35, 43, 47, 45, 39, 41],
      [-55, 22, 17, 12, 15, 19, 23, 18, 14], [-65, 0, 0, 0, 0, 0, 0, 0, 0]],
    notes: "Can top diameter 4 in, area 81.08 cm². Lateral spacing 60 ft. The book converts each volume to depth, overlaps the three sets, and reports CU = 90%.",
  };
  const t125flat = T["12.5"].rows.map(r => r.slice(1).join(", ")).join(", ");
  const t125pos = T["12.5"].rows.map(r => r[0]).join(", ");

  // Table 12.6. Performance of Nelson 150 and 200 series big guns (p. 259)
  const P150 = [50, 60, 70, 80, 90, 100, 110, 120], P200T = [60, 70, 80, 90, 100, 110, 120, 130], P200R = [50, 60, 70, 80, 90, 100, 110, 120, 130];
  const gunSets = [
    { name: "150 T taper bore (24°)", P: P150, sizes: [0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3], data: [
      [100, 250, 130, 270, 165, 290, 205, 310, 255, 330, 300, 345, 350, 360],
      [110, 265, 143, 285, 182, 305, 225, 325, 275, 345, 330, 365, 385, 380],
      [120, 280, 155, 300, 197, 320, 245, 340, 295, 360, 355, 380, 415, 395],
      [128, 290, 165, 310, 210, 335, 260, 355, 315, 375, 380, 395, 445, 410],
      [135, 300, 175, 320, 223, 345, 275, 365, 335, 390, 405, 410, 475, 425],
      [143, 310, 185, 330, 235, 355, 290, 375, 355, 400, 425, 420, 500, 440],
      [150, 320, 195, 340, 247, 365, 305, 385, 370, 410, 445, 430, 525, 450],
      [157, 330, 204, 350, 258, 375, 320, 395, 385, 420, 465, 440, 545, 460]] },
    { name: "150 R ring (24°)", P: P150, sizes: [0.86, 0.97, 1.08, 1.18, 1.26, 1.34, 1.41], data: [
      [100, 245, 130, 265, 165, 285, 205, 300, 255, 320, 300, 335, 350, 350],
      [110, 260, 143, 280, 182, 300, 225, 315, 275, 335, 330, 350, 385, 365],
      [120, 270, 155, 290, 197, 310, 245, 330, 295, 350, 355, 365, 415, 380],
      [128, 280, 165, 300, 210, 320, 260, 340, 315, 360, 380, 380, 445, 395],
      [135, 290, 175, 310, 223, 330, 275, 350, 335, 370, 405, 390, 475, 405],
      [143, 300, 185, 320, 235, 340, 290, 360, 355, 380, 425, 400, 500, 415],
      [150, 310, 195, 330, 247, 350, 305, 370, 370, 390, 445, 410, 525, 425],
      [157, 315, 204, 335, 258, 360, 320, 380, 385, 400, 465, 420, 545, 435]] },
    { name: "200 T taper bore (27°)", P: P200T, sizes: [1.05, 1.2, 1.3, 1.4, 1.5, 1.6, 1.75, 1.9], data: [
      [250, 345, 330, 375, 385, 390, 440, 410, 515, 430, 585, 445, 695, 470, 825, 495],
      [270, 360, 355, 395, 415, 410, 480, 430, 555, 450, 630, 465, 755, 495, 890, 515],
      [290, 375, 380, 410, 445, 430, 515, 450, 590, 470, 675, 485, 805, 515, 950, 535],
      [310, 390, 405, 425, 475, 445, 545, 465, 625, 485, 715, 505, 855, 535, 1005, 555],
      [325, 400, 425, 440, 500, 460, 575, 480, 660, 500, 755, 520, 900, 550, 1060, 575],
      [340, 410, 445, 450, 525, 470, 605, 495, 695, 515, 790, 535, 945, 565, 1110, 590],
      [355, 420, 465, 460, 545, 480, 630, 505, 725, 530, 825, 550, 985, 580, 1160, 605],
      [370, 425, 485, 465, 565, 485, 655, 515, 755, 540, 860, 560, 1025, 590, 1210, 620]] },
    { name: "200 R ring (27°)", P: P200R, sizes: [1.29, 1.46, 1.56, 1.66, 1.74, 1.83, 1.93], data: [
      [230, 325, 300, 355, 350, 370, 410, 390, 470, 405, 535, 420, 640, 435],
      [250, 340, 330, 370, 385, 390, 445, 410, 515, 425, 585, 440, 695, 455],
      [270, 355, 355, 385, 415, 405, 480, 425, 555, 440, 630, 455, 755, 475],
      [290, 370, 380, 400, 445, 420, 515, 440, 590, 455, 675, 470, 805, 490],
      [310, 380, 405, 415, 475, 435, 545, 455, 625, 470, 715, 485, 855, 505],
      [325, 390, 425, 425, 500, 445, 575, 465, 660, 480, 755, 500, 900, 520],
      [340, 400, 445, 435, 525, 455, 605, 475, 685, 490, 790, 510, 945, 535],
      [355, 410, 465, 445, 545, 465, 630, 485, 725, 500, 825, 520, 985, 545],
      [370, 415, 485, 450, 565, 470, 655, 490, 755, 505, 860, 525, 1025, 550]] }];
  T["12.6"] = {
    title: "Performance of 150 and 200 series big guns (Nelson Irrigation Corp.)",
    cols: ["Gun and nozzle", "Nozzle size (in)", "Pressure (psi)", "Flow (gpm)", "Wetted diameter (ft)"],
    rows: [],
    notes: "150 series 24° trajectory, 200 series 27° trajectory. The diameter of throw is approximately 2% less for the 24° trajectory angle and 5% less for the 21° trajectory angle.",
  };
  const gunOpts = [];
  gunSets.forEach((g, gi) => g.sizes.forEach((s, si) => {
    gunOpts.push([g.name + ", " + s + " in nozzle", gi * 100 + si]);
    g.P.forEach((p, pi) => T["12.6"].rows.push([g.name, s, p, g.data[pi][2 * si], g.data[pi][2 * si + 1]]));
  }));

  // Table 12.7. Maximum traveler lane spacing, ft (p. 266)
  T["12.7"] = {
    title: "Maximum spacing for traveler irrigation systems (ring nozzles: smaller percentages, tapered nozzles: larger)",
    cols: ["Wetted diameter (ft)", "50% (wind over 10 mph)", "55% (wind over 10 mph)", "60% (wind up to 10 mph)", "65% (wind up to 10 mph)", "70% (wind up to 5 mph)", "75% (wind up to 5 mph)", "80% (no wind)"],
    rows: [
      [200, 100, 110, 120, 130, 140, 150, 160], [250, 125, 137, 150, 162, 175, 187, 200],
      [300, 150, 165, 180, 195, 210, 225, 240], [350, 175, 192, 210, 227, 245, 262, 280],
      [400, 200, 220, 240, 260, 280, 300, 320], [450, 225, 248, 270, 292, 315, 338, 360],
      [500, 250, 275, 300, 325, 350, 375, 400], [550, 275, 302, 330, 358, 385, 412, 440],
      [600, 300, 330, 360, 390, 420, null, null]],
    notes: "Based on USDA-NRCS (2016). Spacing = percent x wetted diameter.",
  };
  const pct127 = [[ "50% (ring nozzle, wind over 10 mph)", 50], ["55% (taper nozzle, wind over 10 mph)", 55], ["60% (ring nozzle, wind up to 10 mph)", 60],
    ["65% (taper nozzle, wind up to 10 mph)", 65], ["70% (ring nozzle, wind up to 5 mph)", 70], ["75% (taper nozzle, wind up to 5 mph)", 75], ["80% (no wind)", 80]];

  // Table 12.8. Typical cable-tow traveler characteristics, Harrison et al. (2015) (p. 267)
  T["12.8"] = {
    title: "Typical characteristics for cable-tow traveler irrigation systems",
    cols: ["Hose diameter (in)", "Hose length (ft)", "Max travel distance (ft)", "Max capacity (gpm)", "Max irrigated area (ac)", "Sprinkler pressure (psi)", "Typical lane spacing (ft)", "Area per pass (ac)", "Max hose pull (lb)"],
    rows: [
      [2.5, 660, 1320, 165, 33, "60-70", 180, 5.5, "1,300-1,900"],
      [3, 330, 660, 250, 50, "70-80", 210, 3.2, "1,000-1,500"],
      [3, 660, 1320, 250, 50, "70-80", 210, 6.4, "2,000-3,000"],
      [3.5, 660, 1320, 375, 75, "80-90", 240, 7.3, "3,000-4,000"],
      [4, 660, 1320, 535, 107, "90-100", 300, 9.1, "3,500-5,000"],
      [4, 1320, 2640, 535, 107, "90-100", 300, 18.2, "7,000-10,000"],
      [4.5, 660, 1320, 730, 145, "90-100", 300, 9.1, "4,000-6,000"],
      [4.5, 990, 1980, 730, 145, "90-100", 300, 13.6, "6,000-9,000"],
      [4.5, 1320, 2640, 730, 145, "90-100", 300, 18.2, "8,000-12,000"],
      [5, 660, 1320, 960, 192, "100-120", 330, 10, "5,000-7,000"]],
  };

  // Table 12.9. Lay-flat hose pressure loss, psi/100 ft at 100 psi (p. 269)
  T["12.9"] = {
    title: "Pressure loss (psi/100 ft) for lay-flat hose operated at 100 psi",
    cols: ["Flow (gpm)", "2.5 in", "3 in", "4 in", "4.5 in", "5 in"],
    rows: [
      [100, 1.6, null, null, null, null], [150, 3.4, 1.4, null, null, null], [200, 5.6, 2.4, null, null, null],
      [250, null, 3.6, 0.9, null, null], [300, null, 5.1, 1.3, 0.6, null], [400, null, null, 2.3, 1.3, null],
      [500, null, null, 3.5, 2.1, 1.1], [600, null, null, 4.9, 2.7, 1.6], [700, null, null, null, 3.6, 2.1],
      [800, null, null, null, 4.6, 2.7], [900, null, null, null, null, 3.4], [1000, null, null, null, null, 4.2]],
    notes: "USDA-NRCS (2016). Nominal inside diameter. Dashes in the book are blank here.",
  };
  // Table 12.10. Hard hose friction loss, psi/100 ft, C = 150 (p. 269)
  T["12.10"] = {
    title: "Friction loss in hard hose, psi/100 ft (Hazen-Williams C = 150)",
    cols: ["Flow (gpm)", "2.5 in", "2.7 in", "3.0 in", "3.3 in", "3.7 in", "4.0 in", "4.5 in", "5.0 in"],
    rows: [
      [75, 1.45, 1.00, 0.60, null, null, null, null, null],
      [100, 2.48, 1.70, 1.02, 0.64, null, null, null, null],
      [125, 3.74, 2.57, 1.54, 0.97, 0.56, null, null, null],
      [150, 5.24, 3.61, 2.16, 1.36, 0.78, 0.53, null, null],
      [175, 6.98, 4.80, 2.87, 1.81, 1.04, 0.71, 0.40, null],
      [200, 8.94, 6.14, 3.68, 2.31, 1.33, 0.91, 0.51, 0.31],
      [250, null, 9.29, 5.56, 3.50, 2.00, 1.37, 0.77, 0.46],
      [300, null, null, 7.80, 4.90, 2.81, 1.92, 1.08, 0.65],
      [350, null, null, 10.37, 6.52, 3.74, 2.56, 1.44, 0.86],
      [400, null, null, null, 8.35, 4.79, 3.28, 1.85, 1.11],
      [450, null, null, null, null, 5.95, 4.07, 2.30, 1.38],
      [500, null, null, null, null, null, 4.95, 2.79, 1.67],
      [550, null, null, null, null, null, 5.91, 3.33, 1.99],
      [600, null, null, null, null, null, null, 3.91, 2.34],
      [650, null, null, null, null, null, null, 4.54, 2.72],
      [700, null, null, null, null, null, null, 5.21, 3.12],
      [750, null, null, null, null, null, null, null, 3.54],
      [800, null, null, null, null, null, null, null, 3.99]],
    notes: "Hose inside diameter. Dashes in the book are blank here.",
  };
  // interpolate a column of a flow table over the rows that have values
  function colInterp(tab, col, x) {
    const pts = tab.rows.filter(r => r[col] !== null && r[col] !== undefined).map(r => [r[0], r[col]]);
    if (!pts.length) return NaN;
    if (x < pts[0][0] || x > pts[pts.length - 1][0]) return NaN;
    return M.interp(pts, x);
  }

  C({
    id: "eq-12.1", eq: ["12.1"], sec: "12.2", page: 238, title: "Moved-lateral application rate and gross depth",
    tags: ["application rate", "gross depth", "side roll", "hand move", "wheel line", "how much water does my set put on", "inches per hour sprinkler"],
    inputs: [
      { k: "qs", sym: "q<sub>s</sub>", label: "Sprinkler discharge", dim: "flow", u: "gpm", v: 10.3 },
      { k: "SL", sym: "S<sub>L</sub>", label: "Sprinkler spacing along the lateral", dim: "length", u: "ft", v: 40 },
      { k: "Sm", sym: "S<sub>m</sub>", label: "Lateral spacing along the mainline", dim: "length", u: "ft", v: 60 },
      { k: "To", sym: "T<sub>o</sub>", label: "Application time per set", dim: "time", u: "hr", v: 11 }],
    outputs: [
      { k: "Ar", sym: "A<sub>r</sub>", label: "Average application rate", dim: "rate", u: "in/hr", dp: 3 },
      { k: "dg", sym: "d<sub>g</sub>", label: "Gross depth of application", dim: "length", u: "in", dp: 2 }],
    f: v => { const Ar = 96.3 * v.qs / (v.SL * v.Sm); return { Ar, dg: Ar * v.To }; },
    // the book rounds A_r to 0.41 in/hr before multiplying by 11 hr, giving 4.5 in
    examples: [{ ref: "Examples 12.2 and 12.3", page: 245, in: { qs: 10.3, SL: 40, Sm: 60, To: 11 }, out: { Ar: 0.41, dg: 4.5 }, tol: 0.015 }],
    tables: ["12.3"],
  });

  C({
    id: "eq-12.2", eq: ["12.2"], sec: "12.2", page: 238, title: "Net depth from gross depth",
    tags: ["net depth", "application efficiency", "low quarter", "ELQ"],
    inputs: [
      { k: "dg", sym: "d<sub>g</sub>", label: "Gross depth of application", dim: "length", u: "in", v: 4.5 },
      { k: "E", sym: "E<sub>LQ</sub>", label: "Application efficiency of the low quarter", dim: "frac", u: "decimal", v: 0.75 }],
    outputs: [{ k: "dn", sym: "d<sub>n</sub>", label: "Net depth of application", dim: "length", u: "in", dp: 2 }],
    f: v => ({ dn: v.dg * v.E }),
    examples: [{ ref: "Example 12.3", page: 246, in: { dg: 4.5, E: 0.75 }, out: { dn: 3.38 } }],
  });

  C({
    id: "eq-12.3", eq: ["12.3"], sec: "12.2", page: 239, title: "Required net depth from interval and crop water use",
    tags: ["required depth", "irrigation interval", "net crop water use", "how much do I need each irrigation"],
    inputs: [
      { k: "Ii", sym: "I<sub>i</sub>", label: "Irrigation interval", dim: "time", u: "d", v: 11.5 },
      { k: "Cn", sym: "C<sub>n</sub>", label: "Net crop water use rate", dim: "rate", u: "in/d", v: 0.294 }],
    outputs: [{ k: "dr", sym: "d<sub>r</sub>", label: "Required net depth", dim: "length", u: "in", dp: 2 }],
    f: v => ({ dr: v.Ii * v.Cn }),
    examples: [{ ref: "Example 12.3 (3.38 in over 11.5 d = 0.29 in/d)", page: 246, in: { Ii: 11.5, Cn: 3.38 / 11.5 }, out: { dr: 3.38 } }],
  });

  C({
    id: "eq-12.4", eq: ["12.4"], sec: "12.2", page: 239, title: "Allowable depletion",
    tags: ["allowable depletion", "AD", "MAD", "root zone", "how much can the soil hold before irrigating"],
    inputs: [
      { k: "Rd", sym: "R<sub>d</sub>", label: "Root depth for scheduling", dim: "length", u: "ft", v: 4 },
      { k: "AWC", sym: "AWC", label: "Available water capacity", dim: "awc", u: "in/ft", v: 1.8 },
      { k: "fdc", sym: "f<sub>dc</sub>", label: "Allowable (critical) depletion fraction", dim: "frac", u: "decimal", v: 0.5 }],
    outputs: [{ k: "AD", sym: "AD", label: "Allowable depletion before irrigating", dim: "length", u: "in", dp: 2 }],
    f: v => ({ AD: v.Rd * v.AWC * v.fdc }),
    examples: [{ ref: "Example 12.3", page: 246, in: { Rd: 4, AWC: 1.8, fdc: 0.5 }, out: { AD: 3.6 } }],
    figs: ["12.5"],
  });

  C({
    id: "eq-12.5-12.7", eq: ["12.5", "12.6", "12.7"], sec: "12.2", page: 241, title: "Area per set and number of sets",
    tags: ["acres per set", "number of sets", "sets in field", "how many moves"],
    inputs: [
      { k: "L", sym: "L", label: "Lateral length", dim: "length", u: "ft", v: 1320 },
      { k: "Sm", sym: "S<sub>m</sub>", label: "Lateral spacing along the mainline", dim: "length", u: "ft", v: 60 },
      { k: "Wf", sym: "W<sub>f</sub>", label: "Field width", dim: "length", u: "ft", v: 1320 },
      { k: "Lf", sym: "L<sub>f</sub>", label: "Field length", dim: "length", u: "ft", v: 2640 }],
    outputs: [
      { k: "As", sym: "A<sub>s</sub>", label: "Area irrigated per set (Eq. 12.5)", dim: "area", u: "ac", dp: 2 },
      { k: "Af", sym: "A<sub>f</sub>", label: "Field area", dim: "area", u: "ac", dp: 1 },
      { k: "Nraw", sym: "N<sub>s</sub>", label: "Number of sets, unrounded (Eq. 12.6 / 12.7)", dim: "count", dp: 2 },
      { k: "Ns", sym: "N<sub>s</sub>", label: "Number of sets (rounded up)", dim: "count", dp: 0 }],
    f: v => {
      const As = v.L * v.Sm / 43560, Af = v.Wf * v.Lf / 43560, Nraw = v.Wf * v.Lf / (v.Sm * v.L);
      return { As, Af, Nraw, Ns: Math.ceil(Nraw - 1e-9) };
    },
    examples: [{ ref: "Example 12.2", page: 245, in: { L: 1320, Sm: 60, Wf: 1320, Lf: 2640 }, out: { As: 1.82, Af: 80, Ns: 44 } }],
    figs: ["12.6"],
  });

  C({
    id: "eq-12.8-12.9", eq: ["12.8", "12.9"], sec: "12.2", page: 242, title: "Sets per lateral and number of laterals",
    tags: ["number of laterals", "sets per lateral", "how many wheel lines do I need"],
    inputs: [
      { k: "Ii", sym: "I<sub>i</sub>", label: "Irrigation interval", dim: "time", u: "d", v: 11.5 },
      { k: "Tm", sym: "T<sub>m</sub>", label: "Time to reposition the lateral to the first set", dim: "time", u: "hr", v: 12 },
      { k: "Ts", sym: "T<sub>s</sub>", label: "Set time", dim: "time", u: "hr", v: 12 },
      { k: "Ns", sym: "N<sub>s</sub>", label: "Number of sets in the field", dim: "count", v: 44 }],
    outputs: [
      { k: "Npraw", sym: "N<sub>p</sub>", label: "Sets per lateral, unrounded", dim: "count", dp: 2 },
      { k: "Np", sym: "N<sub>p</sub>", label: "Sets per lateral (rounded down)", dim: "count", dp: 0 },
      { k: "NL", sym: "N<sub>L</sub>", label: "Number of laterals (rounded up)", dim: "count", dp: 0 }],
    f: v => {
      const Npraw = (24 * v.Ii - v.Tm) / v.Ts, Np = Math.floor(Npraw + 1e-9);
      return { Npraw, Np, NL: Np > 0 ? Math.ceil(v.Ns / Np - 1e-9) : NaN };
    },
    examples: [{ ref: "Examples 12.2 and 12.3", page: 246, in: { Ii: 11.5, Tm: 12, Ts: 12, Ns: 44 }, out: { Np: 22, NL: 2 } }],
  });

  C({
    id: "eq-12.10", eq: ["12.10"], sec: "12.2", page: 247, title: "Average lateral pressure from minimum and maximum",
    tags: ["average pressure", "pressure variation", "20% rule", "pitot", "lateral evaluation", "is my pressure variation ok"],
    inputs: [
      { k: "Pmax", sym: "P<sub>max</sub>", label: "Maximum measured nozzle pressure", dim: "pressure", u: "psi", v: 45 },
      { k: "Pmin", sym: "P<sub>min</sub>", label: "Minimum measured nozzle pressure", dim: "pressure", u: "psi", v: 32 }],
    outputs: [
      { k: "Pa", sym: "P<sub>a</sub>", label: "Average pressure", dim: "pressure", u: "psi", dp: 1 },
      { k: "dP", label: "Pressure variation (max − min)", dim: "pressure", u: "psi", dp: 1 },
      { k: "lim", label: "Allowed variation (20% of average)", dim: "pressure", u: "psi", dp: 1 },
      { k: "pct", label: "Variation as percent of average", dim: "pct", u: "%", dp: 0 },
      { k: "ok", label: "Check", text: true }],
    f: v => {
      const Pa = v.Pmin + 0.25 * (v.Pmax - v.Pmin), dP = v.Pmax - v.Pmin;
      return { Pa, dP, lim: 0.2 * Pa, pct: dP / Pa * 100, ok: dP <= 0.2 * Pa ? "Meets the 20% guideline" : "Exceeds the 20% guideline: consider pressure regulators, flow control nozzles or larger pipe near the inlet" };
    },
    examples: [{ ref: "Example 12.4", page: 248, in: { Pmax: 45, Pmin: 32 }, out: { Pa: 35, dP: 13, lim: 7, ok: "Exceeds the 20% guideline: consider pressure regulators, flow control nozzles or larger pipe near the inlet" } }],
    figs: ["12.8"],
  });

  C({
    id: "avg-discharge-12", eq: [], sec: "12.2", page: 247, title: "Average sprinkler discharge from minimum and maximum",
    tags: ["discharge variation", "10% rule", "flow test", "bucket test sprinkler"],
    note: "The text says the average discharge equals the minimum plus about 40% of the measured variation, and discharge should vary less than 10% of the average.",
    inputs: [
      { k: "qmax", label: "Maximum measured sprinkler discharge", dim: "flow", u: "gpm", v: 10.96 },
      { k: "qmin", label: "Minimum measured sprinkler discharge", dim: "flow", u: "gpm", v: 9.11 }],
    outputs: [
      { k: "qa", label: "Average discharge", dim: "flow", u: "gpm", dp: 2 },
      { k: "pct", label: "Variation as percent of average", dim: "pct", u: "%", dp: 0 },
      { k: "ok", label: "Check", text: true }],
    f: v => { const qa = v.qmin + 0.4 * (v.qmax - v.qmin), pct = (v.qmax - v.qmin) / qa * 100; return { qa, pct, ok: pct <= 10 ? "Within 10% guideline" : "Exceeds 10% guideline" }; },
    // Table 12.4 (no regulators) lists 9.62 gpm average and 19% variation from the full lateral simulation
    examples: [{ ref: "Table 12.4", page: 250, in: { qmax: 10.96, qmin: 9.11 }, out: { qa: 9.62, pct: 19 }, tol: 0.06 }],
  });

  C({
    id: "can-depth-12", eq: [], sec: "12.2", page: 252, title: "Catch can volume to depth",
    tags: ["catch can", "rain gauge", "cm3 to inches", "can test"],
    inputs: [
      { k: "V", label: "Volume caught", dim: "volume", u: "cm³", v: 235 },
      { k: "D", label: "Diameter of the can top", dim: "length", u: "in", v: 4 }],
    outputs: [
      { k: "A", label: "Area of the can opening", dim: "area", u: "cm²", dp: 2 },
      { k: "d", label: "Depth caught", dim: "length", u: "in", dp: 2 }],
    f: v => { const A = 6.452 * Math.PI * v.D * v.D / 4; return { A, d: v.V / A / 2.54 }; },
    examples: [{ ref: "Example 12.5", page: 252, in: { V: 235, D: 4 }, out: { A: 81.08, d: 1.14 } }],
    tables: ["12.5"],
  });

  C({
    id: "catch-can-12", eq: [], sec: "12.2", page: 252, title: "Moved-lateral catch can test: overlap and CU",
    tags: ["catch can test", "uniformity", "CU", "Christiansen", "overlap sets", "how even is my side roll"],
    note: "Procedure of Example 12.5 and Table 12.5. Cans are laid out in rows parallel to one lateral. Volumes from the single central set are converted to depth, then each can between the central lateral and the next set (0 < y < S<sub>m</sub>) gets the depth caught at y + S<sub>m</sub> and y − S<sub>m</sub> added (the neighbouring sets). CU = 100 (1 − Σ|d − d̄| / (n d̄)).",
    inputs: [
      { k: "vol", label: "Volumes caught (cm³), row by row in the same order as the row distances", type: "list", v: t125flat },
      { k: "pos", label: "Row distances from the lateral (ft, one per row, + toward the next set)", type: "list", v: t125pos },
      { k: "nc", label: "Number of cans in each row", dim: "count", v: 8 },
      { k: "D", label: "Can top diameter", dim: "length", u: "in", v: 4 },
      { k: "Sm", sym: "S<sub>m</sub>", label: "Lateral spacing (set spacing)", dim: "length", u: "ft", v: 60 }],
    outputs: [
      { k: "n", label: "Number of overlapped can locations", dim: "count", dp: 0 },
      { k: "mean", sym: "d<sub>a</sub>", label: "Mean overlapped depth", dim: "length", u: "in", dp: 2 },
      { k: "dev", label: "Mean absolute deviation", dim: "length", u: "in", dp: 2 },
      { k: "CU", sym: "CU", label: "Coefficient of uniformity", dim: "pct", u: "%", dp: 0 },
      { k: "ov", label: "Overlapped depths by row (in)", text: true }],
    f: v => {
      const vol = M.list(v.vol), pos = M.list(v.pos), nc = Math.round(v.nc);
      const A = 6.452 * Math.PI * v.D * v.D / 4;
      const depth = (row, c) => vol[row * nc + c] / A / 2.54;
      const findRow = y => pos.findIndex(p => Math.abs(p - y) < 1e-6);
      const all = [], lines = [];
      pos.forEach((y, r) => {
        if (!(y > 0 && y < v.Sm)) return;
        const rr = [];
        for (let c = 0; c < nc; c++) {
          let s = 0;
          for (let k = -3; k <= 3; k++) { const i = findRow(y + k * v.Sm); if (i >= 0) s += depth(i, c); }
          rr.push(s); all.push(s);
        }
        lines.push(y + " ft: " + rr.map(x => x.toFixed(2)).join(", "));
      });
      const mean = M.mean(all), dev = M.mean(all.map(x => Math.abs(x - mean)));
      return { n: all.length, mean, dev, CU: 100 * (1 - dev / mean), ov: lines.join("; ") };
    },
    examples: [{ ref: "Example 12.5 and Table 12.5", page: 252, in: {}, out: { n: 48, mean: 1.26, dev: 0.13, CU: 90 }, tol: 0.03 }],
    tables: ["12.5"], figs: ["12.11"],
  });

  C({
    id: "cu-list-12", eq: [], sec: "12.2", page: 252, title: "Coefficient of uniformity from a list of depths",
    tags: ["CU", "Christiansen uniformity", "catch can", "uniformity coefficient"],
    inputs: [{ k: "d", label: "Overlapped depths (any unit)", type: "list", v: "1.39, 1.16, 1.10, 1.34, 1.40, 1.11, 1.06, 1.28" }],
    outputs: [
      { k: "mean", label: "Mean depth", dp: 3 },
      { k: "dev", label: "Mean absolute deviation", dp: 3 },
      { k: "CU", sym: "CU", label: "Coefficient of uniformity", dim: "pct", u: "%", dp: 1 }],
    f: v => { const a = M.list(v.d), m = M.mean(a), dev = M.mean(a.map(x => Math.abs(x - m))); return { mean: m, dev, CU: 100 * (1 - dev / m) }; },
  });

  C({
    id: "eq-12.11", eq: ["12.11"], sec: "12.5", page: 268, title: "Traveler gross depth and travel speed",
    tags: ["traveler", "big gun", "hard hose", "travel speed", "depth applied traveler", "how fast should my traveler go"],
    inputs: [
      { k: "qs", sym: "q<sub>s</sub>", label: "Gun discharge", dim: "flow", u: "gpm", v: 585 },
      { k: "Wp", sym: "W<sub>p</sub>", label: "Travel lane spacing (set width)", dim: "length", u: "ft", v: 264 },
      { k: "Ll", sym: "L<sub>l</sub>", label: "Travel distance in the lane (lane length less setback)", dim: "length", u: "ft", v: 1212 },
      { k: "To", sym: "T<sub>o</sub>", label: "Time of operation for one lane", dim: "time", u: "hr", v: 11 }],
    outputs: [
      { k: "vt", sym: "v<sub>t</sub>", label: "Travel speed", dim: "velocity", u: "ft/hr", dp: 1 },
      { k: "dg", sym: "d<sub>g</sub>", label: "Average gross depth applied", dim: "length", u: "in", dp: 2 }],
    f: v => { const vt = v.Ll / v.To; return { vt, dg: 96.3 * v.qs * v.To / (v.Wp * v.Ll) }; },
    examples: [{ ref: "Example 12.6", page: 268, in: { qs: 585, Wp: 264, Ll: 1300 - 88, To: 11 }, out: { vt: 110, dg: 1.94 } }],
    figs: ["12.18", "12.20"],
  });

  C({
    id: "eq-12.12", eq: ["12.12"], sec: "12.5", page: 268, title: "Traveler gun average application rate",
    tags: ["traveler application rate", "big gun", "wetted radius", "gun angle", "runoff traveler"],
    inputs: [
      { k: "qs", sym: "q<sub>s</sub>", label: "Gun discharge", dim: "flow", u: "gpm", v: 585 },
      { k: "Wr", sym: "W<sub>r</sub>", label: "Wetted radius of the gun", dim: "length", u: "ft", v: 220 },
      { k: "b", sym: "β", label: "Central angle of gun operation", dim: "angle", u: "degrees", v: 270 }],
    outputs: [{ k: "Ar", sym: "A<sub>r</sub>", label: "Average application rate", dim: "rate", u: "in/hr", dp: 2 }],
    f: v => ({ Ar: 11035 / v.b * v.qs / (v.Wr * v.Wr) }),
    examples: [{ ref: "Example 12.6", page: 268, in: { qs: 585, Wr: 220, b: 270 }, out: { Ar: 0.49 } }],
  });

  C({
    id: "eq-12.13", eq: ["12.13"], sec: "12.5", page: 268, title: "Traveler flow requirement",
    tags: ["traveler flow", "gun size", "system capacity traveler", "how many gpm does my traveler need"],
    inputs: [
      { k: "Cn", sym: "C<sub>n</sub>", label: "Net system capacity requirement", dim: "capacity", u: "gpm/ac", v: 4.5 },
      { k: "Ea", sym: "E<sub>a</sub>", label: "Application efficiency", dim: "frac", u: "decimal", v: 0.75 },
      { k: "Wp", sym: "W<sub>p</sub>", label: "Travel lane width", dim: "length", u: "ft", v: 264 },
      { k: "Ll", sym: "L<sub>l</sub>", label: "Travel lane length", dim: "length", u: "ft", v: 1300 },
      { k: "Ns", sym: "N<sub>s</sub>", label: "Number of sets (lanes) in the field", dim: "count", v: 10 },
      { k: "Nt", sym: "N<sub>t</sub>", label: "Number of travelers", dim: "count", v: 1 },
      { k: "Ts", sym: "T<sub>s</sub>", label: "Set time (between moves)", dim: "time", u: "hr", v: 12 },
      { k: "To", sym: "T<sub>o</sub>", label: "Time water is applied per lane", dim: "time", u: "hr", v: 11 },
      { k: "Ii", sym: "I<sub>i</sub>", label: "Irrigation interval", dim: "time", u: "d", v: 5.5 },
      { k: "Td", sym: "T<sub>d</sub>", label: "Down time between irrigations", dim: "time", u: "d", v: 0.5 }],
    outputs: [
      { k: "As", label: "Area per set", dim: "area", u: "ac", dp: 2 },
      { k: "qs", sym: "q<sub>s</sub>", label: "Required traveler flow", dim: "flow", u: "gpm", dp: 0 }],
    f: v => ({ As: v.Wp * v.Ll / 43560, qs: v.Cn * v.Wp * v.Ll / (v.Ea * 43560) * (v.Ns / v.Nt) * (v.Ts / v.To) * (v.Ii / (v.Ii - v.Td)) }),
    examples: [{ ref: "Example 12.7", page: 269, in: {}, out: { As: 7.88, qs: 567 } }],
  });

  C({
    id: "eq-12.14", eq: ["12.14"], sec: "12.5", page: 272, title: "Gun discharge from pressure and nozzle size",
    tags: ["gun discharge", "big gun nozzle", "discharge coefficient", "nozzle flow"],
    inputs: [
      { k: "Cd", sym: "C<sub>d</sub>", label: "Discharge coefficient", v: 16.0 },
      { k: "P", sym: "P", label: "Nozzle pressure", dim: "pressure", u: "psi", v: 60 },
      { k: "a", sym: "a", label: "Pressure exponent (pressure in psi)", v: 0.5 },
      { k: "Dn", sym: "D<sub>n</sub>", label: "Nozzle diameter", dim: "length", u: "in", v: 1.83 },
      { k: "b", sym: "b", label: "Nozzle diameter exponent (size in inches)", v: 2.566 }],
    outputs: [{ k: "qs", sym: "q<sub>s</sub>", label: "Gun discharge", dim: "flow", u: "gpm", dp: 0 }],
    f: v => ({ qs: v.Cd * Math.pow(v.P, v.a) * Math.pow(v.Dn, v.b) }),
    examples: [{ ref: "Figure 12.22 text", page: 272, in: {}, out: { qs: 584 } }],
    tables: ["12.6"], figs: ["12.21", "12.22"],
  });

  C({
    id: "tab-12.3", eq: [], sec: "12.2", page: 239, title: "Moved-lateral application rate table (Table 12.3)",
    tags: ["application rate table", "sprinkler spacing", "40 by 60", "inches per hour"],
    tables: ["12.3"],
    inputs: [
      { k: "row", label: "Spacing S<sub>L</sub> x S<sub>m</sub> (ft)", type: "sel", opts: T["12.3"].rows.map((r, i) => [r[0] + " x " + r[1], i]), v: 9 },
      { k: "qs", sym: "q<sub>s</sub>", label: "Sprinkler discharge", dim: "flow", u: "gpm", v: 10 }],
    outputs: [
      { k: "tab", label: "Table value (interpolated between discharge columns)", dim: "rate", u: "in/hr", dp: 2 },
      { k: "Ar", sym: "A<sub>r</sub>", label: "Computed 96.3 q<sub>s</sub>/(S<sub>L</sub>S<sub>m</sub>)", dim: "rate", u: "in/hr", dp: 3 }],
    f: v => {
      const r = T["12.3"].rows[v.row];
      const pts = q123.map((q, i) => [q, r[3 + i]]).filter(p => p[1] !== null);
      const tab = v.qs < pts[0][0] || v.qs > pts[pts.length - 1][0] ? NaN : M.interp(pts, v.qs);
      return { tab, Ar: 96.3 * v.qs / (r[0] * r[1]) };
    },
    examples: [{ ref: "Table 12.3", page: 239, in: { row: 9, qs: 10 }, out: { tab: 0.40, Ar: 0.40 } }],
  });

  C({
    id: "tab-12.6", eq: [], sec: "12.4", page: 259, title: "Big gun flow and wetted diameter (Table 12.6)",
    tags: ["Nelson big gun", "gun nozzle chart", "ring nozzle", "taper bore", "wetted diameter gun", "gun flow"],
    tables: ["12.6"], figs: ["12.15"],
    inputs: [
      { k: "g", label: "Gun series and nozzle", type: "sel", opts: gunOpts, v: 2 },
      { k: "P", label: "Pressure at the gun", dim: "pressure", u: "psi", v: 80 }],
    outputs: [
      { k: "q", label: "Gun flow", dim: "flow", u: "gpm", dp: 0 },
      { k: "Dw", label: "Wetted diameter", dim: "length", u: "ft", dp: 0 },
      { k: "Wr", label: "Wetted radius", dim: "length", u: "ft", dp: 0 }],
    f: v => {
      const g = gunSets[Math.floor(v.g / 100)], si = v.g % 100;
      if (v.P < g.P[0] || v.P > g.P[g.P.length - 1]) return { q: NaN, Dw: NaN, Wr: NaN };
      const q = M.interp(g.P.map((p, i) => [p, g.data[i][2 * si]]), v.P), Dw = M.interp(g.P.map((p, i) => [p, g.data[i][2 * si + 1]]), v.P);
      return { q, Dw, Wr: Dw / 2 };
    },
    examples: [{ ref: "Table 12.6", page: 259, in: { g: 2, P: 80 }, out: { q: 210, Dw: 335 } },
               { ref: "Table 12.6", page: 259, in: { g: 305, P: 60 }, out: { q: 585, Dw: 440 } }],
  });

  C({
    id: "tab-12.7", eq: [], sec: "12.5", page: 266, title: "Maximum traveler lane spacing (Table 12.7)",
    tags: ["traveler lane spacing", "towpath spacing", "wind", "maximum set width"],
    tables: ["12.7"],
    inputs: [
      { k: "Dw", label: "Gun wetted diameter", dim: "length", u: "ft", v: 440 },
      { k: "pct", label: "Wind and nozzle type", type: "sel", opts: pct127, v: 65 },
      { k: "Wp", label: "Actual lane spacing (optional check)", dim: "length", u: "ft", v: 264 }],
    outputs: [
      { k: "S", label: "Maximum lane spacing", dim: "length", u: "ft", dp: 0 },
      { k: "act", label: "Actual spacing as percent of wetted diameter", dim: "pct", u: "%", dp: 0 },
      { k: "ok", label: "Check", text: true }],
    f: v => { const S = v.Dw * v.pct / 100; return { S, act: v.Wp / v.Dw * 100, ok: v.Wp <= S ? "Spacing is within the maximum" : "Spacing exceeds the maximum" }; },
    examples: [{ ref: "Section 12.5.4", page: 272, in: { Dw: 440, pct: 65, Wp: 264 }, out: { S: 286, act: 60 } }],
  });

  C({
    id: "tab-12.8", eq: [], sec: "12.5", page: 267, title: "Cable-tow traveler characteristics (Table 12.8)",
    tags: ["cable tow traveler", "soft hose traveler", "hose pull", "traveler size"],
    tables: ["12.8"],
    inputs: [{ k: "r", label: "Hose diameter and length", type: "sel", opts: T["12.8"].rows.map((r, i) => [r[0] + " in x " + r[1] + " ft", i]), v: 6 }],
    outputs: [
      { k: "dist", label: "Maximum travel distance", dim: "length", u: "ft", dp: 0 },
      { k: "cap", label: "Maximum capacity", dim: "flow", u: "gpm", dp: 0 },
      { k: "area", label: "Maximum irrigated area", dim: "area", u: "ac", dp: 0 },
      { k: "P", label: "Sprinkler pressure range (psi)", text: true },
      { k: "lane", label: "Typical lane spacing", dim: "length", u: "ft", dp: 0 },
      { k: "pass", label: "Area covered per pass", dim: "area", u: "ac", dp: 1 },
      { k: "pull", label: "Maximum hose pull range (lb)", text: true }],
    f: v => { const r = T["12.8"].rows[v.r]; return { dist: r[2], cap: r[3], area: r[4], P: r[5], lane: r[6], pass: r[7], pull: r[8] }; },
  });

  C({
    id: "tab-12.9-12.10", eq: [], sec: "12.5", page: 269, title: "Traveler hose friction loss (Tables 12.9 and 12.10)",
    tags: ["hose friction", "hard hose loss", "lay flat hose", "traveler pressure loss", "PE hose"],
    tables: ["12.9", "12.10"],
    inputs: [
      { k: "h", label: "Hose type and inside diameter", type: "sel", v: 106,
        opts: [["Lay-flat 2.5 in (Table 12.9)", 1], ["Lay-flat 3 in", 2], ["Lay-flat 4 in", 3], ["Lay-flat 4.5 in", 4], ["Lay-flat 5 in", 5],
               ["Hard hose 2.5 in (Table 12.10)", 101], ["Hard hose 2.7 in", 102], ["Hard hose 3.0 in", 103], ["Hard hose 3.3 in", 104],
               ["Hard hose 3.7 in", 105], ["Hard hose 4.0 in", 106], ["Hard hose 4.5 in", 107], ["Hard hose 5.0 in", 108]] },
      { k: "Q", label: "Flow", dim: "flow", u: "gpm", v: 400 },
      { k: "L", label: "Hose length", dim: "length", u: "ft", v: 1000 }],
    outputs: [
      { k: "f", label: "Friction loss (interpolated)", dim: "ploss", u: "psi/100 ft", dp: 2 },
      { k: "P", label: "Loss in the hose", dim: "pressure", u: "psi", dp: 1 }],
    f: v => {
      const tab = v.h > 100 ? T["12.10"] : T["12.9"], col = v.h > 100 ? v.h - 100 : v.h;
      const f = colInterp(tab, col, v.Q);
      return { f, P: f * v.L / 100 };
    },
    examples: [{ ref: "Table 12.10", page: 269, in: { h: 106, Q: 400, L: 1000 }, out: { f: 3.28, P: 32.8 } },
               { ref: "Table 12.9", page: 269, in: { h: 4, Q: 600, L: 100 }, out: { f: 2.7 } }],
  });

  C({
    id: "moved-lateral-sheet", eq: ["12.1", "12.2", "12.4", "12.5", "12.7"], sec: "12.2", page: 243,
    title: "Moved-lateral management spreadsheet (Figure 12.7)",
    tags: ["side roll evaluation", "wheel line design", "hand move", "moved lateral spreadsheet", "is my side roll set up right"],
    note: "Follows Figure 12.7 and Examples 12.1 to 12.3. Friction uses Eq. 8.11b (psi/100 ft = 456 (Q/C)<sup>1.852</sup> / d<sup>4.866</sup>), velocity 0.409 Q/D², elevation 2.31 ft/psi. Sets per lateral = sets in field / number of laterals; interval = sets per lateral x set time + reposition time.",
    inputs: [
      { k: "Lf", label: "Field length", dim: "length", u: "ft", v: 2640 },
      { k: "Wf", label: "Field width", dim: "length", u: "ft", v: 1320 },
      { k: "AWC", label: "Water holding capacity", dim: "awc", u: "in/ft", v: 1.8 },
      { k: "Qin", label: "Total inflow available", dim: "flow", u: "gpm", v: 700 },
      { k: "dM", label: "Mainline inside diameter", dim: "length", u: "in", v: 7.872 },
      { k: "LM", label: "Mainline length", dim: "length", u: "ft", v: 1320 },
      { k: "eM", label: "Mainline elevation gain", dim: "length", u: "ft", v: 0, min: -1e4 },
      { k: "CM", label: "Mainline Hazen-Williams C", v: 120 },
      { k: "L", label: "Lateral length", dim: "length", u: "ft", v: 1320 },
      { k: "NL", label: "Number of laterals", dim: "count", v: 2 },
      { k: "dL", label: "Lateral inside diameter", dim: "length", u: "in", v: 4.856 },
      { k: "CL", label: "Lateral Hazen-Williams C", v: 120 },
      { k: "eL", label: "Lateral elevation gain", dim: "length", u: "ft", v: 8, min: -1e4 },
      { k: "F", label: "Multiple outlet factor F (Table 8.3)", v: 0.36 },
      { k: "Sm", label: "Lateral spacing along mainline", dim: "length", u: "ft", v: 60 },
      { k: "SL", label: "Sprinkler spacing along lateral", dim: "length", u: "ft", v: 40 },
      { k: "P", label: "Design sprinkler pressure", dim: "pressure", u: "psi", v: 55 },
      { k: "qs", label: "Design sprinkler discharge (Table 11.1)", dim: "flow", u: "gpm", v: 10.3 },
      { k: "Dw", label: "Wetted diameter (Table 11.2)", dim: "length", u: "ft", v: 113 },
      { k: "nf", label: "Number of full-circle sprinklers", dim: "count", v: 32 },
      { k: "nh", label: "Number of half-circle sprinklers", dim: "count", v: 2 },
      { k: "ps", label: "Sprinkler spacing limit, % of wetted diameter (Table 11.3)", dim: "pct", u: "%", v: 45 },
      { k: "pl", label: "Lateral spacing limit, % of wetted diameter (Table 11.3)", dim: "pct", u: "%", v: 60 },
      { k: "Rd", label: "Root depth", dim: "length", u: "ft", v: 4 },
      { k: "fdc", label: "Critical depletion", dim: "frac", u: "decimal", v: 0.5 },
      { k: "E", label: "Application efficiency of low quarter", dim: "frac", u: "decimal", v: 0.75 },
      { k: "Ts", label: "Set time", dim: "time", u: "hr", v: 12 },
      { k: "Tmv", label: "Drain and move time", dim: "time", u: "hr", v: 1 },
      { k: "Tm", label: "Reposition time to first set", dim: "time", u: "hr", v: 12 }],
    outputs: [
      { k: "Af", label: "Field size", dim: "area", u: "ac", dp: 1 },
      { k: "Csys", label: "System capacity", dim: "capacity", u: "gpm/ac", dp: 2 },
      { k: "QL", label: "Lateral flow", dim: "flow", u: "gpm", dp: 0 },
      { k: "QM", label: "Mainline flow", dim: "flow", u: "gpm", dp: 0 },
      { k: "fM", label: "Mainline friction factor", dim: "ploss", u: "psi/100 ft", dp: 2 },
      { k: "PM", label: "Mainline total pressure loss", dim: "pressure", u: "psi", dp: 1 },
      { k: "vM", label: "Mainline velocity (limit 5 ft/s)", dim: "velocity", u: "ft/s", dp: 1 },
      { k: "fL", label: "Lateral friction factor", dim: "ploss", u: "psi/100 ft", dp: 2 },
      { k: "PE", label: "Enclosed pipe friction loss", dim: "pressure", u: "psi", dp: 1 },
      { k: "PF", label: "Lateral friction loss (x F)", dim: "pressure", u: "psi", dp: 1 },
      { k: "PL", label: "Pressure loss along lateral with elevation", dim: "pressure", u: "psi", dp: 1 },
      { k: "pv", label: "Pressure loss / design pressure (limit 20%)", dim: "pct", u: "%", dp: 0 },
      { k: "Ar", label: "Application rate", dim: "rate", u: "in/hr", dp: 2 },
      { k: "Smx", label: "Maximum sprinkler spacing", dim: "length", u: "ft", dp: 0 },
      { k: "Lmx", label: "Maximum lateral spacing", dim: "length", u: "ft", dp: 0 },
      { k: "vL", label: "Lateral inflow velocity (limit 7 ft/s)", dim: "velocity", u: "ft/s", dp: 1 },
      { k: "As", label: "Acres per set", dim: "area", u: "ac", dp: 2 },
      { k: "Ns", label: "Number of sets in field", dim: "count", dp: 0 },
      { k: "Np", label: "Sets per lateral", dim: "count", dp: 0 },
      { k: "AD", label: "Allowable depletion", dim: "length", u: "in", dp: 2 },
      { k: "Ta", label: "Application time", dim: "time", u: "hr", dp: 1 },
      { k: "Ii", label: "Irrigation interval", dim: "time", u: "d", dp: 1 },
      { k: "down", label: "Down time", dim: "pct", u: "%", dp: 0 },
      { k: "dg", label: "Gross depth applied", dim: "length", u: "in", dp: 2 },
      { k: "dn", label: "Net depth applied", dim: "length", u: "in", dp: 2 },
      { k: "Cn", label: "Net crop water use supplied", dim: "rate", u: "in/d", dp: 2 },
      { k: "chk", label: "Checks", text: true }],
    f: v => {
      const Af = v.Lf * v.Wf / 43560, QL = v.qs * (v.nf + v.nh / 2), QM = QL * v.NL;
      const fM = HW(QM, v.CM, v.dM), PM = fM * v.LM / 100 + v.eM / 2.31, vM = 0.409 * QM / (v.dM * v.dM);
      const fL = HW(QL, v.CL, v.dL), PE = fL * v.L / 100, PF = PE * v.F, PL = PF + v.eL / 2.31, pv = PL / v.P * 100;
      const Ar = 96.3 * v.qs / (v.SL * v.Sm), Smx = v.ps / 100 * v.Dw, Lmx = v.pl / 100 * v.Dw, vL = 0.409 * QL / (v.dL * v.dL);
      const As = v.L * v.Sm / 43560, Ns = Math.ceil(v.Wf * v.Lf / (v.Sm * v.L) - 1e-9), Np = Math.ceil(Ns / v.NL - 1e-9);
      const AD = v.Rd * v.AWC * v.fdc, Ta = v.Ts - v.Tmv, Ii = (Np * v.Ts + v.Tm) / 24, down = (24 * Ii - Np * Ta) / (24 * Ii) * 100;
      const dg = Ar * Ta, dn = dg * v.E, Cn = dn / Ii;
      const c = [];
      c.push(pv <= 20 ? "pressure variation OK" : "pressure variation over 20%");
      c.push(v.SL <= Smx && v.Sm <= Lmx ? "spacing OK" : "spacing exceeds wind limit");
      c.push(vM <= 5 ? "mainline velocity OK" : "mainline velocity over 5 ft/s");
      c.push(vL <= 7 ? "lateral velocity OK" : "lateral velocity over 7 ft/s");
      c.push(dn <= AD ? "net depth within allowable depletion" : "net depth exceeds allowable depletion (deep percolation)");
      c.push(QM <= v.Qin ? "flow within supply" : "flow exceeds supply");
      return { Af, Csys: v.Qin / Af, QL, QM, fM, PM, vM, fL, PE, PF, PL, pv, Ar, Smx, Lmx, vL, As, Ns, Np, AD, Ta, Ii, down, dg, dn, Cn, chk: c.join("; ") };
    },
    examples: [{ ref: "Figure 12.7, Examples 12.1 to 12.3", page: 243, in: {},
      out: { Af: 80, Csys: 8.75, QL: 340, QM: 680, fM: 0.49, PM: 6.5, vM: 4.5, fL: 1.44, PE: 19.0, PF: 6.8, PL: 10.3, pv: 19, Ar: 0.41,
             Smx: 51, Lmx: 68, vL: 5.9, As: 1.82, Ns: 44, Np: 22, AD: 3.6, Ta: 11, Ii: 11.5, dg: 4.5, dn: 3.4, Cn: 0.30 }, tol: 0.025 },
      // the sheet shows down time as a whole percent (12.3% printed as 12%)
      { ref: "Figure 12.7", page: 243, in: {}, out: { down: 12 }, tol: 0.03 }],
    figs: ["12.6", "12.7"], tables: ["12.3"],
  });

  C({
    id: "traveler-sheet", eq: ["12.11", "12.12", "12.14"], sec: "12.5", page: 271,
    title: "Traveler management spreadsheet (Figure 12.22)",
    tags: ["traveler evaluation", "big gun traveler", "hard hose reel", "required inlet pressure traveler", "traveler spreadsheet"],
    note: "Follows Figure 12.22 and Section 12.5.4. Gun discharge from Eq. 12.14; hose and mainline friction from Eq. 8.11b with the C values given; nozzle height and elevation converted at 2.31 ft/psi; cart and reel loss is a manufacturer value. Travel distance = lane length less starting setback. Interval = sets per traveler x set time + reposition time.",
    inputs: [
      { k: "Lf", label: "Field length", dim: "length", u: "ft", v: 2640 },
      { k: "Wf", label: "Field width", dim: "length", u: "ft", v: 1320 },
      { k: "Li", label: "Length of irrigated area", dim: "length", u: "ft", v: 2600 },
      { k: "sb", label: "Starting setback", dim: "length", u: "ft", v: 88 },
      { k: "AWC", label: "Water holding capacity", dim: "awc", u: "in/ft", v: 1.8 },
      { k: "Qin", label: "Available inflow", dim: "flow", u: "gpm", v: 700 },
      { k: "dM", label: "Mainline inside diameter", dim: "length", u: "in", v: 7.872 },
      { k: "LM", label: "Mainline length", dim: "length", u: "ft", v: 1320 },
      { k: "eM", label: "Mainline elevation gain", dim: "length", u: "ft", v: 0, min: -1e4 },
      { k: "CM", label: "Mainline Hazen-Williams C", v: 120 },
      { k: "Lh", label: "Hose length", dim: "length", u: "ft", v: 1250 },
      { k: "dh", label: "Hose inside diameter", dim: "length", u: "in", v: 4.5 },
      { k: "Ch", label: "Hose Hazen-Williams C", v: 150 },
      { k: "Nt", label: "Number of travelers", dim: "count", v: 1 },
      { k: "hn", label: "Height of nozzle", dim: "length", u: "ft", v: 9 },
      { k: "eL", label: "Elevation gain along path", dim: "length", u: "ft", v: 8, min: -1e4 },
      { k: "Ll", label: "Length of set (tow lane)", dim: "length", u: "ft", v: 1300 },
      { k: "Wp", label: "Set (tow path) width", dim: "length", u: "ft", v: 264 },
      { k: "Pn", label: "Design nozzle pressure", dim: "pressure", u: "psi", v: 60 },
      { k: "Cd", label: "Discharge coefficient C<sub>d</sub>", v: 16.0 },
      { k: "a", label: "Pressure exponent a", v: 0.5 },
      { k: "Dn", label: "Nozzle size", dim: "length", u: "in", v: 1.83 },
      { k: "b", label: "Nozzle size exponent b", v: 2.566 },
      { k: "Wr", label: "Wetted radius of gun", dim: "length", u: "ft", v: 220 },
      { k: "beta", label: "Central gun angle", dim: "angle", u: "degrees", v: 270 },
      { k: "Pcr", label: "Cart and reel pressure loss (manufacturer)", dim: "pressure", u: "psi", v: 19.4 },
      { k: "Pin", label: "Traveler inlet pressure available", dim: "pressure", u: "psi", v: 126 },
      { k: "lw", label: "Maximum lane width, % of wetted diameter (Table 12.7)", dim: "pct", u: "%", v: 65 },
      { k: "Rd", label: "Root depth", dim: "length", u: "ft", v: 4 },
      { k: "fdc", label: "Critical depletion", dim: "frac", u: "decimal", v: 0.5 },
      { k: "E", label: "Application efficiency of low quarter", dim: "frac", u: "decimal", v: 0.75 },
      { k: "Ts", label: "Set time", dim: "time", u: "hr", v: 12 },
      { k: "To", label: "Application time", dim: "time", u: "hr", v: 11 },
      { k: "Tm", label: "Reposition time", dim: "time", u: "hr", v: 12 }],
    outputs: [
      { k: "Af", label: "Field size", dim: "area", u: "ac", dp: 1 },
      { k: "Ai", label: "Irrigated area", dim: "area", u: "ac", dp: 1 },
      { k: "Csys", label: "System capacity", dim: "capacity", u: "gpm/ac", dp: 2 },
      { k: "qs", label: "Design gun discharge (Eq. 12.14)", dim: "flow", u: "gpm", dp: 0 },
      { k: "fM", label: "Mainline friction factor", dim: "ploss", u: "psi/100 ft", dp: 3 },
      { k: "PM", label: "Mainline pressure loss", dim: "pressure", u: "psi", dp: 1 },
      { k: "vM", label: "Mainline velocity", dim: "velocity", u: "ft/s", dp: 1 },
      { k: "fh", label: "Hose friction factor", dim: "ploss", u: "psi/100 ft", dp: 2 },
      { k: "Ph", label: "Hose friction loss", dim: "pressure", u: "psi", dp: 1 },
      { k: "Phn", label: "Nozzle height as pressure", dim: "pressure", u: "psi", dp: 1 },
      { k: "PeL", label: "Elevation change as pressure", dim: "pressure", u: "psi", dp: 1 },
      { k: "Ptot", label: "Total pressure loss", dim: "pressure", u: "psi", dp: 1 },
      { k: "Preq", label: "Required inlet pressure", dim: "pressure", u: "psi", dp: 0 },
      { k: "Dw", label: "Wetted diameter of gun", dim: "length", u: "ft", dp: 0 },
      { k: "Wmax", label: "Maximum set width", dim: "length", u: "ft", dp: 0 },
      { k: "As", label: "Acres per set", dim: "area", u: "ac", dp: 2 },
      { k: "Ns", label: "Number of sets in field", dim: "count", dp: 0 },
      { k: "Np", label: "Sets per traveler", dim: "count", dp: 0 },
      { k: "AD", label: "Allowable depletion", dim: "length", u: "in", dp: 2 },
      { k: "Tmv", label: "Drain and move time", dim: "time", u: "hr", dp: 1 },
      { k: "Ii", label: "Irrigation interval", dim: "time", u: "d", dp: 1 },
      { k: "down", label: "Down time", dim: "pct", u: "%", dp: 0 },
      { k: "vt", label: "Velocity of travel", dim: "velocity", u: "ft/hr", dp: 0 },
      { k: "Ar", label: "Application rate (Eq. 12.12)", dim: "rate", u: "in/hr", dp: 2 },
      { k: "dg", label: "Gross depth applied (Eq. 12.11)", dim: "length", u: "in", dp: 2 },
      { k: "dn", label: "Net depth applied", dim: "length", u: "in", dp: 2 },
      { k: "Cn", label: "Net crop water use supplied", dim: "rate", u: "in/d", dp: 2 },
      { k: "chk", label: "Checks", text: true }],
    f: v => {
      const Af = v.Lf * v.Wf / 43560, Ai = v.Li * v.Wf / 43560;
      const qs = v.Cd * Math.pow(v.Pn, v.a) * Math.pow(v.Dn, v.b), QM = qs * v.Nt;
      const fM = HW(QM, v.CM, v.dM), PM = fM * v.LM / 100 + v.eM / 2.31, vM = 0.409 * QM / (v.dM * v.dM);
      const fh = HW(qs, v.Ch, v.dh), Ph = fh * v.Lh / 100, Phn = v.hn / 2.31, PeL = v.eL / 2.31;
      const Ptot = Ph + Phn + PeL + v.Pcr, Preq = v.Pn + Ptot;
      const Dw = 2 * v.Wr, Wmax = v.lw / 100 * Dw, As = v.Wp * v.Ll / 43560;
      const Ns = Math.round(Ai / As), Np = Math.ceil(Ns / v.Nt - 1e-9);
      const AD = v.Rd * v.AWC * v.fdc, Tmv = v.Ts - v.To, Ii = (Np * v.Ts + v.Tm) / 24, down = (24 * Ii - Np * v.To) / (24 * Ii) * 100;
      const vt = (v.Ll - v.sb) / v.To, Ar = 11035 / v.beta * qs / (v.Wr * v.Wr), dg = 96.3 * qs / (v.Wp * vt), dn = dg * v.E;
      const c = [];
      c.push(v.Wp <= Wmax ? "lane width OK" : "lane width exceeds Table 12.7 limit");
      c.push(v.Pin >= Preq ? "inlet pressure adequate" : "inlet pressure below requirement by " + (Preq - v.Pin).toFixed(1) + " psi");
      c.push(QM <= v.Qin ? "flow within supply" : "flow exceeds supply");
      c.push(dn <= AD ? "net depth within allowable depletion" : "net depth exceeds allowable depletion");
      c.push(v.Lh + v.sb >= v.Ll ? "hose reaches the lane end" : "hose too short for the lane");
      return { Af, Ai, Csys: v.Qin / Ai, qs, fM, PM, vM, fh, Ph, Phn, PeL, Ptot, Preq, Dw, Wmax, As, Ns, Np, AD, Tmv, Ii, down, vt, Ar, dg, dn, Cn: dn / Ii, chk: c.join("; ") };
    },
    // Figure 12.22 lists 4.7 psi mainline loss; 0.373 psi/100 ft x 1320 ft gives 4.9, so that cell is not checked
    examples: [{ ref: "Figure 12.22", page: 271, in: {},
      out: { Af: 80, Ai: 78.8, Csys: 8.88, qs: 584, fM: 0.373, vM: 3.9, fh: 3.75, Ph: 46.9, Phn: 3.9, PeL: 3.5, Ptot: 73.7, Preq: 134,
             Dw: 440, Wmax: 286, As: 7.88, Ns: 10, Np: 10, AD: 3.6, Tmv: 1, Ii: 5.5, down: 17, vt: 110, Ar: 0.49, dg: 1.9, dn: 1.45, Cn: 0.26 }, tol: 0.025 }],
    figs: ["12.20", "12.21", "12.22"], tables: ["12.7", "12.10"],
  });
})(typeof window !== "undefined" ? window : globalThis);
