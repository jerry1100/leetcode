// N: length of string
// Time: O(N^2)
// Space: O(1)

function countSubstrings(s: string): number {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;

        // Expand right to handle even-length palindromes
        while (s[left] === s[right]) {
            count++;
            right++;
        }

        // Expand outward on both sides
        left--;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }

    return count;
}
