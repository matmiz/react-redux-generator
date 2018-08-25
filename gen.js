const fs = require('file-system');
const createComponents = require('./scripts/createComponents');
const createActions = require('./scripts/createActions');
const createReducers = require('./scripts/createReducers');
const createIndexFiles = require('./scripts/createIndexFiles');
const Input = require('prompt-input');

const input = new Input({
  name: 'projectName',
  message: 'Please type a prefix to your project (use only characters, starting with capital one):'
});

const tryAgainInput = new Input({
    name: 'tryAgain',
    meesage: 'Please use only characters:'
});

const ask = () => {
    input.ask(answer => {
        const isStartingWithCapital = answer.match(/^[A-Z]/);
        const isValid = answer.match(/[A-Z]/);
        if(!isStartingWithCapital) {
            input.message = "Components name should satrt with a capital letter"
        }

        if(!isValid) {
            input.message = "Please use only characters:";
            ask();
        }
        else {
            createFoldersAndFiles(answer);
        }
    })
};

ask();


function createFoldersAndFiles(prefix) {
    //create folders
    fs.mkdirSync('src');
    fs.mkdir('src/Components');
    fs.mkdir('src/Reducers');
    fs.mkdir('src/Actions');

    //create files
    fs.writeFile('src/constants.js', `export const TEST_ACTION = 'testAction';`);
    createComponents(prefix);
    createActions(prefix);
    createReducers(prefix);
    createIndexFiles(prefix)
    fs.writeFile('src/css/style.scss',`.main-container{}`);
}