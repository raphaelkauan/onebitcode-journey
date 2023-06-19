const nomeCarro1 = prompt("INSIRA O NOME DO PRIMEIRO CARRO:")
const velocidadeCarro1 = prompt("INSIRA A VELOCIDADE DO " + nomeCarro1.toUpperCase())

const nomeCarro2 = prompt("INSIRA O NOME DO SEGUNDO CARRO:")
const velocidadeCarro2 = prompt("INSIRA A VELOCIDADE DO " + nomeCarro2.toUpperCase())

if (velocidadeCarro1 > velocidadeCarro2) {
    alert(nomeCarro1.toUpperCase() + " " + "É MAIS VELOZ")
} else if ( velocidadeCarro1 < velocidadeCarro2) {
    alert(nomeCarro2.toUpperCase() + " " + "É MAIS VELOZ")
} else {
    alert("ESTÃO NA MESMA VELOCIDADE")
}