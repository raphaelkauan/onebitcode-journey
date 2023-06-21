function register(element) {
    const nome = element.children.nome.value
    const senha = element.children.senha.value
    const confirmarSenha = element.children.confirmarSenha.value

    if(senha === confirmarSenha) {
        alert('Usuário ' + nome + ' cadastrado!')
    } else {
        alert('Senhas não conferem')
    }
}