getCurrentCoords()​
    .then(function(coords) {​
        return getAddress(coords)​
            .then(function(address) {​
                return getZipCode(address)​
                    .then(function(zipCode) {​
                        return "Zip Code is " + zipCode;​
                    })​
                    .then(function(value) {​
                        console.log(value);​
                    });​
        })​
    }); 