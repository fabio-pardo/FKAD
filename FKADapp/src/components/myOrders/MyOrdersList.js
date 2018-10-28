import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { Header, Text } from '../common';
import { getOrders } from '../../actions';
import OrderCard from './OrderCard';

class MyOrdersList extends Component {
	showOrder(orders) {
		//this.props.getOrders();
		console.log(this.props.orders);
		return orders.map(order => (
			<OrderCard key={order.id} order={order} user="customer" />
		));
	}

	render() {
		return (
			<View>
				<Header headerTitle="My Orders" />
				<View style={styles.containerStyle}>
					{this.showOrder(orders)}
				</View>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		height: '100%',
		backgroundColor: 'white'
	},
	textStyle: {
		fontSize: 20,
		fontFamily: 'AppleGothic',
		color: '#3982B6'
	}
};

//hardcode orders. Create action that calls all orders on the database
const orders = [
	{
		id: 1,
		day: '01.20.2018',
		time: '12:00 pm',
		status: 'Complete'
	},
	{
		id: 2,
		day: '01.20.2018',
		time: '12:00 pm',
		status: 'Complete'
	}
];

const mapStateToProps = state => ({
	orders: state.orders
});

export default connect(mapStateToProps, { getOrders })(MyOrdersList);
