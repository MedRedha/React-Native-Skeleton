import {EMAIL_CHANGED, EMAIL_CHANGE} from './Auth.types';

const INITIAL_STATE = {
  AccessToken: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, AccessToken: action.payload};
    default:
      return state;
  }
};
