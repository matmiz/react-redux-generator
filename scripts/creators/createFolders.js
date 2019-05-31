const fs = require('fs');

module.exports = (prefix) => {
    const mainFolderName = `../${prefix}`;
    const mainFolderSrc = mainFolderName + '/src';
    fs.mkdirSync(mainFolderName, (err, folder) => {
        if (err) throw err;
        console.log(`created folder ${folder}`);
    });
    fs.mkdirSync(mainFolderSrc, (err, folder) => {
        if (err) throw err;
        console.log(`created folder ${folder}`);
    });
    fs.mkdirSync(mainFolderSrc+'/css', (err, folder) => {
        if (err) throw err;
        console.log(`created folder ${folder}`);
    });
    fs.mkdirSync(`${mainFolderSrc}/Components`, (err, folder) => {
        if (err) throw err;
        console.log(`created folder ${folder}`);
    });
    fs.mkdirSync(`${mainFolderSrc}/Reducers`, (err, folder) => {
        if (err) throw err;
        console.log(`created folder ${folder}`);
    });
    fs.mkdirSync(`${mainFolderSrc}/Actions`, (err, folder) => {
        if (err) throw err;
        console.log(`created folder ${folder}`);
    });
};