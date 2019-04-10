function map<T, U>(
  arr: Array<T>,
  f: (item: T) => U
): Array<U> {
  const result = [];
  for (const item of arr) {
    result.push(f(item));
  }
  return result;
}

const newArr = map([1, 2, 3], n => n * 2);
console.log(newArr);
