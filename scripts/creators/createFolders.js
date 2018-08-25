const fs = require('file-system');

module.exports = () => {
    fs.mkdirSync('src');
    fs.mkdir('src/Components');
    fs.mkdir('src/Reducers');
    fs.mkdir('src/Actions');
};