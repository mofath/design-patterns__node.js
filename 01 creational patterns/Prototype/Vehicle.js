class Vehicle {
  constructor(model = "unknown") {
    this._model = model;
    this._components = [];
  }

  set productionYear(value) {
    this._year = value;
  }

  get productionYear() {
    return this._year;
  }

  get components() {
    return this._components.join(", ");
  }

  addComponent(component) {
    this._components.push(component);
  }

  clone() {
    let proto = Object.getPrototypeOf(this);
    let cloned = Object.create(proto);

    cloned._model = this._model;
    cloned._components = [...this._components];

    return cloned;
  }
}

module.exports = Vehicle;
