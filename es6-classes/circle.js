/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  radius;

  constructor(radius) {
    super(Math.PI * radius ** 2, 2 * Math.PI * radius);
    this.radius = radius;
  }

  describe() {
    return `${super.describe()}, Radius: ${this.radius}`;
  }
}

const circle = new Circle(3);
console.log(circle.describe());
