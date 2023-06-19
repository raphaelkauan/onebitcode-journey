let cartas = ['valete', 'dama']

let desejo = prompt('cartas: ' + cartas + '\n' + 'escolha uma opção: adicionar uma carta/ puxar uma carta/ sair')

while (desejo === "adicionar uma carta" || desejo === "puxar uma carta") {

    switch (desejo) {
        case 'adicionar uma carta':
            cartas.push(prompt('nova carta: '))
            alert(cartas)
        break
        case 'puxar uma carta':
            let puxar = cartas.pop(cartas)
            alert('você retirou: ' + puxar + '\n' + ' cartas: ' + cartas)
        break
        case 'sair':
            desejo = 'sair'
        break
    }

    desejo = prompt('escolha uma opção: adicionar uma carta/ puxar uma carta/ sair')

}


