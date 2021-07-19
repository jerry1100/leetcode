// N: length of string
// Time: O(N)
// Space: O(1)

function lengthOfLastWord(s: string): number {
    let length = 0;

    // Skip trailing spaces then count letters from right to left
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            length++;
            continue;
        }

        if (length > 0) {
            return length;
        }
    }

    return length;
}
