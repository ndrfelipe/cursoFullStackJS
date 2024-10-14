// declaração de função 
//function hoisting -> apenas acontece dessa maneira:
function falaOi() {
    console.log("Oi");
}

//functions são first-class objects
// pode tratar função como dado (function expression)
const dado = function(){
    console.log('Sou um dado');
};

dado()

function executaFuncao(funcao) {
    console.log("Executando a função q veio como função abaixo");
    funcao();
}

executaFuncao(dado);

// Arrow function (ES6)
//uma function expression mais curta.

const funcaoArrow = () => {
    console.log("Sou uma arrow function");
};

funcaoArrow();

// Inside an object

const obj = {
    falar() {
        console.log("Falando")
    }
}
 obj.falar();




