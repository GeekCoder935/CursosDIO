class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos.`);
    }
}

const rafael = new Pessoa("Rafael", 25);
console.log(rafael); // Pessoa { nome: 'Rafael', idade: 25 }
const joao = new Pessoa("João", 30);
console.log(joao); // Pessoa { nome: 'João', idade: 30 }

// Outro jeito de instanciar a classe Pessoa sem passar os parâmetros no construtor
// const rafael = new Pessoa();
// console.log(rafael); // Pessoa { nome: undefined, idade: undefined }
// rafael.nome = "Rafael";
// rafael.idade = 25;
// console.log(rafael); // Pessoa { nome: 'Rafael', idade: 25

// const joao = new Pessoa();
// joao.nome = "João";
// joao.idade = 30;
// console.log(joao); // Pessoa { nome: 'João', idade: 30 }    

// rafael.descrever(); // Meu nome é Rafael, tenho 25 anos.
// joao.descrever(); // Meu nome é João, tenho 30 anos.    



function compararPessoas(pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        console.log(`${pessoa1.nome} é mais velho que ${pessoa2.nome}.`);
    } else if (pessoa1.idade < pessoa2.idade) {
        console.log(`${pessoa1.nome} é mais novo que ${pessoa2.nome}.`);
    } else {
        console.log(`${pessoa1.nome} e ${pessoa2.nome} têm a mesma idade.`);
    }
}

const vitor = new Pessoa("Vitor", 28);
const maria = new Pessoa("Maria", 22);
compararPessoas(vitor, maria); // Vitor é mais velho que Maria.
compararPessoas(maria, vitor); // Maria é mais nova que Vitor.