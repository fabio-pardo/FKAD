import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Header } from './common';

class Dashboard extends Component {
	render() {
		return (
			<View style={{backgroundColor: 'white'}}>
				<Header headerTitle="Dashboard" />
			</View>
		);
	}
}

export default Dashboard;
