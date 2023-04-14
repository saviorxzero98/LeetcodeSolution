class MyStack {
    queue: number[];

    constructor() {
        this.queue = [];
    }

    push(x: number): void {
        this.queue.push(x);
    }

    pop(): number {
        let top = this.top();
        this.queue.pop();
        return top;
    }

    top(): number {
        if (this.empty()) {
            return null;
        }
        return this.queue[this.queue.length - 1];
    }

    empty(): boolean {
        return (this.queue.length === 0);
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */