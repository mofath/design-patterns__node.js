
const Rectangle = require("./Rectangle");
const Square = require("./Square");
const Triangle = require("./Triangle");
const Circle = require("./Circle");

var Shape = function () {};

function ShapeFactory() {
    this.createShape = function (shapeType) {
        var shape;
 
        if (shapeType === 'rectangle') {
            shape = new Rectangle();
        } else if (shapeType === 'square') {
            shape = new Square();
        } else if (shapeType === 'triangle') {
            shape = new Triangle();
        } else if (shapeType === 'circle') {
            shape = new Circle();
        } else {
            shape = new Shape();
        }

        if (typeof shape.draw === 'undefined') {
            shape.draw = function () {
                console.log('This the default implementation, and the type is:', shapeType);
            }
        }
 
        return shape;
    }
}


module.exports = ShapeFactory;