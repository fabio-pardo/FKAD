import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Header, Button, CheckBoxInput } from '../common';

class Notifications extends Component {
	render() {
		return (
			<View>
				<Header headerTitle="Settings" />
				<View style={styles.containerStyle}>
					<Text style={styles.titleStyle}>Notifications</Text>
					<View style={{ margin: 4 }}>
						<View style={styles.horizontalStyle}>
							<Text style={styles.subtitleStyle}>
								Notify me when driver goes inside the house
							</Text>
							<CheckBoxInput isChecked={false} />
						</View>
						<View style={styles.horizontalStyle}>
							<Text style={styles.subtitleStyle}>
								Notify me when driver leaves the house
							</Text>
							<CheckBoxInput isChecked={false} />
						</View>
						<View style={styles.horizontalStyle}>
							<Text style={styles.subtitleStyle}>
								Notify me when video is available to watch
							</Text>
							<CheckBoxInput isChecked={false} />
						</View>
					</View>
					<View style={{ marginTop: 20 }}>
						<Button
							onPress={() => {
								Actions.pop();
							}}
						>
							&#8826;&#8826; Back
						</Button>
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
	subtitleStyle: {
		color: '#3982B6',
		fontSize: 18,
		fontFamily: 'AppleGothic',
		margin: 4
	},
	horizontalStyle: {
		marginTop: 5,
		marginRight: 30,
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
};

export default Notifications;
