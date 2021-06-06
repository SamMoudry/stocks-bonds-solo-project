import { takeLatest} from 'redux-saga/effects';
import axios from 'axios';

function* updateDescription(action) {
    try{
        console.log(action.payload);
        yield axios.put(`/api/savegame/${action.payload.id}`, action.payload);
    }catch (error) {

    }
}

function* updateDescriptionSaga() {
    yield takeLatest('UPDATE_DESCRIPTION', updateDescription)
}

export default updateDescriptionSaga;