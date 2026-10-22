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
