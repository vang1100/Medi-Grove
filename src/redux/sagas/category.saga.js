import axios from 'axios';
import { put, takeEvery} from 'redux-saga/effects';

function* fetchCategory(){
   // console.log('fetch category');

   try {
   
   const categoryResponse = yield axios.get(`/api/category`);

   console.log('get category response data', categoryResponse.data);

   yield put ({

    type: 'SET_CATEG',
    payload: categoryResponse.data

   });

   } catch(error) {

    console.log('saga error for fetch category');

   }
}

function* categorySaga() {

    yield takeEvery('FETCH_CATE', fetchCategory)

}

export default categorySaga