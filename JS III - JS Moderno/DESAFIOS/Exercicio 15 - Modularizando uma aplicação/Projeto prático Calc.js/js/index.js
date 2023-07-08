import calculate from './calculete.js'
import copyToClipboard from './copyToClipboard.js'
import themeSwitcher from './themeSwitcher.js'

const input = document.getElementById('input')
const resultInput = document.getElementById('result')

export const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach((charKeyBtn) => {
    charKeyBtn.addEventListener('click', () => {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', () => {
    input.value = ''
    input.focus()
})

input.addEventListener('keydown', (event) => {
    event.preventDefault()
    if(allowedKeys.includes(event.key)) {
        input.value += event.key
        return
    }
    if(event.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
    if(event.key === 'Enter') {
        calculate()
    }
})

document.getElementById('equal').addEventListener('click', calculate)

document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)

document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)