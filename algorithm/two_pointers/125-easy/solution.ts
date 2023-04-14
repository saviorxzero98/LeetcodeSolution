function isPalindrome(s: string): boolean {
    let text = s.toLowerCase();
    text = text.replace(/[\W_]+/g, '');

    let length = text.length;

    if (length === 0) {
        return true;
    }

    let firstIndex = 0;
    let lastIndex = length - 1;

    while(lastIndex > firstIndex) {
        if (text.charAt(firstIndex) !== text.charAt(lastIndex)) {
            return false;
        }
        lastIndex--;
        firstIndex++;
    }
    return true;
};