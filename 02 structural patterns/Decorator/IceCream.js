class IceCream {
  constructor(flavor) {
    this._flavor = flavor;
    this._price = 10;
  }

  describe() {
    console.log("Normal ice cream,", this._flavor, " flavored");
  }

  calculatePrice() {
    return this._price;
  }
}

module.exports = IceCream;
