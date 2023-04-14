function findMaxConsecutiveOnes(nums: number[]): number {
    let max = 0;
    let current = 0;

    for (let num of nums) {
        current = (num === 0) ? 0 : current + 1;

        if (current > max) {
            max = current;
        }
    }
    return max;
};