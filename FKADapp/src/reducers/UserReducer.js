import {
	LOGIN_USER,
	USER_NAME_CHANGED,
	USER_EMAIL_PHONE_CHANGED,
	USER_ADDRESS_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
	user: false,
	name: {
		firstName: '',
		lastName: ''
	},
	email: '',
	phoneNumber: '',
	homeAddress: {
		street: '',
		city: '',
		state: '',
		zipcode: ''
	},
	password: '',
	boxID: '',
	WiFi: {
		wifiName: '',
		wifiPassword: ''
	}
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOGIN_USER:
			return {
				...state,
				user: true,
				name: {
					firstName: action.payload.firstName,
					lastName: action.payload.lastName
				},
				email: action.payload.email,
				phoneNumber: action.payload.phoneNumber,
				homeAddress: {
					street: action.payload.street,
					city: action.payload.city,
					state: action.payload.state,
					zipcode: action.payload.zipcode
				},
				password: action.payload.password,
				boxID: action.payload.boxID,
				WiFi: {
					wifiName: action.payload.wifiName,
					wifiPassword: action.payload.wifiPassword
				}
			};
		case USER_NAME_CHANGED:
			return {
				...state,
				name: {
					...state.name,
					[action.payload.type]: action.payload.text
				}
			};
		case USER_EMAIL_PHONE_CHANGED:
			return {
				...state,
				[action.payload.type]: action.payload.text
			};
		case USER_ADDRESS_CHANGED:
			return {
				...state,
				homeAddress: {
					...state.homeAddress,
					[action.payload.type]: action.payload.text
				}
			};
		default:
			return state;
	}
};
