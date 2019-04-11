protocol Stackable {
  associatedtype T
  mutating func push(_ item: T)
  mutating func pop() -> T?
  func peak() -> T?
}

struct Stack<T>: Stackable {
  var items: [T] = []

  mutating func push(_ item: T) {
    items.append(item)
  }

  mutating func pop() -> T? {
    return items.popLast()
  }

  func peak() -> T? {
    return items.last
  }
}

var s1 = Stack<Int>()
s1.push(1)
s1.push(2)
s1.pop()
print(s1.peak()!)
