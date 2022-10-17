const totalFruit = (fruits) => {
    let start = 0
    let maxlength = 0
    let fruitFrequency = {}
    for (let i = 0; i < fruits.length; i++) {
        const rightFruit = fruits[i]
        if (!(rightFruit in fruitFrequency)) {
            fruitFrequency[rightFruit] = 0

        }
        fruitFrequency[rightFruit] += 1
        while (Object.keys(fruitFrequency).length > 2) {
            const leftFruit = fruits[start]
            fruitFrequency[leftFruit] -= 1
            if (fruitFrequency[leftFruit] === 0) {
                delete fruitFrequency[leftFruit]

            }
            start += 1
        }
        maxlength = Math.max(maxlength, i - start + 1)
    }
    return maxlength
}