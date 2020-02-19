// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeEvery } from 'redux-saga/effects'
import { put, takeLatest } from 'redux-saga/effects';



function* scheduleConflict(action) {
  console.log('adding conflict on POST', action.payload)
  //add it
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    //POST request
    let response = yield axios.post('/api/schedule', action.payload, config)
    //then do another GET
    yield put({ type: 'GET_CONFLICT' })
  } catch (err) {
    alert('error in POST conflict', err)
  }
}

//GET request
function* getConflict(action) {
  console.log('getting conflicts from the server')
  try {
    //the yield is the .then(response) from original axios.get
    let response = yield axios.get('/api/schedule');
    //put is the same as dispatch and will dispatch to reducer
    //this saves it in redux
    yield put({ type: 'SET_CONFLICT', payload: response.data })
  } catch (err) {
    alert('error in GET conflict', err)
  }
} 

// DELETE request
function* deleteConflict(action) {
  try {
    console.log(action.payload);
    let id = action.payload;
    let response = yield axios.delete(`/api/schedule/${id}`);
    yield put({ type: 'GET_CONFLICT'})
    console.log(response.data);
  } catch (err) {
    alert('error in DELETE conflict', err)
  }
}

//PUT/UPDATE request
function* updateConflict(action) {
  try {
    let id = action.payload;
    yield axios.put(`/api/schedule/${id}`);
    yield put({ type: 'GET_CONFLICT'});
  } catch (err) {
    alert('error in PUT/UPDATE conflict', err);
  }
}

// Watcher saga - waits for sagas to be called
function* scheduleSaga() {
  yield takeLatest('ADD_CONFLICT_BY_ID', scheduleConflict);
  yield takeLatest('GET_CONFLICT', getConflict);
  yield takeLatest('DELETE_CONFLICT', deleteConflict);
  yield takeLatest('UPDATE_CONFLICT', updateConflict);
}

export default scheduleSaga;
