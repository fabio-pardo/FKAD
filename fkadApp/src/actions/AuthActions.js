import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { getOrdersUser } from './OrdersActions';

import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER,
	LOGIN_DRIVER,
	LOGIN_USER_FAIL,
	LOGIN_PASSWORD_FAIL
} from './types';

export const emailChanged = text => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = text => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const loginUser = (email, password) => {
	return dispatch => {
		axios
			.get(
				`https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev3/FKADFunc/loginapi/${email}`,
				{
					'Content-Type': 'application/json',
					Accept: 'application/json'
				}
			)
			.then(response => {
				if (response.data.type === 'user') {
					axios
						.get(
							`https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev3/FKADFunc/userapi/${email}`,
							{
								'Content-Type': 'application/json',
								Accept: 'application/json'
							}
						)
						.then(res => {
							if (checkPassword(password, res.data.password)) {
								dispatch({
									type: LOGIN_USER,
									payload: res.data
								});

								const orders = res.data.orders;
								for (let i = 0; i < orders.length; i++) {
									dispatch(getOrdersUser(orders[i]));
								}
								Actions.myOrders();
							} else {
								dispatch({
									type: LOGIN_PASSWORD_FAIL
								});
							}
						})
						.catch(err => {
							dispatch({
								type: LOGIN_USER_FAIL
							});
						});
				} else if (response.data.type === 'driver') {
					axios
						.get(
							`https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev3/FKADFunc/driverapi/${email}`,
							{
								'Content-Type': 'application/json',
								Accept: 'application/json'
							}
						)
						.then(res => {
							if (checkPassword(password, res.data.password)) {
								dispatch({
									type: LOGIN_DRIVER,
									payload: res.data
								});
								Actions.deliveries();
							} else {
								dispatch({
									type: LOGIN_PASSWORD_FAIL
								});
							}
						});
				} else {
					dispatch({
						type: LOGIN_USER_FAIL
					});
				}
			})
			.catch(err => {
				dispatch({
					type: LOGIN_USER_FAIL
				});
			});
	};
};

const checkPassword = (password, dataPassword) => {
	if (password === dataPassword) {
		return true;
	}

	return false;
};
