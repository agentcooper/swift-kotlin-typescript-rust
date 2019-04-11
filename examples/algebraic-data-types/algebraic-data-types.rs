enum Shape {
  Square { side: f64 },
  Circle { radius: f64 },
}

fn get_area(shape: &Shape) -> f64 {
  return match shape {
    Shape::Square { side } => side * side,
    Shape::Circle { radius } => {
      std::f64::consts::PI * radius * radius
    }
  };
}

fn main() {
  let shapes: Vec<Shape> = vec![
    Shape::Square { side: 2.0 },
    Shape::Circle { radius: 4.0 },
  ];

  let total_area =
    shapes.iter().fold(0f64, |sum, shape| {
      sum + get_area(&shape)
    });

  print!("{:?}", total_area)
}
