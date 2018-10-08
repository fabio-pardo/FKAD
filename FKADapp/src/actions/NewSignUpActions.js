import { Actions } from 'react-native-router-flux';

import {
  NAME_CHANGED,
  GMAIL_CHANGED,
  PHONE_NUMBER_CHANGED,
  HOME_ADDRESS_CHANGED,
  NEW_PASSWORD_CHANGED,
  CREATE_NEW_USER
} from './types';

export const nameChanged = ({ type, text }) => {
  return {
    type: NAME_CHANGED,
    payload: { type, text }
  };
};

export const GMailChanged = text => {
  return {
    type: GMAIL_CHANGED,
    payload: text
  };
};

export const phoneChanged = text => {
  return {
    type: PHONE_NUMBER_CHANGED,
    payload: text
  };
};

export const homeAddressChanged = ({ type, text }) => {
  return {
    type: HOME_ADDRESS_CHANGED,
    payload: { type, text }
  };
};

export const newPasswordChanged = text => {
  return {
    type: NEW_PASSWORD_CHANGED,
    payload: text
  };
};

export const createNewUser = () => {
  return {
    type: CREATE_NEW_USER
  };
};
