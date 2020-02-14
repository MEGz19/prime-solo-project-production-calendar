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

    render() {
        return (
            <div>
                <div>
                    <h1>Schedule Page</h1>
                    <p>The rehearsal period for <i>Wicked</i> will be from May 1 to May 28, 2020. Performances will be from May 29 through May 14, 2020. Please enter any conflicts, or times you are <b>NOT</b> available during this time frame.</p>
                </div>
                <div>
                {/* DATE INPUT  */}
                    <input type="date" id="date" name="date" label="date" />
                </div>
                {/* START TIME INPUT  */}
                <div>
                    <input type="time" id="startTime" name="startTime" />
                </div>
                 {/* END TIME INPUT  */}
                 <div>
                    <input type="time" id="endTime" name="endTime" />
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