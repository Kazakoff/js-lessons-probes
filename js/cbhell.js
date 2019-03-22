const coord = {
  country: 'RB',
  address: {
    street: 'Mosk',
    zip: 1234,
    stores: [
      { name: '#1', storeInfo: 'магазин 111' },
      { name: '#2', storeInfo: 'магазин 222' }
    ]
  }
};

function getCurrentCoords(coord1, treatAddress) {
  console.log(coord1.country);
  treatAddress(coord1.address);
}

function getAddress(address, treatStores) {
  console.log(address.street);
  treatStores(address.stores);
}

function getStores(address, treatStores) {
  console.log(address.street);
  treatStores(address);
}

function getStoreinfo(store, treatStoreInfo) {
  console.log(store.name);
  treatStoreInfo(store.storeInfo);
}

getCurrentCoords(coord, function(coords) {
  getAddress(coords, function(address) {
    getStores(address, function(stores) {
      stores.forEach(function(store) {
        getStoreinfo(store, function(storeInfo) {
          console.log(storeInfo);
        });
      });
    });
  });
});
