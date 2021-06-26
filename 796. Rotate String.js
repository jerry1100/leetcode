/**
 * Time: O(n)
 * Space: O(n)
 * n - length of strings
 */

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
function rotateString(A, B) {
  if (A.length !== B.length) {
    return false;
  }

  // If B is a rotation of A, then B can be found in AA
  // E.g. A = foobar, B = oobarf, AA = f(oobarf)oobar
  return A.repeat(2).includes(B);
}
