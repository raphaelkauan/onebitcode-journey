const dayjs = require("dayjs")

function fase(date) {
    const diaAtual = dayjs()
    const aniversario = dayjs(date)

    const idadeAnos = diaAtual.diff(aniversario, 'year') 

    console.log(`Dia atual: ${diaAtual.format('DD/MM/YYYY')}`)
    console.log(`Idade: ${idadeAnos}`)
}

fase('2000-01-20')