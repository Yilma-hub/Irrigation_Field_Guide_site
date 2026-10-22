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
