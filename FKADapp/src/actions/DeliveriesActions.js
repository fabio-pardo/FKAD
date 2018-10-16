import { ACTIVE_DELIVERIES } from './types';

export const getActiveDeliveries = user => {
	return {
		type: ACTIVE_DELIVERIES,
		payload: user
	};
};
