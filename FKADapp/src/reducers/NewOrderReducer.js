import { REFRIGERATE_ITEMS_CHANGE } from '../actions/types';

const INITIAL_STATE = {
	items: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REFRIGERATE_ITEMS_CHANGE:
			return { ...state, items: action.payload };
		default:
			return state;
	}
};
