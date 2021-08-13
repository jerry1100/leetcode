// N: number of strings
// K: max length of a string
// Time: O(N*K)
// Space: O(N*K)

function groupAnagrams(strs: string[]): string[][] {
    const groups = new Map<string, string[]>();

    for (const str of strs) {
        const signature = getSignature(str);

        if (!groups.has(signature)) {
            groups.set(signature, []);
        }

        groups.get(signature).push(str);
    }

    return [...groups.values()];
}

function getSignature(str: string): string {
    const counts = new Array(26).fill(0);

    for (const char of str) {
        const index = char.charCodeAt(0) - "a".charCodeAt(0);
        counts[index]++;
    }

    return counts.toString();
}
