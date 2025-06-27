/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor , gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calculaGasto(quilometros, precoCombustivel) {
        var gasto = quilometros * precoCombustivel;
        return gasto * this.gastoMedioPorKm;
    }
}

const carro = new Carro("Toyota", "Preto", 0.1);
console.log(`Gasto para percorrer 100 km: R$ ${carro.calculaGasto(100, 5.79).toFixed(2)}`); // Gasto para percorrer 100 km: R$ 57.90