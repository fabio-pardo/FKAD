import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
	changeOrderStatusActive,
	addOrderNumberToDriverArr,
	removeLastOrderNumFromDriverArr
} from '../../../actions';

import { Header, Button, Confirm } from '../../common';

class ViewDelivery extends Component {
	state = { showModal: false, visible: false };

	onActive() {
		const { firstName, lastName } = this.props.driver.name;
		const { email } = this.props.driver;
		const driver = this.props.driver;
		const order = this.props;

		this.props.changeOrderStatusActive({
			order,
			firstName,
			lastName,
			email,
			driver
		});
	}

	placeOrder() {
		let placeInside;
		let refrigeratorItems = '';
		let freezerItems = '';
		if (this.props.inside === 'true') {
			placeInside = 'Inside';
		} else {
			placeInside = 'Doorfront';
		}

		if (placeInside === 'Doorfront') {
			refrigeratorItems = 'N/A';
			freezerItems = 'N/A';
		} else {
			for (let i = 0; i < this.props.refrigerateItems.length; i++) {
				if (i === this.props.refrigerateItems.length - 1) {
					refrigeratorItems += this.props.refrigerateItems[i];
				} else {
					refrigeratorItems =
						refrigeratorItems +
						this.props.refrigerateItems[i] +
						', ';
				}
			}
			for (let i = 0; i < this.props.freezeItems.length; i++) {
				if (i === this.props.freezeItems.length - 1) {
					freezerItems += this.props.freezeItems[i];
				} else {
					freezerItems =
						freezerItems + this.props.freezeItems[i] + ',';
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
		this.props.removeLastOrderNumFromDriverArr(this.props.orderNumber);
		Actions.pop();
	}

	acceptDelivery(status) {
		const { orderNumber } = this.props;
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

	watchVideo(status) {
		if (status === 'complete') return <Button>Watch Video</Button>;
		return;
	}

	render() {
		return (
			<View style={{ backgroundColor: 'white' }}>
				<Header headerTitle="Deliveries" user="driver" />
				{console.log(this.props.driver)}
				<View style={styles.containerStyle}>
					<View style={{ marginTop: 5 }}>
						<Text style={styles.titleStyle}>Pick Up</Text>
						<Text style={styles.subtitleStyle}>
							From: {this.props.storeName}
						</Text>
						<Text style={styles.subtitleStyle}>
							{this.props.storeStreet}, {this.props.storeCity},{' '}
							{this.props.storeState}, {this.props.storeZipcode}
						</Text>
						<Text style={styles.subtitleStyle}>
							{this.props.day} at {this.props.time}
						</Text>
					</View>
					<View style={{ marginTop: 7 }}>
						<Text style={styles.titleStyle}>Drop-Off</Text>
						<Text style={styles.subtitleStyle}>
							{this.props.clientStreet}, {this.props.clientCity},{' '}
							{this.props.clientState}, {this.props.clientZipcode}
						</Text>
						<Text style={styles.subtitleStyle}>
							{this.props.day} at {this.props.time}
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
	addOrderNumberToDriverArr,
	removeLastOrderNumFromDriverArr
})(ViewDelivery);
