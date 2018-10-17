import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import {
  NAME_CHANGED,
  GMAIL_CHANGED,
  PHONE_NUMBER_CHANGED,
  HOME_ADDRESS_CHANGED,
  NEW_PASSWORD_CHANGED,
  NEW_BOXID_CHANGED,
  NEW_WIFI_CHANGED,
  CLEAR_SIGNUP,
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

export const newBoxIDChanged = text => {
  return {
    type: NEW_BOXID_CHANGED,
    payload: text
  };
};

export const newWiFiChanged = ({ type, text }) => {
  return {
    type: NEW_WIFI_CHANGED,
    payload: { type, text }
  };
};

export const createNewUser = input => {
  return dispatch => {
    axios
      .post(
        'https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev2/FKADFunc/userapi',
        {
          'email-ID': input.GMail,
          firstName: input.name.firstName,
          lastName: input.name.lastName,
          phoneNumber: input.phoneNumber,
          street: input.homeAddress.street,
          city: input.homeAddress.city,
          state: input.homeAddress.state,
          zipcode: input.homeAddress.zip,
          password: input.password,
          boxID: input.boxID,
          wifiName: input.WiFi.wifiName,
          wifiPassword: input.WiFi.wifiPassword
        },
        {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      )
      .then(response => {
        console.log(response);
        Actions.pop();
        dispatch({
          type: CREATE_NEW_USER
        });
      });

export const clearSignUp = () => {
  return {
    type: CLEAR_SIGNUP
  };
};


// export const getUser = email => {
//   return dispatch => {
//     axios
//       .get(
//         'https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev/FKADFunc/userapi/ani@gmail.com',
//         {
//           'Content-Type': 'application/json',
//           Accept: 'application/json'
//         }
//       )
//       .then(response => {
//         console.log(response.data);
//       });
//   };
// };
