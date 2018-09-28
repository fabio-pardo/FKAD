import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CheckBox from 'react-native-check-box';

const CheckBoxInput = ({ isChecked, onClick = () => {}, label }) => {
	return (
		<View style={styles.containerStyle}>
			<Text style={styles.labelStyle}>{label}</Text>
			<CheckBox
				onClick={onClick}
				isChecked={isChecked}
				checkBoxColor="#3982B6"
			/>
		</View>
	);
};

const styles = {
	labelStyle: {
		fontSize: 18,
		fontFamily: 'AppleGothic',
		color: '#3982B6',
		marginRight: 3
	},
	containerStyle: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginRight: 5
	}
};

export { CheckBoxInput };
