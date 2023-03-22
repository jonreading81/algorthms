export const radixSort = (arr: number[]) => {
  let result = [...arr];
  const maxDigits = mostDigits(arr);

  for (let digit = 0; digit < maxDigits; digit++) {
    result = flattenBuckets(assignValuesToBucketsForDigit(result, digit));
  }
  return result;
};

const flattenBuckets = (buckets: number[][]) =>
  buckets.reduce((arr, bucket) => [...arr, ...bucket], []);

const assignValuesToBucketsForDigit = (values: number[], digit: number) =>
  values.reduce<number[][]>(
    (buckets, num) => {
      buckets[getDigit(num, digit)].push(num);
      return buckets;
    },
    Array.from({length: 10}, () => [])
  );

const getDigit = (num: number, digit: number) =>
  Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;

const digitCount = (num: number) => Math.floor(Math.log(Math.abs(num))) + 1;

const mostDigits = (arr: number[]) =>
  arr.reduce((max, num) => Math.max(digitCount(num), max), 0);
