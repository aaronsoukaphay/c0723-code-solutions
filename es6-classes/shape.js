/* exported Shape */

class Shape {
  area;
  perimeter;

  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `The area is ${this.area} and the perimeter is ${this.perimeter}. The width is ${this.width}.`;
  }
}

const shape = new Shape();
console.log(shape.describe());
