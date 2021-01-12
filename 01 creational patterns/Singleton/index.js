const Singleton = require("./Singleton");

const instanceOne = new Singleton("One");
const instanceTwo = new Singleton("Two");
const instanceThree = new Singleton();

console.log(`Name of instanceOne is "${instanceOne.getName()}"`);
console.log(`Name of instanceTwo is "${instanceTwo.getName()}"`);
console.log(`Name of instanceThree is "${instanceThree.getName()}"`);