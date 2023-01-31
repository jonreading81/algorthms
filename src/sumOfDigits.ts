export const sumOfDigits = (num: number): number =>
  num
    .toString()
    .split('')
    .reduce((result, value) => {
      const sum = result + Number(value);
      return sum < 10 ? sum : sumOfDigits(sum);
    }, 0);
