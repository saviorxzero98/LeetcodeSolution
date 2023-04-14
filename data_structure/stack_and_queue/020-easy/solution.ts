function isValid(s: string): boolean {
    let stack = [];
    let charArray = Array.from(s)
    for (let char of charArray) {
        switch(char) {
            case '(':
            case '{':
            case '[':
                stack.push(char);
                break;

            case ')':
                if (stack.pop() !== '(') {
                    return false;
                }
                break;

            case '}':
                if (stack.pop() !== '{') {
                    return false;
                }
                break;

            case ']':
                if (stack.pop() !== '[') {
                    return false;
                }
                break;
        }
    }

    return (stack.length === 0);
};