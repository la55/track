import { assertEquals } from "https://deno.land/std@0.110.0/testing/asserts.ts";
import { QuantumLines } from "./quantum_lines.ts";
import { Quantum } from "../quantum.ts";

Deno.test("DS Start", () => {
  const payload = Quantum.DS(Quantum.clean(QuantumLines.DS.msg));
  assertEquals(payload, QuantumLines.DS.payload);
});
