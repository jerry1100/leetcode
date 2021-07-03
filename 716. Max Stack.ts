// N: number of items in stack
// Time: O(1) except popMax, O(N) for popMax
// Space: O(N)

class MaxStack {
    stack: number[];
    maxStack: number[];

    constructor() {
        this.stack = [];
        this.maxStack = [];
    }

    push(x: number): void {
        this.stack.push(x);

        const maxSoFar = this.peekMax() ?? -Infinity;
        this.maxStack.push(Math.max(maxSoFar, x));
    }

    pop(): number {
        this.maxStack.pop();

        return this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    peekMax(): number {
        return this.maxStack[this.maxStack.length - 1];
    }

    popMax(): number {
        const maxToPop = this.peekMax();
        const toRestore = [];

        // Store items above max to pop
        while (this.top() !== maxToPop) {
            toRestore.push(this.pop());
        }

        // Pop max
        this.pop();

        // Restore items
        while (toRestore.length) {
            this.push(toRestore.pop());
        }

        return maxToPop;
    }
}

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */
