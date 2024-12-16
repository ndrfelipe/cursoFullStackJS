// reduzir um array a um único elemento.
// ex: saber o total da soma de array de números.

const pessoas = [
    { nome: 'Luiz', idade: 18},
    { nome: 'Antonio', idade: 12},
    { nome: 'Matheus', idade: 11},
    { nome: 'Lucas', idade: 42},
    { nome: 'Renata', idade: 13}
];

// retorne a pessoa mais velha
const maisVelha = pessoas.reduce( function(acumulador, valor){
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});


const num = [10, 23, 21, 65, 21, 20, 35, 64];
// somar todos os números (reduce)

const somaNum = num.reduce(function(acumulador, valor){
    acumulador += valor;
    return acumulador
}, 0);



console.log(somaNum);