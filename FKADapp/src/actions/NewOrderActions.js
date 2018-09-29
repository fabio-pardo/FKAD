import { Actions } from 'react-native-router-flux';

import {
	REFRIGERATE_ITEMS_CHANGE,
	STORE_NAME,
	ADDRESS_CHANGED,
	ORDER_NUMBER_CHANGED,
	DAY_CHANGED,
	TIME_CHANGED,
	PLACE_CHANGED,
	KITCHEN_CHANGED,
	REFRIGERATE_CHANGED,
	FREEZE_CHANGED
} from './types';

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

export const orderNumberChanged = text => {
	return {
		type: ORDER_NUMBER_CHANGED,
		payload: text
	};
};

export const dayChanged = ({ today, tomorrow }) => {
	return {
		type: DAY_CHANGED,
		payload: { today, tomorrow }
	};
};

export const timeChanged = text => {
	return {
		type: TIME_CHANGED,
		payload: text
	};
};

export const placeChanged = ({ doorway, inside }) => {
	return {
		type: PLACE_CHANGED,
		payload: { doorway, inside }
	};
};

export const inKitchenChanged = value => {
	return {
		type: KITCHEN_CHANGED,
		payload: value
	};
};

export const refrigerateChanged = () => {
	return {
		type: REFRIGERATE_CHANGED
	};
};

export const freezeChanged = () => {
	return {
		type: FREEZE_CHANGED
	};
};
