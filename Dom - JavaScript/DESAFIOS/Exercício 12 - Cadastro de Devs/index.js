function createLabel(text, labelFor) {
    const label = document.createElement('label')
    label.innerText = text
    label.htmlFor = labelFor
    return label
}

function createInput(id, value, name, type = 'text', placeholder = '') {
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

const newTech = document.getElementById('btn')
const formContent = document.getElementById('formContent')
const devs = []
let inputsLinhas = 0

newTech.addEventListener('click', (event) => {
    const linhaUl = document.getElementById('linhaUl')

    const novaLinha = document.createElement('li')
    const linhaIndice = inputsLinhas
    inputsLinhas++
    novaLinha.id = 'inputLinhas-' + linhaIndice
    novaLinha.className = 'inputLinhas'

    const nameTechLabel = createLabel('Nome:', 'nameTech-' + linhaIndice)
    const nameTechInput = createInput('nameTech' + linhaIndice, null, 'nameTech')

    const tempoExp = createLabel('Tem de Experiência: ')

    const tempoExpRadio01 = createInput('tempoExp' + linhaIndice + '01', '0-2 Anos', 'techExp-' + linhaIndice, 'radio')
    const tempoExpLabel01 = createLabel('02 - Anos', linhaIndice + '01')

    const tempoExpRadio02 = createInput('tempoExp' + linhaIndice + '02', '3-4 Anos', 'techExp-' + linhaIndice, 'radio')
    const tempoExpLabel02 = createLabel('3-4 Anos', linhaIndice + '02')

    const tempoExpRadio03 = createInput('tempoExp' + linhaIndice + '03', '5+ Anos', 'techExp-' + linhaIndice, 'radio') 
    const tempoExpLabel03 = createLabel('5+ Anos', linhaIndice + '03')

    const removerLinhaBuuton = document.createElement('button')
    removerLinhaBuuton.type = 'button'
    removerLinhaBuuton.innerText = 'Remover'
    removerLinhaBuuton.addEventListener('click', () => {
        linhaUl.removeChild(novaLinha)
    })

    novaLinha.append(
        nameTechLabel, nameTechInput, 
        tempoExp, 
        tempoExpRadio01, tempoExpLabel01,
        tempoExpRadio02, tempoExpLabel02,
        tempoExpRadio03, tempoExpLabel03,
        removerLinhaBuuton
        )

    linhaUl.appendChild(novaLinha)
})

formContent.addEventListener('submit', (event) => {
    event.preventDefault()

    const nomeCompleto = document.getElementById('name')
    const inputsLinhas = document.querySelectorAll('.inputLinhas')

    let tecnologias = []
    inputsLinhas.forEach(function(element) {
        const nomeTecnologia = document.querySelector('#' + element.id + ' input[name="nameTech"]').value
        const expTecnologia = document.querySelector('#' + element.id + ' input[type="radio"]:checked').value

        tecnologias.push({ name: nomeTecnologia, exp: expTecnologia })

        const novoDev = { nomeCompleto: nomeCompleto.value, tecnologias:tecnologias }
        devs.push(novoDev)
        alert('Dev cadastrado com sucesso!')

        nomeCompleto.value = ''
        inputsLinhas.forEach(function (linha) {
            linha.remove()
        })

        console.log(devs)
    });
})