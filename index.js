const numbers = [1, 2, 3, 4, 5]
const numbersCount = numbers.length

let index = 0
let sum = 0

while (index < numbersCount) {
    const number = numbers[index]

    sum = sum + number

    index = index + 1
}

console.log(`Sum is ${sum}`)