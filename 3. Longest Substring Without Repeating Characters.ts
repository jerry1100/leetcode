// N: length of string
// K: size of character set
// Time: O(N)
// Space: O(K)

function lengthOfLongestSubstring(s: string): number {
    const substring = new Set<string>();
    let max = 0;

    for (const char of s) {
        // Shrink window by removing left-most value
        while (substring.has(char)) {
            substring.delete(substring.values().next().value);
        }

        substring.add(char);
        max = Math.max(max, substring.size);
    }

    return max;
}
