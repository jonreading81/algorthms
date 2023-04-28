export function CountFactors(n: number) {
  let i = 1;
  let result = 0;

  while (i * i < n) {
    if (n % i == 0) {
      result += 2;
    }
    i++;
  }

  if (i * i == n) {
    result++;
  }

  return result;
}
