new Promise(function(resolve) {
  console.log('[1]');
  setTimeout(() => resolve(1), 1000); // (*) The initial promise resolves in 1 second (*),
})
  .then(function(result) {
    // (**)
    console.log('[2]'); // Then the .then handler is called (**).
    console.log(result); // 1
    return result * 2;
  })
  .then(function(result1) {
    // (***)The value that it returns is passed to the next .then handler (***)
    console.log('[3]');
    console.log(result1); // 2
    return result1 * 2;
  })
  .then(function(result2) {
    console.log(result2); // 4
    return result2 * 2;
  });
