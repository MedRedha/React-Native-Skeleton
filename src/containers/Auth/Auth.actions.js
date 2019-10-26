import {EMAIL_CHANGED} from './Auth.types';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};
