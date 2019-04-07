import { put, all, take, takeLatest } from 'redux-saga/effects';
import { DISPLAY_USER, LOAD_DATA, SET_DATA } from './actions';
//another generator to fetch data

function* loadData() {
  try {
    const result = yield fetch('get_data')
          .then(response => response.json());
    console.log('load data result', result)
    yield put({ type: SET_DATA, payload: result });
  } catch (error) {
    console.log('load data', error);
  }
}

function* watchLoadData() {
  yield takeLatest(LOAD_DATA, loadData)
}

function* feedReducerDisplay({ payload }) {
  try {
    yield put({ type: DISPLAY_USER, payload });
  } catch (error) {
    console.log('error', error);
  }
}

function* watchDisplay() {
  yield take(DISPLAY_USER, feedReducerDisplay);
}


export default function* rootSaga() {
  yield all([
    watchLoadData(),
    watchDisplay()
  ]);
}
