const precoProduto = 100
const meioPagamento = 'Cartao'
const numParcelas = 2

if(meioPagamento === 'Debito') {
    console.log("Pagamento à vista no debito com desconto: " + (precoProduto * 0.9).toFixed(2))
} else if(meioPagamento === 'PIX' || meioPagamento === 'Dinheiro') {
    console.log("Pagamento à vista no dinheiro ou PIX com desconto: " + (precoProduto * 0.85).toFixed(2))
} else if(meioPagamento === 'Cartao' && numParcelas <= 2) {
    console.log("Pagamento no cartão à vista sem desconto: " + precoProduto.toFixed(2))
} else if(meioPagamento === 'Cartao' && numParcelas > 2 ) {
    console.log("Pagamento no cartão parcelado em " + numParcelas + " vezes: " + (precoProduto * 1.1).toFixed(2) + " (10% de juros)")
}