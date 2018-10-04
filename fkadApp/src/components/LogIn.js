import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { InputLogIn, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';
import { Actions } from 'react-native-router-flux';

class LogIn extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
		console.log('email: ' + this.props.email);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
		console.log(
			'email: ' + this.props.email + '  password: ' + this.props.password
		);
	}

	render() {
		return (
			<View style={{ backgroundColor: 'white', height: '100%' }}>
				<View style={styles.containerStyle}>
					<Image
						style={styles.imageStyle}
						source={require('../images/logo.png')}
					/>
					<View style={{ marginTop: 20 }}>
						<InputLogIn
							label="Email"
							placeholder="user@email.com"
							onChangeText={this.onEmailChange.bind(this)}
							value={this.props.email}
						/>
						<InputLogIn
							label="Password"
							secureTextEntry
							placeholder="******"
							onChangeText={this.onPasswordChange.bind(this)}
							value={this.props.password}
						/>
						<Button
							onPress={() => {
								Actions.myOrders();
							}}
						>
							Log In
						</Button>
						<Button
							onPress={() => {
								Actions.signup();
							}}
						>
							Sign Up
						</Button>
					</View>
				</View>
			</View>
		);
	}
}

const styles = {
	imageStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignSelf: 'center'
	},
	containerStyle: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignSelf: 'center',
		width: '80%',
		height: '80%',
		marginTop: 40
	},
	textStyle: {
		fontSize: 24,
		fontFamily: 'AppleGothic',
		color: '#3982B6',
		alignSelf: 'center'
	}
};

const mapStateToProps = state => {
	return { email: state.auth.email, password: state.auth.password };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(
	LogIn
);
