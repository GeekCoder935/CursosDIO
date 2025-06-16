const precoCombustivel = 5.5; // Preço do combustível por litro
let distancia = 100; // Distância a ser percorrida em km
let consumo = 10; // Consumo do carro em km/litro
let precoTotal = (distancia / consumo) * precoCombustivel; // Cálculo do preço total
console.log(`O preço total da viagem é: R$ ${precoTotal.toFixed(2)}`); // Exibe o preço total formatado com duas casas decimais