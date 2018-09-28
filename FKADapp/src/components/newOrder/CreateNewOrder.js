import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { storeChanged, addressChanged } from '../../actions';
import { Header, Button, Input, InputThree } from '../common';

class CreateNewOrder extends Component {
	onStoreChange(text) {
		this.props.storeChanged(text);
		console.log('store name: ' + this.props.store);
	}

	// onAddressChange(type, text) {
	// 	console.log(type);
	// 	this.props.addressChanged({ type, text });
	// 	cosole.log('address: ' + this.props.address);
	// }

	render() {
		return (
			<View style={{ backgroundColor: 'white' }}>
				<Header headerTitle="New Order" />
				<View style={styles.containerStyle}>
					<Text style={styles.textStyle}>Pick Up From:</Text>
					<View style={{ marginTop: 15 }}>
						<Input
							label="Grocery Place Name"
							onChangeText={this.onStoreChange.bind(this)}
							value={this.props.store}
						/>
						<Input
							label="Street Address"
							// onChangeText={this.onAddressChange.bind(
							// 	this,
							// 	(type = 'street')
							// )}
							// value={this.props.street}
						/>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between'
							}}
						>
							<InputThree
								label="City"
								// onChangeText={this.onAddressChange.bind(
								// 	this,
								// 	(type = 'city')
								// )}
								// value={this.props.city}
							/>
							<InputThree
								label="State"
								// onChangeText={this.onAddressChange.bind(
								// 	this,
								// 	(type = 'state')
								// )}
								// value={this.props.state}
							/>
							<InputThree label="Zipcode" />
						</View>
						<Input label="Order Number" />
					</View>
					<View style={styles.buttonStyle}>
						<Button
							onPress={() => {
								Actions.timeAndPlace();
							}}
						>
							Next &#8827;&#8827;
						</Button>
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

const mapStateToProps = state => {
	return {
		store: state.newOrder.pickup.storeName,
		street: state.newOrder.pickup.address.street,
		city: state.newOrder.pickup.address.city,
		state: state.newOrder.pickup.address.state
	};
};

export default connect(mapStateToProps, { storeChanged, addressChanged })(
	CreateNewOrder
);
