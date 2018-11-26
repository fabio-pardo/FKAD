import React from 'react';
import { View, Text, TextInput } from 'react-native';

const InputLogIn = ({
	placeholder,
	label,
	value,
	onChangeText,
	secureTextEntry,
	autoCapitalize
}) => {
	const { inputStyle, labelStyle, containerStyle } = styles;

	return (
		<View
			style={{
				marginBottom: 5
			}}
		>
			<Text style={labelStyle}>{label}</Text>
			<View style={containerStyle}>
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
		</View>
	);
};

const styles = {
	inputStyle: {
		color: '#3982B6',
		fontFamily: 'AppleGothic',
		paddingRight: 5,
		paddingLeft: 5,
		paddingBottom: 5,
		paddingTop: 5,
		fontSize: 17,
		alignSelf: 'stretch'
	},
	labelStyle: {
		fontSize: 18,
		color: '#3982B6',
		fontFamily: 'AppleGothic'
	},
	containerStyle: {
		height: 35,
		backgroundColor: '#fff',
		borderRadius: 2,
		borderWidth: 1,
		borderColor: '#3982B6',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start'
	}
};

export { InputLogIn };
