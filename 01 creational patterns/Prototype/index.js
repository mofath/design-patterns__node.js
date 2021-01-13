const VehiclePrototype = require("./VehiclePrototype");

let car1 = VehiclePrototype.clone();
car1.model = "x3";
car1.addComponent("air bag");

let car2 = VehiclePrototype.clone();
car2.model = "x6";
car2.addComponent("sunroof");

console.log(`${car1.model}: ${car1.components}`);
console.log(`${car2.model}: ${car2.components}`);
