import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Header } from '../../common';

const Deliveries = () => {
	
	return (
		<View style={{ backgroundColor: '#ADCBE0', height: '100%' }}>
			<Header headerTitle="Deliveries" user='driver' />
			<TouchableOpacity
				style={styles.boxStyle}
				onPress={() => {
					Actions.pendingDeliveries();
				}}
			>
				<Text style={styles.textStyle}>Pending Deliveries</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.boxStyle}
				onPress={() => {
					Actions.activeDeliveries();
				}}
			>
				<Text style={styles.textStyle}>Active Deliveries</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.boxStyle}
				onPress={() => {
					Actions.previousDeliveries();
				}}
			>
				<Text style={styles.textStyle}>Previous Deliveries</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = {
	textStyle: {
		color: '#3982B6',
		fontSize: 20,
		fontFamily: 'AppleGothic'
	},
	boxStyle: {
		backgroundColor: 'white',
		borderBottomColor: '#3982B6',
		borderBottomWidth: 2,
		padding: 15,
		elevation: 2
	}
};

export default Deliveries;
