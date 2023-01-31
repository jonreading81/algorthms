export const findSum = (values: number[], sum: number) => {
  const previousValues: {[Key: string]: boolean} = {};

  for (let value of values) {
    if (previousValues[sum - value]) return true;
    previousValues[value] = true;
  }

  return false;
};
