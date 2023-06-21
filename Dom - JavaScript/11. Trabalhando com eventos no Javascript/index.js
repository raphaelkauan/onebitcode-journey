function register(ev) {
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if(password === passwordConfirmation) {
        alert('Usuario ' + username + ' registrado!')
    } else {
        alert('Senhas não conferem')
    }
}

const btn = document.getElementById('register-button')
btn.addEventListener('click', register)

function removeEvent() {
    btn.removeEventListener('click', register)

    alert('Evento removido!')
}