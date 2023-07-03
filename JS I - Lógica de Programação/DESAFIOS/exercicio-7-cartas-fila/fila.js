const fila = ['raphael', 'gabriel', 'jhe']

for(let i = 0; i < fila.length; i++) {
    filaIndice = fila[i]
    alert(filaIndice + ' ' + i + ' °')
}

let desejo = prompt('deseja? novo paciente/consultar paciente/sair')

while (desejo === 'novo paciente' || desejo === 'consultar paciente') {

    if (desejo === 'novo paciente') {
        const addFila = prompt('Nome do novo paciente: ')
        fila.push(addFila)
    } else if(desejo === 'consultar paciente'){
        alert('você retirou ' + fila.shift(fila))
    }

    for(let i = 0; i < fila.length; i++) {
        filaIndice = fila[i]
        alert(filaIndice + ' ' + i + ' °')
    }

    desejo = prompt('deseja? novo paciente/consultar paciente/sair')
}

