var a = [1, 2, 3, 4, 5];
var filtered = a.filter(function(element) {
  return !!a;
});
console.log(filtered);

/*for (var i = 10, b = "init"; i > 0; ) {
  console.log(i);
  i--;
}

var b = 5;
var a = 5;
if (a > b) console.log("a > b");
else console.log("a < b");

var b = true && 0 && "";
b === 0; // true
// -------------------------------
var result = true;
if (result) {
  result = 0;
  if (result) {
    result = "";
  }
}
var b = result;
*/
