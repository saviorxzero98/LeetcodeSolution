function findKthLargest(nums: number[], k: number): number {
    // Time: O(NlogN); Space: O(1)
    return nums.sort((a, b) => a - b)[nums.length - k];
};
