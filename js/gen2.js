function* gen() {
  const result = yield "What's your name?";
  console.log(result); // "Bob"
}
const g = gen();
console.log(g.next().value); // "What's your name?"
g.next('Bob');
