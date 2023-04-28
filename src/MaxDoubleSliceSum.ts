export function MaxDoubleSliceSum(values: number[]) {
  const sumsFromLeft = values.map(i => 0);
  const sumsFromRight = values.map(i => 0);

  for (let i = 1; i < values.length - 1; i++) {
    sumsFromLeft[i] = Math.max(sumsFromLeft[i - 1] + values[i], 0);
  }
  for (let i = values.length - 2; i > 0; i--) {
    sumsFromRight[i] = Math.max(sumsFromRight[i + 1] + values[i], 0);
  }

  function getDoubleSumForIndex(i: number) {
    return sumsFromLeft[i - 1] + sumsFromRight[i + 1];
  }

  let max = getDoubleSumForIndex(1);

  for (let i = 2; i < values.length - 1; i++) {
    const doubleSum = getDoubleSumForIndex(i);
    max = Math.max(max, doubleSum);
  }

  return max;
}
