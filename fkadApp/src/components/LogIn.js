import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class LogIn extends Component {
	render() {
		return (
			<View style={styles.logoStyle}>
				<Text>IMAGE</Text>
			</View>
		);
	}
}

const styles = {
	logoStyle: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between'
	}
};

export default LogIn;
