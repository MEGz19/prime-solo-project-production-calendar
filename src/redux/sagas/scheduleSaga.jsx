// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import {takeEvery} from 'redux-saga/effects'
import { put, takeLatest } from 'redux-saga/effects';



// worker Saga: will be fired on "GET_CONFLICT_BY_ID" actions
function* scheduleConflict(action) {
   console.log('adding conflict on POST', action.payload) 
   //add it
   let response = yield axios.post('/api/schedule', action.payload)
   //then do another GET
   yield put({type:'GET_CONFLICT'})
}
//     try {
      
//     } catch (error) {
//         //NEED TO EDIT ERROR AND YIELD PUT MESSAGE
//         // console.log('Error with user registration:', error);
//         // yield put({type: 'REGISTRATION_FAILED'});
//     }
// }







function* scheduleSaga() {
    yield takeLatest('ADD_CONFLICT_BY_ID', scheduleConflict);
  }

export default scheduleSaga;
