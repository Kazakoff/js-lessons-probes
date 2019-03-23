function* fibonacci() {
  let fn1 = 0;
  let fn2 = 1;
  while (true) {
    const current = fn1;
    fn1 = fn2;
    fn2 = current + fn1;
    const reset = yield current;
    if (reset) {
      fn1 = 0;
      fn2 = 1;
    }
  }
}
const g = fibonacci();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next(true).value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
