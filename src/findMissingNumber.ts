export const findMissingNumber = (values: number[], n: number) => {
  const expected = (n * (n + 1)) / 2;
  const actual = values.reduce((total, value) => total + value, 0);
  const difference = expected - actual;

  return difference === 0 ? -1 : difference;
};
