enum Shape {
    case Square(side: Double)
    case Circle(radius: Double)
}

let shapes = [
    Shape.Square(side: 2),
    Shape.Circle(radius: 4)
]

func getArea(_ shape: Shape) -> Double {
    switch shape {
    case .Circle(radius: let r):
        return Double.pi * r * r
    case .Square(side: let s):
        return s * s
    }
}

let totalArea = shapes.reduce(0, {
    (sum: Double, shape: Shape) in
    sum + getArea(shape)
})

print(totalArea)
