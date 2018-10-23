import { Actions } from 'react-native-router-flux';
import axios from 'axios';

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
		console.log('Get table with type of user');
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
					console.log('is user');
					axios
						.get(
							`https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev3/FKADFunc/userapi/${email}`,
							{
								'Content-Type': 'application/json',
								Accept: 'application/json'
							}
						)
						.then(res => {
							console.log('checking password');
							if (checkPassword(password, res.data.password)) {
								dispatch({
									type: LOGIN_USER,
									payload: res.data
								});
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
					console.log('is driver');
					axios
						.get(
							`https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev3/FKADFunc/driverapi/${email}`,
							{
								'Content-Type': 'application/json',
								Accept: 'application/json'
							}
						)
						.then(res => {
							console.log('checking password');
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
				console.log(err);
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
