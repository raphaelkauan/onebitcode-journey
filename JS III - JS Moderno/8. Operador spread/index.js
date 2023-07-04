// Array
const arr = ['kauan', 'jhe']

console.log(arr)
// Operador spread
console.log(...arr)
console.log(...arr[0])

// Criando uma copiá
const arrCopy = arr

// Pop remove o útimo elemento
arrCopy.pop()
// Push adiciona um novo elemento
arrCopy.push('natan')

// Exibindo o antigo arr e o novo
console.log({arr, ...arrCopy})

// Clonando o arr
const arrClone = [...arr] 
arrClone.push('kemilly')
console.log(arrClone)

// Criando um obj
const arrObj = {...arr}
console.log(arrObj)

// Clonando obj
const arrObjClone = {...arrObj}
console.log(arrObjClone)

arrObjClone.test = 'teste'

console.log(arrObj, arrObjClone)