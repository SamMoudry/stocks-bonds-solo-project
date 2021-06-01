import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* newYear(action) {
    try{
        const response = yield axios.get('/api/newyear', action.payload);
        yield({type: 'SET_NEW_YEAR', payload: response});
    }catch (error) {
        console.log(error);
    }
}

function* newYearSaga() {
    yield takeLatest('NEW_YEAR', newYear)
}

export default newYearSaga;