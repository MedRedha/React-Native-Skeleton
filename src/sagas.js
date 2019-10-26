import {all, fork} from 'redux-saga/effects';
import {watchAuth} from './containers/Auth/Auth.sagas';

//<-- IMPORT MODULE SAGA -->

export default function* rootSaga() {
  yield all([
    fork(watchAuth),
    //<-- INJECT MODULE SAGA -->
  ]);
}
