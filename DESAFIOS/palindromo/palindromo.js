let palavra = prompt("INSIRA UMA PALAVRA: ")

let palavraReverse = ""

for(let i = palavra.length - 1; i >= 0; i--) {
    palavraReverse += palavra[i]
}

if (palavra === palavraReverse) {
    alert(palavra.toUpperCase() + " É UM POLÍNDROMO")
} else {
    alert("NÃO É UM POLÍNDROMO!")
    alert("NORMAL: " + palavra + "\n" + "REVERSE: " + palavraReverse)
}
