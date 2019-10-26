import {EMAIL_CHANGED, EMAIL_CHANGE} from './Auth.types';

export const emailChange = text => {
  return {
    type: EMAIL_CHANGE,
    payload: text,
  };
};

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};
