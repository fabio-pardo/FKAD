import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER } from './types';

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
			.get(`https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev3/FKADFunc/loginapi/${email}`,
			{
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		).then(response => {
			console.log(response)
			if (response.data.type === 'user') {
				console.log(response.data.type);
				axios.get(`https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev3/FKADFunc/userapi/${email}`,
					{
						'Content-Type': 'application/json',
						Accept: 'application/json'
					}
				).then(res => {
					console.log(res);
					if (checkPassword(password, res.data.password)) {
						dispatch({
							type: LOGIN_USER
						});
						Actions.myOrders();
					}
				}).catch(err => {
					console.log(err);
				});
			} else {
				axios.get(`https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev3/FKADFunc/driverapi/${email}`,
				{
					'Content-Type': 'application/json',
					Accept: 'application/json'
				}
				).then(res => {
					if (checkPassword(password, res.password)) {
						dispatch({

						});
					Actions.deliveries();
					}
				});
			}
		})
		.catch(err => {
			console.log(err);
		});
	};
};

const checkPassword = (password, dataPassword) => {
	if (password === dataPassword) {
		return true;
	}

	return false;
};
