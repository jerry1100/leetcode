// N: number of nums
// Time: O(N)
// Space: O(1)

// Using Boyer-Moore algorithm:
//  1) Set candidate to initial element
//  2) If next number equals current candidate, add 1 to count. Else subtract 1.
//  3) When count equals 0, assign a new candidate.
// The Boyer-Moore algorithm says that after processing all the elements, the
// resulting candidate will be the majority element. This relies on there being
// more +1s than -1s since the majority element is the majority. It can also be
// used to determine voting results.
function majorityElement(nums: number[]): number {
    let candidate: number;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += candidate === num ? 1 : -1;
    }

    return candidate;
}
