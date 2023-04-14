function reverseVowels(s: string): string {
    const vowels = [ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' ];
    
    let charArray = Array.from(s);
    let left = 0;
    let right = charArray.length - 1;

    while (left <= right) {
        let leftChar = charArray[left];
        let rightChar = charArray[right];

        if (!vowels.includes(leftChar)) {
            charArray[left++] = leftChar;
        }
        else if (!vowels.includes(rightChar)) {
            charArray[right--] = rightChar;
        }
        else {
            charArray[left++] = rightChar;
            charArray[right--] = leftChar;
        }
    }
    return charArray.join('');
};