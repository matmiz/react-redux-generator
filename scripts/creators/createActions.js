var fs = require('fs');

module.exports = function createActions(prefix) {
    const actionsName = `${prefix}Actions`;

    fs.writeFile(`../${prefix}/src/Actions/${actionsName}.js`, 
`import {TEST_ACTION} from '../constants'


export const testAction = (testData) => dispatch => {
    dispatch({
        type: TEST_ACTION,
        payload: testData
    })
}
`, (err) => {
    if (err) throw err;
    console.log('Created test action');
  });
}