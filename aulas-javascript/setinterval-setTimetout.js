function mostrarHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// responsável por executar uma função por um determinado tempo em milissegundos.
// setInterval(() => {
//     console.log(mostrarHora())
// }, 1000);


const timer = setInterval(() => {
    console.log(mostrarHora())
}, 1000);

// essa funçção é responsável por exectuar um código DURANTE um intervalo de tempo, em ms, e depois parar sua execução
setTimeout(() => {
    clearInterval(timer);
}, 5000);

setTimeout(() =>{
    console.log("Clarinha te amo")
}, 5000)