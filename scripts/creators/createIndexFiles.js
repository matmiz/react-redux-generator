var fs = require('file-system');

module.exports = function createIndexFiles(prefix) {
    const containerName = `${prefix}Container`;
    const reducerName = `${prefix}Reducer`;

    fs.writeFileSync('index.html', 
`<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css"/>
    <title></title>
</head>
<body>
    <div id=root></div>
    <script type="text/javascript" src="bundle.js"></script>
</body>
</html>`);

    fs.writeFileSync('src/index.js',
`import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import ${containerName} from './Components/${containerName}'
import ${reducerName} from './Reducers/${reducerName}'
const store = createStore(
    ${reducerName},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleware)
);

render(<${containerName} store={store}/>, document.getElementById('root'));`);
}