// N: length of nums1
// M: length of nums2
// Time: O(N + M)
// Space: O(M) not including space reserved for output

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const map = new Map<number, number>(); // maps num2 -> next greater num2
    const stack: number[] = []; // holds num2, pop when found next greater num2

    for (const num2 of nums2) {
        // Found next greater num2, set for all prev num2s in stack
        while (stack[stack.length - 1] < num2) {
            map.set(stack.pop(), num2);
        }
        stack.push(num2);
    }

    // No greater num2 for remaining items in stack
    while (stack.length) {
        map.set(stack.pop(), -1);
    }

    return nums1.map((num1) => map.get(num1));
}
