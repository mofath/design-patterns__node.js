class MenuItem {
  constructor(name, price) {
    this._name = name;
    this._price = price;
  }

  get total() {
    return this._price;
  }

  print() {
    console.log(`${this._name} $${this._price}`);
  }
}

module.exports = MenuItem;

