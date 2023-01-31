export const power = (base: number, exp: number): number =>
  exp === 1 ? base : base * power(base, exp - 1);
