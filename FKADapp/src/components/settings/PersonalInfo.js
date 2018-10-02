import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Header, Button } from '../common';

class PersonalInfo extends Component {
	render() {
		return (
			<View>
				<Header headerTitle="Settings" />
				<View style={styles.containerStyle}>
					<Text style={styles.titleStyle}>Personal Information</Text>
					<View>
						<Text style={styles.subtitleStyle}>First Name:</Text>
						<Text style={styles.subtitleStyle}>Last Name:</Text>
					</View>
					<Text style={styles.subtitleStyle}>
						Email: account@mail.com
					</Text>
					<Text style={styles.subtitleStyle}>
						Phone: 123-456-7890
					</Text>
					<Text style={styles.subtitleStyle}>
						Address: 123 Street, City, St, 123456
					</Text>
					<View style={styles.buttonStyle}>
						<Button
							onPress={() => {
								Actions.pop();
							}}
						>
							&#8826;&#8826; Back
						</Button>
						<Button
							onPress={() => {
								Actions.personalInfoEdit();
							}}
						>
							Edit
						</Button>
					</View>
				</View>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		backgroundColor: 'white',
		height: '100%',
		padding: 10
	},
	titleStyle: {
		color: '#3982B6',
		fontSize: 20,
		fontFamily: 'AppleGothic',
		marginBottom: 5
	},
	subtitleStyle: {
		color: '#3982B6',
		fontSize: 18,
		fontFamily: 'AppleGothic',
		margin: 4
	},
	buttonStyle: {
		marginTop: 30,
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	}
};

export default PersonalInfo;
