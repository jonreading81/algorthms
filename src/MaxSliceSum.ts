export function maxSliceSum(arr: number[]) {
  let maxSliceEnding = arr[0];
  let maxSlice = maxSliceEnding;

  for (let i = 1; i < arr.length; i++) {
    maxSliceEnding = Math.max(arr[i], maxSliceEnding + arr[i]);
    maxSlice = Math.max(maxSlice, maxSliceEnding);
  }
  return maxSlice;
}


//  const values = [3, 2, 6, -1, 4, 5, -1, 2];