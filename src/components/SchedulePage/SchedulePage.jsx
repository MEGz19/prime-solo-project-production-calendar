import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import ConflictList from "../ConflictList/ConflictList"


// Material UI Imports
// import { withStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import PropTypes from 'prop-types';


class SchedulePage extends Component {
    componentDidMount () {
        this.props.dispatch({type: 'GET_CONFLICT'})
      }


    // Set up Local State
    state = {
        newConflict: {
            date: '',
            startTime: '',
            endTime: '',
            description: ''
        }
    }

    // Update the local state as user inputs data
    handleChange = (event, propName) => {
        this.setState({
            newConflict: {
                //Spreading state, so that we can target each value by name instead of the whole state
                ...this.state.newConflict,
                [propName]: event.target.value
            }

        })
    }

    // Dispatches local state to a saga on click of Add Conflict Button
    handleClick = () => {
        console.log('clicked add conflict button');
        // start the POST route for conflicts
        this.props.dispatch({
            type: 'ADD_CONFLICT_BY_ID',
            payload: this.state.newConflict
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Schedule Page</h1>
                    {/* {JSON.stringify(this.state)} */}
                    <p>The rehearsal period for <i>Wicked</i> will be from May 1 to May 28, 2020. Performances will be from May 29 through June 14, 2020. Please enter any conflicts, or times you are <b>NOT</b> available during this time frame.</p>
                </div>
                {/* DATE INPUT  */}
                <div>
                    <label>Date:</label>
                    <input onChange={(event) => this.handleChange(event, 'date')} type="date" id="date" name="date" />
                </div>
                {/* START TIME INPUT  */}
                <div>
                    <label>Start Time:</label>
                    <input onChange={(event) => this.handleChange(event, 'startTime')} type="time" id="startTime" name="startTime" />
                </div>
                {/* END TIME INPUT  */}
                <div>
                    <label>End Time:</label>
                    <input onChange={(event) => this.handleChange(event, 'endTime')} type="time" id="endTime" name="endTime" />
                </div>
                {/* DESCRIPTION TEXT BOX */}
                <div>
                    <label>Description:</label>
                    <textarea onChange={(event) => this.handleChange(event, 'description')} placeholder="Anything we should know?"></textarea>
                </div>
                {/* ADD CONFLICT BUTTON */}
                <div>
                    <button onClick={this.handleClick}>Add Conflict</button>
                </div>
                {/* RENDER CONFLICTS FROM SCHEDULE REDUCER TO DOM */}
                <div>
                    <ul>
                        {this.props.reduxState.schedule.map(conflictItem => 
                             
                                <ConflictList key={conflictItem.id} conflictItem={conflictItem} />
                            
                        )}
                        
                    </ul>
                </div>
            </div>
        )
    }
}





// reduxState is our entire store
const mapStateToProps = (reduxState) => ({
    // this will make ALL reducers available on this.props.reduxState
    reduxState 
})


// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(SchedulePage);