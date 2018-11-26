//import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import {
	GET_ORDERS,
	GET_ALL_ORDERS,
	GET_ORDERS_USER,
	ADD_ORDER_TO_DRIVER,
	REMOVE_LAST_ORDER_FROM_DRIVER,
	AT_THE_DOOR
} from './types';

export const getOrders = id => {
	return dispatch => {
		axios
			.get(
				`https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev3//FKADFunc/orderapi/${id}`,
				{
					'Content-Type': 'application/json',
					Accept: 'application/json'
				}
			)
			.then(res => {
				dispatch({
					type: GET_ORDERS,
					payload: res.data
				});
			});
	};
};

export const getOrdersUser = id => {
	return dispatch => {
		axios
			.get(
				`https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev3//FKADFunc/orderapi/${id}`,
				{
					'Content-Type': 'application/json',
					Accept: 'application/json'
				}
			)
			.then(res => {
				dispatch({
					type: GET_ORDERS_USER,
					payload: res.data
				});
			});
	};
};

export const getAllOrders = orders => dispatch => {
	axios
		.get(
			'https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev3/FKADFunc/orderapi',
			{
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		)
		.then(res => {
			dispatch({
				type: GET_ALL_ORDERS,
				payload: res.data
			});
		})
		.then(() => {
			for (let i = 0; i < orders.length; i++) {
				dispatch(getOrders(orders[i]));
			}
		});
};

export const changeOrderStatusActive = ({
	order,
	firstName,
	lastName,
	email,
	driver
}) => () => {
	axios
		.post(
			'https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev3/FKADFunc/orderapi',
			{
				url: order.url,
				lockBox: order.lockBox,
				storeName: order.storeName,
				storeStreet: order.storeStreet,
				storeCity: order.storeCity,
				storeState: order.storeState,
				storeZipcode: order.storeZipcode,
				orderNumber: order.orderNumber,
				day: order.day,
				time: order.time,
				doorway: order.doorway,
				inside: order.inside,
				kitchen: order.kitchen,
				refrigerateState: order.refrigerateState,
				refrigerateItems: order.refrigerateItems,
				freezeState: order.freezeState,
				freezeItems: order.freezeItems,
				clientName: order.clientName,
				clientLastName: order.clientLastName,
				clientStreet: order.clientStreet,
				clientCity: order.clientCity,
				clientState: order.clientState,
				clientZipcode: order.clientZipcode,
				status: 'active',
				driverEmail: email,
				driverFirst: firstName,
				driverLast: lastName
			},
			{
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		)
		.then(() => {
			axios
				.post(
					'https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev3/FKADFunc/driverapi',
					{
						email: driver.email,
						fingerPrintID: driver.fingerPrintID,
						firstName: driver.name.firstName,
						lastName: driver.name.lastName,
						orders: driver.orders,
						password: driver.password,
						phoneNumber: driver.phoneNumber
					},
					{
						'Content-Type': 'application/json',
						Accept: 'application/json'
					}
				)
				.then(res => {
					console.log(res);
				});
		});
};

export const addOrderNumberToDriverArr = orderNumber => {
	return {
		type: ADD_ORDER_TO_DRIVER,
		payload: orderNumber
	};
};

export const removeLastOrderNumFromDriverArr = orderNumber => {
	return {
		type: REMOVE_LAST_ORDER_FROM_DRIVER,
		payload: orderNumber
	};
};

export const atTheDoorChange = ({
	activeID,
	fingerPrintID,
	lockBox,
	orderID
}) => {
	return dispatch => {
		axios
			.post(
				'https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev3/FKADFunc/fingerapi',
				{
					serialNum: '1234',
					driverID: fingerPrintID,
					orderID: orderID
				},
				{
					'Content-Type': 'application/json',
					Accept: 'application/json'
				}
			)
			.then(() => {
				dispatch({
					type: AT_THE_DOOR,
					payload: activeID
				});
			});
	};
};
