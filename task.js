let inventory = [
    {id: 1, name: 'Apple', price: 0.50, quantity: 20},
    {id: 2, name: 'Banana', price: 0.30, quantity: 15},
    {id: 3, name: 'Cherry', price: 0.90, quantity: 5}
]



// Answer 1 ****************************************
Object.values(inventory).forEach((value) => {
    console.log(value.name)
})



// Answer 2 ****************************************
function updateInventory(productId, amount) {
    const item = inventory.find(item => item.id === productId);

    if (item === undefined) return 'Product not found';

    const newQuantity = item.quantity + amount;

    if (newQuantity < 0) return 'Not enough quantity';

    item.quantity = newQuantity;

    return `${item.name} ${item.quantity}`;
}

console.log(updateInventory(1, 10))
console.log(updateInventory(2, 10))
console.log(updateInventory(3, 10))



// Answer 3 variant 1 ****************************************
const findLowStock1 = (threshold) => {
    return Object.entries(inventory)
        .filter(([_, item]) => item.quantity < threshold)
        .map(([_, item]) => item.name);
}
console.log(findLowStock1(100));

// Answer 3 variant 2
const findLowStock2 = (threshold) => {
    return inventory
        .filter(item => item.quantity < threshold)
        .map(item => item.name)
}
console.log(findLowStock2(100));



// Answer 4 ****************************************
const totalInventoryValue = () => {
    let total = 0;
    inventory.forEach(item => total += item.price * item.quantity);
    return total;
}
console.log(totalInventoryValue())