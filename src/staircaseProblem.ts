export const staircaseProblem = (n: number): number =>
  n < 4 ? n : staircaseProblem(n - 1) + staircaseProblem(n - 2);
