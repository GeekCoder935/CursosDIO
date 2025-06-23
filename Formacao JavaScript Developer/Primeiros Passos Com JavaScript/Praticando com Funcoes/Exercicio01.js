function exibeNome(nome) {
    console.log("O nome é: " + nome);
}   

function verificaIdade(idade) {
    if (idade >= 18) {
        console.log("Você é maior de idade.");
    } else {
        console.log("Você é menor de idade.");
    }
}

(function main() {
    exibeNome("Rafael Borges");
    verificaIdade(20);
})();