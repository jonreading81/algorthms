export const OddOccurrencesInArray = (arr: Number[]) => {
  const occurances: {[key: string]: number} = {};

  arr.forEach(val => {
    const key = String(val);
    if (occurances[key]) {
      occurances[key]++;
    } else {
      occurances[key] = 1;
    }
  });

  return Number(Object.keys(occurances).find(key => occurances[key] % 2 !== 0));
};
