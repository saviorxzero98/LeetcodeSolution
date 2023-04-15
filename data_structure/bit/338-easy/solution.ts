function countBits(n: number): number[] {
    if (n === 0) {
        return [0];
    }

    let result = [0, 1];
    if (n === 1) {
        return result;
    }

    for (let i = 2; i <= n; i++) {
        result[i] = result[Math.floor(i/2)] + result[i%2];
    }
    return result;
};