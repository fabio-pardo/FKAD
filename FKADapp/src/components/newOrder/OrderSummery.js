import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Button } from '../common';

class OrderSummery extends Component {
	render() {
		return (
			<View style={{ backgroundColor: 'white' }}>
				<Header headerTitle="New Order" />
				<View style={styles.containerStyle}>
					<Text style={styles.titleStyle}>Order Summery:</Text>
					<View style={styles.rowStyle}>
						<Text style={styles.subtitleStyle}>Pick Up From:</Text>
						<TouchableOpacity>
							<Text style={styles.editStyle}>Edit</Text>
						</TouchableOpacity>
					</View>
					<View style={{ marginLeft: 10 }}>
						<Text style={styles.textStyle}>Place Name</Text>
						<Text style={styles.textStyle}>Full Address</Text>
					</View>
					<View style={styles.rowStyle}>
						<Text style={styles.subtitleStyle}>
							Time and Place:
						</Text>
						<TouchableOpacity>
							<Text style={styles.editStyle}>Edit</Text>
						</TouchableOpacity>
					</View>
					<View style={{ marginLeft: 10 }}>
						<View style={styles.dayAndTimeStyle}>
							<Text style={styles.textStyle}>Day:</Text>
							<Text style={styles.textStyle}>Time:</Text>
						</View>
						<Text style={styles.textStyle}>
							Place Order: Inside
						</Text>
						<Text style={styles.textStyle}>
							Items in the kitchen
						</Text>
						<View>
							<Text style={styles.textStyle}>
								Items in the Refrigerator:
							</Text>
							<View style={{ marginLeft: 15 }}>
								<Text style={styles.textStyle}>- Item 1</Text>
								<Text style={styles.textStyle}>- Item 2</Text>
							</View>
						</View>
						<View>
							<Text style={styles.textStyle}>
								Items in the Freezer:
							</Text>
							<View style={{ marginLeft: 15 }}>
								<Text style={styles.textStyle}>- Item 1</Text>
								<Text style={styles.textStyle}>- Item 2</Text>
							</View>
						</View>
					</View>
					<View style={styles.rowStyle}>
						<Text style={styles.subtitleStyle}>Deliver To:</Text>
						<TouchableOpacity>
							<Text style={styles.editStyle}>Edit</Text>
						</TouchableOpacity>
					</View>
					<View style={{ marginLeft: 10 }}>
						<Text style={styles.textStyle}>Name</Text>
						<Text style={styles.textStyle}>Full Address</Text>
					</View>
					<View style={styles.buttonStyle}>
						<Button
							onPress={() => {
								Actions.pop();
							}}
						>
							&#8826;&#8826; Back
						</Button>
						<Button
							onPress={() => {
								Actions.congratulations();
							}}
						>
							Set Order
						</Button>
					</View>
				</View>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		margin: 10,
		height: '100%'
	},
	titleStyle: {
		fontSize: 20,
		fontFamily: 'AppleGothic',
		color: '#3982B6'
	},
	subtitleStyle: {
		fontSize: 18,
		fontFamily: 'AppleGothic',
		color: '#3982B6'
	},
	textStyle: {
		fontSize: 15,
		fontFamily: 'AppleGothic',
		color: '#3982B6'
	},
	editStyle: {
		fontSize: 15,
		fontFamily: 'AppleGothic',
		color: '#3982B6',
		textDecorationLine: 'underline'
	},
	rowStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 5
	},
	dayAndTimeStyle: {
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	buttonStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 30
	}
};

export default OrderSummery;
