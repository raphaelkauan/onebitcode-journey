// MAP
// Imutável

// 1. Quantos anos ele tem?

const { passengers } = require('./data')

const passengersNew = passengers.map(element => {
    return `${element.name} tem ${(2023 - element.birthYear)} anos`
})

console.table(passengersNew)

// 2. Encontre o nome palíndromo

const nomesPalidromos = passengers.map(element => {
    const reverseName = [].map.call(element.name, letter => letter).reverse().join('')

    if(element.name.toLowerCase() === reverseName.toLowerCase())
    return `${element.name} é um palíndromo`
})

console.table(nomesPalidromos)