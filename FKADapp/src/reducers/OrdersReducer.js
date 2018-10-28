import { GET_ORDERS } from '../actions/types';

const INITIAL_STATE = {
	pending: [],
	active: [],
	complete: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_ORDERS:
			console.log('payload:');
			console.log(action.payload);
			return {
				...state,
				pending: addPendingOrder(state.pending, action.payload)
			};
		default:
			return state;
	}
};

const addPendingOrder = (pending, order) => {
	if (order.status === 'pending') {
		return [...pending, order];
	}
	return pending;
};
