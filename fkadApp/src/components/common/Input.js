import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({
	placeholder,
	label,
	value,
	onChangeText,
	secureTextEntry
}) => {
	const { inputStyle, labelStyle, containerStyle } = styles;
	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				autoCorrect={false}
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
				autoCapitalize="none"
			/>
		</View>
	);
};

const styles = {
	inputStyle: {
		color: '#fff',
		fontFamily: 'AppleGothic',
		paddingRight: 5,
		paddingLeft: 5,
		paddingBottom: 5,
		fontSize: 17,
		flex: 1,
		alignSelf: 'stretch'
	},
	labelStyle: {
		fontSize: 18,
		marginTop: -25,
		flex: 1,
		color: '#3982B6',
		fontFamily: 'AppleGothic'
	},
	containerStyle: {
		height: 35,
		backgroundColor: '#ADCBE0',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
		marginTop: 30,
		marginBottom: 10
	}
};

export { Input };
