class MyQueue {
    stack: number[];

    constructor() {
        this.stack = [];
    }

    push(x: number): void {
        this.stack.push(x);
    }

    pop(): number {
        let value = this.peek();
        this.stack.shift();
        return value;
    }

    peek(): number {
        if (this.empty()) {
            return null;
        }
        return this.stack[0];
    }

    empty(): boolean {
        return (this.stack.length === 0)
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */