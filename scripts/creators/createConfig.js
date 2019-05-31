const fs = require('fs');

module.exports = (prefix) => {
    fs.copyFileSync('devPackage.json', `../${prefix}/package.json`, err => {
        if(err) throw err;
        console.log('created package.json file successfully');
    });
    fs.copyFileSync('webpack.config.js', `../${prefix}/webpack.config.js`,  err => {
        if(err) throw err;
        console.log('created webpack.config file successfully');
    });
}