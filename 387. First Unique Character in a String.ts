// N: length of string
// K: possible char values
// Time: O(N)
// Space: O(K)

function firstUniqChar(s: string): number {
    const charCounts: { [char: string]: number } = {};
    
    for (const char of s) {
        charCounts[char] = (charCounts[char] ?? 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (charCounts[s[i]] === 1) {
            return i;
        }
    }
    
    return -1;
};