/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  let reversed = 0;

  // Reverse the digits
  while (x) {
    reversed = (reversed * 10) + (x % 10);
    x = Math.trunc(x / 10);
  }

  // Check for overflow
  if (reversed < -Math.pow(2, 31) || reversed > Math.pow(2, 31) - 1) {
    return 0;
  }

  return reversed;
};
