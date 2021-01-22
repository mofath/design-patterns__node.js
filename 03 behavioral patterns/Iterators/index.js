var Item = require("./Item");
var Iterator = require("./Iterator");
require("readline").emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.log('\x1b[33m%s\x1b[0m', `Press any direction key...`);  

var inventory = new Iterator([
  new Item("Poles", 9.99),
  new Item("Skis", 799.99),
  new Item("Boots", 799.99),
  new Item("Burgers", 5.99),
  new Item("Fries", 2.99),
  new Item("Shake", 4.99),
  new Item("Jeans", 59.99),
  new Item("Shoes", 39.99),
]);

process.stdin.on("keypress", (str, key) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);

  switch (key.name) {
    case "right":
      inventory.next().writeLn();
      break;

    case "left":
      inventory.prev().writeLn();
      break;

    case "down":
      inventory.last().writeLn();
      break;

    case "up":
      inventory.first().writeLn();
      break;

    case "c":
      if (key.ctrl) {
        process.exit();
      }
  }
});
