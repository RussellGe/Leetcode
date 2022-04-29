/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function (board, word) {
  if (board.length === 0) return false;
  if (word.length === 0) return true;
  const row = board.length;
  const column = board[0].length;
  for (let i = 0; i < row; i++) {
    if (!board[i].includes(word[0])) continue;
    for (let j = 0; j < column; j++) {
      const res = find(i, j, 0, word);
      if (res) return res;
    }
  }
  return false;
  function find(i, j, current) {
    if (i >= row || j >= column || i < 0 || j < 0) return false;

    const letter = board[i][j];

    if (letter !== word[current]) return false;

    if (current === word.length - 1) return true;
    board[i][j] = null;
    const res =
      find(i + 1, j, current + 1) ||
      find(i - 1, j, current + 1) ||
      find(i, j + 1, current + 1) ||
      find(i, j - 1, current + 1);
    board[i][j] = letter;
    return res;
  }
};
// @lc code=end
