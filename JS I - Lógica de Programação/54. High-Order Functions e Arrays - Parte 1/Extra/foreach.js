// FOREACH
// Não Imutável

const { passengers } = require('./data')

// 1. Adicione a idade (age) para cada pessoa   

passengers.forEach(element => element.idade = 2023 - element.birthYear)

console.log(passengers)