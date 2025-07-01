/*
Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

Dados de entrada:
5
50
10
98
23

Saída:
98
*/
const {gets, print} = require('./exercicio-funcoes-auxiliares.js');

print('--- Números de entrada ---');

const numerosSorteados = [];

for(let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    print(numeroSorteado);
    numerosSorteados.push(numeroSorteado);
}

print('--- Maior número sorteado ---');
for(let i = 0; i < numerosSorteados.length; i++) {
    if(i === 0) {
        var maiorNumero = numerosSorteados[i];
    } else {
        if(numerosSorteados[i] > maiorNumero) {
            maiorNumero = numerosSorteados[i];
        }
    }
}