const Store = require("./Store");
const inventory = require("./inventory");

const skiShop = new Store("Steep and Deep", inventory);

let searchItem = "ski googles";

const results = skiShop.find(searchItem);
console.log(results);
