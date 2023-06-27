const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
    if(input.value = input.value === '') {
        input.value = 'valor teste'
    } else {
        input.value = ''
    }
})

document.getElementById('type').addEventListener('click', () => {
/*     if (input.type !== 'radio') {
        input.type = 'radio'
    } else {
        input.type = 'text'
    } */

    input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', () => {
    input.placeholder = 'teste'
})

document.getElementById('disable').addEventListener('click', () => {
    input.disabled = 'desabled'
})

document.getElementById('data').addEventListener('click', function() {
    const data = input.dataset.something

    console.log(data)
})