function threeSum(nums: number[]): number[][] {
    if (nums == undefined || nums.length < 3) {
        return [];
    }

    let sortNums = nums.sort((a, b) => a - b);
    let results = {};
    for (let i = 0; i < sortNums.length - 2; i++) {
        let j = i + 1;
        let k = sortNums.length -1;

        while (j < k) {
            let sum = sortNums[i] + sortNums[j] + sortNums[k];

            if (sum === 0) {
                let result = [sortNums[i], sortNums[j], sortNums[k]].sort((a, b) => a - b);
                let resultKey = `${result[0]},${result[1]},${result[2]}`;
                results[resultKey] = result;
                j++;
                k--;
            }
            else if (sum < 0) {
                j++;
            }
            else {
                k--;
            }
        }
    }
    return Object.values(results);
};