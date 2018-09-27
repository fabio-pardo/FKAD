import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Header, Button, Input, InputThree } from '../common';

class CreateNewOrder extends Component {
	render() {
		return (
			<View style={{ backgroundColor: 'white' }}>
				<Header headerTitle="New Order" />
				<View style={styles.containerStyle}>
					<Text style={styles.textStyle}>Pick Up From:</Text>
					<View style={{ marginTop: 15 }}>
						<Input label="Grocery Place Name" />
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
						<Input label="Order Number" />
					</View>
					<View style={styles.buttonStyle}>
						<Button>Next  &#8827;&#8827;</Button>
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
	buttonStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 30
	}
};

export default CreateNewOrder;
