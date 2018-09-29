import {
	REFRIGERATE_ITEMS_CHANGE,
	STORE_NAME,
	ADDRESS_CHANGED,
	ORDER_NUMBER_CHANGED,
	DAY_CHANGED,
	TIME_CHANGED,
	PLACE_CHANGED,
	KITCHEN_CHANGED,
	REFRIGERATE_CHANGED,
	FREEZE_CHANGED
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
		orderNumber: ''
	},
	dayAndTime: {
		day: {
			today: false,
			tomorrow: false
		},
		time: '',
		place: {
			doorway: false,
			inside: false,
			kitchen: false,
			refrigerate: {
				state: false,
				items: []
			},
			freeze: {
				state: false,
				items: []
			}
		}
	},
	items: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case STORE_NAME:
			return {
				...state,
				pickup: { ...state.pickup, storeName: action.payload }
			};
		case ADDRESS_CHANGED:
			return {
				...state,
				pickup: {
					...state.pickup,
					address: {
						...state.pickup.address,
						[action.payload.type]: action.payload.text
					}
				}
			};
		case ORDER_NUMBER_CHANGED:
			return {
				...state,
				pickup: { ...state.pickup, orderNumber: action.payload }
			};
		case DAY_CHANGED:
			return {
				...state,
				dayAndTime: {
					...state.dayAndTime,
					day: {
						...state.dayAndTime.day,
						today: action.payload.today,
						tomorrow: action.payload.tomorrow
					}
				}
			};
		case TIME_CHANGED:
			return {
				...state,
				dayAndTime: { ...state.dayAndTime, time: action.payload }
			};
		case PLACE_CHANGED:
			if (action.payload.inside === false) {
				return {
					...state,
					dayAndTime: {
						...state.dayAndTime,
						place: {
							...state.dayAndTime.place,
							doorway: action.payload.doorway,
							inside: action.payload.inside,
							kitchen: false,
							refrigerate: {
								...state.dayAndTime.place.refrigerate,
								state: false
							},
							freeze: {
								...state.dayAndTime.place.freeze,
								state: false
							}
						}
					}
				};
			}
			return {
				...state,
				dayAndTime: {
					...state.dayAndTime,
					place: {
						...state.dayAndTime.place,
						doorway: action.payload.doorway,
						inside: action.payload.inside
					}
				}
			};
		case KITCHEN_CHANGED:
			if (action.payload === false) {
				return {
					...state,
					dayAndTime: {
						...state.dayAndTime,
						place: {
							...state.dayAndTime.place,
							kitchen: action.payload,
							refrigerate: {
								...state.dayAndTime.place.refrigerate,
								state: false
							},
							freeze: {
								...state.dayAndTime.place.freeze,
								state: false
							}
						}
					}
				};
			}
			return {
				...state,
				dayAndTime: {
					...state.dayAndTime,
					place: {
						...state.dayAndTime.place,
						kitchen: action.payload
					}
				}
			};
		case REFRIGERATE_CHANGED:
			return {
				...state,
				dayAndTime: {
					...state.dayAndTime,
					place: {
						...state.dayAndTime.place,
						refrigerate: {
							...state.dayAndTime.place.refrigerate,
							state: !state.dayAndTime.place.refrigerate.state
						}
					}
				}
			};
		case FREEZE_CHANGED:
			return {
				...state,
				dayAndTime: {
					...state.dayAndTime,
					place: {
						...state.dayAndTime.place,
						freeze: {
							...state.dayAndTime.place.freeze,
							state: !state.dayAndTime.place.freeze.state
						}
					}
				}
			};
		default:
			return state;
	}
};
