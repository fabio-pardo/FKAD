import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
	changeOrderStatusActive,
	changeOrderStatusComplete,
	addOrderNumberToDriverArr,
	removeLastOrderNumFromDriverArr,
	atTheDoorChange
} from '../../../actions';

import { Header, Button, Confirm } from '../../common';

class ViewDelivery extends Component {
	state = { showModal: false, visible: false };

	onActive() {
		const { firstName, lastName } = this.props.driver.name;
		const { email } = this.props.driver;
		const driver = this.props.driver;
		const order = this.props.order;

		this.props.changeOrderStatusActive({
			order,
			firstName,
			lastName,
			email,
			driver
		});
	}

	placeOrder() {
		const { order } = this.props;
		let placeInside;
		let refrigeratorItems = '';
		let freezerItems = '';
		if (order.inside === 'true') {
			placeInside = 'Inside';
		} else {
			placeInside = 'Front Door';
		}

		if (placeInside === 'Front Door') {
			refrigeratorItems = 'N/A';
			freezerItems = 'N/A';
		} else {
			for (let i = 0; i < order.refrigerateItems.length; i++) {
				if (i === order.refrigerateItems.length - 1) {
					refrigeratorItems += order.refrigerateItems[i];
				} else {
					refrigeratorItems =
						refrigeratorItems + order.refrigerateItems[i] + ', ';
				}
			}
			for (let i = 0; i < order.freezeItems.length; i++) {
				if (i === order.freezeItems.length - 1) {
					freezerItems += order.freezeItems[i];
				} else {
					freezerItems = freezerItems + order.freezeItems[i] + ',';
				}
			}
		}

		return (
			<View style={{ marginTop: 7 }}>
				<Text style={styles.subtitleStyle}>
					Place Order: {placeInside}
				</Text>
				<Text style={styles.subtitleStyle}>
					Items in the Refrigerator: {refrigeratorItems}
				</Text>
				<Text style={styles.subtitleStyle}>
					Items in the Freezer: {freezerItems}
				</Text>
			</View>
		);
	}

	onOrderAccept() {
		this.setState({ showModal: false });
		this.onActive();
		Actions.deliveries();
	}

	onOrderDecline() {
		this.setState({ showModal: false });
		this.props.removeLastOrderNumFromDriverArr(
			this.props.order.orderNumber
		);
		Actions.pop();
	}

	acceptDelivery(status) {
		const { orderNumber } = this.props.order;
		if (status === 'pending') {
			return (
				<Button
					onPress={() => {
						this.setState({ showModal: true });
						this.props.addOrderNumberToDriverArr(orderNumber);
					}}
				>
					Accept Delivery
				</Button>
			);
		}
		return;
	}
  
	atTheDoor(status, atDoor, activeID, lockBox, fingerPrintID, orderID) {
		if (status === 'active' && !atDoor) {
			return (
				<Button
					onPress={() => {
						this.props.atTheDoorChange({
							activeID,
							fingerPrintID,
							lockBox,
							orderID
						});
					}}
				>
					Arrive to Home
				</Button>
			);
		}
		if (status === 'active' && atDoor) {
			return (
				<Button
					onPress={() => {
						this.props.changeOrderStatusComplete(this.props.order);
					}}
				>
					Finish Order
				</Button>
			);
		}
		return;
	}
  
	watchVideo(status) {
		if (status === 'complete') return <Button>Watch Video</Button>;
		return;
	}

	render() {
		const { order, driver } = this.props;
		return (
			<View style={{ backgroundColor: 'white' }}>
				<Header headerTitle="Deliveries" user="driver" />
				<View style={styles.containerStyle}>
					<View style={{ marginTop: 5 }}>
						<Text style={styles.titleStyle}>Pick Up</Text>
						<Text style={styles.subtitleStyle}>
							From: {order.storeName}
						</Text>
						<Text style={styles.subtitleStyle}>
							{order.storeStreet}, {order.storeCity},{' '}
							{order.storeState}, {order.storeZipcode}
						</Text>
						<Text style={styles.subtitleStyle}>
							{order.day} at {order.time}
						</Text>
					</View>
					<View style={{ marginTop: 7 }}>
						<Text style={styles.titleStyle}>Drop-Off</Text>
						<Text style={styles.subtitleStyle}>
							{order.clientStreet}, {order.clientCity},{' '}
							{order.clientState}, {order.clientZipcode}
						</Text>
						<Text style={styles.subtitleStyle}>
							{order.day} at {order.time}
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
						{this.atTheDoor(
							order.status,
							order.atDoor,
							this.props.activeID,
							order.lockBox,
							driver.fingerPrintID,
							order.orderNumber
						)}
						{this.watchVideo(order.status)}
						{this.acceptDelivery(order.status)}
						<Confirm
							visible={this.state.showModal}
							onAccept={this.onOrderAccept.bind(this)}
							onDecline={this.onOrderDecline.bind(this)}
						>
							Are You Sure You'd Like To Accept This Job?
						</Confirm>
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

const mapStateToProps = state => ({
	pending: state.orders.pending,
	orders: state.orders,
	driver: state.driver
});

export default connect(mapStateToProps, {
	changeOrderStatusActive,
	changeOrderStatusComplete,
	addOrderNumberToDriverArr,
	removeLastOrderNumFromDriverArr,
	atTheDoorChange
})(ViewDelivery);
