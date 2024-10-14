// Clojure é a habilidade da função de acessar o seu escopo léxico.

function retornaFuncao(curso){
    return function(){
        return curso;
    };
}

const funcao1 = retornaFuncao("ADS");
const funcao2 = retornaFuncao("cbio");
console.dir(funcao1);