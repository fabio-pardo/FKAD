import { GET_ORDERS, GET_ALL_ORDERS } from '../actions/types';

const INITIAL_STATE = {
	pending: [],
	active: [],
	complete: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_ORDERS:
			return {
				...state,
				active: addActiveOrder(state.active, action.payload),
				complete: addCompleteOrder(state.complete, action.payload)
			};
		case GET_ALL_ORDERS:
			return {
				...state,
				pending: addAllPendingOrder(action.payload),
				active: [],
				complete: []
			};
		default:
			return state;
	}
};

const addAllPendingOrder = orders => {
	const pending = [];
	for (let i = 0; i < orders.length; i++) {
		if (orders[i].status === 'pending') {
			pending.push(orders[i]);
		}
	}
	return pending;
};

const addActiveOrder = (active, order) => {
	if (order.status === 'active') {
		return [...active, order];
	}
	return active;
};

const addCompleteOrder = (complete, order) => {
	if (order.status === 'complete') {
		return [...complete, order];
	}
	return complete;
};
