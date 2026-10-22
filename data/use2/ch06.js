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
