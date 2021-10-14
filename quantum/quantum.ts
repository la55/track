export class Quantum {
  static messageHandler = (msg: string) => {
    for (const line of Quantum.splitMsg(msg)) {
      const data = Quantum.clean(line);
    }
  };

  static splitMsg = (msg: string): string[] => {
    if (msg.indexOf("\x04\x01") !== -1) {
      const lines = msg.split("\x04\x01").map((line) => {
        if (line[0] !== "\x01") {
          return "\x01" + line;
        }
        return line;
      });
      return lines;
    }
    return [msg];
  };

  static clean(msg: string) {
    return msg.replace("\x01\x13", "").replace("\x04", "");
  }

  static DS(msg: string) {
    const [action, stage, heat, startA, startB, startTime] = msg.split("|");
    const payload = {
      action,
      stage: parseInt(stage),
      heat: parseInt(heat),
      startA: parseInt(startA),
      startB: parseInt(startB),
      startTime: startTime.trim(),
    };
    return payload;
  }
}
