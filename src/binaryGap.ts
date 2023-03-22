export const binaryGap = (n: number) => {
  const digits = n.toString(2).split('').map(Number);
  let maxGap = 0;
  let count = 0;

  digits.forEach(digit => {
    if (digit === 1) {
      maxGap = Math.max(maxGap, count);
      count = 0;
    } else {
      count++;
    }
  });

  return maxGap;
};
