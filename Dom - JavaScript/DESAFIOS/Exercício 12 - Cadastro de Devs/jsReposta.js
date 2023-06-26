function createLabel(text, htmlFor) {
    const label = document.createElement('label')
    label.innerText = text
    label.htmlFor = htmlFor
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

const addNovaTech = document.getElementById('addNovaTech')
const devForm = document.getElementById('devForm')
const developers = []
let inputRows = 0

addNovaTech.addEventListener('click', function (event) {
    const ulLinhasInputs = document.getElementById('ulLinhasInputs')

    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows ++
    newRow.id = 'inputRow-' + rowIndex
    newRow.className = 'inputRow'

    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
    const techNameInput = createInput('techName-' + rowIndex, null, 'techName')

    const expLabel = createLabel('Experiência: ') 

    const expRadio1 = createInput('expRadio- ' + rowIndex + '.1', '0-2 anos', 'techExp-' + rowIndex, 'radio') // id, value, name, type, placeholder
    const label1 = createLabel('0-2 anos', rowIndex + '.1')

    const expRadio2 = createInput('expRadio- ' + rowIndex + '.2', '3-4 anos', 'techExp-' + rowIndex, 'radio') // id, value, name, type, placeholder
    const label2 = createLabel('3-4 anos', rowIndex + '.2')

    const expRadio3 = createInput('expRadio- ' + rowIndex + '.3', '5+ anos', 'techExp-' + rowIndex, 'radio') // id, value, name, type, placeholder
    const label3 = createLabel('5+ anos', rowIndex + '.3')

    const removerLinhaBtn = document.createElement('button')
    removerLinhaBtn.type = 'button'
    removerLinhaBtn.innerText = 'Remover'
    removerLinhaBtn.addEventListener('click', function () {
        ulLinhasInputs.removeChild(newRow)
    })

    newRow.append(
        techNameLabel, techNameInput, expLabel, expRadio1, label1, expRadio2, label2, expRadio3, label3, removerLinhaBtn
    )

    ulLinhasInputs.appendChild(newRow)
})

devForm.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const fullname = document.getElementById('fullname')
    const inputRows = document.querySelectorAll('.inputRow')

    let technologies = []
    inputRows.forEach(newRow => {
        // #rowId input[name="techName"]
        const techName = document.querySelector('#' + newRow.id + ' input[name="techName"]').value
        const techExp = document.querySelector('#' + newRow.id + ' input[type="radio"]:checked').value
        technologies.push( {name: techName, exp: techExp} )
    })

    const newDev = { fullname: fullname, technologies: technologies }
    developers.push(newDev)
    alert('Dev cadastrado com sucesso!')

    fullname.value = ''
    inputRows.forEach(newRow => {
        newRow.remove()
    })

    console.log(developers)
} )