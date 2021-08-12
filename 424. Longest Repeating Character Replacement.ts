// N: length of string
// Time: O(N)
// Space: O(1) due to fixed character set

function characterReplacement(s: string, k: number): number {
    const charCounts: { [key: string]: number } = {};
    let mostFreqCharCount = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // Increment count of newly added char
        charCounts[char] = (charCounts[char] ?? 0) + 1;

        // Newly added char could be most frequent
        mostFreqCharCount = Math.max(mostFreqCharCount, charCounts[char]);

        // If our substringLength !== mostFreqCharCount, then our substring contains
        // non-optimal chars. If we have more than k non-optimal chars, we need to
        // decrease our window by shifting the left bound.
        const substringLength = right - left + 1;
        const nonOptimalCharsCount = substringLength - mostFreqCharCount;
        if (nonOptimalCharsCount > k) {
            charCounts[s[left]]--;
            left++;
        }
    }

    // Because our window never shrinks, we don't need to keep track of the max substring
    // length. The max will be determined by the final state of our left bound.
    return s.length - left;
}
