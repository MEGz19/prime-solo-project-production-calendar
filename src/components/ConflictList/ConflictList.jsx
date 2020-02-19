import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import moment from 'moment';


class ConflictList extends Component {
    componentDidMount () {
        this.props.dispatch({type: 'GET_CONFLICT'})
      }


    // removeItem = () => {
    //     axios({
    //         method: 'DELETE',
    //         url: `/fruit/${this.props.conflictItem.id}`
    //     }).then((response) => {
    //         this.getFruit();
    //     }).catch((error) => {
    //         console.log(error);
    //         alert('Unable to delete item');
    //     });  
    // }

    
    render() {
        return (
        <>
            <li>{moment(this.props.conflictItem.date).format("LL")} {this.props.conflictItem.start_time} to {this.props.conflictItem.end_time} {this.props.conflictItem.description}</li> 
            
            {/* <button onClick={this.removeItem}>Delete</button> */}
        </>    
        )
    }
}

export default connect()(ConflictList);