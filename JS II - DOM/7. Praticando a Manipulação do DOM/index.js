function addContact() {
    const contactSection = document.getElementById('contacts-list')

    const h3 = document.createElement('h3')
    h3.innerText = 'Lista de contatos'

    const ul = document.createElement('ul')

    const nameLi = document.createElement('li')
    nameLi.innerText = 'Nome:'
    const input = document.createElement('input')
    input.type = 'text'
    input.name = 'fullname'
    nameLi.appendChild(input)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement('br'))

    const phoneLi = document.createElement('li')
    phoneLi.innerText = 'Telefone:'
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'phone'
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement('br'))

    const addressli = document.createElement('li')
    addressli.innerText = 'Endereço:'
    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'address'
    addressInput.id = 'address'
    addressli.appendChild(addressInput)
    ul.appendChild(addressli)
    ul.appendChild(document.createElement('br'))

    contactSection.append(h3, ul)
}

function removeContact() {
    const contactSection = document.getElementById('contacts-list')

    const title = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(title[title.length -1])
    contactSection.removeChild(contacts[contacts.length -1])
}