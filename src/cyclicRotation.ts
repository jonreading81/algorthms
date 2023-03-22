export const cyclicRotation = (arr: number[], n: number) => {
  const result: number[] = [];
  const start = arr.length - (n % arr.length);

  for (let i = start; i < arr.length; i++) {
    result.push(arr[i]);
  }
  for (let i = 0; i < start; i++) {
    result.push(arr[i]);
  }

  //   const offset = arr.length - (n % arr.length);

  //   arr.forEach((val, index) => {
  //     const newIndex =
  //       index < offset ? arr.length - (offset - index) : index - offset;
  //     result[newIndex] = val;
  //   });

  return result;
};
