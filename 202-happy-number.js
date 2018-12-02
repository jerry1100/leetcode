/**
 * Time: O(?)
 * Space: O(n)
 * n - # seen before returning
 */

/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
  const set = new Set();

  while (!set.has(n)) {
    if (n === 1) {
      return true;
    }
    set.add(n);
    n = n.toString().split('').reduce((total, current) => total + Math.pow(current, 2), 0);
  }

  return false;
};
