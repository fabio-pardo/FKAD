import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Input, InputTwo, InputThree, Button } from '../common';

class KeyBoxEdit extends Component {
	render() {
		return (
			<View>
				<Header headerTitle="Settings" />
				<View style={styles.containerStyle}>
					<Text style={styles.titleStyle}>Key-Box</Text>
					<View style={{ margin: 4 }}>
						<Input label="ID" />
						<Input label="Wi-Fi Name" />
						<Input label="Wi-Fi Password" />
					</View>
					<View style={{ marginTop: 20 }}>
						<View style={styles.horizontalStyle}>
							<Button
								onPress={() => {
									Actions.pop();
								}}
							>
								&#8826;&#8826; Cancel
							</Button>
							<Button
								onPress={() => {
									Actions.pop();
								}}
							>
								Save
							</Button>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		backgroundColor: 'white',
		height: '100%',
		padding: 10
	},
	titleStyle: {
		color: '#3982B6',
		fontSize: 20,
		fontFamily: 'AppleGothic',
		marginBottom: 5
	},
	horizontalStyle: {
		marginTop: 5,
		flexDirection: 'row',
		justifyContent: 'space-around'
	}
};
export default KeyBoxEdit;
