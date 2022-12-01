/**
 * Function to find next matching letter exist for an  adjacent cell
 * @param {*} row, current poiting row
 * @param {*} col, current poiting column
 * @param {*} processedCells, processedCells
 * @param {*} letter, letter to find
 */
const findWordLetter = (
  row,
  col,
  processedCells,
  letter,
  matrix,
  blacklisted
) => {
  row = parseInt(row);
  col = parseInt(col);
  let result = {
    matched: false,
    row: 0,
    col: 0,
  };

  console.log({ row, col, processedCells, letter, matrix });
  if (
    !processedCells.includes(`${row},${col - 1}`) &&
    (!blacklisted[`${row},${col}`] ||
      !blacklisted[`${row},${col}`].includes(`${row},${col - 1}`)) &&
    col - 1 >= 0 &&
    matrix[row][col - 1] == letter
  ) {
    // checking left
    console.log("LEFT");
    result = {
      matched: true,
      row: row,
      col: col - 1,
    };
  } else if (
    !processedCells.includes(`${row},${col + 1}`) &&
    (!blacklisted[`${row},${col}`] ||
      !blacklisted[`${row},${col}`].includes(`${row},${col + 1}`)) &&
    col + 1 < matrix[0].length &&
    matrix[row][col + 1] == letter
  ) {
    // checking right
    console.log("RIGHT");
    result = {
      matched: true,
      row: row,
      col: col + 1,
    };
  } else if (
    !processedCells.includes(`${row - 1},${col}`) &&
    (!blacklisted[`${row},${col}`] ||
      !blacklisted[`${row},${col}`].includes(`${row - 1},${col}`)) &&
    row - 1 >= 0 &&
    matrix[row - 1][col] == letter
  ) {
    // checking top
    console.log("TOP");
    result = {
      matched: true,
      row: row - 1,
      col: col,
    };
  } else if (
    !processedCells.includes(`${row + 1},${col}`) &&
    (!blacklisted[`${row},${col}`] ||
      !blacklisted[`${row},${col}`].includes(`${row + 1},${col}`)) &&
    row + 1 < matrix.length &&
    matrix[row + 1][col] == letter
  ) {
    // checking bottom
    console.log("BOTTOM");
    result = {
      matched: true,
      row: row + 1,
      col: col,
    };
  }

  return result;
};

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  /**
   * Approach:
   * - for a given starting value, we can check for available words and increment the counter down the line
   */

  // find firstElement
  let firstLetterOccurance = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word.charAt(0)) {
        firstLetterOccurance.push(`${i},${j}`);
      }
    }
  }

  // we need to make use of queue
  console.log({ firstLetterOccurance });
  let wordExist = false;
  while (firstLetterOccurance.length && !wordExist) {
    let processedCells = [];
    let blacklisted = {};
    // we need to iterate till the element is not found
    let letterPosition = firstLetterOccurance.shift();
    processedCells.push(letterPosition);

    let row = parseInt(letterPosition.split(",")[0]);
    let col = parseInt(letterPosition.split(",")[1]);
    let matchingCounter = 1; // starting from second letter
    console.log({ row, col });
    if (board[row][col] == word) {
      wordExist = true;
      break;
    }
    // matching for all the words for current first letter occurance
    while (matchingCounter <= word.length && !wordExist) {
      const response = findWordLetter(
        parseInt(row),
        parseInt(col),
        processedCells,
        word.charAt(matchingCounter),
        board,
        blacklisted
      );
      console.log({ response });
      if (!response.matched) {
        if (matchingCounter != 1) {
          matchingCounter--;
          let nonVisitingNode = processedCells.pop();

          row = processedCells[processedCells.length - 1].split(",")[0];
          col = processedCells[processedCells.length - 1].split(",")[1];
          if (blacklisted[`${row},${col}`]) {
            blacklisted[`${row},${col}`].push(
              `${nonVisitingNode.split(",")[0]},${
                nonVisitingNode.split(",")[1]
              }`
            );
          } else {
            blacklisted[`${row},${col}`] = [
              `${nonVisitingNode.split(",")[0]},${
                nonVisitingNode.split(",")[1]
              }`,
            ];
          }

          console.log({ blacklisted, row, col, nonVisitingNode });
          continue;
        } else {
          console.log("NOt matched...");
          break;
        }
      }
      row = response.row;
      col = response.col;
      processedCells.push(`${row},${col}`);
      matchingCounter++;
      console.log({ response, processedCells, matchingCounter, blacklisted });

      if (matchingCounter == word.length) {
        wordExist = true;
      }
    }
  }

  return wordExist;
};

// console.log(
//   exist(
//     [
//       ["A", "B", "C", "E"],
//       ["S", "F", "C", "S"],
//       ["A", "D", "E", "E"],
//     ],
//     "ABCCED"
//   )
// ); //true

// console.log(
//   exist(
//     [
//       ["C", "A", "A"],
//       ["A", "A", "A"],
//       ["B", "C", "D"],
//     ],
//     "AAB"
//   )
// ); //true

console.log(
  exist(
    [
      ["A", "B", "E"],
      ["B", "C", "D"],
    ],
    "ABCDEB"
  )
);

// console.log(
//   exist(
//     [
//       ["A", "B", "C", "E"],
//       ["S", "F", "C", "S"],
//       ["A", "D", "E", "E"],
//     ],
//     "SEE"
//   )
// ); //true

// console.log(
//   exist(
//     [
//       ["A", "B", "C", "E"],
//       ["S", "F", "C", "S"],
//       ["A", "D", "E", "E"],
//     ],
//     "ABCB"
//   )
// ); //false

// console.log(
//   exist(
//     [
//       ["a", "a", "a", "a"],
//       ["a", "a", "a", "a"],
//       ["a", "a", "a", "a"],
//     ],
//     "aaaaaaaaaaaaa"
//   )
// );

// console.log(exist([["a", "a"]], "a")); //true
// console.log(exist([["a", "b"]], "ba")); //true
// console.log(
//   exist(
//     [
//       ["A", "B", "C", "E"],
//       ["S", "F", "E", "S"],
//       ["A", "D", "E", "E"],
//     ],
//     "ABCESEEEFS"
//   )
// ); // true

/**
 * Conditions
 * - Same letter cell may not be used more than 1
 * - word can be constructed using adjacency cell, vertical as well horizontal
 */
