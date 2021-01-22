var Store = require("./Store");
var Shopper = require("./Customer");
var Mall = require("./Mall");

var valleyMall = new Mall();

var adidas = new Store("Adidas");
var zara = new Store("Zara");

var ali = new Shopper("Ali");
var ahmed = new Shopper("Ahmed");
var heba = new Shopper("Heba");
var sara = new Shopper("Sara");

// Mall keep tracks of all sales in the mall 
adidas.subscribe(valleyMall);
zara.subscribe(valleyMall);

adidas.subscribe(ali);
adidas.subscribe(ahmed);

zara.subscribe(heba);
zara.subscribe(sara);
zara.subscribe(ali);

adidas.sale(20);
zara.sale(50);

console.log(valleyMall.sales);
