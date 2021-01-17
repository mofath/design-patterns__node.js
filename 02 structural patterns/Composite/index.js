const MenuItem = require("./MenuItem");
const Meal = require("./Meal");

const burger = new MenuItem("Burger", 75.0);
const fries = new MenuItem("Fries", 15.0);
const pizza = new MenuItem("Pizza", 100.0);

const burgerCombo = new Meal("Burger combo meal", [burger, fries]);
const kingMeal = new Meal("King meal", [burgerCombo, pizza]);
const order = new Meal("order 01", [
  burgerCombo,
  kingMeal,
  new MenuItem("Fried chicken", 60.0),
]);

console.log(`$${order.total}`);

order.print();
