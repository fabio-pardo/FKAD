import {
	GET_ORDERS,
	GET_ORDERS_USER,
	GET_ALL_ORDERS,
	AT_THE_DOOR
} from '../actions/types';

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
		case GET_ORDERS_USER:
			return {
				...state,
				active: addActiveOrder(state.active, action.payload),
				complete: addCompleteOrder(state.complete, action.payload),
				pending: addPendingOrder(state.pending, action.payload)
			};
		case GET_ALL_ORDERS:
			return {
				...state,
				pending: addAllPendingOrder(action.payload),
				active: [],
				complete: []
			};
		case AT_THE_DOOR:
			return {
				...state,
				active: changeAtDoor(state.active, action.payload)
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
		order.atDoor = false;
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

const addPendingOrder = (pending, order) => {
	if (order.status === 'pending') {
		return [...pending, order];
	}
	return pending;
};

const changeAtDoor = (active, id) => {
	active[id].atDoor = true;
	return [...active];
};
