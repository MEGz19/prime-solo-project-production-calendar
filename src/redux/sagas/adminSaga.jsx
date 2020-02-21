import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeEvery } from 'redux-saga/effects'
import { put, takeLatest } from 'redux-saga/effects';

//GET request for all conflicts
function* getAllConflicts(action) {
    console.log('getting all conflicts from server');
    try{
    let response = yield axios.get('/api/admin');
    //put is the same as dispatch and will dispatch to reducer
    //this saves it in redux
    yield put({ type: 'SET_ALL_CONFLICTS', payload: response.data })
    } catch (err) {
        alert('error in GET conflict', err)
    }
}



// Watcher saga - waits for sagas to be called
function* adminSaga() {
    yield takeLatest('GET_ALL_CONFLILCTS', getAllConflicts)
}

export default adminSaga;