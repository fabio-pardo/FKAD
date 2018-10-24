import {
	STORE_NAME,
	ADDRESS_CHANGED,
	ORDER_NUMBER_CHANGED,
	DAY_CHANGED,
	TIME_CHANGED,
	PLACE_CHANGED,
	KITCHEN_CHANGED,
	REFRIGERATE_CHANGED,
	REF_ITEM_CHANGE,
	REF_ITEM_DELETE,
	ADD_REF_ITEM,
	FREEZE_CHANGED,
	FREEZE_ITEM_CHANGE,
	FREEZE_ITEM_DELETE,
	ADD_FREEZE_ITEM,
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
		day: '',
		time: '',
		place: {
			doorway: false,
			inside: false,
			kitchen: false,
			refrigerate: {
				state: false,
				items: ['Item']
			},
			freeze: {
				state: false,
				items: ['Item']
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
					day: action.payload
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
		case REF_ITEM_CHANGE:
			return {
				...state,
				timeAndPlace: {
					...state.timeAndPlace,
					place: {
						...state.timeAndPlace.place,
						refrigerate: {
							...state.timeAndPlace.place.refrigerate,
							items: updateItems(
								state.timeAndPlace.place.refrigerate.items,
								action.payload
							)
						}
					}
				}
			};
		case ADD_REF_ITEM:
			return {
				...state,
				timeAndPlace: {
					...state.timeAndPlace,
					place: {
						...state.timeAndPlace.place,
						refrigerate: {
							...state.timeAndPlace.place.refrigerate,
							items: [
								...state.timeAndPlace.place.refrigerate.items,
								'Item'
							]
						}
					}
				}
			};
		case REF_ITEM_DELETE:
			return {
				...state,
				timeAndPlace: {
					...state.timeAndPlace,
					place: {
						...state.timeAndPlace.place,
						refrigerate: {
							...state.timeAndPlace.place.refrigerate,
							items: deleteItem(
								state.timeAndPlace.place.refrigerate.items,
								action.payload
							)
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
		case FREEZE_ITEM_CHANGE:
			return {
				...state,
				timeAndPlace: {
					...state.timeAndPlace,
					place: {
						...state.timeAndPlace.place,
						freeze: {
							...state.timeAndPlace.place.freeze,
							items: updateItems(
								state.timeAndPlace.place.freeze.items,
								action.payload
							)
						}
					}
				}
			};
		case FREEZE_ITEM_DELETE:
			return {
				...state,
				timeAndPlace: {
					...state.timeAndPlace,
					place: {
						...state.timeAndPlace.place,
						freeze: {
							...state.timeAndPlace.place.freeze,
							items: deleteItem(
								state.timeAndPlace.place.freeze.items,
								action.payload
							)
						}
					}
				}
			};
		case ADD_FREEZE_ITEM:
			return {
				...state,
				timeAndPlace: {
					...state.timeAndPlace,
					place: {
						...state.timeAndPlace.place,
						freeze: {
							...state.timeAndPlace.place.freeze,
							items: [
								...state.timeAndPlace.place.freeze.items,
								'Item'
							]
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
						clientName: action.payload.firstName,
						clientLastName: action.payload.lastName
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
							street: action.payload.street,
							city: action.payload.city,
							state: action.payload.state,
							zipcode: action.payload.zipcode
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
			return INITIAL_STATE;
		default:
			return state;
	}
};

const updateItems = (items, newitem) => {
	const updatedItems = items.map((item, index) => {
		if (index === newitem.id) {
			return newitem.value;
		}
		return item;
	});
	return updatedItems;
};

const deleteItem = (items, id) => {
	const updatedItems = [];
	for (let i = 0; i < items.length; i++) {
		if (i !== id) updatedItems.push(items[i]);
	}
	return updatedItems.length > 0 ? updatedItems : ['Item'];
};
