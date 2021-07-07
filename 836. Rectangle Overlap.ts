// Time: O(1)
// Space: O(1)

function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
    const [rect1BottomLeftX, rect1BottomLeftY, rect1TopRightX, rect1TopRightY] =
        rec1;
    const [rect2BottomLeftX, rect2BottomLeftY, rect2TopRightX, rect2TopRightY] =
        rec2;

    // No overlap - rect1 is strictly to the left of and below rect2
    if (
        rect1TopRightX <= rect2BottomLeftX ||
        rect1TopRightY <= rect2BottomLeftY
    ) {
        return false;
    }

    // No overlap - rect2 is strictly to the left of and below rect1
    if (
        rect2TopRightX <= rect1BottomLeftX ||
        rect2TopRightY <= rect1BottomLeftY
    ) {
        return false;
    }

    return true;
}
