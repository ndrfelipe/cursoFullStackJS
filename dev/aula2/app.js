const Carro = require('./mod');

const c1 = new Carro('Creta', 75000);

console.log(c1);

for(let i = 0; i <= 20; i++){
    c1.acelerar();
}
console.log(c1);

console.log(__dirname);
console.log(__filename);