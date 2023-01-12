async function sumParallel() {
  const aPromise = f(100, 1);
  const bPromise = f(200, 5);
  const [a, b] = await Promise.all([
    aPromise,
    bPromise,
  ]);
  return a + b;
}

async function f(v: number, s: number) {
  console.log(`Fetching ${v}...`);
  // delay
  await new Promise((resolve) => {
    setTimeout(resolve, s * 1000);
  });
  return v;
}

sumParallel().then(console.log);
