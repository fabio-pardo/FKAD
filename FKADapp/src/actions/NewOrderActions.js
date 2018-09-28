import { Actions } from 'react-native-router-flux';

import { REFRIGERATE_ITEMS_CHANGE } from './types';

export const addItem = items => {
	return {
		type: REFRIGERATE_ITEMS_CHANGE,
		payload: items
	};
};
