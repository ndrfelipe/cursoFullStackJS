// Aula sobre File System - 
//     que é uma API do NODE utilizada para trabalhar e manipular o sistema de arquivos do projeto.

// Fazendo uma recursão mútua (Dependência circular de funções)

const fs = require('fs').promises;
const { read } = require('fs');
const path = require('path');


// vai ler os arquivos de dentro da pasta e me retornar um array com os arquivos nela.
// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e));


// This function is an asynchronous choice to retrieve all files from the chosen directory 
async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

// this function will walk to files of the file. one by one.
async function walk(files, rootDir) {
    for (let file of files){

        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        if(/\.git/g.test(fileFullPath)) continue;
        if(/node_modules/g.test(fileFullPath)) continue;
        

        if(stats.isDirectory()){
            readdir(fileFullPath);
            continue;
        }

       
        

        console.log(file);
    };
}

<<<<<<< HEAD
readdir("C:/Users/REEF/javascript-logic/dev");
=======
readdir("C:/Users/André Felipe/dev/cursoFullStackJS/javascript/");
>>>>>>> 9d96ef1f0698247b03254b5c01e13140a9cd391f
