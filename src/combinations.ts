export const combinations = (arr: number[]): number[][] => {
  if (arr.length === 0) {
    return [[]];
  }

  const firstElement = arr[0];
  const rest = arr.slice(1);
  const combinationWithoutFirstElement = combinations(rest);

  const combinationWithFirstElement = combinationWithoutFirstElement.reduce<
    number[][]
  >((result, combination) => [...result, [...combination, firstElement]], []);

  return combinationWithoutFirstElement.concat(combinationWithFirstElement);
};
