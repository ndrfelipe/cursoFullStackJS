/*
&& -> false && true -> false "o valor mesmo"
|| -> true || flase -> vai retornar "o valor verdadeiro"

falsy (valores que avaliam em falso quando necessário)
-> 0, "", '', ``, null, undefined, NaN (valores que fingem ser falso)
*/

console.log(0 || false || null || "joao" || null);

const corUsuario = 'red';
const corPadrao = corUsuario || "black";

console.log(corPadrao);