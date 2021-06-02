import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

function* lastYear(action) {
    try{
        yield axios.post('/api/newyear', action.payload);
        yield put({type: 'NEW_YEAR', payload: {game_id: action.payload.game_id, year_number: action.payload.year_number}})
    }catch (error) {
        console.log(error);
    }
}

function* lastYearSaga() {
    yield takeLatest('LAST_YEAR', lastYear)
}

export default lastYearSaga;