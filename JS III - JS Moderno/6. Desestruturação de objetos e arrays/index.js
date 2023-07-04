// Cria um obj pessoa
const pessoa = {
    nome: 'raphael',
    idade: 19,
    parentes: ['natan', 'kemilly']
}

// Maneira antiga
console.log(pessoa.nome)

// Desestruturação de objetos
const { idade, parentes } = pessoa
console.log(idade, parentes)

// Desestruturação de arrays
const [primeiro, segundo] = parentes
console.log(primeiro, segundo)

// Desestruturação de funções
function user({nome, idade, parentes}) {
    // Gera número aleatório
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        nome, 
        idade, 
        parentes
    }
}

const alguem = user(pessoa)
console.log(alguem)