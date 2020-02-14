import React, { Component } from 'react';
import { connect } from 'react-redux';


class SchedulePage extends Component {
    render(){
        return(
            <p>This is the schedule page.</p>


        )
    }
}





// reduxState is our entire store
const mapStateToProps = (reduxState) => {
    // this will make ALL reducers available on this.props.reduxState
    return {reduxState}
  }


// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(SchedulePage);