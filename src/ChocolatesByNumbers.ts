const gcd = (x: number, y: number): number => (!y ? x : gcd(y, x % y));
const lcm = (x: number, y: number) => (x * y) / gcd(x, y);

export function ChocolatesByNumbers(numChocs: number, moves: number): number {
  return lcm(numChocs, moves) / moves;
}
