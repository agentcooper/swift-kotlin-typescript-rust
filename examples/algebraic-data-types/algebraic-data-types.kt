sealed class Shape {
  data class Square(
    val side: Double
  ) : Shape()
  data class Circle(
    val radius: Double
  ) : Shape()
}

fun getArea(shape: Shape): Double {
  return when (shape) {
    is Shape.Square ->
      shape.side * shape.side
    is Shape.Circle ->
      kotlin.math.PI * shape.radius * shape.radius
  }
}

fun main() {
  val shapes = listOf(
    Shape.Square(2.0),
    Shape.Circle(4.0)
  )
  val totalArea = shapes.fold(0.0) {
    sum, shape -> sum + getArea(shape)
  }
  println(totalArea)
}
