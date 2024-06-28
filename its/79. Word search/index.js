/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rows = board.length;
  const columns = board[0].length;
  function dfs(r, c, k) {
    if (k === word.length) return true;
    if (r < 0 || c < 0 || r >= rows || c >= columns || board[r][c] !== word.charAt(k)) return false;

    const temp = board[r][c];
    board[r][c] = '\0';
    let result = dfs(r + 1, c, k + 1) ||
      dfs(r - 1, c, k + 1) ||
      dfs(r, c + 1, k + 1) ||
      dfs(r, c - 1, k + 1);

    board[r][c] = temp;
    return result;
  }

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < columns; ++j) {
      if (dfs(i, j, 0)) return true;
    }
  }
    return false;
};
