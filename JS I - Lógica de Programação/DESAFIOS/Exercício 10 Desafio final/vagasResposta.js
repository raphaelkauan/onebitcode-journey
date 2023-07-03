let vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce((accumulator, vaga, indice) => {
        // 1. nome, (x candidatos)
        accumulator += indice + '. '
        accumulator += vaga.nome
        accumulator += '( ' + vaga.candidatos.length + ' candidatos)\n'
        return accumulator
    }, '')
    alert(vagasEmTexto)
}

function novaVaga() {
    const nome = prompt('Nome vaga: ')
    const descricao = prompt('Descrição: ')
    const dataLimite = prompt('Data limite (dd//mm/aaaa0): ')

    const confirmacao = confirm('Confirmar?\n' + nome)

    if (confirmacao) {
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert('Vaga criada!')
    }
}

function exibirVaga() {
    const indice = prompt('Índice da vaga que deseja exibir: ')

    if (indice >= vagas.length || indice < 0) {
        alert('Índice inválido')
        return
    }

    const vaga = vagas[indice]

    const candidatoEmTexto = vaga.candidatos.reduce((accumulator, candidato) => {
        return accumulator + '\n - ' + candidato
    }, '')

    alert(
        'Vaga n° ' + indice +
        '\nNome: ' + vaga.nome +
        '\nDescrição: ' + vaga.descricao +
        '\nData limite: ' + vaga.dataLimite + 
        '\nQuantidade de candidatos: ' + vaga.candidato.length +
        '\nCandidatos inscritos: ' + candidatoEmTexto
    )
}

function inscreverCantidato() {
    const candidato = prompt('Nome: ')
    const indice = prompt('Vaga que o cantidato ' + candidato + ' gostaria de se inscrever')
    const vaga = vagas[indice]

    const confirmacao = confirm('Deseja inscrever o candidato ' + candidato)

    if(confirmacao) {
        vaga.candidatos.push(candidato)
        alert('Incrição realizada!')
    }
}

function excluirVaga() {
    const indice = prompt('Informe o índice da vaga que deseja excluir')
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja criar uma nova vaga com essas informações?\n" +
        "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
      )

    if(confirmacao) {
        vagas.splice(indice, 1)
        alert('Vaga excluída!')
    }
}

function exibirMenu() {
    opcao = prompt(
        'Bem vindo(a) Sistema de vagas de emprego!' +
        '\n1. Listar vagas disponíveis' +
        '\n2. Criar um nova vaga' +
        '\n3. Visualizar uma vaga' +
        '\n4. Inscrever um candidato em uma vaga' +
        '\n5. Excluir uma vaga' +
        '\n6. Sair'
    )

    return opcao
}

function executar() {
    let opcao = ''

    do {
        opcao = exibirMenu()

        switch (opcao) {
            case '1':
                listarVagas()
                break
            case '2':
                novaVaga()
                break
            case '3':
                exibirVaga()
                break
            case '4':
                inscreverCantidato()
                break
            case '5':
                excluirVaga()
                break
            case '6':
                alert('Finalizando...')
            default:
                alert('Error!')
                break;
        }

    } while (opcao !== '6');
}

executar()