import { call, put, takeEvery } from 'redux-saga/effects';
import {getCall} from './utils'
const listAdd = 'http://jsonplaceholder.typicode.com/posts?userId=1';

function* fetchUser(action) {
  const{response, error} = yield call(
    getCall,
    listAdd,
  )
  console.log(response)
  if(response){
     yield put({type: "ADD_TODO_SAGA", payload: response.data});
  }
   console.log(error)  
  
}

function* openWindowSaga(action){
  console.log(action)
   yield put({
     type:"OPEN_WINDOW_SAGA",
     payload:action.data
   })
}


function* mySaga() {
  yield takeEvery("ADD_TODO", fetchUser);
  yield takeEvery("OPEN_WINDOW", openWindowSaga)
}

export default mySaga;