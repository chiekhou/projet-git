const numbers = [1, 2, 3, 4]
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8]
const numbersCount = numbers.length

let index = 0
let sum = 0

//boucle sum table items elements
while (index < numbersCount) {
    const number = numbers[index]

    sum = sum + number

    index = index + 1
}

console.log(`Sum is ${sum}`)