function lengthOfLongestSubstring(s: string): number {
    if (s.length === 0) {
        return 0;
    }
    
    let charSet = new Set();
    let lonestLength = 0;
    let length = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        let char = s.charAt(end);

        if (!charSet.has(char)) {
            charSet.add(char);
            length++;

            if (length > lonestLength) {
                lonestLength = length;
            }
        }
        else {
            while(s[start] !== s[end]) {
                charSet.delete(s[start]);
                length--;
                start++;
            }
            start++;
        }
    }
    return lonestLength;
};