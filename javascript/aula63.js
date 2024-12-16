//tratando erros com catch, try e throw  

function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números'); //lançando um erro
    }

    return x + y;
}


//se acontecer algum erro dentro do bloco try, catch será exercutado.
//se nao acontecer algum erro dentro de try, catch não será executado.
try{
    console.log(soma(1,2));
    console.log(soma("3", "2"));

}catch(err){
    // console.log(err)
    console.log('algo mais amigável para o usuário');
}