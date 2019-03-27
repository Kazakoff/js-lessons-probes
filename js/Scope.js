const arr = [10, 12, 15, 21];
const funcMap = new Map();

for (let i = 0; i < arr.length; i++) {
  funcMap.set(i, function() {
    console.log(`Index: ${i}, element: ${arr[i]}`);
  });
}
funcMap.get(2)();
