import React, { Component } from 'react';
import { connect } from 'react-redux';


class SchedulePage extends Component {
    render() {
        return (
            <div>
                <h1>Schedule Page</h1>
                <p>The rehearsal period for <i>Wicked</i> will be from May 1 to May 28, 2020. Performances will be from May 29 through May 14, 2020. Please enter any conflicts, or times you are <b>NOT</b> available during this time frame.</p>
            </div>

        )
    }
}





// reduxState is our entire store
const mapStateToProps = (reduxState) => {
    // this will make ALL reducers available on this.props.reduxState
    return { reduxState }
}


// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(SchedulePage);