const num = [10, 23, 21, 65, 21, 20, 35, 64];


// Filtrando os pares - filter
// Dobrando os pares - map
// somando o dobro dos pares - reduce
const dobroNum = num
.filter( valor => valor%2 === 0)
.map( valor => valor*2)
.reduce( (ac, valor) => ac + valor);

console.log(dobroNum);