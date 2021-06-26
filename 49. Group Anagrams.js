/*
  Given array of strings, return a list of the anagrams in any order.

  Questions:
    1) what characters can the strings have?
        a) lower-case english letters, so max 26

  Immediate thought is to create a hash algorithm that returns the same hash for anagrams. Then we
  can loop through the list of strings, get their hash, and fi we haven't seen the hash before, add
  the string to the answers list.

  The hashing algorithm could just be to count the number of characters in each string, which will
  scale with the length of the string.

  Thus the overall complexity will be O(nk) time where n is the number of strings and k is the
  length of the longest string. The space complexity will be O(n) to store the hashes.

  Algorithm:
    create set to store hashes
    loop through each string
      get hash of string
      if hash is new
        add hash to set
        add string to results

  // Note: we can actually sort in O(n) time since the character space is limited. After knowing
  // the counts, we can just add letters for each count. But for now just leave as-is since it
  // doesn't change the complexities.
  Hashing algorithm: "[0, 0, 0, 1, ...]" which represents the count of letters for each letter
    create array size 26, fill to all 0s
    for each letter in string
      get index in array: string.charCodeAt(i) - 'a'.charCodeAt(0)
      increment array[index]

    return array.toString();

  Analysis:
    Time: O(nk), n is number of strings, k is length of longest string
    Space: O(n) to store hashes we've seen

    Note about space: leetcode seems to think it requires O(nk) space due to the space reserved for
    the answer. However, I thought (and read) that we don't include the space reserved for the
    answer in our space complexity.

  Followup: how would we extend this to larger character sets? I.e. unicode?
    Since unicode is fixed, we _could_ follow the same approach with a larger array (we should
    update hash to return sorted string since unicode is a lot bigger).

    However, it'd be great if things were dynamic instead of fixed. In our hashing algorithm, we
    could use a dictionary, which is dynamic, to count things, but the problem is returning the
    hash in a way that's consistent. I suppose in this case we can just resort to sorting, which
    will result in a O(nklog(k)) runtime.

  After reading the solution, I misunderstood the problem. Reminder to look at the examples more
  carefully. I need to return a list of _all_ the strings, grouped by their anagrams, not just
  the unique (in terms of their letters) strings.

  To fix this, instead of using a Set to keep track of the hashes I've seen, use a dictionary to
  keep track of all the strings that belong under a hash. At the end, transform the dictionary into
  a list.
    create hashes dictionary
    loop through each string
      get hash of string
      if !dictionary[hash]
        dictionary[hash] = new array

      dictionary[hash].push(string)

    return dictionary values

  Unfortunately my answer is still wrong because I didn't account for duplicates, which is
  something I should always think about with string questions. UPDATE: actually, it was wrong to
  remove duplicates, so I reverted it.

  To remedy this, instead of using an array for the anagram group, use a set, which will handle
  the duplicates.

  I also made the mistake of adding 'strs' to the set instead of 'str', which resulted in the
  input string being duplicated. Need to be more careful.

  Analysis:
    Time: O(nk)
    Space: O(nk) since we're storing the intermediate values in a dictionary
 */
function groupAnagrams(strs) {
  const dict = {};

  strs.forEach(str => {
    const hash = getStrHash(str);

    if (!dict[hash]) {
      dict[hash] = [];
    }

    dict[hash].push(str);
  });

  return Object.values(dict);
}

function getStrHash(str) {
  const chars = new Array(26).fill(0);

  const indexOffset = 'a'.charCodeAt(0);
  for (let i = 0; i < str.length; i++) {
    const charIndex = str.charCodeAt(i) - indexOffset;
    chars[charIndex] += 1;
  }

  return chars.toString();
}

console.log(groupAnagrams(["aa", "ab", "ca", "ba"]));
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
