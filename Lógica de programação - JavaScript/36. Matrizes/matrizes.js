/* const arrBidimensional = [
    '1° Nível',
    ['2 Nível', 42, true],
    [
        ['3° Nível', '1° item', 'Olá, mundo!'],
        ['3° Nível', '1° item', 'Oi, mundo!']
    ],
    []
]

console.log(arrBidimensional)
console.log(arrBidimensional[0])
console.log(arrBidimensional[1])
console.log(arrBidimensional[1] [0])
console.log(arrBidimensional[1] [1])
console.log(arrBidimensional[2] [1] [0]) */

// Podemos ver claramente a estrutura de uma matriz em uma tabela
const matriz = [
    ["1", "2", "3", "4"],
    ["5", "6", "7", "8"],
    ["9", "10", "11", "12"],
  ]

/*   console.table(matriz)

  matriz.push(['Nova linha'])
  matriz[0].push('Nova coluna')
  matriz[0].push('Nova coluna1')
  matriz[1].push('Entrando no outro arr')

  console.table(matriz) */

  for(let i = 0; i < matriz.length; i++) {
    console.log(matriz[i])
    for(let j = 0; j < matriz[i].length; j++) {
      const elemento = matriz[i][j]
      console.log(elemento)
    }
  }

  // Podemos usar vários níveis de laços FOR para iterar facilmente pela matriz
