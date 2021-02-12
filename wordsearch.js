// Peer Programming with Preeti Rani

const transpose = function(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let newArr = [];
  for (let col = 0; col < cols; col++) {
    newArr[col] = [];
  }
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      newArr[col][row] = matrix[row][col];
    }
  }
  return newArr;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));

  let output;
  let array = [];

  for (let h of horizontalJoin) {
    array.push(h);
  }

  for (let v of verticalJoin) {
    array.push(v);
  }

  for (let el of array) {
    if (el.includes(word)) {
      output = true;
    }
  }
  if (output) {
    return true;
  } else {
    return false;
  }
};

module.exports = wordSearch;