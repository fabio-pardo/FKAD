import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';
import NewOrderReducer from './NewOrderReducer';
import NewSignUpReducer from './NewSignUpReducer';
import DriverReducer from './DriverReducer';

export default combineReducers({
	auth: AuthReducer,
	user: UserReducer,
	driver: DriverReducer,
	newOrder: NewOrderReducer,
	signUp: NewSignUpReducer
});
