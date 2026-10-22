window.CALC_USE2 = window.CALC_USE2 || {};
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

window.CALC_USE2 = Object.assign(window.CALC_USE2 || {}, {
  "eq-3.1-3.2": {
    more: [
      "Volume comes from a flow meter totalizer, a ditch company delivery record, or a well permit report, and area comes from FSA maps, the pivot computer, or a GIS outline. Keep the units paired: acre-inches over acres gives inches. Table 3.1 has the conversions you will use most: 1 ac-in = 27,154 gal = 3,630 ft³, and 1 ac-ft = 12 ac-in = 325,851 gal.",
      "The answer is the gross depth applied, averaged over the whole area. It is not what reached the root zone, since runoff, drift, evaporation and nonuniform coverage all take a share. Compare it with the soil water deficit divided by application efficiency. A pivot corner arm or end gun that turns on and off changes the irrigated area, so use the area actually watered during that period. Do not divide acre-feet by acres and call the answer inches.",
      "If you have totalizer readings, use the meter-depth calculator. If you only know flow rate and run time, use Eq. 3.3."
    ],
    qa: [
      { q: "The ditch company says we got 260 acre-inches on the 130 acre field. How much is that?", a: "Enter 260 ac-in and 130 ac. That is 2.0 in gross. If furrow application efficiency is around 60%, about 1.2 in actually stayed in the root zone." },
      { q: "I have 10 acre-feet left on my allocation and a 125 acre pivot. What does that buy me?", a: "10 ac-ft is 120 ac-in. Enter 120 and 125 ac and you get 0.96 in over the field. That is about one pass at 1 in, so save it for the stage the crop can least afford to lose, usually tasseling and silking for corn." },
      { q: "We pumped a million gallons on the 40 acre orchard last week. Is that a lot?", a: "1,000,000 gal is 36.8 ac-in (Table 3.1). Enter 36.8 ac-in and 40 ac and you get 0.92 in for the week. Peak orchard ET runs 1.5 to 2 in a week in hot weather, so that block is likely running short." }
    ],
    figs: ["3.1"]
  },
  "meter-depth": {
    more: [
      "Read the totalizer before and after the irrigation, or at the same time each week, and write down the units and multiplier printed on the register face. Registers read in gallons, acre-inches, acre-feet or cubic feet, and many show a multiplier such as x10 or x1000 (Figure 3.6). The area is the acreage watered between the two readings.",
      "The result is the average gross depth over the area. Book Example 3.2 gives 1.5 in from 3,665,800 gal on 90 ac. A depth that looks far too small or too big usually means the multiplier was missed or the register units were read wrong. A propeller meter only reads right with the pipe running full and about 10 pipe diameters of straight pipe upstream and 1 downstream, so check the installation before you blame the grower.",
      "Use the result as the gross irrigation term in the water balance (Eq. 4.1) and to check that the pivot's percent timer setting actually delivers the depth you planned."
    ],
    qa: [
      { q: "The meter read 45,210,300 before and 49,600,900 after the pass on my 126 acre pivot. How much did I put on?", a: "Enter both readings and 126 ac. The volume is 4,390,600 gal and the depth is 1.28 in. If you set the pivot for 1.25 in, it is applying about what you asked for." },
      { q: "My meter went from 1,000.0 to 1,250.0 over the week on an 80 acre field. That can't be right, can it?", a: "Look at the register face. If it reads in thousands of gallons, the volume is 250,000 gal, not 250. Enter 1,000,000 and 1,250,000 gal with 80 ac and you get 0.12 in, which still looks low for a week of pumping. Check whether the meter stopped or the pump ran fewer hours than he thought." },
      { q: "We are logging water for the cost-share drip block, 5 acres. Readings 2,885,000 and 3,020,000 gallons. What depth goes in the report?", a: "Enter both readings and 5 ac. The volume is 135,000 gal and the depth is 0.99 in over the block. Report it with the dates of both readings." }
    ],
    figs: ["3.5", "3.6", "3.8"]
  },
  "eq-3.3": {
    more: [
      "Flow rate comes from a meter, a pump test, or the design sheet, and run time from the panel, a timer, or the pivot computer log. The handy field conversion from Table 3.1 is 450 gpm = 1 ac-in/hr. The calculator uses the exact 452.6 gpm, so its answers can differ from hand work by about half a percent.",
      "The result is the gross depth over the area for that run time, assuming steady flow. For a center pivot, 24 hours of flow divided by the field area is the system capacity in in/d, and you compare it with peak ET. A pivot at 800 gpm on 126 ac supplies only 0.34 in/d, which barely meets a 0.32 in/d peak ET once losses are counted. Flow drops when the water table falls during summer, so use a flow measured this season.",
      "Rearranged, the same relation gives run time (run-time calculator) and application intensity (Eq. 3.4)."
    ],
    qa: [
      { q: "My well puts out 800 gpm on a 126 acre pivot. Can it keep up with corn in July?", a: "Enter 800 gpm, 24 hr, 126 ac. The pivot applies 0.34 in/d gross. At 85% efficiency that is about 0.29 in/d net against peak corn ET of 0.30 to 0.35 in/d. It falls behind in hot spells, so start the season with a full profile and do not let it get ahead of you." },
      { q: "The book example: 900 gpm on 30 acres every 24 hours. What depth is that?", a: "Enter 900 gpm, 24 hr, 30 ac. The calculator returns 1.59 in. The book gets 1.6 in by rounding to 450 gpm per ac-in/hr." },
      { q: "We run the 1,200 gpm pump 12 hours a night on 80 acres of off-peak power. How much water goes on per night?", a: "Enter 1,200 gpm, 12 hr, 80 ac. You get 0.40 in per night, or about 2.8 in a week if it runs every night. At 85% efficiency that is about 0.34 in/d net, enough for most crops at peak." }
    ],
    figs: ["3.1"]
  },
  "run-time": {
    more: [
      "Enter the measured flow, the area to cover, the gross depth wanted (net deficit divided by application efficiency), and how many hours a day the system can actually run. Load control, off-peak power, or labor for set changes all cut the hours per day below 24.",
      "Hours is the pumping time needed to apply that gross depth, and days spreads it over the hours you can run. If the days needed are longer than the time before the soil reaches the allowable depletion, the system cannot keep up and you need to start earlier or apply less each time. The common error is entering net depth, which makes the run time too short by the application efficiency.",
      "The gross depth comes from Eq. 2.12 or 2.13 divided by efficiency. Use meter-depth afterward to check what was actually applied."
    ],
    qa: [
      { q: "How long does it take my 1,000 gpm pivot to put an inch on 126 acres?", a: "Enter 1,000 gpm, 126 ac, 1 in, 24 hr/d. It needs 57 hours, or 2.4 days of continuous running. That is about a 2.4 day revolution at 1 in." },
      { q: "The power company has us on load control. We get about 20 hours a day. How long now?", a: "Same entry with 20 hr/d. Still 57 hours of pumping, but it now takes 2.85 days. Over a week that drops your capacity by about a sixth, so start irrigations earlier in the hot part of the season." },
      { q: "450 gpm hand-move system on 30 acres, two sets a day of 12 hours total, 2 inches gross. How long to get around?", a: "Enter 450 gpm, 30 ac, 2 in, 12 hr/d. It takes 60 hours of pumping, which is 5 days. If peak ET is 0.3 in/d, the first set will have used 1.5 in by the time you return, so the cycle is close to the limit." }
    ],
    figs: ["3.1"]
  },
  "eq-3.4": {
    more: [
      "Enter the system flow and the area being watered at the same moment. For a set system that is the area under the sprinklers that are on, for a wheel line it is line length times move distance, and for a whole field over a day it is the field area. The result is in inches per hour.",
      "Compare the rate with the soil intake rate. Table 2.4 gives steady infiltration under stationary sprinklers of 0.25 to 0.40 in/hr for silt loam with little sealing and 0.13 to 0.28 in/hr with sealing. If the application rate is higher, water runs off or ponds (Figure 2.12). For a center pivot the whole-field value is the average rate over 24 hours, which tells you capacity, not the instantaneous rate under the moving span. The outer spans of a pivot apply several times the average and are where runoff starts (Figure 2.13).",
      "Eq. 3.5 does the same for one sprinkler or emitter from its flow and spacing."
    ],
    qa: [
      { q: "Our hand-move set runs 450 gpm and covers about 3.4 acres. Will a silt loam take it?", a: "Enter 450 gpm and 3.4 ac. The rate is 0.29 in/hr. That is within the 0.25 to 0.40 in/hr range for silt loam with little sealing, but above the 0.13 to 0.28 range once the surface crusts. Watch for runoff late in the season." },
      { q: "My quarter-mile wheel line pumps 300 gpm and moves 60 feet. Is that too fast for this ground?", a: "The set covers 1,320 by 60 ft, or 1.82 ac. Enter 300 gpm and 1.82 ac and the rate is 0.36 in/hr. On a sealing silt loam that will run off, so shorten the sets or use smaller nozzles." },
      { q: "800 gpm on a 126 acre pivot. What is the application intensity?", a: "Averaged over the whole field the calculator gives 0.014 in/hr, or 0.34 in/d. That is the capacity number. The tower closest to the end applies at several in/hr as it passes, so check the outer span for runoff separately." }
    ],
    figs: ["2.12", "2.13"]
  },
  "eq-3.5": {
    more: [
      "Get sprinkler discharge from the nozzle chart at the measured operating pressure, or time a bucket on a hose fitted over the nozzle. Spacing along the lateral and between laterals comes from the layout or a tape. For drip, use the emitter flow in gpm (1 gph = 0.0167 gpm) and the emitter spacing times the row spacing. The 96.3 constant converts gpm per ft² to in/hr.",
      "Compare the result with the soil intake rate from Table 2.4. Sprinkler rates of 0.15 to 0.30 in/hr suit most medium soils, while rates above 0.4 in/hr run off silt loams and clays. Too low a rate in hot wind means more of the water evaporates before it lands. Drip rates over the whole row area look high, but the water goes into a small wetted strip, so this check matters more for sprinklers. Use the actual operating pressure, since nozzle flow drops when pressure falls at the end of a long lateral.",
      "Eq. 3.4 gives the same rate for a whole set. Chapter 11 covers nozzle discharge and spacing in detail (Figures 11.4 and 11.6)."
    ],
    qa: [
      { q: "We have 8.5 gpm sprinklers on a 40 by 50 foot spacing on silt loam. Why is water running down the rows?", a: "Enter 8.5 gpm, 40 ft and 50 ft. The application rate is 0.41 in/hr. Sealed silt loam takes 0.13 to 0.28 in/hr (Table 2.4), so it runs off. Go to smaller nozzles or a wider lateral spacing to cut the rate in half." },
      { q: "I want to swap my 5 gpm nozzles for 12 gpm ones to get done faster. Same 40 by 60 spacing. Problem?", a: "At 5 gpm the rate is 0.20 in/hr. Enter 12 gpm and it jumps to 0.48 in/hr. That is over twice the intake of most medium soils, so the time you save will run off the field." },
      { q: "1 gph drip emitters at 12 inches on rows 30 inches apart. What is the application rate?", a: "Enter 0.0167 gpm, 1 ft and 2.5 ft. The rate is 0.64 in/hr over the whole bed. An inch takes about 1.6 hours of run time. The water goes into a narrow strip, so watch the wetting pattern rather than the surface intake." }
    ],
    figs: ["11.4", "11.6", "2.12"]
  },
  "eq-3.6": {
    more: [
      "Velocity comes from a current meter, an acoustic Doppler unit, or a float with a correction factor (Eq. 3.8). Flow area comes from measured top width and depths. For a rectangular channel it is width times depth, and for a trapezoid it is (bottom width plus side slope times depth) times depth. Take depths at several points across the channel and average them.",
      "Mean velocity is lower than the surface or center velocity (Figures 3.3 and 3.4), so use the mean velocity or corrected float speed in this equation. 1 cfs is 449 gpm, or about 1 ac-in/hr. In a pipe, flow area is the full bore only when the pipe runs full. A ditch with grass or sediment changes its area through the season, so measure on the day you need the number.",
      "This continuity relation is behind every velocity-based meter in the chapter: pipe-flow, the float method and current meters."
    ],
    qa: [
      { q: "The ditch is about 4 square feet of flow and the meter says 1.5 feet per second. How much water am I getting?", a: "Enter 1.5 ft/s and 4 ft². Flow is 6 cfs, about 2,690 gpm or 6 ac-in/hr. That is enough to put 1 in on 6 acres every hour." },
      { q: "The district says I am getting 12 cfs but my field doesn't look like it. How do I check?", a: "Measure the cross section at a straight reach and time the velocity. If you find 6 ft² at a mean of 2.0 ft/s, the calculator gives 12 cfs and the delivery is right. If the mean is 1.6 ft/s you have 9.6 cfs, and that is worth a call to the ditch rider." },
      { q: "Small lateral, 2.5 square feet of flow, current meter averaged 1.2 feet per second. What flow?", a: "Enter 1.2 and 2.5 and you get 3.0 cfs, about 1,350 gpm. That will run about 27 furrows at 50 gpm each." }
    ],
    figs: ["3.2", "3.3", "3.4", "3.16"]
  },
  "pipe-flow": {
    more: [
      "Enter the inside diameter of the pipe and the mean velocity from an ultrasonic or insertion meter. Use the true inside diameter. Nominal size, outside diameter and wall thickness differ by pipe class, and an 8 in nominal PVC pipe may have an ID under 7.8 in. The ultrasonic meter's setup screen needs the same ID, so get it from the pipe stamp or the manufacturer's table.",
      "Flow scales with diameter squared, so a small error in ID makes a large error in flow. Using 8 in where the ID is 7.75 in overstates flow by about 6.5%. The equation only applies when the pipe is full. A pipe running partly full (Figure 3.4) needs a different method. Velocities above about 5 ft/s in irrigation pipe raise friction loss and water hammer risk, a common design limit.",
      "The flow then feeds Eq. 3.3 for depth applied and run-time for hours."
    ],
    qa: [
      { q: "The clamp-on meter shows 5 feet per second in my 8 inch line. How many gpm is that?", a: "Enter 8 in and 5 ft/s. Flow is 1.75 cfs, about 785 gpm as in Example 3.3. If the actual ID is 7.75 in, the flow is 1.64 cfs, about 735 gpm, so get the ID right before you report it." },
      { q: "We are sizing the mainline for a 1,200 gpm pivot. Is 10 inch pipe big enough?", a: "Enter 10 in and 5 ft/s. That pipe carries 2.73 cfs, about 1,220 gpm, at 5 ft/s. 1,200 gpm in 10 in pipe runs right at the 5 ft/s limit, so 10 in works but 12 in leaves room if the pump is upgraded." },
      { q: "An ultrasonic reading of 3.2 feet per second in an 8 inch pipe. Is the pump wearing out?", a: "Enter 8 in and 3.2 ft/s. Flow is 1.12 cfs, about 500 gpm. If the pump was rated at 750 gpm, it has lost a third of its flow. Check the water level in the well before you pull the pump." }
    ],
    figs: ["3.3", "3.13", "3.14"]
  },
  "meter-timing": {
    more: [
      "Read the register face to see what one sweep revolution or one step in the last digit stands for, often 10, 100 or 1,000 gal. Then time a whole number of turns or digits with a stopwatch, at least a minute if the flow allows. The book's chapter question uses 10 digits of 100 gal in 1 minute 30 seconds.",
      "Timing the totalizer gives a better flow rate than reading the flow indicator needle, since the totalizer is the meter's most accurate output. If the flow seems far off, check the register units, the multiplier, and whether the meter sits in a full pipe with enough straight run upstream (10 diameters for propeller meters, 2 for magnetic meters, per the book). Start the watch the moment a digit changes and stop it the moment the last counted digit changes.",
      "The flow goes into Eq. 3.3 and run-time, and you can compare it against pipe-flow from an ultrasonic reading."
    ],
    qa: [
      { q: "The last digit on my meter is 100 gallons. Ten numbers went by in a minute and a half. What is my flow?", a: "Enter 100 gal, 10 digits, 90 s. The flow is 667 gpm. That is about 1.5 ac-in/hr." },
      { q: "The sweep hand is 100 gallons per turn and I counted 5 turns in 40 seconds. Is the pump still making 800 gpm?", a: "Enter 100 gal, 5 turns, 40 s. The flow is 750 gpm, about 6% short of 800. Repeat the count over a longer time to confirm, then check the pumping water level." },
      { q: "Big meter, 1,000 gallons per digit, two digits took 2 minutes 10 seconds. What flow goes on the water report?", a: "Enter 1,000 gal, 2 digits, 130 s. The flow is 923 gpm. Two digits is a short count, so time 5 or more if you can for the report." }
    ],
    figs: ["3.6", "3.5", "3.8"]
  },
  "eq-3.7": {
    more: [
      "The orifice diameter comes from the cap or plate stamp, and the head is read from a clear tube or gauge tapped into the pipe upstream of the orifice. For a cap discharging to the air (Figure 3.12) the downstream head is zero. If you read pressure in psi, multiply by 2.31 to get feet of head (Table 2.1). K comes from the orifice rating, and about 0.6 is typical for a sharp-edged orifice.",
      "Flow goes with the square root of head, so doubling the head raises flow only about 41%. Small head readings on a poorly installed gauge make large errors, so keep the tap clean and the tube free of air. The pipe must be level and full at the orifice. Rate the orifice once against a meter if you can, and use the measured K from then on.",
      "Use it to check well output during a pump test or to set up a temporary measurement where no meter is installed."
    ],
    qa: [
      { q: "We put a 4 inch orifice cap on the well discharge and the tube reads 3 feet of head. What is the flow?", a: "Enter K 0.6, diameter 0.333 ft (4 in), head 3 ft. Flow is 0.73 cfs, about 327 gpm. Record it with the pumping water level as a baseline for future tests." },
      { q: "Small well, 3 inch orifice, 2 feet of head. Will it run a 150 gpm drip block?", a: "Enter 0.6, 0.25 ft and 2 ft. Flow is 0.33 cfs, about 150 gpm. That just meets the block, with nothing spare as the water level drops in summer." },
      { q: "The gauge reads about 2.2 psi upstream of the 4 inch cap. How much water is that?", a: "2.2 psi times 2.31 is about 5 ft of head. Enter 0.6, 0.333 ft and 5 ft and you get 0.94 cfs, about 420 gpm." }
    ],
    figs: ["3.12", "3.11"]
  },
  "eq-3.8": {
    more: [
      "Mark a straight run of channel with uniform cross section, at least 50 ft long if you can. Drop a float (an orange or a half-full bottle rides better than a stick) upstream of the first mark and time it between the marks, then repeat three to five times and average. Measure the flow area at a couple of sections in the reach. The book gives Kf from 0.65 for water 1 ft deep or less up to 0.8 for 20 ft or more.",
      "The float gives surface velocity, which is faster than the mean, so Kf corrects it before multiplying by area (Eq. 3.6). Wind on the float, eddies near the bank, and a crooked reach all throw it off. The book is clear that the float method is a quick estimate and is normally not accurate enough for good water management. Use it to check whether a delivery is roughly right, then install a weir, flume or meter for records.",
      "For a better open channel number, use a weir (Table 3.2) or flume (Tables 3.3 and 3.4)."
    ],
    qa: [
      { q: "An orange took 50 seconds to float 100 feet. The ditch is under a foot deep with about 6 square feet of water. What flow?", a: "Enter 100 ft, 50 s, Kf 0.65, 6 ft². Surface speed is 2.0 ft/s, mean is 1.3 ft/s, and flow is 7.8 cfs, about 3,500 gpm." },
      { q: "We timed a float at 20 seconds over 50 feet in a deeper lateral, about 4.5 square feet. Is the district shorting us?", a: "Use Kf 0.70 for a deeper channel. The calculator gives 2.5 ft/s at the surface, 1.75 ft/s mean, and 7.9 cfs. If the order was 8 cfs, delivery looks right within the accuracy of a float." },
      { q: "Slow ditch, 40 seconds over 50 feet, 2 square feet of flow. How much is that?", a: "Enter 50, 40, 0.65 and 2. Surface speed 1.25 ft/s, mean 0.81 ft/s, flow 1.6 cfs, about 730 gpm. Enough for about 15 furrows at 50 gpm." }
    ],
    figs: ["3.17", "3.16"]
  },
  "tab-3.2": {
    more: [
      "Measure the head with a staff gauge or a stake set level with the crest, placed upstream at least four times the maximum head so it is out of the drawdown curve. Crest length comes from a tape across the notch. The rectangular formula is for a weir with no end contractions. The trapezoidal (Cipolletti) weir has 1:4 side slopes and uses 3.37. The 90° V-notch uses 2.49 H to the 5/2 power, which suits small flows.",
      "Flow climbs fast with head (to the 1.5 power for rectangular and trapezoidal, 2.5 for the V-notch), so a 0.05 ft error in a 0.3 ft reading can mean 25% error in flow. The crest must be sharp and the water must spring free with air under the nappe (Figure 3.18). If the downstream water is up against the crest, the weir is submerged and these formulas read high. Sediment piled up behind the weir also changes the reading.",
      "Weirs are cheap and accurate for farm ditches with enough drop. Flumes (Tables 3.3 and 3.4) need less drop and pass sediment better."
    ],
    qa: [
      { q: "We have a 3 foot rectangular weir and the gauge reads 0.6 feet. How much is coming in?", a: "Select rectangular, enter 3 ft and 0.6 ft. Flow is 4.64 cfs, about 2,080 gpm." },
      { q: "Our 2 foot Cipolletti reads 0.4 feet. What flow?", a: "Select trapezoidal, enter 2 ft and 0.4 ft. Flow is 1.71 cfs, about 765 gpm. Make sure the nappe is free with air under it, or the reading overstates the flow." },
      { q: "I want to measure a small tailwater return. Is a V-notch good for that?", a: "Yes. At 0.5 ft of head a 90° V-notch passes 0.44 cfs, about 200 gpm. At 0.8 ft it passes 1.43 cfs. The V shape keeps the head readable at small flows where a rectangular weir would show only a few hundredths of a foot." }
    ],
    figs: ["3.18"]
  },
  "tab-3.3": {
    more: [
      "Read the upstream head at the gauge in the converging section of the flume (about two-thirds of the way back from the throat on a Parshall), in feet from the floor of the crest. A stilling well or a staff gauge on the wall works. The table covers 0.25 to 2.0 ft of head, about 207 to 5,190 gpm, and the equation is Q = 3.95 H^1.55 in cfs.",
      "The rating holds only for free flow. If the downstream water backs up into the throat, the flume is submerged and reads high. For a 1 ft flume the standard limit is about 70% submergence, and above that you need the downstream head and a correction. Set the flume level in both directions, keep sediment and weeds out, and do not read the head in the throat itself.",
      "Use the flow in Eq. 3.3 or Eq. 3.1 for depth applied to the field."
    ],
    qa: [
      { q: "My 1 foot Parshall reads 0.8 feet. What flow do I have?", a: "Enter 0.8 ft. Flow is 2.80 cfs, about 1,250 gpm, between the 0.75 and 1.00 ft rows of Table 3.3." },
      { q: "It's only reading 0.35 at the head gauge this week. How much is that?", a: "Enter 0.35 ft. Flow is 0.78 cfs, about 350 gpm. That is less than a third of the 2.80 cfs you get at 0.8 ft, so if the order has not changed, check the headgate and the ditch for debris." },
      { q: "During the high run the gauge reads 1.2 feet and water is backing up behind the flume. Can I trust it?", a: "At 1.2 ft the free-flow rating gives 5.24 cfs, about 2,350 gpm. If the downstream water is up near the throat, the flume is likely submerged and the true flow is lower. Read the downstream gauge too before you report it." }
    ],
    figs: ["3.19"]
  },
  "tab-3.4": {
    more: [
      "Read the head on the wall gauge in the approach section upstream of the sill, in feet. The table covers 0.10 to 0.70 ft, about 29 to 860 gpm, with Q = 3.575 (H + 0.01259)^1.8419 in cfs. RBC flumes are long-throated flumes that fit small concrete-lined or pipe-fed ditches (Figure 3.20).",
      "The table assumes free flow. Long-throated flumes like the RBC tolerate more downstream submergence than a Parshall before the rating fails, which is why they suit flat ditches. Set the sill level, keep the approach clean, and read the gauge where the water surface is smooth. A wrong zero on the gauge is the most common error. Check that the gauge reads 0 when water just covers the sill.",
      "Use it for small farm deliveries and check the result against the tailwater or field meter."
    ],
    qa: [
      { q: "The 8 inch RBC flume reads 0.45 feet. How much water is that?", a: "Enter 0.45 ft. Flow is 0.86 cfs, about 390 gpm." },
      { q: "We set the flume for a small orchard ditch. It's reading a quarter foot. What flow?", a: "Enter 0.25 ft. Flow is 0.30 cfs, about 137 gpm, enough for three 45 gpm microsprinkler blocks running together." },
      { q: "Reading 0.6 feet. Is that still inside what the flume can measure?", a: "Yes, the table goes to 0.70 ft. Enter 0.6 and you get 1.45 cfs, about 650 gpm, the same as Table 3.4. Above 0.7 ft you need a larger flume." }
    ],
    figs: ["3.20"]
  },
  "tab-3.1": {
    more: [
      "Pick the conversion row and enter the amount in the first unit. The factors are the ones printed in Table 3.1: 1 ac-in = 27,154 gal, 1 ac-ft = 325,851 gal, 1 cfs = 449 gpm (450 for practical work), 1 ac-in/hr = 452 gpm, 1 L/s = 15.85 gpm.",
      "Most errors in water records are unit errors: acre-feet entered as acre-inches, gallons read as thousands of gallons, or cfs taken as cms. A quick check is that 450 gpm for 1 hour is about 1 ac-in. The book prints 1 cms = 16.7 L/min, which is a misprint, and the calculator notes the true value. Use the exact factors for permits and reports and the round numbers for field estimates.",
      "These conversions sit under every calculator in Chapter 3."
    ],
    qa: [
      { q: "My well permit says 2 acre-feet for the garden. How many gallons is that?", a: "Pick 1 ac-ft = 325,851 gal and enter 2. That is 651,702 gal." },
      { q: "The ditch rider says I'm getting 3 cfs. What is that in gpm?", a: "Pick 1 cfs = 449 gpm and enter 3. That is 1,347 gpm, close to 3 ac-in/hr." },
      { q: "The European pump spec says 30 liters per second. Will it run my 450 gpm drip system?", a: "Pick 1 L/s = 15.85 gpm and enter 30. That is 475.5 gpm, a little over 450, so it covers the system with a small margin." }
    ],
    figs: ["3.1"]
  }
});

window.CALC_USE2 = Object.assign(window.CALC_USE2 || {}, {
  "eq-4.1": {
    more: [
      "Available soil water at the start and end comes from sensor or sample readings converted to inches (Eq. 2.6 minus the wilting point water, or TAW minus SWD). Rain comes from a gauge at the field, irrigation from the flow meter (meter-depth), and runoff and run-on from what you see or estimate. The book says groundwater contribution can be ignored when the water table is more than 6 ft down, and deep percolation is often taken as zero unless there was a big rain or a large irrigation.",
      "The result is the crop's water use over the period. Divide by the days for a daily rate, and compare it with Kc times ETo from the weather network. The book puts one week as the shortest period that gives a usable answer, since sensor error is large compared with one day of ET. If the result looks too high, an unmeasured loss such as deep percolation or runoff is usually hiding in it. Use the same root depth for the start and end readings.",
      "This is the checkbook that Chapter 6 scheduling runs on (Figure 6.11). Here you run it backward to find ET from measured terms."
    ],
    qa: [
      { q: "My probes showed 5.2 inches available last Monday and 4.3 today. We got 0.6 of rain and put on an inch. What did the corn use?", a: "Enter 5.2, 4.3, 0.6 rain and 1.0 irrigation with the other terms at zero. ET is 2.5 in for the week, or 0.36 in/d. That is right in line with peak corn ET, so the probes and the meter agree." },
      { q: "We got 2.5 inches of rain in a week and the soil only went up 0.4 inch. Where did the water go?", a: "Enter 4.0 start, 4.4 end, 2.5 rain, an estimated 0.4 in of runoff and 0.5 in of deep percolation. ET comes out 1.2 in, about 0.17 in/d, which fits a cloudy, rainy week. The rest left as runoff and drainage. Without those two terms the balance would show an ET of 2.1 in, which is too high for that weather." },
      { q: "No rain and no irrigation for 10 days while we fixed the pivot. Soil went from 6.0 to 3.8 inches available. How fast was the crop using water?", a: "Enter 6.0 and 3.8 with everything else zero. ET is 2.2 in over 10 days, about 0.22 in/d. If the weather network showed crop ET near 0.30 in/d, the crop was likely starting to stress in the last few days." }
    ],
    figs: ["4.6", "4.7"]
  },
  "eq-4.2-4.7": {
    more: [
      "ETo comes from a weather network such as a state mesonet or the High Plains Regional Climate Center (Table 4.8), or from eto-daily if you have your own station. The book uses the short grass reference, so make sure the network reports grass ETo and not alfalfa ETr. Kc comes from crop-et, Table 4.3, or a local extension table for the same reference crop.",
      "Crop ET is the rate the crop is using water today, in the same units as ETo. Multiply by days for the amount used since the last irrigation or reading. Mixing a Kc meant for the alfalfa reference with grass ETo, or the other way around, is the most common error, and it can put the answer off by 15 to 25%. Peak corn ET typically runs 0.30 to 0.35 in/d in the Great Plains.",
      "Kc itself is built from Kco, Ks and Kw (Eq. 4.8). The crop-et calculator runs the whole chain."
    ],
    qa: [
      { q: "The mesonet says ETo was 0.30 yesterday. How much did my corn at full canopy use?", a: "Enter Kc 1.2 and ETo 0.30. Crop ET is 0.36 in/d. Over a week at that rate the crop uses about 2.5 in." },
      { q: "My beans just came up. ETo is a quarter inch. How much water are they using?", a: "Early season Kc is about 0.5 with some soil evaporation. Enter 0.5 and 0.25 and you get 0.125 in/d. That is under an inch a week, so do not irrigate on calendar dates yet." },
      { q: "Corn at Kc 1.15 and ETo averaging 0.28 a day. What should the pivot put on per week?", a: "Enter 1.15 and 0.28. Crop ET is 0.32 in/d, about 2.25 in a week net. At 85% efficiency the pivot has to apply about 2.65 in gross." }
    ],
    figs: ["4.1", "4.13"]
  },
  "eq-4.3": {
    more: [
      "This is the full Penman-Monteith form, used when you want to see each resistance and energy term. Net radiation comes from Eq. 4.6, vapor pressures from Eq. 4.5, the slope from Table 4.1 and the psychrometric constant from Table 4.2. For the grass reference, Allen et al. (1998) give aerodynamic resistance ra = 208 / u2 (u2 in m/s at 2 m) and surface resistance rs = 70 s/m. With daily data in MJ/m²/d the result is in mm/d. Divide by 25.4 for in/d.",
      "The defaults are the Example 4.1 weather and give 8.17 mm/d, or 0.32 in/d, close to the book's 0.31 from the charts. ET rises with net radiation and vapor pressure deficit and falls as resistance goes up. A higher rs mimics a surface that is not freely transpiring, which is why stressed or sparse crops use less than the reference. Use consistent units: the constants given work only with Rn in MJ/m²/d, resistances in s/m and λ in MJ/kg.",
      "Eq. 4.4 is the reduced form in US units. eto-daily runs that form from raw weather data."
    ],
    qa: [
      { q: "What does the full Penman-Monteith give for the Example 4.1 day?", a: "Leave the defaults (Rn 14.8 MJ/m²/d, es 3.29 kPa, ea 1.53 kPa, ra 37.2 s/m, rs 70 s/m). ETo is 8.17 mm/d, or 0.32 in/d. The book reads 0.31 in/d from the charts with Eq. 4.4." },
      { q: "How much does a calm day cut reference ET with the same sun and humidity?", a: "Calm air at 1.5 m/s gives ra = 208 / 1.5 = 139 s/m. Enter 139 for ra and ETo drops to 5.80 mm/d, about 0.23 in/d. Wind carries away the moist air, so less wind means less ET on the same sunny day." },
      { q: "If the surface resistance doubles because the grass is short of water, what happens?", a: "Enter rs 140 s/m. ETo falls from 8.17 to 6.18 mm/d, about 0.24 in/d. That is the same idea as the stress factor Ks in Eq. 4.8: a crop that cannot move water freely uses less." }
    ],
    figs: ["4.8", "4.5"]
  },
  "eq-4.4": {
    more: [
      "The inputs come from a weather station: mean temperature in °F, daily wind run at 2 m in mi/d (mph times 24), net radiation from Eq. 4.6, es and ea from Eq. 4.5. Use the slope from Table 4.1 at the mean temperature and the psychrometric constant from Table 4.2 for the site elevation. The result is short grass reference ET in in/d.",
      "The radiation term is driven by sunlight and the aerodynamic term by wind and dry air. In humid, calm places like the Mid-Atlantic, the radiation term dominates. In windy, dry places like eastern Colorado, the aerodynamic term can be larger than the radiation term. Typical summer values run 0.20 to 0.35 in/d, and Table 4.8 shows 0.16 to 0.38 in/d over two weeks in July. Wind from a 10 m tower reads higher than at 2 m and inflates the aerodynamic term, so correct it before entering.",
      "The book also gives this procedure as Figures 4.11 and 4.12. eto-daily strings all the steps together."
    ],
    qa: [
      { q: "Run the Example 4.1 June day through the equation.", a: "Leave the defaults. The radiation term is 0.12 in/d, the aerodynamic term 0.20 in/d, and ETo 0.32 in/d. The book reads 0.12 plus 0.19 for 0.31 in/d from the charts." },
      { q: "Same day but dead calm, 100 miles of wind. What changes?", a: "Enter 100 mi/d. ETo drops to 0.24 in/d, with the aerodynamic term falling from 0.20 to 0.08. A calm day takes almost a quarter off the crop's water use." },
      { q: "A muggy day in Delaware, dew point near 70 so ea is 2.5 kPa. How much does the humidity cut it?", a: "Keep the other defaults and enter ea 2.5 kPa. The aerodynamic term falls to 0.09 in/d and ETo to 0.21 in/d. Humid air takes about a third off reference ET compared with the dry Example 4.1 air." }
    ],
    figs: ["4.11", "4.12"]
  },
  "eq-4.5": {
    more: [
      "Enter the daily maximum and minimum air temperature and the dew point from a weather station. If the station reports relative humidity instead of dew point, use the dew point from the station software or a psychrometric table. Choose Table 4.1 values to match the book or the FAO-56 equations for exact values.",
      "Saturation vapor pressure es is the average of e° at Tmax and e° at Tmin, not e° at the mean temperature. In Example 4.1 that is 3.29 kPa, while e° at 75 °F is only 2.96. The vapor pressure deficit (es minus ea) drives the aerodynamic term of Eq. 4.4. Values near 1 kPa are typical of humid summer days, and 2 kPa or more of dry western days. A dew point well above the minimum temperature points to a sensor problem.",
      "es and ea feed Eq. 4.3 and 4.4 and fig-4.10. ea also gives minimum relative humidity in Eq. 4.10."
    ],
    qa: [
      { q: "Hot dry day, 95 high, 65 low, 60 dew point. What is the vapor pressure deficit?", a: "Enter 95, 65 and 60. es is 3.87 kPa, ea 1.77 kPa, deficit 2.10 kPa. That is a high-demand day, so expect ET well above average." },
      { q: "Typical Delaware July, 88 and 70 with a 70 dew point. How does it compare?", a: "Enter 88, 70 and 70. es is 3.52 kPa, ea 2.50 kPa, deficit 1.02 kPa. Half the deficit of the dry day, so reference ET leans on radiation and runs lower." },
      { q: "Colorado July, 90 and 55, dew point 40. What deficit?", a: "Enter 90, 55 and 40. es is 3.15 kPa, ea 0.84 kPa, deficit 2.31 kPa. Dry air like that is why ET climbs so fast in windy weather on the High Plains." }
    ],
    figs: ["4.12"]
  },
  "eq-4.6": {
    more: [
      "Solar radiation comes from a pyranometer on the weather station, in MJ/m²/d. Some networks report Langleys per day (Table 4.8), and 1 Ly/d = 0.04184 MJ/m²/d. Albedo is 0.23 for the grass reference. Net outgoing long-wave radiation comes from fig-4.10.",
      "Net radiation is the energy left to evaporate water and heat the air and soil. Clear summer days run about 14 to 16 MJ/m²/d, and cloudy days drop below 10. The book prints Eq. 4.6 with Rn on both sides, and Example 4.1 shows the intended form, Rn = (1 - α) Rs - Rnl. Check that Rs on clear days is close to clear-sky radiation (fig-4.9). A dirty or tilted sensor reads low and pulls ETo down.",
      "Rn goes into Eq. 4.3 and Eq. 4.4."
    ],
    qa: [
      { q: "Overcast day, solar only 15 MJ and long-wave about 2. What is net radiation?", a: "Enter Rs 15, albedo 0.23, Rnl 2. Rn is 9.55 MJ/m²/d, about two-thirds of a clear day. Expect reference ET to drop by a similar share." },
      { q: "Clear dry Colorado day, 28 MJ of sun with 6 MJ of long-wave out. What's left?", a: "Enter 28 and 6. Rn is 15.6 MJ/m²/d. The dry air pulls more long-wave out, so a lot of the extra sun is lost before it reaches the crop." },
      { q: "Table 4.8 says 559 Langleys for July 2. How do I use that?", a: "559 Ly/d times 0.04184 is 23.4 MJ/m²/d. With Rnl about 3, Rn is 15.0 MJ/m²/d." }
    ],
    figs: ["4.5", "4.10"]
  },
  "fig-4.9": {
    more: [
      "Enter the date, the latitude from a map or phone, and the elevation in feet. The calculator finds the day of year, extraterrestrial radiation Ra, and clear-sky radiation Rso = (0.75 + 2x10⁻⁵ z) Ra with z in meters, the FAO-56 relation behind Figure 4.9.",
      "Rso is the most sun the site can get on a clear day. The ratio of measured Rs to Rso tells you how cloudy the day was, and it drives net long-wave radiation in fig-4.10. A station whose clear-day readings sit 5 to 10% above Rso all summer has a sensor out of calibration or off level. Use a negative latitude in the southern hemisphere. Higher elevation gives higher Rso, since there is less air to pass through.",
      "Feed Rso to fig-4.10 and eto-daily."
    ],
    qa: [
      { q: "What is clear-sky radiation for Georgetown, Delaware, on July 15?", a: "Select Jul, day 15, latitude 38.7, elevation 50 ft. Ra is 40.8 and Rso 30.6 MJ/m²/d. A clear day there should read close to 30 on the station pyranometer." },
      { q: "Same date in Fort Collins, 40.6 north and about 5,000 feet?", a: "Enter 40.6 and 5,000 ft. Rso is 31.8 MJ/m²/d. The extra elevation adds about 4% over the Delaware value, even though Ra is nearly the same." },
      { q: "Our station read 29 on a clear April 15 in Fort Collins. Is the sensor right?", a: "Select Apr, day 15, 40.6, 5,000 ft. Rso is only 26.9 MJ/m²/d. A clear-day reading of 29 is 8% too high, so clean and level the sensor and check its calibration." }
    ],
    figs: ["4.9"]
  },
  "fig-4.10": {
    more: [
      "Enter the day's maximum and minimum temperature, the dew point, measured solar radiation, and clear-sky radiation from fig-4.9. The calculator follows the FAO-56 relation drawn in Figure 4.10 and reproduces Example 4.1: 38.3 MJ/m²/d of black-body radiation, 11.7% emitted, and 4.5 MJ/m²/d net long-wave.",
      "Net long-wave loss is larger on clear, dry days and smaller on cloudy or humid days, because clouds and water vapor send long-wave back down. Typical values run 2 to 8 MJ/m²/d. A ratio of Rs to Rso above 1.0 usually means the Rso input is wrong. Use the same temperature units as the station reports.",
      "The result goes into Eq. 4.6 for net radiation."
    ],
    qa: [
      { q: "Humid Delaware day, 88 and 70, dew point 70, solar 24 against a clear-sky 30.6. What is the long-wave loss?", a: "Enter those values. Black-body radiation is 39.4 MJ/m²/d, the emitted fraction 8.4%, and Rnl 3.3 MJ/m²/d. The humid air holds the loss down." },
      { q: "Dry Colorado day, 90 and 55 with a 40 dew point, solar 30 against 31.8 clear-sky.", a: "Enter those values. The emitted fraction rises to 19.6% and Rnl to 7.4 MJ/m²/d, more than twice the Delaware value. Dry, clear air loses heat fast." },
      { q: "Cloudy day here, solar only 12. Does long-wave still matter?", a: "With 85 and 68, dew point 66, solar 12, Rso 30.6, the calculator gives Rnl 0.9 MJ/m²/d. Clouds nearly cancel the long-wave loss, so net radiation is mostly the 77% of solar that is absorbed." }
    ],
    figs: ["4.10"]
  },
  "eto-daily": {
    more: [
      "Get the daily maximum, minimum and dew point temperature, solar radiation, and wind run at 2 m from your own station or a network download, plus the site elevation and latitude. If wind comes as average mph, multiply by 24 for mi/d. If solar comes in Langleys, multiply by 0.04184 for MJ/m²/d. The calculator runs the full Example 4.1 sequence: clear-sky radiation, long-wave, net radiation, vapor pressures, then Eq. 4.4.",
      "The result is short grass reference ET in in/d, with the radiation and aerodynamic parts shown. Compare it with what the weather network reports for the same day. A big difference usually means wind measured at a different height or a dirty pyranometer. A day at 0.20 to 0.25 in/d is ordinary summer weather in humid regions, and 0.35 in/d or more is a high-demand day.",
      "Multiply by Kc (eq-4.2-4.7 or crop-et) for crop ET."
    ],
    qa: [
      { q: "Typical July 15 near Georgetown, Delaware: 88 high, 70 low, dew point 70, 24 MJ of sun, 150 miles of wind, 50 feet elevation. What ETo?", a: "Enter those with latitude 38.7 and Jul 15. ETo is 0.22 in/d, with 0.15 from radiation and 0.07 from wind and dry air. Corn at Kc 1.2 would use about 0.26 in/d." },
      { q: "Same date in Fort Collins: 90 and 55, dew point 40, 30 MJ, 250 miles of wind, 5,000 feet, latitude 40.6.", a: "ETo is 0.37 in/d, with the aerodynamic term (0.23) now larger than the radiation term (0.14). The dry air and wind make Colorado's demand about 70% higher than Delaware's on a similar summer day." },
      { q: "A windy day in Fort Collins blows 500 miles. How much higher does it go?", a: "Change wind to 500 mi/d. ETo rises to 0.47 in/d. On days like that a 0.34 in/d pivot loses ground fast, so start the system before the wind arrives." }
    ],
    figs: ["4.9", "4.10", "4.11", "4.12"]
  },
  "eq-4.8": {
    more: [
      "The basal coefficient Kco comes from eq-4.11-4.12 for the stage of the crop. The stress factor Ks comes from soil water (eq-4.10-p68), and the wet soil factor Kw from the time since the last rain or irrigation (eq-4.11-p69). Use Ks = 1 for a well-watered crop and Kw = 0 when the surface has been dry for longer than the drying time in Table 4.6.",
      "Kc is the number you multiply by ETo. Under full canopy, Kc is close to Kco, since the crop shades the soil and Kw is small. On a young crop, Kw after a wetting can be larger than Kco, so frequent light irrigations raise water use mostly by wetting the soil. When Ks falls below 1, the crop is using less than it could, which also cuts yield.",
      "crop-et combines all of these in one step."
    ],
    qa: [
      { q: "My corn's basal coefficient is 1.2 but the soil is getting dry, Ks about 0.7. What crop coefficient do I use?", a: "Enter Kco 1.2, Ks 0.7, Kw 0. Kc is 0.84, so the crop is using 30% less water than it would if it were well watered." },
      { q: "Young soybeans at Kco 0.4. We watered yesterday, Kw is 0.5. What is the crop coefficient?", a: "Enter 0.4, 1, 0.5. Kc is 0.90, more than twice the dry-surface value. Most of that water is evaporating from the soil surface." },
      { q: "Bare soil just after rain, Kco 0.15 and Kw 0.6. Is the field really losing that much?", a: "Enter 0.15, 1, 0.6. Kc is 0.75. For a day or two after a wetting, bare soil evaporates at three-quarters of the reference rate, then drops off fast as the surface dries." }
    ],
    figs: ["4.13"]
  },
  "eq-4.9": {
    more: [
      "Take the peak and harvest values from Table 4.3 for the crop. Find Kcf from Table 4.4 using the crop height and the average wind run and average minimum relative humidity for that part of the season (Eq. 4.10). The book is clear that you use average climate for the time of year, not daily values.",
      "Dry, windy climates raise the peak coefficient of tall crops, and humid, calm climates lower it. In Example 4.2, corn's peak goes from 1.15 to 1.21 and harvest from 0.15 to 0.08. The initial value Kci is not adjusted. Set the adjustment once per season for a location.",
      "The adjusted values go into eq-4.11-4.12 to build the seasonal Kco curve."
    ],
    qa: [
      { q: "Example 4.2 corn. What are the adjusted coefficients?", a: "Enter 1.15, 0.15, 0.06 and -0.07. Kcp is 1.21 and Kcm 0.08, as in the book." },
      { q: "Soybeans in Delaware: humid and calm, Kcf about -0.02 midseason and -0.03 at harvest. What do I use?", a: "Table 4.3 soybeans are 1.10 peak and 0.30 harvest. Enter 1.10, 0.30, -0.02, -0.03. Kcp is 1.08 and Kcm 0.27. In a humid climate the adjustment slightly lowers the coefficients." },
      { q: "Corn in eastern Colorado: 8 foot crop, 250 miles of wind, RH around 25 percent. How much higher is peak?", a: "Table 4.4 gives Kcf about 0.17. Enter 1.15 and 0.15 with 0.17 at midseason and 0.01 at harvest. Kcp is 1.32, about 15% above the table value, enough to matter for a pivot sized close to the edge." }
    ],
    figs: ["4.14"]
  },
  "eq-4.10": {
    more: [
      "Use the average dew point and average maximum temperature for the part of the season you are adjusting, from a nearby weather station's monthly summary. Pick Table 4.1 values to match the book or the FAO-56 equations.",
      "Minimum relative humidity is the afternoon low, when the crop is using the most water. It goes into Table 4.4 for the Kcf adjustment. Values near 20 to 30% are typical of the dry West in summer, and 50 to 60% of humid regions. Do not use a single day's reading.",
      "The result is an input to tab-4.4 and then to Eq. 4.9."
    ],
    qa: [
      { q: "Example 4.2 midseason, 90 high with a 65 dew point. What is RH min?", a: "Enter 65 and 90. RHmin is 44%, as in the book." },
      { q: "Delaware July averages, 88 high, 70 dew point. What RH min goes in the table?", a: "Enter 70 and 88. RHmin is 55%. Humid air like that brings Kcf close to zero or below for most crops." },
      { q: "Colorado July, 90 and 40 dew point?", a: "Enter 40 and 90. RHmin is 17%, below the table's lowest column of 20%, so Table 4.4 holds it at the 20% column." }
    ],
    figs: []
  },
  "eq-4.11-4.12": {
    more: [
      "Fraction of season is days since planting divided by days from planting to harvest, or cumulative GDD divided by GDD to maturity (Eq. 4.13). Kci and the three stage fractions FS1, FS2 and FS3 come from Table 4.3. Kcp and Kcm are the adjusted values from Eq. 4.9.",
      "The calculator picks the stage: flat at Kci in the initial stage, a straight rise to Kcp through vegetative growth, flat at peak through midseason, and a straight drop to Kcm through maturity (Figure 4.14). If the crop is harvested green, Kco stays at peak until harvest. A late planting or slow spring shifts the curve, which is why GDD often tracks the crop better than calendar days.",
      "The result goes into Eq. 4.8 with Ks and Kw."
    ],
    qa: [
      { q: "Example 4.3 corn on September 15. What is the basal coefficient?", a: "Enter Fs 0.90 with the default corn values. Kco is 0.47 in the maturing stage, as in the book." },
      { q: "Soybeans a quarter of the way through the season, Kcp 1.08. Where is the coefficient?", a: "Use the Table 4.3 soybean fractions 0.14, 0.39, 0.82 with Kci 0.15, Kcp 1.08, Kcm 0.27 and Fs 0.25. Kco is 0.56 in the vegetative stage, about half of peak. Water use will double over the next few weeks." },
      { q: "Late season beans at 90 percent of the season. Can I back off the water?", a: "Same soybean values with Fs 0.90. Kco is 0.72, down from 1.08. Water use has dropped by a third, so stretch the interval but keep enough soil water to finish filling the pods." }
    ],
    figs: ["4.14", "4.13"]
  },
  "eq-4.10-p68": {
    more: [
      "Current water content comes from a sensor or sample. Field capacity and wilting point come from Table 2.3 or a lab curve. The critical threshold frc for the crop is in Table 4.3, from 0.35 for cotton to 0.80 for rice. Kco comes from eq-4.11-4.12 and ETo from the weather network.",
      "Ks = fr / frc when fr is below frc, and 1 above it (Figure 4.15). When Ks drops below 1, the crop is short of water, using less than it could, and losing yield. Sensitive crops such as potato (frc 0.65) stress at a much wetter soil than tolerant crops like cotton. Book Example 4.4 gives Ks = 0.56 and ET = 0.20 in/d.",
      "Ks goes into Eq. 4.8. fr comes from Eq. 2.10."
    ],
    qa: [
      { q: "Example 4.5: two fields, one at 0.22 and one at 0.12. How different is their water use?", a: "With fc 0.25, wp 0.10, frc 0.35, Kco 1.1 and ETo 0.30, field A gives fr 0.80, Ks 1, ET 0.33 in/d. Field B gives fr 0.13, Ks 0.38, ET 0.13 in/d. The book rounds to 0.37 and 0.12. Field B is using less than half of what A uses and is losing yield." },
      { q: "Corn on silt loam reads 0.19. Is it stressed yet?", a: "Enter 0.19, 0.30, 0.12, frc 0.45, Kco 1.21, ETo 0.30. fr is 0.39, Ks 0.86 and ET 0.31 in/d against 0.36 unstressed. The crop is already 14% short, so irrigate now." },
      { q: "Potatoes on sandy loam at 0.14. Fifty percent depleted is normal, right?", a: "Enter 0.14, 0.20, 0.08, frc 0.65, Kco 1.1, ETo 0.28. fr is 0.50 but potatoes stress below 0.65, so Ks is 0.77 and ET 0.24 in/d. For potatoes, irrigate at about 35% depletion." }
    ],
    figs: ["4.15"]
  },
  "eq-4.11-p69": {
    more: [
      "Fw is the fraction of soil surface wetted (Table 4.5): 1.0 for rain and overhead sprinklers, 0.5 for LEPA or alternate furrows, 0.25 for surface drip, 0 for normal subsurface drip. Drying time td comes from Table 4.6, from 2 days for sand to 10 days for clay. Kcf is the climate adjustment from Table 4.4, and t is days since the last wetting.",
      "Kw adds soil evaporation on top of the basal coefficient. It is large on young crops and right after wetting, and it fades to zero once t reaches td. Under full canopy Kw is small, since there is little room between Kcmax (1.2 plus Kcf) and Kco. The total evaporation from a wetting should not exceed the water that wetted the surface, so do not apply a large Kw for days after a light shower.",
      "Kw goes into Eq. 4.8."
    ],
    qa: [
      { q: "Young crop at Kco 0.3, silt loam, sprinkled yesterday. How much extra water goes to evaporation?", a: "Enter Fw 1, Kcf 0, Kco 0.3, t 1, td 5. ft is 0.55 and Kw 0.50. Kc goes from 0.3 to 0.8, so most of today's ET is from the wet soil surface." },
      { q: "Same crop on surface drip. What changes?", a: "Enter Fw 0.25 with the same values. Kw is 0.12, a quarter of the sprinkler value. That is one reason drip saves water on young crops." },
      { q: "Full canopy corn at Kco 1.21 with Kcf 0.06, sprinkled yesterday. Does wet soil matter now?", a: "Enter Fw 1, Kcf 0.06, Kco 1.21, t 1, td 5. Kcmax is 1.26 and Kw only 0.03. Under full canopy the wet surface adds very little." }
    ],
    figs: ["4.3", "4.13"]
  },
  "eq-4.12-p71": {
    more: [
      "Enter daily maximum and minimum temperatures in °F from a weather station near the field, separated by commas, starting the day after planting. Use a base of 50 °F for corn and other warm season crops, and 40 °F for wheat and barley as the book suggests, or the base your seed company uses. Each day the high is capped at 86 °F and the low is raised to the base before averaging.",
      "The total is the heat the crop has received since planting. Seed companies list GDD to maturity (black layer for corn), so you can tell where the crop is in its season even in a cool or hot year. Days with a mean below the base add zero. A small difference from a network's GDD usually comes from rounding or a slightly different cap rule. The calculator gives 334 for the 14 days of Table 4.8, while the table's own column adds to 336.",
      "Divide the total by GDD to maturity (Eq. 4.13) for fraction of season."
    ],
    qa: [
      { q: "Table 4.8, first three days of July. How many GDD?", a: "Enter 89.5, 87.5, 88.4 for highs and 63.9, 63.1, 64.6 for lows, base 50. The total is 74.8, with daily values 25.0, 24.5 and 25.3, matching the table's 25 per day." },
      { q: "We had a heat wave, 95 and 92 for highs, lows of 72 and 68, then a cool day 78 and 48. Did the corn get extra credit for the heat?", a: "Enter those values. Highs are capped at 86, and the cool day's low is raised to 50. Daily GDD are 29, 27 and 14, for a total of 70. The cap means the heat wave does not push the crop ahead as much as the thermometer suggests." },
      { q: "Early spring wheat days, 58 and 62 highs, lows 38 and 41. How much did the wheat get?", a: "Enter those with base 40 and you get 20.5 GDD. With base 50 the same days give only 10. Use the right base for the crop, or a cool spring looks like no growth at all." }
    ],
    figs: []
  },
  "eq-4.13": {
    more: [
      "GDD to date comes from eq-4.12-p71 or a weather network. GDD to maturity comes from the seed bag or seed company data for the hybrid or variety, for example 2,600 to 2,800 GDD to black layer for a full-season corn hybrid.",
      "Fs replaces days since planting in the Kco curve. It follows the crop better than the calendar in years with an odd spring. Book Example 4.3 shows Fs = 0.30 on June 15 by calendar days, and GDD can move that earlier or later. Use the same base temperature and cap for both numbers.",
      "Fs goes into eq-4.11-4.12 or crop-et."
    ],
    qa: [
      { q: "My corn has 1,200 GDD and the hybrid needs 2,700. Where is it in the season?", a: "Enter 1,200 and 2,700. Fs is 0.44. On corn's Table 4.3 curve that is just past effective cover (0.41), so the crop is at peak water use." },
      { q: "450 GDD on a 2,600 GDD hybrid. Is it time to start watering hard?", a: "Enter 450 and 2,600. Fs is 0.17, still in the initial stage (0.18). Water use is mostly soil evaporation, so keep irrigations light." },
      { q: "We are at 2,100 of 2,700 GDD. Can we start cutting back?", a: "Enter 2,100 and 2,700. Fs is 0.78, past the 0.71 where corn starts maturing. Kco is dropping, so stretch the interval and plan the last irrigation from soil water and days to black layer." }
    ],
    figs: ["4.14"]
  },
  "eq-4.14-4.15": {
    more: [
      "Pick the species, density and microclimate factors from Table 4.7 for the area, and get ETo from the weather network. Density is lower when canopy cover is under 60%, and trees at 25% cover or less use 0.5. Microclimate is high (1.0 to 1.4) for medians, parking lots and west or south exposures, and low (0.5 to 1.0) for north sides, courtyards and shade.",
      "KL estimates the water needed to keep the landscape looking acceptable, not the most it could use. That makes it a planning and budget number for a landscape irrigation schedule or water budget. Split a property into zones with different KL instead of averaging the whole site. Multiply ET by the zone area for volume.",
      "tab-4.7 looks up the factors for you. Figure 4.17 shows high and low density and microclimate."
    ],
    qa: [
      { q: "The city wants a water budget for turf on a parking lot median. ETo is a quarter inch. What do we plan for?", a: "Turf with high species factor 0.8, average density 1.0 and high microclimate 1.2 gives KL 0.96. Enter those with ETo 0.25 and ET is 0.24 in/d." },
      { q: "Mixed beds with average species and a bit more density, KD 1.1. ETo 0.22. How much water?", a: "Enter 0.5, 1.1, 1.0, 0.22. KL is 0.55 and ET 0.12 in/d, about half of the turf need." },
      { q: "Shaded turf on the north side of a building, low species factor 0.6 and microclimate 0.8. ETo 0.20.", a: "Enter 0.6, 1.0, 0.8, 0.20. KL is 0.48 and ET 0.096 in/d. That is about 70% of average turf in the open (KL 0.7), so give it its own valve and schedule." }
    ],
    figs: ["4.17", "4.16"]
  },
  "crop-et": {
    more: [
      "Select the crop from Table 4.3, enter the Kcf adjustments from Table 4.4 for your climate, days (or GDD) since planting and to harvest, today's ETo, the fraction of available water remaining from a sensor (Eq. 2.10), how the field was last wetted, the soil texture, and days since that wetting. The calculator runs the whole chain from Fs to crop ET.",
      "The outputs show where the water is going: Kco is the crop, Ks shows any stress, and Kw shows extra soil evaporation. The default is Example 4.3 corn on June 15 with a dry surface and no stress, which gives 0.21 in/d at 0.30 in/d ETo. If Ks drops below 1, irrigate. If Kw is large early in the season, lighter, less frequent wettings will save water. Set fr to 1 if you only want the unstressed rate.",
      "Multiply by days for the depletion since the last irrigation, and compare with the allowable depletion in Chapter 6."
    ],
    qa: [
      { q: "Corn planted May 1, 153 day season. What is it using on July 15 with ETo at 0.30?", a: "Enter 76 days since planting with the defaults. Fs is 0.50, Kco 1.21, and ET 0.36 in/d with no stress or wet soil." },
      { q: "Same field, but the probe says only 30 percent of the available water is left.", a: "Set fr to 0.30. Ks drops to 0.67 and ET to 0.24 in/d. The crop is a third short of full water use, which costs yield in July. Irrigate now." },
      { q: "Corn at 20 days, sandy loam, sprinkled yesterday. How much is it using?", a: "Enter 20 days, above canopy sprinklers, sandy loam, 1 day since wetting. Kco is only 0.15, but Kw is 0.56, so Kc is 0.71 and ET 0.21 in/d. Almost all of it is evaporation from the wet soil, so light frequent sprinklings this early waste water." }
    ],
    figs: ["4.13", "4.14", "4.15"]
  },
  "tab-4.1": {
    more: [
      "Enter an air temperature in °F. The table gives saturation vapor pressure and the slope of the curve, interpolated, and the calculator also shows the FAO-56 equation values for comparison. The two agree within about 0.01 kPa.",
      "Use e° at Tmax and at Tmin and average them for es (Eq. 4.5). Use e° at the dew point for the actual vapor pressure ea. Use the slope at the mean temperature in Eq. 4.4. Do not take es as e° at the mean temperature, since the curve bends and that underestimates es by about 10% on a typical summer day.",
      "These values feed Eq. 4.4, 4.5 and 4.10."
    ],
    qa: [
      { q: "What slope do I use for a 75 degree mean day?", a: "Enter 75. Δ is 0.178 kPa/°C and e° is 2.96 kPa, as used in Example 4.1." },
      { q: "Dew point is 40. What is the actual vapor pressure?", a: "Enter 40. e° is 0.84 kPa, and since ea is e° at the dew point, ea = 0.84 kPa." },
      { q: "Mean temperature 72.5 is between table rows. What do I use?", a: "Enter 72.5. The calculator interpolates to e° 2.73 kPa and Δ 0.166, matching the FAO-56 equation values." }
    ],
    figs: []
  },
  "tab-4.2": {
    more: [
      "Enter the site elevation in feet from a topo map, a GPS unit, or the weather station metadata. The table interpolates the psychrometric constant, and the calculator also shows the FAO-56 equation value.",
      "γ falls with elevation because air pressure drops. It changes slowly, so an elevation within a few hundred feet is good enough. Using the sea-level value at a high-elevation site changes ETo by a few percent.",
      "γ goes into Eq. 4.3 and 4.4."
    ],
    qa: [
      { q: "What psychrometric constant do I use near sea level in Delaware, about 50 feet?", a: "Enter 50. γ is 0.0669 kPa/°C." },
      { q: "Fort Collins is about 5,000 feet. What value?", a: "Enter 5,000. γ is 0.056 kPa/°C, about 16% lower than at sea level." },
      { q: "Our station is at 4,250 feet, between table rows.", a: "Enter 4,250. The calculator interpolates 0.0575 kPa/°C, and the FAO-56 equation gives 0.0578." }
    ],
    figs: []
  },
  "tab-4.3": {
    more: [
      "Pick the crop. The table gives the initial, peak and harvest basal coefficients, the season fractions for the start of canopy growth, effective cover and start of maturity, and the soil water stress threshold frc. Values are adapted from Allen et al. (1998) for the short grass reference.",
      "Adjust the peak and harvest values for climate with Table 4.4 and Eq. 4.9. Locally developed coefficients are better when they exist and are reliable. The frc column shows how sensitive the crop is: 0.35 for cotton is tolerant, 0.65 for potato and carrot is sensitive. Crops harvested green, like silage, alfalfa or sweet corn, have a high harvest coefficient because they never senesce.",
      "These values feed eq-4.9, eq-4.11-4.12, eq-4.10-p68 and crop-et."
    ],
    qa: [
      { q: "What coefficients do I use for soybeans?", a: "Select Soybeans. Kci 0.15, Kcp′ 1.10, Kcm′ 0.30, fractions 0.14, 0.39, 0.82, and frc 0.50. Adjust the peak and harvest values for climate before you use them." },
      { q: "We grow potatoes. When does stress start?", a: "Select Potato. frc is 0.65, so stress starts once 35% of available water is gone. Schedule irrigations to keep potatoes above that." },
      { q: "Alfalfa after the first cutting. Why does the harvest coefficient stay high?", a: "Select Alfalfa, later cuttings. Kcp′ is 1.15 and Kcm′ 1.10. The crop is cut before it senesces, so water use stays near peak until the swather. Plan irrigations around the cutting schedule." }
    ],
    figs: ["4.14"]
  },
  "tab-4.4": {
    more: [
      "Enter the crop height at midseason or harvest, the average wind run in mi/d, and the average minimum relative humidity from Eq. 4.10, all for that time of year. The calculator interpolates between the table rows and columns. Heights over 8 ft use the 6 ft values times the height multiplier.",
      "Kcf is the amount you add to the peak or harvest coefficient. Positive values are for dry and windy conditions, negative for humid and calm. Tall crops are adjusted more than short ones. Inputs outside 50 to 350 mi/d and 20 to 80% RH are held at the table edge.",
      "Kcf goes into Eq. 4.9 and to Kcmax in eq-4.11-p69."
    ],
    qa: [
      { q: "Example 4.2 corn: 8 feet tall, 200 miles of wind, 44 percent RH. What adjustment?", a: "Enter 8, 200, 44. Kcf is 0.064, which the book rounds to 0.06." },
      { q: "Corn in Delaware: 8 feet, 150 miles of wind, RH about 60. What adjustment?", a: "Enter 8, 150, 60. Kcf is -0.03, so peak Kco drops from 1.15 to 1.12. Humid, calm air lowers corn's water use slightly." },
      { q: "Corn on the Colorado plains: 8 feet, 250 miles of wind, RH 25. How big is the adjustment?", a: "Enter 8, 250, 25. Kcf is 0.17, so peak Kco rises to 1.32. Size and schedule for 1.32 rather than the table's 1.15." }
    ],
    figs: []
  },
  "tab-4.5": {
    more: [
      "Pick how the soil surface was last wetted. Rain and overhead sprinklers wet it all, in-canopy sprinklers 75%, LEPA and alternate furrows half, surface drip a quarter, and normal subsurface drip none.",
      "Fw scales the wet-soil evaporation term. It matters most when the crop is small. A field wetted by rain after drip irrigation uses the rain value, since the last wetting sets the fraction. Use the actual wetted pattern if it differs a lot from the typical value, for example drip on a sandy soil wets less than on a loam.",
      "Fw goes into eq-4.11-p69 and crop-et."
    ],
    qa: [
      { q: "What fraction of my field gets wet with surface drip?", a: "Select surface trickle or drip. Fw is 0.25. Only a quarter of the soil surface loses water to evaporation after an irrigation." },
      { q: "We converted the pivot to LEPA drag hoses. How much wet soil does that leave?", a: "Select LEPA. Fw is 0.5, half of the 1.0 for above canopy sprinklers. On a young crop that cuts the wet-soil evaporation term in half." },
      { q: "Our subsurface drip is buried 12 inches. Any surface evaporation?", a: "Select subsurface drip, normal applications. Fw is 0. With large applications that wet to the surface, use 0.1." }
    ],
    figs: []
  },
  "tab-4.6": {
    more: [
      "Pick the surface soil texture and enter the days since the last wetting. The table gives the drying time td and the decay function ft = 1 - √(t / td), which reproduces every table value.",
      "Sandy soils dry quickly (2 days for sand) and clays slowly (10 days). ft starts at 1 right after wetting and drops to 0 at td. Local observation of how fast your surface dries can replace the table value.",
      "ft and td go into eq-4.11-p69 and crop-et."
    ],
    qa: [
      { q: "Sandy loam, one day after a rain. How much of the wet-soil effect is left?", a: "Select sandy loam, 1 day. td is 4 days and ft 0.50, half the wet-soil effect." },
      { q: "Clay, three days after watering. Is the surface still evaporating?", a: "Select clay, 3 days. td is 10 days and ft 0.45, so the surface is still losing water near half the wet rate." },
      { q: "Sand one day after a shower?", a: "Select sand, 1 day. ft is 0.29 and td only 2 days. By tomorrow the surface is dry and evaporation stops." }
    ],
    figs: ["4.3"]
  },
  "tab-4.7": {
    more: [
      "Pick the vegetation type and the high, average or low level for species, density and microclimate from a site walk. Enter ETo from the weather network. The calculator returns each factor, KL and landscape ET.",
      "Use high density for full multi-layer plantings and low for young or sparse ones. Trees with 25% canopy cover or less use 0.5. Microclimate is high next to pavement, west walls and windy gaps, and low in shade and courtyards. Treat each hydrozone separately, since lumping a shaded bed with a parking lot island over-waters one and under-waters the other.",
      "The factors are the same as in eq-4.14-4.15. The table just looks them up."
    ],
    qa: [
      { q: "Turf on a hot parking lot median, high water use species, ETo 0.25. What do we budget?", a: "Select turf grass, species high, density average, microclimate high. KL is 0.96 and ET 0.24 in/d." },
      { q: "Young trees in a parking lot, sparse cover, average species. ETo 0.25.", a: "Select trees, species average, density low, microclimate high. KP 0.5, KD 0.5, KM 1.4, KL 0.35 and ET 0.09 in/d." },
      { q: "Low-water shrubs on the north side of the building, ETo 0.25.", a: "Select shrubs, species low, density average, microclimate low. KL is 0.10 and ET only 0.025 in/d, under 0.2 in a week. Most weeks that bed needs no irrigation at all." }
    ],
    figs: ["4.17", "4.16"]
  },
  "tab-4.8": {
    more: [
      "Pick a date to see the High Plains Regional Climate Center record the book uses: temperatures, dew point, wind in mph, solar radiation in Langleys per day, rain, grass ETo, and growing degree units. Multiply wind by 24 for mi/d and solar by 0.04184 for MJ/m²/d before you run them through eto-daily.",
      "The two weeks show how much ETo moves day to day, from 0.16 in/d on the cloudy July 14 to 0.38 in/d on the windy July 8. The 14 days add up to 3.66 in of ETo against 0.94 in of rain, so irrigation had to make up most of the demand. Use records like this to check your own station or network data.",
      "The data feed eto-daily, eq-4.12-p71 and the water balance (Eq. 4.1)."
    ],
    qa: [
      { q: "Why was July 8 so high at 0.38?", a: "Select July 8. Wind averaged 11.4 mph (274 mi/d) with 643 Ly (26.9 MJ/m²/d) of sun and a 92.2 high. Wind and sun together push ETo up even with a 0.62 in rain that day." },
      { q: "What about July 14 at only 0.16?", a: "Select July 14. Solar was 407 Ly (17.0 MJ/m²/d) and the high only 77.8. A cloudy, cool day brings ETo down to less than half of the July 8 value." },
      { q: "How much water did the grass reference use over these two weeks?", a: "Step through the dates and add the ETo column: 3.66 in for July 2 to 15. Rain was 0.94 in, so about 2.7 in had to come from soil storage or irrigation, more for a crop with Kc above 1." }
    ],
    figs: []
  }
});

window.CALC_USE2 = Object.assign(window.CALC_USE2 || {}, {
  "eq-5.1": {
    more: [
      "The gross depth comes from the flow meter totalizer or from flow rate times run time divided by area. The net depth is the deficit the irrigation refilled, so you need a soil water number taken just before the irrigation, from a probe, a sensor set or the checkbook. On a pivot with drops near the canopy you can expect 80 to 90%. Furrows without reuse often land between 40 and 65%, and a well run drip system can reach 90% or more.",
      "Read the result as the share of pumped water that ended up stored where the crop can use it. A low number has two common causes: the grower applied more than the deficit, or water left the field as runoff, drift or deep percolation. Make sure both depths are over the same area and the same event. The most common mistake is using the depth the pivot panel says it applied in place of the metered depth, and the second is using a deficit from three days earlier.",
      "Ea is the simple version. When you have catch-can data, ELQ (Eq. 5.11) is the better number because it accounts for the dry low quarter. Use Ea to talk with a grower on the phone and ELQ for design and capacity work."
    ],
    qa: [
      { q: "My meter says I put on 1.25 inches and the probe says the soil was only short an inch. How did I do?", a: "Enter 1.0 in net and 1.25 in gross. Ea comes out 80%. Tell him that is a fair number for a pivot, and that the extra quarter inch went somewhere other than the root zone, most likely to drift and below the roots." },
      { q: "We furrow irrigate with siphon tubes and put on about 4 inches a set. The soil only had room for 2 inches. Is that normal?", a: "Enter 2.0 in net and 4.0 in gross for an Ea of 50%. That is typical for furrows without tailwater reuse, and it means half the water ran off the end or went deep. Shorter sets, surge or a reuse pit are the usual fixes." },
      { q: "The cost-share application asks for application efficiency of the new drop package. How do I support the number?", a: "Use the first irrigation after install: if the meter showed 1.1 in and soil checks showed a 1.0 in deficit refilled, Ea is 90.9%. Report it with the meter readings and the soil data so the reviewer can follow it." }
    ],
    figs: ["5.4"]
  },
  "eq-5.2": {
    more: [
      "Both depths come from a catch-can or infiltration test where each reading stands for the same area. Sort the readings, average the lowest one quarter for dLQ and average all of them for dz. For drip you can use emitter flows from a timed catch at 16 or more emitters in place of depths. Sprinkler sets in good repair usually give DU 0.75 to 0.85, pivots 0.80 to 0.90, and drip 0.85 to 0.95.",
      "The book (p. 86) takes DU 0.7 as the lowest acceptable value for moved laterals, 0.6 for furrows, and at least 0.8 for microirrigation. A low DU means the grower has to pump extra to wet the dry quarter or accept stress there. Check that the cans were spaced evenly and that wind was light during the test, since a 10 mph wind can drop a sprinkler DU by 0.1 or more. Do not mix units for the two inputs.",
      "DU feeds Eq. 5.8 to get the low-quarter depth, Eq. 5.13 for the scheduling coefficient, and the ELQ in Eq. 5.11. If you only have a CU, DU is roughly 1 - 1.59(1 - CU/100) for normally distributed data, so CU 84% is about DU 0.75 as in Example 5.1."
    ],
    qa: [
      { q: "You ran cans on my hand lines. The low quarter averaged 0.65 inch and the whole test 0.85. What does that mean?", a: "DU is 0.65 / 0.85 = 0.76. That is above the 0.7 floor the book gives for moved laterals, so the system is acceptable. Check pressure at the end of the line before buying nozzles." },
      { q: "We checked 24 drip emitters on the vegetable block. Low quarter caught 0.45 inch worth and the average was 0.50. Is my drip OK?", a: "DU is 0.45 / 0.50 = 0.90, above the 0.8 minimum for microirrigation. The system is in good shape. Recheck after the season since clogging lowers it over time." },
      { q: "Our sports field sprinklers caught 0.25 inch in the dry spots and 0.5 inch on average. The groundskeeper wants to run longer.", a: "DU is 0.25 / 0.50 = 0.50, which is poor. Running longer would need twice the water to wet the dry spots. Fix head spacing, nozzles and pressure first, then retest." }
    ],
    figs: ["5.6", "5.5"]
  },
  "eq-5.3": {
    more: [
      "Set out cans in a grid between two laterals or around a solid-set block so each can stands for the same area, usually on a 10 by 10 ft spacing. Run the system for a normal set, read each can with a graduated cylinder and convert to depth using the can opening area. Enter all readings. A test of 16 to 30 cans is common and more cans give a steadier answer.",
      "A CU of 85% or more is a reasonable target for row crops, and 90% or more is good. A CU in the 70s points to worn nozzles, low pressure, wrong spacing for the wind, or plugged heads. CU uses the average absolute deviation, so a few very low cans hurt less here than they do in DU. Do not use plain CU for a center pivot because outer cans stand for more area. Use the Heermann and Hein form for that.",
      "CU sets F1 in Table 5.1, which drives the deep percolation estimate in Eq. 5.14 and the nitrate loss procedure."
    ],
    qa: [
      { q: "We put 16 cans under the wheel line. Readings ran from 0.40 to 0.62 inch. Do I need new nozzles?", a: "Enter the 16 readings (0.50, 0.55, 0.48, 0.60, 0.62, 0.45, 0.58, 0.52, 0.40, 0.57, 0.61, 0.49, 0.53, 0.56, 0.47, 0.59). Mean is 0.53 in and CU is 90%. That is good uniformity, so the money is better spent elsewhere." },
      { q: "Can you check the numbers from the book example so I can show my class?", a: "Enter the 20 depths from Example 5.1. The mean is 2.0 in, the sum of deviations 6.6 in, and CU is 83.5%, which the book rounds to 84%." },
      { q: "An old solid-set orchard system caught 0.3 to 1.0 inch across 8 cans. Is it worth fixing?", a: "Enter 0.3, 0.9, 0.5, 0.8, 0.4, 1.0, 0.6, 0.7. Mean is 0.65 in and CU is 69%, below the 85% target. The low cans are getting less than half of the high ones, so a nozzle and pressure check will pay back in water and yield." }
    ],
    figs: ["5.6", "5.5"]
  },
  "eq-5.4-5.5": {
    more: [
      "Lay one or two lines of cans along a radius from the pivot point to the end, 5 to 15 ft apart as the book says, and record each can's distance. Run the pivot over the cans at a normal speed and read them right after the tower passes to limit evaporation. Skip cans in the wheel tracks. Enter the depths from the pivot outward and either a distance list or the first distance and spacing.",
      "CUH of 90% is often achieved on pivots, and above 90% is good. Because each can is weighted by its distance, a low reading in the last two spans pulls CUH down much more than the same low reading near the center. Look at where the low cans are: low at the end often means low pressure at the end, a worn end gun or a pressure regulator failure. A wrong nozzle in one span shows as a single low or high patch.",
      "Compare the weighted mean with the depth the pivot panel says it applied at that speed. A gap over 10% suggests the flow or the percent timer setting is off. Use CUH in place of CU in Table 5.1 for F1."
    ],
    qa: [
      { q: "The last two spans of my pivot always look yellow. We ran cans every 100 ft and the outer two caught 0.70 and 0.65 inch while the rest were about 1 inch.", a: "Enter the 12 depths from 0.80 out to 0.65 with distances 100 to 1,200 ft. CUH comes out 85%, and the low readings at the end do most of the damage because they stand for the most area. Check pressure at the end tower and the end gun before the rest of the package." },
      { q: "On my other pivot the low cans are at the first two spans. Is that as bad?", a: "Using the same can layout with 0.65 and 0.70 at 100 and 200 ft and about 1 inch elsewhere, CUH is 93%. The inner spans cover little area, so the field as a whole is in good shape. A quick look at those nozzles is still worth doing." },
      { q: "NRCS wants proof the new sprinkler package is uniform before they pay the cost share.", a: "Run a radial line of cans and enter the depths and distances. A test with readings between 0.92 and 1.05 inch every 100 ft gives CUH of 97%, well above the 90% the book says pivots often reach. Attach the can sheet to the application." }
    ],
    figs: ["5.1", "5.5"]
  },
  "catch-can": {
    more: [
      "Before the test, measure the soil water deficit with a probe or sensors, read the flow meter at start and stop, and note wind and pressure. Place cans on an even grid so each can stands for an equal area, run a normal set, and read every can. Enter the depths, the SWD you want to refill, and the depth applied from the source. On a pivot use this for an even-area grid only. Use the CUH calculator for a radial line.",
      "The outputs tell the whole story in one place. DU and CU say how even the water was. Adequacy is the share of the field that got the SWD or more, and the book plans for 90%. Average deep percolation is the water caught above the SWD. ELQ is the share of source water that the low quarter stored. A good test shows DU above 0.75 and ELQ above 75% for sprinklers. A high DU with a low ELQ means the system is even but the grower is putting on too much.",
      "Carry DU into the scheduling coefficient and checkbook, ELQ into the gross capacity calculation, and CU and DU into the nitrate leaching procedure."
    ],
    qa: [
      { q: "You ran the book's 20 cans and I had a 1.6 inch deficit with 2.2 inches pumped. How did the set do?", a: "With the Example 5.1 depths, SWD 1.6 in and 2.2 in applied: DU 0.75, CU 84%, 90% of the area adequately irrigated, and ELQ 68%. The low quarter got 1.5 in, just short of the deficit, so the depth was about right and uniformity is the place to improve." },
      { q: "Same system, but I only needed 1.2 inches that day. What changes?", a: "Change SWD to 1.2 in. Adequacy goes to 100%, average deep percolation rises to 0.80 in per can, and ELQ drops to 55%. The system did not change. The grower just applied too much for the deficit, so the fix is a faster pivot speed or a shorter set." },
      { q: "We put 16 cans in a grid under a linear move. Readings 0.75 to 1.10 inch, deficit was 0.9 and the meter showed 1.05.", a: "Enter the 16 depths, SWD 0.9 and 1.05 applied. DU is 0.86, CU 92%, ELQ 78% and 75% of the area reached the deficit. The system is even, and a slightly heavier application would bring adequacy up to the 90% planning level." }
    ],
    figs: ["5.6", "5.7"]
  },
  "eq-5.6-5.7": {
    more: [
      "Gross depth comes from the meter or from flow, time and area. Runoff on furrows is measured with a flume or small weir at the tail ditch, and on a pivot it is usually zero unless water ponds and moves on slopes. Evaporation and drift are hard to measure in the field, so most people use catch cans versus the meter: the gap between the meter depth and the average can depth is the above-ground loss. Typical values are 1 to 5% for drops near the canopy and 10 to 20% for high-pressure impact sprinklers or big guns in hot, windy weather.",
      "The result is the average depth that went into the soil. It still includes water that will go below the roots, so it is larger than the depth stored. If the infiltrated depth is much less than the meter depth on a pivot, look for runoff in the outer spans where the application rate is highest, or for a meter reading error.",
      "dz feeds Eq. 5.8 for the low-quarter depth, Eq. 5.14 for nonuniformity losses, and the leaching fraction work in Chapter 7."
    ],
    qa: [
      { q: "My pivot runs drops at 15 psi. The meter says 1 inch. How much soaked in?", a: "Enter 1.0 in gross, 0 runoff and about 0.05 in for evaporation and drift. The infiltrated depth is 0.95 in. With drops near the canopy, losses that small are normal." },
      { q: "My big gun traveler puts on 1.5 inches, but it was 95 degrees and windy. Some ran off the low end too.", a: "With 1.5 in gross, 0.25 in evaporation and drift and 0.1 in runoff, infiltration is 1.15 in. About a quarter of what he pumped never went into the soil. Running at night or in calmer weather would recover most of the drift loss." },
      { q: "We measured 1.2 inches of tailwater off a furrow set that got 4 inches.", a: "Enter 4.0 in gross, 1.2 in runoff and 0 evaporation. The field took in 2.8 in. If the tailwater goes to a reuse pit, use Eq. 5.12 to find what came from the well." }
    ],
    figs: ["5.4"]
  },
  "eq-5.8": {
    more: [
      "DU comes from a catch-can or emitter test, or from a typical value when there is no test: about 0.8 for a pivot in good repair, 0.7 for set sprinklers, 0.6 for furrows and 0.85 to 0.9 for drip. dz is the average infiltrated depth from Eq. 5.7 or the can average.",
      "The low-quarter depth is the depth to plan for if the grower wants the drier parts of the field kept out of stress. If dLQ is less than the deficit, that quarter of the field went into the next day short. A common mistake is to schedule on the average depth, which leaves a quarter of the field drier than the checkbook shows.",
      "Use dLQ as the effective irrigation in the checkbook (Eq. 6.20 and 6.21), compare it to SWD for Eq. 5.9 to 5.11, and use it in Eq. 5.15 for excess deep percolation."
    ],
    qa: [
      { q: "My pivot puts on 1 inch. How much is the dry part of the field getting?", a: "With DU 0.80 and 1.0 in infiltrated, dLQ is 0.80 in. Put 0.8 in in the checkbook for that irrigation. Using 1.0 would leave the dry quarter behind." },
      { q: "On my furrows we put in 3 inches. How much does the bottom end get?", a: "With a furrow DU of 0.6, dLQ is 0.6 x 3.0 = 1.8 in. If the deficit was 2.5 in, the low quarter is still short and the top end has been overwatered." },
      { q: "For drip on tomatoes we apply half an inch. Should I add more for the low emitters?", a: "With DU 0.9 and 0.5 in, dLQ is 0.45 in. The low emitters get 90% of the average, so only a small increase in run time is needed to cover them." }
    ],
    figs: ["5.6", "5.7"]
  },
  "eq-5.9-5.11": {
    more: [
      "You need DU from a test, the average infiltrated depth, the SWD right before the irrigation (from a probe, sensors or the checkbook) and the depth taken from the source (meter depth, or Eq. 5.12 if tailwater is reused). On a well run pivot ELQ is 75 to 85%. Set sprinklers run 60 to 75%, and furrows without reuse often 40 to 60%.",
      "If dLQ is less than SWD, all of the low quarter's water was useful and ELQ only reflects uniformity and above-ground losses. If dLQ is more than SWD, the effective depth is capped at SWD and the excess shows up as a lower ELQ. Two irrigations with the same system can give very different ELQ just because of the deficit at the time. Report the deficit with the ELQ so nobody compares apples to oranges.",
      "ELQ is the efficiency the book uses for system capacity (Eq. 5.20) and for converting net to gross depth in Chapters 11 to 13."
    ],
    qa: [
      { q: "Using the book's can test, DU 0.75, 2.0 inches infiltrated, 2.2 inches pumped and a 1.6 inch deficit. What's ELQ?", a: "dLQ is 1.5 in, which is below the 1.6 in deficit, so the effective depth is 1.5 in. ELQ is 1.5 / 2.2 = 68%, matching Example 5.2." },
      { q: "My pivot has DU 0.85. I put on 1 inch, 0.95 inch soaked in, and the soil was 1.2 inches short.", a: "dLQ is 0.81 in and all of it is effective since the deficit was 1.2 in. ELQ is 81%. That is a good number, and the field could even take a heavier pass." },
      { q: "I ran the same pivot slow to put on 2 inches before going on vacation. The deficit was only 1 inch.", a: "With 1.9 in infiltrated, dLQ is 1.6 in but only 1.0 in is effective. ELQ drops to 50%. Half the water went below the roots, along with any nitrate in it." }
    ],
    figs: ["5.7"]
  },
  "eq-5.12": {
    more: [
      "The gross depth is the total applied to the field, which includes pumped-back tailwater. The runoff ratio comes from flume readings on the tail ditch divided by the inflow for the set, and is often 0.2 to 0.4 on furrows without cutback. The return ratio is the share of runoff that gets reapplied, often 0.7 to 0.9 after pit evaporation and seepage. Pick closed if the pit pumps back to the same field and open if it feeds another field.",
      "The result is the depth that came from the well or ditch, which is the water that costs pumping and counts against a water right. Comparing it to the gross depth shows how much the reuse system saves each set. A common mistake is entering the gross depth from the source only, which double counts the reuse.",
      "Use this da in Eq. 5.11 for ELQ. The runoff ratio comes from Chapter 10 (Eq. 10.8 and Tables 10.3 and 10.4) when you do not have measurements."
    ],
    qa: [
      { q: "My furrow set gets 4 inches total. About 30% runs off and the pit returns 80% of it to the same field. How much comes from the ditch?", a: "Closed system, dg 4.0 in, Rr 0.3, Rt 0.8. Runoff is 1.2 in and the ditch supplies 3.04 in. The pit saves almost an inch per set." },
      { q: "What if I shut the pump-back off for repairs?", a: "Set Rt to 0. The ditch then supplies the full 4.0 in, and the 1.2 in of runoff leaves the farm." },
      { q: "We're designing a reuse pit for a 3.5 inch set with 25% runoff and 90% return. Worth it for the cost-share?", a: "Closed system with dg 3.5, Rr 0.25, Rt 0.9 gives 0.875 in of runoff and 2.71 in from the source. That is about 0.8 in saved per set, which you can multiply by sets and acres to show acre-feet saved per season." }
    ],
    figs: ["5.2", "5.4"]
  },
  "eq-5.13": {
    more: [
      "Run a catch-can audit with the system at normal pressure, then use the can average and the low-quarter average. The test run time and the application rate come from the same audit. For turf, the irrigation association audit method is the usual source. Typical SC values are 1.1 to 1.3 for good systems and 1.5 or more for poor ones.",
      "SC is how many times longer the system must run so the low quarter gets the target depth. An SC of 1.25 means 25% more run time and 25% more water. Above about 1.4, fixing heads, nozzles and pressure usually costs less than the extra water. Be clear that the target depth is net. Do not stack an efficiency factor on top of SC for the same nonuniformity.",
      "SC is the inverse of DU. The adjusted run time ties into the run-time and operating-time calculators in Chapters 3 and 11."
    ],
    qa: [
      { q: "Our sod farm sprinklers ran 5 hours. Cans averaged 1.5 inches and the low quarter 1.2. How long would it take if the pattern were perfect?", a: "SC is 1.5 / 1.2 = 1.25, and the perfect-uniformity time is 5 / 1.25 = 4 hours, as in Example 5.4. The extra hour is the cost of uneven coverage." },
      { q: "The park's sprinklers put down 0.6 inch per hour. The low quarter only caught 0.36 of the 0.6 average. How long to apply half an inch?", a: "SC is 0.6 / 0.36 = 1.67, so run time is 0.5 / 0.6 x 1.67 = 1.39 hours, about 83 minutes. Without the poor uniformity it would be 50 minutes." },
      { q: "If we replace heads and the low quarter goes to 0.48, what do we save?", a: "SC drops to 1.25 and the run time for 0.5 inch drops to 1.04 hours, about 62 minutes. That is 21 minutes less per cycle, which you can turn into gallons with the zone flow." }
    ],
    figs: ["5.5", "5.1"]
  },
  "eq-5.14": {
    more: [
      "Use the CU from a catch-can test (or CUH for a pivot), the average infiltrated depth for the event, and the field area. F1 is read from Table 5.1 for 90% adequacy. The calculation assumes the irrigation was planned so 90% of the area got at least the deficit and the depths are normally distributed.",
      "The result is the volume that went below the roots only because some parts of the field got more than others. At CU 90% about 18% of the infiltrated water is lost this way, and at CU 75% it is 45%. A grower can cut this loss only by improving uniformity. Better scheduling does not touch it. Use acre-inches over the whole field to talk money and pumping cost.",
      "This is the first half of total deep percolation. Add the over-application loss from Eq. 5.15 with Eq. 5.16."
    ],
    qa: [
      { q: "With the book's test, CU 84% and 2 inches infiltrated on an acre, how much went deep just from unevenness?", a: "F1 is 0.71, so 2.0 x 1 x (1 - 0.71) = 0.58 ac-in, as in Example 5.5." },
      { q: "My 130 acre pivot tested CU 90%. Each pass puts in 1 inch. What does unevenness cost me per pass?", a: "F1 is 0.82, so 130 ac-in x 0.18 = 23.4 ac-in per pass, about 635,000 gallons. Over 12 passes that is roughly 23 ac-ft." },
      { q: "Is it worth fixing an old system with CU 75% versus getting it to 90%?", a: "On one acre with 1 in infiltrated, CU 75% loses 0.45 ac-in and CU 90% loses 0.18 ac-in. That is 0.27 in saved per irrigation per acre, which you can price with his pumping cost per acre-inch." }
    ],
    figs: ["5.7"]
  },
  "eq-5.15": {
    more: [
      "dLQ comes from Eq. 5.8 or the catch-can calculator. SWD must be measured or tracked just before the irrigation, with a probe, sensors or the checkbook. The 0.95 factor accounts for the low quarter being a bit under the average of the remaining area.",
      "If dLQ is at or below SWD the loss is zero. If it is above, the excess over the whole area went below the roots. This loss is the one better scheduling removes, by matching the depth to the deficit, skipping an irrigation after rain, or speeding up the pivot. It is common right after rain or when a grower runs a fixed depth all season.",
      "Add this to Eq. 5.14 with Eq. 5.16 and 5.17 for total deep percolation."
    ],
    qa: [
      { q: "In the book's example the low quarter got 1.5 inches and the deficit was 1.2. How much went deep from over-applying?", a: "0.95 x 1 ac x (1.5 - 1.2) = 0.285 ac-in per acre, which the book rounds to 0.29." },
      { q: "My low quarter got 0.8 inch and the deficit was an inch. Am I losing water?", a: "No. dLQ is below SWD, so Vdp2 is zero. The low quarter is still slightly short, which is a scheduling question. No water was lost." },
      { q: "It rained 0.6 inch, the deficit dropped to 0.4, but the pivot kept running at its usual 1.0 inch low-quarter depth on 130 acres.", a: "0.95 x 130 x (1.0 - 0.4) = 74 ac-in, about 6 ac-ft lost below the roots on one pass. This is the case for a rain shutoff or a quick call to the grower after a storm." }
    ],
    figs: ["5.7"]
  },
  "eq-5.16-5.17": {
    more: [
      "Enter the nonuniformity loss from Eq. 5.14, the over-application loss from Eq. 5.15, and the area. Keep both volumes on the same area and the same irrigation event.",
      "The depth of deep percolation is the number to compare with the depth applied. A loss of 0.1 to 0.2 in per inch applied is typical for a good pivot with careful scheduling. Losses above 0.5 in per irrigation are a red flag on sandy soils with nitrate in the profile. Check which of the two parts dominates, because that tells you whether the fix is hardware (uniformity) or management (scheduling).",
      "dp feeds Eq. 5.18 for nitrate or chemical loss and the leaching fraction in Eq. 7.6."
    ],
    qa: [
      { q: "From the book's example, 0.58 and 0.29 acre-inch. What's the total?", a: "0.87 ac-in on 1 acre, which is 0.87 in of deep percolation per irrigation, matching Example 5.5." },
      { q: "On my 130 acre pivot the unevenness loss was 23.4 acre-inches and the over-application after rain was 74.1. What's the depth?", a: "Total is 97.5 ac-in, or 0.75 in over the field. Three quarters of it came from over-application, so scheduling is the first fix. Nozzles come second." },
      { q: "An old set system lost 0.45 acre-inch per acre to unevenness and nothing to over-application. How much leached?", a: "Total deep percolation is 0.45 in. All of it is a uniformity problem, so this is the number to put in a cost-share request for a new sprinkler package." }
    ],
    figs: ["5.7", "5.4"]
  },
  "eq-5.18": {
    more: [
      "Concentration in the leachate comes from suction lysimeters, tile drain samples or shallow wells, and is often reported as nitrate-N in ppm (mg/L). Under fertilized corn on sandy soils values of 10 to 30 ppm nitrate-N are common. Deep percolation depth comes from Eq. 5.17, a water balance, or the leaching fraction calculators.",
      "The factor 0.226 converts ppm times inches to pounds per acre. Check whether the lab reports nitrate (NO3) or nitrate-N, since nitrate is 4.43 times nitrate-N. Use nitrate-N to compare with fertilizer N rates. A loss of 5 lb N/ac per irrigation over 8 to 10 over-irrigations is 40 to 50 lb/ac a season, which is a real fertilizer cost.",
      "The same conversion gives the salt applied with irrigation water (salt-applied calculator in Chapter 7)."
    ],
    qa: [
      { q: "With 20 ppm nitrate-N in the leachate and 0.87 inch of deep percolation, how much N did I lose?", a: "0.226 x 20 x 0.87 = 3.9 lb N/ac for that irrigation, as in Example 5.5." },
      { q: "The tile outlet tested 30 ppm and we figure an inch went through after that heavy irrigation.", a: "0.226 x 30 x 1.0 = 6.8 lb N/ac. On 100 acres that is 680 lb of N, worth putting into dollars for the grower." },
      { q: "If I tighten my scheduling to quarter-inch losses with 15 ppm, what's left?", a: "0.226 x 15 x 0.25 = 0.85 lb N/ac per irrigation, down from several pounds. That is the number to use in a nutrient management plan." }
    ],
    figs: ["5.7"]
  },
  "leaching-procedure": {
    more: [
      "Inputs come from a catch-can test (CU and DU), the average infiltrated depth, the deficit before the irrigation, and a leachate nitrate value from a lysimeter, tile or a typical number for the soil and N rate. Use the field area to get pounds for the whole field.",
      "The procedure splits the leaching into the part caused by uneven water and the part caused by applying more than the deficit. Show the grower both. If Vdp1 is large, uniformity is the issue. If Vdp2 is large, scheduling is. The result assumes 90% adequacy and normally distributed depths, so treat it as an estimate within about 20%.",
      "Run it twice with different SWD values to show what one day of waiting for the deficit to grow does to N loss."
    ],
    qa: [
      { q: "Can you run the book example as a check?", a: "With dz 2.0 in, CU 84%, DU 0.75, SWD 1.2 in and 20 ppm: F1 0.71, Vdp1 0.58, Vdp2 0.29, dp 0.87 in and 3.9 lb N/ac lost, matching Example 5.5." },
      { q: "My 120 acre pivot on loamy sand: CU 85, DU 0.78, 1 inch infiltrated, deficit 0.6 inch, leachate around 25 ppm. How much N am I washing out?", a: "dLQ is 0.78 in, Vdp1 32.4 ac-in and Vdp2 20.5 ac-in, so dp is 0.44 in. Loss is 2.5 lb N/ac, or about 300 lb on the field, per irrigation." },
      { q: "What if I waited until the deficit was 0.9 inch before that same pass?", a: "Change SWD to 0.9. Vdp2 drops to zero, dp is 0.27 in and the loss is 1.5 lb N/ac, about 183 lb on the field. Waiting a day saves roughly 115 lb of N per pass." }
    ],
    figs: ["5.6", "5.7"]
  },
  "eq-5.19": {
    more: [
      "Measure flow at the headgate or well and at the field turnout at the same time, with a Parshall flume, weir, propeller meter or float method (Chapter 3). Volumes over a set or depths over the same area both work. Lined canals and pipelines often run 90 to 98%, unlined field ditches 70 to 90%, and long earthen ditches in sandy or gravelly soil can drop below 60%.",
      "The result shows how much water is lost before it reaches the field. Losses come from seepage, evaporation, ditch-bank vegetation and leaks at gates. A low number on a short ditch points to gophers, cracks or bad gates. Measure both ends on the same day, because a reading taken at the headgate in the morning and at the field in the afternoon can be off if the flow changed.",
      "Use Ec in Eq. 5.21 to size the source flow and in the project efficiency calculator."
    ],
    qa: [
      { q: "The flume at my field shows 2.7 inches worth of water for the set, but we diverted 3.0 inches worth at the river.", a: "Ec is 2.7 / 3.0 = 90%. That matches a continuous supply in Table 5.2, so the ditch is in decent shape." },
      { q: "I divert 5 cfs and the field turnout only reads 3.8 cfs.", a: "Ec is 3.8 / 5.0 = 76%. Almost a quarter of his water is lost in the ditch. Run the seepage calculator to see if piping the worst stretch pays." },
      { q: "After we put the ditch in pipe, the meter at the field reads 4.9 cfs out of 5.0.", a: "Ec is 98%. That 22 point gain is the number to report in a cost-share completion report, along with the acre-feet saved over the season." }
    ],
    figs: ["5.8", "5.12"]
  },
  "project-efficiency": {
    more: [
      "Each efficiency can come from measurements (Eq. 5.19 for conveyance, Eq. 5.1 or 5.11 for application) or from Table 5.2 when nothing is measured. Typical values: main canals 70 to 90%, field canals 70 to 90%, surface application 40 to 70%, sprinklers 70 to 85%, drip 85 to 95%.",
      "Distribution efficiency shows the share of diverted water that reaches the field. Farm efficiency shows the share of water delivered to the farm that is stored in the root zone. Multiplying makes clear that a weak link anywhere hurts the whole chain. When choosing where to spend money, change one efficiency at a time and see which change moves the result most.",
      "Remember that water lost from one farm may return to the river and be used downstream. The book's watershed water balance (Figure 5.13) is a reminder that project savings are not always basin savings."
    ],
    qa: [
      { q: "Our ditch company has 80% conveyance, 90% field canals and growers at 65% application. Where do we stand?", a: "Distribution efficiency is 72% and farm efficiency 58.5%. Roughly 4 of every 10 acre-feet delivered to the farm are not stored in root zones." },
      { q: "Should we line canals or help growers switch to sprinklers? Now we're at 70% conveyance, 80% field canals, 50% application.", a: "Today Ef is 40%. Lining field canals to 90% raises Ef to 45%. Moving to sprinklers at 85% raises Ef to 68%. On these numbers the on-farm upgrade gains more." },
      { q: "What does lining the field canal alone do for distribution efficiency?", a: "With Ec 70% and Eb going from 80 to 90%, Ed goes from 56 to 63%. Seven more acre-feet of every 100 diverted reach the fields." }
    ],
    figs: ["5.12", "5.13"]
  },
  "ditch-seepage": {
    more: [
      "Get the soil along the ditch from the NRCS soil survey or a few auger holes, measure the wetted perimeter at a typical flow (bottom width plus both wetted sides), pace or measure the length, and read the flow with a flume or float. Days of use come from the grower's records. Seepage rates by material come from Figure 5.8 and are approximate, so choose the middle of the band or enter a local ponding test value.",
      "The result is the seasonal loss in acre-feet, split into seepage and ditch-bank vegetation. Compare it to the cost of pipe or lining to get a payback. Buried pipe loses only 0.01 to 0.15 ft3/ft2/d, so most of the seepage loss is recovered. Wetted perimeter is the input people most often get wrong: measure it at the normal running depth. A ditch measured full will overstate the loss.",
      "Divide the total loss by the volume diverted to get an Ec for Eq. 5.19."
    ],
    qa: [
      { q: "My quarter-mile field ditch in loam carries 2.5 cfs for 180 days. What does it lose?", a: "With 2.5 ft2/ft wetted, 1,320 ft and 1.4 ft/d: seepage 19 ac-ft, vegetation 2.3 ac-ft, total 21.3 ac-ft per year, matching Example 5.6." },
      { q: "We have a half mile of ditch in gravelly sandy loam, 3 ft wetted, 4 cfs, 150 days.", a: "Pick sand, gravelly sandy loam (1.9 ft/d). Seepage is 52 ac-ft and vegetation 6 ac-ft, total about 58 ac-ft per year. That is a strong case for pipe." },
      { q: "If we pipe the loam ditch, how much do we still lose?", a: "Choose your own rate and enter 0.1 ft/d for buried pipe. Seepage drops from 19 to 1.4 ac-ft. Vegetation loss of 2.3 ac-ft also goes away once there is no open ditch, so the saving is about 20 ac-ft a year." }
    ],
    figs: ["5.8"]
  },
  "eq-5.20": {
    more: [
      "Net capacity is the peak crop water use the system must meet, from Table 5.3, Figure 5.11, or local ET records, minus any rain you can count on. ELQ comes from a test or a typical value (85% for pivots, 65 to 75% for set sprinklers, 90% for drip). Downtime covers maintenance, moving, and power-company load control, often 5 to 15%. 1 in/d equals 18.86 gpm/ac.",
      "Gross capacity is what the pump has to deliver per acre. Multiply by the area for the system flow. A corn pivot in the Great Plains is often designed at 6 to 7.5 gpm/ac gross. In humid areas where rain helps, 4.5 to 6 gpm/ac is common. Mixing in/d and gpm/ac is the most common error, so set the units on both fields before entering.",
      "The flow from here goes to Eq. 5.21 for conveyance losses, then to pump and well sizing in Chapters 8 and 9."
    ],
    qa: [
      { q: "The book's farm needs 5.7 gpm/ac net with 65% ELQ and 10% downtime on 80 acres. What flow does that field need?", a: "Cg is 9.7 gpm/ac and the field needs about 780 gpm, matching Example 5.8." },
      { q: "How many gpm do I need for corn on a 130 acre pivot if peak use is 0.30 inch a day?", a: "0.30 in/d is 5.66 gpm/ac. With 85% ELQ and 10% downtime, Cg is 7.4 gpm/ac and the pivot needs about 960 gpm." },
      { q: "A 40 acre drip block needs 0.25 inch a day. Drip ELQ 90%, 5% downtime.", a: "0.25 in/d is 4.72 gpm/ac. Cg is 5.5 gpm/ac and the block needs about 220 gpm." }
    ],
    figs: ["5.9", "5.10"]
  },
  "cn-from-flow": {
    more: [
      "Measure the flow at the pivot or well with an inline meter or a timed fill. Nameplate values run high since wells drop off over the season. Use the actual irrigated acres. ELQ and downtime are the same as in Eq. 5.20.",
      "The answer is the net in/d the system can keep up with. Compare it with peak ET for the crop: 0.30 to 0.35 in/d for corn in the western Plains, 0.25 to 0.28 in/d in humid areas. If net capacity is below peak ET, the soil has to supply the difference during hot spells, which is fine on deep silt loams but risky on sands. Figure 5.10 shows the soil water drawdown when capacity is short.",
      "Use the answer in Table 5.3 to compare with peak ET, and in the checkbook to see how far the soil will draw down in a hot week."
    ],
    qa: [
      { q: "My well makes 500 gpm on a 130 acre pivot. What can it keep up with?", a: "With 85% ELQ and no downtime, gross is 0.20 in/d and net is 0.17 in/d, as on p. 97. That is well below July corn ET, so he needs a full soil profile going into tassel." },
      { q: "My well makes 700 gpm. Can it keep up with corn on 160 acres in July?", a: "With 85% ELQ and 10% downtime, net capacity is 0.18 in/d. Peak corn use is near 0.30 in/d, so the soil has to make up about 0.12 in/d in hot weather. Plan to start early and keep the profile full." },
      { q: "A 900 gpm well on a 125 acre pivot. Is it big enough for 0.30 inch a day?", a: "With 85% ELQ and 5% downtime, net is 0.31 in/d. That matches peak corn ET, so the system can keep up with little help from the soil." }
    ],
    figs: ["5.10", "5.9"]
  },
  "eq-5.21": {
    more: [
      "Gross field flow comes from Eq. 5.20. Conveyance efficiency is measured with Eq. 5.19 or taken from Table 5.2. Buried pipe is close to 100%, lined ditch 90%, unlined field ditch 70 to 80%.",
      "The answer is the flow the well or headgate must deliver so the field still gets its gross flow after ditch losses. If the source cannot supply it, either the acres, the ELQ, or the conveyance has to improve. When there are several branches, each branch gets its own Ec, as in the farm capacity calculator.",
      "Take this flow to the pump curve and well drawdown work in Chapters 8 and 9."
    ],
    qa: [
      { q: "The field needs 780 gpm and the ditch is 80% efficient. What must the well pump?", a: "780 / 0.80 = 975 gpm, matching Field 1 in Example 5.8." },
      { q: "Same field, but on a 90% branch?", a: "780 / 0.90 = 867 gpm. The better ditch saves over 100 gpm of pumping." },
      { q: "We're feeding a 1,000 gpm pivot through 1,500 ft of buried pipe. Is it worth adding for losses?", a: "With 95% for an older pipeline, the well must deliver 1,053 gpm. A new tight pipeline is near 100%, so the difference is small." }
    ],
    figs: ["5.12"]
  },
  "farm-capacity": {
    more: [
      "Enter net capacity in in/d, ELQ and downtime for the farm, then list each field's acres and the conveyance efficiency of the branch that feeds it, plus the main canal efficiency. Values come from Table 5.2 if branches are not measured.",
      "The per-field lines show the gross flow each field needs and the flow at its branch head. The bottom line is the source flow. Compare branch losses to find the best place to spend on pipe or lining. The book rounds Cn to 5.7 gpm/ac and gets 2,050 gpm. The exact conversion gives about 2,030 gpm.",
      "Changing ELQ on all fields shows what a switch from furrows to pivots does to the well size."
    ],
    qa: [
      { q: "Can you check the book's two-field farm?", a: "With 0.30 in/d, 65% ELQ, 10% downtime, two 80 ac fields on 80% and 90% branches and a 90% main canal, the well needs about 2,030 gpm. The book rounds to 2,050." },
      { q: "We're adding a 40 acre field on a 95% pipeline branch. How big does the well have to be?", a: "Add 40 to areas and 95 to efficiencies. The new field needs 407 gpm at its branch, and the source requirement rises to about 2,480 gpm." },
      { q: "What if both 80 acre fields go to pivots at 85% ELQ?", a: "Change ELQ to 85. The source drops to about 1,550 gpm, nearly 500 gpm less than with furrows." }
    ],
    figs: ["5.12", "5.11"]
  },
  "tab-5.1": {
    more: [
      "CU comes from a catch-can test (Eq. 5.3) or CUH for a pivot. The table covers CU 70 to 98% and the calculator interpolates between the printed values.",
      "F1 is the share of the average infiltrated depth that stays in the root zone when the irrigation is planned so 90% of the area is adequately watered. One minus F1 is the share lost to deep percolation from nonuniformity. At CU 75% only 55% stays, at CU 90% it is 82%, and at CU 95% about 91%. The table assumes normally distributed depths, which holds well for sprinklers and less well for furrows.",
      "Use F1 in Eq. 5.14 and in the leaching procedure."
    ],
    qa: [
      { q: "With CU 84%, how much of my water goes below the roots just from unevenness?", a: "F1 is 0.71, so 29% of what infiltrates is lost to nonuniformity at 90% adequacy." },
      { q: "We got CU 91% on the pivot. The table jumps from 90 to 92.", a: "The calculator interpolates to F1 = 0.84, so about 16% is lost." },
      { q: "What would going from CU 75 to CU 95 do?", a: "F1 goes from 0.55 to 0.91. Losses from unevenness drop from 45% to 9% of the infiltrated water." }
    ],
    figs: ["5.7"]
  },
  "tab-5.2": {
    more: [
      "Choose the row that matches the project or the farm: the type of delivery (continuous or rotational), size of the project, size of the irrigated blocks, and whether field canals are lined or piped. These are planning values from Doorenbos and Pruitt (1977).",
      "Use the values when nobody has measured losses. They are averages, so a single field ditch in sand can be far worse than the table and a well kept lined canal better. Replace them with measured values from Eq. 5.19 as soon as you can.",
      "Feed the conveyance efficiency to Eq. 5.21 and both efficiencies to the project efficiency calculator."
    ],
    qa: [
      { q: "My blocks are bigger than 50 acres and the field canals are lined. What should I plan with?", a: "Table 5.2 gives 90% field canal efficiency for that case." },
      { q: "Same size blocks with unlined field ditches?", a: "80%. Lining would raise it to 90%, so 10 of every 100 acre-feet would reach the field that do not now." },
      { q: "A small farm under 50 acres with lined ditches?", a: "80% for field canal efficiency. Use that in the farm capacity calculator until you can measure it." }
    ],
    figs: ["5.12"]
  },
  "tab-5.3": {
    more: [
      "Maximum monthly crop ET comes from local weather station records or ET tables for the peak month, usually July. Allowable depletion is the net depth per irrigation, AD from Eq. 6.4. The table covers 1.0 to 6.0 in AD and 5 to 12 in/mo ET.",
      "The result is the peak daily ET to design for. A small AD means the soil cannot carry the crop through hot days, so the peak is higher than the monthly average. With 1 in AD and 10 in/mo, the peak is 0.42 in/d. With 4 in AD it is 0.37 in/d. Use this only when local peak data are not available, as the book says.",
      "The answer is the net capacity for Eq. 5.20 or the farm capacity calculator."
    ],
    qa: [
      { q: "A loam with 3 inches allowable depletion and July ET of 8 inches. What do I design for?", a: "Table 5.3 gives 0.30 in/d." },
      { q: "Sandy field, only 1 inch AD, 9 inches in July?", a: "0.37 in/d. The small soil reservoir pushes the design up compared with the 0.29 in/d monthly average." },
      { q: "Same 10 inch peak month, but 1.25 inches versus 4 inches AD?", a: "1.25 in AD gives 0.415 in/d and 4 in AD gives 0.37 in/d. A deeper soil buffer lowers the system you need." }
    ],
    figs: ["5.9", "5.11"]
  },
  "tab-5.4": {
    more: [
      "Pick the system types being considered. The table gives maximum slope, pressure needed at the system and labor in hours per acre per irrigation. Slope comes from a topo map or GPS survey. Pressure links to pump energy cost.",
      "Use it to narrow choices before detailed design. A field steeper than 2% rules out most furrow systems. A pivot can run 20 to 70 psi, a traveler 70 to 100 psi, which shows up directly on the power bill. Labor numbers matter when the grower is short-handed.",
      "Pair with Table 5.5 for soil, crop and wind factors, and take the pressure to the pump TDH work in Chapter 8."
    ],
    qa: [
      { q: "I'm thinking about a center pivot. What pressure and labor should I expect?", a: "Center pivot: slopes up to 10 to 20%, 20 to 70 psi, 0.05 to 0.15 hr/ac per irrigation." },
      { q: "How does that compare with my siphon tubes?", a: "Furrow with siphon tubes: 2% maximum slope, no pressure, but 1.0 to 1.5 hr/ac per irrigation. The pivot cuts labor by about ten times." },
      { q: "Would a traveler or drip be cheaper to run on my rolling field?", a: "Traveler: 5 to 15% slope, 70 to 100 psi. Point-source drip: no slope limit and 20 to 50 psi. Drip will cost less to pump." }
    ],
    figs: ["5.1", "5.2", "5.3"]
  }
});

window.CALC_USE2 = Object.assign(window.CALC_USE2 || {}, {
  "eq-6.1": {
    more: [
      "The minimum fraction remaining comes from Table 6.1 for the crop group and peak ET, from a crop guide, or from a grower's own experience on that soil. Extension guides often state it as management allowed depletion (MAD), which is fdc in percent. Typical fdc values run 0.30 to 0.40 for potatoes and vegetables and 0.50 to 0.60 for corn, soybean and cotton under moderate ET.",
      "fdc is the share of TAW the crop can use before yield loss starts. Hotter days lower it, since a crop that can pull water fast from wet soil struggles to do so from drier soil when demand is high. Watch for guides that state the number as remaining when you need depleted, or as percent when you need a decimal. The most common mistake is using 50% for every crop.",
      "fdc goes straight into AD = fdc x TAW (Eq. 6.4) and the LD calculation."
    ],
    qa: [
      { q: "The book example says keep 55% of the water. How far can I let it dry?", a: "fdc = 1 - 0.55 = 0.45. He can use 45% of the available water before irrigating, as in Example 6.1." },
      { q: "Our soybean guide says keep at least 60% remaining during pod fill.", a: "fdc is 0.40. In a 3 in TAW root zone that is 1.2 in of allowable depletion." },
      { q: "For potatoes the consultant says never below 65% remaining. What's my MAD?", a: "fdc is 0.35, or 35% MAD. Potatoes on sandy soil will need small, frequent irrigations to stay within that." }
    ],
    figs: ["6.2"]
  },
  "eq-6.2-6.5": {
    more: [
      "Root zone depth comes from Table 6.2, Table 6.3 or a soil pit, limited by any hardpan, gravel or water table. AWC comes from the NRCS soil survey (Web Soil Survey lists it by horizon), from lab data, or from texture tables. Sands hold 0.05 to 0.08 in/in, sandy loams 0.10 to 0.13, loams 0.15 to 0.18 and silt loams 0.18 to 0.22. fdc comes from Table 6.1.",
      "TAW is the size of the soil reservoir. AD is how much the crop can use before you must irrigate, and MB is what must stay in the soil. A silt loam with deep corn roots can hold 6 in and allow 2.7 in of use. A sandy loam with a 2 ft root zone holds about 3 in and allows only 1.4 in. A common mistake is using the full genetic root depth from Table 6.2 when the managed depth in Table 6.3 is much shallower.",
      "AD sets the maximum interval (Eq. 6.8), the latest date (Eq. 6.10) and the design peak ET (Table 5.3). TAW is the base for every SWD and AW calculation."
    ],
    qa: [
      { q: "My root zone is 3 feet, AWC 0.17 in/in, and I allow 45% depletion. How many inches can I use?", a: "TAW is 6.12 in, AD 2.75 in and MB 3.37 in. The book rounds these to 6.1, 2.7 and 3.4 in Example 6.1." },
      { q: "Sandy loam on Delmarva, corn rooted 2 feet, AWC 0.12, 50% depletion. How much room do I have?", a: "TAW is 2.88 in, and AD and MB are both 1.44 in. At 0.30 in/d that is less than 5 days between irrigations in July." },
      { q: "Potatoes on the same sandy loam, 18 inch root zone, fdc 0.35?", a: "TAW is 2.16 in and AD only 0.76 in. That is about three days at peak ET, so the system must be able to apply light, frequent irrigations." }
    ],
    figs: ["6.8"]
  },
  "eq-6.3": {
    more: [
      "Get layer thickness and AWC from the NRCS soil survey horizons, a soil pit or a probe core. List layers from the surface down. Enter the root zone depth, and the last layer that roots reach is counted only to that depth. Coastal Plain soils often have a loamy sand over a sandy clay loam, and river terraces often have loam over gravel.",
      "The result is TAW for the actual layering, which can be very different from using the surface texture alone. A loam over sand can hold 25% less than a uniform loam profile. Do not count layers below a hardpan or gravel that roots cannot enter. Check that the thicknesses add up to at least the root zone depth.",
      "Use this TAW in Eq. 6.4 for AD and in the checkbook."
    ],
    qa: [
      { q: "My soil is 12 inches at 0.18, 18 inches at 0.15, then 0.10 in/in, and roots go 4 feet. What's TAW?", a: "0.18 x 12 + 0.15 x 18 + 0.10 x 18 = 6.66 in, with roots in all three layers." },
      { q: "Loam (0.17 in/in) for 2 feet over sand (0.07) and roots reach 3 feet.", a: "TAW is 0.17 x 24 + 0.07 x 12 = 4.92 in. Using loam for the full 3 ft would give 6.1 in and overstate the reservoir by over an inch." },
      { q: "Same first profile, but the roots stop at 2 feet on a compacted layer.", a: "Set Rd to 24 in. TAW is 3.96 in from the top two layers. Ripping the compacted layer could add a lot of water to the reservoir." }
    ],
    figs: ["6.8"]
  },
  "eq-6.6-6.7": {
    more: [
      "Days after germination come from the planting date plus emergence time. Days to maximum rooting is often 60 to 90 days for corn and 50 to 70 for soybean, and is reached near silking or full pod. Minimum depth for seedlings is 4 to 6 in (the book uses 6 in). Maximum managed depth comes from Table 6.3 or the soil limit.",
      "The result is the root zone to use in TAW for that day. Early in the season this keeps the checkbook from counting water that small roots cannot reach. Use the soil limit as RdMAX if a hardpan or water table is shallower than the crop's normal depth. After Dtm the depth stays at RdMAX.",
      "Feed Rd into Eq. 6.2 and the checkbook. When roots grow into new soil, use Eq. 6.22 to 6.25 for the added deficit."
    ],
    qa: [
      { q: "Corn at early tassel, 50 days after germination, full depth of 4 feet at 90 days. How deep are the roots?", a: "Rf is 0.56 and Rd is 2.44 ft. The book rounds to 2.5 ft in Example 6.2." },
      { q: "Soybeans 30 days up, full depth 3 feet at 75 days, starting at 6 inches.", a: "Rf is 0.40 and Rd is 1.5 ft. Count soil water only in the top 18 in for now." },
      { q: "We're 100 days after emergence. Do roots keep growing?", a: "No. Rf is held at 1, so Rd is the full 4 ft. From here on the reservoir size stays fixed." }
    ],
    figs: ["6.3"]
  },
  "extraction-4321": {
    more: [
      "Enter the root zone depth and the water used since the last irrigation (ET over the interval, or the change in SWD). The rule holds when the profile was refilled, or nearly refilled, at the last irrigation (Figure 6.4).",
      "About 40% of the water comes from the top quarter, 30% from the second, 20% from the third and 10% from the bottom. That is why the top sensor dries first and fastest. Place sensors at about one quarter and one half to two thirds of the root zone, and a deeper one to see if water reaches the bottom. The rule breaks down when the top dries out, since roots then pull more from deeper soil.",
      "Use the quarter depths to decide how much soil each sensor represents in the sensor SWD and layered AW calculators."
    ],
    qa: [
      { q: "Corn roots go 4 feet and the crop used 2 inches since the last irrigation. Where did it come from?", a: "Each quarter is 1 ft deep. Top foot 0.8 in, second 0.6 in, third 0.4 in, bottom 0.2 in." },
      { q: "My soybean root zone is 3 feet. Where should the sensors go?", a: "Quarters are 9 in deep. Sensors at about 9 and 18 in catch most of the use, and one at 30 in shows deep drainage. With 1.5 in used, the top 9 in supply 0.6 in." },
      { q: "Why is my 6 inch sensor always the driest on my 2 foot vegetable root zone?", a: "The top 6 in quarter supplies 40% of the water. With 1 in used, it gives up 0.4 in, four times the bottom quarter. Trigger irrigation on the deeper sensor or an average." }
    ],
    figs: ["6.4"]
  },
  "eq-6.8": {
    more: [
      "AD comes from Eq. 6.4. ET is the expected daily crop water use for the period, from a weather station, Table 6.4 or local ET reports. Use peak ET for design and the current week's ET for in-season checks.",
      "TMAX is the longest the crop can go between irrigations without stress. If the system takes longer than TMAX to cover the field, such as a pivot revolution or a hand-move set rotation, it cannot keep up and the far end will stress. A short TMAX on sandy soil is the main reason those fields need light, frequent irrigation.",
      "Compare TMAX with the pivot revolution time (Eq. 13.7) or set rotation (Chapters 11 and 12)."
    ],
    qa: [
      { q: "With 2.7 inches AD and 0.3 inch a day, how long can I wait?", a: "TMAX is 9 days, as in the book (p. 112)." },
      { q: "My sandy loam has 1.44 inches AD and the corn is using 0.3 a day. My pivot takes 3.5 days per lap.", a: "TMAX is 4.8 days, so a 3.5 day lap works with a little margin. Any breakdown longer than a day puts the end of the field at risk." },
      { q: "Potatoes, 0.76 inch AD, 0.25 inch ET. Can my hand lines get around every 4 days?", a: "TMAX is 3.0 days, so a 4 day rotation is too slow. He needs more lines or a shorter set rotation." }
    ],
    figs: ["6.8", "6.6"]
  },
  "eq-6.9": {
    more: [
      "The effective depth is the low-quarter depth the system puts on per pass (Eq. 5.8). ET is the current daily use. Effective rain is the rain that soaked in and stayed in the root zone. Pivots are often set to 0.75 to 1.0 in per pass in the Plains and 0.5 to 0.75 in in humid areas.",
      "T is how often the system needs to apply that depth to keep pace with ET. If T is shorter than the time it takes the system to cover the field, the system is falling behind. The delay output is how many extra days a rain buys. Do not count rain that ran off or fell on a full profile.",
      "This is the simplified checkbook. Use the full checkbook when the deficit is near AD or the root zone is still growing."
    ],
    qa: [
      { q: "My pivot puts on 0.9 inch effective and the corn uses 0.3 a day. How often do I need to run?", a: "T is 3 days, as in the book (p. 113). If the pivot takes 3 days per lap, it must run nonstop." },
      { q: "We got half an inch of rain. I apply 0.75 effective and ET is 0.25. When do I start again?", a: "T is 3 days and the rain delays the next pass by 0.5 / 0.25 = 2 days, matching p. 120." },
      { q: "We got 1.2 inches. Does that give me nearly 5 days?", a: "At 0.25 in/d the delay is 4.8 days, but only if the soil had at least 1.2 in of room. If the deficit was 0.8 in, only 0.8 in counts and the delay is 3.2 days." }
    ],
    figs: ["6.6", "6.12"]
  },
  "eq-6.12": {
    more: [
      "Pick the form that matches how you measured soil water. Use 6.12a with a volumetric reading from a calibrated probe and the wilting point from lab data or the soil survey. Use 6.12b or 6.12c with fraction remaining from the feel and appearance method or a sensor reading converted with the soil's AWC. Root zone depth comes from the root growth calculator or Table 6.3.",
      "AW is the water the crop can still pull from the root zone. Compare it to MB: when AW reaches MB it is time to irrigate. A probe reading in volumetric percent must be converted to a decimal before entry. A common mistake is using field capacity in place of wilting point in 6.12a, which gives the deficit in place of the available water.",
      "AW and TAW give SWD by Eq. 6.15, and AW - MB over forecast ET gives LD (Eq. 6.11)."
    ],
    qa: [
      { q: "Feel test says 80% remaining on fine sandy loam, AWC 0.13, 24 inch roots. How much water is left?", a: "Using 6.12b, AW is 0.80 x 0.13 x 24 = 2.5 in, as in Example 6.3." },
      { q: "My probe says 25% water by volume, the soil survey says wilting point is 12%, roots 2 feet.", a: "Using 6.12a with 0.25 and 0.12, AW is 0.13 x 24 = 3.12 in." },
      { q: "On a 6 inch TAW soil the sensor says half the available water is left.", a: "Using 6.12c, AW is 0.5 x 6 = 3.0 in. If fdc is 0.45, MB is 3.3 in, so he is already below the minimum balance and should irrigate now." }
    ],
    figs: ["6.8"]
  },
  "eq-6.13": {
    more: [
      "Enter one water content per layer from a probe or sensors at several depths, with wilting point and field capacity for each layer from lab data or the soil survey. A sensor at 6, 18 and 30 in can stand for three 12 in layers. Add field capacity if you want TAW and SWD.",
      "AW is the water left over the whole root zone and SWD is how much it takes to refill. Layer-by-layer readings show where the water is: a dry top and a wet bottom is normal (4-3-2-1 rule), but a dry bottom means past irrigations have not been reaching it. Make sure all three lists have the same number of entries.",
      "Use the SWD in the LD and ED calculators or as the starting deficit in the checkbook."
    ],
    qa: [
      { q: "My sensors at 6, 18 and 30 inches read 0.22, 0.25 and 0.28. Wilting points 0.10, 0.12, 0.15 and field capacities 0.28, 0.30, 0.32.", a: "With three 12 in layers, AW is 4.56 in, TAW 6.36 in and SWD 1.80 in. Refilling takes 1.8 in effective." },
      { q: "On my sandy farm the same depths read 0.10, 0.14, 0.18 with wilting points 0.05, 0.06, 0.08 and field capacity 0.15, 0.17, 0.20.", a: "AW is 2.76 in, TAW 3.96 in and SWD 1.20 in. With a sandy reservoir that small, plan a 1.2 in effective refill now." },
      { q: "The corn roots are only 2 feet so far. Does the 30 inch sensor count?", a: "Set Rd to 24 in. Only the top two layers count: AW 3.0 in, TAW 4.32 in and SWD 1.32 in." }
    ],
    figs: ["6.4", "6.8"]
  },
  "eq-6.14-6.15": {
    more: [
      "Fraction depleted comes from a feel test (fd = 1 - fr), a sensor reading converted with AWC, or a tension reading with Table 6.5. TAW comes from Eq. 6.2 or 6.3 for the current root depth.",
      "SWD is the net depth needed to refill the root zone to field capacity. It is the target for the next irrigation and the starting point for the checkbook. If SWD is more than AD, the crop is already under stress. The deficit is net, so convert to gross with ELQ before setting the pivot speed.",
      "SWD goes into the LD and ED calculators and into Eq. 5.15 for over-application losses."
    ],
    qa: [
      { q: "Feel test says 20% depleted and TAW is 3.12 inches. How much do I need to put back?", a: "SWD is 0.2 x 3.12 = 0.62 in and AW is 2.50 in, as in Example 6.3." },
      { q: "On my 2 inch TAW lettuce field, 40% is gone.", a: "SWD is 0.8 in and AW 1.2 in, as in Example 6.7. With fdc 0.5, AD is 1.0 in, so he has about 0.2 in left." },
      { q: "Half the water is gone from a 6 inch silt loam profile.", a: "SWD is 3.0 in. If fdc is 0.45, AD is 2.7 in, so the crop is already past the allowable depletion and needs water now." }
    ],
    figs: ["6.8"]
  },
  "swd-fcobs": {
    more: [
      "Find the observed field capacity from the sensor's own record: after a heavy rain or irrigation early in the season, the reading drops fast and then levels off within 1 to 3 days. That level is FCobs for that sensor in that spot. Enter the current reading and the depth of soil the sensor represents.",
      "Using FCobs means factory calibration error and local soil differences mostly cancel, so the deficit is more reliable than one from a lab field capacity (Singh et al., 2020). Revisit FCobs if the sensor was moved or reinstalled. Make sure the reading and FCobs are both in the same units, usually volumetric decimal.",
      "Sum the SWD for each sensor layer to get the root zone SWD, then use it in the LD and ED calculators."
    ],
    qa: [
      { q: "My sensor leveled off at 0.32 after the first big rain. Today it reads 0.27 and it stands for 36 inches. What's the deficit?", a: "SWD is (0.32 - 0.27) x 36 = 1.8 in." },
      { q: "On loamy sand, FCobs was 0.18 and it's at 0.13 now. Roots are 2 feet.", a: "SWD is 0.05 x 24 = 1.2 in. A 2 ft loamy sand root zone often holds under 2 in of TAW, so 1.2 in is past half the reservoir. Irrigate now." },
      { q: "We have one sensor at 6 inches standing for the top foot. FCobs 0.30, now 0.24.", a: "SWD for that foot is 0.06 x 12 = 0.72 in. Add the deficits from the deeper sensors for the full root zone." }
    ],
    figs: ["6.4"]
  },
  "eq-6.10-6.11": {
    more: [
      "AD comes from Eq. 6.4. SWD comes from a soil check, sensors or the checkbook. Forecast ET comes from the weather station forecast, the last few days of actual ET, or Table 6.4.",
      "LD is the number of days before the crop reaches AD. Irrigation should reach that part of the field by then. If the system needs 3 days to get to the spot and LD is 2, start now. A negative LD means the crop is already past AD. Use the higher forecast ET when hot weather is coming, since a low ET guess makes LD look later than it is.",
      "Pair with ED to find the irrigation window, and use the same numbers in the checkbook."
    ],
    qa: [
      { q: "AD is 1.25 inches, deficit 0.62, ET 0.3. When must I irrigate?", a: "LD is 2.1 days. The book rounds to 2 days in Example 6.3." },
      { q: "Lettuce with 1 inch AD, 0.8 inch deficit, 0.2 inch a day.", a: "LD is 1 day, as in Example 6.7 Location 1. Irrigate tomorrow at the latest." },
      { q: "My sensors say the deficit is 1.7 inches on a sandy loam with 1.44 inches AD.", a: "LD is -0.9 days at 0.3 in/d. The crop is already past AD by 0.26 in. Start the pivot now and consider a heavier first pass." }
    ],
    figs: ["6.5", "6.13"]
  },
  "eq-6.16-6.17": {
    more: [
      "The rainfall allowance is room left in the soil for rain right after irrigating, often 0.3 to 0.5 in in humid areas and smaller in dry ones. The planned effective depth is the low-quarter depth the system applies per pass. SWD and forecast ET are the same as for LD.",
      "ED is the earliest day the soil will have room for the planned depth plus the rainfall allowance. Irrigating before ED risks deep percolation if it rains. An ED of 0 means there is already room. If ED comes after LD, the planned depth is too large for the timing, so apply a lighter depth by LD.",
      "Together, ED and LD give the irrigation window (ld-ed-window calculator)."
    ],
    qa: [
      { q: "I'll put on half an inch, want 0.4 inch room for rain, deficit is 0.6, ET 0.3. Earliest I should go?", a: "ED is (0.4 + 0.5 - 0.6) / 0.3 = 1 day, as in Example 6.4. With LD at 2 days, irrigate in 1 or 2 days." },
      { q: "Lettuce: 0.5 inch planned, 0.3 rainfall allowance, deficit 0.8, ET 0.2.", a: "ED is 0, matching Example 6.7. He can irrigate any time." },
      { q: "I want to put 1 inch on, leave half an inch for storms, deficit 0.8, ET 0.25.", a: "ED is 2.8 days. If LD comes sooner, put on a smaller depth so water does not go below the roots when the storm hits." }
    ],
    figs: ["6.7"]
  },
  "ld-ed-window": {
    more: [
      "Enter the root zone depth, AWC, the fraction of available water remaining from a feel test or sensor, forecast ET, the planned effective depth and a rainfall allowance. Leave fdc at 0 to look it up from Table 6.1 by crop group and ET.",
      "The advice line gives the window to irrigate between ED and LD. Late means the deficit is already past AD. If ED falls after LD, the planned depth and rainfall allowance will not fit, so apply less by LD. Check the fdc used: Table 6.1 values drop as ET rises, which shortens the window in hot weather.",
      "For daily tracking after the first soil check, move to the checkbook."
    ],
    qa: [
      { q: "Field beans, AWC 0.13, 2 foot roots, 80% remaining, ET 0.3, planning half an inch with 0.4 room for rain.", a: "fdc from Table 6.1 is 0.40, TAW 3.12 in, AD 1.24 in and SWD 0.62 in. Irrigate between 0.9 and 2.0 days, as in Examples 6.3 and 6.4." },
      { q: "Lettuce, 12 inch roots, AWC 0.17, 60% remaining, ET 0.2, fdc 0.5, half inch planned, 0.3 rain room.", a: "TAW 2.04 in, AD 1.02 in, SWD 0.82 in. The window is 0 to 1.0 day, so irrigate today or tomorrow." },
      { q: "Corn on Delmarva sandy loam, AWC 0.12, 2 foot roots, ET 0.25, 0.75 inch planned, 0.3 rain room. Sensors say 55% remaining.", a: "Table 6.1 gives fdc 0.54. TAW 2.88 in, AD 1.55 in, SWD 1.30 in. The window is 0 to 1.0 day. At 85% remaining the window would be 2.5 to 4.5 days." }
    ],
    figs: ["6.5", "6.7", "6.6"]
  },
  "eq-6.18-6.25": {
    more: [
      "Start with the deficit from the day before. ET comes from a weather station with a crop coefficient or from an ET network. Irrigation is the low-quarter infiltrated depth (Eq. 5.8). Rain is the rain gauge reading less any runoff. Upward flow only matters with a shallow water table a few feet below the root zone (Figure 6.10).",
      "The output is the deficit to start the next day. Irrigation and rain count only up to the deficit, and anything more goes below the roots. Read rain gauges at the field, since summer storms vary a lot over a mile. A common error is to subtract the gross irrigation depth in place of the low-quarter infiltrated depth.",
      "This is one day of the checkbook. Use the checkbook calculator for a full run."
    ],
    qa: [
      { q: "June 27 in the book: deficit 2.61, ET 0.13, irrigation 1.1 and rain 0.3. Where does that leave me?", a: "Effective irrigation is 1.1 in and effective rain 0.3 in. The new deficit is 1.34 in and AW is 4.66 in with 6 in TAW, as in Example 6.5." },
      { q: "Deficit 0.6 inch and I put on 1 inch low quarter. ET was 0.3.", a: "Only 0.6 in counts as effective, so the deficit ends at 0.3 in after ET. The other 0.4 in went below the roots." },
      { q: "We have a high water table near the river. Deficit 1.5, ET 0.25, rain 0.4, upward flow about 0.05.", a: "Effective rain is 0.4 in and the new deficit is 1.5 + 0.25 - 0.4 - 0.05 = 1.30 in." }
    ],
    figs: ["6.9", "6.10"]
  },
  "eq-6.22-6.25": {
    more: [
      "Enter the AWC of the soil the roots are growing into, the fraction already depleted in that soil, and how much deeper the roots went. The new soil is often near field capacity early in the season after spring rains, so fdo is 0 to 0.3. In a dry spring or after a dry fall it can be 0.5 or more.",
      "Wet subsoil adds water to the reservoir and little deficit, while dry subsoil adds deficit as fast as the roots grow. That is why a dry spring catches growers by surprise in early July: the root zone is growing into dry soil. Probe below the root zone in spring to set fdo.",
      "Add ΔSWD to Eq. 6.18 on the day the roots deepen. The checkbook does this automatically when root growth is on."
    ],
    qa: [
      { q: "Corn roots went 6 inches deeper into soil with 0.2 in/in AWC that is 30% depleted. What does that add?", a: "ΔTAW is 1.2 in, of which 0.84 in is available and 0.36 in is added deficit." },
      { q: "We had a wet spring and the subsoil is at field capacity.", a: "With fdo 0, the added deficit is 0 and all 1.2 in of new TAW is available water." },
      { q: "Dry spring on sandy loam, AWC 0.12, 60% depleted below the roots, roots grew 6 inches.", a: "ΔSWD is 0.43 in and only 0.29 in of new water is available. The deficit grows faster than ET alone shows." }
    ],
    figs: ["6.3", "6.8"]
  },
  "checkbook": {
    more: [
      "Set up the field once: AWC, root zone (fixed or growing), fdc, planned effective depth and rainfall allowance. Start with a measured deficit from a soil check or sensors. Then enter one value per day for ET, infiltrated rain and low-quarter irrigation. Daily ET comes from a weather network such as CoAgMET or DEOS, multiplied by a crop coefficient.",
      "The day-by-day log shows SWD, TAW, AD, LD and ED at the start of each day. Plan the next irrigation between ED and LD. Effective rain and irrigation are capped at the deficit, so the log also shows when water was wasted. Check it against a soil reading every week or two and reset the deficit if they drift apart by more than about 0.3 in.",
      "Figures 6.11 and 6.12 show two strategies: holding the soil between 40 and 70% available water, or letting it slowly deplete toward the end of the season."
    ],
    qa: [
      { q: "Run the book's Location 1 from June 25 to 27, starting at 2.2 inches deficit.", a: "With ET 0.20, 0.21, 0.13, rain 0, 0, 0.3 and irrigation 0, 0, 1.1, the deficit on June 28 is 1.34 in, with LD 8 days and ED 1 day, matching Example 6.5." },
      { q: "Same field, Location 2 started at 0.8 inch and got no irrigation.", a: "The deficit on June 28 is 1.04 in, LD 9 days and ED 3 days. One irrigation can serve both spots if timed in that overlap." },
      { q: "A week on my sandy loam corn: AWC 0.12, 2 ft roots, fdc 0.5, start at 0.5 inch. Rain 0.6 on day 3, irrigation 0.8 on day 5. ET 0.20 to 0.26.", a: "TAW 2.88 in and AD 1.44 in. The deficit ends at 0.75 in, with LD 2.9 and ED 1.5 days at 0.24 in/d forecast. Plan the next pass in about 2 days." }
    ],
    figs: ["6.8", "6.9", "6.11", "6.12"]
  },
  "eq-6.26": {
    more: [
      "List daily ET for the period from a weather station or ET report, and daily effective rain from a field gauge (rain that soaked in and stayed in the root zone). A week is the usual period.",
      "The answer is the effective irrigation needed to match crop use for the period. Divide by ELQ to get gross depth. If rain exceeds ET, the answer is zero and the soil may have filled, so check the deficit before the next irrigation. This method assumes the soil started the period at the target level, so it does not catch a deficit carried over from earlier.",
      "Use it for weekly calls with growers. Switch to the full checkbook when the deficit is near AD."
    ],
    qa: [
      { q: "My potato field used 1.6 inches this week and got 0.7 inch of effective rain. How much do I need to put on?", a: "de is 0.9 in effective, as in Example 6.6. At 85% ELQ that is about 1.06 in gross." },
      { q: "ET was 0.25 a day all week and we got an inch of rain on Wednesday.", a: "ET totals 1.75 in, rain 1.0 in, so 0.75 in effective irrigation is needed." },
      { q: "We had 1.6 inches of rain and only 1.4 inches of ET this week.", a: "de is 0. Do not irrigate, and check the soil before the next pass since part of that rain may have drained through." }
    ],
    figs: ["6.9"]
  },
  "tab-6.1": {
    more: [
      "Pick the crop group (1 most sensitive to 4 least) and enter the maximum daily ET expected for the period. Values between columns are interpolated. Peak summer ET is 0.25 to 0.35 in/d in most US irrigated areas.",
      "fdc falls as ET rises because the crop cannot pull water fast enough from drier soil when demand is high. Potatoes and onions at peak ET are near 0.20 to 0.25, and corn and soybean 0.45 to 0.55. The table is a guide for maximum yield and can be relaxed late in the season when the crop is near maturity.",
      "Use the result in Eq. 6.4 and the LD calculator."
    ],
    qa: [
      { q: "Corn at 0.28 inch a day. How much depletion can I allow?", a: "Group 4 at 0.28 in/d gives fdc 0.50 and frc 0.50." },
      { q: "Dry beans at 0.3 inch a day?", a: "Group 3 gives fdc 0.40 (0.397 by interpolation), as used in Example 6.3." },
      { q: "Potatoes at 0.25 inch a day versus tomatoes at 0.22?", a: "Potatoes (group 1) fdc is 0.245. Tomatoes (group 2) at 0.22 in/d is 0.375. Potatoes need much tighter management." }
    ],
    figs: ["6.2"]
  },
  "tab-6.2": {
    more: [
      "Pick the crop. The range is the maximum effective rooting depth of a mature crop. The upper value only occurs in deep, uniform, fertile soils with no barrier.",
      "For scheduling, the managed root zone is usually shallower than the upper value, so use Table 6.3 or local guidance. Cut the depth to the top of any hardpan, gravel or water table. Using 6 ft for corn on a 2 ft sandy loam over gravel would triple TAW on paper.",
      "Use the result as RdMAX in the root growth calculator and as Rd in TAW."
    ],
    qa: [
      { q: "How deep do corn roots go?", a: "Table 6.2 gives 3.3 to 6.6 ft. For scheduling most guides use 3 ft (Table 6.3)." },
      { q: "What about potatoes?", a: "1.3 to 2.6 ft. On sandy soil plan with about 1.5 to 2 ft." },
      { q: "And alfalfa and soybeans?", a: "Alfalfa 3.3 to 10 ft and soybeans 2.6 to 5.0 ft. Use the shallower end unless soil pits show deeper roots." }
    ],
    figs: ["6.3"]
  },
  "tab-6.3": {
    more: [
      "Pick the crop. The table gives the root depth assumed at each growth stage in Nebraska and the maximum managed depth in parentheses. Use the growth stage you see in the field.",
      "These depths are practical for irrigation scheduling and are shallower than Table 6.2. Corn reaches 3 ft at silking, which is the managed maximum. In soils with a barrier, stop at the barrier.",
      "Use as Rd in TAW and AD, or check the root growth calculator against it."
    ],
    qa: [
      { q: "My corn is at 12 leaf. What root depth do I use?", a: "2.0 ft at 12 leaf, 3.0 ft at silking, which is the managed maximum." },
      { q: "Soybeans at full bloom?", a: "2.5 ft, going to 3.0 ft by pod elongation. The managed maximum is 3 ft." },
      { q: "Dry beans just at pod set?", a: "1.5 ft at initial flowering and pod set, with a managed maximum of 2.5 ft." }
    ],
    figs: ["6.3"]
  },
  "tab-6.4": {
    more: [
      "Pick the crop. The table gives long-term average daily use by growth stage in Nebraska. For alfalfa, enter days since cutting to get the adjustment factor.",
      "Use these values to forecast ET for LD and ED when no current ET is available. Real ET on a hot, windy day can be 30% higher than the table, and on a cool cloudy day much lower. Corn peaks at 0.30 in/d at silking. Alfalfa use is halved for 10 days after cutting and cut by a quarter from day 10 to 20.",
      "Use as ETf in LD and ED or as daily ET in a rough checkbook."
    ],
    qa: [
      { q: "My corn is silking. What should I use for ET?", a: "Table 6.4 gives 0.30 in/d at silking, dropping to 0.26 at blister and 0.24 at milk." },
      { q: "Soybeans at full pod?", a: "0.30 in/d at full pod, 0.24 at seed fill." },
      { q: "We cut alfalfa 15 days ago. It's July 1.", a: "The table gives 0.30 in/d for July 1. Days 10 to 20 after cutting use 0.75 of that, about 0.23 in/d." }
    ],
    figs: []
  },
  "tab-6.5": {
    more: [
      "Read the tension from a tensiometer or granular matrix sensor (Watermark) in centibars. Pick the soil texture and the depth of soil the sensor represents. The table is example data for Nebraska soils, so use local release curves if you have them.",
      "The result converts tension to the deficit in that layer and to fraction depleted. On sandy soils a small change in tension is a large change in deficit, so read sensors often. The table has no 80 cb value for fine sand and loamy sand, so for those textures the calculator holds at the 70 cb value.",
      "Sum each sensor's SWD over the root zone, then use LD and ED or Table 6.6 to decide when to irrigate."
    ],
    qa: [
      { q: "My Watermark in sandy loam reads 40 cb and stands for 12 inches. How dry is it?", a: "0.050 in/in, so the deficit is 0.6 in in that foot. Fraction depleted is 0.43." },
      { q: "Fine sandy loam, 60 cb, 12 inches.", a: "0.083 in/in, a deficit of 1.0 in in that foot and 55% depleted. Past the 45 cb threshold in Table 6.6, so irrigate." },
      { q: "Loamy sand sensor at 30 cb stands for 18 inches.", a: "0.033 in/in gives 0.59 in deficit and 36% depleted. Table 6.6 says 25 cb is the trigger for loamy sand, so it is time." }
    ],
    figs: ["6.4"]
  },
  "tab-6.6": {
    more: [
      "Pick the soil texture. The threshold assumes fdc 0.35 and a sensor near the vertical middle of the root zone.",
      "When the sensor reaches the threshold, start irrigating. Sands hit the trigger at low tension (20 to 25 cb) and silt loams and clay loams at about 80 cb. If the crop allows more depletion than 0.35, a higher threshold is reasonable. Average several sensors so one bad reading does not drive the decision.",
      "Pair with Table 6.5 to convert the reading to a deficit."
    ],
    qa: [
      { q: "My silt loam sensor reads 60 cb. Time to irrigate?", a: "The threshold is 80 cb, so not yet." },
      { q: "And on loamy sand?", a: "25 cb. Sands go from wet to dry fast, so check daily." },
      { q: "Sandy loam and fine sand?", a: "35 cb for sandy loam and 20 cb for fine sand." }
    ],
    figs: ["6.4"]
  }
});

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

window.CALC_USE2 = Object.assign(window.CALC_USE2 || {}, {
  "eq-8.1": {
    more: [
      "You rarely measure velocity directly. Get it from a flow meter reading and the pipe inside diameter with Eq. 8.5, or from the meter itself if it shows velocity. Farm mainlines sized to the 5 ft/s (1.5 m/s) guideline run 2 to 5 ft/s, while short pump discharge heads, meter runs and undersized risers can run 8 to 12 ft/s. Use the inside diameter from the pipe table, never the nominal size.",
      "Velocity head goes up with the square of velocity, so it is small until the pipe is overloaded. At 5 ft/s it is 0.39 ft, about 0.17 psi, which is well inside the reading error of a field gauge. At 10 ft/s it is 1.6 ft (0.7 psi), and at that speed fitting losses, which are K times velocity head, start to matter. If your answer is above about 1 ft, take it as a sign the pipe is too small rather than as a number to carry forward.",
      "Velocity head feeds the total head at a point (Eq. 8.4), the Bernoulli balance (Eqs. 8.6 and 8.7) and every minor loss (Eq. 8.12). Figure 8.3 gives the same value graphically."
    ],
    qa: [
      { q: "My gauge at the pump says 55 psi. Do I need to add anything for the water moving through the pipe?", a: "Find the velocity first. An 8 in PVC main carrying 700 gpm runs about 4.9 ft/s, and entering 5 ft/s gives a velocity head of 0.39 ft, or 0.17 psi. That is less than one gauge division, so for a farm main you can use the gauge reading as is." },
      { q: "The dealer put a 4 inch meter on my 400 gpm line. Is that throwing away much energy?", a: "At 400 gpm a 4 in pipe runs 10.2 ft/s. Enter 10.23 ft/s and the velocity head is 1.6 ft, the book's Example 8.2 value. Every elbow and valve in that section loses a multiple of it, so the run around the meter should be kept short and straight." },
      { q: "On a design check, a 10 inch line at 400 gpm runs 1.6 ft/s. Can I drop velocity head from the calculations?", a: "Enter 1.63 ft/s and the velocity head is 0.04 ft, or about 0.02 psi. Drop it. The book does the same in Example 8.3 and uses the pressure form of Bernoulli (Eq. 8.10) for this kind of line." }
    ],
    figs: ["8.3"]
  },
  "eq-8.5": {
    more: [
      "Flow comes from a propeller or magnetic meter, a pump test, or the design flow of the system, such as a pivot at 6 to 7 gpm per acre. Inside diameter comes from the pipe table: 8 in PVC PIP Class 125 is 7.658 in, 10 in is 9.572 in, and 4 in aluminum sprinkler pipe is 3.900 in. Using nominal size can shift velocity by 10% or more on small pipe.",
      "The book's guideline for mainlines is 5 ft/s or less. Above that, water hammer from a fast valve closure or a pump trip can split a PVC line, and friction loss climbs quickly. Between 5 and 7 ft/s is common in sprinkler laterals and pivot spans, where the flow drops along the pipe. If a buried main tests above 5 ft/s, the usual fixes are the next pipe size up, a second line, or a slower valve and surge protection.",
      "Velocity from this calculator feeds the velocity head (Eq. 8.1), fitting losses (Eq. 8.12) and the Table 8.5 sizing check."
    ],
    qa: [
      { q: "I want to push 900 gpm through my 8 inch PVC main. Is that too fast?", a: "Enter 900 gpm and 7.658 in for 8 in PIP. Velocity is 6.3 ft/s, above the 5 ft/s guideline. A 10 in PIP line (9.572 in) at the same flow runs 4.0 ft/s, so for new pipe go to 10 in, and on the existing line use slow closing valves and an air and vacuum relief." },
      { q: "We are adding 30 acres to a hand line system fed by 4 inch aluminum. Can it carry 180 gpm?", a: "Enter 180 gpm and 3.9 in. Velocity is 4.8 ft/s, right at the limit, with a velocity head of 0.36 ft. It will carry the flow, but any more acres should go on a separate line, and you should check friction loss along the line before adding sprinklers." },
      { q: "For a cost-share review, the plan shows 450 gpm in 6 inch PVC IPS. Does it meet the velocity rule?", a: "Enter 450 gpm and 6.120 in. Velocity is 4.9 ft/s, under 5 ft/s, so the size is acceptable. It has no margin, so if the grower later adds flow, the main becomes the limit." }
    ],
    figs: ["8.3"]
  },
  "eq-8.2-8.3": {
    more: [
      "Elevation differences come from a survey level, RTK GPS, a USGS topo map or Google Earth for planning. A 1 ft change in elevation is 0.433 psi, so a 30 ft rise across a quarter section is 13 psi. Depth of water in a tank or a well column is measured with a tape, sounder or airline.",
      "The factor 0.433 psi per ft (2.31 ft per psi, or 9.8 kPa per m) holds only for water. Pressure from a column of water does not depend on pipe size or tank shape, only on height. A common mistake is to treat the elevation difference to the top of a pivot span as the head, when what matters is the elevation of the nozzles and the pipe at the point of interest.",
      "Use this conversion any time an elevation enters a pressure calculation: Eq. 8.10, lateral inlet pressure (Eqs. 11.5 to 11.9) and the lift term in TDH (Eq. 8.13)."
    ],
    qa: [
      { q: "My field rises 30 feet from the well to the back corner. How much pressure do I lose to the hill?", a: "Enter 30 ft and the result is 13.0 psi. That is lost to elevation alone, before any friction. If the sprinklers need 40 psi at the high corner, the pump has to deliver at least 53 psi plus the pipe friction." },
      { q: "I have a tank on a stand 20 feet above my drip block. How much pressure will that give me?", a: "Enter 20 ft and you get 8.7 psi at the block with no flow. Once water moves, friction in the supply line takes some of that, so check that the emitters still get their rated pressure, often 8 to 15 psi for drip." },
      { q: "A drip zone sits 50 feet below the filter station. Do I need a pressure regulator?", a: "Enter 50 ft and the elevation gain is 21.7 psi. If the filter station runs at 30 psi, the zone could see over 50 psi at no flow, which is above the rating of most drip tape. Put a regulator at the zone valve." }
    ],
    figs: ["8.1"]
  },
  "eq-8.4": {
    more: [
      "Pick a reference datum first, usually the pump base or the ground at the well, and measure elevation of each point above it with a level or GPS. Pressure comes from a gauge installed at that point, ideally a liquid filled gauge read at the middle of its range. Flow and inside diameter give velocity.",
      "Total head is the energy the water carries, in feet. On a farm system, pressure head is almost always the largest part, elevation head is next, and velocity head is under 1 ft unless the pipe is overloaded. Total head should always decrease in the direction of flow. If a downstream point shows more total head than the pump, a gauge is wrong or an elevation was taken from a different datum.",
      "Totals from two points go into the Bernoulli balance (Eqs. 8.6 and 8.7) to find the head lost between them."
    ],
    qa: [
      { q: "The pump outlet is 15 feet above my reference with 60 psi on the gauge in a 4 inch pipe at 400 gpm. What is the total head there?", a: "Enter Z = 15 ft, P = 60 psi, Q = 400 gpm and d = 4 in. Pressure head is 138.6 ft, velocity head 1.6 ft, and total head 155 ft. That is the Example 8.2 case, and the book rounds it to 156 ft." },
      { q: "I read 55 psi at a riser on the hill 40 feet above the well. How much energy is left there?", a: "With 800 gpm in an 8 in PIP main, enter Z = 40 ft, P = 55 psi, Q = 800 and d = 7.658 in. Total head is 167.5 ft: 127 ft pressure, 40 ft elevation and 0.5 ft velocity. Compare it with total head at the pump to see the head lost in the main." },
      { q: "At my filter station on level ground I have 35 psi in a 6 inch line at 600 gpm. Is velocity head worth counting?", a: "Enter Z = 0, P = 35 psi, Q = 600 gpm and d = 6.12 in. Velocity is 6.5 ft/s and its head is 0.67 ft out of a total of 81.5 ft, under 1%. You can skip it in the field, but the velocity is above 5 ft/s, which is worth noting for the main." }
    ],
    figs: ["8.2", "8.3"]
  },
  "eq-8.6-8.7": {
    more: [
      "Point 1 is usually a place you know well, such as the pump discharge gauge. Convert its pressure to feet (2.31 ft per psi), get velocity from flow and pipe size, and set the elevations from a survey. Head loss between the points comes from friction (Eq. 8.11 or Table 8.2) plus fittings (Eq. 8.12).",
      "The result is pressure head and pressure at point 2. Compare it with the pressure the field equipment needs: 20 to 40 psi at a pivot inlet for low pressure packages, 50 psi for many impact sprinkler laterals, and 10 to 30 psi for drip. A negative or very low result means the water will not get there at the design flow. Keep elevations on one datum and use feet throughout, then convert to psi at the end.",
      "When velocity heads are about equal at both points, the pressure form in Eq. 8.10 is quicker and gives the same answer."
    ],
    qa: [
      { q: "I have 60 psi at the pump and the field is a quarter mile away and 15 feet higher. What will I have at the field?", a: "Enter h1 = 138.6 ft (60 psi), Z1 = 0, Z2 = 15 ft, velocities of 4.9 ft/s at both ends, and a head loss of 11.8 ft for the pipe. Pressure head at the field is 111.8 ft, or 48.4 psi. If the system needs 50 psi, raise pump pressure slightly or reduce loss with a larger main." },
      { q: "My well is at the top of the field and the pivot sits 20 feet lower. The pump makes 35 psi. What does the pivot see?", a: "Enter h1 = 80.85 ft (35 psi), Z1 = 0, Z2 = -20 ft, equal velocities of 5 ft/s and 6 ft of head loss. Pressure at the pivot is 41.1 psi, higher than at the pump because the 20 ft fall adds 8.7 psi and friction takes only 2.6 psi." },
      { q: "We go from a 6 inch to an 8 inch pipe at the filter. Does the slower water give me back pressure?", a: "Enter V1 = 6.3 ft/s, V2 = 3.6 ft/s, h1 = 115.5 ft (50 psi), level ground and 10 ft of loss through the filter. Pressure after the filter is 45.9 psi. The velocity change gives back only 0.4 ft (0.2 psi), so nearly all of the 4.1 psi drop is the filter itself." }
    ],
    figs: ["8.2", "8.4"]
  },
  "eq-8.8-8.9": {
    more: [
      "Friction loss comes from Eq. 8.11 or Table 8.2 for each pipe section. Minor losses come from Eq. 8.12 with K values from Table 8.4, or from manufacturer curves for meters, filters, backflow valves and chemigation check valves. A clean screen filter commonly loses 2 to 5 psi, and a sand media filter 3 to 8 psi before backflush.",
      "The total is what the pump has to overcome in addition to lift and the outlet pressure. On long mainlines friction dominates and minor losses are often under 10% of the total. On a pump station or filter manifold with many fittings in a short run, minor losses can be larger than friction. Keep every term in the same unit, all feet or all psi, before adding.",
      "The total head loss goes into Bernoulli (Eqs. 8.6 and 8.7) or, as pressure, into Eq. 8.10."
    ],
    qa: [
      { q: "I figured 11.8 feet of friction in the lateral and about 1 foot for the fittings. What is the total in psi?", a: "Enter hf = 11.8 ft and hm = 1 ft. Total head loss is 12.8 ft, or 5.5 psi. Use the 5.5 psi in the end pressure check." },
      { q: "How much am I losing between the pump and the filter station with all those elbows, the meter and the check valve?", a: "Say the 200 ft run has 4.6 ft of friction and the fittings and meter add 3.2 ft. Enter those and total loss is 7.8 ft, or 3.4 psi. Nearly half is in the fittings, so a long radius elbow or a straighter layout is worth pricing when the station is rebuilt." },
      { q: "On a design review, the pump station has 2.3 feet of pipe friction and 11.5 feet through a media filter and fittings. Is that a problem?", a: "Enter both and total loss is 13.8 ft, or 6.0 psi. The filter and fittings are 83% of it. That is normal for a filter station, but make sure the pump TDH includes the dirty filter loss, typically 5 psi more than clean, so pressure holds before backflush." }
    ],
    figs: ["8.4"]
  },
  "eq-8.10": {
    more: [
      "P1 is a gauge reading or the pump discharge pressure. Elevations come from a survey or GPS, and you only need the difference between the two points. Pressure loss is friction plus minor loss in psi, from Eq. 8.11, Table 8.2 and Eq. 8.12.",
      "The answer is the pressure at the far end of the pipe. Pressure drops 0.433 psi for every foot the pipe climbs and gains 0.433 psi for every foot it falls. Check the end pressure against what the sprinklers, pivot or emitters need. The sign of the elevation change is the most common error: enter real elevations for both points rather than a difference with a guessed sign.",
      "This is the core of the pipeline pressure check procedure, and the same idea sets lateral inlet pressure in Eqs. 11.5 to 11.9."
    ],
    qa: [
      { q: "My lateral starts at 60 psi and climbs 12 feet over its length with 5.1 psi of friction. What is the end pressure?", a: "Enter P1 = 60 psi, Z1 = 0, Z2 = 12 ft and PL = 5.1 psi. End pressure is 49.7 psi, the result of Example 8.4. The 12 ft rise costs 5.2 psi, about the same as friction." },
      { q: "The pump sits 25 feet above the pivot and puts out 35 psi. With 2.34 psi of loss in the main, what does the pivot get?", a: "Enter P1 = 35 psi, Z1 = 25 ft, Z2 = 0 and PL = 2.34 psi. The pivot gets 43.5 psi, as in Example 8.5. The downhill run gains 10.8 psi, so the pump could likely run at lower pressure." },
      { q: "We are moving a sprinkler set to a field 30 feet higher with about 6 psi of friction. The pump gives 45 psi. Will it work?", a: "Enter P1 = 45 psi, Z1 = 0, Z2 = 30 ft and PL = 6 psi. End pressure is 26 psi. Impact sprinklers designed for 45 to 50 psi will throw short and leave dry rings, so this field needs a booster or a different nozzle package." }
    ],
    figs: ["8.4"]
  },
  "eq-8.11": {
    more: [
      "Flow is from the meter or the design. Inside diameter is from the pipe table, and C from Table 8.1: 150 for PVC, 140 for galvanized steel pivot pipe, 120 for aluminum with couplers, 110 for gated aluminum and 100 for older steel. The outlet factor F is 1 for a mainline with no outlets, about 0.36 for a sprinkler lateral with 30 or more outlets (Table 8.3), and 0.54 or 0.56 for a center pivot.",
      "The result is friction loss per 100 ft and over the full length. For mainlines, a common design target is 1 psi per 100 ft or less, with velocity at or below 5 ft/s. Friction rises with flow to the 1.852 power and falls with diameter to the 4.866 power, so going up one pipe size often cuts friction by 60 to 70%. Mistakes to avoid are using nominal diameter, leaving F at 1 for a lateral, and using flow at the end of a lateral instead of at the inlet.",
      "The book's Table 8.2 gives the same numbers for common pipe. Use the friction total in Eq. 8.10 or the pipeline pressure check."
    ],
    qa: [
      { q: "How much pressure do I lose in a 1280 foot, 4 inch aluminum lateral carrying 165 gpm to 33 sprinklers?", a: "Enter Q = 165 gpm, d = 3.9 in, C = 120, F = 0.36 and L = 1280 ft. Loss is 0.39 psi per 100 ft and 5.0 psi over the lateral, matching Example 8.4. With F left at 1 you would get 14 psi, almost three times too high." },
      { q: "My half mile of 8 inch PVC mainline carries 700 gpm. How much pressure does it eat?", a: "Enter Q = 700 gpm, d = 7.658 in, C = 150, F = 1 and L = 2640 ft. Friction is 0.39 psi per 100 ft and 10.4 psi in total. If the same line were old steel at C = 100, the loss would be 22 psi." },
      { q: "On a pivot check, what friction should I expect along a 1300 foot machine with 6 5/8 inch pipe at 800 gpm and no end gun?", a: "Enter Q = 800 gpm, d = 6.4 in, C = 140, F = 0.54 and L = 1300 ft. Friction along the pivot is 9.6 psi. Add the elevation change to the high point and the end pressure needed by the last nozzles to get the pivot inlet pressure." }
    ],
    figs: ["8.4"]
  },
  "tab-8.1": {
    more: [
      "Identify the pipe on a field visit from the print on PVC (class or SDR and IPS or PIP), the couplers on aluminum, and the gates on gated pipe. Pivot spans are galvanized steel unless the dealer lists a coated or poly lined pipe. When the pipe is old, ask about age and look inside at a riser or a cut section for scale.",
      "The C value sets friction loss: a lower C means a rougher pipe and more loss at the same flow. Going from C = 150 to C = 100 raises friction loss by about 2.1 times. Book values are for pipe in fair condition. Old steel with heavy scale or iron bacteria can be well below 100, and gated pipe with half the gates open behaves rougher than new pipe.",
      "The C value goes into Eq. 8.11 and Eq. 11.11."
    ],
    qa: [
      { q: "What C value do I use for my gated aluminum pipe?", a: "Select aluminum pipe with gates and the table gives C = 110. Use that in Eq. 8.11 along with the outlet factor for the number of open gates." },
      { q: "I have an old steel mainline and a new PVC one, both 8 inch at 700 gpm over a half mile. How different is the friction?", a: "The table gives C = 100 for standard steel and 150 for PVC. Running Eq. 8.11 with each, the steel line loses 22.1 psi and the PVC line 10.4 psi over 2640 ft. Replacing the steel line saves about 12 psi of pump pressure every hour it runs." },
      { q: "For a cost-share design, should I use 150 or 130 for PVC gated pipe?", a: "Table 8.1 lists PVC pipe with gates at 130, lower than 150 for plain PVC, because the gate openings disturb the flow. Use 130 for the gated section and 150 for the buried PVC supply line." }
    ],
    figs: []
  },
  "tab-8.2": {
    more: [
      "Pick the pipe type and size from what is in the field and enter the flow from a meter or the design. The table covers aluminum sprinkler pipe, PVC IPS Class 160, aluminum gated pipe and PVC PIP Class 125 from 2 to 12 in. Between printed flows the calculator interpolates, and outside the printed range it falls back on Hazen-Williams.",
      "The table value is psi per 100 ft with no outlets. Multiply by length over 100, and by the outlet factor F when the pipe has sprinklers or gates. The shaded cells in the book, and the velocity check here, mark flows above 5 ft/s. A reading in that range on a buried main is a signal to go up a size, while on a short portable lateral it may be acceptable.",
      "Use the total in Eq. 8.10 or the pipeline pressure check, and compare it with the size from Table 8.5."
    ],
    qa: [
      { q: "What is the friction loss in 4 inch aluminum hand line at 165 gpm?", a: "Pick 4 in aluminum sprinkler pipe and enter 165 gpm. The table gives 1.10 psi per 100 ft, the value used in Example 8.4. For a lateral with sprinklers, multiply by the outlet factor (about 0.36) and the length over 100." },
      { q: "I want to run 150 gpm through 300 feet of 3 inch PVC to a new pivot corner. Is 3 inch big enough?", a: "Pick PVC IPS 3 in, enter 150 gpm and 300 ft. Loss is 1.52 psi per 100 ft and 4.6 psi total, at 5.9 ft/s, above the guideline. In 4 in PVC IPS the same flow loses 0.45 psi per 100 ft, 1.35 psi total, at 3.6 ft/s. Go with 4 inch." },
      { q: "Can 8 inch gated pipe carry 900 gpm across a quarter mile field?", a: "Pick 8 in aluminum gated pipe, enter 900 gpm, 1320 ft and F = 0.36. The table gives 0.96 psi per 100 ft and 4.6 psi over the run, at 5.9 ft/s. That is about 10 ft of head on a low pressure pipe, so the far gates will run weak. Feed from the middle, split the set, or use 10 in pipe." }
    ],
    figs: []
  },
  "tab-8.3": {
    more: [
      "Count the outlets on the pipe: sprinklers on a lateral, open gates on gated pipe, or drop nozzles on a pivot. For a lateral, outlets are about the length divided by the spacing, such as 33 sprinklers on 1280 ft at 40 ft. The table assumes outlets equally spaced with equal flow and the first outlet one full spacing from the inlet.",
      "F is the fraction of the full flow friction loss that actually occurs, because flow drops at each outlet. It falls quickly at first, 0.634 for 2 outlets and 0.396 for 10, then levels off near 0.36 for 30 or more and 0.345 above 100. Center pivots use 0.54 without an end gun and 0.56 with one, because outlet flow increases toward the end. Leaving F at 1 on a lateral overstates loss by roughly three times.",
      "F multiplies the friction in Eq. 8.11, Table 8.2 and Eq. 11.11."
    ],
    qa: [
      { q: "My hand line has 33 sprinklers. What outlet factor do I use?", a: "Enter N = 33. Table 8.3 gives F = 0.36, as in Example 8.4. The Christiansen formula with m = 1.852 gives 0.366, close enough for field work." },
      { q: "I am opening 60 gates on a gated pipe. What F should I use for friction?", a: "Enter N = 60 and the table gives 0.354. Multiply the no outlet friction from Table 8.2 by 0.354. For gated pipe the flow per gate is rarely equal, so treat the result as a close estimate." },
      { q: "A short drip manifold has only 4 laterals coming off it. Is 0.36 still right?", a: "No. Enter N = 4 and the table gives F = 0.48. With few outlets the flow stays high over more of the pipe, so using 0.36 would understate loss by about 25%." }
    ],
    figs: ["11.9"]
  },
  "eq-8.12": {
    more: [
      "List every fitting and valve between the two points: elbows, tees, gate and check valves, strainers, foot valves. Pick the K value from Table 8.4 for the type and size, or enter K from the manufacturer for meters, backflow preventers and filters. Velocity comes from flow and inside diameter.",
      "Each fitting loses K times the velocity head. At 5 ft/s a flanged 90 degree elbow (K about 0.3) loses about 0.1 ft, so a few elbows on a long main do not matter. A globe valve (K 5.6 to 7) or a partly closed butterfly valve can lose several psi. Minor losses grow with velocity squared, so a manifold running 8 to 10 ft/s can lose more in fittings than in the pipe.",
      "Add the result to friction in Eqs. 8.8 and 8.9, or enter the total K in the pipeline pressure check."
    ],
    qa: [
      { q: "How much pressure does one 6 inch flanged elbow cost me at 400 gpm?", a: "Pick the regular flanged 90 degree elbow at 6 in (K = 0.28) and enter 400 gpm and 6 in. Velocity is 4.5 ft/s and the loss is 0.09 ft, or 0.04 psi. Not worth worrying about." },
      { q: "The pump station uses a 6 inch globe valve to throttle 600 gpm. What is it costing?", a: "Pick the flanged globe valve at 6 in (K = 5.8), enter 600 gpm and 6.065 in. Velocity is 6.7 ft/s and the loss is 4.0 ft, or 1.7 psi, fully open. A gate or butterfly valve in the same spot would lose under 0.1 psi." },
      { q: "The discharge head has four 4 inch elbows at 400 gpm. Is that adding much?", a: "Pick the 4 in regular flanged elbow (K = 0.31), enter 4 fittings, 400 gpm and 4.026 in. Velocity is 10 ft/s and the four elbows lose 2.0 ft, or 0.85 psi. The high velocity is the real issue: a 6 in discharge would cut that to about 0.15 psi." }
    ],
    figs: ["8.5", "8.6"]
  },
  "tab-8.4": {
    more: [
      "Walk the pump station and the pipeline and note each fitting by type, connection (flanged or screwed) and nominal size. Screwed fittings are listed only for 3 and 4 in. For anything not in the table, such as meters, backflow assemblies and filters, use the manufacturer's loss curve or K value.",
      "K is a multiplier on velocity head. Values under 0.3 are elbows and open gate valves. Values around 1 are strainers, foot valves and branch flow through a tee. Values of 2 are swing check and angle valves, and 5 to 7 are globe valves. A blank in the table means the fitting is not listed at that size, so do not use a value from another size without checking.",
      "Use the K values in Eq. 8.12 or add them up for the ΣK input in the pipeline pressure check."
    ],
    qa: [
      { q: "What K do I use for an 8 inch flanged gate valve?", a: "Pick valve, gate flanged at 8 in. K = 0.075, the lowest loss valve in the table when fully open." },
      { q: "We have a swing check, a strainer and a long radius elbow, all 6 inch flanged, at the pump. What is the total K?", a: "Look up each one: swing check 2.0, strainer 0.85 and long radius 90 degree elbow 0.18. Total K is 3.03. Enter that in the pipeline pressure check or in Eq. 8.12 with K set to Other." },
      { q: "A grower wants to replace a 6 inch globe valve with a gate valve. How much difference does the table show?", a: "Globe flanged at 6 in is K = 5.8 and gate flanged at 6 in is K = 0.11, about 50 times less. At 600 gpm in 6 in pipe that is roughly 1.7 psi saved every hour the pump runs." }
    ],
    figs: ["8.5", "8.6"]
  },
  "tab-8.5": {
    more: [
      "Enter the system flow: the pump test flow, the pivot design flow, or the gross capacity times the acres (Eq. 5.20). Pick the pipe family you plan to use: aluminum sprinkler pipe, PVC IPS, aluminum gated pipe or PVC PIP. The table lists the maximum flow at 5 ft/s for each size, rounded to the nearest 5 gpm.",
      "The answer is the smallest size that keeps velocity at or below 5 ft/s. Treat it as a starting size. On long mainlines, friction cost over 20 or more years of pumping can justify the next size up, and a pressure check with Eq. 8.11 or the pipeline procedure should follow. If the flow is beyond the largest size listed, use larger pipe or split into two lines.",
      "Check the chosen size with the friction table (Table 8.2) and the pipeline pressure check."
    ],
    qa: [
      { q: "What size PVC mainline do I need for 700 gpm?", a: "Pick PVC PIP and enter 700 gpm. The table gives 8 in, with a maximum of 720 gpm and a velocity of 4.9 ft/s at your flow, as in Example 8.5. Since 700 is close to the limit, price 10 in for a long run." },
      { q: "I have 900 gpm to move through gated pipe. Is 8 inch enough?", a: "Pick aluminum gated and enter 900 gpm. The smallest size at 5 ft/s is 10 in (up to 1200 gpm), at 3.8 ft/s. The 8 in size tops out at 765 gpm." },
      { q: "A new well tests at 1700 gpm. What PIP size does the table give?", a: "Pick PVC PIP and enter 1700 gpm. The calculator reports the flow is larger than the table, since 12 in PIP tops out at 1615 gpm. Plan on 15 in pipe or two parallel lines, and check friction with Eq. 8.11." }
    ],
    figs: ["8.5", "9.11"]
  },
  "pipeline-design": {
    more: [
      "Collect the pipe type and size, length, the flow at the inlet or the number of outlets and flow per outlet, the pressure at the inlet, and the elevation change from inlet to end. Elevation comes from a survey or RTK GPS. Add up K values for the valves and fittings from Table 8.4 if they are significant.",
      "The output is end pressure along with the friction and minor losses behind it. Compare the end pressure with what the equipment needs and check that velocity at the inlet is at or below 5 ft/s for a mainline. On a sprinkler lateral, the book also limits the pressure difference along the lateral to 20% of the average pressure. When the end pressure is short, try the next pipe size, a shorter run, or a higher inlet pressure, in that order of cost.",
      "This procedure follows Examples 8.4 and 8.5 and combines Eq. 8.10, Eq. 8.11b and Eq. 8.12. Lateral design continues in Eqs. 11.5 to 11.13."
    ],
    qa: [
      { q: "Will I have enough pressure at the end of my 1280 foot aluminum hand line that climbs 12 feet?", a: "Pick 4 in aluminum sprinkler pipe, 1280 ft, equal outlets, 33 sprinklers at 5 gpm, 60 psi at the inlet and a 12 ft rise. Flow is 165 gpm, F = 0.36, friction 5.0 psi, and end pressure 49.8 psi (the book rounds to 49.7). If the sprinklers need 50 psi, that is just short." },
      { q: "I am bringing 700 gpm a half mile through 8 inch PIP to a pivot 18 feet higher, with 55 psi at the pump. What does the pivot get?", a: "Pick 8 in PVC PIP, 2640 ft, no outlets, Q = 700 gpm, P1 = 55 psi, rise 18 ft and ΣK = 3.2 for the valves and elbows. Friction is 10.4 psi, minor loss 0.5 psi and pivot inlet pressure 36.3 psi. Check that against the pivot's nozzle chart." },
      { q: "On a gated pipe design, I have 264 gates at 3 gpm on 660 feet of 8 inch with 8 psi at the riser. Will the far end get water?", a: "Pick 8 in aluminum gated pipe, 660 ft, equal outlets, 264 at 3 gpm, P1 = 8 psi and level ground. Flow is 792 gpm, F = 0.345, friction 1.7 psi, and end pressure 6.3 psi. If the pipe falls 2 ft toward the end, end pressure rises to 7.1 psi, which helps even out the gates." }
    ],
    figs: ["8.4", "8.5", "8.6"]
  },
  "eq-8.13": {
    more: [
      "Discharge pressure comes from a gauge on the discharge head, read with the pump running at its normal flow. Lift is the pumping water level below the discharge, measured with a well sounder or airline, plus the height of the gauge above ground. For a surface source, lift is the vertical distance from the water surface to the pump discharge.",
      "TDH is the total head the pump has to produce at that flow. Irrigation wells commonly run 150 to 400 ft of TDH. Use pumping water level, not static level, because drawdown can add 20 to 100 ft in some wells. The equation ignores column friction and velocity head, which typically add a few feet on a vertical turbine.",
      "TDH feeds water horsepower (Eq. 8.18), energy per acre-inch (Eq. 8.22) and the pump evaluation and pump match procedures. Pumping level comes from Eqs. 9.1 and 9.3."
    ],
    qa: [
      { q: "My pump shows 50 psi and the water is 100 feet down when it runs. What is my TDH?", a: "Enter P = 50 psi and L = 100 ft. TDH is 216 ft, as in Example 8.6. Use that to find water horsepower and energy use." },
      { q: "We are converting a pivot from a 40 psi package to a 25 psi LEPA package with a 180 foot lift. What TDH does the pump need now?", a: "Enter P = 25 psi and L = 180 ft. TDH is 238 ft. At 40 psi it was 272 ft, so the pump would make 34 ft more head than needed unless it is trimmed, de-staged or put on a VFD." },
      { q: "A river pump lifts 60 feet and runs the sprinklers at 65 psi. What TDH do I put on the pump order?", a: "Enter P = 65 psi and L = 60 ft. TDH is 210 ft at the design flow. Add a few feet for suction and column losses when choosing from the pump curve." }
    ],
    figs: ["8.8", "8.15"]
  },
  "eq-8.14": {
    more: [
      "Install gauges on both sides of the booster: one on the suction or inlet and one on the discharge. Read them at the same time with water flowing at the normal rate. A suction gauge on a pump drawing from a ditch or pond will often read a vacuum, which you enter as a negative psi.",
      "TDH is the head the booster adds. A booster on a pivot end gun or a corner arm is commonly 20 to 50 psi (46 to 115 ft). If the inlet pressure drops while the booster runs, the supply line is too small or the main pump is near the end of its curve. On a suction lift, high vacuum (more than about 15 to 20 ft of lift) risks cavitation, which shows up as noise and pitting.",
      "Use TDH from this equation in Eq. 8.18 for horsepower and in Eq. 8.22 for energy."
    ],
    qa: [
      { q: "My booster pump takes 30 psi in and puts 70 psi out. What head is it making?", a: "Enter Pout = 70 and Pin = 30 psi. TDH is 92 ft. That is the number to check against the booster's pump curve at your flow." },
      { q: "Our canal turnout gives 5 psi and the drip system needs 45 psi. What TDH should the booster have?", a: "Enter Pout = 45 and Pin = 5 psi. The booster needs 92 ft of TDH at the system flow, plus filter loss if the filters are downstream of the gauge." },
      { q: "The centrifugal pump on my pond shows 4 psi of vacuum on the suction side and 30 psi on the discharge. What TDH is that?", a: "Enter Pin = -4 psi and Pout = 30 psi. TDH is 78.5 ft. The 4 psi of vacuum is about 9 ft of suction lift, which is fine for most centrifugal pumps." }
    ],
    figs: ["8.7"]
  },
  "eq-8.15": {
    more: [
      "Get the current flow and TDH from a pump test, and BHP from the pump curve or measured motor power. Speed comes from the motor nameplate or a VFD display (1770 and 3550 rpm are common for 4 and 2 pole motors). For an impeller trim, use the impeller diameter from the pump curve, in inches, for both values.",
      "Flow changes with the speed ratio, head with its square and horsepower with its cube. A 10% cut in speed gives about 10% less flow, 19% less head and 27% less power along the pump curve. The laws move the pump curve, so the real operating point is where the new curve crosses the system curve. On a well with large static lift, flow drops more than the ratio suggests. Trimming more than about 10 to 15% of the impeller diameter makes the laws less accurate.",
      "Use the result with the pump match procedure to decide between trimming, de-staging or a VFD, and confirm with the manufacturer's curves in Figures 8.10 and 8.11."
    ],
    qa: [
      { q: "If I slow my pump from 1770 to 1670 rpm, what happens to flow, head and horsepower?", a: "Enter 1770 and 1670 rpm, 800 gpm, 285 ft and 80 bhp. The new point is about 755 gpm, 254 ft and 67 bhp. To hit a target TDH of 235 ft, the last output says about 1607 rpm." },
      { q: "A VFD dealer says I can run at 1500 rpm on the low pressure package. What would I get?", a: "Enter 1770 and 1500 rpm with 800 gpm, 285 ft and 80 bhp. The pump curve moves to 678 gpm at 205 ft and 49 bhp. If the pivot needs 235 ft at 800 gpm, 1500 rpm is too slow, so set the VFD on pressure rather than a fixed speed." },
      { q: "The pump has a 10.5 inch impeller making 250 feet at 900 gpm. What diameter gives 220 feet?", a: "Enter 10.5 as the current diameter, 900 gpm, 250 ft and 75 bhp, with a target of 220 ft. The diameter for 220 ft is 9.85 in. Trimming to 9.75 in would give about 836 gpm at 216 ft and 60 bhp, so stay at 9.85 in and confirm on the curve." }
    ],
    figs: ["8.10", "8.11", "8.16"]
  },
  "eq-8.16": {
    more: [
      "Water horsepower comes from flow and TDH (Eq. 8.18). Power into the pump shaft is from the pump curve, a dynamometer test, or measured electrical input times motor efficiency, usually 0.90 to 0.95 for irrigation motors. For an engine, shaft power is hard to measure in the field, so the book rates the whole plant with Eq. 8.20 instead.",
      "New vertical turbine and centrifugal pumps run 75 to 85% at their best efficiency point. A worn pump or one operating far off its curve can drop to 50 to 60%. Low efficiency means more fuel or power per acre-inch. Do not compare a pump efficiency with a plant performance rating, which includes the motor or engine and the drive.",
      "Efficiency goes into Eq. 8.19 to size the motor or engine."
    ],
    qa: [
      { q: "My pump puts 44 water horsepower into the water and takes 55 horsepower at the shaft. How efficient is it?", a: "Enter 44 and 55. Efficiency is 0.80, the Example 8.6 value. That is a pump in good condition." },
      { q: "An older pump test shows 30 whp against 50 shaft horsepower. Is it worth repairing?", a: "Enter 30 and 50. Efficiency is 0.60, about 20 points below a new pump. That pump uses about a third more energy than it should, so run the pump evaluation to put a dollar value on it before deciding." },
      { q: "For a cost-share application, the new pump curve shows 52.5 whp at 70 bhp at the design point. Does that meet a 75% requirement?", a: "Enter 52.5 and 70. Efficiency is 0.75, right at the requirement. Ask the dealer whether a different impeller or model puts the design point closer to the best efficiency point." }
    ],
    figs: ["8.9", "8.15"]
  },
  "eq-8.17-8.19": {
    more: [
      "Flow comes from a meter or the system design. TDH comes from Eq. 8.13 or 8.14, or from the design: pumping level plus pressure needed at the pump. Pump efficiency comes from the pump curve at the design point, typically 0.75 to 0.85 for a new irrigation pump.",
      "Water horsepower is what the water receives. Brake horsepower is what the motor or engine has to deliver to the pump shaft. Pick a motor at or above the brake horsepower, with the next standard size up if the pump will run near the end of its curve. Leave room for drive losses on right angle gear drives and for a falling water table, which raises TDH.",
      "Water horsepower feeds the performance rating (Eq. 8.20) and energy per hour (Eq. 8.21)."
    ],
    qa: [
      { q: "My pump moves 800 gpm against 216 feet of head. How big a motor do I need?", a: "Enter 800 gpm, 216 ft and 0.80. Water horsepower is 43.6 and brake horsepower 54.5, as in Example 8.6. A 60 hp motor is the standard size." },
      { q: "A new well will need 1000 gpm at 300 feet. What horsepower should I budget for?", a: "Enter 1000 gpm, 300 ft and 0.75. Water horsepower is 75.8 and brake horsepower 101. A 100 hp motor would run at its limit, so plan on 125 hp unless the dealer's curve shows better efficiency." },
      { q: "Can a 30 hp motor run a 500 gpm transfer pump with 150 feet of head?", a: "Enter 500 gpm, 150 ft and 0.70. Brake horsepower is 27.1, so a 30 hp motor will carry it with about 10% margin." }
    ],
    figs: ["8.9", "8.15"]
  },
  "tab-8.6": {
    more: [
      "Identify the energy source from the power unit: diesel, propane, natural gas, gasoline engine, or electric motor. The unit of energy is the one on the fuel bill: gallons, thousand cubic feet (mcf) or kilowatt hours.",
      "The criteria are what a well tuned plant should achieve: 12.5 whp-hr per gallon of diesel, 0.885 whp-hr per kWh of electricity, 61.7 per mcf of natural gas, 6.89 per gallon of propane and 8.66 per gallon of gasoline. They assume a 75% pump efficiency plus a good engine or motor and drive. A plant at the criteria has a performance rating of 1.0. Many plants tested in the field run 0.6 to 0.8.",
      "The criteria are the denominator in Eqs. 8.20, 8.21 and 8.22."
    ],
    qa: [
      { q: "What should a good electric pumping plant achieve?", a: "Pick electricity. The criterion is 0.885 whp-hr per kWh. If your plant makes 0.66, the performance rating is 0.75." },
      { q: "I run a diesel engine. What does the Nebraska standard expect?", a: "Pick diesel and the table gives 12.5 whp-hr per gallon. A plant making 44 whp should burn about 3.5 gal/hr to meet it." },
      { q: "We are comparing a propane and a natural gas engine for a new well. What criteria apply?", a: "Propane is 6.89 whp-hr per gallon and natural gas 61.7 per mcf. Use them in Eq. 8.22 with local prices to compare cost per acre-inch." }
    ],
    figs: ["8.15"]
  },
  "eq-8.20": {
    more: [
      "Water horsepower comes from a measured flow and TDH (Eq. 8.18). Measure energy use over a timed run: for diesel or propane, a fuel flow meter or a measured drop in a calibrated tank over 1 hr or more. For electricity, read kW from the meter or time the meter disk. For natural gas, time the gas meter dial.",
      "The rating compares actual performance with the Nebraska criteria. A rating of 1.0 meets the criteria. Values of 0.80 to 0.90 are fair, and below about 0.70 a repair usually pays for itself in a few seasons. Low ratings come from worn pumps, pumps running off their curve, engines out of tune, or poor drives. Measure everything at the same time and at the normal operating flow.",
      "The rating goes into Eqs. 8.21 and 8.22 to put a cost on poor performance."
    ],
    qa: [
      { q: "My diesel engine burns 4 gallons an hour and the pump makes 44 water horsepower. How is it doing?", a: "Enter 44 whp, 4 gal/hr and diesel. Actual performance is 11 whp-hr per gallon and the rating is 0.88, the Example 8.7 result. That is fair, and a tune-up may bring it closer to 1.0." },
      { q: "We measured 85 kW on the meter with 56 water horsepower. Is the electric plant OK?", a: "Enter 56 whp, 85 kW and electricity. Performance is 0.66 whp-hr per kWh and the rating 0.74. That is low enough to look at pump wear and the operating point." },
      { q: "A natural gas engine uses 1.3 mcf per hour making 56 whp. What is its rating?", a: "Enter 56 whp, 1.3 mcf/hr and natural gas. Performance is 43.1 whp-hr per mcf and the rating 0.70. Check the engine timing and the gear drive, then run the pump evaluation for the savings." }
    ],
    figs: ["8.15"]
  },
  "eq-8.21": {
    more: [
      "Water horsepower comes from Eq. 8.18. Pick the energy source and enter the performance rating from a pump test, or 1.0 to see what a plant at the criteria would use. Enter a local energy price to get the hourly cost.",
      "The result is fuel or electricity per hour of pumping. Multiply by season hours for a season total. Use it to plan fuel deliveries, check an electric bill, or show the cost of a low rating. A gap between the hourly use at PR = 1.0 and the measured use is the waste you can recover.",
      "For cost per unit of water, use Eq. 8.22, which works per acre-inch."
    ],
    qa: [
      { q: "How much diesel will my 44 whp pump burn per hour if the engine is in good shape?", a: "Enter 44 whp, diesel, PR = 1.0 and $3.50 per gallon. Use is 3.52 gal/hr and $12.32 per hour. At the measured PR of 0.88 it is 4.0 gal/hr and $14.00." },
      { q: "My electric plant rated 0.75. What is that costing me each hour?", a: "Enter 56 whp, electricity, PR = 0.75 and $0.11 per kWh. Use is 84 kWh per hour and $9.28. At PR = 1.0 it would be 63 kWh and $6.96, so the poor rating costs $2.32 every hour." },
      { q: "For budgeting, how much natural gas will a 40 whp well use per hour at a rating of 0.8?", a: "Enter 40 whp, natural gas, PR = 0.8 and $6 per mcf. Use is 0.81 mcf per hour and $4.86. Over 1500 hours that is about 1,220 mcf." }
    ],
    figs: ["8.15"]
  },
  "eq-8.22": {
    more: [
      "TDH comes from Eq. 8.13. Pick the energy source and enter the performance rating from a test, or 1.0 for a plant at the criteria. The season volume is acres times inches pumped, from a flow meter or from pumping hours times flow (450 gpm for 1 hr is about 1 ac-in).",
      "Energy per acre-inch is the number to compare across wells, fuels and years because it does not depend on flow. A rough check: a plant at the criteria uses about 1 gal of diesel per ac-in for each 110 ft of TDH, and about 4.4 kWh per ac-in for each 34 ft of TDH. The season cost shows what repairs, lower pressure packages or VFDs are worth.",
      "The pump evaluation and pump match procedures use this equation to price poor performance and excess head."
    ],
    qa: [
      { q: "What does it cost me to pump an acre-inch with my diesel well at 216 feet of TDH?", a: "Enter 216 ft, diesel, PR = 0.88 and $3.50 per gallon. Use is 2.24 gal per ac-in and $7.86 per ac-in, as in Example 8.9. At PR = 1.0 it would be 1.97 gal and $6.91." },
      { q: "My electric well has 300 feet of TDH and tested at 0.70. I pump about 12 inches on 130 acres. What is the season bill?", a: "Enter 300 ft, electricity, PR = 0.70, $0.11 per kWh and 1560 ac-in. Use is 55 kWh per ac-in, 86,000 kWh and $9,500 for the season. At PR = 1.0 it would be $6,650, so repairs could save about $2,850 a year." },
      { q: "Is a low lift surface pump at 120 feet of TDH cheap to run on electricity?", a: "Enter 120 ft, electricity, PR = 0.80 and $0.10 per kWh. Use is 19.4 kWh per ac-in and $1.94 per ac-in, less than half the cost of a 300 ft well." }
    ],
    figs: ["8.15", "8.16"]
  },
  "pump-eval": {
    more: [
      "A field test needs discharge pressure from a gauge, pumping lift from a sounder or airline, flow from a meter or a portable ultrasonic meter, and energy use timed over at least 30 to 60 min. Run the pump at its normal operating condition and record everything at the same time. Season hours come from an hour meter, the power bill or the grower's records.",
      "The results show TDH, water horsepower, the performance rating, and the energy per acre-inch at the actual rating and at the criteria. The savings figure is the season cost of the gap. Compare it with a repair quote: pump bowl rebuilds and engine overhauls often pay back in 2 to 5 years when the rating is below 0.7. A rating above 1.0 usually means a measurement error, most often flow.",
      "This procedure combines Eqs. 8.13, 8.18, 8.20, 8.21 and 8.22 and follows Examples 8.7 to 8.10."
    ],
    qa: [
      { q: "We tested my diesel pump at 50 psi, 100 foot lift, 800 gpm and 4 gallons an hour. How much am I wasting?", a: "Enter those with diesel, $3.50 per gallon and 1000 hours. TDH is 216 ft, whp 43.5, rating 0.87, and use is 2.26 gal per ac-in against 1.97 at the criteria. Bringing it to criteria would save about $1,800 a season." },
      { q: "My electric well runs 900 gpm at 45 psi with 180 feet of lift and draws 110 kW. Is it worth fixing?", a: "Enter those with $0.11 per kWh and 1500 hours. TDH is 284 ft, whp 64.5, rating 0.66, and use is 55 kWh per ac-in against 37 at the criteria. The season savings is about $6,100, which supports a rebuild." },
      { q: "On a natural gas well we measured 700 gpm, 30 psi, 220 foot lift and 1.6 mcf per hour. What do I tell the grower?", a: "Enter those with $6 per mcf and 1800 hours. TDH is 289 ft and the rating is 0.52. Use is 1.03 mcf per ac-in against 0.54 at the criteria, about $8,300 a season in waste. Check engine tuning first, then pump wear." }
    ],
    figs: ["8.15", "8.8"]
  },
  "pump-match": {
    more: [
      "Get the pressure the system needs at the pump from the pivot or sprinkler design, and the pumping lift at the design flow from a well test (Eq. 9.3). Count the bowls from the pump records and read the head per stage at the design flow from the manufacturer's pump curve.",
      "The output shows how much head the pump makes beyond what is needed and the extra energy it costs when a valve burns off that head. An excess of 20 to 50 ft is common after a pivot is converted to a low pressure package. Fixes are removing a stage, trimming impellers to the head per stage shown, or adding a VFD. Pressure regulators at the nozzles do not save energy because the pump still makes the full head.",
      "This procedure follows Example 8.11 and uses Eqs. 8.13 and 8.22. Use the affinity laws (Eq. 8.15) and Figure 8.11 to pick the impeller."
    ],
    qa: [
      { q: "My 5 stage pump makes 57 feet per stage but the system only needs 40 psi with a 143 foot lift. How much am I wasting?", a: "Enter 40 psi, 143 ft, 5 stages, 57 ft per stage, electricity and PR = 1.0. Design TDH is 235 ft, the pump makes 285 ft, and 50 ft (22 psi) is burned in the valve. Energy is 36.8 kWh per ac-in instead of 30.4, 21% more, as in Example 8.11. Trimming each stage to about 47 ft fixes it." },
      { q: "We converted the pivot to 25 psi. Can I just pull a stage?", a: "Enter 25 psi, 143 ft, 5 stages at 57 ft and electricity. Design TDH is 201 ft and 4 stages are enough, since 4 × 57 = 228 ft. With all 5 stages the pump wastes 84 ft and 42% more energy." },
      { q: "A diesel well needs 20 psi with 150 feet of lift, and the 4 stage pump makes 62 feet per stage. Is it oversized?", a: "Enter those with diesel and PR = 0.85. Design TDH is 196 ft and the pump makes 248 ft, so 52 ft (22 psi) is throttled. Fuel is 2.67 gal per ac-in instead of 2.11, 26% more. Trim the impellers to about 49 ft per stage." }
    ],
    figs: ["8.11", "8.12", "8.16"]
  }
});

window.CALC_USE2 = Object.assign(window.CALC_USE2 || {}, {
  "eq-9.1": {
    more: [
      "Measure static water level after the pump has been off long enough for the level to recover, ideally overnight or at least several hours. Measure pumping water level after the pump has run at its normal rate for an hour or more. Use an electric well sounder through an access port, or an airline with a pressure gauge (each psi on the airline gauge is 2.31 ft of water above the end of the line). Record both as depth below the same reference, usually the top of the casing or the ground.",
      "Drawdown in irrigation wells ranges from under 10 ft in thick gravel aquifers to more than 100 ft in tight formations. The number by itself says little. Tracked year to year at the same flow, a rising drawdown points to a plugging screen or a thinning aquifer, and a falling static level points to regional decline. Read pumping level after the level has stabilized, because a reading in the first few minutes understates drawdown.",
      "Drawdown feeds specific capacity (Eq. 9.2). The pumping water level is the lift in the TDH equation (Eq. 8.13)."
    ],
    qa: [
      { q: "The water sits at 100 feet with the pump off and 120 feet when it runs. What does that tell me?", a: "Enter SWL = 100 ft and PWL = 120 ft. Drawdown is 20 ft, as in Example 9.1. Use 120 ft as the lift in your TDH, not 100 ft." },
      { q: "We sounded my well at 85 feet static and 140 feet pumping. Is 55 feet of drawdown a problem?", a: "Enter 85 and 140 ft. Drawdown is 55 ft. That is large but not unusual for a tighter aquifer. Compare it with the driller's log or past tests at the same flow before calling it a problem." },
      { q: "Five years ago the static level was 100 and pumping level 145. This year it is 112 and 167. What changed?", a: "Enter this year's levels and drawdown is 55 ft, against 45 ft five years ago. The static level fell 12 ft, which is the aquifer, and drawdown rose 10 ft, which points to the well itself. Ask a well contractor about screen cleaning, and recheck the pump setting depth." }
    ],
    figs: ["9.7"]
  },
  "eq-9.2": {
    more: [
      "Flow comes from a meter or a portable ultrasonic meter during the test. Drawdown comes from Eq. 9.1, measured at the same time. Run the test at the normal operating flow for at least an hour so the pumping level is close to stable.",
      "Specific capacity is gallons per minute per foot of drawdown. Irrigation wells in productive sand and gravel commonly run 20 to 100 gpm/ft, and wells in finer or consolidated formations 5 to 20 gpm/ft. A decline of 25% or more from the original test is a common trigger for well rehabilitation. Compare tests only at similar flow and pumping time, because specific capacity usually drops as flow rises (Figure 9.8).",
      "Specific capacity is used in Eq. 9.3 to predict drawdown at a new flow."
    ],
    qa: [
      { q: "My well pumps 800 gpm with 20 feet of drawdown. Is that a good well?", a: "Enter 800 gpm and 20 ft. Specific capacity is 40 gpm/ft, the Example 9.1 value. That is a productive well." },
      { q: "My well made 40 gpm per foot when it was drilled and pumps 700 gpm with 25 feet of drawdown now. Should I be worried?", a: "Enter 700 gpm and 25 ft. Specific capacity is 28 gpm/ft, down 30% from the original 40. That is past the usual trigger for rehabilitation. Have a contractor camera the screen before the next season." },
      { q: "I have two wells on the farm, one at 900 gpm with 55 feet of drawdown and one at 1200 gpm with 30 feet. Which should run first?", a: "Enter each one. The first is 16.4 gpm/ft and the second 40 gpm/ft. Run the second as the lead well, since it gives more water per foot of lift and costs less to pump per acre-inch." }
    ],
    figs: ["9.8"]
  },
  "eq-9.3": {
    more: [
      "Specific capacity comes from a test with Eq. 9.2. The new discharge is the flow the grower plans to pump, for example after adding a pivot or changing nozzles. Static water level is the most recent measurement, taken in the same season if possible.",
      "The result is the drawdown and pumping water level at the new flow. Compare the pumping level with the pump bowl setting. Keep at least 10 to 20 ft of water above the bowls to avoid cavitation and air entrainment. Real wells often draw down more than the straight line predicts at flows above the test rate (Figure 9.8), so treat predictions above the test flow as a minimum, and do not extend them far beyond the test.",
      "The new pumping level is the lift in Eq. 8.13 for TDH and in the pump match procedure."
    ],
    qa: [
      { q: "If I pump 900 gpm instead of 800, how far will the water level drop?", a: "Enter 900 gpm, SC = 40 gpm/ft and SWL = 100 ft. Drawdown is 22.5 ft and the pumping level 122.5 ft, as in Example 9.1. That is 2.5 ft deeper than at 800 gpm." },
      { q: "We want to push my well to 1000 gpm. It tested at 16.4 gpm per foot with water at 85 feet. Will the pump stay under water?", a: "Enter 1000 gpm, 16.4 gpm/ft and 85 ft. Predicted drawdown is 61 ft and pumping level 146 ft. If the bowls sit at 160 ft, that leaves only 14 ft of water, and real drawdown at a flow above the test rate will likely be greater. Lower the pump or stay near the tested flow." },
      { q: "For a pivot addition, the well has 28 gpm per foot and 120 feet static. What lift should I design for at 1100 gpm?", a: "Enter 1100 gpm, 28 gpm/ft and 120 ft. Drawdown is 39 ft and pumping level 159 ft. Use about 160 ft of lift in the TDH and add a margin for seasonal decline in the static level." }
    ],
    figs: ["9.8"]
  },
  "well-test": {
    more: [
      "On a well visit, measure static level before starting the pump, run it at its normal flow for at least an hour, then record pumping level and flow at the same time. Use a sounder or airline for levels and a meter for flow. Enter the new flow you want to predict.",
      "The procedure returns test drawdown, specific capacity, and the predicted drawdown and pumping level at the new flow. It assumes the well behaves on the straight line of Figure 9.8. Predictions at lower flows are usually safe. Predictions well above the test flow understate drawdown, so retest at the new flow before buying a pump for it.",
      "This combines Eqs. 9.1, 9.2 and 9.3 as in Example 9.1. Carry the new pumping level to Eq. 8.13 and the pump evaluation."
    ],
    qa: [
      { q: "We tested the well at 800 gpm. What will the pumping level be at 900?", a: "Enter SWL = 100 ft, PWL = 120 ft, Q = 800 gpm and Q2 = 900 gpm. Specific capacity is 40 gpm/ft and the pumping level at 900 gpm is 122.5 ft, as in Example 9.1." },
      { q: "If I cut back to 600 gpm for the drip blocks, how much less lift will I have?", a: "Enter the same test with Q2 = 600 gpm. Drawdown drops to 15 ft and pumping level to 115 ft. That is 5 ft less lift, about 2% less TDH for a 216 ft system." },
      { q: "A well tested at 900 gpm with water at 85 and 140 feet. We plan to run it at 650. What lift do I design the new pump for?", a: "Enter SWL = 85, PWL = 140, Q = 900 and Q2 = 650. Specific capacity is 16.4 gpm/ft, predicted drawdown 40 ft and pumping level 125 ft. Design for about 125 ft of lift plus a margin for decline." }
    ],
    figs: ["9.7", "9.8", "9.6"]
  },
  "tab-9.1": {
    more: [
      "Find the aquifer material from the driller's log for the well, from state geological survey maps, or from the local groundwater district. Area is the land over the part of the aquifer you care about, and the drop in water table comes from monitoring well records or year to year static levels.",
      "Specific yield is the share of the aquifer volume that drains by gravity, and it is what a well can actually get. Total porosity is larger but includes water held in small pores. Clay has 45% porosity and only 3% specific yield, which is why clay layers store water but do not give it up. Sand and gravel give 22 to 25%. The volume is specific yield times area times the drop in water table.",
      "Use the table for conversations about aquifer decline and storage. It does not predict what a single well will produce, which comes from a well test (Eq. 9.2)."
    ],
    qa: [
      { q: "The water table under my quarter section of sand dropped 1 foot. How much water is that?", a: "Pick sand, enter 160 ac and 1 ft. Specific yield is 25%, so the drop released 40 ac-ft, about 3 in over the quarter." },
      { q: "Our groundwater district says the water table under a section of sand fell 3 feet over the last decade. What does that mean in water?", a: "Pick sand, enter 640 ac and 3 ft. That is 480 ac-ft of drained storage, roughly the amount one 130 acre pivot uses in three to four seasons." },
      { q: "Why does my clay ground hold water but the well in it is weak?", a: "Pick clay. Total porosity is 45% but specific yield only 3%, so a 1 ft drop under 160 ac releases just 4.8 ac-ft. The water is there but stays held in the small pores." }
    ],
    figs: ["9.2", "9.3"]
  },
  "tab-9.2": {
    more: [
      "Pick the material from the driller's log or a geologic map. The table gives the range of hydraulic conductivity in ft per day. The ranges are wide, often several orders of magnitude, because the same name covers very different deposits.",
      "Hydraulic conductivity is how easily water moves through the material. Gravel at 10 to 10,000 ft/d supports high capacity wells, sand at 0.001 to 100 ft/d varies from good to poor, and shale or unfractured rock is effectively a barrier. The geometric middle is a fair single value for planning. Use the table to explain why wells a mile apart can differ by a factor of ten, not to design a well.",
      "Hydraulic conductivity relates to the specific capacity a well can achieve (Eq. 9.2) and to how fast a cone of depression spreads (Figure 9.7)."
    ],
    qa: [
      { q: "The driller hit gravel. How fast does water move through that?", a: "Pick fine to coarse gravel. The range is 10 to 10,000 ft/d, with a geometric middle of 316 ft/d. That is the best aquifer material in the table." },
      { q: "Why does my neighbor's well in sand make twice what mine does?", a: "Pick fine to coarse sand. The range is 0.001 to 100 ft/d, five orders of magnitude, so two wells in sand can differ a lot. A coarse clean sand at the high end can match a gravel well." },
      { q: "A grower wants to drill in an area mapped as glacial till. What should I tell him?", a: "Pick glacial till. The range is from 0.00000001 to 1 ft/d, with a middle of 0.0001 ft/d. Unless the log shows sand or gravel lenses in the till, expect a low yield well, and get a test hole before committing to a pivot." }
    ],
    figs: ["9.2", "9.3"]
  }
});

window.CALC_USE2 = Object.assign(window.CALC_USE2 || {}, {
  "eq-10.1": {
    more: [
      "Gross volume comes from a flow meter on the supply, or from flow times set time (1 ac-in is 27,154 gal, and 450 gpm for 1 hr is about 1 ac-in). Infiltrated volume is the average infiltrated depth times the area of the set, with depth from a soil probe or soil moisture sensors before and after. Runoff can also be measured directly with a flume or a weir at the tail ditch, which gives a check on the balance.",
      "The result is what left the field as runoff. On open-ended furrows without recovery, 10 to 30% of the gross volume is common. If the balance comes out negative, the infiltration estimate is too high or the meter reads low. Surface storage is zero only after the water has fully receded, so measure after recession or include the water still standing in the furrows or basin.",
      "Divide each term by area to get the depth form in Eq. 10.2."
    ],
    qa: [
      { q: "I put 10 acre-inches on the set and figure 8.3 soaked in. How much ran off?", a: "Enter Vg = 10 ac-in, Vz = 8.3 ac-in and Vs = 0. Runoff is 1.7 ac-in, or 17% of what you pumped. That is about 46,000 gal you could catch with a reuse pit." },
      { q: "My meter shows 760 gpm for a 12 hour set on 70 furrows, 30 inch spacing, 1200 feet long. The probe says 3.5 inches went in. Where did the rest go?", a: "The set is 4.82 ac, so 760 gpm for 12 hr is 20.15 ac-in and 3.5 in over 4.82 ac is 16.87 ac-in. Enter those with Vs = 0 and runoff is 3.3 ac-in, about 89,000 gal, or 16% of the water pumped." },
      { q: "We cut off the basin inflow at 30 acre-inches. The probe shows 22 infiltrated and about 2 still ponded. How much left as runoff?", a: "Enter Vg = 30, Vz = 22 and Vs = 2 ac-in. Runoff is 6 ac-in so far. Most of the 2 ac-in still standing will soak in on a diked basin, so check again after recession." }
    ],
    figs: ["10.5"]
  },
  "eq-10.2": {
    more: [
      "Gross depth comes from Eq. 10.3, 10.4 or 10.5. Average infiltrated depth comes from soil water measurements before and after irrigation, or from the infiltration profile (Figure 10.11). On open-ended sloping furrows, the depth infiltrated at about 60% of the field length is a fair estimate of the average.",
      "Runoff depth and percent runoff show how much water leaves the field. Without recovery, 10 to 20% is acceptable on fine soils and closer to 30% is common on steeper or coarser fields. High runoff points to a stream that is too large or a set that is too long after advance. Use depths over the same area: dg is over the whole set, so dz must be the field average, not a reading near the head end.",
      "Runoff depth feeds the runoff ratio (Eq. 10.8), which is used in efficiency and reservoir sizing."
    ],
    qa: [
      { q: "We applied 4.2 inches and about 3.5 soaked in. How much ran off?", a: "Enter dg = 4.2 in, dz = 3.5 in and ds = 0. Runoff is 0.7 in, 17% of the application, as in Example 10.1." },
      { q: "On my steeper field we applied 5.6 inches and only 3.9 went in. Is that too much runoff?", a: "Enter 5.6, 3.9 and 0. Runoff is 1.7 in, 30% of the water. Without a reuse pit, cut the set time after advance or reduce the stream size." },
      { q: "After we shortened the sets, gross depth dropped to 3.0 inches with 2.6 infiltrated. Did it help?", a: "Enter 3.0, 2.6 and 0. Runoff is 0.4 in, 13%, down from 17%. Check the low quarter depth to make sure the tail end still got enough." }
    ],
    figs: ["10.5", "10.11"]
  },
  "eq-10.3": {
    more: [
      "Measure stream size at a few furrows with a bucket and stopwatch, a calibrated siphon tube chart or a small flume, and average them. Set time is from the start of water to cutoff. Watered furrow spacing is the row spacing, or twice the row spacing when every other furrow is irrigated. Length is from the gate to the end of the furrow.",
      "The result is the average depth applied along that furrow. For most row crops, 3 to 5 in per irrigation is typical on medium soils. A number much above the soil water deficit means water will go to runoff or deep percolation. A common mistake is using the row spacing when only every other furrow is watered, which doubles the computed depth.",
      "For a full set fed from one supply, Eq. 10.4 uses total inflow and number of furrows directly."
    ],
    qa: [
      { q: "Each furrow gets about 10.9 gpm for 12 hours on 30 inch rows a quarter mile long. How much am I putting on?", a: "Enter qs = 10.86 gpm, tco = 12 hr, W = 30 in and L = 1200 ft. Gross depth is 4.2 in, the same as Example 10.1." },
      { q: "I water every other furrow at 15 gpm for 12 hours, 30 inch rows, 1300 feet. What depth is that?", a: "Enter qs = 15 gpm, tco = 12 hr, W = 60 in and L = 1300 ft. Gross depth is 2.7 in. Using 30 in by mistake would give 5.3 in." },
      { q: "On short 660 foot furrows the grower runs 8 gpm for 24 hours. Is that too much?", a: "Enter 8 gpm, 24 hr, 30 in and 660 ft. Gross depth is 11.2 in, two to three times a normal irrigation. Shorten the set to 8 to 12 hr or reduce the stream." }
    ],
    figs: ["10.2", "10.8"]
  },
  "eq-10.4": {
    more: [
      "Total inflow comes from the pump meter, plus any water returned from a reuse pit. Count the open gates or siphons for the number of furrows per set. Set time is from water on to water off for that set.",
      "The result is the average gross depth over the set. Compare it with the soil water deficit, typically 2 to 4 in when irrigating at 50% depletion on medium soils. A depth well above the deficit means runoff and deep percolation, and the fix is a shorter set or more furrows. When reused runoff is added to the field, include it in total inflow.",
      "This is the gross depth used in efficiency (Eqs. 10.6 and 10.7) and in the furrow set design procedure."
    ],
    qa: [
      { q: "I have 760 gpm on 70 furrows for 12 hours, 30 inch rows, 1200 feet long. What did each set get?", a: "Enter 760 gpm, 12 hr, 70 furrows, 30 in and 1200 ft. Gross depth is 4.2 in, as in Example 10.1." },
      { q: "If I close down to 44 furrows to speed up advance, how much more water does the set get?", a: "Enter the same with N = 44. Gross depth rises to 6.65 in, the Example 10.4 value. With a 3.4 in deficit that is too much, so shorten the set as well." },
      { q: "A grower runs 1000 gpm on 80 furrows for 8 hours on 30 inch rows, 1320 feet long. Is that a reasonable depth?", a: "Enter 1000 gpm, 8 hr, 80 furrows, 30 in and 1320 ft. Gross depth is 2.9 in, reasonable for a 2 to 3 in deficit on a medium soil." }
    ],
    figs: ["10.1", "10.2"]
  },
  "eq-10.5": {
    more: [
      "Inflow comes from the meter or the turnout rating. Cutoff time is how long water runs into the border or basin. Width and length come from the field layout or GPS. Borders are commonly 30 to 100 ft wide and 300 to 1300 ft long, and level basins range from a fraction of an acre to 40 acres or more.",
      "The result is the average depth applied. On level basins with good leveling, nearly all of it infiltrates, so it should match the deficit. On graded borders, some runs off at the end. A depth far over the deficit means the cutoff is late. The constant 96.3 assumes gpm, hr and ft, so convert cfs to gpm first (1 cfs is 448.8 gpm).",
      "Use the gross depth with the volume balance (Eq. 10.1) and in efficiency checks."
    ],
    qa: [
      { q: "My border strip is 60 by 600 feet and gets 1000 gpm. How long should I run it to put on about 5 inches?", a: "Enter 1000 gpm, 2 hr, 60 ft and 600 ft. Gross depth is 5.35 in, so about 2 hr is right. At 4 hr it would be 10.7 in." },
      { q: "We run 2000 gpm into a 100 by 1320 foot border for 3.5 hours. What does it get?", a: "Enter 2000 gpm, 3.5 hr, 100 ft and 1320 ft. Gross depth is 5.1 in. Check how much reaches the end before cutoff and how much runs off." },
      { q: "A level basin is 330 by 330 feet. With 3000 gpm for 2 hours, how deep is the application?", a: "Enter 3000 gpm, 2 hr, 330 ft and 330 ft. Gross depth is 5.3 in over the 2.5 ac basin. On a level basin most of that should stay in the field." }
    ],
    figs: ["10.1"]
  },
  "eq-10.6-10.7": {
    more: [
      "The low quarter depth comes from soil water measurements in the quarter of the field that got the least water, usually the tail end of open furrows, or from Eq. 10.12. Soil water deficit comes from a soil probe, sensors or the checkbook schedule. Gross depth comes from Eq. 10.4. The runoff ratio comes from Eq. 10.8 or Table 10.4, and the return ratio is the share of runoff that gets back to a field, often 0.8 to 0.9 after pit evaporation and seepage.",
      "ELQ is the share of applied water that is stored in the root zone of the low quarter. Open furrows without recovery commonly run 50 to 70%, with a closed reuse system 70 to 85%. Effective depth is the smaller of the low quarter depth and the deficit, so applying more than the deficit lowers ELQ. Choose closed recovery (Eq. 10.6) when runoff goes back to the same field and open recovery (Eq. 10.7) when it goes to another field.",
      "For a quick comparison across cutoff ratios, use the efficiency curves (Figures 10.14 to 10.16)."
    ],
    qa: [
      { q: "How efficient is my furrow irrigation with 4.2 inches applied, 2.8 in the low quarter and a 3.4 inch deficit?", a: "Enter dLQ = 2.8, SWD = 3.4 and dg = 4.2 in with no recovery. Effective depth is 2.8 in and ELQ is 67%, as in Example 10.1." },
      { q: "If I add a reuse pit and pump the runoff back on the same field, what does efficiency go to?", a: "Same inputs with closed recovery, Rr = 0.17 and Rt = 0.85. ELQ rises to 78%, as in Example 10.2. If the pit water goes to another field instead, ELQ is 76% (Example 10.3)." },
      { q: "We cut to 44 furrows and now apply 6.65 inches with 4.1 in the low quarter. Why did efficiency drop?", a: "Enter dLQ = 4.1, SWD = 3.4, dg = 6.65, Rr = 0.32 and closed recovery. Effective depth is capped at 3.4 in and ELQ is 70%. With no recovery it would be 51%. The set now applies more than the soil can hold, so shorten it." }
    ],
    figs: ["10.11", "10.12"]
  },
  "eq-10.8": {
    more: [
      "Runoff depth comes from Eq. 10.2 or from a flume or weir reading at the tail ditch divided by the set area. Gross depth comes from Eq. 10.3 or 10.4. Both must be over the same area and the same set.",
      "The runoff ratio is the fraction of applied water that runs off. On sloping furrows it ranges from under 0.1 on fine soils with a long cutoff ratio to over 0.5 on coarse soils with a short one (Table 10.4). For reservoir sizing, use a high value of 0.30 to 0.40 so the pit is not overrun.",
      "The ratio goes into efficiency (Eqs. 10.6 and 10.7) and reservoir sizing (Eqs. 10.13 and 10.14)."
    ],
    qa: [
      { q: "We measured 0.7 inch of runoff from a 4.2 inch irrigation. What is the runoff ratio?", a: "Enter 0.7 and 4.2 in. Rr is 0.17, the Example 10.2 value." },
      { q: "My steep field ran off 1.7 inches of a 5.6 inch set. What ratio do I use for a reuse pit?", a: "Enter 1.7 and 5.6 in. Rr is 0.30. Since that was measured on one set, size the pit with 0.35 to 0.40 to allow for wetter conditions." },
      { q: "After we cut to 44 furrows the flume showed 2.1 inches of runoff on 6.65 applied. Does that match the table?", a: "Enter 2.1 and 6.65 in. Rr is 0.32, matching Table 10.4 for a medium soil at a cutoff ratio of 0.4." }
    ],
    figs: ["10.5", "10.11"]
  },
  "eq-10.9": {
    more: [
      "Total inflow comes from the pump or turnout meter. The number of furrows is the open gates or siphons in the set. The answer assumes the flow splits evenly, so check a few furrows with a bucket and stopwatch.",
      "Stream size controls advance time: a larger stream reaches the end faster. Typical furrow streams are 5 to 30 gpm. Compare with the maximum nonerosive stream (Eq. 10.10) and with the Table 10.6 recommendation for the soil. On gated pipe, the gates near the inlet often run 20 to 30% more than those at the far end, so set gate openings with that in mind.",
      "Use the stream size with set time in Eq. 10.3, or use the furrow set design procedure to choose the number of furrows."
    ],
    qa: [
      { q: "I have 760 gpm and want to run 26 furrows. How much does each get?", a: "Enter 760 gpm and 26 furrows. Each gets 29 gpm, as in Example 10.5. Check that against the nonerosive limit for your slope." },
      { q: "If I run 44 furrows with the same 760 gpm, what is the stream?", a: "Enter 760 gpm and 44 furrows. Each gets 17 gpm, the book's value for the faster advance case." },
      { q: "The new well gives 1200 gpm. If I open 80 gates, will the stream stay under 20 gpm for my 0.5% slope?", a: "Enter 1200 gpm and 80 furrows. Each gets 15 gpm. At 0.5% slope, Eq. 10.10 gives 20 gpm as the maximum, so 80 furrows is fine." }
    ],
    figs: ["10.2", "10.8"]
  },
  "eq-10.10": {
    more: [
      "Field slope in the direction of the furrows comes from a survey, laser level, RTK GPS or the land leveling plan. Use the slope at the steepest part of the run if it varies. Furrow slopes are usually 0.1 to 1%.",
      "The result is the largest stream that should not cause serious erosion. At 0.4% slope that is 25 gpm, at 1% it is 10 gpm. Erosion risk also depends on soil: silt loams erode more than clays at the same stream. Above this limit, use more furrows, polyacrylamide (PAM), or reduce the slope. On very flat fields the limit is high, and furrow capacity or overtopping becomes the real limit.",
      "Compare this limit with the stream from Eq. 10.9 and the Table 10.6 recommendation."
    ],
    qa: [
      { q: "My field has 0.4% slope. Is a 30 gpm stream too much?", a: "Enter 0.4%. The maximum nonerosive stream is 25 gpm, so 30 gpm will cut the furrows. Open more gates to bring the stream down." },
      { q: "We have a 1% slope field. What stream can we use?", a: "Enter 1%. The limit is 10 gpm per furrow. Long furrows may not reach the end at that stream, so shorter runs or PAM are worth considering." },
      { q: "Example 10.5 runs 29 gpm per furrow on a 0.3% slope. Is that OK?", a: "Enter 0.3%. The limit is 33 gpm, so 29 gpm is under it. Watch the head end for erosion during the first irrigation." }
    ],
    figs: ["10.4"]
  },
  "eq-10.11": {
    more: [
      "Advance time is from water on to water reaching the end of the furrow. Walk the field or use a sensor at the end of a few representative furrows. Cutoff time is the set time the grower uses.",
      "The cutoff ratio is the share of the set time needed to reach the end. A high ratio, near 0.9, means little runoff but poor uniformity at the tail. A low ratio, under 0.4, means good uniformity and more runoff. Table 10.5 gives the best ratio for each soil and runoff system: 0.2 on coarse soils with closed recovery up to 0.9 on fine soils without recovery, and 0.65 to 0.95 for blocked end furrows.",
      "The cutoff ratio drives the infiltration factor and runoff ratio in Tables 10.3 and 10.4, and the efficiency curves (Figures 10.14 to 10.16)."
    ],
    qa: [
      { q: "Water takes 9 hours to reach the end on a 12 hour set. What is my cutoff ratio?", a: "Enter tL = 9 hr and tco = 12 hr. CR is 0.75. For a medium soil with a closed reuse system, Table 10.5 recommends 0.4, so the advance is too slow." },
      { q: "On a 6 hour set the water got to the end in 2.4 hours. Is that right?", a: "Enter 2.4 and 6 hr. CR is 0.40, the target in Example 10.5 for a medium soil with a closed reuse system." },
      { q: "My clay field takes 11 hours to advance on a 12 hour set, no reuse pit. Should I change?", a: "Enter 11 and 12 hr. CR is 0.92, close to the 0.90 recommended for fine soils without reuse. That is the right range for this field." }
    ],
    figs: ["10.7", "10.13"]
  },
  "eq-10.12": {
    more: [
      "Gross depth comes from Eq. 10.4. Choose the texture class: fine for clays and clay loams, medium for silts, silt loams and loams, coarse for sandy loams and fine sands. The cutoff ratio comes from Eq. 10.11 using a measured advance time.",
      "The infiltration factor is the share of gross depth that infiltrates in the low quarter. It ranges from about 0.2 to 0.74 in Table 10.3. The low quarter depth should at least match the soil water deficit. If it is well below, the tail end stays dry. If it is well above, water goes to deep percolation. The table assumes advance time is longer than recession time, which holds for most sloping furrows.",
      "The low quarter depth goes into efficiency (Eqs. 10.6 and 10.7)."
    ],
    qa: [
      { q: "I applied 4.2 inches on a silt loam with a cutoff ratio of 0.75. How much did the low quarter get?", a: "Choose medium, enter 4.2 in and 0.75. The infiltration factor is 0.70 and the low quarter depth 2.9 in, the book's Section 10.5 value." },
      { q: "With 44 furrows we apply 6.65 inches at a cutoff ratio of 0.4. What reaches the low quarter?", a: "Medium soil, 6.65 in and 0.4. The factor is 0.62 and the low quarter depth 4.1 in, as in Example 10.4. That is above a 3.4 in deficit." },
      { q: "On my clay we put on 4 inches with a cutoff ratio of 0.9. Is the tail end getting enough?", a: "Choose fine, enter 4 in and 0.9. The factor is 0.74 and the low quarter depth 3.0 in. If the deficit is 3 in or less, the tail end is fully refilled." }
    ],
    figs: ["10.11", "10.15"]
  },
  "eq-10.13-10.14": {
    more: [
      "Use a high runoff ratio, 0.30 to 0.40, so the reservoir does not overflow. Cutoff time is the set time in minutes. Inflow is the flow from the original source, from the meter. F is 1 when runoff returns to the field it came from and 0 when it goes to another field.",
      "The volume is the active storage needed for one set with a continuous return pump. Convert gallons to acre-feet by dividing by 325,851, or to cubic feet by dividing by 7.48. Add freeboard and dead storage for sediment, and size the reservoir for the largest set and the steepest field it serves. The pump capacity is the flow to return that volume over one set time.",
      "The runoff ratio comes from Eq. 10.8 or Table 10.4. Figure 10.18 shows a reservoir and a sump."
    ],
    qa: [
      { q: "How big a pit do I need for 500 gpm on 6 hour sets with the water going back to the same field?", a: "Enter Rr = 0.30, 360 min, 500 gpm and F = 1. Active volume is 77,143 gal, about 10,300 ft³ or 0.24 ac-ft, and the return pump needs 214 gpm, as in Example 10.6." },
      { q: "What if the runoff goes to a neighboring field instead?", a: "Same inputs with F = 0. Volume drops to 54,000 gal and the pump to 150 gpm, because the field of origin does not get extra water that generates more runoff." },
      { q: "We run 900 gpm on 12 hour sets on a steep field. What reservoir and pump do I need?", a: "Enter Rr = 0.35, 720 min, 900 gpm and F = 1. Volume is 348,900 gal, about 1.07 ac-ft, and the pump 485 gpm. Add freeboard and sediment space." }
    ],
    figs: ["10.12", "10.18"]
  },
  "tab-10.1": {
    more: [
      "This table is the book's example data set: advance, recession, opportunity time and infiltration along a 1200 ft furrow. To collect the same data, flag stations every 200 to 300 ft and record when water arrives and leaves each one. Infiltration comes from an infiltration curve (Figure 10.10) at the opportunity time.",
      "Opportunity time is recession minus advance, and infiltration follows it. In this example, the head of the field gets 12 hr and 4.2 in, and the end only 4 hr and 2.4 in. That gap is what makes the tail end the low quarter. Reading values at any distance helps explain where deep percolation and under irrigation occur.",
      "Use this table with Figures 10.7, 10.9, 10.10 and 10.11 to explain the profile to a grower."
    ],
    qa: [
      { q: "In the book's example, how much water does a spot 720 feet down the furrow get?", a: "Enter 720 ft. Advance is 3.8 hr, recession 12.6 hr, opportunity time 8.8 hr and infiltration 3.4 in." },
      { q: "How much less does the end of the field get compared to the head?", a: "Enter 0 ft and then 1200 ft. The head gets 4.2 in with 12 hr of opportunity time, the end 2.4 in with 4 hr. The end gets about 57% of the head." },
      { q: "Where does deep percolation start if the deficit is 3.6 inches?", a: "Enter 450 ft and infiltration is 3.8 in, above the deficit. Infiltration is 3.6 in at 600 ft, so the first 600 ft lose water to deep percolation and the rest is under irrigated." }
    ],
    figs: ["10.7", "10.9", "10.10", "10.11"]
  },
  "tab-10.2": {
    more: [
      "Measure advance time on the current set and count the furrows. Choose the desired advance time from Table 10.5: the recommended cutoff ratio times the set time. Pick the soil texture.",
      "The correction factor tells you how many furrows to water so the advance hits the target with the same supply. Fewer furrows mean larger streams and faster advance. The factor is not linear because a larger stream also infiltrates more along the way. Check that the new stream stays below the nonerosive limit (Eq. 10.10).",
      "This is the second step of the furrow set design procedure. The new furrow count goes into Eq. 10.4 for gross depth."
    ],
    qa: [
      { q: "Water takes 9 hours to advance on 70 furrows. How many should I run for a 4.8 hour advance?", a: "Enter 4.8 and 9 hr, medium soil, 70 furrows. The ratio is 0.53, the factor 0.63, and the answer 44 furrows, the book's value." },
      { q: "We now advance in 4.8 hours on 44 furrows. How many for 2.4 hours?", a: "Enter 2.4 and 4.8 hr, medium soil, 44 furrows. The factor is 0.6 and the answer 26 furrows, as in Example 10.5." },
      { q: "On a clay field, advance is only 6 hours on 40 furrows but I want it at 10.8 hours. How many can I open?", a: "Enter 10.8 and 6 hr, fine soil, 40 furrows. The ratio is 1.8, the factor 1.9, and you can open 76 furrows." }
    ],
    figs: ["10.7", "10.8"]
  },
  "tab-10.3-10.4": {
    more: [
      "Enter the cutoff ratio from Eq. 10.11 and choose the soil texture class. Both tables assume sloping furrows where advance time is longer than recession time.",
      "The infiltration factor is the low quarter depth as a share of gross depth. The runoff ratio is the share that runs off. As the cutoff ratio falls, the infiltration factor rises at first and runoff rises steadily. Coarse soils have less runoff at a given cutoff ratio because water soaks in quickly. Use the infiltration factor for Eq. 10.12 and the runoff ratio for Eqs. 10.6, 10.7 and 10.13.",
      "Figures 10.14 to 10.16 plot the efficiency that results from these two values."
    ],
    qa: [
      { q: "At a cutoff ratio of 0.4 on a silt loam, what infiltration factor and runoff ratio do I use?", a: "Enter 0.4, medium soil. The factor is 0.62 and the runoff ratio 0.32, the values in Example 10.4." },
      { q: "We run a 0.75 cutoff ratio on a silt loam. How much runs off?", a: "Enter 0.75, medium soil. The runoff ratio is 0.10 and the infiltration factor 0.70." },
      { q: "A sandy loam has a cutoff ratio of 0.2. What does the table give?", a: "Enter 0.2, coarse soil. The factor is 0.61 and the runoff ratio 0.36. That much runoff only pays off with a closed reuse system." }
    ],
    figs: ["10.14", "10.15", "10.16"]
  },
  "tab-10.5": {
    more: [
      "Choose the runoff system: no reuse, closed reuse (back to the same field), open reuse (to another field), or blocked ends at low or moderate slope. Pick the soil texture and the set time the grower uses.",
      "The recommended cutoff ratio is where efficiency peaks in Figures 10.14 to 10.16. The target advance time is that ratio times the set time. Without reuse, advance should be slow so little runs off. With closed reuse, faster advance gives better uniformity because the runoff comes back. Blocked end furrows use the highest cutoff ratios because the end is diked.",
      "Use the target advance time in Table 10.2 to find the furrows per set."
    ],
    qa: [
      { q: "With a closed reuse pit on a silt loam and 12 hour sets, when should water reach the end?", a: "Pick closed reuse, medium soil and 12 hr. The cutoff ratio is 0.40 and the target advance time 4.8 hr." },
      { q: "We have no reuse pit. Same soil and set time. What is the target?", a: "Pick no reuse, medium soil and 12 hr. The ratio is 0.70 and the target advance 8.4 hr." },
      { q: "A clay field with blocked ends at low slope runs 24 hour sets. What advance should I aim for?", a: "Pick blocked ends at low slope, fine soil and 24 hr. The ratio is 0.95 and the target 22.8 hr, nearly the whole set." }
    ],
    figs: ["10.14", "10.15", "10.16", "10.17"]
  },
  "tab-10.6": {
    more: [
      "Identify the soil texture from the NRCS Web Soil Survey or a soil test. Measure furrow length and slope from a survey or GPS. This table is meant for the first season of furrow irrigation on a new field, before advance data exist.",
      "The output gives the basic infiltration rate, the maximum furrow length for the soil and the recommended stream for your length. Sandy soils need short runs and large streams, while silty clay loams can handle long runs with small streams. If the recommended stream is above the nonerosive limit, shorten the run. After the first irrigation, switch to the furrow set design procedure with measured advance times.",
      "The stream check uses Eq. 10.10."
    ],
    qa: [
      { q: "I am starting furrow irrigation on a silt loam with 1000 foot furrows and 0.3% slope. What stream should I use?", a: "Pick silt loam, 1000 ft and 0.3%. The maximum length is 1100 ft and the recommended stream 22 gpm, below the 33 gpm nonerosive limit. Start there and adjust after the first set." },
      { q: "Can I run 800 foot furrows on loamy sand at 0.5% slope?", a: "Pick loamy sand, 800 ft and 0.5%. The maximum length is 600 ft, and the 38 gpm recommended stream is above the 20 gpm erosion limit. Shorten the run to 600 ft or consider a sprinkler." },
      { q: "We want quarter mile furrows on silt loam at 0.5% slope. Will that work?", a: "Pick silt loam, 1320 ft and 0.5%. The maximum is 1100 ft, and the recommended stream is 29 gpm against a 20 gpm limit. Split the field with a mid-field gated pipe." }
    ],
    figs: ["10.4", "10.6"]
  },
  "tab-10.7": {
    more: [
      "The first cycle on time is how long water takes to cover the first quarter (four cycles) or sixth (six cycles) of the field. Measure it on the first surge. The return interval is the time until the valve switches to the next set, which covers both sides of the surge valve.",
      "The schedule gives on time for each cycle on each side. Later advance cycles get longer because wetted soil infiltrates less. Once water reaches the end, cutback cycles keep water on the field with less runoff. If advance cycles use up the whole return interval, the first cycle is too long or the set is too short. Surge commonly cuts advance time and applied water by 10 to 40% on silty soils that seal well.",
      "The book's Example 10.7 follows these steps. Figures 10.19 and 10.20 show surge valves."
    ],
    qa: [
      { q: "My first surge gets water a quarter of the way down in 30 minutes, and I change sets every 12 hours. What schedule do I set?", a: "Enter 30 min, four cycles and 720 min. Advance cycles are 30, 57, 72 and 87 min each side, 492 min total. Then 3 cutback cycles of 38 min each side, as in Example 10.7." },
      { q: "Can I use six surge cycles with 20 minutes on the first one?", a: "Enter 20 min, six cycles and 720 min. Advance cycles are 20, 38, 48, 58, 66 and 74 min, using 608 min. One cutback cycle of 56 min fills the rest, a factor of 2.8, within the table." },
      { q: "My first cycle takes 45 minutes and I switch every 10 hours. Will four cycles work?", a: "Enter 45 min, four cycles and 600 min. The advance cycles alone need 738 min, more than the interval. Lengthen the set or use more furrows per side so the first cycle is shorter." }
    ],
    figs: ["10.19", "10.20"]
  },
  "fig-10.14-10.16": {
    more: [
      "Enter the cutoff ratio from Eq. 10.11, pick the soil texture, the runoff recovery system and the return ratio. The curves assume the low quarter depth is no more than the soil water deficit.",
      "The output gives ELQ at your cutoff ratio, and the cutoff ratio that gives the highest ELQ. Without recovery, efficiency peaks at a high cutoff ratio. With closed recovery it peaks at a low one, around 0.3 to 0.4. The curves are fairly flat near the peak, so being within 0.1 of the best ratio usually costs only a few points.",
      "Use the best cutoff ratio from Table 10.5 or this curve in the furrow set design procedure."
    ],
    qa: [
      { q: "With a closed reuse system on a silt loam at a 0.4 cutoff ratio, what efficiency can I expect?", a: "Enter 0.4, medium soil, closed recovery and Rt = 0.85. ELQ is 85%. The best ratio is 0.3 at 86%, so 0.4 is close to the top." },
      { q: "No reuse pit, silt loam, and water reaches the end at 75% of the set. How efficient is that?", a: "Enter 0.75, medium soil, no recovery. ELQ is 70%, and the best ratio is 0.7 with the same 70%. Little to gain here without adding reuse." },
      { q: "My reuse pit only returns 60% of the runoff. Does that change the target?", a: "Enter 0.4, medium soil, closed recovery and Rt = 0.6. ELQ drops to 77%, and the best ratio moves to 0.6. A leaky or evaporating pit pushes you back toward a slower advance." }
    ],
    figs: ["10.13", "10.14", "10.15", "10.16"]
  },
  "proc-furrow-set": {
    more: [
      "Collect total inflow from the meter, furrow spacing, length and slope, soil texture, whether there is a reuse system, and the soil water deficit at irrigation. Run a trial set and record the number of furrows and the advance time to the end. Enter the set time that fits the grower's labor schedule.",
      "The procedure gives the target cutoff ratio and advance time, the number of furrows per set, the stream size and erosion check, gross and low quarter depths, and ELQ. If the check says dLQ exceeds SWD, the set is applying more than the soil can hold: shorten the set, irrigate less often so the deficit is larger, or water every other furrow. If the stream is above the erosion limit, use more furrows or a shorter run.",
      "This follows the Section 10.5 text and Examples 10.4 and 10.5, using Tables 10.2 to 10.5 and Eqs. 10.4, 10.6, 10.7 and 10.9 to 10.12."
    ],
    qa: [
      { q: "My trial set ran 70 furrows with a 9 hour advance on 12 hour sets, silt loam, closed reuse. How should I change it?", a: "Enter the defaults: 760 gpm, 30 in rows, 1200 ft, 0.3% slope, 3.4 in deficit. The target is a 0.4 cutoff ratio, 4.8 hr advance, 44 furrows at 17 gpm. Gross depth is 6.65 in and ELQ 70%. The check says dLQ exceeds SWD, so shorten the set as in Example 10.5." },
      { q: "Same field without a reuse pit. What changes?", a: "Enter no recovery. The target cutoff ratio is 0.7, advance 8.4 hr, 65 furrows at 11.7 gpm. Gross depth is 4.5 in, low quarter 3.15 in and ELQ 70%. The set fits the 3.4 in deficit." },
      { q: "On sandy loam with no reuse, 900 gpm and 60 furrows advance in 6 hours on an 8 hour set, but the deficit is only 2.5 inches. What do I do?", a: "Enter coarse soil, no recovery, 900 gpm, 1300 ft, 0.5% slope, 60 furrows, 6 hr advance and 8 hr set. You get 52 furrows at 17 gpm, but 4.1 in gross and 3.0 in in the low quarter, above the deficit, with ELQ 61%. Watering every other furrow (W = 60 in) drops gross depth to 2.05 in and raises ELQ to 72%." }
    ],
    figs: ["10.14", "10.15", "10.16", "10.8"]
  }
});

window.CALC_USE2 = Object.assign(window.CALC_USE2 || {}, {
  "eq-11.1": {
    more: [
      "Nozzle size is stamped on the nozzle or listed on the sprinkler order, usually in 64ths of an inch (5/32 in is 10/64, or 0.156 in). To check wear, slide a set of numbered drill bits or a nozzle gauge into the orifice. Pressure is read with a pitot gauge held in the stream or a gauge on a riser tap at the sprinkler. Cd is about 0.96 for a clean straight bore nozzle.",
      "The result is nozzle discharge in gpm. Flow goes with the square of diameter and the square root of pressure, so a small change in orifice size matters more than a small change in pressure. Brass nozzles wear out over seasons, and a nozzle that has grown 5% in diameter discharges about 10% more. With Cd = 0.96 the equation is within about 2% of Table 11.1 for nozzles up to 15/32 in, and runs 5 to 8% high for 1/2 in and larger. Use the table or the manufacturer's chart when you have it.",
      "Discharge goes into the application rate (Eq. 11.2) and the lateral inflow (Eq. 11.16)."
    ],
    qa: [
      { q: "How much does a 5/32 inch nozzle put out at 50 psi?", a: "Enter Cd = 0.96, D = 0.15625 in and P = 50 psi. Discharge is 4.9 gpm, against 5.0 gpm in Table 11.1." },
      { q: "My hand line nozzles were 5/32 but a drill bit gauge shows 11/64 now. How much more water are they putting out?", a: "Enter D = 0.1719 in at 50 psi. Discharge is 6.0 gpm instead of about 4.9, roughly 20% more. That over-waters, lowers pressure down the line and costs pumping energy, so replace the nozzles." },
      { q: "The pressure at the far sprinklers is only 35 psi on 3/16 inch nozzles. What are they putting out?", a: "Enter D = 0.1875 in and P = 35 psi. Discharge is 6.0 gpm, against 7.1 gpm at 50 psi, about 16% less. The coverage diameter also shrinks, so expect dry spots between sprinklers." }
    ],
    figs: ["11.1", "11.2"]
  },
  "eq-11.1-ratio": {
    more: [
      "Start from a known discharge, from Table 11.1, the manufacturer's chart or a catch can and stopwatch test on one sprinkler. Enter the current and new nozzle diameters in the same unit, and the current and new pressures from a gauge or a pitot tube.",
      "The result shows how discharge changes. A 20% larger nozzle gives 44% more water, while 20% more pressure gives about 10% more. This is why worn nozzles and nozzle swaps change water use much more than small pressure changes. If you raise flow on every sprinkler, the lateral and the pump must carry it, so recheck lateral friction and the pump curve.",
      "Use the new discharge in Eq. 11.2 for the application rate and in Eq. 11.16 for the lateral inflow."
    ],
    qa: [
      { q: "If I go to a nozzle 20% bigger, how much more water do I get?", a: "Enter 10 gpm, D1 = 0.25 in, D2 = 0.30 in and 50 psi for both pressures. The new discharge is 14.4 gpm, 44% more, as in Example 11.1." },
      { q: "Would turning the pressure up from 50 to 60 psi do the same thing?", a: "Enter 10 gpm, the same nozzle and pressures of 50 and 60 psi. Discharge rises to 10.95 gpm, only 9.5% more. A bigger nozzle changes flow far more than a pressure increase." },
      { q: "We measured 5 gpm on a new 5/32 inch nozzle. After several seasons it gauges at 0.164 inch. How much has flow increased?", a: "Enter 5 gpm, D1 = 0.15625 in, D2 = 0.1641 in and 50 psi for both. The worn nozzle puts out 5.5 gpm, 10% more. Across a field that is 10% more water than the schedule assumes." }
    ],
    figs: ["11.2", "11.5"]
  },
  "tab-11.1-11.2": {
    more: [
      "Read nozzle size from the nozzle or the parts list. Pressure is at the nozzle, from a pitot gauge or a gauge at the sprinkler. For a sprinkler with a range nozzle and a spreader nozzle, select both. Table 11.2 coverage diameters are for brass impact sprinklers with a 23 degree trajectory, so use the manufacturer's chart for other sprinklers.",
      "Discharge is in gpm and diameter of coverage in feet. Coverage grows with pressure up to a point and then levels off, and very high pressure breaks the stream into fine drops that drift. Low pressure gives large drops and a donut pattern (Figure 11.5). Use the coverage diameter to check spacing in Table 11.3. A spreader nozzle adds flow but does not add to the coverage diameter.",
      "Discharge feeds Eq. 11.2 and Eq. 11.16. Coverage feeds Table 11.3."
    ],
    qa: [
      { q: "What does a 3/16 inch impact sprinkler do at 50 psi?", a: "Pick 3/16 in at 50 psi with no second nozzle. Discharge is 7.2 gpm and coverage 100 ft, as in Example 11.3." },
      { q: "My sprinklers have an 11/64 range nozzle and a 3/32 spreader. How much do they put out at 50 psi?", a: "Pick 11/64 in, 50 psi and a 3/32 in second nozzle. The range nozzle gives 6.0 gpm and the total is 7.8 gpm, with 95 ft coverage, as in Example 11.2." },
      { q: "If my pressure falls to 40 psi on 3/16 inch nozzles, what do I lose?", a: "Pick 3/16 in at 40 psi. Discharge drops to 6.4 gpm and coverage to 96 ft. At a 40 by 60 ft spacing, that is short of the 100 ft needed, so uniformity suffers." }
    ],
    figs: ["11.4", "11.5"]
  },
  "eq-11.2-11.3": {
    more: [
      "Sprinkler discharge comes from Table 11.1, Eq. 11.1 or a catch test. Measure spacing along the lateral (sprinkler to sprinkler) and between laterals (set to set, the move distance). Common hand line and wheel line spacings are 40 by 50 ft or 40 by 60 ft. For an equilateral triangle layout, enter the sprinkler spacing only.",
      "The application rate is the average rate in in/hr over the wetted area. Set move systems usually run 0.15 to 0.40 in/hr. Compare it with the maximum rate for the soil and slope in Table 11.4. A rate above the soil's limit causes ponding and runoff even when the total depth is right. Using 96.3 for a triangular layout or forgetting the spreader nozzle are the usual mistakes.",
      "The rate times operating time gives depth applied (Eq. 11.4)."
    ],
    qa: [
      { q: "My sprinklers put out 7.2 gpm on a 40 by 60 foot spacing. What is the application rate?", a: "Enter 7.2 gpm, rectangular, 40 ft and 60 ft. The rate is 0.29 in/hr, as in Example 11.3. That is within the range for a medium soil on gentle slopes." },
      { q: "On solid set in a triangle pattern, 50 feet apart at 10 gpm, what rate is that?", a: "Enter 10 gpm, equilateral triangle and 50 ft. The rate is 0.44 in/hr. Check it against the soil limit, since bare medium soils top out at 0.50 in/hr on flat ground." },
      { q: "A grower put 16 gpm nozzles on a 40 by 60 foot spacing and now sees runoff. Why?", a: "Enter 16.2 gpm, rectangular, 40 and 60 ft. The rate is 0.65 in/hr, above the 0.50 in/hr maximum for a bare medium soil (Table 11.4). Go back to smaller nozzles and run longer sets." }
    ],
    figs: ["11.3", "11.6"]
  },
  "eq-11.4": {
    more: [
      "Application rate comes from Eq. 11.2. Operating time is the time water is actually on, not the set time. On a hand line with 12 hr sets, the move takes 1 to 2 hr, so the operating time is 10 to 11 hr.",
      "The gross depth is what the sprinklers deliver. Net depth stored in the soil is less, by the application efficiency, often 65 to 80% for moved laterals. Compare the net depth with the soil water deficit. A gross depth well above the deficit wastes water and leaches nitrate, so shorten the operating time or move more often.",
      "Gross depth here is the same quantity used in Chapter 5 scheduling (net depth divided by efficiency)."
    ],
    qa: [
      { q: "At 0.4 inch per hour for 10 hours, how much am I putting on?", a: "Enter 0.4 in/hr and 10 hr. Gross depth is 4.0 in, the book's Section 11.3 value." },
      { q: "My hand line runs 0.29 in/hr and the water is on 11.5 hours a set. What depth is that?", a: "Enter 0.29 and 11.5. Gross depth is 3.3 in. At 75% efficiency, about 2.5 in reaches the root zone." },
      { q: "On wheel lines with 24 hour sets and 30 minute moves, what does 0.23 in/hr put on?", a: "Enter 0.23 in/hr and 23.5 hr. Gross depth is 5.4 in. That is more than most soils hold, so consider 12 hr sets." }
    ],
    figs: ["11.3"]
  },
  "tab-11.3": {
    more: [
      "Choose the pattern (rectangular, square or triangle), the average wind speed during irrigation from a nearby weather station, and the diameter of coverage from Table 11.2 or the manufacturer's chart. Enter the actual spacings measured in the field.",
      "The table gives the maximum spacing as a percent of coverage diameter. Spacing narrows as wind increases because wind distorts the pattern (Figures 11.7 and 11.8). If the actual spacing is too wide, uniformity drops and you see dry strips. The fix is a larger nozzle, a higher pressure or a closer spacing. Above 12 mph the table does not apply, and most growers avoid irrigating in that wind.",
      "This check is part of the nozzle selection procedure."
    ],
    qa: [
      { q: "My sprinklers cover 95 feet and are spaced 40 by 60 in 5 mph wind. Is that OK?", a: "Choose rectangular, 5 mph, 95 ft, 40 and 60 ft. The maximum is 43 by 57 ft, so 60 ft between laterals is too wide, as in Example 11.2. You need 100 ft of coverage." },
      { q: "With 100 foot coverage, can I keep the 40 by 60 spacing in 10 mph wind?", a: "Choose rectangular, 10 mph, 100 ft, 40 and 60 ft. The maximum is 40 by 60 ft, right at the limit. Any more wind or less pressure and uniformity falls off." },
      { q: "For a triangle layout of solid set at 50 feet with 100 foot coverage in 10 mph wind, does it pass?", a: "Choose equilateral triangle, 10 mph, 100 ft, 50 ft along the line and 43.3 ft between lines. The maximum is 50 by 43.3 ft, so it passes." }
    ],
    figs: ["11.6", "11.7", "11.8"]
  },
  "tab-11.4": {
    more: [
      "Get soil texture from the NRCS Web Soil Survey or a hand texture test. Slope comes from a survey or GPS. Cover is bare soil or turfgrass or heavy residue. Your application rate comes from Eq. 11.2.",
      "The table gives a range for the maximum application rate. Coarse soils on flat ground handle 0.50 to 0.75 in/hr bare, while fine soils on 9 to 12% slope handle only 0.06 to 0.15 in/hr. Residue or turf raises the limit by roughly 40 to 100%, depending on texture. If your rate is above the range, expect ponding and runoff. Crusting soils after several irrigations may need the low end of the range.",
      "This check is used in the nozzle selection procedure."
    ],
    qa: [
      { q: "My rate is 0.29 in/hr on bare silt loam with 2% slope. Will it run off?", a: "Choose bare, medium, 2% and 0.29 in/hr. The maximum is 0.25 to 0.50 in/hr, and the rate is within it, as in Example 11.3." },
      { q: "On no-till with heavy residue, can I run 0.65 in/hr on the same soil?", a: "Choose residue cover, medium, 2% and 0.65 in/hr. The maximum is 0.50 to 0.95 in/hr, so it is within range." },
      { q: "A pasture on clay loam with 10% slope gets 0.29 in/hr. Is that a problem?", a: "Choose bare, fine, 10% and 0.29 in/hr. The maximum is only 0.06 to 0.15 in/hr, so expect runoff. Use smaller nozzles or a closer spacing with lower flow, and run longer sets." }
    ],
    figs: []
  },
  "proc-nozzle-select": {
    more: [
      "Enter the spacing along the lateral and between laterals, design pressure at the sprinklers, average wind speed during irrigation, soil cover, texture and slope. The procedure uses Table 11.3 for rectangular spacing, Table 11.2 for coverage, Table 11.1 for discharge and Table 11.4 for the rate check.",
      "The output gives the coverage diameter needed, the smallest nozzle that reaches it at your pressure, its discharge and the application rate. If the rate exceeds the soil's maximum, the layout needs a closer spacing with smaller nozzles or a different system. If no nozzle reaches the coverage, raise the pressure or tighten the spacing. Pick the smallest nozzle that passes to keep flow, pump size and application rate down.",
      "This follows Example 11.3. Carry the discharge into the lateral design (Eqs. 11.10 to 11.16)."
    ],
    qa: [
      { q: "What nozzle do I need for a 40 by 60 foot layout at 50 psi in 5 mph wind on a bare silt loam with 2% slope?", a: "Enter those values. The coverage needed is 100 ft, the nozzle 3/16 in at 7.2 gpm and the rate 0.29 in/hr, which meets the 0.50 in/hr maximum, as in Example 11.3." },
      { q: "What if we move the laterals 50 feet instead of 60?", a: "Enter 40 by 50 ft with the same pressure and wind. The coverage needed drops to 89 ft, so a 5/32 in nozzle at 5.0 gpm works, with a rate of 0.24 in/hr." },
      { q: "Same 40 by 60 layout on a bare clay loam at 3% slope. Does it work?", a: "Enter fine soil and 3% slope. The nozzle is still 3/16 in at 0.29 in/hr, but it exceeds the 0.25 in/hr maximum. Go to 40 by 50 ft with 5/32 in nozzles (0.24 in/hr) or add residue." }
    ],
    figs: ["11.3", "11.4", "11.6"]
  },
  "eq-11.5-11.9": {
    more: [
      "The average pressure is the design pressure for the sprinklers, usually 40 to 60 psi for impact sprinklers. Friction loss along the lateral comes from Eq. 11.11, or from Table 8.2 times the outlet factor. Elevation difference is the inlet elevation minus the end elevation, positive for a downhill lateral, from a survey or GPS.",
      "The results are the pressure needed at the inlet and the pressure at the end. On a level lateral about three quarters of the friction loss occurs before the average pressure point. The book limits the pressure variation along the lateral to 20% of the average pressure, which keeps discharge variation under about 10%. A gentle downhill slope offsets friction and helps. Uphill laterals add elevation loss to friction and often fail.",
      "If the lateral fails, use a bigger pipe, a shorter lateral, pressure regulators or flow control nozzles (Figure 11.10)."
    ],
    qa: [
      { q: "My lateral is level with 8.9 psi of friction and 50 psi design pressure. What inlet pressure do I need?", a: "Enter Pa = 50, Pl = 8.9 and 0 ft. The inlet needs 56.7 psi and the end gets 47.8 psi. The variation is 17.8%, which meets the 20% limit, as in Example 11.4a." },
      { q: "What if the lateral runs down a 2% slope for 1320 feet?", a: "Enter Pa = 50, Pl = 8.9 and +26.4 ft. The inlet needs 51.0 psi and the end gets 53.5 psi (the book prints 53.8), with a variation of 2.5 psi. The slope almost cancels friction." },
      { q: "And uphill on the same slope?", a: "Enter -26.4 ft. The inlet needs 62.4 psi and the end gets 42.1 psi, a 41% variation, as in Example 11.4c. Use a bigger pipe or run the lateral on the contour." }
    ],
    figs: ["11.9", "11.10"]
  },
  "eq-11.11": {
    more: [
      "Lateral inflow comes from Eq. 11.16. Use C = 120 for aluminum with couplers and 150 for PVC. Inside diameter is about 1.9, 2.9, 3.9 or 4.9 in for 2, 3, 4 and 5 in aluminum. Length is from the inlet to the last sprinkler, and F is about 0.36 for 30 or more outlets (Table 8.3).",
      "The result is the friction loss along the whole lateral. Compare it with the 20% limit (Eq. 11.10). Friction rises with the 1.852 power of flow and falls with the 4.866 power of diameter. A 3 in lateral where a 4 in one is needed can lose two to three times the allowed pressure. Watch the units: this equation gives total psi along the lateral, not psi per 100 ft.",
      "Use the result in Eqs. 11.5 to 11.9 to set inlet and end pressure."
    ],
    qa: [
      { q: "My 1320 foot lateral of 4 inch aluminum carries 220 gpm. What is the friction loss?", a: "Enter 220 gpm, C = 120, D = 3.9 in, L = 1320 ft and F = 0.36. The loss is 8.9 psi, as in Example 11.4. At 50 psi average the limit is 10 psi, so it passes." },
      { q: "Can I use 3 inch aluminum on a 1280 foot lateral carrying 165 gpm?", a: "Enter 165 gpm, C = 120, D = 2.9 in, L = 1280 ft and F = 0.36. The loss is 21 psi, twice the 10 psi limit at 50 psi. Use 4 inch." },
      { q: "If the same 220 gpm lateral were 4 inch PVC, how much would I save?", a: "Enter 220 gpm, C = 150, D = 4.15 in, L = 1320 ft and F = 0.36. The loss is 4.3 psi, less than half the aluminum loss, because of both the smoother wall and the larger bore." }
    ],
    figs: ["11.9", "11.11"]
  },
  "eq-11.10-11.13": {
    more: [
      "Enter the design average pressure, inside diameter, C, length, outlet factor and sprinkler spacing for the lateral. The velocity limit is 7 ft/s for normal operation, or 10 ft/s where the line fills slowly and valves close gradually.",
      "The output gives two maximum flows, one from the 20% pressure rule and one from velocity, and the smaller one governs. Short laterals are limited by velocity, and long ones by pressure. Dividing the maximum flow by the number of sprinklers gives the largest average discharge the lateral can carry. If your sprinklers need more, use a bigger pipe or a shorter lateral.",
      "Figure 11.11 gives the same answer graphically for aluminum at 40 ft spacing."
    ],
    qa: [
      { q: "How many gpm can a 1000 foot, 5 inch aluminum lateral carry at 50 psi?", a: "Enter 50 psi, D = 5 in, C = 120, 1000 ft, F = 0.365, 7 ft/s and 40 ft. Velocity limits it to 428 gpm and 17.1 gpm per sprinkler. The book reads about 410 gpm and 16.4 gpm from Figure 11.11 in Example 11.5." },
      { q: "What about a short 400 foot run of 4 inch and 3 inch pipe?", a: "For 3.9 in and 400 ft, velocity limits it to 260 gpm. For 2.9 in, the limit is 144 gpm. These match the book's 260 and 145 gpm." },
      { q: "My quarter mile 4 inch lateral has sprinklers every 40 feet. What is the most each can put out?", a: "Enter 50 psi, D = 3.9 in, 1320 ft, F = 0.36 and 40 ft. Pressure limits it to 235 gpm, 7.1 gpm per sprinkler. A 3/16 in nozzle at 50 psi (7.2 gpm) is right at the limit." }
    ],
    figs: ["11.11"]
  },
  "eq-11.14": {
    more: [
      "Gross system capacity comes from Chapter 5, often 5 to 8 gpm per acre for set move systems in the western U.S. Spacing along the lateral and the move distance come from the layout. Number of sets is from Eq. 11.15. Set time and operating time come from the grower's routine, and downtime is the days per cycle when the system is not running, such as for harvest or weekends.",
      "The result is the smallest sprinkler discharge that keeps up with the capacity. More laterals, longer intervals or less downtime lower it. A single lateral covering many sets needs large nozzles and a high application rate, which can exceed the soil limit. Check the chosen nozzle's rate against Table 11.4.",
      "The book's Example 11.6 uses this equation, and the moved lateral procedure runs the whole design."
    ],
    qa: [
      { q: "What sprinkler discharge do I need for 6 gpm per acre, 40 by 50 spacing, 24 sets, 2 laterals, 12 hour sets with 10 hours on, an 8 day interval and 2 days down?", a: "Enter those values. The minimum discharge is 5.3 gpm, as in Example 11.6. A 11/64 in nozzle at 50 psi (6.0 gpm) covers it." },
      { q: "Could I do it with one wheel line on a 14 day interval?", a: "Enter 1 lateral, 24 sets and a 14 day interval with 2 days down. The discharge goes to 9.3 gpm, needing a 7/32 in nozzle or larger. On a 40 by 50 ft spacing a 7/32 in nozzle (9.8 gpm) applies about 0.47 in/hr, too fast for many soils." },
      { q: "On wheel lines at 40 by 60 with 24 hour sets, 30 minute moves, 22 sets, 2 laterals, a 12 day interval and 1 day down, at 7 gpm per acre?", a: "Enter those values. The minimum discharge is 4.7 gpm. A 5/32 in nozzle at 50 psi (5.0 gpm) works." }
    ],
    figs: ["11.12"]
  },
  "eq-11.15": {
    more: [
      "Measure the field width in the direction the laterals move. Lateral spacing is the move distance, often 50 or 60 ft.",
      "The result is the number of lateral positions. Round up to a whole number, since a partial set still needs a move. The number of sets drives the irrigation interval and the number of laterals needed (Eq. 11.14).",
      "Use the result in Eq. 11.14 and the moved lateral procedure."
    ],
    qa: [
      { q: "My field is 1200 feet wide and I move 50 feet. How many sets?", a: "Enter 1200 and 50 ft. There are 24 sets, as in Example 11.6." },
      { q: "A quarter mile field with 60 foot moves?", a: "Enter 1320 and 60 ft. There are 22 sets." },
      { q: "On a 1250 foot field with 40 foot moves, what number do I use?", a: "Enter 1250 and 40 ft. The answer is 31.25, so plan for 32 sets." }
    ],
    figs: ["11.12"]
  },
  "eq-11.16": {
    more: [
      "Discharge per sprinkler comes from Table 11.1 or Eq. 11.1. Lateral length and sprinkler spacing come from the layout. The result assumes all sprinklers discharge the same amount.",
      "The result is the flow into each lateral. Multiply by the number of laterals running at once for the system flow at the pump. Compare the lateral flow with the maximum inflow from Eqs. 11.10 to 11.13.",
      "Use the inflow in Eq. 11.11 for friction loss."
    ],
    qa: [
      { q: "My lateral has 5 gpm sprinklers every 30 feet over 1320 feet. What is the inflow?", a: "Enter 5 gpm, 1320 ft and 30 ft. Inflow is 220 gpm, as in Example 11.4." },
      { q: "With 7.2 gpm nozzles every 40 feet on 1280 feet, how much flow does the lateral need?", a: "Enter 7.2, 1280 and 40. Inflow is 230 gpm. Two laterals running together need 461 gpm at the pump." },
      { q: "A grower wants 12 gpm nozzles every 40 feet on a quarter mile lateral. Can 4 inch pipe handle it?", a: "Enter 12, 1320 and 40. Inflow is 396 gpm, well above the 235 gpm limit for 4 in pipe at that length. Use 5 inch or split the lateral." }
    ],
    figs: ["11.3", "11.12"]
  },
  "proc-moved-lateral": {
    more: [
      "Collect the field width and lateral length, the sprinkler and lateral spacings, gross system capacity, set time and operating time, the longest interval the crop can tolerate, downtime and design pressure.",
      "The procedure finds the number of sets, the fewest laterals that finish within the interval minus downtime, the interval actually used, the required sprinkler discharge and lateral inflow, the smallest nozzle that meets it and its application rate. Check the rate against Table 11.4 and the lateral inflow against Eqs. 11.10 to 11.13. If either fails, add a lateral or tighten the spacing.",
      "This follows Example 11.6."
    ],
    qa: [
      { q: "Design a hand line for a 1200 foot square field, 40 by 50 spacing, 6 gpm per acre, 12 hour sets with 10 hours on, a 10 day maximum interval and 2 days down.", a: "Enter those values. There are 24 sets and 2 laterals, an 8 day interval, 5.3 gpm per sprinkler and 159 gpm per lateral. The nozzle is 11/64 in at 6.0 gpm and 0.29 in/hr." },
      { q: "A quarter mile wheel line field at 40 by 60 with 24 hour sets, 7 gpm per acre, 12 day maximum and 1 day down?", a: "Enter 1320 ft for both, 40 by 60 ft, 7 gpm/ac, 24 hr sets with 23.5 hr on, 12 days and 1 day. There are 22 sets and 2 laterals, 4.7 gpm per sprinkler and 156 gpm per lateral. A 5/32 in nozzle at 0.20 in/hr works." },
      { q: "A half mile wide field with quarter mile laterals, 40 by 50, 12 hour sets, 6 gpm per acre, 10 day maximum and 1 day down. How many laterals?", a: "Enter 2640 ft wide, 1320 ft long and the rest. There are 53 sets and 3 laterals, 5.9 gpm per sprinkler and 195 gpm per lateral. The nozzle is 11/64 in at 0.29 in/hr." }
    ],
    figs: ["11.3", "11.12"]
  },
  "tab-11.5": {
    more: [
      "Dry leaf temperature is the expected minimum of an unprotected leaf, 1 °F below air temperature on nights with light wind to 3 to 4 °F below on calm, clear nights. Use the forecast low and a local weather station for wind. Choose the wind class.",
      "The rate is the sprinkling rate in in/hr needed to protect the crop through the freeze. Colder leaves and more wind need more water. Blank cells mean sprinkling is not expected to protect at that combination. The book says these are first approximations for design and planning, not for running a system on a given night.",
      "Use the rate to check the system capacity and pump size for a frost protection design."
    ],
    qa: [
      { q: "What sprinkling rate do I need at 24 °F leaf temperature with 5 to 8 mph wind?", a: "Enter 24 °F and the 5 to 8 mph class. The rate is 0.3 in/hr." },
      { q: "For a 21 °F night with 10 to 14 mph wind, what do I design for?", a: "Enter 21 °F and 10 to 14 mph. The calculator uses the 20 °F row and gives 0.8 in/hr." },
      { q: "At 18 °F with 10 to 14 mph wind, will sprinkling protect?", a: "Enter 18 °F and 10 to 14 mph. No rate is given, so sprinkling is not expected to protect at that combination." }
    ],
    figs: []
  },
  "tab-11.6": {
    more: [
      "Critical temperature is the temperature that damages buds at the current growth stage, from extension bud stage charts. Dewpoint comes from a local weather station or a handheld meter. The table is for apple trees in Washington State.",
      "The result is the minimum air temperature to turn the system on or off. Low dewpoints mean more evaporative cooling when sprinkling starts, so the system must start earlier. The book recommends turning the system on and off 2 to 3 °F higher than the table. Leave the system running until the ice is melting and air temperature is above the turn-off value.",
      "Pair this with Table 11.5 for the rate."
    ],
    qa: [
      { q: "My buds are at 28 °F critical temperature and the dewpoint is 20 °F. When do I turn on?", a: "Choose 28 °F and enter 20 °F. The minimum turn-on temperature is 33 °F, and the recommended is 36 °F." },
      { q: "My buds have a 32 °F critical temperature and the dewpoint is 25 °F. When do I turn on?", a: "Choose 32 °F and enter 25 °F. The minimum is 37 °F, and the recommended is 40 °F." },
      { q: "With a 30 °F critical temperature and a dry 12 °F dewpoint, how early must I start?", a: "Choose 30 °F and enter 12 °F. The minimum is 41 °F, and the recommended is 44 °F. Dry air means strong evaporative cooling when water first hits the trees." }
    ],
    figs: []
  }
});

window.CALC_USE2 = Object.assign(window.CALC_USE2 || {}, {
  "eq-12.1": {
    more: [
      "The three numbers you need are on the system itself. Read the nozzle size stamped on the sprinkler and the pressure at a nozzle with a pitot gauge, then look up the flow in the manufacturer chart or Table 11.1. Common wheel line and hand-move nozzles run 4 to 12 gpm. Pace or tape the sprinkler spacing along the pipe (usually 30 or 40 ft) and the distance between sets along the mainline (usually 40 to 60 ft, marked by the valve or hydrant spacing). Set time is whatever the grower actually runs, usually 11 to 12 hours for two moves a day or 23 to 24 hours for one.",
      "Most moved laterals put on 0.15 to 0.6 in/hr. Compare the rate to the soil intake rate: sands take 0.5 to 1.0 in/hr, silt loams 0.3 to 0.5 in/hr, and clays 0.1 to 0.2 in/hr, so a rate above that range means ponding and runoff on the low spots. The gross depth is what leaves the nozzles, not what the crop gets. Multiply by the application efficiency (Eq. 12.2) before you compare it with the allowable depletion. A common mistake is using the nozzle chart flow at a pressure the system does not reach, which overstates both numbers.",
      "Use Table 12.3 as a quick cross check of the rate, then carry the gross depth to Eq. 12.2 and to the allowable depletion in Eq. 12.4. The moved-lateral spreadsheet ties all of these together."
    ],
    qa: [
      { q: "I run my hand lines 12 hours a set. The nozzles are 7 gpm on 30 by 50. How much am I putting on?", a: "Enter 7 gpm, 30 ft, 50 ft and 12 hr. The rate is 0.45 in/hr and the gross depth is 5.4 in. On a silt loam holding about 3 in of allowable depletion, only about 4 in gross is useful at 75% efficiency, so I would tell him to cut the set to about 9 hours." },
      { q: "We switched the wheel line to small nozzles and run 23-hour sets. Is that too much water?", a: "With 4.5 gpm nozzles on 40 by 60 ft and 23 hr, the rate is 0.18 in/hr and the gross depth is 4.15 in. At 75% that is about 3.1 in net, which fits a 4 ft root zone on a loam. The low rate is a good match for a heavy soil that seals." },
      { q: "A cost-share plan shows 12 gpm sprinklers on a 30 by 40 spacing over silt loam. Does that pass?", a: "Enter 12 gpm, 30 ft and 40 ft. The rate is 0.96 in/hr, about twice what a silt loam will take in. Ask the designer for a wider spacing or a smaller nozzle before approving it." }
    ],
    figs: ["12.1", "12.4"]
  },
  "eq-12.2": {
    more: [
      "The gross depth comes from Eq. 12.1 or a catch can test. The low-quarter efficiency comes from a uniformity test (Chapter 5) or a typical value: 60% to 75% is normal for side rolls and hand moves, lower in steady wind above 10 mph and on worn nozzles. If you have no test data, use 0.65 for a windy site and 0.75 for a well-maintained line in light wind.",
      "The net depth is the water stored in the root zone over the quarter of the field that gets the least. Compare it to the allowable depletion. If the net depth is larger, the extra goes below the roots and the set can be shortened. If it is much smaller than the deficit, the crop will be short even though the meter says plenty was pumped. Do not apply the efficiency twice, once here and again in a scheduling sheet that already uses gross amounts.",
      "Next, compare the net depth with Eq. 12.3 (what the crop needs per interval) and Eq. 12.4 (what the soil can hold)."
    ],
    qa: [
      { q: "The meter says I put on 2 inches. How much of that did the crop actually get?", a: "With an efficiency of 0.70, enter 2.0 in and 0.70. The net depth is 1.4 in. That is the number to subtract from the soil water deficit in the checkbook, not the 2 in." },
      { q: "My side roll puts on 4.5 inches a set. Is that wasting water on a 3.6 inch allowable depletion?", a: "Using the book's 75% low-quarter efficiency, 4.5 in gross gives 3.38 in net. That is just under the 3.6 in allowable depletion, so the set length is about right and deep percolation should be small." },
      { q: "It blows 15 mph most afternoons out here. Does that change anything?", a: "Wind lowers the efficiency. At 0.65, a 3.2 in gross depth only gives 2.08 in net. Tell the grower to move afternoon sets to night where possible, or plan on a longer set to make up the shortfall." }
    ],
    figs: ["12.7", "5.7"]
  },
  "eq-12.3": {
    more: [
      "The irrigation interval is how many days it takes the lateral to get back to the same set. Count sets per lateral and sets per day, then add the time to drag the line back to the start. The net crop water use rate comes from a weather station or ET network (peak 0.25 to 0.35 in/d for corn, alfalfa and sugar beets in the western US), less effective rain.",
      "The required depth is what each irrigation must replace so the crop does not fall behind. If it is larger than the net depth applied, the system cannot keep up at peak and the soil water will run down over the season. If it is larger than the allowable depletion, the interval is too long for the soil even if the depth is applied. Use daily ET at peak, not the seasonal average, or the answer will look fine on paper and fail in July.",
      "Compare the result with Eq. 12.2 (net depth applied) and Eq. 12.4 (allowable depletion). If either is short, look at more laterals with Eq. 12.8 and 12.9."
    ],
    qa: [
      { q: "It takes me 8 days to get around the field and the crop is using about 0.28 a day. How much do I need to put on each time?", a: "Enter 8 days and 0.28 in/d. The required net depth is 2.24 in. At 75% efficiency that means about 3.0 in gross per set." },
      { q: "We take 11 and a half days to cover the field and the station says 0.30 in a day at peak. Will the side roll keep up?", a: "The required net depth is 11.5 x 0.30 = 3.45 in. The book's system nets 3.38 in per set, so it falls about 0.07 in short every interval at peak. It is close, and a hot week will draw the soil down." },
      { q: "Can I stretch the interval to 14 days on alfalfa using 0.25 a day?", a: "The required net depth is 3.5 in. That is only workable if the allowable depletion is at least 3.5 in, which takes a deep loam with a 4 ft or deeper root zone. On a sandy loam it will stress the stand." }
    ],
    figs: ["12.5"]
  },
  "eq-12.4": {
    more: [
      "Get the available water capacity from the NRCS Web Soil Survey for each layer in the root zone, or from texture (sands 0.5 to 1.0 in/ft, sandy loams 1.2 to 1.5, silt loams 2.0 to 2.5, clay loams 1.8 to 2.1). Root depth for scheduling is the managed depth, often 2 ft for potatoes and onions, 3 to 4 ft for corn and beets, and 4 to 5 ft for alfalfa, limited by any hardpan or gravel. The depletion fraction is 0.5 for most field crops and 0.3 to 0.35 for potatoes and vegetables.",
      "The allowable depletion is the most water one irrigation can usefully replace. A net depth larger than this is lost to deep percolation. Most field crop soils come out between 1.5 and 4 in. Use the actual probe or auger depth of roots early in the season, since a 4 ft value in June overstates the soil bank by double or more.",
      "Figure 12.5 shows how the allowable depletion and the net crop water use set the longest interval. Compare the result with the net depth from Eq. 12.2."
    ],
    qa: [
      { q: "How dry can I let this corn get on our silt loam before I need the wheel line back?", a: "With a 3 ft root zone, 2.0 in/ft and 50% depletion, the allowable depletion is 3.0 in. At 0.30 in/d that is about 10 days between irrigations at peak." },
      { q: "We have potatoes on a sandy loam. The side roll puts on 2 inches net. Is that too much?", a: "For a 2 ft root zone, 1.2 in/ft and 35% depletion, the allowable depletion is only 0.84 in. A 2 in net set pushes more than half the water past the roots and carries nitrate with it. The grower needs shorter sets, around 1 in gross." },
      { q: "On a field visit to sugar beets on fine sandy loam, how much room is in the soil?", a: "The book's case is 4 ft, 1.8 in/ft and 0.5, giving 3.6 in. Check it against the 3.38 in net per set, which fits." }
    ],
    figs: ["12.5"]
  },
  "eq-12.5-12.7": {
    more: [
      "Measure the lateral length from the mainline to the last sprinkler, and the field length and width from the farm map or by pacing. The lateral spacing along the mainline is the distance between valve or hydrant outlets, usually 40 to 60 ft. Quarter-mile wheel lines are about 1,280 to 1,320 ft long, and hand-move lines are usually 600 ft or less.",
      "Area per set tells you how many acres each move covers. The number of sets must be rounded up, so a field that needs 52.8 sets really needs 53. More sets mean a longer interval for the same number of laterals. A common error is leaving out the second side of the mainline when the lateral irrigates both sides, which cuts the set count in half.",
      "Carry the number of sets to Eq. 12.8 and 12.9 to find how many laterals are needed. Area per set also feeds the injection rate in Eq. 15.1."
    ],
    qa: [
      { q: "If I go to 50 foot moves instead of 60 on the quarter-mile line, how many more sets is that?", a: "Enter a 1,320 ft lateral, 50 ft spacing and a 1,320 by 2,640 ft field. Area per set drops to 1.52 ac and the field needs 53 sets instead of 44. That is 9 more moves each time around." },
      { q: "I have 40 acres, about 1,280 by 1,320 feet, and a 1,280 foot wheel line on 60 foot moves. How many sets?", a: "Area per set is 1.76 ac. The field is 38.8 ac, so it takes 22 sets." },
      { q: "A small farm wants hand lines 600 feet long on 40 foot moves on a 600 by 1,200 foot field. How many moves is that?", a: "Each set covers 0.55 ac. The 16.5 ac field takes 30 sets, so one lateral at two sets a day needs 15 days, too long at peak use. Plan on two laterals." }
    ],
    figs: ["12.6", "11.12"]
  },
  "eq-12.8-12.9": {
    more: [
      "The interval comes from the allowable depletion divided by peak net use (Eq. 6.8), or from what the grower wants. Set time includes the move, so 12 hr per set means two sets a day. The time to reposition the lateral back to the first set depends on the field, often half a day for a wheel line that has to be walked back across the field.",
      "Sets per lateral are rounded down because a lateral cannot do part of a set within the interval. Laterals are rounded up. When the rounding leaves a lot of slack, you can relax the set time or the interval rather than buying another line. Using the interval in hours with the formula expecting days, or forgetting the repositioning time, are the usual mistakes.",
      "The interval that results then goes back into Eq. 12.3 to check that the system keeps up with the crop."
    ],
    qa: [
      { q: "My agronomist wants a 10-day interval. How many wheel lines do I need for 44 sets?", a: "With 12 hr sets and 12 hr to reposition, each line can do 19 sets in 10 days. 44 sets need 3 lines." },
      { q: "On sandy ground we need a 7-day interval. Same 44 sets. What does that take?", a: "Each lateral now covers only 13 sets, so the field needs 4 laterals. Often the cheaper fix is a pivot or solid set on that ground." },
      { q: "I want one 24-hour move per day so I only go out once. With 22 sets and a 12-day interval, does that work?", a: "Enter 12 days, 12 hr repositioning, 24 hr sets and 22 sets. Each lateral covers 11 sets, so two laterals do it. Check the depth per set, since 23 hr of water at 0.41 in/hr is about 9.5 in gross, far too much for most soils, unless the nozzles are made smaller." }
    ],
    figs: ["12.6", "12.7"]
  },
  "eq-12.10": {
    more: [
      "Read nozzle pressure with a pitot tube pressed into the jet a quarter inch from the nozzle (Figure 12.9). Take readings at the second sprinkler and the next to last sprinkler as shown in Figure 12.8, plus the locations where elevation changes most. Typical side roll pressures are 40 to 60 psi at the inlet. Pitot gauges read high or low if the tube is not centered in the stream, so take two or three readings and use the steady one.",
      "The average lateral pressure sits about a quarter of the way from the minimum to the maximum. The guideline is a spread under 20% of the average, which keeps sprinkler flows within about 10%. If the spread is over the limit, the options are flow control nozzles, pressure regulators (which cost about 5 psi), or a larger pipe for the first part of the lateral. Running laterals uphill makes this worse, and downhill helps.",
      "Use the average pressure in the nozzle chart to get the real discharge, then go to Eq. 12.1. Check flows directly with the average discharge calculator."
    ],
    qa: [
      { q: "I checked the wheel line: 52 psi at the front, 46 at the tail. Is that good enough?", a: "The average is 47.5 psi and the spread is 6 psi. The limit is 9.5 psi (20%), so the line passes at 12.6%." },
      { q: "On the book's lateral I read 45 and 32. What do I tell the grower?", a: "Average 35.25 psi, spread 13 psi, limit 7 psi. The variation is 37%, almost twice the guideline. Pressure regulators on the first sprinklers are the cheapest fix." },
      { q: "The line runs uphill. I get 60 at the inlet and 48 at the end. Do I need regulators?", a: "Average is 51 psi and the spread of 12 psi is 23.5%, just over the 10.2 psi limit. Flow control nozzles on the first third of the line would likely bring it in." }
    ],
    figs: ["12.8", "12.9", "11.9", "11.10"]
  },
  "avg-discharge-12": {
    more: [
      "Measure sprinkler flow by slipping a hose over the nozzle and timing how long it takes to fill a bucket of known volume. A 5 gallon bucket filled in 30 seconds is 10 gpm. Do it at the same sprinklers used for the pressure test. Typical moved-lateral sprinklers deliver 4 to 12 gpm.",
      "The average discharge is the minimum plus about 40% of the spread. Flows should vary less than 10% of the average. A variation over 10% usually means pressure variation over 20% or worn nozzles. Compare the average with the chart flow at design pressure. If it is 5% or more above chart, nozzles are worn and should be replaced.",
      "The average flow goes into Eq. 12.1 for application rate and depth."
    ],
    qa: [
      { q: "My catch at the first sprinkler was 10.96 gpm and 9.11 at the end. OK?", a: "These are the book's Table 12.4 numbers. The average is 9.85 gpm and the variation is 18.8%, almost double the 10% limit. Regulators on the first ten sprinklers cut it to 7% in the book's test." },
      { q: "I timed buckets at 8.6 and 8.0 gpm on the new side roll. Is that fine?", a: "The average is 8.24 gpm and the variation 7.3%. That passes. Use 8.24 gpm in the application rate." },
      { q: "An old hand line gives 6.2 gpm at the front and 5.0 at the end. What is wrong?", a: "The average is 5.48 gpm with a 21.9% variation. That points to bad pressure distribution, worn or mixed nozzles, or both. Check pressures and nozzle sizes before anything else." }
    ],
    figs: ["12.8", "12.9"]
  },
  "can-depth-12": {
    more: [
      "Measure the volume in each can with a graduated cylinder in mL (1 mL = 1 cm³). Measure the inside diameter of the can top with a ruler. Coffee cans or 4 in rain gauges are common. Read the can soon after the test, since evaporation in hot wind can take off 5% or more in an hour.",
      "The depth is the volume divided by the opening area. For a 4 in can, 81 cm³ is 1 cm and about 206 cm³ is 1 in. Use the top diameter, not the base, for tapered cups. Mixing inches for the diameter with cm³ for the volume is where most people go wrong, and this calculator does that conversion for you.",
      "Depths from each can go into the catch can or CU calculators."
    ],
    qa: [
      { q: "The can by the central sprinkler caught 235 mL. It is a 4 inch can. How many inches is that?", a: "The opening is 81.1 cm², so the depth is 2.90 cm, or 1.14 in, which matches Example 12.5." },
      { q: "I used 3.5 inch plastic cups and got 120 mL. What is that in depth?", a: "Area is 62.1 cm² and the depth is 0.76 in." },
      { q: "One of my 6 inch cans got 500 mL. Is that a high one?", a: "That is 1.08 in. Compare it with the average of the overlapped depths before calling it high." }
    ],
    figs: ["12.11"]
  },
  "catch-can-12": {
    more: [
      "Lay cans in a grid around one lateral as in Figure 12.11, usually 10 ft apart and 5 ft offset from the sprinklers, in rows out to the next set on each side. Run the lateral for an hour or two at normal pressure in light wind and note wind speed and direction. Enter the volumes row by row in the same order as the row distances.",
      "The calculator adds what each can would get from the neighboring sets (y + S<sub>m</sub> and y - S<sub>m</sub>) to the central reading to give overlapped depth. The CU is 100 times one minus the mean deviation over the mean. Moved laterals usually run 75% to 90%. Below 75%, check spacing for the wind, pressure and nozzles. Dividing the mean overlapped depth by test time gives the real application rate.",
      "The CU and low-quarter depth also give the application efficiency for Eq. 12.2."
    ],
    qa: [
      { q: "We ran the Table 12.5 cans for 2 hours. What is the CU?", a: "The overlapped mean is 1.26 in and the mean deviation 0.13 in, so CU is about 90%. That is good for a moved lateral." },
      { q: "What would the same test show if the grower moved the line 50 feet instead of 60?", a: "With S<sub>m</sub> = 50 ft, the mean depth is 1.51 in for the 2 hr and the CU is 90.5%. Uniformity barely changes, but he would need about 20% more sets." },
      { q: "How do I get the real application rate from the test?", a: "Divide the overlapped mean by the run time. 1.26 in over 2 hr is 0.63 in/hr. Compare that with Eq. 12.1 using the measured flow and the soil intake rate." }
    ],
    figs: ["12.11", "11.6"]
  },
  "cu-list-12": {
    more: [
      "Use this when you already have depths, from a catch can test, soil probe readings after irrigation, or a spreadsheet. Any one unit works. Enter at least 16 to 24 values from across the area that represents normal overlap.",
      "Christiansen's CU of 85% or more is good for sprinklers, 75% to 85% is fair, and below 75% calls for fixes. Including cans at field edges with no overlap drags the number down unfairly. A single odd can, from a dripping riser or a bird, can move CU by several points, so check outliers.",
      "Higher CU means higher application efficiency in Eq. 12.2."
    ],
    qa: [
      { q: "My row of eight cans read 1.39, 1.16, 1.10, 1.34, 1.40, 1.11, 1.06, 1.28 inches. CU?", a: "Mean 1.23 in, mean deviation 0.12 in, CU 90%. Good." },
      { q: "A windy afternoon test gave 0.9, 1.4, 1.1, 0.7, 1.3, 1.2, 0.8, 1.0. What does that tell me?", a: "Mean 1.05 in, deviation 0.20 in, CU 81%. Fair. Shift sets to calm hours or narrow the spacing." },
      { q: "A solid set orchard test came back 0.52, 0.48, 0.55, 0.50, 0.47, 0.53, 0.51, 0.49. Any concern?", a: "Mean 0.51 in and CU 95.8%. Excellent. No changes needed." }
    ],
    figs: ["12.11", "11.6"]
  },
  "eq-12.11": {
    more: [
      "Gun flow comes from the gun chart (Table 12.6) at the measured nozzle pressure, or from Eq. 12.14. Lane spacing is the distance between tow paths, usually 200 to 330 ft. Travel distance is lane length less the starting setback. Time for the pass is set on the reel speed control, or measure speed by timing the cart over 100 ft.",
      "Traveler depths are usually 1 to 3 in per pass. If the depth is more than the allowable depletion or the soil cannot take it, speed up the cart. A slower cart in the first few feet or at the end (dwell) puts on much more water, so the setback matters. Using the full lane length instead of the travel distance understates speed.",
      "Compare the gross depth with the allowable depletion after efficiency (Eq. 12.2 and 12.4)."
    ],
    qa: [
      { q: "My gun puts out 585 gpm, lanes 264 ft apart, 1,300 ft long with an 88 ft setback, 11 hours a pull. How much water?", a: "Travel distance 1,212 ft, speed 110 ft/hr, gross depth 1.94 in. That is the book's Example 12.6." },
      { q: "A small 300 gpm traveler on 200 ft lanes pulls 1,100 ft in 20 hours. Is that a lot?", a: "Speed 55 ft/hr and depth 2.63 in. On sandy soil with 1.5 in allowable depletion, that is too much. Speed the cart up to about 75 ft/hr for 1.9 in gross, about 1.45 in net at 75% efficiency." },
      { q: "We run 450 gpm on 240 ft lanes, 1,250 ft pull in 10 hours. Depth?", a: "Speed 125 ft/hr, depth 1.44 in. Reasonable for a pasture or a sandy loam." }
    ],
    figs: ["12.18", "12.20", "12.17"]
  },
  "eq-12.12": {
    more: [
      "Gun flow is from the chart or a meter. The wetted radius is half the wetted diameter in Table 12.6, or pace it from the gun to the edge of the wet pattern on a calm day. The central angle is the part-circle setting, usually 210° to 330°, with 270° typical so the dry wedge is in front of the cart.",
      "Traveler rates are high, usually 0.3 to 0.6 in/hr average, with peaks much higher. Big droplets at high rate seal bare soil. A wider angle spreads the same flow over more area and lowers the rate. Keep the rate under the soil intake rate, and use smaller nozzles or ring nozzles on fine soils.",
      "Combine this rate with the depth from Eq. 12.11 to judge runoff risk."
    ],
    qa: [
      { q: "My gun is 585 gpm with a 220 ft wetted radius at 270°. What's the application rate?", a: "0.49 in/hr, as in Example 12.6. Fine for a sandy loam but marginal on a silt loam." },
      { q: "If I open the angle to 330°, does that help?", a: "Yes. The rate drops to 0.40 in/hr. Full circle (360°) would be 0.37 in/hr but soaks the cart path." },
      { q: "A smaller 300 gpm gun with a 160 ft radius at 270°, what rate?", a: "0.48 in/hr. Smaller guns are not gentler unless the radius is large for the flow." }
    ],
    figs: ["12.18", "12.19"]
  },
  "eq-12.13": {
    more: [
      "Net capacity needed is from local design guides, often 4 to 6 gpm/ac for humid areas and more in arid areas. Efficiency for travelers is about 0.65 to 0.75. Get lane width and length from the field layout, the number of lanes from the field width, and times from the grower's routine.",
      "The result is the gun flow needed to meet capacity within the interval. If it is more than the gun or the hose can handle, add a traveler or lengthen the hours. Double check that the set time and operating hours are realistic for how the grower works.",
      "Pick a gun and nozzle that give this flow with Table 12.6 or Eq. 12.14."
    ],
    qa: [
      { q: "For the book's field (4.5 gpm/ac, 10 lanes, 12 hr sets, 11 hr pulls, 5.5 day interval) how big a gun do I need?", a: "Area per set 7.88 ac and the flow needed is 567 gpm, as in Example 12.7." },
      { q: "A grower wants one pull per day, 23 hr pulls, 8 lanes of 240 by 1,250 ft, 5 gpm/ac, 70% efficiency, 8 day interval. What flow?", a: "Area per set 6.89 ac and the gun needs 411 gpm. A 4 in hose traveler can do it." },
      { q: "If I use two travelers in the book's field, what size guns?", a: "Each needs about 284 gpm. Smaller guns may fit a lower pressure and smaller hose." }
    ],
    figs: ["12.20"]
  },
  "eq-12.14": {
    more: [
      "The coefficient and exponents come from the gun maker or from fitting a line to the flow table (Figure 12.21). Read pressure at the gun base, not at the reel inlet. Nozzle size is stamped on the nozzle.",
      "Flow rises with the square root of pressure for most guns. A drop from 60 to 50 psi cuts flow by about 9%. Using the inlet pressure without subtracting hose and reel loss overstates flow. Check the result against a meter if the farm has one.",
      "Use the flow in Eq. 12.11 and 12.12."
    ],
    qa: [
      { q: "I have a 1.83 inch nozzle reading 60 psi at the gun. What am I pumping?", a: "Using C<sub>d</sub> 16, a 0.50 and b 2.566 from Figure 12.22, the flow is 584 gpm. That matches the book's 585 gpm and is the number to use in the depth and rate calculations." },
      { q: "If I turn the booster up to 80 psi at the gun, how much more water do I get?", a: "Keep the same coefficients and enter 80 psi. The flow rises to 675 gpm, about 15% more. At 50 psi it would drop to 533 gpm, so check that the hose and pump can carry the extra flow before turning it up." },
      { q: "The grower wants to drop to a 1.5 inch nozzle at 70 psi to save pumping. What flow is that?", a: "With the same C<sub>d</sub> and exponents, the flow is about 379 gpm. Coefficients differ by gun and nozzle type, so confirm against the maker's chart, then recheck depth and lane spacing for the shorter throw." }
    ],
    figs: ["12.21", "12.15", "12.14"]
  },
  "tab-12.3": {
    more: [
      "Pick the row for the sprinkler spacing along the lateral and the set spacing along the mainline, then enter the sprinkler flow. The table interpolates between the printed flow columns of 4 to 25 gpm and covers spacings from 20 by 40 ft to 80 by 80 ft. Get the flow from the nozzle chart at measured pressure or from a bucket test. This is the fastest way to answer a phone call when the grower knows his spacing and nozzle.",
      "The table is the same formula as Eq. 12.1 (96.3 q<sub>s</sub> divided by the spacing area), so the two values should agree within rounding. Rates of 0.2 to 0.5 in/hr suit most medium soils. Blank cells in the printed table are combinations the book considered impractical, usually too high a rate or too little overlap. A rate above the soil intake rate means runoff on slopes and ponding in low spots.",
      "Use the rate with set time in Eq. 12.1 for depth, and compare it with the intake rate of the soil."
    ],
    qa: [
      { q: "Wheel line is on 40 by 60 with 10 gpm nozzles. What rate am I putting on?", a: "Pick the 40 x 60 row and 10 gpm. The table gives 0.40 in/hr and the formula 0.401 in/hr. An 11 hr set puts on about 4.4 in gross." },
      { q: "I have 30 by 50 spacing and 7 gpm nozzles on a silt loam. Quick number?", a: "Interpolating between the 6 and 8 gpm columns gives 0.45 in/hr. That is at the top end for a silt loam, so watch for ponding in the wheel tracks." },
      { q: "A plan shows 40 by 40 spacing with 12 gpm sprinklers. Should I flag it?", a: "The table gives 0.72 in/hr. Only sands and loamy sands take that without runoff. On finer soil ask for a 40 by 60 spacing, which drops the rate to 0.48 in/hr with the same nozzles." }
    ],
    figs: ["12.1"]
  },
  "tab-12.6": {
    more: [
      "Read the gun series and nozzle size off the gun, and the pressure from a gauge at the gun base, not at the pump or reel inlet. Taper bore nozzles throw farther for the same flow. Ring nozzles break the stream into smaller drops and suit finer soils and young crops. The table covers 50 to 120 psi for the Nelson 150 and 200 series.",
      "The flow goes into the depth and rate equations, and the wetted diameter sets the lane spacing in Table 12.7. Running a gun below about 60 psi shortens the throw and leaves a ring of heavy water near the gun and a dry band at the edge (Figure 12.15). If the measured wetted diameter is much shorter than the chart value, suspect low pressure or a worn nozzle. Doubling the nozzle area roughly doubles the flow but adds much less throw.",
      "Carry the flow to Eq. 12.11 and 12.12 and the wetted diameter to Table 12.7."
    ],
    qa: [
      { q: "My 150 series gun has a 0.9 inch taper nozzle running at 80 psi. What's it doing?", a: "The table gives 210 gpm and a 335 ft wetted diameter, so a 167.5 ft radius. Use 210 gpm for the depth and 335 ft for the lane spacing check." },
      { q: "We have a 200 series with a 1.56 ring nozzle at 80 psi. Flow and throw?", a: "445 gpm and a 420 ft wetted diameter. With a ring nozzle in wind up to 10 mph, lanes can be 60% of that, or 252 ft." },
      { q: "If the pump only gives 60 psi at the 0.9 inch taper, what changes?", a: "Flow drops to 182 gpm and the wetted diameter to 305 ft. That is 30 ft less throw, so lanes laid out for 335 ft will show dry strips and need to come in." }
    ],
    figs: ["12.14", "12.15"]
  },
  "tab-12.7": {
    more: [
      "Take the gun wetted diameter from Table 12.6 at the actual pressure, or measure it on a calm day. Choose the wind class from average wind speed during irrigation hours at the nearest weather station. Ring nozzles use the smaller percentage in each wind class and taper nozzles the larger. Measure the actual lane spacing between tow paths with a wheel or GPS.",
      "The result is the widest lane spacing that still overlaps well. Lanes wider than the maximum leave a dry strip midway between passes that shows up as yellow streaks in the crop. Lanes much narrower than needed waste time and hose wear. Using the chart diameter at 100 psi when the gun really runs at 70 psi is a common mistake that overstates the allowable spacing.",
      "The lane spacing becomes W<sub>p</sub> in Eq. 12.11 and 12.13."
    ],
    qa: [
      { q: "My gun throws 440 feet with a taper nozzle, wind usually under 10 mph. Are 264 foot lanes OK?", a: "Pick 65% for a taper nozzle in wind up to 10 mph. The maximum lane is 286 ft and 264 ft is 60% of the diameter, so it passes." },
      { q: "The 150 taper at 80 psi throws 335 ft and it blows over 10 mph most days. Will 200 foot lanes work?", a: "At 55% the maximum is 184 ft. 200 ft is 59.7% of the diameter, too wide for that wind. Move lanes in to 180 ft or go to a bigger gun." },
      { q: "A ring nozzle with a 400 ft throw in a calm valley, under 5 mph. Can we stretch to 300 ft lanes?", a: "At 70% the maximum is 280 ft and 300 ft is 75%. Keep lanes at 280 ft or less." }
    ],
    figs: ["12.19", "12.20"]
  },
  "tab-12.8": {
    more: [
      "Pick the hose diameter and length off the traveler nameplate or measure the hose. Travel distance is twice the hose length because the reel sits midway in the lane. These are typical values for cable-tow travelers from Harrison et al. (2015), useful for sizing and for checking a dealer quote.",
      "The maximum capacity is the flow the hose can carry without excessive friction loss. Area covered per pass is lane spacing times travel distance. Larger hoses carry more flow and more acres but need a bigger tractor to pull them out. If the field needs more flow than the hose can carry, use a bigger hose, two travelers or a longer season of operation.",
      "Compare capacity with the flow needed from Eq. 12.13, and check hose loss with Tables 12.9 and 12.10."
    ],
    qa: [
      { q: "What can a 4.5 inch by 660 foot traveler handle?", a: "Up to 1,320 ft of travel, 730 gpm and about 145 ac. It covers about 9.1 ac per pass at 90 to 100 psi and takes a 4,000 to 6,000 lb pull." },
      { q: "A neighbor has a 3 inch by 660 foot reel for sale. Is it enough for my 40 acre hay field?", a: "It is rated for 250 gpm and 50 ac, with 6.4 ac per pass on 210 ft lanes. It will cover 40 ac if the field layout fits 1,320 ft runs." },
      { q: "The dealer quotes a 4 inch by 1,320 foot reel. What do I need to pull it?", a: "Travel is 2,640 ft and capacity 535 gpm for about 107 ac, 18.2 ac per pass. The hose pull is 7,000 to 10,000 lb, so a larger tractor is needed." }
    ],
    figs: ["12.16", "12.17"]
  },
  "tab-12.9-12.10": {
    more: [
      "Choose lay-flat (Table 12.9, read at 100 psi) or hard hose (Table 12.10, Hazen-Williams C = 150) and the inside diameter. Enter the gun flow and the full hose length. Use the full length even when part of the hose is on the reel, since water still flows through it.",
      "Hard hose losses of 20 to 50 psi are common, and this is often the largest pressure loss in a traveler. Every psi lost in the hose needs to be made up at the pump or is lost from gun pressure and throw. If the loss is above about 40 psi, look at the next larger hose. Flows off the end of the table are outside the range where that hose should be used.",
      "Add the hose loss to cart and reel loss and elevation in the traveler spreadsheet."
    ],
    qa: [
      { q: "My 4.5 inch hard hose is 1,250 ft long and carries 585 gpm. What do I lose in it?", a: "The table gives 3.74 psi per 100 ft, so 46.7 psi for the full hose. That is most of the pressure loss in the traveler." },
      { q: "We have a 4 inch lay-flat supply line, 660 feet, at 400 gpm. Loss?", a: "2.3 psi per 100 ft, about 15.2 psi total. For comparison, a 4.0 in hard hose at the same flow loses 3.28 psi per 100 ft." },
      { q: "Is a 3.7 inch hard hose 1,000 ft long OK for 400 gpm?", a: "It loses 4.79 psi per 100 ft, or 47.9 psi. A 4.0 inch hose drops that to 32.8 psi, saving about 15 psi of pumping." }
    ],
    figs: ["12.21", "12.16", "12.17"]
  },
  "moved-lateral-sheet": {
    more: [
      "This follows the book's management spreadsheet (Figure 12.7). Field size, mainline and lateral sizes, and elevations come from the farm map and a walk of the line. Nozzle flow and wetted diameter come from Tables 11.1 and 11.2, spacing limits from Table 11.3 for the wind, and soil and crop numbers from the Web Soil Survey and Chapter 6. The set, move and reposition times are what the operator actually does.",
      "Read the checks line first. Pressure variation should be under 20% of design pressure, mainline velocity under 5 ft/s, lateral inflow under 7 ft/s, sprinkler and lateral spacing within the wind limits, net depth no more than the allowable depletion, and total flow within the supply. The net crop use the system can meet (C<sub>n</sub>) should be at or above local peak ET. When one check fails, change one input at a time and watch which outputs move.",
      "It ties together Eqs. 12.1 to 12.9, so use the single equation calculators when you want to explain one step to the grower."
    ],
    qa: [
      { q: "Does the book's side roll system in Figure 12.7 meet the guidelines?", a: "Yes. Lateral pressure loss is 10.3 psi, 18.7% of 55 psi, the rate is 0.41 in/hr, and the 11.5 day interval gives 3.41 in net against a 3.6 in allowable depletion. It meets 0.30 in/d of crop use." },
      { q: "Same system, but the soil only holds 1.2 inches per foot. What breaks?", a: "Allowable depletion falls to 2.4 in, and the 3.41 in net per set now exceeds it by about 1 in. Shorten sets to about 8 hr, which needs more moves per day or a second lateral to hold the interval." },
      { q: "The grower wants to go to one 24 hour set a day to save labor. What happens?", a: "The interval doubles to 22.5 days and each set puts on 9.5 in gross, 7.1 in net. Most of that goes below the roots. He would need nozzles with about half the flow to make 24 hr sets work." }
    ],
    figs: ["12.6", "12.7"]
  },
  "traveler-sheet": {
    more: [
      "This follows the book's traveler spreadsheet (Figure 12.22). Gun coefficients come from the maker or from fitting the flow table, cart and reel loss from the maker's curve (Figure 12.21), and hose data from the nameplate. Measure the setback, lane length and lane spacing in the field. The inlet pressure available is a gauge reading at the hydrant with the traveler running.",
      "Read the checks line first. The required inlet pressure is the nozzle pressure plus mainline, hose, cart and reel losses, nozzle height and elevation. If the available pressure is short, the gun runs low and throws less. Lane width should be inside the Table 12.7 limit, flow inside the supply, and net depth inside the allowable depletion. The net crop use met (C<sub>n</sub>) should match local peak ET.",
      "It combines Eqs. 12.11, 12.12 and 12.14 with Tables 12.7 and 12.10, so use those calculators to explain individual steps."
    ],
    qa: [
      { q: "Does the book's traveler in Figure 12.22 have enough pressure?", a: "No. The losses add up to 73.7 psi, so the hydrant needs 133.6 psi and only 126 psi is available, 7.6 psi short. The gun will run at about 52 psi and throw less than the 440 ft assumed." },
      { q: "If we put a booster on and get 140 psi at the hydrant, does it pass?", a: "Yes, all checks pass. The traveler delivers 1.93 in gross per pass, 1.45 in net, and covers the field every 5.5 days, meeting 0.26 in/d." },
      { q: "The dealer offered a cheaper 4.0 inch hose instead of 4.5. Does that work?", a: "Hose loss goes from 46.9 to 83.2 psi, and the required inlet pressure jumps to 169.9 psi, 43.9 psi more than available. The savings on hose would go to fuel every season." }
    ],
    figs: ["12.20", "12.21", "12.22"]
  }
});

window.CALC_USE2 = Object.assign(window.CALC_USE2 || {}, {
  "eq-13.1": {
    more: [
      "Measure the distance from the pivot point to the sprinkler with the span lengths on the dealer printout or a tape along the pipe. The local spacing is the distance to the neighboring outlets, often 20 ft near the center and 5 to 10 ft near the end on spray packages. Gross system capacity is the pivot flow from a meter or pump test divided by irrigated acres, typically 5 to 8 gpm/ac in the Great Plains.",
      "Each sprinkler must put out flow in proportion to the area it covers, and that area grows with distance from the pivot. So the outlet at 1,300 ft needs about four times the flow of one at 300 ft with the same spacing. Compare the result with the nozzle chart in the sprinkler printout at the pressure you measured. If a span's nozzles are smaller than this, that ring of the field will be under-irrigated. Mixing up the local spacing with the average spacing is the usual error.",
      "Table 13.1 gives the flow per foot directly. Use Eq. 13.3 to find the pressure at the same outlet."
    ],
    qa: [
      { q: "The dealer printout shows a 8.7 gpm nozzle at 1,000 ft with 10 ft spacing. My pivot runs 6 gpm per acre. Is that right?", a: "Enter 1,000 ft, 10 ft and 6 gpm/ac. The calculator gives 0.87 gpm per ft and 8.66 gpm per outlet, so the printout matches." },
      { q: "We have an 800 gpm pivot on 130 acres. What should the last sprinkler at 1,300 feet put out on 8 foot spacing?", a: "Capacity is 6.15 gpm/ac. The outlet needs 1.15 gpm per ft of lateral, or 9.2 gpm. If the end nozzle is noticeably smaller, the outer ring will be dry." },
      { q: "On a field visit the first span outlets look bigger than they should be. 20 ft spacing at 300 ft, 7 gpm per acre. What should they be?", a: "Required flow is 0.30 gpm per ft, so 6.1 gpm per outlet. Larger nozzles near the center overwater the first span, which often shows as ponding near the pivot point." }
    ],
    figs: ["13.4"]
  },
  "eq-13.2": {
    more: [
      "The main lateral radius is the distance from the pivot to the last sprinkler on the pipe, from the dealer printout or the span list. The radius gain from the end gun is how far beyond the lateral the gun throws, usually 50 to 150 ft. A gun that throws 220 ft radius but is mounted 30 ft in from the end with overlap might give only 100 ft of useful gain. The equation assumes a square field with the gun on in all four corners.",
      "A standard quarter section pivot of 1,300 ft without a gun covers about 122 ac. The end gun adds area only in the corners, so the gain in acres is much smaller than the gain in radius suggests. The gun also needs flow (often 50 to 150 gpm) and pressure, usually from a booster pump. Maximum area occurs when the gain is 21% of the lateral length, but such a gun is rarely practical. The operating angle tells you how many degrees in each corner the gun runs.",
      "Use the area with the pivot flow to get gross capacity for Eq. 13.1 and 13.4, and Table 13.2 to cross check."
    ],
    qa: [
      { q: "Would an end gun with 100 feet of extra throw be worth it on my 1,300 foot pivot?", a: "Area goes from 121.9 to 131.9 ac, a 10 ac gain. The gun runs for about 46° in each corner. Weigh 10 ac of extra crop against the cost of the gun, booster pump and flow." },
      { q: "Someone is buying a quarter with a 1,250 foot pivot and no end gun. How many acres are actually irrigated?", a: "Enter 1,250 ft and 0 ft. The irrigated area is 112.7 ac, so about 47 ac of the 160 are corners." },
      { q: "What's the most a 1,300 foot pivot can cover with an end gun?", a: "The best gain is 21% of 1,300 ft, or 273 ft, which gives 135.4 ac. That is only 3.5 ac more than a 100 ft gun, so a large gun rarely pays." }
    ],
    figs: ["13.5", "13.2"]
  },
  "fp-13.6": {
    more: [
      "Enter the location as a fraction of the lateral length: a point at 650 ft on a 1,300 ft pivot is 0.5. Use it when you have a pressure gauge at the pivot and want the friction loss to some point along the pipe. The shape comes from the flow in the pipe dropping as more sprinklers take water off.",
      "The factor is the share of the total lateral friction loss that has happened by that point. About 78% of the loss occurs in the first half of the pivot, and the last quarter adds less than 4%. That is why a pressure gauge at the first tower tells you a lot and one at the end tells you little more than the end pressure. The factor is 1.0 at the end.",
      "Use the factor in Eq. 13.3 to get the pressure at any point."
    ],
    qa: [
      { q: "How much of the friction loss happens by the middle of my pivot?", a: "At 0.5 the factor is 0.78, so 78% of the total loss has already occurred. With 9.6 psi total loss, about 7.5 psi is gone by the middle." },
      { q: "What about at the first quarter?", a: "At 0.25 the factor is 0.44. On the same pivot that is about 4.2 psi lost." },
      { q: "I put a gauge at three quarters of the way out. How much more loss is beyond it?", a: "At 0.75 the factor is 0.96, so only 4% of the loss is past that point. The gauge reading is close to the end pressure except for elevation." }
    ],
    figs: ["13.6"]
  },
  "eq-13.3": {
    more: [
      "Read the inlet pressure on the gauge at the pivot point. Get the lateral loss per 1,000 ft from Table 13.3 or 13.4 for the pipe size and flow. Elevation gain to the point comes from a topo map, a GPS survey or the pivot GPS, positive uphill. Each foot of rise costs 0.433 psi.",
      "The end pressure needs to stay above the pressure regulator rating plus about 5 psi, or the regulators stop controlling and nozzles under-deliver. Low pressure on the high side of the field shows up as a dry arc each time the pivot passes. If pressure varies with elevation over 20%, regulators or a VFD are needed. A common mistake is using the loss for the total length when the table is per 1,000 ft.",
      "Use the result to check nozzle flow against Eq. 13.1 and the dealer printout."
    ],
    qa: [
      { q: "40 psi at the pivot, 6 5/8 inch pipe, 800 gpm, 1,300 ft. What's at the end on flat ground?", a: "Table loss is 7.39 psi per 1,000 ft. The friction to the end is 9.6 psi, so the end gets about 30.4 psi." },
      { q: "What is the pressure in the middle, which sits 5 feet higher than the pivot?", a: "At 650 ft the factor is 0.78 and friction is 7.5 psi. Elevation costs 2.2 psi, so the pressure is about 30.3 psi." },
      { q: "The far corner is 15 feet higher. Will my 20 psi regulators work?", a: "With 40 psi in, the end pressure is 23.9 psi, only 3.9 psi over the regulator rating. That is marginal. Raise the inlet pressure a few psi or use 15 psi regulators." }
    ],
    figs: ["13.6", "13.1"]
  },
  "eq-13.4-13.5": {
    more: [
      "Gross capacity is flow divided by irrigated acres. Distance is to the point being checked, usually the end where the rate is highest. Diameter of coverage is from the sprinkler maker's chart at the pressure and height used, typically 25 to 45 ft for spray heads and 60 to 90 ft for rotators. Gross depth is the depth set on the timer.",
      "Peak rates at the end of a pivot are 2 to 6 in/hr, far above the intake rate of most soils. What saves you is the short time of wetting and surface storage. If the time of wetting is long and peak rate high, expect runoff. Wider coverage lowers peak rate and raises time of wetting. Using the inside of the pivot gives a lower rate that hides the problem at the end.",
      "Use the peak rate in runoff-13 and Figure 13.13."
    ],
    qa: [
      { q: "My 800 gpm pivot on 130 acres has 40 ft spray heads. What's the peak rate at the end?", a: "At 1,300 ft the peak is 3.54 in/hr. A 0.9 in pass wets each spot for about 19 minutes." },
      { q: "If I switch to rotators with 60 ft coverage, how much lower is it?", a: "Peak drops to 2.36 in/hr and wetting lasts 29 minutes. Lower rate gives the soil more time to take in water." },
      { q: "Why is there no runoff near the middle of the pivot?", a: "At 650 ft the peak is 1.77 in/hr, half the end value, and wetting lasts 39 minutes. Runoff problems almost always start at the outer spans." }
    ],
    figs: ["13.7", "13.10", "13.11", "13.12"]
  },
  "eq-13.6": {
    more: [
      "System flow comes from the flow meter or the pump test. The diameter of coverage is from the sprinkler maker's chart for the nozzle, pressure and drop height, typically 25 to 45 ft for fixed spray plates and 50 to 80 ft for rotating plates. Lateral length is the full width the linear covers, from the dealer printout or a tape along the machine.",
      "A linear move puts the same flow on every foot of its length, so the peak rate is the same from one end to the other. That makes it much lower than the outer end of a pivot with the same flow and length, usually 1 to 3 in/hr. Compare it with the soil and storage in Figure 13.13 to get the largest depth per pass without runoff. Do not use this equation for a pivot. The pivot rate grows with distance from the center (Eq. 13.4).",
      "Run runoff-13 with the linear move option to get the surface storage and intake family for the same check."
    ],
    qa: [
      { q: "My linear is 800 gpm, 1,300 ft long, with 40 ft spray heads. How hard is it hitting the ground?", a: "Enter 800 gpm, 40 ft and 1,300 ft. The peak rate is 1.88 in/hr, which matches Example 13.2. A pivot with the same flow and length peaks at 3.54 in/hr at the end, so the linear can apply more per pass, 1.6 in versus 0.9 in on the book's soil." },
      { q: "We're upgrading the linear to 1,000 gpm. If I go to 50 ft heads at the same time, does the rate change?", a: "Enter 1,000 gpm, 50 ft and 1,300 ft. The peak stays at 1.88 in/hr because the wider coverage offsets the extra flow. Without the new heads it would rise to 2.36 in/hr." },
      { q: "A 600 gpm, 1,000 ft linear with 35 ft heads is running off on a silt loam. Why?", a: "The peak rate is 2.10 in/hr. On a silt loam with 0.1 to 0.3 in of storage that is high for a 1 in pass. Go to wider coverage heads or cut the depth per pass." }
    ],
    figs: ["13.3", "13.7"]
  },
  "eq-13.7": {
    more: [
      "Measure the distance from the pivot to the end tower (not the last sprinkler) from the span list. Gross capacity is flow over irrigated acres. Maximum end tower speed is on the dealer specification, usually 6 to 12 ft/min depending on tire size and gearbox, or time the end tower over 100 ft at the 100% setting. Gross depth is what the grower wants per pass, often 0.75 to 1.25 in.",
      "The percent timer runs the end tower that share of each minute. A 20% setting means the end tower moves 12 seconds out of each minute. At 100% the pivot puts on its smallest depth. Higher depth means slower speed and lower setting. Low settings near 10% to 15% give jerky movement and can spread water unevenly. Using the distance to the last sprinkler or a wrong maximum speed will skew all the depths on the panel.",
      "Use Eq. 13.7 inverted to check what a setting already on the panel puts on, and runoff-13 to see if the depth runs off."
    ],
    qa: [
      { q: "I want an inch and three tenths on this pass. Pivot is 7 gpm per acre, 1,280 ft to the end tower, 8 ft/min max. What do I set?", a: "Set the timer at about 20% (19.9%). One revolution takes about 84 hours. This is the book's example." },
      { q: "Same pivot, but I want to run fast to put on only 0.75 inch. What setting?", a: "Set 34.5%, about 49 hours per revolution. The smallest depth possible at 100% is 0.26 in." },
      { q: "A different pivot, 1,250 ft to the end tower, 5.5 gpm per acre, max speed 9.5 ft/min. Setting for 1 inch?", a: "Set 16.7%, about 82 hours per revolution. The minimum depth at 100% is 0.17 in." }
    ],
    figs: ["13.1", "13.15"]
  },
  "eq-13.7-inv": {
    more: [
      "Use the same inputs as the timer calculator: distance to the end tower, gross capacity and maximum end tower speed. Read the current percent setting off the panel or the remote app. This is the check to make on a farm visit when the grower knows the setting but not the depth.",
      "The result is the gross depth per revolution and the time to go around. Multiply by efficiency (often 0.85 for spray packages) for net depth. If the depth is above about 1.25 in, check for runoff. If it is below 0.5 in, much of it may evaporate from leaves and the surface. Hours per revolution tells you whether the pivot can get back before the crop runs out of water.",
      "Compare depth with the allowable depletion and runoff limits (runoff-13)."
    ],
    qa: [
      { q: "My panel says 50%. How much am I putting on?", a: "With 1,280 ft, 7 gpm/ac and 8 ft/min, 50% puts on 0.52 in gross per revolution in 33.5 hours. The end tower averages 4 ft/min." },
      { q: "What's the least I can put on with this pivot?", a: "At 100% the depth is 0.26 in and a revolution takes 16.8 hours. That is the fastest pass, useful for activating herbicide." },
      { q: "A neighbor's pivot is 6 gpm per acre, set at 30%. How much water?", a: "0.74 in gross in about 56 hours. At 0.30 in/d of crop use, the crop uses about 0.70 in during one revolution, so this setting just keeps up." }
    ],
    figs: ["13.1", "13.15"]
  },
  "runoff-13": {
    more: [
      "Get the flow from the meter, acres from the area calculator, length to the end, and wetted diameter from the sprinkler printout. Field slope comes from a topo map or the Web Soil Survey slope class. Intake family comes from Table 13.5 or the NRCS irrigation guide for the soil series. Planned depth is what the timer is set to.",
      "The calculator gives the peak rate and surface storage. You then read Figure 13.13 for the soil family and storage at that peak rate to find the largest depth without runoff. If the planned depth is above that, shorten the pass, add storage (reservoir tillage or residue), or go to wider coverage sprinklers. The book gives 0.70 to 1.25 in as the normal range for depth per pass.",
      "Table 13.8 is a quicker check for 1,300 ft pivots by soil texture."
    ],
    qa: [
      { q: "800 gpm pivot, 130 acres, 40 ft sprays, 2% slope on Holder silt loam. How much can I put on without runoff?", a: "The peak rate is 3.54 in/hr and storage is 0.3 in (family 0.5). Figure 13.13 gives about 0.9 in per pass, as in Example 13.1. That is within the normal range." },
      { q: "If the same flow went through a linear, how much more could I put on?", a: "The peak drops to 1.88 in/hr. Figure 13.13 then allows about 1.6 in per pass (Example 13.2)." },
      { q: "A field on Butler silt loam has 4% slopes. Planning a 1 inch pass at 800 gpm on 130 acres. Will it run off?", a: "Storage drops to 0.1 in and the soil is in the 0.3 family, with a peak of 3.54 in/hr. Figure 13.13 will show a much smaller depth than 1 in. Plan lighter passes or add basin tillage." }
    ],
    figs: ["13.13", "13.8", "13.9"]
  },
  "tab-13.1": {
    more: [
      "Enter the distance from the pivot to the outlet, from the span lengths on the dealer printout, and the gross system capacity (metered flow divided by irrigated acres). The table covers 100 to 2,600 ft and 4 to 10 gpm/ac and interpolates between rows. Multiply the result by the spacing at that outlet to get the nozzle flow the printout should show. Nozzle spacing changes along the pivot, so measure it at the span you are checking.",
      "Flow per foot of lateral grows in a straight line from the center. If a printout or a replaced nozzle is out of step with the table, that ring of the field will show as a wet or dry circle in the crop. Mixed up nozzles after a repair are a common cause. Remember the table assumes uniform application, so end guns and corner arms need their own check.",
      "Eq. 13.1 gives the same answer for any distance and spacing."
    ],
    qa: [
      { q: "My pivot runs 7 gpm an acre. What should the nozzle at 1,300 feet put out on 8 foot spacing?", a: "The table gives 1.31 gpm per ft at 1,300 ft. Times 8 ft, the nozzle should deliver about 10.5 gpm." },
      { q: "There's a dry ring about 500 feet out. My pivot is 5 gpm per acre with 20 foot spacing there. What should the nozzles be?", a: "The table gives 0.36 gpm per ft, so 7.2 gpm per nozzle. If the nozzles on that span are sized for less, someone likely swapped them during a repair." },
      { q: "On a half-mile pivot at 6 gpm per acre, what flow per foot near the end at 2,000 feet?", a: "1.73 gpm per ft. With 5 ft spacing that is about 8.7 gpm per outlet, which is why long pivots use close spacing at the end." }
    ],
    figs: ["13.4"]
  },
  "tab-13.2": {
    more: [
      "Enter the radius to the last sprinkler on the main lateral and the end gun gain, both from the dealer printout or measured in the field. The table covers 800 to 2,600 ft pivots and gains of 0 to 200 ft and interpolates between rows. The values assume a square field with the gun running in all four corners.",
      "Use it to check irrigated acres for a lease, a water right, crop insurance or a cost-share form. The maximum column is the area when the gain is 21% of the lateral length. Most fields fall well short of it because the corners have roads, trees or neighbors. The table and Eq. 13.2 agree within about 1 ac.",
      "Divide pivot flow by this area to get gross capacity for Eq. 13.1, 13.4 and 13.7."
    ],
    qa: [
      { q: "How many irrigated acres do I report for a 1,300 foot pivot with no gun?", a: "The table gives 122 ac. The best possible end gun would raise it to 135 ac." },
      { q: "A 1,250 foot pivot has an end gun that adds about 100 feet. Acres?", a: "Interpolating between the 1,200 and 1,300 ft rows gives about 122.5 ac. The most possible at this length is 125 ac." },
      { q: "A half-mile pivot is 2,600 feet with a 150 foot gun. What's the irrigated area for the water right filing?", a: "521 ac, against a maximum of 541 ac. Use gross capacity based on 521 ac when checking the flow." }
    ],
    figs: ["13.5"]
  },
  "tab-13.3": {
    more: [
      "Pick the pipe size from the span list (6, 6 5/8, 8 or 10 in outside diameter) and enter the flow into the pivot from the meter. Choose the end gun option if one is installed. Enter the lateral length to get the total loss. The table assumes galvanized steel with a Hazen-Williams C of 140 and a pivot outlet factor of 0.54.",
      "Most pivots lose 5 to 15 psi in the lateral. Higher losses mean a bigger pump bill every hour the pivot runs. The calculator also gives a Hazen-Williams check so you can see that the interpolated table value is reasonable. Do not forget the 1.037 factor with an end gun.",
      "Use the result in Eq. 13.3 for pressure at a point."
    ],
    qa: [
      { q: "6 5/8 inch pivot, 800 gpm, 1,300 feet, no gun. How much pressure do I lose?", a: "7.39 psi per 1,000 ft, or 9.6 psi total. That matches the Hazen-Williams check of 7.38 psi per 1,000 ft." },
      { q: "An older 6 inch pivot carries 700 gpm with an end gun, 1,300 feet. Loss?", a: "9.51 psi per 1,000 ft times 1.037 gives 9.86 psi per 1,000 ft, or 12.8 psi total. Every extra psi adds to the pumping cost." },
      { q: "We're quoting a 1,600 foot pivot in 8 inch pipe at 1,100 gpm. Loss?", a: "5.18 psi per 1,000 ft, about 8.3 psi total. That is a reasonable loss for the size." }
    ],
    figs: ["13.6"]
  },
  "tab-13.4": {
    more: [
      "Pick the pipe combination (8 and 6 in for 900 to 1,800 gpm or 10 and 8 in for 1,900 to 3,000 gpm), the flow from the meter, and the fraction of the lateral that is the larger pipe, from the span list. Choose the end gun option if one is installed. The result is psi per 1,000 ft.",
      "Pivots use bigger pipe near the center where flow is highest and smaller pipe at the end. The table shows that the first half of the pivot in the larger pipe saves most of the loss. Going past 70% larger pipe saves little. Multiply by the lateral length over 1,000 for total loss.",
      "Use the result in Eq. 13.3 for pressure along the pivot."
    ],
    qa: [
      { q: "Our 1,200 gpm pivot is half 8 inch and half 6 inch pipe, 1,300 feet long. What does it lose?", a: "The table gives 8.1 psi per 1,000 ft. Over 1,300 ft that is about 10.5 psi, which goes into Eq. 13.3 for the end pressure." },
      { q: "The dealer quote has 70% 8 inch pipe, 1,500 gpm and an end gun. What loss should I expect?", a: "10.37 psi per 1,000 ft (10.0 times 1.037). On 1,300 ft that is about 13.5 psi." },
      { q: "We are looking at a 2,400 gpm half-mile pivot, half 10 inch and half 8 inch. Is the pipe big enough?", a: "10.3 psi per 1,000 ft. On a 2,600 ft half-mile pivot that is about 27 psi, so look at more 10 inch pipe." }
    ],
    figs: ["13.6"]
  },
  "tab-13.5-13.6": {
    more: [
      "Find the soil series in the Web Soil Survey, then match it to an intake family in Table 13.5 or the state NRCS irrigation guide. Field slope comes from a topo map, the soil map unit or a level survey of the steepest part under the end spans. Use the slope where runoff starts, not the field average.",
      "The family number is roughly the intake rate in in/hr after several hours of wetting. Surface storage is the depth that can pond in small depressions before water moves: 0.5 in on flat ground, 0.3 in at 1% to 3%, 0.1 in at 3% to 5%, and 0 above 5%. Tillage or residue can add storage. Both values go into Figure 13.13.",
      "Use them with peak rate from Eq. 13.4 in runoff-13."
    ],
    qa: [
      { q: "My field is Hord fine sandy loam, nearly flat. What do I use?", a: "Hord is in the 1.0 family. At 0.5% slope storage is 0.5 in. That is a forgiving soil for a pivot." },
      { q: "The new pivot sits on Alice loamy fine sand with about 2% slope. Do I need to worry about runoff?", a: "Alice is in the 2.0 family and 2% slope gives 0.3 in of storage. Runoff is rarely a problem on these soils, so the depth per pass will be set by the allowable depletion instead." },
      { q: "We're on a Crete silty clay loam with a 4% slope. How risky is that?", a: "Family 0.1 and only 0.1 in storage. That is the worst case for runoff. Expect small depths per pass and consider reservoir tillage." }
    ],
    figs: ["13.9", "13.13"]
  },
  "tab-13.8": {
    more: [
      "Pick the nearest printed system capacity (4 to 10 gpm/ac), depth per pass (0.8, 1.0 or 1.2 in) and surface storage (0.1, 0.3 or 0.5 in) for the field. Pick the soil texture from the Web Soil Survey. Enter the wetted diameter of the sprinklers at the end from the sprinkler maker's chart.",
      "The table gives the smallest wetted diameter that avoids runoff on a 1,300 ft pivot. Spray heads typically cover 25 to 45 ft and rotators 50 to 80 ft. Boom backs widen the coverage (Figure 13.14). If the minimum is over 150 ft, no sprinkler package will prevent runoff at that depth, so cut the depth per pass or add storage.",
      "Use runoff-13 and Figure 13.13 for other lengths."
    ],
    qa: [
      { q: "6 gpm per acre pivot on loam, 1 inch passes, 0.3 inch storage, 40 ft sprays. Runoff?", a: "The minimum is 42 ft, so 40 ft sprays are just too small. Dropping to 0.8 in passes cuts the minimum to 28 ft and the sprays pass." },
      { q: "8 gpm per acre on silt loam, 1 inch passes, 0.1 inch storage. I have 60 ft rotators.", a: "The minimum is 118 ft. 60 ft rotators are far too small. Cut depth or add basin tillage." },
      { q: "We have a 5 gpm per acre pivot on flat sandy loam putting on 0.8 inch with 30 ft heads. Any runoff concern?", a: "With 0.5 in of storage the table gives a minimum under 10 ft. Any common sprinkler package works, so choose on drift and evaporation instead." }
    ],
    figs: ["13.11", "13.14"]
  },
  "pivot-eval-13": {
    more: [
      "Gather the pivot flow from a meter, the lateral radius and end gun gain from the printout, and the pipe inside diameter from the span list. Read inlet pressure on the pivot gauge, and get the elevation gain to the high end from a GPS survey or topo map. Get the sprinkler spacing and wetted diameter at the end, the end tower speed and distance from the dealer spec, and the depth the grower wants per pass.",
      "The output is a one-page check. Gross capacity should meet the local design value (often 6 to 7 gpm/ac in the Plains). End pressure should be at least the regulator rating plus 5 psi. Peak rate and time of wetting go to Figure 13.13. The timer setting and hours per revolution tell the grower how to run it.",
      "It combines Eqs. 13.1 to 13.7 and Table 13.3."
    ],
    qa: [
      { q: "Can you check my pivot? 800 gpm, 1,300 ft of 6 5/8 inch pipe, 35 psi at the pivot, and the far side is 10 ft higher. I want 1 inch passes.", a: "The pivot covers 121.9 ac at 6.56 gpm/ac and the end sprinkler should deliver 12.3 gpm. End pressure is 21.1 psi on the high side, peak rate at the end is 3.78 in/hr with 20 minutes of wetting. For 1 in set the timer at 24.3%, about 69 hours per revolution." },
      { q: "If we add an end gun that gains 100 feet and bump the flow to 900 gpm, what changes?", a: "Area rises to 131.9 ac and capacity to 6.82 gpm/ac. Lateral loss rises to 9.5 psi per 1,000 ft, so the high-side end pressure drops to 18.3 psi, too low for 15 psi regulators plus margin. Plan on a booster for the gun and a little more inlet pressure." },
      { q: "An older pivot has 6 inch pipe and runs 40 psi at the inlet. Same 800 gpm and 10 ft rise. Is pressure OK at the end?", a: "Loss is 12.2 psi per 1,000 ft and the end pressure is 19.9 psi. That is right at the 15 psi regulator rating plus 5 psi, so the high corner is borderline. A few more psi at the inlet would give some margin." }
    ],
    figs: ["13.6", "13.13", "13.12"]
  }
});

window.CALC_USE2 = Object.assign(window.CALC_USE2 || {}, {
  "eq-14.1": {
    more: [
      "The outlet factor F comes from Table 8.3 for the number of outlets on the lateral, about 0.35 for 100 or more outlets. Lateral length is the run from the manifold to the end plug, plus an allowance for the barbs of inserted emitters (about 20 to 30 ft per 200 ft in the book's examples). The friction loss without outlets comes from Table 14.1 at the lateral inlet flow, which is the number of emitters times their flow.",
      "The result is the pressure lost from the inlet to the end of a level lateral. The book's design check is that this stays under 20% of the lateral design pressure, so 3 psi on a 15 psi lateral. Laterals running downhill gain pressure and can be longer. Uphill runs lose more and need to be shorter. Forgetting to convert emitter flow from gph to gpm before reading Table 14.1 is the most common mistake.",
      "The lateral-design calculator does all of these steps at once."
    ],
    qa: [
      { q: "My half inch drip line runs 200 feet with 100 emitters at 2 gph. How much pressure do I lose?", a: "With F 0.35, 230 ft including barbs, and 4.7 psi/100 ft from Table 14.1, the loss is 3.78 psi. That is over the 3 psi limit for a 15 psi lateral, so go to 0.75 in tubing as in Example 14.3." },
      { q: "If I switch that line to 3/4 inch, what's the loss?", a: "Use 220 ft and 1.2 psi/100 ft. The loss is 0.92 psi, well under 3 psi." },
      { q: "We want microsprayers at 0.5 gpm on 8 foot spacing on a 1 inch line, 200 feet. Will it work?", a: "With F 0.365, 205 ft and 4.0 psi/100 ft, the loss is 2.99 psi. That passes the 3 psi limit, but just barely, as the book notes." }
    ],
    figs: ["14.5", "14.8"]
  },
  "lateral-design": {
    more: [
      "Measure the lateral length from manifold to end. Emitter spacing and flow are on the tubing label or spec sheet: drip tape usually has 8 to 18 in spacing at 0.13 to 0.5 gph, and inline drip tubing 12 to 24 in at 0.4 to 1 gph. Add extra length for inserted barbs (book: about 30 ft for 0.5 in tube and 20 ft for 0.75 in per 200 ft). Design pressure is the regulator setting, typically 8 to 15 psi for tape and 15 to 25 psi for drip tubing.",
      "The output is the lateral flow and friction loss, and a check against 20% of the design pressure. A lateral that fails will have weaker emitters at the end, which shows up as a yield or size gradient down the row. The fixes are a larger tube, a shorter run, or feeding the lateral from the middle. On sloping ground add the elevation change to the check.",
      "Use the lateral flow to size manifolds and to set zone flow for filters and flushing times (Chapter 15)."
    ],
    qa: [
      { q: "200 ft lateral, emitters 2 ft apart at 2 gph, 15 psi design. Is 3/4 inch enough?", a: "With 20 ft extra for barbs, the flow is 3.3 gpm and the loss is 0.93 psi. That is well under the 3 psi limit." },
      { q: "Could I save money with 1/2 inch tube on that same lateral?", a: "With 30 ft of barb allowance the loss is 3.76 psi, over the 3 psi limit. The far emitters would deliver noticeably less, so stay with 3/4 inch." },
      { q: "A grower wants to run 600 foot laterals with emitters 1 foot apart at 0.5 gph and 12 psi. What size?", a: "Flow is 5 gpm. In 1 inch tube the loss is 1.6 psi, under the 2.4 psi limit. In 3/4 inch it would be 5.2 psi, too much." }
    ],
    figs: ["14.5", "14.8"]
  },
  "tab-14.1": {
    more: [
      "Enter the flow in gpm and the nominal PE size. For a lateral the flow is the inlet flow, the sum of all the emitters on it. Convert gph to gpm by dividing by 60. The table covers 0.5 to 1.5 in PE and is based on Darcy-Weisbach with smooth PE pipe.",
      "The result is psi per 100 ft for a pipe with no outlets. For a lateral with emitters, multiply by length and by the outlet factor (Eq. 14.1). If the flow is off the table, the size is not suited to that flow.",
      "Use the value in Eq. 14.1."
    ],
    qa: [
      { q: "What's the loss in 1/2 inch PE at 3.3 gpm?", a: "4.58 psi per 100 ft interpolated. The book rounds to 4.7 in Example 14.3. Either way it is high, so look at the 3/4 inch size." },
      { q: "We need to carry 12.5 gpm in a 1 inch line. Loss?", a: "4.05 psi per 100 ft. That matches the 4.0 the book uses in Example 14.4." },
      { q: "Is 3/4 inch OK for 7 gpm?", a: "It loses 4.45 psi per 100 ft. On a 200 ft run with F 0.35 that is about 3.1 psi, so it is borderline for a 15 psi lateral." }
    ],
    figs: ["14.5"]
  },
  "eq-14.2": {
    more: [
      "The flow is the peak zone or system flow through the filter, from the design or a meter. The maximum flow per unit open area is 200 gpm/ft² in the book's example. The fraction of open area depends on the screen mesh and wire and is on the maker's spec sheet. The book gives 58% for a stainless screen with 0.003 in openings.",
      "The result is the total screen area needed. If the installed filter has less area, it will plug quickly and the pressure drop will climb. Size for the highest flow the system will see, including flushing. A screen filter alone is fine on clean municipal or well water but not on surface water with algae or sand.",
      "Check water quality with Table 14.2 before choosing a screen."
    ],
    qa: [
      { q: "A golf course needs to filter 300 gpm with a 0.003 inch stainless screen. How big?", a: "With 200 gpm/ft² and 58% open area, the screen needs 2.6 ft², as in Example 14.5." },
      { q: "Our small vegetable farm runs 150 gpm through the same screen. How much area?", a: "1.29 ft². A filter of that size or larger will hold up between cleanings." },
      { q: "We want to expand to 500 gpm. Is our 3 ft² filter enough?", a: "The need is 4.31 ft². The current filter is too small, so add a second unit in parallel." }
    ],
    figs: ["14.6", "14.10"]
  },
  "eq-14.3": {
    more: [
      "K and x come from the emitter maker's catalog, from Table 14.4 for x, or from your own two-pressure test with Eq. 14.4. The exponent is about 0.5 for orifice emitters with turbulent flow, 0.7 to 1.0 for long path and porous designs, and 0 to 0.4 for pressure compensating emitters. Read pressure with a gauge on a Schrader valve or a pitot adapter at the lateral and convert psi to feet of head by multiplying by 2.31.",
      "The result is emitter flow in gph at that head. Use it to see how much flow drops where the pressure is lowest, at the uphill end or the far end of a long lateral. With x = 0.5, a 20% pressure drop cuts flow about 10%. With x near 1.0, flow drops almost as much as the pressure. Mixing psi with K values fitted to feet of head is the most common error, and it gives flows that are far off.",
      "Use emitter-dq to compare the two ends of a field, and design-du to turn the low flow into a design uniformity."
    ],
    qa: [
      { q: "The vortex emitters in my orchard have K 0.24 and x 0.42. The header runs 15 psi. What do they put out?", a: "15 psi is 34.5 ft of head. The calculator gives 1.06 gph, as in Example 14.7." },
      { q: "At the far end of the block I only read 10 psi. How much less water are those trees getting?", a: "10 psi is 23.1 ft, and the flow drops to 0.90 gph. That is about 15% less than at the header, which shows up in a long set." },
      { q: "We're designing with spiral long path emitters, K 0.0564 and x 0.75, at 20 psi. What flow, and what if the low spot is 10 ft of head lower?", a: "At 46.2 ft the flow is 1.0 gph. At 36.2 ft it drops to 0.83 gph, a 17% drop. That low flow is the q<sub>m</sub> used in Example 14.9." }
    ],
    figs: ["14.11"]
  },
  "emitter-dq": {
    more: [
      "Enter K and x for the emitter, the pressure head at the header end (psi times 2.31), the elevation change to the far end, and friction loss to the far end. Elevation change is the slope in percent times the length, negative going uphill. Friction comes from Eq. 14.1 converted to feet of head.",
      "The output is the flow at each end and the difference as a percent of the header flow. A common design target in micro irrigation practice is to keep emitter flow variation under about 10%. Running laterals downhill gains pressure that can offset friction. If the far end gets more flow than the header, the laterals are too short for the slope or the header pressure is set too high.",
      "Use design-du to get the design uniformity from these flows."
    ],
    qa: [
      { q: "My 1,000 foot field slopes 1% uphill from the header and I run 15 psi. How different are the emitters at each end?", a: "With K 0.24, x 0.42, 34.5 ft at the header and minus 10 ft of elevation, the header gets 1.06 gph and the far end 0.92 gph. That is a 0.14 gph or 13% difference, as in Example 14.7." },
      { q: "If I put the header at the top so the laterals run downhill, what happens?", a: "With plus 10 ft, the far end gets 44.5 ft and 1.18 gph, 11% more than the header. Downhill laterals work best when friction loss roughly matches the elevation gain." },
      { q: "Would a compensating emitter with x 0.2 fix the uphill problem?", a: "With K 0.493 so it gives 1.0 gph at the header, the far end gets 0.93 gph, a 6.6% difference. The book treats a fully compensating emitter as 0 difference (Example 14.8), but real ones with x of 0.2 still change a little." }
    ],
    figs: ["14.11"]
  },
  "eq-14.4": {
    more: [
      "Test several new emitters on a short lateral at two pressures, such as 10 and 20 psi, with a gauge at the emitters. Catch each emitter for a fixed time (3 to 5 minutes) in a graduated cylinder and convert to gph. Average the catches at each pressure. Convert psi to feet with 2.31.",
      "The exponent x tells you how sensitive the emitter is to pressure. Below about 0.2 the emitter is pressure compensating, 0.5 is a typical orifice, and 0.7 to 1.0 is long path or porous tubing. K is the flow at 1 ft of head and is used with Eq. 14.3. Pressures closer than about 5 psi apart give an unreliable exponent.",
      "Use x and K in eq-14.3, emitter-dq and design-du."
    ],
    qa: [
      { q: "My emitter gave 0.75 gph at 15 ft of head and 1.0 at 30 ft. What kind is it?", a: "The exponent is 0.415 and K is 0.244. That behaves like a vortex orifice emitter." },
      { q: "A dealer says his emitter is pressure compensating. At 10 psi it gave 0.92 gph and 20 psi 1.0. Is it?", a: "Enter 0.92 at 23.1 ft and 1.0 at 46.2 ft. The exponent is 0.12, so yes, it is mostly compensating." },
      { q: "A test gave 1.6 gph at 10 psi and 2.4 gph at 20 psi. Is that what the catalog says for a 2 gph emitter?", a: "The exponent is 0.585, so it is not compensating, and 2.0 gph happens around 15 psi. Make sure the system runs near that pressure." }
    ],
    figs: ["14.11"]
  },
  "eq-14.5": {
    more: [
      "Test new emitters straight from the box, at least 50 of them per the book, at one constant pressure on a test manifold. Catch each for the same time in a graduated cylinder and record the volumes or flows in any one unit. Choose drip and spray emitters or line-source tubing, since the rating limits differ. Some makers print v on the spec sheet, and this is how you check it.",
      "The coefficient of manufacturing variation is the standard deviation of the flows over the mean. About 95% of emitters fall within the mean plus or minus 2v. A v under 0.05 is excellent for drip emitters and under 0.1 for line-source tubing (Table 14.3). Testing used emitters mixes plugging and wear into v, which is a different problem. Ten emitters are too few for a rating, so treat a small sample as a screen only.",
      "Use v in Eq. 14.7 and design-du for design uniformity."
    ],
    qa: [
      { q: "I caught 10 new drippers: 0.98, 1.03, 1.05, 0.95, 1.00, 1.08, 0.93, 1.01, 0.99, 1.02 gph. Are they any good?", a: "The mean is 1.00 gph and v is 0.045, rated excellent. About 95% would fall between 0.91 and 1.09 gph. Test 50 to confirm." },
      { q: "A cheaper emitter tested 1.10, 0.92, 1.05, 0.88, 1.15, 0.97, 1.02, 0.85, 1.08, 0.98. Worth the savings?", a: "Mean 1.00 gph and v 0.098, rated marginal. 95% fall between 0.80 and 1.20 gph, so the design uniformity drops several points. The savings are rarely worth it on a high-value crop." },
      { q: "Drip tape catches were 0.21 to 0.27 gph, ten readings averaging 0.234. Is that acceptable for tape?", a: "v is 0.095. For line-source tubing that rates excellent (under 0.1). The same v on a drip emitter would only be marginal." }
    ],
    figs: ["14.8"]
  },
  "tab-14.3": {
    more: [
      "Enter v from the emitter maker's spec sheet or from your own test in Eq. 14.5, and choose drip and spray emitters or line-source tubing. Line-source tubing (tape, porous pipe) has looser limits because each outlet is close to the next and they share water in the soil. This is a quick screen when comparing products for a bid or cost-share.",
      "Excellent and average products are fine for most uses. Marginal emitters reduce design uniformity and need either more emitters per plant or tighter pressure control. Poor and unacceptable products should be avoided for anything other than short-season crops. The rating says nothing about plugging resistance, which depends on the flow path and filtration.",
      "Use v with Eq. 14.7 to see the effect on uniformity."
    ],
    qa: [
      { q: "The spec sheet says v is 0.06 for this drip emitter. How does it rate?", a: "For drip emitters, 0.05 to 0.07 is average. That is acceptable for most field and orchard work." },
      { q: "A drip tape lists v 0.12. Good or bad?", a: "For line-source tubing, 0.1 to 0.2 rates average. It is usable, but a v under 0.1 would rate excellent." },
      { q: "Two emitters on a bid list v 0.04 and 0.09. Does it matter which one?", a: "0.04 is excellent and 0.09 marginal. With 2 emitters per plant, the 0.09 one costs about 4 points of design uniformity, so the cheaper one may cost more in water." }
    ],
    figs: ["14.8"]
  },
  "eq-14.6": {
    more: [
      "Catch the flow from emitters spread across the zone: near and far from the inlet on several laterals, high and low spots, and the end of the longest lateral. Use a stopwatch and graduated cylinder, 1 to 3 minutes per emitter. At least 16 readings is common practice, and more give a better estimate. Enter all flows in one unit.",
      "Emission uniformity is the low-quarter average flow over the average flow. New systems should be 90% or more, 80% to 90% is fair, and under 80% means something needs fixing: plugging, leaks or pressure problems. Low readings clustered at the end of laterals point to pressure. Scattered low readings point to plugging. Re-test after acid or chlorine treatments to see if they worked.",
      "Compare with the design uniformity from Eq. 14.7."
    ],
    qa: [
      { q: "I caught 12 emitters in a block: 1.02, 0.98, 0.95, 1.05, 0.88, 0.92, 1.00, 0.97, 1.03, 0.90, 0.99, 1.01. How's the uniformity?", a: "Average 0.975 gph, low-quarter average 0.90 gph, and DU 92%. That is very good, so no changes are needed beyond routine flushing." },
      { q: "An older block gave 0.95, 0.62, 1.01, 0.88, 0.40, 0.97, 0.99, 0.71, 1.02, 0.93, 0.55, 0.96. What's going on?", a: "Average 0.83, low quarter 0.52, DU 63%. The low readings are scattered, which points to plugging. Treat the water and flush, then re-test." },
      { q: "New drip tape gave 12 readings between 0.23 and 0.26 gph. Is the install good?", a: "Average 0.248 gph, low quarter 0.237 gph, DU 95%. That is what a new, well installed tape system should show. Keep the numbers as a baseline for next season." }
    ],
    figs: ["14.5"]
  },
  "eq-14.7": {
    more: [
      "The coefficient of manufacturing variation comes from Table 14.4, the spec sheet, or Eq. 14.5. The number of emitters per plant is a design choice: 1 for row crops on tape where each plant draws from one outlet, 2 to 8 for trees and vines. Minimum emitter flow is the flow at the lowest pressure in the zone from Eq. 14.3, and average flow is the design flow.",
      "Design emission uniformity combines manufacturing variation and pressure variation. Targets of 85% to 90% or better are common for new systems on uniform ground. More emitters per plant average out manufacturing variation, which is why orchards use several. If DU is low, check whether the pressure ratio (q<sub>m</sub>/q<sub>a</sub>) or v is the larger penalty and fix that one.",
      "design-du works out q<sub>m</sub> from the pressure losses for you."
    ],
    qa: [
      { q: "With v 0.06, 2 emitters per plant and a low flow of 0.82 out of 1.0 gph, what's my design DU?", a: "DU is 77.6%. Most of the loss comes from pressure, since q<sub>m</sub>/q<sub>a</sub> is 0.82 while the manufacturing term is 0.95." },
      { q: "What if each plant gets only one emitter?", a: "DU drops to 75.8%. The second emitter is worth about 2 points here." },
      { q: "In a vineyard with 4 emitters per vine, v 0.03 and a low flow of 0.9 gph out of 1.0, what DU?", a: "DU is 88.3%. With good emitters and 4 per plant, nearly all the remaining loss is the 10% pressure variation." }
    ],
    figs: ["14.11"]
  },
  "design-du": {
    more: [
      "Pick the emitter type to fill x and v from Table 14.4, or enter them from the spec sheet. Average design pressure is the regulator setting times 2.31 for feet. Maximum friction head loss is the sum of manifold and lateral losses to the worst emitter from Eq. 14.1, converted to feet. Elevation change to the lowest pressure point comes from a topo map or survey, positive downhill.",
      "The calculator finds K, the minimum head and flow, then the design DU. If DU is below the target, the fixes are pressure compensating emitters, shorter laterals, larger pipe, or regulators on each manifold. Uphill laterals cut DU fast because both friction and elevation reduce pressure. Check that the minimum pressure stays above the lower limit for compensating emitters, often 7 to 10 psi.",
      "Use the result to accept or redesign before buying pipe."
    ],
    qa: [
      { q: "Example 14.9: spiral emitters, 20 psi, 10 ft friction, flat, 2 per plant. DU?", a: "K is 0.0564, minimum head 36.2 ft, minimum flow 0.83 gph and DU about 79%. The book rounds to 0.82 gph and gets about 78%." },
      { q: "If I use compensating long path emitters (x 0.2) instead, same layout?", a: "The minimum flow rises to 0.95 gph and DU to 90%. That is the main reason to pay for compensating emitters." },
      { q: "The laterals actually run 5 ft uphill to the end. With spiral emitters what happens?", a: "Minimum head drops to 31.2 ft and flow to 0.75 gph. DU falls to 70.5%, too low for a new system." }
    ],
    figs: ["14.11"]
  },
  "tab-14.4": {
    more: [
      "Pick the emitter type from the maker's description: vortex or orifice, long path, compensating, short path, or line-source tubing. Enter the pressure change you expect across the zone as a percent of design pressure, from the lateral and manifold losses plus elevation. The table gives typical x, v and flushing ability from Keller and Bliesner (1990). If the spec sheet lists x and v for the actual product, use those instead.",
      "The flow change shows how sensitive the emitter is to the pressure change. The flushing ability matters as much as x for dirty water: emitters with no flushing ability need cleaner water and better filtration (Table 14.2). The rating repeats Table 14.3 for the v listed. A low v and a low x together give the best uniformity, but compensating emitters cost more and need a minimum pressure to work.",
      "Carry x and v into design-du and Eq. 14.7."
    ],
    qa: [
      { q: "We have vortex emitters. If pressure varies 10% across the block, how much does flow change?", a: "x is 0.42, so flow changes about 4.1%. The v of 0.07 rates marginal, and there is no flushing ability, so filtration has to be good." },
      { q: "The design uses spiral long path emitters and the losses add up to 20% of design pressure. Is that OK?", a: "x is 0.75, so flow changes about 14.7%. That is too much for good uniformity. Shorten the laterals or go to a compensating emitter." },
      { q: "What would compensating long path emitters with automatic flushing do at the same 20%?", a: "x is 0.2, so flow changes only 3.7%. They also flush themselves at start-up, which helps on well water with iron or on surface water." }
    ],
    figs: ["14.11", "14.8", "14.9"]
  },
  "tab-14.2": {
    more: [
      "Send a water sample to a lab that runs an irrigation or drip suitability test: suspended solids, pH, total dissolved solids, iron, manganese, hydrogen sulfide, and bacteria count. Sample at the pump after it has run 20 to 30 minutes, and for surface water sample at the time of year you will irrigate. A field EC meter gives a quick salt estimate (TDS in ppm is about 640 times EC in dS/m).",
      "Each factor is rated minor, moderate or severe, and the worst one sets the overall rating. Moderate iron or manganese usually means chlorination or aeration and settling, plus regular acid treatment. High pH with high salts points to carbonate scale, handled with acid injection. Severe suspended solids or bacteria call for media filters and chlorination. The ratings say what treatment is needed, not whether drip is possible.",
      "Use the result to choose filters (Eq. 14.2) and emitters with flushing ability (Table 14.4)."
    ],
    qa: [
      { q: "The lab says 30 ppm solids, pH 7.5, 600 ppm salts, 0.2 ppm iron. Can I go drip?", a: "Suspended solids are minor, but pH, salts and iron are moderate, so the overall rating is moderate. Drip will work with good filtration and a plan for acid and chlorine treatment." },
      { q: "Our well has pH 7.8, 1,200 ppm salts, 0.8 ppm iron and 0.2 manganese. How bad is that?", a: "pH, salts, manganese and iron all rate moderate. Iron at this level oxidizes into a red sludge that plugs emitters, so plan on aeration or chlorine and settling before the filter." },
      { q: "We want to pull from a pond: 120 ppm solids and 60,000 bacteria per mL. Is that a problem?", a: "Both are severe, so the overall rating is severe. You need media filtration and regular chlorination, and emitters that self-flush." }
    ],
    figs: ["14.10", "14.6"]
  },
  "eq-14.8": {
    more: [
      "Crop ET for the period comes from a local weather station or ET network times a crop coefficient, adjusted for canopy cover on young trees and vines. Effective precipitation is the rain that stays in the wetted root zone, usually much less than gauge rain under drip. Deep percolation and runoff allowances are small for well-managed drip, often 5% to 10% of ET. Leave the soil water change at 0 when you plan to hold soil water steady, which is normal for drip.",
      "The result is the gross depth to apply over the irrigated area. Divide by the area per emitter and emitter flow (Eq. 14.9 or drip-runtime) to get run time. Using full-field ET for young orchards overstates the need. Add any leaching requirement for salty water to the deep percolation term.",
      "Use the result in Eq. 14.9 or drip-runtime."
    ],
    qa: [
      { q: "My tomatoes used 0.25 inch yesterday. How much do I need to put back?", a: "Enter 0.25 in ET, 0.02 in deep percolation and no rain. The gross requirement is 0.27 in, which is the number to turn into run time with drip-runtime or Eq. 14.9." },
      { q: "This week ET was 1.75 inches and we got 0.5 inch of useful rain. How much should drip put on?", a: "Enter 1.75 in ET, 0.5 in rain and 0.1 in for deep percolation. The gross requirement is 1.35 in for the week, so split it into daily or every-other-day runs." },
      { q: "Peak ET for corn under SDI is 0.32 inch a day. What gross daily depth do I plan for?", a: "With 0.03 in for deep percolation, the gross is 0.35 in per day. The system has to deliver that every day across all zones, so check it against run hours in drip-runtime." }
    ],
    figs: ["14.2", "14.3"]
  },
  "eq-14.9": {
    more: [
      "Gross depth comes from Eq. 14.8. The area is what the emitters serve, in ft² (one acre is 43,560 ft²). Emitter flow is from the spec sheet or a catch test, and application time is how long the grower can run each irrigation. To get area per emitter, set n to 1.",
      "The result is how many emitters it takes to apply that depth in that time, and the area each serves. Fewer emitters need longer run times. The wetted pattern (Figures 14.2 and 14.3) also limits spacing: on sands, emitters need to be closer. A common error is entering time in minutes or depth in feet.",
      "Use drip-runtime for the run time with a given layout."
    ],
    qa: [
      { q: "If I want to put on 0.27 inch in an hour with 2 gph emitters, how many do I need per acre?", a: "Enter 0.27 in, 43,560 ft², 2 gph and 1 hr. It takes 3,666 emitters per acre, each serving 11.9 ft². Running 2 hr would halve the count." },
      { q: "In Example 14.10, how much area does each 2 gph emitter on the tomatoes cover?", a: "Enter 0.27 in, 12 ft², 2 gph and 1 hr, and n comes out at 1.0, so each emitter serves about 12 ft² with one lateral per row. With one lateral serving two rows it would be 6 ft², as the book says." },
      { q: "A berry grower has 5 acres and can run 6 hours a day. He needs 0.3 inch with 0.24 gph emitters. How many?", a: "Enter 0.3 in, 217,800 ft², 0.24 gph and 6 hr. He needs about 28,290 emitters, 7.7 ft² each, for example 1 ft spacing on rows about 7.7 ft apart." }
    ],
    figs: ["14.2", "14.3"]
  },
  "drip-runtime": {
    more: [
      "Crop ET since the last irrigation comes from a weather station or ET network with a crop coefficient. Rain counts only if it reached the root zone. Emitter spacing and flow are on the tape or tubing label, and the lateral spacing is the bed or row width each lateral serves. Small allowances for deep percolation (about 10% of ET) cover nonuniformity. Enter soil water you are willing to draw down as positive, or a negative number to refill a deficit.",
      "The calculator turns depth into run time, gallons per emitter and gallons per acre. Drip tape on 60 in beds at 0.24 gph and 12 in spacing applies only about 0.08 in/hr, so a 0.3 in irrigation takes about 4 hours. Run times over about 24 hours mean the zone cannot keep up and needs more emitters or more flow. Using the wetted strip width instead of the full bed spacing overstates the rate.",
      "Gross depth follows Eq. 14.8. For zone scheduling, compare run time with the hours available per day and the number of zones."
    ],
    qa: [
      { q: "My tape is 0.24 gph on 12 inch spacing, beds 60 inches. ET was 0.30 yesterday. How long do I run?", a: "With 0.03 in allowance, gross is 0.33 in. The rate is 0.077 in/hr, so run about 4.3 hours. Each emitter gives about 1 gal, or 8,961 gal per acre." },
      { q: "Our SDI corn has 0.264 gph emitters every 18 inches on 60 inch laterals. Same 0.30 ET. Run time?", a: "The rate is 0.056 in/hr, so 0.33 in takes 5.8 hours. With four zones that is about 23 hours a day at peak, so there is little room to catch up." },
      { q: "We got 0.3 inch rain this week and ET was 1.4 inches. Tape is 0.24 gph at 12 inches on 60 inch beds. How long to run for the week?", a: "With 0.1 in allowance, the gross is 1.2 in. Total run time is about 15.6 hours, or roughly 2.2 hours a day split across the week." }
    ],
    figs: ["14.3", "14.4"]
  }
});

window.CALC_USE2 = Object.assign(window.CALC_USE2 || {}, {
  "eq-15.1": {
    more: [
      "The amount of solution per acre comes from the product label (gal or pt per acre) or from the nutrient rate divided by the nutrient content of the product, about 3 lb N/gal for 28% UAN. The area is the zone or set being injected, from the design map or the controller, or all zones if injection runs across several in sequence. Injection time is how long the injector will run, which can be shorter than the set time to leave room for flushing.",
      "The result is the injection rate in gal/hr to set on the pump. Most fertigation pumps run 1 to 30 gal/hr, so a rate far outside that means a different pump or a longer injection time. Leave enough clean water at the end of each set to flush the system (Eq. 15.3 and 15.4). Using total field area with the time for one zone is the most common error and overdoses by the number of zones.",
      "Use pump-calibration to set and check the dial, and flush-total for the clean water time."
    ],
    qa: [
      { q: "I want 15 lb of N on 78 acres of SDI using 28% UAN, injecting over 24 hours. What rate?", a: "At 3 lb N/gal that is 5 gal/ac. Enter 5 gal/ac, 78 ac and 24 hr. The rate is 16.25 gal/hr, as in Example 15.3." },
      { q: "What if I inject one 19.5 acre zone at a time during a 6 hour set?", a: "Enter 5 gal/ac, 19.5 ac and 6 hr. The rate is still 16.25 gal/hr, because the area and time both drop by a factor of four. Stop injecting with enough time left in the set to flush." },
      { q: "A furrow-irrigated field gets 10 gal/ac of product on 40 acres in an 8 hour set. What injection rate?", a: "The rate is 50 gal/hr. That is above most small injection pumps, so use a larger pump or run two sets." }
    ],
    figs: ["15.1", "15.2"]
  },
  "eq-15.2": {
    more: [
      "The label rate per acre comes from the product label, in pints for most pesticides. Field area is what the pivot or linear covers in one revolution or pass, from the area calculator or the FSA map. The time for one revolution comes from the percent timer setting (Eq. 13.7) or from timing the end tower over a known distance.",
      "The injection rate is the label rate times the acres covered per hour. Rates for pesticides are small, often 1 to 2 gal/hr, so choose a pump sized for that range. Injection must run for the whole revolution, so the timer setting fixes the rate. Changing the pivot speed after calibration changes the dose. Mixing pints and gallons is easy to do, and 8 pints make a gallon.",
      "Use pump-calibration to set the dial, and Eq. 15.5 for the flush time."
    ],
    qa: [
      { q: "The label says 1.5 pints per acre. My pivot covers 126 acres in 22 hours. What injection rate?", a: "Area rate is 5.73 ac/hr, so the injection rate is 8.6 pt/hr, or 1.07 gal/hr. Calibrate to about 1.1 gal/hr, as in Example 15.4." },
      { q: "We want 30 lb of N through the pivot with 28% UAN. 125 acres, 60 hours per revolution. What rate?", a: "30 lb at 3 lb/gal is 10 gal/ac, or 80 pt/ac. At 2.08 ac/hr the rate is 166.7 pt/hr, or 20.8 gal/hr, just over a 20 gal/hr pump. Slow the pivot a little or use a larger pump." },
      { q: "We need a fungicide at 1 pint per acre on a 130 acre pivot. It takes 16 hours to go around at the setting we want. What do I set?", a: "Area rate is 8.1 ac/hr, so inject 8.1 pt/hr, about 1.0 gal/hr. If the grower speeds the pivot up later, recalculate, since the rate is tied to that 16 hour revolution." }
    ],
    figs: ["15.1"]
  },
  "eq-15.3": {
    more: [
      "Inside diameter is from the pipe spec for the size and pressure class: the book's 8 in mainline has a 7.762 in ID, and 6 in PVC is about 5.9 to 6.0 in depending on class. Mainline length is from the injection point to the first manifold or the pivot, from the farm map or the as-built drawing. System flow is from the flow meter while the system runs.",
      "The result is the time for water to travel the mainline, which is how long it takes chemical to reach the field and how long to flush it out. At common mainline velocities of 3 to 5 ft/s, each 1,000 ft takes about 3 to 6 minutes. Use the same equation for each segment of a manifold or submain where flow changes. Remember that a mainline with valves to several zones needs flushing only between the injector and the active zone.",
      "Add the manifold and lateral flush times from Eq. 15.4, or use flush-total for the full zone."
    ],
    qa: [
      { q: "We have 975 feet of 8 inch mainline, 7.762 inch ID, running 500 gpm. How long before the fertilizer reaches the field?", a: "Enter 7.762 in, 975 ft and 500 gpm. Travel time is 4.8 minutes, which the book rounds to 5 min in Example 15.2. It takes the same time to clear the mainline after injection stops." },
      { q: "A half-mile of 6 inch PVC, about 5.9 inch ID, carries 800 gpm. How long to flush it?", a: "About 4.7 minutes. The pipe is long, but the velocity is over 9 ft/s, so the water moves through quickly." },
      { q: "During an inspection, the grower says he waits only 2 minutes after injecting. His mainline is 1,320 feet of 10 inch, 9.8 inch ID, at 1,200 gpm. Is that enough?", a: "The mainline alone takes 4.3 minutes. Two minutes leaves chemical in the pipe, so he needs at least 5 minutes plus the field piping time." }
    ],
    figs: ["15.1"]
  },
  "eq-15.4": {
    more: [
      "Inside diameter is from the tubing or pipe spec: drip tubing of 7/8 in nominal is 0.859 in ID in the book, common drip tape is 0.6 to 0.9 in, and aluminum sprinkler laterals are 3 to 5 in. Outlet spacing is emitter or sprinkler spacing, and outlet discharge is the flow per outlet in gpm (divide gph by 60). Lateral length is from the manifold to the end. For a manifold, the outlets are the laterals and the outlet flow is the flow per lateral.",
      "The result is the time for water entering the lateral to reach the last outlet, which is also the time to flush chemical out through the outlets. Drip laterals take a long time, often 30 to 90 minutes, because the velocity drops toward the end. Sprinkler laterals take 10 to 20 minutes. The equation applies only when flushing through the emitters, not through an open end or flushing manifold.",
      "Add mainline time from Eq. 15.3 or use flush-total. Figure 15.13 shows the same times as curves."
    ],
    qa: [
      { q: "My SDI laterals are 1,300 ft of 7/8 inch tubing, 0.859 ID, emitters every 18 inches at 0.264 gph. How long to flush through the emitters?", a: "Enter 0.859 in, 1.5 ft, 0.0044 gpm and 1,300 ft. There are 867 emitters and the flush time is 75 minutes, as in Example 15.3." },
      { q: "How long for chemical to get to the end of a 1,320 ft wheel line with sprinklers every 40 feet at 10 gpm, 4.856 inch ID?", a: "There are 33 sprinklers and the travel time is 15.7 minutes. Keep running clean water at least that long after injection stops." },
      { q: "Drip tape with 0.625 inch ID, emitters every foot at 0.2 gph, 600 ft rows. How long?", a: "Enter 0.00333 gpm. With 600 emitters the time is 33.4 minutes. The 4 in manifold feeding those rows at 3.81 gpm per lateral adds another 4.7 minutes in the book's example." }
    ],
    figs: ["15.13"]
  },
  "eq-15.5": {
    more: [
      "Inside diameter is from the span list: 6 5/8 in pivot pipe has an ID of about 6.4 in. Lateral length is the pivot length from the dealer printout. Sprinkler spacing is the typical outlet spacing (use the spacing along most of the lateral). Flow is the system flow from the meter with the end gun off.",
      "The result is the time to flush the pivot lateral. Quarter-mile pivots usually come out at 5 to 10 minutes and half-mile pivots near 15. Keep the pivot running for at least this long after injection stops so the start of the revolution gets the right dose. The equation applies only with the end gun off, since the gun pulls water to the end faster than the sprinklers alone. Using the outside diameter instead of the inside diameter overstates the time by about 7% on 6 5/8 in pipe.",
      "Add mainline flush time from Eq. 15.3 if the injector is not at the pivot point."
    ],
    qa: [
      { q: "1,280 ft pivot, 6.395 ID, sprinklers every 20 feet, 860 gpm. How long to flush?", a: "6.9 minutes, as in Example 15.4. Keep the pivot running 7 minutes past the end of injection." },
      { q: "Our 1,300 ft pivot has 6 5/8 inch pipe, 6.407 ID, sprinklers every 10 feet and 800 gpm. How long after injection do I keep it running?", a: "Enter 6.407 in, 1,300 ft, 10 ft and 800 gpm. The flush time is 8.5 minutes. The closer spacing and lower flow add about a minute and a half over the book's pivot." },
      { q: "A half-mile pivot with 8 inch pipe, 7.782 ID, 2,600 ft long, 15 ft spacing and 1,500 gpm. What flush time goes in the chemigation record?", a: "The flush time is 14.1 minutes. Record at least 15 minutes of clean water with the end gun off." }
    ],
    figs: []
  },
  "flush-total": {
    more: [
      "Zone flow comes from the meter while the zone runs. Mainline, manifold and lateral sizes and lengths come from the design drawing or the as-built map, using inside diameters. Lateral spacing on the manifold and flow per lateral set the manifold term, and emitter spacing and flow set the lateral term. Measure the manifold length on one side of the inlet tee when the manifold is fed from the middle.",
      "The total is the time from the injector to the farthest emitter. It is also the minimum time of clean water to run after injection stops, so chemical does not sit in the laterals. Laterals usually take most of the time on drip. In the book's 78 ac SDI field the total is about 85 minutes, 75 of it in the laterals. Shortening laterals helps less than you might think because lateral flush time depends on the log of the emitter count.",
      "Use the total to plan set times in Eq. 15.1 so injection ends early enough to flush within the set."
    ],
    qa: [
      { q: "For the SDI field in Examples 15.2 and 15.3, how long from injector to the last emitter?", a: "Mainline 4.8 min, manifold 4.7 min, laterals 75.4 min, for a total of 84.8 min. Plan on about 1.5 hours of clean water after injection, or the 3 hours the book uses per zone to be safe." },
      { q: "If the laterals were half as long, 660 feet, how much time would we save?", a: "Lateral time drops to 68.4 min and the total to 77.9 min. Halving the length saves only 7 minutes, because lateral flush time depends on the log of the number of emitters." },
      { q: "The zone only runs 300 gpm when the pump is worn. Does that change flushing?", a: "The mainline takes 8.0 min instead of 4.8, so the total rises to 88 min. The manifold and lateral times depend on lateral and emitter flow, not zone flow." }
    ],
    figs: ["15.13"]
  },
  "pump-calibration": {
    more: [
      "The desired injection rate comes from Eq. 15.1, Eq. 15.2 or injection-plan. Maximum pump capacity is on the pump nameplate. For the catch test, run the pump at normal system pressure and catch from the injection line into a graduated cylinder or a calibration tube for a timed period, 1 to 5 minutes. Record the volume in mL and the time in minutes.",
      "The dial setting is the desired rate over maximum capacity. The test converts the catch to gal/hr (1 gal/hr is 63.1 mL/min). If the measured rate is off by more than a few percent, adjust the dial and test again. Pumps often deliver less at high system pressure than on the bench, so always test at operating pressure. Repeat the test whenever the product, temperature or system pressure changes.",
      "Use the final setting with the injection time from Eq. 15.1 or 15.2."
    ],
    qa: [
      { q: "I need 17.5 gal/hr and the pump maxes at 20. I caught 3,000 mL in 2 and a half minutes. What do I do?", a: "Start at 87.5% on the dial. The catch is 1,200 mL/min, or 19.0 gal/hr, too high. Turn the dial down to about 81% and test again, as in Example 15.1." },
      { q: "For the pivot insecticide I need 1.07 gal/hr on a 5 gal/hr pump. I caught 300 mL in 4.5 minutes. Am I there?", a: "The dial starts at 21.4%. The catch is 66.7 mL/min or 1.06 gal/hr, within 2% of target. Keep the setting." },
      { q: "We need 16.25 gal/hr from a 20 gal/hr pump. The catch was 1,000 mL in 1 minute. What next?", a: "The dial starts at 81.25%. The measured rate is 15.85 gal/hr, low. Turn up to about 83% and test again." }
    ],
    figs: ["15.2", "15.3", "15.10"]
  },
  "injection-plan": {
    more: [
      "Choose whether the rate is a product volume per acre from the label or a nutrient rate. For nutrients, enter the nutrient per gallon of product, about 3 lb N/gal for 28% UAN and about 3.5 lb N/gal for 32% UAN. Choose set or moving system, then enter the area and injection time for a set, or the area and revolution time for a pivot. Enter the pump maximum capacity from the nameplate.",
      "The output gives product per acre, total product to order, injection rate, the mL/min to look for in the catch test, and the starting dial setting. A dial over 100% means the pump is too small for the plan. Under about 10%, the pump is too large to meter accurately. Always confirm chemigation safety equipment (Figure 15.5) and posting (Figure 15.12) before injecting.",
      "Then calibrate with pump-calibration, and plan flush time with flush-total or Eq. 15.5."
    ],
    qa: [
      { q: "I want 15 lb N on 78 acres of SDI with 28% UAN over 24 hours, 20 gal/hr pump. What's the setup?", a: "Choose nutrient rate, 15 lb/ac, 3 lb/gal, set system, 78 ac and 24 hr. That is 5 gal/ac, 390 gal of UAN to order and 16.25 gal/hr. Start the dial at 81% and look for about 1,025 mL/min in the catch test." },
      { q: "The insecticide label says 1.5 pints per acre. My pivot covers 126 acres in 22 hours and I have a 5 gal/hr pump. How do I set it up?", a: "Choose label rate 1.5 pt/ac, moving system, 126 ac and 22 hr. That is 0.19 gal/ac and 23.6 gal of product for the field. The injection rate is 1.07 gal/hr, about 68 mL/min in the catch test, with the dial starting at 21.5%." },
      { q: "A grower wants 30 lb of N through his pivot with 28% UAN. 125 acres, 60 hours per revolution, and a 20 gal/hr pump. Will that work?", a: "10 gal/ac and 1,250 gal total. The rate is 20.8 gal/hr, so the dial would be 104%. The pump is too small. Slow the pivot or use a larger pump." }
    ],
    figs: ["15.1", "15.2", "15.5", "15.12"]
  }
});

