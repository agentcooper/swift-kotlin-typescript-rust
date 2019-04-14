enum class Food {
  vegetable,
  fruit,
  fastfood
}

val farm = hashMapOf(
  Food.vegetable to setOf("🍅", "🌽"),
  Food.fruit to setOf("🍌", "🍏")
)

fun main() {
  val vegetables = farm[Food.vegetable]
  if (vegetables != null) {
    if (vegetables.contains("🍅")) {
      println("We have tomatoes!")
    }
  }
}
