function maxArea(height: number[]): number {
    let maxArea = 0;
    if (height.length < 2) {
        return maxArea;
    }
    
    let left = 0;
    let right = height.length - 1

    while (left < right) {
        let minHeight = Math.min(height[left], height[right]);
        let width = right - left;
        let area = minHeight * width;
        maxArea = Math.max(area, maxArea);

        if (height[left] > height[right]) {
            right--;
        }
        else if (height[left] < height[right]) {
            left++;
        }
        else {
            left++;
            right--;
        }
    }
    return maxArea;
};