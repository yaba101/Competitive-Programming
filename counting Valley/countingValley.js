function countingValleys(steps, path) {
    let count = 0
    let level = 0
    for (let i = 0; i < steps; i++) {
        if (path[i] === 'U') {
            level++
        }
        if (path[i] === 'D') {
            level--
        }
        if (level === 0 && path[i] === 'U') {
            count++
        }
    }
    return count

}