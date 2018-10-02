import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Header, Button } from '../common';
import OrderCard from './OrderCard';

class ViewOrder extends Component {
	placeOrder() {
		return (
			<View style={{ marginTop: 3 }}>
				<Text style={styles.subtitleStyle}>Place Order: Inside</Text>
				<Text style={styles.subtitleStyle}>
					Items in the Refrigerator:
				</Text>
				<Text style={styles.subtitleStyle}>Items in the Freezer:</Text>
			</View>
		);
	}
	render() {
		return (
			<View style={{ backgroundColor: 'white' }}>
				<Header headerTitle="My Orders" />
				<View style={styles.containerStyle}>
					<Text style={styles.statusStyle}>
						Order Status: {this.props.status}
					</Text>
					<View style={{ margin: 5 }}>
						<View style={{ marginTop: 5 }}>
							<Text style={styles.titleStyle}>
								Driver: Name LastName
							</Text>
						</View>
						<View style={{ marginTop: 5 }}>
							<Text style={styles.titleStyle}>Pick Up</Text>
							<View>
								<Text style={styles.subtitleStyle}>
									Store Name
								</Text>
								<Text style={styles.subtitleStyle}>
									Store Street, City, State, Zipcode
								</Text>
								<Text style={styles.subtitleStyle}>
									{this.props.day} {this.props.time}
								</Text>
							</View>
						</View>
						<View style={{ marginTop: 5 }}>
							<Text style={styles.titleStyle}>Drop-Off</Text>
							<View style={{ marginTop: 3 }}>
								<Text style={styles.subtitleStyle}>
									Owner Name
								</Text>
								<Text style={styles.subtitleStyle}>
									Home Street, City, State, Zipcode
								</Text>
								<Text style={styles.subtitleStyle}>
									{this.props.day} {this.props.time}
								</Text>
							</View>
							{this.placeOrder()}
						</View>
					</View>
					<View style={styles.buttonStyle}>
						<Button
							onPress={() => {
								Actions.pop();
							}}
						>
							Back
						</Button>
						<Button>Watch Video</Button>
					</View>
				</View>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		height: '100%',
		margin: 10
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
	statusStyle: {
		fontSize: 22,
		fontFamily: 'AppleGothic',
		color: '#3982B6'
	},
	buttonStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 30
	}
};

export default ViewOrder;
