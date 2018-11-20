import {
	LOGIN_DRIVER,
	DRIVER_NAME_CHANGED,
	DRIVER_EMAIL_PHONE_CHANGED,
	ADD_ORDER_TO_DRIVER,
	REMOVE_LAST_ORDER_FROM_DRIVER
} from '../actions/types';

const INITIAL_STATE = {
	driver: false,
	name: {
		firstName: ' ',
		lastName: ' '
	},
	email: ' ',
	phoneNumber: ' ',
	password: ' ',
	orders: [],
	fingerPrintID: ' '
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
		case ADD_ORDER_TO_DRIVER:
			return {
				...state,
				orders: [...state.orders, action.payload]
			};
		case REMOVE_LAST_ORDER_FROM_DRIVER:
			return {
				...state,
				orders: removeLastOrderID(state.orders, action.payload)
			};
		default:
			return state;
	}
};

const removeLastOrderID = (orders, orderNumber) => {
	const newOrderArray = [];
	for (let i = 0; i < orders.length; i++) {
		if (orders[i] !== orderNumber) newOrderArray.push(orders[i]);
	}
	return newOrderArray;
};
