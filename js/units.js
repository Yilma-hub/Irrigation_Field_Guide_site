/* Units: every dimension has a base unit; each unit gives its size in that base.
   Temperature is handled with offsets. Works in the browser and in node. */
(function (G) {
  const U = {};
  function dim(name, label, units) { U[name] = { label, units }; }
  const IN = 0.0254, FT = 0.3048, GAL = 0.003785411784, AC = 4046.8564224, PSI = 6894.757293168;
  dim("length", "Length / depth", [
    ["in", IN], ["ft", FT], ["yd", 0.9144], ["mi", 1609.344], ["mm", 0.001], ["cm", 0.01], ["m", 1], ["km", 1000]]);
  dim("area", "Area", [
    ["ac", AC], ["ft²", FT * FT], ["in²", IN * IN], ["mi²", 2589988.110336], ["ha", 1e4], ["m²", 1], ["cm²", 1e-4], ["km²", 1e6]]);
  dim("volume", "Volume", [
    ["gal", GAL], ["ft³", FT ** 3], ["in³", IN ** 3], ["ac-in", AC * IN], ["ac-ft", AC * FT], ["Mgal", GAL * 1e6], ["bu", 0.03523907016688],
    ["L", 0.001], ["mL", 1e-6], ["cm³", 1e-6], ["m³", 1], ["ha-mm", 10], ["ha-cm", 100], ["ML", 1000]]);
  dim("flow", "Flow rate", [
    ["gpm", GAL / 60], ["gph", GAL / 3600], ["cfs", FT ** 3], ["ac-in/hr", AC * IN / 3600], ["ac-in/d", AC * IN / 86400],
    ["ac-ft/d", AC * FT / 86400], ["MGD", GAL * 1e6 / 86400], ["L/s", 0.001], ["L/min", 0.001 / 60], ["L/hr", 0.001 / 3600],
    ["m³/hr", 1 / 3600], ["m³/d", 1 / 86400], ["m³/s", 1]]);
  dim("time", "Time", [["hr", 3600], ["min", 60], ["s", 1], ["d", 86400], ["wk", 604800]]);
  dim("velocity", "Velocity / speed", [
    ["ft/s", FT], ["ft/min", FT / 60], ["ft/hr", FT / 3600], ["mph", 0.44704], ["m/s", 1], ["m/min", 1 / 60], ["m/hr", 1 / 3600], ["km/hr", 1 / 3.6]]);
  dim("rate", "Depth rate (application, ET, infiltration)", [
    ["in/hr", IN / 3600], ["in/d", IN / 86400], ["in/wk", IN / 604800], ["ft/d", FT / 86400], ["mm/hr", 0.001 / 3600],
    ["mm/d", 0.001 / 86400], ["mm/wk", 0.001 / 604800], ["cm/hr", 0.01 / 3600], ["cm/d", 0.01 / 86400], ["m/s", 1]]);
  dim("capacity", "System capacity (flow per area)", [
    ["gpm/ac", GAL / 60 / AC], ["in/d", IN / 86400], ["in/hr", IN / 3600], ["L/s/ha", 0.001 / 1e4], ["mm/d", 0.001 / 86400], ["m³/hr/ha", 1 / 3600 / 1e4]]);
  dim("pressure", "Pressure / head", [
    ["psi", PSI], ["ft H₂O", 2989.06692], ["in H₂O", 249.08891], ["in Hg", 3386.389], ["kPa", 1000], ["cb", 1000], ["bar", 1e5],
    ["atm", 101325], ["m H₂O", 9806.65], ["cm H₂O", 98.0665], ["mbar", 100], ["MPa", 1e6], ["Pa", 1]]);
  dim("ploss", "Pressure loss per length", [
    ["psi/100 ft", PSI / (100 * FT)], ["psi/1000 ft", PSI / (1000 * FT)], ["psi/ft", PSI / FT], ["kPa/100 m", 10], ["kPa/m", 1000], ["bar/100 m", 1000], ["Pa/m", 1]]);
  dim("hgrad", "Head loss per length", [["ft/100 ft", 0.01], ["m/100 m", 0.01], ["ft/ft", 1], ["m/m", 1], ["%", 0.01]]);
  dim("mass", "Mass", [["lb", 0.45359237], ["oz", 0.028349523125], ["ton (short)", 907.18474], ["g", 0.001], ["kg", 1], ["mg", 1e-6], ["t (metric)", 1000]]);
  dim("density", "Density", [["g/cm³", 1000], ["lb/ft³", 16.01846337], ["Mg/m³", 1000], ["kg/m³", 1]]);
  dim("sweight", "Specific weight", [["lb/ft³", 157.0874638], ["kN/m³", 1000], ["N/m³", 1]]);
  dim("power", "Power", [["hp", 745.69987158], ["kW", 1000], ["W", 1], ["ft-lb/min", 0.0225969658]]);
  dim("energy", "Energy", [["kWh", 3.6e6], ["hp-hr", 2684519.5377], ["BTU", 1055.05585], ["therm", 105505585], ["MJ", 1e6], ["J", 1]]);
  dim("ec", "Electrical conductivity", [["dS/m", 1], ["mmho/cm", 1], ["mS/cm", 1], ["µS/cm", 0.001], ["µmho/cm", 0.001], ["mS/m", 0.01]]);
  dim("conc", "Concentration", [["mg/L", 1], ["ppm", 1], ["g/L", 1000], ["g/m³", 1], ["ppt", 1000], ["%", 10000]]);
  dim("ionconc", "Ion concentration", [["mmolc/L", 1], ["meq/L", 1], ["molc/m³", 1]]);
  dim("frac", "Fraction", [["decimal", 1], ["%", 0.01]]);
  dim("pct", "Percent", [["%", 1], ["decimal", 100]]);
  dim("massarea", "Mass per area", [["lb/ac", 0.45359237 / AC], ["ton/ac", 907.18474 / AC], ["kg/ha", 1e-4], ["t/ha", 0.1], ["g/m²", 0.001], ["kg/m²", 1]]);
  dim("volarea", "Volume per area", [["gal/ac", GAL / AC], ["L/ha", 0.001 / 1e4], ["qt/ac", GAL / 4 / AC], ["fl oz/ac", GAL / 128 / AC], ["mL/m²", 1e-6]]);
  dim("arearate", "Area per time", [["ac/hr", AC / 3600], ["ac/d", AC / 86400], ["ha/hr", 1e4 / 3600], ["ha/d", 1e4 / 86400], ["m²/s", 1]]);
  dim("radiation", "Radiation (daily)", [["MJ/m²/d", 1], ["ly/d", 0.04184], ["cal/cm²/d", 0.04184], ["W/m² (24-h mean)", 0.0864], ["kWh/m²/d", 3.6]]);
  dim("windrun", "Wind (run or speed)", [["mi/d", 1609.344 / 86400], ["km/d", 1000 / 86400], ["mph", 0.44704], ["m/s", 1], ["km/hr", 1 / 3.6]]);
  dim("spcap", "Specific capacity (well)", [["gpm/ft", GAL / 60 / FT], ["L/s/m", 0.001], ["m³/hr/m", 1 / 3600]]);
  dim("awc", "Water per depth of soil", [["in/in", 1], ["in/ft", 1 / 12], ["cm/cm", 1], ["mm/m", 0.001], ["mm/cm", 0.1], ["m/m", 1], ["%vol", 0.01]]);
  dim("angle", "Angle", [["degrees", Math.PI / 180], ["radians", 1]]);
  dim("rpm", "Rotational speed", [["rpm", 1]]);
  dim("none", "Dimensionless", [["–", 1]]);
  dim("count", "Count", [["#", 1]]);
  dim("ploss1000", "Pressure loss per 1000 ft", [["psi/1000 ft", PSI / (1000 * FT)], ["psi/100 ft", PSI / (100 * FT)], ["kPa/100 m", 10], ["kPa/m", 1000]]);
  dim("energyvol", "Energy per volume of water", [["unit/ac-in", 1]]);
  dim("costvol", "Cost per volume", [["$/ac-in", 1 / (AC * IN)], ["$/ac-ft", 1 / (AC * FT)], ["$/1000 gal", 1 / (GAL * 1000)], ["$/m³", 1], ["$/ML", 0.001]]);
  dim("temp", "Temperature", [["°F", "F"], ["°C", "C"], ["K", "K"]]);
  dim("tempdiff", "Temperature difference", [["°F", 5 / 9], ["°C", 1], ["K", 1]]);
  dim("gdd", "Growing degree days", [["°F·d", 5 / 9], ["°C·d", 1]]);
  dim("kgper", "Ion mass ratio", [["–", 1]]);

  function factor(dimName, unit) {
    const d = U[dimName];
    if (!d) throw new Error("no dim " + dimName);
    const u = d.units.find(x => x[0] === unit);
    if (!u) throw new Error("no unit " + unit + " in " + dimName);
    return u[1];
  }
  function toBase(dimName, v, unit) {
    if (dimName === "temp") {
      if (unit === "°F") return (v - 32) * 5 / 9;
      if (unit === "K") return v - 273.15;
      return v;
    }
    return v * factor(dimName, unit);
  }
  function fromBase(dimName, v, unit) {
    if (dimName === "temp") {
      if (unit === "°F") return v * 9 / 5 + 32;
      if (unit === "K") return v + 273.15;
      return v;
    }
    return v / factor(dimName, unit);
  }
  function convert(dimName, v, from, to) { return from === to ? v : fromBase(dimName, toBase(dimName, v, from), to); }
  function unitsOf(dimName) { return U[dimName].units.map(u => u[0]); }

  // the conversion list printed in the book front matter, used by the unit converter page
  // calculator files may add a dimension they need: UNITS.addDim("name", "Label", [["unit", sizeInBase], ...])
  function addDim(name, label, units) { if (!U[name]) dim(name, label, units); }
  G.UNITS = { dims: U, convert, toBase, fromBase, unitsOf, addDim };
})(typeof window !== "undefined" ? window : globalThis);
