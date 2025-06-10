// Дано число. Выведите в консоль первую цифру этого числа.
const firstNumber = (value) => {
    return String(value)[0]
}

// Дано число. Выведите в консоль последнюю цифру этого числа.
const lastNumber = (value) => {
    const res = String(value).split('');
    return res[res.length - 1]
}

const lastNum = (value) => String(value).at(-1); // ещё короче

// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
const firstAndLastNum = (value) => {
    const firstNumber = String(value).at(0)
    const lastNumber = String(value).at(-1)
    return Number(firstNumber) + Number(lastNumber)
}

// Дано число. Выведите количество цифр в этом числе.
const amountNumbers = (value) => {
    const res = String(value)
    return res.length
}
const amountNum = (value) => String(value).length // ещё короче

// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
const firstNumberEquals = (value1, value2) => {
    return String(value1).at(0) === String(value2).at(0)
}