/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  width;

  constructor(width) {
    super(width ** 2, width * 4);
    this.width = width;
  }

  describe() {
    return `The area is ${this.area} and the perimeter is ${this.perimeter}. The width is ${this.width}.`;
  }
}

const square = new Square(5);
console.log(square.describe());
