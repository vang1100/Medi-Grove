import axios from 'axios';
import { put, takeEvery, select } from 'redux-saga/effects';

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

function* journalSaga() {
yield takeEvery('FETCH_JOURNAL', fetchJournal)
}

export default journalSaga;