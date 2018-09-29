import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import {
	storeChanged,
	addressChanged,
	orderNumberChanged
} from '../../actions';
import { Header, Button, Input, InputThree } from '../common';

class CreateNewOrder extends Component {
	onStoreChange(text) {
		this.props.storeChanged(text);
	}

	onAddressChange(type, text) {
		this.props.addressChanged({ type, text });
	}

	onOrderNumberChange(text) {
		this.props.orderNumberChanged(text);
	}

	render() {
		const { storeName, address, orderNumber } = this.props.pickup;

		return (
			<View style={{ backgroundColor: 'white' }}>
				<Header headerTitle="New Order" />
				<View style={styles.containerStyle}>
					<Text style={styles.textStyle}>Pick Up From:</Text>
					<View style={{ marginTop: 15 }}>
						<Input
							label="Grocery Place Name"
							onChangeText={this.onStoreChange.bind(this)}
							value={storeName}
						/>
						<Input
							label="Street Address"
							onChangeText={this.onAddressChange.bind(
								this,
								(type = 'street')
							)}
							value={address.street}
						/>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between'
							}}
						>
							<InputThree
								label="City"
								onChangeText={this.onAddressChange.bind(
									this,
									(type = 'city')
								)}
								value={address.city}
							/>
							<InputThree
								label="State"
								onChangeText={this.onAddressChange.bind(
									this,
									(type = 'state')
								)}
								value={address.state}
							/>
							<InputThree
								label="Zipcode"
								onChangeText={this.onAddressChange.bind(
									this,
									(type = 'zipcode')
								)}
								value={address.zipcode}
							/>
						</View>
						<Input
							label="Order Number"
							onChangeText={this.onOrderNumberChange.bind(this)}
							value={orderNumber}
						/>
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
		pickup: state.newOrder.pickup
	};
};

export default connect(mapStateToProps, {
	storeChanged,
	addressChanged,
	orderNumberChanged
})(CreateNewOrder);
