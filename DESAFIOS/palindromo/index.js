let palavra = prompt("INSIRA UMA PALAVRA")

invertString(palavra)
function invertString (String) {
    // Transf a String em array
    let strArr = String.split("")

    // Inverter a ordem
    let arrInverse = strArr.reverse()

    // De array para String
    strReverse = arrInverse.join("")
}

if (palavra === strReverse) {
    alert(palavra.toUpperCase() + " É UM POLÍNDROMO")
} else {
    alert("NÃO É UM POLÍNDROMO!")
    alert("NORMAL: " + palavra + "\n" + "REVERSE: " + strReverse)
}
