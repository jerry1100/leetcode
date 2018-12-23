/**
 * Time: O(1)
 * Space: O(1)
 */

/**
 * @param {number} num
 * @return {boolean}
 */
function isPowerOfFour(num) {
  if (num < 1) {
    return false;
  }

  // If not a power of 2
  if (num & (num - 1)) {
    return false;
  }

  // If the 1 bit is at an even position
  if (num & 0b0101010101010101010101010101010) {
    return false;
  }

  return true;
}
