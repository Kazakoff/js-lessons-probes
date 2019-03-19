

somePromise().then(function () {
    return someOtherPromise();
}).catch(function (err) {
    // handle error​

});

somePromise().then(function () {
    return someOtherPromise();
}).then(null, function (err) {
    //   handle error​
}); 