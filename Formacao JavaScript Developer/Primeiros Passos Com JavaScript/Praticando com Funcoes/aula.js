// main() Quando tenho uma funcao imediatamente invocada eu nao preciso chamar ela
// Ela é executada automaticamente quando o script é carregado

(function main() {
    sayMyName("Rafael Borges");
    const valor = quadrado(10)
    
})(); // Essa é uma funcao classificada como imediatamente invocada

function sayMyName(name) {
    console.log("Your name is " + name);
}

function quadrado(valor) {
    valorCalculado = valor * valor;
    console.log("O quadrado de " + valor + " é " + valorCalculado);
    return valorCalculado;
}



