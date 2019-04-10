trait Stackable<T> {
  fn push(&mut self, item: T) -> ();
  fn pop(&mut self) -> Option<T>;
  fn peak(&self) -> Option<&T>;
}

struct Stack<T> {
  items: Vec<T>,
}

impl<T> Stackable<T> for Stack<T> {
  fn push(&mut self, item: T) {
    self.items.push(item);
  }

  fn pop(&mut self) -> Option<T> {
    return self.items.pop();
  }

  fn peak(&self) -> Option<&T> {
    return self.items.last();
  }
}

impl<T> Stack<T> {
  fn new() -> Stack<T> {
    Stack { items: Vec::new() }
  }
}

fn main() {
  let mut s1 = Stack::new();
  s1.push(1);
  s1.push(2);
  s1.pop();
  print!("{:?}", s1.peak())
}
