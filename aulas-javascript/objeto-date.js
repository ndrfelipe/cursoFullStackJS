//formatando datas
function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const ano = zeroEsquerda(data.getFullYear());
    const mes = zeroEsquerda(data.getMonth() + 1);;
    const dia = zeroEsquerda(data.getDate());;

    const hora = zeroEsquerda(data.getHours());;
    const minuto = zeroEsquerda(data.getMinutes());;
    const seg = zeroEsquerda(data.getSeconds());;

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${seg}`

};

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)