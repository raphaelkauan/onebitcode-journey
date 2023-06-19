let nome = window.prompt("digite o seu nome: ")
let sobrenome = window.prompt("digite o seu sobrenome: ")
let campoEstudo = window.prompt("digite o seu campo de estudo: ")
let anoNasc = window.prompt("digite o seu ano de nascimento: ")

let idade = 2023 - anoNasc

alert(
    "Recruta cadastrado com sucesso!" +
    "seu nome é " + nome + " " + sobrenome + "\n" +
    "seu campo de estudo é " + campoEstudo + "\n" +
    "sua idade é de " + (idade)
)