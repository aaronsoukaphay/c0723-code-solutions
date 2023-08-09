/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  radius;

  constructor(radius) {
    super(Math.PI * radius ** 2, 2 * Math.PI * radius);
    this.radius = radius;
  }

  describe() {
    return `The area is ${this.area} and the perimeter is ${this.perimeter}. The radius is ${this.radius}.`;
  }
}

const circle = new Circle(3);
console.log(circle.describe());
