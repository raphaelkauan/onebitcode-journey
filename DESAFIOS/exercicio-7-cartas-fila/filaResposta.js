let fila = []
let opcao = []

do {
    let pacientes = ''
    for(let i = 0; i<fila.length; i++) {
        pacientes += (i + 1) + '° - ' + fila[i] + '\n'
    }

    opcao = prompt(
        'Paciente: ' + pacientes + '\n' +
        '\n Escolha uma ação:\n.1. Novo paciente\n2. Consultar paciente\n3. Sair'
    )

    switch(opcao) {
        case '1':
            let novoPaciente = prompt('Nome: ')
            fila.push(novoPaciente)
        break
        case '2':
            const consutado = fila.shift()
            if(consutado) {
                alert('Paciente consultado ' + consutado)
            } else {
                alert('Paciente não encontrado')
            }
        break
        case '3':
            alert('Encerrando...')
        break
        default:
            alert('Error!')
        break

    }

} while (opcao !== "3");