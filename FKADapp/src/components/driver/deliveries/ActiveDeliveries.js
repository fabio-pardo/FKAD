import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';

import { Header } from '../../common';

import OrderCard from '../../myOrders/OrderCard';

class ActiveDeliveries extends Component {
	showDeliveries(deliveries) {
		if (deliveries.length === 0) {
			return (
				<View style={styles.containTextStyle}>
					<Text style={styles.textStyle}>
						No active deliveries at the moment
					</Text>
				</View>
			);
		}
		return deliveries.map((delivery, index) => (
			<OrderCard key={index} order={delivery} user="driver" />
		));
	}

	render() {
		return (
			<Container>
				<Header headerTitle="Active Deliveries" user="driver" />
				<Content style={styles.containerStyle}>
					{this.showDeliveries(this.props.active)}
				</Content>
			</Container>
		);
	}
}

const styles = {
	containerStyle: {
		height: '100%',
		backgroundColor: 'white'
	},
	containTextStyle: {
		flex: 1,
		margin: 10,
		marginTop: 30,
		justifyContent: 'center'
	},
	textStyle: {
		color: '#3982B6',
		fontSize: 16,
		fontFamily: 'AppleGothic',
		textAlign: 'center'
	}
};

const mapStateToProps = state => ({
	active: state.orders.active
});

export default connect(mapStateToProps, {})(ActiveDeliveries);
