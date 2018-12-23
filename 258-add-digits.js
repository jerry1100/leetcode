/**
 * Time: O(1)
 * Space: O(1)
 */

/**
 * @param {number} num
 * @return {number}
 */
function addDigits(num) {
  if (!num) {
    return 0;
  }
  return num % 9 || 9; // pattern goes 1-9 then repeats
}
