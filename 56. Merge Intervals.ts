// N: number of intervals
// Time: O(N*log(N))
// Space: O(N)

function merge(intervals: number[][]): number[][] {
    const sorted = [...intervals].sort(([start1], [start2]) => start1 - start2);
    const merged = [sorted[0]];

    for (let i = 1; i < sorted.length; i++) {
        const interval = sorted[i];
        const lastMerged = merged[merged.length - 1];

        // Interval overlaps with last merged, so extend last merged
        if (isOverlapping(interval, lastMerged)) {
            merged[merged.length - 1] = getMerged(interval, lastMerged);
            continue;
        }

        // No overlap, start new interval
        merged.push(interval);
    }

    return merged;
}

function isOverlapping(interval1: number[], interval2: number[]): boolean {
    const [start1, end1] = interval1;
    const [start2, end2] = interval2;

    return start1 <= end2 && start2 <= end1;
}

function getMerged(interval1: number[], interval2: number[]): number[] {
    const [start1, end1] = interval1;
    const [start2, end2] = interval2;

    return [Math.min(start1, start2), Math.max(end1, end2)];
}
