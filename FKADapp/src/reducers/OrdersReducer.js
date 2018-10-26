import { GET_ORDERS } from '../actions/types';

const INITIAL_STATE = {
	pendingActive: [],
	complete: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_ORDERS:
			return state;
		default:
			return state;
	}
};
