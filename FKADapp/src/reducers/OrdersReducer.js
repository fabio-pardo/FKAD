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
				pending: addPendingOrder(state.pending, action.payload),
				active: addActiveOrder(state.active, action.payload),
				complete: addCompleteOrder(state.complete, action.payload)
			};
		case GET_ALL_ORDERS:
			// console.log('payload');
			// console.log(action.payload);
			return {
				...state,
				pending: addAllPendingOrder(state.pending, action.payload),
				active: addAllActiveOrders(state.active, action.payload),
				complete: addAllCompleteOrders(state.complete, action.payload)
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

const addAllPendingOrder = (pending, orders) => {
	for (let i = 0; i < orders.length; i++) {
		// console.log(orders[i]);
		if (orders[i].status === 'pending') {
			pending.push(orders[i]);
		}
	}
	// console.log(pending);
	return pending;
};

const addAllActiveOrders = (active, orders) => {
	for (let i = 0; i < orders.length; i++) {
		// console.log(orders[i]);
		if (orders[i].status === 'active') {
			active.push(orders[i]);
		}
	}
	// console.log(active);
	return active;
};

const addAllCompleteOrders = (complete, orders) => {
	for (let i = 0; i < orders.length; i++) {
		// console.log(orders[i]);
		if (orders[i].status === 'complete') {
			complete.push(orders[i]);
		}
	}
	// console.log(complete);
	return complete;
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
