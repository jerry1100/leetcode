// N: length of string
// Time: O(N^2)
// Space: O(1)

function longestPalindrome(s: string): string {
    let longest = "";

    for (let i = 0; i < s.length; i++) {
        const length = Math.max(
            palindromeLengthAt(s, i, i),
            palindromeLengthAt(s, i, i + 1)
        );

        if (length > longest.length) {
            const start = i - Math.floor((length - 1) / 2);
            longest = s.slice(start, start + length);
        }
    }

    return longest;
}

function palindromeLengthAt(s: string, start: number, end: number): number {
    let left = start;
    let right = end;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }

    return right - left - 1;
}
