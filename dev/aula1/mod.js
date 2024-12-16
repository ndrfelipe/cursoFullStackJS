const matricula = 25042205;
const nomeAluno = 'André Felipe';

const dadosDaMatricula = () =>{
    return matricula + ' - ' + nomeAluno;
};

// module.exports.matricula = matricula;
// module.exports.nome = nomeAluno;
// module.exports.id = 8;

// console.log(module.exports);

exports.matricula = matricula;
exports.nome = nomeAluno;
exports.id = 12;
this.curso = "ADS"
