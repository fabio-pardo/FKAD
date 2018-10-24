import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import {
	dropoffClientChanged,
	dropoffNameAndLastChanged,
	dropoffAddressChanged,
	dropoffAddressInfoChanged
} from '../../actions';

import {
	Header,
	Button,
	Input,
	InputThree,
	InputTwo,
	CheckBoxInput
} from '../common';

class DropOff extends Component {
	state = { error: false };

	isSameAddress() {
		const { address } = this.props.dropoff;
		if (!address.useAccountAddress) {
			return (
				<View style={{ marginTop: 10 }}>
					<Input
						label="Street Address"
						onChangeText={this.onAddressInfoChange.bind(
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
							onChangeText={this.onAddressInfoChange.bind(
								this,
								(type = 'city')
							)}
							value={address.city}
						/>
						<InputThree
							label="State"
							onChangeText={this.onAddressInfoChange.bind(
								this,
								(type = 'state')
							)}
							value={address.state}
						/>
						<InputThree
							label="Zipcode"
							onChangeText={this.onAddressInfoChange.bind(
								this,
								(type = 'zipcode')
							)}
							value={address.zipcode}
						/>
					</View>
				</View>
			);
		}
		return;
	}

	isSameOwner() {
		const { clientIsAccountOwner } = this.props.dropoff;
		if (!clientIsAccountOwner) {
			return (
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginTop: 10
					}}
				>
					<InputTwo
						label="Name"
						onChangeText={this.onNameAndLastChanged.bind(
							this,
							(type = 'clientName')
						)}
						value={clientIsAccountOwner.clientName}
					/>
					<InputTwo
						label="Last Name"
						onChangeText={this.onNameAndLastChanged.bind(
							this,
							(type = 'clientLastName')
						)}
						value={clientIsAccountOwner.clientLastName}
					/>
				</View>
			);
		}
		return;
	}

	onClientChange() {
		const { firstName, lastName } = this.props.user.name;
		this.props.dropoffClientChanged({ firstName, lastName });
	}

	onNameAndLastChanged(type, text) {
		this.props.dropoffNameAndLastChanged({ type, text });
	}

	onAddressChange() {
		const { street, city, state, zipcode } = this.props.user.homeAddress;
		this.props.dropoffAddressChanged({ street, city, state, zipcode });
	}

	onAddressInfoChange(type, text) {
		this.props.dropoffAddressInfoChanged({ type, text });
	}

	isComplete() {
		const {
			clientIsAccountOwner,
			clientName,
			clientLastName,
			address
		} = this.props.dropoff;
		if (
			(clientIsAccountOwner ||
				(!clientIsAccountOwner && clientName && clientLastName)) &&
			(address.useAccountAddress ||
				(!address.useAccountAddress &&
					address.street &&
					address.city &&
					address.state &&
					address.zipcode))
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
		return (
			<View style={{ backgroundColor: 'white' }}>
				<Header headerTitle="New Order" />
				<View style={styles.containerStyle}>
					<Text style={styles.textStyle}>Drop Off At:</Text>
					<View style={{ marginTop: 10 }}>
						<CheckBoxInput
							label="Same Name As Account Owner"
							isChecked={this.props.dropoff.clientIsAccountOwner}
							onClick={this.onClientChange.bind(this)}
						/>
						{this.isSameOwner()}
						<View style={{ marginTop: 5 }}>
							<CheckBoxInput
								label="Same Address As Account"
								isChecked={
									this.props.dropoff.address.useAccountAddress
								}
								onClick={this.onAddressChange.bind(this)}
							/>
							{this.isSameAddress()}
						</View>
					</View>
					{this.renderError()}
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
								if (this.isComplete()) {
									this.setState({ error: false });
									Actions.orderSummery();
								} else this.setState({ error: true });
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
	threeInputsStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	buttonStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around',
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
		dropoff: state.newOrder.dropoff,
		user: state.user
	};
};

export default connect(mapStateToProps, {
	dropoffClientChanged,
	dropoffNameAndLastChanged,
	dropoffAddressChanged,
	dropoffAddressInfoChanged
})(DropOff);
