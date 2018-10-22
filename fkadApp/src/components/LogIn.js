import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { InputLogIn, Button } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LogIn extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onUserLogin() {
		this.props.loginUser(this.props.email, this.props.password);
	}

	onErrorChange() {
		if (this.props.error) {
			return (
				<Text style={styles.errorStyle}>Invalid Email or Password</Text>
			);
		} else if (this.props.passwordError) {
			return <Text style={styles.errorStyle}>Invalid Password</Text>;
		}
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
						{this.onErrorChange()}
						<Button
							onPress={() => {
								this.onUserLogin();
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
		marginTop: 50
	},
	textStyle: {
		fontSize: 24,
		fontFamily: 'AppleGothic',
		color: '#3982B6',
		alignSelf: 'center'
	},
	errorStyle: {
		fontSize: 18,
		fontFamily: 'AppleGothic',
		color: '#B64F39',
		textAlign: 'center'
	}
};

const mapStateToProps = state => ({
	email: state.auth.email,
	password: state.auth.password,
	passwordError: state.auth.passwordError,
	error: state.auth.error,
	user: state.user
});

export default connect(mapStateToProps, {
	emailChanged,
	passwordChanged,
	loginUser
})(LogIn);
