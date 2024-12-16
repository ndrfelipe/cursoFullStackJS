//atribuição via desdestruturação:
/*
let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];

[a, b, c] = letras;

console.log(a, b, c);
*/

//usando arrays
// quando aplicamos com arrays, é como se tivesse criando vários, consts e atribuindo-lhes o valor do índice;
const num = [100, '223', 346, 44, 521, 63];
const [primeiroNum, segundoNum, ...rest] = num;

console.log(primeiroNum, segundoNum);

//operador ...variavel é responsável por pegar o resto dos valores nos índices
// operador "rest" = ..., quando o contexto é exatamente pegar o "resto" dos elementos
// agora, no contexto de distribuir elementos, é utilizado o operador spread (...spread)
console.log(rest)

const [um, , tres, , cinco] = num;
console.log(um, tres, cinco);

//um maior nível de complexidade
const frutas = [ ["abacaxi", "ameixa",  'acerola'], ['beterraba', 'banana'], ['caqui']];
const [[, , a], ,[b]] = frutas;

console.log(a, b);