
class Handler {
  constructor(fn) {
    this.fn = fn;
    this.next = null;
  }
}

export class Chain {
  constructor() {
    this.first = null;
    this.last = null;
  }

  add(fn) {
    const handler = new Handler(fn);
    if (!this.first) {
      this.first = handler;
    } else {
      this.last.next = handler;
    }
    this.last = handler;
    return this;
  }

  process(value) {
    let current = this.first;
    const evaluateStep = () =>
      current.fn(value, () => {
        current = current.next;
        if (current) return evaluateStep();
        throw new Error('Handler is not exist');
      });
    return evaluateStep();
  }
}