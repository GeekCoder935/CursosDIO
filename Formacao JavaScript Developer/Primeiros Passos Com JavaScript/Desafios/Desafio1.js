// 1) Faça um programa que receba a média de um aluno.
2 // Caso a média seja < 5 imprima "Reprovado"
3 // Caso a média seja >= 5 e < 7 imprima "Recuperação"
4 // Caso a média seja >= 7 imprima "Aprovado"
5
6 // Exemplo:
7 // Entrada:
8 // 5.5
9 // Saída:
10// Recuperação
main()

function main() {
    const notas = [5.5, 7, 10, 6, 5]; // Substitua pelo valor de entrada desejado
    let media = calculaMedia(notas);
    console.log(verificaSituacao(media));
}

function calculaMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

function verificaSituacao(media) {
    if (media < 5) {
        return "Reprovado";
    } else if (media >= 5 && media < 7) {
        return "Recuperação";
    } else {
        return "Aprovado";
    }
}