var dst = { asd: 0 };
var src1 = { foo: 1, bar: 2 };
var src2 = { foo: 3, baz: 4 };

Object.assign(dst, src1, src2);

console.log(dst);

const obj = { normal: Infinity };
const pr1Descriptor = {
  enumerable: false,
  writable: true,
  configurable: true,
  value: 0
};
const pr2Descriptor = {
  enumerable: true,
  writable: false,
  configurable: true,
  value: 0
};

Object.defineProperty(obj, `pr1`, pr1Descriptor);
Object.defineProperty(obj, `pr2`, pr2Descriptor);

for (prop in obj) {
  console.log(prop);
  prop = 111;
}
obj.pr1 = 111;
console.log(obj.pr1);

// Whereas the Object.assign() method will only copy enumerable
// and own properties from a source object to a target object,
// you are able to use this method and Object.create() for a
// shallow copy between two unknown objects:
const copy = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);
