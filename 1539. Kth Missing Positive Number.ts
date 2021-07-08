// N: length of array
// Time: O(log N)
// Space: O(1)

function findKthPositive(arr: number[], k: number): number {
    let left = 0;
    let right = arr.length - 1;

    // Narrow down the search interval while keeping k within it. At the end,
    // left will overshoot right (left = right + 1) and the kth element will
    // be between arr[right] and arr[left].
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // The number of skipped elements at i is arr[i] - i - 1
        // E.g. with arr: [1, 4] and i: 1, we get (4) - (1) - 1 = 2 (skipped 2, 3)
        const skips = arr[mid] - mid - 1;

        if (skips < k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // 1. At left, we have skipped arr[left] - left - 1 elements
    // 2. We overshot the kth element by leftSkips - k + 1.
    //      Why +1? If we didn't overshoot (leftSkips === k), we'd have skipped k
    //      elements, meaning we're still +1 ahead of the kth element.
    // 3. The kth element is then:
    //      = arr[left] - overshoot
    //      = arr[left] - (leftSkips - k + 1)
    //      = arr[left] - leftSkips + k - 1
    //      = arr[left] - (arr[left] - left - 1) + k - 1
    //      = arr[left] - arr[left] + left + 1 + k - 1
    //      = left + k
    return left + k;
}
