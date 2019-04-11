interface Stackable<T> {
  push(item: T): void;
  pop(): T | null;
  peak(): T | null;
}

class Stack<T> implements Stackable<T> {
  items: T[] = [];

  push(item: T) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop() || null;
  }

  peak() {
    return this.items.length > 0
      ? this.items[this.items.length - 1]
      : null;
  }
}

const s1 = new Stack<number>();
s1.push(1);
s1.push(2);
s1.pop();
console.log(s1.peak());
