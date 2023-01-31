export const removeDuplicates = (values: number[]) => {
  //   const duplicates: {[Key: string]: boolean} = {};
  //   const result: number[] = [];

  //   for (let value of values) {
  //     if (!duplicates[value]) {
  //       duplicates[value] = true;
  //       result.push(value);
  //     }
  //   }

  //   return result;

  return [...new Set(values)];
};
