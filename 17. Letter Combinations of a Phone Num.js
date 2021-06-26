/**
 * Time: O(n * 4^n)
 * Space: O(n * 4^n)
 * n - number of digits
 */

const LETTER_MAP = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  if (!digits) {
    return [];
  }

  const solutions = [];
  getCombinations(digits, solutions, [], 0);
  return solutions;
}

/**
 * @param {string} digits
 * @param {string[]} solutions
 * @param {string[]} current
 * @param {number} position
 * @return {void}
 */
function getCombinations(digits, solutions, current, position) {
  if (position === digits.length) {
    return solutions.push(current.join(''));
  }

  const letters = LETTER_MAP[digits.charAt(position)];
  for (let i = 0; i < letters.length; i++) {
    current.push(letters.charAt(i));
    getCombinations(digits, solutions, current, position + 1);
    current.pop();
  }
}
