import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import moment from 'moment';


class ConflictList extends Component {
    componentDidMount () {
        this.props.dispatch({type: 'GET_CONFLICT'})
      }


    deleteConflictItem = () => {
        console.log(this.props.conflictItem);
        this.props.dispatch({
            type: 'DELETE_CONFLICT',
            payload: this.props.conflictItem.id
        })
    }

    
    render() {
        return (
        <>
            <li>{moment(this.props.conflictItem.date).format("LL")} {this.props.conflictItem.start_time} to {this.props.conflictItem.end_time} {this.props.conflictItem.description}</li> 
            
            <button onClick={this.deleteConflictItem}>Delete</button>
        </>    
        )
    }
}

export default connect()(ConflictList);