async function getSomething() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('angular2025')
        }, 1000);
    })
}

console.log('One')

const something = await getSomething();
console.log(something);

console.log('three')

// const promise = new Promise((resolve, reject) => {
//     console.log('Начало. состояние pending...')
//
//     const math = Math.random();
//     setTimeout(() => {
//         if (math > 0.5) {
//             resolve(`Ура:) ${math}!`);
//         } else {
//             reject(`Увы:( ${math}!!!`);
//         }
//     }, 1000);
// })
//
// promise
//     .then((successData) => {
//         console.log(`Success! Получены данные ${successData}.`); // в successData хранит результат if который выше
//     })
//     .catch((errorData) => {
//         console.log(`Error!!! ${errorData}.`); // в successData хранит результат else который выше
//     })
//     .finally(() => {
//         console.log('Этот код в конце по-любому будет выполнен не зависимо от результата');
//     })