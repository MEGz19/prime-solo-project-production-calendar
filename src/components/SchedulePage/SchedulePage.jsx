import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";



// Material UI Imports
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';


class SchedulePage extends Component {
    // Part of Mat. UI functionality
    // DatePickers(props) {
    //     const { classes } = props;
    //     DatePickers.propTypes = {
    //         classes: PropTypes.object.isRequired,
    //       }; //END MAT UI.
    // START REACT-DATEPICKER
    // state = {
    //     startDate: new Date()
    // };
    // handleChange = date => {
    //     this.setState({
    //         startDate: date
    //     });
    // }; //END REACT DATEPICKER

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
                    {JSON.stringify(this.state)}
                    <p>The rehearsal period for <i>Wicked</i> will be from May 1 to May 28, 2020. Performances will be from May 29 through May 14, 2020. Please enter any conflicts, or times you are <b>NOT</b> available during this time frame.</p>
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





                {/* <div> */}
                {/* REACT DATEPICKER START */}
                {/* <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                /> */}
                {/* REACT DATEPICKER END */}

                {/* MATERIAL UI START */}
                {/* <div>
                    <form className={classes.container} noValidate>
                        <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
                    );
                </div> */}
                {/* END MATERIAL UI */}
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