import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { Header, Button } from '../common';

class PersonalInfo extends Component {
	isCustomer() {
		const { user, homeAddress } = this.props.user;
		if (user) {
			return (
				<Text style={styles.subtitleStyle}>
					Address: {homeAddress.street}, {homeAddress.city},{' '}
					{homeAddress.state}, {homeAddress.zipcode}
				</Text>
			);
		}
		return;
	}

	render() {
		const { driver, user } = this.props;
		return (
			<View>
				<Header headerTitle="Settings" />
				<View style={styles.containerStyle}>
					<Text style={styles.titleStyle}>Personal Information</Text>
					<View>
						<Text style={styles.subtitleStyle}>
							First Name:{' '}
							{driver.driver
								? driver.name.firstName
								: user.name.firstName}
						</Text>
						<Text style={styles.subtitleStyle}>
							Last Name:{' '}
							{driver.driver
								? driver.name.lastName
								: user.name.lastName}
						</Text>
					</View>
					<Text style={styles.subtitleStyle}>
						Email: {driver.driver ? driver.email : user.email}
					</Text>
					<Text style={styles.subtitleStyle}>
						Phone:{' '}
						{driver.driver ? driver.phoneNumber : user.phoneNumber}
					</Text>
					{this.isCustomer()}
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

const mapStateToProps = state => ({
	driver: state.driver,
	user: state.user
});

export default connect(mapStateToProps, {})(PersonalInfo);
