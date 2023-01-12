use tokio::time::{sleep, Duration};

async fn sum_parallel() -> u64 {
    let a_future = f(100, 1);
    let b_future = f(200, 5);
    let (a, b) = futures::join!(a_future, b_future);
    return a + b
}

async fn f(v: u64, s: u64) -> u64 {
    println!("Fetching {v}...");
    // delay
    sleep(Duration::from_secs(s)).await;
    return v
}

#[tokio::main]
async fn main() {
    let result = sum_parallel().await;
    print!("{}", result)
}