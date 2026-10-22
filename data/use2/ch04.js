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
