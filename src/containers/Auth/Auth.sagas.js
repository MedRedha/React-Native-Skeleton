import {put, takeLatest} from 'redux-saga/effects';
import {EMAIL_CHANGE} from './Auth.types';
import {emailChanged} from './Auth.actions';

export function* emailChange() {
  yield put(emailChanged());
}

export function* watchAuth() {
  try {
    yield takeLatest(EMAIL_CHANGE, emailChange);
  } catch (error) {
    /* istanbul ignore next */
    console.log(error);
  }
}
