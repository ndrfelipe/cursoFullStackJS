// const { matricula, nome, curso, id } = require('./mod');
const mod1 = require('./mod');
const path = require('path');
const axios = require('axios');


class Aluno{
    constructor(matricula, nome, curso, id){
        this.matricula = matricula;
        this.nome = nome;
        this.curso = curso;
        this.id = id;
    }

    get dadosAluno(){
        return `ID: ${this.id} | Matrícula: ${this.matricula} | Nome: ${this.nome} | Curso: ${this.curso}`;
    }
}

const aluno = new Aluno(mod1.matricula, mod1.nome, mod1.curso, mod1.id);
console.log(aluno.dadosAluno);
