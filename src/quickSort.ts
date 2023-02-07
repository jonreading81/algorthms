export const quickSort = (_arr: number[]): number[] => {
  if (_arr.length < 2) {
    return _arr;
  }

  const arr = _arr.slice(0);
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
