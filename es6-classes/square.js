/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    super(width ** 2, width * 4);
    this.width = width;
  }

  describe() {
    return `${super.describe()}, Width: ${this.width}`;
  }
}

const square = new Square(5);
console.log(square.describe());
