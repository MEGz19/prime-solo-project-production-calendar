import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material UI Imports
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


class SchedulePage extends Component {
    DatePickers(props) {
        const { classes } = props;
        DatePickers.propTypes = {
            classes: PropTypes.object.isRequired,
          };


    render() {
        return (
            <div>
                <div>
                    <h1>Schedule Page</h1>
                    <p>The rehearsal period for <i>Wicked</i> will be from May 1 to May 28, 2020. Performances will be from May 29 through May 14, 2020. Please enter any conflicts, or times you are <b>NOT</b> available during this time frame.</p>
                </div>
                <div>
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
                </div>
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