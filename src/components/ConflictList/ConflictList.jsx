import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import moment from 'moment';
import Modal from 'react-awesome-modal';

import Button from 'react-bootstrap/Button';


class ConflictList extends Component {
    // Local state for Edit Popup being visible
    state = {
        editConflict: {
            date: '',
            startTime: '',
            endTime: '',
            description: '',
        },
        visible: false
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

    // Dispatches local state to a saga on click of Save Button
    // PUT route
    handleSave = () => {
        console.log('clicked Save button');
        // start the PUT route for conflicts
        this.props.dispatch({
            type: 'UPDATE_CONFLICT',
            //Action.payload is sending the editConflict part of local state and its
            //id to the saga, which then sends it to the server.
            payload: {
                conflictUpdate: this.state.editConflict,
                id: this.props.conflictItem.id
            }
        })
    }

    deleteConflictItem = () => {
        console.log(this.props.conflictItem);
        //pop confirmation
        let popup = window.confirm(`Are you sure you want to delete this information?`);
        if (popup === true) {
            this.props.dispatch({
                type: 'DELETE_CONFLICT',
                payload: this.props.conflictItem.id
            })
        }
    }
    // THIS WILL OPEN THE EDIT POPUP (MODAL)
    editConflictItem = () => {
        console.log('clicked Edit button;')
        // Open Edit Popup
        this.openModal();
    }

    // THIS IS FOR THE EDIT POPUP 
    // Opens modal popup
    openModal = () => {
        this.setState({
            visible: true
        });
    }

    // Closes modal popup
    closeModal = () => {
        this.setState({
            visible: false
        });
    }


    render() {
        return (
            <>
                <li>{moment(this.props.conflictItem.date).format("LL")} {this.props.conflictItem.start_time} to {this.props.conflictItem.end_time} {this.props.conflictItem.description}</li>

                <button className="button" onClick={this.deleteConflictItem}>Delete</button>
                <button className="button" onClick={this.editConflictItem}>Edit</button>

                {/* BOOTSTRAP STYLING */}
                {/* <Button variant="primary" size="sm" onClick={this.deleteConflictItem}>Delete</Button>
                <Button variant="primary" size="sm" onClick={this.editConflictItem}>Edit</Button> */}
                {/* END BOOTSTRAP STYLING */}

                {/* THE MODAL IS A POPUP THAT CONTAINS EDIT FUNCTIONALITY */}

                <Modal
                    visible={this.state.visible}
                    width="200" // Sets width of popup
                    height="300" // Sets height of popup
                    effect="fadeInUp"
                    onClickAway={this.closeModal}
                >
                    {/* {JSON.stringify(this.state)} */}
                    {/* DATE INPUT  */}
                    <div id="modal-container">
                        <center>
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
                            {/* SAVE CONFLICT BUTTON */}
                            <div>
                                <button className="button" onClick={this.handleSave}>Save</button>
                            </div>
                        </center>
                    </div>
                </Modal>
            </>
        )
    }
}

export default connect()(ConflictList);