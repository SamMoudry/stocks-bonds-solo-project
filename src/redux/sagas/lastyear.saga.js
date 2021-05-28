import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* lastYear(action) {
    try{
        yield axios.post('/api/lastyear', action.payload);
    }catch (error) {
        console.log(error);
    }
}

function* lastYearSaga() {
    yield takeLatest('LAST_YEAR', lastYear)
}

export default lastYearSaga;