var frutas = function(nome, cor) {
    return {
        nome,
        cor
    }
}

console.log(frutas('banana', 'amarelo'));
console.log(frutas('maçã', 'vermelho'));
console.log(frutas('pêra', 'verde'));


// -----------------------------------------------------


var pessoas = (nome, idade) => {
    return {
        p_Method() {
            return nome; 
        }
    }
}

console.log(pessoas('Luana', 19));


// -----------------------------------------------------


var cidades = (nome, estado, pais) => {
    var key1 = 'nome';
    var obj = {
        [key1]: nome,
        estado,
        pais
    };

    return obj;
}

console.log(cidades('Canoinhas', 'Santa Catarina', 'Brasil'));