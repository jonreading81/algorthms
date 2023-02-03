export const longestCommonSubstring = (strA: string, strB: string) => {
  const table = Array.from({length: strA.length + 1}, () =>
    new Array(strB.length + 1).fill('')
  );

  for (let a = 1; a < table.length; a++) {
    for (let b = 1; b < table[a].length; b++) {
      let result: string;
      const aboveChar = table[a - 1][b];
      const adjecentChar = table[a][b - 1];
      const diaganolChar = table[a - 1][b - 1];

      if (strA[a - 1] === strB[b - 1]) {
        result = diaganolChar + strA[a - 1];
      } else if (aboveChar.length > adjecentChar.length) {
        result = aboveChar;
      } else {
        result = adjecentChar;
      }

      table[a][b] = result;
    }
  }

  return table[table.length - 1][strB.length].length;
};

// const getSolutions = (strA: string, strB: string): string[] => {
//   if (strA.length === 0) {
//     return Array(strB.length + 1).fill('');
//   }

//   const letter = strA.slice(strA.length - 1);
//   const otherLetters = strA.slice(0, strA.length - 1);
//   const previousSolutions = getSolutions(otherLetters, strB);
//   const solutions = [''];

//   for (let i = 0; i < strB.length; i++) {
//     let result: string;
//     const lastSolution = solutions[solutions.length - 1];
//     const previousSolution = previousSolutions[i + 1];

//     if (letter === strB[i]) {
//       result = previousSolutions[i] + letter;
//     } else if (lastSolution.length > previousSolution.length) {
//       result = lastSolution;
//     } else {
//       result = previousSolution;
//     }
//     solutions.push(result);
//   }

//   return solutions;
// };

// export const longestCommonSubstring = (strA: string, strB: string) => {
//   const solutions = getSolutions(strA, strB);
//   return solutions[solutions.length - 1].length;
// };
