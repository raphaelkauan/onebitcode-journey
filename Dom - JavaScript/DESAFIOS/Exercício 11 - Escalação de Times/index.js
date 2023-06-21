function addPlayer() {
    const position = document.getElementById('position').value
    const nome = document.getElementById('name').value
    const number = document.getElementById('number').value

    const teamList = document.getElementById('teamList')

    const li = document.createElement('li')
    li.id = "player-" + number
    li.innerText = 'Posição: ' + position + '\n Nome: ' + nome + '\nCamisa: ' + number

    teamList.appendChild(li)
}

function limpar() {
    const position = document.getElementById('position').value = ''
    const nome = document.getElementById('name').value = ''
    const number = document.getElementById('number').value = ''
}

function newJogador() {
    const nome = document.getElementById('name').value
    const confirmacao = confirm('Deseja adicionar o jogador: ' + nome)

    if(confirmacao) {
        addPlayer()
        limpar()
    }
}

function removePlayer() {
    const number = document.getElementById('removerJogador').value
    const id = document.getElementById('player-' + number)

    const confirmacao = confirm('Deseja mesmo remover o jogador ' + number)

    if(confirmacao) {
        document.getElementById('teamList').removeChild(id)
        document.getElementById('removerJogador').value = ''
    }
}
