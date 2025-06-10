// Найдите сумму всех целых чисел от 1 до 100.
const findNumbersSum = (value) => {
    let sum = 0
    for (let i = 0; i <= value; i++) {
        sum += i
    }
    return sum
}

// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
const findNumbersSumOnlyEven = (value) => {
    let sum = 0
    for (let i = 0; i <= value; i++) {
        if (i % 2 === 0) {
            sum += i
        }
    }
    return sum
}

// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
const findNumbersSumOnlyOdd = (value) => {
    let sum = 0
    for (let i = 0; i <= value; i++) {
        if (i % 2 !== 0) {
            sum += i
        }
    }
    return sum
}

// Даны два целых числа. Найдите остаток от деления первого числа на второе.
const remainderOfDivision = (value1, value2) => {
    return value1 % value2
}

// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
const filterTextWithEnd = (text) => {
    const value = text.split('').reverse()
    return value.forEach(item => console.log(item))
}
filterTextWithEnd('angular')