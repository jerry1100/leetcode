// N: number of intervals
// Time: O(N)
// Space: O(1) not including space for answer

function insert(intervals: number[][], newInterval: number[]): number[][] {
    const res: number[][] = [];
    let toInsert = newInterval;
    let i = 0;

    // Add intervals before newInterval
    for (i; i < intervals.length && intervals[i][1] < toInsert[0]; i++) {
        res.push(intervals[i]);
    }

    // Add merged intervals that overlap with newInterval
    for (
        i;
        i < intervals.length && isOverlapping(intervals[i], toInsert);
        i++
    ) {
        toInsert = getMerged(intervals[i], toInsert);
    }
    res.push(toInsert);

    // Add remaining intervals
    for (i; i < intervals.length; i++) {
        res.push(intervals[i]);
    }

    return res;
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
