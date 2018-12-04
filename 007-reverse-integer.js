/**
 * Time: O(n)
 * Space: O(1)
 * n - # of digits in x
 */

/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -Math.pow(2, 31);
  let reversed = 0;

  // Reverse the digits
  while (x) {
    const digit = x % 10;

    // Check for overflow
    if (reversed > (INT_MAX - digit) / 10 || reversed < (INT_MIN - digit) / 10) {
      return 0;
    }

    reversed = reversed * 10 + digit;
    x = Math.trunc(x / 10);
  }

  return reversed;
};
