import {
	REFRIGERATE_ITEMS_CHANGE,
	STORE_NAME,
	ADDRESS_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
	pickup: {
		storeName: '',
		address: {
			street: '',
			city: '',
			state: '',
			zipcode: ''
		},
		orderNumber: 0
	},
	items: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case STORE_NAME:
			return { ...state, pickup: { storeName: action.payload } };
		case ADDRESS_CHANGED:
			return {
				...state,
				pickup: {
					address: { [action.payload.type]: action.payload.text }
				}
			};
		case REFRIGERATE_ITEMS_CHANGE:
			return { ...state, items: action.payload };
		default:
			return state;
	}
};
