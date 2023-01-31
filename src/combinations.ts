export const combinations = (arr: number[]): number[][] => {
  if (arr.length === 0) {
    return [arr];
  }

  const firstElement = arr[0];
  const rest = arr.slice(1);

  const combinationWithoutFirstElement = combinations(rest);

  const combinationWithFirstElement = combinationWithoutFirstElement.reduce<
    number[][]
  >(
    (combinations, combination) => [
      ...combinations,
      [...combination, firstElement],
    ],
    []
  );

  return [...combinationWithoutFirstElement, ...combinationWithFirstElement];
};
