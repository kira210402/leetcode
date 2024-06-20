/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  const result = [];
  const diagonals = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const sum = i + j;
      if (!diagonals[sum]) {
        diagonals[sum] = [];
      }
      diagonals[sum].push(mat[i][j]);
    }
  }
  for (let i = 0; i < diagonals.length; i++) {
    if (i % 2 === 0) {
      result.push(...diagonals[i].reverse());
    } else {
      result.push(...diagonals[i]);
    }
  }
  return result;
};
