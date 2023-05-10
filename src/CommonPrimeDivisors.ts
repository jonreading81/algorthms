const gcd = (x: number, y: number): number => (!y ? x : gcd(y, x % y));

function reduceToLowestDivisor(value: number, divisor: number): number {
  const nextDivisor = gcd(value, divisor);

  return nextDivisor === 1
    ? value
    : reduceToLowestDivisor(value / nextDivisor, nextDivisor);
}

function haveCommonPrimeDivisors(a: number, b: number) {
  const divisor = gcd(a, b);

  return (
    a === b ||
    (reduceToLowestDivisor(a, divisor) === 1 &&
      reduceToLowestDivisor(b, divisor) === 1)
  );
}

export const solution = (a: number[], b: number[]) =>
  a.reduce(
    (count, _, index) =>
      haveCommonPrimeDivisors(a[index], b[index]) ? count + 1 : count,
    0
  );
