import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { Header, Button } from '../common';

class OrderSummery extends Component {
	isInside() {
		const { place } = this.props.timeAndPlace;
		if (place.inside && !place.kitchen) {
			return (
				<Text style={styles.textStyle}>Items in the kitchen: none</Text>
			);
		} else if (place.inside && place.kitchen) {
			return (
				<View>
					<Text style={styles.textStyle}>Items in the Kitchen</Text>
					{this.inRefrigerator()}
					{this.inFreezer()}
				</View>
			);
		}
		return;
	}

	inRefrigerator() {
		const { place } = this.props.timeAndPlace;
		if (place.refrigerate.state) {
			return (
				<View>
					<Text style={styles.textStyle}>
						Items in the Refrigerator:
					</Text>
					<View style={{ marginLeft: 15 }}>
						<Text style={styles.textStyle}>- Item 1</Text>
						<Text style={styles.textStyle}>- Item 2</Text>
					</View>
				</View>
			);
		}
		return (
			<Text style={styles.textStyle}>
				Items in the Refrigerator: none
			</Text>
		);
	}

	inFreezer() {
		const { place } = this.props.timeAndPlace;
		if (place.freeze.state) {
			return (
				<View>
					<Text style={styles.textStyle}>
						Items in the Refrigerator:
					</Text>
					<View style={{ marginLeft: 15 }}>
						<Text style={styles.textStyle}>- Item 1</Text>
						<Text style={styles.textStyle}>- Item 2</Text>
					</View>
				</View>
			);
		}
		return <Text style={styles.textStyle}>Items in the Freezer: none</Text>;
	}

	render() {
		const { pickup, timeAndPlace, dropoff } = this.props;
		return (
			<View style={{ backgroundColor: 'white' }}>
				<Header headerTitle="New Order" />
				<View style={styles.containerStyle}>
					<Text style={styles.titleStyle}>Order Summery:</Text>
					<View style={styles.rowStyle}>
						<Text style={styles.subtitleStyle}>Pick Up From:</Text>
						<TouchableOpacity
							onPress={() => {
								Actions.createNewOrder();
							}}
						>
							<Text style={styles.editStyle}>Edit</Text>
						</TouchableOpacity>
					</View>
					<View style={{ marginLeft: 10 }}>
						<Text style={styles.textStyle}>{pickup.storeName}</Text>
						<Text style={styles.textStyle}>
							{pickup.address.street},
						</Text>
						<Text style={styles.textStyle}>
							{pickup.address.city}, {pickup.address.state},
							{pickup.address.zipcode}
						</Text>
						<Text style={styles.textStyle}>
							Order Number: {pickup.orderNumber}
						</Text>
					</View>
					<View style={styles.rowStyle}>
						<Text style={styles.subtitleStyle}>
							Time and Place:
						</Text>
						<TouchableOpacity
							onPress={() => {
								Actions.timeAndPlace();
							}}
						>
							<Text style={styles.editStyle}>Edit</Text>
						</TouchableOpacity>
					</View>
					<View style={{ marginLeft: 10 }}>
						<View style={styles.dayAndTimeStyle}>
							<View style={{ marginRight: 10 }}>
								<Text style={styles.textStyle}>
									Day:{' '}
									{timeAndPlace.day.tomorrow
										? 'Tomorrow'
										: 'Today'}
								</Text>
							</View>
							<Text style={styles.textStyle}>
								Time: {timeAndPlace.time}
							</Text>
						</View>
						<Text style={styles.textStyle}>
							Place Order:{' '}
							{timeAndPlace.place.doorway ? 'Doorway' : 'Inside'}
						</Text>
						{this.isInside()}
					</View>
					<View style={styles.rowStyle}>
						<Text style={styles.subtitleStyle}>Deliver To:</Text>
						<TouchableOpacity
							onPress={() => {
								Actions.pop();
							}}
						>
							<Text style={styles.editStyle}>Edit</Text>
						</TouchableOpacity>
					</View>
					<View style={{ marginLeft: 10 }}>
						<Text style={styles.textStyle}>
							{dropoff.clientName} {dropoff.clientLastName}
						</Text>
						<Text style={styles.textStyle}>
							{dropoff.address.street},
						</Text>
						<Text style={styles.textStyle}>
							{dropoff.address.city}, {dropoff.address.state}, 
							{dropoff.address.zipcode}
						</Text>
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

const mapStateToProps = state => {
	return {
		pickup: state.newOrder.pickup,
		timeAndPlace: state.newOrder.timeAndPlace,
		dropoff: state.newOrder.dropoff
	};
};

export default connect(mapStateToProps, {})(OrderSummery);
