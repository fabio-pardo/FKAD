import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import {
	Header,
	Button,
	Input,
	InputThree,
	InputTwo,
	CheckBoxInput
} from '../common';

class DeliverTo extends Component {
	state = { isCheckedAccountOwner: false, isCheckedSameAddress: false };

	isSameAddress() {
		if (!this.state.isCheckedSameAddress) {
			return (
				<View style={{ marginTop: 10 }}>
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
			);
		}
		return;
	}

	isSameOwner() {
		if (!this.state.isCheckedAccountOwner) {
			return (
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginTop: 10
					}}
				>
					<InputTwo label="Name" />
					<InputTwo label="Last Name" />
				</View>
			);
		}
		return;
	}

	render() {
		return (
			<View style={{ backgroundColor: 'white' }}>
				<Header headerTitle="New Order" />
				<View style={styles.containerStyle}>
					<Text style={styles.textStyle}>Deliver To:</Text>
					<View style={{ marginTop: 10 }}>
						<CheckBoxInput
							label="Same Name As Account Owner"
							isChecked={this.state.isCheckedAccountOwner}
							onClick={() => {
								this.setState({
									isCheckedAccountOwner: !this.state
										.isCheckedAccountOwner
								});
							}}
						/>
						{this.isSameOwner()}
						<View style={{ marginTop: 5 }}>
							<CheckBoxInput
								label="Same Address As Account"
								isChecked={this.state.isCheckedSameAddress}
								onClick={() => {
									this.setState({
										isCheckedSameAddress: !this.state
											.isCheckedSameAddress
									});
								}}
							/>
							{this.isSameAddress()}
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
						<Button
							onPress={() => {
								Actions.orderSummery();
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
	}
};

export default DeliverTo;
