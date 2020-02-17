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
   try {
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
    let response = yield axios.post('/api/schedule', action.payload, config)
   //then do another GET
   yield put({type:'GET_CONFLICT'})
   } catch (err) {
       alert('error in POST conflict', err)
   }
}

//GET request
function* getConflict(action) {
  console.log('getting conflicts from the server')
  //the yield is the .then(response) from original axios.get
  let response = yield axios.get('/api/schedule');
  //put is the same as dispatch and will dispatch to reducer
  yield put ({type: 'SET_CONFLICT', payload: response.data})
} //LEFT OFF HERE!!!


function* scheduleSaga() {
    yield takeLatest('ADD_CONFLICT_BY_ID', scheduleConflict);
    yield takeLatest('GET_CONFLICT', getConflict);
  }

export default scheduleSaga;
