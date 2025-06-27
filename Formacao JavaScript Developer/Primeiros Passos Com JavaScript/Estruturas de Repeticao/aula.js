const alunos = ['Joao', 'Maria', 'Pedro', 'Ana', 'Lucas'];
console.log(alunos);
console.log(alunos[0]); // Joao

alunos.push('Carla'); // Adiciona Carla ao final do array
console.log(alunos);


const notas = [];
notas.push(10);
notas.push(8);
notas.push(9);

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma += nota;
}
const media = soma / notas.length;
console.log(media);

// const nome = 'Rafael Antonio Ferreira Borges'

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i])
// }



