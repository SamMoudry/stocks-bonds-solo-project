import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* newYear(action) {
    try{
        yield axios.post('/api/newyear', action.payload);
    }catch (error) {
        console.log(error);
    }
}

function* newYearSaga() {
    yield takeLatest('NEW_YEAR', newYear)
}

export default newYearSaga;