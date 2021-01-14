const House = require("./House");

class HouseBuilder {
  constructor(model) {
    this._model = model;
    this._furniture = [];
  }

  buildBasement(basement) {
    console.log(basement);
    this._basement = basement;
    // return this so we can chain it
    // and add other functions
    return this;
  }

  buildingMaterial(metarial) {
    this._material = metarial;
    return this;
  }

  addFurniture(furniture) {
    this._furniture.push(furniture);
    return this;
  }

  build() {
    return new House(this);
  }
}

module.exports = HouseBuilder;
