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
	FREEZE_CHANGED,
	DROPPOFF_CLIENT,
	DROPPOFF_CLIENT_NAME,
	DROPPOFF_ADDRESS,
	DROPOFF_ADDRESS_CHANGED,
	SET_ORDER
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
	timeAndPlace: {
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
	dropoff: {
		clientIsAccountOwner: false,
		clientName: '',
		clientLastName: '',
		address: {
			useAccountAddress: false,
			street: '',
			city: '',
			state: '',
			zipcode: ''
		}
	}
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
				timeAndPlace: {
					...state.timeAndPlace,
					day: {
						...state.timeAndPlace.day,
						today: action.payload.today,
						tomorrow: action.payload.tomorrow
					}
				}
			};
		case TIME_CHANGED:
			return {
				...state,
				timeAndPlace: { ...state.timeAndPlace, time: action.payload }
			};
		case PLACE_CHANGED:
			if (action.payload.inside === false) {
				return {
					...state,
					timeAndPlace: {
						...state.timeAndPlace,
						place: {
							...state.timeAndPlace.place,
							doorway: action.payload.doorway,
							inside: action.payload.inside,
							kitchen: false,
							refrigerate: {
								...state.timeAndPlace.place.refrigerate,
								state: false
							},
							freeze: {
								...state.timeAndPlace.place.freeze,
								state: false
							}
						}
					}
				};
			}
			return {
				...state,
				timeAndPlace: {
					...state.timeAndPlace,
					place: {
						...state.timeAndPlace.place,
						doorway: action.payload.doorway,
						inside: action.payload.inside
					}
				}
			};
		case KITCHEN_CHANGED:
			if (action.payload === false) {
				return {
					...state,
					timeAndPlace: {
						...state.timeAndPlace,
						place: {
							...state.timeAndPlace.place,
							kitchen: action.payload,
							refrigerate: {
								...state.timeAndPlace.place.refrigerate,
								state: false
							},
							freeze: {
								...state.timeAndPlace.place.freeze,
								state: false
							}
						}
					}
				};
			}
			return {
				...state,
				timeAndPlace: {
					...state.timeAndPlace,
					place: {
						...state.timeAndPlace.place,
						kitchen: action.payload
					}
				}
			};
		case REFRIGERATE_CHANGED:
			return {
				...state,
				timeAndPlace: {
					...state.timeAndPlace,
					place: {
						...state.timeAndPlace.place,
						refrigerate: {
							...state.timeAndPlace.place.refrigerate,
							state: !state.timeAndPlace.place.refrigerate.state
						}
					}
				}
			};
		case FREEZE_CHANGED:
			return {
				...state,
				timeAndPlace: {
					...state.timeAndPlace,
					place: {
						...state.timeAndPlace.place,
						freeze: {
							...state.timeAndPlace.place.freeze,
							state: !state.timeAndPlace.place.freeze.state
						}
					}
				}
			};
		case DROPPOFF_CLIENT:
			if (!state.dropoff.clientIsAccountOwner) {
				return {
					...state,
					dropoff: {
						...state.dropoff,
						clientIsAccountOwner: !state.dropoff
							.clientIsAccountOwner,
						clientName: 'Account Name',
						clientLastName: 'Account LastName'
					}
				};
			}
			return {
				...state,
				dropoff: {
					...state.dropoff,
					clientIsAccountOwner: !state.dropoff.clientIsAccountOwner,
					clientName: '',
					clientLastName: ''
				}
			};
		case DROPPOFF_CLIENT_NAME:
			return {
				...state,
				dropoff: {
					...state.dropoff,
					[action.payload.type]: action.payload.text
				}
			};
		case DROPPOFF_ADDRESS:
			if (!state.dropoff.address.useAccountAddress) {
				return {
					...state,
					dropoff: {
						...state.dropoff,
						address: {
							...state.dropoff.address,
							useAccountAddress: !state.dropoff.address
								.useAccountAddress,
							street: 'Account Street',
							city: 'Account City',
							state: 'Account State',
							zipcode: 'Account Zipcode'
						}
					}
				};
			}
			return {
				...state,
				dropoff: {
					...state.dropoff,
					address: {
						...state.dropoff.address,
						useAccountAddress: !state.dropoff.address
							.useAccountAddress,
						street: '',
						city: '',
						state: '',
						zipcode: ''
					}
				}
			};
		case DROPOFF_ADDRESS_CHANGED:
			return {
				...state,
				dropoff: {
					...state.dropoff,
					address: {
						...state.dropoff.address,
						[action.payload.type]: action.payload.text
					}
				}
			};
		case SET_ORDER:
			//send new order to database and initialize new order state
			return INITIAL_STATE;
		default:
			return state;
	}
};
