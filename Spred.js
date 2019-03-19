var params = [3, 4, 5];
var other = [1, 2, ...params];
console.log(other);

var [a, b, ...rest] = ['Basic', 'rest', 'operator', 'usage'];
console.log(rest);