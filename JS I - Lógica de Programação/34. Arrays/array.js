const arr = ["Arroz", "Feijão", "Batata", "Carne"]
console.log(arr)

// Adicionando elementos
// push
const tamanho = arr.push('Uva')
console.log(arr)
console.log(tamanho)

// unshift
const tamanho2 = arr.unshift('Pipoca')
console.log(arr)
console.log(tamanho2)

// Remover Elementos
// pop
const ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// shift
const ultimoElemento2 = arr.shift()
console.log(arr)
console.log(ultimoElemento2)

// Pesquisar por um elemento
// includes

const inclui = arr.includes("Arroz")
console.log(inclui)

// indexOf
const indice = arr.indexOf("Arroz")
console.log(indice)

// Cortar e Concatenar
// slice
const novoArr = arr.slice(0, 2)
const novoArrReverse = arr.slice(-2)
console.log(arr)
console.log(novoArr)
console.log(novoArrReverse)

const arrConcati = arr.concat(novoArr)
console.log(arrConcati)

// Iterar sobre os Elementos
for (let i = 0; i < arrConcati.length; i++) {
    const elemento = arrConcati[i]
    console.log(elemento)
}