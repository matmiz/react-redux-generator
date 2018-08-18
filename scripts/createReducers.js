var fs = require('file-system');

module.exports = function createReducers() {
    fs.writeFileSync('src/Reducers/MainReducer.js', 
`import {TEST_ACTION} from '../constants'

const getInitialState = () => {
    return {
        test: 'My Ract+Redux app! Start coding! YEAH'
    } 
}

const MainReducer = (state = getInitialState(), action) => {
    switch(action.type) {
        case(TEST_ACTION): 
            return {
                ...state
            }
        default:
            return state;
    }
}

export default MainReducer;
`
    );
}