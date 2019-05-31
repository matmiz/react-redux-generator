const fs = require('fs');
const createComponents = require('./createComponents');
const createActions = require('./createActions');
const createReducers = require('./createReducers');
const createIndexFiles = require('./createIndexFiles');

module.exports = (prefix) => {
    fs.writeFile(`../${prefix}/src/constants.js`, `export const TEST_ACTION = 'testAction';`,  err => {
        if(err) throw err;
        console.log('Created constants file')
    });
    console.log('creating component...');
    createComponents(prefix);
    console.log('creating action...');
    createActions(prefix);
    console.log('creating reducer...');
    createReducers(prefix);
    console.log('creating index files...');
    createIndexFiles(prefix);
    fs.writeFile(`../${prefix}/src/css/style.scss`,`.main-container{}`, err => {
        if(err) throw err;
        console.log('Created CSS file')
    });
}