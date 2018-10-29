//import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import { GET_ORDERS, GET_ALL_ORDERS } from './types';

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

export const getAllOrders = () => {
	return dispatch => {
		axios.get(
			'https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev3/FKADFunc/orderapi',
			{
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		)
		.then(res => {
			// console.log(res);
			dispatch({
				type: GET_ALL_ORDERS,
				payload: res.data
			});
		});
	};
};

export const changeOrderStatusActive = (order) => {
	return dispatch => {
		axios.post(
			'https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev3/FKADFunc/orderapi',
			{
				storeName: order.pickup.storeName,
				storeStreet: order.pickup.address.street,
				storeCity: order.pickup.address.city,
				storeState: order.pickup.address.state,
				storeZipcode: order.pickup.address.zipcode,
				orderNumber: order.pickup.orderNumber,
				day: order.timeAndPlace.day,
				time: order.timeAndPlace.time,
				doorway: order.timeAndPlace.place.doorway,
				inside: order.timeAndPlace.place.inside,
				kitchen: order.timeAndPlace.place.kitchen,
				refrigerateState:
					order.timeAndPlace.place.refrigerate.state,
				refrigerateItems:
					order.timeAndPlace.place.refrigerate.items,
				freezeState: order.timeAndPlace.place.freeze.state,
				freezeItems: order.timeAndPlace.place.freeze.items,
				clientName: order.dropoff.clientName,
				clientLastName: order.dropoff.clientLastName,
				clientStreet: order.dropoff.address.street,
				clientCity: order.dropoff.address.city,
				clientState: order.dropoff.address.state,
				clientZipcode: order.dropoff.address.zipcode,
				status: 'active'
			},
			{
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		);
	};
};
// export const clearOrders = () => {
// 	return {
// 		type: CLEAR_ORDERS
// 	};
// };
