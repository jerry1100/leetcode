// N: length of number string
// Time: O(N)
// Space: O(1) not including space reserved for output

function reformatNumber(number: string): string {
    const cleansed = number.replace(/[- ]+/g, "");

    let res: string[] = [];
    let i = 0;
    while (i < cleansed.length) {
        const remaining = cleansed.length - i;

        if (remaining > 4) {
            res.push(cleansed.slice(i, i + 3));
            i += 3;
            continue;
        }

        // Handle last 2-4 elements
        if (remaining === 4) {
            res.push(cleansed.slice(i, i + 2), cleansed.slice(i + 2));
        } else {
            res.push(cleansed.slice(i));
        }

        break;
    }

    return res.join("-");
}
