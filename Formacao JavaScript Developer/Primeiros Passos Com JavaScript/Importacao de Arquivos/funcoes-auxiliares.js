function gets(){
    return 10;
}

function print(texto){
    console.log(texto);
}

module.exports = {
    gets,
    print
};
// Isso exporta as funções gets e print, tornando-as disponíveis para outros arquivos que importarem