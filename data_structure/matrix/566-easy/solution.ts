function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    let m = mat.length;
    let n = mat[0].length;

    if (m * n != r * c) {
        return mat;
    }
    let outMat = Array.from(new Array(r), () => new Array(c));
    for (let i = 0; i < r * c; i++) {
        outMat[Math.floor(i/c)][i%c] = mat[Math.floor(i/n)][i%n];
    }
    return outMat;
};