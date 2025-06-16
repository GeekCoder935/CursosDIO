let n1 = 5
let n2 = 10
let n3 = 6

media = (n1 + n2 + n3) / 3
console.log("A média é: " + media)

if (media < 5) {
    console.log("Reprovado")
} else if (media >= 5 && media < 7) {
    console.log("Recuperação")
}
else {
    console.log("Passou de Semestre")
}