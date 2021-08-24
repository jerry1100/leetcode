// N: number of intervals
// Time: O(N*log(N))
// Space: O(N)

function minMeetingRooms(intervals: number[][]): number {
    const startTimes = intervals
        .map((interval) => interval[0])
        .sort((a, b) => a - b);
    const endTimes = intervals
        .map((interval) => interval[1])
        .sort((a, b) => a - b);

    let lastEndIndex = 0;
    let numRoomsUsed = 0;

    for (const startTime of startTimes) {
        // A previous meeting has ended in time for the current meeting. We can reuse
        // that room instead of requiring another room.
        if (endTimes[lastEndIndex] <= startTime) {
            lastEndIndex++;
            continue;
        }

        numRoomsUsed++;
    }

    return numRoomsUsed;
}
