/* eslint-disable no-use-before-define */
getCurrentCoords()
  .then(function (coords) {
    return getAddress(coords);
  })
  .then(function (address) {
    return getZip(address);
  })
  .catch(function (error) {
    console.log(`Error is ${error}`);
    return getSomethingElse();
  })
  .then(function (result) {
    console.log(result);
    throw new Error(result);
  })
  .catch(function (error) {
    console.log('want coords, but get something like this', error);
  });

const coord = {
  country: 'RB',
  address: {
    street: 'Mosk',
    zip: 234323,
    stores: [
      { name: '#1', storeInfo: '??????? 111' },
      { name: '#2', storeInfo: '??????? 222' }
    ]
  }
};

const somethingElse = {
  thing: 'some'
};

function getCurrentCoords() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (coord.country) {
        console.log(coord.country);
        resolve(coord.address);
      } else reject(new Error('no country'));
    }, 200);
  });
}

function getAddress(address) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (address.street) {
        console.log(address.street);
        resolve(address);
      } else reject(new Error('no street'));
    }, 200);
  });
}
function getZip(address) {
  if (address.zip) {
    console.log(address.zip);
  } else throw new Error('no zip');
  /*
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (address.zip) {
        console.log(address.zip);
        resolve(address);
      } else reject(new Error('no zip'));
    }, 200);
  });
  */
}

function getSomethingElse() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(somethingElse.thing);
    }, 200);
  });
}
