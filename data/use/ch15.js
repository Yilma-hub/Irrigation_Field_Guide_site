window.CALC_USE = Object.assign(window.CALC_USE || {}, {
  "eq-15.1": {
    use: "Sets the injection rate for a set system such as drip zones, solid set or surface sets: product per acre times area, divided by injection time. Use it when a vegetable grower wants to fertigate a drip block in one set. The book example puts 15 lb N/ac of 28% UAN on 78 ac over 24 hr at about 16 gal/hr.",
    ask: "How many gallons per hour should my pump inject to get 15 lb of N on this field?",
    from: [["injection-plan", "product per acre G_p"], ["drip-runtime", "set time limiting injection time"], ["eq-12.5-12.7", "area per set A_s"], ["flush-total", "flush time left at the end of the set"]],
    to: [["pump-calibration", "desired injection rate q_i"]]
  },
  "eq-15.2": {
    use: "Sets the injection rate for a pivot or linear from product per acre and the acres covered per hour. Get the acres per hour from the field area and the hours per revolution at the timer setting. A 126 ac pivot on a 22 hr revolution at 1.5 pt/ac needs about 1.1 gal/hr.",
    ask: "I want 1.5 pints per acre through the pivot. What rate do I set the injector to?",
    from: [["eq-13.7", "hours per revolution at the timer setting"], ["eq-13.7-inv", "revolution time"], ["eq-13.2", "irrigated area"], ["tab-13.2", "irrigated area"], ["pivot-eval-13", "hours per revolution"]],
    to: [["pump-calibration", "desired injection rate q_i"]]
  },
  "eq-15.3": {
    use: "Gives the time for water to travel the length of a mainline or manifold segment, which is how long it takes to flush chemical out. Use it to decide how long to keep running clean water after injection stops. A 975 ft, 8 in mainline at 500 gpm flushes in about 5 min.",
    ask: "How long do I keep the water running after I stop injecting?",
    from: [["tab-8.5", "mainline inside diameter"], ["meter-timing", "measured system flow"], ["eq-5.20", "system flow"]],
    to: [["flush-total", "mainline flushing time"], ["eq-15.1", "flush time shortens injection time"]]
  },
  "eq-15.4": {
    use: "Gives flushing time for a lateral or manifold with evenly spaced outlets. Flow drops along the lateral, so this takes much longer than the mainline. A drip lateral 1,300 ft long with 0.26 gph emitters takes about 75 min to clear through the emitters.",
    ask: "How long before the fertilizer reaches the far end of my drip tape?",
    from: [["eq-14.3", "emitter discharge q"], ["lateral-design", "lateral length and outlet spacing"]],
    to: [["flush-total", "manifold and lateral flushing time"]]
  },
  "eq-15.5": {
    use: "Gives the time to flush a pivot lateral after injection, with the end gun off. Use it to tell the operator how long to keep the pivot running after injection ends so the start of the circle gets its full rate. For a 1,280 ft pivot at 860 gpm it is about 7 min.",
    ask: "After I shut off the injector, how much longer should the pivot run?",
    from: [["meter-timing", "measured system flow"], ["eq-5.20", "system flow"]],
    to: [["eq-15.2", "flush minutes added after injection stops"]]
  },
  "flush-total": {
    use: "Adds mainline, manifold and lateral flushing times for a drip zone. Use it to plan a fertigation schedule so each zone gets clean water at the end of the set. The book example has 10 min for mainline and manifold plus 75 min for the laterals.",
    ask: "How long do I need to run clean water through each zone after fertigating?",
    from: [["eq-15.3", "mainline flushing time"], ["eq-15.4", "lateral flushing time"], ["drip-runtime", "zone flow and run time"]],
    to: [["eq-15.1", "flush time sets the injection window"], ["injection-plan", "injection time within the set"]]
  },
  "pump-calibration": {
    use: "Sets the starting dial position on an injection pump and checks the actual rate from a timed catch. Run the catch at operating pressure, compare to the target and adjust. In the book example, 3,000 mL in 2.5 min is 19 gal/hr against a 17.5 gal/hr target, so the dial goes down and you test again.",
    ask: "I caught 3 liters in two and a half minutes. Is my injector set right?",
    from: [["eq-15.1", "desired rate for set systems"], ["eq-15.2", "desired rate for moving systems"], ["injection-plan", "injection rate from the label"]],
    to: []
  },
  "injection-plan": {
    use: "Takes a label rate or a nutrient rate and works through product per acre, total product, injection rate and the pump dial setting. Use it at the farm when setting up a fertigation or chemigation run so the numbers on the tank and the pump agree. It works for set systems and pivots.",
    ask: "I want 30 lb N per acre of 28% through the pivot. How do I set the pump?",
    from: [["eq-13.7", "time per pass at the timer setting"], ["drip-runtime", "set time for drip zones"], ["eq-13.2", "area covered per pass"], ["eq-12.5-12.7", "area per set"]],
    to: [["pump-calibration", "rate to verify with a catch test"], ["eq-15.1", "injection rate check for set systems"], ["eq-15.2", "injection rate check for moving systems"]]
  }
});
