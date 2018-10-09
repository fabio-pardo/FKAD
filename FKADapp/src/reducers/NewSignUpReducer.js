import {
  NAME_CHANGED,
  GMAIL_CHANGED,
  PHONE_NUMBER_CHANGED,
  HOME_ADDRESS_CHANGED,
  NEW_PASSWORD_CHANGED,
  NEW_WIFI_CHANGED,
  NEW_BOXID_CHANGED,
  CREATE_NEW_USER,
  CLEAR_SIGNUP
} from '../actions/types';

const INITIAL_STATE = {
  user: {
    name: {
      firstName: '',
      lastName: '',
    },
    GMail: '',
    phoneNumber: '',
    homeAddress: {
      street: '',
      city: '',
      state: '',
      zip: ''
    },
    password: '',
    boxID: '',
    WiFi: {
      wifiName: '',
      wifiPassword: ''
    }
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAME_CHANGED:
      return {
        ...state,
        user: {
          ...state.user,
          name: {
            ...state.user.name,
            [action.payload.type]: action.payload.text
          }
        }
      };
    case GMAIL_CHANGED:
      return {
        ...state,
        user: { ...state.user, GMail: action.payload }
      };
    case PHONE_NUMBER_CHANGED:
      return {
        ...state,
        user: { ...state.user, phoneNumber: action.payload }
      };
    case HOME_ADDRESS_CHANGED:
      return {
        ...state,
        user: {
          ...state.user,
          homeAddress: {
            ...state.user.homeAddress,
            [action.payload.type]: action.payload.text
          }
        }
      };
    case NEW_PASSWORD_CHANGED:
      return {
        ...state,
        user: { ...state.user, password: action.payload }
      };
    case NEW_WIFI_CHANGED:
      return {
        ...state,
        user: {
          ...state.user,
          WiFi: {
            ...state.user.WiFi,
            [action.payload.type]: action.payload.text
          }
        }
      };
    case NEW_BOXID_CHANGED:
      console.log(action.payload);
      return {
        ...state,
        user: { ...state.user, boxID: action.payload }
      };
    case CLEAR_SIGNUP:
      return INITIAL_STATE;
    case CREATE_NEW_USER:
      return INITIAL_STATE;
    default:
      return state;

  }
};
