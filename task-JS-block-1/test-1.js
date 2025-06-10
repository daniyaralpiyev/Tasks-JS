// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
const value = (value) => {
    if (value < 0) return `Negative value ${value}`;
    return value;
}

// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
const textLength = (str) => {
    return str.length;
}

// Дана строка. Выведите в консоль последний символ строки.
const lastChar = (value) => {
    return value[value.length - 1];
}

// Дано число. Проверьте, четное оно или нет.
const evenOrOdd = (value) => {
    return value % 2 === 0 ? `even ${value}` : `odd ${value}`;
}

// Даны два слова. Проверьте, что первые буквы этих слов совпадают.
const firstChars = (char1, char2) => {
    return char1[0] === char2[0];
}

// Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
const text = 'maserati'
const text2 = 'ronaldoь'
const lastCharOrPenultimateChar = (char) => char.endsWith('ь') ? char.at(-2) : char.at(-1);

console.log(lastCharOrPenultimateChar(text))
console.log(lastCharOrPenultimateChar(text2))
