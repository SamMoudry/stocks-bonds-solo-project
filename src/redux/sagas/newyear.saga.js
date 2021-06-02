import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

function* newYear(action) {
    try{
        console.log('NEW YEAR SAGA', action.payload);
        const response = yield axios.get(`/api/newyear/${action.payload.game_id}/${action.payload.year_number}`);
        console.log(response.data);
        yield put({type: 'SET_NEW_YEAR', payload: response.data});
    }catch (error) {
        console.log(error);
    }
}

function* newYearSaga() {
    yield takeLatest('NEW_YEAR', newYear)
}

export default newYearSaga;