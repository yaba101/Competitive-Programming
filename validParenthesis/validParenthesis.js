const isValid = (s) => {
    const stack = []

    for (let character of s) {
        if (character === '(') stack.push(')')
        else if (character === '{') stack.push('}')
        else if (character === '[') stack.push(']')
        else if (stack.length === 0 || character !== stack.pop()) return false
    }
    return stack.length === 0
}