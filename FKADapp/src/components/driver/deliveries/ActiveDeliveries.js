import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header } from '../../common';

class ActiveDeliveries extends Component {
	render() {
		return (
			<View style={{ backgroundColor: 'white', height: '100%' }}>
				<Header headerTitle="Active Deliveries" user='driver'/>
			</View>
		);
	}
}

export default ActiveDeliveries;
