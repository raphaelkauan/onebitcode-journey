function dobro(x) {
    alert('O dobro de ' + x + ' = ' + (x * 2))
}

// dobro(5)

function dizerOla(nome = 'pedro') {
    alert('Olá ' + nome + '!')
}

// dizerOla('kauan')
// dizerOla()

function soma(a, b) {
    alert('O resultado da soma: ' + (a + b))
}

// soma(5, 5)

function criarUser(nome, email, senha, tipo) {
    const user = {
        nome: nome,
        email: email,
        senha: senha,
        tipo: tipo
    }

    console.log(user)
}

// criarUser('raphael', 'raphael@gmail.com', 123, 'solteiro')

function muitosParametros(nome, email, senha, tipo, idade) {
    alert(nome + email + senha + tipo + idade)
}

// muitosParametros('raphael', 'raphael@gmail.com', 123, 'homem', 19)

function objetoComoParametro(user) {
    user.nome
    user.idade

    alert(user.nome + user.idade)
}

const dadosUser = {
    nome: 'raphael',
    idade: 19
}

objetoComoParametro(dadosUser)