const Vehicle = require("./Vehicle");

const VehiclePrototype = new Vehicle();
VehiclePrototype.addComponent("engine");
VehiclePrototype.addComponent("gear box");
VehiclePrototype.addComponent("steering");

module.exports = VehiclePrototype;