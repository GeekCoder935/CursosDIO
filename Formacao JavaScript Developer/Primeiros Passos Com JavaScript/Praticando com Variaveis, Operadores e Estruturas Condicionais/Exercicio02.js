let peso = 80
let altura = 1.80
let imc = peso / (altura * altura)

if(imc > 40) {
    console.log("Obesidade Grave")
} else if(imc >= 30 && imc <= 40) {
    console.log("Obeso")
} else if(imc >= 25 && imc < 30) {
    console.log("Acima do peso")
} else if(imc >= 18.5 && imc < 25) {
    console.log("Peso normal")
} else {
    console.log("Abaixo do peso")
}