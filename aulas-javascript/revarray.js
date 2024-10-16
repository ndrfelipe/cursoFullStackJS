const nomes = ["eduardo", "maria", "joana"];
const removido1 = nomes.shift();
const removido2 = nomes.pop();

nomes.push("Joaquim", "Wallace", "Margareth")

const novo = nomes.slice(0, 3);

console.log(removido1 ,nomes, removido2);
console.log(novo);


const meunome = "André Felipe da Silva Braga";
const primeiroNome = meunome.split(' ');
console.log(`Olá ${primeiroNome[0]}`)