function isValidSudoku(board) {
  let isValid = false;

  // we can iterate through each row and validate the repetitive nature
  // need to validate no repetition is there in row and column
  let rowSet = {};
  let colSet = {};
  let gridSet = {};

  // as per the approach, we have 9X9 matrix
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // need to iterate through each element in row
      console.log({ currentElement: board[i][j], i, j });
      if (board[i][j] !== ".") {
        if (!rowSet[i]) {
          rowSet[i] = new Set();
        }
        if (!colSet[j]) {
          colSet[j] = new Set();
        }
        if (!gridSet[`${Math.floor(i / 3)},${Math.floor(j / 3)}`]) {
          gridSet[`${Math.floor(i / 3)},${Math.floor(j / 3)}`] = new Set();
        }
        if (
          !rowSet[i]?.has(board[i][j]) &&
          !colSet[j]?.has(board[i][j]) &&
          !gridSet[`${Math.floor(i / 3)},${Math.floor(j / 3)}`].has(board[i][j])
        ) {
          rowSet[i].add(board[i][j]);
          colSet[j].add(board[i][j]);
          gridSet[`${Math.floor(i / 3)},${Math.floor(j / 3)}`].add(board[i][j]);
        } else {
          console.log({ rowSet, colSet, gridSet });
          return false;
        }
      }
    }
  }
  return true;
}

console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
