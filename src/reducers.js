import {combineReducers} from 'redux';
import localChange from './locales/reducer';
//<-- IMPORT MODULE REDUCER -->

export default function createReducer() {
  return combineReducers({
    locale: localChange,
    //<-- INJECT MODULE REDUCER -->
  });
}
