let opcao
let result = ''

do {
    opcao = prompt(
        'Bem vindo a minha Calculadora!\n' + 
        'Escolha uma opção para fazer o Calculo:\n1. triângulo\n2. retângulo\n3. quadrado\n4. trapézio\n5. círculo\n6. sair'
    )

    function triangulo(base, altura) {
        const triangulo = (base * altura) / 2
        return triangulo
    }

    function retangulo(base, altura) {
        const retangulo = base * altura
        return retangulo
    }
    
    function quadrado(lado) {
        const quadrado = lado * lado
        return quadrado
    }

    function trapezio(baseMenor, baseMaior, altura) {
        const trapezio = ((baseMenor + baseMaior) * altura) / 2
        return trapezio
    }

    function circulo(pi, raio) {
        const circulo = pi * (raio * raio) 
        return circulo
    }

    switch(opcao) {
        case '1':
            result = triangulo(base = prompt('BASE: '), altura = prompt('ALTURA: '))
            alert('Área do triângulo: ' + result)
        break
        case '2':
            result = retangulo(base = prompt('BASE: '), altura = prompt('ALTURA: '))
            alert('Área do retângulo: ' + result)
        break
        case '3':
            result = quadrado(lado = prompt('LADO: '))
            alert('Área do quadrado: ' + result)
        break
        case '4':
            result = trapezio(baseMenor = parseFloat(prompt('BASE MENOR: ')), baseMaior = parseFloat(prompt('BASE MAIOR: ')), altura = prompt('ALTURA: '))
            alert('Área do trapézio: ' + result)
        break
        case '5':
            result = circulo(pi = 3.14, raio = prompt('RAIO: '))
            alert('Área do circulo: ' + result)
        break
        case '6':
            alert('Saindo...')
        break
        default:
            alert('Error!')
        break
    }

} while (opcao !== '6');