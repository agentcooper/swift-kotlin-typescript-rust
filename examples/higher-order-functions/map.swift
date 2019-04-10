func map<T, U>(
  _ arr: [T],
  _ f: (T) -> U) -> [U] {
    var result: [U] = []
    for item in arr {
        result.append(f(item))
    }
    return result
}

let newArr = map(
  [1, 2, 3],
  { (n: Int) in n * 2 }
)
print(newArr)
