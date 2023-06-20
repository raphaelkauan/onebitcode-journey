function calcularMedia(a, b) {
    const media = (a + b) /2

    return media
}

const resultado = calcularMedia(7, 2)

// console.log(resultado)

function criarProduto(nome, preco) {
    const produto = {
        nome, // nome: nome
        preco,
        estoque: 1
    }
    return produto
}

const notebook = criarProduto('Nitro 5', 200)
console.log(notebook)


function areRetangular(base, altura) {
    return area = base * altura
}

function areaQuadrada(lado) {
    return areRetangular(lado, lado)
}

console.log(areRetangular(5, 10)) 

console.log(areaQuadrada(9))

// Uma função só pode retornar uma única vez
function ola() {
    let texto = '...'
    return texto
    texto = 'kauan'
    console.log(texto)
}

function maiorIdade(idade) {
    if (idade >= 18) {
        return 'Maior de idade'
    } else {
        return 'Menor de idade'
    }
}

console.log(maiorIdade(19))
console.log(maiorIdade(12))