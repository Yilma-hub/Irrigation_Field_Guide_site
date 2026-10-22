window.CALC_USE2 = Object.assign(window.CALC_USE2 || {}, {
  "eq-2.1": {
    more: [
      "You need an undisturbed core of known volume. A 5 cm by 5 cm ring holds 98.2 cm³ and a 3 in by 3 in core holds about 347 cm³. Drive the ring in level with a driver and a block, trim both ends flush with a knife, bag it, then oven dry at 105 °C (220 °F) for 24 hours and weigh the dry soil only. Typical values run 1.2 to 1.4 g/cm³ for silt loams, 1.4 to 1.5 for sandy loams, and 1.5 to 1.9 for sands (Table 2.2 lists Platte County, Nebraska soils from 1.20 to 1.90). The NRCS Web Soil Survey gives moist bulk density by layer for every mapped soil if you want a comparison number before you go out.",
      "Compare the field number to what the texture should be. As a working guide from NRCS soil quality sheets, root growth slows near 1.6 g/cm³ in loams and silt loams and is restricted near 1.75, sands tolerate up to about 1.8, and clays start to restrict near 1.5. A wheel track that runs 0.2 to 0.3 g/cm³ higher than the field interior is a real compaction layer worth ripping or managing traffic around. The usual mistakes are weighing the soil wet, compressing the core while driving it in, losing soil out the bottom of the ring, and counting stones in the mass. A single core is one point, so take three or more per zone and average them.",
      "Bulk density feeds porosity (Eq. 2.2) and is the conversion factor that turns a gravimetric sample into volumetric water content (Eq. 2.5), so a bad bulk density number carries straight into every inch of water you calculate later."
    ],
    qa: [
      { q: "We think the headlands are packed down from the grain carts. Is it bad enough to rip?", a: "Pull a 5 cm ring (98.2 cm³) in the headland and one in the field interior. If the headland core dries to 162 g, enter 162 g and 98.2 cm³ and you get 1.65 g/cm³. The interior core at 128 g gives 1.30 g/cm³. On a sandy loam a 0.35 g/cm³ jump puts the headland near the root-restricting range, so ripping when the soil is dry enough to shatter is justified." },
      { q: "I used a 3 inch probe with a 3 inch long sleeve. The dry soil weighed 541 grams. What is my bulk density?", a: "A 3 in by 3 in core is about 347.5 cm³. Enter 541 g and 347.5 cm³ and the calculator returns 1.56 g/cm³. For a silt loam that is on the high side, so check whether the sample came from a plow pan depth, and repeat at a couple more spots before calling it compaction." },
      { q: "NRCS wants a bulk density for the soil moisture monitoring plan on my cost-share contract. What do I give them?", a: "Take three cores per monitoring site at each sensor depth and average them. A ring of 98.2 cm³ that dries to 147 g gives 1.50 g/cm³. Report that number by depth, and use the same value when you convert your gravimetric checks to volumetric water content with Eq. 2.5." }
    ],
    figs: ["2.1"]
  },
  "eq-2.2": {
    more: [
      "The inputs are bulk density from a core (Eq. 2.1) and particle density. For mineral soils 2.65 g/cm³ is the standard value and you rarely need to measure it. Topsoils high in organic matter run a little lower, so porosity for those comes out slightly high if you keep 2.65. Typical porosity is about 35 to 45% for sands, 45 to 55% for loams and silt loams, and 50 to 60% for clays.",
      "Porosity is the space for both water and air. Subtract the field capacity water content to see the air left after drainage. A loam at 1.30 g/cm³ has 51% pore space, so at a field capacity of 0.30 there is still 0.21 of the volume for air. The same soil packed to 1.60 g/cm³ has 40% pore space and only 0.10 air at field capacity, which is where roots start to run short of oxygen after an irrigation. Do not enter porosity as a percent where a later step wants a decimal.",
      "Porosity is also the volumetric water content at saturation, the θs point on the release curves in Figure 2.6, so it gives you the upper limit for any sensor reading."
    ],
    qa: [
      { q: "Why does water sit on top in this one strip when the rest of the field soaks it in?", a: "Core both areas. The good ground at 1.30 g/cm³ gives 50.9% porosity. The strip at 1.60 g/cm³ gives 39.6%. That is about a fifth less pore space, and most of the loss is in the large pores that carry water down, so the strip ponds and stays wet." },
      { q: "We did a deep tillage pass last fall. Did it actually loosen anything?", a: "Compare cores from tilled and untilled passes at the same depth. If the untilled pass is 1.65 g/cm³ the porosity is 37.7%. If the tilled pass is 1.45 g/cm³ it is 45.3%. A gain of 7 or 8 points of pore space is a real change. If both numbers come back within 2 points, the tillage did not reach the layer." },
      { q: "My sensor reads 48% right after a heavy rain. Is that possible?", a: "Check it against porosity. A soil at 1.50 g/cm³ has 43.4% pore space, so water content cannot go above about 0.43 in that layer. A 48% reading means the sensor needs a soil-specific calibration, or it is sitting in a gap or in standing water around the access tube." }
    ],
    figs: ["2.1", "2.6"]
  },
  "eq-2.3": {
    more: [
      "Take at least 100 g of soil (the book's minimum) with a probe, auger, or shovel, seal it in a bag or tin right away so it does not dry in the truck, and weigh it on a balance that reads to 0.5 g. Dry it at 105 °C (220 °F) for 24 hours in a forced-air oven and weigh again. A microwave dries a sample in 10 to 30 minutes, but if you overdo it organic matter burns off and you count it as water. Mass water content in irrigated fields typically runs 0.05 to 0.15 for sands and 0.15 to 0.30 for silt loams and clay loams.",
      "Mass water content is the reference value used to check other sensors, but you cannot use it for irrigation depth until you multiply by bulk density (Eq. 2.5). Subtract the weight of the tin or bag before you do anything. The most common error is dividing the water lost by the wet weight. That gives a number that is too low by the factor of one plus θm, about 15% low for a typical sample.",
      "Use it with Eq. 2.1 from the same core when you can. Then the bulk density and the water content come from the same soil."
    ],
    qa: [
      { q: "My capacitance probe says 32% at one foot but the soil feels dry in my hand. How do I check it?", a: "Pull a sample next to the probe at 12 in. Say it weighs 85.4 g wet and 74.6 g dry. Enter those and you get 10.8 g of water and θm = 0.145. At a bulk density of 1.50 that is about 0.22 by volume (Eq. 2.5), well below the probe's 0.32. The probe is reading high and needs a soil-specific offset before you schedule from it." },
      { q: "I pulled a sample at 2 feet. Wet weight 152 grams, dry weight 128. What is the water content?", a: "Enter 152 g wet and 128 g dry. The calculator gives 24 g of water and θm = 0.1875. That is a mass ratio, so carry it to Eq. 2.5 with your bulk density. At 1.30 g/cm³ it becomes 0.244 by volume." },
      { q: "My hired man got 0.148 for a sample that was 212.5 grams wet and 181 grams dry. Is he right?", a: "No. He divided the 31.5 g of water by the wet weight. Enter 212.5 and 181 and the calculator divides by the dry weight and returns 0.174. On a 1.4 g/cm³ soil that difference is about 0.036 in/in, or 0.4 in of water per foot of soil." }
    ],
    figs: ["2.3"]
  },
  "eq-2.4": {
    more: [
      "If you have a ring sample of known volume, the water volume is just the grams of water lost on drying, since 1 g of water is 1 cm³. Most field sensors (capacitance, TDR, neutron probe) report volumetric water content directly, often as a percent. Typical field capacity values from Table 2.3 are 0.15 for sand, 0.25 for loam, 0.30 for silt loam, and 0.40 for clay loam and clay.",
      "θv is inches of water per inch of soil, so 0.25 means 3 in of water in each foot. Compare every reading with field capacity and wilting point for that soil before you decide anything. The book puts neutron probes within 1% and TDR within 2%, while capacitance probes need a calibration for your soil to get the magnitude right. If a probe reports percent, divide by 100 before you use it in the depletion equations.",
      "θv is the input for depth of water (Eq. 2.6), fraction depleted (Eq. 2.9) and soil water deficit (Eq. 2.13)."
    ],
    qa: [
      { q: "The sensor reads 25%. What does that number actually mean?", a: "Enter 25 cm³ of water in 100 cm³ of soil and you get θv = 0.25. That is 0.25 in of water per inch of soil, or 3 in per foot. On a silt loam with field capacity near 0.30 the soil is about 0.6 in per foot below full." },
      { q: "I dried a ring sample from 18 inches. The ring is 98.2 cm³ and it lost 30.2 grams. How wet was it?", a: "Enter 30.2 cm³ of water and 98.2 cm³ of soil. θv is 0.308, about 3.7 in of water per foot. For a silt loam that is right at field capacity, so there is no room for irrigation at that depth." },
      { q: "On my sandy field the ring lost only 14.7 grams. Is it time to water?", a: "Enter 14.7 cm³ in 98.2 cm³ and you get θv = 0.15. Sand in Table 2.3 has field capacity 0.15 and wilting point 0.07, so that layer is at field capacity. Check the shallower depth before you start the system." }
    ],
    figs: ["2.4", "2.16"]
  },
  "eq-2.5": {
    more: [
      "The two inputs come from the same core if you can manage it: θm from oven drying (Eq. 2.3) and bulk density from the core volume (Eq. 2.1). If you only have probe samples with no volume, use a bulk density from your own cores in that field or the NRCS soil survey value for the layer. Water density is 1 g/cm³, so in practice θv = θm times ρb.",
      "The conversion matters. A θm of 0.15 is 0.21 by volume on a soil at 1.4 g/cm³, and skipping the step makes the soil look 30% drier than it is. Do not use particle density (2.65) in place of bulk density. Bulk density changes with depth, so use the value measured for each layer.",
      "This is the usual path from a sample bag to a number you can use. After this, go to Eq. 2.6 for inches of water or Eq. 2.13 for the deficit."
    ],
    qa: [
      { q: "I pulled samples at 1, 2 and 3 feet and have the weights. How much water is in there?", a: "Do each depth separately. A 1-ft sample at θm = 0.15 with bulk density 1.4 gives θv = 0.21. Then Eq. 2.6 turns that into 2.52 in of water in that foot. Repeat for the other depths with their own bulk density and add them up." },
      { q: "My sandy subsoil sample came back at 8 percent by weight. Is that dry?", a: "Enter θm = 0.08 and ρb = 1.6. θv is 0.128. A loamy sand with field capacity 0.18 and wilting point 0.07 is about half depleted at 0.128, so that layer is ready for water." },
      { q: "Our consultant reports moisture by weight. How do I compare it to my capacitance probe?", a: "Convert his numbers. A silt loam at θm = 0.22 and 1.30 g/cm³ is θv = 0.286. If your probe reads 0.29 at the same depth, the two agree and you can trust the probe trend." }
    ],
    figs: ["2.3", "2.4"]
  },
  "eq-2.6": {
    more: [
      "Enter θv from a sensor or a converted sample and the thickness of the layer it represents. With sensors at 6, 18 and 30 in, each one usually stands for a 12 in layer. Use the same length units you want out: inches of soil give inches of water.",
      "This is total water in the layer, including the water below wilting point that the crop cannot use. A 3 ft silt loam profile at 0.30 holds 10.8 in, but about 4.3 in of that is below wilting point (0.12 times 36 in). For irrigation decisions you usually want available water or the deficit (Eq. 2.13). Add layers one at a time with their own θv rather than averaging θv over the whole root zone.",
      "Stored water at the start and end of a period goes into the soil water balance (Eq. 4.1)."
    ],
    qa: [
      { q: "How many inches of water do I have in the top three feet right now?", a: "If the whole 36 in reads 0.30, enter θv = 0.30 and L = 36 in and you get 10.8 in. On a silt loam with wilting point 0.12, subtract 4.32 in of unavailable water. The crop has about 6.5 in it can use, and the profile is at field capacity." },
      { q: "My probe shows 0.21 in the top foot. How much water is that?", a: "Enter 0.21 and 12 in. The top foot holds 2.52 in. On a sandy loam (field capacity 0.20) that layer is full. On a silt loam (field capacity 0.30) it is 1.1 in short." },
      { q: "Top foot reads 0.286, second foot reads 0.128. What is the total?", a: "Run each layer. The first foot gives 3.43 in and the second gives 1.54 in, for 4.97 in in 2 ft. The big drop in the second foot tells you roots are pulling water there, so look at that depth when you plan the next irrigation." }
    ],
    figs: ["2.5"]
  },
  "eq-2.7": {
    more: [
      "Field instruments measure one part each. A tensiometer reads matric potential in centibars, with a practical range of 0 to 75 cb. Granular matrix sensors cover about 5 to 200 cb. Osmotic potential comes from the salinity of the soil water, roughly -0.36 bar for each dS/m of soil water EC. Gravitational potential depends only on height above your reference and drops out when you compare plant stress at one depth. Table 2.1 converts units: 1 bar = 100 cb = 100 kPa, close to 1 atmosphere.",
      "All values are negative except gravity, and more negative means the plant works harder for water. Field capacity is about -0.08 bar (8 cb) in fine sand and about -0.2 bar (20 cb) in silt loam per the book, and wilting point is near -15 bar. In a saline field, the tensiometer can read comfortable while total potential is well into stress. Enter matric and osmotic potential as negative numbers in the same units.",
      "Use Eq. 7.1 for osmotic potential from EC if you have a saturated paste or soil water test."
    ],
    qa: [
      { q: "My tensiometer reads 40 cb, which should be fine. Why is the crop wilting on the saline end?", a: "40 cb is -0.4 bar matric. If the soil water EC on that end is about 4 dS/m, osmotic potential is near -1.44 bar. Enter -0.4 and -1.44 and total potential comes out -1.84 bar, more than four times what the tensiometer shows. That end needs a leaching irrigation and a wetter trigger point." },
      { q: "The granular matrix sensor reads 60 cb in my non-saline loam. What is the total potential?", a: "Enter matric -0.6 bar and osmotic 0 and the total is -0.6 bar. With no salt problem the sensor reading is the number to schedule on. Compare it with the trigger value you set for that soil and crop." },
      { q: "Our drip block runs well water at about 2 dS/m in the soil solution. Tensiometers read 30 cb. Is that wet enough?", a: "Osmotic potential is about -0.72 bar. Enter -0.3 and -0.72 and total potential is -1.02 bar. The salt adds more stress than the dryness, so keep the soil wetter than you would with fresh water and plan a leaching fraction." }
    ],
    figs: ["2.17", "2.18", "2.6"]
  },
  "eq-2.8": {
    more: [
      "Field capacity and wilting point come from a lab release curve (about -1/3 bar and -15 bar on a pressure plate), from the NRCS Web Soil Survey layer data, or from Table 2.3 by texture. In the field you can also find field capacity from your own sensor: read it a day or two after a soaking rain once drainage slows. AWC runs from 0.05 in/in for coarse sand to 0.18 in/in for silt loam in Table 2.3.",
      "AWC is per unit depth, so 0.18 in/in is 2.16 in per foot of soil. Low AWC soils need smaller, more frequent irrigations, and a center pivot on a sand at 0.08 in/in has very little buffer during peak ET. Do not use saturation or porosity in place of field capacity, since water above field capacity drains away. Book Figure 2.6 shows the fine sandy loam with θfc = 0.23.",
      "Multiply AWC by root depth for TAW (Eq. 2.14), or by layer depth for available water per layer."
    ],
    qa: [
      { q: "How much water can my silt loam hold for the crop?", a: "Enter field capacity 0.30 and wilting point 0.12. AWC is 0.18 in/in, or 2.16 in per foot. With a 3 ft root zone that is 6.5 in of total available water (Eq. 2.14)." },
      { q: "Why do I have to water my sandy loam pivot twice as often as the silt loam one across the road?", a: "Sandy loam at 0.20 and 0.08 gives AWC = 0.12 in/in, against 0.18 for the silt loam. The sandy field holds two-thirds as much per foot, and roots are often shallower too, so the same 50% depletion arrives much sooner." },
      { q: "The lab report shows 0.36 at a third bar and 0.20 at fifteen bar for my silty clay loam. What do I use?", a: "Enter 0.36 and 0.20. AWC is 0.16 in/in, close to the Table 2.3 value for silty clay loam. Use the lab number since it is your soil." }
    ],
    figs: ["2.6", "2.7", "2.8"]
  },
  "eq-2.9-2.11": {
    more: [
      "Field capacity and wilting point come from Table 2.3, a lab curve, or the soil survey. Current θv comes from a sensor or a converted sample, at a depth that represents the root zone. The feel method of Table 2.5 estimates fr directly, and the book puts experienced users within plus or minus 0.10.",
      "The common management rule is to irrigate before fd passes 0.5, or fr drops below 0.5. Many crops tolerate less than that during flowering. A result above 1.0 for fd means the reading is below wilting point, and a negative value means the soil is above field capacity. Both usually point to a wrong field capacity value or a sensor that needs calibrating.",
      "Multiply fd by AWC and depth (Eq. 2.12) for the depth to apply. fr goes into the stress factor Ks in Chapter 4."
    ],
    qa: [
      { q: "My silt loam probe reads 0.21. How dry is it really?", a: "Enter field capacity 0.30, wilting point 0.12, current 0.21. fd = 0.50 and fr = 0.50. You are right at the usual 50% trigger, so start the system now." },
      { q: "Sandy loam at 0.13. Do we wait until after the weekend?", a: "With 0.20 and 0.08 the calculator gives fd = 0.58. The field is already past 50% depletion. On a sandy loam with a pivot that takes 3 days to get around, start today." },
      { q: "Clay loam at 0.36. The neighbor is watering. Should I?", a: "Enter 0.40, 0.25 and 0.36. fd is only 0.27, so nearly three-quarters of the available water remains. Wait. Watering now raises the chance of deep percolation and runoff if it rains." }
    ],
    figs: ["2.7", "2.8"]
  },
  "eq-2.12": {
    more: [
      "fd comes from Eq. 2.9 or from a feel check (Table 2.5). AWC comes from Table 2.3, a lab curve, or the NRCS soil survey. L is the depth of soil you are refilling, usually the active root depth for the stage of the crop.",
      "SWD is the net depth needed to bring that layer to field capacity. A pivot running at 85% application efficiency has to pump more, so a 3.24 in deficit becomes about 3.8 in gross. Applying more than SWD sends water below the root zone. The usual errors are using the full mature root depth on a young crop, and confusing net and gross depth when setting the run time.",
      "Eq. 2.13 gets the same answer from water contents directly. The SWD here is the input for run-time and the Chapter 6 scheduling methods."
    ],
    qa: [
      { q: "My corn field is half depleted. How much do I put on?", a: "Silt loam, AWC 0.18, roots at 36 in, fd = 0.5. The calculator gives SWD = 3.24 in net. The pivot cannot apply that in one pass without runoff, so plan two or three passes, and divide by application efficiency for gross depth (about 3.8 in at 85%)." },
      { q: "Beans on sandy loam, about 40 percent depleted, 2 foot roots. How much water?", a: "Enter fd 0.4, AWC 0.12, L 24 in. SWD is 1.15 in. A 1.0 to 1.2 in gross application will refill it without pushing water below the roots." },
      { q: "Alfalfa with 4 feet of roots on loam is 35 percent depleted before cutting. Can I fill it now?", a: "Enter 0.35, 0.15 and 48 in. SWD is 2.52 in. Fill it now if you can get the water on and the surface dry before the swather goes in. Otherwise irrigate right after the bales are off." }
    ],
    figs: ["2.8"]
  },
  "eq-2.13": {
    more: [
      "Enter field capacity, the current θv from a sensor or sample, and the thickness of the layer. Do one layer at a time when water content changes with depth, then add the results. Field capacity from your own sensor record after a soaking rain is often better than a table value.",
      "SWD is the room in the soil, in inches, before water starts to drain. Zero or a negative number means the layer is at or above field capacity and any water you add will drain. Book Section 2.10.9 suggests tracking SWD from the sensor trend over time rather than trusting a single reading. Mixing up the depth units is the usual error: θ is in/in, so L in inches gives SWD in inches.",
      "Adding layer SWD values is how Example 2.4 tracks a wetting front, so this feeds the wetting-depth calculator."
    ],
    qa: [
      { q: "My probe reads 0.22, 0.25 and 0.27 at 1, 2 and 3 feet in silt loam. How much should I apply?", a: "Field capacity is 0.30. Run each foot: 0.96 in, 0.60 in and 0.36 in, for 1.92 in net. Apply about 2.3 in gross at 85% efficiency, split into two passes if your soil seals." },
      { q: "18 inches of sandy loam reads 0.12 on the probe. Field capacity is 0.20. How much water?", a: "Enter 0.20, 0.12 and 18 in. SWD is 1.44 in. Put on 1.5 to 1.7 in gross and stop, since anything more goes past the roots on that soil." },
      { q: "The top foot reads 0.25 and field capacity is 0.25. The forecast is hot. Should I water anyway?", a: "Enter 0.25 and 0.25. SWD is 0. The soil is full and any water you add drains. Wait until the readings drop at least 0.03 to 0.05, then refill." }
    ],
    figs: ["2.5", "2.14"]
  },
  "eq-2.14": {
    more: [
      "AWC comes from Table 2.3, a lab curve, or the soil survey. Root depth comes from the crop and its stage (Chapter 6), checked with a probe or shovel. Mature corn often extracts from 3 to 4 ft, alfalfa from 4 ft or more, and shallow vegetable crops from 1 to 2 ft. A hardpan, gravel layer or water table caps the root depth no matter what the crop could do.",
      "TAW is the full tank. With a 50% allowable depletion, half of TAW is what you can use between irrigations. A silt loam with 3 ft of roots holds 6.5 in, so you have about 3.2 in to work with. This equation assumes one texture through the root zone. For layered soils add AWC times thickness for each layer instead. Using the mature root depth early in the season overstates TAW and makes the irrigation interval look longer than it is.",
      "TAW and allowable depletion set the net irrigation depth and interval in Chapter 6. Figure 6.4 shows how much of the extraction comes from each quarter of the root zone."
    ],
    qa: [
      { q: "How much water does my corn have to work with on this silt loam?", a: "Enter AWC 0.18 and root depth 36 in. TAW is 6.48 in. At 50% allowable depletion you can use about 3.2 in, about 10 days at 0.32 in/d peak ET." },
      { q: "I have a pivot on sandy loam with potatoes rooted to 2 feet. How much buffer do I have?", a: "Enter 0.12 and 24 in. TAW is 2.88 in. Potatoes are often held to 30 to 35% depletion, so you have about 1 in to use, about 3 days at peak. That is why potato pivots run almost continuously." },
      { q: "We are designing a new pivot for alfalfa on loam with 4 foot roots. What storage do we assume?", a: "Enter 0.15 and 48 in. TAW is 7.2 in. Use it in the system capacity check so the design accounts for drawing down soil water through a peak ET period." }
    ],
    figs: ["2.8", "6.3", "6.4"]
  },
  "wetting-depth": {
    more: [
      "List the layer thicknesses from the top down, with a large number (999) for the last layer. Enter field capacity and the current water content for each layer from a probe or samples, then the infiltrated depth. Infiltrated depth is the gross application minus runoff and evaporation loss, which is less than the pump delivered. The calculator fills each layer to field capacity before moving down, as in Examples 2.4 and 2.5.",
      "The result shows how far the wetting front goes and how much water passes below the root zone. If the front goes much past the roots, the application was too large for the deficit. On a sandy loam sitting 0.06 below field capacity, each inch of water wets about 17 in of soil. On a subsoil close to field capacity it can go several feet. The book rounds the layer deficits in Example 2.4, so it reports 46.7 in and 0.6 in, while the calculator carries full precision and returns 47.7 in and 0.70 in. Check that your field capacity is higher than the current water content in each layer, or the layer passes water straight through.",
      "Use it after Eq. 2.13 to see what a planned application does, and before Eq. 4.1 to estimate deep percolation for the water balance."
    ],
    qa: [
      { q: "I put 1.5 inches on my sandy loam. How deep did it go?", a: "Use 12, 12, 999 in with field capacity 0.20 and current 0.14 in all layers, root depth 24 in. The front stops at 25 in and only 0.06 in passes below the roots. A good application for that soil." },
      { q: "The book's example soil, but my crop only has 2 feet of roots. What happens with a 4 inch irrigation?", a: "Leave the example layers as they are and set root depth to 24 in. The front still reaches about 47.7 in, and 1.48 in of the 4 in ends up below the roots. That is more than a third of the water lost to deep percolation, so split it into smaller sets early in the season." },
      { q: "Silt loam at 0.20, 0.22 and 0.24 in the top three feet. Will 3 inches reach the bottom of the root zone?", a: "Enter 12, 12, 999 with field capacity 0.30 in all layers, root depth 36 in. The front reaches 38 in and 0.12 in passes below 36 in. The whole root zone gets refilled with little loss." }
    ],
    figs: ["2.14", "2.9"]
  },
  "tab-2.3": {
    more: [
      "Pick the texture from a hand texture test, a lab particle size analysis, or the NRCS Web Soil Survey map unit for the field. Enter the root depth if you want TAW. The table gives example values for field capacity, wilting point and AWC.",
      "The book's footnote warns that these are example values and real soils vary a lot within each texture. Use them for planning and quick checks, and replace them with lab data, soil survey layer values, or field capacity from your own sensors once you have them. If the field has different textures with depth, look up each layer and add AWC times thickness instead of using one texture for the whole profile.",
      "The values feed Eq. 2.8 through Eq. 2.14 and the Chapter 6 scheduling methods."
    ],
    qa: [
      { q: "The soil map says loam. What water holding should I use for a 3 foot root zone?", a: "Select Loam and enter 36 in. The table gives field capacity 0.25, wilting point 0.10, AWC 0.15 in/in, and TAW 5.4 in. At 50% allowable depletion that is 2.7 in between irrigations." },
      { q: "A new client has a sandy loam vegetable farm with 2 foot roots. Where do I start?", a: "Select Sandy loam and 24 in. AWC 0.12 and TAW 2.88 in. Plan on about 1.4 in available at 50% depletion until you get sensor data from his fields." },
      { q: "We are sizing a pivot for corn on silt loam with 4 foot roots. What storage do we assume?", a: "Select Silt loam and 48 in. TAW is 8.64 in. Check that against the NRCS soil survey for the field, since silt loams can run from 0.15 to over 0.20 in/in." }
    ],
    figs: ["2.2", "2.6"]
  }
});
