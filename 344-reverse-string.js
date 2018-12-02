/**
 * Time: O(n)
 * Space: O(n)
 * n - length of string
 */

/**
 * @param {string} s
 * @return {string}
 */
function reverseString(s) {
  let reversed = '';

  for (let i = s.length - 1; i >= 0; i--) {
    reversed += s.charAt(i);
  }

  return reversed;
};
