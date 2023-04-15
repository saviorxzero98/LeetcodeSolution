function missingNumber(nums: number[]): number {
    let length = nums.length + 1;
    let sum = 0;
    for (let i = 0; i < length; i++) {
        sum += i;
    }

    let distNum = sum;
    for (let num of nums) {
        distNum -= num;
    }
    return distNum;
};