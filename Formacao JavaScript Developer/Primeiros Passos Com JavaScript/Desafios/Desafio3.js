// 3) Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
// Para realizar o cálculo receba o valor bruto do salário e o adicional dos benefícios.
// O salário a ser transferido é calculado da seguinte maneira:

// valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

// Para calcular o percentual de imposto segue as alíquotas:

// De R$ 0.00 a R$ 1100.00 = 5.00%
// De R$ 1100.01 a R$ 2500.00 = 10.00%
// Maior que R$ 2500.00 = 15.00%


main();

function main() {
  let salarioBruto = 2000;
  let adicionalBeneficios = 250;

  let percentualImposto = calcularPercentualImposto(salarioBruto);
  let salarioTransferido = calcularSalarioTransferido(salarioBruto, percentualImposto, adicionalBeneficios);

  console.log("Salário a ser transferido: R$ " + salarioTransferido.toFixed(2));
}

function calcularPercentualImposto(salario) {
  if (salario > 0 && salario <= 1100) {
    return 0.05;
  } else if (salario > 1100 && salario <= 2500) {
    return 0.1;
  } else {
    return 0.15;
  }
}

function calcularSalarioTransferido(salarioBruto, percentualImposto, adicionalBeneficios) {
  let salarioComImposto = salarioBruto - (salarioBruto * percentualImposto);
  return salarioComImposto + adicionalBeneficios;
}
