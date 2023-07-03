let imoveis = []
let opcao = ''

do {
    opcao = prompt(
        'Seja bem-vindo(a)\n' +
        'Quantidade de Imóveis: ' + imoveis.length +
        '\nEscolha uma opção:\n\n1. Salvar imóvel\n2. Mostrar imóveis\n3. Sair'
    )

    switch(opcao) {
        case '1':
            const imovel = {}

            imovel.nome = prompt('Nome: ') 
            imovel.quartos = prompt('Quantidade de quartos: ') 
            imovel.banheiros = prompt('Quantidade de banheiros: ') 

            do {
                imovel.garagem = prompt('Tem garagem? Sim/Não: ') 

                // Converter a resposta para letras minúsculas
                imovel.garageToUpperCase = imovel.garagem.toUpperCase()
    
                if (imovel.garageToUpperCase === 'SIM') {
                    imovel.garagem = true
                } else if (imovel.garageToUpperCase === 'NÃO' || imovel.garageToUpperCase === 'NAO') {
                    imovel.garagem = false 
                } else {
                    alert('Por favor, digite Sim/Não')
                }
            } while (imovel.garagem !== true && imovel.garagem !== false);
            
            let confirmacao = confirm('Deseja adicionar esse imóvel?\n' + imovel.nome)

            if (confirmacao) {
                imoveis.push(imovel)
                alert('Imóvel salvo com sucesso!')
            } else {
                alert('Voltando...')
            }
        break
        case '2':
            for(let i = 0; i < imoveis.length; i++) {
                alert( 'Imóvel: ' + (i + 1) +
                    'Nome: ' + imoveis[i].nome +
                    'Quantos: ' + imoveis[i].quartos +
                    'Banheiros: ' + imoveis[i].banheiros +
                    'Carage: ' + imoveis[i].garagem
                )
            }
        break
        case '3': 
            alert('Encerrando...')
        break
        default:
            alert('Error!')
        break
    }
    
} while (opcao !== '3');