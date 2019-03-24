const coord = {
  country: 'RB',
  address: {
    street: 'Mosk',
    stores: [
      { name: '#1', storeInfo: 'магазин 111' },
      { name: '#2', storeInfo: 'магазин 222' }
    ]
  }
};

function getCurrentCoords(coord, treatAddress) {
  console.log(coord.country);
  treatAddress(coord.address);
}

function getAddress(address, treatSZip) {
  console.log(address.street);
  treatSZip(address);
}

function getStores(address, treatStores) {
  treatStores(address.stores);
}

function getStoreinfo(store, treatStoreInfo) {
  console.log(store.name);
  treatStoreInfo(store.storeInfo);
}

getCurrentCoords(coord, function (coords) {
  getAddress(coords, function (address) {
    getStores(address, function (stores) {
      stores.forEach(function (store) {
        getStoreinfo(store, function (storeInfo) {
          console.log(storeInfo);
        });
      });
    });
  });
});
