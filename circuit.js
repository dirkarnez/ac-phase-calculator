https://github.com/SpiceSharp/SpiceSharp
https://github.com/SpiceSharp/SpiceSharpParser
// Build the circuit
            var ckt = new Circuit(
                new VoltageSource("V1", "in", "0", 0.0),
                new Resistor("R1", "in", "out", 1.0e3),
                new Resistor("R2", "out", "0", 2.0e3)
                );

            // Create a DC sweep and register to the event for exporting simulation data
            var dc = new DC("dc", "V1", 0.0, 5.0, 0.001);

            // Run the simulation
            foreach (int exportType in dc.Run(ckt))
            {
                Console.WriteLine(dc.GetVoltage("out"))
            }
