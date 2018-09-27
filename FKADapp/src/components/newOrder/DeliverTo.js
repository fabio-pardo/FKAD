import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Header, Button, Input, InputThree, InputTwo } from '../common';

class DeliverTo extends Component {
	render() {
		return (
			<View style={{ backgroundColor: 'white' }}>
				<Header headerTitle="New Order" />
				<View style={styles.containerStyle}>
					<Text style={styles.textStyle}>Deliver To:</Text>
					<View style={{ marginTop: 15 }}>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between'
							}}
						>
							<InputTwo label="Name" />
							<InputTwo label="Last Name" />
						</View>
						<Input label="Street Address" />
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between'
							}}
						>
							<InputThree label="City" />
							<InputThree label="State" />
							<InputThree label="Zipcode" />
						</View>
					</View>
					<View style={styles.buttonStyle}>
						<Button
							onPress={() => {
								Actions.pop();
							}}
						>
							&#8826;&#8826; Back
						</Button>
						<Button>Next &#8827;&#8827;</Button>
					</View>
				</View>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		marginTop: 20,
		margin: 10,
		height: '100%'
	},
	textStyle: {
		fontSize: 20,
		fontFamily: 'AppleGothic',
		color: '#3982B6'
	},
	threeInputsStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	buttonStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 30
	}
};

export default DeliverTo;
