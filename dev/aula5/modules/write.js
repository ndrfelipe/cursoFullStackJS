const fs = require('fs').promises;

module.exports = (path, data) => {
    fs.writeFile(path, data, { flag: 'w' });
    console.log("Dados enviados com sucesso. ")
};

