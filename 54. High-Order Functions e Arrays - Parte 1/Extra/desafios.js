// Adicione o ano de nascimento das crianças para cada elemento do array

const { childrenAge, mailList, shopCart} = require('./data')

const dataNasc = childrenAge.map(element => {
    return {
        idade: element,
        dataNas: 2023 - element
    }
})

console.table(dataNasc)

//  Crie um array somente com os domínios da lista de email

const domains = mailList.map(mail => {
    const mailArray = mail.split('@')
    return mailArray[1]
})

console.log(domains)

// Encontre o maior preço dos produtos abaixo de 100 reais

const bellow100 = shopCart.filter(product => product.unitPrice < 100).sort((a, b) => b - a)[0]

console.log(bellow100)