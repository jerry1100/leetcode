// Time: O(log N)
// Space: O(1)

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
    return function (n: number): number {
        let left = 1;
        let right = n;

        // Reduce search boundary to a single element so that left will
        // eventually be bad. That will be the first bad version.
        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    };
};
