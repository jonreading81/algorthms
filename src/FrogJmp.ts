/*

 X = 10
  Y = 85
  D = 30

  */

export const FrogJmp = (start: number, end: number, jump: number) => {
  const distance = end - start;
  const jumps = Math.ceil(distance / jump);

  return jumps;
};
