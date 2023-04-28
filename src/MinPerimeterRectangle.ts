export function MinPerimeterRectangle(n: number) {
  let min = Infinity;

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      const perimeter = 2 * (i + n / i);
      min = Math.min(min, perimeter);
    }
  }

  return min;
}
