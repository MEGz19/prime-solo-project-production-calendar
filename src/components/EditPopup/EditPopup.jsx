import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import moment from 'moment';
import Modal from 'react-awesome-modal';

class EditPopup extends Component {
    // Set local state
    state = {
        visible: false
    }

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
            <Modal
            visible={visible}
            width="440" // Sets width of popup
            height="500" // Sets height of popup
            effect="fadeInUp"
            onClickAway={this.closeModal} 
            >

            
            </Modal>
        )
    }

}

export default connect()(EditPopup);