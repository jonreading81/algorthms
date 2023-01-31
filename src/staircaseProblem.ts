export const staircaseProblem = (n: number): number => {
  if (n < 4) {
    return n;
  }
  return staircaseProblem(n - 1) + staircaseProblem(n - 2);
};
