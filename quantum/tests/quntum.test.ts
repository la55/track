import { assertEquals } from "https://deno.land/std@0.110.0/testing/asserts.ts";
import { QuantumLines } from "./quantum_lines.ts";
import { Quantum } from "../quantum.ts";
import { raceData } from "./quantum_data.ts";

Deno.test("Message start with \x01 end \x04", () => {
  for (const msg of raceData) {
    const lines = Quantum.splitMsg(msg);
    for (const line of lines) {
      const start = line.substr(0, 1);
      const end = line[-1];
      assertEquals(start, "\x01");
      assertEquals(end, "\x04");
    }
  }
});

Deno.test("DS Start", () => {
  const payload = Quantum.DS(Quantum.clean(QuantumLines.DS.msg));
  assertEquals(payload, QuantumLines.DS.payload);
});
