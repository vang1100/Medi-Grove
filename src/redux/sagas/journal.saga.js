import axios from 'axios';
import { put, takeEvery, select, take } from 'redux-saga/effects';

function* fetchJournal() {
  
 try {

    // const journalResponse = yield axios.get(`/api/journal/${action.payload}`)

    // console.log('journalResponse:', journalResponse);

     const user = yield select(state => state.user); 

     // yield select () is a function to retrieve data from the application's state (or Redux store). 
        // it takes in an argument
     // state here means the entire Redux state object, sometimes called the "state tree"
     // user here is from the redux
     // here I am using the function to grab the stae of the user redux. and i assigned it with the varible
            // called user
    
    const journalResponse = yield axios.get(`/api/journal/`);

    console.log('get journal response data', journalResponse.data);

      // here we are grabbing from the user.id (property)
    yield put({ 
      type: 'SET_JOURNAL', 
      payload: journalResponse.data
    });


  } catch(error){
    console.log('error in fetch journal', error);

  }
}

  


function* deleteJournal(action) {
try {

    console.log('DELETE journal saga');

    yield axios.delete(`/api/journal/${action.payload}`)

    yield put({

      type: 'FETCH_JOURNAL'
    });

  }catch(error){
    console.log('error in deleteJournal', error)
  }
}

function* addJournal(action) {

  try {

    console.log('add journal saga');

   const addPost = yield axios.post(`/api/journal/`, action.payload);

   // the data you want to send to your API — usually, the new journal entry from your form.
    // s just an argument containing your form data that you want to POST to the server.
  
   console.log('what is inside addPost', addPost.data);

    yield put({

      type: 'FETCH_JOURNAL',
     
    });

  }catch(error){
    console.log('error in deleteJournal', error)
  }

}

function* updateJournal(action) {
  try {

    console.log('edit journal saga');

    yield axios.put(`/api/journal/${action.payload}`)

    yield put({

      type: 'FETCH_JOURNAL'
    });

  }catch(error){
    console.log('error in updateJournal', error)
  }
  
}


function* journalSaga() {
yield takeEvery('FETCH_JOURNAL', fetchJournal)
yield takeEvery('DELETE_JOURNAL', deleteJournal)
yield takeEvery('POST_JOURNAL', addJournal)
yield takeEvery('PUT_JOURNAL', updateJournal)

}

export default journalSaga;