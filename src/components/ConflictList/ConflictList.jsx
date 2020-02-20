import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import moment from 'moment';
import EditPopup from '../EditPopup/EditPopup'


class ConflictList extends Component {
    // Local state for Edit Popup being visible
    state = {
        visible: false
    }

    deleteConflictItem = () => {
        console.log(this.props.conflictItem);
        this.props.dispatch({
            type: 'DELETE_CONFLICT',
            payload: this.props.conflictItem.id
        })
    }

    //PUT route (update conflict by id)
    editConflictItem = () => {
        console.log('clicked Edit button;')
        // Open Edit Popup
        this.openModal();
        // this.props.dispatch({
        //     type: 'UPDATE_CONFLICT',
        //     payload: this.props.conflictItem.id
        // })
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
            
            <button onClick={this.deleteConflictItem}>Delete</button>
            <button onClick={this.editConflictItem}>Edit</button>
            <EditPopup visible={this.state.visible} />
        </>    
        )
    }
}

export default connect()(ConflictList);