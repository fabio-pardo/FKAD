import {
	LOGIN_DRIVER,
	DRIVER_NAME_CHANGED,
	DRIVER_EMAIL_PHONE_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
	driver: false,
	name: {
		firstName: '',
		lastName: ''
	},
	email: '',
	phoneNumber: '',
	password: '',
	orders: [],
	fingerPrintID: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOGIN_DRIVER:
			return {
				...state,
				driver: true,
				name: {
					firstName: action.payload.firstName,
					lastName: action.payload.lastName
				},
				email: action.payload.email,
				phoneNumber: action.payload.phoneNumber,
				password: action.payload.password,
				orders: action.payload.orders,
				fingerPrintID: action.payload.fingerPrintID
			};
		case DRIVER_NAME_CHANGED:
			return {
				...state,
				name: {
					...state.name,
					[action.payload.type]: action.payload.text
				}
			};
		case DRIVER_EMAIL_PHONE_CHANGED:
			return {
				...state,
				[action.payload.type]: action.payload.text
			};
		default:
			return state;
	}
};
