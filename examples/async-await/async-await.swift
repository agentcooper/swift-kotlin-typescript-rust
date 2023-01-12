import Foundation

func sumParallel() async -> Int {
  async let a = f(100, 1)
  async let b = f(200, 5)
  return await a + b
}

func f(_ v: Int, _ s: Int) async -> Int
{
  print("Fetching \(v)...")
  // delay
  let ns = UInt64(s * 1_000_000_000)
  try! await Task.sleep(nanoseconds: ns)
  return v
}

@main struct Main {
  static func main() async {
    let result = await sumParallel()
    print(result)
  }
}
