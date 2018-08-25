var fs = require('file-system');

module.exports = function createComponents(prefix) {
    const containerName = `${prefix}Container`;
    const actionsName = `${prefix}Actions`;

    fs.writeFileSync(`src/Components/${containerName}.js`, 
`import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {testAction} from '../Actions/${actionsName}'

const mapStateToProps = (state) => {
    const {test} = state;
    return {
        test
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        testAction
    }, dispatch);
};

class ${containerName} extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-container">
               {this.props.test}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(${containerName});`
    );
}