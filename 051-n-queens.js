/**
 * Time: O(n!)
 * Space: O(n) per solution
 * n - # of queens
 */

/**
 * @param {number} n
 * @return {string[][]}
 */
function solveNQueens(n) {
  const solutions = [];

  const isValid = (colPlacements, col) => {
    for (let row = 0; row < colPlacements.length; row++) {
      const diffX = Math.abs(colPlacements[row] - col);
      const diffY = colPlacements.length - row;
      if (!diffX || diffX === diffY) { // same column or diagonal
        return false;
      }
    }
    return true;
  };

  const explore = (row, colPlacements) => {
    if (row === n) {
      return solutions.push(colPlacements.slice()); // copy by value
    }
    for (let col = 0; col < n; col++) {
      if (!isValid(colPlacements, col)) {
        continue;
      }
      colPlacements.push(col);
      explore(row + 1, colPlacements);
      colPlacements.pop();
    }
  };

  explore(0, []);
  return solutions.map(solution =>
    solution.map(col => '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1))
  );
}
