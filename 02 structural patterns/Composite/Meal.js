class Meal {
  constructor(name = "unknown", items = []) {
    this._name = name;
    this._items = items;
  }

  get total() {
    return this._items.reduce((acc, next) => (acc += next.total), 0);
  }

  print() {
    console.log(`${this._name.toUpperCase()}`);
    this._items.forEach((item) =>{
      item.print()
    });
  }
}

module.exports = Meal;
