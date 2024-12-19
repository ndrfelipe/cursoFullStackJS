const fs = require('fs').promises;
<<<<<<< HEAD
module.exports = (path, datas) => {
    fs.writeFile(path, datas, { flag: 'a', encoding: 'utf8' });  
}
=======

module.exports = (path, data) => {
    fs.writeFile(path, data, { flag: 'w' });
    console.log("Dados enviados com sucesso. ")
};

>>>>>>> 9d96ef1f0698247b03254b5c01e13140a9cd391f
