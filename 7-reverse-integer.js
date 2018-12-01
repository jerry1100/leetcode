/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  const isNegative = x < 0;
  const stringified = Math.abs(x).toString();
  let reversed = '';

  // Reverse the string
  for (let i = stringified.length - 1; i >= 0; i--) {
    reversed += stringified.charAt(i);
  }

  // Check for overflow
  const limit = isNegative ? Math.pow(2, 31) : Math.pow(2, 31) - 1;
  if (Number(reversed) > limit) {
    return 0;
  }

  return isNegative ? `-${reversed}` : reversed;
};
