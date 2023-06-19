const nome = prompt("DIGITE SEU NOME: ")
let cidades = ""
let numberCidades = 0

let cidadeSimNao = prompt("JÁ VISOU ALGUMA CIDADE? (Sim/Não)")

while(cidadeSimNao === "Sim") {
    let nomeCidade = prompt("QUAL O NOME DELA?")
    cidades += nomeCidade + " - "
    numberCidades++

    cidadeSimNao = prompt("JÁ VISITOU OUTRA CIDADE?? (Sim/Não)")
}

alert(
    nome + " visitou " + numberCidades + " cidades" + "são elas: " + cidades
)