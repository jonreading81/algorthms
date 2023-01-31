type Result = [number, number][];
export const cartesianProuct = (a: number[], b: number[]): Result => {
  const result: Result = [];

  a.forEach(first => {
    b.forEach(second => {
      result.push([first, second]);
    });
  });

  return result;
};
