export class TcpServer {
  public listener: Deno.Listener;
  public port;
  public messageHandler;

  constructor(port: number, messageHandler: (msg: string) => void) {
    this.port = port;
    this.listener = Deno.listen({ port: this.port });
    this.messageHandler = messageHandler;
  }

  async listenForConn() {
    for await (const conn of this.listener) {
      this.handleConn(conn);
    }
  }

  async handleConn(conn: Deno.Conn) {
    const buf = new Uint8Array(1024);
    await conn.read(buf);
    const decoder = new TextDecoder();
    const data = decoder.decode(buf);
    this.messageHandler(data);
    conn.close();
  }
}
