const ShapeFactory = require("./ShapeFactory");

var factory = new ShapeFactory();

var rectangle = factory.createShape('rectangle');
var square = factory.createShape('square');
var triangle = factory.createShape('triangle');
var circle = factory.createShape('circle');
var hexagon = factory.createShape('hexagon');

rectangle.draw();
square.draw();
triangle.draw();
circle.draw();
hexagon.draw();
