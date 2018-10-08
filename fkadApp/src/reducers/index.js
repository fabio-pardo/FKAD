import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import NewOrderReducer from './NewOrderReducer';
import NewSignUpReducer from './NewSignUpReducer';

export default combineReducers({
	auth: AuthReducer,
	newOrder: NewOrderReducer,
	signUp: NewSignUpReducer
});
