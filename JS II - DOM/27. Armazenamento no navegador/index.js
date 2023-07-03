document.getElementById('sessionBtn').addEventListener('click', () => {
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
})

document.getElementById('readSession').addEventListener('click', () => {
    const info = sessionStorage.getItem('info')
    alert(info)
})

document.getElementById('localBtn').addEventListener('click', () => {
    const input = document.getElementById('local')
    localStorage.setItem('text', input.value)
    input.value = ''
})

document.getElementById('localSession').addEventListener('click', () => {
    const info2 = localStorage.getItem('text')
    alert(info2)
})

document.getElementById('cookieBtn').addEventListener('click', () => {
    const input = document.getElementById('cookie')
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2024,9, 9) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', () => {
    const input = document.getElementById('cookie2')
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'text=' + input.value + ';'
    const expiration = 'expires=' + new Date(2024,9, 9) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})
