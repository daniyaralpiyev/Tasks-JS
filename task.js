// Даны данные продуктов
let inventory = [
    {id: 1, name: 'Apple', price: 0.50, quantity: 20},
    {id: 2, name: 'Banana', price: 0.30, quantity: 15},
    {id: 3, name: 'Cherry', price: 0.90, quantity: 5}
]


// // Отображение названий продуктов:
// // Получите все продукты и выведите их названия на консоль.
// Object.values(inventory).forEach((value) => {
//     console.log(value.name)
// })
//
// // variant Antona
// let allProducts = inventory.map(value => value.name).join(', ')
// console.log(allProducts)


// // Обновление инвентаря:
// // Напишите функцию updateInventory(productId, amount), которая обновляет количество определенного товара по его ID.
// // Сумма может быть положительной (добавление к инвентарю) или отрицательной (вычитание из инвентаря).
// // Убедитесь, что функция не позволяет инвентарю опуститься ниже 0.
// const updateInventory = (productId, amount) => {
//
//     const product = inventory.find(item => item.id === productId);
//
//     if (!product) {
//         return `Такого товара нет на складе`
//     }
//
//     const nameProduct = product.name;
//     const newQuantity = product.quantity + amount;
//
//     product.quantity = newQuantity;
//
//     if (newQuantity < 0) {
//         return `В инвентаре кол-во товара ${nameProduct} не может быть отрицательным`
//     } else {
//         return `Кол-во товара "${nameProduct}" = ${newQuantity}`;
//     }
// }
//
// console.log(updateInventory(1, 300))
// console.log(inventory)


// // Поиск товаров с низким запасом:
// // Напишите функцию findLowStock(threshold), которая возвращает массив названий товаров,
// // количество которых ниже определенного порога.
// // Используйте Object.entries() для работы с идентификатором и данными каждого товара.
// const findLowStock2 = (threshold) => {
//     return inventory
//         .filter(item => item.quantity < threshold)
//         .map(item => item.name)
// }
// console.log(findLowStock2(10));


// Вычислить общую стоимость запасов:
// Напишите функцию totalInventoryValue(), которая вычисляет и возвращает общую стоимость запасов.
// Умножьте цену каждого товара на его количество и сложите эти значения.
const totalInventoryValue = () => {
    let total = 0;
    inventory.forEach(item => total += item.price * item.quantity);
    return total;
}
console.log(totalInventoryValue())

const totalInventoryReduce = () => {
    return inventory.reduce((acc, item) => acc + (item.price * item.quantity), 0);
}
console.log(totalInventoryReduce())