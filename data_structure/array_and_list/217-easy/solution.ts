function containsDuplicate(nums: number[]): boolean {
    let temp = [];
    for (let num of nums) {
        if (temp.indexOf(num) !== -1) {
            return true;
        }
        temp.push(num);
    }
    return false;
};