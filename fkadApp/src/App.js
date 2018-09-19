import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import RouterComponent from './Route';
import reducers from './reducers';

class App extends Component {
	render() {
		return (
			<Provider
				store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} //{} is initial state
			>
				<RouterComponent />
			</Provider>
		);
	}
}

export default App;
