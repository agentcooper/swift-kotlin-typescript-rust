enum Food {
  vegetable,
  fruit,
  fastfood
}

const farm = new Map([
  [Food.vegetable, new Set(["🍅", "🌽"])],
  [Food.fruit, new Set(["🍌", "🍏"])]
]);

const vegetables = farm.get(Food.vegetable);
if (vegetables) {
  if (vegetables.has("🍅")) {
    console.log("We have tomatoes!");
  }
}
