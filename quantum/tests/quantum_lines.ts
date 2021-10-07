export class QuantumLines {
  // Ignore
  static get TP() {
    return {
      msg: "\x01\x14TP\x04",
    };
  }

  // New race
  static get DN() {
    return {
      msg: "\x01\x13DN| 1| 2|1\x04",
      i_dont_now: 1,
      heat: 2,
    };
  }

  // Ready to start A and B
  static get DA() {
    return {
      msg: "\x01\x13DA| 1| 2|  2|202\x04",
      i_dont_now: 1,
      heat: 2,
      start_a: 2,
      start_b: 202,
    };
  }

  // Running time
  static get RF6() {
    return {
      lines: [
        "\x01\x13R F+\x02\x100000       0.0  \x04",
        "\x01\x13R F+\x02\x100006       0.0  \x04",
        "\x01\x13N F+\x02\x100006      41.952\x04",
        "\x01\x13N F+\x02\x100000      +0.003\x04",
        "\x01\x13N F+\x02\x100000      41.955\x04",
      ],
      mills: ["0000", "0006"],
      times: ["0.0", "", ""],
    };
  }

  // Start A and B
  static get DS() {
    return {
      msg: "\x01\x13DS| 1| 2|  2|202| 3:12:52.933\x04",
      payload: {
        action: "DS",
        stage: 1,
        heat: 2,
        startA: 2,
        startB: 202,
        startTime: "3:12:52.933",
      },
    };
  }

  static get DI() {
    return {
      msg: "\x01\x13DI| 1| 2| 7|  2|      37.521|            \x04",
      payload: {
        action: "DI",
        stage: 1,
        heat: 2,
        pulse: 7,
        bib: 2,
        time: "37.521",
      },
    };
  }

  static get DF() {
    return {
      msg: "\x01\x13DF| 1| 2| 8|202|   |      41.952|            \x04",
      payload: {
        action: "DF",
        stage: 1,
        heat: 2,
        pulse: 8,
        bib: 2,
        time: "41.952",
      },
    };
  }
}
