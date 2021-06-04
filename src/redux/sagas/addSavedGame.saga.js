import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

function* addSavedGame(action) {
    try{
        yield axios.post(`/api/savegame`, action.payload);
        yield put({type: 'GET_SAVED_GAME'});
    }catch (error) {

    }
}

function* addSavedGameSaga() {
    yield takeLatest('ADD_SAVED_GAME', addSavedGame)
}

export default addSavedGameSaga;