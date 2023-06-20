let number1 = prompt("Digite o primerio valor: ")
let number2 = prompt("Digite o segundo valor: ")

let num1 = parseInt(number1)
let num2 = parseInt(number2)

let soma = num1 + num2
let subtracao = num1 - num2
let multiplicacao = num1 * num2
let divisao = num1 / num2

alert(
    "Soma: " + soma + "\n" +
    "Subtracao: " + subtracao + "\n" +
    "Multiplicação: " + multiplicacao + "\n" +
    "Divisão: " + divisao
)