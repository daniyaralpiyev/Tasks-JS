// Выведите в консоль все целые числа от 1 до 100.
const showNumbers = (value) => {
    for (let i = 1; i <= value; i++) {
        console.log(i)
    }
}

// Выведите в консоль все целые числа от -100 до 0.
const showNumbersReverse = (value) => {
    for (let i = value; i >= 1; i--) {
        console.log(i)
    }
}

// Выведите в консоль все целые числа от 100 до 1.
const showNumbersReverseOnlyEven = (value) => {
    for (let i = value; i >= 1; i--) {
        if (i % 2 === 0) console.log(i)
    }
}

// Выведите в консоль все четные числа из промежутка от 1 до 100.
const showNumbersOnlyEven = (value) => {
    for (let i = 1; i <= value; i++) {
        if (i % 2 === 0) console.log(i)
    }
}

// Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
const showNumbersStepThree = (value) => {
    for (let i = 1; i <= value; i++) {
        if (i % 3 === 0) console.log(i)
    }
}