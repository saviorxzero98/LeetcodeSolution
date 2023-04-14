class MinStack {
    stack: number[];

    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        this.stack.push(val);
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        if (this.stack.length === 0) {
            return null;
        }
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        if (this.stack.length === 0) {
            return null;
        }
        return Math.min(...this.stack);
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */