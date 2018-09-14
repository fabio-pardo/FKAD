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
			/>
		</View>
	);
};

const styles = {
	inputStyle: {
		color: '#fff',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 17,
		lineHeight: 23,
		flex: 2
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: -1,
		margin: -22,
		flex: 1
	},
	containerStyle: {
		height: 30,
		width: 100,
		backgroundColor: '#ADCBE0',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 3
	}
};

export { Input };
