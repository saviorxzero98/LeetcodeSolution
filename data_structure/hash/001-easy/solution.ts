function twoSum(nums: number[], target: number): number[] {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return [
                map.get(nums[i]),
                i
            ];
        }
        else {
            map.set(target - nums[i], i);
        }
    }
    return null;
};

function twoSum2(nums: number[], target: number): number[] {
    let indeies = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [ i, j ];
            }
        }
    }
    return indeies;
};