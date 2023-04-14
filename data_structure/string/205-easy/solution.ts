function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    let sMap = {};
    let tMap = {};

    for (let i = 0; i < s.length; i++) {
        let sChar = s.charAt(i);
        let tChar = t.charAt(i);

        if (sMap[sChar] !== tMap[tChar]) {
            return false;
        }

        sMap[sChar] = i + 1;
        tMap[tChar] = i + 1;
    }
    return true;
};