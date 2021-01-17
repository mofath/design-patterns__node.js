const IceCream = require("./IceCream");
const decorateWith = require("./decorateWith");

let baseIce = new IceCream("vanilla"); //A normal vanilla flavored ice cream...

let vanillaWithNuts = decorateWith(baseIce, "nuts", 5); //... and now we add some nuts on top of it
vanillaWithNuts.describe();
console.log("Total price: ", vanillaWithNuts.calculatePrice())
