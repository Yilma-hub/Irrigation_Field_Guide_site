/* Chapter 4  Plant Water Use  (Equations 4.1 to 4.15, Tables 4.1 to 4.8, Figures 4.9 to 4.12, 4.14, 4.15)
   Note: the book prints equation numbers 4.10, 4.11 and 4.12 twice (p. 67 and pp. 68 to 71).
   The second set uses ids like eq-4.10-p68 and keeps the printed number in `eq`. */
(function (G) {
  const T = G.TAB = G.TAB || {};
  const UN = G.UNITS;
  UN.addDim("vpslope", "Vapor pressure slope / psychrometric constant", [["kPa/°C", 1], ["mbar/°C", 0.1], ["kPa/°F", 1.8]]);
  UN.addDim("resist", "Resistance to vapor flow", [["s/m", 1], ["s/cm", 100]]);

  // Table 4.1. Effect of air temperature on saturation vapor pressure and slope (p. 58)
  T["4.1"] = {
    title: "Effect of air temperature on saturation vapor pressure and slope of saturation vapor pressure",
    cols: ["Air temperature (°F)", "Air temperature (°C)", "Saturation vapor pressure, es (kPa)", "Slope, Δ (kPa/°C)"],
    rows: [
      [20, -7, 0.37, 0.029], [25, -4, 0.46, 0.034], [30, -1, 0.56, 0.041], [35, 2, 0.69, 0.049], [40, 4, 0.84, 0.059],
      [45, 7, 1.02, 0.070], [50, 10, 1.23, 0.082], [55, 13, 1.48, 0.097], [60, 16, 1.77, 0.113], [65, 18, 2.11, 0.132],
      [70, 21, 2.50, 0.154], [75, 24, 2.96, 0.178], [80, 27, 3.50, 0.206], [85, 29, 4.11, 0.237], [90, 32, 4.81, 0.272],
      [95, 35, 5.62, 0.311], [100, 38, 6.55, 0.354], [105, 41, 7.60, 0.403], [110, 43, 8.79, 0.457], [115, 46, 10.14, 0.518],
      [120, 49, 11.67, 0.584]],
    notes: "A pressure of 1 kPa = 0.145 lb/in². The atmospheric pressure at sea level averages about 101 kPa.",
  };
  // Table 4.2. Psychrometric constant as a function of elevation (p. 58)
  T["4.2"] = {
    title: "Value of the psychrometric constant (γ) as a function of elevation",
    cols: ["Elevation above sea level (ft)", "Psychrometric constant, γ (kPa/°C)"],
    rows: [[0, 0.067], [500, 0.066], [1000, 0.065], [1500, 0.064], [2000, 0.063], [2500, 0.062], [3000, 0.060], [3500, 0.059],
           [4000, 0.058], [4500, 0.057], [5000, 0.056], [5500, 0.055], [6000, 0.054], [6500, 0.053], [7000, 0.052]],
  };
  // Table 4.3. Basal crop coefficient information (p. 65)
  T["4.3"] = {
    title: "Basal crop coefficient information for selected crops (adapted from Allen et al. 1998)",
    cols: ["Crop", "Kci", "Kcp′", "Kcm′", "FS1", "FS2", "FS3", "frc"],
    rows: [
      ["Alfalfa, first cuttings", 0.30, 1.15, 1.10, 0.13, 0.53, 0.87, 0.45],
      ["Alfalfa, later cuttings", 0.30, 1.15, 1.10, 0.11, 0.56, 0.78, 0.45],
      ["Beans, dry", 0.15, 1.00, 0.80, 0.25, 0.50, 0.80, 0.55],
      ["Beans, green", 0.15, 1.00, 0.80, 0.22, 0.56, 0.89, 0.55],
      ["Carrot", 0.15, 0.95, 0.85, 0.17, 0.42, 0.83, 0.65],
      ["Corn, field", 0.15, 1.15, 0.15, 0.18, 0.41, 0.71, 0.45],
      ["Corn, sweet", 0.15, 1.10, 1.00, 0.30, 0.60, 0.90, 0.50],
      ["Cotton", 0.15, 1.10, 0.50, 0.17, 0.44, 0.75, 0.35],
      ["Cucumber", 0.15, 0.95, 0.70, 0.19, 0.48, 0.86, 0.50],
      ["Grapes, table", 0.15, 0.80, 0.40, 0.10, 0.34, 0.71, 0.65],
      ["Grapes, wine", 0.15, 0.65, 0.40, 0.10, 0.34, 0.71, 0.55],
      ["Hay, Bermuda grass", 0.50, 0.95, 0.80, 0.07, 0.19, 0.74, 0.45],
      ["Hay, rye grass", 0.85, 1.00, 0.95, 0.07, 0.19, 0.74, 0.40],
      ["Lentil", 0.15, 1.05, 0.20, 0.15, 0.35, 0.76, 0.50],
      ["Lettuce", 0.15, 0.90, 0.90, 0.29, 0.67, 0.90, 0.70],
      ["Pepper, bell", 0.15, 1.00, 0.80, 0.14, 0.33, 0.86, 0.70],
      ["Potato", 0.15, 1.10, 0.65, 0.27, 0.45, 0.88, 0.65],
      ["Rice", 1.00, 1.15, 0.55, 0.20, 0.40, 0.80, 0.80],
      ["Sorghum, grain", 0.15, 1.00, 0.35, 0.16, 0.44, 0.76, 0.45],
      ["Soybeans", 0.15, 1.10, 0.30, 0.14, 0.39, 0.82, 0.50],
      ["Sugar beet", 0.15, 1.15, 0.90, 0.28, 0.50, 0.78, 0.45],
      ["Sunflower", 0.15, 1.10, 0.25, 0.19, 0.46, 0.81, 0.55],
      ["Tomato", 0.15, 1.10, 0.70, 0.23, 0.48, 0.81, 0.60],
      ["Watermelon", 0.15, 0.95, 0.70, 0.18, 0.45, 0.73, 0.60],
      ["Wheat, spring", 0.15, 1.10, 0.15, 0.15, 0.33, 0.78, 0.45],
      ["Wheat, winter (Kci 0.15)", 0.15, 1.10, 0.15, 0.48, 0.70, 0.93, 0.45],
      ["Wheat, winter (Kci 0.50, fallow full cover, soil not frozen)", 0.50, 1.10, 0.15, 0.48, 0.70, 0.93, 0.45],
      ["Pasture, rotated grazing", 0.30, 0.90, 0.80, 0.05, 0.15, 1.00, 0.40],
      ["Pasture, continuous grazing", 0.30, 0.70, 0.70, 0.05, 0.15, 1.00, 0.40],
      ["Citrus, no ground cover, 70% canopy", 0.65, 0.60, 0.65, 0.16, 0.41, 0.74, 0.50],
      ["Citrus, no ground cover, 50% canopy", 0.60, 0.55, 0.60, 0.16, 0.41, 0.74, 0.50],
      ["Citrus, no ground cover, 20% canopy", 0.45, 0.40, 0.50, 0.16, 0.41, 0.74, 0.50],
      ["Citrus, with ground cover, 70% canopy", 0.75, 0.70, 0.75, 0.16, 0.41, 0.74, 0.50],
      ["Citrus, with ground cover, 50% canopy", 0.75, 0.75, 0.75, 0.16, 0.41, 0.74, 0.50],
      ["Citrus, with ground cover, 20% canopy", 0.80, 0.80, 0.85, 0.16, 0.41, 0.74, 0.50],
      ["Apples, cherries, pears: no ground cover, killing frost", 0.35, 0.90, 0.65, 0.13, 0.33, 0.88, 0.50],
      ["Apples, cherries, pears: no ground cover, no frost", 0.50, 0.90, 0.70, 0.13, 0.33, 0.88, 0.50],
      ["Apples, cherries, pears: ground cover, killing frost", 0.45, 1.15, 0.90, 0.13, 0.33, 0.88, 0.50],
      ["Apples, cherries, pears: ground cover, no frost", 0.75, 1.15, 0.80, 0.13, 0.33, 0.88, 0.50]],
    notes: "[a] The critical fraction remaining (frc) is discussed in section 4.6.2. [b] Winter wheat: the larger Kci (0.50) is for the initial " +
      "period when fallow wheat provides full ground cover but the soil is not frozen (printed as 0.15 / 0.50 in one row).",
  };
  const cropOpts = T["4.3"].rows.map((r, i) => [r[0], i]);
  const CORN = 5;

  // Table 4.4. Crop coefficient adjustment factor Kcf (p. 66)
  T["4.4"] = {
    title: "Crop coefficient adjustment factor (Kcf) for wind speeds and relative humidity",
    cols: ["Crop height (ft)", "Wind run (mi/d)", "RHmin 20%", "30%", "40%", "50%", "60%", "70%", "80%"],
    rh: [20, 30, 40, 50, 60, 70, 80],
    wind: [50, 100, 150, 200, 250, 300, 350],
    heights: [2, 4, 6, 8],
    grid: {
      2: [[0.03, 0.01, -0.02, -0.04, -0.06, -0.09, -0.11], [0.06, 0.03, 0.01, -0.02, -0.04, -0.07, -0.09],
          [0.08, 0.05, 0.03, 0.00, -0.02, -0.05, -0.07], [0.10, 0.08, 0.05, 0.03, 0.00, -0.02, -0.05],
          [0.12, 0.10, 0.07, 0.05, 0.02, 0.00, -0.03], [0.15, 0.12, 0.10, 0.07, 0.05, 0.02, 0.00],
          [0.17, 0.14, 0.12, 0.09, 0.07, 0.04, 0.02]],
      4: [[0.04, 0.01, -0.02, -0.05, -0.08, -0.11, -0.14], [0.07, 0.04, 0.01, -0.02, -0.05, -0.08, -0.11],
          [0.10, 0.07, 0.04, 0.01, -0.02, -0.06, -0.09], [0.12, 0.09, 0.06, 0.03, 0.00, -0.03, -0.06],
          [0.15, 0.12, 0.09, 0.06, 0.03, 0.00, -0.03], [0.18, 0.15, 0.12, 0.09, 0.06, 0.03, 0.00],
          [0.21, 0.18, 0.15, 0.11, 0.08, 0.05, 0.02]],
      6: [[0.05, 0.01, -0.02, -0.06, -0.09, -0.12, -0.16], [0.08, 0.04, 0.01, -0.02, -0.06, -0.09, -0.13],
          [0.11, 0.08, 0.04, 0.01, -0.03, -0.06, -0.10], [0.14, 0.11, 0.07, 0.04, 0.00, -0.03, -0.07],
          [0.17, 0.14, 0.10, 0.07, 0.03, 0.00, -0.04], [0.20, 0.17, 0.13, 0.10, 0.06, 0.03, 0.00],
          [0.23, 0.20, 0.16, 0.13, 0.10, 0.06, 0.03]],
      8: [[0.05, 0.01, -0.02, -0.06, -0.10, -0.14, -0.17], [0.09, 0.05, 0.01, -0.03, -0.06, -0.10, -0.14],
          [0.12, 0.08, 0.04, 0.01, -0.03, -0.07, -0.11], [0.15, 0.12, 0.08, 0.04, 0.00, -0.03, -0.07],
          [0.19, 0.15, 0.11, 0.07, 0.04, 0.00, -0.04], [0.22, 0.18, 0.15, 0.11, 0.07, 0.03, -0.01],
          [0.25, 0.22, 0.18, 0.14, 0.10, 0.07, 0.03]],
    },
    mult: [[10, 1.17], [12, 1.23], [14, 1.29], [16, 1.34], [20, 1.44], [25, 1.53]],
    notes: "Multiplier for other crop heights (multiply times values for 6-ft crop): 10 ft 1.17, 12 ft 1.23, 14 ft 1.29, 16 ft 1.34, 20 ft 1.44, 25 ft 1.53.",
  };
  T["4.4"].rows = [];
  for (const h of T["4.4"].heights) T["4.4"].grid[h].forEach((r, i) => T["4.4"].rows.push([h, T["4.4"].wind[i], ...r]));

  // Table 4.5. Fraction of the soil surface wetted (p. 70)
  T["4.5"] = {
    title: "Fraction of the soil surface wetted for various types of irrigation systems",
    cols: ["Wetting method", "Fw"],
    rows: [["Rain", 1.0], ["Sprinkler: above canopy sprinklers", 1.0], ["Sprinkler: in-canopy sprinklers", 0.75],
           ["Sprinkler: LEPA systems (alternate furrows wetted)", 0.5], ["Borders and basin irrigation", 1.0],
           ["Furrow: large application depth", 1.0], ["Furrow: small application depth", 0.5], ["Furrow: alternate furrows irrigated", 0.5],
           ["Surface trickle or drip irrigation", 0.25], ["Subsurface drip: large applications", 0.1], ["Subsurface drip: normal applications", 0.0]],
  };
  // Table 4.6. Duration of wet soil evaporation td and decay function ft (p. 70)
  T["4.6"] = {
    title: "Duration of wet soil evaporation (td) for selected soil textures and values of the wet soil decay function (ft) for time since wetting (t)",
    cols: ["Time since wetting t (d)", "Clay (td 10)", "Clay loam (td 7)", "Silt loam (td 5)", "Sandy loam (td 4)", "Loamy sand (td 3)", "Sand (td 2)"],
    soils: [["Clay", 10], ["Clay loam", 7], ["Silt loam", 5], ["Sandy loam", 4], ["Loamy sand", 3], ["Sand", 2]],
    rows: [
      [0, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00], [1, 0.68, 0.62, 0.55, 0.50, 0.42, 0.29], [2, 0.55, 0.47, 0.37, 0.29, 0.18, 0.00],
      [3, 0.45, 0.35, 0.23, 0.13, 0.00, null], [4, 0.37, 0.24, 0.11, 0.00, null, null], [5, 0.29, 0.15, 0.00, null, null, null],
      [6, 0.23, 0.07, null, null, null, null], [7, 0.16, 0.00, null, null, null, null], [8, 0.11, null, null, null, null, null],
      [9, 0.05, null, null, null, null, null], [10, 0.00, null, null, null, null, null]],
  };
  // Table 4.7. Landscape coefficient factors (p. 73)
  T["4.7"] = {
    title: "Range of plant species, density, and microclimate factors for landscape coefficients (adapted from Costello and Jones, 2014)",
    cols: ["Type of vegetation", "KP high", "KP avg.", "KP low", "KD high", "KD avg.", "KD low", "KM high", "KM avg.", "KM low"],
    rows: [["Trees", 0.9, 0.5, 0.2, 1.3, 1.0, 0.5, 1.4, 1.0, 0.5],
           ["Shrubs", 0.7, 0.5, 0.2, 1.1, 1.0, 0.5, 1.3, 1.0, 0.5],
           ["Groundcover", 0.7, 0.5, 0.2, 1.1, 1.0, 0.5, 1.2, 1.0, 0.5],
           ["Mixed: trees, shrubs, and groundcover", 0.9, 0.5, 0.2, 1.3, 1.1, 0.6, 1.4, 1.0, 0.5],
           ["Turf grass", 0.8, 0.7, 0.6, 1.0, 1.0, 0.6, 1.2, 1.0, 0.8]],
  };
  // Table 4.8. Example weather data, High Plains Regional Climate Center (p. 75)
  T["4.8"] = {
    title: "Example weather, reference crop ET and growing degree day data from High Plains Regional Climate Center",
    cols: ["Month", "Day", "Tmax (°F)", "Tmin (°F)", "Tavg (°F)", "Dew point (°F)", "Wind speed (mi/hr)", "Solar radiation (Lang/d)", "Rain (in)", "ETo (in/d)", "Growing degree units"],
    rows: [
      [7, 2, 89.5, 63.9, 76.7, 70.4, 8.2, 559, 0.16, 0.26, 25], [7, 3, 87.5, 63.1, 75.3, 65.9, 5.4, 651, 0, 0.27, 25],
      [7, 4, 88.4, 64.6, 76.5, 68.3, 4.1, 668, 0, 0.26, 25], [7, 5, 86.7, 64.3, 75.5, 67.8, 3.0, 542, 0, 0.21, 25],
      [7, 6, 91.1, 65.6, 78.4, 70.2, 4.5, 600, 0, 0.25, 26], [7, 7, 91.3, 67.4, 79.4, 69.6, 9.5, 659, 0, 0.34, 27],
      [7, 8, 92.2, 62.6, 77.4, 66.0, 11.4, 643, 0.62, 0.38, 24], [7, 9, 83.8, 59.9, 71.9, 65.6, 5.0, 638, 0, 0.24, 22],
      [7, 10, 88.7, 62.5, 75.6, 68.8, 6.7, 597, 0.01, 0.26, 24], [7, 11, 85.0, 62.0, 73.5, 66.0, 5.8, 647, 0, 0.26, 24],
      [7, 12, 85.1, 58.1, 71.6, 64.0, 4.5, 548, 0, 0.22, 22], [7, 13, 91.8, 63.1, 77.5, 68.0, 8.7, 636, 0.14, 0.33, 25],
      [7, 14, 77.8, 63.4, 70.6, 65.3, 6.4, 407, 0.01, 0.16, 21], [7, 15, 81.4, 60.8, 71.1, 63.3, 4.2, 584, 0, 0.22, 21]],
  };

  // ---------- helpers ----------
  const tab41es = T["4.1"].rows.map(r => [r[0], r[2]]);
  const tab41d = T["4.1"].rows.map(r => [r[0], r[3]]);
  const tab42 = T["4.2"].rows.map(r => [r[0], r[1]]);
  // method 0 = book tables (4.1, 4.2), 1 = FAO-56 equations (Allen et al. 1998) that the tables were made from
  const esF = (Tf, m) => m ? M.es(M.F2C(Tf)) : M.interp(tab41es, Tf);
  const deltaF = (Tf, m) => { if (!m) return M.interp(tab41d, Tf); const c = M.F2C(Tf); return 4098 * M.es(c) / Math.pow(c + 237.3, 2); };
  const gammaFt = (z, m) => { if (!m) return M.interp(tab42, z); const zm = z * 0.3048; const P = 101.3 * Math.pow((293 - 0.0065 * zm) / 293, 5.26); return 0.000665 * P; };
  const methodOpt = { k: "m", label: "Source of e<sub>s</sub>, Δ and γ", type: "sel", opts: [["Tables 4.1 and 4.2 (book)", 0], ["FAO-56 equations", 1]], v: 0,
    help: "The book reads e<sub>s</sub> and Δ from Table 4.1 and γ from Table 4.2 (linear interpolation here). The FAO-56 equations of Allen et al. (1998) produce those tables and work outside their range." };
  // Eq 4.4 in book units: ETo in/d, Rn MJ/m²/d, U2 mi/d, T °F, es/ea kPa, Δ, γ kPa/°C
  function eq44(D, g, Rn, U2, Tf, es, ea) {
    const den = D + g * (1 + 0.00634 * U2);
    const rad = (D * Rn / 62.23) / den;
    const aero = (g * U2 * (30.18 / (Tf + 460)) * (es - ea) / 25.4) / den;
    return { rad, aero, ETo: rad + aero };
  }
  const MDAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const monthOpts = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m, i) => [m, i]);
  const doy = (mo, d) => { let j = d; for (let i = 0; i < mo; i++) j += MDAYS[i]; return j; };
  // extraterrestrial radiation, MJ/m²/d (FAO-56 Eq. 21), latitude in degrees
  function Ra(latDeg, J) {
    const phi = latDeg * Math.PI / 180;
    const dr = 1 + 0.033 * Math.cos(2 * Math.PI * J / 365);
    const dec = 0.409 * Math.sin(2 * Math.PI * J / 365 - 1.39);
    const ws = Math.acos(Math.max(-1, Math.min(1, -Math.tan(phi) * Math.tan(dec))));
    return 24 * 60 / Math.PI * 0.0820 * dr * (ws * Math.sin(phi) * Math.sin(dec) + Math.cos(phi) * Math.cos(dec) * Math.sin(ws));
  }
  // net outgoing long-wave radiation, MJ/m²/d (FAO-56 Eq. 39); temperatures °F
  function Rnl(TmaxF, TminF, ea, RsRso) {
    const k = t => M.F2C(t) + 273.16;
    const bb = 4.903e-9 * (Math.pow(k(TmaxF), 4) + Math.pow(k(TminF), 4)) / 2;
    const frac = (0.34 - 0.14 * Math.sqrt(ea)) * (1.35 * Math.min(RsRso, 1) - 0.35);
    return { bb, frac, Rnl: bb * frac };
  }
  function kcf(h, wind, rh) {
    const t = T["4.4"];
    const at = hh => {
      const g = t.grid[hh];
      const col = t.wind.map((w, i) => [w, M.interp(t.rh.map((r, j) => [r, g[i][j]]), rh)]);
      return M.interp(col, wind);
    };
    if (h <= 8) {
      const hs = t.heights;
      if (h <= hs[0]) return at(2);
      for (let i = 1; i < hs.length; i++) if (h <= hs[i]) { const a = at(hs[i - 1]), b = at(hs[i]); return a + (b - a) * (h - hs[i - 1]) / (hs[i] - hs[i - 1]); }
    }
    const six = at(6);
    if (h < 10) { const a = at(8), b = six * 1.17; return a + (b - a) * (h - 8) / 2; }
    return six * M.interp(t.mult, h);
  }
  function kco(Fs, Kci, Kcp, Kcm, F1, F2, F3) {
    if (Fs <= F1) return Kci;
    if (Fs <= F2) return Kci + (Kcp - Kci) * (Fs - F1) / (F2 - F1);
    if (Fs <= F3) return Kcp;
    return Kcp - (Kcp - Kcm) * (Fs - F3) / (1 - F3);
  }
  const ksF = (fr, frc) => fr < frc ? fr / frc : 1;
  const ftF = (t, td) => t >= td ? 0 : 1 - Math.sqrt(Math.max(t, 0) / td);
  G.CH04 = { kcf, kco, Ra, Rnl, eq44, esF, deltaF, gammaFt };

  const C = (s) => { s.ch = 4; s.file = "ch04"; return calc(s); };

  C({
    id: "eq-4.1", eq: ["4.1"], sec: "4.3", page: 53, title: "Soil water balance for ET",
    tags: ["water balance", "checkbook", "ET from soil water", "deep percolation", "runoff", "how much water did the crop use"],
    note: "If the water table is more than about 6 ft below the surface, U<sub>f</sub> can usually be taken as zero.",
    inputs: [
      { k: "AWb", sym: "AW<sub>b</sub>", label: "Available soil water in root zone at start", dim: "length", u: "in", v: 4 },
      { k: "AWe", sym: "AW<sub>e</sub>", label: "Available soil water in root zone at end", dim: "length", u: "in", v: 3 },
      { k: "P", sym: "P", label: "Total precipitation", dim: "length", u: "in", v: 0.5 },
      { k: "dg", sym: "d<sub>g</sub>", label: "Gross irrigation", dim: "length", u: "in", v: 1 },
      { k: "Uf", sym: "U<sub>f</sub>", label: "Groundwater contribution", dim: "length", u: "in", v: 0 },
      { k: "Ri", sym: "R<sub>i</sub>", label: "Surface water run on", dim: "length", u: "in", v: 0 },
      { k: "Ro", sym: "R<sub>o</sub>", label: "Surface runoff leaving", dim: "length", u: "in", v: 0 },
      { k: "dp", sym: "d<sub>p</sub>", label: "Deep percolation below root zone", dim: "length", u: "in", v: 0 }],
    outputs: [{ k: "ET", sym: "ET", label: "ET during the period", dim: "length", u: "in", dp: 2 }],
    f: v => ({ ET: v.AWb - v.AWe + v.P + v.dg + v.Uf + v.Ri - v.Ro - v.dp }),
    figs: ["4.6"],
  });

  C({
    id: "eq-4.2-4.7", eq: ["4.2", "4.7"], sec: "4.6", page: 62, title: "Crop ET from reference ET (ET = Kc ETo)",
    tags: ["crop ET", "crop water use", "Kc times ETo", "how much water is my crop using", "crop coefficient"],
    inputs: [
      { k: "Kc", sym: "K<sub>c</sub>", label: "Crop coefficient", dim: "none", v: 1.1 },
      { k: "ETo", sym: "ET<sub>o</sub>", label: "Reference crop ET rate (short grass)", dim: "rate", u: "in/d", v: 0.3 }],
    outputs: [{ k: "ET", sym: "ET", label: "Crop ET rate", dim: "rate", u: "in/d", dp: 3 }],
    f: v => ({ ET: v.Kc * v.ETo }),
    examples: [{ ref: "Example 4.5 (field A)", page: 70, in: { Kc: 1.1, ETo: 0.3 }, out: { ET: 0.33 } }],
  });

  C({
    id: "eq-4.3", eq: ["4.3"], sec: "4.5", page: 56, title: "Penman-Monteith reference ET (full form)",
    tags: ["Penman-Monteith", "reference ET", "ETo", "aerodynamic resistance", "surface resistance", "FAO-56"],
    note: "Daily form with R<sub>n</sub> and G in MJ/m²/d, K<sub>t</sub> = 86,400 s/d, ρ<sub>a</sub> c<sub>p</sub> in MJ/m³/°C, resistances in s/m and λ in MJ/kg, giving ET<sub>o</sub> in mm/d (kg/m²/d). For the short grass reference, Allen et al. (1998) give r<sub>a</sub> = 208 / u<sub>2</sub> (u<sub>2</sub> in m/s) and r<sub>s</sub> = 70 s/m.",
    inputs: [
      { k: "Rn", sym: "R<sub>n</sub>", label: "Net radiation at the crop surface", dim: "radiation", u: "MJ/m²/d", v: 14.8 },
      { k: "G", sym: "G", label: "Soil heat flux density (about 0 for daily steps)", dim: "radiation", u: "MJ/m²/d", v: 0, min: -1e3 },
      { k: "es", sym: "e<sub>s</sub>", label: "Saturation vapor pressure of air", dim: "pressure", u: "kPa", v: 3.29 },
      { k: "ea", sym: "e<sub>a</sub>", label: "Actual vapor pressure of air", dim: "pressure", u: "kPa", v: 1.53 },
      { k: "D", sym: "Δ", label: "Slope of saturation vapor pressure curve", dim: "vpslope", u: "kPa/°C", v: 0.178, tables: ["4.1"] },
      { k: "g", sym: "γ", label: "Psychrometric constant", dim: "vpslope", u: "kPa/°C", v: 0.060 },
      { k: "Kt", sym: "K<sub>t</sub>", label: "Unit conversion constant (s/d)", dim: "none", v: 86400 },
      { k: "rho", sym: "ρ<sub>a</sub>", label: "Density of air", dim: "density", u: "kg/m³", v: 1.06, help: "About 1.2 kg/m³ at sea level, 1.06 at 3,000 ft and 24 °C." },
      { k: "cp", sym: "c<sub>p</sub>", label: "Specific heat of air (MJ/kg/°C)", dim: "none", v: 0.001013 },
      { k: "ra", sym: "r<sub>a</sub>", label: "Aerodynamic resistance", dim: "resist", u: "s/m", v: 37.2 },
      { k: "rs", sym: "r<sub>s</sub>", label: "Bulk surface resistance", dim: "resist", u: "s/m", v: 70 },
      { k: "lam", sym: "λ", label: "Heat of vaporization of water (MJ/kg)", dim: "none", v: 2.45 }],
    outputs: [{ k: "ETo", sym: "ET<sub>o</sub>", label: "Reference crop ET", dim: "rate", u: "mm/d", dp: 2 }],
    f: v => ({ ETo: ((v.D * (v.Rn - v.G) + v.Kt * v.rho * v.cp * (v.es - v.ea) / v.ra) / (v.D + v.g * (1 + v.rs / v.ra))) / v.lam }),
    // Example 4.1 conditions (U2 = 300 mi/d = 5.59 m/s, ra = 208/5.59); the book's chart answer is 0.31 in/d = 7.9 mm/d
    examples: [{ ref: "Example 4.1 conditions", page: 62, in: {}, out: { ETo: 0.31 * 25.4 }, tol: 0.05 }],
    tables: ["4.1", "4.2"], figs: ["4.8"],
  });

  C({
    id: "eq-4.4", eq: ["4.4"], sec: "4.5", page: 57, title: "Reduced Penman-Monteith reference ET (ASCE daily, short grass)",
    tags: ["reference ET", "ETo", "Penman-Monteith", "grass reference", "radiation term", "aerodynamic term", "weather station ET"],
    note: "Left bracket is the radiation term (Figure 4.11), right bracket is the aerodynamic term (Figure 4.12). Soil heat flux is neglected for daily steps.",
    inputs: [
      { k: "D", sym: "Δ", label: "Slope of saturation vapor pressure curve (Table 4.1 at mean T)", dim: "vpslope", u: "kPa/°C", v: 0.178 },
      { k: "g", sym: "γ", label: "Psychrometric constant (Table 4.2)", dim: "vpslope", u: "kPa/°C", v: 0.060 },
      { k: "Rn", sym: "R<sub>n</sub>", label: "Net radiation", dim: "radiation", u: "MJ/m²/d", v: 14.8 },
      { k: "U2", sym: "U<sub>2</sub>", label: "Daily wind run at 2 m", dim: "windrun", u: "mi/d", v: 300 },
      { k: "T", sym: "T", label: "Mean daily air temperature", dim: "temp", u: "°F", v: 75, min: -100 },
      { k: "es", sym: "e<sub>s</sub>", label: "Saturation vapor pressure (Eq. 4.5)", dim: "pressure", u: "kPa", v: 3.29 },
      { k: "ea", sym: "e<sub>a</sub>", label: "Actual vapor pressure (e° at dew point)", dim: "pressure", u: "kPa", v: 1.53 }],
    outputs: [
      { k: "rad", sym: "ET<sub>rad</sub>", label: "Reference ET from radiation term", dim: "rate", u: "in/d", dp: 3 },
      { k: "aero", sym: "ET<sub>aero</sub>", label: "Reference ET from aerodynamic term", dim: "rate", u: "in/d", dp: 3 },
      { k: "ETo", sym: "ET<sub>o</sub>", label: "Reference crop ET", dim: "rate", u: "in/d", dp: 3 }],
    f: v => eq44(v.D, v.g, v.Rn, v.U2, v.T, v.es, v.ea),
    // book reads Figures 4.11 and 4.12 graphically (0.12 + 0.19); the equation gives 0.120 + 0.199
    examples: [{ ref: "Example 4.1", page: 62, in: { D: 0.178, g: 0.060, Rn: 14.8, U2: 300, T: 75, es: 3.29, ea: 1.53 }, out: { rad: 0.12, aero: 0.19, ETo: 0.31 }, tol: 0.06 }],
    tables: ["4.1", "4.2"], figs: ["4.11", "4.12"],
  });

  C({
    id: "eq-4.5", eq: ["4.5"], sec: "4.5", page: 58, title: "Saturation and actual vapor pressure",
    tags: ["vapor pressure", "es", "ea", "dew point", "vapor pressure deficit", "VPD", "humidity"],
    note: "e<sub>a</sub> is the saturation vapor pressure at the dew point temperature.",
    inputs: [
      { k: "Tmax", sym: "T<sub>max</sub>", label: "Maximum air temperature", dim: "temp", u: "°F", v: 90, min: -100 },
      { k: "Tmin", sym: "T<sub>min</sub>", label: "Minimum air temperature", dim: "temp", u: "°F", v: 60, min: -100 },
      { k: "Td", sym: "T<sub>dew</sub>", label: "Dew point temperature", dim: "temp", u: "°F", v: 56, min: -100 },
      methodOpt],
    outputs: [
      { k: "emax", sym: "e°(T<sub>max</sub>)", label: "Saturation vapor pressure at T<sub>max</sub>", dim: "pressure", u: "kPa", dp: 2 },
      { k: "emin", sym: "e°(T<sub>min</sub>)", label: "Saturation vapor pressure at T<sub>min</sub>", dim: "pressure", u: "kPa", dp: 2 },
      { k: "es", sym: "e<sub>s</sub>", label: "Saturation vapor pressure of air", dim: "pressure", u: "kPa", dp: 2 },
      { k: "ea", sym: "e<sub>a</sub>", label: "Actual vapor pressure", dim: "pressure", u: "kPa", dp: 2 },
      { k: "vpd", sym: "e<sub>s</sub> − e<sub>a</sub>", label: "Vapor pressure deficit", dim: "pressure", u: "kPa", dp: 2 }],
    f: v => {
      const emax = esF(v.Tmax, +v.m), emin = esF(v.Tmin, +v.m), es = (emax + emin) / 2, ea = esF(v.Td, +v.m);
      return { emax, emin, es, ea, vpd: es - ea };
    },
    examples: [{ ref: "Example 4.1", page: 62, in: { Tmax: 90, Tmin: 60, Td: 56, m: 0 }, out: { es: 3.29, vpd: 1.76 } },
               { ref: "Example 4.1", page: 62, in: { Tmax: 90, Tmin: 60, Td: 56, m: 1 }, out: { vpd: 1.76 } }],
    tables: ["4.1"],
  });

  C({
    id: "eq-4.6", eq: ["4.6"], sec: "4.5", page: 58, title: "Net radiation",
    tags: ["net radiation", "Rn", "albedo", "solar radiation", "long-wave radiation"],
    note: "The book prints Eq. 4.6 with R<sub>n</sub> on both sides; Example 4.1 shows the intended form R<sub>n</sub> = (1 − α) R<sub>s</sub> − R<sub>nl</sub>.",
    inputs: [
      { k: "Rs", sym: "R<sub>s</sub>", label: "Measured solar radiation", dim: "radiation", u: "MJ/m²/d", v: 25 },
      { k: "a", sym: "α", label: "Albedo (0.23 for the short reference crop)", dim: "none", v: 0.23 },
      { k: "Rnl", sym: "R<sub>nl</sub>", label: "Net outgoing long-wave radiation (Figure 4.10)", dim: "radiation", u: "MJ/m²/d", v: 4.5 }],
    outputs: [{ k: "Rn", sym: "R<sub>n</sub>", label: "Net radiation", dim: "radiation", u: "MJ/m²/d", dp: 2 }],
    f: v => ({ Rn: (1 - v.a) * v.Rs - v.Rnl }),
    examples: [{ ref: "Example 4.1", page: 62, in: { Rs: 25, a: 0.23, Rnl: 4.5 }, out: { Rn: 14.8 } }],
  });

  C({
    id: "fig-4.9", eq: [], sec: "4.5", page: 59, title: "Clear-sky radiation from date, latitude and elevation (Figure 4.9)",
    tags: ["clear sky radiation", "Rso", "extraterrestrial radiation", "Ra", "latitude"],
    note: "Figure 4.9 is drawn from the FAO-56 relations (Allen et al. 1998): R<sub>a</sub> from latitude and day of year, R<sub>so</sub> = (0.75 + 2×10⁻⁵ z) R<sub>a</sub> with z in m. Negative latitude for the southern hemisphere.",
    inputs: [
      { k: "mo", label: "Month", type: "sel", opts: monthOpts, v: 5 },
      { k: "day", sym: "day", label: "Day of month", dim: "count", u: "#", v: 15 },
      { k: "lat", sym: "φ", label: "Latitude", dim: "angle", u: "degrees", v: 40, min: -90, max: 90 },
      { k: "z", sym: "z", label: "Elevation above sea level", dim: "length", u: "ft", v: 3000 }],
    outputs: [
      { k: "J", sym: "J", label: "Day of year", dim: "count", u: "#", dp: 0 },
      { k: "Ra", sym: "R<sub>a</sub>", label: "Extraterrestrial radiation", dim: "radiation", u: "MJ/m²/d", dp: 1 },
      { k: "Rso", sym: "R<sub>so</sub>", label: "Clear-sky radiation", dim: "radiation", u: "MJ/m²/d", dp: 1 }],
    f: v => { const J = doy(+v.mo, v.day), ra = Ra(v.lat, J); return { J, Ra: ra, Rso: (0.75 + 2e-5 * v.z * 0.3048) * ra }; },
    examples: [{ ref: "Example 4.1", page: 62, in: { mo: 5, day: 15, lat: 40, z: 3000 }, out: { Ra: 42, Rso: 32 } }],
    figs: ["4.9"],
  });

  C({
    id: "fig-4.10", eq: [], sec: "4.5", page: 59, title: "Net outgoing long-wave radiation (Figure 4.10)",
    tags: ["long-wave radiation", "Rnl", "black body", "cloudiness", "Rs/Rso"],
    note: "Figure 4.10 is drawn from the FAO-56 relation R<sub>nl</sub> = σ [(T<sub>max,K</sub>⁴ + T<sub>min,K</sub>⁴)/2] (0.34 − 0.14 √e<sub>a</sub>) (1.35 R<sub>s</sub>/R<sub>so</sub> − 0.35). It reproduces Example 4.1 (38.3 MJ/m²/d black body, 11.7% emitted, 4.5 MJ/m²/d).",
    inputs: [
      { k: "Tmax", sym: "T<sub>max</sub>", label: "Maximum air temperature", dim: "temp", u: "°F", v: 90, min: -100 },
      { k: "Tmin", sym: "T<sub>min</sub>", label: "Minimum air temperature", dim: "temp", u: "°F", v: 60, min: -100 },
      { k: "Td", sym: "T<sub>dew</sub>", label: "Dew point temperature", dim: "temp", u: "°F", v: 56, min: -100 },
      { k: "Rs", sym: "R<sub>s</sub>", label: "Measured solar radiation", dim: "radiation", u: "MJ/m²/d", v: 25 },
      { k: "Rso", sym: "R<sub>so</sub>", label: "Clear-sky radiation (Figure 4.9)", dim: "radiation", u: "MJ/m²/d", v: 32 },
      methodOpt],
    outputs: [
      { k: "bb", sym: "σT⁴", label: "Black-body long-wave radiation", dim: "radiation", u: "MJ/m²/d", dp: 1 },
      { k: "frac", sym: "f", label: "Fraction of black-body radiation emitted", dim: "frac", u: "%", dp: 1 },
      { k: "Rnl", sym: "R<sub>nl</sub>", label: "Net outgoing long-wave radiation", dim: "radiation", u: "MJ/m²/d", dp: 2 }],
    f: v => Rnl(v.Tmax, v.Tmin, esF(v.Td, +v.m), v.Rs / v.Rso),
    examples: [{ ref: "Example 4.1", page: 62, in: { Tmax: 90, Tmin: 60, Td: 56, Rs: 25, Rso: 32, m: 0 }, out: { bb: 38.3, frac: 0.117, Rnl: 4.5 } }],
    figs: ["4.10"],
  });

  C({
    id: "eto-daily", eq: ["4.4", "4.5", "4.6"], sec: "4.5", page: 62, title: "Daily reference ET from weather data (Example 4.1 procedure)",
    tags: ["reference ET", "ETo from weather", "Penman-Monteith procedure", "daily ET", "grass ET", "how much water did grass use today"],
    note: "Follows Example 4.1: R<sub>so</sub> (Figure 4.9), R<sub>nl</sub> (Figure 4.10), R<sub>n</sub> (Eq. 4.6), e<sub>s</sub> and e<sub>a</sub> (Eq. 4.5), Δ at the mean temperature (Table 4.1), γ from elevation (Table 4.2), then Eq. 4.4.",
    inputs: [
      { k: "Tmax", sym: "T<sub>max</sub>", label: "Maximum air temperature", dim: "temp", u: "°F", v: 90, min: -100 },
      { k: "Tmin", sym: "T<sub>min</sub>", label: "Minimum air temperature", dim: "temp", u: "°F", v: 60, min: -100 },
      { k: "Td", sym: "T<sub>dew</sub>", label: "Dew point temperature", dim: "temp", u: "°F", v: 56, min: -100 },
      { k: "Rs", sym: "R<sub>s</sub>", label: "Solar radiation", dim: "radiation", u: "MJ/m²/d", v: 25 },
      { k: "U2", sym: "U<sub>2</sub>", label: "Wind run at 2 m", dim: "windrun", u: "mi/d", v: 300 },
      { k: "z", sym: "z", label: "Elevation above sea level", dim: "length", u: "ft", v: 3000 },
      { k: "lat", sym: "φ", label: "Latitude", dim: "angle", u: "degrees", v: 40, min: -90, max: 90 },
      { k: "mo", label: "Month", type: "sel", opts: monthOpts, v: 5 },
      { k: "day", sym: "day", label: "Day of month", dim: "count", u: "#", v: 15 },
      methodOpt],
    outputs: [
      { k: "Rso", sym: "R<sub>so</sub>", label: "Clear-sky radiation", dim: "radiation", u: "MJ/m²/d", dp: 1 },
      { k: "Rnl", sym: "R<sub>nl</sub>", label: "Net long-wave radiation", dim: "radiation", u: "MJ/m²/d", dp: 2 },
      { k: "Rn", sym: "R<sub>n</sub>", label: "Net radiation", dim: "radiation", u: "MJ/m²/d", dp: 2 },
      { k: "Tm", sym: "T", label: "Mean air temperature", dim: "temp", u: "°F", dp: 1 },
      { k: "vpd", sym: "e<sub>s</sub> − e<sub>a</sub>", label: "Vapor pressure deficit", dim: "pressure", u: "kPa", dp: 2 },
      { k: "D", sym: "Δ", label: "Slope of vapor pressure curve", dim: "vpslope", u: "kPa/°C", dp: 3 },
      { k: "g", sym: "γ", label: "Psychrometric constant", dim: "vpslope", u: "kPa/°C", dp: 4 },
      { k: "rad", sym: "ET<sub>rad</sub>", label: "ET from radiation term", dim: "rate", u: "in/d", dp: 3 },
      { k: "aero", sym: "ET<sub>aero</sub>", label: "ET from aerodynamic term", dim: "rate", u: "in/d", dp: 3 },
      { k: "ETo", sym: "ET<sub>o</sub>", label: "Reference crop ET", dim: "rate", u: "in/d", dp: 3 }],
    f: v => {
      const m = +v.m;
      const J = doy(+v.mo, v.day), Rso = (0.75 + 2e-5 * v.z * 0.3048) * Ra(v.lat, J);
      const es = (esF(v.Tmax, m) + esF(v.Tmin, m)) / 2, ea = esF(v.Td, m);
      const rnl = Rnl(v.Tmax, v.Tmin, ea, v.Rs / Rso).Rnl;
      const Rn = 0.77 * v.Rs - rnl;
      const Tm = (v.Tmax + v.Tmin) / 2, D = deltaF(Tm, m), g = gammaFt(v.z, m);
      const r = eq44(D, g, Rn, v.U2, Tm, es, ea);
      return { Rso, Rnl: rnl, Rn, Tm, vpd: es - ea, D, g, rad: r.rad, aero: r.aero, ETo: r.ETo };
    },
    // the book reads Figures 4.9 to 4.12 by eye (0.12 + 0.19 = 0.31 in/d); the equations give about 0.32
    examples: [{ ref: "Example 4.1", page: 62, in: { m: 0 }, out: { Rso: 32, Rnl: 4.5, Rn: 14.8, vpd: 1.76, rad: 0.12, aero: 0.19, ETo: 0.31 }, tol: 0.06 },
               { ref: "Example 4.1 (FAO-56 equations)", page: 62, in: { m: 1 }, out: { Rn: 14.8, ETo: 0.31 }, tol: 0.06 }],
    tables: ["4.1", "4.2"], figs: ["4.9", "4.10", "4.11", "4.12"],
  });

  C({
    id: "eq-4.8", eq: ["4.8"], sec: "4.6", page: 63, title: "Crop coefficient from basal, stress and wet soil factors",
    tags: ["crop coefficient", "Kc", "basal crop coefficient", "dual crop coefficient", "stress factor", "wet soil"],
    inputs: [
      { k: "Kco", sym: "K<sub>co</sub>", label: "Basal crop coefficient (dry surface, no stress)", dim: "none", v: 1.2 },
      { k: "Ks", sym: "K<sub>s</sub>", label: "Water stress factor (Eq. 4.10, p. 68)", dim: "none", v: 1 },
      { k: "Kw", sym: "K<sub>w</sub>", label: "Wet soil evaporation factor (Eq. 4.11, p. 69)", dim: "none", v: 0 }],
    outputs: [{ k: "Kc", sym: "K<sub>c</sub>", label: "Crop coefficient", dim: "none", dp: 3 }],
    f: v => ({ Kc: v.Kco * v.Ks + v.Kw }),
    // Example 4.4: ET = Ks Kco ETo with Kw = 0, so Kc = 0.56 x 1.20
    examples: [{ ref: "Example 4.4", page: 69, in: { Kco: 1.2, Ks: 0.25 / 0.45, Kw: 0 }, out: { Kc: 0.667 } }],
    figs: ["4.13"],
  });

  C({
    id: "eq-4.9", eq: ["4.9"], sec: "4.6", page: 66, title: "Adjusted peak and harvest basal crop coefficients",
    tags: ["Kcp", "Kcm", "Kcf", "adjust crop coefficient for wind and humidity", "arid climate adjustment"],
    note: "K<sub>ci</sub> is not adjusted. Use average climate for the time of year (Table 4.4), not daily values.",
    inputs: [
      { k: "Kcp0", sym: "K<sub>cp</sub>′", label: "Tabular peak coefficient (Table 4.3)", dim: "none", v: 1.15 },
      { k: "Kcm0", sym: "K<sub>cm</sub>′", label: "Tabular harvest coefficient (Table 4.3)", dim: "none", v: 0.15 },
      { k: "Kcfp", sym: "K<sub>cf</sub>", label: "Adjustment at midseason (Table 4.4)", dim: "none", v: 0.06, min: -1 },
      { k: "Kcfm", sym: "K<sub>cf</sub>", label: "Adjustment at harvest (Table 4.4)", dim: "none", v: -0.07, min: -1 }],
    outputs: [
      { k: "Kcp", sym: "K<sub>cp</sub>", label: "Adjusted peak basal coefficient", dim: "none", dp: 2 },
      { k: "Kcm", sym: "K<sub>cm</sub>", label: "Adjusted harvest basal coefficient", dim: "none", dp: 2 }],
    f: v => ({ Kcp: v.Kcp0 + v.Kcfp, Kcm: v.Kcm0 + v.Kcfm }),
    examples: [{ ref: "Example 4.2", page: 67, in: { Kcp0: 1.15, Kcm0: 0.15, Kcfp: 0.06, Kcfm: -0.07 }, out: { Kcp: 1.21, Kcm: 0.08 } }],
    tables: ["4.3", "4.4"],
  });

  C({
    id: "eq-4.10", eq: ["4.10"], sec: "4.6", page: 67, title: "Minimum relative humidity from dew point and maximum temperature",
    tags: ["relative humidity", "RHmin", "dew point", "minimum humidity"],
    inputs: [
      { k: "Td", sym: "T<sub>dew</sub>", label: "Dew point temperature", dim: "temp", u: "°F", v: 65, min: -100 },
      { k: "Tmax", sym: "T<sub>max</sub>", label: "Maximum air temperature", dim: "temp", u: "°F", v: 90, min: -100 },
      methodOpt],
    outputs: [{ k: "RH", sym: "RH<sub>min</sub>", label: "Minimum relative humidity", dim: "pct", u: "%", dp: 0 }],
    f: v => ({ RH: 100 * esF(v.Td, +v.m) / esF(v.Tmax, +v.m) }),
    examples: [{ ref: "Example 4.2 (midseason)", page: 67, in: { Td: 65, Tmax: 90, m: 0 }, out: { RH: 44 } },
               { ref: "Example 4.2 (harvest)", page: 67, in: { Td: 40, Tmax: 50, m: 0 }, out: { RH: 68 } }],
    tables: ["4.1"],
  });

  C({
    id: "eq-4.11-4.12", eq: ["4.11", "4.12"], sec: "4.6", page: 67, title: "Basal crop coefficient through the season",
    tags: ["basal crop coefficient", "Kco", "fraction of growing season", "crop curve", "growth stage", "Kc curve"],
    note: "Initial stage (F<sub>s</sub> ≤ F<sub>S1</sub>): K<sub>co</sub> = K<sub>ci</sub>. Vegetative: Eq. 4.11. Midseason (F<sub>S2</sub> to F<sub>S3</sub>): K<sub>co</sub> = K<sub>cp</sub>. Maturing: Eq. 4.12.",
    inputs: [
      { k: "Fs", sym: "F<sub>s</sub>", label: "Fraction of growing season (days since planting / season length, or Eq. 4.13)", dim: "frac", u: "decimal", v: 0.3 },
      { k: "Kci", sym: "K<sub>ci</sub>", label: "Initial basal coefficient", dim: "none", v: 0.15 },
      { k: "Kcp", sym: "K<sub>cp</sub>", label: "Adjusted peak coefficient (Eq. 4.9)", dim: "none", v: 1.21 },
      { k: "Kcm", sym: "K<sub>cm</sub>", label: "Adjusted harvest coefficient (Eq. 4.9)", dim: "none", v: 0.08 },
      { k: "F1", sym: "F<sub>S1</sub>", label: "Fraction when canopy development begins", dim: "frac", u: "decimal", v: 0.18 },
      { k: "F2", sym: "F<sub>S2</sub>", label: "Fraction at effective cover", dim: "frac", u: "decimal", v: 0.41 },
      { k: "F3", sym: "F<sub>S3</sub>", label: "Fraction when maturing begins", dim: "frac", u: "decimal", v: 0.71 }],
    outputs: [
      { k: "Kco", sym: "K<sub>co</sub>", label: "Basal crop coefficient", dim: "none", dp: 2 },
      { k: "stage", label: "Growth stage", text: true }],
    f: v => ({
      Kco: kco(v.Fs, v.Kci, v.Kcp, v.Kcm, v.F1, v.F2, v.F3),
      stage: v.Fs <= v.F1 ? "Initial" : v.Fs <= v.F2 ? "Vegetative (Eq. 4.11)" : v.Fs <= v.F3 ? "Midseason" : "Maturing (Eq. 4.12)",
    }),
    examples: [0.10, 0.30, 0.50, 0.70, 0.90].map((Fs, i) => ({ ref: "Example 4.3", page: 68, in: { Fs }, out: { Kco: [0.15, 0.70, 1.21, 1.21, 0.47][i] } })),
    tables: ["4.3"], figs: ["4.14"],
  });

  C({
    id: "eq-4.10-p68", eq: ["4.10"], sec: "4.6", page: 68, title: "Water stress factor (Ks) and stressed crop ET",
    tags: ["stress factor", "Ks", "water stress", "dry soil ET", "fraction remaining", "is my crop stressed"],
    note: "K<sub>s</sub> = f<sub>r</sub>/f<sub>rc</sub> when f<sub>r</sub> < f<sub>rc</sub>, otherwise 1. f<sub>r</sub> is from Eq. 2.10. Crop ET assumes K<sub>w</sub> = 0 (dry surface).",
    inputs: [
      { k: "thv", sym: "θ<sub>v</sub>", label: "Current volumetric water content", dim: "frac", u: "decimal", v: 0.15 },
      { k: "fc", sym: "θ<sub>fc</sub>", label: "Water content at field capacity", dim: "frac", u: "decimal", v: 0.24 },
      { k: "wp", sym: "θ<sub>wp</sub>", label: "Water content at wilting point", dim: "frac", u: "decimal", v: 0.12 },
      { k: "frc", sym: "f<sub>rc</sub>", label: "Critical threshold of f<sub>r</sub> (Table 4.3)", dim: "frac", u: "decimal", v: 0.45 },
      { k: "Kco", sym: "K<sub>co</sub>", label: "Basal crop coefficient", dim: "none", v: 1.2 },
      { k: "ETo", sym: "ET<sub>o</sub>", label: "Reference ET", dim: "rate", u: "in/d", v: 0.3 }],
    outputs: [
      { k: "fr", sym: "f<sub>r</sub>", label: "Fraction of available water remaining", dim: "frac", u: "decimal", dp: 2 },
      { k: "Ks", sym: "K<sub>s</sub>", label: "Water stress factor", dim: "none", dp: 2 },
      { k: "ET", sym: "ET", label: "Crop ET (K<sub>s</sub> K<sub>co</sub> ET<sub>o</sub>)", dim: "rate", u: "in/d", dp: 3 }],
    f: v => { const fr = Math.max(0, (v.thv - v.wp) / (v.fc - v.wp)), Ks = ksF(fr, v.frc); return { fr, Ks, ET: Ks * v.Kco * v.ETo }; },
    examples: [
      { ref: "Example 4.4", page: 69, in: { thv: 0.15, fc: 0.24, wp: 0.12, frc: 0.45, Kco: 1.2, ETo: 0.3 }, out: { fr: 0.25, Ks: 0.56, ET: 0.2 } },
      { ref: "Example 4.5 (field A)", page: 70, in: { thv: 0.22, fc: 0.25, wp: 0.10, frc: 0.35, Kco: 1.1, ETo: 0.3 }, out: { fr: 0.80, Ks: 1, ET: 0.33 } },
      // book rounds fr to 0.13 before dividing (Ks 0.37, ET 0.12); exact fr is 0.133 (Ks 0.38, ET 0.126)
      { ref: "Example 4.5 (field B)", page: 70, in: { thv: 0.12, fc: 0.25, wp: 0.10, frc: 0.35, Kco: 1.1, ETo: 0.3 }, out: { fr: 0.13, Ks: 0.37, ET: 0.12 }, tol: 0.06 }],
    tables: ["4.3"], figs: ["4.15"],
  });

  C({
    id: "eq-4.11-p69", eq: ["4.11"], sec: "4.6", page: 69, title: "Wet soil evaporation factor (Kw)",
    tags: ["wet soil evaporation", "Kw", "after rain", "after irrigation", "evaporation from wet soil", "Kcmax"],
    note: "K<sub>w</sub> = F<sub>w</sub> (K<sub>cmax</sub> − K<sub>co</sub>) f<sub>t</sub>, with K<sub>cmax</sub> = 1.2 + K<sub>cf</sub> and f<sub>t</sub> = 1 − √(t/t<sub>d</sub>) (zero once t ≥ t<sub>d</sub>).",
    inputs: [
      { k: "Fw", sym: "F<sub>w</sub>", label: "Fraction of surface wetted (Table 4.5)", dim: "frac", u: "decimal", v: 1 },
      { k: "Kcf", sym: "K<sub>cf</sub>", label: "Crop coefficient adjustment factor (Table 4.4)", dim: "none", v: 0, min: -1 },
      { k: "Kco", sym: "K<sub>co</sub>", label: "Basal crop coefficient", dim: "none", v: 0.6 },
      { k: "t", sym: "t", label: "Time since last wetting", dim: "time", u: "d", v: 2 },
      { k: "td", sym: "t<sub>d</sub>", label: "Duration of wet soil evaporation (Table 4.6)", dim: "time", u: "d", v: 5 }],
    outputs: [
      { k: "Kcmax", sym: "K<sub>cmax</sub>", label: "Maximum crop coefficient for wet soil", dim: "none", dp: 2 },
      { k: "ft", sym: "f<sub>t</sub>", label: "Wet soil decay function", dim: "none", dp: 2 },
      { k: "Kw", sym: "K<sub>w</sub>", label: "Wet soil evaporation factor", dim: "none", dp: 3 }],
    f: v => { const Kcmax = 1.2 + v.Kcf, ft = ftF(v.t, v.td); return { Kcmax, ft, Kw: v.Fw * Math.max(0, Kcmax - v.Kco) * ft }; },
    examples: [{ ref: "Table 4.6 (silt loam, t = 2 d)", page: 70, in: { t: 2, td: 5 }, out: { ft: 0.37 } }],
    tables: ["4.4", "4.5", "4.6"],
  });

  C({
    id: "eq-4.12-p71", eq: ["4.12"], sec: "4.6", page: 71, title: "Growing degree days",
    tags: ["GDD", "growing degree days", "heat units", "corn GDD", "86/50"],
    note: "Each day: T<sub>high</sub> = smaller of T<sub>max</sub> and 86 °F, T<sub>low</sub> = larger of T<sub>min</sub> and T<sub>base</sub>, T<sub>i</sub> = (T<sub>high</sub> + T<sub>low</sub>)/2. Base is about 50 °F for corn and 40 °F for wheat and barley. A day with T<sub>i</sub> below base adds zero.",
    inputs: [
      { k: "tmax", sym: "T<sub>max</sub>", label: "Daily maximum temperatures, °F (list)", type: "list", v: "89.5, 87.5, 88.4" },
      { k: "tmin", sym: "T<sub>min</sub>", label: "Daily minimum temperatures, °F (list)", type: "list", v: "63.9, 63.1, 64.6" },
      { k: "Tb", sym: "T<sub>base</sub>", label: "Base temperature", dim: "temp", u: "°F", v: 50, min: -100 },
      { k: "Tc", sym: "T<sub>cap</sub>", label: "Upper temperature cap", dim: "temp", u: "°F", v: 86, min: -100 }],
    outputs: [
      { k: "GDD", sym: "GDD<sub>n</sub>", label: "Cumulative growing degree days", dim: "gdd", u: "°F·d", dp: 1 },
      { k: "daily", label: "Daily values", text: true }],
    f: v => {
      const hi = M.list(v.tmax), lo = M.list(v.tmin), n = Math.min(hi.length, lo.length), d = [];
      for (let i = 0; i < n; i++) { const th = Math.min(hi[i], v.Tc), tl = Math.max(lo[i], v.Tb); d.push(Math.max(0, (th + tl) / 2 - v.Tb)); }
      return { GDD: M.sum(d), daily: d.map(x => x.toFixed(1)).join(", ") };
    },
    examples: [
      { ref: "Table 4.8 (July 2 to 15)", page: 75, in: { tmax: T["4.8"].rows.map(r => r[2]).join(","), tmin: T["4.8"].rows.map(r => r[3]).join(",") }, out: { GDD: 336 } },
      ...T["4.8"].rows.map(r => ({ ref: `Table 4.8 (7/${r[1]})`, page: 75, in: { tmax: String(r[2]), tmin: String(r[3]) }, out: { GDD: r[10] }, tol: 0.03 }))],
    tables: ["4.8"],
  });

  C({
    id: "eq-4.13", eq: ["4.13"], sec: "4.6", page: 71, title: "Fraction of growing season from growing degree days",
    tags: ["fraction of season", "Fs", "GDD to maturity", "crop stage from GDD"],
    inputs: [
      { k: "GDDn", sym: "GDD<sub>n</sub>", label: "Cumulative GDD from planting to day n", dim: "gdd", u: "°F·d", v: 1200 },
      { k: "GDDm", sym: "GDD<sub>m</sub>", label: "Cumulative GDD needed to reach maturity", dim: "gdd", u: "°F·d", v: 2700 }],
    outputs: [{ k: "Fs", sym: "F<sub>s</sub>", label: "Fraction of growing season", dim: "frac", u: "decimal", dp: 3 }],
    f: v => ({ Fs: v.GDDn / v.GDDm }),
  });

  C({
    id: "eq-4.14-4.15", eq: ["4.14", "4.15"], sec: "4.7", page: 72, title: "Landscape ET (KL = KP KD KM)",
    tags: ["landscape coefficient", "lawn water use", "turf ET", "trees and shrubs", "KL", "how much water does my landscape need"],
    note: "The landscape coefficient estimates water needed to keep the landscape acceptable, not the maximum it could use.",
    inputs: [
      { k: "KP", sym: "K<sub>P</sub>", label: "Plant species factor (Table 4.7)", dim: "none", v: 0.7 },
      { k: "KD", sym: "K<sub>D</sub>", label: "Density factor (Table 4.7)", dim: "none", v: 1.0 },
      { k: "KM", sym: "K<sub>M</sub>", label: "Microclimate factor (Table 4.7)", dim: "none", v: 1.0 },
      { k: "ETo", sym: "ET<sub>o</sub>", label: "Reference ET", dim: "rate", u: "in/d", v: 0.25 }],
    outputs: [
      { k: "KL", sym: "K<sub>L</sub>", label: "Landscape coefficient", dim: "none", dp: 3 },
      { k: "ET", sym: "ET", label: "Landscape ET", dim: "rate", u: "in/d", dp: 3 }],
    f: v => { const KL = v.KP * v.KD * v.KM; return { KL, ET: KL * v.ETo }; },
    tables: ["4.7"], figs: ["4.17"],
  });

  // ---------- procedure: crop ET for a day ----------
  C({
    id: "crop-et", eq: ["4.7", "4.8", "4.9", "4.10", "4.11", "4.12", "4.13"], sec: "4.6", page: 62, title: "Crop ET for a day (full crop coefficient procedure)",
    tags: ["crop ET", "daily crop water use", "Kc procedure", "irrigation scheduling ET", "corn ET today", "dual crop coefficient"],
    note: "Combines Table 4.3 (crop), Eq. 4.9 (K<sub>cf</sub> adjustment), Eq. 4.11 and 4.12 (K<sub>co</sub> by season fraction), Eq. 4.10 p. 68 (stress, f<sub>rc</sub> from Table 4.3), Eq. 4.11 p. 69 (wet soil, Tables 4.5 and 4.6) and Eq. 4.7. Elapsed time can be days or GDD (Eq. 4.13). K<sub>cmax</sub> uses the midseason K<sub>cf</sub>.",
    inputs: [
      { k: "crop", label: "Crop (Table 4.3)", type: "sel", opts: cropOpts, v: CORN },
      { k: "Kcfp", sym: "K<sub>cf</sub>", label: "Kcf at midseason (Table 4.4)", dim: "none", v: 0.06, min: -1 },
      { k: "Kcfm", sym: "K<sub>cf</sub>", label: "Kcf at harvest (Table 4.4)", dim: "none", v: -0.07, min: -1 },
      { k: "el", sym: "t", label: "Days (or GDD) since planting", dim: "none", v: 46 },
      { k: "tot", sym: "t<sub>m</sub>", label: "Days (or GDD) from planting to harvest", dim: "none", v: 153 },
      { k: "ETo", sym: "ET<sub>o</sub>", label: "Reference ET", dim: "rate", u: "in/d", v: 0.3 },
      { k: "fr", sym: "f<sub>r</sub>", label: "Fraction of available soil water remaining", dim: "frac", u: "decimal", v: 1 },
      { k: "fw", label: "Last wetting method (Table 4.5)", type: "sel", opts: T["4.5"].rows.map((r, i) => [`${r[0]} (${r[1]})`, i]), v: 1 },
      { k: "soil", label: "Soil texture (Table 4.6)", type: "sel", opts: T["4.6"].soils.map((s, i) => [`${s[0]} (td ${s[1]} d)`, i]), v: 2 },
      { k: "t", sym: "t", label: "Days since last rain or irrigation", dim: "time", u: "d", v: 30 }],
    outputs: [
      { k: "Fs", sym: "F<sub>s</sub>", label: "Fraction of growing season", dim: "frac", u: "decimal", dp: 3 },
      { k: "Kco", sym: "K<sub>co</sub>", label: "Basal crop coefficient", dim: "none", dp: 2 },
      { k: "Ks", sym: "K<sub>s</sub>", label: "Stress factor", dim: "none", dp: 2 },
      { k: "Kw", sym: "K<sub>w</sub>", label: "Wet soil factor", dim: "none", dp: 3 },
      { k: "Kc", sym: "K<sub>c</sub>", label: "Crop coefficient", dim: "none", dp: 2 },
      { k: "ET", sym: "ET", label: "Crop ET", dim: "rate", u: "in/d", dp: 3 }],
    f: v => {
      const r = T["4.3"].rows[+v.crop];
      const Fs = Math.min(1, Math.max(0, v.el / v.tot));
      const Kco = kco(Fs, r[1], r[2] + v.Kcfp, r[3] + v.Kcfm, r[4], r[5], r[6]);
      const Ks = ksF(v.fr, r[7]);
      const Fw = T["4.5"].rows[+v.fw][1], td = T["4.6"].soils[+v.soil][1];
      const Kw = Fw * Math.max(0, 1.2 + v.Kcfp - Kco) * ftF(v.t, td);
      const Kc = Kco * Ks + Kw;
      return { Fs, Kco, Ks, Kw, Kc, ET: Kc * v.ETo };
    },
    // Example 4.3 uses rounded fractions (46/153 = 0.30, 138/153 = 0.90), so allow 3%
    examples: [[15, 0.15], [46, 0.70], [76, 1.21], [107, 1.21], [138, 0.47]].map(([d, k]) =>
      ({ ref: "Example 4.3", page: 68, in: { crop: CORN, Kcfp: 0.06, Kcfm: -0.07, el: d, tot: 153 }, out: { Kco: k }, tol: 0.03 })),
    tables: ["4.3", "4.4", "4.5", "4.6"], figs: ["4.13", "4.14"],
  });

  // ---------- table lookups ----------
  C({
    id: "tab-4.1", eq: [], sec: "4.5", page: 58, title: "Saturation vapor pressure and slope by temperature (Table 4.1)",
    tags: ["saturation vapor pressure table", "delta", "slope of vapor pressure", "es table"],
    tables: ["4.1"],
    inputs: [{ k: "T", sym: "T", label: "Air temperature", dim: "temp", u: "°F", v: 75, min: -100 }],
    outputs: [
      { k: "es", sym: "e<sub>s</sub>", label: "Saturation vapor pressure (table, interpolated)", dim: "pressure", u: "kPa", dp: 2 },
      { k: "D", sym: "Δ", label: "Slope (table, interpolated)", dim: "vpslope", u: "kPa/°C", dp: 3 },
      { k: "esF", sym: "e<sub>s</sub>", label: "Saturation vapor pressure (FAO-56 equation)", dim: "pressure", u: "kPa", dp: 3 },
      { k: "DF", sym: "Δ", label: "Slope (FAO-56 equation)", dim: "vpslope", u: "kPa/°C", dp: 4 }],
    f: v => ({ es: esF(v.T, 0), D: deltaF(v.T, 0), esF: esF(v.T, 1), DF: deltaF(v.T, 1) }),
    examples: T["4.1"].rows.map(r => ({ ref: "Table 4.1", page: 58, in: { T: r[0] }, out: { esF: r[2], DF: r[3] }, tol: 0.03 })),
  });

  C({
    id: "tab-4.2", eq: [], sec: "4.5", page: 58, title: "Psychrometric constant by elevation (Table 4.2)",
    tags: ["psychrometric constant", "gamma", "elevation", "atmospheric pressure"],
    tables: ["4.2"],
    inputs: [{ k: "z", sym: "z", label: "Elevation above sea level", dim: "length", u: "ft", v: 3000 }],
    outputs: [
      { k: "g", sym: "γ", label: "Psychrometric constant (table, interpolated)", dim: "vpslope", u: "kPa/°C", dp: 4 },
      { k: "gF", sym: "γ", label: "Psychrometric constant (FAO-56 equation)", dim: "vpslope", u: "kPa/°C", dp: 4 }],
    f: v => ({ g: gammaFt(v.z, 0), gF: gammaFt(v.z, 1) }),
    examples: T["4.2"].rows.map(r => ({ ref: "Table 4.2", page: 58, in: { z: r[0] }, out: { gF: r[1] }, tol: 0.015 })),
  });

  C({
    id: "tab-4.3", eq: [], sec: "4.6", page: 65, title: "Basal crop coefficients by crop (Table 4.3)",
    tags: ["crop coefficient table", "Kc table", "corn Kc", "alfalfa Kc", "soybean Kc", "MAD", "allowable depletion", "frc"],
    tables: ["4.3"],
    inputs: [{ k: "crop", label: "Crop", type: "sel", opts: cropOpts, v: CORN }],
    outputs: [
      { k: "Kci", sym: "K<sub>ci</sub>", label: "Initial basal coefficient", dim: "none", dp: 2 },
      { k: "Kcp", sym: "K<sub>cp</sub>′", label: "Peak basal coefficient", dim: "none", dp: 2 },
      { k: "Kcm", sym: "K<sub>cm</sub>′", label: "Harvest basal coefficient", dim: "none", dp: 2 },
      { k: "F1", sym: "F<sub>S1</sub>", label: "Fraction of season, canopy starts", dim: "frac", u: "decimal", dp: 2 },
      { k: "F2", sym: "F<sub>S2</sub>", label: "Fraction of season, effective cover", dim: "frac", u: "decimal", dp: 2 },
      { k: "F3", sym: "F<sub>S3</sub>", label: "Fraction of season, maturing starts", dim: "frac", u: "decimal", dp: 2 },
      { k: "frc", sym: "f<sub>rc</sub>", label: "Soil water stress threshold", dim: "frac", u: "decimal", dp: 2 }],
    f: v => { const r = T["4.3"].rows[+v.crop]; return { Kci: r[1], Kcp: r[2], Kcm: r[3], F1: r[4], F2: r[5], F3: r[6], frc: r[7] }; },
    examples: [{ ref: "Example 4.3", page: 68, in: { crop: CORN }, out: { Kcp: 1.15, Kcm: 0.15, F1: 0.18, F2: 0.41, F3: 0.71 } }],
  });

  C({
    id: "tab-4.4", eq: [], sec: "4.6", page: 66, title: "Crop coefficient adjustment for wind and humidity (Table 4.4)",
    tags: ["Kcf", "wind adjustment", "humidity adjustment", "crop height", "arid adjustment"],
    tables: ["4.4"],
    note: "Interpolates between wind runs, humidities and crop heights. Below 2 ft uses the 2-ft rows; above 8 ft uses the 6-ft values times the height multiplier. Values outside 50 to 350 mi/d and 20 to 80% are held at the table edge.",
    inputs: [
      { k: "h", sym: "h", label: "Crop height", dim: "length", u: "ft", v: 8 },
      { k: "w", sym: "U<sub>2</sub>", label: "Average wind run", dim: "windrun", u: "mi/d", v: 200 },
      { k: "rh", sym: "RH<sub>min</sub>", label: "Average minimum relative humidity (Eq. 4.10)", dim: "pct", u: "%", v: 44 }],
    outputs: [{ k: "Kcf", sym: "K<sub>cf</sub>", label: "Crop coefficient adjustment factor", dim: "none", dp: 3 }],
    f: v => ({ Kcf: kcf(v.h, v.w, v.rh) }),
    examples: [
      { ref: "Example 4.2 (midseason, 'about 0.06')", page: 67, in: { h: 8, w: 200, rh: 44 }, out: { Kcf: 0.06 }, tol: 0.1 },
      // book reads 'about -0.07'; interpolation at 68% gives -0.062
      { ref: "Example 4.2 (harvest, 'about -0.07')", page: 67, in: { h: 8, w: 150, rh: 68 }, out: { Kcf: -0.07 }, tol: 0.15 },
      { ref: "Table 4.4 (6 ft, 300 mi/d, 40%)", page: 66, in: { h: 6, w: 300, rh: 40 }, out: { Kcf: 0.13 } },
      { ref: "Table 4.4 (12 ft multiplier)", page: 66, in: { h: 12, w: 300, rh: 40 }, out: { Kcf: 0.13 * 1.23 } }],
  });

  C({
    id: "tab-4.5", eq: [], sec: "4.6", page: 70, title: "Fraction of soil surface wetted by irrigation method (Table 4.5)",
    tags: ["fraction wetted", "Fw", "drip wetted area", "LEPA", "furrow wetting"],
    tables: ["4.5"],
    inputs: [{ k: "i", label: "Wetting method", type: "sel", opts: T["4.5"].rows.map((r, i) => [r[0], i]), v: 0 }],
    outputs: [{ k: "Fw", sym: "F<sub>w</sub>", label: "Fraction of surface wetted", dim: "frac", u: "decimal", dp: 2 }],
    f: v => ({ Fw: T["4.5"].rows[+v.i][1] }),
  });

  C({
    id: "tab-4.6", eq: [], sec: "4.6", page: 70, title: "Wet soil evaporation duration and decay (Table 4.6)",
    tags: ["drying time", "wet soil decay", "ft", "td", "how long does soil stay wet"],
    tables: ["4.6"],
    note: "f<sub>t</sub> = 1 − √(t/t<sub>d</sub>) reproduces every table value.",
    inputs: [
      { k: "s", label: "Soil texture", type: "sel", opts: T["4.6"].soils.map((s, i) => [s[0], i]), v: 2 },
      { k: "t", sym: "t", label: "Time since wetting", dim: "time", u: "d", v: 2 }],
    outputs: [
      { k: "td", sym: "t<sub>d</sub>", label: "Duration of wet soil evaporation", dim: "time", u: "d", dp: 0 },
      { k: "ft", sym: "f<sub>t</sub>", label: "Wet soil decay function", dim: "none", dp: 2 }],
    f: v => { const td = T["4.6"].soils[+v.s][1]; return { td, ft: ftF(v.t, td) }; },
    examples: (() => {
      const ex = [];
      T["4.6"].rows.forEach(r => r.slice(1).forEach((val, j) => {
        if (val !== null && val > 0) ex.push({ ref: `Table 4.6 (${T["4.6"].soils[j][0]}, t = ${r[0]})`, page: 70, in: { s: j, t: r[0] }, out: { ft: val }, tol: Math.max(0.03, 0.006 / val) }); // table printed to 0.01
      }));
      return ex;
    })(),
  });

  C({
    id: "tab-4.7", eq: ["4.14", "4.15"], sec: "4.7", page: 73, title: "Landscape coefficient from vegetation type (Table 4.7)",
    tags: ["landscape coefficient", "turf", "trees", "shrubs", "groundcover", "microclimate", "planting density"],
    tables: ["4.7"],
    note: "Density: under 60% canopy cover calls for a lower K<sub>D</sub>; trees with 25% cover or less use 0.5. Microclimate: medians, parking lots and west or south exposures are high (1.0 to 1.4); north sides, courtyards and shade are low (0.5 to 1.0).",
    inputs: [
      { k: "veg", label: "Type of vegetation", type: "sel", opts: T["4.7"].rows.map((r, i) => [r[0], i]), v: 4 },
      { k: "p", label: "Species factor level", type: "sel", opts: [["High", 0], ["Average", 1], ["Low", 2]], v: 1 },
      { k: "d", label: "Density factor level", type: "sel", opts: [["High", 0], ["Average", 1], ["Low", 2]], v: 1 },
      { k: "mc", label: "Microclimate factor level", type: "sel", opts: [["High", 0], ["Average", 1], ["Low", 2]], v: 1 },
      { k: "ETo", sym: "ET<sub>o</sub>", label: "Reference ET", dim: "rate", u: "in/d", v: 0.25 }],
    outputs: [
      { k: "KP", sym: "K<sub>P</sub>", label: "Species factor", dim: "none", dp: 2 },
      { k: "KD", sym: "K<sub>D</sub>", label: "Density factor", dim: "none", dp: 2 },
      { k: "KM", sym: "K<sub>M</sub>", label: "Microclimate factor", dim: "none", dp: 2 },
      { k: "KL", sym: "K<sub>L</sub>", label: "Landscape coefficient", dim: "none", dp: 3 },
      { k: "ET", sym: "ET", label: "Landscape ET", dim: "rate", u: "in/d", dp: 3 }],
    f: v => {
      const r = T["4.7"].rows[+v.veg];
      const KP = r[1 + +v.p], KD = r[4 + +v.d], KM = r[7 + +v.mc], KL = KP * KD * KM;
      return { KP, KD, KM, KL, ET: KL * v.ETo };
    },
    examples: [{ ref: "Table 4.7 (turf, average)", page: 73, in: { veg: 4, p: 1, d: 1, mc: 1, ETo: 0.25 }, out: { KL: 0.7, ET: 0.175 } }],
  });

  C({
    id: "tab-4.8", eq: [], sec: "4.8", page: 75, title: "Example weather station data (Table 4.8)",
    tags: ["weather data", "High Plains Regional Climate Center", "example ETo", "langleys"],
    tables: ["4.8"],
    inputs: [{ k: "i", label: "Date", type: "sel", opts: T["4.8"].rows.map((r, i) => [`July ${r[1]}`, i]), v: 0 }],
    outputs: [
      { k: "Tmax", sym: "T<sub>max</sub>", label: "Maximum temperature", dim: "temp", u: "°F", dp: 1 },
      { k: "Tmin", sym: "T<sub>min</sub>", label: "Minimum temperature", dim: "temp", u: "°F", dp: 1 },
      { k: "Td", sym: "T<sub>dew</sub>", label: "Dew point", dim: "temp", u: "°F", dp: 1 },
      { k: "U", sym: "U", label: "Wind speed", dim: "windrun", u: "mph", dp: 1 },
      { k: "Rs", sym: "R<sub>s</sub>", label: "Solar radiation", dim: "radiation", u: "ly/d", dp: 0 },
      { k: "P", sym: "P", label: "Rain", dim: "length", u: "in", dp: 2 },
      { k: "ETo", sym: "ET<sub>o</sub>", label: "Reference ET", dim: "rate", u: "in/d", dp: 2 },
      { k: "GDD", sym: "GDD", label: "Growing degree units", dim: "gdd", u: "°F·d", dp: 0 }],
    f: v => { const r = T["4.8"].rows[+v.i]; return { Tmax: r[2], Tmin: r[3], Td: r[5], U: r[6], Rs: r[7], P: r[8], ETo: r[9], GDD: r[10] }; },
  });
})(typeof window !== "undefined" ? window : globalThis);
