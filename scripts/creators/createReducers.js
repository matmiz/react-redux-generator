var fs = require('fs');

module.exports = function createReducers(prefix) {
    const reducerName = `${prefix}Reducer`;

    fs.writeFile(`../${prefix}/src/Reducers/${reducerName}.js`, 
`import {TEST_ACTION} from '../constants'

const getInitialState = () => {
    return {
        test: 'My Ract+Redux app! Start coding! YEAH'
    } 
}

const ${reducerName} = (state = getInitialState(), action) => {
    switch(action.type) {
        case(TEST_ACTION): 
            return {
                ...state
            }
        default:
            return state;
    }
}

export default ${reducerName};
` , (err) => {
    if (err) throw err;
    console.log('Created test reducer');
  });
}