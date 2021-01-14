const HouseBuilder = require("./HouseBuilder");

const IglooHouseBuilder = new HouseBuilder("Igloo House")
  .buildBasement("Ice Bars")
  .buildingMaterial("Ice Blocks")
  .addFurniture("Ice Carvings")
  .build();

  const TipiHouseBuilder  =  new HouseBuilder("Tipi House")
  .buildBasement("Wooden Poles")
  .buildingMaterial("Wood and Ice")
  .addFurniture("Fire Wood")
  .build();
  
console.log(IglooHouseBuilder.toString());
console.log(TipiHouseBuilder.toString());
