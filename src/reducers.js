import {combineReducers} from 'redux';
import AuthReducer from '../src/containers/Auth/Auth.reducer';
//<-- IMPORT MODULE REDUCER -->

export default function createReducer() {
  return combineReducers({
    AuthState: AuthReducer,
    //<-- INJECT MODULE REDUCER -->
  });
}
