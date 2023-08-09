/* exported Shape */

class Shape {
  area;
  perimeter;

  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `Area: ${this.area}, Perimeter: ${this.perimeter}`;
  }
}

const shape = new Shape();
console.log(shape.describe());
