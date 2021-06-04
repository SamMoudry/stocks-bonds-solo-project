import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

function* getSavedGame(action) {
    try{
        const response = yield axios.get(`/api/savegame/${action.payload}`)
        yield put({type: 'SET_SAVED_GAME', payload: response.data})
    }catch (error) {

    }
}

function* getSavedGameSaga() {
    yield takeLatest('GET_SAVED_GAMES', getSavedGame)
}

export default getSavedGameSaga;