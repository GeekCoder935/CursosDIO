let precoEtanol = 3.00;
let precoGasolina = 4.50;
let tipoCombustivel = "Gasolina"; // Pode ser "Etanol" ou "Gasolina"
let kmPorLitro = 10; // Consumo do veículo em km por litro
let distanciaPercorrida = 100; // Distância a ser percorrida em km

if(tipoCombustivel === "Etanol") {
    let custoEtanol = (distanciaPercorrida / kmPorLitro) * precoEtanol;
    console.log(`Custo total com Etanol: R$ ${custoEtanol.toFixed(2)}`);
} else if(tipoCombustivel === "Gasolina") {
    let custoGasolina = (distanciaPercorrida / kmPorLitro) * precoGasolina;
    console.log(`Custo total com Gasolina: R$ ${custoGasolina.toFixed(2)}`);
} else {
    console.log("Tipo de combustível inválido. Por favor, escolha 'Etanol' ou 'Gasolina'.");
}