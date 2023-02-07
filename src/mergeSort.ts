const merge = (_left: number[], _right: number[]): number[] => {
  const left = _left.slice(0);
  const right = _right.slice(0);
  let result: number[] = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift() as number);
    } else {
      result.push(right.shift() as number);
    }
  }

  return [...result, ...left, ...right];
};

export const mergeSort = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return arr;
  }

  const midPoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midPoint);
  const right = arr.slice(midPoint);

  return merge(mergeSort(left), mergeSort(right));
};
