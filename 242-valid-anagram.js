/*
  Solution:
    Two strings are valid anagrams of each other if they contain the same
    letters. Since a constraint is that the letters are lower-case English
    letters, we can use a fixed-size int array to represent the counts of
    them. In the end, we just need to make sure the counts match.

  Analysis:
    Time: O(n), where n is the length of the input strings
    Space: O(1), since it's a fixed character set
 */

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sCounts = getLetterCounts(s);
  const tCounts = getLetterCounts(t);

  for (let i = 0; i < sCounts.length; i++) {
    if (sCounts[i] !== tCounts[i]) {
      return false;
    }
  }

  return true;
}

function getLetterCounts(str) {
  let counts = [];

  const charCodeOffset = 'a'.charCodeAt(0);
  for (let i = 0; i < str.length; i++) {
    const arrIndex = str.charCodeAt(i) - charCodeOffset;

    counts[arrIndex] = (counts[arrIndex] ?? 0) + 1;
  }

  return counts;
}

/*
  Solution 2:
    We can modify this to handle more generic character sets by using
    a dictionary instead of a fixed-size array.

  Analysis:
    Time: O(n) where n is the input string length
    Space: O(k) where k is the character set
 */
function isAnagram2(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sCounts = getLetterCounts2(s);
  const tCounts = getLetterCounts2(t);

  return !Object.keys(sCounts).some(char => {
    return tCounts[char] !== sCounts[char];
  });
}

function getLetterCounts2(str) {
  let counts = {};

  for (let i = 0; i < str.length; i++) {
    counts[str[i]] = (counts[str[i]] ?? 0) + 1;
  }

  return counts;
}

/*
  Solution 3:
    Another approach which saves off one iteration from our solution is
    by not getting the letter counts for the second string, but
    decrement the counts from the first. Then if we reach a letter but
    the count is 0, there's a mismatch.

  Analysis:
    Same as 2
 */
function isAnagram3(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  // Count characters in s
  const sCounts = {};
  for (let i = 0; i < s.length; i++) {
    sCounts[s[i]] = (sCounts[s[i]] ?? 0) + 1;
  }

  // Decrement sCounts with each letter in t
  for (let i = 0; i < t.length; i++) {
    if (!sCounts[t[i]]) {
      return false;
    }

    sCounts[t[i]] -= 1;
  }

  return true;
}

console.log(isAnagram('abc', 'cba'));
console.log(isAnagram('', 'a'));
console.log(isAnagram('', ''));
console.log(isAnagram2('abc', 'cba'));
console.log(isAnagram2('', 'a'));
console.log(isAnagram2('', ''));
console.log(isAnagram3('abc', 'cba'));
console.log(isAnagram3('', 'a'));
console.log(isAnagram3('', ''));
