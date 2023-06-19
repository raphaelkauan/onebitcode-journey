// FILTER function(element, index, array){}

// Imutável

const { childrenAge, mailList } = require('./data')

// 1. Criança entre 2 - 11 anos

const idadesEntre = childrenAge.filter(function (element, index, array) {
    return element >= 5 && element <= 10
}) 

console.table(idadesEntre)

// 2. Emails rocketseat.com.br

const emailsRock = mailList.filter(function (element, index, array){
    return element.includes('@rocketseat.com')
})

console.table(emailsRock)