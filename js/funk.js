var obj = {
  a: 1,
  f: function() {
    console.log("test");
  }
};
for (key in obj) {
  console.log(key + ": " + obj[key]);
}
