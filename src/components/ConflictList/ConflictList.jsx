import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

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
            <li>
                <span>{this.props.conflictItem.conflict}</span>
                {/* <button onClick={this.removeItem}>Delete</button> */}
            </li>
        )
    }
}

export default connect()(ConflictList);