import React from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';

const Item = ({ value, onChangeInput }) => {
	return (
		<View style={styles.constainerStyle}>
			<View style={styles.inputContainerStyle}>
				<TextInput
					placeholder="Item Name"
					style={styles.inputStyle}
					value={value}
					onChangeText={onChangeInput}
				/>
			</View>
			<TouchableOpacity style={styles.touchContainerStyle}>
				<Text style={styles.touchStyle}> - </Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = {
	constainerStyle: {
		margin: 3,
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	inputContainerStyle: {
		backgroundColor: '#ADCBE0',
		width: '40%'
	},
	inputStyle: {
		fontSize: 17,
		color: '#3982B6',
		fontFamily: 'AppleGothic',
		paddingRight: 5,
		paddingLeft: 5,
		padding: -5,
		alignSelf: 'stretch',
		justifyContent: 'flex-end'
	},
	touchContainerStyle: {
		margin: 3,
		marginLeft: 5,
		backgroundColor: '#3982B6',
		width: 25,
		height: 25,
		borderRadius: 50,
		alignSelf: 'center'
	},
	touchStyle: {
		fontSize: 17,
		color: 'white',
		alignSelf: 'center'
	}
};

export default Item;
