interface Stackable<T> {
  fun push(item: T)
  fun pop(): T?
  fun peak(): T?
}

class Stack<T> : Stackable<T> {
  var items: MutableList<T> = mutableListOf()

  override fun push(item: T) {
    items.add(item)
  }

  override fun pop(): T? {
    return items.removeAt(items.size - 1);
  }

  override fun peak(): T? {
    return items.last();
  }
}

fun main() {
  val s1 = Stack<Int>();
  s1.push(1)
  s1.push(2)
  s1.pop()
  println(s1.peak())
}

