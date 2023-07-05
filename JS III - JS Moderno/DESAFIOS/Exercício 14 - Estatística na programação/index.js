const mediaAritmetica = (...numbers) => {
    const totalNumber = numbers.reduce((acc, num) => acc + num, 0)
    const quantidadeTotal = numbers.length

    const resultado = totalNumber / quantidadeTotal
    return resultado
}

console.log(`Médoa Artimética Simples: ${mediaAritmetica(10, 5, 10, 10)}`)

const mediaPonderada = (...numbers) => {
    const sum = numbers.reduce((accm, { number, peso}) => accm + (number * (peso || 1)), 0)
    const pesoSoma = numbers.reduce((accm, entrada) => accm + (entrada.peso))
    return sum / pesoSoma
}

console.log(`Média Ponderada: ${mediaAritmetica(10, 1000, 100, 100, 100)}`)

// Função para calcular a mediana de um conjunto de números
const median = (...number) => {
    // Clono o array original para não alterar o array de entrada
    const cloneArr = [...number].sort((a, b) => a - b);
    
    // Calcula o índice do valor do meio do array
    const meio = Math.floor(cloneArr.length / 2);
    
    // Verifica se o array tem um número ímpar de elementos
    if (cloneArr.length % 2 !== 0) {
        // Retorna o valor do meio do array como a mediana
        return cloneArr[meio];
    }
    
    // Se o array tiver um número par de elementos, calcula a mediana como a média aritmética
    const primeiraMediana = cloneArr[meio - 1];
    const segundaMediana = cloneArr[meio];
    return mediaAritmetica(primeiraMediana, segundaMediana);
}

console.log(`Mediana: ${median(1, 2, 3, 4)}`)
console.log(`Mediana: ${median(1, 2, 3, 5, 6, 7)}`)
console.log(`Mediana: ${median(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)}`)

// Função para calcular a moda de um conjunto de números
const mode = (...numbers) => {
    // Cria um array para armazenar a quantidade de ocorrências de cada número
    const quantidade = numbers.map(num => {
        // Para cada número, retorna um array contendo o número e a quantidade de ocorrências
        return [
            num,
            numbers.filter(n => {
                // Filtra o array original para contar quantas vezes o número ocorre
                return (num === n).length;
            }).length
        ];
    });

    // Ordena o array quantidade em ordem decrescente com base na quantidade de ocorrências
    quantidade.sort((a, b) => b[1] - a[1]);

    // Retorna o número com a maior quantidade de ocorrências (moda)
    return quantidade[0][0];
}

console.log(`Moda: ${1, 2, 3, 4, 5, 6, 6}`)