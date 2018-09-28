import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NewOrderReducer from './NewOrderReducer';

export default combineReducers({
	auth: AuthReducer,
	newOrder: NewOrderReducer
});
