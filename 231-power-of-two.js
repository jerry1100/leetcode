/**
 * Time: O(1)
 * Space: O(1)
 */

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0; // 0b1000 & 0b0111 === 0b0000
};
