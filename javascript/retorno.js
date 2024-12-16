// return
// RETORNA um valor
// termina a função

function criaPessoa(nome, sobrenome){
    return { nome, sobrenome};
}

const p1 = criaPessoa("André", "Felipe");
const p2 = {
    nome: "João",
    sobrenome: "Costa"
};

console.log(p1);
console.log(p2);

function frase(titulo){
    function corpoTexto(descricao){
        return titulo + " " + descricao;
    }
    return corpoTexto;
}

const paragrafo = frase("Lorem Ipsum");
const titulo = paragrafo('impst seal asep akmin');
console.log(titulo);