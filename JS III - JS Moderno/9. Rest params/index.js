function soma(...numbers) {
    return numbers.reduce((acc, num) => {
       return acc + num
    }, 0)
}

console.log(soma(1, 2, 2))