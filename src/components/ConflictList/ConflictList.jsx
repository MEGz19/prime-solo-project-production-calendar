import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import moment from 'moment';


class ConflictList extends Component {
    deleteConflictItem = () => {
        console.log(this.props.conflictItem);
        this.props.dispatch({
            type: 'DELETE_CONFLICT',
            payload: this.props.conflictItem.id
        })
    }

    //PUT route (update conflict by id)
    editConflictItem = () => {
        this.props.dispatch({
            type: 'UPDATE_CONFLICT',
            payload: this.props.conflictItem.id
        })
    }

    
    render() {
        return (
        <>
            <li>{moment(this.props.conflictItem.date).format("LL")} {this.props.conflictItem.start_time} to {this.props.conflictItem.end_time} {this.props.conflictItem.description}</li> 
            
            <button onClick={this.deleteConflictItem}>Delete</button>
            <button onClick={this.editConflictItem}>Edit</button>
        </>    
        )
    }
}

export default connect()(ConflictList);