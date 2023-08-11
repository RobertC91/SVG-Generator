// Import shapes
const Shape = require('./shapes')

//Jest test for Triangle, Circle, and Square
describe("Triangle", () => {
  it(`should render a triangle`, () => {
    const triangle = new Shape.Triangle("A", "red")
    expect(triangle.render())
      .toBe(`<polygon points="100,0 200,200 0,200" fill="red" />`);
  });
});

describe('Circle', () => {
  it( `should render a circle`, () => {
    const circle = new Shape.Circle("B", "red")
    expect(circle.render())
      .toBe(`<circle cx="100" cy="150" r="95" fill="red" />`)
  })
})

describe('Square', () => {
  it('should render a square', () => {
    const square = new Shape.Square("C", "red")
    expect(square.render())
      .toBe(`<rect width="200" height="200" fill="red" />`)
  })
})
