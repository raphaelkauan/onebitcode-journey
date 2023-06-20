// FIND

// Imutável

const { passengers } = require('./data')

// 1. Encontre o passageiro de nome: "Enzo"

// const enzos = passengers.find(function (element, index, array) {
//     return element.name.toLowerCase() === 'natan'
// }) 

// console.log(enzos)

const enzo = passengers.find(element => element.name.toLowerCase() === 'natan')

console.log(enzo)