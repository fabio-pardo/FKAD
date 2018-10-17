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
		console.log(email, password);
		axios
			.get(
				`https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev2/FKADFunc/userapi/${email}`,
				{
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
			).then(response => {
				// if(input === response.data.email-ID)
				console.log(response.data.password);
				console.log(response.data);
				if (password === response.data.password) {
					dispatch({
						type: LOGIN_USER
					});
					Actions.myOrders();
				}
			});
	};
};
