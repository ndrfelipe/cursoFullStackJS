// função usada para filtrar valores de um Array.
// função muito importante.

//retornar números maiores que 10 em outro array
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 11, 15, 22, 27];
let numMaiorQueDez = [];
for( let i of numeros){
    if (i > 10){
        numMaiorQueDez.push(i);
    };
}

console.log(numeros);
console.log(numMaiorQueDez);

//utilizando filter -> vai retornar sempre um array com uma quantidade inferior ou a mesma que o original.

const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 11, 15, 22, 27];
const numerosFiltrados = numeros2.filter(valor=> valor > 10);
console.log(numerosFiltrados);


const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];
const nomeMaisQueCinco = pessoas.filter(obj => obj.nome.length >= 5);
console.log(nomeMaisQueCinco);

const maisCinquenta = pessoas.filter(obj => obj.idade > 50);
console.log(maisCinquenta);

const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLocaleLowerCase().endsWith('a');
})
console.log(nomeTerminaComA)