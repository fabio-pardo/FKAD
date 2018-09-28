import { Actions } from 'react-native-router-flux';

import { REFRIGERATE_ITEMS_CHANGE, STORE_NAME, ADDRESS_CHANGED } from './types';

export const addItem = items => {
	return {
		type: REFRIGERATE_ITEMS_CHANGE,
		payload: items
	};
};

export const storeChanged = text => {
	return {
		type: STORE_NAME,
		payload: text
	};
};

export const addressChanged = ({ type, text }) => {
	return {
		type: ADDRESS_CHANGED,
		payload: { type, text }
	};
};
