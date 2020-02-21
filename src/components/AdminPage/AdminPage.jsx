import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class AdminPage extends Component {


    render() {
        return (
            <>
                <p>This is the Admin Page.</p>
            </>
        )
    }

}

// reduxState is our entire store
const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(AdminPage);