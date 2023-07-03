function show() {
    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    const listElements = document.getElementsByTagName('li')
    console.log(listElements)
    
    const contactInputs = document.getElementsByClassName('contact-input')
    console.log(contactInputs)

    const contacts = document.querySelectorAll('#contact-list > button')
    console.log(contacts)

    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)

    const firsContact = document.querySelector('#contact-list > li > label')
    console.log(firsContact)
}