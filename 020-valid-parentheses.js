/**
 * Time: O(n)
 * Space: O(n)
 * n - length of s
 */

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  if (s.length % 2) {
    return false;
  }

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const brace = s.charAt(i);

    // Push opening braces on the stack
    if (brace === '(' || brace === '[' || brace === '{') {
      stack.push(brace);
      continue;
    }

    // Match closing braces with their open counterparts
    if (stack.pop() !== getOpenBrace(brace)) {
      return false;
    }
  }

  return !stack.length;
}

/**
 * @param {string} closeBrace
 * @return {string}
 */
function getOpenBrace(closeBrace) {
  switch (closeBrace) {
    case '}': return '{';
    case ']': return '[';
    case ')': return '(';
    default: return null;
  }
}
