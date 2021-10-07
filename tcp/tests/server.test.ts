import { TcpServer } from "../server.ts";

const encoder = new TextEncoder();

Deno.test("Server accept connections", async () => {
  const server = new TcpServer(3000);

  const conn = await Deno.connect({ port: 3000 });
  await conn.write(encoder.encode("HI"));
  conn.close();

  server.listener.close();
});
