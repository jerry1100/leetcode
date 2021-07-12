// N: number of nums
// Time: O(N)
// Space: O(1)

function maximumProduct(nums: number[]): number {
    const topThree = new Array(3).fill(-Infinity); // descending order
    const bottomTwo = new Array(2).fill(Infinity); // ascending order

    for (const num of nums) {
        // 0: 30
        // 1: 20
        // 2: 10
        if (num > topThree[0]) {
            topThree[2] = topThree[1];
            topThree[1] = topThree[0];
            topThree[0] = num;
        } else if (num > topThree[1]) {
            topThree[2] = topThree[1];
            topThree[1] = num;
        } else if (num > topThree[2]) {
            topThree[2] = num;
        }

        // 0: -20
        // 1: -10
        if (num < bottomTwo[0]) {
            bottomTwo[1] = bottomTwo[0];
            bottomTwo[0] = num;
        } else if (num < bottomTwo[1]) {
            bottomTwo[1] = num;
        }
    }

    const topProduct = topThree[0] * topThree[1] * topThree[2];
    const bottomProduct = bottomTwo[0] * bottomTwo[1] * topThree[0];

    return Math.max(topProduct, bottomProduct);
}
