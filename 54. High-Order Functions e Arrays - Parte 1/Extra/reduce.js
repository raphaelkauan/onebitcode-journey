// REDUCE
const { shopCart } = require('./data')
// Reduzir um objeto a um valor único
// Imutável

// 1. Qual o valor total desse carrinho de compras
const totaValor = shopCart.reduce((accumulator, item) => {
    return accumulator + item.quantity * item.unitPrice
}, 0)

console.log(totaValor)

// 2. Quantidade total de produtos do carrinho
const totalProducts = shopCart.reduce((accumulator, item) => {
    return accumulator + item.quantity
}, 0)

console.log(totalProducts)

// Array.reduce((accumulator, currentValue, index, array) => {

// }, initialValue)