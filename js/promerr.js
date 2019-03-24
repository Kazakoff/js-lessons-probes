getCurrentCoords()
    .then(function (coords) {
        return getAddress(coords);
    })
    .then(function (address) {
        return getZipCode(address);
    })
    .catch(function (error) {
        console.log("Error is " + error);
        return getSomethingElse();
    })
    .then(function () {
        throw new Error();
    })
    .catch(function (error) {
        // handle error​
    });