export const PermCheck = (arr: number[]) => {
  const numbersFound: {[key: string]: boolean} = {};
  let numbersFoundCount = 0;

  arr.forEach(val => {
    const key = String(val);
    if (val <= arr.length && !numbersFound[key]) {
      numbersFound[key] = true;
      numbersFoundCount++;
    }
  });

  return numbersFoundCount === arr.length ? 1 : 0;
};
