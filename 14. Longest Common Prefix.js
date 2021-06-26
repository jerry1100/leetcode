/**
 * Time: O(n * m)
 * Space: O(m)
 * n - # of strings
 * m - # of chars in shortest string
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (!strs.length) {
    return '';
  }

  return lcpAtIndex(strs, 0);
}

/**
 * @param {string[]} strs
 * @param {number} index
 * @return {string}
 */
function lcpAtIndex(strs, index) {
  const charToTest = strs[0].charAt(index);
  if (!charToTest) {
    return '';
  }

  // Check if all strings match the test char
  for (let i = 1; i < strs.length; i++) {
    if (strs[i].charAt(index) !== charToTest) {
      return '';
    }
  }

  return charToTest + lcpAtIndex(strs, index + 1);
}
