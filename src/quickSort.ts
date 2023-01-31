export const quickSort = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr.pop() ?? 0;
  const left = [];
  const right = [];

  for (let val of arr) {
    if (val < pivot) {
      left.push(val);
    } else {
      right.push(val);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};
