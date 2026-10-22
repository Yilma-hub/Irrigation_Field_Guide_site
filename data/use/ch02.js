window.CALC_USE = Object.assign(window.CALC_USE || {}, {
  "eq-2.1": {
    use: "Bulk density comes from a known-volume core: oven-dry the soil and divide its mass by the core volume. On a field visit it tells you whether a wheel track or plow pan is compacted enough to slow roots and infiltration. You also need it to turn a gravimetric sample into volumetric water content, which is what every depth calculation runs on.",
    ask: "We think the headlands are packed down from the grain carts. How do I know if it's bad enough to rip?",
    from: [],
    to: [["eq-2.2", "ρb for porosity"], ["eq-2.5", "ρb to convert θm to θv"]]
  },
  "eq-2.2": {
    use: "Porosity from bulk density tells you how much of the soil volume is pore space for air and water. A loam at 1.3 g/cm³ has about 51% pore space, the same loam compacted to 1.6 g/cm³ has about 40%. Use it to explain to a grower why a compacted zone ponds water and stays wet after irrigation.",
    ask: "Why does water sit on top in this one strip of the field when the rest soaks in fine?",
    from: [["eq-2.1", "ρb from a core sample"]],
    to: []
  },
  "eq-2.3": {
    use: "The gravimetric method is the reference for soil water: weigh a sample, dry it 24 h at 105 °C, weigh again. Use it to check or calibrate a capacitance probe or a neutron gauge at the start of the season, or to settle an argument about whether a field is really at field capacity after a big rain.",
    ask: "My moisture probe says 32% but the soil feels dry. How do I check if the probe is right?",
    from: [],
    to: [["eq-2.5", "θm to volumetric water content"]]
  },
  "eq-2.4": {
    use: "Volumetric water content is water volume over soil volume, and it is what most soil moisture sensors report. Use it directly when you have a ring sample of known volume, or to read sensor output as a fraction before turning it into inches of water.",
    ask: "The sensor reads 0.25. What does that number actually mean?",
    from: [],
    to: [["eq-2.6", "θv to depth of water"], ["eq-2.9-2.11", "θv for fraction depleted"], ["eq-2.13", "θv for soil water deficit"]]
  },
  "eq-2.5": {
    use: "Converts a gravimetric sample to volumetric water content using bulk density. This is the usual path from a soil probe sample taken at a field visit to a number you can compare with field capacity and wilting point. A 15% mass water content in a soil at 1.4 g/cm³ is 21% by volume.",
    ask: "I pulled samples from 1, 2 and 3 feet and got the weights. How much water is in there?",
    from: [["eq-2.3", "θm from oven drying"], ["eq-2.1", "ρb from a core"]],
    to: [["eq-2.6", "θv to inches of water per layer"], ["eq-2.9-2.11", "θv for fraction depleted"], ["eq-2.13", "θv for SWD"], ["eq-4.10-p68", "θv for the water stress factor"]]
  },
  "eq-2.6": {
    use: "Turns a volumetric water content into inches of water held in a layer. A 12 in layer at 0.25 holds 3.0 in. Use it to add up water layer by layer down a probe hole and tell a grower how much water is actually stored in the root zone.",
    ask: "How many inches of water do I have in the top three feet right now?",
    from: [["eq-2.5", "θv from a soil sample"], ["eq-2.4", "θv from a sensor or ring sample"]],
    to: [["eq-4.1", "stored water at start and end of a period"], ["eq-6.13", "available water by layer"]]
  },
  "eq-2.7": {
    use: "Total potential adds gravity, matric and osmotic parts. Field tensiometers and granular matrix sensors read only the matric part, so in a saline field the plant feels more stress than the sensor shows. Use it when explaining why a salty field shows stress at a tension that looks fine on paper.",
    ask: "My tensiometer reads 40 cb, which should be fine, so why is the crop wilting on the saline end?",
    from: [["eq-7.1", "osmotic potential from EC"]],
    to: []
  },
  "eq-2.8": {
    use: "Available water capacity is field capacity minus wilting point, the water a crop can pull per unit depth of soil. A silt loam holds roughly 2 in/ft, a loamy sand about 1 in/ft. It is the first number you need when a grower asks how long a field can go between irrigations.",
    ask: "How much water does my sandy loam really hold for the crop?",
    from: [["tab-2.3", "θfc and θwp by texture"], ["eq-2.5", "θv measured at field capacity and wilting point"]],
    to: [["eq-2.14", "AWC times root depth gives TAW"], ["eq-2.12", "AWC for soil water depletion"], ["eq-6.2-6.5", "AWC for TAW and allowable depletion"], ["eq-6.3", "AWC by layer"]]
  },
  "eq-2.9-2.11": {
    use: "Fraction depleted and fraction remaining put a soil water reading on the 0 to 1 scale that management allowed depletion uses. If the fraction depleted is 0.45 and the MAD for corn is 0.5, the field is close to needing water. This is how you turn a probe reading into a go or wait call.",
    ask: "The probe says the soil is at 0.22. Is that time to water or not?",
    from: [["tab-2.3", "θfc and θwp by texture"], ["eq-2.5", "current θv from a sample"]],
    to: [["eq-2.12", "fd to depletion depth"], ["eq-6.14-6.15", "fd for the soil water deficit"], ["eq-4.10-p68", "fr for the stress factor"], ["eq-6.1", "compare with allowable fraction"]]
  },
  "eq-2.12": {
    use: "Soil water depletion from fraction depleted gives the net inches needed to refill a layer to field capacity. Half depleted in 3 ft of silt loam at 2 in/ft is a 3 in deficit. This is the net depth you hand to the run time and pivot timer calculations.",
    ask: "How much do I need to put on to fill it back up?",
    from: [["eq-2.9-2.11", "fraction depleted"], ["eq-2.8", "AWC"]],
    to: [["eq-5.13", "net depth for run time"], ["run-time", "net depth to hours, after efficiency"], ["eq-13.7", "depth for the pivot timer setting"], ["eq-6.9", "net depth for interval"]]
  },
  "eq-2.13": {
    use: "The same deficit computed straight from field capacity and the current water content, layer by layer. Use it when you have sensor readings at several depths and want the refill depth without going through fraction depleted.",
    ask: "I have sensors at 6, 18 and 30 inches. How far below full am I?",
    from: [["tab-2.3", "θfc by texture"], ["eq-2.5", "current θv"], ["swd-fcobs", "observed field capacity from the sensor"]],
    to: [["eq-6.18-6.25", "starting deficit for the checkbook"], ["eq-5.6-5.7", "deficit before an irrigation"], ["wetting-depth", "deficit each layer must fill"]]
  },
  "eq-2.14": {
    use: "Total available water is AWC times root depth. Corn rooted to 3 ft in a silt loam at 2 in/ft has about 6 in of TAW. Multiply by allowable depletion and you get the biggest net irrigation the field can take, which drives interval and system capacity questions.",
    ask: "How much water can this field hold before the corn runs out?",
    from: [["eq-2.8", "AWC"], ["tab-2.3", "AWC by texture"], ["tab-6.2", "maximum rooting depth"], ["eq-6.6-6.7", "root depth during the season"]],
    to: [["eq-6.2-6.5", "TAW for AD and MB"], ["eq-6.8", "TAW for the maximum interval"], ["eq-12.4", "allowable depletion for sprinkler design"], ["eq-14.8", "root zone storage for drip"]]
  },
  "wetting-depth": {
    use: "Shows how deep a given irrigation will go in a layered soil by filling each layer to field capacity from the top down, and how much passes below the root zone. Use it before a heavy application on a sandy subsoil to see if water is going past the roots and taking nitrate with it.",
    ask: "If I put on 2 inches, how deep will it go, and am I losing any below the roots?",
    from: [["eq-2.13", "deficit by layer"], ["tab-2.3", "θfc by texture"], ["eq-5.6-5.7", "depth infiltrated"], ["eq-6.6-6.7", "current root depth"]],
    to: [["eq-5.15", "deep percolation from over-application"], ["eq-5.18", "water leaving the root zone for nitrate loss"]]
  },
  "tab-2.3": {
    use: "Typical field capacity, wilting point and AWC by texture. When there is no lab data, which is most farm calls, you start from the soil survey texture and this table. It gives a reasonable first estimate of TAW for setting up a checkbook or picking a sensor threshold.",
    ask: "I don't have lab numbers. What should I assume for a loamy sand?",
    from: [],
    to: [["eq-2.8", "θfc and θwp"], ["eq-2.9-2.11", "θfc and θwp for fraction depleted"], ["eq-2.14", "AWC for TAW"], ["eq-6.3", "AWC by layer"], ["eq-4.10-p68", "θfc and θwp for Ks"]]
  }
});
