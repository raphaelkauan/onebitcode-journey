const nomeAtacante = prompt("INSIRA O NOME DO PRIMEIRO PERSONAGEM:")
const poderAtaque = prompt("INSIRA O PODER DE ATAQUE DO PRIMEIRO PERSONAGEM:")

poderAtaquePerso1 = parseInt(poderAtaque)

const nomeDefensor = prompt("INSIRA O NOME DO SEGUNDO PERSONAGEM:")
let pontosDeVida = prompt("INSIRA A QUANTIDADE DE PONTOS DE VIDA DO SEGUNDO PERSONAGEM:")
let poderDefesa = prompt("INSIRA O PODER DE DEFESA DO SEGUNDO PERSONAGEM:")
const possuiEscudo = prompt("POSSUI ESCUDO? (Sim/Não)")

let pontosDeVida2 = parseInt(pontosDeVida)
let poderDefesa2 = parseInt(poderDefesa)

let dano = 0
if (poderAtaquePerso1 > poderDefesa2 && possuiEscudo === "Não") {
    dano = poderAtaquePerso1 - poderDefesa2
} else if (poderAtaquePerso1 > poderDefesa2 && possuiEscudo === "Sim") {
    dano = poderAtaquePerso1 - poderDefesa2 / 2
} else {
    alert("error!")
}

pontosDeVida2 -= dano

alert(nomeAtacante + " " + "causou" + " " + dano + " " + "pontos de dano em" + " " + nomeDefensor)

alert(
    nomeDefensor + " " + "ficou com pontos de vida" + " " + pontosDeVida2 + "\n" +
    "possuia escudo" + " " + possuiEscudo
)