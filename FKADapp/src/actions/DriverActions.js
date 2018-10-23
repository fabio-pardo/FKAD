import axios from 'axios';

import {
	DRIVER_NAME_CHANGED,
	DRIVER_EMAIL_PHONE_CHANGED,
	LOGIN_DRIVER
} from './types';

export const onDriverNameChanged = ({ type, text }) => ({
	type: DRIVER_NAME_CHANGED,
	payload: { type, text }
});

export const onDriverEmailPhoneChanged = ({ type, text }) => ({
	type: DRIVER_EMAIL_PHONE_CHANGED,
	payload: { type, text }
});

export const onCancelDriverChanges = email => {
	return dispatch => {
		axios
			.get(
				`https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev3/FKADFunc/driverapi/${email}`,
				{
					'Content-Type': 'application/json',
					Accept: 'application/json'
				}
			)
			.then(res => {
				dispatch({
					type: LOGIN_DRIVER,
					payload: res.data
				});
			});
	};
};

export const onSaveDriverChanges = driver => {
	return dispatch => {
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
	};
};
