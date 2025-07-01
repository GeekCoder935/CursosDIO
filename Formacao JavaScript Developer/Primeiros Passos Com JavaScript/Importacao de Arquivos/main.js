const funcoes = require('./funcoes-auxiliares.js'); // isso importa o arquivo funcoes-auxiliares.js, somente o que estiver dentro de module.exports

console.log(funcoes);
console.log(funcoes.gets()); // chama a função gets do arquivo funcoes-auxiliares.js

// faca um object destructuring para pegar as funcoes gets e print
// Um destructuring é uma forma de extrair valores de objetos ou arrays em variáveis distintas
const { gets = 50, print } = funcoes;
console.log(gets()); // chama a função gets do arquivo funcoes-auxiliares.js