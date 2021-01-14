class House {
  constructor(builder) {
    this.model = builder._model;
    this.basement = builder._basement;
    this.metarial = builder._material;
    this.furniture = builder._furniture || [];
  }

  toString() {
    return JSON.stringify(this);
  }
}

module.exports = House;
