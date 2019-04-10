const enum ShapeKind {
  Square,
  Circle
}

interface Square {
  kind: ShapeKind.Square;
  side: number;
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

type Shape = Square | Circle;

function Square(side: number): Square {
  return {
    kind: ShapeKind.Square,
    side
  };
}

function Circle(radius: number): Circle {
  return {
    kind: ShapeKind.Circle,
    radius
  };
}

const shapes: Shape[] = [Square(2), Circle(4)];

function getArea(shape: Shape) {
  switch (shape.kind) {
    case ShapeKind.Square:
      return shape.side * shape.side;
    case ShapeKind.Circle:
      return Math.PI * shape.radius ** 2;
  }
}

const totalArea = shapes.reduce(
  (sum, shape) => sum + getArea(shape),
  0
);

console.log(totalArea);
