/* Chapter 13  Center Pivots and Lateral Moves  (Equations 13.1 to 13.7, Tables 13.1 to 13.6, 13.8) */
(function (G) {
  const T = G.TAB = G.TAB || {};
  const C = (s) => { s.ch = 13; s.file = "ch13"; return calc(s); };

  // Table 13.1. Sprinkler discharge per unit length along the lateral (qs/S), gpm/ft (p. 280)
  const cg131 = [4, 5, 6, 7, 8, 9, 10];
  T["13.1"] = {
    title: "Sprinkler discharge requirement per unit length along the lateral (qs/S), gpm/ft",
    cols: ["Distance from pivot (ft)", "4 gpm/ac", "5", "6", "7", "8", "9", "10"],
    rows: [
      [100, 0.06, 0.07, 0.09, 0.10, 0.12, 0.13, 0.14], [200, 0.12, 0.14, 0.17, 0.20, 0.23, 0.26, 0.29],
      [300, 0.17, 0.22, 0.26, 0.30, 0.35, 0.39, 0.43], [400, 0.23, 0.29, 0.35, 0.40, 0.46, 0.52, 0.58],
      [500, 0.29, 0.36, 0.43, 0.50, 0.58, 0.65, 0.72], [600, 0.35, 0.43, 0.52, 0.61, 0.69, 0.78, 0.87],
      [700, 0.40, 0.50, 0.61, 0.71, 0.81, 0.91, 1.01], [800, 0.46, 0.58, 0.69, 0.81, 0.92, 1.04, 1.15],
      [900, 0.52, 0.65, 0.78, 0.91, 1.04, 1.17, 1.30], [1000, 0.58, 0.72, 0.87, 1.01, 1.15, 1.30, 1.44],
      [1100, 0.63, 0.79, 0.95, 1.11, 1.27, 1.43, 1.59], [1200, 0.69, 0.87, 1.04, 1.21, 1.38, 1.56, 1.73],
      [1300, 0.75, 0.94, 1.13, 1.31, 1.50, 1.69, 1.88], [1400, 0.81, 1.01, 1.21, 1.41, 1.62, 1.82, 2.02],
      [1500, 0.87, 1.08, 1.30, 1.51, 1.73, 1.95, 2.16], [1600, 0.92, 1.15, 1.38, 1.62, 1.85, 2.08, 2.31],
      [1700, 0.98, 1.23, 1.47, 1.72, 1.96, 2.21, 2.45], [1800, 1.04, 1.30, 1.56, 1.82, 2.08, 2.34, 2.60],
      [1900, 1.10, 1.37, 1.64, 1.92, 2.19, 2.47, 2.74], [2000, 1.15, 1.44, 1.73, 2.02, 2.31, 2.60, 2.88],
      [2100, 1.21, 1.51, 1.82, 2.12, 2.42, 2.73, 3.03], [2200, 1.27, 1.59, 1.90, 2.22, 2.54, 2.86, 3.17],
      [2300, 1.33, 1.66, 1.99, 2.32, 2.65, 2.99, 3.32], [2400, 1.38, 1.73, 2.08, 2.42, 2.77, 3.12, 3.46],
      [2500, 1.44, 1.80, 2.16, 2.52, 2.88, 3.25, 3.61], [2600, 1.50, 1.88, 2.25, 2.63, 3.00, 3.38, 3.75]],
    notes: "Columns are gross system capacity, gpm/ac. Values equal 2πRC<sub>g</sub>/43560 (Eq. 13.1 divided by S).",
  };

  // Table 13.2. Total irrigated area (ac) vs main lateral radius and end gun radius gain (p. 281)
  const eg132 = [0, 50, 75, 100, 125, 150, 200];
  T["13.2"] = {
    title: "Total irrigated area (ac) for different lengths of the main system and end gun coverage",
    cols: ["Radius irrigated with main lateral (ft)", "Gain 0 ft", "50 ft", "75 ft", "100 ft", "125 ft", "150 ft", "200 ft", "Maximum area"],
    rows: [
      [800, 46, 49, 50, 51, 51, 51, null, 51], [900, 58, 62, 63, 64, 65, 65, null, 65],
      [1000, 72, 77, 78, 79, 80, 80, 80, 80], [1100, 87, 92, 94, 95, 96, 97, 97, 97],
      [1200, 104, 109, 111, 113, 114, 115, 116, 115], [1300, 122, 128, 130, 132, 133, 134, 135, 135],
      [1400, 141, 148, 151, 152, 154, 155, 157, 157], [1500, 162, 170, 172, 175, 176, 178, 180, 180],
      [1600, 185, 193, 196, 198, 200, 202, 204, 205], [1700, 208, 217, 220, 223, 225, 227, 230, 231],
      [1800, 234, 243, 246, 249, 252, 254, 257, 259], [1900, 260, 270, 274, 277, 280, 282, 286, 289],
      [2000, 288, 299, 303, 306, 309, 312, 316, 320], [2100, 318, 329, 333, 337, 340, 343, 348, 353],
      [2200, 349, 361, 365, 369, 373, 376, 381, 387], [2300, 382, 394, 399, 403, 407, 410, 415, 423],
      [2400, 415, 428, 434, 438, 442, 445, 451, 461], [2500, 451, 464, 470, 475, 479, 482, 489, 500],
      [2600, 488, 502, 507, 512, 517, 521, 528, 541]],
    notes: "All four corners irrigated by the end gun. Maximum area occurs when the radius gain is 21% of the main lateral length.",
  };

  // Table 13.3. Pressure loss in center pivot laterals without end guns, psi/1000 ft (p. 282)
  T["13.3"] = {
    title: "Pressure loss in center pivot laterals without end guns, psi/1,000 ft (C = 140, F = 0.54)",
    cols: ["Flow into lateral (gpm)", "6 in OD (5.782 in ID)", "6 5/8 in OD (6.407 in ID)", "8 in OD (7.782 in ID)", "10 in OD (9.782 in ID)"],
    rows: [
      [200, 0.93, 0.57, null, null], [300, 1.98, 1.20, null, null], [400, 3.38, 2.05, null, null],
      [500, 5.10, 3.10, null, null], [600, 7.15, 4.34, null, null], [700, 9.51, 5.77, 3.57, null],
      [800, 12.18, 7.39, 4.43, null], [900, 15.15, 9.20, null, null], [1000, 18.42, 11.18, null, null],
      [1100, 21.98, 13.34, 5.18, null], [1200, null, 15.67, 6.08, 2.00], [1300, null, 18.17, 7.06, 2.32],
      [1400, null, 20.85, 8.09, 2.66], [1500, null, null, 9.20, 3.02], [1600, null, null, 10.36, 3.41],
      [1700, null, null, 11.60, 3.81], [1800, null, null, 12.89, 4.24], [1900, null, null, 14.25, 4.68],
      [2000, null, null, 15.67, 5.15], [2100, null, null, 17.15, 5.63], [2200, null, null, 18.69, 6.14],
      [2300, null, null, 20.30, 6.67], [2400, null, null, null, 7.22], [2600, null, null, null, 8.37],
      [2800, null, null, null, 9.60], [3000, null, null, null, 10.91], [3200, null, null, null, 12.29],
      [3400, null, null, null, 13.75]],
    notes: "Multiply losses by 1.037 for laterals with end guns. Dashes in the book are blank here (the 8 in column is blank at 900 and 1000 gpm as printed).",
  };
  const ID133 = [5.782, 6.407, 7.782, 9.782];

  // Table 13.4. Pressure loss with two pipe diameters, psi/1000 ft (p. 283)
  const fr134 = [1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.0];
  T["13.4"] = {
    title: "Pressure loss in center pivot laterals with two diameters of pipe, psi/1,000 ft",
    cols: ["Lateral", "Flow (gpm)", "1.0", "0.9", "0.8", "0.7", "0.6", "0.5", "0.4", "0.3", "0.2", "0.1", "0.0"],
    rows: [
      ["8 and 6 in", 900, 3.6, 3.6, 3.7, 3.9, 4.2, 4.7, 5.4, 6.2, 7.1, 8.1, 9.2],
      ["8 and 6 in", 1000, 4.3, 4.4, 4.5, 4.7, 5.1, 5.8, 6.6, 7.6, 8.7, 9.9, 11.2],
      ["8 and 6 in", 1100, 5.2, 5.2, 5.3, 5.6, 6.1, 6.9, 7.8, 9.0, 10.4, 11.8, 13.3],
      ["8 and 6 in", 1200, 6.1, 6.1, 6.2, 6.6, 7.2, 8.1, 9.2, 10.6, 12.2, 13.9, 15.7],
      ["8 and 6 in", 1300, 7.1, 7.1, 7.2, 7.6, 8.3, 9.4, 10.7, 12.3, 14.1, 16.1, 18.2],
      ["8 and 6 in", 1400, 8.1, 8.1, 8.3, 8.8, 9.6, 10.7, 12.3, 14.1, 16.2, 18.5, 20.8],
      ["8 and 6 in", 1500, 9.2, 9.2, 9.4, 10.0, 10.9, 12.2, 13.9, 16.0, 18.4, 21.0, 23.7],
      ["8 and 6 in", 1600, 10.4, 10.4, 10.6, 11.2, 12.3, 13.7, 15.7, 18.0, 20.7, 23.7, 26.7],
      ["8 and 6 in", 1700, 11.6, 11.6, 11.9, 12.6, 13.7, 15.4, 17.6, 20.2, 23.2, 26.5, 29.9],
      ["8 and 6 in", 1800, 12.9, 12.9, 13.2, 14.0, 15.2, 17.1, 19.5, 22.4, 25.8, 29.4, 33.2],
      ["10 and 8 in", 1900, 4.7, 4.7, 4.8, 5.2, 5.8, 6.7, 7.8, 9.2, 10.8, 12.5, 14.2],
      ["10 and 8 in", 2000, 5.1, 5.2, 5.3, 5.7, 6.4, 7.3, 8.6, 10.1, 11.8, 13.7, 15.7],
      ["10 and 8 in", 2100, 5.6, 5.7, 5.8, 6.2, 7.0, 8.0, 9.4, 11.1, 12.9, 15.0, 17.1],
      ["10 and 8 in", 2200, 6.1, 6.2, 6.4, 6.8, 7.6, 8.7, 10.2, 12.0, 14.1, 16.4, 18.7],
      ["10 and 8 in", 2300, 6.7, 6.7, 6.9, 7.4, 8.2, 9.5, 11.1, 13.1, 15.3, 17.8, 20.3],
      ["10 and 8 in", 2400, 7.2, 7.3, 7.5, 8.0, 8.9, 10.3, 12.0, 14.2, 16.6, 19.2, 22.0],
      ["10 and 8 in", 2500, 7.8, 7.8, 8.1, 8.6, 9.6, 11.1, 13.0, 15.3, 17.9, 20.7, 23.7],
      ["10 and 8 in", 2600, 8.4, 8.4, 8.7, 9.3, 10.3, 11.9, 13.9, 16.4, 19.2, 22.3, 25.5],
      ["10 and 8 in", 2700, 9.0, 9.0, 9.3, 10.0, 11.1, 12.8, 15.0, 17.6, 20.6, 23.9, 27.3],
      ["10 and 8 in", 2800, 9.6, 9.6, 9.9, 10.6, 11.9, 13.7, 16.0, 18.8, 22.1, 25.6, 29.2],
      ["10 and 8 in", 2900, 10.2, 10.3, 10.6, 11.4, 12.7, 14.6, 17.1, 20.1, 23.5, 27.3, 31.2],
      ["10 and 8 in", 3000, 10.9, 11.0, 11.3, 12.1, 13.5, 15.5, 18.2, 21.4, 25.1, 29.0, 33.2]],
    notes: "Column headings are the fraction of the lateral that is the larger pipe (8 in O.D. in the upper part, 10 in O.D. in the lower part). Values are for laterals without end guns; multiply by 1.037 with an end gun.",
  };

  // Table 13.5. NRCS soil intake families (p. 288)
  T["13.5"] = {
    title: "NRCS soil intake families",
    cols: ["Intake family", "Surface soil texture and subsoil permeability", "Representative soil series"],
    rows: [
      [0.1, "Clays, silty clays, clay loam, silty clay loams (with slowly & very slowly permeable soils)", "Albaton c, Crete sicl, Luton sic, Pawnee cl, Wabash sic, Wymore sicl, Filmore sicl"],
      [0.3, "Silt loam, loam silty clay loam, loams (with slow or moderately slow permeability)", "Butler sil, Burchard cl, Colo sicl, Hastings sicl, Wood River sil, Moody sicl, Belfore sicl, Sharpsburg sicl"],
      [0.5, "Silt loam, loam (with moderately slow or moderate permeability)", "Hall sil, Judson sil, Holder sil, Keith l, Holdrege sil, Richfield l"],
      [1.0, "Fine sandy loam, sandy loam, silt loam, loam, very fine sandy loam (with moderately slow to moderately rapid permeability); Loam, silt loam, very fine sandy loam, clay loam, sandy clay loam (with moderate or moderately rapid permeability)", "Hord fsl, Crofton sil, Keith fsl, Monona sil, Mitchell fsl"],
      [1.5, "Fine sandy loam, loam, very fine sandy loam, sandy loam, silt loam (with moderate or moderately rapid permeability)", "Anselmo vfsl, O'Neill fsl, Bayard vfsl, Rosebud fsl, Cass vfsl, Alda fsl, Brocksburg fsl"],
      [2.0, "Loamy fine sand, loamy very fine sand, loamy sand (with moderately rapid permeability)", "Alice lfs, Hersh lfs, Anselmo lfs, Jayem lfs, Libory lfs, Sarben lfs, Ovina lfs, Otero lvfs"],
      [3.0, "Loamy fine sand, loamy sand, fine sand, fine sandy loam, loamy very fine sand (with rapid permeability)", "Bankard ls, Thurman lfs, Dunday lfs, Valent lfs, Inavale lfs, Valentine lfs"]],
    notes: "Adapted from the Nebraska NRCS irrigation guide.",
  };

  // Table 13.6. Allowable soil surface storage vs slope (p. 289)
  T["13.6"] = {
    title: "Allowable soil surface storage (without artificial storage) for various slopes",
    cols: ["Slope (%)", "Allowable surface storage (in)"],
    rows: [["0-1", 0.5], ["1-3", 0.3], ["3-5", 0.1], ["5", 0.0]],
    notes: "Dillon et al. (1972). Conventional tillage.",
  };
  const storage = s => s <= 1 ? 0.5 : s <= 3 ? 0.3 : s < 5 ? 0.1 : 0.0;

  // Table 13.8. Minimum allowable wetted diameter, ft, 1300-ft pivot lateral (p. 292)
  const tex138 = ["Sand", "Loamy sand", "Sandy loam", "Loam", "Silt loam", "Sandy clay loam", "Clay loam", "Silty clay loam", "Sandy clay", "Silty clay", "Clay"];
  const L = "< 10", H = "> 150";
  const r = (...a) => { const o = []; a.forEach(x => Array.isArray(x) ? o.push(...Array(x[1]).fill(x[0])) : o.push(x)); return o; };
  T["13.8"] = {
    title: "Minimum allowable wetted diameter (ft) for center pivots with a 1300-ft pivot lateral",
    cols: ["Gross system capacity (gpm/ac)", "Depth applied (in)", "Surface storage (in)"].concat(tex138),
    rows: [
      [4.0, 0.8, 0.1, ...r(L, 10, 18, 39, 46, 110, [H, 5])],
      [4.0, 0.8, 0.3, ...r([L, 3], 19, 22, 53, 88, 88, [H, 3])],
      [4.0, 0.8, 0.5, ...r([L, 5], 19, 32, 30, 63, 73, 120)],
      [4.0, 1.0, 0.1, ...r(L, 13, 22, 48, 59, 136, [H, 5])],
      [4.0, 1.0, 0.3, ...r([L, 2], 13, 28, 33, 79, 132, 135, [H, 3])],
      [4.0, 1.0, 0.5, ...r([L, 3], 14, 17, 41, 67, 67, 134, [H, 2])],
      [4.0, 1.2, 0.1, ...r(L, 15, 26, 56, 71, [H, 6])],
      [4.0, 1.2, 0.3, ...r([L, 2], 17, 36, 44, 103, [H, 5])],
      [4.0, 1.2, 0.5, ...r([L, 2], 10, 22, 26, 63, 104, 107, [H, 3])],
      [5.0, 0.8, 0.1, ...r(L, 13, 22, 48, 58, 137, [H, 5])],
      [5.0, 0.8, 0.3, ...r([L, 2], 11, 23, 27, 67, 110, 109, [H, 3])],
      [5.0, 0.8, 0.5, ...r([L, 5], 24, 40, 38, 79, 91, H)],
      [5.0, 1.0, 0.1, ...r(L, 16, 28, 60, 74, [H, 6])],
      [5.0, 1.0, 0.3, ...r([L, 2], 16, 35, 42, 99, [H, 5])],
      [5.0, 1.0, 0.5, ...r([L, 3], 18, 21, 51, 84, 83, [H, 3])],
      [5.0, 1.2, 0.1, ...r(L, 18, 33, 70, 89, [H, 6])],
      [5.0, 1.2, 0.3, ...r(L, 12, 21, 45, 55, 129, [H, 5])],
      [5.0, 1.2, 0.5, ...r([L, 2], 13, 28, 33, 78, 130, 133, [H, 3])],
      [6.0, 0.8, 0.1, ...r(L, 16, 27, 58, 70, [H, 6])],
      [6.0, 0.8, 0.3, ...r(L, "a", 13, 28, 33, 80, 132, 131, [H, 3])],
      [6.0, 0.8, 0.5, ...r([L, 3], 10, 11, 29, 48, 45, 95, 109, H)],
      [6.0, 1.0, 0.1, ...r(L, 19, 33, 72, 89, [H, 6])],
      [6.0, 1.0, 0.3, ...r(L, 11, 19, 42, 50, 119, [H, 5])],
      [6.0, 1.0, 0.5, ...r([L, 3], 21, 25, 61, 101, 100, [H, 3])],
      [6.0, 1.2, 0.1, ...r(L, 22, 39, 84, 107, [H, 6])],
      [6.0, 1.2, 0.3, ...r(L, 14, 25, 54, 67, [H, 6])],
      [6.0, 1.2, 0.5, ...r([L, 2], 15, 33, 39, 94, [H, 5])],
      [8.0, 0.8, 0.1, ...r(L, 21, 35, 77, 93, [H, 6])],
      [8.0, 0.8, 0.3, ...r(L, 10, 17, 37, 44, 107, [H, 5])],
      [8.0, 0.8, 0.5, ...r([L, 3], 14, 15, 39, 64, 60, 126, 146, H)],
      [8.0, 1.0, 0.1, ...r(L, 25, 44, 96, 118, [H, 6])],
      [8.0, 1.0, 0.3, ...r(L, 15, 25, 55, 67, [H, 6])],
      [8.0, 1.0, 0.5, ...r([L, 2], 13, 29, 33, 81, 135, 133, [H, 3])],
      [8.0, 1.2, 0.1, ...r(L, 29, 52, 112, 142, [H, 6])],
      [8.0, 1.2, 0.3, ...r(L, 19, 33, 72, 89, [H, 6])],
      [8.0, 1.2, 0.5, ...r(L, 12, 20, 44, 52, 126, [H, 5])],
      [10.0, 0.8, 0.1, ...r(L, 26, 44, 96, 116, [H, 6])],
      [10.0, 0.8, 0.3, ...r(L, 13, 21, 47, 54, 133, [H, 5])],
      [10.0, 0.8, 0.5, ...r([L, 3], 17, 19, 49, 79, 75, [H, 3])],
      [10.0, 1.0, 0.1, ...r(10, 32, 55, 120, 148, [H, 6])],
      [10.0, 1.0, 0.3, ...r(L, 19, 32, 70, 83, [H, 6])],
      [10.0, 1.0, 0.5, ...r([L, 2], 16, 36, 41, 102, [H, 5])],
      [10.0, 1.2, 0.1, ...r(12, 36, 65, 140, [H, 7])],
      [10.0, 1.2, 0.3, ...r(L, 24, 42, 90, 111, [H, 6])],
      [10.0, 1.2, 0.5, ...r(L, 15, 25, 55, 66, [H, 6])]],
    notes: "Green shading in the book (< 10) denotes a minimum wetted diameter less than 10 ft; gold shading (> 150) denotes more than 150 ft. One cell (6.0 gpm/ac, 0.8 in, 0.3 in, loamy sand) is printed as \"a\" in the book.",
  };

  // Pressure distribution factor f_p (Figure 13.6), from Eq. 13.1 discharge (q proportional to R) and
  // Hazen-Williams (loss proportional to Q^1.852): f_p(x) = ∫0^x (1-t²)^1.852 dt / ∫0^1 (1-t²)^1.852 dt.
  // The denominator is 0.548, the multiple outlet factor the text gives as about 0.54.
  function fpFactor(x) {
    x = Math.max(0, Math.min(1, x));
    const g = t => Math.pow(1 - t * t, 1.852);
    const simp = (a, b) => { const n = 400, h = (b - a) / n; let s = g(a) + g(b); for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * g(a + i * h); return s * h / 3; };
    return simp(0, x) / simp(0, 1);
  }

  C({
    id: "eq-13.1", eq: ["13.1"], sec: "13.2", page: 279, title: "Sprinkler discharge along a center pivot",
    tags: ["pivot sprinkler discharge", "nozzle flow pivot", "sprinkler package", "qs/S", "how much should this sprinkler put out"],
    inputs: [
      { k: "R", sym: "R", label: "Distance of sprinkler from the pivot base", dim: "length", u: "ft", v: 1000 },
      { k: "S", sym: "S", label: "Local spacing between sprinklers", dim: "length", u: "ft", v: 10 },
      { k: "Cg", sym: "C<sub>g</sub>", label: "Gross system capacity (Q/A)", dim: "capacity", u: "gpm/ac", v: 6 }],
    outputs: [
      { k: "qS", sym: "q<sub>s</sub>/S", label: "Discharge per unit length (Table 13.1)", dim: "none", dp: 3 },
      { k: "qs", sym: "q<sub>s</sub>", label: "Required sprinkler discharge", dim: "flow", u: "gpm", dp: 2 }],
    f: v => { const qS = 2 * Math.PI * v.R * v.Cg / 43560; return { qS, qs: qS * v.S }; },
    examples: [{ ref: "Table 13.1 (1000 ft, 6 gpm/ac)", page: 280, in: { R: 1000, S: 10, Cg: 6 }, out: { qS: 0.87, qs: 8.65 } }],
    tables: ["13.1"], figs: ["13.4"],
  });

  C({
    id: "eq-13.2", eq: ["13.2"], sec: "13.2", page: 280, title: "Center pivot irrigated area with end gun",
    tags: ["pivot acres", "end gun area", "corner area", "how many acres does my pivot cover"],
    inputs: [
      { k: "Rl", sym: "R<sub>l</sub>", label: "Radius irrigated with the main lateral", dim: "length", u: "ft", v: 1300 },
      { k: "Reg", sym: "R<sub>eg</sub>", label: "Radius gain from the end gun", dim: "length", u: "ft", v: 100 }],
    outputs: [
      { k: "At", sym: "A<sub>t</sub>", label: "Total irrigated area (end gun in all four corners)", dim: "area", u: "ac", dp: 1 },
      { k: "A0", label: "Area without the end gun", dim: "area", u: "ac", dp: 1 },
      { k: "Aeg", label: "Area added by the end gun", dim: "area", u: "ac", dp: 1 },
      { k: "beta", sym: "β", label: "End gun operating angle in each corner", dim: "angle", u: "degrees", dp: 0 },
      { k: "Ropt", label: "Radius gain for maximum area (21% of R<sub>l</sub>)", dim: "length", u: "ft", dp: 0 }],
    f: v => {
      const ac = Math.acos(v.Rl / (v.Rl + v.Reg));
      const A0 = Math.PI * v.Rl * v.Rl / 43560, At = (Math.PI * v.Rl * v.Rl + (Math.PI - 4 * ac) * (2 * v.Rl * v.Reg + v.Reg * v.Reg)) / 43560;
      return { At, A0, Aeg: At - A0, beta: (Math.PI / 2 - 2 * ac) * 180 / Math.PI, Ropt: 0.21 * v.Rl };
    },
    examples: [{ ref: "Table 13.2", page: 281, in: { Rl: 1300, Reg: 100 }, out: { At: 132, A0: 122 } },
               { ref: "Table 13.2", page: 281, in: { Rl: 2000, Reg: 150 }, out: { At: 312 } }],
    tables: ["13.2"], figs: ["13.5"],
  });

  C({
    id: "fp-13.6", eq: [], sec: "13.2", page: 282, title: "Pressure distribution factor along a pivot (Figure 13.6)",
    tags: ["pressure distribution factor", "fp", "pressure loss distribution", "pivot friction curve"],
    note: "Computed from the same assumptions behind the figure: sprinkler discharge grows linearly with distance (Eq. 13.1), so flow at fraction x is Q(1 − x²), and friction follows Hazen-Williams (Q<sup>1.852</sup>). Integrated over the whole lateral this gives 0.548, the pivot multiple outlet factor of about 0.54 in the text, and about 78% of the loss occurs in the first half (the text says 80%).",
    inputs: [{ k: "x", sym: "R/R<sub>l</sub>", label: "Fraction of distance along the lateral", dim: "frac", u: "decimal", v: 0.5 }],
    outputs: [{ k: "fp", sym: "f<sub>p</sub>", label: "Pressure distribution factor", dp: 3 }],
    f: v => ({ fp: fpFactor(v.x) }),
    examples: [{ ref: "Figure 13.6 (read from graph)", page: 282, in: { x: 0.5 }, out: { fp: 0.79 }, tol: 0.03 },
               { ref: "Figure 13.6 (read from graph)", page: 282, in: { x: 0.2 }, out: { fp: 0.37 }, tol: 0.05 },
               { ref: "Figure 13.6", page: 282, in: { x: 1 }, out: { fp: 1 } }],
    figs: ["13.6"],
  });

  C({
    id: "eq-13.3", eq: ["13.3"], sec: "13.2", page: 282, title: "Pressure at a point along a pivot lateral",
    tags: ["pivot pressure", "pressure at end of pivot", "elevation", "pressure gauge pivot", "why is my end pressure low"],
    inputs: [
      { k: "P0", sym: "P<sub>0</sub>", label: "Pressure at the lateral inlet", dim: "pressure", u: "psi", v: 40 },
      { k: "Plp", sym: "P<sub>lp</sub>", label: "Lateral friction loss (Table 13.3 or 13.4)", dim: "ploss1000", u: "psi/1000 ft", v: 7.39, help: "Multiply table values by 1.037 if there is an end gun" },
      { k: "Rl", sym: "R<sub>l</sub>", label: "Distance from pivot to last sprinkler", dim: "length", u: "ft", v: 1300 },
      { k: "R", sym: "R", label: "Distance to the point of interest", dim: "length", u: "ft", v: 1300 },
      { k: "Eg", sym: "E<sub>g</sub>", label: "Elevation gain from pivot base to the point (negative if downhill)", dim: "length", u: "ft", v: 0, min: -1e4 }],
    outputs: [
      { k: "fp", sym: "f<sub>p</sub>", label: "Pressure distribution factor (Figure 13.6)", dp: 3 },
      { k: "Pf", label: "Friction loss to the point", dim: "pressure", u: "psi", dp: 2 },
      { k: "PR", sym: "P<sub>R</sub>", label: "Pressure at point R", dim: "pressure", u: "psi", dp: 1 }],
    f: v => { const fp = fpFactor(v.R / v.Rl), Pf = v.Plp * v.Rl * fp / 1000; return { fp, Pf, PR: v.P0 - Pf - 0.433 * v.Eg }; },
    examples: [{ ref: "Eq. 13.3 at the lateral end (f<sub>p</sub> = 1)", page: 282, in: { P0: 40, Plp: 7.39, Rl: 1300, R: 1300, Eg: 10 }, out: { PR: 40 - 9.607 - 4.33 } }],
    tables: ["13.3", "13.4"], figs: ["13.6"],
  });

  C({
    id: "eq-13.4-13.5", eq: ["13.4", "13.5"], sec: "13.3", page: 284, title: "Pivot peak application rate and time of wetting",
    tags: ["peak application rate", "time of wetting", "runoff pivot", "wetted diameter", "is my pivot running off"],
    inputs: [
      { k: "Cg", sym: "C<sub>g</sub>", label: "Gross system capacity", dim: "capacity", u: "gpm/ac", v: 6.15 },
      { k: "R", sym: "R", label: "Distance from the pivot point", dim: "length", u: "ft", v: 1300 },
      { k: "Dc", sym: "D<sub>c</sub>", label: "Sprinkler diameter of coverage at R", dim: "length", u: "ft", v: 40 },
      { k: "dg", sym: "d<sub>g</sub>", label: "Gross application depth", dim: "length", u: "in", v: 0.9 }],
    outputs: [
      { k: "Ap", sym: "A<sub>p</sub>", label: "Peak application rate", dim: "rate", u: "in/hr", dp: 2 },
      { k: "Tw", sym: "T<sub>w</sub>", label: "Time of wetting", dim: "time", u: "hr", dp: 3 }],
    f: v => ({ Ap: 0.0177 * v.Cg * v.R / v.Dc, Tw: 72 * v.Dc * v.dg / (v.R * v.Cg) }),
    examples: [{ ref: "Example 13.1", page: 291, in: { Cg: 800 / 130, R: 1300, Dc: 40 }, out: { Ap: 3.54 } }],
    figs: ["13.7", "13.10", "13.12"],
  });

  C({
    id: "eq-13.6", eq: ["13.6"], sec: "13.3", page: 285, title: "Linear move peak application rate",
    tags: ["linear move", "lateral move", "peak intensity", "application rate linear"],
    inputs: [
      { k: "Q", sym: "Q", label: "System flow rate", dim: "flow", u: "gpm", v: 800 },
      { k: "Dc", sym: "D<sub>c</sub>", label: "Diameter of coverage of the sprinklers", dim: "length", u: "ft", v: 40 },
      { k: "L", sym: "L", label: "Lateral length", dim: "length", u: "ft", v: 1300 }],
    outputs: [{ k: "Ap", sym: "A<sub>p</sub>", label: "Peak application rate", dim: "rate", u: "in/hr", dp: 2 }],
    f: v => ({ Ap: 122.5 * v.Q / (v.Dc * v.L) }),
    examples: [{ ref: "Example 13.2", page: 291, in: { Q: 800, Dc: 40, L: 1300 }, out: { Ap: 1.88 } }],
  });

  C({
    id: "eq-13.7", eq: ["13.7"], sec: "13.5", page: 288, title: "Pivot percent timer setting for a depth",
    tags: ["percent timer", "percent setting", "control setting", "pivot speed", "how do I set my pivot to put on an inch", "hours per revolution"],
    inputs: [
      { k: "Rl", sym: "R<sub>l</sub>", label: "Distance from pivot base to end tower", dim: "length", u: "ft", v: 1280 },
      { k: "Cg", sym: "C<sub>g</sub>", label: "Gross system capacity", dim: "capacity", u: "gpm/ac", v: 7 },
      { k: "vm", sym: "v<sub>m</sub>", label: "Maximum continuous end tower speed", dim: "velocity", u: "ft/min", v: 8 },
      { k: "dg", sym: "d<sub>g</sub>", label: "Gross depth to apply", dim: "length", u: "in", v: 1.3 }],
    outputs: [
      { k: "Cs", sym: "C<sub>s</sub>", label: "Timer (control) setting", dim: "pct", u: "%", dp: 0 },
      { k: "Trev", label: "Time per revolution at this setting", dim: "time", u: "hr", dp: 1 },
      { k: "dmin", label: "Smallest depth possible (100% setting)", dim: "length", u: "in", dp: 2 }],
    f: v => {
      const Cs = 0.0231 * v.Rl * v.Cg / (v.vm * v.dg);
      return { Cs, Trev: 2 * Math.PI * v.Rl / (v.vm * Cs / 100) / 60, dmin: 0.0231 * v.Rl * v.Cg / (v.vm * 100) };
    },
    examples: [{ ref: "Section 13.5 text", page: 288, in: { Rl: 1280, Cg: 7, vm: 8, dg: 1.3 }, out: { Cs: 20 }, tol: 0.03 }],
  });

  C({
    id: "eq-13.7-inv", eq: ["13.7"], sec: "13.5", page: 288, title: "Depth applied from pivot timer setting",
    tags: ["percent timer to inches", "what depth does my setting put on", "pivot revolution time", "depth per revolution"],
    inputs: [
      { k: "Rl", sym: "R<sub>l</sub>", label: "Distance from pivot base to end tower", dim: "length", u: "ft", v: 1280 },
      { k: "Cg", sym: "C<sub>g</sub>", label: "Gross system capacity", dim: "capacity", u: "gpm/ac", v: 7 },
      { k: "vm", sym: "v<sub>m</sub>", label: "Maximum continuous end tower speed", dim: "velocity", u: "ft/min", v: 8 },
      { k: "Cs", sym: "C<sub>s</sub>", label: "Timer (control) setting", dim: "pct", u: "%", v: 20 }],
    outputs: [
      { k: "dg", sym: "d<sub>g</sub>", label: "Gross depth applied", dim: "length", u: "in", dp: 2 },
      { k: "Trev", label: "Time per revolution", dim: "time", u: "hr", dp: 1 },
      { k: "vt", label: "Average end tower speed", dim: "velocity", u: "ft/min", dp: 2 }],
    f: v => ({ dg: 0.0231 * v.Rl * v.Cg / (v.vm * v.Cs), Trev: 2 * Math.PI * v.Rl / (v.vm * v.Cs / 100) / 60, vt: v.vm * v.Cs / 100 }),
    examples: [{ ref: "Section 13.5 text", page: 288, in: { Rl: 1280, Cg: 7, vm: 8, Cs: 20 }, out: { dg: 1.3 }, tol: 0.03 }],
  });

  C({
    id: "runoff-13", eq: ["13.4", "13.5", "13.6"], sec: "13.5", page: 291, title: "Pivot or linear move runoff screening",
    tags: ["runoff", "intake family", "surface storage", "slope", "maximum depth without runoff", "will my pivot run off"],
    note: "Follows Examples 13.1 and 13.2: peak application rate (Eq. 13.4 or 13.6), surface storage from slope (Table 13.6) and intake family (Table 13.5). The maximum depth without runoff must then be read from Figure 13.13 (graphical only) for the family, storage and peak rate shown here. The text gives 0.70 to 1.25 in per application as the common range.",
    inputs: [
      { k: "type", label: "System type", type: "sel", opts: [["Center pivot", 0], ["Linear move", 1]], v: 0 },
      { k: "Q", sym: "Q", label: "System flow rate", dim: "flow", u: "gpm", v: 800 },
      { k: "A", sym: "A", label: "Irrigated area (pivot)", dim: "area", u: "ac", v: 130 },
      { k: "L", label: "Pivot length (distance R to the end) or linear lateral length", dim: "length", u: "ft", v: 1300 },
      { k: "Dc", sym: "D<sub>c</sub>", label: "Sprinkler wetted diameter", dim: "length", u: "ft", v: 40 },
      { k: "slope", label: "Field slope", dim: "pct", u: "%", v: 2 },
      { k: "fam", label: "Soil intake family (Table 13.5)", type: "sel", opts: T["13.5"].rows.map(r => [r[0] + " family: " + r[2].split(",").slice(0, 2).join(","), r[0]]), v: 0.5 },
      { k: "dg", label: "Planned gross depth per irrigation", dim: "length", u: "in", v: 0.9 }],
    outputs: [
      { k: "Cg", sym: "C<sub>g</sub>", label: "Gross system capacity", dim: "capacity", u: "gpm/ac", dp: 2 },
      { k: "Ap", sym: "A<sub>p</sub>", label: "Peak application rate", dim: "rate", u: "in/hr", dp: 2 },
      { k: "Tw", sym: "T<sub>w</sub>", label: "Time of wetting at the end (pivot)", dim: "time", u: "min", dp: 0 },
      { k: "S", label: "Allowable surface storage (Table 13.6)", dim: "length", u: "in", dp: 1 },
      { k: "msg", label: "Next step", text: true }],
    f: v => {
      const Cg = v.Q / v.A, Ap = v.type === 1 ? 122.5 * v.Q / (v.Dc * v.L) : 0.0177 * Cg * v.L / v.Dc;
      const Tw = v.type === 1 ? NaN : 72 * v.Dc * v.dg / (v.L * Cg);
      const S = storage(v.slope);
      const fig = [0.1, 0.3, 0.5, 1.0].includes(v.fam) ? "Read Figure 13.13, " + v.fam + " family panel, " + S + " in storage curve, at " + Ap.toFixed(2) + " in/hr" : "Figure 13.13 covers families 0.1 to 1.0 only; higher families seldom limit depth";
      const rng = v.dg < 0.7 ? "planned depth is below the common 0.70 to 1.25 in range" : v.dg > 1.25 ? "planned depth is above the common 0.70 to 1.25 in range" : "planned depth is in the common 0.70 to 1.25 in range";
      return { Cg, Ap, Tw: Tw * 60, S, msg: fig + "; " + rng + "." };
    },
    examples: [{ ref: "Example 13.1", page: 291, in: {}, out: { Cg: 6.15, Ap: 3.54, S: 0.3 } },
               { ref: "Example 13.2", page: 291, in: { type: 1 }, out: { Ap: 1.88 } }],
    tables: ["13.5", "13.6"], figs: ["13.13"],
  });

  C({
    id: "tab-13.1", eq: [], sec: "13.2", page: 280, title: "Pivot sprinkler discharge per foot (Table 13.1)",
    tags: ["qs/S table", "sprinkler discharge table", "pivot package"],
    tables: ["13.1"],
    inputs: [
      { k: "R", label: "Distance from pivot", dim: "length", u: "ft", v: 1000 },
      { k: "Cg", label: "Gross system capacity", dim: "capacity", u: "gpm/ac", v: 6 }],
    outputs: [{ k: "qS", label: "q<sub>s</sub>/S, gpm per ft of lateral (interpolated)", dp: 3 }],
    f: v => {
      if (v.R < 100 || v.R > 2600 || v.Cg < 4 || v.Cg > 10) return { qS: NaN };
      const col = c => M.interp(T["13.1"].rows.map(r => [r[0], r[1 + c]]), v.R);
      return { qS: M.interp(cg131.map((c, i) => [c, col(i)]), v.Cg) };
    },
    examples: [{ ref: "Table 13.1", page: 280, in: { R: 1300, Cg: 8 }, out: { qS: 1.50 } }],
  });

  C({
    id: "tab-13.2", eq: [], sec: "13.2", page: 281, title: "Pivot irrigated area table (Table 13.2)",
    tags: ["pivot acres table", "end gun acres"],
    tables: ["13.2"],
    inputs: [
      { k: "Rl", label: "Radius irrigated with main lateral", dim: "length", u: "ft", v: 1300 },
      { k: "Reg", label: "End gun radius gain", dim: "length", u: "ft", v: 100 }],
    outputs: [
      { k: "A", label: "Total irrigated area (interpolated)", dim: "area", u: "ac", dp: 0 },
      { k: "Amax", label: "Maximum area (gain = 21% of lateral)", dim: "area", u: "ac", dp: 0 }],
    f: v => {
      const rows = T["13.2"].rows;
      if (v.Rl < 800 || v.Rl > 2600 || v.Reg < 0 || v.Reg > 200) return { A: NaN, Amax: NaN };
      const atRow = rr => { const pts = eg132.map((g, i) => [g, rr[1 + i]]).filter(p => p[1] !== null); return v.Reg > pts[pts.length - 1][0] ? NaN : M.interp(pts, v.Reg); };
      return { A: M.interp(rows.map(rr => [rr[0], atRow(rr)]), v.Rl), Amax: M.interp(rows.map(rr => [rr[0], rr[8]]), v.Rl) };
    },
    examples: [{ ref: "Table 13.2", page: 281, in: { Rl: 1300, Reg: 100 }, out: { A: 132, Amax: 135 } }],
  });

  C({
    id: "tab-13.3", eq: [], sec: "13.2", page: 282, title: "Pivot lateral friction loss, single pipe size (Table 13.3)",
    tags: ["pivot friction loss", "pivot pipe size", "psi per 1000 ft", "6 5/8 pivot", "8 inch pivot"],
    tables: ["13.3"],
    inputs: [
      { k: "d", label: "Pipe size", type: "sel", opts: [["6 in OD (5.782 in ID)", 1], ["6 5/8 in OD (6.407 in ID)", 2], ["8 in OD (7.782 in ID)", 3], ["10 in OD (9.782 in ID)", 4]], v: 2 },
      { k: "Q", label: "Flow into the pivot lateral", dim: "flow", u: "gpm", v: 800 },
      { k: "eg", label: "End gun", type: "sel", opts: [["No end gun", 1], ["With end gun (x 1.037)", 1.037]], v: 1 },
      { k: "Rl", label: "Lateral length (for total loss)", dim: "length", u: "ft", v: 1300 }],
    outputs: [
      { k: "tab", label: "Table value (interpolated)", dim: "ploss1000", u: "psi/1000 ft", dp: 2 },
      { k: "hw", label: "Hazen-Williams check (C 140, F 0.54)", dim: "ploss1000", u: "psi/1000 ft", dp: 2 },
      { k: "Plp", sym: "P<sub>lp</sub>", label: "Loss used (with end gun factor)", dim: "ploss1000", u: "psi/1000 ft", dp: 2 },
      { k: "P", label: "Total lateral friction loss", dim: "pressure", u: "psi", dp: 1 }],
    f: v => {
      const pts = T["13.3"].rows.filter(r => r[v.d] !== null).map(r => [r[0], r[v.d]]);
      const tab = v.Q < pts[0][0] || v.Q > pts[pts.length - 1][0] ? NaN : M.interp(pts, v.Q);
      const hw = 4560 * Math.pow(v.Q / 140, 1.852) / Math.pow(ID133[v.d - 1], 4.866) * 0.54;
      const base = isFinite(tab) ? tab : hw, Plp = base * v.eg;
      return { tab, hw, Plp, P: Plp * v.Rl / 1000 };
    },
    examples: [{ ref: "Table 13.3", page: 282, in: { d: 2, Q: 800 }, out: { tab: 7.39, hw: 7.39 } },
               { ref: "Table 13.3", page: 282, in: { d: 4, Q: 2000 }, out: { tab: 5.15, hw: 5.15 } }],
  });

  C({
    id: "tab-13.4", eq: [], sec: "13.2", page: 283, title: "Pivot friction loss with two pipe sizes (Table 13.4)",
    tags: ["telescoping pivot", "two pipe sizes", "pivot friction"],
    tables: ["13.4"],
    inputs: [
      { k: "set", label: "Pipe combination", type: "sel", opts: [["8 in and 6 in (900 to 1800 gpm)", 0], ["10 in and 8 in (1900 to 3000 gpm)", 1]], v: 0 },
      { k: "Q", label: "Flow rate", dim: "flow", u: "gpm", v: 1200 },
      { k: "fr", label: "Fraction of lateral that is the larger pipe", dim: "frac", u: "decimal", v: 0.5 },
      { k: "eg", label: "End gun", type: "sel", opts: [["No end gun", 1], ["With end gun (x 1.037)", 1.037]], v: 1 }],
    outputs: [{ k: "Plp", sym: "P<sub>lp</sub>", label: "Pressure loss", dim: "ploss1000", u: "psi/1000 ft", dp: 1 }],
    f: v => {
      const rows = T["13.4"].rows.filter(r => r[0] === (v.set ? "10 and 8 in" : "8 and 6 in"));
      if (v.Q < rows[0][1] || v.Q > rows[rows.length - 1][1] || v.fr < 0 || v.fr > 1) return { Plp: NaN };
      const atRow = rr => M.interp(fr134.map((f, i) => [f, rr[2 + i]]).reverse(), v.fr);
      return { Plp: M.interp(rows.map(rr => [rr[1], atRow(rr)]), v.Q) * v.eg };
    },
    examples: [{ ref: "Table 13.4", page: 283, in: { set: 0, Q: 1200, fr: 0.5 }, out: { Plp: 8.1 } },
               { ref: "Table 13.4", page: 283, in: { set: 1, Q: 2500, fr: 0.3 }, out: { Plp: 15.3 } }],
  });

  C({
    id: "tab-13.5-13.6", eq: [], sec: "13.5", page: 288, title: "Intake family and surface storage (Tables 13.5 and 13.6)",
    tags: ["intake family", "NRCS intake", "soil series", "surface storage", "slope storage"],
    tables: ["13.5", "13.6"],
    inputs: [
      { k: "fam", label: "Intake family", type: "sel", opts: T["13.5"].rows.map((r, i) => [String(r[0]), i]), v: 2 },
      { k: "slope", label: "Field slope", dim: "pct", u: "%", v: 2 }],
    outputs: [
      { k: "tex", label: "Soil textures", text: true },
      { k: "ser", label: "Representative series", text: true },
      { k: "S", label: "Allowable surface storage", dim: "length", u: "in", dp: 1 }],
    f: v => { const r = T["13.5"].rows[v.fam]; return { tex: r[1], ser: r[2], S: storage(v.slope) }; },
    examples: [{ ref: "Example 13.1", page: 291, in: { slope: 2 }, out: { S: 0.3 } }],
  });

  C({
    id: "tab-13.8", eq: [], sec: "13.5", page: 292, title: "Minimum sprinkler wetted diameter to avoid runoff (Table 13.8)",
    tags: ["minimum wetted diameter", "sprinkler package runoff", "boom backs", "do I need bigger sprinklers"],
    tables: ["13.8"], figs: ["13.14"],
    note: "Applies to center pivots with a 1300-ft pivot lateral. Pick the nearest printed capacity, depth and storage.",
    inputs: [
      { k: "Cg", label: "Gross system capacity", type: "sel", opts: [["4.0 gpm/ac", 4], ["5.0 gpm/ac", 5], ["6.0 gpm/ac", 6], ["8.0 gpm/ac", 8], ["10.0 gpm/ac", 10]], v: 6 },
      { k: "d", label: "Depth applied", type: "sel", opts: [["0.8 in", 0.8], ["1.0 in", 1.0], ["1.2 in", 1.2]], v: 1.0 },
      { k: "S", label: "Surface storage", type: "sel", opts: [["0.1 in", 0.1], ["0.3 in", 0.3], ["0.5 in", 0.5]], v: 0.3 },
      { k: "tex", label: "Soil texture", type: "sel", opts: tex138.map((t, i) => [t, i]), v: 3 },
      { k: "Dc", label: "Your sprinkler wetted diameter (optional check)", dim: "length", u: "ft", v: 40 }],
    outputs: [
      { k: "min", label: "Minimum allowable wetted diameter (ft)", text: true },
      { k: "ok", label: "Check", text: true }],
    f: v => {
      const row = T["13.8"].rows.find(r => r[0] === v.Cg && r[1] === v.d && r[2] === v.S);
      const val = row[3 + v.tex];
      let ok;
      if (val === L) ok = "Any common sprinkler is wide enough";
      else if (val === H) ok = "Needs more than 150 ft: reduce depth, add storage or residue (Table 13.7)";
      else if (typeof val === "number") ok = v.Dc >= val ? "Your wetted diameter is large enough" : "Your wetted diameter is too small; runoff is likely";
      else ok = "Value not printed clearly in the book";
      return { min: String(val), ok };
    },
    examples: [{ ref: "Table 13.8", page: 292, in: { Cg: 6, d: 1.0, S: 0.3, tex: 3, Dc: 40 }, out: { min: "42", ok: "Your wetted diameter is too small; runoff is likely" } },
               { ref: "Table 13.8", page: 292, in: { Cg: 10, d: 1.2, S: 0.1, tex: 4 }, out: { min: "> 150" } }],
  });

  C({
    id: "pivot-eval-13", eq: ["13.1", "13.2", "13.3", "13.4", "13.5", "13.7"], sec: "13.5", page: 288, title: "Center pivot check (capacity, pressure, runoff, timer)",
    tags: ["center pivot evaluation", "pivot management", "pivot design check", "pivot summary"],
    note: "Combines Eq. 13.2 (area), Eq. 13.1 (end sprinkler discharge), Table 13.3 Hazen-Williams loss (C 140, F 0.54, x 1.037 with end gun) with Eq. 13.3 at the end, Eq. 13.4 and 13.5 at the end of the lateral, and Eq. 13.7 for the timer setting.",
    inputs: [
      { k: "Q", label: "System flow rate", dim: "flow", u: "gpm", v: 800 },
      { k: "Rl", label: "Main lateral radius (to last sprinkler)", dim: "length", u: "ft", v: 1300 },
      { k: "Reg", label: "End gun radius gain (0 if none)", dim: "length", u: "ft", v: 0 },
      { k: "Di", label: "Lateral inside diameter", dim: "length", u: "in", v: 6.407 },
      { k: "P0", label: "Pressure at the pivot inlet", dim: "pressure", u: "psi", v: 35 },
      { k: "Eg", label: "Elevation gain to the end (worst case)", dim: "length", u: "ft", v: 10, min: -1e4 },
      { k: "S", label: "Sprinkler spacing at the end", dim: "length", u: "ft", v: 10 },
      { k: "Dc", label: "Sprinkler wetted diameter at the end", dim: "length", u: "ft", v: 40 },
      { k: "vm", label: "End tower maximum speed", dim: "velocity", u: "ft/min", v: 8 },
      { k: "Rt", label: "Distance to end tower", dim: "length", u: "ft", v: 1280 },
      { k: "dg", label: "Gross depth to apply", dim: "length", u: "in", v: 1.0 }],
    outputs: [
      { k: "A", label: "Irrigated area", dim: "area", u: "ac", dp: 1 },
      { k: "Cg", label: "Gross system capacity", dim: "capacity", u: "gpm/ac", dp: 2 },
      { k: "qs", label: "Required discharge of the last sprinkler", dim: "flow", u: "gpm", dp: 2 },
      { k: "Plp", label: "Lateral friction loss", dim: "ploss1000", u: "psi/1000 ft", dp: 2 },
      { k: "PR", label: "Pressure at the end of the lateral", dim: "pressure", u: "psi", dp: 1 },
      { k: "Ap", label: "Peak application rate at the end", dim: "rate", u: "in/hr", dp: 2 },
      { k: "Tw", label: "Time of wetting at the end", dim: "time", u: "min", dp: 0 },
      { k: "Cs", label: "Timer setting", dim: "pct", u: "%", dp: 0 },
      { k: "Trev", label: "Hours per revolution", dim: "time", u: "hr", dp: 1 }],
    f: v => {
      const ac = Math.acos(v.Rl / (v.Rl + v.Reg));
      const A = (Math.PI * v.Rl * v.Rl + (Math.PI - 4 * ac) * (2 * v.Rl * v.Reg + v.Reg * v.Reg)) / 43560, Cg = v.Q / A;
      const Plp = 4560 * Math.pow(v.Q / 140, 1.852) / Math.pow(v.Di, 4.866) * 0.54 * (v.Reg > 0 ? 1.037 : 1);
      const PR = v.P0 - Plp * v.Rl / 1000 - 0.433 * v.Eg;
      const Cs = 0.0231 * v.Rt * Cg / (v.vm * v.dg);
      return { A, Cg, qs: 2 * Math.PI * v.Rl * v.S * Cg / 43560, Plp, PR, Ap: 0.0177 * Cg * v.Rl / v.Dc, Tw: 72 * v.Dc * v.dg / (v.Rl * Cg) * 60,
        Cs, Trev: 2 * Math.PI * v.Rt / (v.vm * Cs / 100) / 60 };
    },
    examples: [{ ref: "Example 13.1 values (A from Eq. 13.2 is 122 ac, not the 130 ac stated)", page: 291, in: {}, out: { A: 121.9, Plp: 7.39 } }],
    tables: ["13.2", "13.3"], figs: ["13.6", "13.13"],
  });
})(typeof window !== "undefined" ? window : globalThis);
