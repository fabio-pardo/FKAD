import { Actions } from 'react-native-router-flux';
import axios from 'axios';

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
	REF_ITEM_CHANGE,
	REF_ITEM_DELETE,
	ADD_REF_ITEM,
	FREEZE_CHANGED,
	FREEZE_ITEM_CHANGE,
	FREEZE_ITEM_DELETE,
	ADD_FREEZE_ITEM,
	DROPPOFF_CLIENT,
	DROPPOFF_CLIENT_NAME,
	DROPPOFF_ADDRESS,
	DROPOFF_ADDRESS_CHANGED,
	SET_ORDER
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

export const dayChanged = text => {
	return {
		type: DAY_CHANGED,
		payload: text
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

export const refItemChanged = ({ id, value }) => {
	return {
		type: REF_ITEM_CHANGE,
		payload: { id, value }
	};
};

export const refItemDeleted = id => {
	return {
		type: REF_ITEM_DELETE,
		payload: id
	};
};

export const refrigerateAddItem = () => {
	return {
		type: ADD_REF_ITEM
	};
};

export const freezeChanged = () => {
	return {
		type: FREEZE_CHANGED
	};
};

export const freezeItemChanged = ({ id, value }) => {
	return {
		type: FREEZE_ITEM_CHANGE,
		payload: { id, value }
	};
};

export const freezeItemDeleted = id => {
	return {
		type: FREEZE_ITEM_DELETE,
		payload: id
	};
};

export const freezeAddItem = () => {
	return {
		type: ADD_FREEZE_ITEM
	};
};

export const dropoffClientChanged = ({ firstName, lastName }) => {
	return {
		type: DROPPOFF_CLIENT,
		payload: { firstName, lastName }
	};
};

export const dropoffNameAndLastChanged = ({ type, text }) => {
	return {
		type: DROPPOFF_CLIENT_NAME,
		payload: { type, text }
	};
};

export const dropoffAddressChanged = ({ street, city, state, zipcode }) => {
	return {
		type: DROPPOFF_ADDRESS,
		payload: { street, city, state, zipcode }
	};
};

export const dropoffAddressInfoChanged = ({ type, text }) => {
	return {
		type: DROPOFF_ADDRESS_CHANGED,
		payload: { type, text }
	};
};

export const setOrder = () => {
	return dispatch => {
		axios
			.post(
				'https://vul31mqje4.execute-api.us-east-1.amazonaws.com/dev3/FKADFunc/orderapi',
				{
					storeName: 'storeName',
					storeStreet: 'address.street',
					storeCity: 'address.city',
					storeState: 'address.state',
					storeZipcode: 'address.zipcode',
					orderNumber: 'orderNumber',
					day: 'day',
					time: 'time',
					doorway: 'place.doorway',
					inside: 'place.inside',
					kitchen: 'place.kitchen',
					refrigerateState: 'refrigerate.state',
					refrigerateItems: 'refrigerate.items',
					freezeState: 'freeze.state',
					freezeItems: 'freeze.items',
					clientIsAccountOwner: 'clientIsAccountOwner',
					clientName: 'clientName',
					clientLastName: 'clientLastName',
					useAccountAddress: 'address.useAccountAddress',
					clientStreet: 'address.street',
					clientCity: 'address.city',
					clientState: 'address.state',
					clientZipcode: 'address.zipcode',
					status: 'pending'
				},
				{
					'Content-Type': 'application/json',
					Accept: 'application/json'
				}
			)
			.then(res => {
				dispatch({
					type: SET_ORDER
				});
			})
			.catch(err => {
				console.log(err);
			});
	};
};
