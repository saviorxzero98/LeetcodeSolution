function isAnagram(s: string, t: string): boolean {
    let sMap = {};
    let tMap = {};

    if (s.length !== t.length) {
        return false;
    }

    // Calc Char Count
    for (let i = 0; i < s.length; i++) {
        let sChar = s.charAt(i);
        let tChar = t.charAt(i);

        if (sMap[sChar]) {
            sMap[sChar] = sMap[sChar] + 1;
        }
        else {
            sMap[sChar] = 1;
        }

        if (tMap[tChar]) {
            tMap[tChar] = tMap[tChar] + 1;
        }
        else {
            tMap[tChar] = 1;
        }
    }
    
    // Check Char
    let sKeys = Object.keys(sMap);
    let tKeys = Object.keys(tMap);
    if (sKeys.length !== tKeys.length) {
        return false;
    }

    for (let key of sKeys) {
        if (tMap[key] == undefined || tMap[key] !== sMap[key]) {
            return false;
        }
    }
    return true;
};