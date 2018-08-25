var fs = require('file-system');

module.exports = function createActions(prefix) {
    const actionsName = `${prefix}Actions`;

    fs.writeFileSync(`src/Actions/${actionsName}.js`, 
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