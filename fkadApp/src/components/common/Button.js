import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ children, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
			<Text style={styles.textStyle}>{children}</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		fontSize: 18,
		fontFamily: 'AppleGothic',
		lineHeight: 23,
		padding: 10,
		color: 'white'
	},

	buttonStyle: {
		height: 35,
		flexDirection: 'column',
		justifyContent: 'center',
		alignSelf: 'center',
		margin: 3,
		backgroundColor: '#3982B6',
		width: 150
	}
};

export { Button };
