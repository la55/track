import { listenForConn } from "../listener.ts";

const encoder = new TextEncoder();
const decoder = new TextDecoder();

Deno.test("Server accept connections", async () => {
  const handleConn = async (conn: Deno.Conn) => {
    const buf = new Uint8Array(1024);
    await conn.read(buf);
    console.log(decoder.decode(buf));
    conn.close();
  };
  const server = Deno.listen({ port: 3000 });
  listenForConn(server, handleConn);
  const conn = await Deno.connect({ port: 3000 });
  await conn.write(encoder.encode("HI"));
  conn.close();
  server.close();
});
