function calcularAreaTriangulo() {
    const base = prompt('BASE: ')
    const altura = prompt('ALTURA: ')
    return base * altura / 2
}

function calcularAreaRetangulo() {
    const base = prompt('BASE: ')
    const altura = prompt('ALTURA: ')
    return base * altura
}

function calcularAreaQuadrado() {
    const lado = prompt('LADO: ')
    return lado * lado
}

function calcularAreaTrapezio() {
    const baseMaior = parseFloat(prompt('BASE MAIOR: '))
    const baseMenor = parseFloat(prompt('BASE MENOR: '))
    const altura = prompt('ALTURA: ')
    return (baseMaior - baseMenor) * altura / 2
}

function calcularAreaCirculo() {
    const raio = prompt('RAIO: ')
    return (3.14 * raio * raio)
}

function exibirMenu() {
    return prompt (
        'Bem vindo a minha Calculadora!\n' + 
        'Escolha uma opção para fazer o Calculo:\n' +
        '\n1. triângulo' +
        '\n2. retângulo' +
        '\n3. quadrado' +
        '\n4. trapézio' +
        '\n5. círculo' +
        '\n6. sair'
    )
}

function sair() {
    alert('Saindo...')
}

function executar() {
    let opcao = ''

    do {
        opcao = exibirMenu()
        let resultado

        switch (opcao) {
            case '1':
                resultado = calcularAreaTriangulo()
            break
            case '2':
                resultado = calcularAreaRetangulo()
            break
            case '3':
                resultado = calcularAreaQuadrado()
            break
            case '4':
                resultado = calcularAreaTrapezio()
            break
            case '5':
                resultado = calcularAreaCirculo()
            break
            case '6':
                resultado = sair()
            break
            default:
                alert('Error!')
            break
        }

        if (resultado) {
            alert('Resultado: ' + resultado)
        }

    } while (opcao !== '6');
}

executar()