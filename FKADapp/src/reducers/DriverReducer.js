import { LOGIN_DRIVER } from '../actions/types';

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
		default:
			return state;
	}
};
