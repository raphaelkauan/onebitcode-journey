const valorEmMetros = prompt("DIGITE UM VALOR EM METROS:")

let mm = valorEmMetros * 1000
let cm = valorEmMetros * 100
let dm = valorEmMetros * 10
let dam = valorEmMetros / 10
let hm = valorEmMetros / 100
let km = valorEmMetros / 1000

let convertor = prompt("PARA QUAL VALOR GOSTARIA DE CONVERTE?" + "\n" + 
"milímetro = mm" + "\n" +
"centímetro = cm" + "\n" +
"decimetro = dm" + "\n" +
"decâmetro = dam" + "\n" +
"hectômetro = hm" + "\n" +
"quilômetro = km" + "\n"
 
)

switch (convertor) {
    case "mm":
        alert("valor em milímetro: " + mm)
    break
    case "cm":
        alert("valor em centímetro: " + cm)
    break
    case "dm":
        alert("valor em decimetro: " + dm)
    break
    case "dam":
        alert("valor em decâmetro: " + dam)
    break
    case "hm":
        alert("valor em hectômetro: " + hm)
    break
    case "km":
        alert("valor em quilômetro: " + km)
    break
    default:
        alert("Error!")
}
