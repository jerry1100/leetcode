// N: number of intervals
// Time: O(N*log(N))
// Space: O(N)

function canAttendMeetings(intervals: number[][]): boolean {
    const sorted = [...intervals].sort(([start1], [start2]) => start1 - start2);

    for (let i = 1; i < sorted.length; i++) {
        if (isOverlapping(sorted[i], sorted[i - 1])) {
            return false;
        }
    }

    return true;
}

function isOverlapping(interval1: number[], interval2: number[]): boolean {
    const [start1, end1] = interval1;
    const [start2, end2] = interval2;

    return start1 < end2 && start2 < end1;
}
