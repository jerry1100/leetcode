// N: length of array
// Time: O(N)
// Space: O(N)

function canBeEqual(target: number[], arr: number[]): boolean {
    const counts: Record<number, number> = {};

    for (const num of arr) {
        counts[num] = (counts[num] ?? 0) + 1;
    }

    for (const targetNum of target) {
        if (!counts[targetNum]) {
            return false;
        }

        counts[targetNum]--;
    }

    return true;
}
