/**
 * Time: O(n * m)
 * Space: O(1)
 * n - term #
 * m - longest possible sequence for a term
 */

/**
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {
  if (n === 1) {
    return '1';
  }
  return getSequence(countAndSay(n - 1));
}

/**
 * @param {string} prevSequence
 * @return {string}
 */
function getSequence(prevSequence) {
  let solution = '';
  for (let i = 0; i < prevSequence.length;) {
    let count = 1;
    const digit = prevSequence.charAt(i);

    // Count right until next digit is different
    while (digit === prevSequence.charAt(i + count)) {
      count += 1;
    }

    solution += `${count}${digit}`;
    i += count; // skip over the digits we counted
  }
  return solution;
}
