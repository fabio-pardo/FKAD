import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Header } from '../common';

class CreateNewOrder extends Component {
	render() {
		return (
			<View>
				<Header headerTitle="New Order" />
			</View>
		);
	}
}

export default CreateNewOrder;
