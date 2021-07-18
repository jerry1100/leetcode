// N: length of bit string
// Time: O(N)
// Space: O(1)

function minOperations(s: string): number {
    const getOpsWithStartingBit = (startingBit: string) => {
        let ops = 0;
        let expectedBit = startingBit;

        for (const bit of s) {
            if (bit !== expectedBit) {
                ops++;
            }
            expectedBit = expectedBit === "1" ? "0" : "1";
        }

        return ops;
    };

    return Math.min(getOpsWithStartingBit("1"), getOpsWithStartingBit("0"));
}
