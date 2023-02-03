interface Item {
  weight: number;
  value: number;
}

export const knapsack = (items: Item[], maxWeight: number) => {
  const solutions: number[][] = [];

  items.forEach((item, itemIndex) => {
    solutions[itemIndex] = [];

    for (let weight = 0; weight <= maxWeight; weight++) {
      const prevMaxValue = solutions?.[itemIndex - 1]?.[weight] ?? 0;
      solutions[itemIndex][weight] =
        item.weight > weight
          ? prevMaxValue
          : Math.max(
              (solutions?.[itemIndex - 1]?.[weight - item.weight] ?? 0) +
                item.value,
              prevMaxValue
            );
    }
  });

  return solutions[solutions.length - 1][maxWeight];
};

const getSolutions = (items: Item[], maxWeight: number): number[] => {
  if (items.length === 0) {
    return [];
  }

  const currentItem = items[items.length - 1];
  const otherItems = items.slice(0, items.length - 1);
  const previousSoultion = getSolutions(otherItems, maxWeight);
  const currentSolution: number[] = [];

  for (let weight = 0; weight <= maxWeight; weight++) {
    const prevMaxValue = previousSoultion?.[weight] ?? 0;
    currentSolution.push(
      currentItem.weight > weight
        ? prevMaxValue
        : Math.max(
            (previousSoultion?.[weight - currentItem.weight] ?? 0) +
              currentItem.value,
            prevMaxValue
          )
    );
  }

  return currentSolution;
};

export const knapsackRecursive = (items: Item[], maxWeight: number): number => {
  const solutions = getSolutions(items, maxWeight);

  return solutions[solutions.length - 1];
};
