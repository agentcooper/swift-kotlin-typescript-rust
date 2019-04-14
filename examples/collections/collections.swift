enum Food {
  case vegetable
  case fruit
  case fastfood
}

var farm: [Food:Set<String>] = [
  .vegetable: Set(["🍅", "🌽"]),
  .fruit: Set(["🍌", "🍏"])
]

if let vegetables = farm[.vegetable] {
  if (vegetables.contains("🍅")) {
    print("We have tomatoes!")
  }
}
