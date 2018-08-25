const Input = require('prompt-input');

const input = new Input({
  name: 'projectName',
  message: 'Please type a prefix to your project (use only characters, starting with capital one):'
});

const tryAgainInput = new Input({
    name: 'tryAgain',
    meesage: 'Please use only characters:'
});

module.exports = (cb) => {
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
            cb(answer);
        }
    })
};