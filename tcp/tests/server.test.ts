import { TcpServer } from "../server.ts";
import { raceData } from "../../quantum/tests/quantum_data.ts";
import { Quantum } from "../../quantum/quantum.ts";

const encoder = new TextEncoder();

Deno.test("Send data to server", async () => {
  const server = new TcpServer(3000, (msg: string) => false);

  const conn = await Deno.connect({ port: 3000 });
  await conn.write(encoder.encode("Hi from server"));
  conn.close();

  server.listener.close();
});

Deno.test({
  name: "Send quantum data to server",
  ignore: true,
  async fn() {
    const server = new TcpServer(3000, Quantum.messageHandler);

    const conn = await Deno.connect({ port: 3000 });
    for (const line of raceData) {
      await conn.write(encoder.encode(line));
    }
    conn.close();

    server.listener.close();
  },
});
