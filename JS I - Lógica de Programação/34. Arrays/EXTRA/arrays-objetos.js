var arrayObj = [

]

function novoArray() {
    const nome = prompt('Casa: ')
    const rua = prompt('Rua: ')
    const quantosMoradores = parseInt(prompt('Quantas pessoas mora na sua casa: '))

    const novoCadastro = {nome, rua, quantosMoradores}
    arrayObj.push(novoCadastro)
}

function moradores(vetor) {
    let quantMoradores = 0

    for(let i = 0; i < arrayObj.length; i++) {
        quantMoradores = quantMoradores + arrayObj[i].quantosMoradores
    }

    alert(quantMoradores)
}

let opcao = ''

do {
    opcao = prompt('1. Adicionar nova casa\n2. Listar quantidade de moradores\n3. Sair')

    switch (opcao) {
        case '1':
            novoArray()
            break
        case '2':
            moradores(arrayObj)
            break
    }

} while (opcao != '3');

console.log(arrayObj)
