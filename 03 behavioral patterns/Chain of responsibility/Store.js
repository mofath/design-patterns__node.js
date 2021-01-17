const Storage = require("./Storage");

class Store {
  constructor(name, inventory = []) {
    this._name = name;

    const floor = new Storage("store floor", inventory.floor);
    const backroom = new Storage("store backroom", inventory.floor);
    const localStore = new Storage("nearby store", inventory.floor, 1);
    const warehouse = new Storage("warehouse", inventory.floor, 4);

    floor.setNext(backroom);
    backroom.setNext(localStore);
    localStore.setNext(warehouse);

    this._storage = floor;
  }

  find(itemName) {
    return this._storage.find(itemName);
  }
}

module.exports = Store;
