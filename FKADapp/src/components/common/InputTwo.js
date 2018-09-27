import React from 'react';
import { View, Text, TextInput } from 'react-native';

const InputTwo = ({
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
			<View>
				<TextInput
					secureTextEntry={secureTextEntry}
					placeholder={placeholder}
					autoCorrect={false}
					style={inputStyle}
					value={value}
					onChangeText={onChangeText}
				/>
			</View>
		</View>
	);
};

const styles = {
	inputStyle: {
		color: '#fff',
		fontFamily: 'AppleGothic',
		paddingRight: 5,
		paddingLeft: 5,
		paddingBottom: 4,
		fontSize: 17,
		flex: 1,
		alignSelf: 'stretch',
		flexDirection: 'column',
		justifyContent: 'flex-end'
	},
	labelStyle: {
		color: '#3982B6',
		fontFamily: 'AppleGothic',
		fontSize: 18,
		marginTop: -25,
		flex: 1
	},
	containerStyle: {
		height: 35,
		backgroundColor: '#ADCBE0',
		borderRadius: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
		marginTop: 20,
		marginBottom: 10,
		width: '48%'
	}
};

export { InputTwo };

