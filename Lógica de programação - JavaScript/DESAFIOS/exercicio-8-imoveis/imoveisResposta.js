let imoveis = []
let opcao = ''

do {
    opcao = prompt(
        'Bem-vindo(a) ao Cadastro de Imóveis!\n' +
        'Total de Imóveis: ' + imoveis.length +
        '\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair'
    )

    switch(opcao) {
        case '1':
            const imovel = {}

            imovel.nome = prompt('Nome: ')
            imovel.quartos = prompt('Quantos quartos: ')
            imovel.banheiros = prompt('Quantos banheiros: ')
            imovel.garagem = prompt('Garagem: Sim/Não')

            const confirmacao = confirm(
                'Salvar esse imóvel?\n' +
                '\nnome: ' + imovel.nome +
                '\nquartos: ' + imovel.quartos +
                '\nbanheiros: ' + imovel.banheiros +
                '\ngaragem: ' + imovel.garagem 
            )

            if (confirmacao) {
                imoveis.push(imovel)
                alert('Imóvel salvo com sucesso!')
            } else {
                alert('Voltando para o menu!')
            }
        break
        case '2':
            for (let i = 0; i < imoveis.length; i++) {
                alert('Imóvel' + (i + 1) +
                'Nome:  ' + imoveis[i].nome +
                'Quartos:  ' + imoveis[i].quartos + 
                'Banheiros:  ' + imoveis[i].banheiros + 
                'Garagem:  ' + imoveis[i].garagem
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