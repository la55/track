export class Quantum {
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
