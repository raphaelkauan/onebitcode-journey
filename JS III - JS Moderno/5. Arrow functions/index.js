// Função normal
function nomalSoma(a, b) {
   return a + b
}

console.log(`Soma normal: ${nomalSoma(5, 5)}`)

// Função anônima
const anonymousSum = function(a, b) {
    return a + b
}

console.log(`Soma anônima: ${anonymousSum(5, 10)}`)

// Arrow function
const arrowSoma = (a, b) => {
    return a + b
}

console.log(`arrow anônima: ${arrowSoma(5, 10)}`)

// Arrow function sem return
const sub = (a, b) => a - b

console.log(`subtração: ${sub(10, 5)}`)

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(element => element[0] === 'P')

console.log(startingWithP)