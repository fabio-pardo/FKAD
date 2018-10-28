import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content } from 'native-base';
import { Header, Text } from '../common';
import { getOrders } from '../../actions';
import OrderCard from './OrderCard';

class MyOrdersList extends Component {
  
	showOrder() {
		const { active, pending, complete } = this.props.orders;
		//this.props.getOrders();
		const orders = active.concat(pending).concat(complete);
		return orders.map((order, index) => (
			<OrderCard key={index} order={order} user="customer" />
		));
	}

	render() {
		return (
			<Container>
				<Header headerTitle="My Orders" />
				<Content style={styles.containerStyle}>
					{this.showOrder()}
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
	textStyle: {
		fontSize: 20,
		fontFamily: 'AppleGothic',
		color: '#3982B6'
	}
};

//hardcode orders. Create action that calls all orders on the database
// const orders = [
// 	{
// 		id: 1,
// 		day: '01.20.2018',
// 		time: '12:00 pm',
// 		status: 'Complete'
// 	},
// 	{
// 		id: 2,
// 		day: '01.20.2018',
// 		time: '12:00 pm',
// 		status: 'Complete'
// 	}
// ];

const mapStateToProps = state => ({
	orders: state.orders
});

export default connect(mapStateToProps, {})(MyOrdersList);
