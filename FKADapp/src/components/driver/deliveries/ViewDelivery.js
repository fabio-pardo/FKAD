import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Header, Button } from '../../common';

class ViewDelivery extends Component {
	placeOrder() {
		return (
			<View style={{ marginTop: 7 }}>
				<Text style={styles.subtitleStyle}>Place Order: Inside</Text>
				<Text style={styles.subtitleStyle}>
					Items in the Refrigerator:
				</Text>
				<Text style={styles.subtitleStyle}>Items in the Freezer:</Text>
			</View>
		);
	}

	watchVideo(status) {
		if (status === 'Complete') return <Button>Watch Video</Button>;
		return;
	}

	acceptDelivery(status) {
		if (status === 'Pending') return <Button onPress={() => { this.accept(); }}>Accept Delivery</Button>;
		return;
	}

	accept() {
		console.log('Delivery was accepted.')
	}

	render() {
		return (
			<View style={{ backgroundColor: 'white' }}>
				<Header headerTitle="Deliveries" user='driver' />
				<View style={styles.containerStyle}>
					<View style={{ marginTop: 5 }}>
						<Text style={styles.titleStyle}>Pick Up</Text>
						<Text style={styles.subtitleStyle}>Store Name</Text>
						<Text style={styles.subtitleStyle}>
							Store Street, City, State, Zipcode
						</Text>
						<Text style={styles.subtitleStyle}>
							{this.props.day} at {this.props.time}
						</Text>
					</View>
					<View style={{ marginTop: 7 }}>
						<Text style={styles.titleStyle}>Drop-Off</Text>
						<Text style={styles.subtitleStyle}>
							Home Street, City, State, Zipcode
						</Text>
						<Text style={styles.subtitleStyle}>
							{this.props.day} {this.props.time}
						</Text>
						{this.placeOrder()}
					</View>
					<View style={styles.buttonStyle}>
						<Button
							onPress={() => {
								Actions.pop();
							}}
						>
							Back
						</Button>
						{this.watchVideo(this.props.status)}
						{this.acceptDelivery(this.props.status)}
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

// const mapStateToProps = state => {
// 	return {
// 		pending:
// 	}
// }
export default ViewDelivery;
