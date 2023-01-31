export const search = (
  arr: number[],
  target: number,
  leftIndex: number,
  rightIndex: number
): number => {
  if (leftIndex > rightIndex) {
    return -1;
  }
  const midPoint = Math.floor((leftIndex + rightIndex) / 2);
  const element = arr[midPoint];

  if (element === target) {
    return midPoint;
  } else if (target < element) {
    return search(arr, target, leftIndex, rightIndex - midPoint);
  } else {
    return search(arr, target, leftIndex + midPoint + 1, rightIndex);
  }
};

export const binarySearch = (arr: number[], target: number) => {
  return search(arr, target, 0, arr.length - 1);
};
