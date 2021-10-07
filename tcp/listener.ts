export async function listenForConn(
  server: Deno.Listener,
  handleConn: (conn: Deno.Conn) => void
) {
  for await (const conn of server) {
    handleConn(conn);
  }
}
