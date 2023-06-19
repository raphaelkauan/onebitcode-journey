let saldo = prompt("DINHEIRO NA SUA CONTA: ")
saldo = parseFloat(saldo)

let entrada = ""

do {
    entrada = prompt("VOCÊ TEM " + saldo + "$" +
    "\n 1. Adicionar dinheiro" +
    "\n 2. Remover dinheiro" +
    "\n 3. Sair")

    switch(entrada) {
        case "1":
            saldo += parseFloat(prompt("GOSTARIA DE ADICIONAR QUANTOS?"))
            break
        case "2":
            saldo -= parseFloat(prompt("GOSTARIA DE REMOVER QUANDO?"))
            break
        case "3":
            alert("PROGRAMA ENCERRADO!")
            break
        default:
            alert("Error!")
    }

} while (entrada !== "3")