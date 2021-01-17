class Storage {
  constructor(name, inventory = [], deliveryTime = 0) {
    this._name = name;
    this._inventory = inventory;
    this._deliveyTime = deliveryTime;
    this._next = null;
  }

  lookInLocalInventory(itemName) {
    const index = this._inventory.map((item) => item.name).indexOf(itemName);
    return this._inventory[index];
  }

  setNext(storage) {
    this._next = storage;
  }

  find(itemName) {
    const found = this.lookInLocalInventory(itemName);
    if (found) {
      return {
        name: found.name,
        qty: found.qty,
        location: this._name,
        deliveryTime:
          this._deliveyTime === 0 ? "now" : `${this._deliveyTime} day(s)`,
      };
    } else if (this._next) {
      return this._next.find(itemName);
    } else {
      return `We do not carry this ${itemName}`;
    }
  }
}

module.exports = Storage;
