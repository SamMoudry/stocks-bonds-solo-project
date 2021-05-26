import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* newGame(action) {
    try{
        const response = yield axios.post('/api/newgame', action.payload);
        yield put({ type: 'SET_NEW_GAME', payload: response.data});
    }catch (error) {
        console.log(error);
    }
}

function* newGameSaga() {
    yield takeLatest('NEW_GAME', newGame)
}

export default newGameSaga;