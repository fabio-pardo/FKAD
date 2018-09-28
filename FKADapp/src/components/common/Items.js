import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Item from './Item';

class Items extends Component {
	state = { add: false };
	addItem() {
		return (
			<Item
				value={this.props.value}
				onChangeInput={this.props.onChangeInput}
			/>
		);
	}

	render() {
		return (
			<View>
				<Item
					value={this.props.value}
					onChangeInput={this.props.onChangeInput}
				/>
				<TouchableOpacity
					onPress={() => {
						this.setState({ add: true });
					}}
				>
					<Text style={styles.addStyle}>Add</Text>
				</TouchableOpacity>
				{this.addItem.bind(this)}
			</View>
		);
	}
}

const styles = {
	addStyle: {
		fontSize: 10,
		fontFamily: 'AppleGothic',
		color: '#3982B6',
		textDecorationLine: 'underline'
	}
};

export { Items };
