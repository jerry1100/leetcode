/**
 * Time: O(log(x, bound) * log(y, bound)), where log(a, b) is log base a of b
 * Space: O(log(x, bound) * log(y, bound))
 * x - value of x
 * y - value of y
 * bound - value of bound
 */

/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
function powerfulIntegers(x, y, bound) {
  const set = new Set();

  for (let valX = 1; valX < bound; valX *= x) {
    for (let valY = 1; valX + valY <= bound; valY *= y) {
      set.add(valX + valY);

      if (y === 1) {
        break;
      }
    }

    if (x === 1) {
      break;
    }
  }

  return Array.from(set);
}
