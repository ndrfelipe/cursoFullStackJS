const path = require('path');
const filePath = path.resolve(__dirname, 'test.json');
const write = require('./modules/write');

const alunos = [
    { nome: 'Joao', matricula: 1223},
    { nome: 'André', matricula: 2341},
    { nome: 'Renata', matricula: 1512},
    { nome: 'Lucas', matricula: 2141}
];

const json = JSON.stringify(alunos, '', 2);
write(filePath, json); 