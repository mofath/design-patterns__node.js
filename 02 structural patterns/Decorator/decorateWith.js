function decorateWith(object, decoration, decoration_price) {
  object.decoration = decoration;
  //saving the reference to the method so we can use it later
  let oldDescr = object.describe;
  let oldCalcPrice = object.calculatePrice

  object.describe = function () {
    oldDescr.apply(object);
    console.log("With extra", this.decoration);
  };

  
  object.calculatePrice = function() {
    return decoration_price + oldCalcPrice.apply(object)
}
  return object;
}

module.exports = decorateWith;
