var fs = require('file-system');

module.exports = function createActions() {
    fs.writeFileSync('src/Actions/MainActions.js', 
`import {TEST_ACTION} from '../constants'


export const testAction = (testData) => dispatch => {
    dispatch({
        type: TEST_ACTION,
        payload: testData
    })
}
`
    );
}