// N: length of string1
// M: length of string2
// Time: O(min(N, M))
// Space: O(1) due to fixed char set

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const smallerStr = s.length < t.length ? s : t;
    const largerStr = t !== smallerStr ? t : s;

    // Count chars
    const counts = new Array(26).fill(0);
    for (const char of smallerStr) {
        counts[getCharOffset(char)]++;
    }

    // Check if other string has same char counts
    for (const char of largerStr) {
        const charOffset = getCharOffset(char);

        if (!counts[charOffset]) {
            return false;
        }

        counts[charOffset]--;
    }

    return true;
}

function getCharOffset(str: string): number {
    return str.charCodeAt(0) - "a".charCodeAt(0);
}
