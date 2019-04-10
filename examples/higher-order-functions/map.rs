fn map<T, U>(
  arr: Vec<T>,
  f: &Fn(&T) -> U,
) -> Vec<U> {
  let mut result = Vec::new();
  for item in arr.iter() {
    result.push(f(item))
  }
  return result;
}

fn main() {
  let new_vec = map(vec![1, 2, 3], &|n| n * 2);
  print!("{:?}", new_vec);
}
