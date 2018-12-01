/**
 * Time: O(n)
 * Space: O(n)
 * n - length of string
 */

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const map = new Map();
  let left = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    const right = i + 1;

    if (map.has(char) && map.get(char) >= left) {
      left = map.get(char) + 1; // move left boundary past previous occurrence
    } else if (right - left > maxLength) {
      maxLength = right - left;
    }

    map.set(char, i);
  }

  return maxLength;
};
