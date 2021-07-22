// N: length of instructions
// Time: O(N)
// Space: O(1)

type Position = {
    x: number;
    y: number;
    dir: "N" | "E" | "S" | "W";
};

function isRobotBounded(instructions: string): boolean {
    let position: Position = { x: 0, y: 0, dir: "N" };

    for (let i = 0; i < 4; i++) {
        for (const instruction of instructions) {
            position = step(position, instruction);
        }
    }

    // If we haven't returned to the start after four cycles, we never will
    return position.x === 0 && position.y === 0;
}

function step(position: Position, instruction: string): Position {
    const { x, y, dir } = position;

    switch (instruction) {
        case "G":
            switch (dir) {
                case "N":
                    return { ...position, y: y + 1 };
                case "E":
                    return { ...position, x: x + 1 };
                case "S":
                    return { ...position, y: y - 1 };
                case "W":
                    return { ...position, x: x - 1 };
            }
        case "L":
            switch (dir) {
                case "N":
                    return { ...position, dir: "W" };
                case "E":
                    return { ...position, dir: "N" };
                case "S":
                    return { ...position, dir: "E" };
                case "W":
                    return { ...position, dir: "S" };
            }
        case "R":
            switch (dir) {
                case "N":
                    return { ...position, dir: "E" };
                case "E":
                    return { ...position, dir: "S" };
                case "S":
                    return { ...position, dir: "W" };
                case "W":
                    return { ...position, dir: "N" };
            }
    }
}
