/*


6, [1, 3, 1, 4, 2, 3, 5, 4]

*/

export const FrogRiverOne = (destination: number, leaves: number[]) => {
  const landedLeaves: {[key: string]: boolean} = {};
  let landedLeavesCount = 0;

  return leaves.findIndex(val => {
    const key = String(val);

    if (!landedLeaves[key]) {
      landedLeaves[key] = true;
      landedLeavesCount++;
      if (landedLeavesCount === destination) {
        return true;
      }
    }

    return false;
  });
};
