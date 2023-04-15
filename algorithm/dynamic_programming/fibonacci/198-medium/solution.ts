function rob(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    if (nums.length === 2) {
        return Math.max(nums[0], nums[1]);
    }

    const maxAmount: number[] = [];
    maxAmount[0] = nums[0];
    maxAmount[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        maxAmount[i] = Math.max(maxAmount[i-2] + nums[i], maxAmount[i-1]);
    }
    return maxAmount.pop();
};