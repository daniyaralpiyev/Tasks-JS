// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
const penultimateChar = (value) => value.length > 1 ? value[value.length - 2] : null

// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
const divisionNumbers = (value1, value2) => value1 % value2 === 0
console.log(divisionNumbers(50, 5))