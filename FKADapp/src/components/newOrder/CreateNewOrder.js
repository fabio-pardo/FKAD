import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import {
	storeChanged,
	addressChanged,
	orderNumberChanged
} from '../../actions';
import { Header, Button, Input, InputThree } from '../common';

class CreateNewOrder extends Component {
	state = { error: false };
	onStoreChange(text) {
		this.props.storeChanged(text);
	}

	onAddressChange(type, text) {
		this.props.addressChanged({ type, text });
	}

	onOrderNumberChange(text) {
		this.props.orderNumberChanged(text);
	}

	isComplete() {
		const { storeName, address, orderNumber } = this.props.pickup;
		if (
			storeName &&
			orderNumber &&
			address.street &&
			address.city &&
			address.state &&
			address.zipcode
		)
			return true;
		return false;
	}

	renderError() {
		if (this.state.error) {
			return (
				<Text style={styles.errorStyle}>
					All fields must be completed
				</Text>
			);
		}
		return;
	}

	render() {
		const { storeName, address, orderNumber } = this.props.pickup;

		return (
			<Container style={{ backgroundColor: 'white' }}>
				<Header headerTitle="New Order" />
				<Content style={styles.containerStyle}>
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
						{this.renderError()}
						<Button
							onPress={() => {
								if (this.isComplete()) {
									this.setState({ error: false });
									Actions.timeAndPlace();
								} else this.setState({ error: true });
							}}
						>
							Next &#8827;&#8827;
						</Button>
					</View>
				</Content>
			</Container>
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
		flexDirection: 'column',
		justifyContent: 'flex-end',
		marginTop: 30
	},
	errorStyle: {
		fontSize: 18,
		fontFamily: 'AppleGothic',
		color: '#B64F39',
		textAlign: 'center'
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
