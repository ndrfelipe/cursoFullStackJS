function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}

let max = 50;
let min = 1;
let i = 1;

let rand = random(min, max);
console.log(rand);

while( rand !== 10){
    rand = random(min, max)
    console.log(rand)
    i++
}

console.log('Número de tentativas até chegar 10: ', i)