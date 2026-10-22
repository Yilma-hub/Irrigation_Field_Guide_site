window.CALC_USE2 = Object.assign(window.CALC_USE2 || {}, {
  "salt-applied": {
    more: [
      "Salt concentration comes from a water test, reported as TDS in ppm or mg/L, or from EC with Eq. 7.2 (C = 640 EC). Depth applied is the season total from the meter. Most humid-region wells test under 300 ppm. Western river and ditch water often runs 500 to 1,500 ppm, and some wells in the Southwest run higher.",
      "The result is pounds of salt per acre and tons for the field each season. Salt does not leave with the crop in any amount worth counting, so whatever is not leached builds up in the root zone. A number in the thousands of pounds per acre each year means a leaching plan is part of the irrigation plan. Use the depth from the source, since rain adds water without adding salt.",
      "Follow with the leaching fraction and leaching requirement calculators to see whether that salt is moving out."
    ],
    qa: [
      { q: "My water tests 500 ppm and I put 15 inches on 50 acres of corn. How much salt is that?", a: "0.226 x 500 x 15 = 1,695 lb/ac, or 42 tons on the field, as in Example 7.1." },
      { q: "Our ditch water runs about 800 ppm. We put 20 inches on a 130 acre pivot.", a: "3,616 lb/ac per season, about 235 tons on the field. Without some deep percolation each year, that salt stays in the root zone." },
      { q: "My well on Delmarva tests 150 ppm and I only put on 6 inches a year. Should I worry?", a: "0.226 x 150 x 6 = 203 lb/ac, about 10 tons on 100 acres. Winter rain will leach that out, so salt is not a concern here." }
    ],
    figs: ["7.2"]
  },
  "eq-7.1": {
    more: [
      "EC of the soil solution comes from a saturated paste extract (ECe) from a soil lab, a soil water sampler, or a field EC probe. Field soil water is usually about twice as salty as the saturated extract because there is less water in the soil than in the paste.",
      "The result is how much harder the roots must pull to take up water because of salt. Every 1 dS/m adds about 0.36 bar. It adds to the matric pull from soil drying, so a salty soil behaves like a drier soil. A crop at 4 dS/m in the soil water is under about 1.4 bar of extra stress even with the soil at field capacity.",
      "Add this to the matric potential in Eq. 2.7 (with the minus sign) to get total potential."
    ],
    qa: [
      { q: "The soil water EC is 4 dS/m. How much stress is that on the crop?", a: "0.36 x 4 = 1.44 bar of osmotic potential, about 1.4 bar the roots have to overcome on top of the soil drying." },
      { q: "What about 2 dS/m?", a: "0.72 bar. Halving the salinity halves the extra pull, which is why keeping the root zone leached pays." },
      { q: "We see 8 dS/m in the soil solution in the dry spots.", a: "2.88 bar. That is like a soil well into its allowable depletion even right after irrigation, so expect patchy growth there." }
    ],
    figs: ["6.14"]
  },
  "eq-7.2": {
    more: [
      "EC comes from a handheld meter or a lab report. Make sure it is at 25 C (use the temperature correction if the meter does not do it) and in dS/m. 1 dS/m equals 1 mmho/cm and 1,000 µS/cm.",
      "The factor 640 is an average. Real water ranges from about 550 to 750 mg/L per dS/m depending on which salts are present. Use the lab's TDS if you have it. The result is close enough for classifying water (Table 7.3) and for figuring salt loads.",
      "Use C in the salt-applied calculator, or EC in the yield and leaching work."
    ],
    qa: [
      { q: "My meter says 1.0 dS/m. What's that in ppm?", a: "640 x 1.0 = 640 mg/L, about 640 ppm." },
      { q: "A Delaware well reads 300 microsiemens.", a: "That is 0.3 dS/m, or about 192 mg/L. Fresh water by Table 7.3." },
      { q: "Ditch water reads 2.5 dS/m in late summer.", a: "About 1,600 mg/L, which is saline by Table 7.3. Expect problems on sensitive crops." }
    ],
    figs: []
  },
  "ec-temp": {
    more: [
      "Read the sample temperature with the meter or a thermometer at the same time as the EC. The correction is good between 15 and 35 C (59 to 95 F). Many modern meters correct automatically, so check whether the display says EC25 or ATC.",
      "EC rises about 2% per degree C. A sample read warm in a truck cab in August can read 20% high. The corrected EC is the number to compare with Table 7.3 and crop thresholds, which are all at 25 C.",
      "Use the corrected EC in Eq. 7.2, Table 7.3, Eq. 7.3 and the leaching work."
    ],
    qa: [
      { q: "The meter read 5 dS/m but the sample was at 35 C.", a: "EC at 25 C is 4.0 dS/m, as in the book's example (p. 134)." },
      { q: "We sampled cold well water at 15 C and got 1.2 dS/m.", a: "Corrected to 25 C it is 1.44 dS/m. Cold samples read low. Corrected, this water is moderately saline." },
      { q: "Pond water read 0.8 at 30 C.", a: "0.72 dS/m at 25 C, slightly saline." }
    ],
    figs: []
  },
  "eq-7.3": {
    more: [
      "Root zone salinity (ECe) comes from soil samples sent for saturated paste extract, averaged over the root zone. EM-38 or Veris maps can show where to sample. Threshold and slope come from Table 7.2, or enter your own for another crop.",
      "Below the threshold there is no yield loss. Above it, each dS/m costs the slope in percent. Corn loses 12% per dS/m above 1.7, so 4.7 dS/m costs 36%. Check that the number is ECe. The EC of the irrigation water or a 1:1 soil test reads differently. A 1:1 test reads lower than ECe, and the gap is largest on sandy soils.",
      "Use with Table 7.2 to see what salinity a crop can take, then with the leaching requirement to keep the root zone below that."
    ],
    qa: [
      { q: "A salty spot tests 3,000 mg/L. My clean ground makes 180 bushels. What's the corn yield there?", a: "EC is 4.7 dS/m. Relative yield is 64% and actual yield about 115 bu/ac, as in Example 7.2." },
      { q: "Alfalfa field with ECe 3.5 dS/m. Normal yield is 6 tons.", a: "Alfalfa: threshold 2.0, slope 7.3. Relative yield 89%, about 5.3 tons/ac." },
      { q: "Dry beans on ground at 2 dS/m, normally 2,500 lb/ac.", a: "Bean: threshold 1.0, slope 19. Relative yield 81%, about 2,025 lb/ac. Beans are one of the most sensitive crops." }
    ],
    figs: ["7.7", "7.9", "7.8"]
  },
  "tab-7.2": {
    more: [
      "Pick the crop and the relative yield the grower is willing to accept. The table gives the threshold, slope and rating, and the calculator solves Eq. 7.3 for the ECe that would give that yield.",
      "Use the result as the salinity target for the root zone. Crops that are rated sensitive, like beans, strawberries and most fruit trees, lose yield quickly above 1 to 1.5 dS/m. Tolerant crops like barley, cotton and sugar beet start losing yield at 7 to 8 dS/m. These values are from Maas and Hoffman (1977) and work as general guides. Local varieties and weather can shift them.",
      "Use the threshold in the leaching requirement (Figure 7.11) and in crop choice for salty fields."
    ],
    qa: [
      { q: "How salty can my corn ground get before I lose 10%?", a: "Corn threshold 1.7, slope 12. 90% relative yield at ECe 2.5 dS/m." },
      { q: "And sugar beets?", a: "Threshold 7.0, slope 5.9. 90% yield at 8.7 dS/m. Sugar beet is rated tolerant." },
      { q: "We're thinking strawberries. What's the limit?", a: "Threshold 1.0, slope 33. 90% yield at only 1.3 dS/m. Strawberries are sensitive, so test the water and soil first." }
    ],
    figs: ["7.9", "7.4"]
  },
  "tab-7.3": {
    more: [
      "Enter the EC of the irrigation water at 25 C. The table gives the water class, the TDS range and how often crop problems occur.",
      "Fresh water (under 0.5 dS/m) causes no salt problems. Slightly saline is rarely a problem with some leaching. Moderately saline and above need a leaching plan and a crop that fits. Remember EC alone does not tell you about sodium. Very low EC water can also cause infiltration problems, which Figure 7.10 covers.",
      "Follow up with SAR (Eq. 7.4) and the leaching requirement."
    ],
    qa: [
      { q: "My well tests 0.4 dS/m. Any problems?", a: "Fresh, under 300 ppm (about 256 mg/L by Eq. 7.2). No salt problems expected." },
      { q: "The ditch reads 0.8 dS/m.", a: "Slightly saline, 300 to 600 ppm. Crop problems are rare." },
      { q: "We have 1.5 dS/m in one well and 3.0 in another.", a: "1.5 is moderately saline with occasional problems. 3.0 is saline with common problems. Use the 3.0 well only on tolerant crops or blend it with the better water." }
    ],
    figs: ["7.3"]
  },
  "eq-7.4-7.5": {
    more: [
      "Sodium, calcium and magnesium come from a water lab report, usually in meq/L. If the lab gives mg/L, divide by 23 for sodium, 20 for calcium and 12.2 for magnesium to get meq/L. Enter the water EC too, since the hazard depends on both.",
      "SAR above about 6 to 9 raises concern, but the hazard depends on EC. Low EC water with a moderate SAR is the worst case because it disperses the clay, and the surface seals and crusts. The same SAR with higher EC is often fine. Check the result against Figure 7.10. Gypsum or acid injection are the usual fixes for a bad combination.",
      "Pair with Table 7.3 for salinity and with the leaching requirement to plan management."
    ],
    qa: [
      { q: "Arizona well, 0.4 dS/m, sodium 33, calcium 24, magnesium 8 meq/L. Will it seal my soil?", a: "SAR is 33 / sqrt(12 + 4) = 8.2. With EC 0.4, Figure 7.10 shows a severe drop in infiltration, as in Example 7.3." },
      { q: "Our well has sodium 4, calcium 6, magnesium 2 meq/L and EC 1.2.", a: "SAR is 2.0 with EC 1.2. No reduction in infiltration." },
      { q: "Water with sodium 10, calcium 2, magnesium 1 meq/L. Does EC matter?", a: "SAR is 8.2. At EC 0.3 the hazard is severe, but at EC 2.0 the calculator shows no reduction. The extra salt in the water keeps the clay from dispersing." }
    ],
    figs: ["7.10", "7.5"]
  },
  "eq-7.6": {
    more: [
      "Deep percolation comes from a water balance (Eq. 5.16 and 5.17), drain flow, or a lysimeter. Infiltrated irrigation is the meter depth less runoff and evaporation (Eq. 5.7), and infiltrated rain is rain less runoff. Use season or annual totals.",
      "The leaching fraction is the share of water that went through the root zone. Values of 0.05 to 0.15 are common for well managed sprinklers and drip. Higher values carry more nitrate out. Compare it with the leaching requirement: if Lf is below Lr, salt is building up.",
      "When you do not have deep percolation, use salinity ratios instead (leaching-fraction calculator)."
    ],
    qa: [
      { q: "We drained about 2 inches below the roots out of 16 inches irrigation and 4 inches rain.", a: "dt is 20 in and Lf is 0.10." },
      { q: "Only 1 inch went through out of 20 irrigation and 10 rain.", a: "Lf is 0.033. If the water is moderately saline, that is likely too little to keep salt from building." },
      { q: "We put on 24 inches and got 6 of rain, and the drain measured 4 inches.", a: "Lf is 0.13. Check the leaching requirement for the crop. If it is lower, you could cut back and save water and nitrogen." }
    ],
    figs: []
  },
  "eq-7.7": {
    more: [
      "Enter the irrigation water EC from a test, the infiltrated irrigation depth for the season, and the infiltrated rain. Rain EC is usually taken as zero.",
      "The result is the average salinity of all the water that entered the soil. In humid areas, rain dilutes the irrigation water a lot. In the arid West, rain helps little. Use the same units for both depths.",
      "Use ECa in the leaching fraction and leaching requirement calculators."
    ],
    qa: [
      { q: "Irrigation 300 mm at 0.5 dS/m, rain 250 mm.", a: "ECa is 0.27 dS/m, as in Example 7.4." },
      { q: "Tomatoes with 16 inches of 3 dS/m water and 4 inches rain.", a: "ECa is 2.4 dS/m, as in Example 7.5." },
      { q: "Our pivot uses 18 inches of 1.2 dS/m water and we get 6 inches of rain that soaks in.", a: "ECa is 0.9 dS/m. Rain cuts the effective salinity by a quarter." }
    ],
    figs: ["7.11"]
  },
  "leaching-fraction": {
    more: [
      "Sample the irrigation water and the water draining below the root zone, from tile outlets, suction lysimeters or soil water samplers just below the roots. Enter infiltrated irrigation and rain for the season. Both EC values must be at 25 C.",
      "Lf is the ratio of applied to drainage salinity, and the implied deep percolation is Lf times total water. If the drainage EC is many times the applied EC, very little water is passing through. Check it against the crop's leaching requirement. One sample at one time is a weak basis, so sample several times.",
      "Compare Lf with Lr from Figure 7.11 or Eq. 7.8."
    ],
    qa: [
      { q: "Irrigation 300 mm at 0.5 dS/m, rain 250 mm, drainage 2.5 dS/m. What's my leaching fraction?", a: "ECa is 0.27 dS/m and Lf is 0.11, as in Example 7.4. About 60 mm drained." },
      { q: "We put on 18 inches of 1.2 dS/m water and got 6 inches of rain. The tile runs 6 dS/m.", a: "Enter 457 mm and 152 mm. ECa is 0.90, Lf 0.15 and deep percolation about 91 mm (3.6 in)." },
      { q: "Same field, but the tile tests 3 dS/m.", a: "Lf is 0.30 and drainage about 183 mm (7.2 in). That is more leaching than corn needs, so the grower could cut back." }
    ],
    figs: []
  },
  "eq-7.8": {
    more: [
      "ECa comes from Eq. 7.7. The allowed drainage salinity is set from the crop's salt tolerance, which Figure 7.11 builds in for you. Total infiltrated water is the season's irrigation and rain that soaked in.",
      "Lr is the smallest leaching fraction that keeps yield from dropping. A low allowed drainage EC means more leaching. Multiply by total water to get inches that must pass through. In practice, add the leaching water during the season or apply it in the off season when the soil is moist.",
      "Use the fig-7.11 calculator to read Lr straight from the crop threshold."
    ],
    qa: [
      { q: "Applied water is 2.4 dS/m and the crop can take 12 dS/m drainage. Total water is 20 inches.", a: "Lr is 0.20 and 4 in must pass below the roots." },
      { q: "ECa 0.9, allowed drainage 10, 24 inches total.", a: "Lr is 0.09, about 2.2 in of leaching." },
      { q: "ECa 1.5, allowed drainage 8, 30 inches total.", a: "Lr is 0.19, or 5.6 in of leaching water." }
    ],
    figs: ["7.11"]
  },
  "fig-7.11": {
    more: [
      "Pick the crop for its threshold from Table 7.2, enter irrigation water EC, irrigation depth and rain that soaked in. The calculator gets ECa from Eq. 7.7 and reads Lr from the digitized Figure 7.11.",
      "Lr is the share of water that must drain through to keep ECe at the crop threshold. Tolerant crops need little leaching. Sensitive crops on saline water may need 0.2 to 0.3, and above 0.3 the chart stops. That means the water is too salty for the crop.",
      "Compare with the actual leaching fraction from the leaching-fraction calculator."
    ],
    qa: [
      { q: "Tomatoes, 3 dS/m water, 16 inches irrigation and 4 inches rain. Leaching requirement?", a: "ECa is 2.4 and Lr is 0.17, as in Example 7.5. About 3.4 in must drain." },
      { q: "Corn on 1.2 dS/m water, 18 inches irrigation and 6 inches rain.", a: "ECa is 0.9 and Lr about 0.10, so 2.4 in must drain over the season." },
      { q: "Barley on the tomato water instead?", a: "Barley's threshold is 8. Lr is about 0.05, roughly 1 in. A tolerant crop fits salty water much better." }
    ],
    figs: ["7.11"]
  },
  "eq-7.9-7.10": {
    more: [
      "Sample the soil in 1 ft layers for ECe, average over the depth to reclaim, and pick the target ECe (usually the crop threshold). Choose the method and soil: K is 0.45 for peat, 0.3 for clay loam and 0.1 for sandy loam with continuous ponding, and 0.1 for any soil with intermittent ponding or sprinkling.",
      "The result is the depth of water that must pass through the soil. Intermittent ponding or sprinkling needs much less water than continuous ponding on finer soils, but it takes longer. The soil must drain. Without tile or a deep water table, reclaiming will not work. Leach in the off season if possible.",
      "After reclaiming, keep the leaching requirement from Figure 7.11 each season."
    ],
    qa: [
      { q: "Clay loam, ECe 10, want 2, top 3 feet. Ponding versus sprinkling?", a: "Ponding: 0.3 x 3 x 10 / 2 = 4.5 ft. Sprinkling: 1.5 ft, as in Example 7.6." },
      { q: "Sandy loam, ECe 8 down to 2, top 2 feet, ponding.", a: "K 0.1 gives 0.8 ft, about 10 in of water." },
      { q: "A peat soil at 6 dS/m, target 3, top foot.", a: "K 0.45 gives 0.9 ft, about 11 in." }
    ],
    figs: ["7.12"]
  }
});
