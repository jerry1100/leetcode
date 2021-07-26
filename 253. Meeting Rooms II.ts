// N: number of meetings
// Time: O(N*log(N))
// Space: O(N)

function minMeetingRooms(intervals: number[][]): number {
    const startTimes = intervals
        .map((interval) => interval[0])
        .sort((a, b) => a - b);
    const endTimes = intervals
        .map((interval) => interval[1])
        .sort((a, b) => a - b);

    let iEnd = 0;
    let numRooms = 0;

    for (const startTime of startTimes) {
        // Meeting ended, free up a room
        if (endTimes[iEnd] <= startTime) {
            iEnd++;
            numRooms--;
        }

        // Meeting started, take up a room
        numRooms++;
    }

    return numRooms;
}
