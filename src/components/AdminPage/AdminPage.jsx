import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import ConflictList from "../ConflictList/ConflictList"


class AdminPage extends Component {
    componentDidMount () {
        //GET request to SAGA
        this.props.dispatch({type: 'GET_ALL_CONFLILCTS'})
    }


    render() {
        return (
            <div>
                <div>
                    <h1>Administrator Page</h1>
                </div> 
                <div>
                    {/* RENDER ALL CONFLICTS TO DOM */}
                    <ul>
                        {this.props.reduxState.schedule.map(conflictItem => 
                             
                             <ConflictList key={conflictItem.id} conflictItem={conflictItem} />
                        )}    
                    </ul>
                </div>   
            </div>
        )
    }
}
    

    

{/* // reduxState is our entire store */}
const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(AdminPage);