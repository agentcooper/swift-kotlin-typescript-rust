protocol Stackable {
  associatedtype T
  mutating func push(_ item: T)
  mutating func pop() -> T?
  func peak() -> T?
}

struct Stack<Element>: Stackable {
  var items: [Element] = []

  mutating func push(_ item: Element) {
    items.append(item)
  }

  mutating func pop() -> Element? {
    return items.popLast()
  }

  func peak() -> Element? {
    return items.last
  }
}

var s1 = Stack<Int>()
s1.push(1)
s1.push(2)
s1.pop()
print(s1.peak()!)
