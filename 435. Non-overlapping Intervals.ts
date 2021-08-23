// N: number of intervals
// Time: O(N*log(N))
// Space: O(N)

function eraseOverlapIntervals(intervals: number[][]): number {
    const sorted = [...intervals].sort(([start1], [start2]) => start1 - start2);
    let numSkipped = 0;
    let lastEnd = sorted[0][1];

    for (let i = 1; i < sorted.length; i++) {
        const [start, end] = sorted[i];

        // Interval overlaps with previous, so we either skip the current interval or
        // the previous one. We should skip the one with the later end time, to make
        // more room for future intervals.
        if (start < lastEnd) {
            numSkipped++;
            lastEnd = Math.min(lastEnd, end);
            continue;
        }

        // No overlap
        lastEnd = end;
    }

    return numSkipped;
}
