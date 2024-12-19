const fs = require('fs').promises;
module.exports = (path, datas) => {
    fs.writeFile(path, datas, { flag: 'a', encoding: 'utf8' });  
}