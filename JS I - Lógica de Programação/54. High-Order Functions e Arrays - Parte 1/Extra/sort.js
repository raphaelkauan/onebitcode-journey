// SORT
const { shopCart, passengers } = require('./data')
// ordenar elementos
// ordenação segue a regra do unicode ASCII
// sempre deve receber dois valores para fazer a comparação

// 1. Organize o carrinho pelo número de produtos
const produtosOrganizados = shopCart.sort((a, b) => {
    return b.quantity - a.quantity 
})

console.log(produtosOrganizados)

// 2. Organize os passsageiros por nome
const ordemPessoas = passengers.sort((pa, pb) => {
    if(pa.name.toLowerCase() < pb.name.toLowerCase()) return -1
    if(pa.name.toLowerCase() > pb.name.toLowerCase()) return 1
    return 0
}, 0)

console.table(ordemPessoas)