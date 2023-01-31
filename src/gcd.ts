export const gcd = (a: number, b: number): number => {
  if (!a) return b;
  if (!b) return a;

  return gcd(b, a % b);
};
