import {all, fork} from 'redux-saga/effects';
import {watchAuth} from './containers/Auth/Auth.sagas';

export default function* rootSaga() {
  yield all([
    fork(watchAuth),
    //<-- INJECT MODULE SAGA -->
  ]);
}
