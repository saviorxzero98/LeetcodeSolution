function findContentChildren(g: number[], s: number[]): number {
    if (s.length === 0) {
        return 0;
    }

    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let gi = 0
    let si = 0;
    while (gi < g.length && si < s.length) {
        if (g[gi] <= s[si]) {
            gi++;
        }
        si++;
    }
    return gi;
};