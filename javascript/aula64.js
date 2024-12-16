// //tratando erros com try, catch e finally
// try{
//     // é executado quando não há erros
    
//     console.log("Abri um arquivo");

//     try{
//         console.log(b)
//     }catch(e){
//         console.log("deu erro dentro do erro kk")
//     }finally{
//         console.log("Também serei executado. ")
//     }
    
// }catch(e){
//     console.log("tratando erro");
// } finally{
//     // dando erro ou não, o finally sempre será executado.
//     console.log("Finally: sempre é executado. ");
// }

// essa função retorna a hora atual.
function retornaHora(data){
    if (data && !(data instanceof Date)){ //se data is true AND data is not a instance of Date object, throw new typeerror.
        throw new TypeError("Esperando instância de Date. ");
    }

    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false //vai retornar hora sem time-zone
    });
}

try{
    //código que potencialmente pode gerar algum erro.
    const data = new Date('04-25-2005 12:58:12');
    const hora = retornaHora();
    console.log(hora);
}catch(e){
    // Tratar erro
} finally{
    console.log('Tenha um bom dia.')
}
