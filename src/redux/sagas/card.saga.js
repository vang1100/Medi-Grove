import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function * fetchCard() {
    try {

        const cardResponse = yield axios.get(`/api/cards`);
        console.log('get card data response', cardResponse.data);
        yield put({
            type: 'SET_CARD',
            payload: cardResponse.data
        });
    } catch (error) {
        console.log('saga error in fetching cards', error);
    }
}

function* cardSaga() {
yield takeEvery('FETCH_CARD', fetchCard)
}

export default cardSaga;