import axios from 'axios';
import { put, takeEvery, select } from 'redux-saga/effects';

function* fetchJournal() {
  
 try {

    // const journalResponse = yield axios.get(`/api/journal/${action.payload}`)

    // console.log('journalResponse:', journalResponse);


    // yield put({ 
    //   type: 'SET_JOURNAL', 
    //   payload: journalResponse.data
     // Get user ID from Redux auth state
    const { id: userId } = yield select((state) => state.auth.user);
    
    const journalResponse = yield axios.get(`/api/journal/${userId}`, {
      withCredentials: true // ← Critical for session cookies
    });

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