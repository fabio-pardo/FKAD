import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header } from '../common';

const userIsCustomer = user => {
	if (user === 'customer') {
		return (
			<View>
				<TouchableOpacity
					style={styles.boxStyle}
					onPress={() => {
						Actions.keyBox();
					}}
				>
					<Text style={styles.textStyle}>Key-Box</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.boxStyle}
					onPress={() => {
						Actions.notifications();
					}}
				>
					<Text style={styles.textStyle}>Notifications</Text>
				</TouchableOpacity>
			</View>
		);
	}
	return;
};

const Settings = ({ user }) => (
	<View style={{ backgroundColor: '#ADCBE0', height: '100%' }}>
		<Header headerTitle="Settings" />
		<TouchableOpacity
			style={styles.boxStyle}
			onPress={() => {
				Actions.personalInfo();
			}}
		>
			<Text style={styles.textStyle}>Personal Information</Text>
		</TouchableOpacity>
		{userIsCustomer(user)}
	</View>
);

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

export default Settings;
