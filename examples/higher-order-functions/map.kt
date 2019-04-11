fun <T, U>map(
  arr: List<T>,
  f: (item: T) -> U
): List<U> {
  var result = mutableListOf<U>()
  for (item: T in arr) {
    result.add(f(item))
  }
  return result
}

fun main() {
  var newList = map(
    listOf(1, 2, 3),
    { n : Int -> n * 2 }
  )
  print(newList)
}
