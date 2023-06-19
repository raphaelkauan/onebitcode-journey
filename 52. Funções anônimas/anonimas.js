function somar(a, b) {
    return a + b
}

const operacao = somar

console.log(operacao(50, 50))

const subtrair = function(a, b) {
    return a - b
}

console.log(subtrair(10, 10))

// Exibe um erro:

olamundo()
oiMundo()

function olamundo() {
    console.log('Olá, mundo!')
}

const oiMundo = function() {
    console.log('Oi, mundo!')
}