const numero = 10;
const eNumeroPar = numero % 2 === 0; 
// Um igual é usado para atribuição
// Dois iguais para comparação de igualdade
// Três iguais para comparação de igualdade estrita

if(numero === 0) {
    console.log("O número é invalido.");
} else if (eNumeroPar) {
  console.log(`O número ${numero} é par.`);
} else {
  console.log(`O número ${numero} é ímpar.`);
}