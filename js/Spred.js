/* eslint-disable no-console */
var params = [3, 4, 5];
var other = [1, 2, ...params];
console.log(other);

var [a, b, ...rest] = ['Basic', 'rest', 'operator', 'usage'];
console.log(rest);

const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(z);