class NumArray {
    sums: number[];

    constructor(nums: number[]) {
        let sum = 0;
        this.sums = [];
        for (let num of nums) {
            sum += num;
            this.sums.push(sum);
        }
    }

    sumRange(left: number, right: number): number {
        if (left == 0) {
            return this.sums[right];
        }
        return this.sums[right] - this.sums[left-1];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */