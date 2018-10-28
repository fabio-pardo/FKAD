import {
	LOGIN_USER,
	USER_NAME_CHANGED,
	USER_EMAIL_PHONE_CHANGED,
	USER_ADDRESS_CHANGED,
	ADD_ORDER_NUMBER,
	DELETE_ORDER_NUMBER
} from '../actions/types';

const INITIAL_STATE = {
	user: false,
	name: {
		firstName: ' ',
		lastName: ' '
	},
	email: ' ',
	phoneNumber: ' ',
	homeAddress: {
		street: ' ',
		city: ' ',
		state: ' ',
		zipcode: ' '
	},
	password: ' ',
	boxID: ' ',
	WiFi: {
		wifiName: ' ',
		wifiPassword: ' '
	},
	order: []
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
				},
				order: action.payload.orders
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
		case ADD_ORDER_NUMBER:
			return {
				...state,
				order: newOrderArray(
					action.payload.order,
					action.payload.orderNumber
				)
			};
		case DELETE_ORDER_NUMBER:
			return {
				...state,
				order: deleteOrderInArray(
					action.payload.order,
					action.payload.orderNumber
				)
			};
		default:
			return state;
	}
};

const newOrderArray = (order, orderNumber) => {
	if (typeof order === 'string') return [orderNumber];
	return [...order, orderNumber];
};

const deleteOrderInArray = (order, orderNumber) => {
	const updatedOrde = [];
	for (let i = 0; i < order.length; i++) {
		if (order[i] !== orderNumber) updatedOrde.push(order[i]);
	}
	return updatedOrde.length > 0 ? updatedOrde : [];
};
