const merge = (left: number[], right: number[]) => {
  let leftIndex = 0;
  let rightIndex = 0;
  let result = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    const leftElement = left[leftIndex];
    const rightElement = right[rightIndex];

    if (leftElement < rightElement) {
      result.push(leftElement);
      leftIndex++;
    } else {
      result.push(rightElement);
      rightIndex++;
    }
  }

  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
};

export const mergeSort = (arr: number[]) => {
  if (arr.length < 1) {
    return arr;
  }

  const midPoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midPoint);
  const right = arr.slice(midPoint);

  return merge(left, right);
};
