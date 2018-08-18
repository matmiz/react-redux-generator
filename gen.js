const fs = require('file-system');
const createComponents = require('./scripts/createComponents');
const createActions = require('./scripts/createActions');
const createReducers = require('./scripts/createReducers');
const createIndexFiles = require('./scripts/createIndexFiles');

//create folders
fs.mkdirSync('src');
fs.mkdir('src/Components');
fs.mkdir('src/Reducers');
fs.mkdir('src/Actions');

//create files
fs.writeFile('src/constants.js', `export const TEST_ACTION = 'testAction';`);
createComponents();
createActions();
createReducers();
createIndexFiles()
fs.writeFile('src/css/style.scss',`.main-container{}`);