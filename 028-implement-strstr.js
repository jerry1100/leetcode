/**
 * Time: O(n*m)
 * Space: O(1)
 * n - length of the haystack
 * m - length of the needle
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  if (!needle) {
    return 0;
  }

  // Look for the needle at each position
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack.substr(i, needle.length) === needle) {
      return i;
    }
  }

  return -1;
};
