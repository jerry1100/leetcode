/**
 * Time: O(n)
 * Space: O(1)
 * n - # of chars in s
 */

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  const VALUES = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const currentVal = VALUES[s.charAt(i)];
    const nextVal = VALUES[s.charAt(i + 1)];

    // If current < next, then we are subtracting
    if (currentVal < nextVal) {
      sum += nextVal - currentVal;
      i += 1;
    } else {
      sum += currentVal;
    }
  }

  return sum;
}
