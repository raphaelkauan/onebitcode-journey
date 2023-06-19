let entrada = ""

do {
    entrada = prompt("CARDÁPIO:" + "\n" + "Pizza " + "\n" + "Uva " + "\n" + "Morango " + "\n" + "Banana" + "\n" + "Encerrar")
    
    switch(entrada) {
        case "Pizza":
            alert("A OPÇÃO ESCOLHIDA FOI: " + entrada)
        break
        case "Uva":
            alert("A OPÇÃO ESCOLHIDA FOI: " + entrada)
        break
        case "Morango":
            alert("A OPÇÃO ESCOLHIDA FOI: " + entrada)
        break
        case "Banana":
            alert("A OPÇÃO ESCOLHIDA FOI: " + entrada)
        break
        case "Encerrar": 
            alert("Programa encerrado!")
        break
        default:
            alert("Error!")
    }

} while (entrada !== "Encerrar")