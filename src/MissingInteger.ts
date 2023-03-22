export const MissingInteger = (arr: number[]) => {
  const numbers: {[key: string]: boolean} = {};

  arr.forEach(num => {
    numbers[String(num)] = true;
  });

  for (let i = 1; i < 1000000; i++) {
    if (!numbers[String(i)]) {
      return i;
    }
  }

  return 0;
};
