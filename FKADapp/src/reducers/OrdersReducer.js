import { GET_ORDERS, GET_ALL_ORDERS } from '../actions/types';
import { getAllOrders } from '../actions';

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
				pending: addPendingOrder(state.pending, action.payload),
				active: addActiveOrder(state.active, action.payload),
				complete: addCompleteOrder(state.complete, action.payload)
			};
		case GET_ALL_ORDERS:
			return {
				...state,
				pending: addAllPendingOrders(state.pending, action.payload),
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

const addAllPendingOrders = (pending, orders) => {
	if (orders.status === 'pending') {
		return [...pending, orders];
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
