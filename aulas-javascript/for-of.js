//resumo

//for clássico = geralmente com iteráveis (array ou strings)

//for in = retorna o índice oi chaves (array, objetos ou strings)

//for of = retorna o valor em si (iteráveis, arrays ou strings)



// const nome = ['André Felipe', 'Luiz Pereira', 'Gambito Moraes'];

// console.log('For clássico: ')
// for (let index = 0; index < nome.length; index++) {
//     console.log(index, nome[index])
// }

// //CASO eu queria o índice, é interessante usar o for in
// console.log('For in: ')
// for (let i in nome){
//     console.log(i, nome[i])
// }

// // usado com um objeto iterável
// // quando usa "of", vem o valor e não o índice.
// console.log('For of: ')
// for (let valor of nome){
//     console.log(valor)
// }

// console.log('####');
// //Uma forma de utilizar função para percorrer objetos iteráveis.
// nome.forEach(function(valor, indice, arrayCompleto){
//     console.log(valor, indice, arrayCompleto)
// })

const carro = {
    marca: "Hyundai",
    modelo: "Hb20"
};

for (let chave in carro){
    console.log(chave, carro[chave])
}

