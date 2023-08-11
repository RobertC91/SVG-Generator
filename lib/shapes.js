// Use Shape class to set the base parameters of the SVG shapes
class Shape {
  constructor(text, shapeColor) {
    this.text = text;
    this.shapeColor = shapeColor;
  }
}

// Use render to display the Triangle, Circle and Square
class Triangle extends Shape {
  render() {
    return `<polygon points="100,0 200,200 0,200" fill="${this.shapeColor}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="100" cy="150" r="95" fill="${this.shapeColor}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect width="200" height="200" fill="${this.shapeColor}" />`;
  }
}

module.exports = {
    Triangle,
    Square,
    Circle
}
