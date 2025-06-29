import axios from 'axios';
import { put, takeEvery, select } from 'redux-saga/effects';

function* fetchJournal(action) {
  
 try {

    // const journalResponse = yield axios.get(`/api/journal/${action.payload}`)

    // console.log('journalResponse:', journalResponse);

    const user_id = action.payload;
    
    const journalResponse = yield axios.get(`/api/journal/${user_id}`);

    yield put({ 
      type: 'SET_JOURNAL', 
      payload: journalResponse.data
    });


  } catch(error){
    console.log('error in fetch journal', error);

  }
}

function* journalSaga() {
yield takeEvery('FETCH_JOURNAL', fetchJournal)
}

export default journalSaga;