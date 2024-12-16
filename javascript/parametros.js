
// a palavra especial 'arguments' sustenta todos os argumentos passados para a função. 
function funcao() {
    let total = 0

    for (argumento of arguments){
        total += argumento
    }

    console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7);

function parametros (a, b, c, d, e, f){
    console.log(a, b, c, d ,e ,f);
}

parametros(1, 2, 3);

// parametros desestruturados
// objetos
function objetos({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
objetos({nome: "André", sobrenome: "Felipe", idade: 19})

//arrays

// function objetos([v1, v2, v3]){
//     console.log(v1, v2, v3);
// }
// objetos(["André Felipe", "Braga", 19])

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if (operador === "+") acumulador += numero;
        if (operador === "-") acumulador -= numero;
        if (operador === "/") acumulador /= numero;
        if (operador === "*") acumulador *= numero;
    }
    console.log(acumulador)
}

conta('-', 0, 20, 30, 10)