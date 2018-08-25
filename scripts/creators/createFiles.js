const fs = require('file-system');
const createComponents = require('./createComponents');
const createActions = require('./createActions');
const createReducers = require('./createReducers');
const createIndexFiles = require('./createIndexFiles');

module.exports = (prefix) => {
    fs.writeFile('src/constants.js', `export const TEST_ACTION = 'testAction';`);
    createComponents(prefix);
    createActions(prefix);
    createReducers(prefix);
    createIndexFiles(prefix)
    fs.writeFile('src/css/style.scss',`.main-container{}`);
}