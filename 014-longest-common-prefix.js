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

  // Method to recursively get the lcp starting at index
  const lcpAtIndex = index => {
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

    return charToTest + lcpAtIndex(index + 1);
  };

  return lcpAtIndex(0);
}
