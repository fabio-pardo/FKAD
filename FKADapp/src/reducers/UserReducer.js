import { LOGIN_USER } from '../actions/types';

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
		default:
			return state;
	}
};
