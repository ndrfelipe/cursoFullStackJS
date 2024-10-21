// é uma função que chama ela mesma.
function recursiva(max){
    console.log(max);
    if(max >=2000) return;
    max++;
    recursiva(max);
}

recursiva(0)