import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

function* deleteSavedGame(action) {
    try{
        yield axios.delete(`/api/savegame/${action.payload}`);
        yield put({type: 'GET_SAVED_GAME'});
    }catch (error) {

    }
}

function* deleteSavedGameSaga() {
    yield takeLatest('DELETE_SAVED_GAME', deleteSavedGame)
}

export default deleteSavedGameSaga;