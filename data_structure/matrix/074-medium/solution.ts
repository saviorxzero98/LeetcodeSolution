function searchMatrix(matrix: number[][], target: number): boolean {
    if (matrix == null || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    let m = matrix.length;
    let n = matrix[0].length;
    let row = 0;
    let col = n - 1;
    
    while(row < m && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        }
        if (matrix[row][col] > target) {
            col--;
        }
        else {
            row++;
        }
    }
    return false;
};