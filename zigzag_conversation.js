/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (s.length <= 2) {
    return s;
  }
  let counter = 0;
  let matrix = [];
  let row = 0;
  let col = 0;
  let operation = "+";
  while (counter != s.length) {
    // checking if row hit bottom
    if (!matrix[row]) {
      matrix[row] = [];
    }
    matrix[row][col] = s.charAt(counter);

    counter++;

    if (row == 0 && numRows > 1) {
      // checking if we are at top and more rows are available
      row++;
      operation = "+";
    } else if (row == 0 && numRows == 1) {
      // checking if we are at top and no more rows are available
      col++;
    } else if (row == numRows - 1) {
      //checking if we are at the bottom
      row--;
      col++;
      operation = "-";
    } else if (operation == "+") {
      row++;
    } else if (operation == "-") {
      row--;
      col++;
    }
  }
  let result = "";
  for (let i = 0; i < matrix.length; i++) {
    result = result.concat(matrix[i].join(""));
  }

  return result;
};

console.log(convert("PAYPALISHIRING", 3) == "PAHNAPLSIIGYIR");
// console.log(convert("PAYPALISHIRING", 4) == "PINALSIGYAHRPI");
// console.log(convert("A", 1) == "A");

/**
 * [ 'P',    ,  'L'  ,   , 'R' ],
    [ 'A', 'P', 'I'  , 'H', 'I' ],
    [ 'Y',    ,    'S',   , 'N' ]
 */
