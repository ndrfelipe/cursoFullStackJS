const path = require('path');
const fullPath = path.resolve(__dirname, 'test.json');
const write = require("./modules/write")
const read = require("./modules/read")

const user = [
    { id: 1, username: "ndrfelipe", password: "1123as23", email: "andre@gmail.com" },
    { id: 2, username: "alejandre", password: "12Ac3", email: "alejandre@gmail.com" },
    { id: 3, username: "clarinha", password: "adfas2134", email: "clacla@hotmail.com" },
    { id: 4, username: "jon", password: "AAbbCC123", email: "jon@ufrpe.br" }
]

// convertendo array -> json
const userJson = JSON.stringify(user, '', 2);
write(fullPath, userJson);

// async function readFile(path) {
//     const readData = await read(path);
//     runData(readData);
// }

// function runData(data) {
//     readData = JSON.parse(data);
//     console.log(" --- ID | NOME | EMAIL ---")
//     readData.forEach(value => console.log(` Id: ${value.id} | Nome: ${value.username} | Email: ${value.email}`));
// }

// readFile(fullPath);

read(fullPath)
    .then( resolve => {
        const arrayData = JSON.parse(resolve);
        arrayData.forEach(element => {
            console.log(` Id: ${element.id} | Nome: ${element.username} | Email: ${element.email}`)
        });

    })
    .catch(e => console.log(e))
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