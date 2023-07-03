let number = window.prompt("QUAL NÚMERO DE MULTIPLICAR")

let tabuda = "TABUADA: \n"

for(let i = 0; i <= 20; i++) {
    let mult = number * i
    
    tabuda += "\n" + number + " X " + i + " = " + mult
}

alert(tabuda)
