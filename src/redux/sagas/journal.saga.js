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

    // this works because there is no body to send. no need to separate ID from body
  // passing a simple string or number as the payload works

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
    // POST	/api/journal/	In request body	No resource ID yet (creating new entry) therefore no need to interpolate
  
   console.log('what is inside addPost', addPost.data);

    yield put({

      type: 'FETCH_JOURNAL',
     
    });

  }catch(error){
    console.log('error in deleteJournal', error)
  }

}

function* updateJournal(action) {

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

    const { id, ...data } = action.payload;

    console.log('edit journal saga');

    yield axios.put(`/api/journal/${id}`, data);

        //  Because PUT requests typically update a resource with multiple fields, so the server expects:

        // ID in URL to know what to update.

        // Updated data in the body.

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