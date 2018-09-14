import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { InputLogIn, Button } from './common';

class LogIn extends Component {
	render() {
		return (
			<View style={styles.containerStyle}>
				<Image
					style={styles.imageStyle}
					source={require('../images/logo.png')}
				/>
				<View style={{ marginTop: 20 }}>
					<InputLogIn label="Email" placeholder="user@email.com" />
					<InputLogIn
						label="Password"
						secureTextEntry
						placeholder="******"
					/>
					<Button>Log In</Button>
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

export default LogIn;

//<View style={styles.containerStyle}>
// <View>
// 	<Text style={styles.textStyle}>Log In</Text>
// 	<InputLogIn label='Email'/>
// 	<Text style={styles.textStyle}>Log In</Text>
//</View>
//</View>
