// funções executadas quando uma ação é finalizada.
function range(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function funcao1(callback){
    setTimeout(function(){
        console.log("Chamado 1");
        if (callback) callback();
    }, range());
}

function funcao2(callback){
    setTimeout(function(){
        console.log("Chamado 2");
        if (callback) callback();
    }, range());
}

function funcao3(callback){
    setTimeout(function(){
        console.log("Chamado 3",);
        if (callback) callback();
    }, range());
}

// funcao1( function(){
//     funcao2( function(){
//         funcao3(function(){
//             console.log("Hello Word!")
//         });
//     });
// });


// callback é uma função que é passada como argumento em outra função e
// que só será executada quando sua instrução pai for executada.
funcao1(f1Callback);

function f1Callback(){
    funcao2(f2Callback);
}

function f2Callback(){
    funcao3(f3Callback);
}

function f3Callback(){
    console.log("Hello Word");
}