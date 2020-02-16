import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "GET_CONFLICT_BY_ID" actions
function* scheduleConflict(action) {
    try {
      
    } catch (error) {
        //NEED TO EDIT ERROR AND YIELD PUT MESSAGE
        // console.log('Error with user registration:', error);
        // yield put({type: 'REGISTRATION_FAILED'});
    }







function* scheduleSaga() {
    yield takeLatest('GET_CONFLICT_BY_ID', scheduleConflict);
  }

export default scheduleSaga;
