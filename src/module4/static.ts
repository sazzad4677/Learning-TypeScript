class Counter {
  static counter: number = 0;
  // constructor(counter: number) {
  //   this.counter = counter;
  // }
  static increment() {
    return (Counter.counter = Counter.counter + 1);
  }
  static decrement() {
    return (Counter.counter = Counter.counter - 1);
  }
}

// const instance1 = new Counter();
// const instance2 = new Counter();
console.log(Counter.increment());
console.log(Counter.increment());
