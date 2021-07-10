// N: length of nums1
// M: length of nums2
// Time: O(N + M)
// Space: O(N)

function intersection(nums1: number[], nums2: number[]): number[] {
    const uniqueNums1 = new Set(nums1);
    const intersection = new Set<number>();

    for (const num2 of nums2) {
        if (uniqueNums1.has(num2)) {
            intersection.add(num2);
        }
    }

    return [...intersection];
}
