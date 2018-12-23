/**
 * Time: O(n * 4^n)
 * Space: O(n * 4^n)
 * n - number of digits
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  if (!digits) {
    return [];
  }

  const solutions = [];
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

  const getCombinations = (set, position) => {
    if (position === digits.length) {
      return solutions.push(set.join(''));
    }
    const letters = LETTER_MAP[digits.charAt(position)];
    for (let i = 0; i < letters.length; i++) {
      set.push(letters.charAt(i));
      getCombinations(set, position + 1);
      set.pop();
    }
  };

  getCombinations([], 0);
  return solutions;
}
