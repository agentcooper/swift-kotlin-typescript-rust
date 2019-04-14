use std::collections::HashMap;
use std::collections::HashSet;

#[derive(Hash, PartialEq, Eq)]
enum Food {
  Vegetable,
  Fruit,
  FastFood,
}

fn main() {
  let mut vegetables = HashSet::new();
  vegetables.insert("🍅");
  vegetables.insert("🌽");

  let mut fruits = HashSet::new();
  fruits.insert("🍌");
  fruits.insert("🍏");

  let mut farm = HashMap::new();
  farm.insert(Food::Vegetable, vegetables);
  farm.insert(Food::Fruit, fruits);

  if let Some(vegetables) =
    farm.get(&Food::Vegetable)
  {
    if vegetables.contains("🍅") {
      println!("We have tomatoes!");
    }
  }
}
