var fs = require('file-system');

module.exports = function createComponents() {
    fs.writeFileSync('src/Components/MainContainer.js', 
`import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {testAction} from '../Actions/MainActions'

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

class MainContainer extends Component {

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

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);`
    );
}