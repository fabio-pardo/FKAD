import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import {
	onUserNameChanged,
	onDriverNameChanged,
	onUserEmailPhoneChanged,
	onDriverEmailPhoneChanged,
	onUserAddressChanged,
	onDriverAddressChanged,
	onCancelUsersChanges,
	onCancelDriverChanges,
	onSaveUserChages,
	onSaveDriverChanges
} from '../../actions';
import { Header, Input, InputTwo, InputThree, Button } from '../common';

class PersonalInfoEdit extends Component {
	onNameChange(type, text) {
		if (this.props.user.user) this.props.onUserNameChanged({ type, text });
		else if (this.props.driver.driver) {
			this.props.onDriverNameChanged({ type, text });
		}
	}

	onEmailPhoneChange(type, text) {
		if (this.props.user.user) {
			this.props.onUserEmailPhoneChanged({ type, text });
		} else if (this.props.driver.driver) {
			this.props.onDriverEmailPhoneChanged({ type, text });
		}
	}

	onAddressChange(type, text) {
		this.props.onUserAddressChanged({ type, text });
	}

	onCancel() {
		if (this.props.user.user) {
			this.props.onCancelUsersChanges(this.props.user.email);
		} else if (this.props.driver.driver) {
			this.props.onCancelDriverChanges(this.props.driver.email);
		}
		Actions.pop();
	}

	onSave() {
		if (this.props.user.user) {
			this.props.onSaveUserChages(this.props.user);
		} else if (this.props.driver.driver) {
			this.props.onSaveDriverChanges(this.props.driver);
		}
		Actions.pop();
	}

	isUser() {
		const { user, homeAddress } = this.props.user;
		if (user) {
			return (
				<View>
					<Input
						label="Streen Address"
						onChangeText={this.onAddressChange.bind(
							this,
							(type = 'street')
						)}
						value={homeAddress.street}
					/>
					<View style={styles.horizontalStyle}>
						<InputThree
							label="City"
							onChangeText={this.onAddressChange.bind(
								this,
								(type = 'city')
							)}
							value={homeAddress.city}
						/>
						<InputThree
							label="State"
							onChangeText={this.onAddressChange.bind(
								this,
								(type = 'state')
							)}
							value={homeAddress.state}
						/>
						<InputThree
							label="Zipcode"
							onChangeText={this.onAddressChange.bind(
								this,
								(type = 'zipcode')
							)}
							value={homeAddress.zipcode}
						/>
					</View>
				</View>
			);
		}
		return;
	}
	render() {
		const { driver, user } = this.props;
		return (
			<Container>
				<Header headerTitle="Settings" />
				<Content style={styles.containerStyle}>
					<Text style={styles.titleStyle}>Personal Information</Text>
					<View style={styles.horizontalStyle}>
						<InputTwo
							label="First Name"
							onChangeText={this.onNameChange.bind(
								this,
								(type = 'firstName')
							)}
							value={
								driver.driver
									? driver.name.firstName
									: user.name.firstName
							}
						/>
						<InputTwo
							label="Last Name"
							onChangeText={this.onNameChange.bind(
								this,
								(type = 'lastName')
							)}
							value={
								driver.driver
									? driver.name.lastName
									: user.name.lastName
							}
						/>
					</View>
					<Input
						label="Email"
						onChangeText={this.onEmailPhoneChange.bind(
							this,
							(type = 'email')
						)}
						value={driver.driver ? driver.email : user.email}
					/>
					<Input
						label="Phone Number"
						onChangeText={this.onEmailPhoneChange.bind(
							this,
							(type = 'phoneNumber')
						)}
						value={
							driver.driver
								? driver.phoneNumber
								: user.phoneNumber
						}
					/>
					{this.isUser()}
					<View style={{ marginTop: 20 }}>
						<View style={styles.horizontalStyle}>
							<Button onPress={this.onSave.bind(this)}>
								Save
							</Button>
							<Button onPress={this.onCancel.bind(this)}>
								Cancel
							</Button>
						</View>
					</View>
				</Content>
			</Container>
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

const mapStateToProps = state => ({
	driver: state.driver,
	user: state.user
});
export default connect(mapStateToProps, {
	onUserNameChanged,
	onDriverNameChanged,
	onUserEmailPhoneChanged,
	onDriverEmailPhoneChanged,
	onUserAddressChanged,
	onDriverAddressChanged,
	onCancelUsersChanges,
	onCancelDriverChanges,
	onSaveUserChages,
	onSaveDriverChanges
})(PersonalInfoEdit);
