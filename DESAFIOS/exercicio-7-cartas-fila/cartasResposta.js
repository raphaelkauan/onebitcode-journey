const baralho = []
let opcao = []

do {
    opcao = prompt(
        'Cartas no baralho: ' + baralho.length +
        '\n1. Adicionar nova carta \n2. Puxar carta \n 3. Sair' 
    )

    switch(opcao) {
        case '1':
            const novaCarta = prompt('Nova carta: ' )
            baralho.push(novaCarta)
        break
        case '2':
            const cartaPuxada = baralho.pop()
            if (!cartaPuxada) {
                alert('Não tem carta')
            } else {
                alert('Você puxou: ' + cartaPuxada)
            }
        break
        case '3':   
            alert('Saindo...')
        break
        default:
            alert('Error!')
        break
    }
    
} while (opcao !== '3');