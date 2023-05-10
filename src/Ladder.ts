function fib(n: number, p: number) {
  const result = [0, 1, 2];
  let count = result.length;
  const factor = Math.pow(2, p);

  while (count <= n) {
    const value =
      (result[result.length - 1] + result[result.length - 2]) % factor;

    result.push(value);
    count++;
  }
  return result;
}

const getMax = (values: number[]) =>
  values.reduce((max, value) => Math.max(max, value), 0);

export function Ladder(ladders: number[], b: number[]) {
  const maxLadders = getMax(ladders);
  const fibs = fib(maxLadders, getMax(b));

  return ladders.map((steps, index) => {
    const numRoutes = fibs[steps];
    const mod = Math.pow(2, b[index]);
    const result = numRoutes % mod;
    return result;
  });
}
