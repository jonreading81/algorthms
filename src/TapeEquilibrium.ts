export const TapeEquilibrium = (arr: number[]) => {
  const total = arr.reduce((sum, val) => sum + val, 0);
  let leftTotal = 0;
  let minDifference = Infinity;

  arr.slice(0, arr.length - 1).forEach(val => {
    leftTotal += val;
    const rightTotal = total - leftTotal;
    const difference = Math.abs(leftTotal - rightTotal);

    minDifference = Math.min(minDifference, difference);
  });

  return minDifference;
};
