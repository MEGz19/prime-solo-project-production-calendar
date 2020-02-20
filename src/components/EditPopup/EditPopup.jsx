import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import moment from 'moment';
import Modal from 'react-awesome-modal';

class EditPopup extends Component {
    // Set local state
    state = {
        editConflict: {
            date: '',
            startTime: '',
            endTime: '',
            description: '',
        },
    }

    

    // Update the local state as user inputs data
    handleChange = (event, propName) => {
        this.setState({
            editConflict: {
                //Spreading state, so that we can target each value by name instead of the whole state
                ...this.state.editConflict,
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
            payload: this.state.editConflict
        })
    }



    render() {
        return (
            <Modal
            visible={this.props.visible}   
            width="440" // Sets width of popup
            height="500" // Sets height of popup
            effect="fadeInUp"
            onClickAway={this.closeModal} 
            >
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
                    <button onClick={this.handleClick}>Save</button>
                </div>
                {/* RENDER CONFLICTS FROM SCHEDULE REDUCER TO DOM */}
                <div>

            </Modal>
        )
    }

}

export default connect()(EditPopup);