const pessoa = { 
    nome: "Rafael",
    idade: 25,
    profissao: "Desenvolvedor",

    descrever: function(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`);
    }
}

console.log(pessoa.nome); // Rafael
console.log(pessoa.idade); // 25
console.log(pessoa.profissao); // Desenvolvedor

pessoa.altura = 1.79;
console.log(pessoa.altura); // 1.79

//delete pessoa.idade;
//console.log(pessoa.idade); // undefined

pessoa.descrever(); // Meu nome é Rafael, tenho undefined anos e sou Desenvolvedor.

const atributo = "idade";
console.log(pessoa[atributo]); // Aqui estou acessando o atributo idade da pessoa via string

pessoa['nome'] = "João";
pessoa.nome = "João"; // Essa linha e a de cima são equivalentes, uma passa o valor do campo da entidade via string e a
// outra via variável.
console.log(pessoa.nome);

