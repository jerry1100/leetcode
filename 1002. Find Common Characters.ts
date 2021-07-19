// N: number of words
// M: max number of chars in a word
// Time: O(N*M)
// Space: O(1) not including space reserved for output

function commonChars(words: string[]): string[] {
    const CHAR_OFFSET = "a".charCodeAt(0);
    const charCounts = new Array<number>(26).fill(Infinity);

    for (const word of words) {
        const charCountForWord = new Array<number>(26).fill(0);

        // Count chars for current word
        for (const char of word) {
            const charCode = char.charCodeAt(0) - CHAR_OFFSET;
            charCountForWord[charCode]++;
        }

        // Update global char counts
        for (let i = 0; i < 26; i++) {
            charCounts[i] = Math.min(charCounts[i], charCountForWord[i]);
        }
    }

    const res: string[] = [];
    for (let i = 0; i < 26; i++) {
        const char = String.fromCharCode(i + CHAR_OFFSET);
        const charCount = charCounts[i];
        res.push(...new Array(charCount).fill(char));
    }

    return res;
}
