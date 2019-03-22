const fff = { e: 33 };
console.log({ d: 33 });

const obj = {
  a: 1,
  f() {
    console.log('test');
  }
};
for (key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
