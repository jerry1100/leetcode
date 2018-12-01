/**
 * Time: O(n)
 * Space: O(1)
 * n - # of digits in x
 */

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  if (x < 0) {
    return false;
  }

  const original = x;
  let reversed = 0;
  
  // Reverse the digits
  while (x) {
    reversed = (reversed * 10) + (x % 10);
    x = Math.trunc(x / 10);
  }

  return reversed === original;
};
