/* Common Unit Conversions for Irrigation, book front matter pages xxi to xxii, copied as printed.
   from/to units use the unit strings of site/js/units.js where that unit exists, so UNITS.convert(dim, ...) can check them.
   `dim` is the units.js dimension (null when units.js has no matching unit). Lines with two results carry the second in `also`. */
(function (G) {
  const B = (group, dim, fv, fu, tv, tu, text, extra) => Object.assign({ group, dim, from: { value: fv, unit: fu }, to: { value: tv, unit: tu }, text }, extra || {});
  const L = "Length Units", A = "Area Units", V = "Volume Units", F = "Flow Units", W = "Weight and Mass Units", P = "Pressure Units";
  const Y = "Crop Yield Units", TC = "Temperature Conversions", S = "U.S. Public Land Survey System";
  G.BOOK_CONVERSIONS = [
    B(L, "length", 1, "km", 0.6214, "mi", "1 km (kilometer) = 0.6214 mi (miles)"),
    B(L, "length", 1, "mi", 1.609, "km", "1 mi = 1.609 km"),
    B(L, "length", 1, "km", 1000, "m", "1 km = 1,000 m (meters)"),
    B(L, "length", 1, "mi", 5280, "ft", "1 mi = 5,280 ft (feet)"),
    B(L, "length", 1, "m", 3.281, "ft", "1 m = 3.281 ft"),
    B(L, "length", 1, "ft", 0.3048, "m", "1 ft = 0.3048 m"),
    B(L, "length", 1, "m", 100, "cm", "1 m = 100 cm (centimeters)"),
    B(L, "length", 1, "ft", 12, "in", "1 ft = 12 in (inches)"),
    B(L, "length", 1, "in", 2.54, "cm", "1 in = 2.54 cm"),

    B(A, "area", 1, "ha", 10000, "m²", "1 ha (hectare) = 10,000 m²"),
    B(A, "area", 1, "ha", 2.471, "ac", "1 ha = 2.471 ac (acres)"),
    B(A, "area", 1, "ac", 0.4047, "ha", "1 ac = 0.4047 ha"),
    B(A, "area", 1, "ac", 43560, "ft²", "1 ac = 43,560 ft²"),

    B(V, "volume", 1, "L", 0.2642, "gal", "1 L (liter) = 0.2642 gal (gallons)"),
    B(V, "volume", 1, "gal", 3.785, "L", "1 gal = 3.785 L"),
    B(V, "volume", 1, "m³", 1000, "L", "1 m³ = 1,000 L"),
    B(V, "volume", 1, "m³", 264.2, "gal", "1 m³ = 264.2 gal"),
    B(V, "volume", 1, "ft³", 7.481, "gal", "1 ft³ = 7.481 gal"),
    B(V, "volume", 1, "m³", 35.31, "ft³", "1 m³ = 35.31 ft³"),
    B(V, "volume", 1, "ft³", 0.02832, "m³", "1 ft³ = 0.02832 m³"),
    B(V, "volume", 1, "ac-ft", 1233, "m³", "1 ac-ft (covers 1 acre with 1 foot of water) = 1,233 m³"),
    B(V, "volume", 1, "ac-ft", 325851, "gal", "1 ac-ft = 325,851 gal"),
    B(V, "volume", 1, "ac-in", 27154, "gal", "1 ac-in (acre-inch) = 27,154 gal"),
    B(V, "volume", 1, "ha-cm", 100, "m³", "1 ha-cm (hectare-centimeter) = 100 m³"),
    B(V, "volume", 1, "ac-in", 1.028, "ha-cm", "1 ac-in = 1.028 ha-cm (1 for practical purposes)", { practical: 1 }),
    B(V, null, 1, "bu", 35.24, "L", "1 bu (bushel) = 35.24 L"),
    B(V, null, 1, "bu", 9.309, "gal", "1 bu = 9.309 gal"),

    B(F, "flow", 1, "L/s", 15.85, "gpm", "1 L/s (liter/second) = 15.85 gpm (gallons/minute)"),
    B(F, "flow", 1, "gpm", 0.06309, "L/s", "1 gpm = 0.06309 L/s"),
    B(F, "flow", 1, "m³/s", 1000, "L/s", "1 cms (m³/s) = 1,000 L/s"),
    B(F, "flow", 1, "m³/s", 35.31, "cfs", "1 cms = 35.31 cfs (ft³/s)"),
    B(F, "flow", 1, "cfs", 448.8, "gpm", "1 cfs = 448.8 gpm (450 for practical purposes)", { practical: 450 }),
    B(F, "flow", 1, "cfs", 0.02832, "m³/s", "1 cfs = 0.02832 cms"),
    B(F, "flow", 1, "ac-in/hr", 1.008, "cfs", "1 ac-in/hr = 1.008 cfs (1 for practical purposes)", { practical: 1 }),
    B(F, "flow", 1, "ac-in/hr", 452.6, "gpm", "1 ac-in/hr = 452.6 gpm (450 for practical purposes)", { practical: 450 }),

    B(W, "mass", 1, "t (metric)", 1000, "kg", "1 t (metric ton) = 1,000 kg (kilograms)"),
    B(W, "mass", 1, "ton (short)", 2000, "lb", "1 T (U.S. ton) = 2,000 lb (pounds)"),
    B(W, "mass", 1, "t (metric)", 1.102, "ton (short)", "1 t = 1.102 T"),
    B(W, "mass", 1, "ton (short)", 0.9072, "t (metric)", "1T = 0.9072 t"),
    B(W, "mass", 1, "kg", 2.205, "lb", "1 kg = 2.205 lb"),
    B(W, "mass", 1, "lb", 0.4536, "kg", "1 lb = 0.4536 kg"),

    B(P, "pressure", 1, "atm", 101.3, "kPa", "1 atm (atmosphere) = 101.3 kPa (kilopascal)"),
    B(P, "pressure", 1, "bar", 100, "kPa", "1 bar = 100 kPa"),
    B(P, "pressure", 1, "bar", 0.9869, "atm", "1 bar = 0.9869 atm (1 for practical purposes)", { practical: 1 }),
    B(P, "pressure", 1, "kPa", 0.1450, "psi", "1 kPa = 0.1450 psi (pounds per square inch)"),
    B(P, "pressure", 1, "psi", 6.895, "kPa", "1 psi = 6.895 kPa"),
    B(P, "pressure", 1, "m H₂O", 9.804, "kPa", "1 m (meter of water head) = 9.804 kPa"),
    B(P, "pressure", 1, "ft H₂O", 0.4335, "psi", "1 ft (foot of water head) = 0.4335 psi"),
    B(P, "pressure", 1, "kPa", 0.3346, "ft H₂O", "1 kPa = 0.3346 ft = 0.1020 m (0.1 for practical purposes)", { also: [{ value: 0.1020, unit: "m H₂O" }], practical: 0.1 }),
    B(P, "pressure", 1, "psi", 2.307, "ft H₂O", "1 psi = 2.307 ft = 0.7032 m (0.7 for practical purposes)", { also: [{ value: 0.7032, unit: "m H₂O" }], practical: 0.7 }),

    B(Y + ": Rice, cotton, alfalfa, and similar crops", "massarea", 1, "lb/ac", 1.121, "kg/ha", "1 lb/ac (lb dry weight/ac) = 1.121 kg/ha (kg dry mass/ha)"),
    B(Y + ": Rice, cotton, alfalfa, and similar crops", "massarea", 1, "kg/ha", 0.8922, "lb/ac", "1 kg/ha = 0.8922 lb/ac"),
    B(Y + ": Rice, cotton, alfalfa, and similar crops", "massarea", 1, "ton/ac", 2.242, "t/ha", "1 T/ac (T dry weight/ac) = 2.242 t/ha (t dry mass/ha)"),
    B(Y + ": Rice, cotton, alfalfa, and similar crops", "massarea", 1, "t/ha", 0.4461, "ton/ac", "1 t/ha = 0.4461 T/ac"),
    B(Y + ": Tree fruit, grapes, vegetables, and similar crops", "massarea", 1, "lb/ac", 1.121, "kg/ha", "1 lb/ac (lb wet weight/ac) = 1.121 kg/ha (kg wet mass/ha)"),
    B(Y + ": Tree fruit, grapes, vegetables, and similar crops", "massarea", 1, "ton/ac", 2.242, "t/ha", "1 T/ac (T wet weight/ac) = 2.242 t/ha (t wet mass/ha)"),
    B(Y + ": Maize/corn", null, 1, "bu/ac", 0.0530, "t/ha", "1 bu/ac (bushel/ac) = 0.0530 t/ha (t dry mass/ha)", { footnote: "a" }),
    B(Y + ": Maize/corn", null, 1, "t/ha", 18.9, "bu/ac", "1 t/ha = 18.9 bu/ac", { footnote: "a" }),
    B(Y + ": Soybean", null, 1, "bu/ac", 0.0585, "t/ha", "1 bu/ac = 0.0585 t/ha (t dry mass/ha)", { footnote: "a" }),
    B(Y + ": Soybean", null, 1, "t/ha", 17.1, "bu/ac", "1 t/ha = 17.1 bu/ac", { footnote: "a" }),
  ];
  // footnote [a] as printed
  G.BOOK_CONVERSIONS_NOTES = {
    a: "The unit of bu/ac is volume per area. The volume (bu) is calculated using the wet weight of the grain, a wet bulk density of 56 lb/bu (maize) or 60 lb/bu (soybean), and an assumed grain moisture content (wet basis) of 15.5% (maize) or 13% (soybean).",
  };
  // Temperature Conversions table (two printed column pairs, °C to °F and °F to °C, rounded to whole degrees)
  [[0, 32], [5, 41], [10, 50], [15, 59], [20, 68], [25, 77], [30, 86], [35, 95], [40, 104]].forEach(([c, f]) =>
    G.BOOK_CONVERSIONS.push(B(TC, "temp", c, "°C", f, "°F", c + " °C = " + f + " °F")));
  [[30, -1], [40, 4], [50, 10], [60, 16], [70, 21], [80, 27], [90, 32], [100, 38], [110, 43]].forEach(([f, c]) =>
    G.BOOK_CONVERSIONS.push(B(TC, "temp", f, "°F", c, "°C", f + " °F = " + (c < 0 ? "−" + -c : c) + " °C", { rounded: 1 })));
  // U.S. Public Land Survey System diagram
  G.BOOK_CONVERSIONS.push(
    B(S, "area", 1, "mi²", 640, "ac", "1 Section of Land: 1 mile square, 640 ac, 259 ha", { also: [{ value: 259, unit: "ha" }] }),
    B(S, "area", 160, "ac", 65, "ha", "1/4 Section: 160 ac, 65 ha", { rounded: 1 }),
    B(S, "area", 130, "ac", 53, "ha", "¼-Mile Center Pivot with End Gun: 130 ac irrigated, 53 ha irrigated", { rounded: 1 }),
    B(S, "area", 150, "ac", 61, "ha", "¼-Mile Center Pivot with Swing Boom Corner: 150 ac irrigated, 61 ha irrigated", { rounded: 1 }));
})(typeof window !== "undefined" ? window : globalThis);
