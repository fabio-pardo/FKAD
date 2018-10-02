import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Input, InputTwo, InputThree, Button } from '../common';

class PersonalInfoEdit extends Component {
	render() {
		return (
			<View>
				<Header headerTitle="Settings" />
				<View style={styles.containerStyle}>
					<Text style={styles.titleStyle}>Personal Information</Text>
					<View style={styles.horizontalStyle}>
						<InputTwo label="First Name" />
						<InputTwo label="Last Name" />
					</View>
					<Input label="Email" />
					<Input label="Phone Number" />
					<Input label="Streen Address" />
					<View style={styles.horizontalStyle}>
						<InputThree label="City" />
						<InputThree label="State" />
						<InputThree label="Zipcode" />
					</View>
					<View style={{ marginTop: 20 }}>
						<View style={styles.horizontalStyle}>
							<Button
								onPress={() => {
									Actions.pop();
								}}
							>
								Save
							</Button>
							<Button
								onPress={() => {
									Actions.pop();
								}}
							>
								Cancel
							</Button>
						</View>
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
	horizontalStyle: {
		marginTop: 5,
		flexDirection: 'row',
		justifyContent: 'space-around'
	}
};
export default PersonalInfoEdit;
