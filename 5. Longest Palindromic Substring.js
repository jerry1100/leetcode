/**
 * Time: O(n^2)
 * Space: O(1)
 * n - length of string s
 */

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  let maxLeft = 0;
  let maxRight = 0;

  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;

    // Handle palindromes with even length
    while (right + 1 < s.length && s.charAt(left) === s.charAt(right + 1)) {
      right += 1;
    }

    // Expand outward
    while (left - 1 >= 0 && right + 1 < s.length && s.charAt(left - 1) === s.charAt(right + 1)) {
      left -= 1;
      right += 1;
    }

    if (right - left > maxRight - maxLeft) {
      maxRight = right;
      maxLeft = left;
    }
  }

  return s.slice(maxLeft, maxRight + 1);
}
