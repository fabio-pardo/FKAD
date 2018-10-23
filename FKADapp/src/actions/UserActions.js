// import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import {
	USER_NAME_CHANGED,
	USER_EMAIL_PHONE_CHANGED,
	USER_ADDRESS_CHANGED,
	LOGIN_USER
} from './types';

export const onUserNameChanged = ({ type, text }) => ({
	type: USER_NAME_CHANGED,
	payload: { type, text }
});

export const onUserEmailPhoneChanged = ({ type, text }) => ({
	type: USER_EMAIL_PHONE_CHANGED,
	payload: { type, text }
});

export const onUserAddressChanged = ({ type, text }) => ({
	type: USER_ADDRESS_CHANGED,
	payload: { type, text }
});

export const onCancelUsersChanges = email => {
	return dispatch => {
		axios
			.get(
				`https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev3/FKADFunc/userapi/${email}`,
				{
					'Content-Type': 'application/json',
					Accept: 'application/json'
				}
			)
			.then(res => {
				dispatch({
					type: LOGIN_USER,
					payload: res.data
				});
			});
	};
};

//Not working!!
export const onSaveUserChages = user => {
	return dispatch => {
		console.log(user.email);
		console.log(user.name.firstName);
		console.log(user.name.lastName);
		console.log(user.phoneNumber);
		console.log(user.homeAddress.street);
		console.log(user.homeAddress.city);
		console.log(user.homeAddress.state);
		axios
			.post(
				'https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev3/FKADFunc/userapi',
				{
					email: user.email,
					firstName: user.name.firstName,
					lastName: user.name.lastName,
					phoneNumber: user.phoneNumber,
					street: user.homeAddress.street,
					city: user.homeAddress.city,
					state: user.homeAddress.state,
					zipcode: user.homeAddress.zipcode,
					password: user.password,
					boxID: user.boxID,
					wifiName: user.WiFi.wifiName,
					wifiPassword: user.WiFi.wifiPassword
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
