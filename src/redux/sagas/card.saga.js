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

function* updateCard(action) {

// yield axios.put(`/api/journal/${action.payload}`)
  // i assume that this will allow is to change the object from the URL

//   What’s wrong:
// action.payload is likely an object containing the journal data you want to update (including its id and other fields).

// You need to extract the id from the payload for the URL path and pass the rest of the data as the PUT request body.

 // const { id, ...data } = action.payload;
        // // First, manually get the id from the payload.

        // Then, create an empty object data.

        // Loop over all keys of action.payload.

        // For each key except "id", copy the property into data.
  try {

    const id = action.payload.id;

    console.log('edit journal saga');

    yield axios.put(`/api/cards/${id}`);

        //  Because PUT requests typically update a resource with multiple fields, so the server expects:

        // ID in URL to know what to update.

        // Updated data in the body.

    yield put({

      type: 'FETCH_CARD'
    });

  }catch(error){
    console.log('error in updateJournal', error)
  }
  
}

function* cardSaga() {
yield takeEvery('FETCH_CARD', fetchCard),
yield takeEvery('UPDATE_CARD', updateCard)
}

export default cardSaga;