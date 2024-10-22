
const pessoas = [
    { nome: 'Luiz', idade: 18},
    { nome: 'Antonio', idade: 12},
    { nome: 'Matheus', idade: 11},
    { nome: 'Lucas', idade: 42},
    { nome: 'Renata', idade: 13}
];

//retornar apenas uma string com o nome da pessoa:
const nomes = pessoas.map(valor => valor.nome);

//remover apenas a chave "nome" do objeto:

const idades = pessoas.map(obj => ({ idade: obj.idade }) );

// ou fazer dessa forma:
const idades2 = pessoas.map(function(obj){
    delete obj.nome;
    return obj;
});

// adicionar uma chabe ID em cada objeto

const chaveId = pessoas.map(function(obj, indice){
    const ID = { ...obj };
    ID.id = indice;
    return ID;
});

console.log(chaveId);