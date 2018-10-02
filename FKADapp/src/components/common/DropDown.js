import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

const DropDown = ({ label, options, onSelect }) => {
	return (
		<View style={styles.containerStyle}>
			<ModalDropdown
				options={options}
				defaultValue={label}
				textStyle={styles.textStyle}
				dropdownTextStyle={styles.optionsStyle}
				dropdownTextHighlightStyle={styles.optionSelectedStyle}
				onSelect={onSelect}
			/>
			<Text style={styles.labelStyle}>&#8897;</Text>
		</View>
	);
};

const styles = {
	textStyle: {
		fontSize: 18,
		fontFamily: 'AppleGothic',
		color: '#3982B6',
		backgroundColor: '#88B4D3',
		padding: 3,
		fontWeight: 'bold',
		marginTop: 3
	},
	labelStyle: {
		fontSize: 18,
		fontFamily: 'AppleGothic',
		color: '#88B4D3',
		backgroundColor: '#3982B6',
		padding: 3,
		fontWeight: 'bold',
		marginTop: 3
	},
	optionsStyle: {
		fontSize: 18,
		fontFamily: 'AppleGothic',
		color: '#3982B6',
		padding: 3
	},
	optionSelectedStyle: {
		fontSize: 18,
		fontFamily: 'AppleGothic',
		color: '#3982B6',
		padding: 3,
		fontWeight: 'bold'
	},
	containerStyle: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginLeft: 5,
		marginRight: 5
	}
};

export { DropDown };
