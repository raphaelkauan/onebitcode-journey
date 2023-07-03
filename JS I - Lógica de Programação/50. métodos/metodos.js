let pessoa = {
    nome: 'raphael',
    idade: '19',
    dizerOla() {
        console.log('Olá, meu nome é ' + this.nome  + this.idade)
    }
}

// Método dizerOla dentro do objeto pessoa
pessoa.dizerOla()
