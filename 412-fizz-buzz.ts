// N: number to go up to
// Time: O(N)
// Space: O(1)
function fizzBuzz(n: number): string[] {
    const res = [];

    for (let i = 1; i <= n; i++) {
        let str = "";

        if (i % 3 === 0) {
            str += "Fizz";
        }

        if (i % 5 === 0) {
            str += "Buzz";
        }

        res.push(str || i.toString());
    }
    
    return res;
};