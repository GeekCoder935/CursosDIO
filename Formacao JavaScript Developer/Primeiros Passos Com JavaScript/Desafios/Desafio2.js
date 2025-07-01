
// Imprima o maior numero par e o menor numero impar.

// Exemplo:
// Entrada:
// 5
// 3
// 4
// 1
// 10
// 8

// Saída:
// Maior número par: 10
// Menor número impar: 1
main();

function main() {
    let numeros = [5, 3, 4, 1, 10, 8]; 
    console.log("Maior número par:", encontraMaiorParMenorImpar(numeros).maiorPar);
    console.log("Menor número ímpar:", encontraMaiorParMenorImpar(numeros).menorImpar);

}

function encontraMaiorParMenorImpar(numeros) {
    let maiorPar = null;
    let menorImpar = null;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) { // Verifica se é par
            if (maiorPar === null || numeros[i] > maiorPar) {
                maiorPar = numeros[i];
            }
        } else { // É ímpar
            if (menorImpar === null || numeros[i] < menorImpar) {
                menorImpar = numeros[i];
            }
        }
    }

    return { maiorPar, menorImpar };
}