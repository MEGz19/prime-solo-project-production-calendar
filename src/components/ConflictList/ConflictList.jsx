import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import moment from 'moment';


class ConflictList extends Component {
    // removeItem = () => {
    //     axios({
    //         method: 'DELETE',
    //         url: `/fruit/${this.props.basketItem.id}`
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
            <li>{moment(this.props.conflictItem.date).format("LLLL")}</li> 
            {/* <li>{this.props.conflictItem.startTime}</li> */}
            
            
            {/* <button onClick={this.removeItem}>Delete</button> */}
        </>    
        )
    }
}

export default connect()(ConflictList);