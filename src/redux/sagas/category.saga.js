import axios from 'axios';
import { put, takeEvery} from 'redux-saga/effects';

function* fetchCategory(){
    console.log('fetch category');
}

function* categorySaga() {

    yield takeEvery('FETCH_CATE', fetchCategory)

}

export default categorySaga