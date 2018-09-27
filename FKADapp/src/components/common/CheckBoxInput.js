import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CheckBox from 'react-native-check-box';

class CheckBoxInput extends Component {
	state = { isChecked: false };
	render() {
		return (
			<View style={styles.containerStyle}>
				<Text style={styles.labelStyle}>{this.props.label}</Text>
				<CheckBox
					onClick={() => {
						this.setState({
							isChecked: !this.state.isChecked
						});
					}}
					isChecked={this.state.isChecked}
					checkBoxColor="#3982B6"
				/>
			</View>
		);
	}
}

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
		marginLeft: 5,
		marginRight: 5
	}
};

export { CheckBoxInput };
